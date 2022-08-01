import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextareaAutosize, TextField } from '@mui/material'
import React from 'react'
//import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
import NoneImage from './image/noneimage.png';
//import { FormStyles as classes } from './formStyles';
import { ImageList } from './imageList/imageList';
import { getUrlFileStorageService } from '../../../../services/image.services';


const newItemDefault = {
  pictureUrl: NoneImage,
  title: '',
  price: '',
  category: '',
  stock: '',
  description: ''
}

export const DashboardForm = (props) => {
  const { item, categories, submit } = props;



  const [newItem, setNewItem] = useState(newItemDefault);
  const [openImageList, setOpenImageList] = useState(false);





  const handleSubmitForm = (e) => {
    e.preventDefault();
    submit(newItem);

    //  setImageItem(NoneImage);
    setNewItem(newItemDefault)
  }


  const clickImage = (file) => {
    setOpenImageList(false);
    //recibe un archivo de Storage y me devuelve la url, la cual almacena en imageItem
    getUrlFileStorageService(file).then(url => setNewItem(prevNewItem => ({ ...prevNewItem, pictureUrl: url })));

  }

  useEffect(() => {
    if (item.id !== undefined) {
      setNewItem(item)
    }

  }, [item])

  return (
    <>
      {
        openImageList
          ? <ImageList clickImage={clickImage} />

          : <Box
            component='form'
            onSubmit={handleSubmitForm}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              maxWidth: '700px',
              minWidth: '300px',
              background: 'white',
              padding: 2
            }}
          >
            <Box
              component='button'

              onClick={() => setOpenImageList(true)}
              sx={{
                height: 300,
                width: 225,
                boxShadow: '0.25rem 0.25rem 0.25rem #00000050',
                border: 0,
                cursor: 'pointer'
              }}
            >

              <Box
                component='img'

                src={newItem.pictureUrl}
                alt='falta imagen'
                sx={{ height: 300, width: 225 }}

              />


            </Box>
            <TextField

              fullWidth
              label="Título"
              id="title"
              type="text"
              size="small"
              value={newItem.title}
              onChange={e => { setNewItem(itemPrev => ({ ...itemPrev, title: e.target.value })) }}
              sx={{ marginTop: 2 }}

            />

            <TextField

              fullWidth
              label="Precio"
              id="price"
              type="number"
              size="small"
              value={newItem.price}
              onChange={e => { setNewItem(itemPrev => ({ ...itemPrev, price: e.target.value })) }}
              sx={{
                marginTop: 2
              }}

            />

            <TextField

              fullWidth
              label="Stock"
              id="stock"
              type="number"
              size="small"
              value={newItem.stock}
              sx={{
                margin: '1rem 0 1rem 0',

              }}
              onChange={e => { setNewItem(itemPrev => ({ ...itemPrev, stock: e.target.value })) }}
            />


            <FormControl fullWidth>
              <InputLabel id="category">Categoría</InputLabel>
              <Select
                size='small'
                labelId="cate"
                id="categorySelect"
                value={newItem.category}


                onChange={e => { setNewItem(itemPrev => ({ ...itemPrev, category: e.target.value })) }}
              >
                {categories.map(categoria => (
                  <MenuItem key={`men${categoria.id}`} value={categoria.id}>{categoria.name}</MenuItem>
                ))}


              </Select>
            </FormControl>


            <TextareaAutosize
              aria-label="empty textarea"
              id="description"
              value={newItem.description}
              style={{
                width: '100%',
                height: '10rem',
                marginTop: '1rem',
                fontFamily: 'Roboto',
                resize: 'none'

              }}
              onChange={e => { setNewItem(itemPrev => ({ ...itemPrev, description: e.target.value })) }}
            />

            <Button type='submit' sx={{
              marginTop: 2,
              width: '100%',
              border: '1px solid #4385F2',
              backgroundColor: '#4385F2',
              color: 'white',
              '&:hover': {
                color: '#4385F2'
              }

            }}>Enviar</Button>

          </Box >
      }
    </>
  )
}

