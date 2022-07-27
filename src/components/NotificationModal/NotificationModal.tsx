import "./NotificationModal.scss";
import Modal from "react-modal";
import { useUIStore } from "../../state/store";
import BaseButton from "../BaseButton/BaseButton";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    backgroundColor: "transparent",
  },
};

interface INotificationModalProps {
  message: string;
  description: string;
}

Modal.setAppElement("#root");

const NotificationModal = ({ message, description }: INotificationModalProps) => {
  const { isNotificationModalOpen, closeNotificationModal } = useUIStore((state) => state);

  return (
    <Modal
      isOpen={isNotificationModalOpen}
      onRequestClose={closeNotificationModal}
      style={customStyles}
      contentLabel="Confirm Delete"
    >
      <section className="notification-modal">
        <div className="notification-modal__content">
          <h2 className="notification-modal__title">{message}</h2>
          <p className="notification-modal__description">{description}</p>
        </div>
        <div>
          <BaseButton name="Close" variant="primary" func={closeNotificationModal} />
        </div>
      </section>
    </Modal>
  );
};

export default NotificationModal;
