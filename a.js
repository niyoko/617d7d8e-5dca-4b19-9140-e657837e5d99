(function(){
  setTimeout(function() {
    var $a = $('<div />');
    $a.css('z-index', '10000');
    $a.css('position', 'fixed');
    $a.css('top', '0');
    $a.css('bottom', '0');
    $a.css('left', '0');
    $a.css('right', '0');
    $('body').append($a);
  }, 2000);
})();
