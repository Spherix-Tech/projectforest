import Modal from "react-modal";
Modal.setAppElement("#__next");
function PopupWrapper({ Component }) {
  return (
    <div>
      <div>PopupWrapper</div>
      <Modal isOpen={true}>
        <Component />
        AAAA
      </Modal>
    </div>
  );
}

export default PopupWrapper;
