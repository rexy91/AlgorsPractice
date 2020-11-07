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


# When creating instance/object, order of parameters matter.
    - But order of parames inside function pass don't matter, if you do logic to the parameters inside the function.


# Hahs-map:
    To loop thru the keys:
    let hash = {}
    for (item in hash) => will iterate thru the keys

    Or:
    Object.keys(hash)
    for (item in keys) => works too;

-  if(hash[array[i]] => this doesn't return boolean, it returns undefined or ! undefined.


# Modifying string vs array
- let array = [1]
  array[0] = 2
  Now array = [2] , this modify the array.

- let string = 'apple'
  string.replace('a','z') returns => 'zpple', but we need to store this returned string.
  Now string is still 'apple'

  string = string.replace('a','z') => Now string is 'zpple' !! 