# Agencia de Viajes - Guía de inicio local
## Requisitos
- Node.js LTS (recomendado: versión 20 o superior)
- npm
- MySQL

## 1) Instalar dependencias
En la raíz del proyecto:

```bash
npm install
```

## 2) Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto con este contenido:

```env
DB_NAME=agencia_viajes
DB_USER=tu_usuario_mysql
DB_PASSWORD=tu_password_mysql
DB_HOST=localhost
PORT=3000
```

## 3) Crear base de datos y tablas
Este proyecto usa Sequelize sin migraciones incluidas, así que debes crear la base y tablas manualmente.

Ejemplo rápido en MySQL:

```sql
CREATE DATABASE IF NOT EXISTS agencia_viajes;
USE agencia_viajes;

CREATE TABLE IF NOT EXISTS viajes (
  id INT NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(255),
  precio INT,
  fecha_ida DATETIME,
  fecha_vuelta DATETIME,
  imagen VARCHAR(255),
  descripcion VARCHAR(255),
  disponibles VARCHAR(255),
  slug VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS testimoniales (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255),
  correo VARCHAR(255),
  mensaje VARCHAR(255),
  PRIMARY KEY (id)
);
```

## 4) Iniciar el proyecto
Ejecuta:

```bash
node index.js
```

El servidor quedará disponible en:
- `http://localhost:3000` (o el puerto definido en `PORT`)

## 5) Modo desarrollo (opcional)
Si quieres recarga automática:

```bash
npx nodemon index.js
```

## Nota sobre scripts npm
En `package.json` existe el script:

```bash
npm run server
```

Actualmente apunta a `server.js`. Si lo usas, asegúrate de que ese archivo exista o actualiza el script para usar `index.js`.
