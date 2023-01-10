import axios from 'axios';

axios.defaults.baseURL = 'https://63bd568cd660062388a2131c.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContacts(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContacts(id) {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
}
