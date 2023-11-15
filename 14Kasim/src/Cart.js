import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default class Cart extends Component {
  render() {
    return (
      /* Bu kısım, navbar içinde bir açılır menü oluşturmak için kullanılır */
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepet - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {/* Sepetteki her ürünü dropdown içinde göstermek için haritalama yapılır */}
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              {/* Ürünü sepetten çıkarmak için tıklanabilir 'X' */}
              <span
                onClick={() => this.props.removeToCart(cartItem.product)}
                className="badge badge-danger"
                style={{ marginRight: "10px", backgroundColor: "red" }}
              >
                X
              </span>
              {cartItem.product.productName}
              {/* Ürün miktarını gösteren badge */}
              <span
                className="badge badge-warning"
                style={{ backgroundColor: "green" }}
              >
                {cartItem.quantity}
              </span>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          {/* Sepeti boşaltmak için bir seçenek */}
          <DropdownItem>Sepeti Boşalt</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}