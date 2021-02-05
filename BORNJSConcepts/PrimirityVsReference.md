- Primitive Types:
    // Copying primitive types with = operator are real copies, not just referencing, it creates a new reference (new memory).

    // Copying reference types (object,array) with = operator are just referecing.
    // Copying reference types with ... operator will be shallow copy, not just referencing, but real copies, create another place in memory, therefore changing one doesn't affter the other one.

    Number
    Boolean
    String
    Null
    Ubdefined
    Symbol

    Primitive types are copied by value, only the content!
    * Reference types(objects,array,plain objects) are compared by location in memory, so either == or === will return false. Even same content.

- when testing equality, primnitive types are compared by their value, while objects are compared by their referrence.
    Javascript checks if the objects have a reference to the same location memory.
    But when two objects are created, even if they are the same content, its different location in memory.
```js
    console.log({name:'john'} == {name:'john'}) , not the same, its not comparing content but location.
    console.log({name:'john'} === {name:'john'}), also not the same, different location, even same content. 


    The reason for this is that internally JavaScript actually has two different approaches for testing equality. Primitives like strings and numbers are compared by their value, while objects like arrays, dates, and plain objects are compared by their reference. That comparison by reference basically checks to see if the objects given refer to the same location in memory. Here is an example of how that works.

    //But this will work:
    let person = {
        name:'john',
        age:21
    }
    let person2 = {
        name:'yuho',
        age:21
    }

    let person3 = person 
    console.log(person3 = person) // true, because reference types are copy by refernce, so person3 is pointing to the same location as person 1.

    console.log(person ==  person2) // false
```

```js
    // Primitive Copies: 

    let name = 'John'
    let secondName = name  // This will hold John, but only the content gets copied.
                           // Now both name and secondName has content John, but different place in memory.
    
    name = 'Max' // Now name will hold Max content.

    console.log(secondName) // This will still be John, even name gets updated. But secondName in memory is holding the content of 'John'.

```

- Reference Values:
    Object
    Array

```js
    // Referece values copies:
    let person = {
        age: 28,
        name:'John'
    }

    let secondPerson = person // Now this is age:28, name:'John'

    person.name = 'Max' 

    console.log(secondPerson) // Now this will be age:28, name:'Max'. 

    secondPerson.name = 'Yuho'

    console.log(person.name) // This will also be 'Yuho', because the refernce gets updated. 

    // Because secondPerson is a refernce to the object person, not a copy in memory. So when making changes to either one, 
    // Both object will gets updated.

```

- Another example of reference values copies:
# Spread Operator:
    - Spread operator is not referencing to the original object/array, therefore we are not mutiating state in React.
    - Because when we use ... operator, we are not pointing to the old address in memory.
    - If we just do state = state.push(something), we are mutating the original state. 

```js
    let array1 = ['1','2','3']
    let array2 = array1 
    console.log(array2) // ['1','2','3']

    array1[0] = '5'
    console.log(array1) //['5','2','3']
    console.log(array2) //['5','2','3'] 
    // When we are making copies with '=', we are only referencing, so when either one gets udpated, the original referrance gets updated.
    // Both will get updated.

    // BUT with spread operator, we are not referencing, we are making an actual copy in memory. Pointing to two locations like primirities copies. 
    // Spread operator makes a shallow copy, (changing original object/array doesn't affact the other one.)

    let array1 = ['1','2','3']
    let array2 = [...array1]

    // Now we made a shallow copy, we are not just referncing the array2 to array1, but we also create another place in memory for array2.
    // So when we make changes to array2 it doens't affact array1, vise versa.

    array2[0] = '10'
    console.log(array2) = ['10','2','3']
    console.log(array1) = ['1','2','3']

```

- Objects have different places in memory even if they look exactly the same, but == and === will return false.
- Primirity types are the oppsite.

```js
    let person = {name:'john'}
    console.log(person == {name:'john'}) // false, even content is the same.
    console.log(person === {name:'john'}) // false, because location in memory is different.

    let number = 1 
    console.log(number == 1) //true, both content is 1 
    console.log(number === 1) // true

    console.log({name:'john'} == {name:'john'}) // false
    console.log({name:'john'} === {name:'john'}) // false


    // Tricky questions:
    function greeting(person){
        // If person == {name:'john'} is true, return hey john otherwise hey mia

        return person == {name:'john'} ? ‘Hey john!’ : ‘Hey Mia’ 
    }

    greeting({name:'john'}) // will return 'hey mia', because objects have different locations in memory.
```

