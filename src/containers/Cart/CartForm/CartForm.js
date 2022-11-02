import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormContainer from "../../FormContainer.styled";
import PrimaryButton from "../../../components/buttons/PrimaryButton.styled.js";
import SecondaryButton from "../../../components/buttons/SecondaryButton.styled.js";
import { useNavigate } from "react-router-dom";
import CustomField from "../../../components/CustomField/CustomField";
import ButtonWrapper from "../../../components/ButtonWrapper/ButtonWrapper.styled";
import {FieldRow, TermsWrapper} from "../../../components/CustomField/FieldWrapper.styled";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../../../redux/cartSlice";

const CartForm = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <FormContainer>
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
          .max(15, "Must be 15 characters or less")
          .required('Required'),
          surname: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required('Required'),
          email: Yup.string()
          .email('Invalid email')
          .required('Required'),
          phone: Yup.string()
          .min(10, "Must be 10 to 13 characters")
          .matches(/^[\+]?\d+$/, "Must be numeric and may contain country phone code")
          .max(13, "Must be 10 to 13 characters"),
          country: Yup.string()
          .matches(/^[a-zA-Z]+$/, "Must contain only English letters")
          .min(3, "Must be 3 characters or more")
          .max(20, "Must be 20 characters or less")
          .required('Required'),
          city_region: Yup.string()
          .matches(/^[a-zA-Z]+$/, "Must contain only English letters")
          .min(3, "Must be 3 characters or more")
          .max(30, "Must be 30 characters or less")
          .required('Required'),
          address: Yup.string()
          .min(3, "Must be 3 characters or more")
          .max(30, "Must be 30 characters or less"),
          terms: Yup.boolean()
          .required('Required')
          .oneOf([true], "Must accept")
        })}
        onSubmit={(values, {setSubmitting, resetForm}) => {
          setTimeout(() => {
            setSubmitting(false);
            resetForm();
            for (const item of items) {
              dispatch(deleteItem(item.id));
            }
            navigate('/cart/submit/success');
          }, 3000);
        }}
      >
        {props => (
          <Form>
            <FieldRow>
              <CustomField name="name" placeholder="Name" type="text"/>
              <CustomField name="surname" placeholder="Surname"/>
            </FieldRow>
            <CustomField type="email" name="email" placeholder="Email"/>
            <CustomField type="phone" name="phone" placeholder="Phone"/>
            <FieldRow>
              <CustomField name="country" placeholder="Country"/>
              <CustomField name="city_region" placeholder="City/Region"/>
            </FieldRow>
            <CustomField name="address" placeholder="Address"/>
            <TermsWrapper>
              <CustomField type="checkbox" name="terms"/>
              <label>Accept terms and conditions</label>
            </TermsWrapper>
            <ButtonWrapper>
              <SecondaryButton onClick={() => {navigate(-1);}}>
                Go back
              </SecondaryButton>
              <PrimaryButton type="submit" htmlType="submit">{props.isSubmitting
                ? "Loading..."
                : "Submit"}
              </PrimaryButton>
            </ButtonWrapper>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default CartForm;
