import express from 'express';
import config from './../../config/config';
import mysql from 'mysql';
import article from './article.route';
import user from './user.route';
import httpStatus from 'http-status'
const router = express.Router();

//3000/api
router.get('/',(req,res)=>{
  res.send(`此路徑是: localhost:${config.port}/api`);
})

//3000/api/sqlTest
router.get('/sqlTest', (req, res) => {
    const connectionPool = mysql.createPool({ // 建立一個連線池
      connectionLimit: 10, // 限制池子連線人數
      host: config.mysqlHost, // 主機名稱
      user: config.mysqlUserName, // 用戶名稱 
      password: config.mysqlPass, // 資料庫密碼
      database: config.mysqlDatabase // 資料庫名稱
    });
    connectionPool.getConnection((err, connection) => { //建立一個連線若錯誤回傳err
      if (err) {
        res.send(err);
        console.log('連線失敗！');
      } else {
        res.send('連線成功！');
        console.log(connection);
      }
    });
  });

// 3000/api/article
router.use('/article',article);
router.use('/user',user);

export default router;


