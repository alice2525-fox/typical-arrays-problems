exports.min = function min(array) {
    if (array && array.length > 0) {
        const min = Math.min.apply(null, array);
        return min;
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (array && array.length > 0) {
        const max = Math.max.apply(null, array);
        return max;
    } else {
        return 0;
    }
};

exports.avg = function avg(nums) {
    if (nums && nums.length > 0) {
        return nums.reduce((a, b) => a + b) / nums.length;
    } else {
        return 0;
    }
};
