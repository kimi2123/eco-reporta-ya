import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";


const Map = (props) => {
  const { token, value, onChange, draggable } = props || {};

  const mapContainer = useRef(null);
  const map = useRef(null);
  useEffect(() => {
    if (!token || !mapContainer.current) return;

    mapboxgl.accessToken = token;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      projection: "globe",
      zoom: value ? 9 : 3,
      center: value ? [value.lng, value.lat] : [-78.455, -1.831], // Ecuador approx
      pitch: 45,
    });

    const isDraggable = draggable ?? true;

    const marker = new mapboxgl.Marker({ draggable: isDraggable })
      .setLngLat(value ? [value.lng, value.lat] : [-78.455, -1.831])
      .addTo(map.current);

    if (isDraggable) {
      marker.on("dragend", () => {
        const lngLat = marker.getLngLat();
        onChange && onChange({ lng: lngLat.lng, lat: lngLat.lat });
      });
    }

    map.current.addControl(new mapboxgl.NavigationControl({ visualizePitch: true }), "top-right");

    map.current.on("style.load", () => {
      map.current && map.current.setFog({
        color: "rgb(255,255,255)",
        "high-color": "rgb(200,200,225)",
        "horizon-blend": 0.2,
      });
    });

    return () => map.current && map.current.remove();
  }, [token]);

  if (!token) {
    return (
      <div className="w-full h-64 rounded-lg border flex items-center justify-center text-sm text-muted-foreground">
        Ingresa tu token público de Mapbox para usar el mapa.
      </div>
    );
  }

  return <div ref={mapContainer} className="w-full h-64 rounded-lg" />;
};

export default Map;
