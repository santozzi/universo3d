import { firebaseApp } from './conexion';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
const TABLE = "users";
const app = firebaseApp;

const db = getFirestore(firebaseApp);


export const getUserByIdModel = (id) => {
    // const db = getFirestore(app);
    const biciRef = doc(db, TABLE, id);
    const promesa = new Promise((resolve, reject) => {

        getDoc(biciRef).then((snapshop) => {
            if (snapshop.exists()) {
                resolve({ id: snapshop.id, ...snapshop.data() }

                )

            }
        }).catch(err => reject(err));
    })
    return promesa;
}


export const isAdminModel = async (id) => {
    const admin = (await getUserByIdModel(id)).admin;
    console.log(admin);
    return admin;
}
export const saveUserModel = (user) => {
    const db = getFirestore(app);


    return new Promise((resolve, reject) => {
        setDoc(doc(db, TABLE, user.id), user)
            .then(dato => resolve(dato))
            .catch(err => reject(err));
    });
}