// ========= theme ============

// تغییر تم با کلیک روی دکمه
const toggleThemeBtn = document.querySelector("#theme-toggle");
toggleThemeBtn.addEventListener("click", () => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

// دکمه دوم برای تغییر تم
const toggleThemeBtn2 = document.querySelector("#theme-toggle-mobile");
toggleThemeBtn2.addEventListener("click", () => {
  
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});



document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
);



// ============= menu mobile ================


const menuToggle = document.getElementById('menu-toggle');
const menuContainer = document.getElementById('navbar-menu'); 
const closeButton = document.getElementById('close-menu'); 


menuToggle.addEventListener('click', () => {
  menuContainer.classList.remove('menu-close'); 
  menuContainer.classList.add('menu-open');
  document.body.style.overflow = 'hidden'; 
});


closeButton.addEventListener('click', () => {
    menuContainer.classList.remove('menu-open'); 
    menuContainer.classList.add('menu-close');
    document.body.style.overflow = ''; 
});


menuContainer.addEventListener('click', (e) => {
  if (e.target === menuContainer) {
    menuContainer.classList.remove('menu-open'); 
    menuContainer.classList.add('menu-close');
    document.body.style.overflow = '';
  }
});


// menu mobile shop btn

const shopButton = document.getElementById('shop-button');
const shopMenu = document.getElementById('shop-menu');
const shopIcon = document.getElementById('shop-icon');

shopButton.addEventListener('click', (event) => {
  event.preventDefault();
  

  shopMenu.classList.toggle('show'); 
  

  shopIcon.classList.toggle('rotate-icon');
});

// cart

const cartToggle = document.getElementById('cart-toggle');
const cartContainer = document.getElementById('cart-menu'); 
const closeButtonCart = document.getElementById('close-menu-cart'); 


cartToggle.addEventListener('click', () => {
  cartContainer.classList.remove('cart-close'); 
  cartContainer.classList.add('cart-open');
  document.body.style.overflow = 'hidden'; 
});


closeButtonCart.addEventListener('click', () => {
    cartContainer.classList.remove('cart-open'); 
    cartContainer.classList.add('cart-close');
    document.body.style.overflow = ''; 
});


cartContainer.addEventListener('click', (e) => {
  if (e.target === menuContainer) {
    cartContainer.classList.remove('cart-open'); 
    cartContainer.classList.add('cart-close');
    document.body.style.overflow = '';
  }
});