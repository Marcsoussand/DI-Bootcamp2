//I will put my comments with ** starting in comments 

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne() // ** a will print 3
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// ** a will print 5
//#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// #2.1 - run in the console:
funcThree() // **  alert a = 0
funcTwo() // ** assigning a to 5
funcThree() // ** alert a = 5
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// ** 0 all the time */

//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

// ** alert "hello"

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix() // ** print "test"
// #4.2 What will happen if the variable is declared 
// with const instead of let ?  //* test

//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
//** 5 then 2 */
// #5.2 What will happen if the variable is declared 
// with const instead of let ? // same result


