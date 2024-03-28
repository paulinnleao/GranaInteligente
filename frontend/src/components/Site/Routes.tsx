import {HeaderNav} from "./Header";
import {EvolucaoPagina, MinhaCarteira} from "../Pages/Minha Carteira";
import {BarNavegation} from "./BarNavegation.tsx";
import {ErrorPage} from "./ErrorPage.tsx";
export const Header= {
    path: "/",
    element: <HeaderNav />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "minha-carteira",
            element: <BarNavegation {...MinhaCarteira} />,
        },
        {
            path: "meus-controles",
            element: <div>Some lek</div>
        },
        {
            path: "meus-relatorios",
            element: <div>Some lek</div>
        },
        {
            path: "plano-de-contas",
            element: <div>Some lek</div>
        },
        {
            path: "suporte",
            element: <div>Some lek</div>
        },
    ],
};
