import { useEffect, useState } from "react";
import { TasksContext } from "./TasksContext";

import { useLocalStorage } from "./useLocalStorage";


const TasksProvider = ( { children } ) => {
  
  const [taskList, setTaskList] = useLocalStorage("taskList", []);

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const sidebarToggle = () => {
    setSidebarIsOpen(!sidebarIsOpen)
  }

  useEffect(() => {
    const data = localStorage.getItem("taskList");
    setTaskList(JSON.parse(data))
  }, [])

  const handleSaveTask = (task) => {
    const newTask = [...taskList, task]
    setTaskList(newTask);
  }

  const handleUpdateTask = (updatedTask) => {
    const updatedTaskList = taskList;
    updatedTaskList.map((item, index) => {
      if (item.id === updatedTask.id){
        updatedTaskList.splice(index, 1, updatedTask);
      } 
      return item;
    })
    setTaskList([...updatedTaskList]); 
  }

  const handleDeleteTask = (id) => {
    const data = taskList.filter((task) => task.id !== id );
    setTaskList(data);
  }

  const handleCompleteTask = (id) => {
    const data = taskList.map((item) => {
      if (item.id === id){
       item.isCompleted = !item.isCompleted;
       item.date = new Date().toLocaleString();
      }
      return item;
    })
    setTaskList(data);
  }

  return (
    <TasksContext.Provider
      value={{
        taskList,
        onTaskListUpdate: setTaskList,
        sidebarIsOpen,
        sidebarToggle,
        onSaveTask: handleSaveTask,
        onUpdateTask: handleUpdateTask,
        onDeleteTask: handleDeleteTask,
        onCompleteTask: handleCompleteTask
      }}
    > 
      {children}
    </TasksContext.Provider>
  );
};

export { TasksProvider };