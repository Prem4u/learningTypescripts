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
export function basicTypes():void{
//initialize a boolean
let isDone:boolean=true;
//string
let myFirstString:string;
myFirstString=`this value is ${isDone}`;
//number
let x=80;//type inference by typescripts compiler 
let num:number=5;
let binary:number=0b010;
let hex:number=0xf00d;
let oct:number=0o744;

//x='hello world'//will be an error -> same for other type too
 enum theDayOfWeek {MONDAY=1,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY,SATURDAY,SUNDAY};
 
 let day:string=theDayOfWeek[1];
 
 console.log(`enum by value ${theDayOfWeek.MONDAY}`);
 console.log(`enum by key ${day}`);
//tuple
 let tuple:[string,number];
 tuple=['hello',45];
 //array
 let arr:number[]=[1,2,3];
 let arrAnother:Array<String>=['this','that'];
 
 //any
 let notsure:any[]=[3,'hello'];
 let notSure:any=78;
 notSure='myName';
 
 //never -> type of value that never occur 
 //it is subtype of and assignable to every type but no type is subtype or assignable to never not even
 //any
 
 
}
export function infinteLoop():never{
    while(true){
        ;
    }
}
export function throwError():never{
    throw new Error("Error Occured !!")
}







