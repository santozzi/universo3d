import './App.css';
import { Header } from './components/header/header.js';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './components/cartContext/cartContext';
import { Router } from './routes/router';



function App() {

  return (
    <CartContextProvider >
      <BrowserRouter >
        <Header />
        <main>
          <Router />

        </main>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
