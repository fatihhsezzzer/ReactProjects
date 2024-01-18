
import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';

import { CartContext } from '../../Contexts/CartContext';
export default function CartPage() {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);
    const [inputvalue, setInputvalue] = useState("");




    return (

        <div>
            <section className="product-area cart-page-area">
                {/* ... Diğer HTML yapısı */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cart-table-wrap">
                            <div className="cart-table table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="width-thumbnail" />
                                            <th className="width-name">Product</th>
                                            <th className="width-price"> Price</th>
                                            <th className="width-quantity">Quantity</th>
                                            <th className="width-subtotal">Subtotal</th>
                                            <th className="width-remove" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item) => (
                                            <tr key={item.id}>
                                                <td className="product-thumbnail">
                                                    <Link to="shop-single-product.html"><img src={item.imageUrl} alt="Image" /></Link>
                                                </td>
                                                <td className="product-name">
                                                    <h5><Link to="shop-single-product.html">{item.name}</Link></h5>
                                                </td>
                                                <td className="product-price"><span className="amount">${item.price.toFixed(2)}</span></td>
                                                <td className="cart-quality">
                                                    <div className="product-details-quality">
                                                        <input type="number" className="input-text qty text" step={1} min={1} max={100} name="quantity" onChange={(e) => setInputvalue(e.target.value)} defaultValue={item.quantity} title="Qty" placeholder />
                                                    </div>
                                                </td>
                                                <td className="product-total"><span>${(item.price * inputvalue).toFixed(2)}</span></td>
                                                <td className="product-remove"><Link onClick={() => removeFromCart(item.id)}><i className="ion-ios-trash-outline" /></Link></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    );
}



