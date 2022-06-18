
const products =
    [
        { id: 1, title: "BenderMate", price: 1300, stock: 80, description: "Mate de plástico PLA, con interior de platico especial para infusiones, este artículo es espacial para casitas de fiestas y una tarde en la plaza del barrio", pictureUrl: "https://scontent.fbhi1-1.fna.fbcdn.net/v/t39.30808-6/279298449_113573058002504_7986680415010912140_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=fW8U7dZtzgAAX-OUQxl&_nc_ht=scontent.fbhi1-1.fna&oh=00_AT_vC_WTOuz2RxL1xNP1gFBR2wfosHs9_3KdWv7zY1eu4A&oe=62A86611" },
        { id: 2, title: "CalaveraMate", price: 1800, stock: 60, description: "Mate de plástico PLA, con interior de platico especial para infusiones, este artículo es espacial para casitas de fiestas y una tarde en la plaza del barrio", pictureUrl: "https://scontent.fbhi1-1.fna.fbcdn.net/v/t39.30808-6/278704202_108374945188982_9125610052170950268_n.jpg?stp=dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZY3tWebDPYsAX94_pbJ&_nc_ht=scontent.fbhi1-1.fna&oh=00_AT-9gve-0Fbb1K_qmnNarfDisxjice-WYCMx_GkI6K8j8A&oe=62A77078" },
        { id: 3, title: "MinionMate", price: 820, stock: 35, description: "Mate de plástico PLA, con interior de platico especial para infusiones, este artículo es espacial para casitas de fiestas y una tarde en la plaza del barrio", pictureUrl: "https://scontent.fbhi1-1.fna.fbcdn.net/v/t39.30808-6/278608174_106288645397612_7830392067714234810_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=IVN_YM9uoc4AX_LiBsv&tn=7iuhlvP_SnMWHU6A&_nc_ht=scontent.fbhi1-1.fna&oh=00_AT-5aMmoOF1kdIEBxryhJU4rSYHM8EBAj1MXp1sIqPKiPg&oe=62A6F81F" },
        { id: 4, title: "PokeMate", price: 800, stock: 12, description: "Mate de plástico PLA, con interior de platico especial para infusiones, este artículo es espacial para casitas de fiestas y una tarde en la plaza del barrio", pictureUrl: "https://scontent.fbhi1-1.fna.fbcdn.net/v/t39.30808-6/279016883_106288682064275_2192707750496888048_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0debeb&_nc_ohc=HTureYD26CEAX-xp4ha&tn=7iuhlvP_SnMWHU6A&_nc_ht=scontent.fbhi1-1.fna&oh=00_AT9GNTusvBKuo43ZPcLaJsdEUBvEQ-IvA-g7tjUq8-W3vg&oe=62A815A4" }

    ];

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