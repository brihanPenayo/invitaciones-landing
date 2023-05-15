import { createBrowserRouter } from "react-router-dom";
import { Contact } from "../pages/Contact";
import App from "../src/App";
import Carlos from "../pages/birthdays/carlos/Carlos";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/test",
        element: <Contact />
    },
    {
        path: "/carlos",
        element: <Carlos />
    }
])