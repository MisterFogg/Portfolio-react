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
            <h5>John Doe</h5>
            <ul className="list-unstyled">
            <li>40 rue Laure Diebold</li>
            <li>69009 Lyon, France</li>
            <li>10 20 30 40 50</li>
            <li>john.doe@gmail.com</li>       
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>
          <Accordion.Body>
            <h5>alwaysdata</h5>
            <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
            <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">wwww.alwaysdata.com</a>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            <h5>Crédits</h5>
            <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr" target="_blank" rel="noopener noreferrer">Centre Européen de Formation.</a></p>
            <p>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://www.pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay.</a></p>
            <p>La favicon de ce site a été fournie par <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer">John doe icons erstellt von Freepik - Flaticon</a></p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
    </div>
  );
}

export default LegalMentions;
