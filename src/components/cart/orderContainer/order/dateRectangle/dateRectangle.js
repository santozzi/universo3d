import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { DateRectangleStyles as classes } from './dateRectangleStyles';
import { SquareNumber } from './squareNumber/squareNumber';
import PropTypes from 'prop-types';




export const DateRectangle = (props) => {
    const {
        date,
        fontSize,
        backgroundColor,
        color,
        square
    } = props;

    const [fecha, setFecha] = useState('')
    const [squareOption, setSquareOption] = useState({})


    useEffect(() => {

        if (square)
            setSquareOption({ borderRadius: 'none' });
        else
            setSquareOption({});


        const dosNumeros = (num) => {
            let resultado = '0';
            if (Number(num) < 10) {
                resultado += num;
            } else {
                resultado = num;
            }
            return resultado;
        }


        const dateS = new Date(Number(date));
        setFecha({
            date: dosNumeros(dateS.getDate()),
            month: dosNumeros(dateS.getMonth() + 1),
            fullYear: dateS.getFullYear(),
            year: `${dateS.getFullYear().toString().charAt(2)}${dateS.getFullYear().toString().charAt(3)}`
        })

    }, [date, square])

    return (

        <Box sx={{ ...classes().rectangleContainer, }} >
            <SquareNumber
                number={fecha.date}
                fontSize={fontSize}
                backgroundColor={backgroundColor}
                color={color}
                sx={squareOption}
            />
            <SquareNumber
                number={fecha.month}
                fontSize={fontSize}
                backgroundColor={backgroundColor}
                color={color}
                sx={squareOption}
            /> <SquareNumber
                number={fecha.year}
                fontSize={fontSize}
                backgroundColor={backgroundColor}
                color={color}
                sx={squareOption}

            />
        </Box>

    )
};
DateRectangle.propTypes = {
    /**
     * Recibe una fecha en segundos en formato string
     */
    date: PropTypes.string,
    /**
     * Recibe un número en formato string, el mismo representará el tamaño del número en px
     */
    fontSize: PropTypes.string,
    /**
    * Recibe un numero hexadecimal de tipo #ffaaaa, o los predeterminados tipo black, el mismo determinará el color de fondo
    */
    backgroundColor: PropTypes.string,
    /**
    * Recibe un numero hexadecimal de tipo #ffaaaa, o los predeterminados tipo black, el mismo determinará el color de los números
    */
    color: PropTypes.string,
    /**
     * Recibe un valor de tipo bool, para true la figura es un cuadrado y para false es un circulo
     */
    square: PropTypes.bool

}
DateRectangle.defaultProps = {
    date: '433998000000',
    fontSize: '40',
    backgroundColor: 'yellow',
    color: 'blue',
    square: true
};