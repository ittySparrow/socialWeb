import React from 'react';
import {addNewMessageActionHandler, handleMessageChangeActionHandler} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                const state = store.getState();

                const onChangeMessage = (text) => {
                    store.dispatch(handleMessageChangeActionHandler(text));
                }
                const onAddNewMessage = () => store.dispatch(addNewMessageActionHandler());
            
                return <Dialogs onChange={onChangeMessage}
                                addNewMessage={onAddNewMessage}
                                newMessageText={state.messagesPage.newMessageText}
                                dialogsData={state.messagesPage.dialogsData}
                                messagesData={state.messagesPage.messagesData} />;
            }
        }</StoreContext.Consumer>
    )
}

export default DialogsContainer;