import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Header} from "./components/Routes.tsx";
function App() {
    const router = createBrowserRouter(Header);
    return (
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    )
}

export default App
