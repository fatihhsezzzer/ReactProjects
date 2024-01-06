import React from 'react'
import { Link } from 'react-router-dom';
export default function CartPage() {
    return (
        <div>
            <section className="product-area cart-page-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="section-title text-center">
                                <h2 className="title">Cart</h2>
                            </div>
                        </div>
                    </div>
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
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <Link href="shop-single-product.html"><img src="assets/img/shop/details/nav1.jpg" alt="Image" /></Link>
                                                </td>
                                                <td className="product-name">
                                                    <h5><Link href="shop-single-product.html">Jigsaw Puzzles For Kids</Link></h5>
                                                </td>
                                                <td className="product-price"><span className="amount">$120.00</span></td>
                                                <td className="cart-quality">
                                                    <div className="product-details-quality">
                                                        <input type="number" className="input-text qty text" step={1} min={1} max={100} name="quantity" defaultValue={1} title="Qty" placeholder />
                                                    </div>
                                                </td>
                                                <td className="product-total"><span>$120.00</span></td>
                                                <td className="product-remove"><Link href="#"><i className="ion-ios-trash-outline" /></Link></td>
                                            </tr>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <Link href="shop-single-product.html"><img src="assets/img/shop/details/nav2.jpg" alt="Image" /></Link>
                                                </td>
                                                <td className="product-name">
                                                    <h5><Link href="shop-single-product.html">Bruder Toys Mini Ships</Link></h5>
                                                </td>
                                                <td className="product-price"><span className="amount">$120.00</span></td>
                                                <td className="cart-quality">
                                                    <div className="product-details-quality">
                                                        <input type="number" className="input-text qty text" step={1} min={1} max={100} name="quantity" defaultValue={1} title="Qty" placeholder />
                                                    </div>
                                                </td>
                                                <td className="product-total"><span>$120.00</span></td>
                                                <td className="product-remove"><Link href="#"><i className="ion-ios-trash-outline" /></Link></td>
                                            </tr>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <Link href="shop-single-product.html"><img src="assets/img/shop/details/nav3.jpg" alt="Image" /></Link>
                                                </td>
                                                <td className="product-name">
                                                    <h5><Link href="shop-single-product.html">Sassy Crib and Floor Mirror</Link></h5>
                                                </td>
                                                <td className="product-price"><span className="amount">$120.00</span></td>
                                                <td className="cart-quality">
                                                    <div className="product-details-quality">
                                                        <input type="number" className="input-text qty text" step={1} min={1} max={100} name="quantity" defaultValue={1} title="Qty" placeholder />
                                                    </div>
                                                </td>
                                                <td className="product-total"><span>$120.00</span></td>
                                                <td className="product-remove"><Link href="#"><i className="ion-ios-trash-outline" /></Link></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="cart-shiping-update-wrapper">
                                <div className="cart-shiping-btn continure-btn">
                                    <Link className="btn btn-link" href="shop.html"><i className="ion-ios-arrow-left" /> Back To Shop</Link>
                                </div>
                                <div className="cart-shiping-btn update-btn">
                                    <Link className="btn btn-link" href="shop.html"><i className="ion-ios-reload" /> Back To Shop</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="cart-calculate-discount-wrap mb-40">
                                <h4>Calculate shipping </h4>
                                <div className="calculate-discount-content">
                                    <div className="select-style">
                                        <select className="select-active">
                                            <option>Bangladesh</option>
                                            <option>Bahrain</option>
                                            <option>Azerbaijan</option>
                                            <option>Barbados</option>
                                            <option>Barbados</option>
                                        </select>
                                    </div>
                                    <div className="select-style">
                                        <select className="select-active">
                                            <option>State / County</option>
                                            <option>Bahrain</option>
                                            <option>Azerbaijan</option>
                                            <option>Barbados</option>
                                            <option>Barbados</option>
                                        </select>
                                    </div>
                                    <div className="input-style">
                                        <input type="text" placeholder="Town / City" />
                                    </div>
                                    <div className="input-style">
                                        <input type="text" placeholder="Postcode / ZIP" />
                                    </div>
                                    <div className="calculate-discount-btn">
                                        <Link className="btn btn-link" href="#/">Update</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="cart-calculate-discount-wrap mb-40">
                                <h4>Coupon Discount </h4>
                                <div className="calculate-discount-content">
                                    <p>Enter your coupon code if you have one.</p>
                                    <div className="input-style">
                                        <input type="text" placeholder="Coupon code" />
                                    </div>
                                    <div className="calculate-discount-btn">
                                        <Link className="btn btn-link" href="#/">Apply Coupon</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="grand-total-wrap">
                                <div className="grand-total-content">
                                    <h3>Subtotal <span>$180.00</span></h3>
                                    <div className="grand-shipping">
                                        <span>Shipping</span>
                                        <ul>
                                            <li><input type="radio" name="shipping" defaultValue="info" defaultChecked="checked" /><label>Free shipping</label></li>
                                            <li><input type="radio" name="shipping" defaultValue="info" defaultChecked="checked" /><label>Flat rate: <span>$100.00</span></label></li>
                                            <li><input type="radio" name="shipping" defaultValue="info" defaultChecked="checked" /><label>Local pickup: <span>$120.00</span></label></li>
                                        </ul>
                                    </div>
                                    <div className="shipping-country">
                                        <p>Shipping to Bangladesh</p>
                                    </div>
                                    <div className="grand-total">
                                        <h4>Total <span>$185.00</span></h4>
                                    </div>
                                </div>
                                <div className="grand-total-btn">
                                    <Link className="btn btn-link" href="shop-checkout.html">Proceed to checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
