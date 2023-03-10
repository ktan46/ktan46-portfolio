let i = 0;
let txt = "I'm Kyle Tan, a 2B Honours Mathematics student studying at the University of Waterloo, as well as an aspiring software developer with an interest in machine learning!"; /* The text */
let speed = 65; /* lower the faster */
function typeWriter() {
  if (i < txt.length) {
  document.getElementById("intro").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
  }
}
typeWriter();
