import type { ExperienciaRepository } from "@/dominio/repositorios/ExperienciaRepository";
import type { Experiencia } from "@/dominio/entidades/Experiencia";

export class ObtenerExperiencias {
    private readonly experienciaRepository: ExperienciaRepository;

    constructor(experienciaRepository: ExperienciaRepository) {
        this.experienciaRepository = experienciaRepository;
    }

    async ejecutar(): Promise<Experiencia[]> {
        return this.experienciaRepository.getExperiencias();
    }
}