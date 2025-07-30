import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const KontaktContent = () => {
  const [jmeno, setJmeno] = useState('');
  const [prijmeni, setPrijmeni] = useState('');
  const [email, setEmail] = useState('');
  const [predmet, setPredmet] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const zprava = { jmeno, prijmeni, email, predmet, text };

    try {
      const response = await fetch('http://localhost:8080/api/zpravy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(zprava),
      });

      if (response.ok) {
        alert('Zpráva byla úspěšně odeslána.');
        setJmeno('');
        setPrijmeni('');
        setEmail('');
        setPredmet('');
        setText('');
      } else {
        alert('Nepodařilo se odeslat zprávu.');
      }
    } catch (error) {
      alert('Chyba při odesílání zprávy.');
      console.error(error);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
    <Form onSubmit={handleSubmit} className="custom-form p-4 rounded-5 shadow">
    <h2 className="text-center mb-4">Kontaktujte nás</h2>
      <Form.Group className="mb-3">
            <Form.Label className="text-center w-100">Jméno</Form.Label>
            <Form.Control className="inset-input text-center"
              type="text"
              name="form-control"
              
              value={FormData.jmeno}
              onChange={(e) => setJmeno(e.target.value)}
              required
            />
           </Form.Group>
          
           <Form.Group className="mb-3">
           <Form.Label className="text-center w-100">Příjmení</Form.Label>
            <Form.Control className="inset-input text-center"
              type="text"
              name="form-control"
              
              value={FormData.prijmeni}
              onChange={(e) => setPrijmeni(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
          <Form.Label className="text-center w-100">E-mailová adresa</Form.Label>
          <Form.Control className="inset-input text-center"
            type="email"
            name="form-control"
            
            value={FormData.email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <small className="form-text text-muted">Váš e-mail s nikým nesdílíme.</small>
          </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="text-center w-100">Předmět</Form.Label>
            <Form.Control className="inset-input text-center"
              type="text"
              name="form-control"
              
              value={FormData.predmet}
              onChange={(e) => setPredmet(e.target.value)}
              required
            />
          </Form.Group>
        <Row className="mb-3 justify-content-center">
                <Form.Group className="mb-3"  as={Col} md={12} controlId="inputPozadavky">
                  <Form.Label className="text-center w-100">Text zprávy</Form.Label>
            <Form.Control className="inset-input text-center"
              name="form-control"
              as="textarea"
              rows={4}
              value={FormData.text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </Form.Group>
        
          <div className="text-center">
        <Button variant="primary" type="submit" size="lg">Odeslat</Button>
      </div>
      </Row>
    </Form>
    </Col>
    </Row>
    </Container>
  );
};

export default KontaktContent;
