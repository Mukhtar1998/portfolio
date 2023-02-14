function onClickMenu() {
	document.getElementById("menu").classList.toggle("icon");
	document.getElementById("nav").classList.toggle("change");
}

// DARK-MODE //
var toggleBtn = document.getElementById("mode-toggle");

toggleBtn.addEventListener("click", function() {
  // document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");
});


// SECTION-ONE //




// SECTION-TOW //
function toggleText(id) {
  var box = document.getElementById("box" + id);
  var text = box.getElementsByTagName("p")[0];
  if (text.style.display === "none") {
      text.style.display = "block";
  } else {
      text.style.display = "none";
  }
}
text.classList.toggle("hidden");


// FOOTER //


