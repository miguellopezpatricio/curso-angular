<h1 align="center">CURSO ANGULAR</h1>

<p align="center">
  <img src="/assets/angular.png" alt="logo Angular">
</p>

1. **Bases Angular**

Nuevo proyecto y estudio de estructura. Creación primeros componentes de forma manual.

Nuevo proyecto desde el CLI: `ng new nombreProyecto`

<p align="center">
  <img src="/assets/estructura.png" alt="estructura proyecto Angular">
</p>


2. **gifsApp** búsqueda de imágenes. Acceso a API. 

 - *NOVEDADES:* 
    * Creación de módulos y componentes hijos. Los módulos sirven para agrupar componentes relacionados y así organizar mejor el proyecto. Para no saturar el componente principal `app.component`
    * Creación de interfaces.
    * Creación de servicios para aplicar la inyección de dependencias.
    * Ejemplo básico de subir a producción un proyecto con [netlify](https://app.netlify.com/)

Creación de componente con CLI: `ng g c [carpeta/]nombreComponente[opciones]`

Creación de módulo con CLI: `ng g m [carpeta]nombreMódulo[opciones]`


3. **paisesApp** conexión a api con información de países.

- *NOVEDADES:* Configuración de rutas.

<p align="center">
  <img src="/assets/rutas.png" alt="archivo estructura rutas">
</p>


4. **pipeApp** 

*NOVEDADES:* 

- Uso de pipes en Angular. 

- Uso de libería PrimeNG.


**NOTA** Para instalar la librería PrimeNG se necesita indicar la versión: `sudo npm install primeng@15.0.0 --save`

Instala el paquete de iconos: `npm install primeicons --save`

5. **heroesApp**

*NOVEDADES:*

- Uso de lazyload en la creación de rutas. Se crea un archivo de rutas básico y archivos de rutas hijas.
- Uso de Angular Material. NOTA: Se debe de indicar en el package.json que necesitamos la versión 12 por problemas de compatibilidad con componentes que desaparecen en versiones recientes.

*NOTAS:*
- Debido a problemas de compatibilidad con el servidor de pruebas 'json-server' la app se debe desarrollar en Angular v12 o inferior.
- Lo mismo sucede con Material Design. Se debe usar la versión 12. En versiones posteriores desaparecen muchos elementos descritos en el curso.
- Instalar json-server de manera global npm i -g json-server (https://www.npmjs.com/package/json-server)

# Enlaces de interés

- Documentación oficial de [Angular](angular.io)
- Documentación oficial de [TypeScript](https://www.typescriptlang.org/)
- [Curso Angular de Fernando Herrera en Udemy](https://www.udemy.com/course/angular-fernando-herrera/)
- API países: [restcountries.com](https://restcountries.com/)
- [Librería css animada](https://animate.style/)
- [Angular Material](https://material.angular.io/)
- [Material Icons](https://fonts.google.com/icons?selected=Material+Icons)
- [Bootstrap](https://getbootstrap.com/)
- Librería gráfica: [PrimeNG](https://www.primefaces.org/primeng/)
- Pruebas de API: [Postman](https://www.postman.com/)
- Plataforma para subir proyectos online: [netlify](https://app.netlify.com/)
