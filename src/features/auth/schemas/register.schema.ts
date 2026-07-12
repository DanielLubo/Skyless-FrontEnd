import { z } from 'zod';

export const registerSchema = z.object({
    name: z.string().min(1, 'El nombre es requerido'),
    email: z.email('El correo electronico no es valido'),
    password: z
        .string()
        .min(8, 'Debe tener minimo 8 caracteres')
        .regex(/[A-Z]/, 'Debe contener al menos una mayuscula')
        .regex(/[a-z]/, 'Debe contener al menos una minuscula')
        .regex(/[0-9]/, 'Debe contener al menos un numero')
        .regex(
            /[!@#$%^&*(),.?":{}|<>]/,
            'Debe contener al menos un caracter especial'
        ),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
