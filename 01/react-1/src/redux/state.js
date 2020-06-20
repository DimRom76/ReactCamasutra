import { rerenderEntireTree } from "../render";

let state = {
  profilePage: {
    postData: [
      { id: 1, message: "Hi", likesCount: 12 },
      { id: 2, message: "Как дела", likesCount: 11 },
      { id: 3, message: "It's my text", likesCount: 5 },
    ],
    newPostText: "",
  },

  messagesPage: {
    messagesDate: [
      { id: 1, message: "Привет" },
      { id: 2, message: "Как дела" },
      { id: 3, message: "Что делаешь?" },
      { id: 4, message: "Yo" },
    ],
    dialogsData: [
      { id: 1, name: "Дима" },
      { id: 2, name: "Лена" },
      { id: 3, name: "Аня" },
      { id: 4, name: "Максим" },
    ],
  },
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
