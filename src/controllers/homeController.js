

// npm install --save bcrypt@5.0.1           --> hask password 
// chú ý: khi kết nối dữ liệu cần sử dụng hàm 'async' , 'await' để đảm bảo connect là lấy đc data mới làm tiếp cv
import db from '../models/index'; // index chứa các model
import CRUDservice from '../services/CRUDService';


let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()
        // console.log('----------show data-----------------');
        console.log(JSON.stringify(data));
        // console.log('---------------------------');

        return res.render('homepage.ejs', {
            data: JSON.stringify(data),
        });
    }
    catch (e) {
        console.log(e)
    }
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}
let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {
    // console.log(req.body);
    let message = await CRUDservice.createNewUser(req.body)
    return res.send('post crud from server');
    console.log(message);
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}
