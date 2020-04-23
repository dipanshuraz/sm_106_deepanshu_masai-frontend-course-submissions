var students = [ {name:'Albert', marks:85},
                {name:'Pogo', marks:60},
                {name:'Octo', marks:12}]
function gradeStudents(arr) {
  var objArr = []
  arr.forEach(function (elem){
   if(elem.marks >= 90) {
     elem.grade = 'A'
     objArr.push(elem)
   } else if(elem.marks >= 80 && elem.marks < 90) {
     elem.grade = 'B'
     objArr.push(elem)
   } else if(elem.marks >= 60 && elem.marks < 80) {
     elem.grade = 'C'
     objArr.push(elem)
   } else if(elem.marks >= 40 && elem.marks < 60) {
     elem.grade = 'D'
     objArr.push(elem)
   } else if(elem.marks < 40) {
     elem.grade = 'F'
     objArr.push(elem)
   } 
  })
  return objArr
}

console.log(gradeStudents(students))