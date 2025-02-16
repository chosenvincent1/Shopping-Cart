import { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import ShoppingSection from './components/ShoppingSection';

function App() {
  const [showCart, setShowCart] = useState(false);
  
  useEffect(()=> {
    if(showCart) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [showCart])
  

  return (
    <main className='relative '>
      { showCart && 
        <CartContainer 
          showCart={showCart} 
          setShowCart={setShowCart} 
        />
      }
      <Navbar setShowCart={setShowCart} />
      <ShoppingSection setShowCart={setShowCart} />
    </main>
  )
}

export default App
