import { JsonProyectoRepository } from "@/infraestructura/repositorios/JsonProyectoRepository";
import { ObtenerProyectos } from "@/aplicacion/casos-uso/ObtenerProyectos";

export const proyectoRepository = new JsonProyectoRepository();
export const obtenerProyectos = new ObtenerProyectos(proyectoRepository);