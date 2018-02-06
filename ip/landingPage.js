var meetDev = document.getElementById("meetDev");
var phoneNumber = document.getElementById("phoneNumber");
var socialMedia = document.getElementById("socialMedia");

var contact = document.getElementById("contact");

contact.addEventListener("click", function(){
  meetDev.innerHTML = "Meet the Developer";
  phoneNumber.innerHTML = "Phone Number";
  socialMedia.innerHTML = "Social Media";
});
