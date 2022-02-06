// (() => {
//   var yourName = prompt("enter your name");
//   while (yourName == null || yourName == "") {
//     var yourName = prompt("Please enter your name");
//     break;
//   }
//   document
//     .querySelector("#nameAppend")
//     .append(
//       "Welcome " +
//         yourName +
//         ", each question carries 2marks. Fill in all the questions."
//     );
// })();

// get radio buttons input

// var form1 = document.getElementById(qn1);

// var answerOne = form1.elements["qn1"].value;
// var answerTwo = document.getElementsByName("group2");
// var answerThree = document.getElementsByName("group3");
// var answerFour = document.getElementsByName("group4");
// var answerFive = document.getElementsByName("group5");
// var answerSix = document.getElementsByName("group6");

// var myArrayAnswers = [];
var scoreArray = [];

if (document.getElementById("item1d").checked) {
  var answerOne = document.getElementById("item1d").value;
}
var hideFooter = document.querySelector(".upper-footer");
var hideBody = document.querySelector(".classToHide");
var hiddenClass = document.querySelector(".revealScore");
var submitAnswers = document.querySelector("#submitt");
submitAnswers.addEventListener("click", function () {
  hiddenClass.classList.toggle("active");
  hideBody.style.display = "none";
  hideFooter.style.display = "none";
  if (document.getElementById("item1d").checked) {
    scoreArray.push(2);
  } else {
    scoreArray.push(0);
  }
  if (document.getElementById("item2c").checked) {
    scoreArray.push(2);
  } else {
    scoreArray.push(0);
  }
  if (document.getElementById("item3a").checked) {
    scoreArray.push(2);
  } else {
    scoreArray.push(0);
  }
  if (document.getElementById("item4d").checked) {
    scoreArray.push(2);
  } else {
    scoreArray.push(0);
  }
  if (document.getElementById("item5b").checked) {
    scoreArray.push(2);
  } else {
    scoreArray.push(0);
  }
  if (document.getElementById("item6d").checked) {
    scoreArray.push(2);
  } else {
    scoreArray.push(0);
  }
  sumArray = 
});
