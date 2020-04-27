// Global Variable
let currentTab = 1;

// Event Listeners
document.getElementById("menu1").addEventListener("click", setTab1);
document.getElementById("menu2").addEventListener("click", setTab2);
document.getElementById("menu3").addEventListener("click", setTab3);
document.getElementById("menu4").addEventListener("click", setTab4);
// document.getElementById("menu5").addEventListener("click", setTab5);

document.getElementById("div1").style.display = "block";
document.getElementById("div2").style.display = "none";
document.getElementById("div3").style.display = "none";
document.getElementById("div4").style.display = "none";
// document.getElementById("div5").style.display = "none";

function setTab1() {
    document.getElementById("menu" + currentTab).classList.remove("active");
    currentTab = 1;
    document.getElementById("menu" + currentTab).classList.add("active");
    document.getElementById("div1").style.display = "block";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";

    document.getElementById('.menu1').removeClass('.menu-wrap');
}

function setTab2() {
    document.getElementById("menu" + currentTab).classList.remove("active");
    currentTab = 2;
    document.getElementById("menu" + currentTab).classList.add("active");
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "block";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";

    document.getElementById('.menu a').removeClass('.hamburger');
}

function setTab3() {
    document.getElementById("menu" + currentTab).classList.remove("active");
    currentTab = 3;
    document.getElementById("menu" + currentTab).classList.add("active");
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "block";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";


}

function setTab4() {
    document.getElementById("menu" + currentTab).classList.remove("active");
    currentTab = 4;
    document.getElementById("menu" + currentTab).classList.add("active");
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "block";
    document.getElementById("div5").style.display = "none";
}

// function setTab5() {
//     document.getElementById("menu" + currentTab).classList.remove("active");
//     currentTab = 5;
//     document.getElementById("menu" + currentTab).classList.add("active");
//     document.getElementById("div1").style.display = "none";
//     document.getElementById("div2").style.display = "none";
//     document.getElementById("div3").style.display = "none";
//     document.getElementById("div4").style.display = "none";
//     document.getElementById("div5").style.display = "block";
// }

var button = document.getElementById('hamburger-menu'),
    span = button.getElementsByTagName('span')[0];

// button.onclick =  function() {
//   span.classList.toggle('hamburger-menu-button-close');
// };

// $('#hamburger-menu').on('click', toggleOnClass);

// function toggleOnClass(event) {
//   var toggleElementId = '#' + $(this).data('toggle'),
//   element = $(toggleElementId);

//   element.toggleClass('on');

// }

// // close hamburger menu after click a
// $( '.menu li a' ).on("click", function(){
//   $('#hamburger-menu').click();
// });
