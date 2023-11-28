import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import {Form} from 'react-bootstrap';
import './style.scss';
import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { ADDTHREAD_MUTATION } from '../../utils/mutations';
import { QUERY_USERS } from '../../utils/queries';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [membersInput, setMembersInput] = useState([]);
  const [subjectInput, setSubjectInput] = useState(''); 
  const [messageInput, setMessageInput] = useState(''); 
  const [addThread] = useMutation(ADDTHREAD_MUTATION); 
  const { data, loading } = useQuery(QUERY_USERS);
  const allUsers = data?.users.map((user) => ({label:`${user.firstName} ${user.lastName}`, value: user._id}));
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {data} = await addThread({
        variables: { title: subjectInput, members: membersInput.map((member) => member.value), message: messageInput }
      });
      navigate("/");
    } catch(err) {
      console.error(err); 
    }
  }

  return (
    <Form onSubmit = { handleSubmit }>
    <h1 id="new-thread">make an announcement!
  </h1>
      <Form.Group className="mb-3" controlId="formSubject">
        <Form.Label>start with your subject</Form.Label>
        <Form.Control type="subject" placeholder="Ex: 'Christmas Plans'"  
        value = {subjectInput} 
        onChange = {(event) => setSubjectInput(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formParticipants">
        <Form.Label htmlFor='formParticipants'>add whoever should be in the know</Form.Label>
        <Select id='formParticipants' isMulti disabled={loading} onChange={(e) => setMembersInput(e)} options={allUsers} value={membersInput}/>
          
      </Form.Group>
      <Form.Group className="mb-3" controlId="FormMessage">
        <Form.Label>great! now what're we talking about?</Form.Label>
        <Form.Control as="textarea" placeholder="Ex: 'Mom, please tell Billy Bob Thornton he's not invited to Christmas.'" rows={3} 
         value = {messageInput} 
         onChange = {(event) => setMessageInput(event.target.value)} />
      </Form.Group>
      <Button as='button' variant="primary" type="submit">
        submit
      </Button>
    </Form>
  );
}

export default CreatePost;