import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Categories extends Component {
  // Bileşenin durumu, kategorileri içerir
  state = {
    categories: [],
  };

  // Bileşenin monte edildiği an, kategorileri almak için API'ye istek gönderilir
  componentDidMount() {
    this.getCategories();
  }

  // Kategorileri API'den almak için yardımcı fonksiyon
  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        {/* Kategorileri listelemek için bir grup oluşturulur */}
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              // Etkin kategoriye uygun renk vermek için aktif durum kontrol edilir
              active={
                category.categoryName === this.props.currentCategory
                  ? true
                  : false
              }
              // Kategoriye tıklandığında belirli bir kategoriye geçmek için fonksiyon çağrılır
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
