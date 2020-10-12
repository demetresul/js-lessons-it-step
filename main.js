// martkutxa samkutxedi hipotenuza marjvniv

// var iterationCount = 15;
// var index = 0;

// while (index < iterationCount) {
//     var star = "*"
//     var jindex = 0;
//     while (jindex < index) {
//         star += "*";
//         jindex++;
//     }
//     index++;
//     console.log(star)
// }




// amotrialebuli samkutxedi




// var index = 10;
// var iterationCount = 0;

// while (index >= 0) {
//     var star = "*";
//     var jindex = 0;
//     while (index > jindex) {
//         star += "*";
//         jindex++;
//     }
//     index--;
//     console.log(star)
// }




// martkutxa samkutxedi hipotenuza marcxniv



// var index = 12;

// while (index > 0) {
//     var space = " ";
//     var jindex = 0;
//     while (jindex < index) {
//         space += " ";
//         jindex++;
//     }
//     var zindex = 0;
//     while (zindex <= 12 - index) {
//         zindex++;
//         space += "*";
//     }
//     index--;
//     console.log(space);
// }


// var start = Number(prompt("enter start"));
// var end = Number(prompt("enter end"));
// var jeradi = Number(prompt("sheiyvane jeradi"));

// if (start <= end) {
//     while (start <= end) {

//         if (start % jeradi == 0) {
//             console.log(start);
//         }
//         start++;
//     }
// }
// else {
//     console.log("error")
// }

// momxmareblis mier sheyvanil ciframde kenti cifrebi

// var userNum = Number(prompt("enter number"));

// for(i=0 ; i<userNum;i++){
//     if(i%2 !== 0){
//         console.log(i);
//     }
// }


// momxmarelis mier shemoyvanili  ricxvebis raodenoba 5 is jeradi random 


// var userNum = Number(prompt("enter number"));

// for (var i = 0; i < userNum; i++) {
//     var rand = Math.round(Math.random() * 100)
//     if (rand % 5 == 0) {
//         console.log(rand)
//     }

// }


// var userNum = Number(prompt("enter number"));

// for (var i = 0; i < userNum; i++) {

//     if (userNum % i == 0) {
//         console.log(i)
//     }
// }



// var userNum = Number(prompt("enter number 500 -1000"));



// if (userNum > 500 && userNum < 1000) {
//     for (var i = 0; i < 100; i++) {
//         var rand = Math.round(Math.random() * 100)
//         if (userNum % rand == 0) {
//             console.log(rand)
//         }
//     }
// }
// else {
//     console.log("error");
// }



// var userNum = Number(prompt("enter number"));
// var counter = 0;
// for (var i = 0; i < userNum; i++) {
//     if (userNum % i == 0) {
//         counter++;
//     }
// }
// console.log(counter);