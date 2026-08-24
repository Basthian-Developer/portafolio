import type { Habilidad } from "@/funcionalidades/habilidad/types";

export interface HabilidadRepo{
    getAll(): Promise<Habilidad[]>
}