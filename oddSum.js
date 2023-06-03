let i,sum=0;
var readlineSync = require("readline-sync");
let n=readlineSync.question("enter the limit:");
n=parseInt(n);
for(i=1;i<=n;i++)
{
  if(i%2!==0){
    sum=sum+i;
  }
}
console.log("Sum of odd number=",sum);


