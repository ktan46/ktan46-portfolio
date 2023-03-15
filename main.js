let i = 0;
let txt = "I'm Kyle Tan, a 2B Honours Mathematics student studying at the University of Waterloo and I like computers." /* The text */
let speed = 65; /* lower the faster */
function typeWriter() {
  if (i < txt.length) {
  document.getElementById("intro").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
  }
}
typeWriter();
