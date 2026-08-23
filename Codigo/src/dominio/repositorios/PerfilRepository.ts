import type { Perfil } from "@/dominio/entidades/Perfil";

export interface PerfilRepository {
    getPerfil(): Promise<Perfil>;
}