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
  );
  let computerSelect = computerPlay();

  if (computerSelect === "Schere" && playerSelection === "Schere") {
    document.write("Es ist ein Unentschieden");
  } else if (computerSelect === "Schere" && playerSelection === "Stein") {
    document.write("Du gewinnst! - Stein schlägt Schere");
  } else if (computerSelect === "Schere" && playerSelection === "Papier") {
    document.write("Du verlierst! - Schere schlägt Papier");
  } else if (computerSelect === "Stein" && playerSelection === "Stein") {
    document.write("Es ist ein Unentschieden");
  } else if (computerSelect === "Stein" && playerSelection === "Schere") {
    document.write("Du verlierst! - Stein schlägt Schere");
  } else if (computerSelect === "Stein" && playerSelection === "Papier") {
    document.write("Du gewinnst! - Papier schlägt Stein");
  } else if (computerSelect === "Papier" && playerSelection === "Stein") {
    document.write("Du verlierst! - Papier schlägt Stein");
  } else if (computerSelect === "Papier" && playerSelection === "Papier") {
    document.write("Es ist ein Unentschieden");
  } else if (computerSelect === "Papier" && playerSelection === "Schere") {
    document.write("Du gewinnst! - Schere schlägt Papier");
  }
}

function game() {}
