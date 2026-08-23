import data from "../../data/Habilidades.json";
import type { Habilidad } from "../../dominio/entidades/Habilidad";
import type { HabilidadRepository } from "../../dominio/repositorios/HabilidadRepository";

export class JsonHabilidadRepository implements HabilidadRepository {

    async getHabilidades(): Promise<Habilidad[]> {
        return data;
    }
}