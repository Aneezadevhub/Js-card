function updateprofile() {
  document.getElementById("image").src = "mine.jpeg";
  //   document.body.style.backgroundColor="red"
  document.getElementById("content").style.backgroundColor = "green";
   document.getElementById("content").style.borderRadius = "25px";
  document.getElementById("header").innerHTML =
    "<span style='color:white';>ANEEZA KHAN</span>";
  document.getElementById("field").innerHTML =
    "<span style='color:Orange';>Full stack Development</span>";
    document.getElementById("paragraph").innerHTML =
    "<span style='color:yellow' ;>Building modern and responsive web applications.</span>";
}
