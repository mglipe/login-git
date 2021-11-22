const {Model, DataTypes} = require('sequelize')
const connection = require('../database/index')

class User extends Model{
    static init(connection){
        super.init({
            email: DataTypes.STRING,
            username: DataTypes.STRING,
            password: DataTypes.STRING,
            gender: DataTypes.ENUM('masculine', 'feminine'),
            birth: DataTypes.NUMBER, 
        }, {
            sequelize: connection
        })
    }
    
}

User.init(connection)




module.exports = User