import React from 'react'
import { Link } from 'react-router-dom';
export default function WishList() {
    return (
        <div>
            <section className="product-area wishlist-page-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="section-title text-center">
                                <h2 className="title">Wishlist</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <form action="#">
                                <div className="wishlist-table-content">
                                    <div className="table-content table-responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="width-remove" />
                                                    <th className="width-thumbnail" />
                                                    <th className="width-name">Product</th>
                                                    <th className="width-price"> Unit price </th>
                                                    <th className="width-stock-status"> Stock status </th>
                                                    <th className="width-wishlist-cart" />
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="product-remove"><Link href="#">×</Link></td>
                                                    <td className="product-thumbnail">
                                                        <Link href="shop-single-product.html"><img src="assets/img/shop/details/nav1.jpg" alt="Image" /></Link>
                                                    </td>
                                                    <td className="product-name">
                                                        <h5><Link href="shop-single-product.html">Jigsaw Puzzles For Kids</Link></h5>
                                                    </td>
                                                    <td className="product-price"><span className="amount">$120.00</span></td>
                                                    <td className="stock-status">
                                                        <span><i className="fa fa-check" /> In Stock</span>
                                                    </td>
                                                    <td className="wishlist-cart"><Link href="shop-cart.html">Add to Cart</Link></td>
                                                </tr>
                                                <tr>
                                                    <td className="product-remove"><Link href="#">×</Link></td>
                                                    <td className="product-thumbnail">
                                                        <Link href="shop-single-product.html"><img src="assets/img/shop/details/nav2.jpg" alt="Image" /></Link>
                                                    </td>
                                                    <td className="product-name">
                                                        <h5><Link href="shop-single-product.html">Bruder Toys Mini Ships</Link></h5>
                                                    </td>
                                                    <td className="product-price"><span className="amount">$120.00</span></td>
                                                    <td className="stock-status">
                                                        <span><i className="fa fa-check" /> In Stock</span>
                                                    </td>
                                                    <td className="wishlist-cart"><Link href="shop-cart.html">Add to Cart</Link></td>
                                                </tr>
                                                <tr>
                                                    <td className="product-remove"><Link href="#">×</Link></td>
                                                    <td className="product-thumbnail">
                                                        <Link href="shop-single-product.html"><img src="assets/img/shop/details/nav3.jpg" alt="Image" /></Link>
                                                    </td>
                                                    <td className="product-name">
                                                        <h5><Link href="shop-single-product.html">Sassy Crib and Floor Mirror</Link></h5>
                                                    </td>
                                                    <td className="product-price"><span className="amount">$120.00</span></td>
                                                    <td className="stock-status">
                                                        <span><i className="fa fa-check" /> In Stock</span>
                                                    </td>
                                                    <td className="wishlist-cart"><Link href="shop-cart.html">Add to Cart</Link></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
