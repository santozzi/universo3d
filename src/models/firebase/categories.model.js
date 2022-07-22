import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseApp } from './conexion';
const db = getFirestore(firebaseApp);

const TABLE = 'category';



export const getCategoryByIdModel = (id) => {
    return new Promise((resolve, reject) => {
        const biciRef = doc(db, TABLE, id);

        getDoc(biciRef).then((snapshop) => {
            if (snapshop.exists()) {
                resolve({ id: snapshop.id, ...snapshop.data() })
            } else {
                reject({ message: 'La categoría no existe' })
            }
        }).catch(err => reject({ message: err }));

    });
}

export const getCategoriesModel = () => {

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


