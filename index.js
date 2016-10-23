// const digitalClock = {
//   time: Math.round(Date.now() / 1000),
//   startTicking() {
//     setInterval(function(){this.time++}.bind(this), 1000);
//   }
// };

// const digitalClock = {
//   time: Math.round(Date.now() / 1000),
//   startTicking() {
//   	this.time++
//     setInterval(() => (this.startTicking).bind(this), 1000);
//   }
// };


const digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking: function () {
    setInterval(() => this.time++, 1000);
  }
};

const censor = (cword, word) => {
	var regex = new RegExp(cword, "g");
	return word.replace(regex, 'BLEEP');
}

const violenceCensor = censor.bind("", 'violence');
const drugsCensor = censor.bind("", 'drugs');