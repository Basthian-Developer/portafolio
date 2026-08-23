import type { Formacion } from "@/dominio/entidades/Formacion";
import type { FormacionRepository } from "@/dominio/repositorios/FormacionRepository";

export class ObtenerFormaciones {
    private readonly formacionRepository: FormacionRepository;

    constructor(formacionRepository: FormacionRepository) {
        this.formacionRepository = formacionRepository;
    }

    async ejecutar(): Promise<Formacion[]> {
        return this.formacionRepository.getFormaciones();
    }
}