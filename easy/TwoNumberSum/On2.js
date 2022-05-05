function SumTwoNumber(arr,m){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            //console.log( i,j,` , ${arr[i]} + ${arr[j]} = ${(arr[i]+arr[j])}`)
            if(i==j){/*skip*/}
            else if(m == ( arr[i]+arr[j] ) ){
                return `Two Number Are : ${arr[i]} and ${arr[j]}`
            }
        }
    }
}

console.log(SumTwoNumber([-1,6,-5,2,7,3,14,9,5],10))