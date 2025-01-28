import { Container, Accordion } from 'react-bootstrap';

function LegalMentions() {
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
      <h1 className="text-center mb-4">Mentions Légales</h1>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Éditeur du site</Accordion.Header>
          <Accordion.Body>
            Ce site a été réalisé par John Doe, développeur web.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur du site</Accordion.Header>
          <Accordion.Body>
            Le site est hébergé par [Nom de l'hébergeur].
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            Les images proviennent de Pixabay, et les icônes de Flaticon.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
    </div>
  );
}

export default LegalMentions;
