var student = {
  name: 'Ravi',
  marks: [50,30,100,80],
  average: function() {  
      var sum = 0;
  for(var i=0; i<this.marks.length; i++) {
      sum += this.marks[i] 
      }
    return sum / this.marks.length
}
}
  function avgMarks(obj){
    return obj.average()
    }
console.log(avgMarks(student))
