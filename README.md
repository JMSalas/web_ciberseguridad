# CiberSeguridad

Este proyecto es una aplicación web enfocada en la ciberseguridad, que proporciona información sobre amenazas comunes, consejos de seguridad y un cuestionario interactivo.

## Estructura del Proyecto

El proyecto está organizado en las siguientes carpetas y archivos:

.
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   ├── banner-amenazas.jpg
│   │   ├── banner-consejos.jpg
│   │   ├── banner-index.jpg
│   │   ├── ddos.jpg
│   │   ├── malware.jpg
│   │   ├── phishing.jpg
│   │   ├── ransomware.jpg
│   │   └── shield.svg
│   └── js/
│       ├── preguntas.js
│       ├── scripts-amenazas.js
│       └── scripts-consejos.js
├── amenazas.html
├── consejos.html
└── index.html


### Descripción de Archivos:

* **`index.html`**: La página principal del sitio web.
* **`amenazas.html`**: Muestra información sobre amenazas cibernéticas comunes utilizando un carrusel y un acordeón.
* **`consejos.html`**: Proporciona consejos de ciberseguridad e incluye un formulario de contacto y un cuestionario interactivo.
* **`assets/css/style.css`**: Contiene los estilos CSS personalizados para todo el sitio web.
* **`assets/images/`**: Almacena todas las imágenes utilizadas en el sitio web, incluyendo banners e imágenes específicas de amenazas.
* **`assets/js/preguntas.js`**: Define las preguntas y respuestas para el cuestionario de ciberseguridad.
* **`assets/js/scripts-amenazas.js`**: Contiene la lógica JavaScript para la página "Amenazas", controlando la sincronización del carrusel y el acordeón.
* **`assets/js/scripts-consejos.js`**: Contiene la lógica JavaScript para la página "Consejos", manejando la validación del formulario y la funcionalidad del cuestionario.

## Funcionalidad

### `index.html`

Esta página sirve como introducción a la ciberseguridad.
* **Cabecera**: Presenta un título destacado "Construye tu Fortaleza Digital" y un subtítulo descriptivo.
* **Sección "¿Qué es la Ciberseguridad?"**: Explica la definición y la importancia de la ciberseguridad.
* **Sección "Principios Fundamentales"**: Delinea los principios básicos de la ciberseguridad: Confidencialidad, Integridad y Disponibilidad.
* **Barra de Navegación**: Una barra de navegación fija en la parte superior permite a los usuarios navegar fácilmente a otras secciones: "Inicio", "Amenazas más comunes" y "Consejos de Seguridad".
* **Pie de Página**: Incluye información de derechos de autor y enlaces a redes sociales (Twitter, LinkedIn).

### `amenazas.html`

Esta página detalla las amenazas cibernéticas comunes.
* **Cabecera**: Muestra "Amenazas Reales" como título principal.
* **Carrusel**: Muestra diferentes amenazas cibernéticas (Phishing, Ransomware, Malware, Ataque DDoS) con una breve descripción y una imagen asociada. Los botones de navegación permiten a los usuarios moverse entre las amenazas.
    * **Phishing**: Es un engaño para que reveles información sensible (ej. contraseñas) haciéndose pasar por una entidad de confianza.
    * **Ransomware**: Software dañino que cifra tus archivos y exige un rescate para devolverte el acceso a ellos.
    * **Malware**: Software dañino diseñado para perjudicar tu sistema, robar datos o realizar acciones sin tu permiso.
    * **Ataque DDoS**: Intento de colapsar un servicio en línea sobrecargándolo con una avalancha de tráfico simultáneo desde múltiples fuentes.
* **Acordeón**: Proporciona estudios de caso detallados para cada amenaza cibernética presentada en el carrusel. Los paneles del acordeón están sincronizados con el carrusel, de modo que cuando una amenaza está activa en el carrusel, su panel de acordeón correspondiente se expande.
* **Barra de Navegación**: Similar a `index.html`, pero con un color de fondo diferente y "Amenazas más comunes" como el enlace activo.
* **Pie de Página**: Similar a `index.html`.

### `consejos.html`

Esta página ofrece consejos prácticos de ciberseguridad.
* **Cabecera**: Muestra "Consejos de Ciberseguridad" como título principal.
* **Sección "Buenas Prácticas"**: Enumera importantes consejos de seguridad:
    * Contraseñas Fuertes y Únicas.
    * Mantén tu Software Actualizado (Sistema Operativo y Antivirus).
    * Añadir Segundo Método de Verificación, adicional a la contraseña.
    * Ten Cuidado con los Correos Electrónicos y Mensajes Sospechosos.
    * Navegación Segura (Sitios web HTTPS y Evitar Redes Wifi Públicas).
* **Botón "Test Buenas Prácticas"**: Activa un modal que contiene un cuestionario interactivo para poner a prueba los conocimientos del usuario sobre las mejores prácticas de ciberseguridad.
* **Sección "Contactanos"**: Incluye un formulario de contacto con campos para Nombre, Correo electrónico y Comentarios. El formulario incluye validación del lado del cliente.
    * Tras un envío exitoso, se muestra una alerta de éxito.
* **Barra de Navegación**: Similar a otras páginas, con "Consejos de Seguridad" como el enlace activo.
* **Pie de Página**: Similar a otras páginas.

## Funcionalidad JavaScript

### `assets/js/scripts-amenazas.js`

* Gestiona la sincronización entre el carrusel y el acordeón en la página `amenazas.html`.
* Cuando un elemento del carrusel se activa, el panel del acordeón correspondiente se abre automáticamente, y viceversa cuando se hace clic en un botón del acordeón.
* Controla la navegación del carrusel utilizando los botones "Anterior" y "Siguiente", asegurando un bucle circular (por ejemplo, del primer elemento al último y viceversa).

### `assets/js/scripts-consejos.js`

* **Validación de Formularios**: Implementa la validación del lado del cliente para los campos del formulario de contacto (Nombre, Correo electrónico, Mensaje).
    * `form_valido()`: Comprueba si todos los campos del formulario son válidos.
    * `validar_nombre()`: Valida la entrada del nombre en cuanto a longitud y caracteres permitidos.
    * `validar_email()`: Valida la entrada del correo electrónico para el formato correcto.
    * `validar_mensaje()`: Valida que el campo del mensaje no esté vacío.
    * `form_enviado()`: Muestra un mensaje de éxito y hace que los campos del formulario sean de solo lectura después de un envío exitoso.
    * `limpiar_formulario()`: Restablece los campos del formulario y los estados de validación.
* **Funcionalidad del Cuestionario**: Administra el cuestionario interactivo en el modal.
    * `cargar_pregunta(index)`: Carga la pregunta especificada y sus alternativas en el modal.
    * Lleva un registro de las respuestas correctas.
    * Muestra los resultados del cuestionario al final, indicando la puntuación y un mensaje basado en el rendimiento.
    * El botón "Enviar Respuesta" pasa a la siguiente pregunta o cierra el modal cuando el cuestionario ha terminado.

### `assets/js/preguntas.js`

* Define los objetos `Pregunta` y `Alternativa`.
* `Pregunta`: Almacena el enunciado de la pregunta y un array de objetos `Alternativa`.
* `Alternativa`: Almacena el enunciado de la alternativa y un booleano que indica si es la respuesta correcta.
* Inicializa un array `preguntas` que contiene todas las preguntas del cuestionario y sus respectivas alternativas.

## Tecnologías Utilizadas

* HTML5
* CSS3 (con Bootstrap 5.3.7)
* JavaScript (con jQuery 3.7.1)
* Bootstrap Icons 1.13.1

## Cómo Ejecutar

1.  Clona el repositorio en tu máquina local.
2.  Navega al directorio del proyecto.
3.  Abre `index.html` (o `amenazas.html`, `consejos.html`) en tu navegador web.

No se requiere una configuración de servidor especial.