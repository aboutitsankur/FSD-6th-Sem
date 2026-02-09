const fs =  require('fs');
// fs.writeFile("./ad.txt","Coding is fun",()=>{});
fs.readFile("./ad.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err);
    }
    else{
        console.log(result);
    }
})