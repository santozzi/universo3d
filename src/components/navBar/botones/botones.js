import React from 'react';
import { BtnClose } from './btn-close/btn-close';
import { BtnBars } from './btn-bars/btn-bars';


export const Botones = ({ state, funcion }) => {
    let boton = <></>;

    if (state) {
        boton = <BtnBars
            state={state}
            funcion={funcion}
        />
    } else {
        boton = <BtnClose
            state={state}
            funcion={funcion}
        />
    }


    return (
        <div>
            {boton}
        </div>
    );
}