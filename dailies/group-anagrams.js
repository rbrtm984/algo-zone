/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // use a helper function to sort each string in the input
    // use map to store the outputs
    function compareFunction (leading, trailing) {
        console.log('leading', leading, 'trailing', trailing);

    }
    strs.sort(compareFunction);
};