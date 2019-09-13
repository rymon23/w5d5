class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  

    const today = new Date();
    this.hours = today.getHours();
    this.mins = today.getMinutes();
    this.seconds = today.getSeconds();
    this.printTime();
    setInterval(() => {
      this._tick();
    }, 1000);
  }

  printTime() {
     // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(
      this._formatTimeInt(this.hours) +
        ":" +
        this._formatTimeInt(this.mins) +
        ":" +
        this._formatTimeInt(this.seconds)
    );
  }

  _formatTimeInt(time) {
    if (time < 10) {
      return '0' + time;
    }
    else {
      return time;
    }
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds = (this.seconds + 1) % 60;    
    if (this.seconds === 0) {
      this.mins = (this.mins + 1) % 60;    
    }
    if (this.mins === 0 && this.seconds === 0) {
      this.hours = (this.hours + 1) % 24;    
    }
    this.printTime();
  }
}

// const clock = new Clock();
const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function addNumbers(sum, numsLeft, completionCallback){
  if (numsLeft === 0) {
    reader.close;
    return completionCallback(sum);}
  reader.question("Pick a number: ", function (answer) {
    sum += parseInt(answer);
    // console.log(sum);
    // completionCallback(sum);
    return addNumbers(sum, numsLeft - 1, completionCallback);
  })
}


// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function absurdBubbleSort(arr, sortCompletionCallback) {
  let madeAnySwaps = false;
  
  function outerBubbleSort(madeAnySwaps) {
    innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop)
  }
    
  // while (!sorted) {
  //   sorted = true;

  //   for (let i = 0; i < arr.length - 1; i++) {
  //     let j = i + 1;
  //     reader.question(
  //       "Is number: " + arr[i] + " > " + arr[j] + "? \n",
  //       function(answer) {
  //         // console.log(answer == 'yes');
  //         if (answer == "yes") {
  //           [arr[j], arr[i]] = [arr[i], arr[j]];
  //           sorted = false;
  //         }
  //       }
  //     );
  //   }
  // }
}

function askIfGreaterThan(el1, el2) {
    reader.question("Is number: " + el1 + " > " + el2 + "? \n", function(answer) {
    answer === el1; 
    reader.close;
    return true;   
})

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if (i < arr.length - 1) {
    if (askIfGreaterThan(arr[i], arr[i + 1])){
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      madeAnySwaps = true;
    }
    innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSort)
  }
  else{
    outerBubbleSort(madeAnySwaps);
  }
;


//ask if greater than any swaps has been made
// absurdBubbleSort([1,2,3]);
askIfGreaterThan(1,2);
//table 6 