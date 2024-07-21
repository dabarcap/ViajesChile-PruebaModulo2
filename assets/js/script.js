$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 600, 'easeInOutQuint');
      event.preventDefault();
    });
  });

  const nombre = document.querySelector('.Nombre');
  nombre.addEventListener('mouseleave', function() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
      tooltip.parentNode.removeChild(tooltip);
    }
  });

  const logo = document.querySelector('.Logo');
  logo.addEventListener('mouseleave', function() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
      tooltip.parentNode.removeChild(tooltip);
    }
  });

  const enviarButton = document.querySelector('.boton-enviar');
  enviarButton.addEventListener('mouseleave', function() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
      tooltip.parentNode.removeChild(tooltip);
    }
  });