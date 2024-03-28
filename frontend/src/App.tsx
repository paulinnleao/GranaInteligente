import {ChakraProvider} from '@chakra-ui/react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Header} from "./components/Site/Routes.tsx";
import {BarNavegation} from "./components/Site/BarNavegation.tsx";
function App() {
    const router = createBrowserRouter([Header]);
    return (
        <ChakraProvider>
                <RouterProvider router={router}>
                </RouterProvider>
        </ChakraProvider>
    )
}

export default App
