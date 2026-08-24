import type { Formacion } from "@/funcionalidades/formacion/types";

export interface FormacionRepo{
    getAll(): Promise<Formacion[]>
}