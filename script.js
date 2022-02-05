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

var hideFooter = document.querySelector(".upper-footer");
var hideBody = document.querySelector(".classToHide");
var hiddenClass = document.querySelector(".revealScore");
var submitAnswers = document.querySelector("#submitt");
submitAnswers.addEventListener("click", function () {
  hiddenClass.classList.toggle("active");
  hideBody.style.display = "none";
  hideFooter.style.display = "none";
});
