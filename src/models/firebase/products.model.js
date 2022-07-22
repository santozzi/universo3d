import { firebaseApp } from './conexion';
import {
    doc, getDoc, getFirestore, collection,
    getDocs, query, where, addDoc, deleteDoc, setDoc, updateDoc, orderBy, limit, startAt
} from 'firebase/firestore';
const TABLE = "products";
const app = firebaseApp;

const db = getFirestore(app);


export const saveProduct = (product) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore(app);

        addDoc(collection(db, TABLE), product)
            .then(() => resolve({ message: `${product.title} agregado con éxito!!` }))
            .catch(err => reject({ message: err.message }));

    });


}

export const getProducts = () => {

    // const db = getFirestore(app);
    const itemsCollection = collection(db, TABLE);
    const promesa = new Promise((resolve, reject) => {
        getDocs(itemsCollection)
            .then((snapshot) => {
                if (snapshot.size === 0) {
                    resolve([]);
                } else {
                    resolve(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                }
            })
            .catch(err => reject(err));
    });
    return promesa;
}



export const getProductsPagerModel = (page, cantProd) => {
    /*
    *  Cada página tiene cantProd de items, y va a tener un primer elemento y uno último
    *  que marcan que una posicion en la colección por ej.
    *  si cantProd = 5 y la colección tiene 30 elementos
    *  Page  | P |          | U |
    * ------+-------------- -----   
    *   1   | 0 | 1 | 2 | 3 | 4 |
    *   2   | 5 | 6 | 7 | 8 | 9 | ....
    *  de forma tal que:
    *  Primero (P) = (page-1) * cantProd
    *  Ultimo (U) =   page*cantProd -1
    *  de esta forma con la pagina y la cantidad de productos que quiero mostrar renderice mi página
    *  puedo hacer un query que pida con limit(cantProd) y con startAt(elemento en posición (P)) puedo mover el puntero
    *  a donde se encuentre la page que solicito.
    */

    const primero = (page - 1) * cantProd;
    const itemCollectionRef = collection(db, TABLE);
    const promesa = new Promise(async (resolve, reject) => {
        try {
            const order = query(itemCollectionRef, orderBy('title'))

            //peticion para poder pidir el elemento en pos primero.
            const documentSnapshots = await getDocs(order);
            const primerItemRange = documentSnapshots.docs[primero] || null;


            const pagination = query(itemCollectionRef,
                orderBy('title'), startAt(primerItemRange), limit(cantProd));

            const filtrado = await getDocs(pagination);
            let count = ~~(documentSnapshots.size / cantProd);


            if (documentSnapshots.size % cantProd > 0) {
                count++
            }

            resolve({ count: count, pagination: filtrado.docs.map((doc) => ({ id: doc.id, ...doc.data() })) });
        } catch (err) {
            reject({ message: err.message });
        }

    })
    return promesa;
}


export const getProductById = (id) => {
    // const db = getFirestore(app);
    const biciRef = doc(db, TABLE, id);
    const promesa = new Promise((resolve, reject) => {

        getDoc(biciRef).then((snapshop) => {
            if (snapshop.exists()) {
                resolve({ id: snapshop.id, ...snapshop.data() })
            } else {
                reject({ message: 'El producto no existe' })
            }
        }).catch(err => reject({ message: err }));
    })
    return promesa;
}

export const getProductsByCategory = (category) => {


    const q = query(collection(db, TABLE), where("category", "==", category));
    const promesa = new Promise((resolve, reject) => {
        getDocs(q).then((snapshot) => {
            if (snapshot.size === 0) {
                resolve([]);
            } else {
                resolve(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            }
        }).catch(err => reject(err));
    })
    return promesa;
}





export const getProductsByCategoryPagerModel = (page, cantProd, category) => {
    /**
     * En esta función cambio la estrategia, ya que en getProductsPagerModel, para poder realizarla usando limit, tengo que
     * hacer dos peticiones a la db, una para pedir la colección y separar el elemento y otra con limit(cantProd) desde el elemento pedido
     * Acá pido una vez la colección y utilizando las formulas desarrolladas en getProductsPagerModel, corto el segmento del arreglo con 
     * rango =[P;U] siendo P y U el primero y el ultimo de la página solicitada.
     *  
     */


    const primero = (page - 1) * cantProd;
    const ultimo = page * cantProd - 1;

    const itemCollectionRef = collection(db, TABLE);
    const filter = query(itemCollectionRef, where("category", "==", category));

    const promesa = new Promise(async (resolve, reject) => {
        try {
            const itemsPorCategoria = await getDocs(filter);
            const size = itemsPorCategoria.size;
            const paginacion = itemsPorCategoria.docs.slice(primero, ultimo);
            let count = ~~(size / cantProd);
            if (size % cantProd > 0) {
                count++
            }
            resolve({ count: count, pagination: paginacion.map((doc) => ({ id: doc.id, ...doc.data() })) });
        } catch (error) {
            reject({ message: error.message })
        }
    })
    return promesa;
}







export const removeProductByIdModel = (id) => {
    const productRef = doc(db, TABLE, id);
    return deleteDoc(productRef);
}

export const updateProductModel = (product) => {
    const productRef = doc(db, TABLE, product.id);
    return setDoc(productRef, product);
}
export const getCategoryById = (id) => {

}
export const updateProductFieldModel = (id, fields) => {
    const productRef = doc(db, TABLE, id);
    return new Promise((resolve, reject) => {
        updateDoc(productRef, fields).then(res => resolve(res)).catch(err => reject(err))
    });
}
