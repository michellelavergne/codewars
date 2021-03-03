// Calculate BMI

function bmi(weight, height) {
  let bmiTotal = 0
  bmiTotal = weight/Math.pow(height, 2)
  
  if (bmiTotal <= 18.5) {
    
    return "Underweight"
    
  } else if (bmiTotal <= 25.0) {
    
    return "Normal"
    
  } else if (bmiTotal <= 30.0) {
    
    return "Overweight"
    
  } else if (bmiTotal > 30) {
    
    return "Obese"
    
  }
  
}