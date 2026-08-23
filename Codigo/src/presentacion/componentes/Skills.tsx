import { useEffect, useState } from "react";
import { Reveal } from "./Motion";
import type { Habilidad } from "@/dominio/entidades/Habilidad";
import { obtenerHabilidades } from "@/configuracion/HabilidadDependencies";

export function Skills() {
    const [habilidades, setHabilidades] = useState<Habilidad[]>([]);

    useEffect(() => {
        obtenerHabilidades.ejecutar().then(setHabilidades);
    }, []);

    return (
        <section className="section section--dim" id="skills">
            <div className="wrap">
                <Reveal>
                    <span className="eyebrow"><span className="folio">§ 02</span> Habilidades técnicas</span>
                </Reveal>
                <Reveal>
                    <div className="skills__table">
                        {habilidades.map((group) => (
                            <div className="skills__row" key={group.code}>
                                <div className="skills__cat">
                                    {group.category}
                                    <span>{group.code}</span>
                                </div>
                                <ul className="skills__items">
                                    {group.items.map((item) => (
                                        <li
                                            key={item.name}
                                            className={`skills__item mono ${item.core ? "is-core" : ""}`}
                                        >
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}