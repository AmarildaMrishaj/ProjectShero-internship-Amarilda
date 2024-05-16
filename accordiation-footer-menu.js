

document.addEventListener("DOMContentLoaded", function() {
    var accordiationButtons = document.querySelectorAll('.accordiation button');
    var footerAccordiation = document.querySelector('.footer-accordiation');
    var currentButton = null; 
    var initialHeight = footerAccordiation.clientHeight;   

    accordiationButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var menu = this.nextElementSibling;
            var allMenus = document.querySelectorAll('.menu-accordiation');
            allMenus.forEach(function(menuItem) {
                if (menuItem !== menu) {
                    menuItem.classList.remove('show');
                }
            });
            menu.classList.toggle('show');
            toggleFooterHeight(this);  
        });
    });

    function toggleFooterHeight(clickedButton) {
        var newHeight;

        if (currentButton === clickedButton) {
            newHeight = initialHeight; 
        } else {
            newHeight = initialHeight + 190;  
        }

        footerAccordiation.style.height = newHeight + "px";

        currentButton = (currentButton === clickedButton) ? null : clickedButton; 
    }
});

















