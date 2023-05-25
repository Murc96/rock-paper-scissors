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
    return "Schere";
  } else if (eingabe === 2) {
    return "Stein";
  } else {
    return "Papier";
  }
}

let zaehlerPlayer = 0;
let zaehlerComputer = 0;

function PlayRound(playerSelection) {
  let computerSelect = computerPlay();

  let cpuChoiceDiv = document.getElementById("cpuChoice");

  if (computerSelect === "Schere") {
    cpuChoiceDiv.innerHTML = '<i class="fa-regular fa-hand-scissors"></i>';
  } else if (computerSelect === "Stein") {
    cpuChoiceDiv.innerHTML = '<i class="fa-regular fa-hand-back-fist"></i>';
  } else if (computerSelect === "Papier") {
    cpuChoiceDiv.innerHTML = '<i class="fa-regular fa-hand"></i>';
  }

  if (computerSelect === "Schere" && playerSelection === "schere") {
    document.getElementById("resultText").textContent =
      "Es ist ein Unentschieden";
  } else if (computerSelect === "Schere" && playerSelection === "stein") {
    document.getElementById("resultText").textContent =
      "Du gewinnst! - Stein schlägt Schere";
    ++zaehlerPlayer;
    document.getElementById("pointsPlayer").textContent = zaehlerPlayer;
  } else if (computerSelect === "Schere" && playerSelection === "papier") {
    document.getElementById("resultText").textContent =
      "Du verlierst! - Schere schlägt Papier";
    ++zaehlerComputer;
    document.getElementById("pointsCpu").textContent = zaehlerComputer;
  } else if (computerSelect === "Stein" && playerSelection === "stein") {
    document.getElementById("resultText").textContent =
      "Es ist ein Unentschieden";
  } else if (computerSelect === "Stein" && playerSelection === "schere") {
    document.getElementById("resultText").textContent =
      "Du verlierst! - Stein schlägt Schere";
    ++zaehlerComputer;
    document.getElementById("pointsCpu").textContent = zaehlerComputer;
  } else if (computerSelect === "Stein" && playerSelection === "papier") {
    document.getElementById("resultText").textContent =
      "Du gewinnst! - Papier schlägt Stein";
    ++zaehlerPlayer;
    document.getElementById("pointsPlayer").textContent = zaehlerPlayer;
  } else if (computerSelect === "Papier" && playerSelection === "stein") {
    document.getElementById("resultText").textContent =
      "Du verlierst! - Papier schlägt Stein";
    ++zaehlerComputer;
    document.getElementById("pointsCpu").textContent = zaehlerComputer;
  } else if (computerSelect === "Papier" && playerSelection === "papier") {
    document.getElementById("resultText").textContent =
      "Es ist ein Unentschieden";
  } else if (computerSelect === "Papier" && playerSelection === "schere") {
    document.getElementById("resultText").textContent =
      "Du gewinnst! - Schere schlägt Papier";
    ++zaehlerPlayer;
    document.getElementById("pointsPlayer").textContent = zaehlerPlayer;
  }

  if (zaehlerPlayer === 5) {
    document.getElementById("resultText").textContent = "Du hast gewonnen";
  } else if (zaehlerComputer === 5) {
    document.getElementById("resultText").textContent = "Du hast verloren";
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
