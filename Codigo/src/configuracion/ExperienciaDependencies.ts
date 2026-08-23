import { JsonExperienciaRepository } from "@/infraestructura/repositorios/JsonExperienciaRepository";
import { ObtenerExperiencias } from "@/aplicacion/casos-uso/ObtenerExperiencias";

export const experienciaRepository = new JsonExperienciaRepository();
export const obtenerExperiencias = new ObtenerExperiencias(experienciaRepository);  