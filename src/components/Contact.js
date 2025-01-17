import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cpf: '',
    nasciment: '',
    school: '',
    city: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Inscreva-se</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="Nome" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Sobrenome" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Número de Telefone" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.cpf} placeholder="CPF" onChange={(e) => onFormUpdate('cpf', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="date" value={formDetails.nasciment} placeholder="Data de Nascimento" onChange={(e) => onFormUpdate('nasciment', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <select value={formDetails.school} onChange={(e) => onFormUpdate('school', e.target.value)}>
                          <option value="">Escolaridade</option>
                          <option value="Ensino Fundamental Incompleto">Ensino Fundamental Incompleto</option>
                          <option value="Ensino Fundamental Completo">Ensino Fundamental Completo</option>
                          <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                          <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                          <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                          <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                        </select>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.city} placeholder="Cidade" onChange={(e) => onFormUpdate('city', e.target.value)} />
                      </Col>

                      {status.message && (
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      )}
                      <Col size={12} className="px-1">
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
