let grade = Number(prompt("enter your grade"));
//This is a prompt for teh students to key in their marks
console.log(typeof grade);
//This is to ensure that the marks are converted to a number for easy grading
if (grade>79){
    console.log("A");
    //If the marks are above 79, the student is allocated an A
} else if (grade=>60 && grade<=79){
    console.log("B");
    //If the student gets 60 to 79 points, they get assigned a B
} else if (grade=>50 && grade<=59){
    console.log("C");
    //If the student has 50 to 59 points, they receive a C
} else if (grade=>40 && grade<=49){
    console.log("D");
    //If a student gets 40 to 49 marks, they get a D
} else {
    console.log("E")
    //If a student keys in anything less than 40, they automatically receive gade E
}


