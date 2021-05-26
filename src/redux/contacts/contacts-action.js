/* eslint-disable import/no-anonymous-default-export */
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const prepare = (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const addContact = createAction('contacts/Add', prepare);
const deleteContact = createAction('contacts/Delete');
const changeFilter = createAction('contacts/ChangeFilter');

export default { addContact, deleteContact, changeFilter };
