(() => {
  var yourName = prompt("enter your name");
  while (yourName == null || yourName == "") {
    var yourName = prompt("Please enter your name");
  }
  document
    .querySelector("#nameAppend")
    .append(
      "Welcome " +
        yourName +
        ", each question carries 2marks. Fill in all the questions."
    );
})();

var scoreArray = [];

if (document.getElementById("item1d").checked) {
  var answerOne = document.getElementById("item1d").value;
}
var hideFooter = document.querySelector(".upper-footer");
var hideBody = document.querySelector(".classToHide");
var hiddenClass = document.querySelector(".revealScore");
var revealClass = document.querySelector(".active");
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

  var totalScore =
    scoreArray[0] +
    scoreArray[1] +
    scoreArray[2] +
    scoreArray[3] +
    scoreArray[4] +
    scoreArray[5];

  var totalPercentage = (totalScore / 12) * 100;

  var roundedAnswer = Math.round(totalPercentage);

  switch (roundedAnswer) {
    case 100:
    case 83:
      document
        .querySelector("#success")
        .append(
          "Congratulations you scored " +
            roundedAnswer +
            "%. Excellently performed."
        );
      break;
    case 67:
    case 50:
      document
        .querySelector("#success")
        .append("You scored " + roundedAnswer + "%. Fairly performed.");
      break;
    default:
      document
        .querySelector("#success")
        .append("You scored " + roundedAnswer + "%. You should redo the quiz.");
  }
});
