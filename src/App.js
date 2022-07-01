import React, {Component, Fragment, useState} from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

class App extends Component{
  // const [cartIsShown, setCartIsShown] = useState(false);
  state = {
      cartIsShown: false
  }

  showCartHandler = () => {
    this.setState({cartIsShown: true})
  }

  hideCartHandler = () => {
        this.setState({cartIsShown: false})
  }

  render() {
      return (
          <CartProvider>
              {this.state.cartIsShown && <Cart onClose={this.hideCartHandler} />}
              <Header onShowCart={this.showCartHandler} />
              <main>
                  <Meals />
              </main>
          </CartProvider>
      );
  }


}

export default App;
