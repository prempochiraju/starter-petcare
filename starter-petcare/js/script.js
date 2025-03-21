
// nav-----
const navToggler = document.querySelector(".js-nav-toggler");
const nav = document.querySelector(".js-nav");
function navToggle(){
  nav.classList.toggle("active"); 
  navToggler.classList.toggle("active");
}

navToggler.addEventListener("click",navToggle);

// hide the nav
document.addEventListener("click",(Event)=>{
    const isClickInsideNav =nav.contains(Event.target);
    const isClickInsideNavToggler = navToggler.contains(Event.target);
    if(!(isClickInsideNav || isClickInsideNavToggler)&& nav.classList.contains("active")){
     navToggle();   
    }
})

function sendMessage() {
  alert("Thank you for contacting us.We will get back to you shortly!"); function sendMessage() {
}
 
}