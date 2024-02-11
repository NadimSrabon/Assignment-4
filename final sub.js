function calculateMoney(ticketSale) {

    if(typeof ticketSale !== 'number' || ticketSale < 0){

        return 'Invalid Number'
        
    }

    let gainMoney = ticketSale*120;

    let daroan = 500;

    let staffLunch = 50*8;

    let totalCost = daroan + staffLunch;

    let profitOrloss = gainMoney - totalCost;

    return profitOrloss
}






function checkName(name) {

    if (typeof name !== 'string') {

        return 'invalid'

    }

    if (name.charAt(name.length - 1) === 'A' || name.charAt(name.length - 1) === 'y' || name.charAt(name.length - 1) === 'i' || name.charAt(name.length - 1) === 'e' || name.charAt(name.length - 1) === 'o' || name.charAt(name.length - 1) === 'u' || name.charAt(name.length - 1) === 'w' || name.charAt(name.length - 1) === 'A' || name.charAt(name.length - 1) === 'Y' || name.charAt(name.length - 1) === 'I' || name.charAt(name.length - 1) === 'E' || name.charAt(name.length - 1) === 'O' || name.charAt(name.length - 1) === 'U' || name.charAt(name.length - 1) === 'W') {

        return 'Good Name'

    }
    return 'Bad Name'

}






function deleteInvalids(array) {
    
    if (!Array.isArray(array)) {
        return "Invalid Array";
      }

    let correctArray = array.filter(value => !isNaN(value));
     
    let arr = [];
 
    for(let i = 0; i<correctArray.length; i++){
        if(typeof correctArray[i] === 'number'){

            arr.push(correctArray[i]);

        }
    }
    return arr
}







function password(obj) {

    if (typeof obj.name === 'undefined' || typeof obj.birthYear === 'undefined' || typeof obj.siteName === 'undefined' || obj.birthYear.toString().length !== 4){

        return 'invalid'

    }
    else{
        let firstWrd = obj.siteName.charAt(0);

        let firstWrdUpper = firstWrd.toUpperCase();

        let remains = obj.siteName.slice(1);

        let realWord = firstWrdUpper + remains;

        let realName = obj.name;

        let realYear = obj.birthYear;

        return `${realWord}#${realName}@${realYear}`
    }
}








function monthlySavings(arr , livingCost) {

    if(!Array.isArray(arr) || typeof livingCost !== 'number'){

        return 'invalid input'

    }
    let afterTax = 0;
    let totalIncome = 0;
    let savings = 0;
    let totalCost = 0;
    let finalIncome = 0;
    
    for(let i = 0; i<arr.length;i++){

        if(arr[i] < 3000){

            totalIncome = totalIncome+arr[i]
        
        }
        else{

            afterTax =  arr[i] - arr[i]*20/100;
           }
        }
    
    finalIncome = totalIncome+afterTax;
    savings = finalIncome-livingCost;

    if(savings < 0){

        return 'earn more'

    }
    return savings

}
