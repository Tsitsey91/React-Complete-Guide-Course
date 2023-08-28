import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meal";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsVisible, setCartVisibility] = useState(false)
  const closeCart = () => setCartVisibility(false)
  const openModal = () => setCartVisibility(true)

  return (
    <CartProvider>
      {cartIsVisible && <Cart onCloseModal={closeCart} />}
      <Header onOpenModal={openModal} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
