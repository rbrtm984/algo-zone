/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    // disqualify words of different lengths\
    if (word1.length !== word2.length) return false;
    // disqualify words if one has a unique letter the other doesn't
    let set1 = new Set(word1.split(''));
    console.log('set1', set1);
    let set2 = new Set(word2.split(''));
    console.log('set2', set2);
    // if the first word has a letter, the other word must have at least one different letter
    let uniquePresent1 = false;
    set1.forEach((value, key, set)=>{
        // console.log('value', value, 'set2 has value', set2.has(value))
        if(!set2.has(value)) uniquePresent1 = true;
    })
    if(uniquePresent1) return false;
    let uniquePresent2 = false
    set2.forEach((value, key, set)=>{
        // console.log('value', value, 'set1 has value', set1.has(value))
        if(!set1.has(value)) uniquePresent2 = true;
    })
    if(uniquePresent2) return false
    // the first operation can be handled by simply checking that each word has passed the first check
    if((set1.size + set2.size)%2!==0) return false
    let frequencies1 = new Map();
    

};