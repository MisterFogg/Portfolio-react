import React, { useState } from 'react';
import { Modal, Button, Row, Col, } from 'react-bootstrap';

function GithubModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <div>
      <Button variant="danger" onClick={handleShow} className="mt-3">
        En savoir plus
      </Button>

      {/* Modale GitHub */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Mon profil GitHub</Modal.Title>
        </Modal.Header>
        <hr />
        <Modal.Body className="text-center">
              <Row className="git-body">
                <Col md={6}>
                {/* Avatar du profil */}
                <img src="src/assets/images/001-anonym.png" alt="Avatar GitHub" className="img-fluid rounded mb-3"
                     style={{ width: 'auto', height: 'auto' }}/>
                </Col>
          
                {/* Informations GitHub */}
                <Col md={6}>
                <div className="text-start">
                  <p>
                    <strong>👤 <a href="https://github.com/MisterFogg" target="_blank" rel="noopener noreferrer">John Doe</a></strong>
                  </p>
                  <hr />          
                  <p>📍</p>
                  <hr />
                  <p>📂 <strong>Repositories :</strong> 1</p>
                  <hr />
                  <p>👥 <strong>Followers :</strong> 16</p>
                  <hr />
                  <p>👤 <strong>Following :</strong> 0</p>
                </div>
                </Col>
              </Row>
        </Modal.Body>
        <hr />    
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default GithubModal;
