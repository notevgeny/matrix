import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import { TaskEditForm } from "../modules/tasks/components/TaskEditForm";

const SetModal = ({
  taskObj,
  isModalOpen,
  onToggleIsModalOpen,
  isModalToSave,
}) => {
  return (
    <Modal isOpen={isModalOpen} toggle={onToggleIsModalOpen}>
      <ModalHeader toggle={onToggleIsModalOpen}>
        {isModalToSave ? "Create Task" : "Update Task"}
      </ModalHeader>
      <ModalBody>
        <TaskEditForm
          formType={isModalToSave ? "create" : "update"}
          task={taskObj}
          onModalIsOpenToggle={onToggleIsModalOpen}
        />
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={onToggleIsModalOpen}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export { SetModal };
