import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './style.scss';

function CreatePost() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="subject" placeholder="Subject" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formParticipants">
        <Form.Label>Participants</Form.Label>
        <Form.Control type="username" placeholder="Enter names here..." />
      </Form.Group>
      <Form.Group className="mb-3" controlId="FormMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button as='button' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default CreatePost;