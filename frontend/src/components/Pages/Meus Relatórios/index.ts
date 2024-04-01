import ProjecaoPagina from "./Projeção/ProjecaoPagina.tsx";
import OrcamentoMeusRelatoriosPagina from "./Orçamento Meus Relatórios/OrcamentoMeusRelatoriosPagina.tsx";
import FluxoMensalPagina from "./Fluxo Mensal/FluxoMensalPagina.tsx";
import FluxoDiarioPagina from "./Fluxo Diário/FluxoDiarioPagina.tsx";
import ComparativoPagina from "./Comparativo/ComparativoPagina.tsx";

export const MeusRelatorios = [
    {
        titulo: "Projeção",
        src: "projecao",
        componenteRenderizado: ProjecaoPagina,
    },
    {
        titulo: "Orçamento",
        src: "orcamento-meus-relatorios",
        componenteRenderizado: OrcamentoMeusRelatoriosPagina,
    },
    {
        titulo: "Fluxo Mensal",
        src: "fluxo-mensal",
        componenteRenderizado: FluxoMensalPagina,
    },
    {
        titulo: "Fluxo Diário",
        src: "fluxo-diario",
        componenteRenderizado: FluxoDiarioPagina,
    },
    {
        titulo: "Comparativo",
        src: "comparativo",
        componenteRenderizado: ComparativoPagina,
    }
]