// Find the smallest integer - Solution 2

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let result = args.sort(function (a,b){return a-b})
    return result[0]
  }
}