var animationState = "exit-animation";

function toggleAnimation(elementId) {
  var myDiv = document.getElementById(elementId);

  if (animationState === "exit-animation") {
    myDiv.classList.remove("exit-animation");
    myDiv.classList.add("enter-animation");
    animationState = "enter-animation";
  } else {
    myDiv.classList.remove("enter-animation");
    myDiv.classList.add("exit-animation");
    animationState = "exit-animation";
  }
}
