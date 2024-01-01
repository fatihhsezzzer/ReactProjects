
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function ShopPage() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/products') // Sunucunuzun URL'si
            .then(response => {
                if (!response.ok) {
                    throw new Error('Veri yüklenirken bir hata oluştu.');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Yükleniyor...</div>;
    if (error) return <div>Hata: {error}</div>;
    return (
        <div>
            <h1>Ürünlerimiz</h1>
            <div className="row products-container">
                {products.map(product => (
                    <div key={product.id} className="col-sm-6">
                        <div className="product-item">
                            <div className="product-thumb">
                                <img src={product.image} alt={product.name} />
                                <div className="product-action">
                                    <a className="action-quick-view" href="shop-cart.html"><i className="ion-ios-cart" /></a>
                                    <a className="action-quick-view" href="javascript:void(0)"><i className="ion-arrow-expand" /></a>
                                    <a className="action-quick-view" href="shop-wishlist.html"><i className="ion-heart" /></a>
                                    <a className="action-quick-view" href="shop-compare.html"><i className="ion-shuffle" /></a>
                                </div>
                            </div>
                            <div className="product-info">
                                <div className="rating">

                                    <span className="fa fa-star" />
                                    <span className="fa fa-star" />
                                    <span className="fa fa-star" />
                                    <span className="fa fa-star" />
                                    <span className="fa fa-star" />
                                </div>
                                <h4 className="title">
                                    <Link to={`/product-detail/${product.id}`}>{product.name}</Link>
                                </h4>
                                <div className="prices">
                                    <span className="price">${product.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    );
}

export default ShopPage;
