class ScuessResponse{

   constructor(code,message,result){
       this.code =code;
       this.message=message;
       this.result=result;
   }
}

class LoginSucess extends ScuessResponse{
    constructor(code,message,result){
        super(code,message,result)
    }
}
export default{
    LoginSucess
}
