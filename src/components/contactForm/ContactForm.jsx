import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formSubmitData } from 'redux/phonebookSlice';
import { getContacts } from 'redux/selectors';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  MainForm,
  Lable,
  InputField,
  ErrorMess,
  Button,
} from './ContactForm.styled';
import Notiflix from 'notiflix';

const patternName =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const massageName =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const patternPhone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g;
const massagePhone =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';

let schema = yup.object().shape({
  name: yup
    .string()
    .matches(patternName, massageName)
    .required('Name is required'),
  number: yup
    .string()
    .matches(patternPhone, massagePhone)
    .required('A phone number is required'),
});

const initialValues = { name: '', number: '' };

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    if (contacts.some(contact => contact.name === values.name)) {
      Notiflix.Notify.failure('Contact is already in contact list');
    } else dispatch(formSubmitData(values));
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <MainForm>
        <Lable>
          Name
          <InputField type="text" name="name" />
        </Lable>
        <ErrorMess name="name" component="p" />
        <Lable>
          Number
          <InputField type="tel" name="number" />
        </Lable>
        <ErrorMess name="number" component="p" />
        <Button type="submit">Add contact</Button>
      </MainForm>
    </Formik>
  );
};
