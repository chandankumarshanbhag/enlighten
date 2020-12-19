import Sequelize from "sequelize"
import sequelize from "../index"

export default sequelize.define('students_documents', {
    document_name:  {
        type: Sequelize.STRING,
        allowNull: false
    },
    file:  {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    
});
