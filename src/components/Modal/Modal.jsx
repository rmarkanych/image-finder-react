import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalContainer = document.getElementById('modal-js');

const Modal = ({ toggleModal, imgUrl, imgTag }) => {
  const handleClose = e => {
    if (e.target === e.currentTarget) toggleModal();
  };
  return createPortal(
    <div className="overlay" onClick={handleClose}>
      <div className="modal">
        <img src={imgUrl} alt={imgTag} />
      </div>
    </div>,
    modalContainer
  );
};
Modal.propTypes = {
  toggleModal: PropTypes.func,
  imgUrl: PropTypes.string,
  imgTag: PropTypes.string,
};
export default Modal;
