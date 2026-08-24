import type {Habilidad} from "@/funcionalidades/habilidad/types";
import data from "@/funcionalidades/habilidad/data/Habilidades.json";

export function obtenerHabilidades(): Habilidad[] {
    return data;
}