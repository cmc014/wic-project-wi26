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

    document.getElementById("openbutton").addEventListener("click", opensidebar);
    document.getElementById("closebutton").addEventListener("click", closesidebar);

    window.opensidebar = opensidebar;
    window.closesidebar = closesidebar;


});



