

export default function AuthService(){

    function validateUsernameAndPassword(username,password){

        return true;
    }

    return {
        validate: validateUsernameAndPassword
    } 
}