
import './App.css';
import React from 'react';
import Navi from './Components/Navi';
import Categories from './Components/Categories';
import ProductList from './Components/ProductList';
import { Container, Row } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Categories />
          <ProductList />
        </Row>
      </Container>



    </div>
  );
}

export default App;
