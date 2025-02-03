import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Services() {
  const services = [
    {
      title: 'UX Design',
      description: "L'UX Design est une discipline qui consiste à concevoir des produits ( sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.",
      icon: 'bi bi-brush'
    },
    {
      title: 'Développement Web',
      description: "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, Javascript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)",
      icon: 'bi bi-code-slash'
    },
    {
      title: 'Référencement (SEO)',
      description: "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.",
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
      <h2>Mon offre de services</h2>
      <p className="subtitle"> Voici les prestations sur lesquelles je peux intervenir</p>
    </div>
    <div style={{
      width: "35vw",
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
                backgroundColor: "white",
                height: "50vh",
                borderRadius: "5px",
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

  