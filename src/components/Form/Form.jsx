import { Formik, Form, Field } from 'formik';
import { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  initalState = {
    name: '',
    number: '',
  };

  render() {
    return (
      <>
        <Formik
          initialValues={this.initalState}
          onSubmit={(values, { resetForm }) => {
            const item = {
              ...values,
              id: nanoid(),
            };
            this.props.addContact(item);
            resetForm();
          }}
        >
          <Form>
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              name="name"
              id="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <label htmlFor="number">Number</label>
            <Field
              type="tel"
              name="number"
              id="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <button type="submit">Add contact</button>
          </Form>
        </Formik>
      </>
    );
  }
}
