import React from 'react';
import {addNewMessage, handleMessageChange} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        isAuth: state.auth.isAuth,
    }
};

const mapDispatchToProps = {
    handleMessageChange,
    addNewMessage,
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;