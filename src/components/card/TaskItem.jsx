import { useState } from "react";
import { useTasks } from "../../modules/tasks";

import { SetModal } from "../../modal/SetModal";

import './taskItem.css';

const TaskItem = ({ taskObj }) => {

  const { onUpdateTask, onDeleteTask, onCompleteTask } = useTasks();

  let classNames = "list-item";
  if (taskObj.completed){
    classNames += ' completed';
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleIsModalOpen = () => setIsModalOpen(!isModalOpen);

  const handleUpdate = (obj) => {
    onUpdateTask(obj);
    setIsModalOpen(false);
  } 

  const handleDelete = () => {
    onDeleteTask(taskObj.id)
  }

  const handleComplete = () => {
    onCompleteTask(taskObj.id)
  }

  const dateOfTaskComplete = taskObj.completed? taskObj.date : null;

  return (
    <li className={classNames}> 
      <span className="list-item-name" onDoubleClick={handleComplete}>{taskObj.taskName}</span>
      <span className="list-item-descr">{taskObj.taskDescription}</span>
      <span className="list-item-descr">{dateOfTaskComplete}</span>
      {/* <div className="list-item-status">
        <span>{taskObj.important? <i className="fa-solid fa-circle-exclamation"></i> : ''}</span>
        <span>{taskObj.urgent? <i className="fa-solid fa-clock"></i> : ''}</span>
      </div> */}
      
      <div className="d-flex align-items-center">
        
        <button 
          onClick={() => setIsModalOpen(true)}
          type="button" 
          className="btn-sm" 
          style={{marginRight: '0.5rem'}}
          >
          <i className="fas fa-edit"></i>
        </button>

        <button
          onClick={handleDelete}
          type="button" 
          className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>

      </div>

      <SetModal 
        taskId={taskObj.id}
        taskObj={taskObj} 
        isModalOpen={isModalOpen} 
        onToggleIsModalOpen={handleToggleIsModalOpen} 
        onUpdateTask={handleUpdate} 
        isModalToSave={false}
      />
        
    </li>
  );
};

export {TaskItem};