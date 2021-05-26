import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import action from './contacts-action';

const findContact = (contacts, payload) => {
  const contact = contacts.find(
    ({ name }) => name.toLowerCase() === payload.name.toLowerCase(),
  );

  if (!contact) {
    return [...contacts, payload];
  } else {
    alert(`${payload.name} is already in contacts`);
    return contacts;
  }
};

const items = createReducer([], {
  [action.addContact]: (state, { payload }) => findContact(state, payload),
  [action.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [action.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter });
