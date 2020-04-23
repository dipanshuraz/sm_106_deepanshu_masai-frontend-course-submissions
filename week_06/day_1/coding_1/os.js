document.getElementById('selectOs').addEventListener('change',selectOs)

function selectOs() {
  var val = event.target.value;

  var baseUrl = 'http://localhost:8080/codenames'
  var url = baseUrl +'/'+val;

  var xhr = new XMLHttpRequest(); 

  xhr.open('GET', url);
  
  xhr.send()
  
  xhr.onload = function (){
  
    if(xhr.status == 200){
        console.log(xhr.response) 
    }
    else{
        console.log("Error Code is:" + xhr.status)
    }
  }
}

