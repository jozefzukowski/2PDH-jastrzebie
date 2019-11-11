document.querySelector('.navIcon').addEventListener('click', function(){
    
    var nav = document.querySelector('.navCol');
    var shadow = document.querySelector('.shadowDiv');

    nav.classList.toggle('showNav');
    shadow.classList.toggle('showShadowDiv');

})

