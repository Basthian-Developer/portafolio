import data from "../../data/Perfil.json";
import type { Perfil } from "../../dominio/entidades/Perfil";
import type { PerfilRepository } from "../../dominio/repositorios/PerfilRepository";

export class JsonPerfilRepository implements PerfilRepository {

    async getPerfil(): Promise<Perfil> {
        return data;
    }
}