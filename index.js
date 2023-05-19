const button = document.getElementById("btn");
const paragraph = document.getElementById("para");
let count = 0;
function increment(){
    count++;
    paragraph.innerHTML = `You have clicked ${count} times`;
}
function decrement(){
    count = 0;
    paragraph.innerHTML = `click is reset to ${count}`;
}
// button.addEventListener("click",function(){
//     count++;
//     paragraph.innerHTML = `You have clicked ${count} times`;
// });

// const clearButton = document.getElementById("clear");
// // let clearCount = 0;
// clearButton.addEventListener("click",function(){
//     count = 0;
//     paragraph.innerHTML = `click is reset to ${count}`;
// })
