import React from "react";
import { addNewMessage } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../HOC/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = ({ messagesPage }) => {
  return {
    newMessageText: messagesPage.newMessageText,
    dialogsData: messagesPage.dialogsData,
    messagesData: messagesPage.messagesData,
  };
};

export default compose(
  connect(mapStateToProps, { addNewMessage }),
  withAuthRedirect
)(Dialogs);
