import type { Proyecto } from '@/funcionalidades/proyectos/types'

export interface ProyectoRepo {
    getAll(): Promise<Proyecto[]>
}