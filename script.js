function start() {
    if (document.getElementById("text_input").value === "north") {
        document.getElementById("text").innerHTML = "The mountains are miles away; you'll never make it there on foot. To the West you see something sticking out of the ground...";
        document.getElementById("text").style.opacity = "1";
        document.getElementById("enter").setAttribute("onclick", "north1()");
    } else if (document.getELementById("text_input").value === "east") {
        document.getElementById("text").innerHTML = "You notice the river flows from North to South. If you only had some kind of vehical, you might make it to the mountains...";
        document.getElementById("text").style.opacity = "1";
        document.getElementById("enter").setAttribute("onclick", "east1()");
    } else {
      document.getElementById("text").innerHTML = "?";
    }
    document.getElementById("text_input").value = null;
}
function north1() {
    if (document.getElementById("text_input").value === "west") {
        document.getElementById("text").innerHTML = "You notice that the object is in fact a small boat, dirty yet intact. It seems like it would be easy to pull out of the ground. To the North you see another cactus...";
        document.getElementById("text").style.opacity = "1";
        document.getElementById("enter").setAttribute("onclick", "west2()");
    }
    document.getElementById("text_input").value = null;
}
function east1() {
    if (document.getElementById("text_input").value === "east") {
        document.getElementById("text").innerHTML = "You can't cross the river, silly.";
        document.getElementById("text").style.opacity = "1";
        document.getElementById("enter").setAttribute("onclick", "east2()");
    }
}

function load() {
  document.getElementById("line1").style.opacity = "1";
  document.getElementById("line2").style.opacity = "1";
  document.getElementById("line3").style.opacity = "1";
  document.getElementById("line4").style.opacity = "1";
  document.getElementById("line5").style.opacity = "1";
  document.getElementById("line6").style.opacity = "1";
  document.getElementById("line7").style.opacity = "1";
  document.getElementById("line8").style.opacity = "1";
  document.getElementById("input_cont").style.opacity = "1";
}
function searchKeyPress(e) {
    e = e || window.event;
    if (e.keyCode === 13) {
        document.getElementById("enter").click();
        return false;
    }
    return true;
}
