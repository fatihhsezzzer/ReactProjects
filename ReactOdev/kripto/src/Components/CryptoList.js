import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

function CryptoList({ cryptos }) {
    return (
        <div>
            <h2 className="text-center my-4">Kripto Para Listesi</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ad</th>
                        <th>Fiyat</th>
                        <th>Piyasa Değeri</th>
                        <th>24h Değişim</th>
                    </tr>
                </thead>
                <tbody>
                    {cryptos.length > 0 ? (
                        cryptos.map((crypto, index) => (
                            <tr key={crypto.id}>
                                <td>{index + 1}</td>
                                <td>{crypto.name}</td>
                                <td>${crypto.price}</td>
                                <td>${crypto.marketCap}</td>
                                <td className={crypto.priceChange24h < 0 ? 'text-danger' : 'text-success'}>
                                    {crypto.priceChange24h.toFixed(2)}%
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Kripto para bilgisi bulunamadı.</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
}

export default CryptoList;
