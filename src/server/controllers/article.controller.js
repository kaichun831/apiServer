// article.controller.js
import articleModule from '../modules/article.module';

/* Article  POST 新增 */
const articlePost = (req, res) => {
  // 取得新增參數
  const insertValues = req.body; 
  articleModule.createArticle(insertValues).then((result) => {
    res.send(result); // 成功回傳result結果
  }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};

const articleGet = (req, res) => {
  articleModule.selectArticle().then((result) => {
    res.send(result); // 成功回傳result結果
  }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
};

const articlePut = (req, res) => {
  // 取得修改id
  const userId = req.params.article_id;
  // 取得修改參數
  const insertValues = req.body;
  articleModule.updateArticle(insertValues,userId).then((result)=>{
    res.send(result);
  }).catch((err)=>{return res.send(err);})
};
const articleDelete = (req,res)=>{
  const deleteId = req.params.article_id;
  articleModule.deleteArticle(deleteId).then((result)=>{
    res.send(result);
  }).catch((err)=>{return res.send(err);})
}


const articlePersonalGet = (req,res)=>{
  articleModule.selectPersonalArticle(req.token).then((result)=>{
    res.send(result);
  }).catch((err)=>{return res.status(403).send(err)})
}

export default {
  articlePost,
  articleGet,
  articlePut,
  articleDelete,
  articlePersonalGet
};