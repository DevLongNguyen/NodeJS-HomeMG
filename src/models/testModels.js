// testModels.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connectDB'); // Đảm bảo bạn đã export đối tượng Sequelize từ connectDB.js

// Định nghĩa mô hình User
const User = sequelize.define('UserHomeMG', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UserName: {
        type: DataTypes.STRING
    },
    PassWord: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'UserHomeMG', // Tên của bảng trong cơ sở dữ liệu
    timestamps: false // Không sử dụng các trường timestamps
});

module.exports = User;
