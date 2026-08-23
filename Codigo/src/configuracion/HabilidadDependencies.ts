import { JsonHabilidadRepository } from "@/infraestructura/repositorios/JsonHabilidadRepository";
import { ObtenerHabilidades } from "@/aplicacion/casos-uso/ObtenerHabilidades";

export const habilidadesRepository = new JsonHabilidadRepository();
export const obtenerHabilidades = new ObtenerHabilidades(habilidadesRepository);