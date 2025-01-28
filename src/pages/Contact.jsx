import { Container, Form, Button } from 'react-bootstrap';

function Contact() {
  return (

    <div
      className="text-center"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        color: 'black',
      }}
    >
    <Container className="my-5">
      <h1 className="text-center mb-4">Contactez-moi</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="Votre nom" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Votre email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Numéro de téléphone</Form.Label>
          <Form.Control type="text" placeholder="Votre numéro de téléphone" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Sujet</Form.Label>
          <Form.Control type="text" placeholder="Sujet" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Votre message" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </Form>
    </Container>
    </div>
  );
}

export default Contact;
