function revString(str) {
  var String = '';
  for(var i = str.length - 1;i>=0;i--) {
    String  += str[i]
  }
  console.log(String)
}
revString('Masai School')