# split
    let string = 'hello'
    string.split('') => ['h','e','l','l','o'] because ('') always exist, can be split

    string.split('+') will be => ['hello'], because there is no to be split.

    ['hello'].sort() will just return ['hello'], because sort() sorts by each element, not the string itself.

# Comparing array:
```js
    console.log( ['a', 'e', 't' ] === [ 'a', 'e', 't' ]) // This would be false
    console.log( ['a', 'e', 't' ].join('')=== [ 'a', 'e', 't' ].join('')) // This would be true , 'aet'='aet' 

    
```

# bugs: (hash) 
hash[sortedString].push(stringsArray[i]')  // Error, hash[sortedString].push is not a function.
                                           // hash[sortedString] will need to be existed first, before you can push extra value to this key.