const addUser = (props) => {
  const users = getUsers();
  if (checkUser(props)) {
    return false;
  }
  else {
    users.push(JSON.stringify(props));
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('loggedUserEmail', props.email);
    return true;
  }
}

const checkUser = (props) => {
  const existingUser = users
  .map((user) => JSON.parse(user))
  .filter((user) =>
    {
      user.email === props.email;
      user.password === props.password;
    }
  );
  return existingUser === undefined ? false : true;
}

const logOutUser = () => {
  localStorage.setItem('loggedUserEmail', null);
}

const getUsers = () => {
  const users = JSON.parse(localStorage.getItem('users'));
  return users == null ? [] : users;
}
