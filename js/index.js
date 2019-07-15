let myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

const scrollBtn = document.querySelector('.scroll__top');

window.addEventListener('scroll', () => {
  const navMenu = document.querySelector('#navMenu');
  if(this.scrollY <= 10) navMenu.className = 'menu'; else navMenu.className = 'menu_scroll';
  scrollFunction();
});

const scrollFunction = () => {
  if(this.scrollY <= 2000) scrollBtn.className = ' '; else scrollBtn.className = 'scroll__top_active';
}

const topFunction = () => {
  scrollBtn.addEventListener('click', () => {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
  });
}

