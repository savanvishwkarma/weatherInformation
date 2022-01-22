
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

// Objec wise access temprature

const temprature = {
    summerTemp : "40c",
    winterTemp : "18c",
    rainyTemp : "27c"

}






console.log("For summber tempreture press 1 ");
console.log("For winter tempreture press 2 ");
console.log("For rainy tempreture press 3 ");



readline.question(`Please select one option - `, choise => {


    if (choise == 1) {
        console.log("This is the temrature of summer - ", temprature.summerTemp);
    }
    else if (choise == 2) {
        console.log("This is the temrature of winter - ", temprature.winterTemp);

    }
    else if (choise == 3) {
        console.log("This is the temrature of rainy - ", temprature.rainyTemp);

    }
    else {
        console.log("You have selected a wrong option!")

    }
    readline.close()
})





