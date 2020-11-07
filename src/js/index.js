//time must be in this format mm:ss
console.log('connected');
class Timer {
  constructor(mm, ss){
    this.minutes = parseInt(mm)
    this.seconds = parseInt(ss)
  }

  countDown(){
    // trying to fix the NaN error.
    debugger
    console.log(typeof this.seconds);
    this.seconds--
    console.log(this.seconds)
  }

  start(){
    console.log("timer is starting");
    let tt = setInterval(this.countDown, 1000)
  }
}

let timer = new Timer(0, 5)
