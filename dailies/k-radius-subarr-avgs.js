/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    let prefix = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[prefix.length - 1])
    }
    // console.log('prefix', prefix);
    let result = []
    for(let i = 0; i < nums.length; i++) {
        if(i < k){
            result.push(-1);
        } else if (i + k > nums.length - 1){
            result.push(-1);
        } else {
            // console.log('i', i)
            // logic to calc avg
            let upper = prefix[i+k]
            // console.log('upper', upper)
            let lower
            if(i - k - 1 < 0){
                lower = 0
            } else {
                lower = prefix[i-k-1]
            }
            // console.log('lower', lower)
            let sum = upper - lower
            // console.log('sum', sum)
            let avg = sum / ((k * 2) + 1)
            // console.log('avg', avg)
            result.push(Math.floor(avg))
        }
    }
    // console.log('result', result)
    return result
};