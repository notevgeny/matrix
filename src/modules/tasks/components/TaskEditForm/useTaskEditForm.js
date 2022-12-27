import { useCallback, useState } from "react";

const useTaskEditForm = (task) => {
  const initialValues = {
    taskName: task?.taskName ?? "",
    taskDescription: task?.taskDescription ?? "",
    isImportant: task?.important ?? true,
    isUrgent: task?.urgent ?? true,
    isCompleted: task?.completed ?? false,
    dateCompleted: task?.date ?? new Date(),
  };

  const [values, setValues] = useState(initialValues);

  const handleTaskNameChange = useCallback(
    (taskName) => {
      setValues({ ...values, taskName });
    },
    [values, setValues],
  );

  const handleTaskDescriptionChange = useCallback(
    (taskDescription) => {
      setValues({ ...values, taskDescription });
    },
    [values, setValues],
  );

  const handleIsImportantChange = useCallback(
    (isImportant) => {
      setValues({ ...values, isImportant });
    },
    [values, setValues],
  );

  const handleIsUrgentChange = useCallback(
    (isUrgent) => {
      setValues({ ...values, isUrgent });
    },
    [values, setValues],
  );

  const handleIsCompletedChange = useCallback(
    (isCompleted) => {
      setValues({ ...values, isCompleted });
    },
    [values, setValues],
  );

  const handleDateCompletedChange = useCallback(
    (dateCompleted) => {
      setValues({ ...values, dateCompleted });
    },
    [values, setValues],
  );

  const handleFormReset = useCallback(() => {
    setValues(initialValues);
  }, [initialValues, setValues]);

  return {
    values,
    handlers: {
      onTaskNameChange: handleTaskNameChange,
      onTaskDescriptionChange: handleTaskDescriptionChange,
      onIsImportantChange: handleIsImportantChange,
      onIsUrgentChange: handleIsUrgentChange,
      onIsCompletedChange: handleIsCompletedChange,
      onDateCompletedChange: handleDateCompletedChange,
      onFormReset: handleFormReset,
    },
  };
};

export { useTaskEditForm };
