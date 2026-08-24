export interface Habilidad {
    id: number;
    categoria: string;
    codigo: string;
    items: { name: string; core?: boolean }[];
}