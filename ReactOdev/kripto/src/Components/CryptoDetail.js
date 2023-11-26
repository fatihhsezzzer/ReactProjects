import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function CryptoDetail({ crypto }) {
    return (
        <Card style={{ width: '18rem' }}>
            {/* ... diğer içerikler */}
            <Card.Title>{crypto.name}</Card.Title>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Fiyat: ${crypto.price}</ListGroupItem>
                <ListGroupItem>Piyasa Değeri: ${crypto.marketCap}</ListGroupItem>
                {/* volume24h alanı yoksa aşağıdaki satırı kaldırın */}
                <ListGroupItem>24 Saatlik Hacim: ${crypto.volume24h}</ListGroupItem>
            </ListGroup>
            {/* ... diğer içerikler */}
        </Card>
    );
}


export default CryptoDetail;
