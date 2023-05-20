import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);

  const handleAddTask = () => {
    if (task.trim()) {
      const newTask = {
        id: Math.random().toString(),
        title: task,
        completed: false,
      };

      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  const handleToggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(updatedTasks);
    updateCompletedCount(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    updateCompletedCount(updatedTasks);
  };

  const updateCompletedCount = (updatedTasks) => {
    const completedTasks = updatedTasks.filter((task) => task.completed);
    setCompletedCount(completedTasks.length);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <MaterialIcons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.tasksContainer}>
        {tasks.map((task) => (
          <View key={task.id} style={styles.taskItem}>
            <TouchableOpacity
              style={[styles.taskButton, task.completed && styles.completedTaskButton]}
              onPress={() => handleToggleTask(task.id)}
            >
              {task.completed && <MaterialIcons name="check" size={20} color="white" />}
            </TouchableOpacity>
            <Text style={[styles.taskTitle, task.completed && styles.completedTaskTitle]}>
              {task.title}
            </Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteTask(task.id)}
            >
              <MaterialIcons name="delete" size={24} color="black" />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={styles.countContainer}>
        <Text style={styles.completedCountText}>Concluídas: {completedCount}</Text>
        <Text style={styles.pendingCountText}>Pendentes: {tasks.length - completedCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404040',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 820,
    height: 150,
    marginTop: 1,
    resizeMode: 'contain',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: '#000000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tasksContainer: {
    flex: 1,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#dcdcdc',
    padding: 10,
    borderRadius: 5,
  },
  taskButton: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  completedTaskButton: {
    backgroundColor: '#000000',
  },
  taskTitle: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  completedTaskTitle: {
    textDecorationLine: 'line-through',
    color: '#808080',
  },
  deleteButton: {
    marginLeft: 10,
  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  completedCountText: {
    fontWeight: 'bold',
    color: '#000000',
  },
  pendingCountText: {
    color: '#000000',
  },
});

export default App;
