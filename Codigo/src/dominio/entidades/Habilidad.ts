export interface Habilidad {
    id: number;
    category: string;
    code: string;
    items: { name: string; core?: boolean }[];
}