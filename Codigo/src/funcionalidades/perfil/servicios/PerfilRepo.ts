import type { Perfil } from "@/funcionalidades/perfil/types";

export interface PerfilRepo{
    getAll(): Promise<Perfil[]>
}