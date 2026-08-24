import { TrayectoriaSupaRepo } from "@/funcionalidades/trayectoria/servicios/TrayectoriaSupaRepo";
import { useEffect, useState } from "react";
import type { Trayectoria } from "@/funcionalidades/trayectoria/types";

const TrayectoriaRepo = new TrayectoriaSupaRepo()

export function useTrayectoria() {
    const [trayectoria, setTrayectoria] = useState<Trayectoria[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const cargarTrayectoria = async () => {
            try {
                const data = await TrayectoriaRepo.getAll()
                setTrayectoria(data)
            } catch (error) {
                console.error("Error al cargar trayectoria: ", error)
            } finally {
                setLoading(false)
            }
        }

        cargarTrayectoria()
    })

    return { trayectoria, loading }
}