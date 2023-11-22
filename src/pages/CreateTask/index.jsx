import React, { useState } from "react";

import { Keyboard, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ref, push } from "firebase/database";
import { db } from "../../services/firebaseConnection";
import { createTaskSchema } from "../../utils/createTaskValidation";
import {
  Container,
  FormArea,
  InputContainer,
  Label,
  ScrollViewContent,
  ContainerButton,
} from "./styles";
import { CustomSubmitButton } from "../../components/Button";
import { DatePicker } from "../../components/DatePicker";
import { StatusPicker } from "../../components/StatusPicker";
import { CustomInput } from "../../components/InputForm";

export default function CreateTask() {
  const navigation = useNavigation();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      deadline: new Date(),
      status: "",
    },
    resolver: yupResolver(createTaskSchema),
  });

  const onTask = async () => {
    navigation.navigate("Task");
  };

  const onSubmitCreate = async (data) => {
    Keyboard.dismiss();

    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };

    const formattedDate = new Date(data.deadline).toLocaleDateString(
      "pt-BR",
      options
    );
    const newData = { ...data, deadline: formattedDate };

    try {
      await push(ref(db, "/tasks"), newData);

      reset({
        name: "",
        deadline: new Date(),
        status: "",
      });
      navigation.navigate("Task");
    } catch (error) {
      Alert.alert("Erro ao criar: ", error.message);
    }
  };

  return (
    <Container>
      <ScrollViewContent>
        <FormArea>
          {/* <CustomInput
            name="name"
            label="Nome"
            placeholder="Digite o nome da Tarefa"
            control={control}
            error={errors.name}
          /> */}

          <InputContainer>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Label>Data Final</Label>
                  <DatePicker
                    control={control}
                    value={value}
                    onChange={onChange}
                    showPicker={showDatePicker}
                    setShowPicker={setShowDatePicker}
                  />
                </>
              )}
              name="deadline"
            />
          </InputContainer>

          <InputContainer>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Label>Status</Label>
                  <StatusPicker
                    control={control}
                    value={value}
                    onChange={onChange}
                    errors={errors}
                  />
                </>
              )}
              name="status"
            />
          </InputContainer>

          <ContainerButton>
            <CustomSubmitButton
              activeOpacity={0.8}
              onPress={handleSubmit(onSubmitCreate)}
              text="Cadastrar"
            />
            <CustomSubmitButton
              activeOpacity={0.8}
              onPress={() => onTask()}
              text="Lista de Tarefas"
            />
          </ContainerButton>
        </FormArea>
      </ScrollViewContent>
    </Container>
  );
}
