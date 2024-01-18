import React from 'react'
import { Link } from 'react-router-dom';
import { useUser } from '../Contexts/UserContext';

export default function Header() {
    const { currentUser } = useUser();
    const { logout } = useUser();
    return (
        <div>
            <header className="header-wrapper">
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-5 col-md-4 col-lg-6">
                                <div className="header-info-left">
                                    <p>Free Returns and Free Shipping</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-7 col-md-8 col-lg-6 sm-pl-0 xs-pl-15 header-top-right">
                                <div className="header-info">
                                    <Link href="tel://+00123456789"><i className="fa fa-phone" /> +00 123 456 789</Link>
                                    <Link href="mailto://demo@example.com"><i className="fa fa-envelope" /> demo@example.com</Link>
                                    <Link to="/login">
                                        <i className="fa fa-user" />
                                        {currentUser && currentUser.name ? `${currentUser.name} ${currentUser.surname}` : 'Account'}
                                    </Link>

                                    <div onClick={logout} style={{ cursor: 'pointer' }}>
                                        <i className="fa-solid fa-power-off ms-3"></i>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-middle">
                    <div className="container">
                        <div className="row row-gutter-0 align-items-center">
                            <div className="col-12">
                                <div className="header-align">
                                    <div className="header-align-left">
                                        <div className="header-logo-area">
                                            <Link href="index.html">
                                                <img className="logo-main" src="assets/img/logo.png" alt="Logo" />
                                                <img className="logo-light" src="assets/img/logo.png" alt="Logo" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="header-align-center">
                                        <div className="header-search-box">
                                            <form action="#" method="post">
                                                <div className="form-input-item">
                                                    <label htmlFor="search" className="sr-only">Search Everything</label>
                                                    <input type="text" id="search" placeholder="Search Everything" />
                                                    <button type="submit" className="btn-src">
                                                        <i className="pe-7s-search" />
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="header-align-right">
                                        <div className="header-action-area">
                                            <div className="header-action-wishlist">
                                                <Link to="/wishList" className="btn-wishlist" >
                                                    <i className="pe-7s-like" />
                                                </Link>
                                            </div>
                                            <div className="header-action-cart">
                                                <Link to="/Cart" className="btn-cart cart-icon">
                                                    <span className="cart-count">01</span>
                                                    <i className="pe-7s-shopbag" />
                                                </Link>
                                            </div>
                                            <button className="btn-menu d-md-none">
                                                <i className="fa fa-bars" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-area header-default sticky-header">
                    <div className="container">
                        <div className="row row-gutter-0 align-items-center">
                            <div className="col-4 col-sm-6 col-lg-2">
                                <div className="header-logo-area">
                                    <Link href="index.html">
                                        <img className="logo-main" src="assets/img/logo.png" alt="Logo" />
                                        <img className="logo-light" src="assets/img/logo.png" alt="Logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-8 sticky-md-none">
                                <div className="header-navigation-area d-none d-md-block">
                                    <ul className="main-menu nav position-relative">
                                        <li className="active"><Link className="ml--2" to="/">Home</Link></li>
                                        <li><Link href="about.html">About</Link></li>
                                        <li><Link to="/blog">Blog</Link></li>
                                        <li><Link to="/shop">Shop</Link></li>
                                        <li><Link to="/wishList">Wishlist</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-8 col-sm-6 col-lg-2">
                                <div className="header-action-area">
                                    <div className="header-action-search">
                                        <button className="btn-search btn-search-menu">
                                            <i className="pe-7s-search" />
                                        </button>
                                    </div>
                                    <div className="header-action-login">
                                        <button className="btn-login" onClick="window.location.href='login-register.html'">
                                            <i className="pe-7s-users" />
                                        </button>
                                    </div>
                                    <div className="header-action-wishlist">
                                        <button className="btn-wishlist" onClick="window.location.href='shop-wishlist.html'">
                                            <i className="pe-7s-like" />
                                        </button>
                                    </div>
                                    <div className="header-action-cart">
                                        <button className="btn-cart cart-icon">
                                            <span className="cart-count">01</span>
                                            <i className="pe-7s-shopbag" />
                                        </button>
                                    </div>
                                    <button className="btn-menu d-lg-none">
                                        <i className="fa fa-bars" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
