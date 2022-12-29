import { useContext } from "react";
import { TasksContext } from './TasksContext';

const useTasks = () => {
  const {
    taskList, 
    onTaskListUpdate,
    sidebarIsOpen,
    sidebarToggle,
    onSaveTask,
    onUpdateTask,
    onDeleteTask,
    onCompleteTask
  } = useContext(TasksContext);

  return { 
    taskList, 
    onTaskListUpdate,
    sidebarIsOpen,
    sidebarToggle, 
    onSaveTask, 
    onUpdateTask, 
    onDeleteTask, 
    onCompleteTask 
  };
};

export { useTasks };