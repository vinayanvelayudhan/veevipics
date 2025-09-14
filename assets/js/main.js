"use strict";const header=document.querySelector("header"),nav=document.querySelector("nav"),navbarMenuBtn=document.querySelector(".navbar-menu-btn"),navbarForm=document.querySelector(".navbar-form"),navbarFormCloseBtn=document.querySelector(".navbar-form-close"),navbarSearchBtn=document.querySelector(".navbar-search-btn");function navIsActive(){header.classList.toggle("active"),nav.classList.toggle("active"),navbarMenuBtn.classList.toggle("active")}navbarMenuBtn.addEventListener("click",navIsActive);const searchBarIsActive=()=>navbarForm.classList.toggle("active");navbarSearchBtn.addEventListener("click",searchBarIsActive),navbarFormCloseBtn.addEventListener("click",searchBarIsActive);

const downloadLinks = document.querySelectorAll("[data-download]");
downloadLinks.forEach(button => {
    button.addEventListener("click", () => {
        const id = button.dataset.download;
        const image = document.getElementById(id);
        
        if (!image) {
            console.error("Image not found with ID:", id);
            return;
        }

        const a = document.createElement("a");
        a.href = image.src;
        a.download = image.alt || "downloaded_image"; // Use alt text or default filename
        a.style.display = "none";
        
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});