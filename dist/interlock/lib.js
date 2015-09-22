(function () {
  window['__interlock__'].load({
    'd2cb75bb68350d04fb8ad0b7a5c9d4a858b0d1fe': {
      deps: ['d9baa92227f3d76a0288db4fa78b31b0c61ae45f'],
      fn: function (require, module, exports) {
        'use strict';
        module.exports = function () {
          var foo = require('d9baa92227f3d76a0288db4fa78b31b0c61ae45f');
          return { foo: foo };
        }();
      }
    },
    'd9baa92227f3d76a0288db4fa78b31b0c61ae45f': {
      deps: [],
      fn: function (require, module, exports) {
        'use strict';
        module.exports = function () {
          return 'Hi. I\'m foo.';
        }();
      }
    }
  });
}());