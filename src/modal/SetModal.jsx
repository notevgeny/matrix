import { useState, useEffect, useRef } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';

const SetModal = ({taskObj, taskId, isModalOpen, onToggleIsModalOpen, onSave, onSaveTask, onUpdateTask}) => {

  const [id, setId] = useState(taskId);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [important, setImportant] = useState(true);
  const [urgent, setUrgent] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [date, setDate] = useState(new Date());

  const ref = useRef(null);

  useEffect(() => {
    if (!onSave){
      setTaskName(taskObj.taskName);
      setTaskDescription(taskObj.taskDescription);
      setImportant(taskObj.important);
      setUrgent(taskObj.urgent);
      setCompleted(taskObj.completed);
      setDate(taskObj.date);
    } 
    
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj['id'] = uuidv4();
    taskObj["taskName"] = taskName;
    taskObj["taskDescription"] = taskDescription;
    taskObj["important"] = important;
    taskObj["urgent"] = urgent;
    taskObj["completed"] = completed;
    taskObj["date"] = date;
    onSaveTask(taskObj);
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["id"] = id;
    taskObj["taskName"] = taskName;
    taskObj["taskDescription"] = taskDescription;
    taskObj["important"] = important;
    taskObj["urgent"] = urgent;
    taskObj["completed"] = completed;
    taskObj["date"] = date;
    onUpdateTask(taskObj);
  }

  const handleClear = (e) => {
    e.preventDefault();
    setTaskName('');
    setTaskDescription('');
    setImportant(true);
    setUrgent(true);
    setCompleted(false);
    setDate(null);
  }

  const typeOfModal = onSave ? 
    <Button color="primary" onClick={(e) => {
      handleSave(e)
      handleClear(e)
    }}> 
      Create
    </Button> : 
    <Button color="primary" onClick={handleUpdate}> 
      Update
    </Button>


  return (
    <Modal isOpen={isModalOpen} toggle={onToggleIsModalOpen}>
        <ModalHeader toggle={onToggleIsModalOpen}>{ onSave ? 'Create Task' : 'Update Task'}</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Task name</label>
              <input
                ref={ref}
                value={taskName}
                onChange={(e)=> setTaskName(e.target.value)} 
                type="text" 
                className="form-control"/>
            </div>
            <div className="form-group mt-3">
              <label>Description</label>
              <textarea
                value={taskDescription}
                onChange={(e)=> setTaskDescription(e.target.value)} 
                className="form-control" 
                rows="5">
                </textarea>
            </div>
            <FormGroup switch className='mt-3'>
              <Input
                type="switch"
                checked={important}
                onChange={() => {
                  setImportant(important => !important);
                }}
              />
              <Label check>The task is important</Label>
            </FormGroup>
            <FormGroup switch>
              <Input
                  type="switch"
                  checked={urgent}
                  onChange={() => {
                    setUrgent(urgent => !urgent);
                  }}
                />
                <Label check>The task is urgent</Label>
            </FormGroup>
          </form>
        </ModalBody>
        <ModalFooter>
          {typeOfModal}
          <Button color="secondary" onClick={onToggleIsModalOpen}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
  );
};

export {SetModal};