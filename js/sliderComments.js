window.addEventListener('load', function() {
    new Glider(document.querySelector('.slider--index__caarrousel-container'), {
        slidesToShow: '1',
        slidesToScroll: 'auto',
        dots: '.franja-clientes-body__indicadores',
        arrows:{
            prev: '#arrow--before-clientes',
            next: '#arrow--next-clientes'
        }
    })    
})