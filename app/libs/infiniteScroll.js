function infiniteScroll(
    selector,
    loadmoreHTML,
    padding,
    callback
) {

    console.log(
        $(`${selector}`),
        loadmoreHTML,
        padding,
        callback
    );
    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // alert("you're at the bottom of the page");
            eval(`${callback}()`)
        }
    };
}