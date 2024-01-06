import React from 'react'

export default function Category() {
    return (
        <div>
            <section className="category-area product-category1-area" data-aos="fade-up" data-aos-duration={1000}>
                <div className="container">
                    <div className="row category-items1">
                        <div className="col-sm-6 col-md-4">
                            <div className="category-item">
                                <div className="thumb thumb-style1">
                                    <img src="assets/img/category/1.png" alt="Image" />
                                    <div className="content">
                                        <div className="contact-info">
                                            <h2 className="title">Baby Dress</h2>
                                            <h4 className="price">$32.00</h4>
                                        </div>
                                        <a className="btn-link" href="shop.html">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="category-item mt-xs-25">
                                <div className="thumb thumb-style2">
                                    <img src="assets/img/category/2.png" alt="Image" />
                                    <div className="content">
                                        <div className="contact-info">
                                            <h2 className="title">Baby Toys</h2>
                                            <h4 className="price">$25.00</h4>
                                        </div>
                                        <a className="btn-link" href="shop.html">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4">
                            <div className="category-item mt-sm-25">
                                <div className="thumb thumb-style3">
                                    <img src="assets/img/category/3.png" alt="Image" />
                                    <div className="content">
                                        <div className="contact-info">
                                            <h2 className="title">Teddy Bear</h2>
                                            <h4 className="price">$18.00</h4>
                                        </div>
                                        <a className="btn-link" href="shop.html">Shop Now</a>
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
