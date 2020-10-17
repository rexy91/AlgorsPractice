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