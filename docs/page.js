// var x = document.getElementById("home");
// var y = document.getElementById("aboutus");
// var z = document.getElementById("contact");

// x.style.display = "block";
// y.style.display = "none";
// z.style.display = "none";

function home() {
    var x = document.getElementById("home");
    var y = document.getElementById("aboutus");
    var z = document.getElementById("contact");
  if (x.style.display === "none") {
      x.style.display = "none";
      if (y.style.display === "none") {
          y.style.display = "none";
          z.style.display = "block";
      } else {
          y.style.display = "block";
          z.style.display = "none";
      }
  } else {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
  }
}

function aboutus() {
    var y = document.getElementById("home");
    var x = document.getElementById("aboutus");
    var z = document.getElementById("contact");
    if (x.style.display === "none") {
        x.style.display = "none";
        if (y.style.display === "none") {
            y.style.display = "none";
            z.style.display = "block";
        } else {
            y.style.display = "block";
            z.style.display = "none";
        }
    } else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    }
}

function contact() {
    var y = document.getElementById("home");
    var z = document.getElementById("aboutus");
    var x = document.getElementById("contact");
    if (x.style.display === "none") {
        x.style.display = "none";
        if (y.style.display === "none") {
            y.style.display = "none";
            z.style.display = "block";
        } else {
            y.style.display = "block";
            z.style.display = "none";
        }
    } else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    }
}