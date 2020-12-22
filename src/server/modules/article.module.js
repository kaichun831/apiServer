import mysql from 'mysql';
import config from '../../config/config';
import jwt from 'jsonwebtoken';
const connectionPool =mysql.createPool({
    connectionLimit:10,
    host: config.mysqlHost,
    user: config.mysqlUserName,
    password: config.mysqlPass,
    database: config.mysqlDatabase
})
//新增
const createArticle = (insertValues) => {
    return new Promise((resolve, reject) => {
      connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
        if (connectionError) {
          reject(connectionError); // 若連線有問題回傳錯誤
        } else {
          console.log('This is '+insertValues);
          connection.query('INSERT INTO Article SET ?',insertValues, (error, result) => { // Article資料表寫入一筆資料
            if (error) {
              console.error('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤
              reject(error);
            } else if (result.affectedRows === 1) {
              resolve(`新增成功！ article_id: ${result.insertId}`); // 寫入成功回傳寫入id
            }
            connection.release();
          });
        }
      });
    });
  };
//查詢
  const selectArticle = () => {
    return new Promise((resolve, reject) => {
        connectionPool.getConnection((connectionError, connection) => { // 資料庫連線
            if (connectionError) {
              reject(connectionError); // 若連線有問題回傳錯誤
            } else {
              connection.query( // Article撈取所有欄位的值組
                `SELECT
                  *
                FROM
                  Article`
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
const  updateArticle =(insertValues,userId)=>{
  return new Promise((resolve,reject)=>{
    connectionPool.getConnection((connectionError,connection)=>{
      if(connectionError){
        console.log('SQL Error')
        reject(connectionError)
      }else{
        connection.query(`UPDATE article Set ? Where user_id = ?`,[insertValues,userId],(error,result)=>{
         if(error){
           console.log('SQL ERROR')
           reject(error)
         }else if(result.affectedRows===0){
           resolve('修改未成功')
         }else if(result.affectedRows===1){
           resolve('修改成功!')
         }else{
          resolve('資料無異動');
         }
         connection.release();
        })
      }

    })
  })
}
const deleteArticle = (userId)=>{
  return new Promise((resolve,reject)=>{
    connectionPool.getConnection((connectionError,connection)=>{
      if(connectionError){
        console.log('SQL ERROR')
        reject(connectionError)
      }else{
        connection.query(`delete from article where user_id = ?`,userId,(error,result)=>{
          if(error){
            reject(error)
          }else if(result.affectedRows===1){
              resolve('刪除成功')
          }else{
              resolve('刪除未成功')
          }
          connection.release();
        })
      }
    })
  })
}


const selectPersonalArticle = (token)=>{
  return new Promise((resolve,reject)=>{
    jwt.verify(token,'my_secret_key', (err,decoded) => {
      if (err) {
        console.log('驗證失敗')
        reject(err); // 驗證失敗回傳錯誤
      } else {
        console.log('驗證成功')
        const user_id =decoded.payload.user_id;
        connectionPool.getConnection((connectionError,connection)=>{
          if(connectionError){
            reject(connectionError)
          }else{
            console.log('開始查詢')
            connection.query('SELECT * FROM Article where user_id = ?',[user_id],(error,result)=>{
              if(error){
                console.log(error)
                reject(error)
              }else{
                resolve(result)
              }
              connection.release()
            })
          }
        })
        // resolve(payload); // 驗證成功回傳 payload data
      }
    });
  });
};


export default {
    createArticle,
    selectArticle,
    updateArticle,
    deleteArticle,
    selectPersonalArticle
};