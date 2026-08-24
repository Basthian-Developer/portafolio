import type { Proyecto } from "@/funcionalidades/proyectos/types";

export function ProjectCard({ project }: { project: Proyecto }) {
  return (
    <article className="flex h-full flex-col border border-black/15 bg-[#FBF9F3] transition-colors duration-300 hover:border-[#1B1815]">
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="font-serif text-[clamp(1.5rem,2.4vw,2.1rem)] font-medium leading-[1.08]">
            {project.titulo}
          </h3>
          <br />
          <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-[#58514A]">
            {project.descripcion}
          </p>
          <br />
          <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-[#58514A]">
            {project.problema}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tecnologias.map((technology) => (
            <span
              key={technology}
              className="border border-black/20 px-2 py-1 font-mono text-[0.68rem] uppercase tracking-[0.06em] text-[#58514A]"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="relative inline-block pb-[3px] font-mono text-xs uppercase tracking-[0.08em] text-[#1B1815] transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-black/25 after:transition-colors hover:text-[#B4232C] hover:after:bg-[#B4232C]"
              target="_blank"
              rel="noreferrer"
            >
              Ver el proyecto ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}