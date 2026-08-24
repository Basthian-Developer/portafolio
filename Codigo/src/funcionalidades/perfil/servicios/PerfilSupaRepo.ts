import type { PerfilRepo } from "@/funcionalidades/perfil/servicios/PerfilRepo";
import type { Perfil } from "@/funcionalidades/perfil/types";
import { supabase } from "@/lib/supabase";

export class PerfilSupaRepo implements PerfilRepo {
    async getAll(): Promise<Perfil[]> {
        const { data, error } = await supabase
            .from("Perfil")
            .select("*")

        if (error) {
            throw new Error(error.message)
        }

        return data
    }
}