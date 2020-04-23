var count=0;
var vowels=['a','e','i','o','u']
function countVowels(str) {
  for(var i=str.length-1;i>=0;i--)
  {
    str=str.toLowerCase();
    if(vowels.includes(str[i])){
      count++
      
    }
  }
  
  console.log(count)
}
countVowels('Akash Kumar')