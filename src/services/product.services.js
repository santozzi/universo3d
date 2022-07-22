import {
    getProducts as getProductsModel,
    getProductById as getProductByIdModel,
    getProductsByCategory as getProductsByCategoryModel,
    removeProductByIdModel,
    updateProductModel,
    updateProductFieldModel,
    saveProduct,
    getProductsPagerModel,
    getProductsByCategoryPagerModel
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

export const updateProductFieldService = (id, fields) => {
    return updateProductFieldModel(id, fields)
}
export const saveProductService = (product) => {
    return saveProduct(product);
}
export const getProductsPagerService = (page, cantProd) => {
    return getProductsPagerModel(page, cantProd);
}
export const getProductsByCategoryPagerService = (page, cantProd, category) => {
    return getProductsByCategoryPagerModel(page, cantProd, category);
}