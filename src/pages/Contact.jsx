import { Container, Form, Button, Col, Row } from 'react-bootstrap';

function Contact() {
  return (

    <div>
      <Container>
        <h2>Contact</h2>
        <p className="subtitle">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact. </p>
      
      <div style={{
      width: "35vw",
      height: "4px",
      background: "blue",
      margin: "10px auto",
    }}>
    </div>
    </Container>

    <Container className="my-5">
      <Row className="align-items-center">
        {/* Colonne Formulaire de contact */}
        <Col md={6}>
          <h3 className="mb-4">Formulaire de contact</h3>
            <div style={{
                 width: "100%",
                 height: "4px",
                 background: "blue",
                 margin: "10px auto",
                }}>
            </div>
        <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Votre nom" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Votre email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Votre numéro de téléphone" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Sujet" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" rows={5} placeholder="Votre message" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Envoyer
          </Button>
        </Form>
      </Col>
        {/* Colonne Mes coordonées */}
      <Col md={6}>
          <h3 className="mb-4">Mes coordonées</h3>
          <div style={{
              width: "100%",
              height: "4px",
              background: "blue",
              margin: "10px auto",
              }}>
          </div>
          <h5>John Doe</h5>
          <ul className="list-unstyled">
            <li>40 rue Laure Diebold</li>
            <li>69009 Lyon, France</li>
            <li>10 20 30 40 50</li>
            <li>john.doe@gmail.com</li>
          </ul>
          {/* Google Maps Adresse */}
          <div style={{ width: "100%", height: "300px", borderRadius: "8px", overflow: "hidden" }}>
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.537343057198!2d4.796742676168554!3d45.786354371094245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebd8f89e6f5b%3A0x76df1cfb71ff3c07!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sen!2sfr!4v1706555012345!5m2!1sen!2sfr"
            ></iframe>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
