import type { Proyecto } from "@/dominio/entidades/Proyecto";

export interface ProyectoRepository {
    getAll(): Promise<Proyecto[]>;
}