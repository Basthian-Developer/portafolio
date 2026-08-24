import type {TrayectoriaRepo} from "@/funcionalidades/trayectoria/servicios/TrayectoriaRepo"
import type { Trayectoria } from "@/funcionalidades/trayectoria/types"
import {supabase} from "@/lib/supabase"

export class TrayectoriaSupaRepo implements TrayectoriaRepo{
    async getAll(): Promise<Trayectoria[]> {
        const {data, error} = await supabase
        .from("Trayectoria")
        .select("*")

        if(error){
            throw new Error(error.message)
        }

        return data
    }
}