import { Outlet, useNavigate, useLocation } from 'react-router';
import manillaImg from '../../assets/LayoutManilla.jpeg';
import { ChevronLeft } from 'lucide-react';

const AuthLayout = () => {
    const locate = useLocation();
    const navigate = useNavigate();

    const handleNavigation = () => {
        if (locate.key !== 'default') {
            navigate(-1);
        } else {
            navigate('/');
        }
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <main className="grid grid-cols-2 grid-rows-1 w-3/4 h-3/4 bg-brand-background rounded-4xl shadow-lg overflow-hidden">
                <figure className="relative p-4">
                    <img
                        src={manillaImg}
                        alt="Manilla artesanal Skyless"
                        className="w-full h-full object-cover object-right rounded-3xl"
                    />
                    <button
                        className="absolute top-10 left-10 flex items-center gap-1 py-2 pl-3 pr-5 font-medium text-brand-dark bg-brand-background rounded-full shadow-lg cursor-pointer "
                        onClick={handleNavigation}
                    >
                        <ChevronLeft size={20} />
                        Atrás
                    </button>
                    <figcaption className="absolute bottom-4 left-4 p-6">
                        <h3 className="font-display text-5xl font-bold text-white">
                            Skyless
                        </h3>
                        <p className="text-white">
                            Las pequeñas cosas hacen la diferencia.
                        </p>
                    </figcaption>
                </figure>

                <div className="flex flex-col justify-center px-16">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AuthLayout;
