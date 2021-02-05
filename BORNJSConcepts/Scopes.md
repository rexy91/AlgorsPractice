- Function always have access to outter scope variables.(With either keyword let,const,var)
- Outer scope doesn't have access to inner function variables, unless it's declared with var keyword.(global)

```js
    let variable = 10
    let function1 = function(){
        console.log(variable)
    }
    function1() // output will be 10 !

```

- When a variable is declared inside a function without any keyword var,const,let, it becomes global, can be accessed outside the function. Once the function has been invoked.

```js
    (function test(){
        number = 1
    })();

    console.log(number) // 1 , because number is declared without keyword, becomes global.

    // But if we do :
    (function test(){
        var number = 1 // Either var,let or const 
    })();

    console.log(number) //Undefined, it was declared inside the function, so its function scope, cannot access in global scope. 

```

