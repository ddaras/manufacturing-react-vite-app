
import Button from 'react-bootstrap/Button';
import BModal from 'react-bootstrap/Modal';

function Modal({ show, onHide, title, children, submitLabel }) {

  return (
    <BModal show={show} onHide={onHide} size='lg'>
      <BModal.Header closeButton>
        <BModal.Title>{title}</BModal.Title>
      </BModal.Header>
      <BModal.Body>{children}</BModal.Body>
      <BModal.Footer>
        <Button variant="primary" onClick={onHide}>
          {submitLabel}
        </Button>
      </BModal.Footer>
    </BModal>
  );
}

export default Modal;