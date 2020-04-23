var user = {
  
}
function newUser(name, email, pass) {
  user['name'] = name;
  user['email'] = email;
  user['pass'] = pass;
  return user
}

var name = 'Ravi'
var email ='dipanshuraz2@gmail.com'
var pass = 'Ravi@123456'

console.log(newUser(name, email, pass))