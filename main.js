
const btn = document.getElementById ('btn');
// const cont = document.getElementsByClassName('container')
let count = 30;
function inc() {
  count--;
 if(count == 0){
  count = 'x';
  clearInterval(stopInterval)
 }  
 btn.textContent = count;
};
let stopInterval = setInterval(inc,1000)

// function toxtat(){
//   btn.click = cont.
// }
function bttn(){
  // count.value() = 'x';
document.getElementById("container").style.display = "none";
};

function reklama(){
  document.getElementById("container").style.display = "flex";
}