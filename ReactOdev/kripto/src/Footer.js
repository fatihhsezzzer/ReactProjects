import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark text-light mt-4 py-4">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Hakkında</h5>
                        <p>Kripto Para Platformu, kripto para piyasaları hakkında güncel bilgiler sunar.</p>
                    </Col>
                    <Col md={4}>
                        <h5>İletişim</h5>
                        <ul>
                            <li>Email: info@kriptopara.com</li>
                            <li>Telefon: +90 123 456 78 90</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Sosyal Medya</h5>
                        <ul>
                            <li><a href="#" className="text-light">Facebook</a></li>
                            <li><a href="#" className="text-light">Twitter</a></li>
                            <li><a href="#" className="text-light">Instagram</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <p className="mb-0">© 2023 Kripto Para Platformu</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
