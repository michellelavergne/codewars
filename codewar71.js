// Target Date

const dateNbDays = function (a0, a, p) {
  const countDay = new Date(2016,0,1)
  const profit = p/36000
  
  do{a0 += a0 * profit
    countDay.setDate(countDay.getDate() + 1)
    }while (a0 <= a )
      
      return countDay.toISOString().split('T')[0]





}