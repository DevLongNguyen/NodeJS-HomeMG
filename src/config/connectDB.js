// connectDB.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db-side', 'db-project', 'Nguyenngoclong193', {
    host: 'db-project.database.windows.net',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true
        }
    }
});

// Test kết nối
sequelize.authenticate()
    .then(() => {
        console.log('Kết nối Sequelize thành công!');
    })
    .catch(err => {
        console.error('Lỗi kết nối Sequelize:', err);
    });

module.exports = sequelize;
