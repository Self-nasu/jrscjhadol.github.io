var animationState = "exit-animation";

function toggleAnimation(elementId) {
  var myDiv = document.getElementById(elementId);

  if (animationState === "exit-animation") {
    myDiv.classList.remove("exit-animation");
    myDiv.classList.add("enter-animation");
    setTimeout(() => {
      myDiv.style.height = "169px";
      myDiv.style.display = "flex";
    }, 299);
    animationState = "enter-animation";
    console.log(animationState);
  } else {
    myDiv.classList.remove("enter-animation");
    myDiv.classList.add("exit-animation");
    setTimeout(() => {
      myDiv.style.height = "0px";
      myDiv.style.display = "none";
    }, 299);
    animationState = "exit-animation";
    console.log(animationState);
  }
}