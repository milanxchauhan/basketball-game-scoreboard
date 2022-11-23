
let homeScore = 0
let guestScore = 0

let countOne = document.getElementById("count-home")
let countFour = document.getElementById("count-guest")

function incrementOne() {
    homeScore += 1
    countOne.textContent = homeScore
}

function incrementTwo() {
    homeScore += 2
    countOne.textContent = homeScore
}

function incrementThree() {
    homeScore += 3
    countOne.textContent = homeScore
}

function incrementFour() {
    guestScore += 1
    countFour.textContent = guestScore
}

function incrementFive() {
    guestScore += 2
    countFour.textContent = guestScore
}

function incrementSix() {
    guestScore += 3
    countFour.textContent = guestScore
}
