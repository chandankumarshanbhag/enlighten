import Sequelize from "sequelize"
import sequelize from "../db"

export default sequelize.define('institutions', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    shortname: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "INACTIVE"
    }
}, {
    
});
