import {HeaderNav} from "./Header";
import {MinhaCarteira} from "../Pages/Minha Carteira";
import {BarNavegation} from "./BarNavegation.tsx";
import {ErrorPage} from "./ErrorPage.tsx";
import {MeusControles} from "../Pages/Meus Controles";
import {MeusRelatorios} from "../Pages/Meus Relatórios";
import {PlanoDeContas} from "../Pages/Plano de Contas";
import {Suporte} from "../Pages/Suporte";
export const Header= {
    path: "/",
    element: <HeaderNav />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "minha-carteira",
            element: <BarNavegation itensPagina={MinhaCarteira} />,
        },
        {
            path: "meus-controles",
            element: <BarNavegation itensPagina={MeusControles} />,
        },
        {
            path: "meus-relatorios",
            element: <BarNavegation itensPagina={MeusRelatorios} />,
        },
        {
            path: "plano-de-contas",
            element: <BarNavegation itensPagina={PlanoDeContas} />,
        },
        {
            path: "suporte",
            element: <BarNavegation itensPagina={Suporte} />,
        },
    ],
};
