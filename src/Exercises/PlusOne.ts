function plusOne(digits: number[]): number[] {
    let sum: number = 0;

    let i = 0;
    let e = digits.length - 1;

    while (i < digits.length) {
        let aux: number = digits[i]!;
        sum = sum + aux * Math.pow(10, e);
        i++;
        e--;
    }
    let totalsum = sum + 1;
    
    //console.log(" sum is     " +sum)
    //console.log("totalsum is "+totalsum)

    let inverse: number[] = getArrayInverse(totalsum);

    let res: number[] = inverse.reverse();

    console.log("the answer is :");
    console.log(res);
    return res;
}

const getArrayInverse = (num: number): number[] => {
    let inverse: number[] = [];
    let i = 0;
    while (num > 0) {
        let aux1 = Math.floor(num % 10);
        inverse[i] = aux1;
        num = Math.floor(num / 10);
        i++;
    }
    console.log(inverse);
    return inverse;
};

export default plusOne;
