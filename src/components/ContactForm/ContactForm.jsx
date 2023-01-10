import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from "redux/contactsOperation";
import { nanoid } from "nanoid";

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const idName = nanoid();
  const idNumber = nanoid();

  const dispatch = useDispatch();

  const handleFormSubmit = event => {
    event.preventDefault();
    
    const object = {
      [event.target.elements.name.name]: event.target.elements.name.value,
      [event.target.elements.number.name]: event.target.elements.number.value,
    };

    const includesName = contacts.find(
      contact =>
        contact.name.toLowerCase() ===
        event.target.elements.name.value.toLowerCase()
    );

    if (includesName) {
      alert(`${event.target.elements.name.value} is already in contacts`);
      event.target.reset();
      return;
    }

    dispatch(addContact(object));

    event.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.labelForm} htmlFor={idName}>
        Name
      </label>
      <input
        className={css.nameForm}
        id={idName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.labelForm} htmlFor={idNumber}>
        Number
      </label>
      <input
        className={css.numberForm}
        id={idNumber}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.formBtn}>
        Add contact
      </button>
    </form>
  );
}  
