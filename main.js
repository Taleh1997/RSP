const userName = prompt("What is your name?")
let winnerScore = +prompt("Which score do you win?")
userH2.innerHTML = userName

let letterArr = ["r", "s", "p"]

let userPoints = 0
let compPoints = 0

const randomCompAttack = (arr) => {
    let compRandomNum = Math.floor(Math.random() * 3)
    return letterArr[compRandomNum]
};


imgScissors.addEventListener("click", () => play("s"));
imgPaper.addEventListener("click", () => play("p"));
imgRock.addEventListener("click", () => play("r"))

function gameStart(user, computer) {
    if (userPoints === winnerScore) {
        return alert("Game finished. Congratulations, You win!")
    } else if (compPoints === winnerScore) {
        return alert("Game finished. Unfortunately, You lose computer win!")
    }
    if (user === computer) {

        userPoint.innerHTML = `Point: ${userPoints}`;
        compPoint.innerHTML = `Point : ${compPoints}`;

        h3User.classList.remove("text-success");
        h3Comp.classList.remove("text-success");
        h3User.classList.remove("text-danger");
        h3Comp.classList.remove("text-danger");

        h3User.innerHTML = "Draf";
        h3Comp.innerHTML = "Draf";

        userImg.src = `./img/${user}-img.png`;
        compImg.src = `./img/${computer}-img.png`;

    } else if ((user === "r" && computer === "s") ||
        (user === "s" && computer === "p") ||
        (user === "p" && computer === "r")) {
        userPoints++
        userPoint.innerHTML = `Point: ${userPoints}`;
        compPoint.innerHTML = `Point : ${compPoints}`;

        h3User.classList.add("text-success");
        h3User.classList.remove("text-danger");
        h3Comp.classList.add("text-danger");
        h3Comp.classList.remove("text-success");

        h3User.innerHTML = "Win!";
        h3Comp.innerHTML = "Lose!";

        userImg.src = `./img/${user}-img.png`;
        compImg.src = `./img/${computer}-img.png`

    } else {
        compPoints++
        userPoint.innerHTML = `Point: ${userPoints}`;
        compPoint.innerHTML = `Point : ${compPoints}`;

        h3User.classList.add("text-danger");
        h3User.classList.remove("text-success");
        h3Comp.classList.add("text-success");
        h3Comp.classList.remove("text-danger");

        h3User.innerHTML = "Lose!";
        h3Comp.innerHTML = "Win!";

        userImg.src = `./img/${user}-img.png`;
        compImg.src = `./img/${computer}-img.png`
    }
};


const playGame = (event) => {
    realPlayerAttack = event.key
    computer = randomCompAttack(letterArr)

    if (event.key == "r" || event.key == "s" || event.key == "p") {
        gameStart(realPlayerAttack, computer)
    } else {
        alert("Please, just press one of the 'R S P' button")
    }
};

function play(userChoose) {
    let computer = randomCompAttack(letterArr);
    gameStart(userChoose, computer);
};

window.onkeydown = playGame








