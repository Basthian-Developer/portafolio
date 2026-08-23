import data from "../../data/Proyectos.json";
import type { Proyecto } from "../../dominio/entidades/Proyecto";
import type { ProyectoRepository } from "../../dominio/repositorios/ProyectoRepository";

export class JsonProyectoRepository implements ProyectoRepository {

    async getAll(): Promise<Proyecto[]> {
        return data;
    }

    async getById(id: number): Promise<Proyecto | null> {
        const proyecto = data.find((p) => p.id === id);
        return proyecto || null;
    }
}