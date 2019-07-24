
window.onload = setup;
function setup() {
  var message = document.getElementById("button1");
  message.onclick = greeting;
}

function greeting(){
  alert("Have a lovely day!");
}
