var student = {
  name: 'Ravi',
  marks: [50,30,100,80]
}
// Object.values(student)
function avgMarks(obj) {
var avg = 0;
for(var i=0;i<obj.marks.length;i++) {
        avg += obj.marks[i] / obj.marks.length
}
return avg 
}

console.log(avgMarks(student))