let inputField = document.getElementById('inputField')
let outputField = document.getElementById('outputField')
let operations = document.getElementById('operations')
let applyButton = document.getElementById('btn-apply')
let resetButton = document.getElementById('btn-reset')


//getting operaion name from dropdown
let operationName = "up"
operations.addEventListener('change', (e) => {
  operationName = e.target.value
})

applyButton.addEventListener('click', () => {
  if(inputArr.length === 0) {
    alert("Enter values to compute")
  } else {
      if(operationName === "up") {
        up()
        console.log("up called")
    } else if(operationName === "down") {
        down()
        console.log("down called")
    } else if(operationName === "max") {
        maxArr()
        console.log("max called")
    } else if(operationName === "min") {
        minArr()
        console.log("min called")
    } else if(operationName === "sum") {
        sum()
        console.log("sum called")
    } else if(operationName === "median") {
        median()
        console.log("median called")
    } else if(operationName === "mean") {
        mean()
        console.log("mean called")
    } else if(operationName === "stdev") {
        std()
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
  if(upval==null){
    upval = []
    if(downval != null){
      for(var i=downval.length-1; i>=0; i--){
        upval.push(downval[i]);
      }
      outputField.value = upval
    }
    else{
      const inputASorted = inputArr.sort(function(a, b){return a-b})
      outputField.value = upval
      upval = inputASorted;
    }
  } else{
    outputField.value = upval
  }
}

function down() {
  if(downval==null){
    downval=[];
    if(upval != null){
      for(var i=upval.length-1; i>=0; i--){
        downval.push(upval[i]);
      }
      outputField.value = downval
    }
    else{
      const inputDSorted = inputArr.sort(function(a, b){return b-a});
      outputField.value = inputDSorted
      downval = inputDSorted;
    }
  }
  else{
    outputField.value = downval
  }

}

function maxArr(){
  if(maxval==null){
    if(upval != null) maxval =upval[upval.length-1];
    else if(downval!=null) maxval = downval[0];
    else maxval = Math.max(...inputArr);
  }
  outputField.value = maxval

}

function minArr(){
  if(minval==null){
    if(upval != null) minval = upval[0];
    else if(downval != null) minval = downval[downval.length-1];
    else minval = Math.min(...inputArr);
  }
  outputField.value = minval
}

function sum() {
  if(sumval==null){
    sumval = inputArr.reduce(function(a, b){
      return a + b;
    }, 0);
  }
  outputField.value = sumval
}

function median() {
  if(medianval == null){
    var inputASorted = [];
    if(upval != null){
      for(var i=0; i<upval.length; i++){
        inputASorted.push(upval[i]);
      }
    }
    else if(downval != null){
      for(var i=downval.length-1; i>=0; i--){
        inputASorted.push(downval[i]);
      }
    }
    else { 
      inputASorted = inputArr.sort(function(a, b){return a-b});
    }

    let len = inputArr.length;
    const mid = Math.ceil(len / 2);
    medianval =
      len % 2 == 0 ? (inputASorted[mid] + inputASorted[mid - 1]) / 2 : inputASorted[mid - 1];
      outputField.value = medianval
  }

  
}

function mean() {
  if(sumval==null){
    sumval = inputArr.reduce(function(a, b){
      return a + b;
    }, 0);
  }
  var sum = sumval;
  sum *= 1.00;
  outputField.value = Number.parseFloat(sum/inputArr.length).toFixed(3)
}

function mean_ret(values){
  var sum = values.reduce(function(a, b){
    return a + b;
  }, 0);

  return sum/values.length;
}

function std() {
  if(stdval==null){
      if(meanval==null){
        meanval = mean_ret(inputArr);
      }
      var avg = meanval;
      var squareDiffs = inputArr.map(function(value){
      var diff = value - avg;
      var sqrDiff = diff * diff;
      return sqrDiff;
    });
    var avgSquareDiff = mean_ret(squareDiffs);
    stdval = Math.sqrt(avgSquareDiff);
  }
  outputField.value = Number.parseFloat(stdval).toFixed(3);
}