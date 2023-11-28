import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.scss';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { ADDTHREAD_MUTATION } from '../../utils/mutations';

function CreatePost() {
  const [subjectInput, setSubjectInput] = useState(''); 
  const [messageInput, setMessageInput] = useState(''); 
  const [addThread, {loading}] = useMutation(ADDTHREAD_MUTATION); 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {data} = await addThread({
        variables: { title: subjectInput, members: [], message: messageInput }
      });
      console.log(data); 
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
        <Form.Label>add whoever should be in the know</Form.Label>
        <Form.Control type="username" placeholder="Ex: 'Billy Bob Thornton, Mom'" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="FormMessage">
        <Form.Label>great! now what're we talking about?</Form.Label>
        <Form.Control as="textarea" placeholder="Ex: 'Mom, please tell Billy Bob Thornton he's not invited to Christmas.'" rows={3} 
         value = {subjectInput} 
         onChange = {(event) => setSubjectInput(event.target.value)} />
      </Form.Group>
      <Button as='button' variant="primary" type="submit">
        submit
      </Button>
    </Form>
  );
}

export default CreatePost;