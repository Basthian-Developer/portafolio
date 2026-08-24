import { usePerfil } from "@/funcionalidades/perfil/hooks/usePerfil";

export function Perfil() {
    const {perfiles, loading} = usePerfil()
    const perfil = perfiles[0]

    if(loading){
        return <p>...Cargando</p>
    }

    return (
        <section className="hero" id="top">
            <div className="flex flex-col items-center px-12 gap-5 lg:items-stretch">
                <div className="flex items-center gap-1">
                    <span className="inline-block h-2 w-2 rounded-full animate-pulse bg-green-500"></span>
                    <span className="text-xs uppercase font-mono">
                        {perfil?.disponibilidad}
                    </span>
                </div>

                <h1 className="font-serif font-medium text-5xl text-center lg:text-left lg:text-7xl leading-[0.98] tracking-[-0.015em] max-w-[15ch]">
                    Construyo software <em className="italic text-[var(--color-red)] font-normal">que funciona</em> en producción, no solo en la demo.
                </h1>

                <div className="mt-7 justify-between gap-12 flex flex-col lg:flex-row">
                    <div className="flex flex-col">
                        <p className="text-lg text-gray-600 text-center lg:text-left lg:max-w-[48ch]">
                            Soy {perfil?.nombre}, {perfil?.rol} y {perfil?.especialidad}. Diseño y construyo
                            soluciones web robustas y bien diseñadas, con atención a la
                            arquitectura, el rendimiento y la experiencia del usuario.
                        </p>

                        <div className="flex mt-6 gap-5 lg:justify-start justify-center">
                            <a href="#projects" className="btn btn--primary">
                                Ver proyectos →
                            </a>
                            <a href="#contact" className="btn">
                                Hablemos
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col lg:min-w-100 border-t border-red-300">
                        <div className="pr-4 pt-4 flex flex-col items-center lg:items-start">
                            <span className="font-mono text-[var(--fs-mono-xs)] uppercase tracking-[0.06em] text-[var(--color-ink-faint)]">
                                Ubicación
                            </span>

                            <b className="mt-1 block font-serif text-[1.9rem] font-medium text-red-700">
                                {perfil?.ciudad}, {perfil?.pais}
                            </b>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}