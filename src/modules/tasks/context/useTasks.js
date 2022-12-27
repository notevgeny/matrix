import { useContext } from "react";
import { TasksContext } from './TasksContext';

const useTasks = () => {
  const {
    taskList, 
    onTaskListUpdate,
    onSaveTask,
    onUpdateTask,
    onDeleteTask,
    onCompleteTask
  } = useContext(TasksContext);

  return { 
    taskList, 
    onTaskListUpdate, 
    onSaveTask, 
    onUpdateTask, 
    onDeleteTask, 
    onCompleteTask 
  };
};

export { useTasks };