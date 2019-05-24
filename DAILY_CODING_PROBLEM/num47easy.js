/*
Problem #47[Easy]

This problem was asked by Facebook.

Given a array of numbers representing the stock prices of a company in chronological order, write a function that calculates the maximum profit you could have made from buying and selling that stock once. You must buy before you can sell it.

For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could buy the stock at 5 dollars and sell it at 10 dollars.
*/

function stock(a) {
    let max = 0;
    let buy = a[0];

    for(let i = 1 ; i < a.length ; i++){
        let sell = a[i];
        if(sell < buy) buy = sell;
        else max = Math.max(max, sell-buy);
    }

    return max;
}

let test1 = [9, 11, 8, 5, 7, 10];

console.log(stock(test1));