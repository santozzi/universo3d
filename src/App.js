import './App.css';
import { Header } from './components/header/header.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import { ErrorPage } from './components/errorPage/errorPage';
import { Cart } from './components/cart/cart';

function App() {
  return (

    <BrowserRouter >
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:id' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/error/:mensaje' element={<ErrorPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </main>
    </BrowserRouter>

  );
}

export default App;
