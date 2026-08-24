import { useEffect, useState } from "react";
import { obtenerFormaciones } from "@/funcionalidades/formacion/servicios/FormacionServices";
import type { Formacion } from "@/funcionalidades/formacion/types";

export function Formacion() {
    const [formations, setFormations] = useState<Formacion[]>([]);

    useEffect(() => {
        setFormations(obtenerFormaciones());
    }, []);

    return (
        <div className="flex flex-col gap-5">
            {formations.map((c) => (
                <div
                    className="border border-[#C9C2BA] bg-[#F7F4EF] p-5"
                    key={c.title}
                >
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-[#B3261E]">
                        {c.label}
                    </span>

                    <div className="mt-2 font-serif text-[1.15rem]">
                        {c.title}
                    </div>

                    <div className="mt-2 font-mono text-[0.7rem] text-[#8A837C]">
                        {c.meta}
                    </div>
                </div>
            ))}
        </div>
    );
}