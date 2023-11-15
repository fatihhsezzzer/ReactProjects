import React from "react";
import { Component } from "react";
import Categories from "./Categories";
import Products from "./Products";
import Header from "./Header";
import Logo from './resim.png';
import { Col, Container, Row } from "reactstrap";


export default class App extends Component {
  // Güncel kategori, ürünler ve sepet bilgileri için state kullanımı
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };

  // Kategori değiştirmek için  ve ürünleri getiren fonksiyon
  kategoriDegistir = (kategori) => {
    this.setState({ currentCategory: kategori.kategoriAdi });
    this.urunleriGetir(kategori.id);
  };

  // kategori id ye göre ürünleri url olarak listeler
  urunleriGetir = (kategoriId) => {
    let url = "http://localhost:3000/urunler";
    if (kategoriId) {
      url += "?kategoriId=" + kategoriId;
    }

    //sor burayı
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };


  componentDidMount() {
    this.urunleriGetir();
  }

  // Sepete ürün ekleyen fonksiyon
  sepeteEkle = (urun) => {
    let yeniSepet = this.state.cart;
    var eklenenUrun = yeniSepet.find((c) => c.urun.id === urun.id);
    if (eklenenUrun) {
      // Eğer ürün zaten sepette varsa miktarını artır
      eklenenUrun.miktar += 1;
    } else {
      // Eğer ürün sepette yoksa, miktarı 1 olarak ekleyerek sepete ekle
      yeniSepet.push({ urun: urun, miktar: 1 });
    }
   
    this.setState({ cart:  yeniSepet });
  };

  // filter ile dolaşarak olamayan ürün haricindekileri tekrar tutar
  sepettekiUrunuCikar = (urun) => {
    let yeniSepet = this.state.cart.filter((c) => c.urun.id !== urun.id);
    this.setState({ cart: yeniSepet });
  };

  
  render() {
    return (
      <Container>
   
        <Header cart={this.state.cart} sepettekiUrunuCikar={this.sepettekiUrunuCikar} />

       
        <Row>
          <Col xs="3">
           
            <Categories
              kategoriDegistir={this.kategoriDegistir}
              currentCategory={this.state.currentCategory}
            />
          </Col>
          <Col xs="9">
            
            <Products
              sepeteEkle={this.sepeteEkle}
              products={this.state.products}
              currentCategory={this.state.currentCategory}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
