import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../schemas/login.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../../store/auth/useAuth';
import { z } from 'zod';

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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Form Login</h1> <br />
                <label htmlFor="">Correo Electronico</label>
                <input
                    {...register('email')}
                    type="email"
                    placeholder="Ingresa tu correo electronico"
                />
                {errors.email && <p>{errors.email.message}</p>}
                <br />
                <label htmlFor="">Password</label>
                <input
                    {...register('password')}
                    type="password"
                    placeholder="Ingresa tu contrasena"
                />
                {errors.password && <p>{errors.password.message}</p>}
                {messageError && <p>{messageError}</p>}
                <button type="submit">Iniciar Sesion</button>
            </form>
        </div>
    );
};

export default LoginForm;
