function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(removeLogo);
function removeLogo(){
    var allImages = document.getElementsByTagName("img");
    var target;
    for(var i = 0, max = allImages.length; i < max; i++){
        if (allImages[i].src === "https://cdn.rawgit.com/000webhost/logo/e9bd13f7/footer-powered-by-000webhost-white2.png"){
            target = allImages[i];
            target.remove();
            break;
        }
    }
}