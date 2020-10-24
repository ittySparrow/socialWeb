import React from "react";
import { actions } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import withAuthRedirect from "../HOC/withAuthRedirect";
import { compose } from "redux";
import { DialogsType, MessagesType } from "../../types/types";
import { AppStateType } from "../../redux/reduxStore";

type MapStatePropsType = {
  dialogsData: Array<DialogsType>
  messagesData: Array<MessagesType>
}

const mapStateToProps = ({ messagesPage }: AppStateType): MapStatePropsType => {
  return {
    dialogsData: messagesPage.dialogsData,
    messagesData: messagesPage.messagesData,
  };
};

export default compose(
  connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps, { addNewMessage: actions.addNewMessage }),
  withAuthRedirect
)(Dialogs);
