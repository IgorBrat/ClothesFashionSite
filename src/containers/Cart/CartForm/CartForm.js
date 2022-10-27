import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PageContainer from "../../PageContainer.styled.js";
import PrimaryButton from "../../../components/buttons/PrimaryButton.styled.js";
import SecondaryButton from "../../../components/buttons/SecondaryButton.styled.js";
import { useNavigate } from "react-router-dom";

const CartForm = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          email: '',
          phone: '',
          country: '',
          city_region: '',
          address: '',
          terms: false,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
          .max(15, "Must be 15 characters of less")
          .required('Required'),
          surname: Yup.string()
          .max(15, "Must be 15 characters of less")
          .required('Required'),
          email: Yup.string()
          .email('Invalid email')
          .required('Required'),
        })}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 3000);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" />
            <Field name="surname" placeholder="Surname"/>
            <ErrorMessage name="surname" component="div" />
            <Field type="email" name="email" placeholder="Email"/>
            <ErrorMessage name="email" component="div" />
            <Field type="phone" name="phone" placeholder="Phone"/>
            <ErrorMessage name="phone" component="div" />
            <Field name="country" placeholder="Country"/>
            <ErrorMessage name="country" component="div" />
            <Field name="city_region" placeholder="City/Region"/>
            <ErrorMessage name="city_region" component="div" />
            <Field name="address" placeholder="Address"/>
            <ErrorMessage name="address" component="div" />
            <Field type="checkbox" name="terms" placeholder="Country"/>
            <ErrorMessage name="checkbox" component="div" />
            <label>Accept terms and permissions</label>
            <SecondaryButton onClick={() => {navigate(-1);}}>
              Go back
            </SecondaryButton>
            <PrimaryButton>Submit</PrimaryButton>
          </Form>
        )}
      </Formik>
    </PageContainer>
  );
};

export default CartForm;
