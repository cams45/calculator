



function performStatistics(){
var enteredValue = document.getElementById('values').value
var array = [];  
let sum = 0;
array = enteredValue.split(" ").map(Number)

document.getElementById('max').value = findMax(array).toFixed(2);
document.getElementById('show').value = array;
document.getElementById('mean').value = calcMean(array).toFixed(2);
document.getElementById('sum').value = calcSum(array).toFixed(2);
document.getElementById('min').value = findMin(array).toFixed(2);
document.getElementById('median').value = calcMedian(array).toFixed(2);
document.getElementById('mode').value = calcMode(array);
document.getElementById('variance').value = calcVariance(array).toFixed(2);
document.getElementById('sdtenv').value = calcSTDEV(array).toFixed(2)

 }


function calcSum(array){
    let sum  = 0;
for (let i = 0; i < array.length; i++) {
      sum += array[i];}
      value = sum;
        return value;
}



function findMin(array){
  var value = array[0];
     return value
}


function findMax(array){
  array.sort(function(a, b){return a-b});
  let value = array[array.length - 1];
     return value
}



function calcMean(array){
  let mean  = calcSum(array);
  length = array.length;
  mean = mean / length
  value = mean;
     return value;
}




function calcMedian(array){
    const median = Math.floor(array.length / 2),
    tvalue = [...array].sort((a, b) => a - b);
    var value = array.length % 2 !== 0 ? tvalue[median] : (tvalue[median - 1] + tvalue[median]) / 2;  
      return value
}





function calcMode(array){
var counts = {};
var temp;
var i;
array.forEach((x) => {
  counts[x] = (counts[x] || 0) + 1;});
  console.log(counts)
  var arr = Object.keys( counts ).map(function ( key ) { return counts[key]; });
  console.log(arr)
  var value = findMax(arr)
  console.log("this is the max = "+value)
  var arr = [];
  for (var key in counts)
    if (counts.hasOwnProperty(key) && counts[key] === value)
      arr.push(key);
       console.log(arr)
       value = [arr]
       return value
}




function calcVariance(array){
  var temp1 = [];
   var i;
    for(i = 0; i <= array.length; i++ ){
     temp1.push(calcMean(array))}
      const difference = (array, temp1) => {
       const temp = [];
        for(let i = 0; i < array.length; i++){
         const subvalue = (array[i] || 0) - (temp1[i] || 0);
          temp[i] = subvalue; };
   return temp;};
     var value = difference(array, temp1)
      value = value.map(x => Math.pow(x, 2));
       value = calcSum(value);
        value = value / array.length;
         return value;
}






function calcSTDEV(array){
 var stdev = calcVariance(array)
  var value = Math.sqrt(stdev)
   return value
}
