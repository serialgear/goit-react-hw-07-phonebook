import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const phoneBookInitialState = {
  contacts: [],
  filter: '',
};

const phoneBookSlice = createSlice({
  name: 'phonebooks',
  initialState: phoneBookInitialState,
  reducers: {
    formSubmitData(state, action) {
      const { name, number } = action.payload;
      state.contacts.push({ id: nanoid(), name, number });
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const persistedPhonebookReducer = persistReducer(
  persistConfig,
  phoneBookSlice.reducer
);

export const { formSubmitData, deleteContact, filterContacts } =
  phoneBookSlice.actions;
