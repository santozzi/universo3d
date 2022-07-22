import { styled, TableCell, tableCellClasses, TableRow } from '@mui/material';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export const OrderStyles = () => {
    return {
        sectionContainer: {
            padding: 0,
            minWidth: 700,
            margin: '2rem',
            border: '1px solid #000000',
            backgroundColor: '#F2F3F7',
            "@media(max-width:750px)": {
                margin: 0,
                minWidth: 'auto',

            }
        },
        logoDatesContaienr: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: '#fff',

        },
        logoContainer: {
            backgroundColor: '#fff',
            padding: '1rem',
            borderRight: '1px solid #000'
        },
        numberDateContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '100%',
            color: 'black',

        },
        numberDate: {
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            flexDirection: 'column',
            width: '100%',
            color: 'black',

        },
        numberContainer: {

            marginRight: '2px'
        },
        dateContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',

            marginTop: '1rem',
            padding: 1,
            margin: '2px'
        },
        dateRectangle: {
            backgroundColor: 'white',
            fontSize: '15',
            color: 'black'
        },

        buyerContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            flexWrap: 'wrap',
            borderTop: '1px solid #000',

            padding: 1
        },
        tableContainer: {
            width: '100%'
        },
        totalContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: '#ffffff',

        },
        total: {
            padding: '1rem',
            fontWeight: 'bold',
            fontSize: '20px'
        }

    }
}
