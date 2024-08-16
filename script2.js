document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("redirectButton");

    button.addEventListener("click", () => {
        window.location.href = 'index.html';
    });
});
