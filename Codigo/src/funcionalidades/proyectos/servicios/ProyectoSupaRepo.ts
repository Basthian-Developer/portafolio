import type { ProyectoRepo } from "@/funcionalidades/proyectos/servicios/ProyectoRepo";
import type { Proyecto } from "@/funcionalidades/proyectos/types";
import { supabase } from "@/lib/supabase"; 

export class ProyectoSupaRepo implements ProyectoRepo{
    async getAll(): Promise<Proyecto[]>{
        const {data, error} = await supabase
        .from("Proyectos")
        .select("*")

        if(error){
            throw new Error(error.message)
        }

        return data;
    }
}