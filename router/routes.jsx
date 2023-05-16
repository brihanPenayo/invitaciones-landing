import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import Carlos from "../pages/birthdays/carlos/Carlos";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/carlos",
        element: <Carlos />
    }
])