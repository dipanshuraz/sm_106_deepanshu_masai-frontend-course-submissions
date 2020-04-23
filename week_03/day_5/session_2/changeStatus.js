var user = {
  name : 'Deepanshu Raz',
  status : 'Premium',
  creditLimit : 30000
}
function changeStatus(obj, obj2) {
  if(obj.status == undefined) {
    return 'invalid input'
  } else if(obj.status !=  obj2.status){
   obj.status = obj2.status
    obj.creditLimit = obj2.creditLimit
  }
  return user
}
var objBasic = {
  status : 'Basic',
  creditLimit : 80000
}
var objPremium = {
  status : 'Premium',
  creditLimit : 300000
}
var objPlatinum = {
  status : 'Platinum',
  creditLimit : 600000
}

console.log(changeStatus(user, objPlatinum))