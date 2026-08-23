import type {Formacion} from "../../dominio/entidades/Formacion";
import type {FormacionRepository} from "../../dominio/repositorios/FormacionRepository";
import data from "../../data/Formaciones.json";

export class JsonFormacionRepository implements FormacionRepository {
    async getFormaciones(): Promise<Formacion[]> {
        return data as Formacion[];
    }
}