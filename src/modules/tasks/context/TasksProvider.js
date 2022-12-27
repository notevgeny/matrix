import { useLocalStorage } from "usehooks-ts";

import { TasksContext } from "./TasksContext";

const TasksProvider = ({ children }) => {
  const [taskList, setTaskList] = useLocalStorage("taskList", []);

  const handleSaveTask = (taskObj) => {
    setTaskList([...taskList, taskObj]);
  };

  const handleUpdateTask = (updatedTask) => {
    const newTaskList = taskList;

    newTaskList.map((item, index) => {
      if (item.id === updatedTask.id) {
        taskList.splice(index, 1, updatedTask);
      }
    });

    setTaskList([...newTaskList]);
  };

  const handleDeleteTask = (id) => {
    const newTaskList = taskList.filter((task) => task.id !== id);

    setTaskList(newTaskList);
  };

  const handleCompleteTask = (id) => {
    const newTaskList = taskList.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
        item.date = new Date().toLocaleString();
      }
      return item;
    });

    // setLocalStorage(data);

    setTaskList(newTaskList);
  };

  return (
    <TasksContext.Provider
      value={{
        taskList,
        onTaskListUpdate: setTaskList,
        onSaveTask: handleSaveTask,
        onUpdateTask: handleUpdateTask,
        onDeleteTask: handleDeleteTask,
        onCompleteTask: handleCompleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export { TasksProvider };
