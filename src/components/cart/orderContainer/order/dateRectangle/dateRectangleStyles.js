
const sizeNumberDate = 10;
const padding = 5;

export const DateRectangleStyles = () => {

    return {
        rectangleContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            flexDirection: 'row',
            color: 'white',



        },
        day: {
            backgroundColor: 'orange',
            width: sizeNumberDate,
            padding: padding,
            fontSize: sizeNumberDate - 2,
            textAlign: 'center'
        },
        month: {
            backgroundColor: 'red',
            width: sizeNumberDate,
            padding: padding,
            fontSize: sizeNumberDate - 2,
            textAlign: 'center'
        },
        year: {
            backgroundColor: 'blue',
            width: sizeNumberDate,
            padding: padding,
            fontSize: sizeNumberDate - 2,
            textAlign: 'center'
        }
    }
}