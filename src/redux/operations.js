import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";



axios.defaults.baseURL = "https://65a84931219bfa371866fcc4.mockapi.io";  


export const fetchContacts = createAsyncThunk("contacts/fetchAll",
   // Используем символ подчеркивания как имя первого параметра,
  // потому что в этой операции он нам не ну

  async (_, thunkAPI) => {

    try {
      const response = await axios.get("/contacts");
      // При успешном запросе возвращаем промис с данными
      return response.data;
    }
    catch (e) {
      // При ошибке запроса возвращаем промис
      // который будет отклонен с текстом ошибки
      return thunkAPI.rejectWithValue(e.message);
    }

 
});


export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", newContact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  });


  export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);




// export const fetchContacts= () => async dispatch => {
//     try {
//        // Индикатор загрузки
//     dispatch(fetchingInProgress());
//         const response = await axios.get("/contacts");
        
//         dispatch(fetchingSuccess(response.data));

//   } catch (e) {dispatch(fetchingError(e.message));}
// };
