import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CryptoMarketOverview() {
    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/crypto')
            .then(response => {
                // İlk 20 öğeyi al
                const firstTwenty = response.data.data.slice(0, 20);
                setCryptos(firstTwenty);
            })
            .catch(error => {
                console.error('Veri çekme hatası:', error);
            });
    }, []);

    // Satın Al ve Sat butonlarına tıklandığında çalışacak fonksiyonlar
    const handleBuy = (crypto) => {
        console.log("Satın alındı:", crypto.name);
        // Satın alma işlemi için buraya kod ekleyebilirsiniz
    };

    const handleSell = (crypto) => {
        console.log("Satıldı:", crypto.name);
        // Satış işlemi için buraya kod ekleyebilirsiniz
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Kripto Para Piyasa Genel Bakış</h2>
            <div className="row">
                {cryptos.map((crypto) => (
                    <div key={crypto.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{crypto.name} ({crypto.symbol})</h5>
                                <p className="card-text">
                                    Fiyat: ${crypto.quote.USD.price.toFixed(2)}
                                </p>
                                <p className="card-text">
                                    24 Saatlik Hacim: ${crypto.quote.USD.volume_24h.toFixed(2)}
                                </p>
                                <p className="card-text">
                                    24 Saatlik Değişim: {crypto.quote.USD.percent_change_24h.toFixed(2)}%
                                </p>
                                <button onClick={() => handleBuy(crypto)} className="btn btn-success" style={{ marginRight: '20px' }} >Satın Al</button>
                                <button onClick={() => handleSell(crypto)} className="btn btn-danger ml-2">Sat</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CryptoMarketOverview;
