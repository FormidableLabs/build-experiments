(function () {
  window['__interlock__'].load({
    '6dcc6f54c68dd896e04134535fd9ee0c482fd1ac': {
      deps: [],
      fn: function (require, module, exports) {
        /* BUG: Interlock can't handle this form (wp, rjs can).*/
        /* define([], "Hi. I'm foo.");*/
        'use strict';
        module.exports = function () {
          return 'Hi. I\'m foo.';
        }();
      }
    }
  });
}());