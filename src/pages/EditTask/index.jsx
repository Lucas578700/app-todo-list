import React, { useState } from "react";

import { Keyboard, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ref, update } from "firebase/database";
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

export default function EditTask() {
  const navigation = useNavigation();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const route = useRoute();
  const task = route.params.task;

  const dateParts = task.deadline.split("/");
  const customFormatObject = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: task.name,
      deadline: customFormatObject,
      status: task.status,
    },
    resolver: yupResolver(createTaskSchema),
  });

  const onListTasks = async () => {
    navigation.navigate("ListTasks");
  };

  const onSubmitEdit = async (data) => {
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
      const userRef = ref(db, `/tasks/${task.id}`);
      await update(userRef, newData);

      reset(data);
      navigation.navigate("ListTasks");
    } catch (error) {
      Alert.alert("Erro ao criar: ", error.message);
    }
  };

  return (
    <Container>
      <CustomHeader title={`Editar tarefa ${task.name}`} />
      <ScrollViewContent>
        <FormArea>
          <CustomInput
            name="name"
            label="NOME"
            placeholder="DIGITE O NOME"
            control={control}
            error={errors.name}
          />

          <InputContainer>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <Label>DATA DE EXPIRAÇÃO</Label>
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
                  <Label>STATUS</Label>
                  <StatusPicker
                    control={control}
                    value={value}
                    onChange={onChange}
                    showPicker={task.status}
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
              onPress={handleSubmit(onSubmitEdit)}
              text="Editar"
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
