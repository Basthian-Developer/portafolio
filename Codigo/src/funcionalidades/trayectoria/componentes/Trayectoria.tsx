import { useEffect, useState } from "react";
import type { Trayectoria } from "@/funcionalidades/trayectoria/types";
import { obtenerTrayectoria } from "@/funcionalidades/trayectoria/servicios/TrayectoriaService";

export function Trayectoria() {
  const [trayectoria, setTrayectoria] = useState<Trayectoria[]>([]);

  useEffect(() => {
    setTrayectoria(obtenerTrayectoria());
  }, []);

  return (
    <div className="timeline">
      {trayectoria.map((e) => (
        <div className="trayectoria mb-8" key={e.role}>
          <div className="pt-[3px] font-mono text-sm text-[var(--color-red)]">
            {e.year}
          </div>

          <div>
            <div className="font-serif text-[1.2rem] font-medium">
              {e.role}
            </div>

            <div className="mt-[1px] font-mono text-sm text-black tracking-[0.03em] text-[var(--color-ink-faint)] mb-2">
              {e.org}
            </div>

            <ul className="mt-3 max-w-[45ch] space-y-1">
              {e.description.map((activity) => (
                <li
                  key={activity}
                  className="text-sm leading-relaxed text-[#58514A]"
                >
                  · {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}