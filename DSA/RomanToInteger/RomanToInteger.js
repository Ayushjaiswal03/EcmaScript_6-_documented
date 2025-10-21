console.log("RomanToInteger")

var romanToInt = function(s) {
    const romanMap = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    console.log(romanMap);

    let total = 0;
    
    for(let i = 0; i < s.length; i++) {
        const current = romanMap[s[i]]
        // console.log(current);
        const next = romanMap[s[i + 1]];
        // console.log(next);

        if(next > current) {
            total -= current;
        } else {
            total += current;
        }
    }
    return total;
};

console.log(romanToInt('MII'));