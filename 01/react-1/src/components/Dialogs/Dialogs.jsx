import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "./../../redux/dialog_reducer";

const Dialogs = (props) => {
  let dialogsEl = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesEl = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageBody = props.state.newMessageBody;

  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsEl}</div>
      <div className={s.messages}>
        <div>{messagesEl}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              placeholder="Enter your message"
              onChange={onNewMessageChange}
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
