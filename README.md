# Universo 3d

## Descripción del proyecto
__Universo 3d__ es un proyecto de tipo e-commerce FullStack, creado en ReactJs, con una conexión a Firebase como backend y pensado para escalarlo con vinculación a otras tecnologías. 


## Estado del proyecto
El mismo se encuentra en etapa de crecimiento, la intención es agregar todos los servicios de Firebase, medios de pago y auto gestión.

## Instalación
Debe tener instalado node v16.15 y npm v8.5.5 o superior
Puede clonar el proyecto con git utilizando el comando:
```git 
  git clone https://github.com/santozzi/universo3d.git
 ```
y luego ejecutar el comando 

```git 
  npm install
 ```
## Soporte
De encontrar algún problema o bug, se agradece si se puede notificar a universo.trid@gmail.com.

## Hoja de ruta
Se espera que a futuro, el proyecto, no solo acepte los medios de pago tradicionales como MercadoPago, Paypal, Visa... sino también medios de pago descentralizados.

El mismo se desarrollaría, utilizando la API de Binance, LBank y/o Exchange populares, cambiando de forma instantanea, la crypto moneda con la que se compra el producto a una crypto estable como ser USDT.

## Contribución
Este proyecto utiliza varias librerías que facilitan su desarrollo por lo que agradezco a los proyectos:
* [react-icons](https://react-icons.github.io/react-icons) agregando muchos íconos
* [uuid](https://github.com/uuidjs/uuid) para agregar un uuid a los archivos de Storage
* [material ui](https://mui.com/) agregando estética y diseño a los componentes
* [sweetalert2](https://sweetalert2.github.io/) brindando feedback al usuario con carteles elegantes y sencillos de utilizar
* [react-hook-form](https://react-hook-form.com/) para la validación de formularios
* [react-easy-crop](https://valentinh.github.io/react-easy-crop/) para recortar una foto antes de subirla al servidor


## Visuales



__Producto__

![Producto](./src/images/readme/item.jpg)

El usuario podrá filtrar el conjuto de productos mediante categorías, una vez visto el producto que se desea, el usuario podrá hacer click en el mismo para ser dirigido a una nueva pantalla, donde se encuentra la descripción del producto y un itemCounter que le permitirá seleccionar la cantidad y llevarlo a un carrito de compras.

## Descripción del diseño
Cuenta con un __Header__ en el que se incluye una barra de navegación, la misma esta constituida por una marca , categorías, un ícono de un carrito de compras y botones para registrarse o ingresar.
Tiene dos estados, uno para páginas desktop y otro para pantallas mobile. 

__Barra Desktop__

![Barra desktop](./src/images/readme/navbar.png)

__Barra Mobile__

![Barra celular](./src/images/readme/barracelular.png)


Un __Main__,  donde se encuentra la información llamada por la barra de navegación, tales como productos y detalles de los mismos.

__Main con todas las categorías en versión desktop y luego en versión para mobile__

![Main](./src/images/readme/home.jpg)

![Main](./src/images/readme/homeMobile.png)



## Página de error
Si el usuario ingresa una dirección no contemplada o escapa de lo establecido en el diseño, pueden darse 3 casos:
1. nombredelapagina.com/direccionNoContemplada
2. nombredelapagina.com/category/categoriaNoContemplada
3. nombredelapagina.com/item/productoNoContemplado

Para lo que aparecerán las siguientes pantallas:

__Error en versión para mobile__

![Main](./src/images/readme/error.png)

## Librerías usadas
### Predeterminadas de Create React Aplication
*    react ^18.1.0
*    react-dom 18.1.0
*    react-scripts ^5.0.1
*    web-vitals ^2.1.4

### Librerías de navegación
*    [react-router-dom ^6.3.0](https://reactrouter.com/)

### Otras librerías

* [react-icons](https://react-icons.github.io/react-icons) agregando muchos íconos
* [uuid](https://github.com/uuidjs/uuid) para agregar un uuid a los archivos de Storage
* [material ui](https://mui.com/) agregando estética y diseño a los componentes
* [sweetalert2](https://sweetalert2.github.io/) brindando feedback al usuario con carteles elegantes y sencillos de utilizar
* [react-hook-form](https://react-hook-form.com/) para la validación de formularios
* [react-easy-crop](https://valentinh.github.io/react-easy-crop/) para recortar una foto antes de subirla al servidor

### Muestra en github page
*    [universo3d](https://santozzi.github.io/universo3d/)


