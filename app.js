let gamestate = ["", "", "", "", "", "", "", "", ""];

let currentPlayer = "X";

//let ai = true;

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", cellClicked);
});

function cellClicked(e) {
  //get the square that was clicked
  const clickedCell = e.target;

  const clickedCellIndex = parseInt(
    clickedCell.getAttribute("data-cell-index")
  );

  if (currentPlayer === "O" && gamestate[clickedCellIndex] === "") {
    clickedCell.style.color = "red";
  }
  if (gamestate[clickedCellIndex] !== "") {
    return;
  } else {
    clickedCell.innerHTML = currentPlayer;
    gamestate[clickedCellIndex] = currentPlayer;
    handlePlayerSwitch();
    handleWinner();
  }
}

function handlePlayerSwitch() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function handleWinner() {
    let player1Winner = false;
    let player2Winner = false;
  if (gamestate[0] === "X" && gamestate[1] === "X" && gamestate[2] === "X") {
    player1Win();
    player1Winner = true;
  }
  if (gamestate[3] === "X" && gamestate[4] === "X" && gamestate[5] === "X") {
    player1Win();
    player1Winner = true;
  }
  if (gamestate[6] === "X" && gamestate[7] === "X" && gamestate[8] === "X") {
    player1Win();
    player1Winner = true;
  }
  if (gamestate[0] === "X" && gamestate[3] === "X" && gamestate[6] === "X") {
    player1Win();
    player1Winner = true;
  }
  if (gamestate[1] === "X" && gamestate[4] === "X" && gamestate[7] === "X") {
    player1Win();
    player1Winner = true;
  }
  if (gamestate[2] === "X" && gamestate[5] === "X" && gamestate[8] === "X") {
    player1Win();
    player1Winner = true;
  }
  if (gamestate[0] === "X" && gamestate[4] === "X" && gamestate[8] === "X") {
    player1Win();
    player1Winner = true;
  }
  if (gamestate[6] === "X" && gamestate[4] === "X" && gamestate[2] === "X") {
      player1Win();
      player1Winner = true;
  }

  if (gamestate[0] === "O" && gamestate[1] === "O" && gamestate[2] === "O") {
    player2Win();
    player2Winner = true;
  }
  if (gamestate[3] === "O" && gamestate[4] === "O" && gamestate[5] === "O") {
    player2Win();
    player2Winner = true;
  }
  if (gamestate[6] === "O" && gamestate[7] === "O" && gamestate[8] === "O") {
    player2Win();
    player2Winner = true;
  }
  if (gamestate[0] === "O" && gamestate[3] === "O" && gamestate[6] === "O") {
    player2Win();
    player2Winner = true;
  }
  if (gamestate[1] === "O" && gamestate[4] === "O" && gamestate[7] === "O") {
    player2Win();
    player2Winner = true;
  }
  if (gamestate[2] === "O" && gamestate[5] === "O" && gamestate[8] === "O") {
    player2Win();
    player2Winner = true;
  }
  if (gamestate[0] === "O" && gamestate[4] === "O" && gamestate[8] === "O") {
    player2Win();
    player2Winner = true;
  }
  if (gamestate[6] === "O" && gamestate[4] === "O" && gamestate[2] === "O") {
    player2Win();
    player2Winner = true;
}

  if (!gamestate.includes("") && player1Winner == false && player2Winner == false) {
      drawMessage();
  }

}
  

function player1Win() {
  document.querySelector(".intro-modal").style.display = "block";
  document.querySelector(".status").textContent = "Player 1 Wins!";
}

function player2Win() {
  document.querySelector(".intro-modal").style.display = "block";
  document.querySelector(".status").textContent = "Player 2 Wins!";
}

function drawMessage() {
  document.querySelector(".intro-modal").style.display = "block";
  document.querySelector(".status").textContent = "Draw!";
}

document.querySelector(".play-again").addEventListener("click", () => {
  location.reload();
});





/*function random(min, max) { //random number function 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }*/

/*function aiPlay() {

    let aiNum = random(0,8);

    if(gamestate[aiNum] === '') {
        gamestate[aiNum] == 'O'
    }
    else {
        aiPlay()
    }
}

document.querySelector('#computer-play').addEventListener('click', () => {
    document.querySelector('.intro-modal').style.display = "none";
    ai = true;
})

document.querySelector('#player-play').addEventListener('click', () => {
    document.querySelector('.intro-modal').style.display = "none";
    ai = false;
})*/

/*
const cell1 = document.querySelector('#cell1')
const cell2 = document.querySelector('#cell2')
const cell3 = document.querySelector('#cell3')
const cell4 = document.querySelector('#cell4')
const cell5 = document.querySelector('#cell5')
const cell6 = document.querySelector('#cell6')
const cell7 = document.querySelector('#cell7')
const cell8 = document.querySelector('#cell8')
const cell9 = document.querySelector('#cell9')
cell1.textContent = gamestate[0]
cell2.textContent = gamestate[1]
cell3.textContent = gamestate[2]
cell4.textContent = gamestate[3]
cell5.textContent = gamestate[4]
cell6.textContent = gamestate[5]
cell7.textContent = gamestate[6]
cell8.textContent = gamestate[7]
cell9.textContent = gamestate[8] */
