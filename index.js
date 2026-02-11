// const fs =  require('fs');
// // fs.writeFile("./ad.txt","Coding is fun",()=>{});
// fs.readFile("./ad.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(result);
//     }
// })

// fs.appendFileSync("./ad.txt","done without callback");
// fs.appendFile("./ad.txt","done with callback",()=>{});


// fs.cpSync("a1.txt","b1.txt");
// fs.cp("a1.txt","b1.txt",()=>{});

// fs.unlinkSync("./ad.txt");

// fs.mkdir('new_folder', { recursive: true }, (err) => {
//   if (err) throw err;
//   console.log('Directory created successfully');
// });


const os=require('os');
// console.log("platform",os.platform());
// console.log("userinfo",os.userInfo());
// console.log("cpu architecture",os.arch());
// console.log("free memory",os.freemem());
// console.log("total memory",os.totalmem());
// console.log("uptime",os.uptime());
// console.log("home dir",os.homedir());
console.log("host name",os.hostname());

