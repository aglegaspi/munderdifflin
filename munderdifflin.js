
/* ATTN: ---------  SUBMIT BUTTON ALERT -------------   */

var x = document.getElementById("myBtn");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);

function myFunction() {
    alert ("Thank You for your email..... ");
}

function someOtherFunction() {
    alert ("....Don't Call Us We'll Call YOU! ;0)");
}


/* ATTN: ---------  MAKES THE NAVBAR STICKY -------------   */


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
  } else {
    document.getElementById("topnav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
