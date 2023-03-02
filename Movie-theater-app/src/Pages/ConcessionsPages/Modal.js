import "./Modal.css";

function Modal(props) {
  return (
    <div className="modal">
      <p>You are not logged in</p>
      <button className="btn btn--alt" onClick={props.onClose}>
        Close
      </button>
    </div>
  );
}

export default Modal;
