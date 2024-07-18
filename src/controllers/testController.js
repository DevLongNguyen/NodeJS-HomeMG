// testController.js

const User = require('../models/testModels');

// Hàm để lấy danh sách người dùng
async function getUsers(req, res, next) {
    try {
        const users = await User.findAll();
        console.log('Danh sách người dùng:');
        console.log(users);
        res.json(users); // Trả về JSON response với danh sách người dùng
    } catch (error) {
        console.error('Lỗi truy vấn:', error);
        next(error); // Chuyển lỗi tới middleware xử lý lỗi
    }
}

module.exports = {
    getUsers // Xuất hàm getUsers để sử dụng trong route
};
