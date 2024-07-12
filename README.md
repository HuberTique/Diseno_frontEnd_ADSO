# Aplicación de Gestión de Usuarios y Productos para una tienda retail

Esta aplicación web permite la gestión de usuarios y productos mediante una interfaz gráfica. Los usuarios pueden registrarse, iniciar sesión, y realizar operaciones básicas relacionadas con productos y compras. Las funcionalidades incluyen el manejo de errores de autenticación y el uso de un menú desplegable para la navegación.

## Requisitos Previos

Antes de ejecutar la aplicación, asegúrate de tener instalados los siguientes requisitos:

Para la presente aplicacion no son necesario los requerimientos especificos ya que para aplicaciones HTML, CSS, y JavaScript puras (sin back-end), se pueden abrir directamente los archivos HTML en tu navegador. Esto puede ser suficiente para aplicaciones sencillas o para desarrollo y pruebas rápidas.

para los siguientes ejercicios de la guia si podrian resultar utiles los siguientes requerimeintos

1. **Servidor Web Local**: Necesitarás un servidor web local para ejecutar la aplicación. Puedes usar cualquiera de los siguientes:
   - [Node.js](https://nodejs.org/en/) (recomendado)
   - [Apache](https://httpd.apache.org/)
   - [Nginx](https://www.nginx.com/)

2. **Navegador Web**: La aplicación es compatible con los navegadores modernos como Chrome, Firefox, Safari y Edge.

## Instrucciones para Ejecutar la Aplicación en Local

### Paso 1: Clonar o Descargar el Repositorio

Clona este repositorio en tu máquina local o descárgalo como un archivo ZIP y descomprímelo.

bash
git clone https://github.com/HuberTique/Diseno_frontEnd_ADSO.git
cd Diseno_frontEnd_ADSO

Paso 2: Instalar Node.js (opcional, recomendado para la proxima actividad)
Si no tienes Node.js instalado, descárgalo e instálalo desde aquí.

Paso 3: Configurar un Servidor Web Local
Usando Node.js (http-server)
Si has instalado Node.js, puedes usar el paquete http-server para configurar un servidor web local.

Paso 4: Navegar a la Aplicación
Abre tu navegador web y navega a la URL donde tu servidor web local está sirviendo los archivos. Deberías ver la pantalla de inicio de la aplicación.

Estructura del Proyecto
La estructura de archivos y directorios es la siguiente:

/project-root
│
├── /images
│   ├── profile.png
│   ├── logo.png
│   ├── cash.png
│   ├── card.png
│   ├── nequi.png
│   ├── invoice.png
│
├── index.html
├── login.html
├── register.html
├── error.html
├── app.html
├── styles.css
└── scripts.js
Funcionalidades
Inicio (index.html): Presenta las opciones del menú principal.
Login (login.html): Permite a los usuarios ingresar sus credenciales.
Si las credenciales son incorrectas o están vacías, se redirige a error.html.
Si las credenciales son correctas, se redirige a app.html.
Registro (register.html): Permite a los nuevos usuarios registrarse.
Error (error.html): Informa al usuario de un fallo en la autenticación.
Aplicación (app.html): Interfaz principal para gestionar productos y realizar compras.
Lógica del Lado del Cliente (JavaScript)
El archivo scripts.js contiene la lógica del lado del cliente para manejar la navegación y validación de las interfaces.

Estilos y Diseño (CSS)
El archivo styles.css contiene los estilos y el diseño de la aplicación.

Contribuciones
Si deseas contribuir a este proyecto, por favor, crea un fork del repositorio, realiza tus cambios y envía un pull request.

Licencia
Este proyecto está licenciado bajo la Licencia MIT.

Contacto
Si tienes alguna pregunta o necesitas ayuda, por favor contacta a [hubert8612@hotmail.com]

