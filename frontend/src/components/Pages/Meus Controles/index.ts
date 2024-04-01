import EvolucaoPagina from "../Minha Carteira/Evolução/EvolucaoPagina.tsx";
import OrcamentoMeusControlesPagina from "./Orçamento Meus Controles/OrcamentoMeusControlesPagina.tsx";
import InvestimentosPagina from "./Investimentos/InvestimentosPagina.tsx";
import ExtratoPagina from "./Extrato/ExtratoPagina.tsx";


export const MeusControles = [

    {
        titulo: "Orçamento",
        src: "orcamento",
        componenteRenderizado: OrcamentoMeusControlesPagina,
    },
    {
        titulo: "Investimentos",
        src: "investimentos",
        componenteRenderizado: InvestimentosPagina,
    },
    {
        titulo: "Extrato",
        src: "extrato",
        componenteRenderizado: ExtratoPagina,
    }
]