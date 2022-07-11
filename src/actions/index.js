export const incNumber=(num)=>{
    return {
        type: "INCREASE",
        payload: num
    }
}

export const decNumber=(numDec)=>{
    return {
        type: "DECREASE",
        payload:numDec
    }
} 