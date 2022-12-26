import { useState, useEffect, useContext } from 'react';
import { Sidebar } from '../sidebar/Sidebar';
import { TaskItem } from '../card/TaskItem';
import { Context } from '../../context/Context';
import { SetModal } from '../../modal/SetModal';
import Button from 'react-bootstrap/Button';
import './todolist.css';



const TodoList = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  const [taskList, setTaskList] = useContext(Context);

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

  const toggleIsModalOpen = () => setIsModalOpen(!isModalOpen);

  const saveTask = (taskObj) => {
    const newTask = [...taskList, taskObj]
    setLocalStorage(newTask);
    setIsModalOpen(false);
  }

  const updateTask = (taskObj) => {
    taskList.map((item, index) => {
      if (item.id === taskObj.id){
        taskList.splice(index, 1, taskObj);
      }
    })
    setLocalStorage([...taskList]);
    setUpdate(!update);
  }

  const deleteTask = (id) => {
    let data = taskList.filter((elem) => elem.id !== id );
    setLocalStorage(data);
  }

  const completeTask = (id) => {
    let data = taskList.map((item) => {
      if (item.id === id){
       item.completed = !item.completed;
       item.date = new Date().toLocaleString();
      }
      return item;
    })
    setLocalStorage(data);
  }

  const items = taskList.map((item) => {
    return (
      <TaskItem
        value={item.value} 
        key={item.id}
        taskObj={item}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
        onCompleteTask={completeTask}
      />
    )
  })

  const attentionItems = items.filter(item => item.props.taskObj.urgent && item.props.taskObj.important && !item.props.taskObj.completed);
  const urgentItems = items.filter(item => item.props.taskObj.urgent && !item.props.taskObj.important && !item.props.taskObj.completed);
  const importantItems = items.filter(item => item.props.taskObj.important && !item.props.taskObj.urgent && !item.props.taskObj.completed);
  const usualItems = items.filter(item => !item.props.taskObj.important && !item.props.taskObj.urgent && !item.props.taskObj.completed);
  const completedItems = items.filter(item => item.props.taskObj.completed);
  const allItems = items.filter(item => !item.props.taskObj.completed);

  return (
    <>   
      <div className="main-container d-flex flex-wrap container-fluid pe-0 ps-0 justify-content-between">
        <Sidebar/>
        <div className="matrix-wrap flex-grow-1">
          <div className="header d-flex align-items-center">
            <h1>Your tasklist</h1>
          </div>
          <div className="task-container task-container-header">  
          <span className='d-flex align-items-center'>All tasks: {allItems.length}</span>
          <Button variant="primary" style={{justifySelf: 'end', width: '3rem', fontSize: '1.5rem', lineHeight: '1.2'}} onClick={() => setIsModalOpen(true)}>+</Button>
          </div>
          <div className="task-container">
            <div className="task-item">
              <span className="task-header imp-urg">Important & urgent <span className='circle'>{attentionItems.length}</span></span>
              <div className="task-wrap">
                {attentionItems.length? attentionItems : "There is no tasks yet"}
              </div>
            </div>
            <div className="task-item">
              <span className="task-header imp">Important <span className='circle'>{importantItems.length}</span></span>
              <div className="task-wrap">
                {importantItems.length? importantItems : "There is no tasks yet"}
              </div> 
            </div>
            <div className="task-item">
              <span className="task-header urg">Urgent <span className='circle'>{urgentItems.length}</span></span>
              <div className="task-wrap">
                {urgentItems.length? urgentItems : "There is no tasks yet"}
              </div> 
            </div>
            <div className="task-item">
              <span className="task-header usual">Usual <span className='circle'>{usualItems.length}</span></span>
              <div className="task-wrap">
                {usualItems.length ? usualItems : "There is no tasks yet" }
              </div>
            </div>
          </div>
          <div className="task-container-100">
            <div className="task-item">
              <span className="task-header cmpl">Completed<span className='circle'>{completedItems.length}</span></span>
              <div className="task-wrap">
                {completedItems.length? completedItems : 'There is no completed tasks'}
              </div> 
            </div>
          </div>
        </div>
      </div>
  
      <SetModal isModalOpen={isModalOpen} onToggleIsModalOpen={toggleIsModalOpen} onSaveTask={saveTask} onSave={true}/>
    </>
  )
}

export {TodoList};

