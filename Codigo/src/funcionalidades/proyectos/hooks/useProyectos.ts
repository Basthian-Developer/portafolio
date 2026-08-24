import { useEffect, useState } from "react";
import type { Proyecto } from "@/funcionalidades/proyectos/types";
import { ProyectoSupaRepo } from "@/funcionalidades/proyectos/servicios/ProyectoSupaRepo";

const proyectoRepo = new ProyectoSupaRepo()

export function useProyectos() {
    const [proyectos, setProyectos] = useState<Proyecto[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const cargarProyectos = async () => {
            try {
                const data = await proyectoRepo.getAll()
                setProyectos(data)
            } catch (error) {
                console.error('Error al cargar proyectos: ', error)
            } finally{
                setLoading(false)
            }
        }

        cargarProyectos()
    }, [])

    return { proyectos, loading }
}