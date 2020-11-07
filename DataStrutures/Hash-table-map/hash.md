- Built-in and implementing own hash tables.
- What is a hash table?
    - Hash table is used to store key-valued pairs.
    - They are like arrays, but the keys are not ordered.
    - They are faster than arrays: Finding values, adding new values, and removing values.

# Built-in: 
- Python : Dictionaries
    - Python has hash('hello') will has the string hello. 

- JavaScript has objects and maps
- Java has maps
- Ruby has Hashes

- Imagine if we want to store colors and their code, will more more reasonalble to do:
    pink: #000FF, than just using indexes with array.
    
Without using objects/map in javascript, impentplent own key/valued pairs.
But computer can't find index of 'pink', so we have to use hash table.

Implement hash table , will be using an array.

# Hash function: 
- Turns keys into hashes (indcies).
- In order to look up values by key, we need a way to convert keys into valid array indices.
- Hash function converts key into index, therefore we can look it up just like array.
- Hash function can also convert its index to the key.
- Example ['cyan', '#00ffff'] gets converted into [2] in the array, when you pass 2 will give you 'cyan', visd versa.

- What makes a good hash?
    - Fast, (constant time)
    - Computes different hash output (indices), at least evenly spread out.
    - Deterministic (same input yields same output)
    

- Hash's keys will be sorted by default if its nums as keys.
    Ex:
    let hash = {}
    hash['5'] = 1
    hash['3'] = 1

    hash = {
        '3': 1,
        '5': 1
    }

