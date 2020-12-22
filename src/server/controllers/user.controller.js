import userModule from '../modules/user.module'
import bcrypt from 'bcrypt'

const userPost = (req,res)=>{
    // const insertValues = req.body  ; //是整體JSON資料

    //是必須傳入的參數
    const insertValues = {
        user_name: req.body.user_name,
        user_age : req.body.user_age,
        user_birthday: req.body.user_birthday,
        user_password: bcrypt.hashSync(req.body.user_password, 10) // 密碼加密
      };
    userModule.createUser(insertValues).then((result) => {
        res.send(result); // 成功回傳result結果
      }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
}
const userGet = (req, res) => {
   userModule.selectUser().then((result)=>{
       res.send(result);
   }).catch((err)=>{return res.send(err);})
}
const userPut = (req,res)=>{
    const insertValues = req.body
    const userId = req.params.user_id
    userModule.updateUser(insertValues,userId).then((result)=>{
        res.send(result);
    }).catch((err)=>{return res.send(err);})
}
//這邊的.user_id 對應到route的路徑 必須一樣
const userDelete = (req,res)=>{
    const userID =req.params.user_id;
    userModule.deleteUser(userID).then((result)=>{
        res.send(result);
    }).catch((err)=>{return res.send(err);})
}
const userLogin = (req,res,next)=>{
    // const insertValues = req.body  ; //是整體JSON資料
    const insertValues = req.body;
    userModule.selectUserLogin(insertValues).then((result) => {
        res.send(result); // 成功回傳result結果
      }).catch((err) => { console.log('傳送失敗'+ err.code +'code'); next(err); }); // 失敗回傳錯誤訊息
}

export default{
    userPost,
    userGet,
    userDelete,
    userPut,
    userLogin
}