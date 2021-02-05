IIFE - imeediately invoked function expression
```js
    (function test(){
        console.log('invoked')
    })

    // OR

    ( () => {
        console.log('IIFE Annoymous function')
    })(); 

```

* Questions:

```js
//1. What is the output:

    let number = 0
    console.log(number++) // Postfix, number will be logged out first then increment, so 0 => 0+1  = 1
    console.log(++number) // Prefix, number will be increment first then log out, 1+1 = 2
    console.log(number)
    => 0 2 2 

//2.
    let num=1
    let num=2
    // Error, num is already defiend, because let/const is block scoped.

    var num1 = 10
    var num1 = 15
    console.log(num1) // 15, no errors.

```