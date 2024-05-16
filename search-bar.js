// Function to toggle the visibility of the search bar and hide other header components
function toggleSearchBar() {
    var searchBar = document.getElementById("search-Bar");
    var headerIcons = document.querySelectorAll(".bag-person img");
    var companyName = document.querySelector(".logo h2");
    var menuIcons = document.querySelectorAll('.menu-searchbar img');
    searchBar.classList.toggle("show");
    headerIcons.forEach(icon => icon.classList.toggle("hide"));
    companyName.classList.toggle("hide");
    menuIcons.forEach(icon => icon.classList.toggle("hide"));
  }

  function closeSearchBar() {
    var searchBar = document.getElementById("search-Bar");
    var headerIcons = document.querySelectorAll(".bag-person img");
    var companyName = document.querySelector(".logo h2");
    var menuIcons = document.querySelectorAll('.menu-searchbar img');
    searchBar.classList.remove("show");
    headerIcons.forEach(icon => icon.classList.remove("hide"));
    companyName.classList.remove("hide");
    menuIcons.forEach(icon => icon.classList.remove("hide"));
}
  
function handleCloseIconClick() {
    closeSearchBar();
}

function handleOutsideClick(event) {
    var searchBar = document.getElementById("search-Bar");
    if (!searchBar.contains(event.target)) {
        closeSearchBar();
    }
}

  // Function to perform search
  function search() {
    var searchInput = document.querySelector('.searchbar input').value;
    // Perform search operation based on searchInput value
    console.log("Search query: " + searchInput);
  }

  document.getElementById('close-icon1').addEventListener('click', handleCloseIconClick);





