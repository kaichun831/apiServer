import config from '../config/config'
import express from 'express';
import index from '../server/routes/index.route'
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import APPError from '../server/helper/AppError';
import httpStatus from 'http-status'
const app  = express();









app.get('/', (req, res) => {
    res.send(`Show Text From Express ${config.port}`);
});

//使用此功能解析後
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));



//途徑必須在解析後
app.use('/api', index);



//Joi驗證 可是我們沒有用

// app.use((err, req, res, next) => {
//   console.log('Step 1')
//   console.log(err.code)
//   console.log(err.message)
//   console.log(err.status)
//   let errorMessage;
//   let errorCode;
//   let errorStatus;
//   // express validation error 所有傳入參數驗證錯誤
//   if (err instanceof expressValidation.ValidationError) {
//     if (err.errors[0].location === 'query' || err.errors[0].location === 'body') {
//       errorMessage = err.errors[0].messages;
//       errorCode = 400;
//       errorStatus = httpStatus.BAD_REQUEST;
//     }
//     const error = new APPError.APIError(errorMessage, errorStatus, true, errorCode);
//     console.log('Run inside')
//     return next(error);
//   }
//   console.log(err.code)
//   console.log(err.message)
//   console.log(err.status)
//   return next(err);
// });

// error handler, send stacktrace only during development 錯誤後最後才跑這邊
app.use((err, req, res, next) => {
  res.status(err.status).json({
    message: err.isPublic ? err.message : httpStatus[err.status],
    code: err.code ? err.code : httpStatus[err.status],
    stack: config.env === 'development' ? err.stack : {}
  });
  next();
});
;

export default app;