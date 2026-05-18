import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config(); //Acceder a las variables de entorno

// Configurar la conexión a la base de datos
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: 3306, 
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

export default db;