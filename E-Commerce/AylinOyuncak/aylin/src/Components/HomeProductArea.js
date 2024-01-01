import React from 'react'

export default function HomeProductArea() {
    return (
        <div>
            <section className="product-area product-style1-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            <div className="section-title text-center" data-aos="fade-up" data-aos-duration={1000}>
                                <h2 className="title">New Products</h2>
                                <div className="desc">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="product-tab-content">
                                <ul className="nav nav-tabs" id="myTab" role="tablist" data-aos="fade-up" data-aos-duration={1000}>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="our-features-tab" data-bs-toggle="tab" data-bs-target="#our-features" type="button" role="tab" aria-controls="our-features" aria-selected="true">All Items</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="best-sellers-tab" data-bs-toggle="tab" data-bs-target="#best-sellers" type="button" role="tab" aria-controls="best-sellers" aria-selected="false">Baby Dress</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link mr-0" id="new-items-tab" data-bs-toggle="tab" data-bs-target="#new-items" type="button" role="tab" aria-controls="new-items" aria-selected="false">Baby Toys</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent" data-aos="fade-up" data-aos-duration={1300}>
                                    <div className="tab-pane fade show active" id="our-features" role="tabpanel" aria-labelledby="our-features-tab">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="product">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/1.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Funskool Teddy</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/2.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Baby Play Sets</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/3.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Jigsaw Puzzles For Kids</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/4.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Abstract Girl Dress</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/5.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Bruder Toys Mini Ships</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/6.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Abstract Boy Dress</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/7.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Funskool Teddy Pink</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/8.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Toys Box For Baby</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="best-sellers" role="tabpanel" aria-labelledby="best-sellers-tab">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="product">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/5.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Bruder Toys Mini Ships</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/6.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Abstract Boy Dress</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/7.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Funskool Teddy Pink</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/8.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Toys Box For Baby</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/1.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Funskool Teddy</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/2.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Baby Play Sets</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/3.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Jigsaw Puzzles For Kids</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/4.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Abstract Girl Dress</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="new-items" role="tabpanel" aria-labelledby="new-items-tab">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="product">
                                                    <div className="row">
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/1.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Funskool Teddy</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/2.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Baby Play Sets</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/3.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Jigsaw Puzzles For Kids</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/4.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Abstract Girl Dress</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/5.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Bruder Toys Mini Ships</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/6.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Abstract Boy Dress</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/7.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Funskool Teddy Pink</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                                            <div className="product-item">
                                                                <div className="product-thumb">
                                                                    <img src="assets/img/shop/8.png" alt="Image" />
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
                                                                    <h4 className="title"><a href="shop-single-product.html">Toys Box For Baby</a></h4>
                                                                    <div className="prices">
                                                                        <span className="price">$190.12</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
