import { firebaseApp } from './conexion';
import {
    getFirestore, collection,
    addDoc,
    doc,
    getDoc
} from 'firebase/firestore';
import { getProductById, updateProductFieldService } from '../../services/product.services';
const TABLE = "orders";
const app = firebaseApp;

const db = getFirestore(app);

export const getOrderById = (id) => {
    // const db = getFirestore(app);
    const biciRef = doc(db, TABLE, id);
    const promesa = new Promise((resolve, reject) => {

        getDoc(biciRef).then((snapshop) => {
            if (snapshop.exists()) {
                resolve({ id: snapshop.id, ...snapshop.data() })
            } else {
                reject({ message: "La orden no existe" });
            }
        }).catch(err => reject(err));
    })
    return promesa;
}
export const saveOrderModel = (order) => {
    const db = getFirestore(app);


    return new Promise((resolve, reject) => {

        addDoc(collection(db, TABLE), order)

            .then(dato => {
                order.items.forEach(
                    (item) => {
                        getProductById(item.id).then(
                            producto => {
                                let stock = producto.stock;
                                stock -= item.quantity;
                                updateProductFieldService(item.id, { stock }).then(res => console.log(res));
                            })
                    }

                );


                resolve(dato.id)
            })
            .catch(err => reject(err));
    });
}







