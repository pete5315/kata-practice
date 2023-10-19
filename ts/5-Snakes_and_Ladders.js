"use strict";
// https://www.codewars.com/kata/587136ba2eefcb92a9000027
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnakesLadders = void 0;
// https://www.codewars.com/kata/587136ba2eefcb92a9000027
var SnakesLadders = /** @class */ (function () {
  function SnakesLadders() {
    this.positions = [0, 0];
    this.currentPlayer = 0;
  }
  SnakesLadders.prototype.play = function (die1, die2) {
    var jump = [
      0, 1, 38, 3, 4, 5, 6, 14, 31, 9, 10, 11, 12, 13, 14, 26, 6, 17, 18, 19,
      20, 21, 22, 23, 24, 25, 26, 27, 84, 29, 30, 31, 32, 33, 34, 35, 44, 37,
      38, 39, 40, 41, 42, 43, 44, 45, 25, 47, 48, 11, 50, 67, 52, 53, 54, 55,
      56, 57, 58, 59, 60, 61, 19, 63, 60, 65, 66, 67, 68, 69, 70, 91, 72, 73,
      53, 75, 76, 77, 98, 79, 80, 81, 82, 83, 84, 85, 86, 94, 88, 68, 90, 91,
      88, 93, 94, 75, 96, 97, 98, 80, 100,
    ];
    var newJump = this.positions[this.currentPlayer] + die1 + die2;
    console.log(newJump);
    if (newJump > 101) {
      newJump = newJump - (newJump % 100) * 2;
    }
    this.positions[this.currentPlayer] =
      jump[this.positions[this.currentPlayer] + die1 + die2];
    console.log(
      die1,
      die2,
      this.positions,
      this.positions[this.currentPlayer] + die1 + die2
    );
    var returnMsg = "Player "
      .concat(this.currentPlayer + 1, " is on square ")
      .concat(this.positions[this.currentPlayer]);
    if (die1 !== die2) {
      this.currentPlayer = (this.currentPlayer + 1) % 2;
    }
    console.log(returnMsg);
    return returnMsg;
  };
  return SnakesLadders;
})();
exports.SnakesLadders = SnakesLadders;
var game = new SnakesLadders();
game.play(1, 1);
game.play(1, 5);
game.play(6, 2);
game.play(1, 1);
game.play(1, 1);
game.play(1, 5);
game.play(6, 2);
game.play(1, 1);
game.play(1, 1);
game.play(1, 5);
game.play(6, 2);
game.play(1, 1);
game.play(1, 1);
game.play(1, 5);
game.play(6, 2);
game.play(1, 1);
game.play(1, 1);
game.play(1, 5);
game.play(6, 2);
game.play(1, 1);
game.play(1, 1);
game.play(1, 5);
game.play(6, 2);
game.play(1, 1);
game.play(1, 1);
game.play(1, 5);
game.play(6, 2);
game.play(1, 1);
