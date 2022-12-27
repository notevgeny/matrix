import { useEffect } from "react";
import { useTasks } from "../modules/tasks";

import { Sidebar } from "../components/sidebar/Sidebar";
import { TaskItem } from "../components/card/TaskItem";


const Completed = () => {

  const { taskList } = useTasks();

  const taskCards = taskList.map((item) => {
    return (
      <TaskItem
        value={item.value} 
        key={item.id} 
        taskObj={item}
      />
    )
  })

  const completedCards = taskCards.filter(item => item.props.taskObj.completed);

  return (
      <div className="d-flex flex-wrap container-fluid pe-0 ps-0 justify-content-between pb-5">
        <Sidebar/>
        <div className="matrix-wrap">
          <div className="header">
            <h1>Completed Tasks</h1>
          </div>     
          <div className="task-item">
              <span className="task-header cmpl">Completed<span className='circle'>{completedCards.length}</span></span>
              <div className="task-wrap">
                {completedCards.length? completedCards : 'There is no completed tasks'}
              </div> 
            </div>
        </div>
      </div>
  );
};

export default Completed;