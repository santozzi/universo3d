import { firebaseApp, storage } from './conexion';
import { deleteObject, getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

const storge = getStorage(firebaseApp);
const DIR = 'productos';

export const getImagesModel = async () => {
    const listRef = ref(storge, DIR);
    const listaArchivos = await listAll(listRef)
    // const archivo = listaArchivos.items[0];

    return listaArchivos.items;
}
export const getImageByIdModel = () => {

}
export const getUrlFileStorageModel = async (archivo) => {
    return await getDownloadURL(archivo);
}

export const addFileModel = async (file) => {
    const uuid = uuidv4();
    const extensionFile = file.name.split('.')[1];
    const newNameFile = `${uuid}.${extensionFile}`;
    ref(storage, `${DIR}/${newNameFile}`);
    //const respuesta = await uploadBytes(fileRef, file)
    console.log(file.path_);

}
export const deleteFileModel = async (file) => {
    const locationFile = file._location.path_;
    const fileRef = ref(storage, locationFile);
    const respuesta = await deleteObject(fileRef);
    console.log(respuesta);
}