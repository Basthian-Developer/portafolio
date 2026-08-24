export interface Proyecto {
    id: number;
    titulo: string;
    descripcion: string;
    problema: string;
    tecnologias: string[];
    year: string;
    githubUrl?: string;
}