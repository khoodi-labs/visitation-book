

export default function AuthService(){
    
    const user1 = {
        username: "moverr@gmail.com",
        password:"password"
    }

    const user2 = {
        username: "rita@gmail.com",
        password:"password"
    }

    const users = [user1,user2];
    
    //todo: simulating the service structure 
    function validateUsernameAndPassword(username,password){

        if(users != null){
            users.forEach( (user) =>{
                if(user.password == password && user.username === username)
                    return true;

            });
        }
        return false;
    }

    return {
        validate: validateUsernameAndPassword
    } 
}