import Sequelize from "sequelize"
import sequelize from "../index"

export default sequelize.define('students', {
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
    blood_group: {
        type: Sequelize.STRING
    },
    caste: {
        type: Sequelize.STRING
    },
    caste_category: {
        type: Sequelize.STRING
    },
    nationality: {
        type: Sequelize.STRING,
        defaultValue: "INDIAN"
    },
    place_of_birth: {
        type: Sequelize.STRING
    },
    permanent_address: {
        type: Sequelize.STRING
    },
    correspondence_address: {
        type: Sequelize.STRING
    },
    phone_no: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    official_email: {
        type: Sequelize.STRING
    },


    //Parent Details
    father_name: {
        type: Sequelize.STRING
    },
    father_phoneno: {
        type: Sequelize.STRING
    },
    father_occupation: {
        type: Sequelize.STRING
    },
    father_income: {
        type: Sequelize.STRING
    },
    mother_name: {
        type: Sequelize.STRING
    },
    mother_phone_no: {
        type: Sequelize.STRING
    },
    mother_occupation: {
        type: Sequelize.STRING
    },
    mother_income: {
        type: Sequelize.STRING
    },
    living_with_guardian: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false        
    },
    guardian_name: {
        type: Sequelize.STRING
    },
    guardian_phone_no: {
        type: Sequelize.STRING
    },
    guardian_occupation: {
        type: Sequelize.STRING
    },
    guardian_income: {
        type: Sequelize.STRING
    },


    //Other Details
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


    // College Details
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
