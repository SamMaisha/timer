// take in arguments from the terminal
const timerArgs = process.argv.slice(2);
//console.log(timerArgs);

// convert elements in timerArgs to numbers
let timerNumArray = timerArgs.map(x => Number(x));
//console.log(timerNumArray);

// function to sort numerical elements in array to ascending order
const sortArray = function(array) {
  array.sort(function(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  })
}

// sort timerNumArray
sortArray(timerNumArray);
//console.log(timerNumArray);

// function to sound alarm based on terminal input
const soundAlarm = function(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      timer = array[i];
      setTimeout(() => {
        process.stdout.write('\x07');
      }, timer * 1000);
    }
  }
}
soundAlarm(timerNumArray);

