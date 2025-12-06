if(window.location.host.toLowerCase().includes("hyrinth.com")) {
    if(window.location.href.toLowerCase().includes(".html")||window.location.href.toLowerCase().includes("/index")) {
        window.location.href = window.location.href.replace("/index.html", "").replace("/index", "").replace(".html", "");
    }
}