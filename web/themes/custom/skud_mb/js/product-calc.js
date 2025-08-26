(function ($, Drupal, window, document, undefined) {
  // Прикрепляем наши функции к объекту window
  window.toggleCheckbox = function(id) {
    var checkbox = document.getElementById(id);
    checkbox.checked = !checkbox.checked;
    calculateTotal();

    // Make related checkbox inactive
    var relatedCheckboxId = checkbox.getAttribute('data-related-checkbox');
    var relatedCheckbox = document.getElementById(relatedCheckboxId);
    if (relatedCheckbox) {
      var relatedLabelOption = $(relatedCheckbox).closest('.label-option');
      if (checkbox.checked) {
        relatedLabelOption.addClass('inactive');
      } else {
        relatedLabelOption.removeClass('inactive');
      }
    }
  };

  window.calculateTotal = function() {
    var selectedProduct = $('input[name="product"]:checked').val();
    var total = parseInt(selectedProduct);
    var options = $('.toggle-checkbox:checked');

    options.each(function() {
      var optionPrice = parseInt($('#optionPrice' + $(this).attr('id').slice(-1)).text());
      total += optionPrice;
    });

    // Get the current total price
    var currentTotal = parseInt($('#total').text().replace(/[^\d]/g, ''));

    // Animate the total price change
    $('#total').prop('counter', currentTotal).animate({
      counter: total
    }, {
      duration: 400,
      step: function(now) {
        $(this).text(Math.round(now).toLocaleString('ru-RU') + ' ₽');
      }
    });
  };

  $(document).ready(function() {
    // Установка product1 выбранным по умолчанию
    $('#product1').prop('checked', true);
    calculateTotal();

    // Show/hide calc button
//    $(window).scroll(function() {
//      if ($(this).scrollTop() > 500) {
//        if ($('.calc-open').length === 0) {
//          var calcOpen = $('<div class="calc-open">+ Калькулятор</div>');
//          calcOpen.hide().appendTo('body').fadeIn();
//        }
//      } else {
//        $('.calc-open').fadeOut(function() {
//          $(this).remove();
//        });
//      }
//    });
//
//    // Close/open calc
//    $('body').on('click', '.calc-open', function() {
//      $('.product-calc').fadeIn(200);
//    });
//
//    $('.close-icon').click(function() {
//      $('.product-calc').fadeOut(200);
//    });
  });

  // Обработчик события для чекбоксов с классом .toggle-checkbox
  $('.toggle-checkbox').on('change', function() {
    calculateTotal();
  });

  // Обработчик события для радио-кнопок
  $('input[name="product"]').on('change', function() {
    calculateTotal();
  });

})(jQuery, Drupal, window, document);
