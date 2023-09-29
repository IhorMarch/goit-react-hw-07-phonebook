import { createSlice } from "@reduxjs/toolkit";
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { fetchContacts,addContact,deleteContact } from "./operations";


const contactsInitialState =
{
  items: [
  ],

    isLoading: false,
    error: null
};


const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};



const contactsSlice = createSlice({
    name: "contacts",
  initialState: contactsInitialState,
 // Добавляем обработку внешних экшенов
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
   
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    

    [fetchContacts.fulfilled](state, action) {state.isLoading = false;
      state.error = null;
      state.items = action.payload;},
   

    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },

 
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },

    },
});



const persistConfig = {
  key: 'root',
  storage,
}



// Экспортируем генераторы экшенов и редюсер

export const contactsReducer = contactsSlice.reducer;
export const reducerContacts = persistReducer(persistConfig, contactsReducer)




//     reducers: {
// // // Выполнится в момент старта HTTP-запроса
// //     fetchingInProgress(state) {state.isLoading = true;},
// //     // Выполнится если HTTP-запрос завершился успешно
// //     fetchingSuccess(state, action) {state.isLoading = false;
// //       state.error = null;
// //       state.items = action.payload;},
// //     // Выполнится если HTTP-запрос завершился с ошибкой
// //         fetchingError(state, action) {
// //             state.isLoading = false;
// //       state.error = action.payload;
// // },


//         // addContacts: {
//         //     reducer(state, action) {
//         //         state.items.push(action.payload);
//         //     },
//         //     prepare(newContact) {
//         //         return {
//         //             payload: {
//         //                 id: nanoid(),
//         //                 name: newContact.name,
//         //                 number: newContact.number,
//         //             },
//         //         };
//         //     },
//         // },
      
//     //     deleteContacts(state, action) {
//     //         const index = state.items.findIndex(contact => contact.id === action.payload);
//     //         state.items.splice(index, 1);
//     //     },
//     // }
    


// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;