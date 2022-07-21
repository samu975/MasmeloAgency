var target = document.querySelector('.nosotros--clientes-data__text');
target.ratio = 0


anime({
    targets: target,
    borderRadius: 0,
    ratio: 100,
    duration: 3000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true,
    update: function() {
      target.setAttribute('data-ratio', Math.round(target.ratio));
    },
  })