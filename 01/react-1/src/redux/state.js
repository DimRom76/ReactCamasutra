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
    },
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscriber(observer) {
    this._callSubscriber = observer; //патторн наблюдатель
  },

  //action = {type: 'ADD-POST} какое дествие совершить
  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
