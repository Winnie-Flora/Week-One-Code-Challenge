//declaring the two key inputs in finding gross salary; basic salary and benefits
let basicSalary;
let benefits;

//initializing the gross salary function using the two key inputs
let grossSalary = (basicSalary, benefits)=>basicSalary + benefits;
grossSalary(basicSalary, benefits);

//the NSSF function that allows us to find the NSSF contribution of an individual
function NSSF(basicSalary){
    console.log(basicSalary * 0.06);
}
console.log(NSSF(basicSalary));

//Finding the NHIF deductions according to an individual's pay
function NHIF(grossSalary){
    if (grossSalary <= 5,999){
        console.log(150);
    } else if (grossSalary => 6000 && grossSalary <= 7999){
        console.log(300);
    } else if (grossSalary => 8000 && grossSalary <= 11999){
        console.log(400);
    } else if (grossSalary => 12000 && grossSalary <= 14999){
        console.log(500);
    } else if (grossSalary => 15000 && grossSalary <= 19999){
        console.log(600);
    } else if (grossSalary => 20000 && grossSalary <= 24999){
        console.log(750);
    } else if (grossSalary => 25000 && grossSalary <= 29999){
        console.log(850);
    } else if (grossSalary => 30000 && grossSalary <= 34999){
        console.log(900);
    } else if (grossSalary => 35000 && grossSalary <= 39999){
        console.log(950);
    } else if (grossSalary => 40000 && grossSalary <= 44999){
        console.log(1000);
    } else if (grossSalary => 45000 && grossSalary <= 49999){
        console.log(1100);
    } else if (grossSalary => 50000 && grossSalary <= 59999){
        console.log(1200);
    } else if (grossSalary => 60000 && grossSalary <= 69999){
        console.log(1300);
    } else if (grossSalary => 70000 && grossSalary <= 79999){
        console.log(1400);
    } else if (grossSalary => 80000 && grossSalary <= 89999){
        console.log(1500);
    } else if (grossSalary => 90000 && grossSalary <= 99999){
        console.log(1600);
    } else {
        console.log(1700);
    }
}
console.log(NHIF(grossSalary));


//Creating a function that will help us find taxable income
let taxableIncome=(grossSalary, NHIF, NSSF) => {
    console.log((grossSalary - (NHIF+NSSF)));
};
console.log(taxableIncome(grossSalary, NHIF, NSSF));

//If and else statement computing the exact amount of payee as per the individual's pay
function payee(taxableIncome){
    if (taxableIncome <= 288000){
        console.log(taxableIncome * 0.1);
    } else if (taxableIncome => 288001 && taxableIncome <= 388000){
        console.log(taxableIncome * 0.25);
    } else if (taxableIncome => 388001 && taxableIncome <= 6000000){
        console.log(taxableIncome * 0.3);
    } else if (taxableIncome => 6000001 && taxableIncome <= 9600000){
        console.log(taxableIncome * 0.325);
    } else {
        console.log(taxableIncome * 0.35);
    }
}
console.log ((payee(taxableIncome)));

//The expression for finding the net salary 
//Contains all the elements we determined above(NHIF,NSSF,payee, and gross salary)
let netSalary=(grossSalary, payee, NHIF, NSSF) => {
    console.log((grossSalary-(payee+NHIF+NSSF)));
};
console.log(netSalary(grossSalary, payee, NHIF, NSSF));

