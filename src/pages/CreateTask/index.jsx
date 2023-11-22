import React, { useState } from "react";

import { Keyboard, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ref, push } from 'firebase/database';
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
import { CustomInput } from "../../components/InputForm";
import { DatePicker } from "../../components/DatePicker";
import { StatusPicker } from "../../components/StatusPicker";

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
      finished: "",
    },
    resolver: yupResolver(createTaskSchema),
  });

  const onListTasks = async () => {
    navigation.navigate("ListTasks");
  };

  const onSubmitCreate = async (data) => {
    Keyboard.dismiss();

    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };

    const formattedDate = new Date(data.deadline).toLocaleDateString("pt-BR", options);
    const newData = { ...data, deadline: formattedDate };

    try {
      await push(ref(db, "/tasks"), newData);

      reset({
        name: "",
        deadline: new Date(),
        finished: "",
      });
      navigation.navigate("ListTasks");
    } catch (error) {
      Alert.alert("Erro ao criar: ", error.message);
    }
  };

  return (
    <Container>
      <ScrollViewContent>
        <FormArea>
          <CustomInput
            name="name"
            label="Nome"
            placeholder="Digite o nome"
            control={control}
            error={errors.name}
          />

          <InputContainer>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Label>Deadline</Label>
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
              onPress={() => onListTasks()}
              text="Lista de Tarefas"
            />
          </ContainerButton>
        </FormArea>
      </ScrollViewContent>
    </Container>
  );
}