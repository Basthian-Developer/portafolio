import type { Formacion } from "@/funcionalidades/formacion/types";
import { useFormacion } from "@/funcionalidades/formacion/hooks/useFormacion";

export function Formacion() {
    const { formacion, loading } = useFormacion()

    return (
        <div className="flex flex-col gap-5">
            {loading ?
                (
                    <p>...Cargando</p>
                ) :
                (formacion.map((c) => (
                    <div
                        className="border border-[#C9C2BA] bg-[#F7F4EF] p-5"
                        key={c.titulo}
                    >
                        <span className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-[#B3261E]">
                            {c.label}
                        </span>

                        <div className="mt-2 font-serif text-[1.15rem]">
                            {c.titulo}
                        </div>

                        <div className="mt-2 font-mono text-[0.7rem] text-[#8A837C] flex justify-between">
                            <span>{c.org}</span>
                            <div className="flex gap-1">
                                <span>{c.date_inicio}</span>
                                <span>-</span>
                                <span>{c.date_termino}</span>
                            </div>
                        </div>

                        <div className="mt-2 font-mono text-[0.7rem] text-[#8A837C] flex justify-between">
                            <span className="inline-flex border border-[#C9C2BA] bg-[#EFEAE4] px-2 py-1 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-[#5F5953]">
                                {c.estado}
                            </span>
                        </div>
                    </div>
                )))}
        </div>
    );
}