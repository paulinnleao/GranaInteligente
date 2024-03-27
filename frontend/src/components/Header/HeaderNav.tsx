import {NavLink, Outlet} from "react-router-dom";
import {Box, Button} from "@chakra-ui/react";
import {useCallback} from "react";


const HeaderNav = () => {

    const statusHeader = useCallback((isActive : boolean, isPending : boolean) => {
            return isActive ? "active" : isPending ? "pending" : "" },
        []);
    return <Box>
        <NavLink
            to={`/`}
            className={({isActive, isPending})=>statusHeader(isActive, isPending)}>
            <Button colorScheme='blue'>Home</Button>
        </NavLink>
        <NavLink
            to={`/minha-carteira`}
            className={({isActive, isPending})=>statusHeader(isActive, isPending)}>
            <Button colorScheme='pink'>Minha Carteira</Button>
        </NavLink>
        <NavLink
            to={`/meus-controles`}
            className={({isActive, isPending})=>statusHeader(isActive, isPending)}>
            <Button colorScheme='blue'>Meus Controles</Button>
        </NavLink>
        <NavLink
            to={`/meus-relatorios`}
            className={({isActive, isPending})=>statusHeader(isActive, isPending)}>
            <Button colorScheme='pink'>Meus Relatórios</Button>
        </NavLink>
        <NavLink
            to={`/plano-de-contas`}
            className={({isActive, isPending})=>statusHeader(isActive, isPending)}>
            <Button colorScheme='blue'>Plano de Contas</Button>
        </NavLink>
        <NavLink
            to={`/suporte`}
            className={({isActive, isPending})=>statusHeader(isActive, isPending)}>
            <Button colorScheme='pink'>Suporte</Button>
        </NavLink>
        <Outlet />
    </Box>

}

export default HeaderNav;