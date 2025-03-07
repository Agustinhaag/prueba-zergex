Este proyecto es una aplicación fullstack con Node.js, Express, TypeORM, PostgreSQL y Typescript para el backend y un frontend React (Vite) con typescript y un manejo de estados con redux, que interactúa con la API del backend.

Para levantar el proyecto, primero debes clonar el repositorio usando git clone y la url que esta en el email y navegar al directorio del proyecto. Luego, dirigete al la carpeta backend e instala las dependencias con npm install o yarn install. Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno para configurar la conexión con la base de datos y el servidor: PORT=, DB_HOST="localhost", DB_PORT=5432, DB_USER="tu usuario", DB_PASSWORD="tuclave", DB_NAME="nombrebd", JWT_SECRET="secret-key", luego deberas crear la base de datos en tu local bajo el nombre que desees. Para iniciar el backend, corre npm run dev en el directorio del backend, lo que iniciará el servidor en el puerto 4000 por defecto. (Verificar tener instalado node en tu entorno)

Luego, navega al directorio del frontend, instala las dependencias con npm install, y configura las variable de entorno VITE_API_URL="http://localhost:puerto" y VITE_SECRET="secret-key".
Para iniciar el frontend, usa npm start, lo que abrirá el servidor en el navegador en http://localhost:3000.

Consideraciones adicionales:
Backend: Asegúrate de que PostgreSQL esté instalado y ejecutándose en tu máquina, y que la base de datos indicada en las variables de entorno exista. Si no, puedes crearla manualmente como se indico anteriormente.
Frontend: Como el frontend está configurado con Vite, puedes hacer uso del comando npm run build y luego npm run preview para correr el proyecto en produccion, con la finalidad de agilizar la carga de la plataforma.
