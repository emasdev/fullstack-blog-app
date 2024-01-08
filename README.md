# Blog | frontend (react.js + vite) | backend (node.js + express)

Este es un proyecto fullstack en el que se utiliza un sistema de autenticación con bcrypt y cookies en el backend y context api de React en el frontend. Se utiliza una base de datos mysql que se tendra que importar. Dejo el dump en el archivo dump.sql.

## Instalación de Base de datos

Exportar la base de datos mysql y revisar el archivo de configuración en caso de que se ocupen otros puertos o credenciales. El nombre de usuario quedó por defecto: 'root' y no tiene password.

```bash

# importar dump sql a mysql
blog.sql

# configurar conexión a base de datos en caso de ser necesario
backend/db.js
```

## Inicializar backend

```bash
cd backend

# instalar dependencias
npm i

# iniciar servidor
npm run start
```

## Inicializar frontend

```bash
cd frontend

# instalar dependencias
npm i

# iniciar servidor
npm run start
```

## Screenshots

![Screen Shot 2024-01-08 at 12 45 31 AM](https://github.com/emasdev/fullstack-blog-app/assets/13182632/f813570b-01ab-477c-9bc0-7a02a097dfc7)

![Screen Shot 2024-01-08 at 10 06 10 AM](https://github.com/emasdev/fullstack-blog-app/assets/13182632/193adea9-4a47-4a28-b8ad-cc4e005f3efb)

![Screen Shot 2024-01-08 at 10 06 25 AM](https://github.com/emasdev/fullstack-blog-app/assets/13182632/51c00fbe-50a6-4aa4-8f08-74566e0cb9c7)

![Screen Shot 2024-01-08 at 10 04 07 AM](https://github.com/emasdev/fullstack-blog-app/assets/13182632/85a7f62a-7838-4a4c-a4c8-ea478a3ed33d)

![Screen Shot 2024-01-08 at 10 11 54 AM](https://github.com/emasdev/fullstack-blog-app/assets/13182632/8b88501c-fcfa-43ba-9812-37ead7c53ee0)
