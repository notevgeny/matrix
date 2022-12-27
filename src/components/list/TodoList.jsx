import { useState } from "react";

import { useTasks } from "../../modules/tasks";
import { Sidebar } from "../sidebar/Sidebar";
import { TaskItem } from "../card/TaskItem";
import { SetModal } from "../../modal/SetModal";
import Button from "react-bootstrap/Button";

import "./todolist.css";

const TodoList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { taskList, onSaveTask } = useTasks();

  const toggleIsModalOpen = () => setIsModalOpen(!isModalOpen);

  // console.log({ taskCards });

  const taskCards = taskList.map((item) => {
    return <TaskItem key={item.id} taskObj={item} />;
  });

  const attentionCards = taskCards.filter(
    (item) =>
      item.props.taskObj.urgent &&
      item.props.taskObj.important &&
      !item.props.taskObj.completed,
  );
  const urgentCards = taskCards.filter(
    (item) =>
      item.props.taskObj.urgent &&
      !item.props.taskObj.important &&
      !item.props.taskObj.completed,
  );
  const importantCards = taskCards.filter(
    (item) =>
      item.props.taskObj.important &&
      !item.props.taskObj.urgent &&
      !item.props.taskObj.completed,
  );
  const usualCards = taskCards.filter(
    (item) =>
      !item.props.taskObj.important &&
      !item.props.taskObj.urgent &&
      !item.props.taskObj.completed,
  );
  const allCards = taskCards.filter((item) => !item.props.taskObj.completed);

  return (
    <>
      <div className="main-container d-flex flex-wrap container-fluid pe-0 ps-0 justify-content-between">
        <Sidebar />
        <div className="matrix-wrap flex-grow-1">
          <div className="header d-flex align-items-center">
            <h1>Your tasklist</h1>
          </div>
          <div className="task-container task-container-header">
            <span className="d-flex align-items-center">
              All tasks: {allCards.length}
            </span>
            <Button
              variant="primary"
              style={{
                justifySelf: "end",
                width: "3rem",
                fontSize: "1.5rem",
                lineHeight: "1.2",
              }}
              onClick={() => setIsModalOpen(true)}
            >
              +
            </Button>
          </div>
          <div className="task-container">
            <div className="task-item">
              <span className="task-header imp-urg">
                Important & urgent{" "}
                <span className="circle">{attentionCards.length}</span>
              </span>
              <div className="task-wrap">
                {attentionCards.length
                  ? attentionCards
                  : "There is no tasks yet"}
              </div>
            </div>
            <div className="task-item">
              <span className="task-header imp">
                Important{" "}
                <span className="circle">{importantCards.length}</span>
              </span>
              <div className="task-wrap">
                {importantCards.length
                  ? importantCards
                  : "There is no tasks yet"}
              </div>
            </div>
            <div className="task-item">
              <span className="task-header urg">
                Urgent <span className="circle">{urgentCards.length}</span>
              </span>
              <div className="task-wrap">
                {urgentCards.length ? urgentCards : "There is no tasks yet"}
              </div>
            </div>
            <div className="task-item">
              <span className="task-header usual">
                Usual <span className="circle">{usualCards.length}</span>
              </span>
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
        isModalToSave={true}
      />
    </>
  );
};

export { TodoList };
