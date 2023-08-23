// let userName = prompt("What is your name?")
// userH2.innerHTML = userName

let letterArr = ["r", "s", "p"]

// let userPoint = 0
// let compPoint= 0

const randomCompAttack = (arr) => {
    let compRandomNum = Math.floor(Math.random() * 3)
    return letterArr[compRandomNum]
}

function gameStart(user, computer) {
    if (user === computer) {
        console.log("Draf!");
        h3User.classList.remove("text-success")
        h3Comp.classList.remove("text-success")
        h3User.classList.remove("text-danger")
        h3Comp.classList.remove("text-danger")
        h3User.innerHTML = "Draf"
        h3Comp.innerHTML = "Draf"
        userImg.src = `./img/${user}-img.png`
        compImg.src = `./img/${computer}-img.png`
    } else if ((user === "r" && computer === "s") ||
        (user === "s" && computer === "p") ||
        (user === "p" && computer === "r")) {
        console.log("You Win!");
        h3User.classList.add("text-success", )
        h3User.classList.remove("text-danger")
        h3Comp.classList.add("text-danger")
        h3Comp.classList.remove("text-success")
        // userPoint+=1
        h3User.innerHTML = "Win!"
        h3Comp.innerHTML = "Lose!"
        userImg.src = `./img/${user}-img.png`
        compImg.src = `./img/${computer}-img.png`
    } else {
        console.log("Computer Win!");
        h3User.classList.add("text-danger")
        h3User.classList.remove("text-success")
        h3Comp.classList.add("text-success")
        h3Comp.classList.remove("text-danger")
        // compPoint+=1
        h3User.innerHTML = "Lose!"
        h3Comp.innerHTML = "Win!"
        userImg.src = `./img/${user}-img.png`
        compImg.src = `./img/${computer}-img.png`
    }
}

function play(userChoose) {
    const computer = randomCompAttack(letterArr);
    const result = gameStart(userChoose, computer);
}



imgRock.addEventListener("click", () => play("r"));
imgPaper.addEventListener("click", () => play("p"));
imgScissors.addEventListener("click", () => play("s"))
