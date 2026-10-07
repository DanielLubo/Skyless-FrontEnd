import { Outlet, useNavigate, useLocation } from 'react-router';
import manillaImg from '../../assets/LayoutManilla.jpeg';

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
            <main className="grid grid-cols-2 max-w-3/4 bg-brand-background rounded-4xl shadow-lg overflow-hidden">
                <figure className="relative">
                    <img
                        src={manillaImg}
                        alt="Manilla artesanal Skyless"
                        className="w-full h-full object-cover"
                    />
                    <button
                        className="absolute top-0 left-0 bg-amber-400"
                        onClick={handleNavigation}
                    >
                        Atras
                    </button>
                    <figcaption className="absolute bottom-0 left-0">
                        <h3 className="text-white">Skyless</h3>
                        <p className="text-white">
                            Las pequeñas cosas hacen la diferencia
                        </p>
                    </figcaption>
                </figure>

                <div className="">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AuthLayout;
