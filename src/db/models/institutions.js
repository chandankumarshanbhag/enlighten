import Sequelize from "sequelize"
import sequelize from "../index"

export default sequelize.define('institutions', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    shortName: {
        type: Sequelize.STRING
    },
    institutionFor: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "ALL"
    },
    address: {
        type: Sequelize.STRING
    },
    universityBoardAuthority: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "INACTIVE"
    }
}, {
    
});
