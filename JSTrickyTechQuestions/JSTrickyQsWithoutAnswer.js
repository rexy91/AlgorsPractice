// 1.  
(function (){
    var a = b = 3;
}());

console.log('a defined?' + (typeof a !== 'undefined'))
console.log('a defined?' + (typeof b !== 'undefined'))


// 2. 

var myObject = {
    foo: 'bar',
    func: function(){
    var self = this;
    console.log('outer func: this.foo = ' + this.foo); 
    console.log('outer func: self.foo = ' + self.foo); 
    
        (function(){
            console.log('inner func: this.foo = ' + this.foo)
            console.log('inner func: this.foo = ' + self.foo)
        }());
    }
}

myObject.func();