import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { TaskEditForm } from '../components/TaskEditForm/TaskEditForm';

const SetModal = ({task, isModalOpen, onToggleIsModalOpen, isModalToCreate, onSaveTask, onUpdateTask}) => {

  return (
    <Modal isOpen={isModalOpen} toggle={onToggleIsModalOpen}>
      <ModalHeader toggle={onToggleIsModalOpen}>{ isModalToCreate ? 'Create Task' : 'Update Task'}</ModalHeader>
      <ModalBody>
        <TaskEditForm
          task={task} 
          isModalToCreate={isModalToCreate}
          onSaveTask={onSaveTask}
          onUpdateTask={onUpdateTask}
          onToggleIsModalOpen={onToggleIsModalOpen}
        />
      </ModalBody>
    </Modal>
  );
};

export {SetModal};