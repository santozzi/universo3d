import './App.css';
import { Header } from './components/header/header.js';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './components/cartContext/cartContext';
import { Router } from './routes/router';
import { AuthContextProvider } from './components/authContext/authContext';
import { AuthContextProviderService } from './services/auth.services';

function App() {

  return (

    <AuthContextProvider>
      <CartContextProvider>
        <BrowserRouter >

          <Header />


          <main className='App'>
            <Router />
          </main>

        </BrowserRouter>
      </CartContextProvider>
      <AuthContextProviderService />
    </AuthContextProvider>


  );
}

export default App;
