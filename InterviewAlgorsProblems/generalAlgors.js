// 1. Find greatest divisor of two numbers:
// findGreatest(5,10) => 5 

// Solution1:

let findDivisor1 = (a,b) => {
    let largerNum
    let greatestDivisor
    if(a>b) largerNum = a
    else largerNum = b

    for (let i=1; i<=largerNum; i++){
            if(a%i === 0 && b%i === 0){
                    greatestDivisor = i
            }
    }
    return greatestDivisor
}

console.log(findDivisor1(100,10))