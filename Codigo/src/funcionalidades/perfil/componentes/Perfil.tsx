import { useEffect, useState } from "react";
import type { Perfil } from "@/funcionalidades/perfil/types";
import { obtenerPerfil } from "@/funcionalidades/perfil/servicios/PerfilServices";

export function Perfil() {
    const [perfil, setPerfil] = useState<Perfil>();

    useEffect(() => {
        setPerfil(obtenerPerfil());
    }, []);

    return (
        <section className="hero" id="top">
            <div className="wrap">
                <div className="hero__top">
                    <span className="hero__status">
                        <span className="pulse" aria-hidden="true" />
                        {perfil?.availability}
                    </span>
                    <span className="hero__meta mono">{perfil?.version}</span>
                </div>

                <h1 className="hero__title">
                    Construyo software <em>que funciona</em> en producción, no solo en la demo.
                </h1>

                <div className="hero__bottom">
                    <div>
                        <p className="hero__desc">
                            Soy {perfil?.name}, {perfil?.role.toLowerCase()}. Diseño y construyo soluciones web robustas y bien diseñadas, con atención a la arquitectura, el rendimiento y la experiencia del usuario.
                        </p>
                        <div className="hero__cta">
                            <a href="#projects" className="btn btn--primary">Ver proyectos →</a>
                            <a href="#contact" className="btn">Hablemos</a>
                        </div>
                    </div>

                    <div className="hero__stats">
                        <div className="hero__stat">
                            <b>{perfil?.location.split(",")[0]}</b>
                            <span>Ubicación</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}