import { JsonFormacionRepository } from "@/infraestructura/repositorios/JsonFormacionRepository";
import { ObtenerFormaciones } from "@/aplicacion/casos-uso/ObtenerFormaciones";

export const formacionRepository = new JsonFormacionRepository();
export const obtenerFormaciones = new ObtenerFormaciones(formacionRepository);