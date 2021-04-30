// Is there a vowel in there?

function isVow(a){
 return a.map(i =>{
   if (String.fromCharCode(i) === 'a')
     return 'a';
   else if (String.fromCharCode(i)=== 'e')
     return 'e';
   else if (String.fromCharCode(i)=== 'i')
     return 'i';
   else if (String.fromCharCode(i)=== 'o')
     return 'o';
   else if (String.fromCharCode(i)=== 'u')
     return 'u';
   else
     return i;
 })
}