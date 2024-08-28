'use strict';
// Connecting PostgreSQL + Sequelize ORM database
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('assist-route', 'yulia', 'password2', {
  host: 'localhost',
  dialect: 'postgres',
  logging: true, // should be false in production. Cuando logging está configurado en false, Sequelize no mostrará ninguna salida en la consola relacionada con las consultas SQL que se están ejecutando.
  pool: {
    max: 5, // número máximo de conexiones en el grupo de conexiones
    min: 0, // número mínimo de conexiones en el grupo de conexiones
    acquire: 30000, // tiempo máximo, en milisegundos, que Sequelize esperará para obtener una conexión disponible del grupo de conexiones antes de arrojar un error
    idle: 10000, // tiempo máximo, en milisegundos, que una conexión puede estar inactiva en el grupo de conexiones antes de que Sequelize la elimine del grupo
  },
  operatorsAliases: false // se utiliza para desactivar los alias de operadores obsoletos
});

// checking connection with DB
async function connect () {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connect();

module.exports = { sequelize };
