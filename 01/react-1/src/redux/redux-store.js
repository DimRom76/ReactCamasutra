import { createStore, combineReducers } from "redux";
import profileReducer from "./profile_reducer";
import dialogReducer from "./dialog_reducer";
import sidebarReducer from "./sidebar_reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogReducer,
  sidebar: sidebarReducer,
});

let store = createStore(reducers);

export default store;
