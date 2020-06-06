import React from 'react';
import {addNewMessageActionHandler, handleMessageChangeActionHandler} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (text) => dispatch(handleMessageChangeActionHandler(text)),
        addNewMessage: () => dispatch(addNewMessageActionHandler()),
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;