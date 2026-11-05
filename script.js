// script.js

document.addEventListener("DOMContentLoaded", () => {

    // Form logic for the precise original "Quick check" box
    const analyzeForm = document.getElementById("analyzeForm");

    if (analyzeForm) {
        analyzeForm.addEventListener("submit", function(e) {
            e.preventDefault();

            const usernameInput = document.getElementById("username");
            const platformInput = document.getElementById("platform");
            const submitBtn = analyzeForm.querySelector('button[type="submit"]');

            const originalText = submitBtn.innerText;

            if (usernameInput.value.trim() === "") {
                alert("Please enter a valid handle.");
                return;
            }

            // Simulate the exact analyzing loading state
            submitBtn.innerText = "Processing...";
            submitBtn.style.opacity = "0.7";
            submitBtn.style.cursor = "wait";
            submitBtn.disabled = true;

            // Wait 1 second and show the result mimicking the provider load
            setTimeout(() => {
                alert(`API Lookups may be cached briefly.\n\nSimulated result for @${usernameInput.value} on ${platformInput.value.toUpperCase()}.\nMissing likes or comments show as N/A.`);

                // Reset form
                submitBtn.innerText = originalText;
                submitBtn.style.opacity = "1";
                submitBtn.style.cursor = "pointer";
                submitBtn.disabled = false;
                usernameInput.value = "";
            }, 1000);
        });
    }

    // Optional: Interactive FAQ toggles
    const faqToggles = document.querySelectorAll(".faq-toggle");
    faqToggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const content = toggle.nextElementSibling;
            if (content.style.display === "none") {
                content.style.display = "block";
                toggle.style.opacity = "0.7";
            } else {
                content.style.display = "none";
                toggle.style.opacity = "1";
            }
        });
    });
});