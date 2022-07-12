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


//crea un nuevo usarie con email y pasword
// TODO: trabajar execpciones de todo
export const newUserModel = (user) => {
    return new Promise((resolve, reject) => {
        const email = user.email;
        const password = user.password;
        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((credential) => {
                // resolve(credential)
                /*   LO COMENTO PARA PODER PROBAR CON CUALQUIER MAIL SIN PREOCUPARME DE QUE A ALGUIEN LE LLEGUE EL MAIL.
                 sendEmailVerification(credential.user)
                     .then(() => console.log('envio de verificacion'))
                     .catch(() => console.log('La verificacion no fue enviada'));
                */
                //actualizo los valores de la credencial con el user
                updateProfileModel(user);

                //creo un usuario nuevo con los valores de 
                saveUserService({ id: credential.user.uid, ...user }).then(user => {
                    resolve(`Usuario ${user.id}  fue creado con éxito`)

                    signOutModel().then(() => sigInModel(email, password).then(() => console.log('reinicio de sesion listo')));
                    //login despues de logout
                }).catch(err => reject(err));




            })
            .catch(err => console.log(err));



    });

}
//loguearse con un email y un password

//TODO: enviar solo mensaje con then y catch
export const sigInModel = (user, password) => {
    return signInWithEmailAndPassword(auth, user, password);
}
export const updateProfileModel = (user) => {

    updateProfile(auth.currentUser, {
        displayName: `${user.name} ${user.lastName}`,
        photoURL: user.photoURL,


    }).then(() => {
        console.log('Perfil actualizado con éxito');
    }).catch((error) => {
        console.log('Ocurrio un error con el perfil', error.message);
    });

}
export const verificationEmailModel = (email) => {

}

//cerrar sesion
export const signOutModel = () => {

    return new Promise((resolve, reject) => {
        signOut(auth)
            .then(() => resolve('Sesión cerrada con éxito'))
            .catch(() => reject('Error al cerrar sesión'));
    });

}
//esto es para sacar
export const getUserModel = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (credential) => {

            resolve(credential);



        })
    }
    )
}





//componente



export const AuthContextModel = createContext();
export const AuthContextProviderModel = ({ children }) => {
    const [credential, setCredential] = useState({});
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [sesion, setSesion] = useState({})

    //loguearse con una cueta de google
    const signInWithGoogleModel = () => {
        const googleProvider = new GoogleAuthProvider();
        return new Promise((resolve, reject) => {
            signInWithPopup(auth, googleProvider)
                .then(credential => {
                    resolve(credential.user);
                    setCredential(credential.user);

                })
                .catch(error => {

                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    reject(`
                     Error de signInWithGoogle:
                     Codigo:     ${errorCode}
                     Mensaje:    ${errorMessage}
                     Email:      ${email}
                     Credencial: ${credential}
                
                `);

                });
        });
    }
    //crea un nuevo usarie con email y pasword
    // TODO: trabajar execpciones de todo
    const newUserModel = (user) => {
        return new Promise(async (resolve, reject) => {

            const email = user.email;
            const password = user.password;

            try {
                const credential = await createUserWithEmailAndPassword(auth, user.email, user.password);
                await updateProfileModel(user);
                const { email, name, lastName, phoneNumber } = user;
                const newUser = await saveUserService({ id: credential.user.uid, email, name, lastName, phoneNumber });
                setUser(newUser);
                await signOutModel();
                const newCredential = await sigInModel(email, password);
                resolve("Le estará llegando un email, para verificar su cuenta, si no lo ve, puede que este en spam, y si tampoco está, pruebe poniendo su dirección de email.");
            }
            catch (err) {
                reject(`Error al guardar el usuario y.. esto tambien:  ${err.message}`);
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
                resolve(console.log('Perfil actualizado con éxito'));
            }).catch((error) => {
                reject(console.log('Ocurrio un error con el perfil', error.message));
            });



        })


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
        const unsuscribe = onAuthStateChanged(auth, (credential) => {
            setCredential(credential);
            if (credential === null) {
                setIsLogin(false);
                setIsAdmin(false);
            } else {

                getUserByIdService(credential.uid).then(usuario => {
                    setUser(usuario)
                    console.log('usuario en authContext: ', usuario);

                }).catch(err => console.log('error de getCredential: ', err.message));
                /*  const usuario = {
                      id: credential.uid,
                      name: credential.displayName,
                      photoURL: credential.photoURL,
                      email: credential.email,
                      phoneNumber: credential.phoneNumber,
                      isEmailVerified: credential.emailVerified
                  }
                  setUser(usuario);
  */
                setIsLogin(true)
                isAdminModel(credential.uid)
                //console.log(user);



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





