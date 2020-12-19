import Sequelize from "sequelize"
import sequelize from "../index"

export default sequelize.define('courses', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    shortName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    duration: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        default: "INACTIVE"
    },
    institutionId: {
        type: Sequelize.INTEGER,
        references: 'institutions',
        referencesKey: 'id'
    }
}, {

});