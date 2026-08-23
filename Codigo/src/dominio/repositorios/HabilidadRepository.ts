import type { Habilidad } from '@/dominio/entidades/Habilidad';

export interface HabilidadRepository {
    getHabilidades(): Promise<Habilidad[]>;
}