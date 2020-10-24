import React, { FC, ReactElement, ReactNode } from "react";
import { FieldRenderProps } from "react-final-form";
import styles from "./FormControls.module.css";


//////////////////////////////////////////
const FormControl = (TagName: any): FC<FieldRenderProps<string, HTMLElement>> => ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        <TagName {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = FormControl("textarea");

export const Input = FormControl("input");
