(function($) {
  Sammy.log('Loading ...');
  var app = $.sammy('#container', function() {
    this.use('Couch');

    this.before(function() {
      $('#log').append('<li>' + this.path + '</li>');
    });

    this.get(/\/$/, function() {
      $('#at').text('IN THE BEGINNING!');
    });

    this.get('/push/:push_id', function(ctx) {
      $('#at').text(this.params.push_id);
    });
  });

  $(function() {
    app.run();
  });

})(jQuery);
