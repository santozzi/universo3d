import React from 'react';
import './itemListMobile.css';
import './itemListDefault.css';
export const ItemList = ({ titulo, children }) => {

    return (
        <section className='card-hold-mobile'>
            <h2 className='card-hold-mobile-title'>
                {titulo}
            </h2>
            <article className='card-holder-article'>
                {children}
            </article>
        </section>
    );
}