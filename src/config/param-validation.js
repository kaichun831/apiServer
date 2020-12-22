import Joi from 'joi'

export default{
    createActicle :{
        body:{
            user_id: Joi.number().required(), // 數字＋必填
            article_title: Joi.string().required(), // 字串＋必填
            article_tag: Joi.string().required(), // 字串＋必填
            article_content: Joi.string().min(20).required() // 文章長度至少20字
        }
    }
}
