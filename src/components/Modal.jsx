import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function GithubModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" onClick={handleShow} className="mt-3">
        En savoir plus
      </Button>

      {/* Modale GitHub */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Mon profil GitHub</Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-center">
          {/* Avatar du profil */}
          <img
            src="https://avatars.githubusercontent.com/u/583231?v=4"
            alt="Avatar GitHub"
            className="img-fluid rounded-circle mb-3"
            style={{ width: '150px', height: '150px' }}
          />

          {/* Informations GitHub */}
          <div className="text-start">
            <p>
              <strong>👤 <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">John Doe</a></strong>
            </p>
            <p>
              📍 <i>As we all know, John Doe's identity is unknown. I just wanted to contribute without being known.</i>
            </p>
            <p>📂 <strong>Repositories :</strong> 1</p>
            <p>👥 <strong>Followers :</strong> 16</p>
            <p>👤 <strong>Following :</strong> 0</p>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GithubModal;
