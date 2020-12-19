import Sequelize from "sequelize"
import sequelize from "../index"

export default sequelize.define('courses', {
    name: {
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