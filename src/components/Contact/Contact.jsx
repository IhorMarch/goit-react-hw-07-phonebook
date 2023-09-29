import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";

import { Wrapper,Text, Button} from './Contact.styled';
import { deleteContact } from "../../redux/operations";



export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));


  return (
    <Wrapper >
    <Text> {contact.name + ' : ' + contact.number}</Text>
      <Button onClick={handleDelete}>
        <MdClose size={24} />
      </Button>
    </Wrapper>
  );
};
