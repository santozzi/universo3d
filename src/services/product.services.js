import {



    getCategoryById as getCategoryByIdModel
} from '../models/pruebasLocales/products.model';

import {
    getProducts as getProductsModel,
    getProductById as getProductByIdModel,
    getProductsByCategory as getProductsByCategoryModel,
} from '../models/firebase/products.model';

export const getProducts = () => {
    return getProductsModel();
}

export const getProductById = (id) => {
    return getProductByIdModel(id);
}

export const getProductsByCategory = (category) => {
    return getProductsByCategoryModel(category);
}

export const getCategoryById = (id) => {
    return getCategoryByIdModel(id);
}