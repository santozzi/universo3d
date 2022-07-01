import { firebaseApp } from './conexion';
import { doc, getDoc, getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
const TABLE = "products";
const app = firebaseApp;




export const getProducts = () => {

    const db = getFirestore(app);
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
export const getProductById = (id) => {
    const db = getFirestore(app);
    const biciRef = doc(db, TABLE, id);
    const promesa = new Promise((resolve, reject) => {

        getDoc(biciRef).then((snapshop) => {
            if (snapshop.exists()) {
                resolve({ id: snapshop.id, ...snapshop.data() })
            }
        }).catch(err => reject(err));
    })
    return promesa;
}

export const getProductsByCategory = (category) => {
    const db = getFirestore(app);
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
export const getCategoryById = (id) => {

}