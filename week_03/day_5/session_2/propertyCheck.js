const object = {
  a: 'somestring',
  b: 42,
  c: false
};
var target = 'a'

function propertyCheck(obj, target) {
  for(var key in object) {
    if(key == target) {
      return true
    }
  }
        return false
}

console.log(propertyCheck(object, target))