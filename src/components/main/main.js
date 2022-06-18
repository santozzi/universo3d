import React from 'react';
import { ItemCount } from '../itemCount/itemCount';
import { ItemDetailContainer } from '../itemDetailContainer/itemDetailContainer';

import { ItemListContainer } from '../itemListContainer/itemListContainer';
import './main.css';

export const Main = () => {
    /*             <ItemListContainer />
    
<ItemCount stock='15' initial='1' product='MateBender' /> */
    return (
        <main>
            <ItemDetailContainer />
        </main>
    );
} 