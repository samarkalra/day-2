let inputField = document.getElementById('inputField')
let outputField = document.getElementById('outputField')
let operations = document.getElementById('operations')
let applyButton = document.getElementById('btn-apply')
let resetButton = document.getElementById('btn-reset')


//getting operaion name from dropdown
let operationName = "up"
operations.addEventListener('input', (e) => {
  operationName = e.target.value
})

applyButton.addEventListener('click', () => {
  if(inputArr.length === 0) {
    alert("Enter values to compute")
  } else {
      if(operationName === "up") {
        up()
        outputField.value = upval
        console.log("up called")
    } else if(operationName === "down") {
        down()
        outputField.value = downval
        console.log("down called")
    } else if(operationName === "max") {
        maxArr()
        outputField.value = maxval
        console.log("max called")
    } else if(operationName === "min") {
        minArr()
        outputField.value = minval
        console.log("min called")
    } else if(operationName === "sum") {
        sum()
        outputField.value = sumval
        console.log("sum called")
    } else if(operationName === "median") {
        median()
        outputField.value = medianval
        console.log("median called")
    } else if(operationName === "mean") {
        mean()
        outputField.value = meanval
        console.log("mean called")
    } else if(operationName === "stdev") {
        std()
        outputField.value = stdval
        console.log("stdev called")
    }
  }
})



var upval = null;
var downval = null;
var maxval = null;
var minval = null;
var sumval = null;
var meanval = null;
var medianval = null;
var stdval = null;

//function to set values of each Result as null
function nullSetter(){
  upval = null;
  downval = null;
  maxval = null;
  minval = null;
  sumval = null;
  meanval = null;
  medianval = null;
  stdval = null;
}

//to get input from input field
let inputArr = []
inputField.addEventListener('input', () => {
    let inputValue = inputField.value;
    inputArr = inputValue.split(' ').map(Number); //split string based on spaces and convert them to number
    nullSetter()
})

resetButton.addEventListener('click', () => {
  inputField.value = ""
  outputField.value = ""
  nullSetter()
  inputArr = []
})

//data-analysis operation implementations
function up() {
  if(upval === null){
    if(downval !== null){
      for(var i=downval.length-1; i>=0; i--){
        upval.push(downval[i]);
      }
    }
    else{
      upval = inputArr.sort(function(a, b){return a-b})
    }
  } 
}

function down() {
  if(downval === null){
    if(upval !== null){
      for(var i=upval.length-1; i>=0; i--){
        downval.push(upval[i]);
      }
    }
    else{
      downval = inputArr.sort(function(a, b){return b-a});
    }
  }
}

function maxArr(){
  if(maxval === null){
    if(upval != null) maxval =upval[upval.length-1];
    else if(downval !== null) maxval = downval[0];
    else maxval = Math.max(...inputArr);
  }
}

function minArr(){
  if(minval === null){
    if(upval !== null) minval = upval[0];
    else if(downval !== null) minval = downval[downval.length-1];
    else minval = Math.min(...inputArr);
  }
}

function sum() {
  if(sumval === null){
    sumval = inputArr.reduce(function(a, b){
      return a + b;
    }, 0);
  }
}

function median() {
  if(medianval === null){
    if(upval === null){
      up(inputArr)
    }
    const mid = Math.floor(inputArr.length / 2);
    medianval = (upval.length === 0) ? (upval[mid-1] + upval[mid]) / 2 : upval[mid]
  }
}

function mean() {
  if(meanval === null) {
    if(sumval === null) {
      sum(inputArr) 
    }
    meanval = (sumval / inputArr.length).toFixed(3)
  }
}

function std() {
  if(stdval === null) {
    if(meanval === null) {
      mean(inputArr);
    }
    stdval = inputArr.reduce((acc, item) => {
      return acc + Math.pow(item - meanval, 2)
    }, 0);
    stdval = Math.sqrt(stdval / inputArr.length).toFixed(3)
  }
}