// const fs = require('fs');

// fs.writeFileSync('myfile.txt','Hello World');


// function greet(){
//     console.log("Hello from Node!");
// }
// greet();


// module.exports = function greet(){
//       console.log("Hello from Node!"); 
// }
// console.log(module);
// module.exports();


// const sec = require('./second')
// sec();


// const sec = require('./second')
// sec.greet();
// sec.sayhi();







// const sec =require('./second')
// console.table(sec)





// const sec = require('./second')
// // console.table(sec)
// sec.greet()









// const sec = require('./second')
// console.table(sec)
//  sec.welcome()










// const sec = require('./second')
// console.log(sec.person.fullName)













// import {greet} from './second.mjs';







//  const fs = require('fs');

//  fs.writeFileSync('myfile.txt','Hello World');
//  fs.appendFileSync('myfile.txt','Hello');
//  var a=fs.readFileSync('myfile.txt', 'utf-8')
//  console.log(a);





// let string=''
// k=1;
// for(i =0;i<10 ;i++)
// // console.log('\n')
// {   
// //     console.log("Testing")
//     for (j=0;j<=i;j++){
        
//        string+=k;
//        string+=' '
//     }
//     console.log(string)
//     string+="\n"
//     k+=2
      
// string=''
// }





// let k = 1;
// let string = '';
// for (let i = 1; i <= 10; i++) {
// for (let j = 1; j <=i; j++) {
// string = string + k;
// string = string + " ";
// }
// string = string +"\n";
// k=k+2;
// }
// console.log(string)




// let k = 0;
// let string = '';
// for (let i = 1; i <= 10; i++) {
// for (let j = 1; j <=i; j++) {
// string = string + k;
// string = string + " ";
// }
// string = string +"\n";
// k=k+1;
// }
// console.log(string)









// pal = 'malayalam';

// function palindrome(str){
//     return str.split('').reverse().join('')
// }

// a=palindrome(pal)

// if(pal==a){
//     console.log("It is a palindrome")
// }
// else
// console.log('Not a palindrome')





// const fs = require('fs');

// var nikhil = {
//     fullName: 'Nikhil G',
//     age: 22,
//     phone: [21345, 12345]
// }
// var string = JSON.stringify(nikhil);
// // fs.writeSync('data.json',string);
// // console.log(string);
// fs.writeFileSync("data-async.json", string, ()=>{
//     console.log("ASYNC File saved successfully.")
// });
// console.log("completed")


// const fs = require('fs');
// // var content = fs.readFileSync("data.json");
// // console.log(data)
// fs.readFile('data.json', (err,data) =>{
//     console.log(data)
// });







//to print star in reverse order
// let n = 10;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }




// Bubble sort Implementation using Javascript
 // Creating the bblSort function
// function bblSort(arr){
    
//   for(var i = 0; i < arr.length; i++){
     
//     // Last i elements are already in place 
//     for(var j = 0; j < ( arr.length - i -1 ); j++){
       
//       // Checking if the item at present iteration
//       // is greater than the next iteration
//       if(arr[j] > arr[j+1]){
         
//         // If the condition is true then swap them
//         var temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j+1] = temp
//       }
//     }
//   }
//   // Print the sorted array
//   console.log(arr);
//  }
  
  
//  // This is our unsorted array
//  var arr = [234, 43, 55, 63,  5, 6, 235, 547];
  
  
//  // Now pass this array to the bblSort() function
//  bblSort(arr);


//printing star in reverse
// for (let i=1;i<=10;i++){
//     for (let j=1;j<=i;j++)
//     {
//          process.stdout.write(j+'')
    
// }
// process.stdout.write('\n')
// }




// L shape star pattern
// for(i=0;i<=5;i++){
//     console.log("*")
// }
// for(i=0;i<6;i++){
//     process.stdout.write("* ")
// }



// L shape star pattern
// console.log("*");
// console.log("*");
// console.log("*");
// console.log("*");
// console.log("* * * * * * ");



// pattern printing
// for(i=0;i<5;i++){
//     if(i==0||i==4){
//         console.log('*************')
//     }
//     else{
//         console.log('*           *')
//     }
// }



// pattern printing
// var height =8;
// var width =50;
// for(let i=1;i<=height;i++){
//     if(i==1 || i==height){
//     for(let j=1;j<=width;j++){
//     process.stdout.write('*');
//     }
//     console.log();
// }
// else{
//     process.stdout.write('*');
//     for(let j=1;j<=width-2;j++){
//         process.stdout.write(' ');   
//     }   
// process.stdout.write('*');
    
// console.log();
    
// }

// }



// const https = require('https');
// var content = ''
// res = https.get('https://www.bing.com',function(res){
//     res.on('data',function(data){
//         content.push(data)
//     console += data 
//     });
//     res.on('end',function(){
//         console.log(content);
//     });
// });





//importing the api
// const http = require('https');
// http.get('https://reqres.in/api/users', (res)=>{
//     var content =''
//     res.on('data',(data)=>{
//         content +=data;
//     });
// res.on('end',()=>{
//     console.log(content);
// });
// });





//importing api using axios
// const axios = require('axios')

// axios.get('https://reqres.in/api/users')
// .then(function (response){
//     console.log(response.data);
// });
 


//fetching to pages 1,2 
// const axios = require('axios')
// axios.get('https://reqres.in/api/users?pages=1')
// .then(function (response){
//     console.log(response.data);
// });






//pages
// const axios = require('axios');
// const fs = require('fs')
// exports.getData = function(page){
//     axios.get('https://reqres.in/api/users?page='+page)
//     .then(function(response){
//         var text = JSON.stringify(response.data);
//         fs.writeFileSync(`${page}.json`,text)
//     });

// }

//callling function
// function executeTask(task){
//     console.log("executing task")
//     task();
// }
// function doThis(){
//     console.log("hello");
// }
// executeTask(doThis)

//calling paramater
// function executeTask(task){
//     console.log("executing task")
//     task()
// }
// executeTask(function(){         or executeTask(()=>{}
//     console.log("Hello")
// })


//
// function executeTask(task){
//     console.log("Executing task")
//     var data ="From parent"
//     task(data);
// }
// executeTask((params)=>{
//     console.log("Hello",params);
// });


// i/o   sync
// var fs = require("fs");
// function readFileSync(fileName){
//     console.log("Reading file......")
//     var content = "This is the content";
//     return content.toUpperCase();
// }
// var content = readFileSync('myfile.txt');

// console.log(content);
// console.log("completed");

//async
// function readFileSync(fileName){
//     var p = new Promise((res, rej)=>{
//         if(fileName == ""){
//             rej("invalid file name");
//         }
//         var content = "This document"
//         res(content)
//     });
//     return p;
// }
// readFileSync("dasdas").then((r)=>{
// console.log(r)
// })
// .catch((err)=>{console.log(err)})


//async
// function readFileSync(filename){
//     var p = new Promise((res,rej)=>{
//         console.log("Reading file.....");
//         var content ="This is content";
//         res(content);
//     });
//     return p;
// }
// var content = readFileSync("myfile.txt");
// content.then((r)=>{
//     console.log(r);
// });
// console.log("completed");




