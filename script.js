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

const menu = document.querySelector('.navbar ul')
document.querySelector('.navbar > i').addEventListener('click', () => {
    menu.classList.remove('close')
});
document.querySelector('.navbar ul > i').addEventListener('click', () => {
    const menu = document.querySelector('.navbar ul')
    menu.classList.add('close')
});

const links = document.querySelectorAll('.navbar ul li a')
links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('close')
    })
})
