import {NavLink, Outlet} from "react-router-dom";
import {Box, Button} from "@chakra-ui/react";
import {useCallback} from "react";
import styled from "@emotion/styled";
import {RotasProps} from "../../../util/Interfaces.tsx";

const Headerbar  : RotasProps[] = [
        {
            titulo: 'Minha Carteira',
            src: '/minha-carteira',
        },
        {
            titulo: 'Meus Controles',
                src: '/meus-controles',
        },
        {
            titulo: 'Meus Relatórios',
                src: '/meus-relatorios',
        },
        {
            titulo: 'Plano de Contas',
                src: '/plano-de-contas',
        },
        {
            titulo: 'suporte',
                src: '/suporte',
        }
]
const HeaderNav = () => {

    const statusHeader = useCallback((isActive : boolean, isPending : boolean) => {
            return isActive ? "active" : isPending ? "pending" : "" },
        []);
    return <Box margin={'0.5rem'}>
        <BoxHeader >
            {Headerbar.map(
                (value, id) =>
                    <NavLinkClass
                        to={value.src}
                        key={id}
                        className={({isActive, isPending})=>statusHeader(isActive, isPending)}
                    >
                        <Button colorScheme={'blue'}>
                            {value.titulo}
                        </Button>
                    </NavLinkClass>
            )}
            </BoxHeader>
            <Outlet />
        </Box>

}

export default HeaderNav;
const BoxHeader = styled(Box)`
    width: 100%;
    display: flex;
    gap: 0.5rem;
    padding-bottom: 0.5rem;
`;

const NavLinkClass = styled(NavLink)`
    .active{
        color: black;
    }
`;
