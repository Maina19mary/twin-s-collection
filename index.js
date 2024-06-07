
const searchInput = document.querySelector('.top-bar input');


searchInput.addEventListener('input', (e) => {
  console.log(`Search query: ${e.target.value}`);
});


const dropdownMenu = document.querySelector('.dropdown');


dropdownMenu.addEventListener('mouseover', () => {
  console.log('Dropdown menu hovered');
});


const bestSellersImage = document.querySelector('.best-sellers-image');


bestSellersImage.addEventListener('click', () => {
  console.log('Best sellers image clicked');
});


const productsSection = document.querySelector('.products');

productsSection.addEventListener('scroll', () => {
  console.log('Products section scrolled');
});