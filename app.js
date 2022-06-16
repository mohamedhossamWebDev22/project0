// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyNav()};

window.onload = function (){
    window.addEventListener("online", function (){
      console.log("online");

      wifiTxt.style.backgroundColor = "darkgreen";
      wifiTxt.innerHTML = "Online";
    })
 
  window.addEventListener("offline", function (){
      console.log("Offline");

      wifiTxt.style.backgroundColor = "darkred";
      wifiTxt.innerHTML = "Offline";
    })  
}

window.addEventListener("online", function (){
        console.log("online");

        wifiTxt.style.backgroundColor = "darkgreen";
        wifiTxt.innerHTML = "Online";
})

window.addEventListener("offline", function (){
          console.log("Offline");

          wifiTxt.style.backgroundColor = "darkred";
          wifiTxt.innerHTML = "Offline";
})

let wifiTxt = document.getElementById("wifi"),
bdy = document.querySelector("body");

var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } 
  else {
    navbar.classList.remove("sticky");
  }
}