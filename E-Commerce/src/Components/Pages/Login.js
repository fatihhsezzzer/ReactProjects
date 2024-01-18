import React from 'react'
import { Link } from 'react-router-dom';
import AccountSlider from '../Sliders/AccountSlider'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Contexts/UserContext';


export default function Login({ setRegisteredUsers, registeredUsers }) {
    const { currentUser, setCurrentUser, fetchFavorites } = useUser();
    const [Loginemail, setLoginemail] = useState('');
    const [Loginpassword, setLoginpassword] = useState('');
    const [Name, setName] = useState('');
    const [Surname, setSurname] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');



    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        const loginInfo = {
            email: Loginemail,
            password: Loginpassword
        };

        try {
            const response = await fetch('https://localhost:7237/LoginUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });

            const data = await response.json();


            if (data.isSuccess || data.authenticateResult) {
                localStorage.setItem('authToken', data.authToken);
                localStorage.setItem('name', data.name);
                localStorage.setItem('surname', data.surname);

                // UserContext'den currentUser'ı güncellemek için fonksiyonu kullan

                setCurrentUser({
                    name: data.name,
                    surname: data.surname,
                    id: data.id,
                    Token: data.authToken
                });
                console.log(currentUser)

                // Kullanıcıyı ana sayfaya yönlendir
                navigate('/');
            } else {
                setEmail('');
                setPassword('');
                alert('Giriş bilgileri hatalı. Lütfen tekrar deneyin.');
            }
        } catch (error) {
            console.error('Giriş sırasında bir hata oluştu:', error);
        }
    };



    const handleRegister = (event) => {

        event.preventDefault();

        const newUser = {
            Name: Name,
            Surname: Surname,
            email: email,
            password: password,
        };

        fetch('https://localhost:7237/RegisterUser', {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',

                // Gerekirse diğer header'lar
            },
            body: JSON.stringify(newUser)
        })
            .then(response => {
                if (response.ok) {
                    alert("Kayıt Başarılı...");

                } else {
                    throw new Error('Kayıt işlemi başarısız.');
                }
            })
            .catch(error => {
                alert(error.message);
            });
    };


    return (

        <div>
            <AccountSlider></AccountSlider>
            <section className="login-register-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 login-register-border">
                            <div className="login-register-content">
                                <div className="login-register-title mb-30">
                                    <h2>Login</h2>
                                    <p>Welcome back! Please enter your username and password to login. </p>
                                </div>
                                <div className="login-register-style login-register-pr">
                                    <form action="#" method="post">
                                        <div className="login-register-input">
                                            <input type="text" name="name" placeholder="E-mail address" value={Loginemail} required onChange={(e) => setLoginemail(e.target.value)} />
                                        </div>
                                        <div className="login-register-input">
                                            <input type="password" name="user-password" placeholder="Password" value={Loginpassword} required onChange={(e) => setLoginpassword(e.target.value)} />
                                            <div className="forgot">
                                                <Link href="#">Forgot?</Link>
                                            </div>
                                        </div>
                                        <div className="remember-me-btn">
                                            <input type="checkbox" />
                                            <label>Remember me</label>
                                        </div>
                                        <div className="btn-style-3">
                                            <button className="btn" onClick={handleLogin} type="button">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="login-register-content login-register-pl">
                                <div className="login-register-title mb-30">
                                    <h2>Register</h2>
                                    <p>Create new account today to reap the benefits of a personalized shopping experience. </p>
                                </div>
                                <div className="login-register-style">
                                    <form onSubmit={handleRegister} action="#" method="post">
                                        <div className="login-register-input">
                                            <input type="text" name="name" placeholder="Name" required
                                                value={Name} onChange={(e) => setName(e.target.value)} />
                                        </div>
                                        <div className="login-register-input">
                                            <input type="text" name="surname" placeholder="Surname" required
                                                value={Surname} onChange={(e) => setSurname(e.target.value)} />
                                        </div>
                                        <div className="login-register-input">
                                            <input type="text" name="user-name" placeholder="E-mail address" value={email} required onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div className="login-register-input">
                                            <input type="password" name="user-password" placeholder="Password" value={password} required onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <div className="login-register-paragraph">
                                            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <Link href="#">privacy policy.</Link></p>
                                        </div>
                                        <div className="btn-style-3">
                                            <button className="btn" onClick={handleRegister} type="button">Register</button>
                                        </div>
                                    </form>
                                    <div className="register-benefits">
                                        <h3>Sign up today and you will be able to :</h3>
                                        <p>The Loke Buyer Protection has you covered from click to delivery. Sign up <br />or sign in and you will be able to:</p>
                                        <ul>
                                            <li><i className="pe-7s-check icons" /> Speed your way through checkout</li>
                                            <li><i className="pe-7s-check icons" /> Track your orders easily</li>
                                            <li><i className="pe-7s-check icons" /> Keep a record of all your purchases</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >

        </div >
    )
}
