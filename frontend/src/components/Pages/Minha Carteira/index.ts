import EvolucaoPagina from "./Evolução/EvolucaoPagina.tsx";
import {BarNavegationProps} from "../../Site/BarNavegation.tsx";
import {RotasProps} from "../../../util/Interfaces.tsx";

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

