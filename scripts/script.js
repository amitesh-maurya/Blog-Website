document.addEventListener("DOMContentLoaded", function () {
    // Subscription Form
    const form = document.getElementById("subscriptionForm");
    const confirmationMessage = document.getElementById("subscription-confirmation");

    if (form && confirmationMessage) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            console.log("Form submitted"); // Debugging line

            // Display the confirmation message
            confirmationMessage.style.display = "block"; // Changed to "block" for visibility
            console.log("Confirmation message displayed"); // Debugging line

            form.reset();
        });
    } else {
        console.error("Form or confirmation message not found in the DOM.");
    }
    // JavaScript for Toggling Sidebar
    const sideNavbar = document.getElementById('sideNavbar');
    const mainContent = document.getElementById('mainContent');
    const toggleBtn = document.getElementById('toggleBtn');

    // Initial state: Sidebar is collapsed

    let isCollapsed = true;

    toggleBtn.addEventListener('click', () => {
        isCollapsed = !isCollapsed;
        console.log(`Toggling sidebar. isCollapsed: ${isCollapsed}`); // Debugging

        if (isCollapsed) {
            sideNavbar.classList.add('collapsed');
            mainContent.classList.add('collapsed');
            toggleBtn.textContent = '☰'; // Open icon
            console.log('Sidebar collapsed');
        } else {
            sideNavbar.classList.remove('collapsed');
            mainContent.classList.remove('collapsed');
            toggleBtn.textContent = '✖'; // Close icon
            console.log('Sidebar expanded');
        }
    });
    const navbarLinks = document.querySelectorAll(".navbar-link");

    navbarLinks.forEach(link => {
      link.addEventListener("click", () => {
        // Remove active class from all links
        navbarLinks.forEach(item => item.classList.remove("active"));
  
        // Add active class to the clicked link
        link.classList.add("active");
      });
    });
});
