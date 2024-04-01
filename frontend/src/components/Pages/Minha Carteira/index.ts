import EvolucaoPagina from "./Evolução/EvolucaoPagina.tsx";
import ContasPagina from "./Contas/ContasPagina.tsx";
import MoedasPagina from "./Moedas/MoedasPagina.tsx";
import CentrosDeCustoPagina from "./Centros de Custo/CentrosDeCustoPagina.tsx";
import CartoesDeCreditoPagina from "./Cartões de Crédito/CartoesDeCreditoPagina.tsx";

export const MinhaCarteira = [
    {
        titulo: "Evolução Pagina",
        src: "evolucao-pagina",
        componenteRenderizado: EvolucaoPagina,
    },
    {
        titulo: "Contas",
        src: 'contas',
        componenteRenderizado: ContasPagina,
    },
    {
        titulo: "Cartões de Crédito",
        src: "cartoes-de-credito",
        componenteRenderizado: CartoesDeCreditoPagina,
    },
    {
        titulo: "Centros de Custo",
        src: "centros-de-custo",
        componenteRenderizado: CentrosDeCustoPagina,
    },
    {
        titulo: "Moedas",
        src: "moedas",
        componenteRenderizado: MoedasPagina,
    }
]

