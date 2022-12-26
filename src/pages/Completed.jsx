
import { useEffect, useContext } from "react";
import {Sidebar} from "../components/sidebar/Sidebar";
import { Context } from "../context/Context";
import {TaskItem} from "../components/card/TaskItem";

const Completed = () => {
  const [taskList, setTaskList] = useContext(Context);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('taskList'));
    if (data){
      setTaskList(data)
    }
  }, [])

  const items = taskList.map((item, i) => {
    return (
      <TaskItem
        value={item.value} 
        key={i} 
        taskObj={item}
        index={i}
      />
    )
  })

  const completedItems = items.filter(item => item.props.taskObj.completed);


  return (
      <div className="d-flex flex-wrap container-fluid pe-0 ps-0 justify-content-between pb-5">
        <Sidebar/>
        <div className="matrix-wrap">
          <div className="header">
            <h1>Completed Tasks</h1>
          </div>     
          <div className="task-item">
              <span className="task-header cmpl">Completed<span className='circle'>{completedItems.length}</span></span>
              <div className="task-wrap">
                {completedItems.length? completedItems : 'There is no completed tasks'}
              </div> 
            </div>
        </div>
      </div>
  );
};

export default Completed;