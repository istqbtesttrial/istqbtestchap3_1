// Add any custom JavaScript you need for interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Example: Open links in new tabs
    const links = document.querySelectorAll('a[target="_blank"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            window.open(this.href);
        });
    });
});
