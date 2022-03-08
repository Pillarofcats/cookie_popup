const cookiePopupContainer = document.querySelector(".cookie-popup-container");
const cookiePopupImage = document.querySelector(".cookie-popup-img");
const cookiePopupText = document.querySelector(".cookie-popup-text");
const cookiePopupButtonYes = document.querySelector(".cookie-popup-button-yes");
const cookiePopupButtonNo = document.querySelector(".cookie-popup-button-no");

const openCookiePopup = () => {
    cookiePopupContainer.style.display = "inline-flex";
    const animatePopupOpen = () => {
        cookiePopupImage.classList.add("cookie-animation");
        cookiePopupContainer.removeEventListener("animationend", animatePopupOpen);
    }
    cookiePopupContainer.addEventListener("animationend", animatePopupOpen);
    cookiePopupContainer.classList.add("popup-open");
}

const closeCookiePopup = () => {
    cookiePopupContainer.classList.remove("popup-open");
    const animatePopupClose = () => {
        cookiePopupImage.classList.remove("cookie-animation");
        cookiePopupContainer.classList.remove("popup-close");
        cookiePopupContainer.style.display = "none";
        cookiePopupContainer.removeEventListener("animationend", animatePopupClose);
        cookiePopupButtonYes.removeEventListener("click", closeCookiePopup);
        cookiePopupButtonNo.removeEventListener("click", closeCookiePopup);
    }
    cookiePopupContainer.addEventListener("animationend", animatePopupClose);
    cookiePopupContainer.classList.add("popup-close");
}

cookiePopupButtonYes.addEventListener("click", closeCookiePopup);
cookiePopupButtonNo.addEventListener("click", closeCookiePopup);

setTimeout(()=> {
    openCookiePopup();
}, 2000);