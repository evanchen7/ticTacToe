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
      if (x <= 2 && y <= 2 && this.checkCollision(x, y)) {
        this.board[x][y] = 'X';
        this.winDetection();
        this.showBoard();
      } else {
        throw 'Input valid ranges or piece collision' && this.showBoard();
      }
    },
    toggleO: function (x, y) {
      if (x <= 2 && y <= 2 && this.checkCollision(x, y)) {
        this.board[x][y] = 'O';
        this.winDetection();
        this.showBoard();
      } else {
        throw 'Input valid ranges or piece collision' && this.showBoard();
      }
    },
    showBoard: function() {
       return this.board;
    },
    checkCollision: function (x, y) {
       return this.board[x][y] === '*';
    },
    winDetection: function () {
      var xResults = [];
      var oResults = [];
      var rowX = 0;
      var rowO = 0;

      // All three cells in any row are the same
      for (var i = 0; i < this.board.length; i++) {
          if (this.board[0][i] === 'O') {
              rowO++;
          }
          if (this.board[0][j] === 'X') {
              rowX++;
          }
      }
      if (rowX === 3) {
          return 'X is the winner';
      }
      if (rowO === 3) {
          return 'O is the winner';
      }

      // All three cells in any column are the same
      // All three cells traversing the board diagonally are the same.
    }
};
