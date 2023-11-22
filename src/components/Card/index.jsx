import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ref, remove } from 'firebase/database';
import {
  Container,
  SubContainer,
  TextDescription,
} from "./styles";
import { db } from "../../services/firebaseConnection";
import { CustomSubmitButton } from "../../components/Button";

export default function Task({ data }) {
  const navigation = useNavigation();
  const taskKey = data.id;

  const onSubmitDelete = async () => {
    const taskRef = ref(db, `/tasks/${taskKey}`);
    await remove(taskRef)
      .then(() => {
        Alert.alert(`Task removida com sucesso.`);
        navigation.navigate("Task");
      })
      .catch((error) => {
        Alert.alert("Erro ao deletar: ", error);
      });
  };

  const onSubmitEdit = async (data) => {
    navigation.navigate("EditTask", {task: data});
  };

  return (
    <Container>
      <SubContainer>
        <TextDescription>Nome</TextDescription>
        <TextDescription>{data.name}</TextDescription>
      </SubContainer>
      <SubContainer>
        <TextDescription>Prazo</TextDescription>
        <TextDescription>{data.deadline}</TextDescription>
      </SubContainer>

      <SubContainer>
        <TextDescription>Status</TextDescription>
        <TextDescription>{data.status}</TextDescription>
      </SubContainer>

      <SubContainer>
        <CustomSubmitButton
          activeOpacity={0.8}
          onPress={() => onSubmitEdit(data)}
          text="Editar"
        />

        <CustomSubmitButton
          activeOpacity={0.8}
          onPress={() => onSubmitDelete()}
          text="Excluir"
        />
      </SubContainer>
    </Container>
  );
}
