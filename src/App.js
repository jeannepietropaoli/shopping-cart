import './styles/App.css';
import React from 'react';
import Cart from './components/Cart';
import Header from './components/Header';
import RouteSwitch from './components/RouteSwitch';
import Navbar from './components/Navbar';


function App() {
  const [cartShown, setCartShown] = React.useState(false)
  const [cartItems, setCartItems] = React.useState([])

  function closeCart() {
    setCartShown(false)
  }

  function openCart() {
    setCartShown(true)
  }

  function noSuchItemInCart(cartItems, product) {
      return !cartItems.find(item => item.id === product.id)
  }

  function findProductIndex(array, product) {
    return array.findIndex(element => element.id === product.id)
  }

  function addToCart(product) {
    setCartItems(prevCartItems => {
      const newCartItems = [...prevCartItems]
      if(noSuchItemInCart(newCartItems, product)) {
        newCartItems.push({...product, quantity : 1})
      }
      else {
        const index = findProductIndex(newCartItems, product)
        const productToUpdate = newCartItems[index]
        newCartItems.splice(index, 1, {...productToUpdate, quantity : productToUpdate.quantity + 1})
      }
      return (newCartItems)
    })
  }

  function calculateNumberOfItemsInCart() {
    let count = 0
    cartItems.forEach(item => {
      count = count + item.quantity
    })
    return count
  }

  return (
    <div className="app">
      <Header openCart={openCart} numberOfItems={calculateNumberOfItemsInCart()} />
      <RouteSwitch addToCart={addToCart} />
      {cartShown && <Cart closeCart={closeCart} cartItems={cartItems} />}
    </div>
  );
}

export default App;
