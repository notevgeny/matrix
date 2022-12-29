import { useState, useEffect } from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

const TaskEditForm = ({ task, isModalToCreate, onSaveTask, onUpdateTask, onToggleIsModalOpen }) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isImportant, setIsImportant] = useState(true);
  const [isUrgent, setIsUrgent] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [dateCompleted, setDateCompleted] = useState(new Date());

  useEffect(() => {
    if (!isModalToCreate){
      setName(task.name);
      setDescription(task.description);
      setIsImportant(task.isImportant);
      setIsUrgent(task.isUrgent);
      setIsCompleted(task.isCompleted);
      setDateCompleted(task.dateCompleted);
    } 
    
  }, []);

  const handleSave = () => {
    const newTask = {
      id: uuidv4(),
      name,
      description,
      isImportant,
      isUrgent,
      isCompleted,
      dateCompleted
    };

    onSaveTask(newTask)
  }

  const handleUpdate = () => {
    const updatedTask = {
      id: task.id,
      name,
      description,
      isImportant,
      isUrgent,
      isCompleted,
      dateCompleted
    };
    
    onUpdateTask(updatedTask);
  }

  const handleClear = () => {
    setName('');
    setDescription('');
    setIsImportant(true);
    setIsUrgent(true);
    setIsCompleted(false);
    setDateCompleted(null);
  }

  return (
    <form>
      <div className="form-group">
        <label>Task name</label>
        <input
          value={name}
          onChange={(e)=> setName(e.target.value)} 
          type="text" 
          className="form-control"/>
      </div>
      <div className="form-group mt-3">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e)=> setDescription(e.target.value)} 
          className="form-control" 
          rows="5">
          </textarea>
      </div>
      <FormGroup switch className='mt-3'>
        <Input
          type="switch"
          checked={isImportant}
          onChange={() => {
            setIsImportant(isImportant => !isImportant);
          }}
        />
        <Label check>The task is important</Label>
      </FormGroup>
      <FormGroup switch>
        <Input
            type="switch"
            checked={isUrgent}
            onChange={() => {
              setIsUrgent(isUrgent => !isUrgent);
            }}
          />
          <Label check>The task is urgent</Label>
      </FormGroup>
      <div className="d-flex justify-content-end mt-3 pt-3 border-top">
        
        {
          isModalToCreate && 
          <Button color="primary" onClick={() => {
            handleSave()
            onToggleIsModalOpen()
            handleClear()
          }}> 
          Create
          </Button>
        }
        
        {
          !isModalToCreate && 
          <Button color="primary" onClick={handleUpdate}> 
            Update
          </Button>
        }

        <Button style={{marginLeft: ".5rem"}} color="secondary" onClick={onToggleIsModalOpen}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export {TaskEditForm};