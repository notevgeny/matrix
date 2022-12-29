import { useState } from 'react';
import { useTasks } from '../../modules/tasks';

import { Sidebar } from '../Sidebar/Sidebar';
import { TaskItem } from '../TaskItem/TaskItem';
import { SetModal } from '../../TaskEditModal/TaskEditModal';

import Button from 'react-bootstrap/Button';
import './todolist.css';

const TodoList = () => {

  const [ isModalOpen, setIsModalOpen] = useState(false);
  const { taskList, onSaveTask } = useTasks();

  const toggleIsModalOpen = () => setIsModalOpen(!isModalOpen);

  const taskCards = taskList.map((item) => {
    return <TaskItem key={item.id} task={item} />
  })

  const attentionCards = taskCards.filter(item => item.props.task.isUrgent && item.props.task.isImportant && !item.props.task.isCompleted);
  const urgentCards = taskCards.filter(item => item.props.task.isUrgent && !item.props.task.isImportant && !item.props.task.isCompleted);
  const importantCards = taskCards.filter(item => item.props.task.isImportant && !item.props.task.isUrgent && !item.props.task.isCompleted);
  const usualCards = taskCards.filter(item => !item.props.task.isImportant && !item.props.task.isUrgent && !item.props.task.isCompleted);
  const allCards = taskCards.filter(item => !item.props.task.isCompleted);

  return (
  <>
    <div className="main-container d-flex flex-wrap container-fluid pe-0 ps-0 justify-content-between">
      <Sidebar />
      <div className="matrix-wrap">
        <div className="header d-flex align-items-center">
          <h1>Your tasklist</h1>
        </div>
        <div className="task-container task-container-header">
          <span className='d-flex align-items-center'>All tasks: {allCards.length}</span>
          <Button variant="primary" style={{ justifySelf: 'end', width: '3rem', fontSize: '1.5rem', lineHeight: '1.2' }}
            onClick={()=> setIsModalOpen(true)}>+</Button>
        </div>
        <div className="task-container">
          <div className="task-item">
            <span className="task-header imp-urg">Important & urgent <span
                className='circle'>{attentionCards.length}</span></span>
            <div className="task-wrap">
              {attentionCards.length ? attentionCards : "There is no tasks yet"}
            </div>
          </div>
          <div className="task-item">
            <span className="task-header imp">Important <span className='circle'>{importantCards.length}</span></span>
            <div className="task-wrap">
              {importantCards.length ? importantCards : "There is no tasks yet"}
            </div>
          </div>
          <div className="task-item">
            <span className="task-header urg">Urgent <span className='circle'>{urgentCards.length}</span></span>
            <div className="task-wrap">
              {urgentCards.length ? urgentCards : "There is no tasks yet"}
            </div>
          </div>
          <div className="task-item">
            <span className="task-header usual">Usual <span className='circle'>{usualCards.length}</span></span>
            <div className="task-wrap">
              {usualCards.length ? usualCards : "There is no tasks yet"}
            </div>
          </div>
        </div>
        {/* <div className="task-container-100">
          <div className="task-item">
            <span className="task-header cmpl">Completed<span className='circle'>{completedItems.length}</span></span>
            <div className="task-wrap">
              {completedItems.length? completedItems : 'There is no completed tasks'}
            </div>
          </div>
        </div> */}
      </div>
    </div>

    <SetModal 
      isModalOpen={isModalOpen} 
      onToggleIsModalOpen={toggleIsModalOpen} 
      onSaveTask={onSaveTask}
      isModalToCreate={true} 
    />
  </>
  )
}

export { TodoList };