//hide();

setInterval(hide, 1000);

function hide() {
    console.log(window.location.href)

    // When on home page
    if( window.location.href == 'https://www.youtube.com/'  ||
        window.location.href == 'https://www.youtube.com/feed/explore') {
        
        window.location.replace("https://www.youtube.com/feed/subscriptions");
    }
    

    // Comments
    document.getElementById('comments').style.display = 'none';

    // Recommended from the video
    document.getElementById('secondary').style.display = 'none';
    // hide sometimes not working ??
    document.getElementById('secondary').remove();


    //requestAnimationFrame(hide);
}