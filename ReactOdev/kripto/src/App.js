import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Home from './Components/HomePage';
import CryptoList from './Components/CryptoList';
import CryptoDetail from './Components/CryptoDetail';
import News from './NewsList';
import Portfolio from './Components/Portfolio';
import Login from './Components/Login';
import Footer from './Footer';
import CryptoMarketOverview from './Components/CryptoMarketOverview';
function App() {

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


  return (
    <div className="App">
      <Home></Home>
      {/* <CryptoMarketOverview cryptos={cryptos} /> */}

    </div>
  );
}

export default App;
