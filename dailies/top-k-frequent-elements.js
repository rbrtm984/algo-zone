/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // build an object w/ occurences of each element
    const frequencies = new Map();
    nums.forEach((el) => {
        if(!frequencies.has(el)){
            frequencies.set(el, 1)
        } else {
            let value = frequencies.get(el)
            value += 1
            frequencies.set(el, value)
        }
    })
    console.log('frequencies', frequencies);
    const freqArr = []
    // sort the values of the obj by size
    frequencies.forEach((value, key, map)=>{
        freqArr.push({
            el: key,
            freq: value
        })
    })
    console.log('freqArr', freqArr)
    function compareNums(a, b){
        if(b['freq'] > a['freq']){
            return 1
        } else if (b['freq'] < a['freq']) {
            return -1
        } else {
            return 0
        }
    }
    const sorted = freqArr.sort(compareNums);
    console.log('sorted', sorted);
    const result = [];
    for(let i = 0; i < k; i++){
        result.push(sorted[i]['el'])
    }
    return result;
};

