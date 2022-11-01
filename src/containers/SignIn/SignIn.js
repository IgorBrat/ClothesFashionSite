import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PrimaryButton from "../../components/buttons/PrimaryButton.styled.js";
import SecondaryButton from "../../components/buttons/SecondaryButton.styled.js";
import { useNavigate } from "react-router-dom";
import ButtonWrapper from "../../components/ButtonWrapper/ButtonWrapper.styled";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <CartContainer>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
          .email('Invalid email format')
          .required('Required'),
          password: Yup.string()
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
            <CustomField type="email" name="email" placeholder="Email"/>
            <CustomField type="phone" name="phone" placeholder="Phone"/>
            <ButtonWrapper>
              <SecondaryButton onClick={() => {navigate(`/register`);}}>
                Register
              </SecondaryButton>
              <PrimaryButton type="submit" htmlType="submit">{props.isSubmitting
                ? "Loading..."
                : "Log in"}
              </PrimaryButton>
            </ButtonWrapper>
          </Form>
        )}
      </Formik>
    </CartContainer>
  );
};

export default SignIn;
