function doSomething() {
  var x = document.getElementById("text_input").value;
  document.getElementById("text").innerHTML = x;
  if (x = "test") {
    document.getElementById("test_input").style.background = "red";
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