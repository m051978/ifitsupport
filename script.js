// Get elements from the DOM
const menuBtn = document.querySelector('.menu-btn');
const menuBtnMobile = document.querySelector('.menu-btn-mobile');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const backdrop = document.querySelector('.sidebar-backdrop');

// Initialize on scroll animinations
// AOS.init();


// Add menu click events
menuBtn.addEventListener('click', sidebarOpen);
menuBtnMobile.addEventListener('click', sidebarOpen);

// Open sidebar function
function sidebarOpen(){
    // Change sidebar position
    sidebar.style.right = "0";
    // Show backdrop
    backdrop.style.display = "block";
    // Show backdrop through a smooth transition
    setTimeout(() => {
        backdrop.style.opacity = "1";
    }, 50);
    // Disable scroll on body
    document.body.classList.add('sidebar-open-body');
}

// Add the close button click event
closeBtn.addEventListener('click', ()=>{
    // Change sidebar position
    sidebar.style.right = "-20em";
    // Hide backdrop with a smooth transition
    backdrop.style.opacity = "0";
    setTimeout(() => {
        backdrop.style.display = "none";
    }, 300);
    // Make the body scrollable again
    document.body.classList.remove('sidebar-open-body');
});