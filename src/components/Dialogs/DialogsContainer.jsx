import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "./../../redux/dialog_reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSendMessageClick: () => {
      dispatch(sendMessageCreator());
    },

    onNewMessageChange: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};

//
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
