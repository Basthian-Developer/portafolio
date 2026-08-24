import data from "@/funcionalidades/proyectos/data/Proyectos.json";
import type { Proyecto } from "@/funcionalidades/proyectos/types";

export function obtenerProyectos(): Proyecto[] {
    return data as Proyecto[];
}