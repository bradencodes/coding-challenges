/*
Problem #51 [Medium]

This problem was asked by Facebook.

Given a function that generates perfectly random numbers between 1 and k (inclusive), where k is an input, write a function that shuffles a deck of cards represented as an array using only swaps.

It should run in O(N) time.

Hint: Make sure each one of the 52! permutations of the deck is equally likely.
*/


// My Solution
function rand(k){
    return Math.floor(Math.random() * k) + 1;
}

function shuffle(deck){
    for(let c = deck.length-1 ; c >= 0 ; c--){
        let randi = rand(c+1)-1;
        [deck[c], deck[randi]] = [deck[randi], deck[c]]
    }
}

let deck = [];
for(let n = 1 ; n < 53 ; n++) {
    deck.push(n);
}
console.log(deck);
shuffle(deck);
console.log(deck);