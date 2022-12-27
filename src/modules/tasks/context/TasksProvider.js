import { useEffect, useState } from "react";
import { TasksContext } from "./TasksContext";


const TasksProvider = ( { children } ) => {

  const [taskList, setTaskList] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('taskList'));
    if (data){
      setTaskList(data)
    }
  }, [])

  const setLocalStorage = (obj) => {
    localStorage.setItem('taskList', JSON.stringify(obj));
    setTaskList(obj);
  }

    // const handleTaskListChange = useCallback((newTaskList) => {
  //   setTaskList(newTaskList);
  // }, []);

  const handleSaveTask = (taskObj) => {
    const newTask = [...taskList, taskObj]
    setLocalStorage(newTask);
  }

  const handleUpdateTask = (taskObj) => {
    taskList.map((item, index) => {
      if (item.id === taskObj.id){
        taskList.splice(index, 1, taskObj);
      }
    })
    setLocalStorage([...taskList]);
    setUpdate(!update);
  }

  const handleDeleteTask = (id) => {
    let data = taskList.filter((elem) => elem.id !== id );
    setLocalStorage(data);
  }

  const handleCompleteTask = (id) => {
    let data = taskList.map((item) => {
      if (item.id === id){
       item.completed = !item.completed;
       item.date = new Date().toLocaleString();
      }
      return item;
    })
    setLocalStorage(data);
  }

  return (
    <TasksContext.Provider
      value={{
        taskList,
        onTaskListUpdate: setTaskList,
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