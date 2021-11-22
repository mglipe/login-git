const {Sequelize, DataTypes} = require('sequelize')
const connection = require('../database/index')

const User = connection.define('user',{
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: true
        }
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
            not: ["^[a-z]+$",'i'],
            min: 3
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            isNumeric: true,
            isLowercase: true,
            isUppercase: true,
            is:["^[a-z]+$",'i']
        }
    },
    gender:{
        type: DataTypes.ENUM('masculine', 'feminine'),
        allowNull: false
    },
    birth:{
        type: DataTypes.STRING,
    }
})

User.sync()

