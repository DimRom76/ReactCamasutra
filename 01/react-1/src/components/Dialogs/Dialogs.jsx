import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Дима" },
    { id: 2, name: "Лена" },
    { id: 3, name: "Аня" },
    { id: 4, name: "Максим" },
  ];
  let messagesDate = [
    { id: 1, message: "Привет" },
    { id: 2, message: "Как дела" },
    { id: 3, message: "Что делаешь?" },
    { id: 4, message: "Yo" },
  ];

  let dialogsEl = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesEl = messagesDate.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsEl}</div>
      <div className={s.messages}>{messagesEl}</div>
    </div>
  );
};

export default Dialogs;
