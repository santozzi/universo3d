const displayFlex = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

}

export const itemStyles = () => {
    return {
        adminContainer: {
            ...displayFlex,
            button: {
                padding: 1,
                height: '2rem',
                width: '2rem',
                marginLeft: 1,
                marginRight: 1,
                "&:hover": {
                    backgroundColor: 'gray',
                    cursor: 'pointer'
                }
            },
            edit: {
                backgroundColor: 'yellow',

            },
            delete: {
                backgroundColor: 'red'
            }
        },
        cardContainer: {
            position: 'relative',

            width: 200,
            height: 450,
            margin: 1,
            borderRadius: 2,
            boxShadow: '0.5rem 0.5rem 0.5rem #00000090',
            "@media(max-width:899px)": {
                width: '100%',
                maxWidth: '100%',
                flexDirection: 'row',
                height: '100%'
            },

            orderContent: {
                "@media(max-width:899px)": {
                    ...displayFlex,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                }
            }
        },
        cardMedia: {
            height: 300,

            "@media(max-width:899px)": {
                width: 160,
                height: 213
            }
        },
        cardContext: {
            ...displayFlex,
            justifyContent: 'space-around',
            flexDirection: 'column',


        },
        cardTitle: {
            variant: 'h6',
            component: 'p'
        },
        cardPrice: {
            variant: 'h5',
            color: 'text.primary'
        },


    }
}