import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
} from "react-native";
import {
  useRoute,
  useNavigation,
  useIsFocused,
} from "@react-navigation/native";
import { ref, onValue } from "firebase/database";
import { db } from "../../services/firebaseConnection";
import CardComponent from "../../components/Card";
import {
  Container,
  ScrollViewContent,
  BackgroundImage,
  BackgroundText,
  Button,
} from "./styles";

function Task() {
  const route = useRoute();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [tasks, setTasks] = useState();
  const [loadingTasks, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const loadTasks = async () => {
    try {
      onValue(ref(db, "/tasks"), (querySnapShot) => {
        const tasksFormat = [];
        querySnapShot.forEach((child) => {
          tasksFormat.push({
            id: child.key,
            ...child.val(),
          });
        });
        setTasks(tasksFormat);
        setLoading(false);
      });
    } catch (error) {
      Alert.alert("Error fetching data:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    console.log(isFocused);
    if (isFocused) {
      loadTasks();
    }
  }, [isFocused]);

  const onRefresh = () => {
    setRefreshing(true);
    loadUser();
  };

  if (loadingTasks) {
    return (
      <Container>
        <ActivityIndicator size={36} color="#000" />
      </Container>
    );
  }

  return (
    <>
      <BackgroundImage>
        <BackgroundText>Lista de Tarefas</BackgroundText>
      </BackgroundImage>
      <Button onPress={() => navigation.navigate("CreateTask")}>
          <BackgroundText>Criar nova conta</BackgroundText>
        </Button>
      <Container>
        
        {tasks && (
          <FlatList
            data={tasks}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <CardComponent data={item} />}
          />
        )}
      </Container>
    </>
  );
}

export default Task;
