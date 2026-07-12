import { RouterProvider } from 'react-router/dom';
import { appRouter } from './router/app.router';
import { AuthProvider } from './store/auth/AuthProvider';

const SkylessApp = () => {
    return (
        <AuthProvider>
            <RouterProvider router={appRouter} />
        </AuthProvider>
    );
};

export default SkylessApp;
