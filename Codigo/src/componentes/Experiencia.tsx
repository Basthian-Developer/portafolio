import { Reveal } from "@/componentes/Motion";
import { Trayectoria } from "@/funcionalidades/trayectoria/componentes/Trayectoria";
import { Formacion } from "@/funcionalidades/formacion/componentes/Formacion";

export function Experiencia() {
    return (
        <section className="bg-[var(--color-paper-dim)] py-[var(--sp-16)] mb-8">
            <div className="mx-auto w-full max-w-[1200px] px-6 mb-8 py-8">
                <Reveal>
                    <span className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-red)]">
                        <span className="mr-2 text-[var(--color-ink-faint)]">
                            § 04
                        </span>
                        Trayectoria
                    </span>
                </Reveal>

                <div className="py-3 grid grid-cols-1 gap-8 min-[861px]:grid-cols-[1.3fr_1fr]">
                    <Reveal>
                        <div className="py-4">
                            <h2 className="mb-5 border-b border-[var(--color-border)] pb-3 font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-red)]">
                                Experiencia
                            </h2>
                        </div>

                        <Trayectoria />
                    </Reveal>

                    <Reveal>
                        <div className="py-4">
                            <h2 className="mb-5 border-b border-[var(--color-border)] pb-3 font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-red)]">
                                Formación
                            </h2>
                        </div>

                        <Formacion />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}