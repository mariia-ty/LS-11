// let seconds = 0;

// let timer = setInterval(function () {
//     secconds++;
//     console.log(seconds);
// }, 1000);

// let seconds = 0;

// let timer = setTimeout(function () {
//     console.log("Time is up!");
// }, seconds * 1000);

// document.getElementById("btn").addEventListener("click", () =>
//     setTimeout(() => {
//         document.getElementById("txt").textContent = "Done";
//     }, 5000) )

// let counter = 0;
// let timeInterval;

// document.getElementById("start").addEventListener("click", () => {
//   timeInterval = setInterval(() => {
//     counter++;
//     document.getElementById("txt").textContent = counter;
//   }, 1000);
// });

// document.getElementById("stop").addEventListener("click", () => {
//   clearInterval(timeInterval);
//   counter = 0;
//   document.getElementById("txt").textContent = counter;
// });

let seconds = 10;
let timer;

document.getElementById("btn").addEventListener("click", () => {
  timer = setInterval(() => {
    seconds--;
    document.getElementById("txt").textContent = seconds;
    if (seconds <= 0) {
      clearInterval(timer);
      document.getElementById("txt").textContent = "Done";
    }
  }, 1000);
});
