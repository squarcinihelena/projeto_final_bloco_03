import type { Produto } from "./Produto";

export interface Categoria {
    id: number | undefined;
    nome: string;
    produto?: Produto[] | null;
}