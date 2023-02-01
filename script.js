const inputs = document.querySelectorAll("input");

let nowDate;
let input1;
let endDate;
let input;
document.getElementById("now-time").addEventListener("change" , function(){
  input1 = this.value;
  nowDate = new Date(input1);
});

document.getElementById("end-time").addEventListener("change", function(){
    input = this.value;
    endDate = new Date(input);
})

console.log("now",nowDate, input1);
console.log("end",endDate, input);
console.log("inputs", inputs);


const clock = () => {
  setInterval(() => {
  const end = new Date(endDate);
  const now = new Date(nowDate);
  const diff = (end - now) / 1000;
  console.log('end',end);
  console.log('now', now);
  console.log('diff', diff);

  if (diff < 0) return;
  inputs[2].value = (Math.floor(diff / 3600 / 24)); //Days
  inputs[3].value = (Math.floor(diff / 3600) % 24); //hours
  inputs[4].value = (Math.floor(diff / 60) % 60); //minutes
  inputs[5].value = Math.floor(diff) % 60; //seconds
}, 1000);
};
// 1 day = 24hr
// 1 hr = 60min
// 1 min = 3600 sec
// 1 sec =

console.log("clock", clock);
document.getElementById("btn").addEventListener("click", clock);
clock();

  clock();



  // var timer;

  // var compareDate = new Date();
  // compareDate.setDate(compareDate.getDate() + 7); //just for this demo today + 7 days
  
  // timer = setInterval(function() {
  //   timeBetweenDates(compareDate);
  // }, 1000);
  
  // function timeBetweenDates(toDate) {
  //   var dateEntered = toDate;
  //   var now = new Date();
  //   var difference = dateEntered.getTime() - now.getTime();
  
  //   if (difference <= 0) {
  
  //     // Timer done
  //     clearInterval(timer);
    
  //   } else {
      
  //     var seconds = Math.floor(difference / 1000);
  //     var minutes = Math.floor(seconds / 60);
  //     var hours = Math.floor(minutes / 60);
  //     var days = Math.floor(hours / 24);
  
  //     hours %= 24;
  //     minutes %= 60;
  //     seconds %= 60;
  
  //     $("#days").text(days);
  //     $("#hours").text(hours);
  //     $("#minutes").text(minutes);
  //     $("#seconds").text(seconds);
  //   }
  // }


