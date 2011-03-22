(function($) {
  Sammy.log('Loading ...');
  var app = $.sammy('#container', function() {
    this.use('Couch');

    var clicked = false;
    this.before(function() {
      var log = this.path;
      if (clicked) {
        log += "<em> clicked " + clicked.attr('href') + '</em>';
        clicked = false;
      }
      $('#log').append('<li>' + log + '</li>');
    });

    this.get(/\/$/, function() {
      $('#at').text('IN THE BEGINNING!');
    });

    this.get('/push/:push_id', function(ctx) {
      $('#at').text(this.params.push_id);
    });

    this.bind('run', function() {
      $('a').click(function() {
        clicked = $(this);
      });

      var info = "Your browser <strong>" + navigator.userAgent + "<strong> ";
      var support = false;
      if (this.app._location_proxy.has_history) {
        info += " supports HTML5 History";
        $('#info').addClass('success').removeClass('warning');
      } else {
        info += " does not support HTML5 History";
      }
      $('#info').html(info);

      $(window).bind('popstate hashchange', function(e) {
        $('#log').append('<li><em>window event ' + e.type + '</em></li>');
      });
    });

  });

  $(function() {
    app.run();
  });

})(jQuery);
