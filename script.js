function getOtosLotteryNumbers(){
    const NUMBER_COUNT = 5;
    const numbers = [];

    while(numbers.length < NUMBER_COUNT){
        const randInt = Math.floor(Math.random(1,90) * 100)

        if(!numbers.includes(randInt)){
            numbers.push(randInt)
        }
    }
    
    return numbers;
}

console.log("getOtosLotteryNumbers", getOtosLotteryNumbers());

function getSortedLotteryNumbers(numbers){
    numbers.sort();

    return numbers;
}

console.log("getSortedLotteryNumbers", getSortedLotteryNumbers(getOtosLotteryNumbers()));

function getNumberOfHits(numbers,tips){
    let hits = 0;
    tips.forEach(tip => {
        if(numbers.includes(tip)){
            hits++
        }
    });

    return hits;
}

console.log("getNumberOfHits",getNumberOfHits(/* [10,52,36,42,1], [10,43,1,55,62] */getOtosLotteryNumbers(),getOtosLotteryNumbers()));

function getMonthlyLotteryArrayNumbers(){

    const NUMBER_OF_WEEKS = 4;
    const lotteryNumbers = [];

    for(let i = 0; i < NUMBER_OF_WEEKS; i++){
        lotteryNumbers.push(getOtosLotteryNumbers())
    }

    return lotteryNumbers;
}

console.log("getMonthlyLotteryArrayNumbers", getMonthlyLotteryArrayNumbers())

function getMonthlyLotteryArrayNumbers2(monthNumbers){
    let out = "";
    monthNumbers.forEach((week)=> {
        week.forEach((number)=> {
            if(!out.includes(number)){
                out = out.concat(week);
            }
        })
    })

    return out;
}
console.log("getMonthlyLotteryArrayNumbers2", getMonthlyLotteryArrayNumbers2(getMonthlyLotteryArrayNumbers()))

function monthlyStatistics(monthNumbers){
    const stat=[];

    monthNumbers.forEach((week)=> {
        week.forEach((number)=> {
            
            if(stat.length){
                let bool = false;
                stat.forEach((arr)=> {
                    if(arr[0] == number){
                        bool=true;
                        arr[1]++;
                    }
                })
                if(!bool){
                    stat.push([number,1])
                }
            } else {
                stat.push([number,1])
            }
        })
    })

    return stat;
}

console.log("monthlyStatistics",monthlyStatistics(getMonthlyLotteryArrayNumbers()));