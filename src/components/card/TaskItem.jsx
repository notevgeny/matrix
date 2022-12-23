import { useState } from "react";
import EditTask from "../../modals/EditTask";
import './taskItem.css';


const TaskItem = ({ taskObj, index, updateTask, deleteTask, completeTask}) => {

  let classNames = "list-item";
  if (taskObj.completed){
    classNames += ' completed';
  }

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const onUpdate = (obj) => {
    updateTask(obj, index);
    setModal(false);
  } 

  const onDelete = () => {
    deleteTask(index)
  }

  const onComplete = () => {
    completeTask(index)
  }

  const date = taskObj.completed? taskObj.date : null;

  return (
    <li className={classNames}> 
      <span className="list-item-name" onDoubleClick={onComplete}>{taskObj.taskName}</span>
      <span className="list-item-descr">{taskObj.taskDescription}</span>
      <span className="list-item-descr">{date}</span>
      {/* <div className="list-item-status">
        <span>{taskObj.important? <i className="fa-solid fa-circle-exclamation"></i> : ''}</span>
        <span>{taskObj.urgent? <i className="fa-solid fa-clock"></i> : ''}</span>
      </div> */}
      
      <div className="d-flex align-items-center">
        <button 
          onClick={() => setModal(true)}
          type="button" 
          className="btn-sm" 
          style={{marginRight: '0.5rem'}}
          >
          <i className="fas fa-edit"></i>
        </button>

        <button
          onClick={onDelete}
          type="button" 
          className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>
      </div>
      <EditTask taskObj={taskObj} modal={modal} toggle={toggle} updateTask={onUpdate}/>
    </li>
  );
};

export default TaskItem;