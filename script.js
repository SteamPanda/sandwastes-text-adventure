function doThis() {
  if (document.getElementById("text_input").value == "north") {
    document.getElementById("text").innerHTML = "The mountains are miles away; you'll never make it there on foot. To the West you see something sticking out of the ground...";
    document.getElementById("text").style.opacity = "1";
  };
};

function searchKeyPress(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    document.getElementById("enter").click();
    return false;
  }
  return true;
}
