var email = 'dipanshuraz@gmail.com'
var tld = ['com','in']
var emailHost = ['hotmail','gmail','yahoo']

var count = 0;

function hasEmail(email) {
  for(var i=0;i<email.length;i++) {
    if(email[i] == '@') {
      count++
    }
  }
  var emailNw = email.split('@')
  var emailUsr = emailNw[0]
  var host = emailNw[1]
  count = 0
  for(var i=0;i<host.length;i++) {
    if(host[i] == '.')  {
      count++
      {
        if(count == 1) {
          host = host.split('.')
          for(var j=0;j<host[0].length;j++) {
            if(host[0] == emailHost) {
            console.log('Yes')
            } else {
             console.log('Yes1')
            }
          }
        }
      }
    }
  }
  

if(count == 1) {
    if(email[0] != '.' && email.length-1 != '.') {
      
    }
} return host[0]
}
console.log(hasEmail(email))
