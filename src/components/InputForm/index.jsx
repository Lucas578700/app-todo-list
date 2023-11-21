import { Controller } from "react-hook-form";
import TextInput from "../../components/TextInput";
import { InputContainer, Label } from './styles';


export const CustomInput = ({ name, label, placeholder, control, error, type, secureTextEntry=false }) => {
    return (
        <InputContainer>
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <>
                        <Label>{label}</Label>
                        <TextInput
                            name={name}
                            placeholder={placeholder}
                            onChange={onChange}
                            value={value}
                            error={error}
                            keyboardType={type}
                            secureTextEntry={secureTextEntry}
                        />
                    </>
                )}
                name={name}
            />
        </InputContainer>
    );
};