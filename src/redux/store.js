
import { configureStore } from "@reduxjs/toolkit";
import { reducerContacts } from "./contactsSlice";
import { filtersReducer } from "./filterSlice";
import { persistStore} from 'redux-persist'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


export const store = configureStore({
  reducer: {
    contacts: reducerContacts,
    filter: filtersReducer,
  },

   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

});

 export const persistor = persistStore(store)

