import './styles/App.css';
import React from 'react';
import Cart from './components/Cart';
import Header from './components/Header';
import RouteSwitch from './components/RouteSwitch';
import Navbar from './components/Navbar';


function App() {
  React.useEffect(() => console.log('apprenders')) 
  const [cartShown, setCartShown] = React.useState(true)

  function closeCart() {
    setCartShown(false)
  }

  function openCart() {
    setCartShown(true)
  }

  return (
    <div className="app">
      <Header openCart={openCart} />
      <RouteSwitch />
      {cartShown && <Cart closeCart={closeCart} />}
    </div>
  );
}

export default App;
