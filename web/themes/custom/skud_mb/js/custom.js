(function ($) {
  $(document).ready(function($) {

    //header-bg-image navbar-fixed
    var header = $('#header');
    var headerHeight = header.outerHeight();
    var navbar = $('.navbar-fixed #navbar');
    var headerBgHeight = headerHeight - 192;

    $(document).scroll(function(e){
      var scrollPercent = (headerBgHeight - window.scrollY) / headerBgHeight;
      if (window.scrollY > headerHeight - 128) {
        $('body').addClass('scrolled');
      }
      else {
        $('body').removeClass('scrolled');
      }
      if (window.scrollY > headerHeight - 728) {
        $('.action-call .text').addClass('scrolled');
      }
      else {
        $('.action-call .text').removeClass('scrolled');
      }
    });

    // navbar-search
    $('#navbar-search-toggle').click(function (e) {
      $('body').addClass('navbar-search-open');
      $('#edit-key').focus();
      e.stopPropagation();
      e.preventDefault();
    });

    $('.rd-navbar--is-clone #navbar-search-toggle').click(function (e) {
      $('body').addClass('navbar-search-open');
      $('#edit-key').focus();
      e.stopPropagation();
      e.preventDefault();
    });

    $('#edit-key').blur(function() {
      $('body').removeClass('navbar-search-open');
    });
  });
}(jQuery));

(function ($) {
  $( "[id*='accordion']" ).accordion({
    collapsible: true,
    active: false,
    heightStyle: "content",
    autoHeight: false
  });
}(jQuery));

(function ($) {
  $('.full-smeta').click(function(e) {
    e.preventDefault();
    $(this).closest('.full-smeta-wrapper').toggleClass('max-height-initial');
    $('html, body').animate({
      scrollTop: $(this).closest('.full-smeta-wrapper').offset().top -250 }, 850);
  });
  $('.funny-btn').hover(function() {
    $('#funny-pic').removeClass('hidden');
  }, function() {
    $('#funny-pic').addClass('hidden');
  });
}(jQuery));

(function ($) {
  $(document).ready(function(){
    $('.preview img').hover(function(e) {
      $(e.target).closest(".preview img").addClass('transition');
    }, function() {
        $(".preview img").removeClass('transition');
    }); 
  });

  $(document).ready(function(){
    $('input[type="number"]').attr('onkeypress', 'if(this.value.length==7) return false;');
  });
}(jQuery));

//(function ($) {
//  $(document).ready(function(){
//    window.oncontextmenu = function(event) {
//      event.preventDefault();
//      event.stopPropagation();
//      return false;
//    };
//  });
//}(jQuery));

(function ($, Drupal) {
  Drupal.behaviors.addCustomClassToButton = {
    attach: function (context, settings) {
      // Function to add custom class to button.
      var addCustomClass = function() {
        $(context).find('.ui-widget .form-actions button').addClass('btn btn-form btn-patina');
      };

      // MutationObserver configuration
      var observerConfig = { childList: true, subtree: true };

      // Callback function to execute when mutations are observed
      var mutationCallback = function(mutationsList, observer) {
        for(var mutation of mutationsList) {
          if (mutation.type === 'childList' && mutation.addedNodes.length) {
            addCustomClass();
          }
        }
      };

      // Create an observer instance
      var observer = new MutationObserver(mutationCallback);

      // Start observing the target node for configured mutations
      observer.observe(document.body, observerConfig);

      // Trigger the behavior when the page is initially loaded
      addCustomClass();
    }
  };
})(jQuery, Drupal);
