alert("Let's integrate!");
const a = parseFloat(prompt('a'));
const b = parseFloat(prompt('b'));
const step = parseFloat(prompt('step'));
console.log(step);
let sum = 0;
    for (let i=a+step; i < b; i+=step){
        y = i*i-i+1;
        console.log(y*step);
        sum=sum+y*step;
        
    }
    console.log(sum);
    document.write(sum);
