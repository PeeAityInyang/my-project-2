let cards = []
let sum = 0
let hasblackjack = false
let isalive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let player = {
    Name:"inyang itorobong",
    chips: 150
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + ": " + player.chips

function getrandomCards() {
    let randomNumber = Math.floor(Math.random()*13) +1
    if (randomNumber > 10) {
        return  10
    } else if (randomNumber === 1) {
        return  11
    } else {
        randomNumber
    }

}

function startgame() {
    isalive = true
    let firstcard = getrandomCards()
    let secondcard = getrandomCards()
    cards = [firstcard,secondcard]
    sum = firstcard + secondcard

    rendergame()

}
function rendergame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i< cards.length; i++) {
    cardEl.textContent += cards[i] + " "
}

sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card"
    } else if (sum === 21) {
        message = "You've been blakjack!"
    } else { "You are out of the game"
    isalive = false 
}
    messageEl.textContent = message
}

function newcard() {
    if (isalive === true && hasblackjack === false) {
        let card = getrandomCards()
        sum += cards
        cards.push(card)
        rendergame()
    }
}
