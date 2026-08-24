import type {Trayectoria} from "@/funcionalidades/trayectoria/types";
import data from "@/funcionalidades/trayectoria/data/Trayectoria.json";

export function obtenerTrayectoria(): Trayectoria[] {
    return data;
}