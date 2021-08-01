// For the final project you will be creating an automated version of the classic card game WAR.
// -	Deal 26 Cards to two Players from a Deck. 
// -	Iterate through the turns where each Player plays a Card
// -	The Player who played the higher card is awarded a point
// -	Ties result in zero points for either Player
// -	After all cards have been played, display the score.
// Write a Unit Test using Mocha and Chai for at least one of the functions you write.

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }

    description() {
        return `${this.value} of ${this.suit}`;
    }
} 

class Deck {
    constructor() {
        this.SUITS = ['clubs', 'diamonds', 'hearts', 'spades'];       // clubs (♣), diamonds (♦), hearts (♥), and spades (♠)
        this.VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.cards = [];
    }


    populate() {
        for (let i = 0; i < this.SUITS.length; i++) {
            for (let j = 0; j < this.VALUES.length; j++) {
                const card =  new Card(this.SUITS[i], this.VALUES[j]);
                this.cards.push(card);
            } 
        }
    }

    get NumberOfCards() {
        return this.cards.length
    }

    shuffle() {
        let shuffleDeck = this.cards
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let temp = shuffleDeck[i];
            shuffleDeck[i] = shuffleDeck[j];
            shuffleDeck[j] = temp;
        }
    }

    deal(player1, player2) {
        for (let i = 0; i < 52; i += 2) {
            player1.hand.push(this.cards.pop());
            player2.hand.push(this.cards.pop()); 
        }
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.points = 0;
    }
}

class Game {
    compareCards(card1, card2, player1, player2)  { 
        if (card1  > card2) {
            player1.points++;
        } else if (card2 > card1) {
            player2.points++;
        } else {

        }
    }
    declareWinner(points1, points2) {
        if (points1 > points2) {
            console.log('Player 1 is the winner!');
        } else if (points2 > points1) {
            console.log('Player 2 is the winner!');
        }
    }
}

function start() {
    const game = new Game();
    let deck = new Deck();
    deck.populate();
    deck.shuffle();
    const player1 = new Player();
    const player2 = new Player();
    deck.deal(player1, player2);
    player1.hand.forEach((player1Card, i) => {
        console.log(`player 1 played ${player1Card.description()}`);
        player2Card = player2.hand[i];
        game.compareCards(player1Card.value, player2Card.value, player1, player2);
        console.log(`player 2 played ${player2Card.description()}`);
    });
    console.log(`Player 1 final score: ${player1.points}`);
    console.log(`Player 2 final score: ${player2.points}`);

    game.declareWinner(player1.points, player2.points);

}

start();
