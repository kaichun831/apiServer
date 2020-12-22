import mysql from 'mysql';
import config from '../../config/config';
import bcrypt from 'bcrypt'
import APPError from '../helper/AppError';
import jwt from  'jsonwebtoken'
import { json } from 'body-parser';
import AppResponse from '../helper/AppResponse';

const connectionPool =mysql.createPool({
    connectionLimit:10,
    host: config.mysqlHost,
    user: config.mysqlUserName,
    password: config.mysqlPass,
    database: config.mysqlDatabase
})

const createUser = (insertValues)=>{
    return new Promise((reslove,reject)=>{
        connectionPool.getConnection((connectionError,connection)=>{
            if(connectionError){
                console.log(`SQL Error`)
                reject(connectionError)
            }else{
                connection.query(`INSERT INTO user Set ?`,insertValues,(error,result)=>{
                    if(error){
                        reject(error)
                    }else if(result.affectedRows === 1){
                        reslove(`新增成功 id = ${result.insertId}`)
                    }else {
                        reject('新增失敗')
                    }
                    connection.release()
                })
            }
        })
    })
}
const selectUser = () => {
    return new Promise((resolve, reject) => {
      connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
        if (connectionError) {
          reject(connectionError); // 若連線有問題回傳錯誤
        } else {
          connection.query( // Article撈取所有欄位的值組
            `SELECT
              *
            FROM
              user`
            , (error, result) => {
              if (error) {
                console.error('SQL error: ', error);
                reject(error); // 寫入資料庫有問題時回傳錯誤
              } else {
                resolve(result); // 撈取成功回傳 JSON 資料
              }
              connection.release();
            }
          );
        }
      });
    });
  };
const updateUser = (insertValues,userID)=>{
  return new Promise((reslove,reject)=>{
    connectionPool.getConnection((connectionError,connection)=>{
      if(connectionError){
          console.log('SQL Error')
          reject(connectionError)
      }else{
        connection.query('UPDATE USER SET ? where user_id = ?',[insertValues,userID],(error,result)=>{
            if(error){
              reject(error)
            }else if (result.message.match('Changed: 1')){
              reslove('成功更新')
            }else{
              reject('更新失敗')
            }
            connection.release()
        })
      }
    })
  })
}
const deleteUser=(userId)=>{
  return new Promise((reslove,reject)=>{
    connectionPool.getConnection((connectionError,connection)=>{
      if(connectionError){
        console.log('SQL Error')
        reject(connectionError)
      }else{
        connection.query('delete from user where user_id = ?',userId,(error,result)=>{
          if(error){
            reject(error)
          }else if(result.affectedRows===1){
            reslove('成功刪除')
          }else{
            reject('無變動')
          }
          connection.release()
        })
      }
    })
  })
}

const selectUserLogin = (insertValues) =>{
  return new Promise((resolve, reject) => {
    connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
      if(connectionError){
        console.log('SQL Error')
        reject(connectionError)
      }else{
        connection.query('SELECT * FROM User WHERE user_name = ?',insertValues.user_name,(error, result) => {
          if (error) {
            console.error('SQL error: ', error);
            reject(error); // 寫入資料庫有問題時回傳錯誤
          } else if (Object.keys(result).length === 0) {
            reject(new APPError.LoginError1());//查無名稱
          } else {
            const dbHashPassword = result[0].user_password; // 資料庫加密後的密碼
            const userPassword = insertValues.user_password; // 使用者登入輸入的密碼
            bcrypt.compare(userPassword, dbHashPassword).then((res) => { // 使用bcrypt做解密驗證
              if (res) {
                  const payload={
                    user_id:result[0].user_id,
                    user_name:result[0].user_name,
                    user_birthday:result[0].user_birthday
                  };
                  //這邊標記的名字my_secret_key 必須與 拿取的相符 也就是jwt.verify()這邊的名稱
                  const token = jwt.sign({ payload, exp: Math.floor(Date.now() / 1000) + (60 * 15) }, 'my_secret_key');

                // resolve(Object.assign(
                //   {code:200,},{message:'登入成功',token}));
              
                  const json = JSON.stringify({
                    code:200,
                    message:"成功登入",
                    token:token,
                    data:{user:result[0].user_name}
                });
                  resolve(json)

              } else {
                // resolve('您輸入的密碼有誤！');
                reject(new APPError.LoginError2());//密碼有誤
              }
            });
          }
          connection.release()
        })
      }
    })
  })
}

export default{
    createUser,
    selectUser,
    deleteUser,
    updateUser,
    selectUserLogin
}