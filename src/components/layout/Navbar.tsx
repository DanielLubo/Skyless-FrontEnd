import { useAuth } from '../../store/auth/useAuth';
import { Link } from 'react-router';

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <nav>
            <div>
                <h2>Skiless</h2>
            </div>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/men">Hombre</Link>
                </li>
                <li>
                    <Link to="/women">Mujer</Link>
                </li>
                <li>
                    <Link to="/sale">Sale</Link>
                </li>
                <li>
                    <Link to="/contact">Contacto</Link>
                </li>
            </ul>
            <div>
                {user === null ? (
                    <Link to="/login">Iniciar Sesion</Link>
                ) : (
                    <Link to="/profile">Mi Perfil</Link>
                )}

                {!!user && (
                    <button type="button" onClick={logout}>
                        Cerrar Sesion
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
