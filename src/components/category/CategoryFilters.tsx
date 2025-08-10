import React, { useMemo } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import type { Denuncia } from "@/store/denuncias";

export type CategoryFilterValue = {
  city?: string;
  year?: string;
};

type Props = {
  data: Denuncia[];
  value: CategoryFilterValue;
  onChange: (next: CategoryFilterValue) => void;
};

const CategoryFilters: React.FC<Props> = ({ data, value, onChange }) => {
  const cities = useMemo(() => {
    const set = new Set<string>();
    data.forEach((d) => {
      if (d.ciudad && d.ciudad.trim()) set.add(d.ciudad.trim());
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [data]);

  const years = useMemo(() => {
    const set = new Set<string>();
    data.forEach((d) => {
      const y = new Date(d.fecha).getFullYear();
      if (!Number.isNaN(y)) set.add(String(y));
    });
    return Array.from(set).sort((a, b) => Number(b) - Number(a));
  }, [data]);

  const clear = () => onChange({});

  return (
    <aside className="mb-6 bg-card p-4 rounded-lg border">
      <div className="grid sm:grid-cols-3 gap-3 items-end">
        <div>
          <label className="block text-sm text-muted-foreground mb-1">Ciudad</label>
          <Select
            value={value.city ?? ""}
            onValueChange={(v) => onChange({ ...value, city: v || undefined })}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todas</SelectItem>
              {cities.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm text-muted-foreground mb-1">Año</label>
          <Select
            value={value.year ?? ""}
            onValueChange={(v) => onChange({ ...value, year: v || undefined })}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todos</SelectItem>
              {years.map((y) => (
                <SelectItem key={y} value={y}>{y}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex sm:justify-end">
          <Button type="button" variant="secondary" onClick={clear} className="w-full sm:w-auto">
            Limpiar filtros
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default CategoryFilters;
