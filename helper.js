function queryNumsToArray(queryNums) {
    let nums = [];

    for (let i = 0; i < queryNums.length; i++) {
        let newNum = Number(queryNums[i]);

        if (isNaN(newNum)) return new Error(`${queryNums[i]} is not a number`)

        nums.push(newNum);
    }

    return nums;
}

function findMean(nums) {
    if(nums.length === 0) return 0;
    return (nums.reduce((a, b) => a + b)) / nums.length;
}

function findMode(nums) {

    let counts = {};
    nums.forEach(function (e) {
        if(counts[e] === undefined) {
            counts[e] = 0;
        }
        counts[e] += 1;
    });
    console.log(counts);
    let count = 0;
    let mode;
    for (let key in counts) {
        if (counts[key] > count) {
            mode = key;
            count = counts[key];
        }
    }

    return Number(mode);
}

function findMedian(nums) {

    nums.sort((a, b) => a - b);

    let middleIndex = Math.floor(nums.length / 2);
    let median;
  
    if (nums.length % 2 === 0) {
      median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
    } else {
      median = nums[middleIndex];
    }
    return median
}

module.exports = {
    queryNumsToArray, findMean, findMode, findMedian
}