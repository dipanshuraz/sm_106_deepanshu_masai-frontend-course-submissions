var getName;
var getScience;
var getMath;
var getEnglish;
var getHistory;
var getGeo;
var studentData = []
var btnSubmit;
var result;
var showResults;
var tbody;
function loadData() {
 getName = document.querySelector('#name')
 getGrade = document.querySelector('#inputGrade')
 getScience = document.querySelector('#marksScience')
 getMath = document.querySelector('#marksMath')
 getEnglish = document.querySelector('#marksEnglish')
 getHistory = document.querySelector('#marksHistory')
 getGeo = document.querySelector('#marksGeo')
 studentData = []
 result = document.querySelector('.result')
 btnSubmit = document.querySelector('#btn');
}
var total  = parseInt(getScience)+parseInt(getMath)+parseInt(getEnglish)+parseInt(getHistory)+parseInt(getGeo);
loadData();
btnSubmit.addEventListener('click', getData);

function getData() {
  obj = {
    name : getName.value,
    grade : getGrade.value,
    science: getScience.value,
    math : getMath.value,
    english : getEnglish.value,
    history : getHistory.value,
    geo : getHistory.value
  }
  studentData.push(obj);
  showData(studentData)
}


function showData(studentData) {
  var tbody = document.getElementById('tbody');
  tbody.innerHTML = '';
  studentData.forEach(function (stud) {

    var tr = document.createElement('tr')
    tr.innerHTML = '<td>'+stud.name+'</td>'+'<td>'+stud.grade+'</td>'+'<td>'+total+'</td>'+'<td>'+stud.name+'</td>';
    
    tbody.appendChild(tr);
  });
}
