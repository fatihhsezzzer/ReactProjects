import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Blog from './Components/Blog';
import CartPage from './Components/Pages/CartPage';
import WishList from './Components/WishList';
import Contact from './Components/Contact';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import ShopPage from './Components/Pages/ShopPage';
import ProductDetail from './Components/Pages/ProductDetail';


import { UserProvider } from './UserContext';
import { useState } from 'react';

function App() {
  const [registeredUsers, setRegisteredUsers] = useState([
    { name: "Fatih", email: "fatih@sezer", password: "1234" },
    { name: "deneme", email: "user2@example.com", password: "password2" }

  ]);

  const addUser = (newUser) => {
    setRegisteredUsers([...registeredUsers, newUser]);
  };


  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/wishList" element={<WishList />} />
            <Route path="/login" element={<Login setRegisteredUsers={setRegisteredUsers} registeredUsers={registeredUsers} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product-detail/:productId" element={<ProductDetail />} />


          </Routes>
          <Footer />
        </div>
      </Router>
    </UserProvider>

  );
}

export default App;
