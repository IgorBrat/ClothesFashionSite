import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PrimaryButton from "../../components/buttons/PrimaryButton.styled.js";
import SecondaryButton from "../../components/buttons/SecondaryButton.styled.js";
import { useNavigate } from "react-router-dom";
import ButtonWrapper from "../../components/ButtonWrapper/ButtonWrapper.styled";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <CartContainer>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          rePassword: '',
        }}
        validationSchema={Yup.object({
          username: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required('Required'),
          email: Yup.string()
          .email('Invalid email format')
          .required('Required'),
          password: Yup.string()
          .min(6, "Must be at least 6 characters")
          .required('Required'),
          rePassword: Yup.string()
          .required('Required'),
        })}
        onSubmit={(values, {setSubmitting, resetForm}) => {
          setTimeout(() => {
            setSubmitting(false);
            resetForm();
            navigate('/');
          }, 3000);
        }}
      >
        {props => (
          <Form>
            <CustomField type="text" name="username" placeholder="Username"/>
            <CustomField type="email" name="email" placeholder="Email"/>
            <CustomField type="password" name="password" placeholder="Password"/>
            <CustomField type="password" name="rePassword" placeholder="Retype password"/>
            <ButtonWrapper>
              <SecondaryButton onClick={() => {navigate(`/login`);}}>
                Log In
              </SecondaryButton>
              <PrimaryButton type="submit" htmlType="submit">{props.isSubmitting
                ? "Loading..."
                : "Register"}
              </PrimaryButton>
            </ButtonWrapper>
          </Form>
        )}
      </Formik>
    </CartContainer>
  );
};

export default SignUp;
