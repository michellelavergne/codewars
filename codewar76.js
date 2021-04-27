// Sort and star
function twoSort(s) {
  let result  = s.sort()
  let firstWord = result[0].split('')
  let final = []
  for (let i = 0; i < firstWord.length; i ++) {
    if (i !== firstWord.length-1) {
      final.push(firstWord[i] + '***')
    }else{
      final.push(firstWord[i])
    }
  }
  return final.join('')
}