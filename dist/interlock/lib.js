(function () {
  window['__interlock__'].load({
    'a04e5850bb1396f2b7fcaaa8142b37de715c4cb0': {
      deps: ['73b07f075a43e28c4a0d0e67efa2a260d22bf369'],
      fn: function (require, module, exports) {
        'use strict';
        module.exports = function () {
          var foo = require('73b07f075a43e28c4a0d0e67efa2a260d22bf369');
          return { foo: foo };
        }();
      }
    },
    '73b07f075a43e28c4a0d0e67efa2a260d22bf369': {
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