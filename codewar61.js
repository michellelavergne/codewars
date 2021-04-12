// Parse float

function parseF(s) {
  const f = parseFloat(s)
  return isNaN(f) ? null : f
}