(function () {
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
