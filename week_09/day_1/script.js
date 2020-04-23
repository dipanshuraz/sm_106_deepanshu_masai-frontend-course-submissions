$(document).ready(function() {
  $("#token").hide();
});
$("#btn-click").click(function(e) {
  event.preventDefault();
});

$("#btn-click").click(function() {
  var login = {
    email: $("#email").val(),
    password: $("#password").val()

    // email: "eve.holt@reqres.in",
    // password: "cityslicka"
  };
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://reqres.in/api/login");
  xhr.setRequestHeader("Content-type", "application/json;charset=utf-8");
  xhr.send(JSON.stringify(login));
  xhr.onload = function() {
    if (xhr.status == 200) {
      $("#form").hide(1000);
      $("#token").show(function() {
        $("#token").addClass("border border-dark");
      });
      console.log(xhr.response);
      var data = JSON.parse(xhr.response);
      $("#displayToken").text(data.token);
    } else {
      console.log("Error Code is:" + xhr.status);
    }
  };
});
