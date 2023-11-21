import * as yup from "yup";

export const createUserSchema = yup.object().shape({
    name: yup
        .string()
        .required("O nome é obrigatório")
        .min(3, "O nome deve ter pelo menos 3 caracteres"),
    email: yup
        .string()
        .email("Deve estar no formato de e-mail")
        .required("O e-mail é obrigatório"),
    password: yup.string()
        .required('A senha é obrigatória')
        .min(6, 'A senha deve ter pelo menos 6 caracteres'),
});

