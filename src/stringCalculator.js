function add(numbers){
    console.log(numbers)
    if(!numbers){
        return 0
    }
    let delimiters = /[;,%*:\s|+\\]/;
    let numArray = numbers.split(delimiters);
    let finalNumArray = numArray.map(num=> parseInt(num)).filter(num => !isNaN(num) && num < 1000)
    const negativeNumbers = numArray.filter(num => num<0);
    if(negativeNumbers.length){
        throw new Error(`Negative numbers are not allowed: ${negativeNumbers.join(",")}`);
    }
    let sum = 0;
    for(num of finalNumArray){
        sum = sum+num;
    }
    console.log(sum)
    return sum;
}

    let numbers = '\\\n,2;+|+\n4;8'
    add(numbers)

    module.exports = {add}
