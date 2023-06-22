window.ityped.init(document.querySelector(".ityped"), {
  strings: ["an Engineer.", "a Web developer."],
  loop: true,
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      document.getElementById("navbar_top").classList.add("m-3");

      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      document.getElementById("navbar_top").classList.remove("m-3");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});
