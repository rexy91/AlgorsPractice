```js

1.  
(function (){
    var a = b = 3;
}());

console.log('a defined?' + (typeof a !== 'undefined'))
console.log('a defined?' + (typeof b !== 'undefined'))

//Output will be : 'a defined?' false,  'b deffined ?' true 

Because var a = b = 3 is shorthanded for:
    b = 3
    var a = b 
    // Because b was declared without pre var keyword, so it is global, when you access it outside the function it is still defined.
    // a is not global, it is function scoped inside the function only.

2. 
// What will be the outputs: 
var myObject = {
    foo: 'bar',
    func: function(){
        // Here this => myObject, because inside myObject, this is the object.
        // Assign myObject to self, so now self is also myObject.

    var self = this;
    console.log('outer func: this.foo = ' + this.foo); // This is invoked by myObjet, this => myObject, this.foo =>'bar'
    console.log('outer func: self.foo = ' + self.foo); // Self was assigned to myObject, so self.foo => 'bar'
    
        (function(){
            // This function invokde itself (baseless function), so this => global object. 
            // So this.foo will be undefined. 
            console.log('inner func: this.foo = ' + this.foo)


            // But self was declared inside this func, because of closure, here has access to it.
            // So self is still myObject, self.foo => 'bar'
            console.log('inner func: this.foo = ' + self.foo)
        }());
    }
}

myObject.func();

// output will be 
// outer func: this.foo = bar
// outer func: self.foo = bar
// inner func: this.foo = undefined

Because: 
```


2. References/scope/copies
```js
    // 1.
    let arr = [1,2]
    function test(array){
        array.push(3)
    }
    test(arr)
    console.log(arr) // This will be [1,2,3]
    // Because we pass in arr by reference, so after pushing into the array, the reference gets updated, regardless of scope.

    // 2.
    let arr = [1,2]
    function test(array){
        array.push(3)
    }
    test([...arr])
    console.log(arr) // This will be [1,2]

    // Because we pass in [...array], by this we are passing in a new refenrce, so we are only pushing to [...array] copy, hence the original arr is not modified. 
    // [...arr] becomes [1,2,3], but arr is still [1,2]

    // 3. 
    let arr = [1,2]
    function test(array){
        array = [1,2,3]
    }
    test(arr)
    console.log(arr) // This will be [1,2]

    // Because a = operator creates a new reference in memory, hence inside the function we created a new reference to store [1,2,3]
    // But it doesnt affect the original arr in global scope, so it doesnt change. still [1,2]

    //If we do  
        arr = [1,2,3] // Inside the function, then arr will be updated. 



3.  var a = 1
    function foo(){
        var a = 2
    console.log(a)
    }
    foo()
    console.log(a)

    // Output: 2, 1 
    // Beacause when var is redeclared inside the fuction, its function scope, so inside the function a will be 2.
    // But the global var a will still be 1 .

    // The var inside the function is saved in local memory. 
    // THe var outside the function is saved in global memory.

4.  function foo(){
    a = 2 
    }
    foo()
    console.log(a)

    // Output: 2 
    // Because when variable is delcared without any keyword var,let,const, it becomes global varibale. So can be accessed outside the function. 

5.  function outerFunc(outerParam){
        function innerFunc(innerParam){
            outerParam['b'] = innerParam;
        }
        return innerFunc
    }

    const obj = {a:1}
    const example = outerFunc(obj) // Calls outerFunc(outerParam), need to pass param to call. Returns the innerFunc definiation to example.
    const answer = example(2)  // Now we are calling the innerFunc def by passing 2 as innerParam
    console.log(obj) 

    // Output: {a:1, b:2} 
    // Because obj with = operator is copy by reference, referencing to the orignal object, we whenever either obj is changed or updated,
    // Both will get updated, so final obj will be {a:1, b:2}, after we adding outerParam 'b' key with value innerParam 2 .
    
```


