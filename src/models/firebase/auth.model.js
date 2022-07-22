import { useEffect, useState, createContext } from 'react';
import { firebaseApp } from './conexion';
import {
    getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signOut,
    GoogleAuthProvider, onAuthStateChanged,
    signInWithPopup, updateProfile
} from 'firebase/auth';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { getUserByIdService, saveUserService } from '../../services/users.service';

const auth = getAuth(firebaseApp);

const db = getFirestore(firebaseApp);
const TABLE = 'admins';


//loguearse con un email y un password

//TODO: enviar solo mensaje con then y catch
export const sigInModel = (user, password) => {
    return signInWithEmailAndPassword(auth, user, password);
}
export const updateProfileModel = (user) => {
    return new Promise((resolve, reject) => {
        updateProfile(auth.currentUser, {
            displayName: `${user.name} ${user.lastName}`,
            photoURL: user.photoURL,


        }).then(() => {
            resolve({ message: 'Perfil actualizado con éxito' });
        }).catch((error) => {
            reject({ message: 'Ocurrio un error con el perfil' });
            console.log(error.message);
        });

    });


}
//cerrar sesion
export const signOutModel = () => {

    return new Promise((resolve, reject) => {
        signOut(auth)
            .then(() => resolve({ message: 'Sesión cerrada con éxito' }))
            .catch(() => reject({ message: 'Error al cerrar sesión' }));
    });

}
/**
 * 
 * 
 *            COMPONENTE
 * 
 * 
 */


export const AuthContextModel = createContext();
export const AuthContextProviderModel = ({ children }) => {
    const [credential, setCredential] = useState({});
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    //loguearse con una cueta de google
    const signInWithGoogleModel = () => {
        const googleProvider = new GoogleAuthProvider();
        return new Promise((resolve, reject) => {
            signInWithPopup(auth, googleProvider)
                .then(credential => {
                    resolve({ message: `El usuario ${credential.user.displayName} ingreso con éxito` });
                    setCredential(credential.user);
                    //TODO: aca verificar si la cuenta esta verificada y si la cuenta esta registrada en usuarios
                    // si no esta registrada mandarlo por mensaje en el resolve para que aparezca un formulario para poner su nombre, apellido y telefono
                })
                .catch(error => {

                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    reject({
                        message: errorMessage,
                        code: errorCode,
                        email: email,
                        credential: credential
                    }
                    );

                });
        });
    }
    //crea un nuevo usarie con email y pasword
    // TODO: trabajar execpciones de todo
    const newUserModel = (user) => {
        return new Promise(async (resolve, reject) => {

            const password = user.password;

            try {
                const credential = await createUserWithEmailAndPassword(auth, user.email, user.password);
                /*   LO COMENTO PARA PODER PROBAR CON CUALQUIER MAIL SIN PREOCUPARME DE QUE A ALGUIEN LE LLEGUE EL MAIL.
                  sendEmailVerification(credential.user)
                      .then(() => console.log('envio de verificacion'))
                      .catch(() => console.log('La verificacion no fue enviada'));
                 */
                await updateProfileModel(user);
                const { email, name, lastName, phoneNumber } = user;
                const newUser = await saveUserService({ id: credential.user.uid, email, name, lastName, phoneNumber });
                setUser(newUser);
                await signOutModel();
                await sigInModel(email, password);
                resolve({ message: "Le estará llegando un email, para verificar su cuenta, si no lo ve, puede que este en spam, y si tampoco está, pruebe poniendo su dirección de email." });
            }
            catch (err) {
                reject({ message: err.message });
            }
        });
    }
    //loguearse con un email y un password
    const updateProfileModel = (user) => {
        return new Promise((resolve, reject) => {
            updateProfile(auth.currentUser, {
                displayName: `${user.name} ${user.lastName}`,
                photoURL: user.photoURL,
            }).then(() => {
                resolve({ message: 'Perfil actualizado con éxito' });
            }).catch((error) => {
                reject({ message: error.message })
            });
        });
    }

    useEffect(() => {
        const isAdminModel = (id) => {
            const biciRef = doc(db, TABLE, id);
            getDoc(biciRef).then((snapshop) => {
                if (snapshop.exists()) {
                    setIsAdmin(true)

                } else {
                    setIsAdmin(false);
                }
            }).catch(err => console.log('Error al pedir documento en context de auth.model', err));
        }


        //Escucha los cambio en la sesión del usuario
        const unsuscribe = onAuthStateChanged(auth, (credential) => {
            setCredential(credential);
            if (credential === null) {
                setIsLogin(false);
                setIsAdmin(false);
            } else {
                getUserByIdService(credential.uid).then(usuario => {
                    setUser(usuario)

                }).catch(err => console.log('error de getCredential: ', err.message));
                setIsLogin(true)
                isAdminModel(credential.uid)
            }

        });
        return () => {
            unsuscribe();
        }
    }, [])

    return (
        <AuthContextModel.Provider value={{ user, isLogin, isAdmin, newUserModel, credential, signInWithGoogleModel }}>
            {children}
        </AuthContextModel.Provider>
    )
}





