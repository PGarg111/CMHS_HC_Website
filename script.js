//function showPage(pageID) {
//document.querySelectorAll('.page').forEach(c => c.classList.add('hidden'));

//const page = document.getElementById(pageID);
//page.classList.remove('hidden');
//window.scrollTo({ top: 0, behavior: "auto" });
//}

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    if (!pageId) {
        const params = new URLSearchParams(window.location.search);
        pageId = params.get("pageid");
    }

    pages.forEach(page => {
        if (page.id === pageId) {
            page.classList.remove("hidden");
        } else {
            page.classList.add("hidden");
        }
    });


    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, 150);
}


function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}


track.innerHTML += track.innerHTML;

track.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
track.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');

const track = document.getElementById('track');
track.innerHTML += track.innerHTML;