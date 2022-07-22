import { getCategoriesModel, getCategoryByIdModel } from '../models/firebase/categories.model';

export const getCategoryByIdService = (id) => {
    return getCategoryByIdModel(id);
}
export const getCategoriesService = () => {
    return getCategoriesModel();
}