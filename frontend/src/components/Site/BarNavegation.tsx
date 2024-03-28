import {Box, Button} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {RotasProps} from "../../util/Interfaces.tsx";


export function BarNavegation ( props : RotasProps[]){
    const [verPagina, setVerPagina] = useState<string>("");

    useEffect(() => {

    }, [verPagina])
    return <Box>
        {props.map(
            (value, id) =>
            <Box key={id}>
                <Button onClick={() => setVerPagina(value.titulo)}>{value.titulo}</Button>
            </Box>
        )}

        {/*{props.barprops.map(*/}
        {/*    (value, id) =>*/}
        {/*    {value.title===verPagina && <></>}*/}
        {/*)}*/}
    </Box>
}