export type Denuncia = {
  id: string;
  tipo: string;
  descripcion: string;
  fecha: string; // ISO
  ciudad?: string;
  lat?: number;
  lng?: number;
  fotos?: string[]; // data URLs
};

const STORAGE_KEY = "ecoalerta_denuncias";

export function loadDenuncias(): Denuncia[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Denuncia[]) : [];
  } catch {
    return [];
  }
}

export function saveDenuncias(data: Denuncia[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function addDenuncia(d: Omit<Denuncia, "id">): Denuncia {
  const all = loadDenuncias();
  const nueva: Denuncia = { id: crypto.randomUUID(), ...d };
  all.unshift(nueva);
  saveDenuncias(all);
  return nueva;
}

export function exportCsv(rows: Denuncia[]) {
  const headers = ["id","tipo","descripcion","fecha","ciudad","lat","lng","fotos"];
  const csv = [headers.join(",")].concat(
    rows.map(r => headers.map(h => {
      const v = (r as any)[h];
      if (Array.isArray(v)) return `"${v.join("|")}"`;
      return typeof v === "string" ? `"${v.replace(/"/g, '""')}"` : (v ?? "");
    }).join(","))
  ).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `denuncias_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
