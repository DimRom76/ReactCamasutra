import dialogReducer from "./dialog_reducer";
import sidebarReducer from "./sidebar_reducer";
import profileReducer from "./profile_reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi", likesCount: 12 },
        { id: 2, message: "Как дела", likesCount: 11 },
        { id: 3, message: "It's my text", likesCount: 5 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Дима" },
        { id: 2, name: "Лена" },
        { id: 3, name: "Аня" },
        { id: 4, name: "Максим" },
      ],
      messages: [
        { id: 1, message: "Привет" },
        { id: 2, message: "Как дела" },
        { id: 3, message: "Что делаешь?" },
        { id: 4, message: "Yo" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //патторн наблюдатель
  },

  //action = {type: 'ADD-POST} какое действие совершить
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
