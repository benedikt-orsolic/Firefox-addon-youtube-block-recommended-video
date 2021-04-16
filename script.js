hide();

function hide() {
    console.log(window.location.href)

    // When on home page
    if( window.location.href == 'https://www.youtube.com/'  ||
        window.location.href == 'https://www.youtube.com/feed/explore') {
        // Home page recommended
        document.getElementById('page-manager').style.display = 'none';
    } else {
        // Home page recommended
        document.getElementById('page-manager').style.display = 'block';
    }
    

    // Comments
    document.getElementById('comments').style.display = 'none';

    // Recommended from the video
    document.getElementById('secondary').style.display = 'none';
    // hide sometimes not working ??
    document.getElementById('secondary').remove();


    requestAnimationFrame(hide);
}