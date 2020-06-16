import React from 'react';
import {addNewMessage, handleMessageChange} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from 'react-redux';
import withAuthRedirect from '../HOC/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
    }
};

const mapDispatchToProps = {
    handleMessageChange,
    addNewMessage,
}

const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs));

export default DialogsContainer;