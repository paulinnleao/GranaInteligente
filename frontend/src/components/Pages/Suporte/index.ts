import TermosDeUsoPagina from "./Termos de Uso/TermosDeUsoPagina.tsx";
import PassoAPassoPagina from "./Passo a Passo/PassoAPassoPagina.tsx";
import DadosEAtualizacaoPagina from "./Dados e atualização/DadosEAtualizacaoPagina.tsx";
import AtivacaoPagina from "./Ativação/AtivacaoPagina.tsx";

export const Suporte = [
    {
        titulo: "Termos de uso",
        src: "termos-de-uso",
        componenteRenderizado: TermosDeUsoPagina,
    },
    {
        titulo: "Passo a Passo",
        src: "passo-a-passo",
        componenteRenderizado: PassoAPassoPagina,
    },
    {
        titulo: "Dados e Atualização",
        src: "dados-e-atualizacao",
        componenteRenderizado: DadosEAtualizacaoPagina,
    },
    {
        titulo: "Ativação",
        src: "ativacao",
        componenteRenderizado: AtivacaoPagina,
    }
]