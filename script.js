function toggleDetails(detailId) {
    const details = document.getElementById(detailId);
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}

function showCategory(url) {
    window.location.href = url;
}