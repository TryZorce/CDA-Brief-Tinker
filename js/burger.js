const burgerChoices = document.querySelector('.navBurgerChoices');

let isBurgerHidden = true;

function burgerOpenClose() {
  if (isBurgerHidden) {
    burgerChoices.style.display = 'flex';
  } else {
    burgerChoices.style.display = 'none';
  }
  isBurgerHidden = !isBurgerHidden;
}

window.addEventListener("scroll", function() {
  var navBar = document.querySelector(".navBar");
  if (window.scrollY > 0) {
      navBar.classList.add("scrolled");
  } else {
      navBar.classList.remove("scrolled");
  }
});
