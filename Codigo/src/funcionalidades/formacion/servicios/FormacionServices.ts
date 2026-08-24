import type {Formacion} from "@/funcionalidades/formacion/types";
import data from "@/funcionalidades/formacion/data/Formaciones.json";

export function obtenerFormaciones(): Formacion[] {
    return data;
}