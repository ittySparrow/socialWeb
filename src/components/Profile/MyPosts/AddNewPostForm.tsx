import React, { FC } from "react";
import { Form, Field } from "react-final-form";
import {
  composeValidators,
  requieredField,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormControls";

const maxLength30 = maxLengthCreator(30);

type FormPropsType = {
  addPost: (newPost: string) => void
}
type SubmitFormType = {
  newPost: string
}

const AddNewPostForm: FC<FormPropsType>  = ({ addPost }) => {
  const onSubmit = ({ newPost }: SubmitFormType) => {
    addPost(newPost);
  };
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              component={Textarea}
              name="newPost"
              placeholder="New Post"
              validate={composeValidators(requieredField, maxLength30)}
            />
          </div>
          <div>
            <button>Add post</button>
          </div>
        </form>
      )}
    />
  );
};

export default AddNewPostForm;