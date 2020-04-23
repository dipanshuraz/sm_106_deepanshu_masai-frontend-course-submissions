$(document).ready(function() {
  // your code goes here
});

$("#btn-post").click(function(e) {
  event.preventDefault();
});

$("#btn-post").click(function() {
  //   var login = {}
  //   $.ajax({
  //     method: "POST",
  //     url: "https://reqres.in/api/login",
  //     data: login = {

  //           // email : "eve.holt@reqres.in",
  //           // password : "cityslicka",

  //             email: $('#email').val(),
  //             password: $('#password').val(),
  //         }
  //   })
  //   .done(function(data) {
  //     $('#form').hide()
  //     console.log(data);
  //     // JSON.parse(data)
  //     $('#displayEmail').text(data.token)
  //   });

  var login = {
    // email: $("#email").val(),
    // password: $("#password").val()

    email: "eve.holt@reqres.in",
    password: "cityslicka"
  };

  var url = "https://reqres.in/api/login";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://reqres.in/api/login");
  xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");
  xhr.send(JSON.stringify(login));
  xhr.onload = function() {
    if (xhr.status == 200) {
      $("#form").hide();
      console.log(xhr.response);
      var data = JSON.parse(xhr.response);
      $("#displayEmail").text(data.token);
    } else {
      console.log("Error Code is:" + xhr.status);
    }
  };
});
