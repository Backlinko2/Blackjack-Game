let firstCard=10
let secondCard=4

let cards = [firstCard,secondCard]

let sum=firstCard+secondCard


let cardsEl = document.querySelector("#cards-el")
console.log(cardsEl)

let sumEl = document.querySelector("#sum-el")
console.log(sumEl)

let message=" "

let messageEl=document.querySelector("#message-el")

function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent="Cards: " + cards[0] + ", "  + cards[1] 
    sumEl.textContent = "Sum: " + sum 
    if (sum<21){
        message="you have to draw a new card"
    } else if (sum===21){
        message="you have got the blackjack"
    }else {
        message="you are out of the game"
    }
   messageEl.textContent=message
}


 function newCard(){
   console.log("Drawing a new card from the deck!")
   let card = 7
   sum+=card
   cards.push(card)
   console.log(cards)

  renderGame()
 }




