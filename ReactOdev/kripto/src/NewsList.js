import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from 'react-bootstrap';

function News({ newsList }) {
    return (
        <div>
            <h2 className="text-center my-4">Kripto Para Haberleri</h2>
            <ListGroup>
                {newsList.map((newsItem, index) => (
                    <ListGroup.Item key={index} className="mb-3">
                        <Card>
                            <Card.Img variant="top" src={newsItem.imageUrl} alt={newsItem.title} />
                            <Card.Body>
                                <Card.Title>{newsItem.title}</Card.Title>
                                <Card.Text>
                                    {newsItem.summary}
                                </Card.Text>
                                <Card.Link href={newsItem.url} target="_blank">Devamını Oku</Card.Link>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

export default News;
