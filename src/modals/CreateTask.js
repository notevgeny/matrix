import { useState, useRef } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';

const CreateTask = ({modal, toggle, saveTask}) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [important, setImportant] = useState(true);
  const [urgent, setUrgent] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [date, setDate] = useState();

  const ref = useRef(null);

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {}
    taskObj["taskName"] = taskName;
    taskObj["taskDescription"] = taskDescription;
    taskObj["important"] = important;
    taskObj["urgent"] = urgent;
    taskObj["completed"] = completed;
    taskObj["date"] = date;
    saveTask(taskObj);
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

  return (
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
          <Button color="primary" onClick={(e) => {
            handleSave(e)
            handleClear(e)
          }}>
            Create
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
  );
};

export default CreateTask;