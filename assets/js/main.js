var navbar = document.querySelector(".navbar");
// window.onscroll = function() {

//     if (document.documentElement.scrollTop > 20) {
//         navbar.classList.add("navbar_scrolled");
//     } else {
//         navbar.classList.remove("navbar_scrolled")
//     }
// }

var backtotop = document.querySelector(".backtotop");
var fixedbtn = document.querySelector(".fixedbottom");
window.onscroll = function() {

    if (document.documentElement.scrollTop > 20) {
        navbar.classList.add("navbar_scrolled");
    } else {
        navbar.classList.remove("navbar_scrolled")
    }

    if (document.documentElement.scrollTop > 500) {
        // fixedbtn.classList.add("active");
        backtotop.classList.add("active");
    } else {
        // fixedbtn.classList.remove("active")
        backtotop.classList.remove("active")
    }
}

var navbar_toggler = document.querySelector(".navbar-toggler");
var navbar_color = document.querySelector(".navbar");
navbar_toggler.addEventListener("click", function() {
    navbar_color.classList.toggle("navbar_bg_color");
})

var copyright_wrapper = document.querySelector(".copyright_wrapper");
var ok_btn = document.querySelector(".ok_btn");
ok_btn.addEventListener("click", function() {
    copyright_wrapper.classList.add("ok_btn_hide");
})