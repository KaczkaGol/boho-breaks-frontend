import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const RezervarceForm = () => {
  const [formData, setFormData] = useState({
    nabidka: '',
    jmeno: '',
    prijmeni: '',
    email: '',
    telefon: '',
    datum: '',
    pocet: 1,
    pozadavky: ''
  });
  const [dostupneTerminy, setDostupneTerminy] = useState([]);
  const [kapacita, setKapacita] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if (location.state?.nabidka) {
      setFormData(prev => ({ ...prev, nabidka: location.state.nabidka }));

      fetch(`http://localhost:8080/api/terminy?nabidka=${encodeURIComponent(location.state.nabidka)}`)
        .then(res => res.json())
        .then(data => setDostupneTerminy(data))
        .catch(err => console.error("Chyba při načítání termínů:", err));
    }
  }, [location.state]);

  useEffect(() => {
    const vybranyTermin = dostupneTerminy.find(t => t.datum === formData.datum);
    if (vybranyTermin) {
      setKapacita(vybranyTermin.volnaKapacita || 0);
      // Resetuj počet osob, pokud je větší než dostupná kapacita
      if (formData.pocet > vybranyTermin.volnaKapacita) {
        setFormData(prev => ({ ...prev, pocet: vybranyTermin.volnaKapacita }));
      }
    }
  }, [formData.datum, dostupneTerminy, formData.pocet]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/rezervace', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Rezervace byla úspěšně odeslána!');
        setFormData({
          nabidka: '',
          jmeno: '',
          prijmeni: '',
          email: '',
          telefon: '',
          datum: '',
          pocet: 1,
          pozadavky: ''
        });
      } else {
        alert('Nastala chyba při odesílání rezervace.');
      }
    } catch (error) {
      console.error('Chyba při odesílání:', error);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
      <Col md={10} lg={8}>
      <Form onSubmit={handleSubmit} className="custom-form p-4 rounded-5 shadow">

      <h2 className="text-center mb-4">Rezervace</h2>
        {/* Druh nabídky */}
        <Form.Group className="mb-3" controlId="inputNabidka">
          <Form.Label className="text-center w-100">Druh nabídky</Form.Label>
          <Row className="justify-content-center">
          <Col sm={12}>
            <Form.Control type="text" value={formData.nabidka} readOnly className="inset-input text-center" />
          </Col>
          </Row>
        </Form.Group>

        {/* Jméno a příjmení */}
        <Row className="mb-3 justify-content-center">
        
          <Form.Group as={Col} md={6} controlId="inputJmeno">
            <Form.Label className="text-center w-100">Jméno</Form.Label>
            <Form.Control className="inset-input text-center" type="text" name="jmeno" value={formData.jmeno} onChange={handleChange} />
          </Form.Group>
          
          <Form.Group as={Col} md={6} controlId="inputPrijmeni">
            <Form.Label className="text-center w-100">Příjmení</Form.Label>
            <Form.Control className="inset-input text-center" type="text" name="prijmeni" value={formData.prijmeni} onChange={handleChange} />
          </Form.Group>
        </Row>

        {/* Email a telefon */}
        <Row className="mb-3 justify-content-center">
          <Form.Group as={Col} md={6}  controlId="inputEmail">
            <Form.Label className="text-center w-100">E-mail</Form.Label>
            <Form.Control className="inset-input text-center" type="email" name="email" value={formData.email} onChange={handleChange} />
          </Form.Group>
          <Form.Group as={Col} md={6} controlId="inputTelefon">
            <Form.Label className="text-center w-100">Telefon</Form.Label>
            <Form.Control className="inset-input text-center" type="tel" name="telefon" value={formData.telefon} onChange={handleChange} />
          </Form.Group>
        </Row>

        {/* Výběr termínu a počtu osob */}
        <Row className="mb-3 justify-content-center">
          <Form.Group as={Col} md={6} controlId="selectDatum">
            <Form.Label className="text-center w-100">Dostupné termíny</Form.Label>
            <Form.Select className="inset-input text-center" name="datum" value={formData.datum} onChange={handleChange}>
              <option value="">Vyberte datum</option>
              {dostupneTerminy.map((termin) => (
                <option key={termin.id} value={termin.datum}>
                  {new Date(termin.datum).toLocaleDateString('cs-CZ')} – {termin.volnaKapacita} míst
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md={6} controlId="inputOsoby">
            <Form.Label className="text-center w-100">Počet osob</Form.Label>
            <Form.Select 
              className="inset-input text-center"
              name="pocet"
              value={formData.pocet}
              onChange={handleChange}
              disabled={kapacita === 0}
            >
              <option value="">Vyberte</option>
              {[...Array(kapacita)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

        {/* Speciální požadavky */}
        <Row className="mb-3 justify-content-center">
        <Form.Group className="mb-3"  as={Col} md={12} controlId="inputPozadavky">
          <Form.Label className="text-center w-100">Speciální požadavky</Form.Label>
          <Form.Control className="inset-input text-center" as="textarea" rows={4}  name="pozadavky" value={formData.pozadavky} onChange={handleChange} />
        </Form.Group>
        </Row>
        {/* Odeslání */}
        <div className="text-center">
          <Button variant="primary" type="submit" size="lg">
            Odeslat rezervaci
          </Button>
        </div>
      </Form>
      </Col>
  </Row>
    </Container>
  );
};

export default RezervarceForm;
