import { addFileModel, deleteFileModel, getImagesModel, getUrlFileStorageModel } from '../models/firebase/image.model';

export const getImagesService = () => {
    return getImagesModel();
}

export const getImageByIdModel = () => {

}
export const getUrlFileStorageService = (archivo) => {
    return getUrlFileStorageModel(archivo);
}

export const addFileService = (file) => {
    return addFileModel(file);
}

export const deleteFileService = (file) => {
    return deleteFileModel(file);
}