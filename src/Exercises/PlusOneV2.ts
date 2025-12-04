function plusOneV2(digits: number[]): number[] {

     const size = digits.length;

     let index = size -1;

     let add = 1;

     for (let i = index; i > -1; i--) {
        let element:number | undefined = digits[i];
        let sum:number = element! + add;

        if(sum >9){

            digits[i]= 0;
            add = 1;
        }
        else{
            digits[i]=sum;
            add = 0;
        }
     }

     if(add ===1){
        digits.unshift(1);
     }

    return digits;
    

};

export default plusOneV2;