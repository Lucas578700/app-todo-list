import { Keyboard } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";

import TextInput from "../../components/TextInput";
import { createUserSchema } from "../../utils/createUserValidation";
import { ref, push } from "firebase/database";
import { db } from "../../services/firebaseConnection";
import {
  BackgroundText,
  Container,
  FormArea,
  InputContainer,
  Label,
  ScrollViewContent,
  Button,
  ButtonText,
  Header,
} from "./styles";

export default function SignUp() {
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(createUserSchema),
  });

  const onSubmit = async (data) => {
    Keyboard.dismiss();

    try {
      const dataApi = {
        name: data.name,
        email: data.email.toLowerCase(),
        password: data.password,
      };

      console.log(dataApi);

      await push(ref(db, "/users"), dataApi);

      reset({
        name: "",
        email: "",
        password: "",
      });
      navigation.navigate("SignIn");
    } catch (error) {
      console.error("Erro ao enviar dados:", error.message);
    }
  };

  return (
    <>
      <Header>
        <BackgroundText> Insira os seus dados</BackgroundText>
      </Header>

      <Container>
        <ScrollViewContent>
          <FormArea>
            <InputContainer>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <>
                    <Label>Nome Completo</Label>
                    <TextInput
                      name="name"
                      placeholder="Nome"
                      onChange={onChange}
                      value={value}
                      error={errors.name}
                    />
                  </>
                )}
                name="name"
              />
            </InputContainer>

            <InputContainer>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <>
                    <Label>E-mail</Label>
                    <TextInput
                      name="email"
                      placeholder="E-mail"
                      onChange={onChange}
                      value={value}
                      error={errors.email}
                    />
                  </>
                )}
                name="email"
              />
            </InputContainer>

            <InputContainer>
              <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                  <>
                    <Label>Senha</Label>
                    <TextInput
                      name="password"
                      placeholder="Senha"
                      onChange={onChange}
                      value={value}
                      secureTextEntry={true}
                      error={errors.password}
                    />
                  </>
                )}
                name="password"
              />
            </InputContainer>
          </FormArea>
          <InputContainer>
            <Button onPress={handleSubmit(onSubmit)}>
              <ButtonText>Cadastrar</ButtonText>
            </Button>
            <Button onPress={() => navigation.goBack()}>
              <ButtonText>Voltar</ButtonText>
            </Button>
          </InputContainer>
        </ScrollViewContent>
      </Container>
    </>
  );
}
