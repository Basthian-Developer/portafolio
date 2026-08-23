import type { Experiencia } from "@/dominio/entidades/Experiencia";

export interface ExperienciaRepository {
    getExperiencias(): Promise<Experiencia[]>;
}