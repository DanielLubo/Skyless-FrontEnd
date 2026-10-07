import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../schemas/login.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../../store/auth/useAuth';
import { z } from 'zod';
import { Mail, Lock } from 'lucide-react';
import googleIcon from '../../../assets/google.png';

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm = () => {
    const [messageError, setMessageError] = useState<string | undefined>('');
    const { login } = useAuth();

    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const { errors } = formState;

    const onSubmit = async ({ email, password }: LoginFormValues) => {
        const result = await login(email, password);

        if (!result.success) {
            setMessageError(result.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <header className="text-center">
                <h1 className="text-3xl font-bold text-brand-dark">
                    Inicia sesión con tu cuenta
                </h1>
                <p className="mt-2 text-lg font-medium text-gray-600">
                    Bienvenido de nuevo, ingresa tus datos para iniciar sesión
                    con tu cuenta.
                </p>
            </header>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="email"
                    className="text-lg font-medium text-brand-dark"
                >
                    Correo electrónico *
                </label>
                <div className="relative">
                    <Mail
                        size={22}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-dark"
                    />
                    <input
                        id="email"
                        {...register('email')}
                        type="email"
                        placeholder="Ingresa tu correo electrónico"
                        className="w-full py-3.5 pl-12 pr-4 text-lg bg-white rounded-full shadow-lg border border-brand-dark/10 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                </div>
                {errors.email && (
                    <p className="text-sm text-red-600">
                        {errors.email.message}
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="password"
                    className="text-lg font-medium text-brand-dark"
                >
                    Contraseña *
                </label>
                <div className="relative">
                    <Lock
                        size={22}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-dark"
                    />
                    <input
                        id="password"
                        {...register('password')}
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        className="w-full py-3.5 pl-12 pr-4 text-lg bg-white rounded-full shadow-lg border border-brand-dark/10 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                </div>
                {errors.password && (
                    <p className="text-sm text-red-600">
                        {errors.password.message}
                    </p>
                )}
                <a href="#" className="self-end font-medium text-brand-primary">
                    ¿Olvidaste tu contraseña?
                </a>
            </div>

            {messageError && (
                <p className="text-sm text-center text-red-600">
                    {messageError}
                </p>
            )}

            <button
                type="submit"
                className="w-full py-4 text-xl font-semibold text-white bg-brand-dark rounded-full shadow-lg cursor-pointer"
            >
                Ingresar
            </button>

            <div className="flex items-center gap-4">
                <span className="h-px flex-1 bg-brand-dark" />
                <span className="text-sm font-semibold text-brand-dark">o</span>
                <span className="h-px flex-1 bg-brand-dark" />
            </div>

            <button
                type="button"
                className="flex items-center justify-center gap-3 w-full py-4 text-xl font-semibold text-brand-dark bg-white rounded-full shadow-lg border border-brand-dark/10 cursor-pointer"
            >
                <img src={googleIcon} alt="" className="size-6" />
                Iniciar sesión con Google
            </button>
        </form>
    );
};

export default LoginForm;
