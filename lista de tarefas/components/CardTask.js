import { StyleSheet, Text, View, Switch, Button } from "react-native";

export const CardTask = ({ task, taskDoneChange, removeTask }) => {
  const handleChange = () => {
    taskDoneChange({ objectId: task.objectId, done: !task.done });
  };

  const handleRemove = () => {
    removeTask(task.objectId);
  };

  return (
    <View style={styles.container}>
      <Text>
        {task.description} - {task.done ? "feita" : "a fazer"}
      </Text>
      <Switch value={task.done} onValueChange={handleChange} />
      <Button title="Remover" onPress={handleRemove} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "floralwhite",
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    padding: 5,
  },
});
