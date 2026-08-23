import type { Habilidad } from '@/dominio/entidades/Habilidad';
import type { HabilidadRepository } from '@/dominio/repositorios/HabilidadRepository';

export class ObtenerHabilidades {
    private readonly habilidadesRepository: HabilidadRepository;

    constructor(habilidadesRepository: HabilidadRepository) {
        this.habilidadesRepository = habilidadesRepository;
    }

    async ejecutar(): Promise<Habilidad[]> {
        return this.habilidadesRepository.getHabilidades();
    }
}