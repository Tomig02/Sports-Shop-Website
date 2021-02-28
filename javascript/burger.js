const burgerBtn = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");

burgerBtn.addEventListener("click", () => {
    if(overlay.classList.contains("hide")){
        burgerBtn.classList.add("burger-active");
        overlay.classList.remove("hide");
    }else{
        burgerBtn.classList.remove("burger-active");
        overlay.classList.add("hide");
    }
})