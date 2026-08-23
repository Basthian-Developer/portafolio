import { JsonPerfilRepository } from "@/infraestructura/repositorios/JsonPerfilRepository";
import { ObtenerPerfil } from "@/aplicacion/casos-uso/ObtenerPerfil";

export const perfilRepository = new JsonPerfilRepository();
export const obtenerPerfil = new ObtenerPerfil(perfilRepository);