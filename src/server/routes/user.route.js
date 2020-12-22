import express from 'express';
import userCtrl from '../controllers/user.controller';
import param_validation from '../../config/param-validation';
import validate from 'express-validation';


const router = express.Router();
router.route('/')
.post(userCtrl.userPost)
.get(userCtrl.userGet)


router.route('/:user_id')
.put(userCtrl.userPut)
.delete(userCtrl.userDelete);

router.route('/login').post(userCtrl.userLogin);
export default router;