function computerPlay() {
  let eingabe = Math.floor(Math.random() * 3 + 1);

  if (eingabe === 1) {
    console.log("Schere");
  } else if (eingabe === 2) {
    console.log("Stein");
  } else {
    console.log("Papier");
  }
}
