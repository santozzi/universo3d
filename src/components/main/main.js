import React from 'react';
import { ItemCount } from '../itemCount/itemCount';

import { ItemListContainer } from '../itemListContainer/itemListContainer';
import './main.css';

export const Main = () => {
    return (
        <main>
            <ItemListContainer />
            <ItemCount stock='15' initial='1' product='MateBender' />
        </main>
    );
} 