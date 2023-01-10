import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const contactsArray = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsArray,
  reducers: {
    addContact: (state, { payload }) => {
      const { name, number } = payload;
      const id = nanoid();
      const includesName = state.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      );

      if (includesName) {
        alert(`${name} is already in contacts`);
      } else {
        let contact = { id, name, number };
        state.push(contact);
      }
    },

    removeContact: (state, { payload }) => {
      const { id } = payload;
      return state.filter(contact => contact.id !== id);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;