if(window.location.host.toLowerCase().includes("hyrinth.com")&&window.location.href.toLowerCase().includes(".html")) {
    window.location.href = window.location.href.replace(".html", "").replace("index.html", "");
}
if(window.location.host.toLowerCase().includes("hyrinth.com")&&window.location.href.toLowerCase().includes("index")) {
    window.location.href = window.location.href.replace("index", "");
}