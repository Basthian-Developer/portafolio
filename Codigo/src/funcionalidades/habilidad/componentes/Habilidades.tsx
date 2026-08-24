import { useEffect, useState } from "react";
import { Reveal } from "@/componentes/Motion";
import type { Habilidad } from "@/funcionalidades/habilidad/types";
import { obtenerHabilidades } from "@/funcionalidades/habilidad/servicios/HabilidadServices";

export function Habilidades() {
    const [habilidades, setHabilidades] = useState<Habilidad[]>([]);

    useEffect(() => {
        setHabilidades(obtenerHabilidades());
    }, []);

    return (
        <section className="section section--dim" id="skills">
            <div className="wrap">
                <Reveal>
                    <span className="eyebrow">
                        <span className="folio">§ 02</span> Habilidades técnicas
                    </span>
                </Reveal>

                <Reveal>
                    <div className="border-t border-[var(--color-ink)]">
                        {habilidades.map((group) => (
                            <div
                                key={group.code}
                                className="
                                    grid grid-cols-1
                                    gap-2
                                    border-b border-[var(--color-line)]
                                    py-5
                                    items-center
                                    min-[721px]:grid-cols-[220px_1fr_90px]
                                    min-[721px]:gap-6
                                "
                            >
                                <div
                                    className="
                                        font-serif
                                        text-[var(--fs-h4)]
                                        italic
                                        text-[var(--color-ink)]
                                    "
                                >
                                    {group.category}

                                    <span
                                        className="
                                            mt-[2px]
                                            block
                                            font-mono
                                            text-[var(--fs-mono-xs)]
                                            not-italic
                                            tracking-[0.08em]
                                            text-[var(--color-red)]
                                        "
                                    >
                                        {group.code}
                                    </span>
                                </div>

                                <ul
                                    className="
                                        flex
                                        flex-wrap
                                        gap-x-5
                                        gap-y-3
                                    "
                                >
                                    {group.items.map((item) => (
                                        <li
                                            key={item.name}
                                            className={`
                                                relative
                                                pl-4
                                                font-mono
                                                text-[var(--fs-body-sm)]
                                                text-[var(--color-ink-soft)]
                                                before:absolute
                                                before:left-0
                                                before:top-1/2
                                                before:h-[5px]
                                                before:w-[5px]
                                                before:-translate-y-1/2
                                                before:bg-[var(--color-line-strong)]
                                                ${item.core
                                                    ? `
                                                        font-medium
                                                        text-[var(--color-ink)]
                                                        before:bg-[var(--color-red)]
                                                    `
                                                    : ""
                                                }
                                            `}
                                        >
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>

                                {/* Nivel, si tu Habilidad tiene level:
                                <div className="justify-self-start min-[721px]:justify-self-end ...">
                                    ...
                                </div>
                                */}
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}