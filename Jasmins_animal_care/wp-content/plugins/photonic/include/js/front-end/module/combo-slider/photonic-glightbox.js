/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!******************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \******************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 39:0-14 */
/***/ ((module) => {



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 18:0-14 */
/***/ ((module) => {



function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {



function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!************************************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \************************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 57:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../../../../node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../../../../../node_modules/@babel/runtime/helpers/typeof.js":
/*!********************************************************************!*\
  !*** ../../../../../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 7:4-18 */
/*! CommonJS bailout: module.exports is used directly at 11:4-18 */
/*! CommonJS bailout: module.exports is used directly at 19:0-14 */
/***/ ((module) => {



function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../include/ext/glightbox/glightbox.js":
/*!*********************************************!*\
  !*** ../include/ext/glightbox/glightbox.js ***!
  \*********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 4:65-79 */
/***/ ((module) => {



(function (global, factory) {
   true ? module.exports = factory() : 0;
})(void 0, function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var uid = Date.now();

  function extend() {
    var extended = {};
    var deep = true;
    var i = 0;
    var length = arguments.length;

    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }

    var merge = function merge(obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = extend(true, extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };

    for (; i < length; i++) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;
  }

  function each(collection, callback) {
    if (isNode(collection) || collection === window || collection === document) {
      collection = [collection];
    }

    if (!isArrayLike(collection) && !isObject(collection)) {
      collection = [collection];
    }

    if (size(collection) == 0) {
      return;
    }

    if (isArrayLike(collection) && !isObject(collection)) {
      var l = collection.length,
          i = 0;

      for (; i < l; i++) {
        if (callback.call(collection[i], collection[i], i, collection) === false) {
          break;
        }
      }
    } else if (isObject(collection)) {
      for (var key in collection) {
        if (has(collection, key)) {
          if (callback.call(collection[key], collection[key], key, collection) === false) {
            break;
          }
        }
      }
    }
  }

  function getNodeEvents(node) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var cache = node[uid] = node[uid] || [];
    var data = {
      all: cache,
      evt: null,
      found: null
    };

    if (name && fn && size(cache) > 0) {
      each(cache, function (cl, i) {
        if (cl.eventName == name && cl.fn.toString() == fn.toString()) {
          data.found = true;
          data.evt = i;
          return false;
        }
      });
    }

    return data;
  }

  function addEvent(eventName) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        onElement = _ref.onElement,
        withCallback = _ref.withCallback,
        _ref$avoidDuplicate = _ref.avoidDuplicate,
        avoidDuplicate = _ref$avoidDuplicate === void 0 ? true : _ref$avoidDuplicate,
        _ref$once = _ref.once,
        once = _ref$once === void 0 ? false : _ref$once,
        _ref$useCapture = _ref.useCapture,
        useCapture = _ref$useCapture === void 0 ? false : _ref$useCapture;

    var thisArg = arguments.length > 2 ? arguments[2] : undefined;
    var element = onElement || [];

    if (isString(element)) {
      element = document.querySelectorAll(element);
    }

    function handler(event) {
      if (isFunction(withCallback)) {
        withCallback.call(thisArg, event, this);
      }

      if (once) {
        handler.destroy();
      }
    }

    handler.destroy = function () {
      each(element, function (el) {
        var events = getNodeEvents(el, eventName, handler);

        if (events.found) {
          events.all.splice(events.evt, 1);
        }

        if (el.removeEventListener) el.removeEventListener(eventName, handler, useCapture);
      });
    };

    each(element, function (el) {
      var events = getNodeEvents(el, eventName, handler);

      if (el.addEventListener && avoidDuplicate && !events.found || !avoidDuplicate) {
        el.addEventListener(eventName, handler, useCapture);
        events.all.push({
          eventName: eventName,
          fn: handler
        });
      }
    });
    return handler;
  }

  function addClass(node, name) {
    each(name.split(' '), function (cl) {
      return node.classList.add(cl);
    });
  }

  function removeClass(node, name) {
    each(name.split(' '), function (cl) {
      return node.classList.remove(cl);
    });
  }

  function hasClass(node, name) {
    return node.classList.contains(name);
  }

  function closest(elem, selector) {
    while (elem !== document.body) {
      elem = elem.parentElement;

      if (!elem) {
        return false;
      }

      var matches = typeof elem.matches == 'function' ? elem.matches(selector) : elem.msMatchesSelector(selector);
      if (matches) return elem;
    }
  }

  function animateElement(element) {
    var animation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (!element || animation === '') {
      return false;
    }

    if (animation == 'none') {
      if (isFunction(callback)) callback();
      return false;
    }

    var animationEnd = whichAnimationEvent();
    var animationNames = animation.split(' ');
    each(animationNames, function (name) {
      addClass(element, 'g' + name);
    });
    addEvent(animationEnd, {
      onElement: element,
      avoidDuplicate: false,
      once: true,
      withCallback: function withCallback(event, target) {
        each(animationNames, function (name) {
          removeClass(target, 'g' + name);
        });
        if (isFunction(callback)) callback();
      }
    });
  }

  function cssTransform(node) {
    var translate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (translate == '') {
      node.style.webkitTransform = '';
      node.style.MozTransform = '';
      node.style.msTransform = '';
      node.style.OTransform = '';
      node.style.transform = '';
      return false;
    }

    node.style.webkitTransform = translate;
    node.style.MozTransform = translate;
    node.style.msTransform = translate;
    node.style.OTransform = translate;
    node.style.transform = translate;
  }

  function show(element) {
    element.style.display = 'block';
  }

  function hide(element) {
    element.style.display = 'none';
  }

  function createHTML(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;

    while (temp.firstChild) {
      frag.appendChild(temp.firstChild);
    }

    return frag;
  }

  function windowSize() {
    return {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    };
  }

  function whichAnimationEvent() {
    var t,
        el = document.createElement("fakeelement");
    var animations = {
      animation: "animationend",
      OAnimation: "oAnimationEnd",
      MozAnimation: "animationend",
      WebkitAnimation: "webkitAnimationEnd"
    };

    for (t in animations) {
      if (el.style[t] !== undefined) {
        return animations[t];
      }
    }
  }

  function whichTransitionEvent() {
    var t,
        el = document.createElement("fakeelement");
    var transitions = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }

  function createIframe(config) {
    var url = config.url,
        allow = config.allow,
        callback = config.callback,
        appendTo = config.appendTo;
    var iframe = document.createElement('iframe');
    iframe.className = 'vimeo-video gvideo';
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    if (allow) {
      iframe.setAttribute('allow', allow);
    }

    iframe.onload = function () {
      addClass(iframe, 'node-ready');

      if (isFunction(callback)) {
        callback();
      }
    };

    if (appendTo) {
      appendTo.appendChild(iframe);
    }

    return iframe;
  }

  function waitUntil(check, onComplete, delay, timeout) {
    if (check()) {
      onComplete();
      return;
    }

    if (!delay) delay = 100;
    var timeoutPointer;
    var intervalPointer = setInterval(function () {
      if (!check()) return;
      clearInterval(intervalPointer);
      if (timeoutPointer) clearTimeout(timeoutPointer);
      onComplete();
    }, delay);
    if (timeout) timeoutPointer = setTimeout(function () {
      clearInterval(intervalPointer);
    }, timeout);
  }

  function injectAssets(url, waitFor, callback) {
    if (isNil(url)) {
      console.error('Inject videos api error');
      return;
    }

    if (isFunction(waitFor)) {
      callback = waitFor;
      waitFor = false;
    }

    var found;

    if (url.indexOf('.css') !== -1) {
      found = document.querySelectorAll('link[href="' + url + '"]');

      if (found && found.length > 0) {
        if (isFunction(callback)) callback();
        return;
      }

      var head = document.getElementsByTagName("head")[0];
      var headStyles = head.querySelectorAll('link[rel="stylesheet"]');
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = url;
      link.media = 'all';

      if (headStyles) {
        head.insertBefore(link, headStyles[0]);
      } else {
        head.appendChild(link);
      }

      if (isFunction(callback)) callback();
      return;
    }

    found = document.querySelectorAll('script[src="' + url + '"]');

    if (found && found.length > 0) {
      if (isFunction(callback)) {
        if (isString(waitFor)) {
          waitUntil(function () {
            return typeof window[waitFor] !== 'undefined';
          }, function () {
            callback();
          });
          return false;
        }

        callback();
      }

      return;
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    script.onload = function () {
      if (isFunction(callback)) {
        if (isString(waitFor)) {
          waitUntil(function () {
            return typeof window[waitFor] !== 'undefined';
          }, function () {
            callback();
          });
          return false;
        }

        callback();
      }
    };

    document.body.appendChild(script);
    return;
  }

  function isMobile() {
    return 'navigator' in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
  }

  function isTouch() {
    return isMobile() !== null || document.createTouch !== undefined || 'ontouchstart' in window || 'onmsgesturechange' in window || navigator.msMaxTouchPoints;
  }

  function isFunction(f) {
    return typeof f === 'function';
  }

  function isString(s) {
    return typeof s === 'string';
  }

  function isNode(el) {
    return !!(el && el.nodeType && el.nodeType == 1);
  }

  function isArray(ar) {
    return Array.isArray(ar);
  }

  function isArrayLike(ar) {
    return ar && ar.length && isFinite(ar.length);
  }

  function isObject(o) {
    var type = _typeof(o);

    return type === 'object' && o != null && !isFunction(o) && !isArray(o);
  }

  function isNil(o) {
    return o == null;
  }

  function has(obj, key) {
    return obj !== null && hasOwnProperty.call(obj, key);
  }

  function size(o) {
    if (isObject(o)) {
      if (o.keys) {
        return o.keys().length;
      }

      var l = 0;

      for (var k in o) {
        if (has(o, k)) {
          l++;
        }
      }

      return l;
    } else {
      return o.length;
    }
  }

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function keyboardNavigation(instance) {
    if (instance.events.hasOwnProperty('keyboard')) {
      return false;
    }

    instance.events['keyboard'] = addEvent('keydown', {
      onElement: window,
      withCallback: function withCallback(event, target) {
        event = event || window.event;
        var key = event.keyCode;

        if (key == 9) {
          var activeElement = document.activeElement && document.activeElement.nodeName ? document.activeElement.nodeName.toLocaleLowerCase() : false;

          if (activeElement == 'input' || activeElement == 'textarea' || activeElement == 'button') {
            return;
          }

          event.preventDefault();
          var btns = document.querySelectorAll('.gbtn');

          if (!btns || btns.length <= 0) {
            return;
          }

          var focused = _toConsumableArray(btns).filter(function (item) {
            return hasClass(item, 'focused');
          });

          if (!focused.length) {
            var first = document.querySelector('.gbtn[tabindex="0"]');

            if (first) {
              first.focus();
              addClass(first, 'focused');
            }

            return;
          }

          btns.forEach(function (element) {
            return removeClass(element, 'focused');
          });
          var tabindex = focused[0].getAttribute('tabindex');
          tabindex = tabindex ? tabindex : '0';
          var newIndex = parseInt(tabindex) + 1;

          if (newIndex > btns.length - 1) {
            newIndex = '0';
          }

          var next = document.querySelector(".gbtn[tabindex=\"".concat(newIndex, "\"]"));

          if (next) {
            next.focus();
            addClass(next, 'focused');
          }
        }

        if (key == 39) instance.nextSlide();
        if (key == 37) instance.prevSlide();
        if (key == 27) instance.close();
      }
    });
  }

  function getLen(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
  }

  function dot(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y;
  }

  function getAngle(v1, v2) {
    var mr = getLen(v1) * getLen(v2);
    if (mr === 0) return 0;
    var r = dot(v1, v2) / mr;
    if (r > 1) r = 1;
    return Math.acos(r);
  }

  function cross(v1, v2) {
    return v1.x * v2.y - v2.x * v1.y;
  }

  function getRotateAngle(v1, v2) {
    var angle = getAngle(v1, v2);

    if (cross(v1, v2) > 0) {
      angle *= -1;
    }

    return angle * 180 / Math.PI;
  }

  var EventsHandlerAdmin = function () {
    function EventsHandlerAdmin(el) {
      _classCallCheck(this, EventsHandlerAdmin);

      this.handlers = [];
      this.el = el;
    }

    _createClass(EventsHandlerAdmin, [{
      key: "add",
      value: function add(handler) {
        this.handlers.push(handler);
      }
    }, {
      key: "del",
      value: function del(handler) {
        if (!handler) this.handlers = [];

        for (var i = this.handlers.length; i >= 0; i--) {
          if (this.handlers[i] === handler) {
            this.handlers.splice(i, 1);
          }
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch() {
        for (var i = 0, len = this.handlers.length; i < len; i++) {
          var handler = this.handlers[i];
          if (typeof handler === 'function') handler.apply(this.el, arguments);
        }
      }
    }]);

    return EventsHandlerAdmin;
  }();

  function wrapFunc(el, handler) {
    var EventshandlerAdmin = new EventsHandlerAdmin(el);
    EventshandlerAdmin.add(handler);
    return EventshandlerAdmin;
  }

  var TouchEvents = function () {
    function TouchEvents(el, option) {
      _classCallCheck(this, TouchEvents);

      this.element = typeof el == 'string' ? document.querySelector(el) : el;
      this.start = this.start.bind(this);
      this.move = this.move.bind(this);
      this.end = this.end.bind(this);
      this.cancel = this.cancel.bind(this);
      this.element.addEventListener("touchstart", this.start, false);
      this.element.addEventListener("touchmove", this.move, false);
      this.element.addEventListener("touchend", this.end, false);
      this.element.addEventListener("touchcancel", this.cancel, false);
      this.preV = {
        x: null,
        y: null
      };
      this.pinchStartLen = null;
      this.zoom = 1;
      this.isDoubleTap = false;

      var noop = function noop() {};

      this.rotate = wrapFunc(this.element, option.rotate || noop);
      this.touchStart = wrapFunc(this.element, option.touchStart || noop);
      this.multipointStart = wrapFunc(this.element, option.multipointStart || noop);
      this.multipointEnd = wrapFunc(this.element, option.multipointEnd || noop);
      this.pinch = wrapFunc(this.element, option.pinch || noop);
      this.swipe = wrapFunc(this.element, option.swipe || noop);
      this.tap = wrapFunc(this.element, option.tap || noop);
      this.doubleTap = wrapFunc(this.element, option.doubleTap || noop);
      this.longTap = wrapFunc(this.element, option.longTap || noop);
      this.singleTap = wrapFunc(this.element, option.singleTap || noop);
      this.pressMove = wrapFunc(this.element, option.pressMove || noop);
      this.twoFingerPressMove = wrapFunc(this.element, option.twoFingerPressMove || noop);
      this.touchMove = wrapFunc(this.element, option.touchMove || noop);
      this.touchEnd = wrapFunc(this.element, option.touchEnd || noop);
      this.touchCancel = wrapFunc(this.element, option.touchCancel || noop);
      this._cancelAllHandler = this.cancelAll.bind(this);
      window.addEventListener('scroll', this._cancelAllHandler);
      this.delta = null;
      this.last = null;
      this.now = null;
      this.tapTimeout = null;
      this.singleTapTimeout = null;
      this.longTapTimeout = null;
      this.swipeTimeout = null;
      this.x1 = this.x2 = this.y1 = this.y2 = null;
      this.preTapPosition = {
        x: null,
        y: null
      };
    }

    _createClass(TouchEvents, [{
      key: "start",
      value: function start(evt) {
        if (!evt.touches) return;
        this.now = Date.now();
        this.x1 = evt.touches[0].pageX;
        this.y1 = evt.touches[0].pageY;
        this.delta = this.now - (this.last || this.now);
        this.touchStart.dispatch(evt, this.element);

        if (this.preTapPosition.x !== null) {
          this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30;
          if (this.isDoubleTap) clearTimeout(this.singleTapTimeout);
        }

        this.preTapPosition.x = this.x1;
        this.preTapPosition.y = this.y1;
        this.last = this.now;
        var preV = this.preV,
            len = evt.touches.length;

        if (len > 1) {
          this._cancelLongTap();

          this._cancelSingleTap();

          var v = {
            x: evt.touches[1].pageX - this.x1,
            y: evt.touches[1].pageY - this.y1
          };
          preV.x = v.x;
          preV.y = v.y;
          this.pinchStartLen = getLen(preV);
          this.multipointStart.dispatch(evt, this.element);
        }

        this._preventTap = false;
        this.longTapTimeout = setTimeout(function () {
          this.longTap.dispatch(evt, this.element);
          this._preventTap = true;
        }.bind(this), 750);
      }
    }, {
      key: "move",
      value: function move(evt) {
        if (!evt.touches) return;
        var preV = this.preV,
            len = evt.touches.length,
            currentX = evt.touches[0].pageX,
            currentY = evt.touches[0].pageY;
        this.isDoubleTap = false;

        if (len > 1) {
          var sCurrentX = evt.touches[1].pageX,
              sCurrentY = evt.touches[1].pageY;
          var v = {
            x: evt.touches[1].pageX - currentX,
            y: evt.touches[1].pageY - currentY
          };

          if (preV.x !== null) {
            if (this.pinchStartLen > 0) {
              evt.zoom = getLen(v) / this.pinchStartLen;
              this.pinch.dispatch(evt, this.element);
            }

            evt.angle = getRotateAngle(v, preV);
            this.rotate.dispatch(evt, this.element);
          }

          preV.x = v.x;
          preV.y = v.y;

          if (this.x2 !== null && this.sx2 !== null) {
            evt.deltaX = (currentX - this.x2 + sCurrentX - this.sx2) / 2;
            evt.deltaY = (currentY - this.y2 + sCurrentY - this.sy2) / 2;
          } else {
            evt.deltaX = 0;
            evt.deltaY = 0;
          }

          this.twoFingerPressMove.dispatch(evt, this.element);
          this.sx2 = sCurrentX;
          this.sy2 = sCurrentY;
        } else {
          if (this.x2 !== null) {
            evt.deltaX = currentX - this.x2;
            evt.deltaY = currentY - this.y2;
            var movedX = Math.abs(this.x1 - this.x2),
                movedY = Math.abs(this.y1 - this.y2);

            if (movedX > 10 || movedY > 10) {
              this._preventTap = true;
            }
          } else {
            evt.deltaX = 0;
            evt.deltaY = 0;
          }

          this.pressMove.dispatch(evt, this.element);
        }

        this.touchMove.dispatch(evt, this.element);

        this._cancelLongTap();

        this.x2 = currentX;
        this.y2 = currentY;

        if (len > 1) {
          evt.preventDefault();
        }
      }
    }, {
      key: "end",
      value: function end(evt) {
        if (!evt.changedTouches) return;

        this._cancelLongTap();

        var self = this;

        if (evt.touches.length < 2) {
          this.multipointEnd.dispatch(evt, this.element);
          this.sx2 = this.sy2 = null;
        }

        if (this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30) {
          evt.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2);
          this.swipeTimeout = setTimeout(function () {
            self.swipe.dispatch(evt, self.element);
          }, 0);
        } else {
          this.tapTimeout = setTimeout(function () {
            if (!self._preventTap) {
              self.tap.dispatch(evt, self.element);
            }

            if (self.isDoubleTap) {
              self.doubleTap.dispatch(evt, self.element);
              self.isDoubleTap = false;
            }
          }, 0);

          if (!self.isDoubleTap) {
            self.singleTapTimeout = setTimeout(function () {
              self.singleTap.dispatch(evt, self.element);
            }, 250);
          }
        }

        this.touchEnd.dispatch(evt, this.element);
        this.preV.x = 0;
        this.preV.y = 0;
        this.zoom = 1;
        this.pinchStartLen = null;
        this.x1 = this.x2 = this.y1 = this.y2 = null;
      }
    }, {
      key: "cancelAll",
      value: function cancelAll() {
        this._preventTap = true;
        clearTimeout(this.singleTapTimeout);
        clearTimeout(this.tapTimeout);
        clearTimeout(this.longTapTimeout);
        clearTimeout(this.swipeTimeout);
      }
    }, {
      key: "cancel",
      value: function cancel(evt) {
        this.cancelAll();
        this.touchCancel.dispatch(evt, this.element);
      }
    }, {
      key: "_cancelLongTap",
      value: function _cancelLongTap() {
        clearTimeout(this.longTapTimeout);
      }
    }, {
      key: "_cancelSingleTap",
      value: function _cancelSingleTap() {
        clearTimeout(this.singleTapTimeout);
      }
    }, {
      key: "_swipeDirection",
      value: function _swipeDirection(x1, x2, y1, y2) {
        return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
      }
    }, {
      key: "on",
      value: function on(evt, handler) {
        if (this[evt]) {
          this[evt].add(handler);
        }
      }
    }, {
      key: "off",
      value: function off(evt, handler) {
        if (this[evt]) {
          this[evt].del(handler);
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.singleTapTimeout) clearTimeout(this.singleTapTimeout);
        if (this.tapTimeout) clearTimeout(this.tapTimeout);
        if (this.longTapTimeout) clearTimeout(this.longTapTimeout);
        if (this.swipeTimeout) clearTimeout(this.swipeTimeout);
        this.element.removeEventListener("touchstart", this.start);
        this.element.removeEventListener("touchmove", this.move);
        this.element.removeEventListener("touchend", this.end);
        this.element.removeEventListener("touchcancel", this.cancel);
        this.rotate.del();
        this.touchStart.del();
        this.multipointStart.del();
        this.multipointEnd.del();
        this.pinch.del();
        this.swipe.del();
        this.tap.del();
        this.doubleTap.del();
        this.longTap.del();
        this.singleTap.del();
        this.pressMove.del();
        this.twoFingerPressMove.del();
        this.touchMove.del();
        this.touchEnd.del();
        this.touchCancel.del();
        this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null;
        window.removeEventListener('scroll', this._cancelAllHandler);
        return null;
      }
    }]);

    return TouchEvents;
  }();

  function resetSlideMove(slide) {
    var transitionEnd = whichTransitionEvent();
    var media = hasClass(slide, 'gslide-media') ? slide : slide.querySelector('.gslide-media');
    var desc = slide.querySelector('.gslide-description');
    addClass(media, 'greset');
    cssTransform(media, "translate3d(0, 0, 0)");
    var animation = addEvent(transitionEnd, {
      onElement: media,
      once: true,
      withCallback: function withCallback(event, target) {
        removeClass(media, 'greset');
      }
    });
    media.style.opacity = '';

    if (desc) {
      desc.style.opacity = '';
    }
  }

  function touchNavigation(instance) {
    if (instance.events.hasOwnProperty('touch')) {
      return false;
    }

    var winSize = windowSize();
    var winWidth = winSize.width;
    var winHeight = winSize.height;
    var process = false;
    var currentSlide = null;
    var media = null;
    var mediaImage = null;
    var doingMove = false;
    var initScale = 1;
    var maxScale = 4.5;
    var currentScale = 1;
    var doingZoom = false;
    var imageZoomed = false;
    var zoomedPosX = null;
    var zoomedPosY = null;
    var lastZoomedPosX = null;
    var lastZoomedPosY = null;
    var hDistance;
    var vDistance;
    var hDistancePercent = 0;
    var vDistancePercent = 0;
    var vSwipe = false;
    var hSwipe = false;
    var startCoords = {};
    var endCoords = {};
    var xDown = 0;
    var yDown = 0;
    var isInlined;
    var sliderWrapper = document.getElementById('glightbox-slider');
    var overlay = document.querySelector('.goverlay');
    var touchInstance = new TouchEvents(sliderWrapper, {
      touchStart: function touchStart(e) {
        if (hasClass(e.targetTouches[0].target, 'ginner-container') || closest(e.targetTouches[0].target, '.gslide-desc')) {
          process = false;
          return false;
        }

        process = true;
        endCoords = e.targetTouches[0];
        startCoords.pageX = e.targetTouches[0].pageX;
        startCoords.pageY = e.targetTouches[0].pageY;
        xDown = e.targetTouches[0].clientX;
        yDown = e.targetTouches[0].clientY;
        currentSlide = instance.activeSlide;
        media = currentSlide.querySelector('.gslide-media');
        isInlined = currentSlide.querySelector('.gslide-inline');
        mediaImage = null;

        if (hasClass(media, 'gslide-image')) {
          mediaImage = media.querySelector('img');
        }

        removeClass(overlay, 'greset');
        if (e.pageX > 20 && e.pageX < window.innerWidth - 20) return;
        e.preventDefault();
      },
      touchMove: function touchMove(e) {
        if (!process) {
          return;
        }

        endCoords = e.targetTouches[0];

        if (doingZoom || imageZoomed) {
          return;
        }

        if (isInlined && isInlined.offsetHeight > winHeight) {
          var moved = startCoords.pageX - endCoords.pageX;

          if (Math.abs(moved) <= 13) {
            return false;
          }
        }

        doingMove = true;
        var xUp = e.targetTouches[0].clientX;
        var yUp = e.targetTouches[0].clientY;
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          vSwipe = false;
          hSwipe = true;
        } else {
          hSwipe = false;
          vSwipe = true;
        }

        hDistance = endCoords.pageX - startCoords.pageX;
        hDistancePercent = hDistance * 100 / winWidth;
        vDistance = endCoords.pageY - startCoords.pageY;
        vDistancePercent = vDistance * 100 / winHeight;
        var opacity;

        if (vSwipe && mediaImage) {
          opacity = 1 - Math.abs(vDistance) / winHeight;
          overlay.style.opacity = opacity;

          if (instance.settings.touchFollowAxis) {
            hDistancePercent = 0;
          }
        }

        if (hSwipe) {
          opacity = 1 - Math.abs(hDistance) / winWidth;
          media.style.opacity = opacity;

          if (instance.settings.touchFollowAxis) {
            vDistancePercent = 0;
          }
        }

        if (!mediaImage) {
          return cssTransform(media, "translate3d(".concat(hDistancePercent, "%, 0, 0)"));
        }

        cssTransform(media, "translate3d(".concat(hDistancePercent, "%, ").concat(vDistancePercent, "%, 0)"));
      },
      touchEnd: function touchEnd() {
        if (!process) {
          return;
        }

        doingMove = false;

        if (imageZoomed || doingZoom) {
          lastZoomedPosX = zoomedPosX;
          lastZoomedPosY = zoomedPosY;
          return;
        }

        var v = Math.abs(parseInt(vDistancePercent));
        var h = Math.abs(parseInt(hDistancePercent));

        if (v > 29 && mediaImage) {
          instance.close();
          return;
        }

        if (v < 29 && h < 25) {
          addClass(overlay, 'greset');
          overlay.style.opacity = 1;
          return resetSlideMove(media);
        }
      },
      multipointEnd: function multipointEnd() {
        setTimeout(function () {
          doingZoom = false;
        }, 50);
      },
      multipointStart: function multipointStart() {
        doingZoom = true;
        initScale = currentScale ? currentScale : 1;
      },
      pinch: function pinch(evt) {
        if (!mediaImage || doingMove) {
          return false;
        }

        doingZoom = true;
        mediaImage.scaleX = mediaImage.scaleY = initScale * evt.zoom;
        var scale = initScale * evt.zoom;
        imageZoomed = true;

        if (scale <= 1) {
          imageZoomed = false;
          scale = 1;
          lastZoomedPosY = null;
          lastZoomedPosX = null;
          zoomedPosX = null;
          zoomedPosY = null;
          mediaImage.setAttribute('style', '');
          return;
        }

        if (scale > maxScale) {
          scale = maxScale;
        }

        mediaImage.style.transform = "scale3d(".concat(scale, ", ").concat(scale, ", 1)");
        currentScale = scale;
      },
      pressMove: function pressMove(e) {
        if (imageZoomed && !doingZoom) {
          var mhDistance = endCoords.pageX - startCoords.pageX;
          var mvDistance = endCoords.pageY - startCoords.pageY;

          if (lastZoomedPosX) {
            mhDistance = mhDistance + lastZoomedPosX;
          }

          if (lastZoomedPosY) {
            mvDistance = mvDistance + lastZoomedPosY;
          }

          zoomedPosX = mhDistance;
          zoomedPosY = mvDistance;
          var style = "translate3d(".concat(mhDistance, "px, ").concat(mvDistance, "px, 0)");

          if (currentScale) {
            style += " scale3d(".concat(currentScale, ", ").concat(currentScale, ", 1)");
          }

          cssTransform(mediaImage, style);
        }
      },
      swipe: function swipe(evt) {
        if (imageZoomed) {
          return;
        }

        if (doingZoom) {
          doingZoom = false;
          return;
        }

        if (evt.direction == 'Left') {
          if (instance.index == instance.elements.length - 1) {
            return resetSlideMove(media);
          }

          instance.nextSlide();
        }

        if (evt.direction == 'Right') {
          if (instance.index == 0) {
            return resetSlideMove(media);
          }

          instance.prevSlide();
        }
      }
    });
    instance.events['touch'] = touchInstance;
  }

  var ZoomImages = function () {
    function ZoomImages(el, slide) {
      var _this = this;

      var onclose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      _classCallCheck(this, ZoomImages);

      this.img = el;
      this.slide = slide;
      this.onclose = onclose;

      if (this.img.setZoomEvents) {
        return false;
      }

      this.active = false;
      this.zoomedIn = false;
      this.dragging = false;
      this.currentX = null;
      this.currentY = null;
      this.initialX = null;
      this.initialY = null;
      this.xOffset = 0;
      this.yOffset = 0;
      this.img.addEventListener('mousedown', function (e) {
        return _this.dragStart(e);
      }, false);
      this.img.addEventListener('mouseup', function (e) {
        return _this.dragEnd(e);
      }, false);
      this.img.addEventListener('mousemove', function (e) {
        return _this.drag(e);
      }, false);
      this.img.addEventListener('click', function (e) {
        if (_this.slide.classList.contains('dragging-nav')) {
          _this.zoomOut();

          return false;
        }

        if (!_this.zoomedIn) {
          return _this.zoomIn();
        }

        if (_this.zoomedIn && !_this.dragging) {
          _this.zoomOut();
        }
      }, false);
      this.img.setZoomEvents = true;
    }

    _createClass(ZoomImages, [{
      key: "zoomIn",
      value: function zoomIn() {
        var winWidth = this.widowWidth();

        if (this.zoomedIn || winWidth <= 768) {
          return;
        }

        var img = this.img;
        img.setAttribute('data-style', img.getAttribute('style'));
        img.style.maxWidth = img.naturalWidth + 'px';
        img.style.maxHeight = img.naturalHeight + 'px';

        if (img.naturalWidth > winWidth) {
          var centerX = winWidth / 2 - img.naturalWidth / 2;
          this.setTranslate(this.img.parentNode, centerX, 0);
        }

        this.slide.classList.add('zoomed');
        this.zoomedIn = true;
      }
    }, {
      key: "zoomOut",
      value: function zoomOut() {
        this.img.parentNode.setAttribute('style', '');
        this.img.setAttribute('style', this.img.getAttribute('data-style'));
        this.slide.classList.remove('zoomed');
        this.zoomedIn = false;
        this.currentX = null;
        this.currentY = null;
        this.initialX = null;
        this.initialY = null;
        this.xOffset = 0;
        this.yOffset = 0;

        if (this.onclose && typeof this.onclose == 'function') {
          this.onclose();
        }
      }
    }, {
      key: "dragStart",
      value: function dragStart(e) {
        e.preventDefault();

        if (!this.zoomedIn) {
          this.active = false;
          return;
        }

        if (e.type === "touchstart") {
          this.initialX = e.touches[0].clientX - this.xOffset;
          this.initialY = e.touches[0].clientY - this.yOffset;
        } else {
          this.initialX = e.clientX - this.xOffset;
          this.initialY = e.clientY - this.yOffset;
        }

        if (e.target === this.img) {
          this.active = true;
          this.img.classList.add('dragging');
        }
      }
    }, {
      key: "dragEnd",
      value: function dragEnd(e) {
        var _this2 = this;

        e.preventDefault();
        this.initialX = this.currentX;
        this.initialY = this.currentY;
        this.active = false;
        setTimeout(function () {
          _this2.dragging = false;
          _this2.img.isDragging = false;

          _this2.img.classList.remove('dragging');
        }, 100);
      }
    }, {
      key: "drag",
      value: function drag(e) {
        if (this.active) {
          e.preventDefault();

          if (e.type === 'touchmove') {
            this.currentX = e.touches[0].clientX - this.initialX;
            this.currentY = e.touches[0].clientY - this.initialY;
          } else {
            this.currentX = e.clientX - this.initialX;
            this.currentY = e.clientY - this.initialY;
          }

          this.xOffset = this.currentX;
          this.yOffset = this.currentY;
          this.img.isDragging = true;
          this.dragging = true;
          this.setTranslate(this.img, this.currentX, this.currentY);
        }
      }
    }, {
      key: "onMove",
      value: function onMove(e) {
        if (!this.zoomedIn) {
          return;
        }

        var xOffset = e.clientX - this.img.naturalWidth / 2;
        var yOffset = e.clientY - this.img.naturalHeight / 2;
        this.setTranslate(this.img, xOffset, yOffset);
      }
    }, {
      key: "setTranslate",
      value: function setTranslate(node, xPos, yPos) {
        node.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
      }
    }, {
      key: "widowWidth",
      value: function widowWidth() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      }
    }]);

    return ZoomImages;
  }();

  var DragSlides = function () {
    function DragSlides() {
      var _this = this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, DragSlides);

      var dragEl = config.dragEl,
          _config$toleranceX = config.toleranceX,
          toleranceX = _config$toleranceX === void 0 ? 40 : _config$toleranceX,
          _config$toleranceY = config.toleranceY,
          toleranceY = _config$toleranceY === void 0 ? 65 : _config$toleranceY,
          _config$slide = config.slide,
          slide = _config$slide === void 0 ? null : _config$slide,
          _config$instance = config.instance,
          instance = _config$instance === void 0 ? null : _config$instance;
      this.el = dragEl;
      this.active = false;
      this.dragging = false;
      this.currentX = null;
      this.currentY = null;
      this.initialX = null;
      this.initialY = null;
      this.xOffset = 0;
      this.yOffset = 0;
      this.direction = null;
      this.lastDirection = null;
      this.toleranceX = toleranceX;
      this.toleranceY = toleranceY;
      this.toleranceReached = false;
      this.dragContainer = this.el;
      this.slide = slide;
      this.instance = instance;
      this.el.addEventListener('mousedown', function (e) {
        return _this.dragStart(e);
      }, false);
      this.el.addEventListener('mouseup', function (e) {
        return _this.dragEnd(e);
      }, false);
      this.el.addEventListener('mousemove', function (e) {
        return _this.drag(e);
      }, false);
    }

    _createClass(DragSlides, [{
      key: "dragStart",
      value: function dragStart(e) {
        if (this.slide.classList.contains('zoomed')) {
          this.active = false;
          return;
        }

        if (e.type === 'touchstart') {
          this.initialX = e.touches[0].clientX - this.xOffset;
          this.initialY = e.touches[0].clientY - this.yOffset;
        } else {
          this.initialX = e.clientX - this.xOffset;
          this.initialY = e.clientY - this.yOffset;
        }

        var clicked = e.target.nodeName.toLowerCase();
        var exludeClicks = ['input', 'select', 'textarea', 'button', 'a'];

        if (e.target.classList.contains('nodrag') || closest(e.target, '.nodrag') || exludeClicks.indexOf(clicked) !== -1) {
          this.active = false;
          return;
        }

        e.preventDefault();

        if (e.target === this.el || clicked !== 'img' && closest(e.target, '.gslide-inline')) {
          this.active = true;
          this.el.classList.add('dragging');
          this.dragContainer = closest(e.target, '.ginner-container');
        }
      }
    }, {
      key: "dragEnd",
      value: function dragEnd(e) {
        var _this2 = this;

        e && e.preventDefault();
        this.initialX = 0;
        this.initialY = 0;
        this.currentX = null;
        this.currentY = null;
        this.initialX = null;
        this.initialY = null;
        this.xOffset = 0;
        this.yOffset = 0;
        this.active = false;

        if (this.doSlideChange) {
          this.instance.preventOutsideClick = true;
          this.doSlideChange == 'right' && this.instance.prevSlide();
          this.doSlideChange == 'left' && this.instance.nextSlide();
        }

        if (this.doSlideClose) {
          this.instance.close();
        }

        if (!this.toleranceReached) {
          this.setTranslate(this.dragContainer, 0, 0, true);
        }

        setTimeout(function () {
          _this2.instance.preventOutsideClick = false;
          _this2.toleranceReached = false;
          _this2.lastDirection = null;
          _this2.dragging = false;
          _this2.el.isDragging = false;

          _this2.el.classList.remove('dragging');

          _this2.slide.classList.remove('dragging-nav');

          _this2.dragContainer.style.transform = "";
          _this2.dragContainer.style.transition = "";
        }, 100);
      }
    }, {
      key: "drag",
      value: function drag(e) {
        if (this.active) {
          e.preventDefault();
          this.slide.classList.add('dragging-nav');

          if (e.type === 'touchmove') {
            this.currentX = e.touches[0].clientX - this.initialX;
            this.currentY = e.touches[0].clientY - this.initialY;
          } else {
            this.currentX = e.clientX - this.initialX;
            this.currentY = e.clientY - this.initialY;
          }

          this.xOffset = this.currentX;
          this.yOffset = this.currentY;
          this.el.isDragging = true;
          this.dragging = true;
          this.doSlideChange = false;
          this.doSlideClose = false;
          var currentXInt = Math.abs(this.currentX);
          var currentYInt = Math.abs(this.currentY);

          if (currentXInt > 0 && currentXInt >= Math.abs(this.currentY) && (!this.lastDirection || this.lastDirection == 'x')) {
            this.yOffset = 0;
            this.lastDirection = 'x';
            this.setTranslate(this.dragContainer, this.currentX, 0);
            var doChange = this.shouldChange();

            if (!this.instance.settings.dragAutoSnap && doChange) {
              this.doSlideChange = doChange;
            }

            if (this.instance.settings.dragAutoSnap && doChange) {
              this.instance.preventOutsideClick = true;
              this.toleranceReached = true;
              this.active = false;
              this.instance.preventOutsideClick = true;
              this.dragEnd(null);
              doChange == 'right' && this.instance.prevSlide();
              doChange == 'left' && this.instance.nextSlide();
              return;
            }
          }

          if (this.toleranceY > 0 && currentYInt > 0 && currentYInt >= currentXInt && (!this.lastDirection || this.lastDirection == 'y')) {
            this.xOffset = 0;
            this.lastDirection = 'y';
            this.setTranslate(this.dragContainer, 0, this.currentY);
            var doClose = this.shouldClose();

            if (!this.instance.settings.dragAutoSnap && doClose) {
              this.doSlideClose = true;
            }

            if (this.instance.settings.dragAutoSnap && doClose) {
              this.instance.close();
            }

            return;
          }
        }
      }
    }, {
      key: "shouldChange",
      value: function shouldChange() {
        var doChange = false;
        var currentXInt = Math.abs(this.currentX);

        if (currentXInt >= this.toleranceX) {
          var dragDir = this.currentX > 0 ? 'right' : 'left';

          if (dragDir == 'left' && this.slide !== this.slide.parentNode.lastChild || dragDir == 'right' && this.slide !== this.slide.parentNode.firstChild) {
            doChange = dragDir;
          }
        }

        return doChange;
      }
    }, {
      key: "shouldClose",
      value: function shouldClose() {
        var doClose = false;
        var currentYInt = Math.abs(this.currentY);

        if (currentYInt >= this.toleranceY) {
          doClose = true;
        }

        return doClose;
      }
    }, {
      key: "setTranslate",
      value: function setTranslate(node, xPos, yPos) {
        var animated = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (animated) {
          node.style.transition = "all .2s ease";
        } else {
          node.style.transition = "";
        }

        node.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
      }
    }]);

    return DragSlides;
  }();

  function slideImage(slide, data, callback) {
    var slideMedia = slide.querySelector('.gslide-media');
    var img = new Image();
    var titleID = 'gSlideTitle_' + data.index;
    var textID = 'gSlideDesc_' + data.index;
    img.addEventListener('load', function () {
      if (isFunction(callback)) {
        callback();
      }
    }, false);
    img.src = data.href;
    img.alt = '';

    if (data.title !== '') {
      img.setAttribute('aria-labelledby', titleID);
    }

    if (data.description !== '') {
      img.setAttribute('aria-describedby', textID);
    }

    slideMedia.insertBefore(img, slideMedia.firstChild);
    return;
  }

  function slideVideo(slide, data, callback) {
    var _this = this;

    var slideContainer = slide.querySelector('.ginner-container');
    var videoID = 'gvideo' + data.index;
    var slideMedia = slide.querySelector('.gslide-media');
    var videoPlayers = this.getAllPlayers();
    addClass(slideContainer, "gvideo-container");
    slideMedia.insertBefore(createHTML('<div class="gvideo-wrapper"></div>'), slideMedia.firstChild);
    var videoWrapper = slide.querySelector('.gvideo-wrapper');
    injectAssets(this.settings.plyr.css);
    var url = data.href;
    var urlObj = new URL(url);
    var pathname = urlObj.pathname;
    var protocol = location.protocol.replace(':', '');
    var videoSource = '';
    var embedID = '';
    var customPlaceholder = false;

    if (protocol == 'file') {
      protocol = 'http';
    }

    slideMedia.style.maxWidth = data.width;
    injectAssets(this.settings.plyr.js, 'Plyr', function () {
      if (url.match(/vimeo\.com\/([0-9]*)/)) {
        var vimeoID = /vimeo.*\/(\d+)/i.exec(url);
        videoSource = 'vimeo';
        embedID = vimeoID[1];
      } // Sayontan - changed "if" to "else if"
      else if (url.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || url.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || url.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) {
          var youtubeID = getYoutubeID(url);
          videoSource = 'youtube';
          embedID = youtubeID;
        } // Sayontan - changed "if" to "else"
        else {
            //if (url.match(/\.(mp4|ogg|webm|mov)$/) !== null) {
            videoSource = 'local';
            var html = '<video id="' + videoID + '" ';
            html += "style=\"background:#000; max-width: ".concat(data.width, ";\" ");
            html += 'preload="metadata" ';
            html += 'x-webkit-airplay="allow" ';
            html += 'webkit-playsinline="" ';
            html += 'controls ';
            html += 'class="gvideo-local">'; // Sayontan - changed to consider the 'data-format' on the 'a' element, if available. Also changed the code to use a URL Object instead of parsing the URL
            // var format = url.toLowerCase().split('.').pop();

            var format = data.node.getAttribute('data-format') ? data.node.getAttribute('data-format') : pathname.toLowerCase().split('.').pop();
            var sources = {
              'mp4': '',
              'ogg': '',
              'webm': ''
            };
            format = format == 'mov' ? 'mp4' : format;
            sources[format] = url;

            for (var key in sources) {
              if (sources.hasOwnProperty(key)) {
                var videoFile = sources[key];

                if (data.hasOwnProperty(key)) {
                  videoFile = data[key];
                }

                if (videoFile !== '') {
                  html += "<source src=\"".concat(videoFile, "\" type=\"video/").concat(key, "\">");
                }
              }
            }

            html += '</video>';
            customPlaceholder = createHTML(html);
          }

      var placeholder = customPlaceholder ? customPlaceholder : createHTML("<div id=\"".concat(videoID, "\" data-plyr-provider=\"").concat(videoSource, "\" data-plyr-embed-id=\"").concat(embedID, "\"></div>"));
      addClass(videoWrapper, "".concat(videoSource, "-video gvideo"));
      videoWrapper.appendChild(placeholder);
      videoWrapper.setAttribute('data-id', videoID);
      videoWrapper.setAttribute('data-index', data.index);
      var playerConfig = has(_this.settings.plyr, 'config') ? _this.settings.plyr.config : {};
      var player = new Plyr('#' + videoID, playerConfig);
      player.on('ready', function (event) {
        var instance = event.detail.plyr;
        videoPlayers[videoID] = instance;

        if (isFunction(callback)) {
          callback();
        }
      });
      player.on('enterfullscreen', handleMediaFullScreen);
      player.on('exitfullscreen', handleMediaFullScreen);
    });
  }

  function getYoutubeID(url) {
    var videoID = '';
    url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

    if (url[2] !== undefined) {
      videoID = url[2].split(/[^0-9a-z_\-]/i);
      videoID = videoID[0];
    } else {
      videoID = url;
    }

    return videoID;
  }

  function handleMediaFullScreen(event) {
    var media = closest(event.target, '.gslide-media');

    if (event.type == 'enterfullscreen') {
      addClass(media, 'fullscreen');
    }

    if (event.type == 'exitfullscreen') {
      removeClass(media, 'fullscreen');
    }
  }

  function slideInline(slide, data, callback) {
    var _this = this;

    var slideMedia = slide.querySelector('.gslide-media');
    var hash = has(data, 'href') && data.href ? data.href.split('#').pop().trim() : false;
    var content = has(data, 'content') && data.content ? data.content : false;
    var innerContent;

    if (content) {
      if (isString(content)) {
        innerContent = createHTML("<div class=\"ginlined-content\">".concat(content, "</div>"));
      }

      if (isNode(content)) {
        if (content.style.display == 'none') {
          content.style.display = 'block';
        }

        var container = document.createElement('div');
        container.className = 'ginlined-content';
        container.appendChild(content);
        innerContent = container;
      }
    }

    if (hash) {
      var div = document.getElementById(hash);

      if (!div) {
        return false;
      }

      var cloned = div.cloneNode(true);
      cloned.style.height = data.height;
      cloned.style.maxWidth = data.width;
      addClass(cloned, 'ginlined-content');
      innerContent = cloned;
    }

    if (!innerContent) {
      console.error('Unable to append inline slide content', data);
      return false;
    }

    slideMedia.style.height = data.height;
    slideMedia.style.width = data.width;
    slideMedia.appendChild(innerContent);
    this.events['inlineclose' + hash] = addEvent('click', {
      onElement: slideMedia.querySelectorAll('.gtrigger-close'),
      withCallback: function withCallback(e) {
        e.preventDefault();

        _this.close();
      }
    });

    if (isFunction(callback)) {
      callback();
    }

    return;
  }

  function slideIframe(slide, data, callback) {
    var slideMedia = slide.querySelector('.gslide-media');
    var iframe = createIframe({
      url: data.href,
      callback: callback
    });
    slideMedia.parentNode.style.maxWidth = data.width;
    slideMedia.parentNode.style.height = data.height;
    slideMedia.appendChild(iframe);
    return;
  }

  var SlideConfigParser = function () {
    function SlideConfigParser(el, settings) {
      _classCallCheck(this, SlideConfigParser);

      this.element = el;
      this.settings = settings;
      this.defaults = {
        href: '',
        title: '',
        type: '',
        description: '',
        descPosition: 'bottom',
        effect: '',
        width: '',
        height: '',
        node: false,
        content: false,
        zoomable: true,
        draggable: true
      };
    }

    _createClass(SlideConfigParser, [{
      key: "sourceType",
      value: function sourceType(url) {
        var origin = url;
        url = url.toLowerCase();

        if (url.match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|svg)$/) !== null) {
          return 'image';
        }

        if (url.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || url.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || url.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) {
          return 'video';
        }

        if (url.match(/vimeo\.com\/([0-9]*)/)) {
          return 'video';
        }

        if (url.match(/\.(mp4|ogg|webm|mov)$/) !== null) {
          return 'video';
        }

        if (url.match(/\.(mp3|wav|wma|aac|ogg)$/) !== null) {
          return 'audio';
        }

        if (url.indexOf("#") > -1) {
          var hash = origin.split('#').pop();

          if (hash.trim() !== '') {
            return 'inline';
          }
        }

        if (url.indexOf("goajax=true") > -1) {
          return 'ajax';
        }

        return 'external';
      }
    }, {
      key: "parseConfig",
      value: function parseConfig(element, settings) {
        var _this = this;

        var data = extend({
          descPosition: settings.descPosition
        }, this.defaults);

        if (isObject(element) && !isNode(element)) {
          if (!has(element, 'type')) {
            if (has(element, 'content') && element.content) {
              element.type = 'inline';
            } else if (has(element, 'href')) {
              element.type = this.sourceType(element.href);
            }
          }

          var objectData = extend(data, element);
          this.setSize(objectData, settings);
          return objectData;
        }

        var url = '';
        var config = element.getAttribute('data-glightbox');
        var nodeType = element.nodeName.toLowerCase();
        if (nodeType === 'a') url = element.href;
        if (nodeType === 'img') url = element.src;
        data.href = url;
        each(data, function (val, key) {
          if (has(settings, key) && key !== 'width') {
            data[key] = settings[key];
          }

          var nodeData = element.dataset[key];

          if (!isNil(nodeData)) {
            data[key] = _this.sanitizeValue(nodeData);
          }
        });

        if (data.content) {
          data.type = 'inline';
        }

        if (!data.type && url) {
          data.type = this.sourceType(url);
        }

        if (!isNil(config)) {
          var cleanKeys = [];
          each(data, function (v, k) {
            cleanKeys.push(';\\s?' + k);
          });
          cleanKeys = cleanKeys.join('\\s?:|');

          if (config.trim() !== '') {
            each(data, function (val, key) {
              var str = config;
              var match = '\s?' + key + '\s?:\s?(.*?)(' + cleanKeys + '\s?:|$)';
              var regex = new RegExp(match);
              var matches = str.match(regex);

              if (matches && matches.length && matches[1]) {
                var value = matches[1].trim().replace(/;\s*$/, '');
                data[key] = _this.sanitizeValue(value);
              }
            });
          }
        } else {
          if (nodeType == 'a') {
            var title = element.title;
            if (!isNil(title) && title !== '' && (data.title == null || data.title === '')) data.title = title;
          }

          if (nodeType == 'img') {
            var alt = element.alt;
            if (!isNil(alt) && alt !== '') data.title = alt;
          }

          var desc = element.getAttribute('data-description');
          if (!isNil(desc) && desc !== '') data.description = desc;
        }

        if (data.description && data.description.substring(0, 1) == '.' && document.querySelector(data.description)) {
          data.description = document.querySelector(data.description).innerHTML;
        } else {
          var nodeDesc = element.querySelector('.glightbox-desc');

          if (nodeDesc) {
            data.description = nodeDesc.innerHTML;
          }
        }

        this.setSize(data, settings);
        this.slideConfig = data;
        return data;
      }
    }, {
      key: "setSize",
      value: function setSize(data, settings) {
        var defaultWith = data.type == 'video' ? this.checkSize(settings.videosWidth) : this.checkSize(settings.width);
        var defaultHeight = this.checkSize(settings.height);
        data.width = has(data, 'width') && data.width !== '' ? this.checkSize(data.width) : defaultWith;
        data.height = has(data, 'height') && data.height !== '' ? this.checkSize(data.height) : defaultHeight;
        return data;
      }
    }, {
      key: "checkSize",
      value: function checkSize(size) {
        return isNumber(size) ? "".concat(size, "px") : size;
      }
    }, {
      key: "sanitizeValue",
      value: function sanitizeValue(val) {
        if (val !== 'true' && val !== 'false') {
          return val;
        }

        return val === 'true';
      }
    }]);

    return SlideConfigParser;
  }();

  var Slide = function () {
    function Slide(el, instance) {
      _classCallCheck(this, Slide);

      this.element = el;
      this.instance = instance;
    }

    _createClass(Slide, [{
      key: "setContent",
      value: function setContent() {
        var _this = this;

        var slide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (hasClass(slide, 'loaded')) {
          return false;
        }

        var settings = this.instance.settings;
        var slideConfig = this.slideConfig;
        var isMobileDevice = isMobile();

        if (isFunction(settings.beforeSlideLoad)) {
          settings.beforeSlideLoad({
            index: slideConfig.index,
            slide: slide,
            player: false
          });
        }

        var type = slideConfig.type;
        var position = slideConfig.descPosition;
        var slideMedia = slide.querySelector('.gslide-media');
        var slideTitle = slide.querySelector('.gslide-title');
        var slideText = slide.querySelector('.gslide-desc');
        var slideDesc = slide.querySelector('.gdesc-inner');
        var finalCallback = callback;
        var titleID = 'gSlideTitle_' + slideConfig.index;
        var textID = 'gSlideDesc_' + slideConfig.index;

        if (isFunction(settings.afterSlideLoad)) {
          finalCallback = function finalCallback() {
            if (isFunction(callback)) {
              callback();
            }

            settings.afterSlideLoad({
              index: slideConfig.index,
              slide: slide,
              player: _this.instance.getSlidePlayerInstance(slideConfig.index)
            });
          };
        }

        if (slideConfig.title == '' && slideConfig.description == '') {
          if (slideDesc) {
            slideDesc.parentNode.parentNode.removeChild(slideDesc.parentNode);
          }
        } else {
          if (slideTitle && slideConfig.title !== '') {
            slideTitle.id = titleID;
            slideTitle.innerHTML = slideConfig.title;
          } else {
            slideTitle.parentNode.removeChild(slideTitle);
          }

          if (slideText && slideConfig.description !== '') {
            slideText.id = textID;

            if (isMobileDevice && settings.moreLength > 0) {
              slideConfig.smallDescription = this.slideShortDesc(slideConfig.description, settings.moreLength, settings.moreText);
              slideText.innerHTML = slideConfig.smallDescription;
              this.descriptionEvents(slideText, slideConfig);
            } else {
              slideText.innerHTML = slideConfig.description;
            }
          } else {
            slideText.parentNode.removeChild(slideText);
          }

          addClass(slideMedia.parentNode, "desc-".concat(position));
          addClass(slideDesc.parentNode, "description-".concat(position));
        }

        addClass(slideMedia, "gslide-".concat(type));
        addClass(slide, 'loaded');

        if (type === 'video') {
          slideVideo.apply(this.instance, [slide, slideConfig, finalCallback]);
          return;
        }

        if (type === 'external') {
          slideIframe.apply(this, [slide, slideConfig, finalCallback]);
          return;
        }

        if (type === 'inline') {
          slideInline.apply(this.instance, [slide, slideConfig, finalCallback]);

          if (slideConfig.draggable) {
            new DragSlides({
              dragEl: slide.querySelector('.gslide-inline'),
              toleranceX: settings.dragToleranceX,
              toleranceY: settings.dragToleranceY,
              slide: slide,
              instance: this.instance
            });
          }

          return;
        }

        if (type === 'image') {
          slideImage(slide, slideConfig, function () {
            var img = slide.querySelector('img');

            if (slideConfig.draggable) {
              new DragSlides({
                dragEl: img,
                toleranceX: settings.dragToleranceX,
                toleranceY: settings.dragToleranceY,
                slide: slide,
                instance: _this.instance
              });
            }

            if (slideConfig.zoomable && img.naturalWidth > img.offsetWidth) {
              addClass(img, 'zoomable');
              new ZoomImages(img, slide, function () {
                _this.instance.resize();
              });
            }

            if (isFunction(finalCallback)) {
              finalCallback();
            }
          });
          return;
        }

        if (isFunction(finalCallback)) {
          finalCallback();
        }
      }
    }, {
      key: "slideShortDesc",
      value: function slideShortDesc(string) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
        var wordBoundary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var useWordBoundary = wordBoundary;
        string = string.trim();

        if (string.length <= n) {
          return string;
        }

        var subString = string.substr(0, n - 1);

        if (!useWordBoundary) {
          return subString;
        }

        return subString + '... <a href="#" class="desc-more">' + wordBoundary + '</a>';
      }
    }, {
      key: "descriptionEvents",
      value: function descriptionEvents(desc, data) {
        var _this2 = this;

        var moreLink = desc.querySelector('.desc-more');

        if (!moreLink) {
          return false;
        }

        addEvent('click', {
          onElement: moreLink,
          withCallback: function withCallback(event, target) {
            event.preventDefault();
            var body = document.body;
            var desc = closest(target, '.gslide-desc');

            if (!desc) {
              return false;
            }

            desc.innerHTML = data.description;
            addClass(body, 'gdesc-open');
            var shortEvent = addEvent('click', {
              onElement: [body, closest(desc, '.gslide-description')],
              withCallback: function withCallback(event, target) {
                if (event.target.nodeName.toLowerCase() !== 'a') {
                  removeClass(body, 'gdesc-open');
                  addClass(body, 'gdesc-closed');
                  desc.innerHTML = data.smallDescription;

                  _this2.descriptionEvents(desc, data);

                  setTimeout(function () {
                    removeClass(body, 'gdesc-closed');
                  }, 400);
                  shortEvent.destroy();
                }
              }
            });
          }
        });
      }
    }, {
      key: "create",
      value: function create() {
        return createHTML(this.instance.settings.slideHTML);
      }
    }, {
      key: "getConfig",
      value: function getConfig() {
        var parser = new SlideConfigParser();
        this.slideConfig = parser.parseConfig(this.element, this.instance.settings);
        return this.slideConfig;
      }
    }]);

    return Slide;
  }();

  var _version = '3.0.4';
  var isMobile$1 = isMobile();
  var isTouch$1 = isTouch();
  var html = document.getElementsByTagName('html')[0];
  var defaults = {
    selector: '.glightbox',
    elements: null,
    skin: 'clean',
    closeButton: true,
    startAt: null,
    autoplayVideos: true,
    descPosition: 'bottom',
    width: '900px',
    height: '506px',
    videosWidth: '960px',
    beforeSlideChange: null,
    afterSlideChange: null,
    beforeSlideLoad: null,
    afterSlideLoad: null,
    slideInserted: null,
    slideRemoved: null,
    onOpen: null,
    onClose: null,
    loop: false,
    zoomable: true,
    draggable: true,
    dragAutoSnap: false,
    dragToleranceX: 40,
    dragToleranceY: 65,
    preload: true,
    oneSlidePerOpen: false,
    touchNavigation: true,
    touchFollowAxis: true,
    keyboardNavigation: true,
    closeOnOutsideClick: true,
    plyr: {
      css: 'https://cdn.plyr.io/3.5.6/plyr.css',
      js: 'https://cdn.plyr.io/3.5.6/plyr.js',
      config: {
        ratio: '16:9',
        youtube: {
          noCookie: true,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3
        },
        vimeo: {
          byline: false,
          portrait: false,
          title: false,
          transparent: false
        }
      }
    },
    openEffect: 'zoom',
    closeEffect: 'zoom',
    slideEffect: 'slide',
    moreText: 'See more',
    moreLength: 60,
    lightboxHTML: '',
    cssEfects: {
      fade: {
        "in": 'fadeIn',
        out: 'fadeOut'
      },
      zoom: {
        "in": 'zoomIn',
        out: 'zoomOut'
      },
      slide: {
        "in": 'slideInRight',
        out: 'slideOutLeft'
      },
      slide_back: {
        "in": 'slideInLeft',
        out: 'slideOutRight'
      },
      none: {
        "in": 'none',
        out: 'none'
      }
    },
    svg: {
      close: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
      next: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
      prev: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
    }
  };
  defaults.slideHTML = "<div class=\"gslide\">\n    <div class=\"gslide-inner-content\">\n        <div class=\"ginner-container\">\n            <div class=\"gslide-media\">\n            </div>\n            <div class=\"gslide-description\">\n                <div class=\"gdesc-inner\">\n                    <h4 class=\"gslide-title\"></h4>\n                    <div class=\"gslide-desc\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
  defaults.lightboxHTML = "<div id=\"glightbox-body\" class=\"glightbox-container\">\n    <div class=\"gloader visible\"></div>\n    <div class=\"goverlay\"></div>\n    <div class=\"gcontainer\">\n    <div id=\"glightbox-slider\" class=\"gslider\"></div>\n    <button class=\"gnext gbtn\" tabindex=\"0\" aria-label=\"Next\">{nextSVG}</button>\n    <button class=\"gprev gbtn\" tabindex=\"1\" aria-label=\"Previous\">{prevSVG}</button>\n    <button class=\"gclose gbtn\" tabindex=\"2\" aria-label=\"Close\">{closeSVG}</button>\n</div>\n</div>";

  var GlightboxInit = function () {
    function GlightboxInit() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, GlightboxInit);

      this.settings = extend(defaults, options);
      this.effectsClasses = this.getAnimationClasses();
      this.videoPlayers = {};
      this.apiEvents = [];
      this.fullElementsList = false;
    }

    _createClass(GlightboxInit, [{
      key: "init",
      value: function init() {
        var _this = this;

        var selector = this.getSelector();

        if (selector) {
          this.baseEvents = addEvent('click', {
            onElement: selector,
            withCallback: function withCallback(e, target) {
              e.preventDefault();

              _this.open(target);
            }
          });
        }

        this.elements = this.getElements();
      }
    }, {
      key: "open",
      value: function open() {
        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var startAt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (this.elements.length == 0) return false;
        this.activeSlide = null;
        this.prevActiveSlideIndex = null;
        this.prevActiveSlide = null;
        var index = isNumber(startAt) ? startAt : this.settings.startAt;

        if (isNode(element)) {
          var gallery = element.getAttribute('data-gallery');

          if (gallery) {
            this.fullElementsList = this.elements;
            this.elements = this.getGalleryElements(this.elements, gallery);
          }

          if (isNil(index)) {
            index = this.getElementIndex(element);

            if (index < 0) {
              index = 0;
            }
          }
        }

        if (!isNumber(index)) {
          index = 0;
        }

        this.build();
        animateElement(this.overlay, this.settings.openEffect == 'none' ? 'none' : this.settings.cssEfects.fade["in"]);
        var body = document.body;
        var scrollBar = window.innerWidth - document.documentElement.clientWidth;

        if (scrollBar > 0) {
          var styleSheet = document.createElement("style");
          styleSheet.type = 'text/css';
          styleSheet.className = 'gcss-styles';
          styleSheet.innerText = ".gscrollbar-fixer {margin-right: ".concat(scrollBar, "px}");
          document.head.appendChild(styleSheet);
          addClass(body, 'gscrollbar-fixer');
        }

        addClass(body, 'glightbox-open');
        addClass(html, 'glightbox-open');

        if (isMobile$1) {
          addClass(document.body, 'glightbox-mobile');
          this.settings.slideEffect = 'slide';
        }

        this.showSlide(index, true);

        if (this.elements.length == 1) {
          hide(this.prevButton);
          hide(this.nextButton);
        } else {
          show(this.prevButton);
          show(this.nextButton);
        }

        this.lightboxOpen = true;
        this.trigger('open');

        if (isFunction(this.settings.onOpen)) {
          this.settings.onOpen();
        }

        if (isTouch$1 && this.settings.touchNavigation) {
          touchNavigation(this);
        }

        if (this.settings.keyboardNavigation) {
          keyboardNavigation(this);
        }
      }
    }, {
      key: "openAt",
      value: function openAt() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        this.open(null, index);
      }
    }, {
      key: "showSlide",
      value: function showSlide() {
        var _this2 = this;

        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var first = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        show(this.loader);
        this.index = parseInt(index);
        var current = this.slidesContainer.querySelector('.current');

        if (current) {
          removeClass(current, 'current');
        }

        this.slideAnimateOut();
        var slideNode = this.slidesContainer.querySelectorAll('.gslide')[index];

        if (hasClass(slideNode, 'loaded')) {
          this.slideAnimateIn(slideNode, first);
          hide(this.loader);
        } else {
          show(this.loader);
          var slide = this.elements[index];
          this.trigger('slide_before_load', slide);
          slide.instance.setContent(slideNode, function () {
            hide(_this2.loader);

            _this2.resize();

            _this2.slideAnimateIn(slideNode, first);

            _this2.trigger('slide_after_load', slide);
          });
        }

        this.slideDescription = slideNode.querySelector('.gslide-description');
        this.slideDescriptionContained = this.slideDescription && hasClass(this.slideDescription.parentNode, 'gslide-media');

        if (this.settings.preload) {
          this.preloadSlide(index + 1);
          this.preloadSlide(index - 1);
        }

        this.updateNavigationClasses();
        this.activeSlide = slideNode;
      }
    }, {
      key: "preloadSlide",
      value: function preloadSlide(index) {
        var _this3 = this;

        if (index < 0 || index > this.elements.length - 1) {
          return false;
        }

        if (isNil(this.elements[index])) {
          return false;
        }

        var slideNode = this.slidesContainer.querySelectorAll('.gslide')[index];

        if (hasClass(slideNode, 'loaded')) {
          return false;
        }

        var slide = this.elements[index];
        var type = slide.type;
        this.trigger('slide_before_load', slide);

        if (type == 'video' || type == 'external') {
          setTimeout(function () {
            slide.instance.setContent(slideNode, function () {
              _this3.trigger('slide_after_load', slide);
            });
          }, 200);
        } else {
          slide.instance.setContent(slideNode, function () {
            _this3.trigger('slide_after_load', slide);
          });
        }
      }
    }, {
      key: "prevSlide",
      value: function prevSlide() {
        this.goToSlide(this.index - 1);
      }
    }, {
      key: "nextSlide",
      value: function nextSlide() {
        this.goToSlide(this.index + 1);
      }
    }, {
      key: "goToSlide",
      value: function goToSlide() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        this.prevActiveSlide = this.activeSlide;
        this.prevActiveSlideIndex = this.index;

        if (!this.loop() && (index < 0 || index > this.elements.length - 1)) {
          return false;
        }

        if (index < 0) {
          index = this.elements.length - 1;
        } else if (index >= this.elements.length) {
          index = 0;
        }

        this.showSlide(index);
      }
    }, {
      key: "insertSlide",
      value: function insertSlide() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
        var slide = new Slide(config, this);
        var data = slide.getConfig();
        var newSlide = slide.create();
        var totalSlides = this.elements.length - 1;

        if (index < 0) {
          index = this.elements.length;
        }

        data.index = index;
        data.node = false;
        data.instance = slide;
        this.elements.splice(index, 0, data);

        if (this.slidesContainer) {
          if (index > totalSlides) {
            this.slidesContainer.appendChild(newSlide);
          } else {
            var existingSlide = this.slidesContainer.querySelectorAll('.gslide')[index];
            this.slidesContainer.insertBefore(newSlide, existingSlide);
          }

          if (this.settings.preload && this.index == 0 && index == 0 || this.index - 1 == index || this.index + 1 == index) {
            this.preloadSlide(index);
          }

          if (this.index == 0 && index == 0) {
            this.index = 1;
          }

          this.updateNavigationClasses(); // Changed by Sayontan... moved from outside "if (this.slidescontainer) {}" to inside

          this.trigger('slide_inserted', {
            index: index,
            slide: this.slidesContainer.querySelectorAll('.gslide')[index],
            player: this.getSlidePlayerInstance(index)
          });

          if (isFunction(this.settings.slideInserted)) {
            this.settings.slideInserted({
              index: index,
              slide: this.slidesContainer.querySelectorAll('.gslide')[index],
              player: this.getSlidePlayerInstance(index)
            });
          } // <- End change by Sayontan.

        }
      }
    }, {
      key: "removeSlide",
      value: function removeSlide() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

        if (index < 0 || index > this.elements.length - 1) {
          return false;
        }

        var slide = this.slidesContainer && this.slidesContainer.querySelectorAll('.gslide')[index];

        if (slide) {
          if (this.getActiveSlideIndex() == index) {
            if (index == this.elements.length - 1) {
              this.prevSlide();
            } else {
              this.nextSlide();
            }
          }

          slide.parentNode.removeChild(slide);
        }

        this.elements.splice(index, 1);
        this.trigger('slide_removed', index);

        if (isFunction(this.settings.slideRemoved)) {
          this.settings.slideRemoved(index);
        }
      }
    }, {
      key: "slideAnimateIn",
      value: function slideAnimateIn(slide, first) {
        var _this4 = this;

        var slideMedia = slide.querySelector('.gslide-media');
        var slideDesc = slide.querySelector('.gslide-description');
        var prevData = {
          index: this.prevActiveSlideIndex,
          slide: this.prevActiveSlide,
          player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
        };
        var nextData = {
          index: this.index,
          slide: this.activeSlide,
          player: this.getSlidePlayerInstance(this.index)
        };

        if (slideMedia.offsetWidth > 0 && slideDesc) {
          hide(slideDesc);
          slideDesc.style.display = '';
        }

        removeClass(slide, this.effectsClasses);

        if (first) {
          animateElement(slide, this.settings.cssEfects[this.settings.openEffect]["in"], function () {
            if (!isMobile$1 && _this4.settings.autoplayVideos) {
              _this4.slidePlayerPlay(slide);
            }

            _this4.trigger('slide_changed', {
              prev: prevData,
              current: nextData
            });

            if (isFunction(_this4.settings.afterSlideChange)) {
              _this4.settings.afterSlideChange.apply(_this4, [prevData, nextData]);
            }
          });
        } else {
          var effect_name = this.settings.slideEffect;
          var animIn = effect_name !== 'none' ? this.settings.cssEfects[effect_name]["in"] : effect_name;

          if (this.prevActiveSlideIndex > this.index) {
            if (this.settings.slideEffect == 'slide') {
              animIn = this.settings.cssEfects.slide_back["in"];
            }
          }

          animateElement(slide, animIn, function () {
            if (!isMobile$1 && _this4.settings.autoplayVideos) {
              _this4.slidePlayerPlay(slide);
            }

            _this4.trigger('slide_changed', {
              prev: prevData,
              current: nextData
            });

            if (isFunction(_this4.settings.afterSlideChange)) {
              _this4.settings.afterSlideChange.apply(_this4, [prevData, nextData]);
            }
          });
        }

        setTimeout(function () {
          _this4.resize(slide);
        }, 100);
        addClass(slide, 'current');
      }
    }, {
      key: "slideAnimateOut",
      value: function slideAnimateOut() {
        if (!this.prevActiveSlide) {
          return false;
        }

        var prevSlide = this.prevActiveSlide;
        removeClass(prevSlide, this.effectsClasses);
        addClass(prevSlide, 'prev');
        var animation = this.settings.slideEffect;
        var animOut = animation !== 'none' ? this.settings.cssEfects[animation].out : animation;
        this.slidePlayerPause(prevSlide);
        this.trigger('slide_before_change', {
          prev: {
            index: this.prevActiveSlideIndex,
            slide: this.prevActiveSlide,
            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
          },
          current: {
            index: this.index,
            slide: this.activeSlide,
            player: this.getSlidePlayerInstance(this.index)
          }
        });

        if (isFunction(this.settings.beforeSlideChange)) {
          this.settings.beforeSlideChange.apply(this, [{
            index: this.prevActiveSlideIndex,
            slide: this.prevActiveSlide,
            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
          }, {
            index: this.index,
            slide: this.activeSlide,
            player: this.getSlidePlayerInstance(this.index)
          }]);
        }

        if (this.prevActiveSlideIndex > this.index && this.settings.slideEffect == 'slide') {
          animOut = this.settings.cssEfects.slide_back.out;
        }

        animateElement(prevSlide, animOut, function () {
          var media = prevSlide.querySelector('.gslide-media');
          var desc = prevSlide.querySelector('.gslide-description');
          media.style.transform = '';
          removeClass(media, 'greset');
          media.style.opacity = '';

          if (desc) {
            desc.style.opacity = '';
          }

          removeClass(prevSlide, 'prev');
        });
      }
    }, {
      key: "getAllPlayers",
      value: function getAllPlayers() {
        return this.videoPlayers;
      }
    }, {
      key: "getSlidePlayerInstance",
      value: function getSlidePlayerInstance(index) {
        var id = 'gvideo' + index;
        var videoPlayers = this.getAllPlayers();

        if (has(videoPlayers, id) && videoPlayers[id]) {
          return videoPlayers[id];
        }

        return false;
      }
    }, {
      key: "stopSlideVideo",
      value: function stopSlideVideo(slide) {
        if (isNode(slide)) {
          var node = slide.querySelector('.gvideo-wrapper');

          if (node) {
            slide = node.getAttribute('data-index');
          }
        }

        console.log("stopSlideVideo is deprecated, use slidePlayerPause");
        var player = this.getSlidePlayerInstance(slide);

        if (player && player.playing) {
          player.pause();
        }
      }
    }, {
      key: "slidePlayerPause",
      value: function slidePlayerPause(slide) {
        if (isNode(slide)) {
          var node = slide.querySelector('.gvideo-wrapper');

          if (node) {
            slide = node.getAttribute('data-index');
          }
        }

        var player = this.getSlidePlayerInstance(slide);

        if (player && player.playing) {
          player.pause();
        }
      }
    }, {
      key: "playSlideVideo",
      value: function playSlideVideo(slide) {
        if (isNode(slide)) {
          var node = slide.querySelector('.gvideo-wrapper');

          if (node) {
            slide = node.getAttribute('data-index');
          }
        }

        console.log("playSlideVideo is deprecated, use slidePlayerPlay");
        var player = this.getSlidePlayerInstance(slide);

        if (player && !player.playing) {
          player.play();
        }
      }
    }, {
      key: "slidePlayerPlay",
      value: function slidePlayerPlay(slide) {
        if (isNode(slide)) {
          var node = slide.querySelector('.gvideo-wrapper');

          if (node) {
            slide = node.getAttribute('data-index');
          }
        }

        var player = this.getSlidePlayerInstance(slide);

        if (player && !player.playing) {
          player.play();
        }
      }
    }, {
      key: "setElements",
      value: function setElements(elements) {
        var _this5 = this;

        this.settings.elements = false;
        var newElements = [];

        if (elements && elements.length) {
          each(elements, function (el, i) {
            var slide = new Slide(el, _this5);
            var data = slide.getConfig();
            data.instance = slide;
            data.index = i;
            newElements.push(data);
          });
        }

        this.elements = newElements;

        if (this.lightboxOpen) {
          this.slidesContainer.innerHTML = '';

          if (this.elements.length) {
            each(this.elements, function () {
              var slide = createHTML(_this5.settings.slideHTML);

              _this5.slidesContainer.appendChild(slide);
            });
            this.showSlide(0, true);
          }
        }
      }
    }, {
      key: "getElementIndex",
      value: function getElementIndex(node) {
        var index = false;
        each(this.elements, function (el, i) {
          if (has(el, 'node') && el.node == node) {
            index = i;
            return true;
          }
        });
        return index;
      }
    }, {
      key: "getElements",
      value: function getElements() {
        var _this6 = this;

        var list = [];
        this.elements = this.elements ? this.elements : [];

        if (!isNil(this.settings.elements) && isArray(this.settings.elements) && this.settings.elements.length) {
          each(this.settings.elements, function (el, i) {
            var slide = new Slide(el, _this6);
            var elData = slide.getConfig();
            elData.node = false;
            elData.index = i;
            elData.instance = slide;
            list.push(elData);
          });
        }

        var nodes = false;
        var selector = this.getSelector();

        if (selector) {
          nodes = document.querySelectorAll(this.getSelector());
        }

        if (!nodes) {
          return list;
        }

        each(nodes, function (el, i) {
          var slide = new Slide(el, _this6);
          var elData = slide.getConfig();
          elData.node = el;
          elData.index = i;
          elData.instance = slide;
          elData.gallery = el.getAttribute('data-gallery');
          list.push(elData);
        });
        return list;
      }
    }, {
      key: "getGalleryElements",
      value: function getGalleryElements(list, gallery) {
        return list.filter(function (el) {
          return el.gallery == gallery;
        });
      }
    }, {
      key: "getSelector",
      value: function getSelector() {
        if (this.settings.elements) {
          return false;
        }

        if (this.settings.selector && this.settings.selector.substring(0, 5) == 'data-') {
          return "*[".concat(this.settings.selector, "]");
        }

        return this.settings.selector;
      }
    }, {
      key: "getActiveSlide",
      value: function getActiveSlide() {
        return this.slidesContainer.querySelectorAll('.gslide')[this.index];
      }
    }, {
      key: "getActiveSlideIndex",
      value: function getActiveSlideIndex() {
        return this.index;
      }
    }, {
      key: "getAnimationClasses",
      value: function getAnimationClasses() {
        var effects = [];

        for (var key in this.settings.cssEfects) {
          if (this.settings.cssEfects.hasOwnProperty(key)) {
            var effect = this.settings.cssEfects[key];
            effects.push("g".concat(effect["in"]));
            effects.push("g".concat(effect.out));
          }
        }

        return effects.join(' ');
      }
    }, {
      key: "build",
      value: function build() {
        var _this7 = this;

        if (this.built) {
          return false;
        }

        var nextSVG = has(this.settings.svg, 'next') ? this.settings.svg.next : '';
        var prevSVG = has(this.settings.svg, 'prev') ? this.settings.svg.prev : '';
        var closeSVG = has(this.settings.svg, 'close') ? this.settings.svg.close : '';
        var lightboxHTML = this.settings.lightboxHTML;
        lightboxHTML = lightboxHTML.replace(/{nextSVG}/g, nextSVG);
        lightboxHTML = lightboxHTML.replace(/{prevSVG}/g, prevSVG);
        lightboxHTML = lightboxHTML.replace(/{closeSVG}/g, closeSVG);
        lightboxHTML = createHTML(lightboxHTML);
        document.body.appendChild(lightboxHTML);
        var modal = document.getElementById('glightbox-body');
        this.modal = modal;
        var closeButton = modal.querySelector('.gclose');
        this.prevButton = modal.querySelector('.gprev');
        this.nextButton = modal.querySelector('.gnext');
        this.overlay = modal.querySelector('.goverlay');
        this.loader = modal.querySelector('.gloader');
        this.slidesContainer = document.getElementById('glightbox-slider');
        this.events = {};
        addClass(this.modal, 'glightbox-' + this.settings.skin);

        if (this.settings.closeButton && closeButton) {
          this.events['close'] = addEvent('click', {
            onElement: closeButton,
            withCallback: function withCallback(e, target) {
              e.preventDefault();

              _this7.close();
            }
          });
        }

        if (closeButton && !this.settings.closeButton) {
          closeButton.parentNode.removeChild(closeButton);
        }

        if (this.nextButton) {
          this.events['next'] = addEvent('click', {
            onElement: this.nextButton,
            withCallback: function withCallback(e, target) {
              e.preventDefault();

              _this7.nextSlide();
            }
          });
        }

        if (this.prevButton) {
          this.events['prev'] = addEvent('click', {
            onElement: this.prevButton,
            withCallback: function withCallback(e, target) {
              e.preventDefault();

              _this7.prevSlide();
            }
          });
        }

        if (this.settings.closeOnOutsideClick) {
          this.events['outClose'] = addEvent('click', {
            onElement: modal,
            withCallback: function withCallback(e, target) {
              if (!_this7.preventOutsideClick && !hasClass(document.body, 'glightbox-mobile') && !closest(e.target, '.ginner-container')) {
                if (!closest(e.target, '.gbtn') && !hasClass(e.target, 'gnext') && !hasClass(e.target, 'gprev')) {
                  _this7.close();
                }
              }
            }
          });
        }

        each(this.elements, function (slide) {
          _this7.slidesContainer.appendChild(slide.instance.create());
        });

        if (isTouch$1) {
          addClass(document.body, 'glightbox-touch');
        }

        this.events['resize'] = addEvent('resize', {
          onElement: window,
          withCallback: function withCallback() {
            _this7.resize();
          }
        });
        this.built = true;
      }
    }, {
      key: "resize",
      value: function resize() {
        var slide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        slide = !slide ? this.activeSlide : slide;

        if (!slide || hasClass(slide, 'zoomed')) {
          return;
        }

        var winSize = windowSize();
        var video = slide.querySelector('.gvideo-wrapper');
        var image = slide.querySelector('.gslide-image');
        var description = this.slideDescription;
        var winWidth = winSize.width;
        var winHeight = winSize.height;

        if (winWidth <= 768) {
          addClass(document.body, 'glightbox-mobile');
        } else {
          removeClass(document.body, 'glightbox-mobile');
        }

        if (!video && !image) {
          return;
        }

        var descriptionResize = false;

        if (description && (hasClass(description, 'description-bottom') || hasClass(description, 'description-top')) && !hasClass(description, 'gabsolute')) {
          descriptionResize = true;
        }

        if (image) {
          if (winWidth <= 768) {
            var imgNode = image.querySelector('img');
            imgNode.setAttribute('style', '');
          } else if (descriptionResize) {
            var descHeight = description.offsetHeight;

            var _imgNode = image.querySelector('img');

            _imgNode.setAttribute('style', "max-height: calc(100vh - ".concat(descHeight, "px)"));

            description.setAttribute('style', "max-width: ".concat(_imgNode.offsetWidth, "px;"));
          }
        }

        if (video) {
          var ratio = has(this.settings.plyr.config, 'ratio') ? this.settings.plyr.config.ratio : '16:9';
          var videoRatio = ratio.split(':');
          var _maxWidth = 900;

          var maxHeight = _maxWidth / (parseInt(videoRatio[0]) / parseInt(videoRatio[1]));

          maxHeight = Math.floor(maxHeight);

          if (descriptionResize) {
            winHeight = winHeight - description.offsetHeight;
          }

          if (winHeight < maxHeight && winWidth > _maxWidth) {
            var vwidth = video.offsetWidth;
            var vheight = video.offsetHeight;

            var _ratio = winHeight / vheight;

            var vsize = {
              width: vwidth * _ratio,
              height: vheight * _ratio
            };
            video.parentNode.setAttribute('style', "max-width: ".concat(vsize.width, "px"));

            if (descriptionResize) {
              description.setAttribute('style', "max-width: ".concat(vsize.width, "px;"));
            }
          } else {
            video.parentNode.style.maxWidth = "".concat(_maxWidth, "px");

            if (descriptionResize) {
              description.setAttribute('style', "max-width: ".concat(_maxWidth, "px;"));
            }
          }
        }
      }
    }, {
      key: "reload",
      value: function reload() {
        this.init();
      }
    }, {
      key: "updateNavigationClasses",
      value: function updateNavigationClasses() {
        var loop = this.loop();
        removeClass(this.nextButton, 'disabled');
        removeClass(this.prevButton, 'disabled');

        if (this.index == 0 && this.elements.length - 1 == 0) {
          addClass(this.prevButton, 'disabled');
          addClass(this.nextButton, 'disabled');
        } else if (this.index === 0 && !loop) {
          addClass(this.prevButton, 'disabled');
        } else if (this.index === this.elements.length - 1 && !loop) {
          addClass(this.nextButton, 'disabled');
        }
      }
    }, {
      key: "loop",
      value: function loop() {
        var loop = has(this.settings, 'loopAtEnd') ? this.settings.loopAtEnd : null;
        loop = has(this.settings, 'loop') ? this.settings.loop : loop;
        return loop;
      }
    }, {
      key: "close",
      value: function close() {
        var _this8 = this;

        if (!this.lightboxOpen) {
          if (this.events) {
            for (var key in this.events) {
              if (this.events.hasOwnProperty(key)) {
                this.events[key].destroy();
              }
            }

            this.events = null;
          }

          return false;
        }

        if (this.closing) {
          return false;
        }

        this.closing = true;
        this.slidePlayerPause(this.activeSlide);

        if (this.fullElementsList) {
          this.elements = this.fullElementsList;
        }

        addClass(this.modal, 'glightbox-closing');
        animateElement(this.overlay, this.settings.openEffect == 'none' ? 'none' : this.settings.cssEfects.fade.out);
        animateElement(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function () {
          _this8.activeSlide = null;
          _this8.prevActiveSlideIndex = null;
          _this8.prevActiveSlide = null;
          _this8.built = false;

          if (_this8.events) {
            for (var _key in _this8.events) {
              if (_this8.events.hasOwnProperty(_key)) {
                _this8.events[_key].destroy();
              }
            }

            _this8.events = null;
          }

          var body = document.body;
          removeClass(html, 'glightbox-open');
          removeClass(body, 'glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer');

          _this8.modal.parentNode.removeChild(_this8.modal);

          _this8.trigger('close');

          if (isFunction(_this8.settings.onClose)) {
            _this8.settings.onClose();
          }

          var styles = document.querySelector('.gcss-styles');

          if (styles) {
            styles.parentNode.removeChild(styles);
          }

          _this8.lightboxOpen = false;
          _this8.closing = null;
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.close();
        this.clearAllEvents();
        this.baseEvents.destroy();
      }
    }, {
      key: "on",
      value: function on(evt, callback) {
        var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (!evt || !isFunction(callback)) {
          throw new TypeError('Event name and callback must be defined');
        }

        this.apiEvents.push({
          evt: evt,
          once: once,
          callback: callback
        });
      }
    }, {
      key: "once",
      value: function once(evt, callback) {
        this.on(evt, callback, true);
      }
    }, {
      key: "trigger",
      value: function trigger(eventName) {
        var _this9 = this;

        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var onceTriggered = [];
        each(this.apiEvents, function (event, i) {
          var evt = event.evt,
              once = event.once,
              callback = event.callback;

          if (evt == eventName) {
            callback(data);

            if (once) {
              onceTriggered.push(i);
            }
          }
        });

        if (onceTriggered.length) {
          each(onceTriggered, function (i) {
            return _this9.apiEvents.splice(i, 1);
          });
        }
      }
    }, {
      key: "clearAllEvents",
      value: function clearAllEvents() {
        // Changed by Sayontan ... the original code had evt: evt, once: once, callback: callback, which was causing an error
        // Modified this to use the evt, once and callback values from "this"
        var self = this;
        this.apiEvents.push({
          evt: self.evt,
          once: self.once,
          callback: self.callback
        }); // <-- End changes by Sayontan
      }
    }, {
      key: "version",
      value: function version() {
        return _version;
      }
    }]);

    return GlightboxInit;
  }();

  function glightbox() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var instance = new GlightboxInit(options);
    instance.init();
    return instance;
  }

  return glightbox;
});

/***/ }),

/***/ "../include/ext/splide/splide.js":
/*!***************************************!*\
  !*** ../include/ext/splide/splide.js ***!
  \***************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {



/*!
 * Splide.js
 * Version  : 2.4.20
 * License  : MIT
 * Copyright: 2020 Naotoshi Fujita
 */

/******/
(function () {
  // webpackBootstrap

  /******/
  "use strict";
  /******/
  // The require scope

  /******/

  var __nested_webpack_require_238__ = {};
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/define property getters */

  /******/

  !function () {
    /******/
    // define getter functions for harmony exports

    /******/
    __nested_webpack_require_238__.d = function (exports, definition) {
      /******/
      for (var key in definition) {
        /******/
        if (__nested_webpack_require_238__.o(definition, key) && !__nested_webpack_require_238__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/

      }
      /******/

    };
    /******/

  }();
  /******/

  /******/

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/

  !function () {
    /******/
    __nested_webpack_require_238__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/

  }();
  /******/

  /******/

  /* webpack/runtime/make namespace object */

  /******/

  !function () {
    /******/
    // define __esModule on exports

    /******/
    __nested_webpack_require_238__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

  }();
  /******/

  /************************************************************************/
  // UNUSED EXPORTS: Splide
  // NAMESPACE OBJECT: ./src/js/constants/states.js

  var states_namespaceObject = {};

  __nested_webpack_require_238__.r(states_namespaceObject);

  __nested_webpack_require_238__.d(states_namespaceObject, {
    "CREATED": function CREATED() {
      return _CREATED;
    },
    "DESTROYED": function DESTROYED() {
      return _DESTROYED;
    },
    "IDLE": function IDLE() {
      return _IDLE;
    },
    "MOUNTED": function MOUNTED() {
      return _MOUNTED;
    },
    "MOVING": function MOVING() {
      return _MOVING;
    }
  });

  ; // CONCATENATED MODULE: ./src/js/core/event.js

  /**
   * The function for providing an Event object simply managing events.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * The function for providing an Event object simply managing events.
   */

  /* harmony default export */

  var core_event = function core_event() {
    /**
     * Store all event data.
     *
     * @type {Array}
     */
    var data = [];
    var Event = {
      /**
       * Subscribe the given event(s).
       *
       * @param {string}   events  - An event name. Use space to separate multiple events.
       *                             Also, namespace is accepted by dot, such as 'resize.{namespace}'.
       * @param {function} handler - A callback function.
       * @param {Element}  elm     - Optional. Native event will be listened to when this arg is provided.
       * @param {Object}   options - Optional. Options for addEventListener.
       */
      on: function on(events, handler, elm, options) {
        if (elm === void 0) {
          elm = null;
        }

        if (options === void 0) {
          options = {};
        }

        events.split(' ').forEach(function (event) {
          if (elm) {
            elm.addEventListener(event, handler, options);
          }

          data.push({
            event: event,
            handler: handler,
            elm: elm,
            options: options
          });
        });
      },

      /**
       * Unsubscribe the given event(s).
       *
       * @param {string}  events - A event name or names split by space.
       * @param {Element} elm    - Optional. removeEventListener() will be called when this arg is provided.
       */
      off: function off(events, elm) {
        if (elm === void 0) {
          elm = null;
        }

        events.split(' ').forEach(function (event) {
          data = data.filter(function (item) {
            if (item && item.event === event && item.elm === elm) {
              unsubscribe(item);
              return false;
            }

            return true;
          });
        });
      },

      /**
       * Emit an event.
       * This method is only for custom events.
       *
       * @param {string}  event - An event name.
       * @param {*}       args  - Any number of arguments passed to handlers.
       */
      emit: function emit(event) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        data.forEach(function (item) {
          if (!item.elm && item.event.split('.')[0] === event) {
            item.handler.apply(item, args);
          }
        });
      },

      /**
       * Clear event data.
       */
      destroy: function destroy() {
        data.forEach(unsubscribe);
        data = [];
      }
    };
    /**
     * Remove the registered event listener.
     *
     * @param {Object} item - An object containing event data.
     */

    function unsubscribe(item) {
      if (item.elm) {
        item.elm.removeEventListener(item.event, item.handler, item.options);
      }
    }

    return Event;
  };

  ; // CONCATENATED MODULE: ./src/js/core/state.js

  /**
   * The function providing a super simple state system.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * The function providing a super simple state system.
   *
   * @param {string|number} initialState - Provide the initial state value.
   */

  /* harmony default export */

  var state = function state(initialState) {
    /**
     * Store the current state.
     *
     * @type {string|number}
     */
    var curr = initialState;
    return {
      /**
       * Change state.
       *
       * @param {string|number} state - A new state.
       */
      set: function set(state) {
        curr = state;
      },

      /**
       * Verify if the current state is given one or not.
       *
       * @param {string|number} state - A state name to be verified.
       *
       * @return {boolean} - True if the current state is the given one.
       */
      is: function is(state) {
        return state === curr;
      }
    };
  };

  ; // CONCATENATED MODULE: ./src/js/utils/object.js

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }
  /**
   * Some utility functions related with Object, supporting IE.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */


  var keys = Object.keys;
  /**
   * Iterate an object like Array.forEach.
   * IE doesn't support forEach of HTMLCollection.
   *
   * @param {Object}    obj       - An object.
   * @param {function}  callback  - A function handling each value. Arguments are value, property and index.
   */

  function each(obj, callback) {
    keys(obj).some(function (key, index) {
      return callback(obj[key], key, index);
    });
  }
  /**
   * Return values of the given object as an array.
   * IE doesn't support Object.values.
   *
   * @param {Object} obj - An object.
   *
   * @return {Array} - An array containing all values of the given object.
   */


  function values(obj) {
    return keys(obj).map(function (key) {
      return obj[key];
    });
  }
  /**
   * Check if the given subject is object or not.
   *
   * @param {*} subject - A subject to be verified.
   *
   * @return {boolean} - True if object, false otherwise.
   */


  function isObject(subject) {
    return typeof subject === 'object';
  }
  /**
   * Merge two objects deeply.
   *
   * @param {Object} to   - An object where "from" is merged.
   * @param {Object} from - An object merged to "to".
   *
   * @return {Object} - A merged object.
   */


  function merge(_ref, from) {
    var to = _extends({}, _ref);

    each(from, function (value, key) {
      if (isObject(value)) {
        if (!isObject(to[key])) {
          to[key] = {};
        }

        to[key] = merge(to[key], value);
      } else {
        to[key] = value;
      }
    });
    return to;
  }
  /**
   * Assign all properties "from" to "to" object.
   *
   * @param {Object} to   - An object where properties are assigned.
   * @param {Object} from - An object whose properties are assigned to "to".
   *
   * @return {Object} - An assigned object.
   */


  function object_assign(to, from) {
    keys(from).forEach(function (key) {
      if (!to[key]) {
        Object.defineProperty(to, key, Object.getOwnPropertyDescriptor(from, key));
      }
    });
    return to;
  }

  ; // CONCATENATED MODULE: ./src/js/utils/utils.js

  /**
   * A package of some miscellaneous utility functions.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * Convert the given value to array.
   *
   * @param {*} value - Any value.
   *
   * @return {*[]} - Array containing the given value.
   */

  function toArray(value) {
    return Array.isArray(value) ? value : [value];
  }
  /**
   * Check if the given value is between min and max.
   * Min will be returned when the value is less than min or max will do when greater than max.
   *
   * @param {number} value - A number to be checked.
   * @param {number} m1    - Minimum or maximum number.
   * @param {number} m2    - Maximum or minimum number.
   *
   * @return {number} - A value itself, min or max.
   */


  function between(value, m1, m2) {
    return Math.min(Math.max(value, m1 > m2 ? m2 : m1), m1 > m2 ? m1 : m2);
  }
  /**
   * The sprintf method with minimum functionality.
   *
   * @param {string}       format       - The string format.
   * @param {string|Array} replacements - Replacements accepting multiple arguments.
   *
   * @returns {string} - Converted string.
   */


  function sprintf(format, replacements) {
    var i = 0;
    return format.replace(/%s/g, function () {
      return toArray(replacements)[i++];
    });
  }
  /**
   * Append px unit to the given subject if necessary.
   *
   * @param {number|string} value - A value that may not include an unit.
   *
   * @return {string} - If the value is string, return itself.
   *                    If number, do value + "px". An empty string, otherwise.
   */


  function unit(value) {
    var type = typeof value;

    if (type === 'number' && value > 0) {
      return parseFloat(value) + 'px';
    }

    return type === 'string' ? value : '';
  }
  /**
   * Pad start with 0.
   *
   * @param {number} number - A number to be filled with 0.
   *
   * @return {string|number} - Padded number.
   */


  function pad(number) {
    return number < 10 ? '0' + number : number;
  }
  /**
   * Convert the given value to pixel.
   *
   * @param {Element}       root  - Root element where a dummy div is appended.
   * @param {string|number} value - CSS value to be converted, such as 10rem.
   *
   * @return {number} - Pixel.
   */


  function toPixel(root, value) {
    if (typeof value === 'string') {
      var div = create('div', {});
      applyStyle(div, {
        position: 'absolute',
        width: value
      });
      append(root, div);
      value = div.clientWidth;
      dom_remove(div);
    }

    return +value || 0;
  }

  ; // CONCATENATED MODULE: ./src/js/utils/dom.js

  /**
   * Some utility functions related with DOM.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * Find the first element matching the given selector.
   * Be aware that all selectors after a space are ignored.
   *
   * @param {Element|Node}  elm       - An ancestor element.
   * @param {string}        selector  - DOMString.
   *
   * @return {Element|null} - A found element or null.
   */

  function find(elm, selector) {
    return elm ? elm.querySelector(selector.split(' ')[0]) : null;
  }
  /**
   * Find a first child having the given tag or class name.
   *
   * @param {Element} parent         - A parent element.
   * @param {string}  tagOrClassName - A tag or class name.
   *
   * @return {Element|undefined} - A found element on success or undefined on failure.
   */


  function child(parent, tagOrClassName) {
    return children(parent, tagOrClassName)[0];
  }
  /**
   * Return chile elements that matches the provided tag or class name.
   *
   * @param {Element} parent         - A parent element.
   * @param {string}  tagOrClassName - A tag or class name.
   *
   * @return {Element[]} - Found elements.
   */


  function children(parent, tagOrClassName) {
    if (parent) {
      return values(parent.children).filter(function (child) {
        return hasClass(child, tagOrClassName.split(' ')[0]) || child.tagName === tagOrClassName;
      });
    }

    return [];
  }
  /**
   * Create an element with some optional attributes.
   *
   * @param {string} tag   - A tag name.
   * @param {Object} attrs - An object any attribute pairs of name and value.
   *
   * @return {Element} - A created element.
   */


  function create(tag, attrs) {
    var elm = document.createElement(tag);
    each(attrs, function (value, key) {
      return setAttribute(elm, key, value);
    });
    return elm;
  }
  /**
   * Convert HTML string to DOM node.
   *
   * @param {string} html - HTML string.
   *
   * @return {Node} - A created node.
   */


  function domify(html) {
    var div = create('div', {});
    div.innerHTML = html;
    return div.firstChild;
  }
  /**
   * Remove a given element from a DOM tree.
   *
   * @param {Element|Element[]} elms - Element(s) to be removed.
   */


  function dom_remove(elms) {
    toArray(elms).forEach(function (elm) {
      if (elm) {
        var parent = elm.parentElement;
        parent && parent.removeChild(elm);
      }
    });
  }
  /**
   * Append a child to a given element.
   *
   * @param {Element} parent - A parent element.
   * @param {Element} child  - An element to be appended.
   */


  function append(parent, child) {
    if (parent) {
      parent.appendChild(child);
    }
  }
  /**
   * Insert an element before the reference element.
   *
   * @param {Element|Node} ref - A reference element.
   * @param {Element}      elm - An element to be inserted.
   */


  function before(elm, ref) {
    if (elm && ref) {
      var parent = ref.parentElement;
      parent && parent.insertBefore(elm, ref);
    }
  }
  /**
   * Apply styles to the given element.
   *
   * @param {Element} elm     - An element where styles are applied.
   * @param {Object}  styles  - Object containing styles.
   */


  function applyStyle(elm, styles) {
    if (elm) {
      each(styles, function (value, prop) {
        if (value !== null) {
          elm.style[prop] = value;
        }
      });
    }
  }
  /**
   * Add or remove classes to/from the element.
   * This function is for internal usage.
   *
   * @param {Element}         elm     - An element where classes are added.
   * @param {string|string[]} classes - Class names being added.
   * @param {boolean}         remove  - Whether to remove or add classes.
   */


  function addOrRemoveClasses(elm, classes, remove) {
    if (elm) {
      toArray(classes).forEach(function (name) {
        if (name) {
          elm.classList[remove ? 'remove' : 'add'](name);
        }
      });
    }
  }
  /**
   * Add classes to the element.
   *
   * @param {Element}          elm     - An element where classes are added.
   * @param {string|string[]}  classes - Class names being added.
   */


  function addClass(elm, classes) {
    addOrRemoveClasses(elm, classes, false);
  }
  /**
   * Remove a class from the element.
   *
   * @param {Element}         elm     - An element where classes are removed.
   * @param {string|string[]} classes - A class name being removed.
   */


  function removeClass(elm, classes) {
    addOrRemoveClasses(elm, classes, true);
  }
  /**
   * Verify if the provided element has the class or not.
   *
   * @param {Element} elm       - An element.
   * @param {string}  className - A class name.
   *
   * @return {boolean} - True if the element has the class or false if not.
   */


  function hasClass(elm, className) {
    return !!elm && elm.classList.contains(className);
  }
  /**
   * Set attribute to the given element.
   *
   * @param {Element}                 elm   - An element where an attribute is assigned.
   * @param {string}                  name  - Attribute name.
   * @param {string|number|boolean}   value - Attribute value.
   */


  function setAttribute(elm, name, value) {
    if (elm) {
      elm.setAttribute(name, value);
    }
  }
  /**
   * Get attribute from the given element.
   *
   * @param {Element} elm  - An element where an attribute is assigned.
   * @param {string}  name - Attribute name.
   *
   * @return {string} - The value of the given attribute if available. An empty string if not.
   */


  function getAttribute(elm, name) {
    return elm ? elm.getAttribute(name) : '';
  }
  /**
   * Remove attribute from the given element.
   *
   * @param {Element|Element[]} elms  - An element where an attribute is removed.
   * @param {string|string[]}      names - Attribute name.
   */


  function removeAttribute(elms, names) {
    toArray(names).forEach(function (name) {
      toArray(elms).forEach(function (elm) {
        return elm && elm.removeAttribute(name);
      });
    });
  }
  /**
   * Return the Rect object of the provided object.
   *
   * @param {Element} elm - An element.
   *
   * @return {ClientRect|DOMRect} - A rect object.
   */


  function getRect(elm) {
    return elm.getBoundingClientRect();
  }
  /**
   * Trigger the given callback after all images contained by the element are loaded.
   *
   * @param {Element}  elm      - Element that may contain images.
   * @param {Function} callback - Callback function fired right after all images are loaded.
   */


  function loaded(elm, callback) {
    var images = elm.querySelectorAll('img');
    var length = images.length;

    if (length) {
      var count = 0;
      each(images, function (img) {
        img.onload = img.onerror = function () {
          if (++count === length) {
            callback();
          }
        };
      });
    } else {
      // Trigger the callback immediately if there is no image.
      callback();
    }
  }

  ; // CONCATENATED MODULE: ./src/js/constants/types.js

  /**
   * Export slider types.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * Normal slider.
   *
   * @type {string}
   */

  var SLIDE = 'slide';
  /**
   * Loop after the last slide and before the first one.
   *
   * @type {string}
   */

  var LOOP = 'loop';
  /**
   * The track doesn't move.
   *
   * @type {string}
   */

  var FADE = 'fade';
  ; // CONCATENATED MODULE: ./src/js/transitions/slide/index.js

  /**
   * The component for general slide effect transition.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * The component for general slide effect transition.
   *
   * @param {Splide} Splide     - A Splide instance.
   * @param {Object} Components - An object containing components.
   *
   * @return {Object} - The component object.
   */

  /* harmony default export */

  var slide = function slide(Splide, Components) {
    /**
     * Hold the list element.
     *
     * @type {Element}
     */
    var list;
    /**
     * Hold the onEnd callback function.
     *
     * @type {function}
     */

    var endCallback;
    return {
      /**
       * Called when the component is mounted.
       */
      mount: function mount() {
        list = Components.Elements.list;
        Splide.on('transitionend', function (e) {
          if (e.target === list && endCallback) {
            endCallback();
          }
        }, list);
      },

      /**
       * Start transition.
       *
       * @param {number}   destIndex - Destination slide index that might be clone's.
       * @param {number}   newIndex  - New index.
       * @param {number}   prevIndex - Previous index.
       * @param {Object}   coord     - Destination coordinates.
       * @param {function} done      - Callback function must be invoked when transition is completed.
       */
      start: function start(destIndex, newIndex, prevIndex, coord, done) {
        var options = Splide.options;
        var edgeIndex = Components.Controller.edgeIndex;
        var speed = options.speed;
        endCallback = done;

        if (Splide.is(SLIDE)) {
          if (prevIndex === 0 && newIndex >= edgeIndex || prevIndex >= edgeIndex && newIndex === 0) {
            speed = options.rewindSpeed || speed;
          }
        }

        applyStyle(list, {
          transition: "transform " + speed + "ms " + options.easing,
          transform: "translate(" + coord.x + "px," + coord.y + "px)"
        });
      }
    };
  };

  ; // CONCATENATED MODULE: ./src/js/transitions/fade/index.js

  /**
   * The component for fade transition.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * The component for fade transition.
   *
   * @param {Splide} Splide     - A Splide instance.
   * @param {Object} Components - An object containing components.
   *
   * @return {Object} - The component object.
   */

  /* harmony default export */

  var fade = function fade(Splide, Components) {
    var Fade = {
      /**
       * Called when the component is mounted.
       * Apply transition style to the first slide.
       */
      mount: function mount() {
        apply(Splide.index);
      },

      /**
       * Start transition.
       *
       * @param {number}    destIndex - Destination slide index that might be clone's.
       * @param {number}    newIndex  - New index.
       * @param {number}    prevIndex - Previous index.
       * @param {Object}    coord     - Destination coordinates.
       * @param {function}  done      - Callback function must be invoked when transition is completed.
       */
      start: function start(destIndex, newIndex, prevIndex, coord, done) {
        var track = Components.Elements.track;
        applyStyle(track, {
          height: unit(track.clientHeight)
        });
        apply(newIndex);
        setTimeout(function () {
          done();
          applyStyle(track, {
            height: ''
          });
        });
      }
    };
    /**
     * Apply transition style to the slide specified by the given index.
     *
     * @param {number} index - A slide index.
     */

    function apply(index) {
      var options = Splide.options;
      applyStyle(Components.Elements.slides[index], {
        transition: "opacity " + options.speed + "ms " + options.easing
      });
    }

    return Fade;
  };

  ; // CONCATENATED MODULE: ./src/js/transitions/index.js

  /**
   * Export transition components.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  ; // CONCATENATED MODULE: ./src/js/core/composer.js

  /**
   * Provide a function for composing components.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * Compose components.
   *
   * @param {Splide}   Splide     - Splide instance.
   * @param {Object}   Components - Additional components.
   * @param {function} Transition - Change component for transition.
   *
   * @return {Object} - An object containing all components.
   */

  function compose(Splide, Components, Transition) {
    var components = {};
    each(Components, function (Component, name) {
      components[name] = Component(Splide, components, name.toLowerCase());
    });

    if (!Transition) {
      Transition = Splide.is(FADE) ? fade : slide;
    }

    components.Transition = Transition(Splide, components);
    return components;
  }

  ; // CONCATENATED MODULE: ./src/js/utils/error.js

  /**
   * Utility functions for outputting logs.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * Prefix of an error massage.
   *
   * @type {string}
   */

  var MESSAGE_PREFIX = '[SPLIDE]';
  /**
   * Display an error message on the browser console.
   *
   * @param {string} message - An error message.
   */

  function error(message) {
    console.error(MESSAGE_PREFIX + " " + message);
  }
  /**
   * Check existence of the given object and throw an error if it doesn't.
   *
   * @throws {Error}
   *
   * @param {*}      subject - A subject to be confirmed.
   * @param {string} message - An error message.
   */


  function exist(subject, message) {
    if (!subject) {
      throw new Error(message);
    }
  }

  ; // CONCATENATED MODULE: ./src/js/constants/classes.js

  /**
   * Export class names.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * A root class name.
   *
   * @type {string}
   */

  var ROOT = 'splide';
  /**
   * The definition table of all classes for elements.
   * They might be modified by options.
   *
   * @type {Object}
   */

  var ELEMENT_CLASSES = {
    root: ROOT,
    slider: ROOT + "__slider",
    track: ROOT + "__track",
    list: ROOT + "__list",
    slide: ROOT + "__slide",
    container: ROOT + "__slide__container",
    arrows: ROOT + "__arrows",
    arrow: ROOT + "__arrow",
    prev: ROOT + "__arrow--prev",
    next: ROOT + "__arrow--next",
    pagination: ROOT + "__pagination",
    page: ROOT + "__pagination__page",
    clone: ROOT + "__slide--clone",
    progress: ROOT + "__progress",
    bar: ROOT + "__progress__bar",
    autoplay: ROOT + "__autoplay",
    play: ROOT + "__play",
    pause: ROOT + "__pause",
    spinner: ROOT + "__spinner",
    sr: ROOT + "__sr"
  };
  /**
   * Definitions of status classes.
   *
   * @type {Object}
   */

  var STATUS_CLASSES = {
    active: 'is-active',
    visible: 'is-visible',
    loading: 'is-loading'
  };
  ; // CONCATENATED MODULE: ./src/js/constants/i18n.js

  /**
   * Export i18n texts as object.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * Texts for i18n.
   *
   * @type {Object}
   */

  var I18N = {
    prev: 'Previous slide',
    next: 'Next slide',
    first: 'Go to first slide',
    last: 'Go to last slide',
    slideX: 'Go to slide %s',
    pageX: 'Go to page %s',
    play: 'Start autoplay',
    pause: 'Pause autoplay'
  };
  ; // CONCATENATED MODULE: ./src/js/constants/defaults.js

  /**
   * Export default options.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  var DEFAULTS = {
    /**
     * Determine a slider type.
     * - 'slide': Regular slider.
     * - 'loop' : Carousel slider.
     * - 'fade' : Change slides with fade transition. perPage, drag options are ignored.
     *
     * @type {string}
     */
    type: 'slide',

    /**
     * Whether to rewind a slider before the first slide or after the last one.
     * In "loop" mode, this option is ignored.
     *
     * @type {boolean}
     */
    rewind: false,

    /**
     * Transition speed in milliseconds.
     *
     * @type {number}
     */
    speed: 400,

    /**
     * Transition speed on rewind in milliseconds.
     *
     * @type {number}
     */
    rewindSpeed: 0,

    /**
     * Whether to prevent any actions while a slider is transitioning.
     * If false, navigation, drag and swipe work while the slider is running.
     * Even so, it will be forced to wait for transition in some cases in the loop mode to shift a slider.
     *
     * @type {boolean}
     */
    waitForTransition: true,

    /**
     * Define slider max width.
     *
     * @type {number}
     */
    width: 0,

    /**
     * Define slider height.
     *
     * @type {number}
     */
    height: 0,

    /**
     * Fix width of slides. CSS format is allowed such as 10em, 80% or 80vw.
     * perPage number will be ignored when this option is falsy.
     *
     * @type {number|string}
     */
    fixedWidth: 0,

    /**
     * Fix height of slides. CSS format is allowed such as 10em, 80vh but % unit is not accepted.
     * heightRatio option will be ignored when this option is falsy.
     *
     * @type {number|string}
     */
    fixedHeight: 0,

    /**
     * Determine height of slides by ratio to a slider width.
     * This will be ignored when the fixedHeight is provided.
     *
     * @type {number}
     */
    heightRatio: 0,

    /**
     * If true, slide width will be determined by the element width itself.
     * - perPage/perMove should be 1.
     *
     * @type {boolean}
     */
    autoWidth: false,

    /**
     * If true, slide height will be determined by the element width itself.
     * - perPage/perMove should be 1.
     *
     * @type {boolean}
     */
    autoHeight: false,

    /**
     * Determine how many slides should be displayed per page.
     *
     * @type {number}
     */
    perPage: 1,

    /**
     * Determine how many slides should be moved when a slider goes to next or perv.
     *
     * @type {number}
     */
    perMove: 0,

    /**
     * Determine manually how many clones should be generated on the left and right side.
     * The total number of clones will be twice of this number.
     *
     * @type {number}
     */
    clones: 0,

    /**
     * Start index.
     *
     * @type {number}
     */
    start: 0,

    /**
     * Determine which slide should be focused if there are multiple slides in a page.
     * A string "center" is acceptable for centering slides.
     *
     * @type {boolean|number|string}
     */
    focus: false,

    /**
     * Gap between slides. CSS format is allowed such as 1em.
     *
     * @type {number|string}
     */
    gap: 0,

    /**
     * Set padding-left/right in horizontal mode or padding-top/bottom in vertical one.
     * Give a single value to set a same size for both sides or
     * do an object for different sizes.
     * Also, CSS format is allowed such as 1em.
     *
     * @example
     * - 10: Number
     * - '1em': CSS format.
     * - { left: 0, right: 20 }: Object for different sizes in horizontal mode.
     * - { top: 0, bottom: 20 }: Object for different sizes in vertical mode.
     *
     * @type {number|string|Object}
     */
    padding: 0,

    /**
     * Whether to append arrows.
     *
     * @type {boolean}
     */
    arrows: true,

    /**
     * Change the arrow SVG path like 'm7.61 0.807-2.12...'.
     *
     * @type {string}
     */
    arrowPath: '',

    /**
     * Whether to append pagination(indicator dots) or not.
     *
     * @type {boolean}
     */
    pagination: true,

    /**
     * Activate autoplay.
     *
     * @type {boolean}
     */
    autoplay: false,

    /**
     * Autoplay interval in milliseconds.
     *
     * @type {number}
     */
    interval: 5000,

    /**
     * Whether to stop autoplay when a slider is hovered.
     *
     * @type {boolean}
     */
    pauseOnHover: true,

    /**
     * Whether to stop autoplay when a slider elements are focused.
     * True is recommended for accessibility.
     *
     * @type {boolean}
     */
    pauseOnFocus: true,

    /**
     * Whether to reset progress of the autoplay timer when resumed.
     *
     * @type {boolean}
     */
    resetProgress: true,

    /**
     * Loading images lazily.
     * Image src must be provided by a data-splide-lazy attribute.
     *
     * - false: Do nothing.
     * - 'nearby': Only images around an active slide will be loaded.
     * - 'sequential': All images will be sequentially loaded.
     *
     * @type {boolean|string}
     */
    lazyLoad: false,

    /**
     * This option works only when a lazyLoad option is "nearby".
     * Determine how many pages(not slides) around an active slide should be loaded beforehand.
     *
     * @type {number}
     */
    preloadPages: 1,

    /**
     * Easing for CSS transition. For example, linear, ease or cubic-bezier().
     *
     * @type {string}
     */
    easing: 'cubic-bezier(.42,.65,.27,.99)',

    /**
     * Whether to enable keyboard shortcuts
     * - true or 'global': Listen to keydown event of the document.
     * - 'focused': Listen to the keydown event of the slider root element. tabindex="0" will be added to the element.
     * - false: Disable keyboard shortcuts.
     *
     * @type {boolean|string}
     */
    keyboard: 'global',

    /**
     * Whether to allow mouse drag and touch swipe.
     *
     * @type {boolean}
     */
    drag: true,

    /**
     * The angle threshold for drag.
     * The slider starts moving only when the drag angle is less than this threshold.
     *
     * @type {number}
     */
    dragAngleThreshold: 30,

    /**
     * Distance threshold for determining if the action is "flick" or "swipe".
     * When a drag distance is over this value, the action will be treated as "swipe", not "flick".
     *
     * @type {number}
     */
    swipeDistanceThreshold: 150,

    /**
     * Velocity threshold for determining if the action is "flick" or "swipe".
     * Around 0.5 is recommended.
     *
     * @type {number}
     */
    flickVelocityThreshold: .6,

    /**
     * Determine power of flick. The larger number this is, the farther a slider runs by flick.
     * Around 500 is recommended.
     *
     * @type {number}
     */
    flickPower: 600,

    /**
     * Limit a number of pages to move by flick.
     *
     * @type {number}
     */
    flickMaxPages: 1,

    /**
     * Slider direction.
     * - 'ltr': Left to right.
     * - 'rtl': Right to left.
     * - 'ttb': Top to bottom.
     *
     * @type {string}
     */
    direction: 'ltr',

    /**
     * Set img src to background-image of its parent element.
     * Images with various sizes can be displayed as same dimension without cropping work.
     * fixedHeight or heightRatio is required.
     *
     * @type {boolean}
     */
    cover: false,

    /**
     * Whether to enable accessibility(aria and screen reader texts) or not.
     *
     * @type {boolean}
     */
    accessibility: true,

    /**
     * Whether to add tabindex="0" to visible slides or not.
     *
     * @type {boolean}
     */
    slideFocus: true,

    /**
     * Determine if a slider is navigation for another.
     * Use "sync" API to synchronize two sliders.
     *
     * @type {boolean}
     */
    isNavigation: false,

    /**
     * Whether to trim spaces before the fist slide or after the last one when "focus" is not 0.
     *
     * @type {boolean}
     */
    trimSpace: true,

    /**
     * The "is-active" class is added after transition as default.
     * If true, it will be added before move.
     *
     * @type {boolean}
     */
    updateOnMove: false,

    /**
     * Throttle duration in milliseconds for the resize event.
     *
     * @type {number}
     */
    throttle: 100,

    /**
     * Whether to destroy a slider or not.
     *
     * @type {boolean}
     */
    destroy: false,

    /**
     * Options for specific breakpoints.
     *
     * @example
     * {
     *   1000: {
     *     perPage: 3,
     *     gap: 20
     *   },
     *   600: {
     *     perPage: 1,
     *     gap: 5,
     *   }
     * }
     *
     * @type {boolean|Object}
     */
    breakpoints: false,

    /**
     * Collection of class names.
     *
     * @see ./classes.js
     *
     * @type {Object}
     */
    classes: ELEMENT_CLASSES,

    /**
     * Collection of i18n texts.
     *
     * @see ./i18n.js
     *
     * @type {Object}
     */
    i18n: I18N
  };
  ; // CONCATENATED MODULE: ./src/js/constants/states.js

  /**
   * Export state constants.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * Splide has been just created.
   *
   * @type {number}
   */

  var _CREATED = 1;
  /**
   * All components have been mounted and initialized.
   *
   * @type {number}
   */

  var _MOUNTED = 2;
  /**
   * Splide is ready for transition.
   *
   * @type {number}
   */

  var _IDLE = 3;
  /**
   * Splide is moving.
   *
   * @type {number}
   */

  var _MOVING = 4;
  /**
   * Splide is moving.
   *
   * @type {number}
   */

  var _DESTROYED = 5;
  ; // CONCATENATED MODULE: ./src/js/splide.js

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  /**
   * The main class for applying Splide to an element.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * The main class for applying Splide to an element,
   * providing some APIs to control the behavior.
   */


  var Splide = /*#__PURE__*/function () {
    /**
     * Splide constructor.
     *
     * @throws {Error} When the given root element or selector is invalid.
     *
     * @param {Element|string}  root       - A selector for a root element or an element itself.
     * @param {Object}          options    - Optional. Options to change default behaviour.
     * @param {Object}          Components - Optional. Components.
     */
    function Splide(root, options, Components) {
      if (options === void 0) {
        options = {};
      }

      if (Components === void 0) {
        Components = {};
      }

      this.root = root instanceof Element ? root : document.querySelector(root);
      exist(this.root, 'An invalid element/selector was given.');
      this.Components = null;
      this.Event = core_event();
      this.State = state(_CREATED);
      this.STATES = states_namespaceObject;
      this._o = merge(DEFAULTS, options);
      this._i = 0;
      this._c = Components;
      this._e = {}; // Extensions

      this._t = null; // Transition
    }
    /**
     * Compose and mount components.
     *
     * @param {Object}   Extensions - Optional. Additional components.
     * @param {function} Transition - Optional. Set a custom transition component.
     *
     * @return {Splide|undefined} - This instance or undefined if an exception occurred.
     */


    var _proto = Splide.prototype;

    _proto.mount = function mount(Extensions, Transition) {
      var _this = this;

      if (Extensions === void 0) {
        Extensions = this._e;
      }

      if (Transition === void 0) {
        Transition = this._t;
      } // Reset the state.


      this.State.set(_CREATED);
      this._e = Extensions;
      this._t = Transition;
      this.Components = compose(this, merge(this._c, Extensions), Transition);

      try {
        each(this.Components, function (component, key) {
          var required = component.required;

          if (required === undefined || required) {
            component.mount && component.mount();
          } else {
            delete _this.Components[key];
          }
        });
      } catch (e) {
        error(e.message);
        return;
      }

      var State = this.State;
      State.set(_MOUNTED);
      each(this.Components, function (component) {
        component.mounted && component.mounted();
      });
      this.emit('mounted');
      State.set(_IDLE);
      this.emit('ready');
      applyStyle(this.root, {
        visibility: 'visible'
      });
      this.on('move drag', function () {
        return State.set(_MOVING);
      }).on('moved dragged', function () {
        return State.set(_IDLE);
      });
      return this;
    }
    /**
     * Set sync target.
     *
     * @param {Splide} splide - A Splide instance.
     *
     * @return {Splide} - This instance.
     */
    ;

    _proto.sync = function sync(splide) {
      this.sibling = splide;
      return this;
    }
    /**
     * Register callback fired on the given event(s).
     *
     * @param {string}   events  - An event name. Use space to separate multiple events.
     *                             Also, namespace is accepted by dot, such as 'resize.{namespace}'.
     * @param {function} handler - A callback function.
     * @param {Element}  elm     - Optional. Native event will be listened to when this arg is provided.
     * @param {Object}   options - Optional. Options for addEventListener.
     *
     * @return {Splide} - This instance.
     */
    ;

    _proto.on = function on(events, handler, elm, options) {
      if (elm === void 0) {
        elm = null;
      }

      if (options === void 0) {
        options = {};
      }

      this.Event.on(events, handler, elm, options);
      return this;
    }
    /**
     * Unsubscribe the given event.
     *
     * @param {string}  events - A event name.
     * @param {Element} elm    - Optional. removeEventListener() will be called when this arg is provided.
     *
     * @return {Splide} - This instance.
     */
    ;

    _proto.off = function off(events, elm) {
      if (elm === void 0) {
        elm = null;
      }

      this.Event.off(events, elm);
      return this;
    }
    /**
     * Emit an event.
     *
     * @param {string} event - An event name.
     * @param {*}      args  - Any number of arguments passed to handlers.
     */
    ;

    _proto.emit = function emit(event) {
      var _this$Event;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_this$Event = this.Event).emit.apply(_this$Event, [event].concat(args));

      return this;
    }
    /**
     * Go to the slide specified by the given control.
     *
     * @param {string|number} control - A control pattern.
     * @param {boolean}       wait    - Optional. Whether to wait for transition.
     */
    ;

    _proto.go = function go(control, wait) {
      if (wait === void 0) {
        wait = this.options.waitForTransition;
      }

      if (this.State.is(_IDLE) || this.State.is(_MOVING) && !wait) {
        this.Components.Controller.go(control, false);
      }

      return this;
    }
    /**
     * Verify whether the slider type is the given one or not.
     *
     * @param {string} type - A slider type.
     *
     * @return {boolean} - True if the slider type is the provided type or false if not.
     */
    ;

    _proto.is = function is(type) {
      return type === this._o.type;
    }
    /**
     * Insert a slide.
     *
     * @param {Element|string} slide - A slide element to be added.
     * @param {number}         index - A slide will be added at the position.
     */
    ;

    _proto.add = function add(slide, index) {
      if (index === void 0) {
        index = -1;
      }

      this.Components.Elements.add(slide, index, this.refresh.bind(this));
      return this;
    }
    /**
     * Remove the slide designated by the index.
     *
     * @param {number} index - A slide index.
     */
    ;

    _proto.remove = function remove(index) {
      this.Components.Elements.remove(index);
      this.refresh();
      return this;
    }
    /**
     * Destroy all Slide objects and clones and recreate them again.
     */
    ;

    _proto.refresh = function refresh() {
      this.emit('refresh:before').emit('refresh').emit('resize');
      return this;
    }
    /**
     * Destroy the Splide.
     * "Completely" boolean is mainly for breakpoints.
     *
     * @param {boolean} completely - Destroy completely.
     */
    ;

    _proto.destroy = function destroy(completely) {
      var _this2 = this;

      if (completely === void 0) {
        completely = true;
      } // Postpone destroy because it should be done after mount.


      if (this.State.is(_CREATED)) {
        this.on('ready', function () {
          return _this2.destroy(completely);
        });
        return;
      }

      values(this.Components).reverse().forEach(function (component) {
        component.destroy && component.destroy(completely);
      });
      this.emit('destroy', completely); // Destroy all event handlers, including ones for native events.

      this.Event.destroy();
      this.State.set(_DESTROYED);
      return this;
    }
    /**
     * Return the current slide index.
     *
     * @return {number} - The current slide index.
     // */
    ;

    _createClass(Splide, [{
      key: "index",
      get: function get() {
        return this._i;
      }
      /**
       * Set the current slide index.
       *
       * @param {number|string} index - A new index.
       */
      ,
      set: function set(index) {
        this._i = parseInt(index);
      }
      /**
       * Return length of slides.
       * This is an alias of Elements.length.
       *
       * @return {number} - A number of slides.
       */

    }, {
      key: "length",
      get: function get() {
        return this.Components.Elements.length;
      }
      /**
       * Return options.
       *
       * @return {Object} - Options object.
       */

    }, {
      key: "options",
      get: function get() {
        return this._o;
      }
      /**
       * Set options with merging the given object to the current one.
       *
       * @param {Object} options - New options.
       */
      ,
      set: function set(options) {
        var created = this.State.is(_CREATED);

        if (!created) {
          this.emit('update');
        }

        this._o = merge(this._o, options);

        if (!created) {
          this.emit('updated', this._o);
        }
      }
      /**
       * Return the class list.
       * This is an alias of Splide.options.classList.
       *
       * @return {Object} - An object containing all class list.
       */

    }, {
      key: "classes",
      get: function get() {
        return this._o.classes;
      }
      /**
       * Return the i18n strings.
       * This is an alias of Splide.options.i18n.
       *
       * @return {Object} - An object containing all i18n strings.
       */

    }, {
      key: "i18n",
      get: function get() {
        return this._o.i18n;
      }
    }]);

    return Splide;
  }();

  ; // CONCATENATED MODULE: ./src/js/components/options/index.js

  /**
   * The component for initializing options.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * The component for initializing options.
   *
   * @param {Splide} Splide - A Splide instance.
   *
   * @return {Object} - The component object.
   */

  /* harmony default export */

  var options = function options(Splide) {
    /**
     * Retrieve options from the data attribute.
     * Note that IE10 doesn't support dataset property.
     *
     * @type {string}
     */
    var options = getAttribute(Splide.root, 'data-splide');

    if (options) {
      try {
        Splide.options = JSON.parse(options);
      } catch (e) {
        error(e.message);
      }
    }

    return {
      /**
       * Called when the component is mounted.
       */
      mount: function mount() {
        if (Splide.State.is(_CREATED)) {
          Splide.index = Splide.options.start;
        }
      }
    };
  };

  ; // CONCATENATED MODULE: ./src/js/constants/directions.js

  /**
   * Export layout modes.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * Enumerate slides from left to right.
   *
   * @type {string}
   */

  var LTR = 'ltr';
  /**
   * Enumerate slides from right to left.
   *
   * @type {string}
   */

  var RTL = 'rtl';
  /**
   * Enumerate slides in a col.
   *
   * @type {string}
   */

  var TTB = 'ttb';
  ; // CONCATENATED MODULE: ./src/js/components/elements/slide.js

  /**
   * The sub component for handling each slide.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * Events for restoring original styles.
   *
   * @type {string}
   */

  var STYLE_RESTORE_EVENTS = 'update.slide';
  /**
   * The sub component for handling each slide.
   *
   * @param {Splide}  Splide    - A Splide instance.
   * @param {number}  index     - An unique slide index.
   * @param {number}  realIndex - Clones should pass a real slide index.
   * @param {Element} slide     - A slide element.
   *
   * @return {Object} - The sub component object.
   */

  /* harmony default export */

  var elements_slide = function elements_slide(Splide, index, realIndex, slide) {
    /**
     * Whether to update "is-active" class before or after transition.
     *
     * @type {boolean}
     */
    var updateOnMove = Splide.options.updateOnMove;
    /**
     * Events when the slide status is updated.
     * Append a namespace to remove listeners later.
     *
     * @type {string}
     */

    var STATUS_UPDATE_EVENTS = 'ready.slide updated.slide resized.slide moved.slide' + (updateOnMove ? ' move.slide' : '');
    /**
     * Slide sub component object.
     *
     * @type {Object}
     */

    var Slide = {
      /**
       * Slide element.
       *
       * @type {Element}
       */
      slide: slide,

      /**
       * Slide index.
       *
       * @type {number}
       */
      index: index,

      /**
       * Real index for clones.
       *
       * @type {number}
       */
      realIndex: realIndex,

      /**
       * Container element if available.
       *
       * @type {Element|undefined}
       */
      container: child(slide, Splide.classes.container),

      /**
       * Whether this is a cloned slide or not.
       *
       * @type {boolean}
       */
      isClone: realIndex > -1,

      /**
       * Called when the component is mounted.
       */
      mount: function mount() {
        var _this = this;

        if (!this.isClone) {
          slide.id = Splide.root.id + "-slide" + pad(index + 1);
        }

        Splide.on(STATUS_UPDATE_EVENTS, function () {
          return _this.update();
        }).on(STYLE_RESTORE_EVENTS, restoreStyles).on('click', function () {
          return Splide.emit('click', _this);
        }, slide);
        /*
         * Add "is-active" class to a clone element temporarily
         * and it will be removed on "moved" event.
         */

        if (updateOnMove) {
          Splide.on('move.slide', function (newIndex) {
            if (newIndex === realIndex) {
              _update(true, false);
            }
          });
        } // Make sure the slide is shown.


        applyStyle(slide, {
          display: ''
        }); // Hold the original styles.

        this.styles = getAttribute(slide, 'style') || '';
      },

      /**
       * Destroy.
       */
      destroy: function destroy() {
        Splide.off(STATUS_UPDATE_EVENTS).off(STYLE_RESTORE_EVENTS).off('click', slide);
        removeClass(slide, values(STATUS_CLASSES));
        restoreStyles();
        removeAttribute(this.container, 'style');
      },

      /**
       * Update active and visible status.
       */
      update: function update() {
        _update(this.isActive(), false);

        _update(this.isVisible(), true);
      },

      /**
       * Check whether this slide is active or not.
       *
       * @return {boolean} - True if the slide is active or false if not.
       */
      isActive: function isActive() {
        return Splide.index === index;
      },

      /**
       * Check whether this slide is visible in the viewport or not.
       *
       * @return {boolean} - True if the slide is visible or false if not.
       */
      isVisible: function isVisible() {
        var active = this.isActive();

        if (Splide.is(FADE) || active) {
          return active;
        }

        var ceil = Math.ceil;
        var trackRect = getRect(Splide.Components.Elements.track);
        var slideRect = getRect(slide);

        if (Splide.options.direction === TTB) {
          return trackRect.top <= slideRect.top && slideRect.bottom <= ceil(trackRect.bottom);
        }

        return trackRect.left <= slideRect.left && slideRect.right <= ceil(trackRect.right);
      },

      /**
       * Calculate how far this slide is from another slide and
       * return true if the distance is within the given number.
       *
       * @param {number} from   - Index of a target slide.
       * @param {number} within - True if the slide is within this number.
       *
       * @return {boolean} - True if the slide is within the number or false otherwise.
       */
      isWithin: function isWithin(from, within) {
        var diff = Math.abs(from - index);

        if (!Splide.is(SLIDE) && !this.isClone) {
          diff = Math.min(diff, Splide.length - diff);
        }

        return diff < within;
      }
    };
    /**
     * Update classes for activity or visibility.
     *
     * @param {boolean} active        - Is active/visible or not.
     * @param {boolean} forVisibility - Toggle classes for activity or visibility.
     */

    function _update(active, forVisibility) {
      var type = forVisibility ? 'visible' : 'active';
      var className = STATUS_CLASSES[type];

      if (active) {
        addClass(slide, className);
        Splide.emit("" + type, Slide);
      } else {
        if (hasClass(slide, className)) {
          removeClass(slide, className);
          Splide.emit("" + (forVisibility ? 'hidden' : 'inactive'), Slide);
        }
      }
    }
    /**
     * Restore the original styles.
     */


    function restoreStyles() {
      setAttribute(slide, 'style', Slide.styles);
    }

    return Slide;
  };

  ; // CONCATENATED MODULE: ./src/js/components/elements/index.js

  /**
   * The component for main elements.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * The property name for UID stored in a window object.
   *
   * @type {string}
   */

  var UID_NAME = 'uid';
  /**
   * The component for main elements.
   *
   * @param {Splide} Splide     - A Splide instance.
   * @param {Object} Components - An object containing components.
   *
   * @return {Object} - The component object.
   */

  /* harmony default export */

  var components_elements = function components_elements(Splide, Components) {
    /**
     * Hold the root element.
     *
     * @type {Element}
     */
    var root = Splide.root;
    /**
     * Hold the class list.
     *
     * @type {Object}
     */

    var classes = Splide.classes;
    /**
     * Store Slide objects.
     *
     * @type {Array}
     */

    var Slides = [];
    /*
     * Assign unique ID to the root element if it doesn't have the one.
     * Note that IE doesn't support padStart() to fill the uid by 0.
     */

    if (!root.id) {
      window.splide = window.splide || {};
      var uid = window.splide[UID_NAME] || 0;
      window.splide[UID_NAME] = ++uid;
      root.id = "splide" + pad(uid);
    }
    /**
     * Elements component object.
     *
     * @type {Object}
     */


    var Elements = {
      /**
       * Called when the component is mounted.
       * Collect main elements and store them as member properties.
       */
      mount: function mount() {
        var _this = this;

        this.init();
        Splide.on('refresh', function () {
          _this.destroy();

          _this.init();
        }).on('updated', function () {
          removeClass(root, getClasses());
          addClass(root, getClasses());
        });
      },

      /**
       * Destroy.
       */
      destroy: function destroy() {
        Slides.forEach(function (Slide) {
          Slide.destroy();
        });
        Slides = [];
        removeClass(root, getClasses());
      },

      /**
       * Initialization.
       */
      init: function init() {
        var _this2 = this;

        collect();
        addClass(root, getClasses());
        this.slides.forEach(function (slide, index) {
          _this2.register(slide, index, -1);
        });
      },

      /**
       * Register a slide to create a Slide object and handle its behavior.
       *
       * @param {Element} slide     - A slide element.
       * @param {number}  index     - A unique index. This can be negative.
       * @param {number}  realIndex - A real index for clones. Set -1 for real slides.
       */
      register: function register(slide, index, realIndex) {
        var SlideObject = elements_slide(Splide, index, realIndex, slide);
        SlideObject.mount();
        Slides.push(SlideObject);
      },

      /**
       * Return the Slide object designated by the index.
       * Note that "find" is not supported by IE.
       *
       * @return {Object|undefined} - A Slide object if available. Undefined if not.
       */
      getSlide: function getSlide(index) {
        return Slides.filter(function (Slide) {
          return Slide.index === index;
        })[0];
      },

      /**
       * Return all Slide objects.
       *
       * @param {boolean} includeClones - Whether to include cloned slides or not.
       *
       * @return {Object[]} - Slide objects.
       */
      getSlides: function getSlides(includeClones) {
        return includeClones ? Slides : Slides.filter(function (Slide) {
          return !Slide.isClone;
        });
      },

      /**
       * Return Slide objects belonging to the given page.
       *
       * @param {number} page - A page number.
       *
       * @return {Object[]} - An array containing Slide objects.
       */
      getSlidesByPage: function getSlidesByPage(page) {
        var idx = Components.Controller.toIndex(page);
        var options = Splide.options;
        var max = options.focus !== false ? 1 : options.perPage;
        return Slides.filter(function (_ref) {
          var index = _ref.index;
          return idx <= index && index < idx + max;
        });
      },

      /**
       * Insert a slide to a slider.
       * Need to refresh Splide after adding a slide.
       *
       * @param {Node|string} slide    - A slide element to be added.
       * @param {number}      index    - A slide will be added at the position.
       * @param {Function}    callback - Called right after the slide is added to the DOM tree.
       */
      add: function add(slide, index, callback) {
        if (typeof slide === 'string') {
          slide = domify(slide);
        }

        if (slide instanceof Element) {
          var ref = this.slides[index]; // This will be removed in mount() of a Slide component.

          applyStyle(slide, {
            display: 'none'
          });

          if (ref) {
            before(slide, ref);
            this.slides.splice(index, 0, slide);
          } else {
            append(this.list, slide);
            this.slides.push(slide);
          }

          loaded(slide, function () {
            callback && callback(slide);
          });
        }
      },

      /**
       * Remove a slide from a slider.
       * Need to refresh Splide after removing a slide.
       *
       * @param index - Slide index.
       */
      remove: function remove(index) {
        dom_remove(this.slides.splice(index, 1)[0]);
      },

      /**
       * Trigger the provided callback for each Slide object.
       *
       * @param {Function} callback - A callback function. The first argument will be the Slide object.
       */
      each: function each(callback) {
        Slides.forEach(callback);
      },

      /**
       * Return slides length without clones.
       *
       * @return {number} - Slide length.
       */
      get length() {
        return this.slides.length;
      },

      /**
       * Return "SlideObjects" length including clones.
       *
       * @return {number} - Slide length including clones.
       */
      get total() {
        return Slides.length;
      }

    };
    /**
     * Collect elements.
     */

    function collect() {
      Elements.slider = child(root, classes.slider);
      Elements.track = find(root, "." + classes.track);
      Elements.list = child(Elements.track, classes.list);
      exist(Elements.track && Elements.list, 'Track or list was not found.');
      Elements.slides = children(Elements.list, classes.slide);
      var arrows = findParts(classes.arrows);
      Elements.arrows = {
        prev: find(arrows, "." + classes.prev),
        next: find(arrows, "." + classes.next)
      };
      var autoplay = findParts(classes.autoplay);
      Elements.bar = find(findParts(classes.progress), "." + classes.bar);
      Elements.play = find(autoplay, "." + classes.play);
      Elements.pause = find(autoplay, "." + classes.pause);
      Elements.track.id = Elements.track.id || root.id + "-track";
      Elements.list.id = Elements.list.id || root.id + "-list";
    }
    /**
     * Return class names for the root element.
     */


    function getClasses() {
      var rootClass = classes.root;
      var options = Splide.options;
      return [rootClass + "--" + options.type, rootClass + "--" + options.direction, options.drag ? rootClass + "--draggable" : '', options.isNavigation ? rootClass + "--nav" : '', STATUS_CLASSES.active];
    }
    /**
     * Find parts only from children of the root or track.
     *
     * @return {Element} - A found element or undefined.
     */


    function findParts(className) {
      return child(root, className) || child(Elements.slider, className);
    }

    return Elements;
  };

  ; // CONCATENATED MODULE: ./src/js/components/controller/index.js

  /**
   * The component for controlling the track.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  var floor = Math.floor;
  /**
   * The component for controlling the track.
   *
   * @param {Splide} Splide     - A Splide instance.
   * @param {Object} Components - An object containing components.
   *
   * @return {Object} - The component object.
   */

  /* harmony default export */

  var controller = function controller(Splide, Components) {
    /**
     * Store current options.
     *
     * @type {Object}
     */
    var options;
    /**
     * True if the slide is LOOP mode.
     *
     * @type {boolean}
     */

    var isLoop;
    /**
     * Controller component object.
     *
     * @type {Object}
     */

    var Controller = {
      /**
       * Called when the component is mounted.
       */
      mount: function mount() {
        options = Splide.options;
        isLoop = Splide.is(LOOP);
        bind();
      },

      /**
       * Make track run by the given control.
       * - "+{i}" : Increment the slide index by i.
       * - "-{i}" : Decrement the slide index by i.
       * - "{i}"  : Go to the slide whose index is i.
       * - ">"    : Go to next page.
       * - "<"    : Go to prev page.
       * - ">{i}" : Go to page i.
       *
       * @param {string|number} control  - A control pattern.
       * @param {boolean}       silently - Go to the destination without event emission.
       */
      go: function go(control, silently) {
        var destIndex = this.trim(this.parse(control));
        Components.Track.go(destIndex, this.rewind(destIndex), silently);
      },

      /**
       * Parse the given control and return the destination index for the track.
       *
       * @param {string} control - A control target pattern.
       *
       * @return {number} - A parsed target.
       */
      parse: function parse(control) {
        var index = Splide.index;
        var matches = String(control).match(/([+\-<>]+)(\d+)?/);
        var indicator = matches ? matches[1] : '';
        var number = matches ? parseInt(matches[2]) : 0;

        switch (indicator) {
          case '+':
            index += number || 1;
            break;

          case '-':
            index -= number || 1;
            break;

          case '>':
          case '<':
            index = parsePage(number, index, indicator === '<');
            break;

          default:
            index = parseInt(control);
        }

        return index;
      },

      /**
       * Compute index from the given page number.
       *
       * @param {number} page - Page number.
       *
       * @return {number} - A computed page number.
       */
      toIndex: function toIndex(page) {
        if (hasFocus()) {
          return page;
        }

        var length = Splide.length;
        var perPage = options.perPage;
        var index = page * perPage;
        index = index - (this.pageLength * perPage - length) * floor(index / length); // Adjustment for the last page.

        if (length - perPage <= index && index < length) {
          index = length - perPage;
        }

        return index;
      },

      /**
       * Compute page number from the given slide index.
       *
       * @param {number} index - Slide index.
       *
       * @return {number} - A computed page number.
       */
      toPage: function toPage(index) {
        if (hasFocus()) {
          return index;
        }

        var length = Splide.length;
        var perPage = options.perPage; // Make the last "perPage" number of slides belong to the last page.

        if (length - perPage <= index && index < length) {
          return floor((length - 1) / perPage);
        }

        return floor(index / perPage);
      },

      /**
       * Trim the given index according to the current mode.
       * Index being returned could be less than 0 or greater than the length in Loop mode.
       *
       * @param {number} index - An index being trimmed.
       *
       * @return {number} - A trimmed index.
       */
      trim: function trim(index) {
        if (!isLoop) {
          index = options.rewind ? this.rewind(index) : between(index, 0, this.edgeIndex);
        }

        return index;
      },

      /**
       * Rewind the given index if it's out of range.
       *
       * @param {number} index - An index.
       *
       * @return {number} - A rewound index.
       */
      rewind: function rewind(index) {
        var edge = this.edgeIndex;

        if (isLoop) {
          while (index > edge) {
            index -= edge + 1;
          }

          while (index < 0) {
            index += edge + 1;
          }
        } else {
          if (index > edge) {
            index = 0;
          } else if (index < 0) {
            index = edge;
          }
        }

        return index;
      },

      /**
       * Check if the direction is "rtl" or not.
       *
       * @return {boolean} - True if "rtl" or false if not.
       */
      isRtl: function isRtl() {
        return options.direction === RTL;
      },

      /**
       * Return the page length.
       *
       * @return {number} - Max page number.
       */
      get pageLength() {
        var length = Splide.length;
        return hasFocus() ? length : Math.ceil(length / options.perPage);
      },

      /**
       * Return the edge index.
       *
       * @return {number} - Edge index.
       */
      get edgeIndex() {
        var length = Splide.length;

        if (!length) {
          return 0;
        }

        if (hasFocus() || options.isNavigation || isLoop) {
          return length - 1;
        }

        return length - options.perPage;
      },

      /**
       * Return the index of the previous slide.
       *
       * @return {number} - The index of the previous slide if available. -1 otherwise.
       */
      get prevIndex() {
        var prev = Splide.index - 1;

        if (isLoop || options.rewind) {
          prev = this.rewind(prev);
        }

        return prev > -1 ? prev : -1;
      },

      /**
       * Return the index of the next slide.
       *
       * @return {number} - The index of the next slide if available. -1 otherwise.
       */
      get nextIndex() {
        var next = Splide.index + 1;

        if (isLoop || options.rewind) {
          next = this.rewind(next);
        }

        return Splide.index < next && next <= this.edgeIndex || next === 0 ? next : -1;
      }

    };
    /**
     * Listen to some events.
     */

    function bind() {
      Splide.on('move', function (newIndex) {
        Splide.index = newIndex;
      }).on('updated refresh', function (newOptions) {
        options = newOptions || options;
        Splide.index = between(Splide.index, 0, Controller.edgeIndex);
      });
    }
    /**
     * Verify if the focus option is available or not.
     *
     * @return {boolean} - True if a slider has the focus option.
     */


    function hasFocus() {
      return options.focus !== false;
    }
    /**
     * Return the next or previous page index computed by the page number and current index.
     *
     * @param {number}  number - Specify the page number.
     * @param {number}  index  - Current index.
     * @param {boolean} prev   - Prev or next.
     *
     * @return {number} - Slide index.
     */


    function parsePage(number, index, prev) {
      if (number > -1) {
        return Controller.toIndex(number);
      }

      var perMove = options.perMove;
      var sign = prev ? -1 : 1;

      if (perMove) {
        return index + perMove * sign;
      }

      return Controller.toIndex(Controller.toPage(index) + sign);
    }

    return Controller;
  };

  ; // CONCATENATED MODULE: ./src/js/components/track/index.js

  /**
   * The component for moving list in the track.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  var abs = Math.abs;
  /**
   * The component for moving list in the track.
   *
   * @param {Splide} Splide     - A Splide instance.
   * @param {Object} Components - An object containing components.
   *
   * @return {Object} - The component object.
   */

  /* harmony default export */

  var track = function track(Splide, Components) {
    /**
     * Hold the Layout component.
     *
     * @type {Object}
     */
    var Layout;
    /**
     * Hold the Layout component.
     *
     * @type {Object}
     */

    var Elements;
    /**
     * Store the list element.
     *
     * @type {Element}
     */

    var list;
    /**
     * Whether the current direction is vertical or not.
     *
     * @type {boolean}
     */

    var isVertical = Splide.options.direction === TTB;
    /**
     * Whether the slider type is FADE or not.
     *
     * @type {boolean}
     */

    var isFade = Splide.is(FADE);
    /**
     * Whether the slider direction is RTL or not.
     *
     * @type {boolean}
     */

    var isRTL = Splide.options.direction === RTL;
    /**
     * This will be true while transitioning from the last index to the first one.
     *
     * @type {boolean}
     */

    var isLoopPending = false;
    /**
     * Sign for the direction. Only RTL mode uses the positive sign.
     *
     * @type {number}
     */

    var sign = isRTL ? 1 : -1;
    /**
     * Track component object.
     *
     * @type {Object}
     */

    var Track = {
      /**
       * Make public the sign defined locally.
       *
       * @type {number}
       */
      sign: sign,

      /**
       * Called when the component is mounted.
       */
      mount: function mount() {
        Elements = Components.Elements;
        Layout = Components.Layout;
        list = Elements.list;
      },

      /**
       * Called after the component is mounted.
       * The resize event must be registered after the Layout's one is done.
       */
      mounted: function mounted() {
        var _this = this;

        if (!isFade) {
          this.jump(0);
          Splide.on('mounted resize updated', function () {
            _this.jump(Splide.index);
          });
        }
      },

      /**
       * Go to the given destination index.
       * After arriving there, the track is jump to the new index without animation, mainly for loop mode.
       *
       * @param {number}  destIndex - A destination index.
       *                              This can be negative or greater than slides length for reaching clones.
       * @param {number}  newIndex  - An actual new index. They are always same in Slide and Rewind mode.
       * @param {boolean} silently  - If true, suppress emitting events.
       */
      go: function go(destIndex, newIndex, silently) {
        var newPosition = getTrimmedPosition(destIndex);
        var prevIndex = Splide.index; // Prevent any actions while transitioning from the last index to the first one for jump.

        if (Splide.State.is(_MOVING) && isLoopPending) {
          return;
        }

        isLoopPending = destIndex !== newIndex;

        if (!silently) {
          Splide.emit('move', newIndex, prevIndex, destIndex);
        }

        if (Math.abs(newPosition - this.position) >= 1 || isFade) {
          Components.Transition.start(destIndex, newIndex, prevIndex, this.toCoord(newPosition), function () {
            onTransitionEnd(destIndex, newIndex, prevIndex, silently);
          });
        } else {
          if (destIndex !== prevIndex && Splide.options.trimSpace === 'move') {
            Components.Controller.go(destIndex + destIndex - prevIndex, silently);
          } else {
            onTransitionEnd(destIndex, newIndex, prevIndex, silently);
          }
        }
      },

      /**
       * Move the track to the specified index.
       *
       * @param {number} index - A destination index where the track jumps.
       */
      jump: function jump(index) {
        this.translate(getTrimmedPosition(index));
      },

      /**
       * Set the list position by CSS translate property.
       *
       * @param {number} position - A new position value.
       */
      translate: function translate(position) {
        applyStyle(list, {
          transform: "translate" + (isVertical ? 'Y' : 'X') + "(" + position + "px)"
        });
      },

      /**
       * Cancel the transition and set the list position.
       * Also, loop the slider if necessary.
       */
      cancel: function cancel() {
        if (Splide.is(LOOP)) {
          this.shift();
        } else {
          // Ensure the current position.
          this.translate(this.position);
        }

        applyStyle(list, {
          transition: ''
        });
      },

      /**
       * Shift the slider if it exceeds borders on the edge.
       */
      shift: function shift() {
        var position = abs(this.position);
        var left = abs(this.toPosition(0));
        var right = abs(this.toPosition(Splide.length));
        var innerSize = right - left;

        if (position < left) {
          position += innerSize;
        } else if (position > right) {
          position -= innerSize;
        }

        this.translate(sign * position);
      },

      /**
       * Trim redundant spaces on the left or right edge if necessary.
       *
       * @param {number} position - Position value to be trimmed.
       *
       * @return {number} - Trimmed position.
       */
      trim: function trim(position) {
        if (!Splide.options.trimSpace || Splide.is(LOOP)) {
          return position;
        }

        var edge = sign * (Layout.totalSize() - Layout.size - Layout.gap);
        return between(position, edge, 0);
      },

      /**
       * Calculate the closest slide index from the given position.
       *
       * @param {number} position - A position converted to an slide index.
       *
       * @return {number} - The closest slide index.
       */
      toIndex: function toIndex(position) {
        var _this2 = this;

        var index = 0;
        var minDistance = Infinity;
        Elements.getSlides(true).forEach(function (Slide) {
          var slideIndex = Slide.index;
          var distance = abs(_this2.toPosition(slideIndex) - position);

          if (distance < minDistance) {
            minDistance = distance;
            index = slideIndex;
          }
        });
        return index;
      },

      /**
       * Return coordinates object by the given position.
       *
       * @param {number} position - A position value.
       *
       * @return {Object} - A coordinates object.
       */
      toCoord: function toCoord(position) {
        return {
          x: isVertical ? 0 : position,
          y: isVertical ? position : 0
        };
      },

      /**
       * Calculate the track position by a slide index.
       *
       * @param {number} index - Slide index.
       *
       * @return {Object} - Calculated position.
       */
      toPosition: function toPosition(index) {
        var position = Layout.totalSize(index) - Layout.slideSize(index) - Layout.gap;
        return sign * (position + this.offset(index));
      },

      /**
       * Return the current offset value, considering direction.
       *
       * @return {number} - Offset amount.
       */
      offset: function offset(index) {
        var focus = Splide.options.focus;
        var slideSize = Layout.slideSize(index);

        if (focus === 'center') {
          return -(Layout.size - slideSize) / 2;
        }

        return -(parseInt(focus) || 0) * (slideSize + Layout.gap);
      },

      /**
       * Return the current position.
       * This returns the correct position even while transitioning by CSS.
       *
       * @return {number} - Current position.
       */
      get position() {
        var prop = isVertical ? 'top' : isRTL ? 'right' : 'left';
        return getRect(list)[prop] - (getRect(Elements.track)[prop] - Layout.padding[prop] * sign);
      }

    };
    /**
     * Called whenever slides arrive at a destination.
     *
     * @param {number}  destIndex - A destination index.
     * @param {number}  newIndex  - A new index.
     * @param {number}  prevIndex - A previous index.
     * @param {boolean} silently  - If true, suppress emitting events.
     */

    function onTransitionEnd(destIndex, newIndex, prevIndex, silently) {
      applyStyle(list, {
        transition: ''
      });
      isLoopPending = false;

      if (!isFade) {
        Track.jump(newIndex);
      }

      if (!silently) {
        Splide.emit('moved', newIndex, prevIndex, destIndex);
      }
    }
    /**
     * Convert index to the trimmed position.
     *
     * @return {number} - Trimmed position.
     */


    function getTrimmedPosition(index) {
      return Track.trim(Track.toPosition(index));
    }

    return Track;
  };

  ; // CONCATENATED MODULE: ./src/js/components/clones/index.js

  /**
   * The component for cloning some slides for "loop" mode of the track.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * The component for cloning some slides for "loop" mode of the track.
   *
   * @param {Splide} Splide     - A Splide instance.
   * @param {Object} Components - An object containing components.
   *
   * @return {Object} - The component object.
   */

  /* harmony default export */

  var clones = function clones(Splide, Components) {
    /**
     * Store information of all clones.
     *
     * @type {Array}
     */
    var clones = [];
    /**
     * Store the current clone count on one side.
     *
     * @type {number}
     */

    var cloneCount = 0;
    /**
     * Keep Elements component.
     *
     * @type {Object}
     */

    var Elements = Components.Elements;
    /**
     * Clones component object.
     *
     * @type {Object}
     */

    var Clones = {
      /**
       * Called when the component is mounted.
       */
      mount: function mount() {
        var _this = this;

        if (Splide.is(LOOP)) {
          init();
          Splide.on('refresh:before', function () {
            _this.destroy();
          }).on('refresh', init).on('resize', function () {
            if (cloneCount !== getCloneCount()) {
              // Destroy before refresh not to collect clones by the Elements component.
              _this.destroy();

              Splide.refresh();
            }
          });
        }
      },

      /**
       * Destroy.
       */
      destroy: function destroy() {
        dom_remove(clones);
        clones = [];
      },

      /**
       * Return all clones.
       *
       * @return {Element[]} - Cloned elements.
       */
      get clones() {
        return clones;
      },

      /**
       * Return clone length.
       *
       * @return {number} - A length of clones.
       */
      get length() {
        return clones.length;
      }

    };
    /**
     * Initialization.
     */

    function init() {
      Clones.destroy();
      cloneCount = getCloneCount();
      generateClones(cloneCount);
    }
    /**
     * Generate and append/prepend clones.
     *
     * @param {number} count - The half number of clones.
     */


    function generateClones(count) {
      var length = Elements.length,
          register = Elements.register;

      if (length) {
        var slides = Elements.slides;

        while (slides.length < count) {
          slides = slides.concat(slides);
        } // Clones after the last element.


        slides.slice(0, count).forEach(function (elm, index) {
          var clone = cloneDeeply(elm);
          append(Elements.list, clone);
          clones.push(clone);
          register(clone, index + length, index % length);
        }); // Clones before the first element.

        slides.slice(-count).forEach(function (elm, index) {
          var clone = cloneDeeply(elm);
          before(clone, slides[0]);
          clones.push(clone);
          register(clone, index - count, (length + index - count % length) % length);
        });
      }
    }
    /**
     * Return half count of clones to be generated.
     * Clone count is determined by:
     * - "clones" value in the options.
     * - Number of slides that can be placed in a view in "fixed" mode.
     * - Max pages a flick action can move.
     * - Whether the slide length is enough for perPage.
     *
     * @return {number} - Count for clones.
     */


    function getCloneCount() {
      var options = Splide.options;

      if (options.clones) {
        return options.clones;
      } // Use the slide length in autoWidth mode because the number cannot be calculated.


      var baseCount = options.autoWidth || options.autoHeight ? Elements.length : options.perPage;
      var dimension = options.direction === TTB ? 'Height' : 'Width';
      var fixedSize = toPixel(Splide.root, options["fixed" + dimension]);

      if (fixedSize) {
        // Roughly calculate the count. This needs not to be strict.
        baseCount = Math.ceil(Elements.track["client" + dimension] / fixedSize);
      }

      return baseCount * (options.drag ? options.flickMaxPages + 1 : 1);
    }
    /**
     * Clone deeply the given element.
     *
     * @param {Element} elm - An element being duplicated.
     *
     * @return {Node} - A cloned node(element).
     */


    function cloneDeeply(elm) {
      var clone = elm.cloneNode(true);
      addClass(clone, Splide.classes.clone); // ID should not be duplicated.

      removeAttribute(clone, 'id');
      return clone;
    }

    return Clones;
  };

  ; // CONCATENATED MODULE: ./src/js/components/layout/directions/horizontal.js

  /**
   * The resolver component for horizontal layout.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * The resolver component for horizontal layout.
   *
   * @param {Splide} Splide     - A Splide instance.
   * @param {Object} Components - An object containing components.
   *
   * @return {Object} - The resolver object.
   */

  /* harmony default export */

  var horizontal = function horizontal(Splide, Components) {
    /**
     * Keep the Elements component.
     *
     * @type {string}
     */
    var Elements = Components.Elements;
    /**
     * Keep the root element.
     *
     * @type {Element}
     */

    var root = Splide.root;
    /**
     * Keep the track element.
     *
     * @type {Element}
     */

    var track;
    /**
     * Keep the latest options.
     *
     * @type {Element}
     */

    var options = Splide.options;
    return {
      /**
       * Margin property name.
       *
       * @type {string}
       */
      margin: 'margin' + (options.direction === RTL ? 'Left' : 'Right'),

      /**
       * Always 0 because the height will be determined by inner contents.
       *
       * @type {number}
       */
      height: 0,

      /**
       * Initialization.
       */
      init: function init() {
        this.resize();
      },

      /**
       * Resize gap and padding.
       * This must be called on init.
       */
      resize: function resize() {
        options = Splide.options;
        track = Elements.track;
        this.gap = toPixel(root, options.gap);
        var padding = options.padding;
        var left = toPixel(root, padding.left || padding);
        var right = toPixel(root, padding.right || padding);
        this.padding = {
          left: left,
          right: right
        };
        applyStyle(track, {
          paddingLeft: unit(left),
          paddingRight: unit(right)
        });
      },

      /**
       * Return total width from the left of the list to the right of the slide specified by the provided index.
       *
       * @param {number} index - Optional. A slide index. If undefined, total width of the slider will be returned.
       *
       * @return {number} - Total width to the right side of the specified slide, or 0 for an invalid index.
       */
      totalWidth: function totalWidth(index) {
        if (index === void 0) {
          index = Splide.length - 1;
        }

        var Slide = Elements.getSlide(index);
        var width = 0;

        if (Slide) {
          var slideRect = getRect(Slide.slide);
          var listRect = getRect(Elements.list);

          if (options.direction === RTL) {
            width = listRect.right - slideRect.left;
          } else {
            width = slideRect.right - listRect.left;
          }

          width += this.gap;
        }

        return width;
      },

      /**
       * Return the slide width in px.
       *
       * @param {number} index - Slide index.
       *
       * @return {number} - The slide width.
       */
      slideWidth: function slideWidth(index) {
        if (options.autoWidth) {
          var Slide = Elements.getSlide(index);
          return Slide ? Slide.slide.offsetWidth : 0;
        }

        var width = options.fixedWidth || (this.width + this.gap) / options.perPage - this.gap;
        return toPixel(root, width);
      },

      /**
       * Return the slide height in px.
       *
       * @return {number} - The slide height.
       */
      slideHeight: function slideHeight() {
        var height = options.height || options.fixedHeight || this.width * options.heightRatio;
        return toPixel(root, height);
      },

      /**
       * Return slider width without padding.
       *
       * @return {number} - Current slider width.
       */
      get width() {
        return track.clientWidth - this.padding.left - this.padding.right;
      }

    };
  };

  ; // CONCATENATED MODULE: ./src/js/components/layout/directions/vertical.js

  /**
   * The resolver component for vertical layout.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * The resolver component for vertical layout.
   *
   * @param {Splide} Splide     - A Splide instance.
   * @param {Object} Components - An object containing components.
   *
   * @return {Object} - The resolver object.
   */

  /* harmony default export */

  var vertical = function vertical(Splide, Components) {
    /**
     * Keep the Elements component.
     *
     * @type {string}
     */
    var Elements = Components.Elements;
    /**
     * Keep the root element.
     *
     * @type {Element}
     */

    var root = Splide.root;
    /**
     * Keep the track element.
     *
     * @type {Element}
     */

    var track;
    /**
     * Keep the latest options.
     *
     * @type {Element}
     */

    var options;
    return {
      /**
       * Margin property name.
       *
       * @type {string}
       */
      margin: 'marginBottom',

      /**
       * Initialization.
       */
      init: function init() {
        this.resize();
      },

      /**
       * Resize gap and padding.
       * This must be called on init.
       */
      resize: function resize() {
        options = Splide.options;
        track = Elements.track;
        this.gap = toPixel(root, options.gap);
        var padding = options.padding;
        var top = toPixel(root, padding.top || padding);
        var bottom = toPixel(root, padding.bottom || padding);
        this.padding = {
          top: top,
          bottom: bottom
        };
        applyStyle(track, {
          paddingTop: unit(top),
          paddingBottom: unit(bottom)
        });
      },

      /**
       * Return total height from the top of the list to the bottom of the slide specified by the provided index.
       *
       * @param {number} index - Optional. A slide index. If undefined, total height of the slider will be returned.
       *
       * @return {number} - Total height to the bottom of the specified slide, or 0 for an invalid index.
       */
      totalHeight: function totalHeight(index) {
        if (index === void 0) {
          index = Splide.length - 1;
        }

        var Slide = Elements.getSlide(index);

        if (Slide) {
          return getRect(Slide.slide).bottom - getRect(Elements.list).top + this.gap;
        }

        return 0;
      },

      /**
       * Return the slide width in px.
       *
       * @return {number} - The slide width.
       */
      slideWidth: function slideWidth() {
        return toPixel(root, options.fixedWidth || this.width);
      },

      /**
       * Return the slide height in px.
       *
       * @param {number} index - Slide index.
       *
       * @return {number} - The slide height.
       */
      slideHeight: function slideHeight(index) {
        if (options.autoHeight) {
          var Slide = Elements.getSlide(index);
          return Slide ? Slide.slide.offsetHeight : 0;
        }

        var height = options.fixedHeight || (this.height + this.gap) / options.perPage - this.gap;
        return toPixel(root, height);
      },

      /**
       * Return slider width without padding.
       *
       * @return {number} - Current slider width.
       */
      get width() {
        return track.clientWidth;
      },

      /**
       * Return slide height without padding.
       *
       * @return {number} - Slider height.
       */
      get height() {
        var height = options.height || this.width * options.heightRatio;
        exist(height, '"height" or "heightRatio" is missing.');
        return toPixel(root, height) - this.padding.top - this.padding.bottom;
      }

    };
  };

  ; // CONCATENATED MODULE: ./src/js/utils/time.js

  /**
   * A package of utility functions related with time.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * Simple throttle function that controls how often the given function is executed.
   *
   * @param {function} func - A function to be throttled.
   * @param {number}   wait - Time in millisecond for interval of execution.
   *
   * @return {Function} - A debounced function.
   */

  function throttle(func, wait) {
    var timeout; // Declare function by the "function" keyword to prevent "this" from being inherited.

    return function () {
      if (!timeout) {
        timeout = setTimeout(function () {
          func();
          timeout = null;
        }, wait);
      }
    };
  }
  /**
   * Custom setInterval function that provides progress rate as callback.
   *
   * @param {function} callback - A callback function fired every time the interval time passes.
   * @param {number}   interval - Interval duration in milliseconds.
   * @param {function} progress - A callback function fired whenever the progress goes.
   *
   * @return {Object} - An object containing play() and pause() functions.
   */


  function createInterval(callback, interval, progress) {
    var _window = window,
        requestAnimationFrame = _window.requestAnimationFrame;
    var start,
        elapse,
        rate,
        _pause = true;

    var step = function step(timestamp) {
      if (!_pause) {
        if (!start) {
          start = timestamp;

          if (rate && rate < 1) {
            start -= rate * interval;
          }
        }

        elapse = timestamp - start;
        rate = elapse / interval;

        if (elapse >= interval) {
          start = 0;
          rate = 1;
          callback();
        }

        if (progress) {
          progress(rate);
        }

        requestAnimationFrame(step);
      }
    };

    return {
      pause: function pause() {
        _pause = true;
        start = 0;
      },
      play: function play(reset) {
        start = 0;

        if (reset) {
          rate = 0;
        }

        if (_pause) {
          _pause = false;
          requestAnimationFrame(step);
        }
      }
    };
  }

  ; // CONCATENATED MODULE: ./src/js/components/layout/index.js

  /**
   * The component for handing slide layouts and their sizes.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * The component for handing slide layouts and their sizes.
   *
   * @param {Splide} Splide     - A Splide instance.
   * @param {Object} Components - An object containing components.
   *
   * @return {Object} - The component object.
   */

  /* harmony default export */

  var layout = function layout(Splide, Components) {
    /**
     * Keep the Elements component.
     *
     * @type {string}
     */
    var Elements = Components.Elements;
    /**
     * Whether the slider is vertical or not.
     *
     * @type {boolean}
     */

    var isVertical = Splide.options.direction === TTB;
    /**
     * Layout component object.
     *
     * @type {Object}
     */

    var Layout = object_assign({
      /**
       * Called when the component is mounted.
       */
      mount: function mount() {
        bind();
        init(); // The word "size" means width for a horizontal slider and height for a vertical slider.

        this.totalSize = isVertical ? this.totalHeight : this.totalWidth;
        this.slideSize = isVertical ? this.slideHeight : this.slideWidth;
      },

      /**
       * Destroy the component.
       */
      destroy: function destroy() {
        removeAttribute([Elements.list, Elements.track], 'style');
      },

      /**
       * Return the slider height on the vertical mode or width on the horizontal mode.
       *
       * @return {number}
       */
      get size() {
        return isVertical ? this.height : this.width;
      }

    }, isVertical ? vertical(Splide, Components) : horizontal(Splide, Components));
    /**
     * Init slider styles according to options.
     */

    function init() {
      Layout.init();
      applyStyle(Splide.root, {
        maxWidth: unit(Splide.options.width)
      });
      Elements.each(function (Slide) {
        Slide.slide.style[Layout.margin] = unit(Layout.gap);
      });
      resize();
    }
    /**
     * Listen the resize native event with throttle.
     * Initialize when the component is mounted or options are updated.
     */


    function bind() {
      Splide.on('resize load', throttle(function () {
        Splide.emit('resize');
      }, Splide.options.throttle), window).on('resize', resize).on('updated refresh', init);
    }
    /**
     * Resize the track and slide elements.
     */


    function resize() {
      var options = Splide.options;
      Layout.resize();
      applyStyle(Elements.track, {
        height: unit(Layout.height)
      });
      var slideHeight = options.autoHeight ? null : unit(Layout.slideHeight());
      Elements.each(function (Slide) {
        applyStyle(Slide.container, {
          height: slideHeight
        });
        applyStyle(Slide.slide, {
          width: options.autoWidth ? null : unit(Layout.slideWidth(Slide.index)),
          height: Slide.container ? null : slideHeight
        });
      });
      Splide.emit('resized');
    }

    return Layout;
  };

  ; // CONCATENATED MODULE: ./src/js/components/drag/index.js

  /**
   * The component for supporting mouse drag and swipe.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  var drag_abs = Math.abs;
  /**
   * If the absolute velocity is greater thant this value,
   * a slider always goes to a different slide after drag, not allowed to stay on a current slide.
   */

  var MIN_VELOCITY = 0.1;
  /**
   * Adjust how much the track can be pulled on the first or last page.
   * The larger number this is, the farther the track moves.
   * This should be around 5 - 9.
   *
   * @type {number}
   */

  var FRICTION_REDUCER = 7;
  /**
   * The component supporting mouse drag and swipe.
   *
   * @param {Splide} Splide     - A Splide instance.
   * @param {Object} Components - An object containing components.
   *
   * @return {Object} - The component object.
   */

  /* harmony default export */

  var drag = function drag(Splide, Components) {
    /**
     * Store the Move component.
     *
     * @type {Object}
     */
    var Track = Components.Track;
    /**
     * Store the Controller component.
     *
     * @type {Object}
     */

    var Controller = Components.Controller;
    /**
     * Coordinate of the track on starting drag.
     *
     * @type {Object}
     */

    var startCoord;
    /**
     * Analyzed info on starting drag.
     *
     * @type {Object|null}
     */

    var startInfo;
    /**
     * Analyzed info being updated while dragging/swiping.
     *
     * @type {Object}
     */

    var currentInfo;
    /**
     * Determine whether slides are being dragged or not.
     *
     * @type {boolean}
     */

    var isDragging;
    /**
     * Whether the slider direction is vertical or not.
     *
     * @type {boolean}
     */

    var isVertical = Splide.options.direction === TTB;
    /**
     * Axis for the direction.
     *
     * @type {string}
     */

    var axis = isVertical ? 'y' : 'x';
    /**
     * Drag component object.
     *
     * @type {Object}
     */

    var Drag = {
      /**
       * Whether dragging is disabled or not.
       *
       * @type {boolean}
       */
      disabled: false,

      /**
       * Called when the component is mounted.
       */
      mount: function mount() {
        var _this = this;

        var Elements = Components.Elements;
        var track = Elements.track;
        Splide.on('touchstart mousedown', start, track).on('touchmove mousemove', move, track, {
          passive: false
        }).on('touchend touchcancel mouseleave mouseup dragend', end, track).on('mounted refresh', function () {
          // Prevent dragging an image or anchor itself.
          each(Elements.list.querySelectorAll('img, a'), function (elm) {
            Splide.off('dragstart', elm).on('dragstart', function (e) {
              e.preventDefault();
            }, elm, {
              passive: false
            });
          });
        }).on('mounted updated', function () {
          _this.disabled = !Splide.options.drag;
        });
      }
    };
    /**
     * Called when the track starts to be dragged.
     *
     * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
     */

    function start(e) {
      if (!Drag.disabled && !isDragging) {
        // These prams are used to evaluate whether the slider should start moving.
        init(e);
      }
    }
    /**
     * Initialize parameters.
     *
     * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
     */


    function init(e) {
      startCoord = Track.toCoord(Track.position);
      startInfo = analyze(e, {});
      currentInfo = startInfo;
    }
    /**
     * Called while the track being dragged.
     *
     * @param {TouchEvent|MouseEvent} e - TouchEvent or MouseEvent object.
     */


    function move(e) {
      if (startInfo) {
        currentInfo = analyze(e, startInfo);

        if (isDragging) {
          if (e.cancelable) {
            e.preventDefault();
          }

          if (!Splide.is(FADE)) {
            var position = startCoord[axis] + currentInfo.offset[axis];
            Track.translate(resist(position));
          }
        } else {
          if (shouldMove(currentInfo)) {
            Splide.emit('drag', startInfo);
            isDragging = true;
            Track.cancel(); // These params are actual drag data.

            init(e);
          }
        }
      }
    }
    /**
     * Determine whether to start moving the track or not by drag angle.
     *
     * @param {Object} info - An information object.
     *
     * @return {boolean} - True if the track should be moved or false if not.
     */


    function shouldMove(_ref) {
      var offset = _ref.offset;

      if (Splide.State.is(_MOVING) && Splide.options.waitForTransition) {
        return false;
      }

      var angle = Math.atan(drag_abs(offset.y) / drag_abs(offset.x)) * 180 / Math.PI;

      if (isVertical) {
        angle = 90 - angle;
      }

      return angle < Splide.options.dragAngleThreshold;
    }
    /**
     * Resist dragging the track on the first/last page because there is no more.
     *
     * @param {number} position - A position being applied to the track.
     *
     * @return {Object} - Adjusted position.
     */


    function resist(position) {
      if (Splide.is(SLIDE)) {
        var sign = Track.sign;

        var _start = sign * Track.trim(Track.toPosition(0));

        var _end = sign * Track.trim(Track.toPosition(Controller.edgeIndex));

        position *= sign;

        if (position < _start) {
          position = _start - FRICTION_REDUCER * Math.log(_start - position);
        } else if (position > _end) {
          position = _end + FRICTION_REDUCER * Math.log(position - _end);
        }

        position *= sign;
      }

      return position;
    }
    /**
     * Called when dragging ends.
     */


    function end() {
      startInfo = null;

      if (isDragging) {
        Splide.emit('dragged', currentInfo);
        go(currentInfo);
        isDragging = false;
      }
    }
    /**
     * Go to the slide determined by the analyzed data.
     *
     * @param {Object} info - An info object.
     */


    function go(info) {
      var velocity = info.velocity[axis];
      var absV = drag_abs(velocity);

      if (absV > 0) {
        var options = Splide.options;
        var index = Splide.index;
        var sign = velocity < 0 ? -1 : 1;
        var destIndex = index;

        if (!Splide.is(FADE)) {
          var destination = Track.position;

          if (absV > options.flickVelocityThreshold && drag_abs(info.offset[axis]) < options.swipeDistanceThreshold) {
            destination += sign * Math.min(absV * options.flickPower, Components.Layout.size * (options.flickMaxPages || 1));
          }

          destIndex = Track.toIndex(destination);
        }
        /*
         * Do not allow the track to go to a previous position if there is enough velocity.
         * Always use the adjacent index for the fade mode.
         */


        if (destIndex === index && absV > MIN_VELOCITY) {
          destIndex = index + sign * Track.sign;
        }

        if (Splide.is(SLIDE)) {
          destIndex = between(destIndex, 0, Controller.edgeIndex);
        }

        Controller.go(destIndex, options.isNavigation);
      }
    }
    /**
     * Analyze the given event object and return important information for handling swipe behavior.
     *
     * @param {Event}   e          - Touch or Mouse event object.
     * @param {Object}  startInfo  - Information analyzed on start for calculating difference from the current one.
     *
     * @return {Object} - An object containing analyzed information, such as offset, velocity, etc.
     */


    function analyze(e, startInfo) {
      var timeStamp = e.timeStamp,
          touches = e.touches;

      var _ref2 = touches ? touches[0] : e,
          clientX = _ref2.clientX,
          clientY = _ref2.clientY;

      var _ref3 = startInfo.to || {},
          _ref3$x = _ref3.x,
          fromX = _ref3$x === void 0 ? clientX : _ref3$x,
          _ref3$y = _ref3.y,
          fromY = _ref3$y === void 0 ? clientY : _ref3$y;

      var startTime = startInfo.time || 0;
      var offset = {
        x: clientX - fromX,
        y: clientY - fromY
      };
      var duration = timeStamp - startTime;
      var velocity = {
        x: offset.x / duration,
        y: offset.y / duration
      };
      return {
        to: {
          x: clientX,
          y: clientY
        },
        offset: offset,
        time: timeStamp,
        velocity: velocity
      };
    }

    return Drag;
  };

  ; // CONCATENATED MODULE: ./src/js/components/click/index.js

  /**
   * The component for handling a click event.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * The component for handling a click event.
   * Click should be disabled during drag/swipe.
   *
   * @param {Splide} Splide     - A Splide instance.
   * @param {Object} Components - An object containing components.
   *
   * @return {Object} - The component object.
   */

  /* harmony default export */

  var click = function click(Splide, Components) {
    /**
     * Whether click is disabled or not.
     *
     * @type {boolean}
     */
    var disabled = false;
    /**
     * Click component object.
     *
     * @type {Object}
     */

    var Click = {
      /**
       * Mount only when the drag is activated and the slide type is not "fade".
       *
       * @type {boolean}
       */
      required: Splide.options.drag,

      /**
       * Called when the component is mounted.
       */
      mount: function mount() {
        Splide.on('click', onClick, Components.Elements.track, {
          capture: true
        }).on('drag', function () {
          disabled = true;
        }).on('dragged', function () {
          // Make sure the flag is released after the click event is fired.
          setTimeout(function () {
            disabled = false;
          });
        });
      }
    };
    /**
     * Called when a track element is clicked.
     *
     * @param {Event} e - A click event.
     */

    function onClick(e) {
      if (disabled) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }

    return Click;
  };

  ; // CONCATENATED MODULE: ./src/js/components/autoplay/index.js

  /**
   * The component for playing slides automatically.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * Set of pause flags.
   */

  var PAUSE_FLAGS = {
    HOVER: 1,
    FOCUS: 2,
    MANUAL: 3
  };
  /**
   * The component for playing slides automatically.
   *
   * @param {Splide} Splide     - A Splide instance.
   * @param {Object} Components - An object containing components.
   * @param {string} name       - A component name as a lowercase string.
   *
   * @return {Object} - The component object.
   */

  /* harmony default export */

  var autoplay = function autoplay(Splide, Components, name) {
    /**
     * Store pause flags.
     *
     * @type {Array}
     */
    var flags = [];
    /**
     * Store an interval object.
     *
     * @type {Object};
     */

    var interval;
    /**
     * Keep the Elements component.
     *
     * @type {string}
     */

    var Elements = Components.Elements;
    /**
     * Autoplay component object.
     *
     * @type {Object}
     */

    var Autoplay = {
      /**
       * Required only when the autoplay option is true.
       *
       * @type {boolean}
       */
      required: Splide.options.autoplay,

      /**
       * Called when the component is mounted.
       * Note that autoplay starts only if there are slides over perPage number.
       */
      mount: function mount() {
        var options = Splide.options;

        if (Elements.slides.length > options.perPage) {
          interval = createInterval(function () {
            Splide.go('>');
          }, options.interval, function (rate) {
            Splide.emit(name + ":playing", rate);

            if (Elements.bar) {
              applyStyle(Elements.bar, {
                width: rate * 100 + "%"
              });
            }
          });
          bind();
          this.play();
        }
      },

      /**
       * Start autoplay.
       *
       * @param {number} flag - A pause flag to be removed.
       */
      play: function play(flag) {
        if (flag === void 0) {
          flag = 0;
        }

        flags = flags.filter(function (f) {
          return f !== flag;
        });

        if (!flags.length) {
          Splide.emit(name + ":play");
          interval.play(Splide.options.resetProgress);
        }
      },

      /**
       * Pause autoplay.
       * Note that Array.includes is not supported by IE.
       *
       * @param {number} flag - A pause flag to be added.
       */
      pause: function pause(flag) {
        if (flag === void 0) {
          flag = 0;
        }

        interval.pause();

        if (flags.indexOf(flag) === -1) {
          flags.push(flag);
        }

        if (flags.length === 1) {
          Splide.emit(name + ":pause");
        }
      }
    };
    /**
     * Listen some events.
     */

    function bind() {
      var options = Splide.options;
      var sibling = Splide.sibling;
      var elms = [Splide.root, sibling ? sibling.root : null];

      if (options.pauseOnHover) {
        switchOn(elms, 'mouseleave', PAUSE_FLAGS.HOVER, true);
        switchOn(elms, 'mouseenter', PAUSE_FLAGS.HOVER, false);
      }

      if (options.pauseOnFocus) {
        switchOn(elms, 'focusout', PAUSE_FLAGS.FOCUS, true);
        switchOn(elms, 'focusin', PAUSE_FLAGS.FOCUS, false);
      }

      if (Elements.play) {
        Splide.on('click', function () {
          // Need to be removed a focus flag at first.
          Autoplay.play(PAUSE_FLAGS.FOCUS);
          Autoplay.play(PAUSE_FLAGS.MANUAL);
        }, Elements.play);
      }

      if (Elements.pause) {
        switchOn([Elements.pause], 'click', PAUSE_FLAGS.MANUAL, false);
      }

      Splide.on('move refresh', function () {
        Autoplay.play();
      }) // Rewind the timer.
      .on('destroy', function () {
        Autoplay.pause();
      });
    }
    /**
     * Play or pause on the given event.
     *
     * @param {Element[]} elms  - Elements.
     * @param {string}    event - An event name or names.
     * @param {number}    flag  - A pause flag defined on the top.
     * @param {boolean}   play  - Determine whether to play or pause.
     */


    function switchOn(elms, event, flag, play) {
      elms.forEach(function (elm) {
        Splide.on(event, function () {
          Autoplay[play ? 'play' : 'pause'](flag);
        }, elm);
      });
    }

    return Autoplay;
  };

  ; // CONCATENATED MODULE: ./src/js/components/cover/index.js

  /**
   * The component for change an img element to background image of its wrapper.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * The component for change an img element to background image of its wrapper.
   *
   * @param {Splide} Splide     - A Splide instance.
   * @param {Object} Components - An object containing components.
   *
   * @return {Object} - The component object.
   */

  /* harmony default export */

  var cover = function cover(Splide, Components) {
    /**
     * Hold options.
     *
     * @type {Object}
     */
    var options = Splide.options;
    /**
     * Cover component object.
     *
     * @type {Object}
     */

    var Cover = {
      /**
       * Required only when "cover" option is true.
       *
       * @type {boolean}
       */
      required: options.cover,

      /**
       * Called when the component is mounted.
       */
      mount: function mount() {
        Splide.on('lazyload:loaded', function (img) {
          cover(img, false);
        });
        Splide.on('mounted updated refresh', function () {
          return apply(false);
        });
      },

      /**
       * Destroy.
       */
      destroy: function destroy() {
        apply(true);
      }
    };
    /**
     * Apply "cover" to all slides.
     *
     * @param {boolean} uncover - If true, "cover" will be clear.
     */

    function apply(uncover) {
      Components.Elements.each(function (Slide) {
        var img = child(Slide.slide, 'IMG') || child(Slide.container, 'IMG');

        if (img && img.src) {
          cover(img, uncover);
        }
      });
    }
    /**
     * Set background image of the parent element, using source of the given image element.
     *
     * @param {Element} img     - An image element.
     * @param {boolean} uncover - Reset "cover".
     */


    function cover(img, uncover) {
      applyStyle(img.parentElement, {
        background: uncover ? '' : "center/cover no-repeat url(\"" + img.src + "\")"
      });
      applyStyle(img, {
        display: uncover ? '' : 'none'
      });
    }

    return Cover;
  };

  ; // CONCATENATED MODULE: ./src/js/components/arrows/path.js

  /**
   * Export vector path for an arrow.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * Namespace definition for SVG element.
   *
   * @type {string}
   */

  var XML_NAME_SPACE = 'http://www.w3.org/2000/svg';
  /**
   * The arrow vector path.
   *
   * @type {number}
   */

  var PATH = 'm15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z';
  /**
   * SVG width and height.
   *
   * @type {number}
   */

  var SIZE = 40;
  ; // CONCATENATED MODULE: ./src/js/components/arrows/index.js

  /**
   * The component for appending prev/next arrows.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * The component for appending prev/next arrows.
   *
   * @param {Splide} Splide     - A Splide instance.
   * @param {Object} Components - An object containing components.
   * @param {string} name       - A component name as a lowercase string.
   *
   * @return {Object} - The component object.
   */

  /* harmony default export */

  var arrows = function arrows(Splide, Components, name) {
    /**
     * Previous arrow element.
     *
     * @type {Element|undefined}
     */
    var prev;
    /**
     * Next arrow element.
     *
     * @type {Element|undefined}
     */

    var next;
    /**
     * Store the class list.
     *
     * @type {Object}
     */

    var classes = Splide.classes;
    /**
     * Hold the root element.
     *
     * @type {Element}
     */

    var root = Splide.root;
    /**
     * Whether arrows are created programmatically or not.
     *
     * @type {boolean}
     */

    var created;
    /**
     * Hold the Elements component.
     *
     * @type {Object}
     */

    var Elements = Components.Elements;
    /**
     * Arrows component object.
     *
     * @type {Object}
     */

    var Arrows = {
      /**
       * Required when the arrows option is true.
       *
       * @type {boolean}
       */
      required: Splide.options.arrows,

      /**
       * Called when the component is mounted.
       */
      mount: function mount() {
        // Attempt to get arrows from HTML source.
        prev = Elements.arrows.prev;
        next = Elements.arrows.next; // If arrows were not found in HTML, let's generate them.

        if ((!prev || !next) && Splide.options.arrows) {
          prev = createArrow(true);
          next = createArrow(false);
          created = true;
          appendArrows();
        }

        if (prev && next) {
          bind();
        }

        this.arrows = {
          prev: prev,
          next: next
        };
      },

      /**
       * Called after all components are mounted.
       */
      mounted: function mounted() {
        Splide.emit(name + ":mounted", prev, next);
      },

      /**
       * Destroy.
       */
      destroy: function destroy() {
        removeAttribute([prev, next], 'disabled');

        if (created) {
          dom_remove(prev.parentElement);
        }
      }
    };
    /**
     * Listen to native and custom events.
     */

    function bind() {
      Splide.on('click', function () {
        Splide.go('<');
      }, prev).on('click', function () {
        Splide.go('>');
      }, next).on('mounted move updated refresh', updateDisabled);
    }
    /**
     * Update a disabled attribute.
     */


    function updateDisabled() {
      var _Components$Controlle = Components.Controller,
          prevIndex = _Components$Controlle.prevIndex,
          nextIndex = _Components$Controlle.nextIndex;
      var isEnough = Splide.length > Splide.options.perPage || Splide.is(LOOP);
      prev.disabled = prevIndex < 0 || !isEnough;
      next.disabled = nextIndex < 0 || !isEnough;
      Splide.emit(name + ":updated", prev, next, prevIndex, nextIndex);
    }
    /**
     * Create a wrapper element and append arrows.
     */


    function appendArrows() {
      var wrapper = create('div', {
        "class": classes.arrows
      });
      append(wrapper, prev);
      append(wrapper, next);
      var slider = Elements.slider;
      var parent = Splide.options.arrows === 'slider' && slider ? slider : root;
      before(wrapper, parent.firstElementChild);
    }
    /**
     * Create an arrow element.
     *
     * @param {boolean} prev - Determine to create a prev arrow or next arrow.
     *
     * @return {Element} - A created arrow element.
     */


    function createArrow(prev) {
      var arrow = "<button class=\"" + classes.arrow + " " + (prev ? classes.prev : classes.next) + "\" type=\"button\">" + ("<svg xmlns=\"" + XML_NAME_SPACE + "\"\tviewBox=\"0 0 " + SIZE + " " + SIZE + "\"\twidth=\"" + SIZE + "\"\theight=\"" + SIZE + "\">") + ("<path d=\"" + (Splide.options.arrowPath || PATH) + "\" />");
      return domify(arrow);
    }

    return Arrows;
  };

  ; // CONCATENATED MODULE: ./src/js/components/pagination/index.js

  /**
   * The component for handling pagination
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * The event name for updating some attributes of pagination nodes.
   *
   * @type {string}
   */

  var ATTRIBUTES_UPDATE_EVENT = 'move.page';
  /**
   * The event name for recreating pagination.
   *
   * @type {string}
   */

  var UPDATE_EVENT = 'updated.page refresh.page';
  /**
   * The component for handling pagination
   *
   * @param {Splide} Splide     - A Splide instance.
   * @param {Object} Components - An object containing components.
   * @param {string} name       - A component name as a lowercase string.
   *
   * @return {Object} - The component object.
   */

  /* harmony default export */

  var pagination = function pagination(Splide, Components, name) {
    /**
     * Store all data for pagination.
     * - list: A list element.
     * - items: An array that contains objects(li, button, index, page).
     *
     * @type {Object}
     */
    var data = {};
    /**
     * Hold the Elements component.
     *
     * @type {Object}
     */

    var Elements = Components.Elements;
    /**
     * Pagination component object.
     *
     * @type {Object}
     */

    var Pagination = {
      /**
       * Called when the component is mounted.
       */
      mount: function mount() {
        var pagination = Splide.options.pagination;

        if (pagination) {
          data = createPagination();
          var slider = Elements.slider;
          var parent = pagination === 'slider' && slider ? slider : Splide.root;
          append(parent, data.list);
          Splide.on(ATTRIBUTES_UPDATE_EVENT, updateAttributes);
        }

        Splide.off(UPDATE_EVENT).on(UPDATE_EVENT, function () {
          Pagination.destroy();

          if (Splide.options.pagination) {
            Pagination.mount();
            Pagination.mounted();
          }
        });
      },

      /**
       * Called after all components are mounted.
       */
      mounted: function mounted() {
        if (Splide.options.pagination) {
          var index = Splide.index;
          Splide.emit(name + ":mounted", data, this.getItem(index));
          updateAttributes(index, -1);
        }
      },

      /**
       * Destroy the pagination.
       * Be aware that node.remove() is not supported by IE.
       */
      destroy: function destroy() {
        dom_remove(data.list);

        if (data.items) {
          data.items.forEach(function (item) {
            Splide.off('click', item.button);
          });
        } // Do not remove UPDATE_EVENT to recreate pagination if needed.


        Splide.off(ATTRIBUTES_UPDATE_EVENT);
        data = {};
      },

      /**
       * Return an item by index.
       *
       * @param {number} index - A slide index.
       *
       * @return {Object|undefined} - An item object on success or undefined on failure.
       */
      getItem: function getItem(index) {
        return data.items[Components.Controller.toPage(index)];
      },

      /**
       * Return object containing pagination data.
       *
       * @return {Object} - Pagination data including list and items.
       */
      get data() {
        return data;
      }

    };
    /**
     * Update attributes.
     *
     * @param {number} index     - Active index.
     * @param {number} prevIndex - Prev index.
     */

    function updateAttributes(index, prevIndex) {
      var prev = Pagination.getItem(prevIndex);
      var curr = Pagination.getItem(index);
      var active = STATUS_CLASSES.active;

      if (prev) {
        removeClass(prev.button, active);
      }

      if (curr) {
        addClass(curr.button, active);
      }

      Splide.emit(name + ":updated", data, prev, curr);
    }
    /**
     * Create a wrapper and button elements.
     *
     * @return {Object} - An object contains all data.
     */


    function createPagination() {
      var options = Splide.options;
      var classes = Splide.classes;
      var list = create('ul', {
        "class": classes.pagination
      });
      var items = Elements.getSlides(false).filter(function (Slide) {
        return options.focus !== false || Slide.index % options.perPage === 0;
      }).map(function (Slide, page) {
        var li = create('li', {});
        var button = create('button', {
          "class": classes.page,
          type: 'button'
        });
        append(li, button);
        append(list, li);
        Splide.on('click', function () {
          Splide.go(">" + page);
        }, button);
        return {
          li: li,
          button: button,
          page: page,
          Slides: Elements.getSlidesByPage(page)
        };
      });
      return {
        list: list,
        items: items
      };
    }

    return Pagination;
  };

  ; // CONCATENATED MODULE: ./src/js/components/lazyload/index.js

  /**
   * The component for loading slider images lazily.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * The name for a data attribute of src.
   *
   * @type {string}
   */

  var SRC_DATA_NAME = 'data-splide-lazy';
  /**
   * The name for a data attribute of srcset.
   *
   * @type {string}
   */

  var SRCSET_DATA_NAME = 'data-splide-lazy-srcset';
  /**
   * The component for loading slider images lazily.
   *
   * @param {Splide} Splide     - A Splide instance.
   * @param {Object} Components - An object containing components.
   * @param {string} name       - A component name as a lowercase string.
   *
   * @return {Object} - The component object.
   */

  /* harmony default export */

  var lazyload = function lazyload(Splide, Components, name) {
    /**
     * Next index for sequential loading.
     *
     * @type {number}
     */
    var nextIndex;
    /**
     * Store objects containing an img element and a Slide object.
     *
     * @type {Object[]}
     */

    var images;
    /**
     * Store the options.
     *
     * @type {Object}
     */

    var options = Splide.options;
    /**
     * Whether to load images sequentially or not.
     *
     * @type {boolean}
     */

    var isSequential = options.lazyLoad === 'sequential';
    /**
     * Lazyload component object.
     *
     * @type {Object}
     */

    var Lazyload = {
      /**
       * Mount only when the lazyload option is provided.
       *
       * @type {boolean}
       */
      required: options.lazyLoad,

      /**
       * Called when the component is mounted.
       */
      mount: function mount() {
        Splide.on('mounted refresh', function () {
          init();
          Components.Elements.each(function (Slide) {
            each(Slide.slide.querySelectorAll("[" + SRC_DATA_NAME + "], [" + SRCSET_DATA_NAME + "]"), function (img) {
              if (!img.src && !img.srcset) {
                images.push({
                  img: img,
                  Slide: Slide
                });
                applyStyle(img, {
                  display: 'none'
                });
              }
            });
          });

          if (isSequential) {
            loadNext();
          }
        });

        if (!isSequential) {
          Splide.on("mounted refresh moved." + name, check);
        }
      },

      /**
       * Destroy.
       */
      destroy: init
    };
    /**
     * Initialize parameters.
     */

    function init() {
      images = [];
      nextIndex = 0;
    }
    /**
     * Check how close each image is from the active slide and
     * determine whether to start loading or not, according to the distance.
     *
     * @param {number} index - Current index.
     */


    function check(index) {
      index = isNaN(index) ? Splide.index : index;
      images = images.filter(function (image) {
        if (image.Slide.isWithin(index, options.perPage * (options.preloadPages + 1))) {
          load(image.img, image.Slide);
          return false;
        }

        return true;
      }); // Unbind if all images are loaded.

      if (!images[0]) {
        Splide.off("moved." + name);
      }
    }
    /**
     * Start loading an image.
     * Creating a clone of the image element since setting src attribute directly to it
     * often occurs 'hitch', blocking some other processes of a browser.
     *
     * @param {Element} img   - An image element.
     * @param {Object}  Slide - A Slide object.
     */


    function load(img, Slide) {
      addClass(Slide.slide, STATUS_CLASSES.loading);
      var spinner = create('span', {
        "class": Splide.classes.spinner
      });
      append(img.parentElement, spinner);

      img.onload = function () {
        loaded(img, spinner, Slide, false);
      };

      img.onerror = function () {
        loaded(img, spinner, Slide, true);
      };

      setAttribute(img, 'srcset', getAttribute(img, SRCSET_DATA_NAME) || '');
      setAttribute(img, 'src', getAttribute(img, SRC_DATA_NAME) || '');
    }
    /**
     * Start loading a next image in images array.
     */


    function loadNext() {
      if (nextIndex < images.length) {
        var image = images[nextIndex];
        load(image.img, image.Slide);
      }

      nextIndex++;
    }
    /**
     * Called just after the image was loaded or loading was aborted by some error.
     *
     * @param {Element} img     - An image element.
     * @param {Element} spinner - A spinner element.
     * @param {Object}  Slide   - A Slide object.
     * @param {boolean} error   - True if the image was loaded successfully or false on error.
     */


    function loaded(img, spinner, Slide, error) {
      removeClass(Slide.slide, STATUS_CLASSES.loading);

      if (!error) {
        dom_remove(spinner);
        applyStyle(img, {
          display: ''
        });
        Splide.emit(name + ":loaded", img).emit('resize');
      }

      if (isSequential) {
        loadNext();
      }
    }

    return Lazyload;
  };

  ; // CONCATENATED MODULE: ./src/js/constants/a11y.js

  /**
   * Export aria attribute names.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * Attribute name for aria-current.
   *
   * @type {string}
   */

  var ARIA_CURRENRT = 'aria-current';
  /**
   * Attribute name for aria-control.
   *
   * @type {string}
   */

  var ARIA_CONTROLS = 'aria-controls';
  /**
   * Attribute name for aria-control.
   *
   * @type {string}
   */

  var ARIA_LABEL = 'aria-label';
  /**
   * Attribute name for aria-labelledby.
   *
   * @type {string}
   */

  var ARIA_LABELLEDBY = 'aria-labelledby';
  /**
   * Attribute name for aria-hidden.
   *
   * @type {string}
   */

  var ARIA_HIDDEN = 'aria-hidden';
  /**
   * Attribute name for tab-index.
   *
   * @type {string}
   */

  var TAB_INDEX = 'tabindex';
  ; // CONCATENATED MODULE: ./src/js/components/keyboard/index.js

  /**
   * The component for controlling slides via keyboard.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * Map a key to a slide control.
   *
   * @type {Object}
   */

  var KEY_MAP = {
    ltr: {
      ArrowLeft: '<',
      ArrowRight: '>',
      // For IE.
      Left: '<',
      Right: '>'
    },
    rtl: {
      ArrowLeft: '>',
      ArrowRight: '<',
      // For IE.
      Left: '>',
      Right: '<'
    },
    ttb: {
      ArrowUp: '<',
      ArrowDown: '>',
      // For IE.
      Up: '<',
      Down: '>'
    }
  };
  /**
   * The component for controlling slides via keyboard.
   *
   * @param {Splide} Splide - A Splide instance.
   *
   * @return {Object} - The component object.
   */

  /* harmony default export */

  var keyboard = function keyboard(Splide) {
    /**
     * Hold the target element.
     *
     * @type {Element|Document|undefined}
     */
    var target;
    return {
      /**
       * Called when the component is mounted.
       */
      mount: function mount() {
        Splide.on('mounted updated', function () {
          var options = Splide.options;
          var root = Splide.root;
          var map = KEY_MAP[options.direction];
          var keyboard = options.keyboard;

          if (target) {
            Splide.off('keydown', target);
            removeAttribute(root, TAB_INDEX);
          }

          if (keyboard) {
            if (keyboard === 'focused') {
              target = root;
              setAttribute(root, TAB_INDEX, 0);
            } else {
              target = document;
            }

            Splide.on('keydown', function (e) {
              if (map[e.key]) {
                Splide.go(map[e.key]);
              }
            }, target);
          }
        });
      }
    };
  };

  ; // CONCATENATED MODULE: ./src/js/components/a11y/index.js

  /**
   * The component for enhancing accessibility.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * The component for enhancing accessibility.
   *
   * @param {Splide} Splide     - A Splide instance.
   * @param {Object} Components - An object containing components.
   *
   * @return {Object} - The component object.
   */

  /* harmony default export */

  var a11y = function a11y(Splide, Components) {
    /**
     * Hold a i18n object.
     *
     * @type {Object}
     */
    var i18n = Splide.i18n;
    /**
     * Hold the Elements component.
     *
     * @type {Object}
     */

    var Elements = Components.Elements;
    /**
     * All attributes related with A11y.
     *
     * @type {string[]}
     */

    var allAttributes = [ARIA_HIDDEN, TAB_INDEX, ARIA_CONTROLS, ARIA_LABEL, ARIA_CURRENRT, 'role'];
    /**
     * A11y component object.
     *
     * @type {Object}
     */

    var A11y = {
      /**
       * Required only when the accessibility option is true.
       *
       * @type {boolean}
       */
      required: Splide.options.accessibility,

      /**
       * Called when the component is mounted.
       */
      mount: function mount() {
        Splide.on('visible', function (Slide) {
          updateSlide(Slide.slide, true);
        }).on('hidden', function (Slide) {
          updateSlide(Slide.slide, false);
        }).on('arrows:mounted', initArrows).on('arrows:updated', updateArrows).on('pagination:mounted', initPagination).on('pagination:updated', updatePagination).on('refresh', function () {
          removeAttribute(Components.Clones.clones, allAttributes);
        });

        if (Splide.options.isNavigation) {
          Splide.on('navigation:mounted navigation:updated', initNavigation).on('active', function (Slide) {
            updateNavigation(Slide, true);
          }).on('inactive', function (Slide) {
            updateNavigation(Slide, false);
          });
        }

        initAutoplay();
      },

      /**
       * Destroy.
       */
      destroy: function destroy() {
        var Arrows = Components.Arrows;
        var arrows = Arrows ? Arrows.arrows : {};
        removeAttribute(Elements.slides.concat([arrows.prev, arrows.next, Elements.play, Elements.pause]), allAttributes);
      }
    };
    /**
     * Update slide attributes when it gets visible or hidden.
     *
     * @param {Element} slide   - A slide element.
     * @param {Boolean} visible - True when the slide gets visible, or false when hidden.
     */

    function updateSlide(slide, visible) {
      setAttribute(slide, ARIA_HIDDEN, !visible);

      if (Splide.options.slideFocus) {
        setAttribute(slide, TAB_INDEX, visible ? 0 : -1);
      }
    }
    /**
     * Initialize arrows if they are available.
     * Append screen reader elements and add aria-controls attribute.
     *
     * @param {Element} prev - Previous arrow element.
     * @param {Element} next - Next arrow element.
     */


    function initArrows(prev, next) {
      var controls = Elements.track.id;
      setAttribute(prev, ARIA_CONTROLS, controls);
      setAttribute(next, ARIA_CONTROLS, controls);
    }
    /**
     * Update arrow attributes.
     *
     * @param {Element} prev      - Previous arrow element.
     * @param {Element} next      - Next arrow element.
     * @param {number}  prevIndex - Previous slide index or -1 when there is no precede slide.
     * @param {number}  nextIndex - Next slide index or -1 when there is no next slide.
     */


    function updateArrows(prev, next, prevIndex, nextIndex) {
      var index = Splide.index;
      var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
      var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
      setAttribute(prev, ARIA_LABEL, prevLabel);
      setAttribute(next, ARIA_LABEL, nextLabel);
    }
    /**
     * Initialize pagination if it's available.
     * Append a screen reader element and add aria-controls/label attribute to each item.
     *
     * @param {Object} data       - Data object containing all items.
     * @param {Object} activeItem - An initial active item.
     */


    function initPagination(data, activeItem) {
      if (activeItem) {
        setAttribute(activeItem.button, ARIA_CURRENRT, true);
      }

      data.items.forEach(function (item) {
        var options = Splide.options;
        var text = options.focus === false && options.perPage > 1 ? i18n.pageX : i18n.slideX;
        var label = sprintf(text, item.page + 1);
        var button = item.button;
        var controls = item.Slides.map(function (Slide) {
          return Slide.slide.id;
        });
        setAttribute(button, ARIA_CONTROLS, controls.join(' '));
        setAttribute(button, ARIA_LABEL, label);
      });
    }
    /**
     * Update pagination attributes.
     *
     * @param {Object}  data - Data object containing all items.
     * @param {Element} prev - A previous active element.
     * @param {Element} curr - A current active element.
     */


    function updatePagination(data, prev, curr) {
      if (prev) {
        removeAttribute(prev.button, ARIA_CURRENRT);
      }

      if (curr) {
        setAttribute(curr.button, ARIA_CURRENRT, true);
      }
    }
    /**
     * Initialize autoplay buttons.
     */


    function initAutoplay() {
      ['play', 'pause'].forEach(function (name) {
        var elm = Elements[name];

        if (elm) {
          if (!isButton(elm)) {
            setAttribute(elm, 'role', 'button');
          }

          setAttribute(elm, ARIA_CONTROLS, Elements.track.id);
          setAttribute(elm, ARIA_LABEL, i18n[name]);
        }
      });
    }
    /**
     * Initialize navigation slider.
     * Add button role, aria-label, aria-controls to slide elements and append screen reader text to them.
     *
     * @param {Splide} main - A main Splide instance.
     */


    function initNavigation(main) {
      Elements.each(function (Slide) {
        var slide = Slide.slide;
        var realIndex = Slide.realIndex;

        if (!isButton(slide)) {
          setAttribute(slide, 'role', 'button');
        }

        var slideIndex = realIndex > -1 ? realIndex : Slide.index;
        var label = sprintf(i18n.slideX, slideIndex + 1);
        var mainSlide = main.Components.Elements.getSlide(slideIndex);
        setAttribute(slide, ARIA_LABEL, label);

        if (mainSlide) {
          setAttribute(slide, ARIA_CONTROLS, mainSlide.slide.id);
        }
      });
    }
    /**
     * Update navigation attributes.
     *
     * @param {Object}  Slide  - A target Slide object.
     * @param {boolean} active - True if the slide is active or false if inactive.
     */


    function updateNavigation(_ref, active) {
      var slide = _ref.slide;

      if (active) {
        setAttribute(slide, ARIA_CURRENRT, true);
      } else {
        removeAttribute(slide, ARIA_CURRENRT);
      }
    }
    /**
     * Check if the given element is button or not.
     *
     * @param {Element} elm - An element to be checked.
     *
     * @return {boolean} - True if the given element is button.
     */


    function isButton(elm) {
      return elm.tagName === 'BUTTON';
    }

    return A11y;
  };

  ; // CONCATENATED MODULE: ./src/js/components/sync/index.js

  /**
   * The component for synchronizing a slider with another.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * The event name for sync.
   *
   * @type {string}
   */

  var SYNC_EVENT = 'move.sync';
  /**
   * The event names for click navigation.
   * @type {string}
   */

  var CLICK_EVENTS = 'mouseup touchend';
  /**
   * The keys for triggering the navigation button.
   *
   * @type {String[]}
   */

  var TRIGGER_KEYS = [' ', 'Enter', 'Spacebar'];
  /**
   * The component for synchronizing a slider with another.
   *
   * @param {Splide} Splide - A Splide instance.
   *
   * @return {Object} - The component object.
   */

  /* harmony default export */

  var sync = function sync(Splide) {
    /**
     * Keep the sibling Splide instance.
     *
     * @type {Splide}
     */
    var sibling = Splide.sibling;
    /**
     * Whether the sibling slider is navigation or not.
     *
     * @type {Splide|boolean}
     */

    var isNavigation = sibling && sibling.options.isNavigation;
    /**
     * Layout component object.
     *
     * @type {Object}
     */

    var Sync = {
      /**
       * Required only when the sub slider is available.
       *
       * @type {boolean}
       */
      required: !!sibling,

      /**
       * Called when the component is mounted.
       */
      mount: function mount() {
        syncMain();
        syncSibling();

        if (isNavigation) {
          bind();
          Splide.on('refresh', function () {
            setTimeout(function () {
              bind();
              sibling.emit('navigation:updated', Splide);
            });
          });
        }
      },

      /**
       * Called after all components are mounted.
       */
      mounted: function mounted() {
        if (isNavigation) {
          sibling.emit('navigation:mounted', Splide);
        }
      }
    };
    /**
     * Listen the primary slider event to move secondary one.
     * Must unbind a handler at first to avoid infinite loop.
     */

    function syncMain() {
      Splide.on(SYNC_EVENT, function (newIndex, prevIndex, destIndex) {
        sibling.off(SYNC_EVENT).go(sibling.is(LOOP) ? destIndex : newIndex, false);
        syncSibling();
      });
    }
    /**
     * Listen the secondary slider event to move primary one.
     * Must unbind a handler at first to avoid infinite loop.
     */


    function syncSibling() {
      sibling.on(SYNC_EVENT, function (newIndex, prevIndex, destIndex) {
        Splide.off(SYNC_EVENT).go(Splide.is(LOOP) ? destIndex : newIndex, false);
        syncMain();
      });
    }
    /**
     * Listen some events on each slide.
     */


    function bind() {
      sibling.Components.Elements.each(function (_ref) {
        var slide = _ref.slide,
            index = _ref.index;
        /*
         * Listen mouseup and touchend events to handle click.
         */

        Splide.off(CLICK_EVENTS, slide).on(CLICK_EVENTS, function (e) {
          // Ignore a middle or right click.
          if (!e.button || e.button === 0) {
            moveSibling(index);
          }
        }, slide);
        /*
         * Subscribe keyup to handle Enter and Space key.
         * Note that Array.includes is not supported by IE.
         */

        Splide.off('keyup', slide).on('keyup', function (e) {
          if (TRIGGER_KEYS.indexOf(e.key) > -1) {
            e.preventDefault();
            moveSibling(index);
          }
        }, slide, {
          passive: false
        });
      });
    }
    /**
     * Move the sibling to the given index.
     * Need to check "IDLE" status because slides can be moving by Drag component.
     *
     * @param {number} index - Target index.
     */


    function moveSibling(index) {
      if (Splide.State.is(_IDLE)) {
        sibling.go(index);
      }
    }

    return Sync;
  };

  ; // CONCATENATED MODULE: ./src/js/components/breakpoints/index.js

  /**
   * The component for updating options according to a current window width.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * Interval time for throttle.
   *
   * @type {number}
   */

  var THROTTLE = 50;
  /**
   * The component for updating options according to a current window width.
   *
   * @param {Splide} Splide - A Splide instance.
   *
   * @return {Object} - The component object.
   */

  /* harmony default export */

  var breakpoints = function breakpoints(Splide) {
    /**
     * Store breakpoints.
     *
     * @type {Object|boolean}
     */
    var breakpoints = Splide.options.breakpoints;
    /**
     * The check function whose frequency of call is reduced.
     *
     * @type {Function}
     */

    var throttledCheck = throttle(check, THROTTLE);
    /**
     * Keep initial options.
     *
     * @type {Object}
     */

    var initialOptions;
    /**
     * An array containing objects of point and MediaQueryList.
     *
     * @type {Object[]}
     */

    var map = [];
    /**
     * Hold the previous breakpoint.
     *
     * @type {number|undefined}
     */

    var prevPoint;
    /**
     * Breakpoints component object.
     *
     * @type {Object}
     */

    var Breakpoints = {
      /**
       * Required only when the breakpoints definition is provided and browser supports matchMedia.
       *
       * @type {boolean}
       */
      required: breakpoints && matchMedia,

      /**
       * Called when the component is mounted.
       */
      mount: function mount() {
        map = Object.keys(breakpoints).sort(function (n, m) {
          return +n - +m;
        }).map(function (point) {
          return {
            point: point,
            mql: matchMedia("(max-width:" + point + "px)")
          };
        });
        /*
         * To keep monitoring resize event after destruction without "completely",
         * use native addEventListener instead of Splide.on.
         */

        this.destroy(true);
        addEventListener('resize', throttledCheck); // Keep initial options to apply them when no breakpoint matches.

        initialOptions = Splide.options;
        check();
      },

      /**
       * Destroy.
       *
       * @param {boolean} completely - Whether to destroy Splide completely.
       */
      destroy: function destroy(completely) {
        if (completely) {
          removeEventListener('resize', throttledCheck);
        }
      }
    };
    /**
     * Check the breakpoint.
     */

    function check() {
      var point = getPoint();

      if (point !== prevPoint) {
        prevPoint = point;
        var State = Splide.State;
        var options = breakpoints[point] || initialOptions;
        var destroy = options.destroy;

        if (destroy) {
          Splide.options = initialOptions;
          Splide.destroy(destroy === 'completely');
        } else {
          if (State.is(_DESTROYED)) {
            Splide.mount();
          }

          Splide.options = options;
        }
      }
    }
    /**
     * Return the breakpoint matching current window width.
     * Note that Array.prototype.find is not supported by IE.
     *
     * @return {number|string} - A breakpoint as number or string. -1 if no point matches.
     */


    function getPoint() {
      var item = map.filter(function (item) {
        return item.mql.matches;
      })[0];
      return item ? item.point : -1;
    }

    return Breakpoints;
  };

  ; // CONCATENATED MODULE: ./src/js/components/index.js

  /**
   * Export components.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  var COMPLETE = {
    Options: options,
    Breakpoints: breakpoints,
    Controller: controller,
    Elements: components_elements,
    Track: track,
    Clones: clones,
    Layout: layout,
    Drag: drag,
    Click: click,
    Autoplay: autoplay,
    Cover: cover,
    Arrows: arrows,
    Pagination: pagination,
    LazyLoad: lazyload,
    Keyboard: keyboard,
    Sync: sync,
    A11y: a11y
  };
  var LIGHT = {
    Options: options,
    Controller: controller,
    Elements: components_elements,
    Track: track,
    Clones: clones,
    Layout: layout,
    Drag: drag,
    Click: click,
    Arrows: arrows,
    Pagination: pagination,
    A11y: a11y
  };
  ; // CONCATENATED MODULE: ./build/complete/complete.js

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  /**
   * Export "Splide" class for frontend with full components.
   *
   * @author    Naotoshi Fujita
   * @copyright Naotoshi Fujita. All rights reserved.
   */

  /**
   * Export Splide with all components.
   */


  var complete_Splide = /*#__PURE__*/function (_Core) {
    _inheritsLoose(Splide, _Core);

    function Splide(root, options) {
      return _Core.call(this, root, options, COMPLETE) || this;
    }

    return Splide;
  }(Splide); // Register the class as a global variable for non-ES6 environment.


  window.Splide = complete_Splide;
  /******/
})();

/***/ }),

/***/ "../include/js/front-end/src/Components/Modal.js":
/*!*******************************************************!*\
  !*** ../include/js/front-end/src/Components/Modal.js ***!
  \*******************************************************/
/*! flagged exports */
/*! export Modal [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Modal = void 0;

/*=========================================
 * Modal - Based on the jQuery animatedModal script. This is a vanilla JS port
 *
 * animatedModal.js: Version 1.0
 * author: Jo??o Pereira
 * website: http://www.joaopereira.pt
 * email: joaopereirawd@gmail.com
 * Licensed MIT
 =========================================*/
var Modal = function Modal(modal, options) {
  var body = document.body; //Defaults

  var settings = Object.assign({
    modalTarget: 'photonicModal',
    closeCSS: '',
    closeFromRight: 0,
    width: '80%',
    height: '100%',
    top: '0px',
    left: '0px',
    zIndexIn: '9999',
    zIndexOut: '-9999',
    color: '#39BEB9',
    opacityIn: '1',
    opacityOut: '0',
    animatedIn: 'zoomIn',
    animatedOut: 'zoomOut',
    animationDuration: '.6s',
    overflow: 'auto',
    // Callbacks
    beforeOpen: function beforeOpen() {},
    afterOpen: function afterOpen() {},
    beforeClose: function beforeClose() {},
    afterClose: function afterClose() {}
  }, options);
  var overlay = document.querySelector('.photonicModalOverlay'),
      scrollable = document.querySelector('.photonicModalOverlayScrollable');

  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'photonicModalOverlay';
    scrollable = document.createElement('div');
    scrollable.className = 'photonicModalOverlayScrollable';
    overlay.appendChild(scrollable);
    body.appendChild(overlay);
  }

  var closeIcon = modal.querySelector('.photonicModalClose');

  if (!closeIcon) {
    closeIcon = document.createElement('a');
    closeIcon.className = 'photonicModalClose ' + settings.closeCSS;
    closeIcon.style.right = settings.closeFromRight;
    closeIcon.innerHTML = '&times;';
    closeIcon.setAttribute('href', '#');
    modal.insertAdjacentElement('afterbegin', closeIcon);
  }

  closeIcon = modal.querySelector('.photonicModalClose');
  var id = document.querySelector('#' + settings.modalTarget); // Default Classes
  // id.addClass('photonicModal');
  // id.addClass(settings.modalTarget+'-off');
  //Init styles

  var initStyles = {
    'width': settings.width,
    'height': settings.height,
    'top': settings.top,
    'left': settings.left,
    'background-color': settings.color,
    'overflow-y': settings.overflow,
    'z-index': settings.zIndexOut,
    'opacity': settings.opacityOut,
    '-webkit-animation-duration': settings.animationDuration,
    '-moz-animation-duration': settings.animationDuration,
    '-ms-animation-duration': settings.animationDuration,
    'animation-duration': settings.animationDuration
  };

  if (id) {
    id.classList.add('photonicModal');
    id.classList.add(settings.modalTarget + '-off');
    var style = '';

    for (var [key, value] of Object.entries(initStyles)) {
      style += "".concat(key, ": ").concat(value, "; ");
    }

    id.style.cssText += style; // initStyles.reduce((a, v, i) => a + i + ': ' + v + ';');

    open(id);
  }

  closeIcon.addEventListener('click', function (event) {
    event.preventDefault();
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    settings.beforeClose(); //beforeClose

    if (id.classList.contains(settings.modalTarget + '-on')) {
      id.classList.remove(settings.modalTarget + '-on');
      id.classList.add(settings.modalTarget + '-off');
    }

    if (id.classList.contains(settings.modalTarget + '-off')) {
      id.addEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', afterClose, {
        once: true
      });
    }

    id.style.overflowY = 'hidden';
    slideUp(id); // Util.slideUpDown(id.closest('.photonicModalOverlayScrollable'), 'hide');

    overlay.style.overflowY = 'hidden'; // Util.fadeOut(overlay);

    overlay.style.display = 'none';
  });

  function slideDown(element) {
    element.style.height = 'auto';
    element.style.height = "".concat(element.scrollHeight, "px");
    element.style.height = 'auto';
  }

  var slideUp = function slideUp(element) {
    element.style.height = 0;
    element.style.display = 'none';
  };

  function open(el) {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    if (el.classList.contains(settings.modalTarget + '-off')) {
      el.classList.remove(settings.modalTarget + '-off');
      el.classList.add(settings.modalTarget + '-on');
    }

    if (el.classList.contains(settings.modalTarget + '-on')) {
      settings.beforeOpen();
      el.style.opacity = settings.opacityIn;
      el.style.zIndex = settings.zIndexIn;
      el.addEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', afterOpen, {
        once: true
      });
    }

    overlay.style.overflowY = settings.overflow;
    overlay.style.display = 'block'; // Util.fadeIn(overlay);

    scrollable.appendChild(el);
    el.style.display = 'block';
    el.style.overflowY = settings.overflow;
    slideDown(scrollable); // Util.slideUpDown(scrollable, 'show');
  }

  function afterClose() {
    id.style.zIndex = settings.zIndexOut;
    settings.afterClose(); //afterClose
  }

  function afterOpen() {
    settings.afterOpen(); //afterOpen
  }
};

exports.Modal = Modal;

/***/ }),

/***/ "../include/js/front-end/src/Components/Modalise.js":
/*!**********************************************************!*\
  !*** ../include/js/front-end/src/Components/Modalise.js ***!
  \**********************************************************/
/*! flagged exports */
/*! export Modalise [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Modalise = void 0;

/**
 * ModaliseJS - Alexis Paques
 * Converted to ES6 by Sayontan Sinha
 * GPL v3.0
 */

/*
 * var myModal = Modalise('htmlID', options);
 *
 * id: The HTML id of the object
 * options:  options can modify the class name to which are bind the close, cancel and confirm functions, plus the buttons to open the modal.
	var options = {
	  "classClose": ".close",
	  "classCancel": ".cancel",
	  "classConfirm": ".confirm",
	"btnsOpen": [ HTMLelements ]
  }
 */
class Modalise {
  constructor(id, options) {
    this.events = {
      onShow: new Event('onShow'),
      onConfirm: new Event('onConfirm'),
      onHide: new Event('onHide')
    };
    this.modal = document.getElementById(id);
    this.classClose = '.close';
    this.classCancel = '.cancel';
    this.classConfirm = '.confirm';
    this.btnsOpen = [];
    this.utils = {// extend: extend
    };
    this.callbacks = {};
  }
  /*
   * Modalise.show() :
   *
   * Shows the modal
   */


  show() {
    this.modal.dispatchEvent(this.events.onShow);
    this.modal.style.display = "block";
    return this;
  }
  /* Modalise.hide() :
   *
   * Hides the modal
   */


  hide() {
    this.modal.dispatchEvent(this.events.onHide);
    this.modal.style.display = "none";
    return this;
  }
  /*
  * Modalise.removeEvents() :
  *
  * Removes the events (by cloning the modal)
  */


  removeEvents() {
    var clone = this.modal.cloneNode(true);
    this.modal.parentNode.replaceChild(clone, this.modal);
    this.modal = clone;
    return this;
  }
  /*
   * Modalise.on(event, callback):
   *
   * Connect an event.
   *
   * event:
   *     - 'onShow': Called when the modal is shown (via Modalise.show() or a binded button)
   *     - 'onConfirm': Called when the modal when the user sends the data (via the element with the class '.confirm')
   *     - 'onHide': Called when the modal is hidden (via Modalise.hide() or a binded button)
   * callback: The function to call on the event
   *
   */


  on(event, callback) {
    this.modal.addEventListener(event, callback);
    return this;
  }
  /*
  * Modalise.attach() :
  *
  * Attaches the click events on the elements with classes ".confirm", ".hide", ".cancel" plus the elements to show the modal
  */


  attach() {
    var i;
    var items = [];
    var self = this;
    items = this.modal.querySelectorAll(self.classClose);

    for (i = items.length - 1; i >= 0; i--) {
      items[i].addEventListener('click', function () {
        self.hide();
      });
    }

    items = self.modal.querySelectorAll(self.classCancel);

    for (i = items.length - 1; i >= 0; i--) {
      items[i].addEventListener('click', function () {
        self.hide();
      });
    }

    items = self.modal.querySelectorAll(self.classConfirm);

    for (i = items.length - 1; i >= 0; i--) {
      items[i].addEventListener('click', function () {
        self.modal.dispatchEvent(self.events.onConfirm);
        self.hide();
      });
    }

    for (i = self.btnsOpen.length - 1; i >= 0; i--) {
      self.btnsOpen[i].addEventListener('click', function () {
        self.show();
      });
    }

    return self;
  }
  /*
   * Attach an external element that will open the modal.
   * Modalise.addOpenBtn(element)
   *
   * element: Any HTML element a button, div, span,...
   */


  addOpenBtn(element) {
    this.btnsOpen.push(element);
  }

}

exports.Modalise = Modalise;

/***/ }),

/***/ "../include/js/front-end/src/Components/Tooltip.js":
/*!*********************************************************!*\
  !*** ../include/js/front-end/src/Components/Tooltip.js ***!
  \*********************************************************/
/*! flagged exports */
/*! export Tooltip [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Tooltip = void 0;

/*
 * Photonic Tooltip
 * Based on JS CSS Tooltip v1.2.3 (https://github.com/mirelvt/js-css-tooltip)
 *
 * Released under the MIT license
 */
var Tooltip = function Tooltip(selector, tooltip_element) {
  var tooltip, tooltip_class, elm_edges, tooltip_elms;

  function create(tooltip, elm) {
    var tooltipText = elm.getAttribute('data-photonic-tooltip');

    if (tooltipText !== '') {
      elm.setAttribute('title', ''); // Blank out the regular title
      // elm_edges relative to the viewport.

      elm_edges = elm.getBoundingClientRect();
      var tooltipTextNode = document.createTextNode(tooltipText);
      tooltip.innerHTML = ''; // Reset, or upon refresh the node gets repeated

      tooltip.appendChild(tooltipTextNode); // Remove no-display + set the correct classname based on the position
      // of the elm.

      if (elm_edges.left > window.innerWidth - 100) {
        tooltip.className = 'photonic-tooltip-container tooltip-left';
      } else if (elm_edges.left + elm_edges.width / 2 < 100) {
        tooltip.className = 'photonic-tooltip-container tooltip-right';
      } else {
        tooltip.className = 'photonic-tooltip-container tooltip-center';
      }
    }
  }

  function position(tooltip, elm) {
    var tooltipText = elm.getAttribute('data-photonic-tooltip');

    if (tooltipText !== '') {
      if (elm_edges === undefined) {
        elm_edges = elm.getBoundingClientRect();
      } // 10 = arrow height


      var elm_top = elm_edges.top + elm_edges.height + window.scrollY;
      var viewport_edges = window.innerWidth - 100; // Position tooltip on the left side of the elm if the elm touches
      // the viewports right edge and elm width is < 50px.

      if (elm_edges.left + window.scrollX > viewport_edges && elm_edges.width < 50) {
        tooltip.style.left = elm_edges.left + window.scrollX - (tooltip.offsetWidth + elm_edges.width) + 'px';
        tooltip.style.top = elm.offsetTop + 'px'; // Position tooltip on the left side of the elm if the elm touches
        // the viewports right edge and elm width is > 50px.
      } else if (elm_edges.left + window.scrollX > viewport_edges && elm_edges.width > 50) {
        tooltip.style.left = elm_edges.left + window.scrollX - tooltip.offsetWidth - 20 + 'px';
        tooltip.style.top = elm.offsetTop + 'px';
      } else if (elm_edges.left + window.scrollX + elm_edges.width / 2 < 100) {
        // position tooltip on the right side of the elm.
        tooltip.style.left = elm_edges.left + window.scrollX + elm_edges.width + 20 + 'px';
        tooltip.style.top = elm.offsetTop + 'px';
      } else {
        // Position the toolbox in the center of the elm.
        var centered = elm_edges.left + window.scrollX + elm_edges.width / 2 - tooltip.offsetWidth / 2;
        tooltip.style.left = centered + 'px';
        tooltip.style.top = elm_top + 'px';
      }
    }
  }

  function show(evt) {
    create(tooltip, evt.currentTarget);
    position(tooltip, evt.currentTarget);
  }

  function hide(evt) {
    tooltip.className = tooltip_class + ' no-display';

    if (tooltip.innerText !== '') {
      tooltip.removeChild(tooltip.firstChild);
      tooltip.removeAttribute('style');
      var element = evt.currentTarget;
      element.setAttribute('title', element.getAttribute('data-photonic-tooltip'));
    }
  }

  function init() {
    tooltip_elms = document.documentElement.querySelectorAll(selector);
    tooltip = document.documentElement.querySelector(tooltip_element);
    tooltip_class = tooltip_element.replace(/^\.+/g, '');

    if (tooltip === null || tooltip.length === 0) {
      tooltip = document.createElement('div');
      tooltip.className = tooltip_class + ' no-display';
      document.body.appendChild(tooltip);
    }

    tooltip_elms.forEach(function (elm) {
      elm.removeEventListener('mouseenter', show);
      elm.removeEventListener('mouseleave', hide);
      elm.addEventListener('mouseenter', show, false);
      elm.addEventListener('mouseleave', hide, false);
    });
  }

  init();
};

exports.Tooltip = Tooltip;

/***/ }),

/***/ "../include/js/front-end/src/Core.js":
/*!*******************************************!*\
  !*** ../include/js/front-end/src/Core.js ***!
  \*******************************************/
/*! flagged exports */
/*! export Core [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Core = void 0;

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../../../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../../../node_modules/@babel/runtime/helpers/defineProperty.js"));

var Util = _interopRequireWildcard(__webpack_require__(/*! ./Util */ "../include/js/front-end/src/Util.js"));

var _Tooltip = __webpack_require__(/*! ./Components/Tooltip */ "../include/js/front-end/src/Components/Tooltip.js");

var _Modalise = __webpack_require__(/*! ./Components/Modalise */ "../include/js/front-end/src/Components/Modalise.js");

class Core {}

exports.Core = Core;
(0, _defineProperty2.default)(Core, "lightboxList", []);
(0, _defineProperty2.default)(Core, "prompterList", []);
(0, _defineProperty2.default)(Core, "lightbox", void 0);
(0, _defineProperty2.default)(Core, "deep", location.hash);
(0, _defineProperty2.default)(Core, "setLightbox", function (lb) {
  return Core.lightbox = lb;
});
(0, _defineProperty2.default)(Core, "getLightbox", function () {
  return Core.lightbox;
});
(0, _defineProperty2.default)(Core, "setDeep", function (d) {
  return Core.deep = d;
});
(0, _defineProperty2.default)(Core, "getDeep", function () {
  return Core.deep;
});
(0, _defineProperty2.default)(Core, "addToLightboxList", function (idx, lightbox) {
  return Core.lightboxList[idx] = lightbox;
});
(0, _defineProperty2.default)(Core, "getLightboxList", function () {
  return Core.lightboxList;
});
(0, _defineProperty2.default)(Core, "showSpinner", function () {
  var loading = document.getElementsByClassName('photonic-loading');

  if (loading.length > 0) {
    loading = loading[0];
  } else {
    loading = document.createElement('div');
    loading.className = 'photonic-loading';
  }

  loading.style.display = 'block';
  document.body.appendChild(loading);
});
(0, _defineProperty2.default)(Core, "hideLoading", function () {
  var loading = document.getElementsByClassName('photonic-loading');

  if (loading.length > 0) {
    loading = loading[0];
    loading.style.display = 'none';
  }
});
(0, _defineProperty2.default)(Core, "initializePasswordPrompter", function (selector) {
  var selectorNoHash = selector.replace(/^#+/g, '');
  var prompter = new _Modalise.Modalise(selectorNoHash);
  prompter.attach();
  Core.prompterList[selector] = prompter;
  prompter.show();
});
(0, _defineProperty2.default)(Core, "moveHTML5External", function () {
  var videos = document.getElementById('photonic-html5-external-videos');

  if (!videos) {
    videos = document.createElement('div');
    videos.id = 'photonic-html5-external-videos';
    videos.style.display = 'none';
    document.body.appendChild(videos);
  }

  var current = document.querySelectorAll('.photonic-html5-external');

  if (current) {
    var cLen = current.length;

    for (var c = 0; c < cLen; c++) {
      current[c].classList.remove('photonic-html5-external');
      videos.appendChild(current[c]);
    }
  }
});
(0, _defineProperty2.default)(Core, "blankSlideupTitle", function () {
  document.querySelectorAll('.title-display-slideup-stick, .photonic-slideshow.title-display-slideup-stick').forEach(function (item) {
    Array.from(item.getElementsByTagName('a')).forEach(function (a) {
      a.setAttribute('title', '');
    });
  });
});
(0, _defineProperty2.default)(Core, "showSlideupTitle", function () {
  var titles = document.documentElement.querySelectorAll('.title-display-slideup-stick a .photonic-title');
  var len = titles.length;

  for (var i = 0; i < len; i++) {
    titles[i].style.display = 'block';
  }
});
(0, _defineProperty2.default)(Core, "waitForImages", /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)(function* (selector) {
    var imageUrlArray = [];

    if (typeof selector === 'string') {
      document.querySelectorAll(selector).forEach(function (selection) {
        Array.from(selection.getElementsByTagName('img')).forEach(function (img) {
          imageUrlArray.push(img.getAttribute('src'));
        });
      });
    } else if (selector instanceof Element) {
      Array.from(selector.getElementsByTagName('img')).forEach(function (img) {
        imageUrlArray.push(img.getAttribute('src'));
      });
    }

    var promiseArray = []; // create an array for promises

    var imageArray = []; // array for the images

    var _loop = function _loop(imageUrl) {
      promiseArray.push(new Promise(function (resolve) {
        var img = new Image();

        img.onload = function () {
          resolve();
        };

        img.src = imageUrl;
        imageArray.push(img);
      }));
    };

    for (var imageUrl of imageUrlArray) {
      _loop(imageUrl);
    }

    yield Promise.all(promiseArray); // wait for all the images to be loaded

    return imageArray;
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
(0, _defineProperty2.default)(Core, "standardizeTitleWidths", function () {
  var self = Core;
  document.querySelectorAll('.photonic-standard-layout.title-display-below, .photonic-standard-layout.title-display-hover-slideup-show, .photonic-standard-layout.title-display-slideup-stick').forEach(function (grid) {
    self.waitForImages(grid).then(function () {
      grid.querySelectorAll('.photonic-thumb').forEach(function (item) {
        var img = item.getElementsByTagName('img');

        if (img != null) {
          img = img[0];
          var title = item.querySelector('.photonic-title-info');

          if (title) {
            title.style.width = img.width + 'px';
          }
        }
      });
    });
  });
});
(0, _defineProperty2.default)(Core, "sanitizeTitles", function () {
  var thumbs = document.querySelectorAll('.photonic-stream a, a.photonic-level-2-thumb');
  thumbs.forEach(function (thumb) {
    if (!thumb.parentNode.classList.contains('photonic-header-title')) {
      var title = thumb.getAttribute('title');
      thumb.setAttribute('title', Util.getText(title));
    }
  });
});
(0, _defineProperty2.default)(Core, "initializeTooltips", function () {
  if (document.querySelector('.title-display-tooltip a, .photonic-slideshow.title-display-tooltip img') != null) {
    (0, _Tooltip.Tooltip)('[data-photonic-tooltip]', '.photonic-tooltip-container');
  }
});
(0, _defineProperty2.default)(Core, "showRegularGrids", function () {
  document.querySelectorAll('.photonic-standard-layout').forEach(function (grid) {
    Core.waitForImages(grid).then(function () {
      grid.querySelectorAll('.photonic-level-1, .photonic-level-2').forEach(function (item) {
        item.style.display = 'inline-block';
      });
    });
  });
});
(0, _defineProperty2.default)(Core, "executeCommon", function () {
  Core.moveHTML5External();
  Core.blankSlideupTitle();
  Core.standardizeTitleWidths();
  Core.sanitizeTitles();
  Core.initializeTooltips();
  Core.showRegularGrids();
});

/***/ }),

/***/ "../include/js/front-end/src/Entries/GLightbox.js":
/*!********************************************************!*\
  !*** ../include/js/front-end/src/Entries/GLightbox.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _Core = __webpack_require__(/*! ../Core */ "../include/js/front-end/src/Core.js");

var _GLightbox = __webpack_require__(/*! ../Lightboxes/GLightbox */ "../include/js/front-end/src/Lightboxes/GLightbox.js");

var Listeners = _interopRequireWildcard(__webpack_require__(/*! ../Listeners */ "../include/js/front-end/src/Listeners.js"));

var Layout = _interopRequireWildcard(__webpack_require__(/*! ../Layouts/Layout */ "../include/js/front-end/src/Layouts/Layout.js"));

document.addEventListener('DOMContentLoaded', function () {
  var lightbox = new _GLightbox.PhotonicGLightbox();

  _Core.Core.setLightbox(lightbox);

  lightbox.initialize();
  lightbox.initialize('.launch-gallery-glightbox-solo, .glightbox-video, .glightbox-html5-video');

  _Core.Core.executeCommon();

  Listeners.addAllListeners();
  Layout.initializeLayouts(lightbox);
});

/***/ }),

/***/ "../include/js/front-end/src/Layouts/Justified.js":
/*!********************************************************!*\
  !*** ../include/js/front-end/src/Layouts/Justified.js ***!
  \********************************************************/
/*! flagged exports */
/*! export JustifiedGrid [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.JustifiedGrid = void 0;

var _Core = __webpack_require__(/*! ../Core.js */ "../include/js/front-end/src/Core.js");

var Util = _interopRequireWildcard(__webpack_require__(/*! ../Util.js */ "../include/js/front-end/src/Util.js"));

var linearMin = function linearMin(arr) {
  var computed, result, x, _i, _len;

  for (_i = 0, _len = arr.length; _i < _len; _i++) {
    x = arr[_i];
    computed = x[0];

    if (!result || computed < result.computed) {
      result = {
        value: x,
        computed: computed
      };
    }
  }

  return result.value;
};

var linearPartition = function linearPartition(seq, k) {
  var ans, i, j, m, n, solution, table, x, y, _i, _j, _k, _l;

  n = seq.length;

  if (k <= 0) {
    return [];
  }

  if (k > n) {
    return seq.map(function (x) {
      return [x];
    });
  }

  table = function () {
    var _i, _results;

    _results = [];

    for (y = _i = 0; 0 <= n ? _i < n : _i > n; y = 0 <= n ? ++_i : --_i) {
      _results.push(function () {
        var _j, _results1;

        _results1 = [];

        for (x = _j = 0; 0 <= k ? _j < k : _j > k; x = 0 <= k ? ++_j : --_j) {
          _results1.push(0);
        }

        return _results1;
      }());
    }

    return _results;
  }();

  solution = function () {
    var _i, _ref, _results;

    _results = [];

    for (y = _i = 0, _ref = n - 1; 0 <= _ref ? _i < _ref : _i > _ref; y = 0 <= _ref ? ++_i : --_i) {
      _results.push(function () {
        var _j, _ref1, _results1;

        _results1 = [];

        for (x = _j = 0, _ref1 = k - 1; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; x = 0 <= _ref1 ? ++_j : --_j) {
          _results1.push(0);
        }

        return _results1;
      }());
    }

    return _results;
  }();

  for (i = _i = 0; 0 <= n ? _i < n : _i > n; i = 0 <= n ? ++_i : --_i) {
    table[i][0] = seq[i] + (i ? table[i - 1][0] : 0);
  }

  for (j = _j = 0; 0 <= k ? _j < k : _j > k; j = 0 <= k ? ++_j : --_j) {
    table[0][j] = seq[0];
  }

  for (i = _k = 1; 1 <= n ? _k < n : _k > n; i = 1 <= n ? ++_k : --_k) {
    for (j = _l = 1; 1 <= k ? _l < k : _l > k; j = 1 <= k ? ++_l : --_l) {
      m = linearMin(function () {
        var _m, _results;

        _results = [];

        for (x = _m = 0; 0 <= i ? _m < i : _m > i; x = 0 <= i ? ++_m : --_m) {
          _results.push([Math.max(table[x][j - 1], table[i][0] - table[x][0]), x]);
        }

        return _results;
      }());
      table[i][j] = m[0];
      solution[i - 1][j - 1] = m[1];
    }
  }

  n = n - 1;
  k = k - 2;
  ans = [];

  while (k >= 0) {
    ans = [function () {
      var _m, _ref, _ref1, _results;

      _results = [];

      for (i = _m = _ref = solution[n - 1][k] + 1, _ref1 = n + 1; _ref <= _ref1 ? _m < _ref1 : _m > _ref1; i = _ref <= _ref1 ? ++_m : --_m) {
        _results.push(seq[i]);
      }

      return _results;
    }()].concat(ans);
    n = solution[n - 1][k];
    k = k - 1;
  }

  return [function () {
    var _m, _ref, _results;

    _results = [];

    for (i = _m = 0, _ref = n + 1; 0 <= _ref ? _m < _ref : _m > _ref; i = 0 <= _ref ? ++_m : --_m) {
      _results.push(seq[i]);
    }

    return _results;
  }()].concat(ans);
};

function part(seq, k) {
  if (k <= 0) {
    return [];
  }

  while (k) {
    try {
      return linearPartition(seq, k--);
    } catch (_error) {//
    }
  }
}

var JustifiedGrid = function JustifiedGrid(resized, jsLoaded, selector, lightbox) {
  if (console !== undefined && Photonic_JS.debug_on !== '0' && Photonic_JS.debug_on !== '') console.time('Justified Grid');
  var selection = document.querySelectorAll(selector);

  if (selector == null || selection.length === 0) {
    selection = document.querySelectorAll('.photonic-random-layout');
  }

  if (!resized && selection.length > 0) {
    _Core.Core.showSpinner();
  }

  selection.forEach(function (container) {
    // If there are some nodes for which the sizes are missing, play safe and run this in JS mode.
    // Otherwise render the gallery using CSS, and just display the images once they have downloaded.
    if (container.classList.contains('sizes-missing') || !window.CSS || !CSS.supports('color', 'var(--fake-var)')) {
      var viewportWidth = Math.floor(container.getBoundingClientRect().width),
          windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
          idealHeight = Math.max(parseInt(windowHeight / 4), Photonic_JS.tile_min_height);
      var gap = Photonic_JS.tile_spacing * 2;

      _Core.Core.waitForImages(container).then(function () {
        var photos = [],
            images = Array.from(container.getElementsByTagName('img'));
        images.forEach(function (image) {
          if (image.closest('.photonic-panel') !== null) {
            return;
          }

          var div = image.parentNode.parentNode;

          if (!(image.naturalHeight === 0 || image.naturalHeight === undefined || image.naturalWidth === undefined)) {
            photos.push({
              tile: div,
              aspect_ratio: image.naturalWidth / image.naturalHeight
            });
          }
        });
        var summedWidth = photos.reduce(function (sum, p) {
          return sum += p.aspect_ratio * idealHeight + gap;
        }, 0);
        var rows = Math.max(Math.round(summedWidth / viewportWidth), 1),
            // At least 1 row should be shown
        weights = photos.map(function (p) {
          return Math.round(p.aspect_ratio * 100);
        });
        var partition = part(weights, rows);
        var index = 0;
        var oLen = partition.length;

        for (var o = 0; o < oLen; o++) {
          var onePart = partition[o];
          var summedRatios = void 0;
          var rowBuffer = photos.slice(index, index + onePart.length);
          index = index + onePart.length;
          summedRatios = rowBuffer.reduce(function (sum, p) {
            return sum += p.aspect_ratio;
          }, 0);
          var rLen = rowBuffer.length;

          for (var r = 0; r < rLen; r++) {
            var item = rowBuffer[r],
                existing = item.tile;
            existing.style.width = parseInt(viewportWidth / summedRatios * item.aspect_ratio) + "px";
            existing.style.height = parseInt(viewportWidth / summedRatios) + "px";
          }
        }

        container.querySelectorAll('.photonic-thumb, .photonic-thumb img').forEach(function (thumb) {
          return Util.fadeIn(thumb);
        });

        _Core.Core.blankSlideupTitle();

        _Core.Core.showSlideupTitle();

        if (!resized && !jsLoaded) {
          _Core.Core.hideLoading();
        }
      });
    } else {
      _Core.Core.waitForImages(container).then(function () {
        container.querySelectorAll('.photonic-thumb, .photonic-thumb img').forEach(function (thumb) {
          return Util.fadeIn(thumb);
        });

        _Core.Core.blankSlideupTitle();

        _Core.Core.showSlideupTitle();

        if (!resized && !jsLoaded) {
          _Core.Core.hideLoading();
        }
      });
    }

    if (lightbox && !resized) {
      if (Photonic_JS.slideshow_library === 'lightcase') {
        lightbox.initialize('.photonic-random-layout');
      } else if (['bigpicture', 'featherlight', 'glightbox', 'lightgallery'].indexOf(Photonic_JS.slideshow_library) > -1) {
        lightbox.initialize(container);
      } else if (Photonic_JS.slideshow_library === 'fancybox3') {
        lightbox.initialize('.photonic-random-layout');
      } else if (Photonic_JS.slideshow_library === 'photoswipe') {
        lightbox.initialize();
      }
    }
  });
  if (console !== undefined && Photonic_JS.debug_on !== '0' && Photonic_JS.debug_on !== '') console.timeEnd('Justified Grid');
};

exports.JustifiedGrid = JustifiedGrid;

/***/ }),

/***/ "../include/js/front-end/src/Layouts/Layout.js":
/*!*****************************************************!*\
  !*** ../include/js/front-end/src/Layouts/Layout.js ***!
  \*****************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initializeLayouts [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initializeLayouts = void 0;

var _Justified = __webpack_require__(/*! ./Justified */ "../include/js/front-end/src/Layouts/Justified.js");

var _Mosaic = __webpack_require__(/*! ./Mosaic */ "../include/js/front-end/src/Layouts/Mosaic.js");

var _Masonry = __webpack_require__(/*! ./Masonry */ "../include/js/front-end/src/Layouts/Masonry.js");

var Slider = _interopRequireWildcard(__webpack_require__(/*! ./Slider */ "../include/js/front-end/src/Layouts/Slider.js"));

var initializeLayouts = function initializeLayouts(lightbox) {
  (0, _Justified.JustifiedGrid)(false, false, null, lightbox);
  (0, _Mosaic.Mosaic)(false, false);
  (0, _Masonry.Masonry)(false, false);
  Slider.initializeSliders();
  window.addEventListener('resize', function () {
    (0, _Justified.JustifiedGrid)(true, false, '.photonic-random-layout.sizes-missing');
    (0, _Mosaic.Mosaic)(true, false);
    (0, _Masonry.Masonry)(true, false);
  });
};

exports.initializeLayouts = initializeLayouts;

/***/ }),

/***/ "../include/js/front-end/src/Layouts/Masonry.js":
/*!******************************************************!*\
  !*** ../include/js/front-end/src/Layouts/Masonry.js ***!
  \******************************************************/
/*! flagged exports */
/*! export Masonry [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Masonry = void 0;

var _Core = __webpack_require__(/*! ../Core */ "../include/js/front-end/src/Core.js");

var Util = _interopRequireWildcard(__webpack_require__(/*! ../Util */ "../include/js/front-end/src/Util.js"));

var Masonry = function Masonry(resized, jsLoaded, selector) {
  if (console !== undefined && Photonic_JS.debug_on !== '0' && Photonic_JS.debug_on !== '') console.time('Masonry');
  var selection = document.querySelectorAll(selector);

  if (selector == null || selection.length === 0) {
    selection = document.querySelectorAll('.photonic-masonry-layout');
  }

  if (!resized && selection.length > 0) {
    _Core.Core.showSpinner();
  }

  var minWidth = isNaN(Photonic_JS.masonry_min_width) || parseInt(Photonic_JS.masonry_min_width) <= 0 ? 200 : Photonic_JS.masonry_min_width;
  minWidth = parseInt(minWidth);
  selection.forEach(function (grid) {
    _Core.Core.waitForImages(grid).then(function () {
      var columns = grid.getAttribute('data-photonic-gallery-columns');
      columns = isNaN(parseInt(columns)) || parseInt(columns) <= 0 ? 3 : parseInt(columns);
      var viewportWidth = Math.floor(grid.getBoundingClientRect().width),
          idealColumns = viewportWidth / columns > minWidth ? columns : Math.floor(viewportWidth / minWidth);

      if (idealColumns !== undefined && idealColumns !== null) {
        grid.style.columnCount = idealColumns.toString();
      }

      Array.from(grid.getElementsByTagName('img')).forEach(function (img) {
        Util.fadeIn(img);
        img.style.display = 'block';
      });

      _Core.Core.showSlideupTitle();

      if (!resized && !jsLoaded) {
        _Core.Core.hideLoading();
      }
    });
  });
  if (console !== undefined && Photonic_JS.debug_on !== '0' && Photonic_JS.debug_on !== '') console.timeEnd('Masonry');
};

exports.Masonry = Masonry;

/***/ }),

/***/ "../include/js/front-end/src/Layouts/Mosaic.js":
/*!*****************************************************!*\
  !*** ../include/js/front-end/src/Layouts/Mosaic.js ***!
  \*****************************************************/
/*! flagged exports */
/*! export Mosaic [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Mosaic = void 0;

var _Core = __webpack_require__(/*! ../Core */ "../include/js/front-end/src/Core.js");

var Util = _interopRequireWildcard(__webpack_require__(/*! ../Util */ "../include/js/front-end/src/Util.js"));

var getDistribution = function getDistribution(setSize, max, min) {
  var distribution = [];
  var processed = 0;

  while (processed < setSize) {
    if (setSize - processed <= max && processed > 0) {
      distribution.push(setSize - processed);
      processed += setSize - processed;
    } else {
      var current = Math.max(Math.floor(Math.random() * max + 1), min);
      current = Math.min(current, setSize - processed);
      distribution.push(current);
      processed += current;
    }
  }

  return distribution;
};

var arrayAlternate = function arrayAlternate(array, remainder) {
  return array.filter(function (value, index) {
    return index % 2 === remainder;
  });
};

var setUniformHeightsForRow = function setUniformHeightsForRow(array) {
  // First, order the array by increasing height
  array.sort(function (a, b) {
    return a.height - b.height;
  });
  array[0].new_height = array[0].height;
  array[0].new_width = array[0].width;

  for (var i = 1; i < array.length; i++) {
    array[i].new_height = array[0].height;
    array[i].new_width = array[i].new_height * array[i].aspect_ratio;
  }

  var new_width = array.reduce(function (sum, p) {
    return sum += p.new_width;
  }, 0);
  return {
    elements: array,
    height: array[0].new_height,
    width: new_width,
    aspect_ratio: new_width / array[0].new_height
  };
};

var finalizeTiledLayout = function finalizeTiledLayout(components, containers) {
  var cLength = components.length;

  for (var c = 0; c < cLength; c++) {
    var component = components[c];
    var rowY = component.y,
        otherRowHeight = 0,
        container = void 0;
    var ceLen = component.elements.length;

    for (var e = 0; e < ceLen; e++) {
      var element = component.elements[e];

      if (element.photo_position !== undefined) {
        // Component is a single image
        container = containers[element.photo_position];
        container.style.width = component.new_width + 'px';
        container.style.height = component.new_height + 'px';
        container.style.top = component.y + 'px';
        container.style.left = component.x + 'px';
      } else {
        // Component is a clique (element is a row). Widths and Heights of cliques have been calculated. But the rows in cliques need to be recalculated
        element.new_width = component.new_width;

        if (otherRowHeight === 0) {
          element.new_height = element.new_width / element.aspect_ratio;
          otherRowHeight = element.new_height;
        } else {
          element.new_height = component.new_height - otherRowHeight;
        }

        element.x = component.x;
        element.y = rowY;
        rowY += element.new_height;
        var totalWidth = element.elements.reduce(function (sum, p) {
          return sum += p.new_width;
        }, 0);
        var rowX = 0;
        var eLength = element.elements.length;

        for (var i = 0; i < eLength; i++) {
          var image = element.elements[i];
          image.new_width = element.new_width * image.new_width / totalWidth;
          image.new_height = element.new_height; //image.new_width / image.aspect_ratio;

          image.x = rowX;
          rowX += image.new_width;
          container = containers[image.photo_position];
          container.style.width = Math.floor(image.new_width) + 'px';
          container.style.height = Math.floor(image.new_height) + 'px';
          container.style.top = Math.floor(element.y) + 'px';
          container.style.left = Math.floor(element.x + image.x) + 'px';
        }
      }
    }
  }
};

var Mosaic = function Mosaic(resized, jsLoaded, selector) {
  if (console !== undefined && Photonic_JS.debug_on !== '0' && Photonic_JS.debug_on !== '') console.time('Mosaic');
  var selection = document.querySelectorAll(selector);

  if (selector == null || selection.length === 0) {
    selection = document.querySelectorAll('.photonic-mosaic-layout');
  }

  if (!resized && selection.length > 0) {
    _Core.Core.showSpinner();
  }

  selection.forEach(function (grid) {
    _Core.Core.waitForImages(grid).then(function () {
      if (!grid.hasChildNodes()) {
        return;
      }

      var viewportWidth = Math.floor(grid.getBoundingClientRect().width),
          triggerWidth = isNaN(Photonic_JS.mosaic_trigger_width) || parseInt(Photonic_JS.mosaic_trigger_width) <= 0 ? 200 : parseInt(Photonic_JS.mosaic_trigger_width),
          maxInRow = Math.floor(viewportWidth / triggerWidth),
          minInRow = viewportWidth >= triggerWidth * 2 ? 2 : 1,
          photos = [];
      var setSize;
      var containers = [],
          images = Array.from(grid.getElementsByTagName('img'));
      images.forEach(function (image, position) {
        if (image.closest('.photonic-panel') != null) {
          return;
        }

        var a = image.parentNode;
        var div = a.parentNode;
        div.setAttribute('data-photonic-photo-index', position);
        containers[position] = div;

        if (!(image.naturalHeight === 0 || image.naturalHeight === undefined || image.naturalWidth === undefined)) {
          var aspectRatio = image.naturalWidth / image.naturalHeight;
          photos.push({
            src: image.src,
            width: image.naturalWidth,
            height: image.naturalHeight,
            aspect_ratio: aspectRatio,
            photo_position: position
          });
        }
      });
      setSize = photos.length;
      var distribution = getDistribution(setSize, maxInRow, minInRow); // We got our random distribution. Let's divide the photos up according to the distribution.

      var groups = [],
          startIdx = 0;
      distribution.forEach(function (size) {
        groups.push(photos.slice(startIdx, startIdx + size));
        startIdx += size;
      });
      var groupY = 0; // We now have our groups of photos. We need to find the optimal layout for each group.

      groups.forEach(function (group) {
        // First, order the group by aspect ratio
        group.sort(function (a, b) {
          return a.aspect_ratio - b.aspect_ratio;
        }); // Next, pick a random layout

        var groupLayout;

        if (group.length === 1) {
          groupLayout = [1];
        } else if (group.length === 2) {
          groupLayout = [1, 1];
        } else {
          groupLayout = getDistribution(group.length, group.length - 1, 1);
        } // Now, LAYOUT, BABY!!!


        var cliqueF = 0,
            cliqueL = group.length - 1,
            cliques = [],
            indices = [];

        for (var i = 2; i <= maxInRow; i++) {
          var index = groupLayout.indexOf(i);

          while (-1 < index && cliqueF < cliqueL) {
            // Ideal Layout: one landscape, one portrait. But we will take any 2 with contrasting aspect ratios
            var clique = [],
                j = 0;

            while (j < i && cliqueF <= cliqueL) {
              clique.push(group[cliqueF++]); // One with a low aspect ratio

              j++;

              if (j < i && cliqueF <= cliqueL) {
                clique.push(group[cliqueL--]); // One with a high aspect ratio

                j++;
              }
            } // Clique is formed. Add it to the list of cliques.


            cliques.push(clique);
            indices.push(index); // Keep track of the position of the clique in the row

            index = groupLayout.indexOf(i, index + 1);
          }
        } // The ones that are not in any clique (i.e. the ones in the middle) will be given their own columns in the row.


        var remainder = group.slice(cliqueF, cliqueL + 1); // Now let's layout the cliques individually. Each clique is its own column.

        var rowLayout = [];
        cliques.forEach(function (clique, cliqueIdx) {
          var toss = Math.floor(Math.random() * 2); // 0 --> Groups of smallest and largest, or 1 --> Alternating

          var oneRow, otherRow;

          if (toss === 0) {
            // Group the ones with the lowest aspect ratio together, and the ones with the highest aspect ratio together.
            // Lay one group at the top and the other at the bottom
            var wide = Math.max(Math.floor(Math.random() * (clique.length / 2 - 1)), 1);
            oneRow = clique.slice(0, wide);
            otherRow = clique.slice(wide);
          } else {
            // Group alternates together.
            // Lay one group at the top and the other at the bottom
            oneRow = arrayAlternate(clique, 0);
            otherRow = arrayAlternate(clique, 1);
          } // Make heights consistent within rows:


          oneRow = setUniformHeightsForRow(oneRow);
          otherRow = setUniformHeightsForRow(otherRow); // Now make widths consistent

          oneRow.new_width = Math.min(oneRow.width, otherRow.width);
          oneRow.new_height = oneRow.new_width / oneRow.aspect_ratio;
          otherRow.new_width = oneRow.new_width;
          otherRow.new_height = otherRow.new_width / otherRow.aspect_ratio;
          rowLayout.push({
            elements: [oneRow, otherRow],
            height: oneRow.new_height + otherRow.new_height,
            width: oneRow.new_width,
            aspect_ratio: oneRow.new_width / (oneRow.new_height + otherRow.new_height),
            element_position: indices[cliqueIdx]
          });
        });
        rowLayout.sort(function (a, b) {
          return a.element_position - b.element_position;
        });
        var orderedRowLayout = [];

        for (var position = 0; position < groupLayout.length; position++) {
          var cliqueExists = indices.indexOf(position) > -1;

          if (cliqueExists) {
            orderedRowLayout.push(rowLayout.shift());
          } else {
            var rem = remainder.shift();
            orderedRowLayout.push({
              elements: [rem],
              height: rem.height,
              width: rem.width,
              aspect_ratio: rem.aspect_ratio
            });
          }
        } // Main Row layout is fully constructed and ordered. Now we need to balance heights and widths of all cliques with the "remainder"


        var totalAspect = orderedRowLayout.reduce(function (sum, p) {
          return sum += p.aspect_ratio;
        }, 0);
        var elementX = 0;
        orderedRowLayout.forEach(function (component) {
          component.new_width = component.aspect_ratio / totalAspect * viewportWidth;
          component.new_height = component.new_width / component.aspect_ratio;
          component.y = groupY;
          component.x = elementX;
          elementX += component.new_width;
        });
        groupY += orderedRowLayout[0].new_height;
        finalizeTiledLayout(orderedRowLayout, containers);
      });
      grid.style.height = groupY + 'px';
      Array.from(grid.getElementsByTagName('img')).forEach(function (image) {
        return Util.fadeIn(image);
      });

      _Core.Core.showSlideupTitle();

      if (!resized && !jsLoaded) {
        _Core.Core.hideLoading();
      }
    });
  });
  if (console !== undefined && Photonic_JS.debug_on !== '0' && Photonic_JS.debug_on !== '') console.timeEnd('Mosaic');
}; //Mosaic(false);


exports.Mosaic = Mosaic;

/***/ }),

/***/ "../include/js/front-end/src/Layouts/Slider.js":
/*!*****************************************************!*\
  !*** ../include/js/front-end/src/Layouts/Slider.js ***!
  \*****************************************************/
/*! flagged exports */
/*! export Slider [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export initializeSliders [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initializeSliders = exports.Slider = void 0;

var _Core = __webpack_require__(/*! ../Core */ "../include/js/front-end/src/Core.js");

var adaptiveHeight = function adaptiveHeight(slideshow, slide, splide) {
  var options = splide.options;

  if (slide.isVisible()) {
    var allSlides = splide.Components.Elements.slides;
    var currentlyActive = splide.index;
    var lastVisible = parseInt(currentlyActive) + parseInt(options.perPage);
    var visibleSlides = allSlides.slice(currentlyActive, lastVisible);
    var maxHeight = 0;
    Array.prototype.forEach.call(visibleSlides, function (visible) {
      var visibleImage = visible.querySelector('img');

      if (visibleImage && visibleImage.offsetHeight > maxHeight) {
        maxHeight = visibleImage.offsetHeight;
      }
    });
    slide.slide.style.height = "".concat(maxHeight, "px");
    var splideTrack = slideshow.querySelector('.splide__track');
    var splideTrackHeight = splideTrack ? splideTrack.offsetHeight : 0;

    if (maxHeight !== splideTrackHeight) {
      splideTrack.style.height = "".concat(maxHeight, "px");
    }
  }
};

var fixedHeight = function fixedHeight(slideshow, splideObj) {
  var maxHeight = 0,
      maxAspect = 0,
      containerWidth = slideshow.offsetWidth,
      children = slideshow.querySelectorAll('.splide__slide img');
  Array.prototype.forEach.call(children, function (img) {
    if (img.naturalHeight !== 0) {
      var childAspect = img.naturalWidth / img.naturalHeight;

      if (childAspect >= maxAspect) {
        maxAspect = childAspect;
        var heightFactor = img.naturalWidth > containerWidth ? containerWidth / img.naturalWidth : 1;
        var cols = parseInt(splideObj.options.perPage, 10);

        if (!isNaN(cols) && cols !== 0) {
          heightFactor = heightFactor / cols;
        }

        maxHeight = img.naturalHeight * heightFactor;
      }
    }
  });
  Array.prototype.forEach.call(children, function (img) {
    img.style.height = maxHeight + 'px';
  });
  Array.prototype.forEach.call(slideshow.querySelectorAll('.splide__slide, .splide__list'), function (slideOrList) {
    slideOrList.style.height = maxHeight + 'px';
  });
  slideshow.style.height = maxHeight + 'px';
};

var Slider = function Slider(slideshow) {
  if (slideshow) {
    var content = slideshow.querySelector('.photonic-slideshow-content');

    if (content) {
      _Core.Core.waitForImages(slideshow).then(function () {
        var idStr = '#' + slideshow.getAttribute('id');
        var splideThumbs = document.querySelector(idStr + '-thumbs');

        if (splideThumbs != null) {
          splideThumbs = new Splide(idStr + '-thumbs');
          splideThumbs.mount();
        }

        var splide = new Splide(idStr);
        splide.on('mounted resize', function (slide) {
          if (slideshow.classList.contains('photonic-slideshow-side-white') || slideshow.classList.contains('photonic-slideshow-start-next')) {
            fixedHeight(slideshow, splide);
          }
        });
        splide.on('visible', function (slide) {
          if (slideshow.classList.contains('photonic-slideshow-adapt-height')) {
            adaptiveHeight(slideshow, slide, splide);
          }
        });

        if (splideThumbs == null) {
          splide.mount();
        } else {
          splide.sync(splideThumbs).mount();
        }

        slideshow.querySelectorAll('img').forEach(function (img) {
          img.style.display = 'inline';
        });
      });
    }
  }
};

exports.Slider = Slider;

var initializeSliders = function initializeSliders() {
  var primarySliders = document.querySelectorAll('.photonic-slideshow');

  if (typeof Splide != "undefined") {
    primarySliders.forEach(function (slideshow) {
      return Slider(slideshow);
    });
  } else if (console !== undefined && primarySliders.length > 0) {
    console.error('Splide not found! Please ensure that the Splide script is available and loaded before Photonic.');
  }
};

exports.initializeSliders = initializeSliders;

/***/ }),

/***/ "../include/js/front-end/src/Lightboxes/GLightbox.js":
/*!***********************************************************!*\
  !*** ../include/js/front-end/src/Lightboxes/GLightbox.js ***!
  \***********************************************************/
/*! flagged exports */
/*! export PhotonicGLightbox [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var GLightbox = __webpack_require__(/*! ../../../../ext/glightbox/glightbox.js */ "../include/ext/glightbox/glightbox.js");


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PhotonicGLightbox = void 0;

var _Lightbox = __webpack_require__(/*! ./Lightbox */ "../include/js/front-end/src/Lightboxes/Lightbox.js");

var _Core = __webpack_require__(/*! ../Core */ "../include/js/front-end/src/Core.js");

var Util = _interopRequireWildcard(__webpack_require__(/*! ../Util */ "../include/js/front-end/src/Util.js"));

class PhotonicGLightbox extends _Lightbox.Lightbox {
  constructor() {
    super();
  }

  hostedVideo(a) {
    var self = this;
    var html5 = a.getAttribute('href').match(new RegExp(/(\.mp4|\.webm|\.ogg)/i)),
        css = a.classList.contains('photonic-launch-gallery');

    if (html5 !== null && !css) {
      a.classList.add(Photonic_JS.slideshow_library + "-html5-video");
    }
  }

  initialize(selector) {
    this.handleSolos();
    var self = this;
    var selection;

    if (selector == null) {
      selection = document.querySelectorAll('.photonic-level-1-container');
    } else if (selector instanceof NodeList) {
      selection = selector;
    } else if (selector instanceof Element) {
      selection = [selector];
    } else {
      selection = document.querySelectorAll(selector);
    }

    selection.forEach(function (gallery) {
      var galleryItems = gallery.querySelectorAll('.photonic-launch-gallery');

      if (galleryItems.length > 0) {
        var rel = galleryItems.item(0).getAttribute('rel'); // Get "rel" from first "a" element

        if (rel != null) {
          var lightbox;
          lightbox = _Core.Core.getLightboxList()[rel];

          if (lightbox) {
            lightbox.destroy();
          }

          lightbox = GLightbox({
            selector: '[rel="' + rel + '"]',
            loop: Photonic_JS.lightbox_loop
          });
          lightbox.on('slide_changed', function (_ref) {
            var {
              prev,
              current
            } = _ref;
            var idx = current.index;
            var thumb = galleryItems.item(idx);
            var social = document.querySelector('#photonic-social');

            if (social) {
              social.parentNode.removeChild(social);
            }

            self.setHash(thumb);
            var shareable = {
              'url': location.href,
              'title': Util.getText(thumb.getAttribute('data-title')),
              'image': thumb.getAttribute('href')
            };
            self.addSocial('.gslide.loaded.current .ginner-container', shareable);
          });
          lightbox.on('close', function () {
            self.unsetHash();
          });

          _Core.Core.addToLightboxList(rel, lightbox);
        }
      } else if (!gallery.classList.contains('photonic-level-2-container') && !gallery.querySelector('.photonic-level-2-container')) {
        // Probably a solo item
        GLightbox({
          selector: selector
        });
      }
    });
  }

  initializeForNewContainer(containerId) {
    this.initialize(containerId);
  }

}

exports.PhotonicGLightbox = PhotonicGLightbox;

/***/ }),

/***/ "../include/js/front-end/src/Lightboxes/Lightbox.js":
/*!**********************************************************!*\
  !*** ../include/js/front-end/src/Lightboxes/Lightbox.js ***!
  \**********************************************************/
/*! flagged exports */
/*! export Lightbox [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Lightbox = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../../../../node_modules/@babel/runtime/helpers/defineProperty.js"));

class Lightbox {
  constructor() {
    (0, _defineProperty2.default)(this, "deep", void 0);
    (0, _defineProperty2.default)(this, "lastDeep", void 0);
    this.socialIcons = "<div id='photonic-social'>" + "<a class='photonic-share-fb' href='https://www.facebook.com/sharer/sharer.php?u={photonic_share_link}&amp;title={photonic_share_title}&amp;picture={photonic_share_image}' target='_blank' title='Share on Facebook'><div class='icon-facebook'></div></a>" + "<a class='photonic-share-twitter' href='https://twitter.com/share?url={photonic_share_link}&amp;text={photonic_share_title}' target='_blank' title='Share on Twitter'><div class='icon-twitter'></div></a>" + "<a class='photonic-share-pinterest' data-pin-do='buttonPin' href='https://www.pinterest.com/pin/create/button/?url={photonic_share_link}&media={photonic_share_image}&description={photonic_share_title}' data-pin-custom='true' target='_blank' title='Share on Pinterest'><div class='icon-pinterest'></div></a>" + "</div>";
    this.videoIndex = 1;
  }

  getVideoSize(url, baseline) {
    return new Promise(function (resolve) {
      // create the video element
      var video = document.createElement('video'); // place a listener on it

      video.addEventListener("loadedmetadata", function () {
        // retrieve dimensions
        var height = this.videoHeight,
            width = this.videoWidth;
        var videoAspectRatio = this.videoWidth / this.videoHeight,
            baseAspectRatio = baseline.width / baseline.height;
        var newWidth, newHeight;

        if (baseAspectRatio > videoAspectRatio) {
          // Window is wider than it needs to be ... constrain by window height
          newHeight = baseline.height;
          newWidth = width * newHeight / height;
        } else {
          // Window is narrower than it needs to be ... constrain by window width
          newWidth = baseline.width;
          newHeight = height * newWidth / width;
        } // send back result


        resolve({
          height: height,
          width: width,
          newHeight: newHeight,
          newWidth: newWidth
        });
      }, false); // start download meta-datas

      video.src = url;
    });
  }

  getImageSize(url, baseline) {
    return new Promise(function (resolve) {
      var image = document.createElement('img'); // place a listener on it

      image.addEventListener("load", function () {
        // retrieve dimensions
        var height = this.height,
            width = this.width,
            imageAspectRatio = this.width / this.height,
            baseAspectRatio = baseline.width / baseline.height;
        var newWidth, newHeight;

        if (baseAspectRatio > imageAspectRatio) {
          // Window is wider than it needs to be ... constrain by window height
          newHeight = baseline.height;
          newWidth = width * newHeight / height;
        } else {
          // Window is narrower than it needs to be ... constrain by window width
          newWidth = baseline.width;
          newHeight = height * newWidth / width;
        } // send back result


        resolve({
          height: height,
          width: width,
          newHeight: newHeight,
          newWidth: newWidth
        });
      }, false); // start download meta-datas

      image.src = url;
    });
  }

  addSocial(selector, shareable) {
    if ((Photonic_JS.social_media === undefined || Photonic_JS.social_media === '') && shareable['buy'] === undefined) {
      return;
    }

    var socialEl = document.getElementById('photonic-social');

    if (socialEl !== null) {
      socialEl.parentNode.removeChild(socialEl);
    }

    if (location.hash !== '') {
      var social = this.socialIcons.replace(/{photonic_share_link}/g, encodeURIComponent(shareable['url'])).replace(/{photonic_share_title}/g, encodeURIComponent(shareable['title'])).replace(/{photonic_share_image}/g, encodeURIComponent(shareable['image']));
      var selectorEl;

      if (typeof selector === 'string') {
        selectorEl = document.documentElement.querySelector(selector);
      } else {
        selectorEl = selector;
      }

      if (selectorEl !== null) {
        selectorEl.insertAdjacentHTML('beforeend', social);
      }

      if (Photonic_JS.social_media === undefined || Photonic_JS.social_media === '') {
        var socialMediaIcons = document.documentElement.querySelectorAll('.photonic-share-fb, .photonic-share-twitter, .photonic-share-pinterest');
        Array.prototype.forEach.call(socialMediaIcons, function (socialIcon) {
          socialIcon.parentNode.removeChild(socialIcon);
        });
      }
    }
  }

  setHash(a) {
    if (Photonic_JS.deep_linking === undefined || Photonic_JS.deep_linking === 'none' || a === null || a === undefined) {
      return;
    }

    var hash = typeof a === 'string' ? a : a.getAttribute('data-photonic-deep');

    if (hash === undefined) {
      return;
    }

    if (typeof window.history.pushState === 'function' && Photonic_JS.deep_linking === 'yes-history') {
      window.history.pushState({}, document.title, '#' + hash);
    } else if (typeof window.history.replaceState === 'function' && Photonic_JS.deep_linking === 'no-history') {
      window.history.replaceState({}, document.title, '#' + hash);
    } else {
      document.location.hash = hash;
    }
  }

  unsetHash() {
    this.lastDeep = this.lastDeep === undefined || this.deep !== '' ? location.hash : this.lastDeep;

    if (window.history && 'replaceState' in window.history) {
      history.replaceState({}, document.title, location.href.substr(0, location.href.length - location.hash.length));
    } else {
      window.location.hash = '';
    }
  }

  changeHash(e) {
    if (e.type === 'load') {
      var hash = window.location.hash;
      hash = hash.substr(1);

      if (hash && hash !== '') {
        var allMatches = document.querySelectorAll('[data-photonic-deep="' + hash + '"]');

        if (allMatches.length > 0) {
          var thumbToClick = allMatches[0];
          var event = document.createEvent('HTMLEvents');
          event.initEvent('click', true, false);
          thumbToClick.dispatchEvent(event);
        }
      }
    } else {
      var node = this.deep;

      if (node != null) {
        if (node.length > 1) {
          if (window.location.hash && node.indexOf('#access_token=') !== -1) {
            this.unsetHash();
          } else {
            node = node.substr(1);

            var _allMatches = document.querySelectorAll('[data-photonic-deep="' + node + '"]');

            if (_allMatches.length > 0) {
              var _thumbToClick = _allMatches[0];

              var _event = document.createEvent('HTMLEvents');

              _event.initEvent('click', true, false);

              _thumbToClick.dispatchEvent(_event);

              this.setHash(node);
            }
          }
        }
      }
    }
  }

  catchYouTubeURL(url) {
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,
        match = url.match(regExp);

    if (match && match[2].length === 11) {
      return match[2];
    }
  }

  catchVimeoURL(url) {
    var regExp = /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/,
        match = url.match(regExp);

    if (match) {
      return match[1];
    }
  }

  soloImages() {
    var a = document.querySelectorAll('a[href]');
    var solos = Array.from(a).filter(function (elem) {
      return /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)/i.test(elem.getAttribute('href'));
    }).filter(function (elem) {
      return !elem.classList.contains('photonic-launch-gallery');
    });
    solos.forEach(function (solo) {
      solo.classList.add("launch-gallery-" + Photonic_JS.slideshow_library);
      solo.classList.add("launch-gallery-" + Photonic_JS.slideshow_library + '-solo');
      solo.classList.add(Photonic_JS.slideshow_library);
    });
    return solos;
  }

  changeVideoURL(element, regular, embed) {// Implemented in individual lightboxes. Empty for unsupported lightboxes
  }

  hostedVideo(a) {// Implemented in individual lightboxes. Empty for unsupported lightboxes
  }

  soloVideos() {
    var self = this;

    if (Photonic_JS.lightbox_for_videos) {
      var a = document.querySelectorAll('a[href]');
      a.forEach(function (anchor) {
        var regular, embed;
        var href = anchor.getAttribute('href'),
            youTube = self.catchYouTubeURL(href),
            vimeo = self.catchVimeoURL(href);

        if (youTube !== undefined) {
          regular = 'https://youtube.com/watch?v=' + youTube;
          embed = 'https://youtube.com/embed/' + youTube;
        } else if (vimeo !== undefined) {
          regular = 'https://vimeo.com/' + vimeo;
          embed = 'https://player.vimeo.com/video/' + vimeo;
        }

        if (regular !== undefined) {
          anchor.classList.add(Photonic_JS.slideshow_library + "-video");
          self.changeVideoURL(anchor, regular, embed);
          self.modifyAdditionalVideoProperties(anchor);
        }

        self.hostedVideo(anchor);
      });
    }
  }

  handleSolos() {
    if (Photonic_JS.lightbox_for_all) {
      this.soloImages();
    }

    this.soloVideos();

    if (Photonic_JS.deep_linking !== undefined && Photonic_JS.deep_linking !== 'none') {
      window.addEventListener('load', this.changeHash);
      window.addEventListener('hashchange', this.changeHash);
    }
  }

  initialize() {
    this.handleSolos(); // Implemented by child classes
  }

  initializeForNewContainer(containerId) {// Implemented by individual lightboxes. Empty for cases where not required
  }

  initializeForExisting() {// Implemented by child classes
  }

  modifyAdditionalVideoProperties(anchor) {// Implemented by individual lightboxes. Empty for cases where not required
  }

}

exports.Lightbox = Lightbox;

/***/ }),

/***/ "../include/js/front-end/src/Listeners.js":
/*!************************************************!*\
  !*** ../include/js/front-end/src/Listeners.js ***!
  \************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addAllListeners [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addHelperMoreButtonListener [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addLazyLoadListener [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addLevel2ClickListener [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addLevel3ExpandListener [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addMoreButtonListener [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addPasswordSubmitListener [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addSlideUpEnterListener [provided] [no usage info] [missing usage info prevents renaming] */
/*! export addSlideUpLeaveListener [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addAllListeners = exports.addLazyLoadListener = exports.addSlideUpLeaveListener = exports.addSlideUpEnterListener = exports.addHelperMoreButtonListener = exports.addMoreButtonListener = exports.addLevel3ExpandListener = exports.addPasswordSubmitListener = exports.addLevel2ClickListener = void 0;

var _Core = __webpack_require__(/*! ./Core */ "../include/js/front-end/src/Core.js");

var Util = _interopRequireWildcard(__webpack_require__(/*! ./Util */ "../include/js/front-end/src/Util.js"));

var Requests = _interopRequireWildcard(__webpack_require__(/*! ./Requests */ "../include/js/front-end/src/Requests.js"));

var _Justified = __webpack_require__(/*! ./Layouts/Justified */ "../include/js/front-end/src/Layouts/Justified.js");

var _Mosaic = __webpack_require__(/*! ./Layouts/Mosaic */ "../include/js/front-end/src/Layouts/Mosaic.js");

var _Tooltip = __webpack_require__(/*! ./Components/Tooltip */ "../include/js/front-end/src/Components/Tooltip.js");

// .photonic-level-2-thumb:not(".gallery-page")
var addLevel2ClickListener = function addLevel2ClickListener() {
  document.addEventListener('click', function (e) {
    if (!(e.target instanceof Element) || !e.target.closest('.photonic-level-2-thumb')) {
      return;
    }

    var clicked = e.target.closest('.photonic-level-2-thumb');

    if (Util.hasClass(clicked, 'gallery-page')) {
      return;
    }

    e.preventDefault();
    var container = clicked.closest('.photonic-level-2-container');
    var provider = clicked.getAttribute('data-photonic-platform'),
        singular = clicked.getAttribute('data-photonic-singular'),
        query = container.getAttribute('data-photonic-query');
    var args = {
      "panel_id": clicked.getAttribute('id'),
      "popup": clicked.getAttribute('data-photonic-popup'),
      "photo_count": clicked.getAttribute('data-photonic-photo-count'),
      "photo_more": clicked.getAttribute('data-photonic-photo-more'),
      "query": query
    };
    if (provider === 'google' || provider === 'zenfolio') args.thumb_size = clicked.getAttribute('data-photonic-thumb-size');

    if (provider === 'flickr' || provider === 'smug' || provider === 'google' || provider === 'zenfolio') {
      args.overlay_size = clicked.getAttribute('data-photonic-overlay-size');
      args.overlay_video_size = clicked.getAttribute('data-photonic-overlay-video-size');
    }

    if (provider === 'google') {
      args.overlay_crop = clicked.getAttribute('data-photonic-overlay-crop');
    }

    Requests.displayLevel2(provider, singular, args);
  }, false);
}; // .photonic-password-submit


exports.addLevel2ClickListener = addLevel2ClickListener;

var addPasswordSubmitListener = function addPasswordSubmitListener() {
  document.addEventListener('click', function (e) {
    if (!(e.target instanceof Element) || !e.target.closest('.photonic-password-submit')) {
      return;
    }

    e.preventDefault();
    var clicked = e.target.closest('.photonic-password-submit');
    var modal = clicked.closest('.photonic-password-prompter'),
        container = clicked.closest('.photonic-level-2-container');
    var album_id = modal.getAttribute('id');
    var components = album_id.split('-');
    var provider = components[1],
        singular_type = components[2],
        album_key = components.slice(4).join('-'),
        thumb_id = "photonic-".concat(provider, "-").concat(singular_type, "-thumb-").concat(album_key),
        thumb = document.getElementById("".concat(thumb_id)),
        query = container.getAttribute('data-photonic-query');
    var password = modal.querySelector('input[name="photonic-' + provider + '-password"]');
    password = password.value;

    var prompter = _Core.Core.prompterList["#photonic-".concat(provider, "-").concat(singular_type, "-prompter-").concat(album_key)];

    if (prompter !== undefined && prompter !== null) {
      prompter.hide();
    }

    _Core.Core.showSpinner();

    var args = {
      'panel_id': thumb_id,
      "popup": thumb.getAttribute('data-photonic-popup'),
      "photo_count": thumb.getAttribute('data-photonic-photo-count'),
      "photo_more": thumb.getAttribute('data-photonic-photo-more'),
      "query": query
    };

    if (provider === 'smug') {
      args.password = password;
      args.overlay_size = thumb.getAttribute('data-photonic-overlay-size');
    } else if (provider === 'zenfolio') {
      args.password = password;
      args.realm_id = thumb.getAttribute('data-photonic-realm');
      args.thumb_size = thumb.getAttribute('data-photonic-thumb-size');
      args.overlay_size = thumb.getAttribute('data-photonic-overlay-size');
      args.overlay_video_size = clicked.getAttribute('data-photonic-overlay-video-size');
    }

    Requests.processRequest(provider, singular_type, album_key, args);
  }, false);
}; // a.photonic-level-3-expand


exports.addPasswordSubmitListener = addPasswordSubmitListener;

var addLevel3ExpandListener = function addLevel3ExpandListener() {
  document.addEventListener('click', function (e) {
    if (!(e.target instanceof Element) || !e.target.closest('a.photonic-level-3-expand')) {
      return;
    }

    e.preventDefault();
    var current = e.target.closest('a.photonic-level-3-expand'),
        header = current.parentNode.parentNode.parentNode,
        stream = header.parentNode;

    if (current.classList.contains('photonic-level-3-expand-plus')) {
      Requests.processL3Request(current, header, {
        'view': 'collections',
        'node': current.getAttribute('data-photonic-level-3'),
        'layout': current.getAttribute('data-photonic-layout'),
        'stream': stream.getAttribute('id')
      });
    } else if (current.classList.contains('photonic-level-3-expand-up')) {
      var display = Util.next(header, '.photonic-stream');
      Util.slideUpDown(display, 'hide');
      current.classList.remove('photonic-level-3-expand-up');
      current.classList.add('photonic-level-3-expand-down');
      current.setAttribute('title', Photonic_JS.maximize_panel === undefined ? 'Show' : Photonic_JS.maximize_panel);
    } else if (current.classList.contains('photonic-level-3-expand-down')) {
      var _display = Util.next(header, '.photonic-stream'); // Util.slideDown(display);


      Util.slideUpDown(_display, 'show');
      current.classList.remove('photonic-level-3-expand-down');
      current.classList.add('photonic-level-3-expand-up');
      current.setAttribute('title', Photonic_JS.minimize_panel === undefined ? 'Hide' : Photonic_JS.minimize_panel);
    }
  }, false);
}; // a.photonic-more-button.photonic-more-dynamic


exports.addLevel3ExpandListener = addLevel3ExpandListener;

var addMoreButtonListener = function addMoreButtonListener() {
  document.addEventListener('click', function (e) {
    if (!(e.target instanceof Element) || !e.target.closest('a.photonic-more-button.photonic-more-dynamic')) {
      return;
    }

    e.preventDefault();
    var clicked = e.target.closest('a.photonic-more-button.photonic-more-dynamic');
    var container = clicked.parentNode.querySelector('.photonic-level-1-container, .photonic-level-2-container');
    var query = container.getAttribute('data-photonic-query'),
        provider = container.getAttribute('data-photonic-platform'),
        level = container.classList.contains('photonic-level-1-container') ? 'level-1' : 'level-2',
        containerId = container.getAttribute('id');

    _Core.Core.showSpinner();

    Util.post(Photonic_JS.ajaxurl, {
      'action': 'photonic_load_more',
      'provider': provider,
      'query': query
    }, function (data) {
      var ret = Util.getElement(data),
          images = ret.querySelectorAll(".photonic-".concat(level)),
          more_button = ret.querySelector('.photonic-more-button'),
          one_existing = container.querySelector('a.photonic-launch-gallery');
      var anchors = [];

      if (one_existing !== null) {
        images.forEach(function (image) {
          var a = image.querySelector('a');

          if (a !== null) {
            a.setAttribute('rel', one_existing.getAttribute('rel'));

            if (a.getAttribute('data-fancybox') != null) {
              a.setAttribute('data-fancybox', one_existing.getAttribute('data-fancybox'));
            } else if (a.getAttribute('data-rel') != null) {
              a.setAttribute('data-rel', one_existing.getAttribute('data-rel'));
            } else if (a.getAttribute('data-strip-group') != null) {
              a.setAttribute('data-strip-group', one_existing.getAttribute('data-strip-group'));
            }

            anchors.push(a);
          }
        });
      } // Can't do this above, which is only for L1


      images.forEach(function (image) {
        return container.appendChild(image);
      });

      _Core.Core.moveHTML5External();

      if (images.length === 0) {
        _Core.Core.hideLoading();

        Util.fadeOut(clicked);
        clicked.remove();
      }

      var lightbox = _Core.Core.getLightbox();

      if (Photonic_JS.slideshow_library === 'imagelightbox') {
        if (one_existing != null) {
          lightbox = _Core.Core.getLightboxList()['a[rel="' + one_existing.getAttribute('rel') + '"]'];

          if (level === 'level-1') {
            lightbox.addToImageLightbox(anchors);
          }
        }
      } else if (Photonic_JS.slideshow_library === 'lightcase') {
        if (one_existing != null) {
          lightbox.initialize('a[data-rel="' + one_existing.getAttribute('data-rel') + '"]');
        }
      } else if (['bigpicture', 'featherlight', 'glightbox', 'lightgallery'].includes(Photonic_JS.slideshow_library)) {
        lightbox.initialize(container);
      } else if (Photonic_JS.slideshow_library === 'baguettebox') {
        lightbox.initialize(null, true);
      } else if (Photonic_JS.slideshow_library === 'fancybox3') {
        if (one_existing != null) {
          lightbox.initialize(null, one_existing.getAttribute('data-fancybox'));
        }
      } else if (Photonic_JS.slideshow_library === 'photoswipe') {
        lightbox.initialize();
      }

      _Core.Core.waitForImages(images).then(function () {
        var new_query = ret.querySelector('.photonic-random-layout,.photonic-standard-layout,.photonic-masonry-layout,.photonic-mosaic-layout,.modal-gallery');

        if (new_query != null) {
          container.setAttribute('data-photonic-query', new_query.getAttribute('data-photonic-query'));
        }

        if (more_button == null) {
          Util.fadeOut(clicked);
          clicked.remove();
        }

        if (Util.hasClass(container, 'photonic-mosaic-layout')) {
          (0, _Mosaic.Mosaic)(false, false, '#' + containerId);
        } else if (Util.hasClass(container, 'photonic-random-layout')) {
          (0, _Justified.JustifiedGrid)(false, false, '#' + containerId, lightbox);
        } else if (Util.hasClass(container, 'photonic-masonry-layout')) {
          images.forEach(function (image) {
            var img = image.querySelector('img');
            Util.fadeIn(img);
            img.style.display = 'block';
          });

          _Core.Core.hideLoading();
        } else {
          container.querySelectorAll('.photonic-' + level).forEach(function (el) {
            el.style.display = 'inline-block';
          });

          _Core.Core.standardizeTitleWidths();

          _Core.Core.hideLoading();
        }

        (0, _Tooltip.Tooltip)('[data-photonic-tooltip]', '.photonic-tooltip-container');
      });
    });
  });
}; // input[type="button"].photonic-helper-more


exports.addMoreButtonListener = addMoreButtonListener;

var addHelperMoreButtonListener = function addHelperMoreButtonListener() {
  document.addEventListener('click', function (e) {
    if (!(e.target instanceof Element) || !e.target.closest('input[type="button"].photonic-helper-more')) {
      return;
    }

    e.preventDefault();

    _Core.Core.showSpinner();

    var clicked = e.target.closest('input[type="button"].photonic-helper-more');
    var table = clicked.closest('table');
    var nextToken = clicked.getAttribute('data-photonic-token') === undefined ? null : clicked.getAttribute('data-photonic-token'),
        provider = clicked.getAttribute('data-photonic-platform'),
        accessType = clicked.getAttribute('data-photonic-access');
    var args = {
      'action': 'photonic_helper_shortcode_more',
      'provider': provider,
      'access': accessType
    };

    if (nextToken) {
      args.nextPageToken = nextToken;
    }

    if (provider === 'google') {
      Util.post(Photonic_JS.ajaxurl, args, function (data) {
        var ret = Util.getElement(data);
        ret = Array.from(ret.getElementsByTagName('tr'));

        if (ret.length > 0) {
          var tr = clicked.closest('tr');

          if (tr) {
            tr.remove();
          }

          ret.forEach(function (node, i) {
            if (i !== 0) {
              table.appendChild(node);
            }
          });
        }

        (0, _Tooltip.Tooltip)('[data-photonic-tooltip]', '.photonic-tooltip-container');

        _Core.Core.hideLoading();
      });
    }
  });
};

exports.addHelperMoreButtonListener = addHelperMoreButtonListener;

var addSlideUpEnterListener = function addSlideUpEnterListener() {
  document.addEventListener('mouseover', function (e) {
    var slideup = '.title-display-hover-slideup-show a, .photonic-slideshow.title-display-hover-slideup-show li';

    if (e.target instanceof Element && e.target.closest(slideup)) {
      var node = e.target.closest(slideup);
      var title = node.querySelector('.photonic-title');
      Util.slideUpTitle(title, 'show');
      node.setAttribute('title', '');
    }
  }, true);
};

exports.addSlideUpEnterListener = addSlideUpEnterListener;

var addSlideUpLeaveListener = function addSlideUpLeaveListener() {
  document.addEventListener('mouseout', function (e) {
    var slideup = '.title-display-hover-slideup-show a, .photonic-slideshow.title-display-hover-slideup-show li';

    if (e.target instanceof Element && e.target.closest(slideup)) {
      var node = e.target.closest(slideup);
      var title = node.querySelector('.photonic-title');
      Util.slideUpTitle(title, 'hide');
      node.setAttribute('title', Util.getText(node.getAttribute('data-title')));
    }
  }, true);
};

exports.addSlideUpLeaveListener = addSlideUpLeaveListener;

var addLazyLoadListener = function addLazyLoadListener() {
  var buttons = document.documentElement.querySelectorAll('input.photonic-show-gallery-button');
  Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener('click', Requests.lazyLoad);
  });
  buttons = document.documentElement.querySelectorAll('input.photonic-js-load-button');
  Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener('click', Requests.lazyLoad);
    button.click();
  });
};

exports.addLazyLoadListener = addLazyLoadListener;

var addAllListeners = function addAllListeners() {
  addLevel2ClickListener();
  addPasswordSubmitListener();
  addLevel3ExpandListener();
  addMoreButtonListener();
  addHelperMoreButtonListener();
  addSlideUpEnterListener();
  addSlideUpLeaveListener();
  addLazyLoadListener();
};

exports.addAllListeners = addAllListeners;

/***/ }),

/***/ "../include/js/front-end/src/Polyfill.js":
/*!***********************************************!*\
  !*** ../include/js/front-end/src/Polyfill.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__.g, __webpack_require__.* */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



// Element.matches() polyfill
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i = matches.length;

    while (--i >= 0 && matches.item(i) !== this) {}

    return i > -1;
  };
} // Element.closest()


if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;

    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
} // Element.classList


if ("document" in self) {
  // Full polyfill for browsers with no classList support
  // Including IE < Edge missing SVGElement.classList
  if (!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {
    (function (view) {
      "use strict";

      if (!('Element' in view)) return;

      var classListProp = "classList",
          protoProp = "prototype",
          elemCtrProto = view.Element[protoProp],
          objCtr = Object,
          strTrim = String[protoProp].trim || function () {
        return this.replace(/^\s+|\s+$/g, "");
      },
          arrIndexOf = Array[protoProp].indexOf || function (item) {
        var i = 0,
            len = this.length;

        for (; i < len; i++) {
          if (i in this && this[i] === item) {
            return i;
          }
        }

        return -1;
      } // Vendors: please allow content code to instantiate DOMExceptions
      ,
          DOMEx = function DOMEx(type, message) {
        this.name = type;
        this.code = DOMException[type];
        this.message = message;
      },
          checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
        if (token === "") {
          throw new DOMEx("SYNTAX_ERR", "An invalid or illegal string was specified");
        }

        if (/\s/.test(token)) {
          throw new DOMEx("INVALID_CHARACTER_ERR", "String contains an invalid character");
        }

        return arrIndexOf.call(classList, token);
      },
          ClassList = function ClassList(elem) {
        var trimmedClasses = strTrim.call(elem.getAttribute("class") || ""),
            classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
            i = 0,
            len = classes.length;

        for (; i < len; i++) {
          this.push(classes[i]);
        }

        this._updateClassName = function () {
          elem.setAttribute("class", this.toString());
        };
      },
          classListProto = ClassList[protoProp] = [],
          classListGetter = function classListGetter() {
        return new ClassList(this);
      }; // Most DOMException implementations don't allow calling DOMException's toString()
      // on non-DOMExceptions. Error's toString() is sufficient here.


      DOMEx[protoProp] = Error[protoProp];

      classListProto.item = function (i) {
        return this[i] || null;
      };

      classListProto.contains = function (token) {
        token += "";
        return checkTokenAndGetIndex(this, token) !== -1;
      };

      classListProto.add = function () {
        var tokens = arguments,
            i = 0,
            l = tokens.length,
            token,
            updated = false;

        do {
          token = tokens[i] + "";

          if (checkTokenAndGetIndex(this, token) === -1) {
            this.push(token);
            updated = true;
          }
        } while (++i < l);

        if (updated) {
          this._updateClassName();
        }
      };

      classListProto.remove = function () {
        var tokens = arguments,
            i = 0,
            l = tokens.length,
            token,
            updated = false,
            index;

        do {
          token = tokens[i] + "";
          index = checkTokenAndGetIndex(this, token);

          while (index !== -1) {
            this.splice(index, 1);
            updated = true;
            index = checkTokenAndGetIndex(this, token);
          }
        } while (++i < l);

        if (updated) {
          this._updateClassName();
        }
      };

      classListProto.toggle = function (token, force) {
        token += "";
        var result = this.contains(token),
            method = result ? force !== true && "remove" : force !== false && "add";

        if (method) {
          this[method](token);
        }

        if (force === true || force === false) {
          return force;
        } else {
          return !result;
        }
      };

      classListProto.toString = function () {
        return this.join(" ");
      };

      if (objCtr.defineProperty) {
        var classListPropDesc = {
          get: classListGetter,
          enumerable: true,
          configurable: true
        };

        try {
          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
        } catch (ex) {
          // IE 8 doesn't support enumerable:true
          // adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
          // modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
          if (ex.number === undefined || ex.number === -0x7FF5EC54) {
            classListPropDesc.enumerable = false;
            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
          }
        }
      } else if (objCtr[protoProp].__defineGetter__) {
        elemCtrProto.__defineGetter__(classListProp, classListGetter);
      }
    })(self);
  } // There is full or partial native classList support, so just check if we need
  // to normalize the add/remove and toggle APIs.


  (function () {
    "use strict";

    var testElement = document.createElement("_");
    testElement.classList.add("c1", "c2"); // Polyfill for IE 10/11 and Firefox <26, where classList.add and
    // classList.remove exist but support only one argument at a time.

    if (!testElement.classList.contains("c2")) {
      var createMethod = function createMethod(method) {
        var original = DOMTokenList.prototype[method];

        DOMTokenList.prototype[method] = function (token) {
          var i,
              len = arguments.length;

          for (i = 0; i < len; i++) {
            token = arguments[i];
            original.call(this, token);
          }
        };
      };

      createMethod('add');
      createMethod('remove');
    }

    testElement.classList.toggle("c3", false); // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
    // support the second argument.

    if (testElement.classList.contains("c3")) {
      var _toggle = DOMTokenList.prototype.toggle;

      DOMTokenList.prototype.toggle = function (token, force) {
        if (1 in arguments && !this.contains(token) === !force) {
          return force;
        } else {
          return _toggle.call(this, token);
        }
      };
    }

    testElement = null;
  })();
} // Array.from


if (!Array.from) {
  Array.from = function () {
    var symbolIterator;

    try {
      symbolIterator = Symbol.iterator ? Symbol.iterator : 'Symbol(Symbol.iterator)';
    } catch (e) {
      symbolIterator = 'Symbol(Symbol.iterator)';
    }

    var toStr = Object.prototype.toString;

    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };

    var toInteger = function toInteger(value) {
      var number = Number(value);
      if (isNaN(number)) return 0;
      if (number === 0 || !isFinite(number)) return number;
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };

    var maxSafeInteger = Math.pow(2, 53) - 1;

    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    var setGetItemHandler = function setGetItemHandler(isIterator, items) {
      var iterator = isIterator && items[symbolIterator]();
      return function getItem(k) {
        return isIterator ? iterator.next() : items[k];
      };
    };

    var getArray = function getArray(T, A, len, getItem, isIterator, mapFn) {
      // 16. Let k be 0.
      var k = 0; // 17. Repeat, while k < len??? or while iterator is done (also steps a - h)

      while (k < len || isIterator) {
        var item = getItem(k);
        var kValue = isIterator ? item.value : item;

        if (isIterator && item.done) {
          return A;
        } else {
          if (mapFn) {
            A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
          } else {
            A[k] = kValue;
          }
        }

        k += 1;
      }

      if (isIterator) {
        throw new TypeError('Array.from: provided arrayLike or iterator has length more then 2 ** 52 - 1');
      } else {
        A.length = len;
      }

      return A;
    }; // The length property of the from method is 1.


    return function from(arrayLikeOrIterator
    /*, mapFn, thisArg */
    ) {
      // 1. Let C be the this value.
      var C = this; // 2. Let items be ToObject(arrayLikeOrIterator).

      var items = Object(arrayLikeOrIterator);
      var isIterator = isCallable(items[symbolIterator]); // 3. ReturnIfAbrupt(items).

      if (arrayLikeOrIterator == null && !isIterator) {
        throw new TypeError('Array.from requires an array-like object or iterator - not null or undefined');
      } // 4. If mapfn is undefined, then let mapping be false.


      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;

      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


        if (arguments.length > 2) {
          T = arguments[2];
        }
      } // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).


      var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).

      var A = isCallable(C) ? Object(new C(len)) : new Array(len);
      return getArray(T, A, len, setGetItemHandler(isIterator, items), isIterator, mapFn);
    };
  }();
} // Array.forEach


if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
} // Array.includes


if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function value(searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      } // 1. Let O be ? ToObject(this value).


      var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

      var len = o.length >>> 0; // 3. If len is 0, return false.

      if (len === 0) {
        return false;
      } // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)


      var n = fromIndex | 0; // 5. If n ??? 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.

      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
      } // 7. Repeat, while k < len


      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        if (sameValueZero(o[k], searchElement)) {
          return true;
        } // c. Increase k by 1.


        k++;
      } // 8. Return false


      return false;
    }
  });
} // NodeList.forEach


if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
} // String.includes


if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    'use strict';

    if (search instanceof RegExp) {
      throw TypeError('first argument must not be a RegExp');
    }

    if (start === undefined) {
      start = 0;
    }

    return this.indexOf(search, start) !== -1;
  };
} // Object.entries


if (!Object.entries) {
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array

    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    }

    return resArray;
  };
} // Object.assign


if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) {
      // .length of function is 2
      'use strict';

      if (target === null || target === undefined) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    },
    writable: true,
    configurable: true
  });
} // Promise, from https://github.com/taylorhakes/promise-polyfill


(function (global, factory) {
   true ? factory() : 0;
})(void 0, function () {
  'use strict';
  /**
   * @this {Promise}
   */

  function finallyConstructor(callback) {
    var constructor = this.constructor;
    return this.then(function (value) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      // @ts-ignore
      return constructor.resolve(callback()).then(function () {
        // @ts-ignore
        return constructor.reject(reason);
      });
    });
  }

  function allSettled(arr) {
    var P = this;
    return new P(function (resolve, reject) {
      if (!(arr && typeof arr.length !== 'undefined')) {
        return reject(new TypeError(typeof arr + ' ' + arr + ' is not iterable(cannot read property Symbol(Symbol.iterator))'));
      }

      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;

          if (typeof then === 'function') {
            then.call(val, function (val) {
              res(i, val);
            }, function (e) {
              args[i] = {
                status: 'rejected',
                reason: e
              };

              if (--remaining === 0) {
                resolve(args);
              }
            });
            return;
          }
        }

        args[i] = {
          status: 'fulfilled',
          value: val
        };

        if (--remaining === 0) {
          resolve(args);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  } // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())


  var setTimeoutFunc = setTimeout;

  function isArray(x) {
    return Boolean(x && typeof x.length !== 'undefined');
  }

  function noop() {} // Polyfill for Function.prototype.bind


  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }
  /**
   * @constructor
   * @param {Function} fn
   */


  function Promise(fn) {
    if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    /** @type {!number} */

    this._state = 0;
    /** @type {!boolean} */

    this._handled = false;
    /** @type {Promise|undefined} */

    this._value = undefined;
    /** @type {!Array<!Function>} */

    this._deferreds = [];
    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }

    if (self._state === 0) {
      self._deferreds.push(deferred);

      return;
    }

    self._handled = true;

    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;

      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }

      var ret;

      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }

      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');

      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;

        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }

      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function () {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }

    self._deferreds = null;
  }
  /**
   * @constructor
   */


  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }
  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */


  function doResolve(fn, self) {
    var done = false;

    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    // @ts-ignore
    var prom = new this.constructor(noop);
    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.prototype['finally'] = finallyConstructor;

  Promise.all = function (arr) {
    return new Promise(function (resolve, reject) {
      if (!isArray(arr)) {
        return reject(new TypeError('Promise.all accepts an array'));
      }

      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;

            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }

          args[i] = val;

          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.allSettled = allSettled;

  Promise.resolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (arr) {
    return new Promise(function (resolve, reject) {
      if (!isArray(arr)) {
        return reject(new TypeError('Promise.race accepts an array'));
      }

      for (var i = 0, len = arr.length; i < len; i++) {
        Promise.resolve(arr[i]).then(resolve, reject);
      }
    });
  }; // Use polyfill for setImmediate for performance gains


  Promise._immediateFn = // @ts-ignore
  typeof setImmediate === 'function' && function (fn) {
    // @ts-ignore
    setImmediate(fn);
  } || function (fn) {
    setTimeoutFunc(fn, 0);
  };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };
  /** @suppress {undefinedVars} */


  var globalNS = function () {
    // the only reliable means to get the global object is
    // `Function('return this')()`
    // However, this causes CSP violations in Chrome apps.
    if (typeof self !== 'undefined') {
      return self;
    }

    if (typeof window !== 'undefined') {
      return window;
    }

    if (typeof __webpack_require__.g !== 'undefined') {
      return __webpack_require__.g;
    }

    throw new Error('unable to locate global object');
  }(); // Expose the polyfill if Promise is undefined or set to a
  // non-function value. The latter can be due to a named HTMLElement
  // being exposed by browsers for legacy reasons.
  // https://github.com/taylorhakes/promise-polyfill/issues/114


  if (typeof globalNS['Promise'] !== 'function') {
    globalNS['Promise'] = Promise;
  } else if (!globalNS.Promise.prototype['finally']) {
    globalNS.Promise.prototype['finally'] = finallyConstructor;
  } else if (!globalNS.Promise.allSettled) {
    globalNS.Promise.allSettled = allSettled;
  }
}); // MouseEvent


(function (window) {
  try {
    new MouseEvent('test');
    return false; // No need to polyfill
  } catch (e) {// Need to polyfill - fall through
  } // Polyfills DOM4 MouseEvent


  var MouseEventPolyfill = function MouseEventPolyfill(eventType, params) {
    params = params || {
      bubbles: false,
      cancelable: false
    };
    var mouseEvent = document.createEvent('MouseEvent');
    mouseEvent.initMouseEvent(eventType, params.bubbles, params.cancelable, window, 0, params.screenX || 0, params.screenY || 0, params.clientX || 0, params.clientY || 0, params.ctrlKey || false, params.altKey || false, params.shiftKey || false, params.metaKey || false, params.button || 0, params.relatedTarget || null);
    return mouseEvent;
  };

  MouseEventPolyfill.prototype = Event.prototype;
  window.MouseEvent = MouseEventPolyfill;
})(window); // ChildNode.remove
// from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md


(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('remove')) {
      return;
    }

    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
/**
 * URL Polyfill
 * Draft specification: https://url.spec.whatwg.org
 * https://polyfill.io/
 */


(function (global) {
  'use strict';

  function isSequence(o) {
    if (!o) return false;
    if ('Symbol' in global && 'iterator' in global.Symbol && typeof o[Symbol.iterator] === 'function') return true;
    if (Array.isArray(o)) return true;
    return false;
  }

  function toArray(iter) {
    return 'from' in Array ? Array.from(iter) : Array.prototype.slice.call(iter);
  }

  (function () {
    // Browsers may have:
    // * No global URL object
    // * URL with static methods only - may have a dummy constructor
    // * URL with members except searchParams
    // * Full URL API support
    var origURL = global.URL;
    var nativeURL;

    try {
      if (origURL) {
        nativeURL = new global.URL('http://example.com');

        if ('searchParams' in nativeURL) {
          var url = new URL('http://example.com');
          url.search = 'a=1&b=2';

          if (url.href === 'http://example.com/?a=1&b=2') {
            url.search = '';

            if (url.href === 'http://example.com/') {
              return;
            }
          }
        }

        if (!('href' in nativeURL)) {
          nativeURL = undefined;
        }

        nativeURL = undefined;
      } // eslint-disable-next-line no-empty

    } catch (_) {} // NOTE: Doesn't do the encoding/decoding dance


    function urlencoded_serialize(pairs) {
      var output = '',
          first = true;
      pairs.forEach(function (pair) {
        var name = encodeURIComponent(pair.name);
        var value = encodeURIComponent(pair.value);
        if (!first) output += '&';
        output += name + '=' + value;
        first = false;
      });
      return output.replace(/%20/g, '+');
    } // NOTE: Doesn't do the encoding/decoding dance


    function urlencoded_parse(input, isindex) {
      var sequences = input.split('&');
      if (isindex && sequences[0].indexOf('=') === -1) sequences[0] = '=' + sequences[0];
      var pairs = [];
      sequences.forEach(function (bytes) {
        if (bytes.length === 0) return;
        var index = bytes.indexOf('=');

        if (index !== -1) {
          var name = bytes.substring(0, index);
          var value = bytes.substring(index + 1);
        } else {
          name = bytes;
          value = '';
        }

        name = name.replace(/\+/g, ' ');
        value = value.replace(/\+/g, ' ');
        pairs.push({
          name: name,
          value: value
        });
      });
      var output = [];
      pairs.forEach(function (pair) {
        output.push({
          name: decodeURIComponent(pair.name),
          value: decodeURIComponent(pair.value)
        });
      });
      return output;
    }

    function URLUtils(url) {
      if (nativeURL) return new origURL(url);
      var anchor = document.createElement('a');
      anchor.href = url;
      return anchor;
    }

    function URLSearchParams(init) {
      var $this = this;
      this._list = [];

      if (init === undefined || init === null) {// no-op
      } else if (init instanceof URLSearchParams) {
        // In ES6 init would be a sequence, but special case for ES5.
        this._list = urlencoded_parse(String(init));
      } else if (typeof init === 'object' && isSequence(init)) {
        toArray(init).forEach(function (e) {
          if (!isSequence(e)) throw TypeError();
          var nv = toArray(e);
          if (nv.length !== 2) throw TypeError();

          $this._list.push({
            name: String(nv[0]),
            value: String(nv[1])
          });
        });
      } else if (typeof init === 'object' && init) {
        Object.keys(init).forEach(function (key) {
          $this._list.push({
            name: String(key),
            value: String(init[key])
          });
        });
      } else {
        init = String(init);
        if (init.substring(0, 1) === '?') init = init.substring(1);
        this._list = urlencoded_parse(init);
      }

      this._url_object = null;

      this._setList = function (list) {
        if (!updating) $this._list = list;
      };

      var updating = false;

      this._update_steps = function () {
        if (updating) return;
        updating = true;
        if (!$this._url_object) return; // Partial workaround for IE issue with 'about:'

        if ($this._url_object.protocol === 'about:' && $this._url_object.pathname.indexOf('?') !== -1) {
          $this._url_object.pathname = $this._url_object.pathname.split('?')[0];
        }

        $this._url_object.search = urlencoded_serialize($this._list);
        updating = false;
      };
    }

    Object.defineProperties(URLSearchParams.prototype, {
      append: {
        value: function value(name, _value) {
          this._list.push({
            name: name,
            value: _value
          });

          this._update_steps();
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      'delete': {
        value: function value(name) {
          for (var i = 0; i < this._list.length;) {
            if (this._list[i].name === name) this._list.splice(i, 1);else ++i;
          }

          this._update_steps();
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      get: {
        value: function value(name) {
          for (var i = 0; i < this._list.length; ++i) {
            if (this._list[i].name === name) return this._list[i].value;
          }

          return null;
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      getAll: {
        value: function value(name) {
          var result = [];

          for (var i = 0; i < this._list.length; ++i) {
            if (this._list[i].name === name) result.push(this._list[i].value);
          }

          return result;
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      has: {
        value: function value(name) {
          for (var i = 0; i < this._list.length; ++i) {
            if (this._list[i].name === name) return true;
          }

          return false;
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      set: {
        value: function value(name, _value2) {
          var found = false;

          for (var i = 0; i < this._list.length;) {
            if (this._list[i].name === name) {
              if (!found) {
                this._list[i].value = _value2;
                found = true;
                ++i;
              } else {
                this._list.splice(i, 1);
              }
            } else {
              ++i;
            }
          }

          if (!found) this._list.push({
            name: name,
            value: _value2
          });

          this._update_steps();
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      entries: {
        value: function value() {
          return new Iterator(this._list, 'key+value');
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      keys: {
        value: function value() {
          return new Iterator(this._list, 'key');
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      values: {
        value: function value() {
          return new Iterator(this._list, 'value');
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      forEach: {
        value: function value(callback) {
          var thisArg = arguments.length > 1 ? arguments[1] : undefined;

          this._list.forEach(function (pair) {
            callback.call(thisArg, pair.value, pair.name);
          });
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      toString: {
        value: function value() {
          return urlencoded_serialize(this._list);
        },
        writable: true,
        enumerable: false,
        configurable: true
      }
    });

    function Iterator(source, kind) {
      var index = 0;

      this.next = function () {
        if (index >= source.length) return {
          done: true,
          value: undefined
        };
        var pair = source[index++];
        return {
          done: false,
          value: kind === 'key' ? pair.name : kind === 'value' ? pair.value : [pair.name, pair.value]
        };
      };
    }

    if ('Symbol' in global && 'iterator' in global.Symbol) {
      Object.defineProperty(URLSearchParams.prototype, global.Symbol.iterator, {
        value: URLSearchParams.prototype.entries,
        writable: true,
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Iterator.prototype, global.Symbol.iterator, {
        value: function value() {
          return this;
        },
        writable: true,
        enumerable: true,
        configurable: true
      });
    }

    function URL(url, base) {
      if (!(this instanceof global.URL)) throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.");

      if (base) {
        url = function () {
          if (nativeURL) return new origURL(url, base).href;
          var iframe;

          try {
            var doc; // Use another document/base tag/anchor for relative URL resolution, if possible

            if (Object.prototype.toString.call(window.operamini) === "[object OperaMini]") {
              iframe = document.createElement('iframe');
              iframe.style.display = 'none';
              document.documentElement.appendChild(iframe);
              doc = iframe.contentWindow.document;
            } else if (document.implementation && document.implementation.createHTMLDocument) {
              doc = document.implementation.createHTMLDocument('');
            } else if (document.implementation && document.implementation.createDocument) {
              doc = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
              doc.documentElement.appendChild(doc.createElement('head'));
              doc.documentElement.appendChild(doc.createElement('body'));
            } else if (window.ActiveXObject) {
              doc = new window.ActiveXObject('htmlfile');
              doc.write('<head></head><body></body>');
              doc.close();
            }

            if (!doc) throw Error('base not supported');
            var baseTag = doc.createElement('base');
            baseTag.href = base;
            doc.getElementsByTagName('head')[0].appendChild(baseTag);
            var anchor = doc.createElement('a');
            anchor.href = url;
            return anchor.href;
          } finally {
            if (iframe) iframe.parentNode.removeChild(iframe);
          }
        }();
      } // An inner object implementing URLUtils (either a native URL
      // object or an HTMLAnchorElement instance) is used to perform the
      // URL algorithms. With full ES5 getter/setter support, return a
      // regular object For IE8's limited getter/setter support, a
      // different HTMLAnchorElement is returned with properties
      // overridden


      var instance = URLUtils(url || ''); // Detect for ES5 getter/setter support
      // (an Object.defineProperties polyfill that doesn't support getters/setters may throw)

      var ES5_GET_SET = function () {
        if (!('defineProperties' in Object)) return false;

        try {
          var obj = {};
          Object.defineProperties(obj, {
            prop: {
              get: function get() {
                return true;
              }
            }
          });
          return obj.prop;
        } catch (_) {
          return false;
        }
      }();

      var self = ES5_GET_SET ? this : document.createElement('a');
      var query_object = new URLSearchParams(instance.search ? instance.search.substring(1) : null);
      query_object._url_object = self;
      Object.defineProperties(self, {
        href: {
          get: function get() {
            return instance.href;
          },
          set: function set(v) {
            instance.href = v;
            tidy_instance();
            update_steps();
          },
          enumerable: true,
          configurable: true
        },
        origin: {
          get: function get() {
            if ('origin' in instance) return instance.origin;
            return this.protocol + '//' + this.host;
          },
          enumerable: true,
          configurable: true
        },
        protocol: {
          get: function get() {
            return instance.protocol;
          },
          set: function set(v) {
            instance.protocol = v;
          },
          enumerable: true,
          configurable: true
        },
        username: {
          get: function get() {
            return instance.username;
          },
          set: function set(v) {
            instance.username = v;
          },
          enumerable: true,
          configurable: true
        },
        password: {
          get: function get() {
            return instance.password;
          },
          set: function set(v) {
            instance.password = v;
          },
          enumerable: true,
          configurable: true
        },
        host: {
          get: function get() {
            // IE returns default port in |host|
            var re = {
              'http:': /:80$/,
              'https:': /:443$/,
              'ftp:': /:21$/
            }[instance.protocol];
            return re ? instance.host.replace(re, '') : instance.host;
          },
          set: function set(v) {
            instance.host = v;
          },
          enumerable: true,
          configurable: true
        },
        hostname: {
          get: function get() {
            return instance.hostname;
          },
          set: function set(v) {
            instance.hostname = v;
          },
          enumerable: true,
          configurable: true
        },
        port: {
          get: function get() {
            return instance.port;
          },
          set: function set(v) {
            instance.port = v;
          },
          enumerable: true,
          configurable: true
        },
        pathname: {
          get: function get() {
            // IE does not include leading '/' in |pathname|
            if (instance.pathname.charAt(0) !== '/') return '/' + instance.pathname;
            return instance.pathname;
          },
          set: function set(v) {
            instance.pathname = v;
          },
          enumerable: true,
          configurable: true
        },
        search: {
          get: function get() {
            return instance.search;
          },
          set: function set(v) {
            if (instance.search === v) return;
            instance.search = v;
            tidy_instance();
            update_steps();
          },
          enumerable: true,
          configurable: true
        },
        searchParams: {
          get: function get() {
            return query_object;
          },
          enumerable: true,
          configurable: true
        },
        hash: {
          get: function get() {
            return instance.hash;
          },
          set: function set(v) {
            instance.hash = v;
            tidy_instance();
          },
          enumerable: true,
          configurable: true
        },
        toString: {
          value: function value() {
            return instance.toString();
          },
          enumerable: false,
          configurable: true
        },
        valueOf: {
          value: function value() {
            return instance.valueOf();
          },
          enumerable: false,
          configurable: true
        }
      });

      function tidy_instance() {
        var href = instance.href.replace(/#$|\?$|\?(?=#)/g, '');
        if (instance.href !== href) instance.href = href;
      }

      function update_steps() {
        query_object._setList(instance.search ? urlencoded_parse(instance.search.substring(1)) : []);

        query_object._update_steps();
      }

      return self;
    }

    if (origURL) {
      for (var i in origURL) {
        if (Object.prototype.hasOwnProperty.call(origURL, i) && typeof origURL[i] === 'function') URL[i] = origURL[i];
      }
    }

    global.URL = URL;
    global.URLSearchParams = URLSearchParams;
  })(); // Patch native URLSearchParams constructor to handle sequences/records
  // if necessary.


  (function () {
    if (new global.URLSearchParams([['a', 1]]).get('a') === '1' && new global.URLSearchParams({
      a: 1
    }).get('a') === '1') return;
    var orig = global.URLSearchParams;

    global.URLSearchParams = function (init) {
      if (init && typeof init === 'object' && isSequence(init)) {
        var o = new orig();
        toArray(init).forEach(function (e) {
          if (!isSequence(e)) throw TypeError();
          var nv = toArray(e);
          if (nv.length !== 2) throw TypeError();
          o.append(nv[0], nv[1]);
        });
        return o;
      } else if (init && typeof init === 'object') {
        o = new orig();
        Object.keys(init).forEach(function (key) {
          o.set(key, init[key]);
        });
        return o;
      } else {
        return new orig(init);
      }
    };
  })();
})(self); // Event, CustomEvent


(function () {
  if (typeof window.CustomEvent === "function") return false;

  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: null
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  window.CustomEvent = CustomEvent;
  window.Event = CustomEvent;
})();

/***/ }),

/***/ "../include/js/front-end/src/Requests.js":
/*!***********************************************!*\
  !*** ../include/js/front-end/src/Requests.js ***!
  \***********************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export displayLevel2 [provided] [no usage info] [missing usage info prevents renaming] */
/*! export lazyLoad [provided] [no usage info] [missing usage info prevents renaming] */
/*! export processL3Request [provided] [no usage info] [missing usage info prevents renaming] */
/*! export processRequest [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../../../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.lazyLoad = exports.processL3Request = exports.displayLevel2 = exports.processRequest = void 0;

var _Core = __webpack_require__(/*! ./Core */ "../include/js/front-end/src/Core.js");

var Util = _interopRequireWildcard(__webpack_require__(/*! ./Util */ "../include/js/front-end/src/Util.js"));

var _Justified = __webpack_require__(/*! ./Layouts/Justified */ "../include/js/front-end/src/Layouts/Justified.js");

var _Masonry = __webpack_require__(/*! ./Layouts/Masonry */ "../include/js/front-end/src/Layouts/Masonry.js");

var _Mosaic = __webpack_require__(/*! ./Layouts/Mosaic */ "../include/js/front-end/src/Layouts/Mosaic.js");

var _Tooltip = __webpack_require__(/*! ./Components/Tooltip */ "../include/js/front-end/src/Components/Tooltip.js");

var _Modal = __webpack_require__(/*! ./Components/Modal */ "../include/js/front-end/src/Components/Modal.js");

var _Slider = __webpack_require__(/*! ./Layouts/Slider */ "../include/js/front-end/src/Layouts/Slider.js");

var spinners = 0;

var bypassPopup = function bypassPopup(data) {
  _Core.Core.hideLoading();

  var panel;

  if (data instanceof Element) {
    panel = data;
  } else {
    panel = Util.getElement(data).firstElementChild;
  }

  Util.hide(panel);
  document.body.appendChild(panel);

  _Core.Core.moveHTML5External();

  var lightbox = _Core.Core.getLightbox();

  if (lightbox !== undefined && lightbox !== null) {
    lightbox.initializeForNewContainer('#' + panel.getAttribute('id'));
  }

  var thumbs = panel.querySelectorAll('.photonic-launch-gallery');

  if (thumbs.length > 0) {
    _Core.Core.setDeep('#' + thumbs[0].getAttribute('data-photonic-deep'));

    var evt = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    }); // If cancelled, don't dispatch our event

    !thumbs[0].dispatchEvent(evt);
  }
};

var displayPopup = function displayPopup(data, provider, popup, panelId) {
  var safePanelId = panelId.replace('.', '\\.'); // FOR EXISTING ELEMENTS WHCICH NEED SANITIZED PANELID

  var div = Util.getElement(data).firstElementChild;
  var grid = div.querySelector('.modal-gallery');

  _Core.Core.waitForImages(grid).then(function () {
    var popupPanel = document.querySelector('#photonic-' + provider + '-' + popup + '-' + safePanelId);

    if (popupPanel) {
      popupPanel.appendChild(div);
      Util.show(popupPanel);
    }

    (0, _Modal.Modal)(div, {
      modalTarget: 'photonic-' + provider + '-panel-' + safePanelId,
      color: '#000',
      width: Photonic_JS.gallery_panel_width + '%',
      closeFromRight: (100 - Photonic_JS.gallery_panel_width) / 2 + '%'
    });

    _Core.Core.moveHTML5External();

    var lightbox = _Core.Core.getLightbox();

    if (lightbox !== undefined && lightbox !== null) {
      lightbox.initializeForNewContainer('#' + div.getAttribute('id'));
    }

    (0, _Tooltip.Tooltip)('[data-photonic-tooltip]', '.photonic-tooltip-container');

    _Core.Core.hideLoading();
  });
};

var redisplayPopupContents = function redisplayPopupContents(provider, panelId, panel, args) {
  var panelEl = Util.getElement(panel);

  if ('show' === args['popup']) {
    _Core.Core.hideLoading();

    (0, _Modal.Modal)(panelEl, {
      modalTarget: 'photonic-' + provider + '-panel-' + panelId,
      color: '#000',
      width: Photonic_JS.gallery_panel_width + '%',
      closeFromRight: (100 - Photonic_JS.gallery_panel_width) / 2 + '%'
    });
  } else {
    bypassPopup(document.getElementById('photonic-' + provider + '-panel-' + panelId));
  }
};

var processRequest = function processRequest(provider, type, identifier, args) {
  args['action'] = 'photonic_display_level_2_contents';
  Util.post(Photonic_JS.ajaxurl, args, function (data) {
    if (data.substr(0, Photonic_JS.password_failed.length) === Photonic_JS.password_failed) {
      _Core.Core.hideLoading();

      var prompter = '#photonic-' + provider + '-' + type + '-prompter-' + identifier;
      var prompterDialog = _Core.Core.prompterList[prompter];

      if (prompterDialog !== undefined && prompterDialog !== null) {
        prompterDialog.show();
      }
    } else {
      if ('show' === args['popup']) {
        displayPopup(data, provider, type, identifier);
      } else {
        if (data !== '') {
          bypassPopup(data);
        } else {
          _Core.Core.hideLoading();
        }
      }
    }
  });
};

exports.processRequest = processRequest;

var displayLevel2 = function displayLevel2(provider, type, args) {
  var identifier = args['panel_id'].substr(('photonic-' + provider + '-' + type + '-thumb-').length);
  var panel = '#photonic-' + provider + '-panel-' + identifier;
  var existing = document.getElementById('photonic-' + provider + '-panel-' + identifier);

  if (existing == null) {
    existing = document.getElementById(args['panel_id']);

    if (existing.classList.contains('photonic-' + provider + '-passworded')) {
      _Core.Core.initializePasswordPrompter("#photonic-".concat(provider, "-").concat(type, "-prompter-").concat(identifier));
    } else {
      _Core.Core.showSpinner();

      processRequest(provider, type, identifier, args);
    }
  } else {
    _Core.Core.showSpinner();

    redisplayPopupContents(provider, identifier, panel, args);
  }
};

exports.displayLevel2 = displayLevel2;

var processL3Request = function processL3Request(clicked, header, args) {
  args['action'] = 'photonic_display_level_3_contents';

  _Core.Core.showSpinner();

  var lightbox = _Core.Core.getLightbox();

  Util.post(Photonic_JS.ajaxurl, args, function (data) {
    var insert = Util.getElement(data);

    if (header) {
      var layout = insert.querySelector('.photonic-level-2-container');
      var container = header.parentNode;
      var returnedStream = insert.firstElementChild;
      var collectionId = args.node.substr('flickr-collection-'.length);
      returnedStream.setAttribute('id', args.stream + '-' + collectionId);
      container.insertBefore(returnedStream, header.nextSibling);

      if (layout.classList.contains('photonic-random-layout')) {
        (0, _Justified.JustifiedGrid)(false, false, null, lightbox);
      } else if (layout.classList.contains('photonic-mosaic-layout')) {
        (0, _Mosaic.Mosaic)(false, false);
      } else if (layout.classList.contains('photonic-masonry-layout')) {
        (0, _Masonry.Masonry)(false, false);
      }

      var level2 = insert.querySelectorAll('.photonic-level-2');
      level2.forEach(function (item) {
        item.style.display = 'inline-block';
      });
      (0, _Tooltip.Tooltip)('[data-photonic-tooltip]', '.photonic-tooltip-container');
      clicked.classList.remove('photonic-level-3-expand-plus');
      clicked.classList.add('photonic-level-3-expand-up');
      clicked.setAttribute('title', Photonic_JS.minimize_panel === undefined ? 'Hide' : Photonic_JS.minimize_panel);
    }

    _Core.Core.hideLoading();
  });
};

exports.processL3Request = processL3Request;

var lazyLoad = function lazyLoad(evt) {
  spinners++;

  _Core.Core.showSpinner();

  var clicked = evt.currentTarget;
  var shortcode = clicked.getAttribute('data-photonic-shortcode');
  var args = {
    'action': 'photonic_lazy_load',
    'shortcode': shortcode
  };
  Util.post(Photonic_JS.ajaxurl, args, function (data) {
    var div = document.createElement('div');
    div.innerHTML = data;
    div = div.firstElementChild;

    if (div) {
      var divId = div.getAttribute('id');
      var divClass = divId.substring(0, divId.lastIndexOf('-'));
      var streams = document.documentElement.querySelectorAll('.' + divClass);
      var max = 0;
      streams.forEach(function (stream) {
        var streamId = stream.getAttribute('id');
        streamId = streamId.substring(streamId.lastIndexOf('-') + 1);
        streamId = parseInt(streamId, 10);
        max = Math.max(max, streamId);
      });
      max = max + 1;
      var regex = new RegExp(divId, 'gi');
      div.innerHTML = data.replace(regex, divClass + '-' + max).replace('photonic-slideshow-' + divId.substring(divId.lastIndexOf('-') + 1), 'photonic-slideshow-' + max);
      div = div.firstElementChild; // Level 2 elements get their own ids, which need to be readjusted because the back-end always assigns them a gallery_index of 1

      div.querySelectorAll('figure.photonic-level-2').forEach(function (figure) {
        if (figure.getAttribute('id') != null) {
          var figId = figure.getAttribute('id');
          var modId = figId.substring(0, figId.lastIndexOf('-') + 1) + max; // Replace last part of id with the "max"

          figure.setAttribute('id', modId);
          var anchor = figure.querySelector('a');

          if (anchor.getAttribute('id') != null) {
            var anchorId = anchor.getAttribute('id');
            var modAnchorId = anchorId.substring(0, anchorId.lastIndexOf('-') + 1) + max; // Replace last part of id with the "max"

            anchor.setAttribute('id', modAnchorId);
          }

          var prompter = figure.querySelector('.photonic-password-prompter');

          if (prompter != null && prompter.getAttribute('id') != null) {
            var prompterId = prompter.getAttribute('id');
            var modPrompterId = prompterId.substring(0, prompterId.lastIndexOf('-') + 1) + max; // Replace last part of id with the "max"

            prompter.setAttribute('id', modPrompterId);
          }
        }
      });
      clicked.insertAdjacentElement('afterend', div);
      var newDivId = divClass + '-' + max;

      var lightbox = _Core.Core.getLightbox();

      if (lightbox !== undefined && lightbox !== null) {
        lightbox.initializeForNewContainer('#' + div.getAttribute('id'));
      }

      if (document.querySelectorAll('#' + newDivId + ' .photonic-random-layout').length > 0) {
        (0, _Justified.JustifiedGrid)(false, true, '#' + newDivId + ' .photonic-random-layout', lightbox);
        spinners--;
      } else if (document.querySelectorAll('#' + newDivId + ' .photonic-masonry-layout').length > 0) {
        (0, _Masonry.Masonry)(false, true, '#' + newDivId + ' .photonic-masonry-layout');
        spinners--;
      } else if (document.querySelectorAll('#' + newDivId + ' .photonic-mosaic-layout').length > 0) {
        (0, _Mosaic.Mosaic)(false, true, '#' + newDivId + ' .photonic-mosaic-layout');
        spinners--;
      } // Slider(document.querySelector('#photonic-slideshow-' + max));


      _Core.Core.waitForImages(div).then(function () {
        var standard = document.documentElement.querySelectorAll('#' + newDivId + ' .photonic-standard-layout .photonic-level-1, ' + '#' + newDivId + ' .photonic-standard-layout .photonic-level-2');
        standard.forEach(function (image) {
          image.style.display = 'inline-block';
        });

        _Core.Core.standardizeTitleWidths();

        spinners--;

        if (spinners <= 0) {
          _Core.Core.hideLoading();
        }
      });

      _Core.Core.moveHTML5External();

      clicked.parentNode.removeChild(clicked);
      (0, _Tooltip.Tooltip)('[data-photonic-tooltip]', '.photonic-tooltip-container');

      if (spinners <= 0) {
        _Core.Core.hideLoading();
      }
    }
  });
};

exports.lazyLoad = lazyLoad;

/***/ }),

/***/ "../include/js/front-end/src/Util.js":
/*!*******************************************!*\
  !*** ../include/js/front-end/src/Util.js ***!
  \*******************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fadeIn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fadeOut [provided] [no usage info] [missing usage info prevents renaming] */
/*! export get [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getText [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hasClass [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hide [provided] [no usage info] [missing usage info prevents renaming] */
/*! export next [provided] [no usage info] [missing usage info prevents renaming] */
/*! export post [provided] [no usage info] [missing usage info prevents renaming] */
/*! export show [provided] [no usage info] [missing usage info prevents renaming] */
/*! export slideUpDown [provided] [no usage info] [missing usage info prevents renaming] */
/*! export slideUpTitle [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hide = exports.show = exports.fadeOut = exports.fadeIn = exports.slideUpTitle = exports.slideUpDown = exports.getText = exports.getElement = exports.next = exports.get = exports.post = exports.hasClass = void 0;

// Utilities for Photonic
var hasClass = function hasClass(element, className) {
  if (element.classList) {
    return element.classList.contains(className);
  } else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
  }
};

exports.hasClass = hasClass;

function ajax(method, url, args, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var data = xhr.responseText;
        callback(data);
      }
    }
  };

  var form = new FormData();

  for (var [key, value] of Object.entries(args)) {
    form.append(key, value);
  }

  xhr.send(form);
}

var post = function post(url, args, callback) {
  ajax('POST', url, args, callback);
};

exports.post = post;

var get = function get(url, args, callback) {
  ajax('GET', url, args, callback);
};

exports.get = get;

var next = function next(elem, selector) {
  var sibling = elem.nextElementSibling;
  if (!selector) return sibling;

  while (sibling) {
    if (sibling.matches(selector)) return sibling;
    sibling = sibling.nextElementSibling;
  }
};

exports.next = next;

var getElement = function getElement(value) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(value, 'text/html');
  return doc.body;
};

exports.getElement = getElement;

var getText = function getText(value) {
  var txt = document.createElement("div");
  txt.innerHTML = value;
  return txt.innerText;
};

exports.getText = getText;

var slideUpDown = function slideUpDown(element, state) {
  if (element != null && element.classList) {
    if (!element.classList.contains('photonic-can-slide')) {
      element.classList.add('photonic-can-slide');
    }

    if ('show' === state) {
      element.classList.remove('photonic-can-slide-hide');
      element.style.height = "".concat(element.scrollHeight, "px");
    } else {
      element.classList.add('photonic-can-slide-hide');
      element.style.height = 0;
    }
  }
};

exports.slideUpDown = slideUpDown;

var slideUpTitle = function slideUpTitle(element, state) {
  if (element && element.classList) {
    if ('show' === state) {
      element.classList.add('slideup-show');
    } else {
      element.classList.remove('slideup-show');
    }
  }
};

exports.slideUpTitle = slideUpTitle;

var fadeIn = function fadeIn(el) {
  if (!hasClass(el, 'fade-in')) {
    el.style.display = 'block';
    el.classList.add('fade-in');
  }
};

exports.fadeIn = fadeIn;

var fadeOut = function fadeOut(el, duration) {
  var s = el.style,
      step = 25 / (duration || 500);
  s.opacity = s.opacity || 1;

  (function fade() {
    s.opacity -= step;

    if (s.opacity < 0) {
      s.display = "none";
      el.classList.remove('fade-in');
    } else {
      setTimeout(fade, 25);
    }
  })();
}; // get the default display style of an element


exports.fadeOut = fadeOut;

var defaultDisplay = function defaultDisplay(tag) {
  var iframe = document.createElement('iframe');
  iframe.setAttribute('frameborder', 0);
  iframe.setAttribute('width', 0);
  iframe.setAttribute('height', 0);
  document.documentElement.appendChild(iframe);
  var doc = (iframe.contentWindow || iframe.contentDocument).document; // IE support

  doc.write();
  doc.close();
  var testEl = doc.createElement(tag);
  doc.documentElement.appendChild(testEl);
  var display = (window.getComputedStyle ? getComputedStyle(testEl, null) : testEl.currentStyle).display;
  iframe.parentNode.removeChild(iframe);
  return display;
}; // actual show/hide function used by show() and hide() below


var showHide = function showHide(el, show) {
  var value = el.getAttribute('data-olddisplay'),
      display = el.style.display,
      computedDisplay = (window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle).display;

  if (show) {
    if (!value && display === 'none') el.style.display = '';
    if (el.style.display === '' && computedDisplay === 'none') value = value || defaultDisplay(el.nodeName);
  } else {
    if (display && display !== 'none' || !(computedDisplay === 'none')) el.setAttribute('data-olddisplay', computedDisplay === 'none' ? display : computedDisplay);
  }

  if (!show || el.style.display === 'none' || el.style.display === '') el.style.display = show ? value || '' : 'none';
}; // helper functions


var show = function show(el) {
  return showHide(el, true);
};

exports.show = show;

var hide = function hide(el) {
  return showHide(el);
};

exports.hide = hide;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("../include/js/front-end/src/Polyfill.js");
/******/ 	__webpack_require__("../include/ext/splide/splide.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("../include/ext/glightbox/glightbox.js");
/******/ 	__webpack_require__("../include/js/front-end/src/Entries/GLightbox.js");
/******/ })()
;