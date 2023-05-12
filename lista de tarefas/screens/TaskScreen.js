import { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { CardTask } from "../components/CardTask";
import { getTasks, createTask, updateTask, removeTask } from "../api/task";

export const TaskScreen = ({ navigation }) => {
  const queryClient = useQueryClient();
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
  const [description, setDescription] = useState("");

  const createMutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const removeMutation = useMutation({
    mutationFn: removeTask,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const handleAddTask = () => {
    createMutation.mutate({ description, done: false });
    setDescription("");
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isFetching && <Text>IS FETCHING</Text>}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          margin: 5,
        }}
      >
        <TextInput
          placeholder="Descrição da tarefa"
          value={description}
          onChangeText={setDescription}
          style={{
            borderColor: "gray",
            borderWidth: 1,
            marginRight: 5,
          }}
        />
        <Button title="Adicionar" onPress={handleAddTask} />
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={data.results}
        keyExtractor={(item) => item.objectId}
        renderItem={({ item }) => (
          <CardTask
            task={item}
            navigation={navigation}
            taskDoneChange={updateMutation.mutate}
            removeTask={removeMutation.mutate}
          />
        )}
      />
    </View>
  );
};
