import React from "react";
import { addNewMessage, handleMessageChange } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../HOC/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    newMessageText: state.messagesPage.newMessageText,
    dialogsData: state.messagesPage.dialogsData,
    messagesData: state.messagesPage.messagesData,
  };
};

const mapDispatchToProps = {
  handleMessageChange,
  addNewMessage,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
