import { Reveal } from "@/componentes/Motion";
import { useHabilidades } from "@/funcionalidades/habilidad/hooks/useHabilidades"

export function Habilidades() {
    const { habilidades, loading } = useHabilidades()

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
                        {loading ? (
                            <p>...Cargando</p>
                        ) :
                            (habilidades.map((group) => (
                                <div
                                    key={group.codigo}
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
                                        {group.categoria}

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
                                            {group.codigo}
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
                                </div>
                            )))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}