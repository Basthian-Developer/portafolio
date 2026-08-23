import type { Perfil } from "@/dominio/entidades/Perfil";
import type { PerfilRepository } from "@/dominio/repositorios/PerfilRepository";

export class ObtenerPerfil {
    private readonly perfilRepository: PerfilRepository

    constructor(perfilRepository: PerfilRepository) {
        this.perfilRepository = perfilRepository;
    }

    async ejecutar(): Promise<Perfil> {
        return this.perfilRepository.getPerfil();
    }
}