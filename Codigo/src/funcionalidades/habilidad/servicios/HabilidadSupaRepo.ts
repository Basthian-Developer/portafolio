import type { HabilidadRepo } from "@/funcionalidades/habilidad/servicios/HabilidadRepo"
import type { Habilidad } from '@/funcionalidades/habilidad/types'
import {supabase} from '@/lib/supabase'

export class HabilidadSupaRepo implements HabilidadRepo {
    async getAll(): Promise<Habilidad[]> {
        const {data, error} = await supabase
        .from("Habilidades")
        .select("*")

        if(error){
            throw new Error(error.message)
        }

        return data
    }
}