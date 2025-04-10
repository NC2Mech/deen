document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");

    // Check if the user has a preferred theme stored in local storage
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    }

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");

        // Save user preference in local storage
        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});
