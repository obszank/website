// Function to detect mobile devices
function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Get the current page's path
var currentPage = window.location.pathname;

// Determine the mobile or PC version URL based on the current page
if (isMobileDevice()) {
    window.location.href = "/mobile" + currentPage;
} else {
    window.location.href = currentPage; // Stay on the current page for PC version
}
