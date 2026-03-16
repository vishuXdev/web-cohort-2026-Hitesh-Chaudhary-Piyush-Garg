// // timeout_vs_immediate.js
// const fs = require('node:fs');


//   setTimeout(() => {
//     console.log('timeout');
//   }, 4);
//   setImmediate(() => {
//     console.log('immediate');
//   });

const fs = require("fs");

console.log("Start")
process.nextTick(() => {
  fs.readFile("hello.txt", "utf-8", (err, data)=>{
    if(err){
      console.log(err);
    }else{
      console.log(data);
    }
  })
  console.log("nextTick");
});

process.nextTick(() => console.log("A"));
process.nextTick(() => console.log("B"));
process.nextTick(() => console.log("C"));

console.log("End")

setTimeout(()=>{
  console.log("Helllo ji kaise hai aap");
}, 0)