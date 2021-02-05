/*
input: 'programming'
output: g:2
        r:2
        m:2
*/


let printDuplicatesWithOccurances = (string) => {
        let hash = {}
        for (let char of string){
            if(hash[char] !== undefined){
                hash[char] += 1
            }
            else{
                hash[char] =1
            }
        }

        // Now hash have every letter with occurance, delete the one with 1 orruance(non repeated)
        for(let key in hash){
            if(hash[key] === 1){
                delete hash[key]
            }
        }

        // now just return the hash, it will only contain char/occ more than 2 times.

        return hash 
}
console.log(printDuplicatesWithOccurances('programming'))