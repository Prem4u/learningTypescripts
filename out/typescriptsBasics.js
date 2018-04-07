"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
*Typescripts has following primitive types:
*1.number
*2.boolean
*3.string
*4.array
*5.tuple
*6.enum
*7.any
*8.undefined/null
*9.never
*10.void
*
*/
function basicTypes() {
    //initialize a boolean
    var isDone = true;
    //string
    var myFirstString;
    myFirstString = "this value is " + isDone;
    //number
    var x = 80; //type inference by typescripts compiler 
    var num = 5;
    var binary = 2;
    var hex = 0xf00d;
    var oct = 484;
    //x='hello world'//will be an error -> same for other type too
    var theDayOfWeek;
    (function (theDayOfWeek) {
        theDayOfWeek[theDayOfWeek["MONDAY"] = 1] = "MONDAY";
        theDayOfWeek[theDayOfWeek["TUESDAY"] = 2] = "TUESDAY";
        theDayOfWeek[theDayOfWeek["WEDNESDAY"] = 3] = "WEDNESDAY";
        theDayOfWeek[theDayOfWeek["THURSDAY"] = 4] = "THURSDAY";
        theDayOfWeek[theDayOfWeek["FRIDAY"] = 5] = "FRIDAY";
        theDayOfWeek[theDayOfWeek["SATURDAY"] = 6] = "SATURDAY";
        theDayOfWeek[theDayOfWeek["SUNDAY"] = 7] = "SUNDAY";
    })(theDayOfWeek || (theDayOfWeek = {}));
    ;
    var day = theDayOfWeek[1];
    console.log("enum by value " + theDayOfWeek.MONDAY);
    console.log("enum by key " + day);
    //tuple
    var tuple;
    tuple = ['hello', 45];
    //array
    var arr = [1, 2, 3];
    var arrAnother = ['this', 'that'];
    //any
    var notsure = [3, 'hello'];
    var notSure = 78;
    notSure = 'myName';
    //never -> type of value that never occur 
    //it is subtype of and assignable to every type but no type is subtype or assignable to never not even
    //any
}
exports.basicTypes = basicTypes;
function infinteLoop() {
    while (true) {
        ;
    }
}
exports.infinteLoop = infinteLoop;
function throwError() {
    throw new Error("Error Occured !!");
}
exports.throwError = throwError;
