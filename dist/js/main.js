(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _components = require("./components");

var document = window.document;
document.addEventListener('DOMContentLoaded', function () {
  (function () {
    _components.header.init();

    _components.sidebar.init();

    _components.footer.init();

    _components.cookieBanner.init();

    document.body.classList.remove('u-scroll-lock');
  })();
});

},{"./components":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var cookieBanner = function () {
  var cookieElement = document.getElementById('cookie-banner');
  var cookieAcceptButton = document.getElementById('accept-cookies');
  var cookieRejectButton = document.getElementById('reject-cookies');
  var localStorageKey = "essen-fend-seed";

  var getLocalStorageItems = function getLocalStorageItems(storageItemKey) {
    try {
      return JSON.parse(localStorage.getItem(storageItemKey));
    } catch (e) {
      console.err(e);
      return null;
    }
  };

  var setLocalStorageItems = function setLocalStorageItems(key, obj) {
    try {
      localStorage.setItem(key, JSON.stringify(obj));
      return obj;
    } catch (e) {
      console.err(e);
      return null;
    }
  };

  var init = function init() {
    var storage = getLocalStorageItems(localStorageKey);

    if (storage === null && cookieElement && cookieAcceptButton) {
      console.log('anan');
      cookieElement.classList.add('c-cookie-banner--active');
      cookieAcceptButton.addEventListener('click', function (event) {
        event.preventDefault();
        setLocalStorageItems(localStorageKey, true);
        cookieElement.classList.remove('c-cookie-banner--active');
      });
      cookieRejectButton.addEventListener('click', function (event) {
        event.preventDefault();
        cookieElement.classList.remove('c-cookie-banner--active');
      });
    }
  };

  return {
    init: init
  };
}();

var _default = cookieBanner;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var footer = function () {
  var init = function init() {};

  return {
    init: init
  };
}();

var _default = footer;
exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var header = function () {
  var headerElement = document.getElementById('header');
  var lastScrollTop = 0;

  var stickyHeader = function stickyHeader() {
    window.addEventListener('scroll', function () {
      var st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > 200) {
        headerElement.classList.add('o-header--scrolled');
      } else {
        headerElement.classList.remove('o-header--scrolled');
      }

      if (st > lastScrollTop) {
        if (st > 100) {
          headerElement.classList.add('o-header--hide');
        }
      } else {
        headerElement.classList.remove('o-header--hide');
      }

      lastScrollTop = st <= 0 ? 0 : st;
    }, false);
  };

  var init = function init() {
    stickyHeader();
  };

  return {
    init: init
  };
}();

var _default = header;
exports["default"] = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "header", {
  enumerable: true,
  get: function get() {
    return _header["default"];
  }
});
Object.defineProperty(exports, "sidebar", {
  enumerable: true,
  get: function get() {
    return _sidebar["default"];
  }
});
Object.defineProperty(exports, "footer", {
  enumerable: true,
  get: function get() {
    return _footer["default"];
  }
});
Object.defineProperty(exports, "cookieBanner", {
  enumerable: true,
  get: function get() {
    return _cookieBanner["default"];
  }
});

var _header = _interopRequireDefault(require("./header"));

var _sidebar = _interopRequireDefault(require("./sidebar"));

var _footer = _interopRequireDefault(require("./footer"));

var _cookieBanner = _interopRequireDefault(require("./cookie-banner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./cookie-banner":2,"./footer":3,"./header":4,"./sidebar":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var sidebar = function () {
  var openSidebar = function openSidebar() {
    var button = document.getElementById('sidebar-toggle');
    var sidebar = document.getElementById('sidebar');
    button.addEventListener('click', function () {
      sidebar.classList.add('o-sidebar--active');
      document.body.classList.add('u-scroll-lock');
    });
  };

  var closeSidebar = function closeSidebar() {
    var button = document.getElementById('sidebar-close');
    var sidebar = document.getElementById('sidebar');
    button.addEventListener('click', function () {
      document.body.classList.remove('u-scroll-lock');
      sidebar.classList.remove('o-sidebar--active');
    });
  };

  var init = function init() {
    openSidebar();
    closeSidebar();
  };

  return {
    init: init
  };
}();

var _default = sidebar;
exports["default"] = _default;

},{}]},{},[1]);

//# sourceMappingURL=main.js.map
