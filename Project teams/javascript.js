// javascript.js

document.addEventListener("DOMContentLoaded", () => {
    // Open sidebar
    function opensidebar() {
    document.querySelector(".sidebar").style.width = "250px";
    }

    // Close sidebar
    function closesidebar() {
    document.querySelector(".sidebar").style.width = "0";
    }

    window.opensidebar = opensidebar;
    window.closesidebar = closesidebar;
});



