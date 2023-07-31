const sumAll = function(begin, end) {
    let sum = 0;

    if((typeof begin != 'number' || typeof end != 'number') || (begin < 0 || end < 0))
        return 'ERROR';

    if(end < begin)
        [begin, end] = [end, begin]

    let i = begin + 1;
    while(i != end) {
        sum += i;
        i++;
    }

    return begin + sum + end;
};

// Do not edit below this line
module.exports = sumAll;
