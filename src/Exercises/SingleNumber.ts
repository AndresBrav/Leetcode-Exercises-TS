function singleNumber(nums: number[]): number {

    let positions = [];
    let size = nums.length;
    let result: number = 0;
    // fill the array positions
    for (let index = 0; index < nums.length; index++) {
        positions.push(0);
    }

   
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i]!;
        let count: number = VerifyArray(nums,positions,element)
        positions[i] = count;
    }

    for (let i = 0; i < positions.length; i++) {
        if(positions[i] === 1){
            result = nums[i]!;
        }
    }

    return result;
};

const VerifyArray = (nums:number[],positions:number[],element:number):number => {

    let counter: number = 0;
    for (let i = 0; i < nums.length; i++) {
        if(element === nums[i]){
            counter ++;
        }
        
    }
    return counter;
    
    
    
}

export default singleNumber;