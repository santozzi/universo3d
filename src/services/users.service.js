import { getUserByIdModel, isAdminModel, saveUserModel } from '../models/firebase/users.model';

export const isAdminService = (id) => {
    return isAdminModel(id);
}

export const getUserByIdService = (id) => {
    return getUserByIdModel(id);
}

export const saveUserService = (user) => {
    return saveUserModel(user);
}
