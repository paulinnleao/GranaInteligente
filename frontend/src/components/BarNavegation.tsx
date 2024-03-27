import {Box} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";

interface BarNavegationProps {
        barprops: {
            title: string,
            page: undefined,
        }[]
    }

export function BarNavegation ( props : BarNavegationProps){
    return <Box>
        {props.barprops.map(()=>return <> </>)}

    </Box>
}