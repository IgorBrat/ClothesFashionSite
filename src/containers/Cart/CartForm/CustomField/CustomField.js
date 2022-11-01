import React from "react";
import { Field, ErrorMessage, useField } from "formik";
import FieldWrapper from "./FieldWrapper.styled";
import CustomErrorMessage from "./CustomErrorMessage";

const CustomField = ({...props}) => {
  const [field, meta] = useField(props);
  return (
    <FieldWrapper>
      <Field name={props.name} placeholder={props.placeholder} type={props.type}/>
      {/* <label className="error"><ErrorMessage name={props.name}/></label> */}
      <CustomErrorMessage {...props}/>
      <label>{props.label}</label>
    </FieldWrapper>
  );
};

export default CustomField;
