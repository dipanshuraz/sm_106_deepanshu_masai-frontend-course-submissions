var user = {
  name : 'Deepanshu Prajapati',
  email : 'dipanshuraz2@gmail.com',
  pass : 'Ravi@12345',
  age : 21
}
var target = 'Ravi@12345'

function passwordVerify(obj, target) {
  for(var key in obj) {
    if(obj.pass == target) {
      return true
    }
  }
  return false
}

console.log(passwordVerify(user, target))