/*
moverr@gmail.com 09/09/23
*/

const AuthService = () => {
  const user1 = {
    username: "moverr@gmail.com",
    password: "password",
  };

  const user2 = {
    username: "abc",
    password: "abc",
  };

  const users = [user1, user2];

  //todo: simulating the service structure
  const validateUsernameAndPassword = (username, password) => {
    return users.find((item) => {
      return item.username === username && item.password === password;
    });
  };

  return {
    validate: validateUsernameAndPassword,
  };
};

export default AuthService;
