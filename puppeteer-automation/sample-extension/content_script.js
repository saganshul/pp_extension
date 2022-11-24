function updateImages() {
    let images = document.getElementsByTagName('img');
    console.log(images);
    images[0].src = 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI';
}

(function () {
    window.addEventListener('load', function () {
        console.log('here');
        updateImages();
    });
})();
