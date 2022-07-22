





export const FooterStyles = () => {
    const flex = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
    return {
        footerContainer: {
            ...flex,
            flexDirection: 'column',
            backgroundColor: 'black',
            color: 'white',
            width: '100%',
            minHeight: '15rem',
            position: 'absolute',
            bottom: '-150px'





        },
        tituloCatContactoContainer: {
            ...flex,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            width: '100%',
            flexWrap: 'wrap'
        },
        socialMedias: {
            ...flex,
            gap: '1rem',

            "a:link": {
                color: '#ccc'
            },
            "a:visited": {
                color: '#ccc'
            },


        },
        categories: {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            gap: '2px',
            textDecoration: 'none',
            margin: 2,
            "a:link": {
                color: '#ccc'
            },
            "a:visited": {
                color: '#ccc'
            },

        }

    }
}