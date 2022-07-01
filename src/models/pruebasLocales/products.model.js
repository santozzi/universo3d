
let products =
    [
        { id: "1", title: "Bender Mate", category: "1", price: 1300, stock: 80, description: "Mate de plástico PLA, con interior de platico especial para infusiones, este artículo es espacial para casitas de fiestas y una tarde en la plaza del barrio", pictureUrl: "https://scontent.fbhi1-1.fna.fbcdn.net/v/t39.30808-6/279298449_113573058002504_7986680415010912140_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=O1ERDy9NulsAX_Hj1fK&_nc_ht=scontent.fbhi1-1.fna&oh=00_AT-qNiMMxLnzJYy9SvAv9ud5BiD7FWmrNAUomiT0Dv5uFg&oe=62B44391" },
        { id: "2", title: "Calavera Mate", category: "1", price: 1800, stock: 60, description: "Mate de plástico PLA, con interior de platico especial para infusiones, este artículo es espacial para casitas de fiestas y una tarde en la plaza del barrio", pictureUrl: "https://scontent.fbhi1-1.fna.fbcdn.net/v/t39.30808-6/278704202_108374945188982_9125610052170950268_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=4srtQAWnT-sAX9nXSm_&_nc_ht=scontent.fbhi1-1.fna&oh=00_AT-aS8XBoNicd2B-sHxB_4-E01kQ5QJziuYuvsTeK7_cvw&oe=62B54838" },
        { id: "3", title: "Minion Mate", category: "1", price: 820, stock: 35, description: "Mate de plástico PLA, con interior de platico especial para infusiones, este artículo es espacial para casitas de fiestas y una tarde en la plaza del barrio", pictureUrl: "https://scontent.fbhi1-1.fna.fbcdn.net/v/t39.30808-6/278608174_106288645397612_7830392067714234810_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=-tAWR9kSqsIAX8pPJQo&tn=7iuhlvP_SnMWHU6A&_nc_ht=scontent.fbhi1-1.fna&oh=00_AT9AgXaBsM8GCs5yyIq8JUjSE9CcA8au9KoF0lgwwNmarQ&oe=62B4CFDF" },
        { id: "4", title: "Poke Mate", category: "1", price: 800, stock: 12, description: "Mate de plástico PLA, con interior de platico especial para infusiones, este artículo es espacial para casitas de fiestas y una tarde en la plaza del barrio", pictureUrl: "https://scontent.fbhi1-1.fna.fbcdn.net/v/t39.30808-6/279016883_106288682064275_2192707750496888048_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=-iaZUP69_j4AX-DpfFn&tn=7iuhlvP_SnMWHU6A&_nc_ht=scontent.fbhi1-1.fna&oh=00_AT-52MbzRS5vK5BSJkCBJkzW-UblHyMq092Rv4kLioob5w&oe=62B3F324" },

        { id: "5", title: "Mano Celestial", category: "2", price: 800, stock: 12, description: "Porta sahumerios de plastico con estabilidad perfecta tamaño adecuado para saumerios estandares, dale una mano al buen aroma: viene en color rojo, amarillo azul y blanco", pictureUrl: "https://scontent.fbhi1-1.fna.fbcdn.net/v/t39.30808-6/283899546_127262916633518_5648483249665082567_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=Srbd2-hl6dsAX_jMO62&tn=lw3AGZnXEKV1-fHY&_nc_ht=scontent.fbhi1-1.fna&oh=00_AT-FF1K4Ak82_yWMxvnlkqT801XBk-9UjFCYk2y85639VQ&oe=62B137CB" },
        { id: "6", title: "Porta sahumerios", category: "2", price: 800, stock: 12, description: "Porta sahumerios la rana pensadora, la combinación perfecta entre ecología y espiritualidadad", pictureUrl: "https://scontent.fbhi1-1.fna.fbcdn.net/v/t39.30808-6/283780904_127262869966856_5809231921723611318_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=aTYR8ealjRMAX-hzf-3&_nc_ht=scontent.fbhi1-1.fna&oh=00_AT8nEpkUQVmVcYb2acVSl7YhyhLuio4Q0tqwninxTJ8PKg&oe=62B24949" },
        { id: "7", title: "Corta masa", category: "4", price: 250, stock: 12, description: "Cortador de masa para hacer galletas con forma de maquinas motrices, estimula la imaginación de su hija o hijo, dele de comer a un futuro ingeniero o ingeniera, ya se acabaron las galletas aburridas, sea el alma del grupo de whatsapp de la escuela o jardín.", pictureUrl: "https://cdn.thingiverse.com/renders/be/06/79/ca/44/20121124_163921_preview_featured.jpg" },
        { id: "8", title: "Llavero de River", category: "3", price: 800, stock: 12, description: "Llavero de River ideal para ir a la cancha o para regalar, mantenga sus llaves protegidas con su equipo favorito", pictureUrl: "https://scontent.fbhi1-1.fna.fbcdn.net/v/t39.30808-6/279216034_108373935189083_5275128014423314070_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=tulVp8QaLkYAX_g0oIS&_nc_ht=scontent.fbhi1-1.fna&oh=00_AT_xuq90sqE3CRx0dnqFueoZMfmDo0nOhwPC2PFph8c9Yw&oe=62B2469B" },
    ]
let categories = [
    { id: "1", name: "Mates" },
    { id: "2", name: "Porta sahumerios" },
    { id: "3", name: "Llaveros" },
    { id: "4", name: "Cortadores" },

]


export const getProducts = () => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(
            () => {
                resolve(products);
                reject("Error de conexion");
            }, 3000)
    });
    return promesa;
}
export const getProductById = (id) => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(
            () => {
                const product = products.find(producto => producto.id === id);
                if (product) {
                    resolve(product);
                } else {
                    reject("El producto no existe");
                }

            }, 2000)
    });
    return promesa;
}
export const getProductsByCategory = (category) => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(
            () => {
                const filteredProducts = products.filter(producto => producto.category === category);
                if (filteredProducts) {
                    resolve(filteredProducts);
                } else {
                    reject("La categoría no existe");
                }

            }, 2000)
    });
    return promesa;
}

export const getCategoryById = (id) => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(
            () => {

                const filteredProducts = categories.find(category => category.id === id);


                if (filteredProducts) {
                    resolve(filteredProducts);
                } else {
                    reject("La categoría no existe");
                }

            }, 2000)
    });
    return promesa;
}