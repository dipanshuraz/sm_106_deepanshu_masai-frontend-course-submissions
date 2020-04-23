var user = {
  name : 'Deepanshu',
  age : 21,
  email : 'dipanshuraz@gmail.com'
}
var key = 'end'
var value = '100'
function propertyUpdate(obj,property,value) {
  for(var key in user) {
    if(key != property) {
      user[property] = value;
    } else if(key == property) {
      user[property] = value;
    }
  }
  return user
}
console.log(propertyUpdate(user,key, value))
console.log(propertyUpdate(user,'name', 'value'))