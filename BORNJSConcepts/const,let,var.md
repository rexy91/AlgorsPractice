- var is function scope. let and const are block scope.

- Var is hoisted, console.log will be undefined.
```js
    console.log(number) // Puts 'undefined'
    var number = 10 
```

- const and let are also hoisted, but will throw referrence erros if we try to access it before code reach that line.
```js
    console.log(x) // Referrence Errors
    let x = 1

    console.log(y) // Referrence Errors
    let y = 1
```
The variables using let,const gives a referenceError, that doesn't mean it's not hoisted. The variable is created when the containing environment is instantiated. But it may not be accessed bcz of it being in an inaccessible "temporal dead zone"


# -----------------

```js
//2. 
    let num=1
    let num=2
    // Error, num is already defiend, because let/const is block scoped.

    var num1 = 10
    var num1 = 15
    console.log(num1) // 15, no errors.
```