//function showPage(pageID) {
    //document.querySelectorAll('.page').forEach(c => c.classList.add('hidden'));

    //const page = document.getElementById(pageID);
    //page.classList.remove('hidden');
    //window.scrollTo({ top: 0, behavior: "auto" });
//}

function showPage(pageId) {
    const pages = document.querySelectorAll(".page");

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