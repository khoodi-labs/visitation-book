/*
moverr@gmail.com 09/09/23
*/

export default function AuthService(){
    
    const user1 = {
        username: "moverr@gmail.com",
        password:"password"
    }

    const user2 = {
        username: "abc",
        password:"abc"
    }

    const users = [user1,user2];

    //todo: simulating the service structure 
    function validateUsernameAndPassword(username,password){

        alert(username);
       
        for(let i = 0; i<users.length; i ++){
            const userDetail = users[i];
            if(userDetail.username.trim() != username.trim()){
                alert("bingo");
                alert(userDetail.username.trim());
                alert(username.trim());
            }
            alert(userDetail.username)
        }


 

        return false;
    }

    return {
        validate: validateUsernameAndPassword
    } 
}