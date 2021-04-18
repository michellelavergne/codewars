// The most asked question on Codewars

function detect(comment) {
  let output = comment
  let rest = output.split(' ')
  
  if (rest[0] === 'Can' && rest[1] === 'someone' && rest[2] ==='explain') {
    return true
  
  } else {
    return false
  }
}