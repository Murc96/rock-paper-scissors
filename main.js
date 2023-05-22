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

function PlayRound() {
  let playerSelection = prompt(
    "Bitte geben Sie Schere, Stein oder Papier ein: "
  ).toLowerCase();
  let computerSelect = computerPlay();

  if (computerSelect === "Schere" && playerSelection === "schere") {
    console.log("Es ist ein Unentschieden");
    return 0;
  } else if (computerSelect === "Schere" && playerSelection === "stein") {
    console.log("Du gewinnst! - Stein schlägt Schere");
    return 1;
  } else if (computerSelect === "Schere" && playerSelection === "papier") {
    console.log("Du verlierst! - Schere schlägt Papier");
    return 2;
  } else if (computerSelect === "Stein" && playerSelection === "stein") {
    console.log("Es ist ein Unentschieden");
    return 0;
  } else if (computerSelect === "Stein" && playerSelection === "schere") {
    console.log("Du verlierst! - Stein schlägt Schere");
    return 2;
  } else if (computerSelect === "Stein" && playerSelection === "papier") {
    console.log("Du gewinnst! - Papier schlägt Stein");
    return 1;
  } else if (computerSelect === "Papier" && playerSelection === "stein") {
    console.log("Du verlierst! - Papier schlägt Stein");
    return 2;
  } else if (computerSelect === "Papier" && playerSelection === "papier") {
    console.log("Es ist ein Unentschieden");
    return 0;
  } else if (computerSelect === "Papier" && playerSelection === "schere") {
    console.log("Du gewinnst! - Schere schlägt Papier");
    return 1;
  }
}

function game() {
  let zaehlerPlayer = 0;
  let zaehlerComputer = 0;
  while (zaehlerComputer < 5 || zaehlerPlayer < 5) {
    let ergebnis = PlayRound();
    if (ergebnis === 0) {
      console.log("Niemand kriegt ein Punkt, da es ein unentschieden ist");
    } else if (ergebnis === 1) {
      ++zaehlerPlayer;
    } else if (ergebnis === 2) {
      ++zaehlerComputer;
    }
  }
  if (zaehlerPlayer > zaehlerComputer) {
    console.log("Du hast gewonnen");
  } else if (zaehlerPlayer < zaehlerComputer) {
    console.log("Du hast verloren");
  } else if (zaehlerPlayer == zaehlerComputer) {
    console.log("Es ist ein unentschieden");
  }
}
