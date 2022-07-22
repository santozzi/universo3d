import { Box } from '@mui/system'
import React from 'react'


export const SquareNumber = (props) => {
    const { number, backgroundColor, color, fontSize, sx } = props;
    return (
        <Box sx={{
            backgroundColor: backgroundColor,
            color: color,
            fontSize: `${fontSize}px`,
            border: '1px solid #000000',
            padding: '2px',
            borderRadius: `${fontSize}px`,
            margin: '2px',
            ...sx
        }}>
            {number}
        </Box>
    )
}

SquareNumber.defaultProps = {
    number: '00',
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '10',
    sx: {}
};