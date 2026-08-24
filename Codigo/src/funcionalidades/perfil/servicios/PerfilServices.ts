import data from "@/funcionalidades/perfil/data/Perfil.json";
import type { Perfil } from "@/funcionalidades/perfil/types";

export function obtenerPerfil(): Perfil {
  return data as Perfil;
}