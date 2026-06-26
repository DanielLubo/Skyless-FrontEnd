import { RouterProvider } from "react-router/dom";
import { appRouter } from "./router/app.router";

const SkylessApp = () => {
    return (
        <>
            <RouterProvider router={appRouter}/>
        </>
    );
};

export default SkylessApp;
