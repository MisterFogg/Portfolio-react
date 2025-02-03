import React from 'react';
import { Container, Row, Col, ProgressBar, Button, Card } from 'react-bootstrap';
import GithubModal from '../components/Modal';

function Home() {
  const skills = [
    { name: 'HTML5', value: 90, variant: 'danger' },
    { name: 'CSS3', value: 80, variant: 'info' },
    { name: 'JAVASCRIPT', value: 70, variant: 'warning' },
    { name: 'PHP', value: 60, variant: 'success' },
    { name: 'REACT', value: 50, variant: 'primary' },
  ];

  return (
    
      <><div
      className="text-white text-center"
      style={{
        backgroundImage: "url('src/assets/images/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Container className="text-hero">
        <h1>Bonjour, je suis John Doe</h1>
        <h2>Développeur web full stack</h2>
        <GithubModal />
      </Container>
    </div>
      <Container className="py-5">
        <Card className="shadow-sm border-0">
          <Card.Body>
            <Row className="align-items-center">
              <Col md={6}>
                <h3 className="mb-4">A propos</h3>
                <div style={{
                  width: "100%",
                  height: "4px",
                  background: "blue",
                  margin: "25px auto",
                  }}>
                </div>
                <img
                  src="src/assets/images/john-doe-about.jpg"
                  alt="John Doe"
                  className="img-fluid rounded" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                  necessitatibus consequatur tempore perferendis nostrum, ex
                  delectus reiciendis impedit aut iure enim placeat? Natus,
                  neque at?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                  necessitatibus consequatur tempore perferendis nostrum, ex
                  delectus reiciendis impedit aut iure enim placeat? Natus,
                  neque at?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                  necessitatibus consequatur tempore perferendis nostrum, ex
                  delectus reiciendis impedit aut iure enim placeat? Natus,
                  neque at?
                </p>
              </Col>
              {/* Colonne Compétences */}
              <Col md={6}>
                <h3 className="mb-4">Mes compétences</h3>
                <div style={{
                  width: "100%",
                  height: "4px",
                  background: "blue",
                  margin: "25px auto",
                  }}>
                </div>
                {skills.map((skill, index) => (
                  <div key={index} className="mb-3">
                    <h5 className="mb-1">{skill.name}</h5>
                    <ProgressBar
                      now={skill.value}
                      label={`${skill.value}%`}
                      variant={skill.variant} />
                  </div>
                ))}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container></>
  );
}

export default Home;
