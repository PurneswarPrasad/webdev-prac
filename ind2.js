// function clickAlert() {
//   alert("Hello World");
// }

const buttonTag = document.getElementById("buttonID");
//const divTag = document.getElementById("divID");
const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");

buttonTag.onclick = function () {
  //divTag.innerHTML = "Voila!";
  //   var initialText = input1.value;
  //   input2.value = initialText;
  input2.value = input1.value;
  input1.value = "";
};
