import './App.css';
import { Header } from './components/header/header.js';
import { BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from './components/cartContext/cartContext';
import { Router } from './routes/router';

import { getProductById, getProducts } from './models/firebase/products.model';


function App() {

  //por id
  //getProductById("o11SsuU9ou8X4CUDV9NU").then(data => console.log(data)).catch(err => console.log(err));
  getProducts().then(data => console.log(data)).catch(err => console.log(err));
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
