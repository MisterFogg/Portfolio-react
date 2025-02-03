import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Fresh Food",
      description: "Site de vente de produits frais en ligne",
      technologies: "Site réalisé avec PHP et MySQL",
      image: "src/assets/images/portfolio/fresh-food.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Restaurant Akira",
      description: "Site de vente de produits frais en ligne",
      technologies: "Site réalisé avec WordPress",
      image: "src/assets/images/portfolio/restaurant-japonais.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Espace bien-être",
      description: "Site de vente de produits frais en ligne",
      technologies: "Site réalisé avec LARAVEL",
      image: "src/assets/images/portfolio/espace-bien-etre.jpg",
      link: "#",
    },
    {
      id: 4,
      title: "SEO",
      description: "Amélioration du référencement d'un site e-commerce",
      technologies: "Utilisation des outils SEO",
      image: "src/assets/images/portfolio/seo.jpg",
      link: "#",
    },
    {
      id: 5,
      title: "Création d'une API",
      description: "Création d'une API RESTFUL publique",
      technologies: "PHP - SYMFONY",
      image: "src/assets/images/portfolio/coder.jpg",
      link: "#",
    },
    {
      id: 6,
      title: "Maquette d'un site web",
      description: "Création d'un prototype dun site",
      technologies: "Réalisé avec FIGMA",
      image: "src/assets/images/portfolio/screens.jpg",
      link: "#",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div
        className="bg-dark text-white text-center py-5"
        style={{
          backgroundImage: "url('src/assets/images/banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          height: '35vh',
        }}
      >
    </div>
    <div>
      <Container>
        <h2>Portfolio</h2>
        <p className="subtitle">Voici quelques-unes de mes réalisations.</p>
        <div style={{
            width: "35vw",
            height: "4px",
            background: "blue",
            margin: "10px auto",
          }}>
        </div>
      </Container>
    </div>

      {/* Portfolio Grid */}
      <Container className="py-5">
        <Row>
          {projects.map((project) => (
            <Col key={project.id} md={4} sm={6} className="mb-4">
              <Card className="h-100 shadow">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.link}>
                    Voir le site
                  </Button>
                  <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>
                    {project.technologies}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;