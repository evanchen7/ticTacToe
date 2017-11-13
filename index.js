// * Minimal UI that redraws the board and makes clear whose turn it is, each turn.
// * Players can submit moves (assume, admittedly unrealistically, that both players are sitting at the same keyboard).
// * Win detection - detect and display who won

// Start a game
var TicTacToe = function () {
  this.board = new generateNewBoard();
};

// Create a board

var generateNewBoard = function () {
  return [['*', '*', '*'],
           ['*', '*', '*'],
           ['*', '*', '*']];
};

// Toggle board
TicTacToe.prototype = {
    toggleX: function (x, y) {
      if (x <= 2 && y <= 2) {
        this.board[x][y] = 'X';
        this.showBoard();
      } else {
        throw 'Input valid ranges for X and Y';
      }
    },
    toggleY: function (x, y) {
      if (x <= 2 && y <= 2) {
        this.board[x][y] = 'Y';
        this.showBoard();
      } else {
        throw 'Input valid ranges for X and Y';
      }
    },
    showBoard: function() {
       return this.board;
    }
};

// Collision detection
var checkCollision = function () {

};

// Win detection
var winDetection = function () {

};
