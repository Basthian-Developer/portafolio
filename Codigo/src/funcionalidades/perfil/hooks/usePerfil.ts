import { PerfilSupaRepo } from "@/funcionalidades/perfil/servicios/PerfilSupaRepo";
import { useEffect, useState } from "react";
import type { Perfil } from "@/funcionalidades/perfil/types";

const perfilRepo = new PerfilSupaRepo()

export function usePerfil() {
    const [perfiles, setPerfiles] = useState<Perfil[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const cargarPerfil = async () => {
            try {
                const data = await perfilRepo.getAll()
                setPerfiles(data)
            } catch (error) {
                console.log("Error al cargar el perfil: ", error)
            } finally {
                setLoading(false)
            }
        }

        cargarPerfil()
    })

    return { perfiles, loading }
}