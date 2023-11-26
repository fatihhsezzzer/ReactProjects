import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Giriş işlemleri burada
        console.log(email, password);
    };

    return (
        <Card className="mt-5">
            <Card.Body>
                <h2 className="text-center mb-4">Giriş Yap</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Şifre</Form.Label>
                        <Form.Control type="password" required onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button className="w-100 mt-3" type="submit">Giriş Yap</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Login;
