let i;
var readlineSync = require("readline-sync");
let n=readlineSync.question("enter the size of an array:");
n=parseInt(n)
let a=[],count=0;

for(i=0;i<n;i++)
{
  
a[i] = readlineSync.question(`enter the ${i+1} element:`);
a[i]=parseInt(a[i]);
if(a[i]%2==0)
{
count++;

}
}
console.log("number of even numbers in the given array is",count);