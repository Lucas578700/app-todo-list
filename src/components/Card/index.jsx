import React, { useEffect, useState } from "react";
import { Alert, Image, RefreshControl } from "react-native";
import { ref, onValue } from "firebase/database";
import { db } from "../../services/firebaseConnection";
import {
    Card,
    Label,
    StyledTextDescription,
    StyledTextData,
    Button,
    ButtonText,
    ModalBackground,
    ModalButton,
    ModalButtonContainer,
    ModalButtonText,
    ModalContainer,
    ModalContent,
    ModalText,
  } from "./styles";

export default function CardComponent({ data }) {
  const [isConfirmationModalVisible, setConfirmationModalVisible] =
    useState(false);

  const openConfirmationModal = () => {
    setConfirmationModalVisible(true);
  };

  const closeConfirmationModal = () => {
    setConfirmationModalVisible(false);
  };

  async function deleteTasks(id) {
    const taskRef = ref(db, `/tasks/${id}`); // Substitua 'seu_nodo' pelo caminho correto
    remove(taskRef)
      .then(() => {
        Alert.alert("Tarefa deletada com sucesso!");
      })
      .catch((error) => {
        Alert.alert(`Erro ao remover o usuário: ${error}`);
      });
  }


  return (
    <>
      <Card>
        <Label>Nome</Label>
        <StyledTextDescription>{data.name}</StyledTextDescription>
        <Label>Status</Label>
        <StyledTextData>{data.status}</StyledTextData>
        <Label>Deadline</Label>
        <StyledTextData>{data.deadline}</StyledTextData>
      </Card>

      <Button onPress={openConfirmationModal}>
        <ButtonText>Excluir</ButtonText>
      </Button>

      <ModalContainer
        visible={isConfirmationModalVisible}
        transparent={true}
        animationType="slide"
      >
        <ModalBackground>
          <ModalContent>
            <ModalText>
              Tem certeza de que deseja excluir este tarefa?
            </ModalText>
            <ModalButtonContainer>
              <ModalButton onPress={() => deleteTasks(data.id)}>
                <ModalButtonText>Confirmar</ModalButtonText>
              </ModalButton>
              <ModalButton onPress={closeConfirmationModal}>
                <ModalButtonText>Cancelar</ModalButtonText>
              </ModalButton>
            </ModalButtonContainer>
          </ModalContent>
        </ModalBackground>
      </ModalContainer>
    </>
  );
}
