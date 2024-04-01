import {Box, Button} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import styled from "@emotion/styled";


export function BarNavegation ( {itensPagina} ){
    const [verPagina, setVerPagina] = useState<string>("");

    useEffect(() => {


    }, [verPagina])
    console.log(itensPagina)
    return <Box>
        <BoxNavegation>
            {itensPagina.map(
                (value, id) =>
                <Box key={id}>
                    <Button onClick={() => setVerPagina(value.titulo)}>{value.titulo}</Button>
                </Box>
            )}
        </BoxNavegation>

        {/*{props.barprops.map(*/}
        {/*    (value, id) =>*/}
        {/*    {value.title===verPagina && <></>}*/}
        {/*)}*/}
    </Box>
}

const BoxNavegation = styled(Box)`
    display: flex;
    gap: 0.5rem;
`;