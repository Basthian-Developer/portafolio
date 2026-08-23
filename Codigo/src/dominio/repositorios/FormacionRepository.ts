import type { Formacion } from "@/dominio/entidades/Formacion";

export interface FormacionRepository {
    getFormaciones(): Promise<Formacion[]>;
}