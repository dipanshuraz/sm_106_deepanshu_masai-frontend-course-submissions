var asc = [];
var desc = [];
var val = [];
var sorted = [];
// var userArr = [];
var userArr = [
  {
    name: "ravi",
    username: "ravicool",
    email: "egk@gmail.cpm",
    password: "67",
    type: "admin"
  },
  {
    name: "abc",
    username: "fghj",
    email: "cvbn@gmail.cpm",
    password: "dfghj",
    type: "admin"
  },
  {
    name: "dse",
    username: "cvbnm",
    email: "hjkl@gmail.cpm",
    password: "98",
    type: "user"
  },
  {
    name: "gh",
    username: "rtyui",
    email: "sdf@gmail.cpm",
    password: "kjhg",
    type: "user"
  }
];

$(document).ready(function() {
  console.log(userArr);
});
function User(name, username, email, password, type) {
  (this.name = name || "def-name"),
    (this.username = username || "def-username"),
    (this.email = email || "def-email"),
    (this.password = password || "def-pass"),
    (this.type = type || "def-type");
}
function createUser() {
  var name = $("#name").val();
  var username = $("#username").val();
  var email = $("#emailInput").val();
  var password = $("#pass").val();
  var logType = $("#selectType").val();

  var data = new User(name, username, email, password, logType);
  userArr.push(data);
}
var putUserInSelect = "";
$("#submit").click("click", function(e) {
  e.preventDefault();
  createUser();
  $("#showUser").empty();
  $(".tbody").empty();
  userArr.forEach(function(key) {
    output = `<tr><td scope="row">${key.name}</td>
        <td>${key.username}</td>
        <td>${key.email}</td>
        <td>${key.type}</td>
        <td>
          <button type="button" class="btn del btn-danger">
            <i class="fas fa-times"></i>
          </button>
        </td>
        </tr>
        `;
    $(".tbody").append(output);
    putUserInSelect = `
    <option value="${key.username}">${key.username}</option>`;
    $("#showUser").append(putUserInSelect);
  });
  $("#showUser").change(function() {
    event.preventDefault();
    $("#details").empty();
    var selectedValue = $(this)
      .children("option:selected")
      .val();

    userArr.forEach(function(elem) {
      if (elem.username == selectedValue) {
        $("#details").append(fillInfo(elem));
      }
    });
  });
});
function fillInfo(user) {
  return `<div>
              <div> Hello ${user.username}, welcome back </div>
              <div> Registered email is ${user.email}</div>
          </div>`;
}
// Sort

$("#sortByName").change("change", function() {
  val = $("#sortByName").val();
  console.log(val);

  if (val == "username") {
    sorted = userArr.sort((a, b) => {
      if (a.username.toLowerCase() < b.username.toLowerCase()) {
        return -1;
      } else if (a.username.toLowerCase() > b.username.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  } else if (val == "name") {
    sorted = userArr.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }
  // console.log(userArr);
  console.table(sorted);
  $(".tbody").empty();
  sorted.forEach(function(key) {
    output = `<tr><td scope="row">${key.name}</td>
        <td>${key.username}</td>
        <td>${key.email}</td>
        <td>${key.type}</td>
        <td>
          <button type="button" class="btn del btn-danger">
            <i class="fas fa-times"></i>
          </button>
        </td>
        </tr>
        `;
    $(".tbody").append(output);
  });
});
// Asc - Desc

// Sort By Order
$("#orderBy").change("change", function() {
  var value = $("#orderBy").val();
  console.log(value);
  if (value == "ascending") {
    if (val == "username") {
      asc = userArr.sort((a, b) => {
        if (a.username.toLowerCase() < b.username.toLowerCase()) {
          return -1;
        } else if (a.username.toLowerCase() > b.username.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    } else if (val == "name") {
      asc = userArr.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    }
    $(".tbody").empty();
    asc.forEach(function(key) {
      output = `<tr><td scope="row">${key.name}</td>
        <td>${key.username}</td>
        <td>${key.email}</td>
        <td>${key.type}</td>
        <td>
          <button type="button" class="btn del btn-danger">
            <i class="fas fa-times"></i>
          </button>
        </td>
        </tr>
        `;
      $(".tbody").append(output);
    });
  } else if (value == "descending") {
    if (val == "username") {
      desc = userArr.sort((a, b) => {
        if (a.username.toLowerCase() < b.username.toLowerCase()) {
          return 1;
        } else if (a.username.toLowerCase() > b.username.toLowerCase()) {
          return -1;
        }
        return 0;
      });
    } else if (val == "name") {
      desc = userArr.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return 1;
        } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        }
        return 0;
      });
    }
    $(".tbody").empty();
    desc.forEach(function(key) {
      output = `<tr><td scope="row">${key.name}</td>
        <td>${key.username}</td>
        <td>${key.email}</td>
        <td>${key.type}</td>
        <td>
          <button type="button" class="btn del btn-danger">
            <i class="fas fa-times"></i>
          </button>
        </td>
        </tr>
        `;
      $(".tbody").append(output);
    });
  }
  console.table(asc);
  console.table(desc);
});
// User Type Admin User
$("#userType").change("change", function() {
  var type = $("#userType").val();
  console.log(type);
  var filteredType = userArr.filter(usr => usr.type == type);
  console.log(filteredType);
  $(".tbody").empty();
  filteredType.forEach(function(key) {
    output = `<tr><td scope="row">${key.name}</td>
        <td>${key.username}</td>
        <td>${key.email}</td>
        <td>${key.type}</td>
        <td>
          <button type="button" class="btn del btn-danger">
            <i class="fas fa-times"></i>
          </button>
        </td>
        </tr>

        `;
    $(".tbody").append(output);
  });
});

$(".tbody").click("click", function(e) {
  // console.log(e.target);

  if (e.target.classList.contains("del") == true) {
    // console.log("clicked");
    e.target.parentElement.parentElement.remove();
  }
});
