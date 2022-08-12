function route(name) {
    eval(`${name}.init()`);
    const element = document.getElementById('content');
    element.classList.add('animated', 'bounceInLeft');
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    setTimeout(() => {
        element.classList.remove('animated', 'bounceInLeft');
    }, 1000);
}