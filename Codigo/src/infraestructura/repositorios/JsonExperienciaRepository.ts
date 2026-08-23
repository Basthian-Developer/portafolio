import type {ExperienciaRepository} from "../../dominio/repositorios/ExperienciaRepository";
import type {Experiencia} from "../../dominio/entidades/Experiencia";
import data from "../../data/Experiencias.json";

export class JsonExperienciaRepository implements ExperienciaRepository {
    async getExperiencias(): Promise<Experiencia[]> {
        return data as Experiencia[];
    }
}