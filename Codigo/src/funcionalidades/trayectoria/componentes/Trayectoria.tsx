import type { Trayectoria } from "@/funcionalidades/trayectoria/types";
import { useTrayectoria } from "@/funcionalidades/trayectoria/hooks/useTrayectoria";

export function Trayectoria() {
  const { trayectoria, loading } = useTrayectoria()

  return (
    <div className="timeline">
      {loading ? (
        <p>...Cargando</p>
      ) :
        (trayectoria.map((e) => (
          <div className="trayectoria mb-8" key={e.rol}>
            <div className="pt-[3px] font-mono text-sm text-[var(--color-red)]">
              {e.year}
            </div>

            <div>
              <div className="font-serif text-[1.2rem] font-medium">
                {e.rol}
              </div>

              <div className="mt-[1px] font-mono text-sm text-black tracking-[0.03em] text-[var(--color-ink-faint)] mb-2">
                {e.org}
              </div>

              <ul className="mt-3 max-w-[45ch] space-y-1">
                {e.descripcion.map((activity) => (
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
        )))}
    </div>
  );
}