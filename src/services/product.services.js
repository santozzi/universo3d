import {
    getCategoryById as getCategoryByIdModel
} from '../models/pruebasLocales/products.model';

import {
    getProducts as getProductsModel,
    getProductById as getProductByIdModel,
    getProductsByCategory as getProductsByCategoryModel,
    removeProductByIdModel,
    updateProductModel,
    updateProductFieldModel,
    saveProduct,
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

export const removeProductByIdService = (id) => {
    return removeProductByIdModel(id);
}

export const updateProductService = (product) => {
    return updateProductModel(product);
}
export const getCategoryById = (id) => {
    return getCategoryByIdModel(id);
}
export const updateProductFieldService = (id, fields) => {
    return updateProductFieldModel(id, fields)
}
export const saveProductService = (product) => {
    return saveProduct(product);
}