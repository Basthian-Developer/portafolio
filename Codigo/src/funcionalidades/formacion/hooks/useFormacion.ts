import { FormacionSupaRepo } from "@/funcionalidades/formacion/servicios/FormacionSupaRepo";
import { useEffect, useState } from "react";
import type { Formacion } from "@/funcionalidades/formacion/types";

const formacionRepo = new FormacionSupaRepo()

export function useFormacion() {
    const [formacion, setFormacion] = useState<Formacion[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const cargarFormacion = async () => {
            try {
                const data = await formacionRepo.getAll()
                setFormacion(data)
            } catch (error) {
                console.log("Error al cargar la formacion: ", error)
            } finally {
                setLoading(false)
            }
        }

        cargarFormacion()
    })

    return {formacion, loading}
}