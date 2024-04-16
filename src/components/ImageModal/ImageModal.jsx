import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'zoom-out',
    
  },
};

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, selectedPhoto }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      {selectedPhoto && (
        <img onClick={onRequestClose} src={selectedPhoto.urls.regular} />
      )}
    </Modal>
  );
};

export default ImageModal;