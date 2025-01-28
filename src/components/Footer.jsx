import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          {/* Colonne 1 : Informations de contact */}
          <Col md={4}>
            <h5>John Doe</h5>
            <ul className="list-unstyled">
            <li>40 rue Laure Diebold</li>
            <li>69009 Lyon, France</li>
            <li>10 20 30 40 50</li>
            <li>john.doe@gmail.com</li>
            <li><i class="bi bi-github"></i><i class="bi bi-twitter"></i><i class="bi bi-linkedin"></i></li>            
            </ul>
          </Col>
          
          {/* Colonne 2 : Liens utiles */}
          <Col md={4}>
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Accueil</a></li>
              <li><a href="/services" className="text-white">Services</a></li>
              <li><a href="/portfolio" className="text-white">Portfolio</a></li>
              <li><a href="/contact" className="text-white">Me contacter</a></li>
              <li><a href="/mentions-legales" className="text-white">Mentions légales</a></li>
            </ul>
          </Col>

          {/* Colonne 3 : Dernières réalisations */}
          <Col md={4}>
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>Fresh Food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien-être</li>
              <li>SEO</li>
              <li>Création d'une API</li>
              <li>Maquette d'un site</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
