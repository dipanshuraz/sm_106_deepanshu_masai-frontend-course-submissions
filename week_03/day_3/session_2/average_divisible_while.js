var sum=0;
function avgDivWhile(n) {
  var i=0;
  while(i<=n)
  {
    sum=sum+i;
    i++;
  }
  var avg=sum/n;
  console.log(avg);
}
avgDivWhile(10)