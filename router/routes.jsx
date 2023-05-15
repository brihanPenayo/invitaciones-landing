import { createBrowserRouter } from "react-router-dom";
import { Contact } from "../pages/Contact";
import App from "../src/App";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/test",
        element: <Contact/>
    }
])