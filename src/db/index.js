const Sequelize = require('sequelize');

const sequelize = new Sequelize('bck', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.sync()

export default sequelize;