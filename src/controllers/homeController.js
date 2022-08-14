

// chú ý: khi kết nối dữ liệu cần sử dụng hàm 'async' , 'await' để đảm bảo connect là lấy đc data mới làm tiếp cv
import db from '../models/index'; // index chứa các model
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
let getCRUDPage = (req, res) => {
    // return res.send('get CRUD hoi dan IT')
    return res.render('crud.ejs');
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUDPage: getCRUDPage
}
