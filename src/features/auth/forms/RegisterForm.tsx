import { useForm } from 'react-hook-form';
import { useAuth } from '../../../store/auth/useAuth';
import { registerSchema } from '../schemas/register.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { useState } from 'react';

type RegisterFormValues = z.infer<typeof registerSchema>;

const RegisterForm = () => {
    const [messageError, setMessageError] = useState<string | undefined>('');
    const { register: registerUser } = useAuth();
    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(registerSchema),
    });
    const { errors } = formState;

    const onSubmit = async ({ name, email, password }: RegisterFormValues) => {
        const result = await registerUser(name, email, password);
        if (!result.success) {
            setMessageError(result.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Formulario de registro</h1> <br />
                <label htmlFor="">Nombre de usuario</label>
                <input
                    {...register('name')}
                    type="text"
                    placeholder="Ingresa tu nombre de usuario"
                />
                {errors.name && <p>{errors.name.message}</p>}
                <br />
                <label htmlFor="">Email</label>
                <input
                    {...register('email')}
                    type="email"
                    placeholder="Ingresa tu correo electronico"
                />
                {errors.email && <p>{errors.email.message}</p>}
                <br />
                <label htmlFor="">Contraseña</label>
                <input
                    {...register('password')}
                    type="password"
                    placeholder="Ingresa tu contrasena"
                />
                {errors.password && <p>{errors.password.message}</p>}
                <br />
                {messageError && <p>{messageError}</p>}
                <button>Registrarse</button>
            </form>
        </div>
    );
};

export default RegisterForm;
