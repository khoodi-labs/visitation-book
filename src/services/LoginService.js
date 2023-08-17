

export default function LoginService(){

    function validateUsernameAndPassword(username,password){

        return true;
    }

    return {
        validate: validateUsernameAndPassword
    } 
}