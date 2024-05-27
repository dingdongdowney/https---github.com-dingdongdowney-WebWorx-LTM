let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("sections");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offSet = sec.offSetTop  - 150;
        let height = sec.offSetHeight;
        let id = sec.getAttribute("id");

        if(top >= offSet &&  top < offSet + height){
            navLinks.forEach(link => {
                navLinks.classList.remove("acitve");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active")
            })
        }
    })
}

menuIcon.onClick = () =>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}