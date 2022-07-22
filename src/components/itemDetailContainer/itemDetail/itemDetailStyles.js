export const ItemDetailStyles = () => {
    const flex = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return {
        sectionContainer: {
            ...flex,
            flexWrap: 'wrap',
            backgroundColor: '#F2F3F7',
            maxWidth: '60rem',


        },
        cardContainer: {
            width: 320,
            boxShadow: '5px 5px 5px #00000040',
            borderRadius: '0.5rem',
            margin: '1rem',

            skeleton: {
                background: 'grey',
                width: 320,
                boxShadow: '5px 5px 5px #00000040',
                borderRadius: '0.5rem',
                margin: '1rem 0 ',
            }
        },
        cardMedia: {
            height: 400,

        },
        cardContext: {
            backgroundColor: '#04418B'
        },
        title: {
            variant: 'h5',
            component: 'h5',
            color: '#FF975E'
        },
        description: {
            variant: 'body2',
            color: 'white'
        },
        panelPrecioItemCount: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: ' column',
            boxShadow: '5px 5px 5px #00000040',
            border: '1px solid #000000',
            maxWidth: 350,
            minWidth: 180,
            borderRadius: '0.5rem',
            margin: '1rem',
            precioContainer: {
                width: '100%',
                boxShadow: '5px 5px 5px #00000040',
                borderRadius: '0.5rem',
                backgroundColor: '#696C71',
                height: '10rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

            },
            precio: {
                variant: 'h5',
                component: 'h5',
                color: 'white'
            }
        },
        finishButton: {
            backgroundColor: '#04418B',
            color: 'white',
            width: '100%',

            margin: '1rem',
            '&:hover': {
                backgroundColor: '#000',
            }
        }

    }
}