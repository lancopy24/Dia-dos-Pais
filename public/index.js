class mobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu= document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLink = document.querySelectorAll(navLinks); 
        this.activeClass = "active";

        this.handleclick = this.handleclick.bind(this);
    }
handleclick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
}
animateLinks() {
    this.navLink.forEach((link, index) => {
        link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navlink 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
};
    addCLickEvent(){
        this.mobileMenu.addEventListener("click", this.handleclick);
    }   
 init() {
    if (this.mobileMenu)
    {
        this.addCLickEvent();
    }
    return this;
 }
};

const MobileNavbar = new mobileNavbar(
    ".mobile-menu",
    ".links",
    ".links a",
);
MobileNavbar.init();


function myobserveritem (seletor) {
    const myobserver = new IntersectionObserver((entries) =>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting){
                entry.target.style.opacity = "1"
            } else {
                entry.target.style.opacity = "0"
            }
        });
     });
     const elements = document.querySelectorAll(seletor);
    elements.forEach((element)=>{
    element.style.transition = "opacity 2.3s"
    myobserver.observe(element)
})
}
myobserveritem([".titulo-motivacao", ".texto-motivacao", ".exemplo-produto", ".sessao-sobreposta", ".texto-promocao", ".sacola-promo"])
