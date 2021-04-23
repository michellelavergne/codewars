// Find the first non-consecutive number

function firstNonConsecutive (arr) {
let result = arr.find((val, index) => val !== index + arr[0])

  return (Number.isInteger(result)) ? result : null;
}