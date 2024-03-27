import {HeaderNav} from "./Header";
import * as React from "react";

export const Header= [
    {
        path: "/",
        element: <HeaderNav />,
        // errorElement: <> ABC </>,
        children: [
            {
                path: "some",
                element: <div>Some lek</div>
            }
        ],
    },
];