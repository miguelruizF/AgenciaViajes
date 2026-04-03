import { Sequelize } from 'sequelize';

// Configurar la conexión a la base de datos
const db = new Sequelize('agencia_viajes', 'root', 'mortal_12', {
    host: 'localhost',
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