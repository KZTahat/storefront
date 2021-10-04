import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import "./App.css";
import { useState } from "react";
import SimpleCart from "./Components/SimpleCart";

export default function App() {
  const [showCartItems, setShowCartItems] = useState(false);

  function showSimpleCart() {
    console.log('inside', showCartItems);
    showCartItems ? setShowCartItems(false) : setShowCartItems(true);
  }
  return (
    <>
      <Header showSimpleCart={showSimpleCart} />
      { showCartItems ? <SimpleCart /> : []}
      <Categories />
      <Products />
      <Footer />
    </>
  );
}
