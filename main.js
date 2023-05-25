function init() {
  const symbols = document.querySelectorAll(".symbol");

  for (let i = 0; i < symbols.length; i++) {
    symbols[i].addEventListener("click", myFunc);
  }

  function myFunc(event) {
    if (event.target.id === "paper") {
      PlayRound("papier");
    } else if (event.target.id === "rock") {
      PlayRound("stein");
    } else if (event.target.id === "scissor") {
      PlayRound("schere");
    }
  }
}

function computerPlay() {
  const eingabe = Math.floor(Math.random() * 3) + 1;

  if (eingabe === 1) {
    return "schere";
  } else if (eingabe === 2) {
    return "stein";
  } else {
    return "papier";
  }
}

let zaehlerPlayer = 0;
let zaehlerComputer = 0;

function PlayRound(playerSelection) {
  let computerSelect = computerPlay();

  let cpuChoiceDiv = document.getElementById("cpuChoice");

  if (computerSelect === "schere") {
    cpuChoiceDiv.innerHTML = '<i class="fa-regular fa-hand-scissors"></i>';
  } else if (computerSelect === "stein") {
    cpuChoiceDiv.innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
  } else if (computerSelect === "papier") {
    cpuChoiceDiv.innerHTML = '<i class="fa-regular fa-hand"></i>';
  }

  if (computerSelect === playerSelection) {
    document.getElementById("resultText").textContent =
      "Es ist ein Unentschieden";
  } else if (computerSelect === "schere" && playerSelection === "stein") {
    document.getElementById("resultText").textContent =
      "Du gewinnst! - Stein schlägt Schere";
    ++zaehlerPlayer;
    document.getElementById("pointsPlayer").textContent = zaehlerPlayer;
  } else if (computerSelect === "schere" && playerSelection === "papier") {
    document.getElementById("resultText").textContent =
      "Du verlierst! - Schere schlägt Papier";
    ++zaehlerComputer;
    document.getElementById("pointsCpu").textContent = zaehlerComputer;
  } else if (computerSelect === "stein" && playerSelection === "schere") {
    document.getElementById("resultText").textContent =
      "Du verlierst! - Stein schlägt Schere";
    ++zaehlerComputer;
    document.getElementById("pointsCpu").textContent = zaehlerComputer;
  } else if (computerSelect === "stein" && playerSelection === "papier") {
    document.getElementById("resultText").textContent =
      "Du gewinnst! - Papier schlägt Stein";
    ++zaehlerPlayer;
    document.getElementById("pointsPlayer").textContent = zaehlerPlayer;
  } else if (computerSelect === "papier" && playerSelection === "stein") {
    document.getElementById("resultText").textContent =
      "Du verlierst! - Papier schlägt Stein";
    ++zaehlerComputer;
    document.getElementById("pointsCpu").textContent = zaehlerComputer;
  } else if (computerSelect === "papier" && playerSelection === "schere") {
    document.getElementById("resultText").textContent =
      "Du gewinnst! - Schere schlägt Papier";
    ++zaehlerPlayer;
    document.getElementById("pointsPlayer").textContent = zaehlerPlayer;
  }

  if (zaehlerPlayer === 5) {
    document.getElementById("resultText").textContent =
      "Du hast gewonnen mit " + zaehlerPLayer + " : " + zaehlerComputer;
  } else if (zaehlerComputer === 5) {
    document.getElementById("resultText").textContent =
      "Du hast verloren mit " + zaehlerComputer + " : " + zaehlerPlayer;
  }
}

const reset = document.getElementById("reset");

reset.addEventListener("click", resetFunc);

function resetFunc() {
  zaehlerPlayer = 0;
  zaehlerComputer = 0;
  document.getElementById("pointsPlayer").textContent = zaehlerPlayer;
  document.getElementById("pointsCpu").textContent = zaehlerComputer;
  document.getElementById("resultText").textContent =
    "Wählen Sie ein Symbol um zu beginnen";

  let cpuChoiceDiv = document.getElementById("cpuChoice");
  cpuChoiceDiv.innerHTML = "";
}

init();
