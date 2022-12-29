import { useState } from "react";
import { useTasks } from "../../modules/tasks";

import { SetModal } from "../../TaskEditModal/TaskEditModal";

import './taskItem.css';

const TaskItem = ({ task }) => {

  const { onUpdateTask, onDeleteTask, onCompleteTask } = useTasks();

  let classNames = "list-item";
  if (task.isCompleted){
    classNames += ' completed';
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleIsModalOpen = () => setIsModalOpen(!isModalOpen);

  const handleUpdate = (obj) => {
    onUpdateTask(obj);
    setIsModalOpen(false);
  } 

  const handleDelete = () => {
    onDeleteTask(task.id)
  }

  const handleComplete = () => {
    onCompleteTask(task.id)
  }

  const dateOfTaskComplete = task.isCompleted? task.date : null;

  return (
    <li className={classNames}> 
      <span className="list-item-name" onClick={handleComplete}>{task.name}</span>
      <span className="list-item-descr">{task.description}</span>
      <span className="list-item-descr">{dateOfTaskComplete}</span>
      {/* <div className="list-item-status">
        <span>{taskObj.isImportant? <i className="fa-solid fa-circle-exclamation"></i> : ''}</span>
        <span>{taskObj.isUrgent? <i className="fa-solid fa-clock"></i> : ''}</span>
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
        taskId={task.id}
        task={task} 
        isModalOpen={isModalOpen} 
        onToggleIsModalOpen={handleToggleIsModalOpen} 
        onUpdateTask={handleUpdate} 
        isModalToCreate={false}
      />
        
    </li>
  );
};

export {TaskItem};