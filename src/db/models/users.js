import Sequelize from "sequelize"
import sequelize from "../index"

export default sequelize.define('users', {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fullName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    profilePicture: {
        type: Sequelize.STRING
    },
    role: {
        type: Sequelize.STRING
    }

});