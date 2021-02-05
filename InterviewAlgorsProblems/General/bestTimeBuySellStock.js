/*
Say you have an array for which ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction(i.e)

input: prices = [7,1,3,2,8]
output: 7 => buy on day 2 sell on day 8 

Solution:
Keep track of minium
keep track of max_profit, initialized to be 0 
If current element < minium, update to be minium.
Other wise, check if currentElement - minium > max_profix, if yes we have a new max profit.

The idea is to buy on a low price day, so when element is smaller than minium, it can be the potential lowest price to buy.

Process:
minimum = Number.MAX_VALUE
max_profit = 0 
First set mininum to be a large number,
First loop, element is 7, 7 < minimum, minimum = 7 
2nd loop, element is 1, 1 < minimum, minimum = 1
3rd loop, element is 3, 3 !< minimum, it means we have a potential max profit, since we can buy on 1 and sell on 3 .
so check if (3-1) > max_profit, if yes, max_profit = 2 now .

4th loop, element is 2, minimum is 1 , 2 !< 1, check (2-1) > max_profit? Not true, move on.

5th loop, element is 8, minimum is 1, 8!< 1, check (8-1) > max_profit?  7 > 2 is true, max_profit = 7 

*/


let stock_max_profit_I = (prices) => {
    let max_profit = 0 
    let minimum = Number.MAX_VALUE

    for (let i=0; i<prices.length; i++){
        if(prices[i] < minimum){
            minimum = prices[i]
        }
        else if((prices[i] - minimum) > max_profit){
            max_profit = prices[i] - minimum
        }
    }
    return max_profit
}

console.log(stock_max_profit_I([7,1,3,5,8,10])) // Output should be 9 
