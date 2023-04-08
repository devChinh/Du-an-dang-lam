const User = require('../models/User')

/* 
home : chuyển con trỏ đến đầu dòng hiện tại
end : di chuyển con trỏ đến cuối dòng hiện tại
Ctrl + shift + K : Xoá dòng con trỏ hiện tại đang đứng
Alt + Mũi lên đi lên : Chuyển dòng hiện tại lên một dòng
Alt + mũi tên đi xuống : chuyển dòng hiện tại xuống 1 dòng
Shift +Alt + Mũi tên đi lên : Coppy dòng hiện tại và paste lên trên 1 dòng
Shift +Alt + Mũi tên đi xuống : Coppy dòng hiện tại và paste xuống dưới 1 dòng
Ctrl + Alt + Mũi tên đi xuống : thêm 1 con trỏ lên dòng bên trên 
Ctrl + Alt + Mũi tên đi xuống : thêm 1 con trỏ xuống dòng bên dưới 
Ctrl + F  :Mở phần tìm kiếm ở file hiện tại
Ctrl + shift + F : tìm kiến ở toàn bộ file
Ctrl + H : mở tìm kiếm vầ thay  thế
Ctrl + + : Zoom in
Ctrl + - : Zoom out
*/ 

// extensions : là 1 công cụ giúp các bạn trong quá trình viết code 
// CLI : command line interface
// GUI : graphics user interface 

const userController = {
    // get all user
    getAllUsers: async (req, res) => {
        try
            const getData = await User.find();
            res.status(200).json(getData)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteUser : async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.status('200').json('delete success')
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getUser : async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            res.status('200').json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = userController