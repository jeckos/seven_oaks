// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.querySelector(".modal-open");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var x = document.querySelector(".header--nav--bottom-menu");
function toggleMenu() {
    
    if (x.className === "header--nav--bottom-menu") {
        x.className += " d-none";
    } else {
        x.className = "header--nav--bottom-menu";
    }
}

var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
