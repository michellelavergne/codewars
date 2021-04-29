// Is there a vowel in there?

function isVow(a){
  
  for (var i = 0; l = a.length; i < l; ++i)
    {
      var char = String.fromCharCode(a[i])
      if('aeiou'.indexOf(char) !== -1)
      
      a[i] = char; 
    }
  return a;
}