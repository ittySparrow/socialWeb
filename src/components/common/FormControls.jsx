import React from "react";
import styles from "./FormControls.module.css";

const FormControl = (TagName) => ({ input, meta, ...props }) => {
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
