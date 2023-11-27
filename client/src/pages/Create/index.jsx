import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './style.scss';

function CreatePost() {
  return (
    <Form>
    <h1 id="new-thread">make an announcement!
  </h1>
      <Form.Group className="mb-3" controlId="formSubject">
        <Form.Label>start with your subject</Form.Label>
        <Form.Control type="subject" placeholder="Ex: 'Christmas Plans'" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formParticipants">
        <Form.Label>add whoever should be in the know</Form.Label>
        <Form.Control type="username" placeholder="Ex: 'Billy Bob Thornton, Mom'" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="FormMessage">
        <Form.Label>great! now what're we talking about?</Form.Label>
        <Form.Control as="textarea" placeholder="Ex: 'Mom, please tell Billy Bob Thornton he's not invited to Christmas.'" rows={3} />
      </Form.Group>
      <Button as='button' variant="primary" type="submit">
        submit
      </Button>
    </Form>
  );
}

export default CreatePost;