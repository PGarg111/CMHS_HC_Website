function showPage(pageID) {
    document.querySelectorAll('.page').forEach(c => c.classList.add('hidden'));

    const page = document.getElementById(pageID);
    page.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: "auto" });
}

function calendar(){
    
}