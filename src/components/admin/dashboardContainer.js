import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCategoriesService } from '../../services/categories.sevice';
import { getProductById, saveProductService, updateProductService } from '../../services/product.services';
import { DashboardForm } from './dashboard/dashboardForm/dashboardForm';

export const DashboardContainer = () => {
  const [item, setItem] = useState({});
  const [categories, setCategories] = useState([]);

  const { id } = useParams();

  const handleSubmitForm = (newItem) => {

    if (newItem.id === undefined) {
      saveProductService(newItem)
        .then((msg) => console.log(msg.message))
        .catch(err => console.log(err));
    } else {
      updateProductService(newItem)
        .then(() => console.log('Item actualizado!!'))
        .catch(err => console.log('updateProductService: ', err));

    }
  }

  useEffect(() => {
    getCategoriesService()
      .then(categories => setCategories(categories))
      .catch(err => console.log(err.message));
    if (id !== undefined) {
      getProductById(id)
        .then((itemBase) => {
          setItem(itemBase);
        })
        .catch((err) => { console.log('error al obtener producto') });
    }
  }, [id])

  return <DashboardForm item={item} categories={categories} submit={handleSubmitForm} />
}