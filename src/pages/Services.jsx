import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Services() {
  const services = [
    {
      title: 'UX Design',
      description: "L’UX Design est une discipline qui consiste à concevoir des produits digitaux en pensant à l'expérience utilisateur.",
      icon: 'bi bi-brush'
    },
    {
      title: 'Développement Web',
      description: "Création de sites modernes et dynamiques en utilisant HTML, CSS, JavaScript, React et Bootstrap.",
      icon: 'bi bi-code-slash'
    },
    {
      title: 'Référencement (SEO)',
      description: "Optimisation du référencement naturel pour améliorer la visibilité des sites sur Google et autres moteurs de recherche.",
      icon: 'bi bi-search'
    }
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
    <div className="Title-page">
      <h1>Mon offre de services</h1>
      <p className="subtitle"> Voici les prestations sur lesquelles je peux intervenir</p>
    </div>
    <div style={{
      width: "100px",
      height: "4px",
      background: "blue",
      margin: "10px auto",
    }}
    >
    </div>
      <Container>
        {/* Section services */}
        <Row className="justify-content-center mt-4">
          {services.map((service, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card style={{
                padding: "30px",
                textAlign: "center",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: "5px"
              }}>
                <i className={service.icon} style={{ fontSize: "40px", color: "blue", marginBottom: "15px" }}></i>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Services;

  