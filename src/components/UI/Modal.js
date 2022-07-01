import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClose} />;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
    </div>
  );
}

const protalElemant = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, protalElemant)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        protalElemant
      )}
    </Fragment>
  );
}

export default Modal;
