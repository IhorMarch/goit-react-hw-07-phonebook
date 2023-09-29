
import { GlobalStyle } from './GlobalStyles';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { getError, getIsLoading} from "redux/selectors";



  export const App = () => {
    const dispatch = useDispatch();
    // Получаем части состояния
 const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

// Вызываем операцию
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
        <div>
     <Section title="Phonebook">
          <ContactForm  />
          </Section>

          <Section title="Contacts">
              <Filter  />
        {isLoading && !error && <b>Request in progress...</b>}
   
           <ContactList  />
              
         </Section>
      <GlobalStyle />
      
        </div>
      );

}


 