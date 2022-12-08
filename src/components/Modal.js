export function Modal(props) {
  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you shure?</p>
      <div className="actions">
        <button className="btn btn--alt" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="btn" onClick={confirmHandler}>
          Confirm
        </button>
      </div>
    </div>
  );
}
