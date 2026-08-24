import type { FormacionRepo } from "@/funcionalidades/formacion/servicios/FormacionRepo";
import type { Formacion } from "../types";
import { supabase } from "@/lib/supabase";

export class FormacionSupaRepo implements FormacionRepo{
    async getAll(): Promise<Formacion[]>{
        const {data, error} = await supabase
        .from("Formacion")
        .select("*")

        if(error){
            throw new Error(error.message)
        }

        return data.map((formacion) => ({
            ...formacion,
            date_inicio: new Date(formacion.date_inicio).toLocaleDateString("es-CL", {
                month: "short",
                year: "numeric"
            }),
            date_termino: new Date(formacion.date_termino).toLocaleDateString("es-CL", {
                month: "short",
                year: "numeric"
            })
        }))
    }
}