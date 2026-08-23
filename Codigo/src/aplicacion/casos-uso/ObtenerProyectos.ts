import type { Proyecto } from "@/dominio/entidades/Proyecto";
import type { ProyectoRepository } from "@/dominio/repositorios/ProyectoRepository";

export class ObtenerProyectos {
    private readonly proyectoRepository: ProyectoRepository

    constructor(proyectoRepository: ProyectoRepository) {
        this.proyectoRepository = proyectoRepository;
    }

    async ejecutar(): Promise<Proyecto[]> {
        return this.proyectoRepository.getAll();
    }
}