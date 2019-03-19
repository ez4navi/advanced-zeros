module.exports = function getZerosCount(number, base) {
    let arr = [], counter={}, newArr = [];
    for (let i = 2; i <= base; i++) {
        while (base % i === 0 && base > 1) {
            arr.push(i);
            base /= i;
        }
        if (base / i === 1) {
            arr.push(base);
        }
    }
    arr.forEach(function (a) {
        if (counter[a] != undefined) {
            ++counter[a];
        } else {
            counter[a] = 1;
        }
    });
    for (let key in counter) {
        let result = 0, temp = number;
        while (Math.floor(temp / +key) > 0) {
            result += Math.floor(temp / +key);
            temp = Math.floor(temp / +key);
            Math.pow(+key,2);
        }
        if (counter[key] > 1 ) {
            newArr.push(Math.floor(result/counter[key]));
        } else {
            newArr.push(result);
        }
    }
    return (Math.min.apply(null ,newArr));
}