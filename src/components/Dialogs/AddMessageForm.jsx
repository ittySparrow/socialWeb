import React from "react";
import { Form, Field } from "react-final-form";
import {
  composeValidators,
  requieredField,
  maxLengthCreator,
} from "../../utils/validators/validators";
import { Textarea } from "../common/FormControls";

const maxLength100 = maxLengthCreator(100);

export default (props) => {
  const onSubmit = ({ newMessage }) => {
    props.addNewMessage(newMessage);
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              component={Textarea}
              name="newMessage"
              placeholder="New Message"
              validate={composeValidators(requieredField, maxLength100)}
            />
          </div>
          <div>
            <button>Send message</button>
          </div>
        </form>
      )}
    />
  );
};
