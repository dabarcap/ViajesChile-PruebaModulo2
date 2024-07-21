<div align="center">
  <h1 align="center">
    Vajes Chile - Prueba Módulo 2
    <br />
    <br />
  </h1>
</div>

## Introducción

La presente página es la puesta en práctica de lo aprendido en el módulo 2 del curso Desarrollo de Aplicaciones Front End Trainee V2.0 dictado de manera virtual por Inforcap durante el segundo semestre del año 2024.

## Documentación del Código

Para el desarrollo de la página se utilizó el lenguaje HTML para su estructura (archivo index.html), CSS para el estilo de las diferentes secciones y elementos (archivo style.css), y JavaScript para las animaciones incorporadas (archivo script.js). Además se utilizó el framework Bootstrap y JQuery.

A continuación se documenta en base a cada archivo creado:

- **index.html**

> head: Se introdujo el favicon de la página, el título, la vinculación con los archivos style.css y script.js, la vinculación con Google Fonts y Font Awesome, y la vinculación con Bootstrap y JQuery.
<br>
> body: Se diferenciaron 5 secciones principales: header, presentación section, destacados section, formulario y footer.
<br>
> header: Dentro de esta sección se colocó una barra de navegación fija y transparente por encima de un carousel de 3 imágenes con flechas controladoras a los costados.
<br>
> presentación section: Lleva por título "QUIENES SOMOS" y consta de 3 cards. Cada card tiene un favicon y párrafo. Cabe destacar que esta sección desaparece en pantallas pequeñas.
br>
> destacados section:  Lleva por título "DESTACADOS" y consta de 4 cards. Cada card tiene una imagen, título y párrafo.
<br>
> formulario: Lleva por título "CONTACTO" y consta de 3 secciones para colocar nombre, asunto y mensaje. Además de un botón "Enviar" debajo.
<br>
> footer: En esta sección está el nombre de la empresa y logos de las redes sociales de la misma, en donde cada logo posee un link para la página de la respectiva red social y que se abre en una nueva ventana del navegador.

- **style.css**

> Se utilizó el estilo de texto Raleway para toda la página con un font-weight de 300.
<br>
> Los colores usados son: #ffffff para los textos, #000000 para el fondo de las secciones presentación, destacados y formulario, y #0dcaf0 para el fondo del contenedor de los favicon en la sección presentación; para el fondo de las card en la sección destacados; para el fondo del botón "Enviar" debajo de la sección formulario; y para el fondo del footer.
<br>
> La altura de las distintas secciones de la página son: header 680px (nabvar 60px), presentación 500px, destacados 450px, formulario 675px y footer 90px.
<br>
> Se utilizó media query para agrupar la lista de la barra de navegación en un menú desplegabe en dispositivos menores a 768px de tamaño de pantalla.

- **script.js**

> Se aplicó smooth scroll para que cada link de la barra de navegación lo lleve a la sección de la página correspondiente.
<br>
> Se aplicó el componente tooltip en el logo y el nombre (dentro de la barra de navegación) y en el botón "Enviar" debajo del formulario en la sección del mismo nombre.

## Desarrollador

La presente página fue desarrollada integramente por Daniel Abarca, estudiante del curso Desarrollo de Aplicaciones Front End Trainee V2.0 dictado de manera virtual por Inforcap durante el segundo semestre del año 2024.
