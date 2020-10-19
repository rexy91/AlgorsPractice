// Chapter 4 bottom, 
// eloquentjavascript

let list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  };

let arrayToList = (arr) => {
    let tail = {}
    let temp = {}
    for (let i=arr.length-1; i>=0; i--){
        if(i == arr.length-1){
            tail = {value:arr[i], rest:null}
        }
        else {
            temp = {value: arr[i], rest:tail}
        }
    }

    return (temp)
}

let listToArray = (list) => {
    // Given a list, convert it to an array.
    // Loop thru the list, and push each list node data to the array.
    
    let arr = []
    while(list !==null){
        arr.push(list.value)
        list = list.rest // So head will move to the next?
    }
    return arr
}

