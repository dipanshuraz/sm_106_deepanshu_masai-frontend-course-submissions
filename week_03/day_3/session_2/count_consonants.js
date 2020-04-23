var count=0;
var vowels=['a','e','i','o','u']
var space=' ';
function countVowels(str) {
  for(var i=str.length-1;i>=0;i--)
  {
    str=str.toLowerCase();
    if(!vowels.includes(str[i])){
      if(space.includes(str[i])){
          count--
        }
      count++
    }
  }
  console.log(count)
}
countVowels('Deep r v')