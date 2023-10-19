// https://www.codewars.com/kata/587136ba2eefcb92a9000027

// https://www.codewars.com/kata/587136ba2eefcb92a9000027

export class SnakesLadders {
  positions: number[];
  currentPlayer: number;
  gameOver: boolean;


  constructor() {
    this.positions = [0, 0];
    this.currentPlayer = 0;
    this.gameOver = false;
  }

  play(die1: number, die2: number): string {
    if (this.gameOver) {
      return "Game over!"
    }
    const jump: number[] = [0, 1, 38, 3, 4, 5, 6, 14, 31, 9, 10, 11, 12, 13, 14, 26, 6, 17, 18, 19, 20, 42, 22, 23, 24, 25, 26, 27, 84, 29, 30, 31, 32, 33, 34, 35, 44, 37, 38, 39, 40, 41, 42, 43, 44, 45, 25, 47, 48, 11, 50, 67, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 19, 63, 60, 65, 66, 67, 68, 69, 70, 91, 72, 73, 53, 75, 76, 77, 98, 79, 80, 81, 82, 83, 84, 85, 86, 94, 88, 68, 90, 91, 88, 93, 94, 75, 96, 97, 98, 80, 100];
    let newJump: number = this.positions[this.currentPlayer] + die1 + die2;
    console.log(newJump);
    if (newJump > 100) {
      newJump = newJump - newJump%100*2;
      console.log("What do you mean not a number?", this.currentPlayer, newJump)
    }
    this.positions[this.currentPlayer] = jump[newJump];
    if (this.positions[this.currentPlayer] === 100) {
      this.gameOver = true;
      return `Player ${this.currentPlayer + 1} Wins!`
    }
    console.log(die1, die2, this.positions, this.positions[this.currentPlayer] + die1 + die2);
    let returnMsg = `Player ${this.currentPlayer + 1} is on square ${this.positions[this.currentPlayer]}`;
    if (die1 !== die2) {
      this.currentPlayer = (this.currentPlayer + 1) % 2;
    }
    console.log(returnMsg);
    return returnMsg;
  }



}