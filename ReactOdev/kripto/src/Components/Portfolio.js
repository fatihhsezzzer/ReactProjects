import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

function Portfolio({ portfolioItems }) {
    // Toplam portföy değerini hesaplayın
    const totalValue = portfolioItems.reduce((total, item) => total + (item.amount * item.currentPrice), 0);

    return (
        <div>
            <h2 className="text-center my-4">Portföyüm</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Kripto Para</th>
                        <th>Miktar</th>
                        <th>Mevcut Fiyat</th>
                        <th>Toplam Değer</th>
                    </tr>
                </thead>
                <tbody>
                    {portfolioItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.amount}</td>
                            <td>${item.currentPrice.toFixed(2)}</td>
                            <td>${(item.amount * item.currentPrice).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <h4 className="text-right mt-3">Toplam Portföy Değeri: ${totalValue.toFixed(2)}</h4>
        </div>
    );
}

export default Portfolio;
