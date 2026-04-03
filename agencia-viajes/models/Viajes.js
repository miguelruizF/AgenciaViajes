import {Sequelize} from 'sequelize';

export const Viaje = db.define('viajes', {
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.INTEGER
    },
    fecha_ida: {
        type: Sequelize.DATE()
    },
    fecha_vuelta: {
        type: Sequelize.DATE()
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    }
})