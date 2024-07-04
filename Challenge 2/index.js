let speed=Number(prompt("enter speed here"))
//declaring speed as our input variable
function speedLimit(speed){
    if (speed === 70){
        console.log("OK!");
        //when speed is 70, then the driver will receive an okay
    } else if (speed === 75){
        console.log("2 points");
        //when the speed is 75, it is above the limit by 5km/h, so the driver will receive 2 demerit points
    } else if (speed === 80){
        console.log("4 points");
        //since they increased their speed with 5km/h more the points add up to 4 demerits and so on
    } else if (speed === 85){
        console.log("6 points");
    } else if (speed === 90){
        console.log("8 points");
    } else if (speed === 95){
        console.log("10 points");
    } else if (speed === 100){
        console.log("12 points");
    } else {
       console.log("License suspended."); 
       //but when the speed is above 100 km/h the driver receives a license suspension
    }
}
console.log(speedLimit(speed));


