document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

// FOR PHONE NUMBER INPUT
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  // show dial codes too
  separateDialCode: true,
  // If there are some countries you want to show on the top.
  // here we are promoting russia and singapore.
  // preferredCountries: ["ru", "sg"],
  //Default country
  // initialCountry:"sg",
  // show only these countres, remove all other
  // onlyCountries: ["ru", "cn","pk", "sg", "my", "bd"],
  // If there are some countries you want to execlde.
  // here we are exluding india and israel.
  // excludeCountries: ["in","il"]
});

// FOR PROFILE DROPDOWN
$(document).ready(function () {
  $("#profileDropdown").click(function () {
    $(".dropdown-menu-user").toggle();
  });
});
