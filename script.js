(() => {
  var yourName = prompt("enter your name");
  while (yourName == null || yourName == "") {
    var yourName = prompt("Please enter your name");
    break;
  }
  document
    .querySelector("#nameAppend")
    .append(
      "Welcome " +
        yourName +
        ", each question carries 2marks. Fill in all the questions."
    );
})();

// get radio buttons input

var answerOne = document.getElementsByName("group1");
var answerTwo = document.getElementsByName("group2");
var answerThree = document.getElementsByName("group3");
var answerFour = document.getElementsByName("group4");
var answerFive = document.getElementsByName("group5");
var answerSix = document.getElementsByName("group6");

var myArrayAnswers = [];

var hideFooter = document.querySelector(".upper-footer");
var hideBody = document.querySelector(".classToHide");
var hiddenClass = document.querySelector(".revealScore");
var submitAnswers = document.querySelector("#submitt");
submitAnswers.addEventListener("click", function () {
  hiddenClass.classList.toggle("active");
  hideBody.style.display = "none";
  hideFooter.style.display = "none";

  for (i = 0; i < answerOne.length; i++) {
    if (
      answerOne[i].checked &&
      answerTwo[i].checked &&
      answerThree[i].checked &&
      answerFour[i].checked &&
      answerFive[i].checked &&
      answerSix[i].checked
    ) {
      myArrayAnswers.push(answerOne[i].value);
      myArrayAnswers.push(answerTwo[i].value);
      myArrayAnswers.push(answerThree[i].value);
      myArrayAnswers.push(answerFour[i].value);
      myArrayAnswers.push(answerFive[i].value);
      myArrayAnswers.push(answerSix[i].value);
      document.querySelector("#success").append(myArrayAnswers);
    }
  }
});
