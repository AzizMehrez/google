// Add functionality for showing floating info window
document.addEventListener("DOMContentLoaded", function () {
    const teamMembers = document.querySelectorAll(".team-member");
    const infoWindow = document.getElementById("info-window");
    const infoImage = document.getElementById("info-image");
    const infoText = document.getElementById("info-text");

    teamMembers.forEach((member) => {
        member.addEventListener("mouseenter", (e) => {
            const memberInfo = member.getAttribute("data-info");
            const memberImage = member.getAttribute("data-image");

            infoImage.src = memberImage;
            infoText.textContent = memberInfo;

            // Position the info window near the mouse pointer
            const rect = member.getBoundingClientRect();
            infoWindow.style.top = `${rect.top + window.scrollY + 10}px`;
            infoWindow.style.left = `${rect.right + 10}px`;

            // Show the info window
            infoWindow.classList.remove("hidden");
        });

        member.addEventListener("mouseleave", () => {
            // Hide the info window
            infoWindow.classList.add("hidden");
        });
    });
});
