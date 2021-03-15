// Rock, Paper, Scissors

const rps = (p1, p2) => {
  if ((p1 ==='rock' && p2 === 'scissors') || (p1 === 'paper' && p2 === 'rock') || (p1 === 'scissors'&& p2==='paper')) {
    return "Player 1 won!"
  } if (p1 === p2) {
    return "Draw!"
  }else {
    return "Player 2 won!"
  }
};