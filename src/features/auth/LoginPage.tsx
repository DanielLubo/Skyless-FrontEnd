import LoginForm from './forms/LoginForm';
import { Link } from 'react-router';

const LoginPage = () => {
    return (
        <div className="flex flex-col gap-6">
            <LoginForm />
            <p className="text-center text-lg font-semibold text-brand-dark">
                ¿No tienes cuenta?{' '}
                <Link to="/register" className="text-brand-primary">
                    Regístrate
                </Link>
            </p>
        </div>
    );
};

export default LoginPage;
