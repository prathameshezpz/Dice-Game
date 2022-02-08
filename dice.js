rollDice = () => {
    let dice = document.getElementById("dice");
    let diceNumber = 0;
    dice.classList.add("dice-animation");
    setTimeout(() => {
        dice.classList.remove("dice-animation");
        diceNumber = ( Math.floor(Math.random() * 6) + 1);
       document.getElementById("diceCounter").innerHTML = diceNumber;
    },1000);
}