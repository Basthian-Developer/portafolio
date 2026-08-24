import { useEffect, useState } from "react";
import { HabilidadSupaRepo } from "@/funcionalidades/habilidad/servicios/HabilidadSupaRepo";
import type { Habilidad } from "@/funcionalidades/habilidad/types"

const habilidadRepo = new HabilidadSupaRepo()

export function useHabilidades() {
    const [habilidades, setHabilidades] = useState<Habilidad[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const cargarHabilidades = async () => {
            try {
                const data = await habilidadRepo.getAll()
                setHabilidades(data)
            } catch (error) {
                console.error("Error al cargar habilidades: ", error)
            } finally {
                setLoading(false)
            }
        }

        cargarHabilidades()
    })

    return { habilidades, loading }
}