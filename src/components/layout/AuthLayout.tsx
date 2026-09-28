import { Outlet } from 'react-router';
import bracaletImg from '../../assets/LayoutManilla.jpeg';

const AuthLayout = () => {
    return (
        <main className="grid grid-cols-2 h-screen">
            <figure className="relative">
                <img
                    src={bracaletImg}
                    alt="Pulsera artesanal Skyless"
                    className="w-full h-full object-cover"
                />
                <figcaption>marca aquí</figcaption>
            </figure>
            <div>
                <Outlet />
            </div>
        </main>
    );
};

export default AuthLayout;
