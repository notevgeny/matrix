import { Button, FormGroup, Input, Label } from "reactstrap";
import { v4 as uuidv4 } from "uuid";

import { useTaskEditForm } from "./useTaskEditForm";
import { useTasks } from "../../context/useTasks";

const TaskEditForm = ({ formType, task, onModalIsOpenToggle }) => {
  const { values, handlers } = useTaskEditForm(task);
  const { onSaveTask, onUpdateTask } = useTasks();

  const handleSave = () => {
    const newTask = {
      id: uuidv4(),
      taskName: values.taskName,
      taskDescription: values.taskDescription,
      important: values.isImportant,
      urgent: values.isUrgent,
      completed: values.isCompleted,
      date: values.dateCompleted,
    };

    onSaveTask(newTask);
  };

  const handleUpdate = () => {
    const newTask = {
      id: task.id,
      taskName: values.taskName,
      taskDescription: values.taskDescription,
      important: values.isImportant,
      urgent: values.isUrgent,
      completed: values.isCompleted,
      date: values.dateCompleted,
    };

    onUpdateTask(newTask);
  };

  return (
    <form>
      <div className="form-group">
        <label>Task name</label>
        <input
          value={values.taskName}
          onChange={(e) => handlers.onTaskNameChange(e.target.value)}
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group mt-3">
        <label>Description</label>
        <textarea
          value={values.taskDescription}
          onChange={(e) => handlers.onTaskDescriptionChange(e.target.value)}
          className="form-control"
          rows="5"
        ></textarea>
      </div>
      <FormGroup switch className="mt-3">
        <Input
          type="switch"
          checked={values.isImportant}
          onChange={() => {
            handlers.onIsImportantChange(!values.isImportant);
          }}
        />
        <Label>The task is important</Label>
      </FormGroup>
      <FormGroup switch>
        <Input
          type="switch"
          checked={values.isUrgent}
          onChange={() => {
            handlers.onIsUrgentChange(!values.isUrgent);
          }}
        />
        <Label>The task is urgent</Label>
      </FormGroup>

      {formType === "create" && (
        <Button
          color="primary"
          onClick={() => {
            handleSave();
            handlers.onFormReset();
            onModalIsOpenToggle();
          }}
        >
          Create
        </Button>
      )}

      {formType === "update" && (
        <Button
          color="primary"
          onClick={() => {
            handleUpdate();
            onModalIsOpenToggle();
          }}
        >
          Update
        </Button>
      )}
    </form>
  );
};

export { TaskEditForm };
