import Sequelize from "sequelize"
import sequelize from "../index"

export default sequelize.define('subjects', {

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    courseId: {
        type: Sequelize.INTEGER,
        references: 'courses',
        referencesKey: 'id'
    }
}, {

});