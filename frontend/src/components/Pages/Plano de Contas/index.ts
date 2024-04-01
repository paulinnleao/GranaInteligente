import ReceitasPagina from "./Receitas/ReceitasPagina.tsx";
import OutrosPagina from "./Outros/OutrosPagina.tsx";
import InvestimentosPagina from "./Investimentos/InvestimentosPagina.tsx";
import DespesasPagina from "./Despesas/DespesasPagina.tsx";


export const PlanoDeContas = [
    {
        titulo: "Receitas",
        src: "receitas",
        componenteRenderizado: ReceitasPagina,
    },
    {
        titulo: "Outros",
        src:"outros",
        componenteRenderizado: OutrosPagina,
    },
    {
        titulo: "Investimentos",
        src: "investimentos",
        componenteRenderizado: InvestimentosPagina,
    },
    {
        titulo: "Despesas",
        src: "despesas",
        componenteRenderizado: DespesasPagina,
    }
]