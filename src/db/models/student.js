import Sequelize from "sequelize"
import sequelize from "../db"

export default sequelize.define('institutions', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dob: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bloodgroup: {
        type: Sequelize.STRING
    },
    caste: {
        type: Sequelize.STRING
    },
    castecategory: {
        type: Sequelize.STRING
    },
    nationality: {
        type: Sequelize.STRING
    },
    placeofbirth: {
        type: Sequelize.STRING
    },
    permanentaddress: {
        type: Sequelize.STRING
    },
    correspondenceaddress: {
        type: Sequelize.STRING
    },
    phoneno: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    officialemail: {
        type: Sequelize.STRING
    },


    //Parent Details
    fathername: {
        type: Sequelize.STRING
    },
    fatherphoneno: {
        type: Sequelize.STRING
    },
    fatheroccupation: {
        type: Sequelize.STRING
    },
    fatherincome: {
        type: Sequelize.STRING
    },
    mothername: {
        type: Sequelize.STRING
    },
    motherphoneno: {
        type: Sequelize.STRING
    },
    motheroccupation: {
        type: Sequelize.STRING
    },
    motherincome: {
        type: Sequelize.STRING
    },


    //Parent Details
    aadharno: {
        type: Sequelize.NUMBER
    },
    bankname: {
        type: Sequelize.NUMBER
    },
    bankifsc: {
        type: Sequelize.NUMBER
    },
    bankbranch: {
        type: Sequelize.NUMBER
    },
    bankaccountno: {
        type: Sequelize.NUMBER
    },



    rollno: {
        type: Sequelize.STRING
    },
    academicyear: {
        type: Sequelize.STRING
    },
    course: {
        type: Sequelize.STRING
    },
    coursecombination: {
        type: Sequelize.STRING
    },
    firstlanguage: {
        type: Sequelize.STRING
    },
    secondlanguage: {
        type: Sequelize.STRING
    }


}, {
    
});
