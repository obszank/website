// Function to detect mobile devices
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Get the current page's path
var currentPage = window.location.pathname;

// Avoid redirection loop by checking if already redirected
if (!window.location.pathname.startsWith('/mobile') && isMobileDevice()) {
    window.location.href = "/mobile" + currentPage;
}
