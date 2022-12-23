const TodoActions = () => {
  
  // const basicFunc = () => {
  //   console.log('im basic');
  // }

  const completeTask = (i, taskList) => {
    let data = taskList.map((item, index) => {
      if (index === i){
       item.completed = !item.completed; 
      }
      return item;
    })
    localStorage.setItem("taskList", JSON.stringify(data));
  }

  return {completeTask};
};

export default TodoActions;