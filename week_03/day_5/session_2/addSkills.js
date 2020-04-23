var user = {
  name : 'User1',
  skill : ['boxing','running']
}
var newSkill = 'BasketBall'

function addSkills(obj, value) {
  for(var key in obj) {
    if(obj.skill != value) {
         obj.skill.push(value)
      break;
    }
  }
  return obj
}

console.log(addSkills(user, newSkill))