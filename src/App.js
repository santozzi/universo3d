import './App.css';
import { Header } from './components/header/header.js';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './components/cart/cartContext/cartContext';
import { Router } from './routes/router';
import { AuthContextProvider } from './components/Auth/authContext/authContext';
import { AuthContextProviderService } from './services/auth.services';
import { Footer } from './components/footer/footer';

function App() {

  return (
    <BrowserRouter >
      <AuthContextProvider>
        <CartContextProvider>


          <Header />


          <main className='App'>
            <Router />
          </main>
          <Footer />

        </CartContextProvider>
        <AuthContextProviderService />
      </AuthContextProvider>
    </BrowserRouter >

  );
}

export default App;
