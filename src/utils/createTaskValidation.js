import * as yup from "yup";

export const createTaskSchema = yup.object().shape({
    name: yup
        .string()
        .required("O nome é obrigatório")
        .min(3, "O nome deve ter pelo menos 3 caracteres"),
    deadline: yup
        .date()
        .required("O prazo é obrigatório"),
    finished: yup.bool()
        .required('O status é obrigatorio')
});