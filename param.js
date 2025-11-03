// function MakeCoffee(typeOfMilk){}
// const MakeCoffee = typeOfMilk => {}
// const MaleCoffee = function(typeOfMilk){}
// // All these are same.

// function MakeCoffee(typeOfMilk){
//     console.log("what is number1?", typeOfMilk);
    
// }

// MakeCoffee("Oat Milk");
// MakeCoffee("Regular");
// MakeCoffee("Soy");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function StartWaterApp(){
    console.log("start water app===========");
    
    // for testing purpose, because in the future, the user will write their water level in an interface
    let waterLevel = 15;

    readline.question('what do you want to do?', input=>{
        if(input === "stats"){
            RevieWaterLevel(waterLevel);

        }

        if(input === "drink"){
            waterLevel = DrinkWater(waterLevel);
        }

        if(input === "lose"){
            waterLevel = LoseWater(waterLevel);
        }        

        StartWaterApp();
    })

    // RevieWaterLevel(waterLevel);
    // waterLevel = LoseWater(waterLevel);

    // RevieWaterLevel(waterLevel);
    // waterLevel = DrinkWater(waterLevel);
    // RevieWaterLevel(waterLevel);

    // console.log("what is waterLevel", waterLevel);
    
}

StartWaterApp();

function RevieWaterLevel(level){

    if(level > 5){
        console.log("you drank enough water!");
    }

    if(level <= 5){
        console.log("you need to drink more!");
    }
    
}

function LoseWater(level){

    // Know what current water level os
    // subtract it by 2
    // return it back to which every code is calling the fuction
    let newWaterLevel = level - 2;
    return newWaterLevel;
}

function DrinkWater(level){

    let newWaterLevel = level + 3;
    return newWaterLevel;

}