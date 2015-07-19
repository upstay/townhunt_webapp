/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _vue = __webpack_require__(10);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRoute = __webpack_require__(76);
	
	var _vueRoute2 = _interopRequireDefault(_vueRoute);
	
	var _commonUtil = __webpack_require__(84);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	var _componentsHeaderVue = __webpack_require__(88);
	
	var _componentsHeaderVue2 = _interopRequireDefault(_componentsHeaderVue);
	
	var _componentsNavVue = __webpack_require__(7);
	
	var _componentsNavVue2 = _interopRequireDefault(_componentsNavVue);
	
	var _componentsFooterVue = __webpack_require__(91);
	
	var _componentsFooterVue2 = _interopRequireDefault(_componentsFooterVue);
	
	var _pagesTopVue = __webpack_require__(94);
	
	var _pagesTopVue2 = _interopRequireDefault(_pagesTopVue);
	
	var _pagesDetailVue = __webpack_require__(98);
	
	var _pagesDetailVue2 = _interopRequireDefault(_pagesDetailVue);
	
	// setup Vue
	_vue2['default'].config.debug = OPTION.debug;
	_vue2['default'].use(_vueRoute2['default']);
	
	module.exports = new _vue2['default']({
	
	    el: '#app',
	
	    components: {
	        'component-header': _componentsHeaderVue2['default'],
	        'component-nav': _componentsNavVue2['default'],
	        'component-footer': _componentsFooterVue2['default'],
	        'page-top': _pagesTopVue2['default'],
	        'page-detail': _pagesDetailVue2['default']
	    },
	
	    routes: {
	        '/': {
	            componentId: 'page-top',
	            afterUpdate: 'refresh',
	            isDefault: true
	        },
	        '/detail/:item': {
	            componentId: 'page-detial'
	        },
	        options: {
	            hashbang: true
	        }
	    },
	
	    data: {},
	
	    created: function created() {},
	
	    methods: {}
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8)
	module.exports.template = __webpack_require__(9)


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  data: function data() {
	    return {};
	  },
	
	  methods: {}
	};
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class=\"\">\n  Nav\n  </div>";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var extend = _.extend
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefiexed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue (options) {
	  this._init(options)
	}
	
	/**
	 * Mixin global API
	 */
	
	extend(Vue, __webpack_require__(19))
	
	/**
	 * Vue and every constructor that extends Vue has an
	 * associated options object, which can be accessed during
	 * compilation steps as `this.constructor.options`.
	 *
	 * These can be seen as the default options of every
	 * Vue instance.
	 */
	
	Vue.options = {
	  replace: true,
	  directives: __webpack_require__(38),
	  elementDirectives: __webpack_require__(60),
	  filters: __webpack_require__(63),
	  transitions: {},
	  components: {},
	  partials: {}
	}
	
	/**
	 * Build up the prototype
	 */
	
	var p = Vue.prototype
	
	/**
	 * $data has a setter which does a bunch of
	 * teardown/setup work
	 */
	
	Object.defineProperty(p, '$data', {
	  get: function () {
	    return this._data
	  },
	  set: function (newData) {
	    if (newData !== this._data) {
	      this._setData(newData)
	    }
	  }
	})
	
	/**
	 * Mixin internal instance methods
	 */
	
	extend(p, __webpack_require__(65))
	extend(p, __webpack_require__(66))
	extend(p, __webpack_require__(67))
	extend(p, __webpack_require__(68))
	extend(p, __webpack_require__(70))
	
	/**
	 * Mixin public API methods
	 */
	
	extend(p, __webpack_require__(71))
	extend(p, __webpack_require__(72))
	extend(p, __webpack_require__(73))
	extend(p, __webpack_require__(74))
	extend(p, __webpack_require__(75))
	
	module.exports = _.Vue = Vue


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var lang = __webpack_require__(13)
	var extend = lang.extend
	
	extend(exports, lang)
	extend(exports, __webpack_require__(14))
	extend(exports, __webpack_require__(15))
	extend(exports, __webpack_require__(12))
	extend(exports, __webpack_require__(17))
	extend(exports, __webpack_require__(18))


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var extend = _.extend
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = Object.create(null)
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData (to, from) {
	  var key, toVal, fromVal
	  for (key in from) {
	    toVal = to[key]
	    fromVal = from[key]
	    if (!to.hasOwnProperty(key)) {
	      to.$add(key, fromVal)
	    } else if (_.isObject(toVal) && _.isObject(fromVal)) {
	      mergeData(toVal, fromVal)
	    }
	  }
	  return to
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      _.warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.'
	      )
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	}
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    _.warn(
	      'The "el" option should be a function ' +
	      'that returns a per-instance value in component ' +
	      'definitions.'
	    )
	    return
	  }
	  var ret = childVal || parentVal
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function'
	    ? ret.call(vm)
	    : ret
	}
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.created =
	strats.ready =
	strats.attached =
	strats.detached =
	strats.beforeCompile =
	strats.compiled =
	strats.beforeDestroy =
	strats.destroyed =
	strats.props = function (parentVal, childVal) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : _.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}
	
	/**
	 * 0.11 deprecation warning
	 */
	
	strats.paramAttributes = function () {
	  /* istanbul ignore next */
	  _.warn(
	    '"paramAttributes" option has been deprecated in 0.12. ' +
	    'Use "props" instead.'
	  )
	}
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	strats.directives =
	strats.filters =
	strats.transitions =
	strats.components =
	strats.partials =
	strats.elementDirectives = function (parentVal, childVal) {
	  var res = Object.create(parentVal)
	  return childVal
	    ? extend(res, childVal)
	    : res
	}
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch =
	strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal
	  if (!parentVal) return childVal
	  var ret = {}
	  extend(ret, parentVal)
	  for (var key in childVal) {
	    var parent = ret[key]
	    var child = childVal[key]
	    if (parent && !_.isArray(parent)) {
	      parent = [parent]
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child]
	  }
	  return ret
	}
	
	/**
	 * Other object hashes.
	 */
	
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal
	  if (!parentVal) return childVal
	  var ret = Object.create(parentVal)
	  extend(ret, childVal)
	  return ret
	}
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	}
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} components
	 */
	
	function guardComponents (components) {
	  if (components) {
	    var def
	    for (var key in components) {
	      if (_.commonTagRE.test(key)) {
	        _.warn(
	          'Do not use built-in HTML elements as component ' +
	          'name: ' + key
	        )
	      }
	      def = components[key]
	      if (_.isPlainObject(def)) {
	        def.name = key
	        components[key] = _.Vue.extend(def)
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps (options) {
	  var props = options.props
	  if (_.isPlainObject(props)) {
	    options.props = Object.keys(props).map(function (key) {
	      var val = props[key]
	      if (!_.isPlainObject(val)) {
	        val = { type: val }
	      }
	      val.name = key
	      return val
	    })
	  } else if (_.isArray(props)) {
	    options.props = props.map(function (prop) {
	      return typeof prop === 'string'
	        ? { name: prop }
	        : prop
	    })
	  }
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	exports.mergeOptions = function merge (parent, child, vm) {
	  guardComponents(child.components)
	  guardProps(child)
	  var options = {}
	  var key
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = merge(parent, child.mixins[i], vm)
	    }
	  }
	  for (key in parent) {
	    mergeField(key)
	  }
	  for (key in child) {
	    if (!(parent.hasOwnProperty(key))) {
	      mergeField(key)
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat
	    options[key] = strat(parent[key], child[key], vm, key)
	  }
	  return options
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */
	
	exports.resolveAsset = function resolve (options, type, id) {
	  var asset = options[type][id]
	  while (!asset && options._parent) {
	    options = options._parent.$options
	    asset = options[type][id]
	  }
	  return asset
	}


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Check is a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	exports.isReserved = function (str) {
	  var c = (str + '').charCodeAt(0)
	  return c === 0x24 || c === 0x5F
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	exports.toString = function (value) {
	  return value == null
	    ? ''
	    : value.toString()
	}
	
	/**
	 * Check and convert possible numeric numbers before
	 * setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	exports.toNumber = function (value) {
	  return (
	    isNaN(value) ||
	    value === null ||
	    typeof value === 'boolean'
	  ) ? value
	    : Number(value)
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	exports.toBoolean = function (value) {
	  return value === 'true'
	    ? true
	    : value === 'false'
	      ? false
	      : value
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	exports.stripQuotes = function (str) {
	  var a = str.charCodeAt(0)
	  var b = str.charCodeAt(str.length - 1)
	  return a === b && (a === 0x22 || a === 0x27)
	    ? str.slice(1, -1)
	    : false
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	exports.camelize = function (str) {
	  return str.replace(/-(\w)/g, toUpper)
	}
	
	function toUpper (_, c) {
	  return c ? c.toUpperCase() : ''
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	exports.hyphenate = function (str) {
	  return str
	    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
	    .toLowerCase()
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g
	exports.classify = function (str) {
	  return str.replace(classifyRE, toUpper)
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	exports.bind = function (fn, ctx) {
	  return function (a) {
	    var l = arguments.length
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	exports.toArray = function (list, start) {
	  start = start || 0
	  var i = list.length - start
	  var ret = new Array(i)
	  while (i--) {
	    ret[i] = list[i + start]
	  }
	  return ret
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	exports.extend = function (to, from) {
	  for (var key in from) {
	    to[key] = from[key]
	  }
	  return to
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	exports.isObject = function (obj) {
	  return obj !== null && typeof obj === 'object'
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString
	exports.isPlainObject = function (obj) {
	  return toString.call(obj) === '[object Object]'
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	exports.isArray = Array.isArray
	
	/**
	 * Define a non-enumerable property
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	exports.define = function (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  })
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	exports.debounce = function (func, wait) {
	  var timeout, args, context, timestamp, result
	  var later = function () {
	    var last = Date.now() - timestamp
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last)
	    } else {
	      timeout = null
	      result = func.apply(context, args)
	      if (!timeout) context = args = null
	    }
	  }
	  return function () {
	    context = this
	    args = arguments
	    timestamp = Date.now()
	    if (!timeout) {
	      timeout = setTimeout(later, wait)
	    }
	    return result
	  }
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	exports.indexOf = function (arr, obj) {
	  for (var i = 0, l = arr.length; i < l; i++) {
	    if (arr[i] === obj) return i
	  }
	  return -1
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	exports.cancellable = function (fn) {
	  var cb = function () {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments)
	    }
	  }
	  cb.cancel = function () {
	    cb.cancelled = true
	  }
	  return cb
	}


/***/ },
/* 14 */
/***/ function(module, exports) {

	// can we use __proto__?
	exports.hasProto = '__proto__' in {}
	
	// Browser environment sniffing
	var inBrowser = exports.inBrowser =
	  typeof window !== 'undefined' &&
	  Object.prototype.toString.call(window) !== '[object Object]'
	
	exports.isIE9 =
	  inBrowser &&
	  navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0
	
	exports.isAndroid =
	  inBrowser &&
	  navigator.userAgent.toLowerCase().indexOf('android') > 0
	
	// Transition property/event sniffing
	if (inBrowser && !exports.isIE9) {
	  var isWebkitTrans =
	    window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined
	  var isWebkitAnim =
	    window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined
	  exports.transitionProp = isWebkitTrans
	    ? 'WebkitTransition'
	    : 'transition'
	  exports.transitionEndEvent = isWebkitTrans
	    ? 'webkitTransitionEnd'
	    : 'transitionend'
	  exports.animationProp = isWebkitAnim
	    ? 'WebkitAnimation'
	    : 'animation'
	  exports.animationEndEvent = isWebkitAnim
	    ? 'webkitAnimationEnd'
	    : 'animationend'
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	exports.nextTick = (function () {
	  var callbacks = []
	  var pending = false
	  var timerFunc
	  function handle () {
	    pending = false
	    var copies = callbacks.slice(0)
	    callbacks = []
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]()
	    }
	  }
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1
	    var observer = new MutationObserver(handle)
	    var textNode = document.createTextNode(counter)
	    observer.observe(textNode, {
	      characterData: true
	    })
	    timerFunc = function () {
	      counter = (counter + 1) % 2
	      textNode.data = counter
	    }
	  } else {
	    timerFunc = setTimeout
	  }
	  return function (cb, ctx) {
	    var func = ctx
	      ? function () { cb.call(ctx) }
	      : cb
	    callbacks.push(func)
	    if (pending) return
	    pending = true
	    timerFunc(handle, 0)
	  }
	})()


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var config = __webpack_require__(16)
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	exports.query = function (el) {
	  if (typeof el === 'string') {
	    var selector = el
	    el = document.querySelector(el)
	    if (!el) {
	      _.warn('Cannot find element: ' + selector)
	    }
	  }
	  return el
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed byy doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	exports.inDoc = function (node) {
	  var doc = document.documentElement
	  var parent = node && node.parentNode
	  return doc === node ||
	    doc === parent ||
	    !!(parent && parent.nodeType === 1 && (doc.contains(parent)))
	}
	
	/**
	 * Extract an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} attr
	 */
	
	exports.attr = function (node, attr) {
	  attr = config.prefix + attr
	  var val = node.getAttribute(attr)
	  if (val !== null) {
	    node.removeAttribute(attr)
	  }
	  return val
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	exports.before = function (el, target) {
	  target.parentNode.insertBefore(el, target)
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	exports.after = function (el, target) {
	  if (target.nextSibling) {
	    exports.before(el, target.nextSibling)
	  } else {
	    target.parentNode.appendChild(el)
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	exports.remove = function (el) {
	  el.parentNode.removeChild(el)
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	exports.prepend = function (el, target) {
	  if (target.firstChild) {
	    exports.before(el, target.firstChild)
	  } else {
	    target.appendChild(el)
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	exports.replace = function (target, el) {
	  var parent = target.parentNode
	  if (parent) {
	    parent.replaceChild(el, target)
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	exports.on = function (el, event, cb) {
	  el.addEventListener(event, cb)
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	exports.off = function (el, event, cb) {
	  el.removeEventListener(event, cb)
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */
	
	exports.addClass = function (el, cls) {
	  if (el.classList) {
	    el.classList.add(cls)
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' '
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim())
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */
	
	exports.removeClass = function (el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls)
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' '
	    var tar = ' ' + cls + ' '
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ')
	    }
	    el.setAttribute('class', cur.trim())
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element}
	 */
	
	exports.extractContent = function (el, asFragment) {
	  var child
	  var rawContent
	  /* istanbul ignore if */
	  if (
	    exports.isTemplate(el) &&
	    el.content instanceof DocumentFragment
	  ) {
	    el = el.content
	  }
	  if (el.hasChildNodes()) {
	    trim(el, el.firstChild)
	    trim(el, el.lastChild)
	    rawContent = asFragment
	      ? document.createDocumentFragment()
	      : document.createElement('div')
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	    /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child)
	    }
	  }
	  return rawContent
	}
	
	function trim (content, node) {
	  if (node && node.nodeType === 3 && !node.data.trim()) {
	    content.removeChild(node)
	  }
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	exports.isTemplate = function (el) {
	  return el.tagName &&
	    el.tagName.toLowerCase() === 'template'
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - block instance
	 * - v-html
	 * - v-if
	 * - component
	 * - repeat
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	exports.createAnchor = function (content, persist) {
	  return config.debug
	    ? document.createComment(content)
	    : document.createTextNode(persist ? ' ' : '')
	}


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = {
	
	  /**
	   * The prefix to look for when parsing directives.
	   *
	   * @type {String}
	   */
	
	  prefix: 'v-',
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether allow observer to alter data objects'
	   * __proto__.
	   *
	   * @type {Boolean}
	   */
	
	  proto: true,
	
	  /**
	   * Whether to parse mustache tags in templates.
	   *
	   * @type {Boolean}
	   */
	
	  interpolate: true,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: [
	    'component',
	    'directive',
	    'elementDirective',
	    'filter',
	    'transition',
	    'partial'
	  ],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}
	
	/**
	 * Interpolation delimiters.
	 * We need to mark the changed flag so that the text parser
	 * knows it needs to recompile the regex.
	 *
	 * @type {Array<String>}
	 */
	
	var delimiters = ['{{', '}}']
	Object.defineProperty(module.exports, 'delimiters', {
	  get: function () {
	    return delimiters
	  },
	  set: function (val) {
	    delimiters = val
	    this._delimitersChanged = true
	  }
	})


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {String|undefined}
	 */
	
	exports.commonTagRE = /^(div|p|span|img|a|br|ul|ol|li|h1|h2|h3|h4|h5|code|pre)$/
	exports.checkComponent = function (el, options) {
	  var tag = el.tagName.toLowerCase()
	  if (tag === 'component') {
	    // dynamic syntax
	    var exp = el.getAttribute('is')
	    el.removeAttribute('is')
	    return exp
	  } else if (
	    !exports.commonTagRE.test(tag) &&
	    _.resolveAsset(options, 'components', tag)
	  ) {
	    return tag
	  /* eslint-disable no-cond-assign */
	  } else if (tag = _.attr(el, 'component')) {
	  /* eslint-enable no-cond-assign */
	    return tag
	  }
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 * The vm may have inherit:true so we need to make sure
	 * we don't accidentally overwrite parent value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	exports.initProp = function (vm, prop, value) {
	  if (exports.assertProp(prop, value)) {
	    var key = prop.path
	    if (key in vm) {
	      _.define(vm, key, value, true)
	    } else {
	      vm[key] = value
	    }
	    vm._data[key] = value
	  }
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	exports.assertProp = function (prop, value) {
	  var options = prop.options
	  var type = options.type
	  var valid = true
	  var expectedType
	  if (type) {
	    if (type === String) {
	      expectedType = 'string'
	      valid = typeof value === expectedType
	    } else if (type === Number) {
	      expectedType = 'number'
	      valid = typeof value === 'number'
	    } else if (type === Boolean) {
	      expectedType = 'boolean'
	      valid = typeof value === 'boolean'
	    } else if (type === Function) {
	      expectedType = 'function'
	      valid = typeof value === 'function'
	    } else if (type === Object) {
	      expectedType = 'object'
	      valid = _.isPlainObject(value)
	    } else if (type === Array) {
	      expectedType = 'array'
	      valid = _.isArray(value)
	    } else {
	      valid = value instanceof type
	    }
	  }
	  if (!valid) {
	    _.warn(
	      'Invalid prop: type check failed for ' +
	      prop.path + '="' + prop.raw + '".' +
	      ' Expected ' + formatType(expectedType) +
	      ', got ' + formatValue(value) + '.'
	    )
	    return false
	  }
	  var validator = options.validator
	  if (validator) {
	    if (!validator.call(null, value)) {
	      _.warn(
	        'Invalid prop: custom validator check failed for ' +
	        prop.path + '="' + prop.raw + '"'
	      )
	      return false
	    }
	  }
	  return true
	}
	
	function formatType (val) {
	  return val
	    ? val.charAt(0).toUpperCase() + val.slice(1)
	    : 'custom type'
	}
	
	function formatValue (val) {
	  return Object.prototype.toString.call(val).slice(8, -1)
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var config = __webpack_require__(16)
	
	/**
	 * Enable debug utilities. The enableDebug() function and
	 * all _.log() & _.warn() calls will be dropped in the
	 * minified production build.
	 */
	
	enableDebug()
	
	function enableDebug () {
	
	  var hasConsole = typeof console !== 'undefined'
	
	  /**
	   * Log a message.
	   *
	   * @param {String} msg
	   */
	
	  exports.log = function (msg) {
	    if (hasConsole && config.debug) {
	      console.log('[Vue info]: ' + msg)
	    }
	  }
	
	  /**
	   * We've got a problem here.
	   *
	   * @param {String} msg
	   */
	
	  exports.warn = function (msg, e) {
	    if (hasConsole && (!config.silent || config.debug)) {
	      console.warn('[Vue warn]: ' + msg)
	      /* istanbul ignore if */
	      if (config.debug) {
	        console.warn((e || new Error('Warning Stack Trace')).stack)
	      }
	    }
	  }
	
	  /**
	   * Assert asset exists
	   */
	
	  exports.assertAsset = function (val, type, id) {
	    /* istanbul ignore if */
	    if (type === 'directive') {
	      if (id === 'with') {
	        exports.warn(
	          'v-with has been deprecated in ^0.12.0. ' +
	          'Use props instead.'
	        )
	        return
	      }
	      if (id === 'events') {
	        exports.warn(
	          'v-events has been deprecated in ^0.12.0. ' +
	          'Pass down methods as callback props instead.'
	        )
	        return
	      }
	    }
	    if (!val) {
	      exports.warn('Failed to resolve ' + type + ': ' + id)
	    }
	  }
	}


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var config = __webpack_require__(16)
	
	/**
	 * Expose useful internals
	 */
	
	exports.util = _
	exports.nextTick = _.nextTick
	exports.config = __webpack_require__(16)
	exports.compiler = __webpack_require__(20)
	
	exports.parsers = {
	  path: __webpack_require__(33),
	  text: __webpack_require__(23),
	  template: __webpack_require__(35),
	  directive: __webpack_require__(25),
	  expression: __webpack_require__(32)
	}
	
	/**
	 * Each instance constructor, including Vue, has a unique
	 * cid. This enables us to create wrapped "child
	 * constructors" for prototypal inheritance and cache them.
	 */
	
	exports.cid = 0
	var cid = 1
	
	/**
	 * Class inehritance
	 *
	 * @param {Object} extendOptions
	 */
	
	exports.extend = function (extendOptions) {
	  extendOptions = extendOptions || {}
	  var Super = this
	  var Sub = createClass(
	    extendOptions.name ||
	    Super.options.name ||
	    'VueComponent'
	  )
	  Sub.prototype = Object.create(Super.prototype)
	  Sub.prototype.constructor = Sub
	  Sub.cid = cid++
	  Sub.options = _.mergeOptions(
	    Super.options,
	    extendOptions
	  )
	  Sub['super'] = Super
	  // allow further extension
	  Sub.extend = Super.extend
	  // create asset registers, so extended classes
	  // can have their private assets too.
	  config._assetTypes.forEach(function (type) {
	    Sub[type] = Super[type]
	  })
	  return Sub
	}
	
	/**
	 * A function that returns a sub-class constructor with the
	 * given name. This gives us much nicer output when
	 * logging instances in the console.
	 *
	 * @param {String} name
	 * @return {Function}
	 */
	
	function createClass (name) {
	  return new Function(
	    'return function ' + _.classify(name) +
	    ' (options) { this._init(options) }'
	  )()
	}
	
	/**
	 * Plugin system
	 *
	 * @param {Object} plugin
	 */
	
	exports.use = function (plugin) {
	  // additional parameters
	  var args = _.toArray(arguments, 1)
	  args.unshift(this)
	  if (typeof plugin.install === 'function') {
	    plugin.install.apply(plugin, args)
	  } else {
	    plugin.apply(null, args)
	  }
	  return this
	}
	
	/**
	 * Create asset registration methods with the following
	 * signature:
	 *
	 * @param {String} id
	 * @param {*} definition
	 */
	
	config._assetTypes.forEach(function (type) {
	  exports[type] = function (id, definition) {
	    if (!definition) {
	      return this.options[type + 's'][id]
	    } else {
	      if (
	        type === 'component' &&
	        _.isPlainObject(definition)
	      ) {
	        definition.name = id
	        definition = _.Vue.extend(definition)
	      }
	      this.options[type + 's'][id] = definition
	    }
	  }
	})


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	
	_.extend(exports, __webpack_require__(21))
	_.extend(exports, __webpack_require__(37))


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var compileProps = __webpack_require__(22)
	var config = __webpack_require__(16)
	var textParser = __webpack_require__(23)
	var dirParser = __webpack_require__(25)
	var templateParser = __webpack_require__(35)
	var resolveAsset = _.resolveAsset
	var componentDef = __webpack_require__(36)
	
	// terminal directives
	var terminalDirectives = [
	  'repeat',
	  'if'
	]
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @param {Vue} [host] - host vm of transcluded content
	 * @return {Function}
	 */
	
	exports.compile = function (el, options, partial, host) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent
	    ? compileNode(el, options)
	    : null
	  // link function for the childNodes
	  var childLinkFn =
	    !(nodeLinkFn && nodeLinkFn.terminal) &&
	    el.tagName !== 'SCRIPT' &&
	    el.hasChildNodes()
	      ? compileNodeList(el.childNodes, options)
	      : null
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn (vm, el) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = _.toArray(el.childNodes)
	    // link
	    var dirs = linkAndCapture(function () {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host)
	      if (childLinkFn) childLinkFn(vm, childNodes, host)
	    }, vm)
	    return makeUnlinkFn(vm, dirs)
	  }
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture (linker, vm) {
	  var originalDirCount = vm._directives.length
	  linker()
	  return vm._directives.slice(originalDirCount)
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn (vm, dirs, context, contextDirs) {
	  return function unlink (destroying) {
	    teardownDirs(vm, dirs, destroying)
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs)
	    }
	  }
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs (vm, dirs, destroying) {
	  var i = dirs.length
	  while (i--) {
	    dirs[i]._teardown()
	    if (!destroying) {
	      vm._directives.$remove(dirs[i])
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function}
	 */
	
	exports.compileAndLinkProps = function (vm, el, props) {
	  var propsLinkFn = compileProps(el, props)
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, null)
	  }, vm)
	  return makeUnlinkFn(vm, propDirs)
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a block instance, we only need to compile 1.
	 *
	 * This function does compile and link at the same time,
	 * since root linkers can not be reused. It returns the
	 * unlink function for potential context directives on the
	 * container.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function}
	 */
	
	exports.compileAndLinkRoot = function (vm, el, options) {
	  var containerAttrs = options._containerAttrs
	  var replacerAttrs = options._replacerAttrs
	  var contextLinkFn, replacerLinkFn
	
	  // only need to compile other attributes for
	  // non-block instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs) {
	        contextLinkFn = compileDirectives(containerAttrs, options)
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options)
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el, options)
	    }
	  }
	
	  // link context scope dirs
	  var context = vm._context
	  var contextDirs
	  if (context && contextLinkFn) {
	    contextDirs = linkAndCapture(function () {
	      contextLinkFn(context, el)
	    }, context)
	  }
	
	  // link self
	  var selfDirs = linkAndCapture(function () {
	    if (replacerLinkFn) replacerLinkFn(vm, el)
	  }, vm)
	
	  // return the unlink function that tearsdown context
	  // container directives.
	  return makeUnlinkFn(vm, selfDirs, context, contextDirs)
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode (node, options) {
	  var type = node.nodeType
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options)
	  } else if (type === 3 && config.interpolate && node.data.trim()) {
	    return compileTextNode(node, options)
	  } else {
	    return null
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement (el, options) {
	  var linkFn
	  var hasAttrs = el.hasAttributes()
	  // check terminal directives (repeat & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, options)
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options)
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options)
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(el, options)
	  }
	  // if the element is a textarea, we need to interpolate
	  // its content on initial render.
	  if (el.tagName === 'TEXTAREA') {
	    var realLinkFn = linkFn
	    linkFn = function (vm, el) {
	      el.value = vm.$interpolate(el.value)
	      if (realLinkFn) realLinkFn(vm, el)
	    }
	    linkFn.terminal = true
	  }
	  return linkFn
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode (node, options) {
	  var tokens = textParser.parse(node.data)
	  if (!tokens) {
	    return null
	  }
	  var frag = document.createDocumentFragment()
	  var el, token
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i]
	    el = token.tag
	      ? processTextToken(token, options)
	      : document.createTextNode(token.value)
	    frag.appendChild(el)
	  }
	  return makeTextNodeLinkFn(tokens, frag, options)
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken (token, options) {
	  var el
	  if (token.oneTime) {
	    el = document.createTextNode(token.value)
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html')
	      setTokenType('html')
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ')
	      setTokenType('text')
	    }
	  }
	  function setTokenType (type) {
	    token.type = type
	    token.def = resolveAsset(options, 'directives', type)
	    token.descriptor = dirParser.parse(token.value)[0]
	  }
	  return el
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn (tokens, frag) {
	  return function textNodeLinkFn (vm, el) {
	    var fragClone = frag.cloneNode(true)
	    var childNodes = _.toArray(fragClone.childNodes)
	    var token, value, node
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i]
	      value = token.value
	      if (token.tag) {
	        node = childNodes[i]
	        if (token.oneTime) {
	          value = vm.$eval(value)
	          if (token.html) {
	            _.replace(node, templateParser.parse(value, true))
	          } else {
	            node.data = value
	          }
	        } else {
	          vm._bindDir(token.type, node,
	                      token.descriptor, token.def)
	        }
	      }
	    }
	    _.replace(el, fragClone)
	  }
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList (nodeList, options) {
	  var linkFns = []
	  var nodeLinkFn, childLinkFn, node
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i]
	    nodeLinkFn = compileNode(node, options)
	    childLinkFn =
	      !(nodeLinkFn && nodeLinkFn.terminal) &&
	      node.tagName !== 'SCRIPT' &&
	      node.hasChildNodes()
	        ? compileNodeList(node.childNodes, options)
	        : null
	    linkFns.push(nodeLinkFn, childLinkFn)
	  }
	  return linkFns.length
	    ? makeChildLinkFn(linkFns)
	    : null
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn (linkFns) {
	  return function childLinkFn (vm, nodes, host) {
	    var node, nodeLinkFn, childrenLinkFn
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n]
	      nodeLinkFn = linkFns[i++]
	      childrenLinkFn = linkFns[i++]
	      // cache childNodes before linking parent, fix #657
	      var childNodes = _.toArray(node.childNodes)
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host)
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host)
	      }
	    }
	  }
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives (el, options) {
	  var tag = el.tagName.toLowerCase()
	  if (_.commonTagRE.test(tag)) return
	  var def = resolveAsset(options, 'elementDirectives', tag)
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def)
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Boolean} hasAttrs
	 * @return {Function|undefined}
	 */
	
	function checkComponent (el, options, hasAttrs) {
	  var componentId = _.checkComponent(el, options, hasAttrs)
	  if (componentId) {
	    var componentLinkFn = function (vm, el, host) {
	      vm._bindDir('component', el, {
	        expression: componentId
	      }, componentDef, host)
	    }
	    componentLinkFn.terminal = true
	    return componentLinkFn
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives (el, options) {
	  if (_.attr(el, 'pre') !== null) {
	    return skip
	  }
	  var value, dirName
	  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
	    dirName = terminalDirectives[i]
	    if ((value = _.attr(el, dirName)) !== null) {
	      return makeTerminalNodeLinkFn(el, dirName, value, options)
	    }
	  }
	}
	
	function skip () {}
	skip.terminal = true
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} [def]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn (el, dirName, value, options, def) {
	  var descriptor = dirParser.parse(value)[0]
	  // no need to call resolveAsset since terminal directives
	  // are always internal
	  def = def || options.directives[dirName]
	  var fn = function terminalNodeLinkFn (vm, el, host) {
	    vm._bindDir(dirName, el, descriptor, def, host)
	  }
	  fn.terminal = true
	  return fn
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Element|Object} elOrAttrs
	 *        - could be an object of already-extracted
	 *          container attributes.
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives (elOrAttrs, options) {
	  var attrs = _.isPlainObject(elOrAttrs)
	    ? mapToList(elOrAttrs)
	    : elOrAttrs.attributes
	  var i = attrs.length
	  var dirs = []
	  var attr, name, value, dir, dirName, dirDef
	  while (i--) {
	    attr = attrs[i]
	    name = attr.name
	    value = attr.value
	    if (name.indexOf(config.prefix) === 0) {
	      dirName = name.slice(config.prefix.length)
	      dirDef = resolveAsset(options, 'directives', dirName)
	      _.assertAsset(dirDef, 'directive', dirName)
	      if (dirDef) {
	        dirs.push({
	          name: dirName,
	          descriptors: dirParser.parse(value),
	          def: dirDef
	        })
	      }
	    } else if (config.interpolate) {
	      dir = collectAttrDirective(name, value, options)
	      if (dir) {
	        dirs.push(dir)
	      }
	    }
	  }
	  // sort by priority, LOW to HIGH
	  if (dirs.length) {
	    dirs.sort(directiveComparator)
	    return makeNodeLinkFn(dirs)
	  }
	}
	
	/**
	 * Convert a map (Object) of attributes to an Array.
	 *
	 * @param {Object} map
	 * @return {Array}
	 */
	
	function mapToList (map) {
	  var list = []
	  for (var key in map) {
	    list.push({
	      name: key,
	      value: map[key]
	    })
	  }
	  return list
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn (directives) {
	  return function nodeLinkFn (vm, el, host) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length
	    var dir, j, k
	    while (i--) {
	      dir = directives[i]
	      if (dir._link) {
	        // custom link fn
	        dir._link(vm, el)
	      } else {
	        k = dir.descriptors.length
	        for (j = 0; j < k; j++) {
	          vm._bindDir(dir.name, el,
	            dir.descriptors[j], dir.def, host)
	        }
	      }
	    }
	  }
	}
	
	/**
	 * Check an attribute for potential dynamic bindings,
	 * and return a directive object.
	 *
	 * @param {String} name
	 * @param {String} value
	 * @param {Object} options
	 * @return {Object}
	 */
	
	function collectAttrDirective (name, value, options) {
	  var tokens = textParser.parse(value)
	  if (tokens) {
	    var def = options.directives.attr
	    var i = tokens.length
	    var allOneTime = true
	    while (i--) {
	      var token = tokens[i]
	      if (token.tag && !token.oneTime) {
	        allOneTime = false
	      }
	    }
	    return {
	      def: def,
	      _link: allOneTime
	        ? function (vm, el) {
	            el.setAttribute(name, vm.$interpolate(value))
	          }
	        : function (vm, el) {
	            var value = textParser.tokensToExp(tokens, vm)
	            var desc = dirParser.parse(name + ':' + value)[0]
	            vm._bindDir('attr', el, desc, def)
	          }
	    }
	  }
	}
	
	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */
	
	function directiveComparator (a, b) {
	  a = a.def.priority || 0
	  b = b.def.priority || 0
	  return a > b ? 1 : -1
	}


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var textParser = __webpack_require__(23)
	var propDef = __webpack_require__(26)
	var propBindingModes = __webpack_require__(16)._propBindingModes
	
	// regexes
	var identRE = __webpack_require__(33).identRE
	var dataAttrRE = /^data-/
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/
	var literalValueRE = /^(true|false)$|^\d.*/
	
	/**
	 * Compile param attributes on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */
	
	module.exports = function compileProps (el, propOptions) {
	  var props = []
	  var i = propOptions.length
	  var options, name, value, path, prop, literal, single
	  while (i--) {
	    options = propOptions[i]
	    name = options.name
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = _.camelize(name.replace(dataAttrRE, ''))
	    if (!identRE.test(path)) {
	      _.warn(
	        'Invalid prop key: "' + name + '". Prop keys ' +
	        'must be valid identifiers.'
	      )
	    }
	    value = el.getAttribute(_.hyphenate(name))
	    // create a prop descriptor
	    prop = {
	      name: name,
	      raw: value,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY
	    }
	    if (value !== null) {
	      // important so that this doesn't get compiled
	      // again as a normal attribute binding
	      el.removeAttribute(name)
	      var tokens = textParser.parse(value)
	      if (tokens) {
	        if (el && el.nodeType === 1) {
	          el.removeAttribute(name)
	        }
	        prop.dynamic = true
	        prop.parentPath = textParser.tokensToExp(tokens)
	        // check prop binding type.
	        single = tokens.length === 1
	        literal = literalValueRE.test(prop.parentPath)
	        // one time: {{* prop}}
	        if (literal || (single && tokens[0].oneTime)) {
	          prop.mode = propBindingModes.ONE_TIME
	        } else if (
	          !literal &&
	          (single && tokens[0].twoWay)
	        ) {
	          if (settablePathRE.test(prop.parentPath)) {
	            prop.mode = propBindingModes.TWO_WAY
	          } else {
	            _.warn(
	              'Cannot bind two-way prop with non-settable ' +
	              'parent path: ' + prop.parentPath
	            )
	          }
	        }
	      }
	    } else if (options && options.required) {
	      _.warn('Missing required prop: ' + name)
	    }
	    props.push(prop)
	  }
	  return makePropsLinkFn(props)
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn (props) {
	  return function propsLinkFn (vm, el) {
	    // store resolved props info
	    vm._props = {}
	    var i = props.length
	    var prop, path, options, value
	    while (i--) {
	      prop = props[i]
	      path = prop.path
	      vm._props[path] = prop
	      options = prop.options
	      if (prop.raw === null) {
	        // initialize absent prop
	        vm._data[path] = options.type === Boolean
	          ? false
	          : options.hasOwnProperty('default')
	            ? options.default
	            : undefined
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (vm._context) {
	          if (prop.mode === propBindingModes.ONE_TIME) {
	            // one time binding
	            value = vm._context.$get(prop.parentPath)
	            _.initProp(vm, prop, value)
	          } else {
	            // dynamic binding
	            vm._bindDir('prop', el, prop, propDef)
	          }
	        } else {
	          _.warn(
	            'Cannot bind dynamic prop on a root instance' +
	            ' with no parent: ' + prop.name + '="' +
	            prop.raw + '"'
	          )
	        }
	      } else {
	        // literal, cast it and just set once
	        value = options.type === Boolean && prop.raw === ''
	          ? true
	          : _.toBoolean(_.toNumber(prop.raw))
	        _.initProp(vm, prop, value)
	      }
	    }
	  }
	}


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var Cache = __webpack_require__(24)
	var config = __webpack_require__(16)
	var dirParser = __webpack_require__(25)
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g
	var cache, tagRE, htmlRE, firstChar, lastChar
	
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex (str) {
	  return str.replace(regexEscapeRE, '\\$&')
	}
	
	/**
	 * Compile the interpolation tag regex.
	 *
	 * @return {RegExp}
	 */
	
	function compileRegex () {
	  config._delimitersChanged = false
	  var open = config.delimiters[0]
	  var close = config.delimiters[1]
	  firstChar = open.charAt(0)
	  lastChar = close.charAt(close.length - 1)
	  var firstCharRE = escapeRegex(firstChar)
	  var lastCharRE = escapeRegex(lastChar)
	  var openRE = escapeRegex(open)
	  var closeRE = escapeRegex(close)
	  tagRE = new RegExp(
	    firstCharRE + '?' + openRE +
	    '(.+?)' +
	    closeRE + lastCharRE + '?',
	    'g'
	  )
	  htmlRE = new RegExp(
	    '^' + firstCharRE + openRE +
	    '.*' +
	    closeRE + lastCharRE + '$'
	  )
	  // reset cache
	  cache = new Cache(1000)
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	exports.parse = function (text) {
	  if (config._delimitersChanged) {
	    compileRegex()
	  }
	  var hit = cache.get(text)
	  if (hit) {
	    return hit
	  }
	  text = text.replace(/\n/g, '')
	  if (!tagRE.test(text)) {
	    return null
	  }
	  var tokens = []
	  var lastIndex = tagRE.lastIndex = 0
	  var match, index, value, first, oneTime, twoWay
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	  /* eslint-enable no-cond-assign */
	    index = match.index
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      })
	    }
	    // tag token
	    first = match[1].charCodeAt(0)
	    oneTime = first === 42 // *
	    twoWay = first === 64  // @
	    value = oneTime || twoWay
	      ? match[1].slice(1)
	      : match[1]
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: htmlRE.test(match[0]),
	      oneTime: oneTime,
	      twoWay: twoWay
	    })
	    lastIndex = index + match[0].length
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    })
	  }
	  cache.put(text, tokens)
	  return tokens
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */
	
	exports.tokensToExp = function (tokens, vm) {
	  return tokens.length > 1
	    ? tokens.map(function (token) {
	        return formatToken(token, vm)
	      }).join('+')
	    : formatToken(tokens[0], vm, true)
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	function formatToken (token, vm, single) {
	  return token.tag
	    ? vm && token.oneTime
	      ? '"' + vm.$eval(token.value) + '"'
	      : inlineFilters(token.value, single)
	    : '"' + token.value + '"'
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE = /[^|]\|[^|]/
	function inlineFilters (exp, single) {
	  if (!filterRE.test(exp)) {
	    return single
	      ? exp
	      : '(' + exp + ')'
	  } else {
	    var dir = dirParser.parse(exp)[0]
	    if (!dir.filters) {
	      return '(' + exp + ')'
	    } else {
	      return 'this._applyFilters(' +
	        dir.expression + // value
	        ',null,' +       // oldValue (null for read)
	        JSON.stringify(dir.filters) + // filter descriptors
	        ',false)'        // write?
	    }
	  }
	}


/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * A doubly linked list-based Least Recently Used (LRU)
	 * cache. Will keep most recently used items while
	 * discarding least recently used items when its limit is
	 * reached. This is a bare-bone version of
	 * Rasmus Andersson's js-lru:
	 *
	 *   https://github.com/rsms/js-lru
	 *
	 * @param {Number} limit
	 * @constructor
	 */
	
	function Cache (limit) {
	  this.size = 0
	  this.limit = limit
	  this.head = this.tail = undefined
	  this._keymap = {}
	}
	
	var p = Cache.prototype
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var entry = {
	    key: key,
	    value: value
	  }
	  this._keymap[key] = entry
	  if (this.tail) {
	    this.tail.newer = entry
	    entry.older = this.tail
	  } else {
	    this.head = entry
	  }
	  this.tail = entry
	  if (this.size === this.limit) {
	    return this.shift()
	  } else {
	    this.size++
	  }
	}
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head
	  if (entry) {
	    this.head = this.head.newer
	    this.head.older = undefined
	    entry.newer = entry.older = undefined
	    this._keymap[entry.key] = undefined
	  }
	  return entry
	}
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key]
	  if (entry === undefined) return
	  if (entry === this.tail) {
	    return returnEntry
	      ? entry
	      : entry.value
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer
	    }
	    entry.newer.older = entry.older // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer // C. --> E
	  }
	  entry.newer = undefined // D --x
	  entry.older = this.tail // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry // E. <-- D
	  }
	  this.tail = entry
	  return returnEntry
	    ? entry
	    : entry.value
	}
	
	module.exports = Cache


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var Cache = __webpack_require__(24)
	var cache = new Cache(1000)
	var argRE = /^[^\{\?]+$|^'[^']*'$|^"[^"]*"$/
	var filterTokenRE = /[^\s'"]+|'[^']+'|"[^"]+"/g
	var reservedArgRE = /^in$|^-?\d+/
	
	/**
	 * Parser state
	 */
	
	var str
	var c, i, l
	var inSingle
	var inDouble
	var curly
	var square
	var paren
	var begin
	var argIndex
	var dirs
	var dir
	var lastFilterIndex
	var arg
	
	/**
	 * Push a directive object into the result Array
	 */
	
	function pushDir () {
	  dir.raw = str.slice(begin, i).trim()
	  if (dir.expression === undefined) {
	    dir.expression = str.slice(argIndex, i).trim()
	  } else if (lastFilterIndex !== begin) {
	    pushFilter()
	  }
	  if (i === 0 || dir.expression) {
	    dirs.push(dir)
	  }
	}
	
	/**
	 * Push a filter to the current directive object
	 */
	
	function pushFilter () {
	  var exp = str.slice(lastFilterIndex, i).trim()
	  var filter
	  if (exp) {
	    filter = {}
	    var tokens = exp.match(filterTokenRE)
	    filter.name = tokens[0]
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg)
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter)
	  }
	  lastFilterIndex = i + 1
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg (arg) {
	  var stripped = reservedArgRE.test(arg)
	    ? arg
	    : _.stripQuotes(arg)
	  return {
	    value: stripped || arg,
	    dynamic: !stripped
	  }
	}
	
	/**
	 * Parse a directive string into an Array of AST-like
	 * objects representing directives.
	 *
	 * Example:
	 *
	 * "click: a = a + 1 | uppercase" will yield:
	 * {
	 *   arg: 'click',
	 *   expression: 'a = a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} str
	 * @return {Array<Object>}
	 */
	
	exports.parse = function (s) {
	
	  var hit = cache.get(s)
	  if (hit) {
	    return hit
	  }
	
	  // reset parser state
	  str = s
	  inSingle = inDouble = false
	  curly = square = paren = begin = argIndex = 0
	  lastFilterIndex = 0
	  dirs = []
	  dir = {}
	  arg = null
	
	  for (i = 0, l = str.length; i < l; i++) {
	    c = str.charCodeAt(i)
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27) inSingle = !inSingle
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22) inDouble = !inDouble
	    } else if (
	      c === 0x2C && // comma
	      !paren && !curly && !square
	    ) {
	      // reached the end of a directive
	      pushDir()
	      // reset & skip the comma
	      dir = {}
	      begin = argIndex = lastFilterIndex = i + 1
	    } else if (
	      c === 0x3A && // colon
	      !dir.expression &&
	      !dir.arg
	    ) {
	      // argument
	      arg = str.slice(begin, i).trim()
	      // test for valid argument here
	      // since we may have caught stuff like first half of
	      // an object literal or a ternary expression.
	      if (argRE.test(arg)) {
	        argIndex = i + 1
	        dir.arg = _.stripQuotes(arg) || arg
	      }
	    } else if (
	      c === 0x7C && // pipe
	      str.charCodeAt(i + 1) !== 0x7C &&
	      str.charCodeAt(i - 1) !== 0x7C
	    ) {
	      if (dir.expression === undefined) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1
	        dir.expression = str.slice(argIndex, i).trim()
	      } else {
	        // already has filter
	        pushFilter()
	      }
	    } else {
	      switch (c) {
	        case 0x22: inDouble = true; break // "
	        case 0x27: inSingle = true; break // '
	        case 0x28: paren++; break         // (
	        case 0x29: paren--; break         // )
	        case 0x5B: square++; break        // [
	        case 0x5D: square--; break        // ]
	        case 0x7B: curly++; break         // {
	        case 0x7D: curly--; break         // }
	      }
	    }
	  }
	
	  if (i === 0 || begin !== i) {
	    pushDir()
	  }
	
	  cache.put(s, dirs)
	  return dirs
	}


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// NOTE: the prop internal directive is compiled and linked
	// during _initScope(), before the created hook is called.
	// The purpose is to make the initial prop values available
	// inside `created` hooks and `data` functions.
	
	var _ = __webpack_require__(11)
	var Watcher = __webpack_require__(27)
	var bindingModes = __webpack_require__(16)._propBindingModes
	
	module.exports = {
	
	  bind: function () {
	
	    var child = this.vm
	    var parent = child._context
	    // passed in from compiler directly
	    var prop = this._descriptor
	    var childKey = prop.path
	    var parentKey = prop.parentPath
	
	    // simple lock to avoid circular updates.
	    // without this it would stabilize too, but this makes
	    // sure it doesn't cause other watchers to re-evaluate.
	    var locked = false
	    function withLock (fn) {
	      return function (val) {
	        if (!locked) {
	          locked = true
	          fn(val)
	          _.nextTick(function () {
	            locked = false
	          })
	        }
	      }
	    }
	
	    this.parentWatcher = new Watcher(
	      parent,
	      parentKey,
	      withLock(function (val) {
	        if (_.assertProp(prop, val)) {
	          child[childKey] = val
	        }
	      })
	    )
	
	    // set the child initial value.
	    // !!! We need to set it also on raw data here, because
	    // props are initialized before data is fully observed
	    var value = this.parentWatcher.value
	    if (childKey === '$data') {
	      child._data = value
	    } else {
	      _.initProp(child, prop, value)
	    }
	
	    // only setup two-way binding if this is not a one-way
	    // binding.
	    if (prop.mode === bindingModes.TWO_WAY) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this
	      child.$once('hook:created', function () {
	        self.childWatcher = new Watcher(
	          child,
	          childKey,
	          withLock(function (val) {
	            parent.$set(parentKey, val)
	          })
	        )
	      })
	    }
	  },
	
	  unbind: function () {
	    if (this.parentWatcher) {
	      this.parentWatcher.teardown()
	    }
	    if (this.childWatcher) {
	      this.childWatcher.teardown()
	    }
	  }
	}


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var config = __webpack_require__(16)
	var Observer = __webpack_require__(28)
	var expParser = __webpack_require__(32)
	var batcher = __webpack_require__(34)
	var uid = 0
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String} expression
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Function} [preProcess]
	 * @constructor
	 */
	
	function Watcher (vm, expOrFn, cb, options) {
	  var isFn = typeof expOrFn === 'function'
	  this.vm = vm
	  vm._watchers.push(this)
	  this.expression = isFn ? '' : expOrFn
	  this.cb = cb
	  this.id = ++uid // uid for batching
	  this.active = true
	  options = options || {}
	  this.deep = !!options.deep
	  this.user = !!options.user
	  this.twoWay = !!options.twoWay
	  this.filters = options.filters
	  this.preProcess = options.preProcess
	  this.deps = []
	  this.newDeps = []
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn
	    this.setter = undefined
	  } else {
	    var res = expParser.parse(expOrFn, options.twoWay)
	    this.getter = res.get
	    this.setter = res.set
	  }
	  this.value = this.get()
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false
	}
	
	var p = Watcher.prototype
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	p.addDep = function (dep) {
	  var newDeps = this.newDeps
	  var old = this.deps
	  if (_.indexOf(newDeps, dep) < 0) {
	    newDeps.push(dep)
	    var i = _.indexOf(old, dep)
	    if (i < 0) {
	      dep.addSub(this)
	    } else {
	      old[i] = null
	    }
	  }
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	p.get = function () {
	  this.beforeGet()
	  var vm = this.vm
	  var value
	  try {
	    value = this.getter.call(vm, vm)
	  } catch (e) {
	    if (config.warnExpressionErrors) {
	      _.warn(
	        'Error when evaluating expression "' +
	        this.expression + '". ' +
	        (config.debug
	          ? '' :
	          'Turn on debug mode to see stack trace.'
	        ), e
	      )
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value)
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value)
	  }
	  if (this.filters) {
	    value = vm._applyFilters(value, null, this.filters, false)
	  }
	  this.afterGet()
	  return value
	}
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	p.set = function (value) {
	  var vm = this.vm
	  if (this.filters) {
	    value = vm._applyFilters(
	      value, this.value, this.filters, true)
	  }
	  try {
	    this.setter.call(vm, vm, value)
	  } catch (e) {
	    if (config.warnExpressionErrors) {
	      _.warn(
	        'Error when evaluating setter "' +
	        this.expression + '"', e
	      )
	    }
	  }
	}
	
	/**
	 * Prepare for dependency collection.
	 */
	
	p.beforeGet = function () {
	  Observer.setTarget(this)
	}
	
	/**
	 * Clean up for dependency collection.
	 */
	
	p.afterGet = function () {
	  Observer.setTarget(null)
	  var i = this.deps.length
	  while (i--) {
	    var dep = this.deps[i]
	    if (dep) {
	      dep.removeSub(this)
	    }
	  }
	  this.deps = this.newDeps
	  this.newDeps = []
	}
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	p.update = function (shallow) {
	  if (!config.async) {
	    this.run()
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued
	      ? shallow
	        ? this.shallow
	        : false
	      : !!shallow
	    this.queued = true
	    batcher.push(this)
	  }
	}
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	p.run = function () {
	  if (this.active) {
	    var value = this.get()
	    if (
	      value !== this.value ||
	      // Deep watchers and Array watchers should fire even
	      // when the value is the same, because the value may
	      // have mutated; but only do so if this is a
	      // non-shallow update (caused by a vm digest).
	      ((_.isArray(value) || this.deep) && !this.shallow)
	    ) {
	      var oldValue = this.value
	      this.value = value
	      this.cb(value, oldValue)
	    }
	    this.queued = this.shallow = false
	  }
	}
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	p.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // we can skip this if the vm if being destroyed
	    // which can improve teardown performance.
	    if (!this.vm._isBeingDestroyed) {
	      this.vm._watchers.$remove(this)
	    }
	    var i = this.deps.length
	    while (i--) {
	      this.deps[i].removeSub(this)
	    }
	    this.active = false
	    this.vm = this.cb = this.value = null
	  }
	}
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {Object} obj
	 */
	
	function traverse (obj) {
	  var key, val, i
	  for (key in obj) {
	    val = obj[key]
	    if (_.isArray(val)) {
	      i = val.length
	      while (i--) traverse(val[i])
	    } else if (_.isObject(val)) {
	      traverse(val)
	    }
	  }
	}
	
	module.exports = Watcher


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var config = __webpack_require__(16)
	var Dep = __webpack_require__(29)
	var arrayMethods = __webpack_require__(30)
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods)
	__webpack_require__(31)
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer (value) {
	  this.value = value
	  this.active = true
	  this.deps = []
	  _.define(value, '__ob__', this)
	  if (_.isArray(value)) {
	    var augment = config.proto && _.hasProto
	      ? protoAugment
	      : copyAugment
	    augment(value, arrayMethods, arrayKeys)
	    this.observeArray(value)
	  } else {
	    this.walk(value)
	  }
	}
	
	// Static methods
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	Observer.create = function (value, vm) {
	  var ob
	  if (
	    value &&
	    value.hasOwnProperty('__ob__') &&
	    value.__ob__ instanceof Observer
	  ) {
	    ob = value.__ob__
	  } else if (
	    _.isObject(value) &&
	    !Object.isFrozen(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value)
	  }
	  if (ob && vm) {
	    ob.addVm(vm)
	  }
	  return ob
	}
	
	/**
	 * Set the target watcher that is currently being evaluated.
	 *
	 * @param {Watcher} watcher
	 */
	
	Observer.setTarget = function (watcher) {
	  Dep.target = watcher
	}
	
	// Instance methods
	
	var p = Observer.prototype
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object. Properties prefixed with `$` or `_`
	 * and accessor properties are ignored.
	 *
	 * @param {Object} obj
	 */
	
	p.walk = function (obj) {
	  var keys = Object.keys(obj)
	  var i = keys.length
	  var key, prefix
	  while (i--) {
	    key = keys[i]
	    prefix = key.charCodeAt(0)
	    if (prefix !== 0x24 && prefix !== 0x5F) { // skip $ or _
	      this.convert(key, obj[key])
	    }
	  }
	}
	
	/**
	 * Try to carete an observer for a child value,
	 * and if value is array, link dep to the array.
	 *
	 * @param {*} val
	 * @return {Dep|undefined}
	 */
	
	p.observe = function (val) {
	  return Observer.create(val)
	}
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	p.observeArray = function (items) {
	  var i = items.length
	  while (i--) {
	    this.observe(items[i])
	  }
	}
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	p.convert = function (key, val) {
	  var ob = this
	  var childOb = ob.observe(val)
	  var dep = new Dep()
	  if (childOb) {
	    childOb.deps.push(dep)
	  }
	  Object.defineProperty(ob.value, key, {
	    enumerable: true,
	    configurable: true,
	    get: function () {
	      if (ob.active) {
	        dep.depend()
	      }
	      return val
	    },
	    set: function (newVal) {
	      if (newVal === val) return
	      // remove dep from old value
	      var oldChildOb = val && val.__ob__
	      if (oldChildOb) {
	        oldChildOb.deps.$remove(dep)
	      }
	      val = newVal
	      // add dep to new value
	      var newChildOb = ob.observe(newVal)
	      if (newChildOb) {
	        newChildOb.deps.push(dep)
	      }
	      dep.notify()
	    }
	  })
	}
	
	/**
	 * Notify change on all self deps on an observer.
	 * This is called when a mutable value mutates. e.g.
	 * when an Array's mutating methods are called, or an
	 * Object's $add/$delete are called.
	 */
	
	p.notify = function () {
	  var deps = this.deps
	  for (var i = 0, l = deps.length; i < l; i++) {
	    deps[i].notify()
	  }
	}
	
	/**
	 * Add an owner vm, so that when $add/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	p.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm)
	}
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	p.removeVm = function (vm) {
	  this.vms.$remove(vm)
	}
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function protoAugment (target, src) {
	  target.__proto__ = src
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment (target, src, keys) {
	  var i = keys.length
	  var key
	  while (i--) {
	    key = keys[i]
	    _.define(target, key, src[key])
	  }
	}
	
	module.exports = Observer


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	
	function Dep () {
	  this.subs = []
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null
	
	var p = Dep.prototype
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	p.addSub = function (sub) {
	  this.subs.push(sub)
	}
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	p.removeSub = function (sub) {
	  this.subs.$remove(sub)
	}
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	p.depend = function () {
	  if (Dep.target) {
	    Dep.target.addDep(this)
	  }
	}
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	p.notify = function () {
	  // stablize the subscriber list first
	  var subs = _.toArray(this.subs)
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update()
	  }
	}
	
	module.exports = Dep


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var arrayProto = Array.prototype
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method]
	  _.define(arrayMethods, method, function mutator () {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length
	    var args = new Array(i)
	    while (i--) {
	      args[i] = arguments[i]
	    }
	    var result = original.apply(this, args)
	    var ob = this.__ob__
	    var inserted
	    switch (method) {
	      case 'push':
	        inserted = args
	        break
	      case 'unshift':
	        inserted = args
	        break
	      case 'splice':
	        inserted = args.slice(2)
	        break
	    }
	    if (inserted) ob.observeArray(inserted)
	    // notify change
	    ob.notify()
	    return result
	  })
	})
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	_.define(
	  arrayProto,
	  '$set',
	  function $set (index, val) {
	    if (index >= this.length) {
	      this.length = index + 1
	    }
	    return this.splice(index, 1, val)[0]
	  }
	)
	
	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */
	
	_.define(
	  arrayProto,
	  '$remove',
	  function $remove (index) {
	    /* istanbul ignore if */
	    if (!this.length) return
	    if (typeof index !== 'number') {
	      index = _.indexOf(this, index)
	    }
	    if (index > -1) {
	      return this.splice(index, 1)
	    }
	  }
	)
	
	module.exports = arrayMethods


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var objProto = Object.prototype
	
	/**
	 * Add a new property to an observed object
	 * and emits corresponding event
	 *
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */
	
	_.define(
	  objProto,
	  '$add',
	  function $add (key, val) {
	    if (this.hasOwnProperty(key)) return
	    var ob = this.__ob__
	    if (!ob || _.isReserved(key)) {
	      this[key] = val
	      return
	    }
	    ob.convert(key, val)
	    ob.notify()
	    if (ob.vms) {
	      var i = ob.vms.length
	      while (i--) {
	        var vm = ob.vms[i]
	        vm._proxy(key)
	        vm._digest()
	      }
	    }
	  }
	)
	
	/**
	 * Set a property on an observed object, calling add to
	 * ensure the property is observed.
	 *
	 * @param {String} key
	 * @param {*} val
	 * @public
	 */
	
	_.define(
	  objProto,
	  '$set',
	  function $set (key, val) {
	    this.$add(key, val)
	    this[key] = val
	  }
	)
	
	/**
	 * Deletes a property from an observed object
	 * and emits corresponding event
	 *
	 * @param {String} key
	 * @public
	 */
	
	_.define(
	  objProto,
	  '$delete',
	  function $delete (key) {
	    if (!this.hasOwnProperty(key)) return
	    delete this[key]
	    var ob = this.__ob__
	    if (!ob || _.isReserved(key)) {
	      return
	    }
	    ob.notify()
	    if (ob.vms) {
	      var i = ob.vms.length
	      while (i--) {
	        var vm = ob.vms[i]
	        vm._unproxy(key)
	        vm._digest()
	      }
	    }
	  }
	)


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var Path = __webpack_require__(33)
	var Cache = __webpack_require__(24)
	var expressionCache = new Cache(1000)
	
	var allowedKeywords =
	  'Math,Date,this,true,false,null,undefined,Infinity,NaN,' +
	  'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' +
	  'encodeURIComponent,parseInt,parseFloat'
	var allowedKeywordsRE =
	  new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)')
	
	// keywords that don't make sense inside expressions
	var improperKeywords =
	  'break,case,class,catch,const,continue,debugger,default,' +
	  'delete,do,else,export,extends,finally,for,function,if,' +
	  'import,in,instanceof,let,return,super,switch,throw,try,' +
	  'var,while,with,yield,enum,await,implements,package,' +
	  'proctected,static,interface,private,public'
	var improperKeywordsRE =
	  new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)')
	
	var wsRE = /\s/g
	var newlineRE = /\n/g
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g
	var restoreRE = /"(\d+)"/g
	var pathTestRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/
	var pathReplaceRE = /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g
	var booleanLiteralRE = /^(true|false)$/
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = []
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save (str, isString) {
	  var i = saved.length
	  saved[i] = isString
	    ? str.replace(newlineRE, '\\n')
	    : str
	  return '"' + i + '"'
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite (raw) {
	  var c = raw.charAt(0)
	  var path = raw.slice(1)
	  if (allowedKeywordsRE.test(path)) {
	    return raw
	  } else {
	    path = path.indexOf('"') > -1
	      ? path.replace(restoreRE, restore)
	      : path
	    return c + 'scope.' + path
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore (str, i) {
	  return saved[i]
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function compileExpFns (exp, needSet) {
	  if (improperKeywordsRE.test(exp)) {
	    _.warn(
	      'Avoid using reserved keywords in expression: ' + exp
	    )
	  }
	  // reset state
	  saved.length = 0
	  // save strings and object literal keys
	  var body = exp
	    .replace(saveRE, save)
	    .replace(wsRE, '')
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body)
	    .replace(pathReplaceRE, rewrite)
	    .replace(restoreRE, restore)
	  var getter = makeGetter(body)
	  if (getter) {
	    return {
	      get: getter,
	      body: body,
	      set: needSet
	        ? makeSetter(body)
	        : null
	    }
	  }
	}
	
	/**
	 * Compile getter setters for a simple path.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compilePathFns (exp) {
	  var getter, path
	  if (exp.indexOf('[') < 0) {
	    // really simple path
	    path = exp.split('.')
	    path.raw = exp
	    getter = Path.compileGetter(path)
	  } else {
	    // do the real parsing
	    path = Path.parse(exp)
	    getter = path.get
	  }
	  return {
	    get: getter,
	    // always generate setter for simple paths
	    set: function (obj, val) {
	      Path.set(obj, path, val)
	    }
	  }
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetter (body) {
	  try {
	    return new Function('scope', 'return ' + body + ';')
	  } catch (e) {
	    _.warn(
	      'Invalid expression. ' +
	      'Generated function body: ' + body
	    )
	  }
	}
	
	/**
	 * Build a setter function.
	 *
	 * This is only needed in rare situations like "a[b]" where
	 * a settable path requires dynamic evaluation.
	 *
	 * This setter function may throw error when called if the
	 * expression body is not a valid left-hand expression in
	 * assignment.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeSetter (body) {
	  try {
	    return new Function('scope', 'value', body + '=value;')
	  } catch (e) {
	    _.warn('Invalid setter function body: ' + body)
	  }
	}
	
	/**
	 * Check for setter existence on a cache hit.
	 *
	 * @param {Function} hit
	 */
	
	function checkSetter (hit) {
	  if (!hit.set) {
	    hit.set = makeSetter(hit.body)
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	exports.parse = function (exp, needSet) {
	  exp = exp.trim()
	  // try cache
	  var hit = expressionCache.get(exp)
	  if (hit) {
	    if (needSet) {
	      checkSetter(hit)
	    }
	    return hit
	  }
	  // we do a simple path check to optimize for them.
	  // the check fails valid paths with unusal whitespaces,
	  // but that's too rare and we don't care.
	  // also skip boolean literals and paths that start with
	  // global "Math"
	  var res = exports.isSimplePath(exp)
	    ? compilePathFns(exp)
	    : compileExpFns(exp, needSet)
	  expressionCache.put(exp, res)
	  return res
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	exports.isSimplePath = function (exp) {
	  return pathTestRE.test(exp) &&
	    // don't treat true/false as paths
	    !booleanLiteralRE.test(exp) &&
	    // Math constants e.g. Math.PI, Math.E etc.
	    exp.slice(0, 5) !== 'Math.'
	}


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var Cache = __webpack_require__(24)
	var pathCache = new Cache(1000)
	var identRE = exports.identRE = /^[$_a-zA-Z]+[\w$]*$/
	
	/**
	 * Path-parsing algorithm scooped from Polymer/observe-js
	 */
	
	var pathStateMachine = {
	  'beforePath': {
	    'ws': ['beforePath'],
	    'ident': ['inIdent', 'append'],
	    '[': ['beforeElement'],
	    'eof': ['afterPath']
	  },
	
	  'inPath': {
	    'ws': ['inPath'],
	    '.': ['beforeIdent'],
	    '[': ['beforeElement'],
	    'eof': ['afterPath']
	  },
	
	  'beforeIdent': {
	    'ws': ['beforeIdent'],
	    'ident': ['inIdent', 'append']
	  },
	
	  'inIdent': {
	    'ident': ['inIdent', 'append'],
	    '0': ['inIdent', 'append'],
	    'number': ['inIdent', 'append'],
	    'ws': ['inPath', 'push'],
	    '.': ['beforeIdent', 'push'],
	    '[': ['beforeElement', 'push'],
	    'eof': ['afterPath', 'push'],
	    ']': ['inPath', 'push']
	  },
	
	  'beforeElement': {
	    'ws': ['beforeElement'],
	    '0': ['afterZero', 'append'],
	    'number': ['inIndex', 'append'],
	    "'": ['inSingleQuote', 'append', ''],
	    '"': ['inDoubleQuote', 'append', ''],
	    'ident': ['inIdent', 'append', '*']
	  },
	
	  'afterZero': {
	    'ws': ['afterElement', 'push'],
	    ']': ['inPath', 'push']
	  },
	
	  'inIndex': {
	    '0': ['inIndex', 'append'],
	    'number': ['inIndex', 'append'],
	    'ws': ['afterElement'],
	    ']': ['inPath', 'push']
	  },
	
	  'inSingleQuote': {
	    "'": ['afterElement'],
	    'eof': 'error',
	    'else': ['inSingleQuote', 'append']
	  },
	
	  'inDoubleQuote': {
	    '"': ['afterElement'],
	    'eof': 'error',
	    'else': ['inDoubleQuote', 'append']
	  },
	
	  'afterElement': {
	    'ws': ['afterElement'],
	    ']': ['inPath', 'push']
	  }
	}
	
	function noop () {}
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType (ch) {
	  if (ch === undefined) {
	    return 'eof'
	  }
	
	  var code = ch.charCodeAt(0)
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30: // 0
	      return ch
	
	    case 0x5F: // _
	    case 0x24: // $
	      return 'ident'
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0:  // No-break space
	    case 0xFEFF:  // Byte Order Mark
	    case 0x2028:  // Line Separator
	    case 0x2029:  // Paragraph Separator
	      return 'ws'
	  }
	
	  // a-z, A-Z
	  if (
	    (code >= 0x61 && code <= 0x7A) ||
	    (code >= 0x41 && code <= 0x5A)
	  ) {
	    return 'ident'
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number'
	  }
	
	  return 'else'
	}
	
	/**
	 * Parse a string path into an array of segments
	 * Todo implement cache
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath (path) {
	  var keys = []
	  var index = -1
	  var mode = 'beforePath'
	  var c, newChar, key, type, transition, action, typeMap
	
	  var actions = {
	    push: function () {
	      if (key === undefined) {
	        return
	      }
	      keys.push(key)
	      key = undefined
	    },
	    append: function () {
	      if (key === undefined) {
	        key = newChar
	      } else {
	        key += newChar
	      }
	    }
	  }
	
	  function maybeUnescapeQuote () {
	    var nextChar = path[index + 1]
	    if ((mode === 'inSingleQuote' && nextChar === "'") ||
	        (mode === 'inDoubleQuote' && nextChar === '"')) {
	      index++
	      newChar = nextChar
	      actions.append()
	      return true
	    }
	  }
	
	  while (mode) {
	    index++
	    c = path[index]
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue
	    }
	
	    type = getPathCharType(c)
	    typeMap = pathStateMachine[mode]
	    transition = typeMap[type] || typeMap['else'] || 'error'
	
	    if (transition === 'error') {
	      return // parse error
	    }
	
	    mode = transition[0]
	    action = actions[transition[1]] || noop
	    newChar = transition[2]
	    newChar = newChar === undefined
	      ? c
	      : newChar === '*'
	        ? newChar + c
	        : newChar
	    action()
	
	    if (mode === 'afterPath') {
	      keys.raw = path
	      return keys
	    }
	  }
	}
	
	/**
	 * Format a accessor segment based on its type.
	 *
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function formatAccessor (key) {
	  if (identRE.test(key)) { // identifier
	    return '.' + key
	  } else if (+key === key >>> 0) { // bracket index
	    return '[' + key + ']'
	  } else if (key.charAt(0) === '*') {
	    return '[o' + formatAccessor(key.slice(1)) + ']'
	  } else { // bracket string
	    return '["' + key.replace(/"/g, '\\"') + '"]'
	  }
	}
	
	/**
	 * Compiles a getter function with a fixed path.
	 * The fixed path getter supresses errors.
	 *
	 * @param {Array} path
	 * @return {Function}
	 */
	
	exports.compileGetter = function (path) {
	  var body = 'return o' + path.map(formatAccessor).join('')
	  return new Function('o', body)
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	exports.parse = function (path) {
	  var hit = pathCache.get(path)
	  if (!hit) {
	    hit = parsePath(path)
	    if (hit) {
	      hit.get = exports.compileGetter(hit)
	      pathCache.put(path, hit)
	    }
	  }
	  return hit
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	exports.get = function (obj, path) {
	  path = exports.parse(path)
	  if (path) {
	    return path.get(obj)
	  }
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	exports.set = function (obj, path, val) {
	  var original = obj
	  if (typeof path === 'string') {
	    path = exports.parse(path)
	  }
	  if (!path || !_.isObject(obj)) {
	    return false
	  }
	  var last, key
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj
	    key = path[i]
	    if (key.charAt(0) === '*') {
	      key = original[key.slice(1)]
	    }
	    if (i < l - 1) {
	      obj = obj[key]
	      if (!_.isObject(obj)) {
	        obj = {}
	        last.$add(key, obj)
	        warnNonExistent(path)
	      }
	    } else {
	      if (_.isArray(obj)) {
	        obj.$set(key, val)
	      } else if (key in obj) {
	        obj[key] = val
	      } else {
	        obj.$add(key, val)
	        warnNonExistent(path)
	      }
	    }
	  }
	  return true
	}
	
	function warnNonExistent (path) {
	  _.warn(
	    'You are setting a non-existent path "' + path.raw + '" ' +
	    'on a vm instance. Consider pre-initializing the property ' +
	    'with the "data" option for more reliable reactivity ' +
	    'and better performance.'
	  )
	}


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var config = __webpack_require__(16)
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queue = []
	var userQueue = []
	var has = {}
	var waiting = false
	var flushing = false
	var internalQueueDepleted = false
	
	/**
	 * Reset the batcher's state.
	 */
	
	function reset () {
	  queue = []
	  userQueue = []
	  has = {}
	  waiting = flushing = internalQueueDepleted = false
	}
	
	/**
	 * Flush both queues and run the jobs.
	 */
	
	function flush () {
	  flushing = true
	  run(queue)
	  internalQueueDepleted = true
	  run(userQueue)
	  reset()
	}
	
	/**
	 * Run the jobs in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function run (queue) {
	  // do not cache length because more jobs might be pushed
	  // as we run existing jobs
	  for (var i = 0; i < queue.length; i++) {
	    queue[i].run()
	  }
	}
	
	/**
	 * Push a job into the job queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Object} job
	 *   properties:
	 *   - {String|Number} id
	 *   - {Function}      run
	 */
	
	exports.push = function (job) {
	  var id = job.id
	  if (!id || !has[id] || flushing) {
	    if (!has[id]) {
	      has[id] = 1
	    } else {
	      has[id]++
	      // detect possible infinite update loops
	      if (has[id] > config._maxUpdateCount) {
	        _.warn(
	          'You may have an infinite update loop for the ' +
	          'watcher with expression: "' + job.expression + '".'
	        )
	        return
	      }
	    }
	    // A user watcher callback could trigger another
	    // directive update during the flushing; at that time
	    // the directive queue would already have been run, so
	    // we call that update immediately as it is pushed.
	    if (flushing && !job.user && internalQueueDepleted) {
	      job.run()
	      return
	    }
	    ;(job.user ? userQueue : queue).push(job)
	    if (!waiting) {
	      waiting = true
	      _.nextTick(flush)
	    }
	  }
	}


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var Cache = __webpack_require__(24)
	var templateCache = new Cache(1000)
	var idSelectorCache = new Cache(1000)
	
	var map = {
	  _default: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [
	    2,
	    '<table><tbody></tbody><colgroup>',
	    '</colgroup></table>'
	  ]
	}
	
	map.td =
	map.th = [
	  3,
	  '<table><tbody><tr>',
	  '</tr></tbody></table>'
	]
	
	map.option =
	map.optgroup = [
	  1,
	  '<select multiple="multiple">',
	  '</select>'
	]
	
	map.thead =
	map.tbody =
	map.colgroup =
	map.caption =
	map.tfoot = [1, '<table>', '</table>']
	
	map.g =
	map.defs =
	map.symbol =
	map.use =
	map.image =
	map.text =
	map.circle =
	map.ellipse =
	map.line =
	map.path =
	map.polygon =
	map.polyline =
	map.rect = [
	  1,
	  '<svg ' +
	    'xmlns="http://www.w3.org/2000/svg" ' +
	    'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
	    'xmlns:ev="http://www.w3.org/2001/xml-events"' +
	    'version="1.1">',
	  '</svg>'
	]
	
	var tagRE = /<([\w:]+)/
	var entityRE = /&\w+;/
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment (templateString) {
	  // try a cache hit first
	  var hit = templateCache.get(templateString)
	  if (hit) {
	    return hit
	  }
	
	  var frag = document.createDocumentFragment()
	  var tagMatch = templateString.match(tagRE)
	  var entityMatch = entityRE.test(templateString)
	
	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(
	      document.createTextNode(templateString)
	    )
	  } else {
	
	    var tag = tagMatch && tagMatch[1]
	    var wrap = map[tag] || map._default
	    var depth = wrap[0]
	    var prefix = wrap[1]
	    var suffix = wrap[2]
	    var node = document.createElement('div')
	
	    node.innerHTML = prefix + templateString.trim() + suffix
	    while (depth--) {
	      node = node.lastChild
	    }
	
	    var child
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	    /* eslint-enable no-cond-assign */
	      frag.appendChild(child)
	    }
	  }
	
	  templateCache.put(templateString, frag)
	  return frag
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment (node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (
	    _.isTemplate(node) &&
	    node.content instanceof DocumentFragment
	  ) {
	    return node.content
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent)
	  }
	  // normal node, clone it to avoid mutating the original
	  var clone = exports.clone(node)
	  var frag = document.createDocumentFragment()
	  var child
	  /* eslint-disable no-cond-assign */
	  while (child = clone.firstChild) {
	  /* eslint-enable no-cond-assign */
	    frag.appendChild(child)
	  }
	  return frag
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/show_bug.cgi?id=137755
	var hasBrokenTemplate = _.inBrowser
	  ? (function () {
	      var a = document.createElement('div')
	      a.innerHTML = '<template>1</template>'
	      return !a.cloneNode(true).firstChild.innerHTML
	    })()
	  : false
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = _.inBrowser
	  ? (function () {
	      var t = document.createElement('textarea')
	      t.placeholder = 't'
	      return t.cloneNode(true).value === 't'
	    })()
	  : false
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	exports.clone = function (node) {
	  var res = node.cloneNode(true)
	  var i, original, cloned
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    original = node.querySelectorAll('template')
	    if (original.length) {
	      cloned = res.querySelectorAll('template')
	      i = cloned.length
	      while (i--) {
	        cloned[i].parentNode.replaceChild(
	          original[i].cloneNode(true),
	          cloned[i]
	        )
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value
	    } else {
	      original = node.querySelectorAll('textarea')
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea')
	        i = cloned.length
	        while (i--) {
	          cloned[i].value = original[i].value
	        }
	      }
	    }
	  }
	  return res
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *    Possible values include:
	 *    - DocumentFragment object
	 *    - Node object of type Template
	 *    - id selector: '#some-template-id'
	 *    - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} clone
	 * @param {Boolean} noSelector
	 * @return {DocumentFragment|undefined}
	 */
	
	exports.parse = function (template, clone, noSelector) {
	  var node, frag
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (template instanceof DocumentFragment) {
	    return clone
	      ? template.cloneNode(true)
	      : template
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!noSelector && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template)
	      if (!frag) {
	        node = document.getElementById(template.slice(1))
	        if (node) {
	          frag = nodeToFragment(node)
	          // save selector to cache
	          idSelectorCache.put(template, frag)
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template)
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template)
	  }
	
	  return frag && clone
	    ? exports.clone(frag)
	    : frag
	}


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var templateParser = __webpack_require__(35)
	
	module.exports = {
	
	  isLiteral: true,
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   v-component="comp"
	   *
	   * - dynamic:
	   *   v-component="{{currentView}}"
	   */
	
	  bind: function () {
	    if (!this.el.__vue__) {
	      // create a ref anchor
	      this.anchor = _.createAnchor('v-component')
	      _.replace(this.el, this.anchor)
	      // check keep-alive options.
	      // If yes, instead of destroying the active vm when
	      // hiding (v-if) or switching (dynamic literal) it,
	      // we simply remove it from the DOM and save it in a
	      // cache object, with its constructor id as the key.
	      this.keepAlive = this._checkParam('keep-alive') != null
	      // wait for event before insertion
	      this.readyEvent = this._checkParam('wait-for')
	      // check ref
	      this.refID = _.attr(this.el, 'ref')
	      if (this.keepAlive) {
	        this.cache = {}
	      }
	      // check inline-template
	      if (this._checkParam('inline-template') !== null) {
	        // extract inline template as a DocumentFragment
	        this.template = _.extractContent(this.el, true)
	      }
	      // component resolution related state
	      this._pendingCb =
	      this.ctorId =
	      this.Ctor = null
	      // if static, build right now.
	      if (!this._isDynamicLiteral) {
	        this.resolveCtor(this.expression, _.bind(this.initStatic, this))
	      } else {
	        // check dynamic component params
	        this.transMode = this._checkParam('transition-mode')
	      }
	    } else {
	      _.warn(
	        'Do not create a component that only contains ' +
	        'a single other component - they will be mounted to ' +
	        'the same element and cause conflict. Wrap it with ' +
	        'an outer element.'
	      )
	    }
	  },
	
	  /**
	   * Initialize a static component.
	   */
	
	  initStatic: function () {
	    var child = this.build()
	    var anchor = this.anchor
	    this.setCurrent(child)
	    if (!this.readyEvent) {
	      child.$before(anchor)
	    } else {
	      child.$once(this.readyEvent, function () {
	        child.$before(anchor)
	      })
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. v-component="{{view}}"
	   */
	
	  update: function (value) {
	    this.setComponent(value)
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * @param {String} value
	   * @param {Object} data
	   * @param {Function} afterBuild
	   * @param {Function} afterTransition
	   */
	
	  setComponent: function (value, data, afterBuild, afterTransition) {
	    this.invalidatePending()
	    if (!value) {
	      // just remove current
	      this.unbuild(true)
	      this.remove(this.childVM, afterTransition)
	      this.unsetCurrent()
	    } else {
	      this.resolveCtor(value, _.bind(function () {
	        this.unbuild(true)
	        var newComponent = this.build(data)
	        /* istanbul ignore if */
	        if (afterBuild) afterBuild(newComponent)
	        var self = this
	        if (this.readyEvent) {
	          newComponent.$once(this.readyEvent, function () {
	            self.transition(newComponent, afterTransition)
	          })
	        } else {
	          this.transition(newComponent, afterTransition)
	        }
	      }, this))
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   */
	
	  resolveCtor: function (id, cb) {
	    var self = this
	    this._pendingCb = _.cancellable(function (ctor) {
	      self.ctorId = id
	      self.Ctor = ctor
	      cb()
	    })
	    this.vm._resolveComponent(id, this._pendingCb)
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function () {
	    if (this._pendingCb) {
	      this._pendingCb.cancel()
	      this._pendingCb = null
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [data]
	   * @return {Vue} - the created instance
	   */
	
	  build: function (data) {
	    if (this.keepAlive) {
	      var cached = this.cache[this.ctorId]
	      if (cached) {
	        return cached
	      }
	    }
	    if (this.Ctor) {
	      var parent = this._host || this.vm
	      var el = templateParser.clone(this.el)
	      var child = parent.$addChild({
	        el: el,
	        data: data,
	        template: this.template,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.template,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        _context: this.vm
	      }, this.Ctor)
	      if (this.keepAlive) {
	        this.cache[this.ctorId] = child
	      }
	      return child
	    }
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function (defer) {
	    var child = this.childVM
	    if (!child || this.keepAlive) {
	      return
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer)
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function (child, cb) {
	    var keepAlive = this.keepAlive
	    if (child) {
	      child.$remove(function () {
	        if (!keepAlive) child._cleanup()
	        if (cb) cb()
	      })
	    } else if (cb) {
	      cb()
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function (target, cb) {
	    var self = this
	    var current = this.childVM
	    this.unsetCurrent()
	    this.setCurrent(target)
	    switch (self.transMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb)
	        })
	        break
	      case 'out-in':
	        self.remove(current, function () {
	          if (!target._isDestroyed) {
	            target.$before(self.anchor, cb)
	          }
	        })
	        break
	      default:
	        self.remove(current)
	        target.$before(self.anchor, cb)
	    }
	  },
	
	  /**
	   * Set childVM and parent ref
	   */
	
	  setCurrent: function (child) {
	    this.childVM = child
	    var refID = child._refID || this.refID
	    if (refID) {
	      this.vm.$[refID] = child
	    }
	  },
	
	  /**
	   * Unset childVM and parent ref
	   */
	
	  unsetCurrent: function () {
	    var child = this.childVM
	    this.childVM = null
	    var refID = (child && child._refID) || this.refID
	    if (refID) {
	      this.vm.$[refID] = null
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function () {
	    this.invalidatePending()
	    // Do not defer cleanup when unbinding
	    this.unbuild()
	    this.unsetCurrent()
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy()
	      }
	      this.cache = null
	    }
	  }
	}


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var config = __webpack_require__(16)
	var templateParser = __webpack_require__(35)
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-repeat.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	exports.transclude = function (el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el)
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for block instances)
	  if (_.isTemplate(el)) {
	    el = templateParser.parse(el)
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<content></content>'
	    }
	    if (options.template) {
	      options._content = _.extractContent(el)
	      el = transcludeTemplate(el, options)
	    }
	  }
	  if (el instanceof DocumentFragment) {
	    // anchors for block instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    _.prepend(_.createAnchor('v-start', true), el)
	    el.appendChild(_.createAnchor('v-end', true))
	  }
	  return el
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate (el, options) {
	  var template = options.template
	  var frag = templateParser.parse(template, true)
	  if (!frag) {
	    _.warn('Invalid template option: ' + template)
	  } else {
	    var replacer = frag.firstChild
	    var tag = replacer.tagName && replacer.tagName.toLowerCase()
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        _.warn(
	          'You are mounting an instance with a template to ' +
	          '<body>. This will replace <body> entirely. You ' +
	          'should probably use `replace: false` here.'
	        )
	      }
	      if (
	        // multi-children template
	        frag.childNodes.length > 1 ||
	        // non-element template
	        replacer.nodeType !== 1 ||
	        // when root node is <component>, is an element
	        // directive, or has v-repeat, the instance could
	        // end up having multiple top-level nodes, thus
	        // becoming a block instance.
	        tag === 'component' ||
	        _.resolveAsset(options, 'elementDirectives', tag) ||
	        replacer.hasAttribute(config.prefix + 'repeat')
	      ) {
	        return frag
	      } else {
	        options._replacerAttrs = extractAttrs(replacer)
	        mergeAttrs(el, replacer)
	        return replacer
	      }
	    } else {
	      el.appendChild(frag)
	      return el
	    }
	  }
	}
	
	/**
	 * Helper to extract a component container's attribute names
	 * into a map.
	 *
	 * @param {Element} el
	 * @return {Object}
	 */
	
	function extractAttrs (el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    var attrs = el.attributes
	    var res = {}
	    var i = attrs.length
	    while (i--) {
	      res[attrs[i].name] = attrs[i].value
	    }
	    return res
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs (from, to) {
	  var attrs = from.attributes
	  var i = attrs.length
	  var name, value
	  while (i--) {
	    name = attrs[i].name
	    value = attrs[i].value
	    if (!to.hasAttribute(name)) {
	      to.setAttribute(name, value)
	    } else if (name === 'class') {
	      to.className = to.className + ' ' + value
	    }
	  }
	}


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// manipulation directives
	exports.text = __webpack_require__(40)
	exports.html = __webpack_require__(41)
	exports.attr = __webpack_require__(42)
	exports.show = __webpack_require__(43)
	exports['class'] = __webpack_require__(45)
	exports.el = __webpack_require__(46)
	exports.ref = __webpack_require__(47)
	exports.cloak = __webpack_require__(48)
	exports.style = __webpack_require__(39)
	exports.transition = __webpack_require__(49)
	
	// event listener directives
	exports.on = __webpack_require__(52)
	exports.model = __webpack_require__(53)
	
	// logic control directives
	exports.repeat = __webpack_require__(58)
	exports['if'] = __webpack_require__(59)
	
	// internal directives that should not be used directly
	// but we still want to expose them for advanced usage.
	exports._component = __webpack_require__(36)
	exports._prop = __webpack_require__(26)


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var prefixes = ['-webkit-', '-moz-', '-ms-']
	var camelPrefixes = ['Webkit', 'Moz', 'ms']
	var importantRE = /!important;?$/
	var camelRE = /([a-z])([A-Z])/g
	var testEl = null
	var propCache = {}
	
	module.exports = {
	
	  deep: true,
	
	  update: function (value) {
	    if (this.arg) {
	      this.setProp(this.arg, value)
	    } else {
	      if (typeof value === 'object') {
	        this.objectHandler(value)
	      } else {
	        this.el.style.cssText = value
	      }
	    }
	  },
	
	  objectHandler: function (value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {})
	    var prop, val
	    for (prop in cache) {
	      if (!(prop in value)) {
	        this.setProp(prop, null)
	        delete cache[prop]
	      }
	    }
	    for (prop in value) {
	      val = value[prop]
	      if (val !== cache[prop]) {
	        cache[prop] = val
	        this.setProp(prop, val)
	      }
	    }
	  },
	
	  setProp: function (prop, value) {
	    prop = normalize(prop)
	    if (!prop) return // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += ''
	    if (value) {
	      var isImportant = importantRE.test(value)
	        ? 'important'
	        : ''
	      if (isImportant) {
	        value = value.replace(importantRE, '').trim()
	      }
	      this.el.style.setProperty(prop, value, isImportant)
	    } else {
	      this.el.style.removeProperty(prop)
	    }
	  }
	
	}
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize (prop) {
	  if (propCache[prop]) {
	    return propCache[prop]
	  }
	  var res = prefix(prop)
	  propCache[prop] = propCache[res] = res
	  return res
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix (prop) {
	  prop = prop.replace(camelRE, '$1-$2').toLowerCase()
	  var camel = _.camelize(prop)
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1)
	  if (!testEl) {
	    testEl = document.createElement('div')
	  }
	  if (camel in testEl.style) {
	    return prop
	  }
	  var i = prefixes.length
	  var prefixed
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop
	    }
	  }
	}


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	
	module.exports = {
	
	  bind: function () {
	    this.attr = this.el.nodeType === 3
	      ? 'data'
	      : 'textContent'
	  },
	
	  update: function (value) {
	    this.el[this.attr] = _.toString(value)
	  }
	}


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var templateParser = __webpack_require__(35)
	
	module.exports = {
	
	  bind: function () {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = []
	      // replace the placeholder with proper anchor
	      this.anchor = _.createAnchor('v-html')
	      _.replace(this.el, this.anchor)
	    }
	  },
	
	  update: function (value) {
	    value = _.toString(value)
	    if (this.nodes) {
	      this.swap(value)
	    } else {
	      this.el.innerHTML = value
	    }
	  },
	
	  swap: function (value) {
	    // remove old nodes
	    var i = this.nodes.length
	    while (i--) {
	      _.remove(this.nodes[i])
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = templateParser.parse(value, true, true)
	    // save a reference to these nodes so we can remove later
	    this.nodes = _.toArray(frag.childNodes)
	    _.before(frag, this.anchor)
	  }
	}


/***/ },
/* 42 */
/***/ function(module, exports) {

	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink'
	var xlinkRE = /^xlink:/
	
	module.exports = {
	
	  priority: 850,
	
	  update: function (value) {
	    if (this.arg) {
	      this.setAttr(this.arg, value)
	    } else if (typeof value === 'object') {
	      this.objectHandler(value)
	    }
	  },
	
	  objectHandler: function (value) {
	    // cache object attrs so that only changed attrs
	    // are actually updated.
	    var cache = this.cache || (this.cache = {})
	    var attr, val
	    for (attr in cache) {
	      if (!(attr in value)) {
	        this.setAttr(attr, null)
	        delete cache[attr]
	      }
	    }
	    for (attr in value) {
	      val = value[attr]
	      if (val !== cache[attr]) {
	        cache[attr] = val
	        this.setAttr(attr, val)
	      }
	    }
	  },
	
	  setAttr: function (attr, value) {
	    if (value || value === 0) {
	      if (xlinkRE.test(attr)) {
	        this.el.setAttributeNS(xlinkNS, attr, value)
	      } else {
	        this.el.setAttribute(attr, value)
	      }
	    } else {
	      this.el.removeAttribute(attr)
	    }
	  }
	
	}


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var transition = __webpack_require__(44)
	
	module.exports = function (value) {
	  var el = this.el
	  transition.apply(el, value ? 1 : -1, function () {
	    el.style.display = value ? '' : 'none'
	  }, this.vm)
	}


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	
	/**
	 * Append with transition.
	 *
	 * @oaram {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	exports.append = function (el, target, vm, cb) {
	  apply(el, 1, function () {
	    target.appendChild(el)
	  }, vm, cb)
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @oaram {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	exports.before = function (el, target, vm, cb) {
	  apply(el, 1, function () {
	    _.before(el, target)
	  }, vm, cb)
	}
	
	/**
	 * Remove with transition.
	 *
	 * @oaram {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	exports.remove = function (el, vm, cb) {
	  apply(el, -1, function () {
	    _.remove(el)
	  }, vm, cb)
	}
	
	/**
	 * Remove by appending to another parent with transition.
	 * This is only used in block operations.
	 *
	 * @oaram {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	exports.removeThenAppend = function (el, target, vm, cb) {
	  apply(el, -1, function () {
	    target.appendChild(el)
	  }, vm, cb)
	}
	
	/**
	 * Append the childNodes of a fragment to target.
	 *
	 * @param {DocumentFragment} block
	 * @param {Node} target
	 * @param {Vue} vm
	 */
	
	exports.blockAppend = function (block, target, vm) {
	  var nodes = _.toArray(block.childNodes)
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    exports.before(nodes[i], target, vm)
	  }
	}
	
	/**
	 * Remove a block of nodes between two edge nodes.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 */
	
	exports.blockRemove = function (start, end, vm) {
	  var node = start.nextSibling
	  var next
	  while (node !== end) {
	    next = node.nextSibling
	    exports.remove(node, vm)
	    node = next
	  }
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @oaram {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	var apply = exports.apply = function (el, direction, op, vm, cb) {
	  var transition = el.__v_trans
	  if (
	    !transition ||
	    // skip if there are no js hooks and CSS transition is
	    // not supported
	    (!transition.hooks && !_.transitionEndEvent) ||
	    // skip transitions for initial compile
	    !vm._isCompiled ||
	    // if the vm is being manipulated by a parent directive
	    // during the parent's compilation phase, skip the
	    // animation.
	    (vm.$parent && !vm.$parent._isCompiled)
	  ) {
	    op()
	    if (cb) cb()
	    return
	  }
	  var action = direction > 0 ? 'enter' : 'leave'
	  transition[action](op, cb)
	}


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var addClass = _.addClass
	var removeClass = _.removeClass
	
	module.exports = {
	
	  update: function (value) {
	    if (this.arg) {
	      // single toggle
	      var method = value ? addClass : removeClass
	      method(this.el, this.arg)
	    } else {
	      this.cleanup()
	      if (value && typeof value === 'string') {
	        // raw class text
	        addClass(this.el, value)
	        this.lastVal = value
	      } else if (_.isPlainObject(value)) {
	        // object toggle
	        for (var key in value) {
	          if (value[key]) {
	            addClass(this.el, key)
	          } else {
	            removeClass(this.el, key)
	          }
	        }
	        this.prevKeys = Object.keys(value)
	      }
	    }
	  },
	
	  cleanup: function (value) {
	    if (this.lastVal) {
	      removeClass(this.el, this.lastVal)
	    }
	    if (this.prevKeys) {
	      var i = this.prevKeys.length
	      while (i--) {
	        if (!value || !value[this.prevKeys[i]]) {
	          removeClass(this.el, this.prevKeys[i])
	        }
	      }
	    }
	  }
	}


/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = {
	
	  isLiteral: true,
	
	  bind: function () {
	    this.vm.$$[this.expression] = this.el
	  },
	
	  unbind: function () {
	    delete this.vm.$$[this.expression]
	  }
	}


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	
	module.exports = {
	
	  isLiteral: true,
	
	  bind: function () {
	    var vm = this.el.__vue__
	    if (!vm) {
	      _.warn(
	        'v-ref should only be used on a component root element.'
	      )
	      return
	    }
	    // If we get here, it means this is a `v-ref` on a
	    // child, because parent scope `v-ref` is stripped in
	    // `v-component` already. So we just record our own ref
	    // here - it will overwrite parent ref in `v-component`,
	    // if any.
	    vm._refID = this.expression
	  }
	}


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var config = __webpack_require__(16)
	
	module.exports = {
	  bind: function () {
	    var el = this.el
	    this.vm.$once('hook:compiled', function () {
	      el.removeAttribute(config.prefix + 'cloak')
	    })
	  }
	}


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var Transition = __webpack_require__(50)
	
	module.exports = {
	
	  priority: 1000,
	  isLiteral: true,
	
	  bind: function () {
	    if (!this._isDynamicLiteral) {
	      this.update(this.expression)
	    }
	  },
	
	  update: function (id, oldId) {
	    var el = this.el
	    var vm = this.el.__vue__ || this.vm
	    var hooks = _.resolveAsset(vm.$options, 'transitions', id)
	    id = id || 'v'
	    el.__v_trans = new Transition(el, id, hooks, vm)
	    if (oldId) {
	      _.removeClass(el, oldId + '-transition')
	    }
	    _.addClass(el, id + '-transition')
	  }
	}


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var queue = __webpack_require__(51)
	var addClass = _.addClass
	var removeClass = _.removeClass
	var transitionEndEvent = _.transitionEndEvent
	var animationEndEvent = _.animationEndEvent
	var transDurationProp = _.transitionProp + 'Duration'
	var animDurationProp = _.animationProp + 'Duration'
	
	var TYPE_TRANSITION = 1
	var TYPE_ANIMATION = 2
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	
	function Transition (el, id, hooks, vm) {
	  this.el = el
	  this.enterClass = id + '-enter'
	  this.leaveClass = id + '-leave'
	  this.hooks = hooks
	  this.vm = vm
	  // async state
	  this.pendingCssEvent =
	  this.pendingCssCb =
	  this.cancel =
	  this.pendingJsCb =
	  this.op =
	  this.cb = null
	  this.typeCache = {}
	  // bind
	  var self = this
	  ;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone']
	    .forEach(function (m) {
	      self[m] = _.bind(self[m], self)
	    })
	}
	
	var p = Transition.prototype
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p.enter = function (op, cb) {
	  this.cancelPending()
	  this.callHook('beforeEnter')
	  this.cb = cb
	  addClass(this.el, this.enterClass)
	  op()
	  this.callHookWithCb('enter')
	  this.cancel = this.hooks && this.hooks.enterCancelled
	  queue.push(this.enterNextTick)
	}
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p.enterNextTick = function () {
	  var type = this.getCssTransitionType(this.enterClass)
	  var enterDone = this.enterDone
	  if (type === TYPE_TRANSITION) {
	    // trigger transition by removing enter class now
	    removeClass(this.el, this.enterClass)
	    this.setupCssCb(transitionEndEvent, enterDone)
	  } else if (type === TYPE_ANIMATION) {
	    this.setupCssCb(animationEndEvent, enterDone)
	  } else if (!this.pendingJsCb) {
	    enterDone()
	  }
	}
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p.enterDone = function () {
	  this.cancel = this.pendingJsCb = null
	  removeClass(this.el, this.enterClass)
	  this.callHook('afterEnter')
	  if (this.cb) this.cb()
	}
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p.leave = function (op, cb) {
	  this.cancelPending()
	  this.callHook('beforeLeave')
	  this.op = op
	  this.cb = cb
	  addClass(this.el, this.leaveClass)
	  this.callHookWithCb('leave')
	  this.cancel = this.hooks && this.hooks.enterCancelled
	  // only need to do leaveNextTick if there's no explicit
	  // js callback
	  if (!this.pendingJsCb) {
	    queue.push(this.leaveNextTick)
	  }
	}
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass)
	  if (type) {
	    var event = type === TYPE_TRANSITION
	      ? transitionEndEvent
	      : animationEndEvent
	    this.setupCssCb(event, this.leaveDone)
	  } else {
	    this.leaveDone()
	  }
	}
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p.leaveDone = function () {
	  this.cancel = this.pendingJsCb = null
	  this.op()
	  removeClass(this.el, this.leaveClass)
	  this.callHook('afterLeave')
	  if (this.cb) this.cb()
	}
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p.cancelPending = function () {
	  this.op = this.cb = null
	  var hasPending = false
	  if (this.pendingCssCb) {
	    hasPending = true
	    _.off(this.el, this.pendingCssEvent, this.pendingCssCb)
	    this.pendingCssEvent = this.pendingCssCb = null
	  }
	  if (this.pendingJsCb) {
	    hasPending = true
	    this.pendingJsCb.cancel()
	    this.pendingJsCb = null
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass)
	    removeClass(this.el, this.leaveClass)
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el)
	    this.cancel = null
	  }
	}
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el)
	  }
	}
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type]
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = _.cancellable(this[type + 'Done'])
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb)
	  }
	}
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (
	    !transitionEndEvent ||
	    // skip CSS transitions if page is not visible -
	    // this solves the issue of transitionend events not
	    // firing until the page is visible again.
	    // pageVisibility API is supported in IE10+, same as
	    // CSS transitions.
	    document.hidden ||
	    // explicit js-only transition
	    (this.hooks && this.hooks.css === false)
	  ) {
	    return
	  }
	  var type = this.typeCache[className]
	  if (type) return type
	  var inlineStyles = this.el.style
	  var computedStyles = window.getComputedStyle(this.el)
	  var transDuration =
	    inlineStyles[transDurationProp] ||
	    computedStyles[transDurationProp]
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION
	  } else {
	    var animDuration =
	      inlineStyles[animDurationProp] ||
	      computedStyles[animDurationProp]
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type
	  }
	  return type
	}
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event
	  var self = this
	  var el = this.el
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      _.off(el, event, onEnd)
	      self.pendingCssEvent = self.pendingCssCb = null
	      if (!self.pendingJsCb && cb) {
	        cb()
	      }
	    }
	  }
	  _.on(el, event, onEnd)
	}
	
	module.exports = Transition


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var queue = []
	var queued = false
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	exports.push = function (job) {
	  queue.push(job)
	  if (!queued) {
	    queued = true
	    _.nextTick(flush)
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush () {
	  // Force layout
	  var f = document.documentElement.offsetHeight
	  for (var i = 0; i < queue.length; i++) {
	    queue[i]()
	  }
	  queue = []
	  queued = false
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f
	}


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	
	module.exports = {
	
	  acceptStatement: true,
	  priority: 700,
	
	  bind: function () {
	    // deal with iframes
	    if (
	      this.el.tagName === 'IFRAME' &&
	      this.arg !== 'load'
	    ) {
	      var self = this
	      this.iframeBind = function () {
	        _.on(self.el.contentWindow, self.arg, self.handler)
	      }
	      _.on(this.el, 'load', this.iframeBind)
	    }
	  },
	
	  update: function (handler) {
	    if (typeof handler !== 'function') {
	      _.warn(
	        'Directive "v-on:' + this.expression + '" ' +
	        'expects a function value.'
	      )
	      return
	    }
	    this.reset()
	    var vm = this.vm
	    this.handler = function (e) {
	      e.targetVM = vm
	      vm.$event = e
	      var res = handler(e)
	      vm.$event = null
	      return res
	    }
	    if (this.iframeBind) {
	      this.iframeBind()
	    } else {
	      _.on(this.el, this.arg, this.handler)
	    }
	  },
	
	  reset: function () {
	    var el = this.iframeBind
	      ? this.el.contentWindow
	      : this.el
	    if (this.handler) {
	      _.off(el, this.arg, this.handler)
	    }
	  },
	
	  unbind: function () {
	    this.reset()
	    _.off(this.el, 'load', this.iframeBind)
	  }
	}


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	
	var handlers = {
	  text: __webpack_require__(54),
	  radio: __webpack_require__(55),
	  select: __webpack_require__(56),
	  checkbox: __webpack_require__(57)
	}
	
	module.exports = {
	
	  priority: 800,
	  twoWay: true,
	  handlers: handlers,
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   *     - TODO: more types may be supplied as a plugin
	   */
	
	  bind: function () {
	    // friendly warning...
	    this.checkFilters()
	    if (this.hasRead && !this.hasWrite) {
	      _.warn(
	        'It seems you are using a read-only filter with ' +
	        'v-model. You might want to use a two-way filter ' +
	        'to ensure correct behavior.'
	      )
	    }
	    var el = this.el
	    var tag = el.tagName
	    var handler
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text
	    } else if (tag === 'SELECT') {
	      handler = handlers.select
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text
	    } else {
	      _.warn('v-model does not support element type: ' + tag)
	      return
	    }
	    handler.bind.call(this)
	    this.update = handler.update
	    this.unbind = handler.unbind
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function () {
	    var filters = this.filters
	    if (!filters) return
	    var i = filters.length
	    while (i--) {
	      var filter = _.resolveAsset(this.vm.$options, 'filters', filters[i].name)
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true
	      }
	      if (filter.write) {
	        this.hasWrite = true
	      }
	    }
	  }
	}


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	
	module.exports = {
	
	  bind: function () {
	    var self = this
	    var el = this.el
	
	    // check params
	    // - lazy: update model on "change" instead of "input"
	    var lazy = this._checkParam('lazy') != null
	    // - number: cast value into number when updating model.
	    var number = this._checkParam('number') != null
	    // - debounce: debounce the input listener
	    var debounce = parseInt(this._checkParam('debounce'), 10)
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false
	    if (!_.isAndroid) {
	      this.onComposeStart = function () {
	        composing = true
	      }
	      this.onComposeEnd = function () {
	        composing = false
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        self.listener()
	      }
	      _.on(el, 'compositionstart', this.onComposeStart)
	      _.on(el, 'compositionend', this.onComposeEnd)
	    }
	
	    function syncToModel () {
	      var val = number
	        ? _.toNumber(el.value)
	        : el.value
	      self.set(val)
	    }
	
	    // if the directive has filters, we need to
	    // record cursor position and restore it after updating
	    // the input with the filtered value.
	    // also force update for type="range" inputs to enable
	    // "lock in range" (see #506)
	    if (this.hasRead || el.type === 'range') {
	      this.listener = function () {
	        if (composing) return
	        var charsOffset
	        // some HTML5 input types throw error here
	        try {
	          // record how many chars from the end of input
	          // the cursor was at
	          charsOffset = el.value.length - el.selectionStart
	        } catch (e) {}
	        // Fix IE10/11 infinite update cycle
	        // https://github.com/yyx990803/vue/issues/592
	        /* istanbul ignore if */
	        if (charsOffset < 0) {
	          return
	        }
	        syncToModel()
	        _.nextTick(function () {
	          // force a value update, because in
	          // certain cases the write filters output the
	          // same result for different input values, and
	          // the Observer set events won't be triggered.
	          var newVal = self._watcher.value
	          self.update(newVal)
	          if (charsOffset != null) {
	            var cursorPos =
	              _.toString(newVal).length - charsOffset
	            el.setSelectionRange(cursorPos, cursorPos)
	          }
	        })
	      }
	    } else {
	      this.listener = function () {
	        if (composing) return
	        syncToModel()
	      }
	    }
	
	    if (debounce) {
	      this.listener = _.debounce(this.listener, debounce)
	    }
	
	    // Now attach the main listener
	
	    this.event = lazy ? 'change' : 'input'
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function'
	    if (this.hasjQuery) {
	      jQuery(el).on(this.event, this.listener)
	    } else {
	      _.on(el, this.event, this.listener)
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && _.isIE9) {
	      this.onCut = function () {
	        _.nextTick(self.listener)
	      }
	      this.onDel = function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener()
	        }
	      }
	      _.on(el, 'cut', this.onCut)
	      _.on(el, 'keyup', this.onDel)
	    }
	
	    // set initial value if present
	    if (
	      el.hasAttribute('value') ||
	      (el.tagName === 'TEXTAREA' && el.value.trim())
	    ) {
	      this._initValue = number
	        ? _.toNumber(el.value)
	        : el.value
	    }
	  },
	
	  update: function (value) {
	    this.el.value = _.toString(value)
	  },
	
	  unbind: function () {
	    var el = this.el
	    if (this.hasjQuery) {
	      jQuery(el).off(this.event, this.listener)
	    } else {
	      _.off(el, this.event, this.listener)
	    }
	    if (this.onComposeStart) {
	      _.off(el, 'compositionstart', this.onComposeStart)
	      _.off(el, 'compositionend', this.onComposeEnd)
	    }
	    if (this.onCut) {
	      _.off(el, 'cut', this.onCut)
	      _.off(el, 'keyup', this.onDel)
	    }
	  }
	}


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	
	module.exports = {
	
	  bind: function () {
	    var self = this
	    var el = this.el
	    this.listener = function () {
	      self.set(el.value)
	    }
	    _.on(el, 'change', this.listener)
	    if (el.checked) {
	      this._initValue = el.value
	    }
	  },
	
	  update: function (value) {
	    /* eslint-disable eqeqeq */
	    this.el.checked = value == this.el.value
	    /* eslint-enable eqeqeq */
	  },
	
	  unbind: function () {
	    _.off(this.el, 'change', this.listener)
	  }
	}


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var Watcher = __webpack_require__(27)
	var dirParser = __webpack_require__(25)
	
	module.exports = {
	
	  bind: function () {
	    var self = this
	    var el = this.el
	    // update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get())
	      }
	    }
	    // check options param
	    var optionsParam = this._checkParam('options')
	    if (optionsParam) {
	      initOptions.call(this, optionsParam)
	    }
	    this.number = this._checkParam('number') != null
	    this.multiple = el.hasAttribute('multiple')
	    this.listener = function () {
	      var value = self.multiple
	        ? getMultiValue(el)
	        : el.value
	      value = self.number
	        ? _.isArray(value)
	          ? value.map(_.toNumber)
	          : _.toNumber(value)
	        : value
	      self.set(value)
	    }
	    _.on(el, 'change', this.listener)
	    checkInitialValue.call(this)
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate)
	  },
	
	  update: function (value) {
	    var el = this.el
	    el.selectedIndex = -1
	    var multi = this.multiple && _.isArray(value)
	    var options = el.options
	    var i = options.length
	    var option
	    while (i--) {
	      option = options[i]
	      /* eslint-disable eqeqeq */
	      option.selected = multi
	        ? indexOf(value, option.value) > -1
	        : value == option.value
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function () {
	    _.off(this.el, 'change', this.listener)
	    this.vm.$off('hook:attached', this.forceUpdate)
	    if (this.optionWatcher) {
	      this.optionWatcher.teardown()
	    }
	  }
	
	}
	
	/**
	 * Initialize the option list from the param.
	 *
	 * @param {String} expression
	 */
	
	function initOptions (expression) {
	  var self = this
	  var descriptor = dirParser.parse(expression)[0]
	  function optionUpdateWatcher (value) {
	    if (_.isArray(value)) {
	      self.el.innerHTML = ''
	      buildOptions(self.el, value)
	      self.forceUpdate()
	    } else {
	      _.warn('Invalid options value for v-model: ' + value)
	    }
	  }
	  this.optionWatcher = new Watcher(
	    this.vm,
	    descriptor.expression,
	    optionUpdateWatcher,
	    {
	      deep: true,
	      filters: descriptor.filters
	    }
	  )
	  // update with initial value
	  optionUpdateWatcher(this.optionWatcher.value)
	}
	
	/**
	 * Build up option elements. IE9 doesn't create options
	 * when setting innerHTML on <select> elements, so we have
	 * to use DOM API here.
	 *
	 * @param {Element} parent - a <select> or an <optgroup>
	 * @param {Array} options
	 */
	
	function buildOptions (parent, options) {
	  var op, el
	  for (var i = 0, l = options.length; i < l; i++) {
	    op = options[i]
	    if (!op.options) {
	      el = document.createElement('option')
	      if (typeof op === 'string') {
	        el.text = el.value = op
	      } else {
	        if (op.value != null) {
	          el.value = op.value
	        }
	        el.text = op.text || op.value || ''
	        if (op.disabled) {
	          el.disabled = true
	        }
	      }
	    } else {
	      el = document.createElement('optgroup')
	      el.label = op.label
	      buildOptions(el, op.options)
	    }
	    parent.appendChild(el)
	  }
	}
	
	/**
	 * Check the initial value for selected options.
	 */
	
	function checkInitialValue () {
	  var initValue
	  var options = this.el.options
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (options[i].hasAttribute('selected')) {
	      if (this.multiple) {
	        (initValue || (initValue = []))
	          .push(options[i].value)
	      } else {
	        initValue = options[i].value
	      }
	    }
	  }
	  if (typeof initValue !== 'undefined') {
	    this._initValue = this.number
	      ? _.toNumber(initValue)
	      : initValue
	  }
	}
	
	/**
	 * Helper to extract a value array for select[multiple]
	 *
	 * @param {SelectElement} el
	 * @return {Array}
	 */
	
	function getMultiValue (el) {
	  return Array.prototype.filter
	    .call(el.options, filterSelected)
	    .map(getOptionValue)
	}
	
	function filterSelected (op) {
	  return op.selected
	}
	
	function getOptionValue (op) {
	  return op.value || op.text
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with soft equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf (arr, val) {
	  var i = arr.length
	  while (i--) {
	    /* eslint-disable eqeqeq */
	    if (arr[i] == val) return i
	    /* eslint-enable eqeqeq */
	  }
	  return -1
	}


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	
	module.exports = {
	
	  bind: function () {
	    var self = this
	    var el = this.el
	    this.listener = function () {
	      self.set(el.checked)
	    }
	    _.on(el, 'change', this.listener)
	    if (el.checked) {
	      this._initValue = el.checked
	    }
	  },
	
	  update: function (value) {
	    this.el.checked = !!value
	  },
	
	  unbind: function () {
	    _.off(this.el, 'change', this.listener)
	  }
	}


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var isObject = _.isObject
	var isPlainObject = _.isPlainObject
	var textParser = __webpack_require__(23)
	var expParser = __webpack_require__(32)
	var templateParser = __webpack_require__(35)
	var compiler = __webpack_require__(20)
	var uid = 0
	
	// async component resolution states
	var UNRESOLVED = 0
	var PENDING = 1
	var RESOLVED = 2
	var ABORTED = 3
	
	module.exports = {
	
	  /**
	   * Setup.
	   */
	
	  bind: function () {
	    // uid as a cache identifier
	    this.id = '__v_repeat_' + (++uid)
	    // setup anchor nodes
	    this.start = _.createAnchor('v-repeat-start')
	    this.end = _.createAnchor('v-repeat-end')
	    _.replace(this.el, this.end)
	    _.before(this.start, this.end)
	    // check if this is a block repeat
	    this.template = _.isTemplate(this.el)
	      ? templateParser.parse(this.el, true)
	      : this.el
	    // check other directives that need to be handled
	    // at v-repeat level
	    this.checkIf()
	    this.checkRef()
	    this.checkComponent()
	    // check for trackby param
	    this.idKey =
	      this._checkParam('track-by') ||
	      this._checkParam('trackby') // 0.11.0 compat
	    // check for transition stagger
	    var stagger = +this._checkParam('stagger')
	    this.enterStagger = +this._checkParam('enter-stagger') || stagger
	    this.leaveStagger = +this._checkParam('leave-stagger') || stagger
	    this.cache = Object.create(null)
	  },
	
	  /**
	   * Warn against v-if usage.
	   */
	
	  checkIf: function () {
	    if (_.attr(this.el, 'if') !== null) {
	      _.warn(
	        'Don\'t use v-if with v-repeat. ' +
	        'Use v-show or the "filterBy" filter instead.'
	      )
	    }
	  },
	
	  /**
	   * Check if v-ref/ v-el is also present.
	   */
	
	  checkRef: function () {
	    var refID = _.attr(this.el, 'ref')
	    this.refID = refID
	      ? this.vm.$interpolate(refID)
	      : null
	    var elId = _.attr(this.el, 'el')
	    this.elId = elId
	      ? this.vm.$interpolate(elId)
	      : null
	  },
	
	  /**
	   * Check the component constructor to use for repeated
	   * instances. If static we resolve it now, otherwise it
	   * needs to be resolved at build time with actual data.
	   */
	
	  checkComponent: function () {
	    this.componentState = UNRESOLVED
	    var options = this.vm.$options
	    var id = _.checkComponent(this.el, options)
	    if (!id) {
	      // default constructor
	      this.Ctor = _.Vue
	      // inline repeats should inherit
	      this.inherit = true
	      // important: transclude with no options, just
	      // to ensure block start and block end
	      this.template = compiler.transclude(this.template)
	      var copy = _.extend({}, options)
	      copy._asComponent = false
	      this._linkFn = compiler.compile(this.template, copy)
	    } else {
	      this.Ctor = null
	      this.asComponent = true
	      // check inline-template
	      if (this._checkParam('inline-template') !== null) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = _.extractContent(this.el, true)
	      }
	      var tokens = textParser.parse(id)
	      if (tokens) {
	        // dynamic component to be resolved later
	        var ctorExp = textParser.tokensToExp(tokens)
	        this.ctorGetter = expParser.parse(ctorExp).get
	      } else {
	        // static
	        this.componentId = id
	        this.pendingData = null
	      }
	    }
	  },
	
	  resolveComponent: function () {
	    this.componentState = PENDING
	    this.vm._resolveComponent(this.componentId, _.bind(function (Ctor) {
	      if (this.componentState === ABORTED) {
	        return
	      }
	      this.Ctor = Ctor
	      this.componentState = RESOLVED
	      this.realUpdate(this.pendingData)
	      this.pendingData = null
	    }, this))
	  },
	
	    /**
	   * Resolve a dynamic component to use for an instance.
	   * The tricky part here is that there could be dynamic
	   * components depending on instance data.
	   *
	   * @param {Object} data
	   * @param {Object} meta
	   * @return {Function}
	   */
	
	  resolveDynamicComponent: function (data, meta) {
	    // create a temporary context object and copy data
	    // and meta properties onto it.
	    // use _.define to avoid accidentally overwriting scope
	    // properties.
	    var context = Object.create(this.vm)
	    var key
	    for (key in data) {
	      _.define(context, key, data[key])
	    }
	    for (key in meta) {
	      _.define(context, key, meta[key])
	    }
	    var id = this.ctorGetter.call(context, context)
	    var Ctor = _.resolveAsset(this.vm.$options, 'components', id)
	    _.assertAsset(Ctor, 'component', id)
	    if (!Ctor.options) {
	      _.warn(
	        'Async resolution is not supported for v-repeat ' +
	        '+ dynamic component. (component: ' + id + ')'
	      )
	      return _.Vue
	    }
	    return Ctor
	  },
	
	  /**
	   * Update.
	   * This is called whenever the Array mutates. If we have
	   * a component, we might need to wait for it to resolve
	   * asynchronously.
	   *
	   * @param {Array|Number|String} data
	   */
	
	  update: function (data) {
	    if (this.componentId) {
	      var state = this.componentState
	      if (state === UNRESOLVED) {
	        this.pendingData = data
	        // once resolved, it will call realUpdate
	        this.resolveComponent()
	      } else if (state === PENDING) {
	        this.pendingData = data
	      } else if (state === RESOLVED) {
	        this.realUpdate(data)
	      }
	    } else {
	      this.realUpdate(data)
	    }
	  },
	
	  /**
	   * The real update that actually modifies the DOM.
	   *
	   * @param {Array|Number|String} data
	   */
	
	  realUpdate: function (data) {
	    this.vms = this.diff(data, this.vms)
	    // update v-ref
	    if (this.refID) {
	      this.vm.$[this.refID] = this.converted
	        ? toRefObject(this.vms)
	        : this.vms
	    }
	    if (this.elId) {
	      this.vm.$$[this.elId] = this.vms.map(function (vm) {
	        return vm.$el
	      })
	    }
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   * @param {Array} oldVms
	   * @return {Array}
	   */
	
	  diff: function (data, oldVms) {
	    var idKey = this.idKey
	    var converted = this.converted
	    var start = this.start
	    var end = this.end
	    var inDoc = _.inDoc(start)
	    var alias = this.arg
	    var init = !oldVms
	    var vms = new Array(data.length)
	    var obj, raw, vm, i, l, primitive
	    // First pass, go through the new Array and fill up
	    // the new vms array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      obj = data[i]
	      raw = converted ? obj.$value : obj
	      primitive = !isObject(raw)
	      vm = !init && this.getVm(raw, i, converted ? obj.$key : null)
	      if (vm) { // reusable instance
	        vm._reused = true
	        vm.$index = i // update $index
	        // update data for track-by or object repeat,
	        // since in these two cases the data is replaced
	        // rather than mutated.
	        if (idKey || converted || primitive) {
	          if (alias) {
	            vm[alias] = raw
	          } else if (_.isPlainObject(raw)) {
	            vm.$data = raw
	          } else {
	            vm.$value = raw
	          }
	        }
	      } else { // new instance
	        vm = this.build(obj, i, true)
	        vm._reused = false
	      }
	      vms[i] = vm
	      // insert if this is first run
	      if (init) {
	        vm.$before(end)
	      }
	    }
	    // if this is the first run, we're done.
	    if (init) {
	      return vms
	    }
	    // Second pass, go through the old vm instances and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0
	    var totalRemoved = oldVms.length - vms.length
	    for (i = 0, l = oldVms.length; i < l; i++) {
	      vm = oldVms[i]
	      if (!vm._reused) {
	        this.uncacheVm(vm)
	        vm.$destroy(false, true) // defer cleanup until removal
	        this.remove(vm, removalIndex++, totalRemoved, inDoc)
	      }
	    }
	    // final pass, move/insert new instances into the
	    // right place.
	    var targetPrev, prevEl, currentPrev
	    var insertionIndex = 0
	    for (i = 0, l = vms.length; i < l; i++) {
	      vm = vms[i]
	      // this is the vm that we should be after
	      targetPrev = vms[i - 1]
	      prevEl = targetPrev
	        ? targetPrev._staggerCb
	          ? targetPrev._staggerAnchor
	          : targetPrev._blockEnd || targetPrev.$el
	        : start
	      if (vm._reused && !vm._staggerCb) {
	        currentPrev = findPrevVm(vm, start, this.id)
	        if (currentPrev !== targetPrev) {
	          this.move(vm, prevEl)
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(vm, insertionIndex++, prevEl, inDoc)
	      }
	      vm._reused = false
	    }
	    return vms
	  },
	
	  /**
	   * Build a new instance and cache it.
	   *
	   * @param {Object} data
	   * @param {Number} index
	   * @param {Boolean} needCache
	   */
	
	  build: function (data, index, needCache) {
	    var meta = { $index: index }
	    if (this.converted) {
	      meta.$key = data.$key
	    }
	    var raw = this.converted ? data.$value : data
	    var alias = this.arg
	    if (alias) {
	      data = {}
	      data[alias] = raw
	    } else if (!isPlainObject(raw)) {
	      // non-object values
	      data = {}
	      meta.$value = raw
	    } else {
	      // default
	      data = raw
	    }
	    // resolve constructor
	    var Ctor = this.Ctor || this.resolveDynamicComponent(data, meta)
	    var parent = this._host || this.vm
	    var vm = parent.$addChild({
	      el: templateParser.clone(this.template),
	      data: data,
	      inherit: this.inherit,
	      template: this.inlineTemplate,
	      // repeater meta, e.g. $index, $key
	      _meta: meta,
	      // mark this as an inline-repeat instance
	      _repeat: this.inherit,
	      // is this a component?
	      _asComponent: this.asComponent,
	      // linker cachable if no inline-template
	      _linkerCachable: !this.inlineTemplate && Ctor !== _.Vue,
	      // pre-compiled linker for simple repeats
	      _linkFn: this._linkFn,
	      // identifier, shows that this vm belongs to this collection
	      _repeatId: this.id,
	      // transclusion content owner
	      _context: this.vm
	    }, Ctor)
	    // cache instance
	    if (needCache) {
	      this.cacheVm(raw, vm, index, this.converted ? meta.$key : null)
	    }
	    // sync back changes for two-way bindings of primitive values
	    var type = typeof raw
	    var dir = this
	    if (
	      this.rawType === 'object' &&
	      (type === 'string' || type === 'number')
	    ) {
	      vm.$watch(alias || '$value', function (val) {
	        if (dir.filters) {
	          _.warn(
	            'You seem to be mutating the $value reference of ' +
	            'a v-repeat instance (likely through v-model) ' +
	            'and filtering the v-repeat at the same time. ' +
	            'This will not work properly with an Array of ' +
	            'primitive values. Please use an Array of ' +
	            'Objects instead.'
	          )
	        }
	        dir._withLock(function () {
	          if (dir.converted) {
	            dir.rawValue[vm.$key] = val
	          } else {
	            dir.rawValue.$set(vm.$index, val)
	          }
	        })
	      })
	    }
	    return vm
	  },
	
	  /**
	   * Unbind, teardown everything
	   */
	
	  unbind: function () {
	    this.componentState = ABORTED
	    if (this.refID) {
	      this.vm.$[this.refID] = null
	    }
	    if (this.vms) {
	      var i = this.vms.length
	      var vm
	      while (i--) {
	        vm = this.vms[i]
	        this.uncacheVm(vm)
	        vm.$destroy()
	      }
	    }
	  },
	
	  /**
	   * Cache a vm instance based on its data.
	   *
	   * If the data is an object, we save the vm's reference on
	   * the data object as a hidden property. Otherwise we
	   * cache them in an object and for each primitive value
	   * there is an array in case there are duplicates.
	   *
	   * @param {Object} data
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheVm: function (data, vm, index, key) {
	    var idKey = this.idKey
	    var cache = this.cache
	    var primitive = !isObject(data)
	    var id
	    if (key || idKey || primitive) {
	      id = idKey
	        ? idKey === '$index'
	          ? index
	          : data[idKey]
	        : (key || index)
	      if (!cache[id]) {
	        cache[id] = vm
	      } else if (!primitive && idKey !== '$index') {
	        _.warn('Duplicate track-by key in v-repeat: ' + id)
	      }
	    } else {
	      id = this.id
	      if (data.hasOwnProperty(id)) {
	        if (data[id] === null) {
	          data[id] = vm
	        } else {
	          _.warn(
	            'Duplicate objects are not supported in v-repeat ' +
	            'when using components or transitions.'
	          )
	        }
	      } else {
	        _.define(data, id, vm)
	      }
	    }
	    vm._raw = data
	  },
	
	  /**
	   * Try to get a cached instance from a piece of data.
	   *
	   * @param {Object} data
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Vue|undefined}
	   */
	
	  getVm: function (data, index, key) {
	    var idKey = this.idKey
	    var primitive = !isObject(data)
	    if (key || idKey || primitive) {
	      var id = idKey
	        ? idKey === '$index'
	          ? index
	          : data[idKey]
	        : (key || index)
	      return this.cache[id]
	    } else {
	      return data[this.id]
	    }
	  },
	
	  /**
	   * Delete a cached vm instance.
	   *
	   * @param {Vue} vm
	   */
	
	  uncacheVm: function (vm) {
	    var data = vm._raw
	    var idKey = this.idKey
	    var index = vm.$index
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = vm.hasOwnProperty('$key') && vm.$key
	    var primitive = !isObject(data)
	    if (idKey || key || primitive) {
	      var id = idKey
	        ? idKey === '$index'
	          ? index
	          : data[idKey]
	        : (key || index)
	      this.cache[id] = null
	    } else {
	      data[this.id] = null
	      vm._raw = null
	    }
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters, and convert non-Array objects to arrays.
	   *
	   * This function will be bound to this directive instance
	   * and passed into the watcher.
	   *
	   * @param {*} value
	   * @return {Array}
	   * @private
	   */
	
	  _preProcess: function (value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value
	    var type = this.rawType = typeof value
	    if (!isPlainObject(value)) {
	      this.converted = false
	      if (type === 'number') {
	        value = range(value)
	      } else if (type === 'string') {
	        value = _.toArray(value)
	      }
	      return value || []
	    } else {
	      // convert plain object to array.
	      var keys = Object.keys(value)
	      var i = keys.length
	      var res = new Array(i)
	      var key
	      while (i--) {
	        key = keys[i]
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        }
	      }
	      this.converted = true
	      return res
	    }
	  },
	
	  /**
	   * Insert an instance.
	   *
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDoc
	   */
	
	  insert: function (vm, index, prevEl, inDoc) {
	    if (vm._staggerCb) {
	      vm._staggerCb.cancel()
	      vm._staggerCb = null
	    }
	    var staggerAmount = this.getStagger(vm, index, null, 'enter')
	    if (inDoc && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = vm._staggerAnchor
	      if (!anchor) {
	        anchor = vm._staggerAnchor = _.createAnchor('stagger-anchor')
	        anchor.__vue__ = vm
	      }
	      _.after(anchor, prevEl)
	      var op = vm._staggerCb = _.cancellable(function () {
	        vm._staggerCb = null
	        vm.$before(anchor)
	        _.remove(anchor)
	      })
	      setTimeout(op, staggerAmount)
	    } else {
	      vm.$after(prevEl)
	    }
	  },
	
	  /**
	   * Move an already inserted instance.
	   *
	   * @param {Vue} vm
	   * @param {Node} prevEl
	   */
	
	  move: function (vm, prevEl) {
	    vm.$after(prevEl, null, false)
	  },
	
	  /**
	   * Remove an instance.
	   *
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {Boolean} inDoc
	   */
	
	  remove: function (vm, index, total, inDoc) {
	    if (vm._staggerCb) {
	      vm._staggerCb.cancel()
	      vm._staggerCb = null
	      // it's not possible for the same vm to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this vm is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return
	    }
	    var staggerAmount = this.getStagger(vm, index, total, 'leave')
	    if (inDoc && staggerAmount) {
	      var op = vm._staggerCb = _.cancellable(function () {
	        vm._staggerCb = null
	        remove()
	      })
	      setTimeout(op, staggerAmount)
	    } else {
	      remove()
	    }
	    function remove () {
	      vm.$remove(function () {
	        vm._cleanup()
	      })
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Vue} vm
	   * @param {Number} index
	   * @param {String} type
	   * @param {Number} total
	   */
	
	  getStagger: function (vm, index, total, type) {
	    type = type + 'Stagger'
	    var transition = vm.$el.__v_trans
	    var hooks = transition && transition.hooks
	    var hook = hooks && (hooks[type] || hooks.stagger)
	    return hook
	      ? hook.call(vm, index, total)
	      : index * this[type]
	  }
	
	}
	
	/**
	 * Helper to find the previous element that is an instance
	 * root node. This is necessary because a destroyed vm's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its __vue__ reference
	 * should have been removed so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return vm that is bound to this v-repeat. (see #929)
	 *
	 * @param {Vue} vm
	 * @param {Comment|Text} anchor
	 * @return {Vue}
	 */
	
	function findPrevVm (vm, anchor, id) {
	  var el = vm.$el.previousSibling
	  while (
	    (!el.__vue__ || el.__vue__.$options._repeatId !== id) &&
	    el !== anchor
	  ) {
	    el = el.previousSibling
	  }
	  return el.__vue__
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range (n) {
	  var i = -1
	  var ret = new Array(n)
	  while (++i < n) {
	    ret[i] = i
	  }
	  return ret
	}
	
	/**
	 * Convert a vms array to an object ref for v-ref on an
	 * Object value.
	 *
	 * @param {Array} vms
	 * @return {Object}
	 */
	
	function toRefObject (vms) {
	  var ref = {}
	  for (var i = 0, l = vms.length; i < l; i++) {
	    ref[vms[i].$key] = vms[i]
	  }
	  return ref
	}


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var compiler = __webpack_require__(20)
	var templateParser = __webpack_require__(35)
	var transition = __webpack_require__(44)
	
	module.exports = {
	
	  bind: function () {
	    var el = this.el
	    if (!el.__vue__) {
	      this.start = _.createAnchor('v-if-start')
	      this.end = _.createAnchor('v-if-end')
	      _.replace(el, this.end)
	      _.before(this.start, this.end)
	      if (_.isTemplate(el)) {
	        this.template = templateParser.parse(el, true)
	      } else {
	        this.template = document.createDocumentFragment()
	        this.template.appendChild(templateParser.clone(el))
	      }
	      // compile the nested partial
	      this.linker = compiler.compile(
	        this.template,
	        this.vm.$options,
	        true
	      )
	    } else {
	      this.invalid = true
	      _.warn(
	        'v-if="' + this.expression + '" cannot be ' +
	        'used on an instance root element.'
	      )
	    }
	  },
	
	  update: function (value) {
	    if (this.invalid) return
	    if (value) {
	      // avoid duplicate compiles, since update() can be
	      // called with different truthy values
	      if (!this.unlink) {
	        this.link(
	          templateParser.clone(this.template),
	          this.linker
	        )
	      }
	    } else {
	      this.teardown()
	    }
	  },
	
	  link: function (frag, linker) {
	    var vm = this.vm
	    this.unlink = linker(vm, frag)
	    transition.blockAppend(frag, this.end, vm)
	    // call attached for all the child components created
	    // during the compilation
	    if (_.inDoc(vm.$el)) {
	      var children = this.getContainedComponents()
	      if (children) children.forEach(callAttach)
	    }
	  },
	
	  teardown: function () {
	    if (!this.unlink) return
	    // collect children beforehand
	    var children
	    if (_.inDoc(this.vm.$el)) {
	      children = this.getContainedComponents()
	    }
	    transition.blockRemove(this.start, this.end, this.vm)
	    if (children) children.forEach(callDetach)
	    this.unlink()
	    this.unlink = null
	  },
	
	  getContainedComponents: function () {
	    var vm = this.vm
	    var start = this.start.nextSibling
	    var end = this.end
	
	    function contains (c) {
	      var cur = start
	      var next
	      while (next !== end) {
	        next = cur.nextSibling
	        if (
	          cur === c.$el ||
	          cur.contains && cur.contains(c.$el)
	        ) {
	          return true
	        }
	        cur = next
	      }
	      return false
	    }
	
	    return vm.$children.length &&
	      vm.$children.filter(contains)
	  },
	
	  unbind: function () {
	    if (this.unlink) this.unlink()
	  }
	
	}
	
	function callAttach (child) {
	  if (!child._isAttached) {
	    child._callHook('attached')
	  }
	}
	
	function callDetach (child) {
	  if (child._isAttached) {
	    child._callHook('detached')
	  }
	}


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	exports.content = __webpack_require__(61)
	exports.partial = __webpack_require__(62)


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	
	// This is the elementDirective that handles <content>
	// transclusions. It relies on the raw content of an
	// instance being stored as `$options._content` during
	// the transclude phase.
	
	module.exports = {
	
	  bind: function () {
	    var vm = this.vm
	    var host = vm
	    // we need find the content context, which is the
	    // closest non-inline-repeater instance.
	    while (host.$options._repeat) {
	      host = host.$parent
	    }
	    var raw = host.$options._content
	    var content
	    if (!raw) {
	      this.fallback()
	      return
	    }
	    var context = host._context
	    var selector = this.el.getAttribute('select')
	    if (!selector) {
	      // Default content
	      var self = this
	      var compileDefaultContent = function () {
	        self.compile(
	          extractFragment(raw.childNodes, raw, true),
	          context,
	          vm
	        )
	      }
	      if (!host._isCompiled) {
	        // defer until the end of instance compilation,
	        // because the default outlet must wait until all
	        // other possible outlets with selectors have picked
	        // out their contents.
	        host.$once('hook:compiled', compileDefaultContent)
	      } else {
	        compileDefaultContent()
	      }
	    } else {
	      // select content
	      selector = vm.$interpolate(selector)
	      var nodes = raw.querySelectorAll(selector)
	      if (nodes.length) {
	        content = extractFragment(nodes, raw)
	        if (content.hasChildNodes()) {
	          this.compile(content, context, vm)
	        } else {
	          this.fallback()
	        }
	      } else {
	        this.fallback()
	      }
	    }
	  },
	
	  fallback: function () {
	    this.compile(_.extractContent(this.el, true), this.vm)
	  },
	
	  compile: function (content, context, host) {
	    if (content && context) {
	      this.unlink = context.$compile(content, host)
	    }
	    if (content) {
	      _.replace(this.el, content)
	    } else {
	      _.remove(this.el)
	    }
	  },
	
	  unbind: function () {
	    if (this.unlink) {
	      this.unlink()
	    }
	  }
	}
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @param {Element} parent
	 * @param {Boolean} main
	 * @return {DocumentFragment}
	 */
	
	function extractFragment (nodes, parent, main) {
	  var frag = document.createDocumentFragment()
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i]
	    // if this is the main outlet, we want to skip all
	    // previously selected nodes;
	    // otherwise, we want to mark the node as selected.
	    // clone the node so the original raw content remains
	    // intact. this ensures proper re-compilation in cases
	    // where the outlet is inside a conditional block
	    if (main && !node.__v_selected) {
	      frag.appendChild(node.cloneNode(true))
	    } else if (!main && node.parentNode === parent) {
	      node.__v_selected = true
	      frag.appendChild(node.cloneNode(true))
	    }
	  }
	  return frag
	}


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var templateParser = __webpack_require__(35)
	var textParser = __webpack_require__(23)
	var compiler = __webpack_require__(20)
	var Cache = __webpack_require__(24)
	var cache = new Cache(1000)
	
	// v-partial reuses logic from v-if
	var vIf = __webpack_require__(59)
	
	module.exports = {
	
	  link: vIf.link,
	  teardown: vIf.teardown,
	  getContainedComponents: vIf.getContainedComponents,
	
	  bind: function () {
	    var el = this.el
	    this.start = _.createAnchor('v-partial-start')
	    this.end = _.createAnchor('v-partial-end')
	    _.replace(el, this.end)
	    _.before(this.start, this.end)
	    var id = el.getAttribute('name')
	    var tokens = textParser.parse(id)
	    if (tokens) {
	      // dynamic partial
	      this.setupDynamic(tokens)
	    } else {
	      // static partial
	      this.insert(id)
	    }
	  },
	
	  setupDynamic: function (tokens) {
	    var self = this
	    var exp = textParser.tokensToExp(tokens)
	    this.unwatch = this.vm.$watch(exp, function (value) {
	      self.teardown()
	      self.insert(value)
	    }, {
	      immediate: true,
	      user: false
	    })
	  },
	
	  insert: function (id) {
	    var partial = _.resolveAsset(this.vm.$options, 'partials', id)
	    _.assertAsset(partial, 'partial', id)
	    if (partial) {
	      var frag = templateParser.parse(partial, true)
	      // cache partials based on constructor id.
	      var cacheId = (this.vm.constructor.cid || '') + partial
	      var linker = this.compile(frag, cacheId)
	      // this is provided by v-if
	      this.link(frag, linker)
	    }
	  },
	
	  compile: function (frag, cacheId) {
	    var hit = cache.get(cacheId)
	    if (hit) return hit
	    var linker = compiler.compile(frag, this.vm.$options, true)
	    cache.put(cacheId, linker)
	    return linker
	  },
	
	  unbind: function () {
	    if (this.unlink) this.unlink()
	    if (this.unwatch) this.unwatch()
	  }
	}


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	
	/**
	 * Stringify value.
	 *
	 * @param {Number} indent
	 */
	
	exports.json = {
	  read: function (value, indent) {
	    return typeof value === 'string'
	      ? value
	      : JSON.stringify(value, null, Number(indent) || 2)
	  },
	  write: function (value) {
	    try {
	      return JSON.parse(value)
	    } catch (e) {
	      return value
	    }
	  }
	}
	
	/**
	 * 'abc' => 'Abc'
	 */
	
	exports.capitalize = function (value) {
	  if (!value && value !== 0) return ''
	  value = value.toString()
	  return value.charAt(0).toUpperCase() + value.slice(1)
	}
	
	/**
	 * 'abc' => 'ABC'
	 */
	
	exports.uppercase = function (value) {
	  return (value || value === 0)
	    ? value.toString().toUpperCase()
	    : ''
	}
	
	/**
	 * 'AbC' => 'abc'
	 */
	
	exports.lowercase = function (value) {
	  return (value || value === 0)
	    ? value.toString().toLowerCase()
	    : ''
	}
	
	/**
	 * 12345 => $12,345.00
	 *
	 * @param {String} sign
	 */
	
	var digitsRE = /(\d{3})(?=\d)/g
	exports.currency = function (value, currency) {
	  value = parseFloat(value)
	  if (!isFinite(value) || (!value && value !== 0)) return ''
	  currency = currency || '$'
	  var stringified = Math.abs(value).toFixed(2)
	  var _int = stringified.slice(0, -3)
	  var i = _int.length % 3
	  var head = i > 0
	    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
	    : ''
	  var _float = stringified.slice(-3)
	  var sign = value < 0 ? '-' : ''
	  return currency + sign + head +
	    _int.slice(i).replace(digitsRE, '$1,') +
	    _float
	}
	
	/**
	 * 'item' => 'items'
	 *
	 * @params
	 *  an array of strings corresponding to
	 *  the single, double, triple ... forms of the word to
	 *  be pluralized. When the number to be pluralized
	 *  exceeds the length of the args, it will use the last
	 *  entry in the array.
	 *
	 *  e.g. ['single', 'double', 'triple', 'multiple']
	 */
	
	exports.pluralize = function (value) {
	  var args = _.toArray(arguments, 1)
	  return args.length > 1
	    ? (args[value % 10 - 1] || args[args.length - 1])
	    : (args[0] + (value === 1 ? '' : 's'))
	}
	
	/**
	 * A special filter that takes a handler function,
	 * wraps it so it only gets triggered on specific
	 * keypresses. v-on only.
	 *
	 * @param {String} key
	 */
	
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  'delete': 46,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	}
	
	exports.key = function (handler, key) {
	  if (!handler) return
	  var code = keyCodes[key]
	  if (!code) {
	    code = parseInt(key, 10)
	  }
	  return function (e) {
	    if (e.keyCode === code) {
	      return handler.call(this, e)
	    }
	  }
	}
	
	// expose keycode hash
	exports.key.keyCodes = keyCodes
	
	/**
	 * Install special array filters
	 */
	
	_.extend(exports, __webpack_require__(64))


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var Path = __webpack_require__(33)
	
	/**
	 * Filter filter for v-repeat
	 *
	 * @param {String} searchKey
	 * @param {String} [delimiter]
	 * @param {String} dataKey
	 */
	
	exports.filterBy = function (arr, search, delimiter, dataKey) {
	  // allow optional `in` delimiter
	  // because why not
	  if (delimiter && delimiter !== 'in') {
	    dataKey = delimiter
	  }
	  if (search == null) {
	    return arr
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase()
	  return arr.filter(function (item) {
	    return dataKey
	      ? contains(Path.get(item, dataKey), search)
	      : contains(item, search)
	  })
	}
	
	/**
	 * Filter filter for v-repeat
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */
	
	exports.orderBy = function (arr, sortKey, reverse) {
	  if (!sortKey) {
	    return arr
	  }
	  var order = 1
	  if (arguments.length > 2) {
	    if (reverse === '-1') {
	      order = -1
	    } else {
	      order = reverse ? -1 : 1
	    }
	  }
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    if (sortKey !== '$key' && sortKey !== '$value') {
	      if (a && '$value' in a) a = a.$value
	      if (b && '$value' in b) b = b.$value
	    }
	    a = _.isObject(a) ? Path.get(a, sortKey) : a
	    b = _.isObject(b) ? Path.get(b, sortKey) : b
	    return a === b ? 0 : a > b ? order : -order
	  })
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains (val, search) {
	  if (_.isPlainObject(val)) {
	    for (var key in val) {
	      if (contains(val[key], search)) {
	        return true
	      }
	    }
	  } else if (_.isArray(val)) {
	    var i = val.length
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1
	  }
	}


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var mergeOptions = __webpack_require__(11).mergeOptions
	
	/**
	 * The main init sequence. This is called for every
	 * instance, including ones that are created from extended
	 * constructors.
	 *
	 * @param {Object} options - this options object should be
	 *                           the result of merging class
	 *                           options and the options passed
	 *                           in to the constructor.
	 */
	
	exports._init = function (options) {
	
	  options = options || {}
	
	  this.$el = null
	  this.$parent = options._parent
	  this.$root = options._root || this
	  this.$children = []
	  this.$ = {}           // child vm references
	  this.$$ = {}          // element references
	  this._watchers = []   // all watchers as an array
	  this._directives = [] // all directives
	  this._childCtors = {} // inherit:true constructors
	
	  // a flag to avoid this being observed
	  this._isVue = true
	
	  // events bookkeeping
	  this._events = {}            // registered callbacks
	  this._eventsCount = {}       // for $broadcast optimization
	  this._eventCancelled = false // for event cancellation
	
	  // block instance properties
	  this._isBlock = false
	  this._blockStart =    // @type {CommentNode}
	  this._blockEnd = null // @type {CommentNode}
	
	  // lifecycle state
	  this._isCompiled =
	  this._isDestroyed =
	  this._isReady =
	  this._isAttached =
	  this._isBeingDestroyed = false
	  this._unlinkFn = null
	
	  // context: the scope in which the component was used,
	  // and the scope in which props and contents of this
	  // instance should be compiled in.
	  this._context =
	    options._context ||
	    options._parent
	
	  // push self into parent / transclusion host
	  if (this.$parent) {
	    this.$parent.$children.push(this)
	  }
	
	  // props used in v-repeat diffing
	  this._reused = false
	  this._staggerOp = null
	
	  // merge options.
	  options = this.$options = mergeOptions(
	    this.constructor.options,
	    options,
	    this
	  )
	
	  // initialize data as empty object.
	  // it will be filled up in _initScope().
	  this._data = {}
	
	  // initialize data observation and scope inheritance.
	  this._initScope()
	
	  // setup event system and option events.
	  this._initEvents()
	
	  // call created hook
	  this._callHook('created')
	
	  // if `el` option is passed, start compilation.
	  if (options.el) {
	    this.$mount(options.el)
	  }
	}


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var inDoc = _.inDoc
	
	/**
	 * Setup the instance's option events & watchers.
	 * If the value is a string, we pull it from the
	 * instance's methods by name.
	 */
	
	exports._initEvents = function () {
	  var options = this.$options
	  registerCallbacks(this, '$on', options.events)
	  registerCallbacks(this, '$watch', options.watch)
	}
	
	/**
	 * Register callbacks for option events and watchers.
	 *
	 * @param {Vue} vm
	 * @param {String} action
	 * @param {Object} hash
	 */
	
	function registerCallbacks (vm, action, hash) {
	  if (!hash) return
	  var handlers, key, i, j
	  for (key in hash) {
	    handlers = hash[key]
	    if (_.isArray(handlers)) {
	      for (i = 0, j = handlers.length; i < j; i++) {
	        register(vm, action, key, handlers[i])
	      }
	    } else {
	      register(vm, action, key, handlers)
	    }
	  }
	}
	
	/**
	 * Helper to register an event/watch callback.
	 *
	 * @param {Vue} vm
	 * @param {String} action
	 * @param {String} key
	 * @param {Function|String|Object} handler
	 * @param {Object} [options]
	 */
	
	function register (vm, action, key, handler, options) {
	  var type = typeof handler
	  if (type === 'function') {
	    vm[action](key, handler, options)
	  } else if (type === 'string') {
	    var methods = vm.$options.methods
	    var method = methods && methods[handler]
	    if (method) {
	      vm[action](key, method, options)
	    } else {
	      _.warn(
	        'Unknown method: "' + handler + '" when ' +
	        'registering callback for ' + action +
	        ': "' + key + '".'
	      )
	    }
	  } else if (handler && type === 'object') {
	    register(vm, action, key, handler.handler, handler)
	  }
	}
	
	/**
	 * Setup recursive attached/detached calls
	 */
	
	exports._initDOMHooks = function () {
	  this.$on('hook:attached', onAttached)
	  this.$on('hook:detached', onDetached)
	}
	
	/**
	 * Callback to recursively call attached hook on children
	 */
	
	function onAttached () {
	  if (!this._isAttached) {
	    this._isAttached = true
	    this.$children.forEach(callAttach)
	  }
	}
	
	/**
	 * Iterator to call attached hook
	 *
	 * @param {Vue} child
	 */
	
	function callAttach (child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached')
	  }
	}
	
	/**
	 * Callback to recursively call detached hook on children
	 */
	
	function onDetached () {
	  if (this._isAttached) {
	    this._isAttached = false
	    this.$children.forEach(callDetach)
	  }
	}
	
	/**
	 * Iterator to call detached hook
	 *
	 * @param {Vue} child
	 */
	
	function callDetach (child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached')
	  }
	}
	
	/**
	 * Trigger all handlers for a hook
	 *
	 * @param {String} hook
	 */
	
	exports._callHook = function (hook) {
	  var handlers = this.$options[hook]
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(this)
	    }
	  }
	  this.$emit('hook:' + hook)
	}


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var compiler = __webpack_require__(20)
	var Observer = __webpack_require__(28)
	var Dep = __webpack_require__(29)
	
	/**
	 * Setup the scope of an instance, which contains:
	 * - observed data
	 * - computed properties
	 * - user methods
	 * - meta properties
	 */
	
	exports._initScope = function () {
	  this._initProps()
	  this._initMeta()
	  this._initMethods()
	  this._initData()
	  this._initComputed()
	}
	
	/**
	 * Initialize props.
	 */
	
	exports._initProps = function () {
	  var options = this.$options
	  var el = options.el
	  var props = options.props
	  if (props && !el) {
	    _.warn(
	      'Props will not be compiled if no `el` option is ' +
	      'provided at instantiation.'
	    )
	  }
	  // make sure to convert string selectors into element now
	  el = options.el = _.query(el)
	  this._propsUnlinkFn = el && props
	    ? compiler.compileAndLinkProps(
	        this, el, props
	      )
	    : null
	}
	
	/**
	 * Initialize the data.
	 */
	
	exports._initData = function () {
	  var propsData = this._data
	  var optionsDataFn = this.$options.data
	  var optionsData = optionsDataFn && optionsDataFn()
	  if (optionsData) {
	    this._data = optionsData
	    for (var prop in propsData) {
	      if (this._props[prop].raw !== null) {
	        optionsData.$set(prop, propsData[prop])
	      }
	    }
	  }
	  var data = this._data
	  // proxy data on instance
	  var keys = Object.keys(data)
	  var i, key
	  i = keys.length
	  while (i--) {
	    key = keys[i]
	    if (!_.isReserved(key)) {
	      this._proxy(key)
	    }
	  }
	  // observe data
	  Observer.create(data, this)
	}
	
	/**
	 * Swap the isntance's $data. Called in $data's setter.
	 *
	 * @param {Object} newData
	 */
	
	exports._setData = function (newData) {
	  newData = newData || {}
	  var oldData = this._data
	  this._data = newData
	  var keys, key, i
	  // copy props.
	  // this should only happen during a v-repeat of component
	  // that also happens to have compiled props.
	  var props = this.$options.props
	  if (props) {
	    i = props.length
	    while (i--) {
	      key = props[i].name
	      if (key !== '$data' && !newData.hasOwnProperty(key)) {
	        newData.$set(key, oldData[key])
	      }
	    }
	  }
	  // unproxy keys not present in new data
	  keys = Object.keys(oldData)
	  i = keys.length
	  while (i--) {
	    key = keys[i]
	    if (!_.isReserved(key) && !(key in newData)) {
	      this._unproxy(key)
	    }
	  }
	  // proxy keys not already proxied,
	  // and trigger change for changed values
	  keys = Object.keys(newData)
	  i = keys.length
	  while (i--) {
	    key = keys[i]
	    if (!this.hasOwnProperty(key) && !_.isReserved(key)) {
	      // new property
	      this._proxy(key)
	    }
	  }
	  oldData.__ob__.removeVm(this)
	  Observer.create(newData, this)
	  this._digest()
	}
	
	/**
	 * Proxy a property, so that
	 * vm.prop === vm._data.prop
	 *
	 * @param {String} key
	 */
	
	exports._proxy = function (key) {
	  // need to store ref to self here
	  // because these getter/setters might
	  // be called by child instances!
	  var self = this
	  Object.defineProperty(self, key, {
	    configurable: true,
	    enumerable: true,
	    get: function proxyGetter () {
	      return self._data[key]
	    },
	    set: function proxySetter (val) {
	      self._data[key] = val
	    }
	  })
	}
	
	/**
	 * Unproxy a property.
	 *
	 * @param {String} key
	 */
	
	exports._unproxy = function (key) {
	  delete this[key]
	}
	
	/**
	 * Force update on every watcher in scope.
	 */
	
	exports._digest = function () {
	  var i = this._watchers.length
	  while (i--) {
	    this._watchers[i].update(true) // shallow updates
	  }
	  var children = this.$children
	  i = children.length
	  while (i--) {
	    var child = children[i]
	    if (child.$options.inherit) {
	      child._digest()
	    }
	  }
	}
	
	/**
	 * Setup computed properties. They are essentially
	 * special getter/setters
	 */
	
	function noop () {}
	exports._initComputed = function () {
	  var computed = this.$options.computed
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key]
	      var def = {
	        enumerable: true,
	        configurable: true
	      }
	      if (typeof userDef === 'function') {
	        def.get = _.bind(userDef, this)
	        def.set = noop
	      } else {
	        def.get = userDef.get
	          ? _.bind(userDef.get, this)
	          : noop
	        def.set = userDef.set
	          ? _.bind(userDef.set, this)
	          : noop
	      }
	      Object.defineProperty(this, key, def)
	    }
	  }
	}
	
	/**
	 * Setup instance methods. Methods must be bound to the
	 * instance since they might be called by children
	 * inheriting them.
	 */
	
	exports._initMethods = function () {
	  var methods = this.$options.methods
	  if (methods) {
	    for (var key in methods) {
	      this[key] = _.bind(methods[key], this)
	    }
	  }
	}
	
	/**
	 * Initialize meta information like $index, $key & $value.
	 */
	
	exports._initMeta = function () {
	  var metas = this.$options._meta
	  if (metas) {
	    for (var key in metas) {
	      this._defineMeta(key, metas[key])
	    }
	  }
	}
	
	/**
	 * Define a meta property, e.g $index, $key, $value
	 * which only exists on the vm instance but not in $data.
	 *
	 * @param {String} key
	 * @param {*} value
	 */
	
	exports._defineMeta = function (key, value) {
	  var dep = new Dep()
	  Object.defineProperty(this, key, {
	    enumerable: true,
	    configurable: true,
	    get: function metaGetter () {
	      dep.depend()
	      return value
	    },
	    set: function metaSetter (val) {
	      if (val !== value) {
	        value = val
	        dep.notify()
	      }
	    }
	  })
	}


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var Directive = __webpack_require__(69)
	var compiler = __webpack_require__(20)
	
	/**
	 * Transclude, compile and link element.
	 *
	 * If a pre-compiled linker is available, that means the
	 * passed in element will be pre-transcluded and compiled
	 * as well - all we need to do is to call the linker.
	 *
	 * Otherwise we need to call transclude/compile/link here.
	 *
	 * @param {Element} el
	 * @return {Element}
	 */
	
	exports._compile = function (el) {
	  var options = this.$options
	  var host = this._host
	  if (options._linkFn) {
	    // pre-transcluded with linker, just use it
	    this._initElement(el)
	    this._unlinkFn = options._linkFn(this, el, host)
	  } else {
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el
	    el = compiler.transclude(el, options)
	    this._initElement(el)
	
	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var rootUnlinkFn =
	      compiler.compileAndLinkRoot(this, el, options)
	
	    // compile and link the rest
	    var linker
	    var ctor = this.constructor
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      linker = ctor.linker
	      if (!linker) {
	        linker = ctor.linker = compiler.compile(el, options)
	      }
	    }
	    var contentUnlinkFn = linker
	      ? linker(this, el)
	      : compiler.compile(el, options)(this, el, host)
	
	    this._unlinkFn = function () {
	      rootUnlinkFn()
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true)
	    }
	
	    // finally replace original
	    if (options.replace) {
	      _.replace(original, el)
	    }
	  }
	  return el
	}
	
	/**
	 * Initialize instance element. Called in the public
	 * $mount() method.
	 *
	 * @param {Element} el
	 */
	
	exports._initElement = function (el) {
	  if (el instanceof DocumentFragment) {
	    this._isBlock = true
	    this.$el = this._blockStart = el.firstChild
	    this._blockEnd = el.lastChild
	    // set persisted text anchors to empty
	    if (this._blockStart.nodeType === 3) {
	      this._blockStart.data = this._blockEnd.data = ''
	    }
	    this._blockFragment = el
	  } else {
	    this.$el = el
	  }
	  this.$el.__vue__ = this
	  this._callHook('beforeCompile')
	}
	
	/**
	 * Create and bind a directive to an element.
	 *
	 * @param {String} name - directive name
	 * @param {Node} node   - target node
	 * @param {Object} desc - parsed directive descriptor
	 * @param {Object} def  - directive definition object
	 * @param {Vue|undefined} host - transclusion host component
	 */
	
	exports._bindDir = function (name, node, desc, def, host) {
	  this._directives.push(
	    new Directive(name, node, this, desc, def, host)
	  )
	}
	
	/**
	 * Teardown an instance, unobserves the data, unbind all the
	 * directives, turn off all the event listeners, etc.
	 *
	 * @param {Boolean} remove - whether to remove the DOM node.
	 * @param {Boolean} deferCleanup - if true, defer cleanup to
	 *                                 be called later
	 */
	
	exports._destroy = function (remove, deferCleanup) {
	  if (this._isBeingDestroyed) {
	    return
	  }
	  this._callHook('beforeDestroy')
	  this._isBeingDestroyed = true
	  var i
	  // remove self from parent. only necessary
	  // if parent is not being destroyed as well.
	  var parent = this.$parent
	  if (parent && !parent._isBeingDestroyed) {
	    parent.$children.$remove(this)
	  }
	  // destroy all children.
	  i = this.$children.length
	  while (i--) {
	    this.$children[i].$destroy()
	  }
	  // teardown props
	  if (this._propsUnlinkFn) {
	    this._propsUnlinkFn()
	  }
	  // teardown all directives. this also tearsdown all
	  // directive-owned watchers.
	  if (this._unlinkFn) {
	    this._unlinkFn()
	  }
	  i = this._watchers.length
	  while (i--) {
	    this._watchers[i].teardown()
	  }
	  // remove reference to self on $el
	  if (this.$el) {
	    this.$el.__vue__ = null
	  }
	  // remove DOM element
	  var self = this
	  if (remove && this.$el) {
	    this.$remove(function () {
	      self._cleanup()
	    })
	  } else if (!deferCleanup) {
	    this._cleanup()
	  }
	}
	
	/**
	 * Clean up to ensure garbage collection.
	 * This is called after the leave transition if there
	 * is any.
	 */
	
	exports._cleanup = function () {
	  // remove reference from data ob
	  // frozen object may not have observer.
	  if (this._data.__ob__) {
	    this._data.__ob__.removeVm(this)
	  }
	  // Clean up references to private properties and other
	  // instances. preserve reference to _data so that proxy
	  // accessors still work. The only potential side effect
	  // here is that mutating the instance after it's destroyed
	  // may affect the state of other components that are still
	  // observing the same object, but that seems to be a
	  // reasonable responsibility for the user rather than
	  // always throwing an error on them.
	  this.$el =
	  this.$parent =
	  this.$root =
	  this.$children =
	  this._watchers =
	  this._directives = null
	  // call the last hook...
	  this._isDestroyed = true
	  this._callHook('destroyed')
	  // turn off all instance listeners.
	  this.$off()
	}


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var config = __webpack_require__(16)
	var Watcher = __webpack_require__(27)
	var textParser = __webpack_require__(23)
	var expParser = __webpack_require__(32)
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {String} name
	 * @param {Node} el
	 * @param {Vue} vm
	 * @param {Object} descriptor
	 *                 - {String} expression
	 *                 - {String} [arg]
	 *                 - {Array<Object>} [filters]
	 * @param {Object} def - directive definition object
	 * @param {Vue|undefined} host - transclusion host target
	 * @constructor
	 */
	
	function Directive (name, el, vm, descriptor, def, host) {
	  // public
	  this.name = name
	  this.el = el
	  this.vm = vm
	  // copy descriptor props
	  this.raw = descriptor.raw
	  this.expression = descriptor.expression
	  this.arg = descriptor.arg
	  this.filters = descriptor.filters
	  // private
	  this._descriptor = descriptor
	  this._host = host
	  this._locked = false
	  this._bound = false
	  // init
	  this._bind(def)
	}
	
	var p = Directive.prototype
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 *
	 * @param {Object} def
	 */
	
	p._bind = function (def) {
	  if (this.name !== 'cloak' && this.el && this.el.removeAttribute) {
	    this.el.removeAttribute(config.prefix + this.name)
	  }
	  if (typeof def === 'function') {
	    this.update = def
	  } else {
	    _.extend(this, def)
	  }
	  this._watcherExp = this.expression
	  this._checkDynamicLiteral()
	  if (this.bind) {
	    this.bind()
	  }
	  if (this._watcherExp &&
	      (this.update || this.twoWay) &&
	      (!this.isLiteral || this._isDynamicLiteral) &&
	      !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this
	    var update = this._update = this.update
	      ? function (val, oldVal) {
	          if (!dir._locked) {
	            dir.update(val, oldVal)
	          }
	        }
	      : function () {} // noop if no update is provided
	    // pre-process hook called before the value is piped
	    // through the filters. used in v-repeat.
	    var preProcess = this._preProcess
	      ? _.bind(this._preProcess, this)
	      : null
	    var watcher = this._watcher = new Watcher(
	      this.vm,
	      this._watcherExp,
	      update, // callback
	      {
	        filters: this.filters,
	        twoWay: this.twoWay,
	        deep: this.deep,
	        preProcess: preProcess
	      }
	    )
	    if (this._initValue != null) {
	      watcher.set(this._initValue)
	    } else if (this.update) {
	      this.update(watcher.value)
	    }
	  }
	  this._bound = true
	}
	
	/**
	 * check if this is a dynamic literal binding.
	 *
	 * e.g. v-component="{{currentView}}"
	 */
	
	p._checkDynamicLiteral = function () {
	  var expression = this.expression
	  if (expression && this.isLiteral) {
	    var tokens = textParser.parse(expression)
	    if (tokens) {
	      var exp = textParser.tokensToExp(tokens)
	      this.expression = this.vm.$get(exp)
	      this._watcherExp = exp
	      this._isDynamicLiteral = true
	    }
	  }
	}
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. v-on="click: a++"
	 *
	 * @return {Boolean}
	 */
	
	p._checkStatement = function () {
	  var expression = this.expression
	  if (
	    expression && this.acceptStatement &&
	    !expParser.isSimplePath(expression)
	  ) {
	    var fn = expParser.parse(expression).get
	    var vm = this.vm
	    var handler = function () {
	      fn.call(vm, vm)
	    }
	    if (this.filters) {
	      handler = vm._applyFilters(handler, null, this.filters)
	    }
	    this.update(handler)
	    return true
	  }
	}
	
	/**
	 * Check for an attribute directive param, e.g. lazy
	 *
	 * @param {String} name
	 * @return {String}
	 */
	
	p._checkParam = function (name) {
	  var param = this.el.getAttribute(name)
	  if (param !== null) {
	    this.el.removeAttribute(name)
	  }
	  return param
	}
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	p._teardown = function () {
	  if (this._bound) {
	    this._bound = false
	    if (this.unbind) {
	      this.unbind()
	    }
	    if (this._watcher) {
	      this._watcher.teardown()
	    }
	    this.vm = this.el = this._watcher = null
	  }
	}
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	p.set = function (value) {
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value)
	    })
	  }
	}
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	p._withLock = function (fn) {
	  var self = this
	  self._locked = true
	  fn.call(self)
	  _.nextTick(function () {
	    self._locked = false
	  })
	}
	
	module.exports = Directive


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	
	/**
	 * Apply a list of filter (descriptors) to a value.
	 * Using plain for loops here because this will be called in
	 * the getter of any watcher with filters so it is very
	 * performance sensitive.
	 *
	 * @param {*} value
	 * @param {*} [oldValue]
	 * @param {Array} filters
	 * @param {Boolean} write
	 * @return {*}
	 */
	
	exports._applyFilters = function (value, oldValue, filters, write) {
	  var filter, fn, args, arg, offset, i, l, j, k
	  for (i = 0, l = filters.length; i < l; i++) {
	    filter = filters[i]
	    fn = _.resolveAsset(this.$options, 'filters', filter.name)
	    _.assertAsset(fn, 'filter', filter.name)
	    if (!fn) continue
	    fn = write ? fn.write : (fn.read || fn)
	    if (typeof fn !== 'function') continue
	    args = write ? [value, oldValue] : [value]
	    offset = write ? 2 : 1
	    if (filter.args) {
	      for (j = 0, k = filter.args.length; j < k; j++) {
	        arg = filter.args[j]
	        args[j + offset] = arg.dynamic
	          ? this.$get(arg.value)
	          : arg.value
	      }
	    }
	    value = fn.apply(this, args)
	  }
	  return value
	}
	
	/**
	 * Resolve a component, depending on whether the component
	 * is defined normally or using an async factory function.
	 * Resolves synchronously if already resolved, otherwise
	 * resolves asynchronously and caches the resolved
	 * constructor on the factory.
	 *
	 * @param {String} id
	 * @param {Function} cb
	 */
	
	exports._resolveComponent = function (id, cb) {
	  var factory = _.resolveAsset(this.$options, 'components', id)
	  _.assertAsset(factory, 'component', id)
	  // async component factory
	  if (!factory.options) {
	    if (factory.resolved) {
	      // cached
	      cb(factory.resolved)
	    } else if (factory.requested) {
	      // pool callbacks
	      factory.pendingCallbacks.push(cb)
	    } else {
	      factory.requested = true
	      var cbs = factory.pendingCallbacks = [cb]
	      factory(function resolve (res) {
	        if (_.isPlainObject(res)) {
	          res = _.Vue.extend(res)
	        }
	        // cache resolved
	        factory.resolved = res
	        // invoke callbacks
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res)
	        }
	      }, function reject (reason) {
	        _.warn(
	          'Failed to resolve async component: ' + id + '. ' +
	          (reason ? '\nReason: ' + reason : '')
	        )
	      })
	    }
	  } else {
	    // normal component
	    cb(factory)
	  }
	}


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var Watcher = __webpack_require__(27)
	var Path = __webpack_require__(33)
	var textParser = __webpack_require__(23)
	var dirParser = __webpack_require__(25)
	var expParser = __webpack_require__(32)
	var filterRE = /[^|]\|[^|]/
	
	/**
	 * Get the value from an expression on this vm.
	 *
	 * @param {String} exp
	 * @return {*}
	 */
	
	exports.$get = function (exp) {
	  var res = expParser.parse(exp)
	  if (res) {
	    try {
	      return res.get.call(this, this)
	    } catch (e) {}
	  }
	}
	
	/**
	 * Set the value from an expression on this vm.
	 * The expression must be a valid left-hand
	 * expression in an assignment.
	 *
	 * @param {String} exp
	 * @param {*} val
	 */
	
	exports.$set = function (exp, val) {
	  var res = expParser.parse(exp, true)
	  if (res && res.set) {
	    res.set.call(this, this, val)
	  }
	}
	
	/**
	 * Add a property on the VM
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	exports.$add = function (key, val) {
	  this._data.$add(key, val)
	}
	
	/**
	 * Delete a property on the VM
	 *
	 * @param {String} key
	 */
	
	exports.$delete = function (key) {
	  this._data.$delete(key)
	}
	
	/**
	 * Watch an expression, trigger callback when its
	 * value changes.
	 *
	 * @param {String} exp
	 * @param {Function} cb
	 * @param {Object} [options]
	 *                 - {Boolean} deep
	 *                 - {Boolean} immediate
	 *                 - {Boolean} user
	 * @return {Function} - unwatchFn
	 */
	
	exports.$watch = function (exp, cb, options) {
	  var vm = this
	  var wrappedCb = function (val, oldVal) {
	    cb.call(vm, val, oldVal)
	  }
	  var watcher = new Watcher(vm, exp, wrappedCb, {
	    deep: options && options.deep,
	    user: !options || options.user !== false
	  })
	  if (options && options.immediate) {
	    wrappedCb(watcher.value)
	  }
	  return function unwatchFn () {
	    watcher.teardown()
	  }
	}
	
	/**
	 * Evaluate a text directive, including filters.
	 *
	 * @param {String} text
	 * @return {String}
	 */
	
	exports.$eval = function (text) {
	  // check for filters.
	  if (filterRE.test(text)) {
	    var dir = dirParser.parse(text)[0]
	    // the filter regex check might give false positive
	    // for pipes inside strings, so it's possible that
	    // we don't get any filters here
	    var val = this.$get(dir.expression)
	    return dir.filters
	      ? this._applyFilters(val, null, dir.filters)
	      : val
	  } else {
	    // no filter
	    return this.$get(text)
	  }
	}
	
	/**
	 * Interpolate a piece of template text.
	 *
	 * @param {String} text
	 * @return {String}
	 */
	
	exports.$interpolate = function (text) {
	  var tokens = textParser.parse(text)
	  var vm = this
	  if (tokens) {
	    return tokens.length === 1
	      ? vm.$eval(tokens[0].value)
	      : tokens.map(function (token) {
	          return token.tag
	            ? vm.$eval(token.value)
	            : token.value
	        }).join('')
	  } else {
	    return text
	  }
	}
	
	/**
	 * Log instance data as a plain JS object
	 * so that it is easier to inspect in console.
	 * This method assumes console is available.
	 *
	 * @param {String} [path]
	 */
	
	exports.$log = function (path) {
	  var data = path
	    ? Path.get(this._data, path)
	    : this._data
	  if (data) {
	    data = JSON.parse(JSON.stringify(data))
	  }
	  console.log(data)
	}


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var transition = __webpack_require__(44)
	
	/**
	 * Convenience on-instance nextTick. The callback is
	 * auto-bound to the instance, and this avoids component
	 * modules having to rely on the global Vue.
	 *
	 * @param {Function} fn
	 */
	
	exports.$nextTick = function (fn) {
	  _.nextTick(fn, this)
	}
	
	/**
	 * Append instance to target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$appendTo = function (target, cb, withTransition) {
	  return insert(
	    this, target, cb, withTransition,
	    append, transition.append
	  )
	}
	
	/**
	 * Prepend instance to target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$prependTo = function (target, cb, withTransition) {
	  target = query(target)
	  if (target.hasChildNodes()) {
	    this.$before(target.firstChild, cb, withTransition)
	  } else {
	    this.$appendTo(target, cb, withTransition)
	  }
	  return this
	}
	
	/**
	 * Insert instance before target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$before = function (target, cb, withTransition) {
	  return insert(
	    this, target, cb, withTransition,
	    before, transition.before
	  )
	}
	
	/**
	 * Insert instance after target
	 *
	 * @param {Node} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$after = function (target, cb, withTransition) {
	  target = query(target)
	  if (target.nextSibling) {
	    this.$before(target.nextSibling, cb, withTransition)
	  } else {
	    this.$appendTo(target.parentNode, cb, withTransition)
	  }
	  return this
	}
	
	/**
	 * Remove instance from DOM
	 *
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition] - defaults to true
	 */
	
	exports.$remove = function (cb, withTransition) {
	  if (!this.$el.parentNode) {
	    return cb && cb()
	  }
	  var inDoc = this._isAttached && _.inDoc(this.$el)
	  // if we are not in document, no need to check
	  // for transitions
	  if (!inDoc) withTransition = false
	  var op
	  var self = this
	  var realCb = function () {
	    if (inDoc) self._callHook('detached')
	    if (cb) cb()
	  }
	  if (
	    this._isBlock &&
	    !this._blockFragment.hasChildNodes()
	  ) {
	    op = withTransition === false
	      ? append
	      : transition.removeThenAppend
	    blockOp(this, this._blockFragment, op, realCb)
	  } else {
	    op = withTransition === false
	      ? remove
	      : transition.remove
	    op(this.$el, this, realCb)
	  }
	  return this
	}
	
	/**
	 * Shared DOM insertion function.
	 *
	 * @param {Vue} vm
	 * @param {Element} target
	 * @param {Function} [cb]
	 * @param {Boolean} [withTransition]
	 * @param {Function} op1 - op for non-transition insert
	 * @param {Function} op2 - op for transition insert
	 * @return vm
	 */
	
	function insert (vm, target, cb, withTransition, op1, op2) {
	  target = query(target)
	  var targetIsDetached = !_.inDoc(target)
	  var op = withTransition === false || targetIsDetached
	    ? op1
	    : op2
	  var shouldCallHook =
	    !targetIsDetached &&
	    !vm._isAttached &&
	    !_.inDoc(vm.$el)
	  if (vm._isBlock) {
	    blockOp(vm, target, op, cb)
	  } else {
	    op(vm.$el, target, vm, cb)
	  }
	  if (shouldCallHook) {
	    vm._callHook('attached')
	  }
	  return vm
	}
	
	/**
	 * Execute a transition operation on a block instance,
	 * iterating through all its block nodes.
	 *
	 * @param {Vue} vm
	 * @param {Node} target
	 * @param {Function} op
	 * @param {Function} cb
	 */
	
	function blockOp (vm, target, op, cb) {
	  var current = vm._blockStart
	  var end = vm._blockEnd
	  var next
	  while (next !== end) {
	    next = current.nextSibling
	    op(current, target, vm)
	    current = next
	  }
	  op(end, target, vm, cb)
	}
	
	/**
	 * Check for selectors
	 *
	 * @param {String|Element} el
	 */
	
	function query (el) {
	  return typeof el === 'string'
	    ? document.querySelector(el)
	    : el
	}
	
	/**
	 * Append operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Node} target
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */
	
	function append (el, target, vm, cb) {
	  target.appendChild(el)
	  if (cb) cb()
	}
	
	/**
	 * InsertBefore operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Node} target
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */
	
	function before (el, target, vm, cb) {
	  _.before(el, target)
	  if (cb) cb()
	}
	
	/**
	 * Remove operation that takes a callback.
	 *
	 * @param {Node} el
	 * @param {Vue} vm - unused
	 * @param {Function} [cb]
	 */
	
	function remove (el, vm, cb) {
	  _.remove(el)
	  if (cb) cb()
	}


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	
	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */
	
	exports.$on = function (event, fn) {
	  (this._events[event] || (this._events[event] = []))
	    .push(fn)
	  modifyListenerCount(this, event, 1)
	  return this
	}
	
	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */
	
	exports.$once = function (event, fn) {
	  var self = this
	  function on () {
	    self.$off(event, on)
	    fn.apply(this, arguments)
	  }
	  on.fn = fn
	  this.$on(event, on)
	  return this
	}
	
	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 */
	
	exports.$off = function (event, fn) {
	  var cbs
	  // all
	  if (!arguments.length) {
	    if (this.$parent) {
	      for (event in this._events) {
	        cbs = this._events[event]
	        if (cbs) {
	          modifyListenerCount(this, event, -cbs.length)
	        }
	      }
	    }
	    this._events = {}
	    return this
	  }
	  // specific event
	  cbs = this._events[event]
	  if (!cbs) {
	    return this
	  }
	  if (arguments.length === 1) {
	    modifyListenerCount(this, event, -cbs.length)
	    this._events[event] = null
	    return this
	  }
	  // specific handler
	  var cb
	  var i = cbs.length
	  while (i--) {
	    cb = cbs[i]
	    if (cb === fn || cb.fn === fn) {
	      modifyListenerCount(this, event, -1)
	      cbs.splice(i, 1)
	      break
	    }
	  }
	  return this
	}
	
	/**
	 * Trigger an event on self.
	 *
	 * @param {String} event
	 */
	
	exports.$emit = function (event) {
	  this._eventCancelled = false
	  var cbs = this._events[event]
	  if (cbs) {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length - 1
	    var args = new Array(i)
	    while (i--) {
	      args[i] = arguments[i + 1]
	    }
	    i = 0
	    cbs = cbs.length > 1
	      ? _.toArray(cbs)
	      : cbs
	    for (var l = cbs.length; i < l; i++) {
	      if (cbs[i].apply(this, args) === false) {
	        this._eventCancelled = true
	      }
	    }
	  }
	  return this
	}
	
	/**
	 * Recursively broadcast an event to all children instances.
	 *
	 * @param {String} event
	 * @param {...*} additional arguments
	 */
	
	exports.$broadcast = function (event) {
	  // if no child has registered for this event,
	  // then there's no need to broadcast.
	  if (!this._eventsCount[event]) return
	  var children = this.$children
	  for (var i = 0, l = children.length; i < l; i++) {
	    var child = children[i]
	    child.$emit.apply(child, arguments)
	    if (!child._eventCancelled) {
	      child.$broadcast.apply(child, arguments)
	    }
	  }
	  return this
	}
	
	/**
	 * Recursively propagate an event up the parent chain.
	 *
	 * @param {String} event
	 * @param {...*} additional arguments
	 */
	
	exports.$dispatch = function () {
	  var parent = this.$parent
	  while (parent) {
	    parent.$emit.apply(parent, arguments)
	    parent = parent._eventCancelled
	      ? null
	      : parent.$parent
	  }
	  return this
	}
	
	/**
	 * Modify the listener counts on all parents.
	 * This bookkeeping allows $broadcast to return early when
	 * no child has listened to a certain event.
	 *
	 * @param {Vue} vm
	 * @param {String} event
	 * @param {Number} count
	 */
	
	var hookRE = /^hook:/
	function modifyListenerCount (vm, event, count) {
	  var parent = vm.$parent
	  // hooks do not get broadcasted so no need
	  // to do bookkeeping for them
	  if (!parent || !count || hookRE.test(event)) return
	  while (parent) {
	    parent._eventsCount[event] =
	      (parent._eventsCount[event] || 0) + count
	    parent = parent.$parent
	  }
	}


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	
	/**
	 * Create a child instance that prototypally inehrits
	 * data on parent. To achieve that we create an intermediate
	 * constructor with its prototype pointing to parent.
	 *
	 * @param {Object} opts
	 * @param {Function} [BaseCtor]
	 * @return {Vue}
	 * @public
	 */
	
	exports.$addChild = function (opts, BaseCtor) {
	  BaseCtor = BaseCtor || _.Vue
	  opts = opts || {}
	  var parent = this
	  var ChildVue
	  var inherit = opts.inherit !== undefined
	    ? opts.inherit
	    : BaseCtor.options.inherit
	  if (inherit) {
	    var ctors = parent._childCtors
	    ChildVue = ctors[BaseCtor.cid]
	    if (!ChildVue) {
	      var optionName = BaseCtor.options.name
	      var className = optionName
	        ? _.classify(optionName)
	        : 'VueComponent'
	      ChildVue = new Function(
	        'return function ' + className + ' (options) {' +
	        'this.constructor = ' + className + ';' +
	        'this._init(options) }'
	      )()
	      ChildVue.options = BaseCtor.options
	      ChildVue.linker = BaseCtor.linker
	      // important: transcluded inline repeaters should
	      // inherit from outer scope rather than host
	      ChildVue.prototype = opts._context || this
	      ctors[BaseCtor.cid] = ChildVue
	    }
	  } else {
	    ChildVue = BaseCtor
	  }
	  opts._parent = parent
	  opts._root = parent.$root
	  var child = new ChildVue(opts)
	  return child
	}


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var _ = __webpack_require__(11)
	var compiler = __webpack_require__(20)
	
	/**
	 * Set instance target element and kick off the compilation
	 * process. The passed in `el` can be a selector string, an
	 * existing Element, or a DocumentFragment (for block
	 * instances).
	 *
	 * @param {Element|DocumentFragment|string} el
	 * @public
	 */
	
	exports.$mount = function (el) {
	  if (this._isCompiled) {
	    _.warn('$mount() should be called only once.')
	    return
	  }
	  el = _.query(el)
	  if (!el) {
	    el = document.createElement('div')
	  }
	  this._compile(el)
	  this._isCompiled = true
	  this._callHook('compiled')
	  this._initDOMHooks()
	  if (_.inDoc(this.$el)) {
	    this._callHook('attached')
	    ready.call(this)
	  } else {
	    this.$once('hook:attached', ready)
	  }
	  return this
	}
	
	/**
	 * Mark an instance as ready.
	 */
	
	function ready () {
	  this._isAttached = true
	  this._isReady = true
	  this._callHook('ready')
	}
	
	/**
	 * Teardown the instance, simply delegate to the internal
	 * _destroy.
	 */
	
	exports.$destroy = function (remove, deferCleanup) {
	  this._destroy(remove, deferCleanup)
	}
	
	/**
	 * Partially compile a piece of DOM and return a
	 * decompile function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Vue} [host]
	 * @return {Function}
	 */
	
	exports.$compile = function (el, host) {
	  return compiler.compile(el, this.$options, true, host)(this, el)
	}


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(77),
	    page = __webpack_require__(78);
	
	module.exports = function(Vue) {
	  var component = Vue.directive('_component'),
	      overrides = __webpack_require__(82)(Vue),
	      routing = __webpack_require__(83)(Vue, page, utils),
	      _ = Vue.util;
	
	    var routeDefinition = _.extend({
	        isLiteral: true,
	
	        // Vue event method, $emit or $broadcast
	        notifier: null,
	
	        defaultRoute: '/',
	
	        // Reference to $root.$options.routes
	        routes: {},
	
	        // Options to be passed to the routing library
	        options: {
	          base: '/',
	          hashbang: false,
	          click: true
	        },
	
	        // Location context
	        location: {
	            regexp: null,
	            path: null,
	            componentId: null,
	            params: null
	        },
	
	        oldLocation: {
	            regexp: null,
	            path: null,
	            componentId: null,
	            params: null
	        }
	    }, component);
	
	    // Extend the routing-related methods
	    _.extend(routeDefinition, routing);
	
	    // override some of components methods
	    _.extend(routeDefinition, overrides);
	
	    Vue.directive('route', routeDefinition);
	};


/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	    hasOwnProp: Object.prototype.hasOwnProperty,
	    toString: Object.prototype.toString,
	    concat: Array.prototype.concat,
	    isString: function(str) {
	      return this.toString.call(str).toLowerCase() == "[object string]";
	    },
	    isFunction: function(fn) {
	      return this.toString.call(fn).toLowerCase() == "[object function]";
	    }
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {  /* globals require, module */
	
	  'use strict';
	
	  /**
	   * Module dependencies.
	   */
	
	  var pathtoRegexp = __webpack_require__(80);
	
	  /**
	   * Module exports.
	   */
	
	  module.exports = page;
	
	  /**
	   * Detect click event
	   */
	  var clickEvent = ('undefined' !== typeof document) && document.ontouchstart ? 'touchstart' : 'click';
	
	  /**
	   * To work properly with the URL
	   * history.location generated polyfill in https://github.com/devote/HTML5-History-API
	   */
	
	  var location = ('undefined' !== typeof window) && (window.history.location || window.location);
	
	  /**
	   * Perform initial dispatch.
	   */
	
	  var dispatch = true;
	
	
	  /**
	   * Decode URL components (query string, pathname, hash).
	   * Accommodates both regular percent encoding and x-www-form-urlencoded format.
	   */
	  var decodeURLComponents = true;
	
	  /**
	   * Base path.
	   */
	
	  var base = '';
	
	  /**
	   * Running flag.
	   */
	
	  var running;
	
	  /**
	   * HashBang option
	   */
	
	  var hashbang = false;
	
	  /**
	   * Previous context, for capturing
	   * page exit events.
	   */
	
	  var prevContext;
	
	  /**
	   * Register `path` with callback `fn()`,
	   * or route `path`, or redirection,
	   * or `page.start()`.
	   *
	   *   page(fn);
	   *   page('*', fn);
	   *   page('/user/:id', load, user);
	   *   page('/user/' + user.id, { some: 'thing' });
	   *   page('/user/' + user.id);
	   *   page('/from', '/to')
	   *   page();
	   *
	   * @param {String|Function} path
	   * @param {Function} fn...
	   * @api public
	   */
	
	  function page(path, fn) {
	    // <callback>
	    if ('function' === typeof path) {
	      return page('*', path);
	    }
	
	    // route <path> to <callback ...>
	    if ('function' === typeof fn) {
	      var route = new Route(path);
	      for (var i = 1; i < arguments.length; ++i) {
	        page.callbacks.push(route.middleware(arguments[i]));
	      }
	      // show <path> with [state]
	    } else if ('string' === typeof path) {
	      page['string' === typeof fn ? 'redirect' : 'show'](path, fn);
	      // start [options]
	    } else {
	      page.start(path);
	    }
	  }
	
	  /**
	   * Callback functions.
	   */
	
	  page.callbacks = [];
	  page.exits = [];
	
	  /**
	   * Current path being processed
	   * @type {String}
	   */
	  page.current = '';
	
	  /**
	   * Number of pages navigated to.
	   * @type {number}
	   *
	   *     page.len == 0;
	   *     page('/login');
	   *     page.len == 1;
	   */
	
	  page.len = 0;
	
	  /**
	   * Get or set basepath to `path`.
	   *
	   * @param {String} path
	   * @api public
	   */
	
	  page.base = function(path) {
	    if (0 === arguments.length) return base;
	    base = path;
	  };
	
	  /**
	   * Bind with the given `options`.
	   *
	   * Options:
	   *
	   *    - `click` bind to click events [true]
	   *    - `popstate` bind to popstate [true]
	   *    - `dispatch` perform initial dispatch [true]
	   *
	   * @param {Object} options
	   * @api public
	   */
	
	  page.start = function(options) {
	    options = options || {};
	    if (running) return;
	    running = true;
	    if (false === options.dispatch) dispatch = false;
	    if (false === options.decodeURLComponents) decodeURLComponents = false;
	    if (false !== options.popstate) window.addEventListener('popstate', onpopstate, false);
	    if (false !== options.click) {
	      document.addEventListener(clickEvent, onclick, false);
	    }
	    if (true === options.hashbang) hashbang = true;
	    if (!dispatch) return;
	    var url = (hashbang && ~location.hash.indexOf('#!')) ? location.hash.substr(2) + location.search : location.pathname + location.search + location.hash;
	    page.replace(url, null, true, dispatch);
	  };
	
	  /**
	   * Unbind click and popstate event handlers.
	   *
	   * @api public
	   */
	
	  page.stop = function() {
	    if (!running) return;
	    page.current = '';
	    page.len = 0;
	    running = false;
	    document.removeEventListener(clickEvent, onclick, false);
	    window.removeEventListener('popstate', onpopstate, false);
	  };
	
	  /**
	   * Show `path` with optional `state` object.
	   *
	   * @param {String} path
	   * @param {Object} state
	   * @param {Boolean} dispatch
	   * @return {Context}
	   * @api public
	   */
	
	  page.show = function(path, state, dispatch, push) {
	    var ctx = new Context(path, state);
	    page.current = ctx.path;
	    if (false !== dispatch) page.dispatch(ctx);
	    if (false !== ctx.handled && false !== push) ctx.pushState();
	    return ctx;
	  };
	
	  /**
	   * Goes back in the history
	   * Back should always let the current route push state and then go back.
	   *
	   * @param {String} path - fallback path to go back if no more history exists, if undefined defaults to page.base
	   * @param {Object} [state]
	   * @api public
	   */
	
	  page.back = function(path, state) {
	    if (page.len > 0) {
	      // this may need more testing to see if all browsers
	      // wait for the next tick to go back in history
	      history.back();
	      page.len--;
	    } else if (path) {
	      setTimeout(function() {
	        page.show(path, state);
	      });
	    }else{
	      setTimeout(function() {
	        page.show(base, state);
	      });
	    }
	  };
	
	
	  /**
	   * Register route to redirect from one path to other
	   * or just redirect to another route
	   *
	   * @param {String} from - if param 'to' is undefined redirects to 'from'
	   * @param {String} [to]
	   * @api public
	   */
	  page.redirect = function(from, to) {
	    // Define route from a path to another
	    if ('string' === typeof from && 'string' === typeof to) {
	      page(from, function(e) {
	        setTimeout(function() {
	          page.replace(to);
	        }, 0);
	      });
	    }
	
	    // Wait for the push state and replace it with another
	    if ('string' === typeof from && 'undefined' === typeof to) {
	      setTimeout(function() {
	        page.replace(from);
	      }, 0);
	    }
	  };
	
	  /**
	   * Replace `path` with optional `state` object.
	   *
	   * @param {String} path
	   * @param {Object} state
	   * @return {Context}
	   * @api public
	   */
	
	
	  page.replace = function(path, state, init, dispatch) {
	    var ctx = new Context(path, state);
	    page.current = ctx.path;
	    ctx.init = init;
	    ctx.save(); // save before dispatching, which may redirect
	    if (false !== dispatch) page.dispatch(ctx);
	    return ctx;
	  };
	
	  /**
	   * Dispatch the given `ctx`.
	   *
	   * @param {Object} ctx
	   * @api private
	   */
	
	  page.dispatch = function(ctx) {
	    var prev = prevContext,
	      i = 0,
	      j = 0;
	
	    prevContext = ctx;
	
	    function nextExit() {
	      var fn = page.exits[j++];
	      if (!fn) return nextEnter();
	      fn(prev, nextExit);
	    }
	
	    function nextEnter() {
	      var fn = page.callbacks[i++];
	
	      if (ctx.path !== page.current) {
	        ctx.handled = false;
	        return;
	      }
	      if (!fn) return unhandled(ctx);
	      fn(ctx, nextEnter);
	    }
	
	    if (prev) {
	      nextExit();
	    } else {
	      nextEnter();
	    }
	  };
	
	  /**
	   * Unhandled `ctx`. When it's not the initial
	   * popstate then redirect. If you wish to handle
	   * 404s on your own use `page('*', callback)`.
	   *
	   * @param {Context} ctx
	   * @api private
	   */
	
	  function unhandled(ctx) {
	    if (ctx.handled) return;
	    var current;
	
	    if (hashbang) {
	      current = base + location.hash.replace('#!', '');
	    } else {
	      current = location.pathname + location.search;
	    }
	
	    if (current === ctx.canonicalPath) return;
	    page.stop();
	    ctx.handled = false;
	    location.href = ctx.canonicalPath;
	  }
	
	  /**
	   * Register an exit route on `path` with
	   * callback `fn()`, which will be called
	   * on the previous context when a new
	   * page is visited.
	   */
	  page.exit = function(path, fn) {
	    if (typeof path === 'function') {
	      return page.exit('*', path);
	    }
	
	    var route = new Route(path);
	    for (var i = 1; i < arguments.length; ++i) {
	      page.exits.push(route.middleware(arguments[i]));
	    }
	  };
	
	  /**
	   * Remove URL encoding from the given `str`.
	   * Accommodates whitespace in both x-www-form-urlencoded
	   * and regular percent-encoded form.
	   *
	   * @param {str} URL component to decode
	   */
	  function decodeURLEncodedURIComponent(val) {
	    if (typeof val !== 'string') { return val; }
	    return decodeURLComponents ? decodeURIComponent(val.replace(/\+/g, ' ')) : val;
	  }
	
	  /**
	   * Initialize a new "request" `Context`
	   * with the given `path` and optional initial `state`.
	   *
	   * @param {String} path
	   * @param {Object} state
	   * @api public
	   */
	
	  function Context(path, state) {
	    if ('/' === path[0] && 0 !== path.indexOf(base)) path = base + (hashbang ? '#!' : '') + path;
	    var i = path.indexOf('?');
	
	    this.canonicalPath = path;
	    this.path = path.replace(base, '') || '/';
	    if (hashbang) this.path = this.path.replace('#!', '') || '/';
	
	    this.title = document.title;
	    this.state = state || {};
	    this.state.path = path;
	    this.querystring = ~i ? decodeURLEncodedURIComponent(path.slice(i + 1)) : '';
	    this.pathname = decodeURLEncodedURIComponent(~i ? path.slice(0, i) : path);
	    this.params = {};
	
	    // fragment
	    this.hash = '';
	    if (!hashbang) {
	      if (!~this.path.indexOf('#')) return;
	      var parts = this.path.split('#');
	      this.path = parts[0];
	      this.hash = decodeURLEncodedURIComponent(parts[1]) || '';
	      this.querystring = this.querystring.split('#')[0];
	    }
	  }
	
	  /**
	   * Expose `Context`.
	   */
	
	  page.Context = Context;
	
	  /**
	   * Push state.
	   *
	   * @api private
	   */
	
	  Context.prototype.pushState = function() {
	    page.len++;
	    history.pushState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
	  };
	
	  /**
	   * Save the context state.
	   *
	   * @api public
	   */
	
	  Context.prototype.save = function() {
	    history.replaceState(this.state, this.title, hashbang && this.path !== '/' ? '#!' + this.path : this.canonicalPath);
	  };
	
	  /**
	   * Initialize `Route` with the given HTTP `path`,
	   * and an array of `callbacks` and `options`.
	   *
	   * Options:
	   *
	   *   - `sensitive`    enable case-sensitive routes
	   *   - `strict`       enable strict matching for trailing slashes
	   *
	   * @param {String} path
	   * @param {Object} options.
	   * @api private
	   */
	
	  function Route(path, options) {
	    options = options || {};
	    this.path = (path === '*') ? '(.*)' : path;
	    this.method = 'GET';
	    this.regexp = pathtoRegexp(this.path,
	      this.keys = [],
	      options.sensitive,
	      options.strict);
	  }
	
	  /**
	   * Expose `Route`.
	   */
	
	  page.Route = Route;
	
	  /**
	   * Return route middleware with
	   * the given callback `fn()`.
	   *
	   * @param {Function} fn
	   * @return {Function}
	   * @api public
	   */
	
	  Route.prototype.middleware = function(fn) {
	    var self = this;
	    return function(ctx, next) {
	      if (self.match(ctx.path, ctx.params)) return fn(ctx, next);
	      next();
	    };
	  };
	
	  /**
	   * Check if this route matches `path`, if so
	   * populate `params`.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @return {Boolean}
	   * @api private
	   */
	
	  Route.prototype.match = function(path, params) {
	    var keys = this.keys,
	      qsIndex = path.indexOf('?'),
	      pathname = ~qsIndex ? path.slice(0, qsIndex) : path,
	      m = this.regexp.exec(decodeURIComponent(pathname));
	
	    if (!m) return false;
	
	    for (var i = 1, len = m.length; i < len; ++i) {
	      var key = keys[i - 1];
	      var val = decodeURLEncodedURIComponent(m[i]);
	      if (val !== undefined || !(hasOwnProperty.call(params, key.name))) {
	        params[key.name] = val;
	      }
	    }
	
	    return true;
	  };
	
	
	  /**
	   * Handle "populate" events.
	   */
	
	  var onpopstate = (function () {
	    var loaded = false;
	    if ('undefined' === typeof window) {
	      return;
	    }
	    if (document.readyState === 'complete') {
	      loaded = true;
	    } else {
	      window.addEventListener('load', function() {
	        setTimeout(function() {
	          loaded = true;
	        }, 0);
	      });
	    }
	    return function onpopstate(e) {
	      if (!loaded) return;
	      if (e.state) {
	        var path = e.state.path;
	        page.replace(path, e.state);
	      } else {
	        page.show(location.pathname + location.hash, undefined, undefined, false);
	      }
	    };
	  })();
	  /**
	   * Handle "click" events.
	   */
	
	  function onclick(e) {
	
	    if (1 !== which(e)) return;
	
	    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	    if (e.defaultPrevented) return;
	
	
	
	    // ensure link
	    var el = e.target;
	    while (el && 'A' !== el.nodeName) el = el.parentNode;
	    if (!el || 'A' !== el.nodeName) return;
	
	
	
	    // Ignore if tag has
	    // 1. "download" attribute
	    // 2. rel="external" attribute
	    if (el.hasAttribute('download') || el.getAttribute('rel') === 'external') return;
	
	    // ensure non-hash for the same path
	    var link = el.getAttribute('href');
	    if (!hashbang && el.pathname === location.pathname && (el.hash || '#' === link)) return;
	
	
	
	    // Check for mailto: in the href
	    if (link && link.indexOf('mailto:') > -1) return;
	
	    // check target
	    if (el.target) return;
	
	    // x-origin
	    if (!sameOrigin(el.href)) return;
	
	
	
	    // rebuild path
	    var path = el.pathname + el.search + (el.hash || '');
	
	    // strip leading "/[drive letter]:" on NW.js on Windows
	    if (typeof process !== 'undefined' && path.match(/^\/[a-zA-Z]:\//)) {
	      path = path.replace(/^\/[a-zA-Z]:\//, '/');
	    }
	
	    // same page
	    var orig = path;
	
	    if (path.indexOf(base) === 0) {
	      path = path.substr(base.length);
	    }
	
	    if (hashbang) path = path.replace('#!', '');
	
	    if (base && orig === path) return;
	
	    e.preventDefault();
	    page.show(orig);
	  }
	
	  /**
	   * Event button.
	   */
	
	  function which(e) {
	    e = e || window.event;
	    return null === e.which ? e.button : e.which;
	  }
	
	  /**
	   * Check if `href` is the same origin.
	   */
	
	  function sameOrigin(href) {
	    var origin = location.protocol + '//' + location.hostname;
	    if (location.port) origin += ':' + location.port;
	    return (href && (0 === href.indexOf(origin)));
	  }
	
	  page.sameOrigin = sameOrigin;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(79)))

/***/ },
/* 79 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            currentQueue[queueIndex].run();
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	// TODO(shtylman)
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(81);
	
	/**
	 * Expose `pathToRegexp`.
	 */
	module.exports = pathToRegexp;
	
	/**
	 * The main path matching regexp utility.
	 *
	 * @type {RegExp}
	 */
	var PATH_REGEXP = new RegExp([
	  // Match escaped characters that would otherwise appear in future matches.
	  // This allows the user to escape special characters that won't transform.
	  '(\\\\.)',
	  // Match Express-style parameters and un-named parameters with a prefix
	  // and optional suffixes. Matches appear as:
	  //
	  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?"]
	  // "/route(\\d+)" => [undefined, undefined, undefined, "\d+", undefined]
	  '([\\/.])?(?:\\:(\\w+)(?:\\(((?:\\\\.|[^)])*)\\))?|\\(((?:\\\\.|[^)])*)\\))([+*?])?',
	  // Match regexp special characters that are always escaped.
	  '([.+*?=^!:${}()[\\]|\\/])'
	].join('|'), 'g');
	
	/**
	 * Escape the capturing group by escaping special characters and meaning.
	 *
	 * @param  {String} group
	 * @return {String}
	 */
	function escapeGroup (group) {
	  return group.replace(/([=!:$\/()])/g, '\\$1');
	}
	
	/**
	 * Attach the keys as a property of the regexp.
	 *
	 * @param  {RegExp} re
	 * @param  {Array}  keys
	 * @return {RegExp}
	 */
	function attachKeys (re, keys) {
	  re.keys = keys;
	  return re;
	}
	
	/**
	 * Get the flags for a regexp from the options.
	 *
	 * @param  {Object} options
	 * @return {String}
	 */
	function flags (options) {
	  return options.sensitive ? '' : 'i';
	}
	
	/**
	 * Pull out keys from a regexp.
	 *
	 * @param  {RegExp} path
	 * @param  {Array}  keys
	 * @return {RegExp}
	 */
	function regexpToRegexp (path, keys) {
	  // Use a negative lookahead to match only capturing groups.
	  var groups = path.source.match(/\((?!\?)/g);
	
	  if (groups) {
	    for (var i = 0; i < groups.length; i++) {
	      keys.push({
	        name:      i,
	        delimiter: null,
	        optional:  false,
	        repeat:    false
	      });
	    }
	  }
	
	  return attachKeys(path, keys);
	}
	
	/**
	 * Transform an array into a regexp.
	 *
	 * @param  {Array}  path
	 * @param  {Array}  keys
	 * @param  {Object} options
	 * @return {RegExp}
	 */
	function arrayToRegexp (path, keys, options) {
	  var parts = [];
	
	  for (var i = 0; i < path.length; i++) {
	    parts.push(pathToRegexp(path[i], keys, options).source);
	  }
	
	  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));
	  return attachKeys(regexp, keys);
	}
	
	/**
	 * Replace the specific tags with regexp strings.
	 *
	 * @param  {String} path
	 * @param  {Array}  keys
	 * @return {String}
	 */
	function replacePath (path, keys) {
	  var index = 0;
	
	  function replace (_, escaped, prefix, key, capture, group, suffix, escape) {
	    if (escaped) {
	      return escaped;
	    }
	
	    if (escape) {
	      return '\\' + escape;
	    }
	
	    var repeat   = suffix === '+' || suffix === '*';
	    var optional = suffix === '?' || suffix === '*';
	
	    keys.push({
	      name:      key || index++,
	      delimiter: prefix || '/',
	      optional:  optional,
	      repeat:    repeat
	    });
	
	    prefix = prefix ? ('\\' + prefix) : '';
	    capture = escapeGroup(capture || group || '[^' + (prefix || '\\/') + ']+?');
	
	    if (repeat) {
	      capture = capture + '(?:' + prefix + capture + ')*';
	    }
	
	    if (optional) {
	      return '(?:' + prefix + '(' + capture + '))?';
	    }
	
	    // Basic parameter support.
	    return prefix + '(' + capture + ')';
	  }
	
	  return path.replace(PATH_REGEXP, replace);
	}
	
	/**
	 * Normalize the given path string, returning a regular expression.
	 *
	 * An empty array can be passed in for the keys, which will hold the
	 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
	 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
	 *
	 * @param  {(String|RegExp|Array)} path
	 * @param  {Array}                 [keys]
	 * @param  {Object}                [options]
	 * @return {RegExp}
	 */
	function pathToRegexp (path, keys, options) {
	  keys = keys || [];
	
	  if (!isArray(keys)) {
	    options = keys;
	    keys = [];
	  } else if (!options) {
	    options = {};
	  }
	
	  if (path instanceof RegExp) {
	    return regexpToRegexp(path, keys, options);
	  }
	
	  if (isArray(path)) {
	    return arrayToRegexp(path, keys, options);
	  }
	
	  var strict = options.strict;
	  var end = options.end !== false;
	  var route = replacePath(path, keys);
	  var endsWithSlash = path.charAt(path.length - 1) === '/';
	
	  // In non-strict mode we allow a slash at the end of match. If the path to
	  // match already ends with a slash, we remove it for consistency. The slash
	  // is valid at the end of a path match, not in the middle. This is important
	  // in non-ending mode, where "/test/" shouldn't match "/test//route".
	  if (!strict) {
	    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?';
	  }
	
	  if (end) {
	    route += '$';
	  } else {
	    // In non-ending mode, we need the capturing groups to match as much as
	    // possible by using a positive lookahead to the end or next path segment.
	    route += strict && endsWithSlash ? '' : '(?=\\/|$)';
	  }
	
	  return attachKeys(new RegExp('^' + route, flags(options)), keys);
	}


/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/*
	    Overrides for (some of) v-component methods
	 */
	
	var utils = __webpack_require__(77);
	
	module.exports = function(Vue) {
	    var component = Vue.directive('_component'),
	        _ = Vue.util,
	        parsers = Vue.parsers;
	
	    return {
	        bind: function() {
	            // Force dynamic directive
	            this._isDynamicLiteral = true;
	            component.bind.call(this);
	            this.init();
	        },
	
	        resolveCtor: function(id, cb) {
	            if(!id.length) return;
	            component.resolveCtor.call(this, id, cb);
	        },
	
	        /*
	          This one is copied/pasted from the source
	          except the routeParams part (no way to override it cleanly :/)
	         */
	        build: function(data) {
	            var routeData = this.routes[this.location.regexp].data;
	
	            // The 'data' function should use the passed one, if any,
	            // and get merged with any data passed to the plugin for this route,
	            // as well as the router params (GET params)
	            var compData = _.extend({}, data);
	            compData = _.extend(compData, (utils.isFunction(routeData) ? routeData() : routeData) || {});
	            compData = _.extend(compData, {
	                $routeParams: this.location.params
	            });
	
	            if(this.keepAlive) {
	                var cached = this.cache[this.ctorId];
	                if(cached) {
	                    _.extend(cached.$data, compData);
	                    return cached;
	                }
	            }
	
	            var vm = this.vm;
	            var el = parsers.template.clone(this.el);
	
	            if(this.Ctor) {
	                var child = vm.$addChild({
	                    el: el,
	                    data: function() {
	                        return compData;
	                    },
	                    template: this.template,
	                    // if no inline-template, then the compiled
	                    // linker can be cached for better performance.
	                    _linkerCachable: !this.template,
	                    _asComponent: true,
	                    _host: this._host,
	                    _isRouterView: this._isRouterView
	                }, this.Ctor);
	
	                if(this.keepAlive) {
	                    this.cache[this.ctorId] = child;
	                }
	
	                return child;
	            }
	        }
	    };
	};


/***/ },
/* 83 */
/***/ function(module, exports) {

	'use strict';
	
	/*
	    Routing API
	    Methods for handling the route change
	    and trigger the directive update
	*/
	
	module.exports = function(Vue, page, utils) {
	    var _ = Vue.util;
	
	    /*
	        Allow to manually navigate to a path.
	        Useful if you passed the `click: false` option.
	     */
	    Vue.navigate = function(path, trigger) {
	        page.show(path, null, trigger !== false);
	    };
	
	    return {
	        init: function() {
	          /*
	              Link the routes declaration
	           */
	          this.routes = this.vm.$root.$options.routes;
	          if(!this.routes) {
	              _.warn('v-route needs the $root to be passed a "routes" option hash.');
	          }
	
	          /*
	              Options for v-route & page (base, hashbang, debug...)
	           */
	          this.options = this.routes.options || {};
	
	          /*
	            Use page.base to set the URL base
	            TODO tests
	           */
	          if(this.options.base) {
	            page.base(this.options.base);
	          }
	
	          /*
	            If options.broadcast, uses $broadcast for routing events, else uses $emit
	           */
	          this.notifier = !!this.options.broadcast ? '$broadcast' : '$emit';
	
	          /*
	            Register all the routes
	           */
	          for(var route in this.routes) {
	              // Ignore options
	              if(route[0] === '/') {
	                  if(utils.hasOwnProp.call(this.routes, route)) {
	                      this.addRoute(route, this.routes[route]);
	                  }
	              }
	          }
	
	          /*
	            Bind default route
	           */
	          page('*', _.bind(this.onDefaultRoute, this));
	
	          /*
	            Start the routing
	           */
	          this.start();
	        },
	
	        /*
	            Registers the route with the specified path/pattern (express-like regexp)
	            route: infos as {id: "route-id", path: "/route"} or {id: "route-id", path: "/route/:id"}
	        */
	        addRoute: function(path, options) {
	            if(this.options.debug) _.log('[v-route] addRoute', path, options);
	
	            var routeFn = function(context, next) {
	                // Vue.nextTick(function() {
	                    this.onRoute(path, context, next);
	                // }, this);
	            };
	
	            // Add a relevant stack trace
	            routeFn.displayName = 'routing ' + path;
	
	            // Middleware prop
	            /*
	              page(path, onRoute, beforeUpdate, updateRoute, afterUpdate);
	              - onRoute -> updateLocation field
	              - beforeUpdate -> emit event, call callbacks, if no callbacks -> next
	              - updateRoute -> effectively applies the route, next
	              - afterUpdate -> emit event, call callbacks
	            */
	
	            // page(path, _.bind(routeFn, this));
	
	            page(path, _.bind(routeFn, this), _.bind(this.beforeUpdate, this), _.bind(this.updateRoute, this));
	
	            if(options.isDefault) {
	                this.defaultRoute = path;
	            }
	        },
	
	        /*
	            Starts the router.
	        */
	        start: function() {
	            if(this.options.debug) _.log('[v-route] start');
	            page.start(this.options);
	            this.vm.$root[this.notifier]('router:started');
	        },
	
	        /*
	            Internal method.
	            Updates the context and emit the `router:update` event.
	        */
	        onRoute: function(path, context, next) {
	            if(this.options.debug) _.log('[v-route] onRoute', path, context);
	
	            /*
	                Get new route, componentId and update location context
	             */
	            var route = this.routes[path],
	                componentId = route.componentId;
	
	            this.oldLocation = _.extend({}, this.location);
	            this.location = {
	                regexp: path,
	                path: context.path,
	                componentId: componentId,
	                params: context.params
	            };
	
	            next();
	        },
	
	        beforeUpdate: function(context, next) {
	            this.callRouteHook('before', next);
	        },
	
	        updateRoute: function() {
	          /*
	              Update the current component
	           */
	          var componentId = this.routes[this.location.regexp].componentId;
	          this.update(componentId);
	
	          /*
	              after applying the route, emit the event + execute custom callback
	           */
	          this.callRouteHook('after');
	        },
	
	        /*
	            Called when the requested route does not exists
	            Redirects to proper default route
	        */
	        onDefaultRoute: function(context) {
	            if(this.options.debug) _.log('[v-route] onDefaultRoute', context);
	
	            Vue.nextTick(function() {
	                page(this.defaultRoute);
	            }, this);
	        },
	
	        callRouteHook: function(when, next) {
	            if(this.options.debug) _.log('[v-route] callRouteHook', when, next);
	
	            var route = this.routes[this.location.regexp],
	                callback = route[when + 'Update'],
	                $root = this.vm.$root,
	                locations = [this.location, this.oldLocation],
	                middleware;
	
	            if(callback) {
	              if(utils.isFunction(callback)) {
	                  middleware = callback;
	              }
	              else if(utils.isString(callback)) {
	                if($root[callback]) {
	                  middleware = $root[callback];
	                }
	              }
	            }
	
	            _.nextTick(function() {
	              this.callRouteEvents(when, locations);
	            }, this);
	
	            /*
	              If a middleware is declared, we call it and wait for the call to `next`
	             */
	            if(middleware) {
	              middleware.apply($root, utils.concat.call(locations, next));
	            }
	
	            /*
	              If no middleware is declared, we call `next` to continue the routing
	             */
	            else if(next) {
	              next();
	            }
	        },
	
	        callRouteEvents: function(when, locations) {
	            var $root = this.vm.$root;
	
	            $root[this.notifier].apply($root,
	                utils.concat.call([], 'router:' + when + 'Update', locations)
	            );
	        }
	    };
	};


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _slideout = __webpack_require__(85);
	
	var _slideout2 = _interopRequireDefault(_slideout);
	
	exports["default"] = {
	
	    escapeHTML: function escapeHTML(text) {
	        return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
	    },
	
	    getSlideOut: (function () {
	        // setup slideout at initialization
	        var slideout = new _slideout2["default"]({
	            "panel": document.getElementById("main"),
	            "menu": document.getElementById("menu"),
	            "padding": 256,
	            "tolerance": 70
	        });
	        return function () {
	            return slideout;
	        };
	    })()
	
	};
	module.exports = exports["default"];

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Module dependencies
	 */
	var decouple = __webpack_require__(86);
	var Emitter = __webpack_require__(87);
	
	/**
	 * Privates
	 */
	var scrollTimeout;
	var scrolling = false;
	var doc = window.document;
	var html = doc.documentElement;
	var msPointerSupported = window.navigator.msPointerEnabled;
	var touch = {
	  'start': msPointerSupported ? 'MSPointerDown' : 'touchstart',
	  'move': msPointerSupported ? 'MSPointerMove' : 'touchmove',
	  'end': msPointerSupported ? 'MSPointerUp' : 'touchend'
	};
	var prefix = (function prefix() {
	  var regex = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/;
	  var styleDeclaration = doc.getElementsByTagName('script')[0].style;
	  for (var prop in styleDeclaration) {
	    if (regex.test(prop)) {
	      return '-' + prop.match(regex)[0].toLowerCase() + '-';
	    }
	  }
	  // Nothing found so far? Webkit does not enumerate over the CSS properties of the style object.
	  // However (prop in style) returns the correct value, so we'll have to test for
	  // the precence of a specific property
	  if ('WebkitOpacity' in styleDeclaration) { return '-webkit-'; }
	  if ('KhtmlOpacity' in styleDeclaration) { return '-khtml-'; }
	  return '';
	}());
	function extend(destination, from) {
	  for (var prop in from) {
	    if (from[prop]) {
	      destination[prop] = from[prop];
	    }
	  }
	  return destination;
	}
	function inherits(child, uber) {
	  child.prototype = extend(child.prototype || {}, uber.prototype);
	}
	
	/**
	 * Slideout constructor
	 */
	function Slideout(options) {
	  options = options || {};
	
	  // Sets default values
	  this._startOffsetX = 0;
	  this._currentOffsetX = 0;
	  this._opening = false;
	  this._moved = false;
	  this._opened = false;
	  this._preventOpen = false;
	  this._touch = options.touch === undefined ? true : options.touch && true;
	
	  // Sets panel
	  this.panel = options.panel;
	  this.menu = options.menu;
	
	  // Sets  classnames
	  this.panel.className += ' slideout-panel';
	  this.menu.className += ' slideout-menu';
	
	  // Sets options
	  this._fx = options.fx || 'ease';
	  this._duration = parseInt(options.duration, 10) || 300;
	  this._tolerance = parseInt(options.tolerance, 10) || 70;
	  this._padding = this._translateTo = parseInt(options.padding, 10) || 256;
	  this._orientation = options.side === 'right' ? -1 : 1;
	  this._translateTo *= this._orientation;
	
	  // Init touch events
	  if (this._touch) {
	    this._initTouchEvents();
	  }
	}
	
	/**
	 * Inherits from Emitter
	 */
	inherits(Slideout, Emitter);
	
	/**
	 * Opens the slideout menu.
	 */
	Slideout.prototype.open = function() {
	  var self = this;
	  this.emit('beforeopen');
	  if (html.className.search('slideout-open') === -1) { html.className += ' slideout-open'; }
	  this._setTransition();
	  this._translateXTo(this._translateTo);
	  this._opened = true;
	  setTimeout(function() {
	    self.panel.style.transition = self.panel.style['-webkit-transition'] = '';
	    self.emit('open');
	  }, this._duration + 50);
	  return this;
	};
	
	/**
	 * Closes slideout menu.
	 */
	Slideout.prototype.close = function() {
	  var self = this;
	  if (!this.isOpen() && !this._opening) { return this; }
	  this.emit('beforeclose');
	  this._setTransition();
	  this._translateXTo(0);
	  this._opened = false;
	  setTimeout(function() {
	    html.className = html.className.replace(/ slideout-open/, '');
	    self.panel.style.transition = self.panel.style['-webkit-transition'] = self.panel.style[prefix + 'transform'] = self.panel.style.transform = '';
	    self.emit('close');
	  }, this._duration + 50);
	  return this;
	};
	
	/**
	 * Toggles (open/close) slideout menu.
	 */
	Slideout.prototype.toggle = function() {
	  return this.isOpen() ? this.close() : this.open();
	};
	
	/**
	 * Returns true if the slideout is currently open, and false if it is closed.
	 */
	Slideout.prototype.isOpen = function() {
	  return this._opened;
	};
	
	/**
	 * Translates panel and updates currentOffset with a given X point
	 */
	Slideout.prototype._translateXTo = function(translateX) {
	  this._currentOffsetX = translateX;
	  this.panel.style[prefix + 'transform'] = this.panel.style.transform = 'translate3d(' + translateX + 'px, 0, 0)';
	};
	
	/**
	 * Set transition properties
	 */
	Slideout.prototype._setTransition = function() {
	  this.panel.style[prefix + 'transition'] = this.panel.style.transition = prefix + 'transform ' + this._duration + 'ms ' + this._fx;
	};
	
	/**
	 * Initializes touch event
	 */
	Slideout.prototype._initTouchEvents = function() {
	  var self = this;
	
	  /**
	   * Decouple scroll event
	   */
	  decouple(doc, 'scroll', function() {
	    if (!self._moved) {
	      clearTimeout(scrollTimeout);
	      scrolling = true;
	      scrollTimeout = setTimeout(function() {
	        scrolling = false;
	      }, 250);
	    }
	  });
	
	  /**
	   * Prevents touchmove event if slideout is moving
	   */
	  doc.addEventListener(touch.move, function(eve) {
	    if (self._moved) {
	      eve.preventDefault();
	    }
	  });
	
	  /**
	   * Resets values on touchstart
	   */
	  this.panel.addEventListener(touch.start, function(eve) {
	
	    if (typeof eve.touches === 'undefined') { return; }
	
	    self._moved = false;
	    self._opening = false;
	    self._startOffsetX = eve.touches[0].pageX;
	    self._preventOpen = (!self.isOpen() && self.menu.clientWidth !== 0);
	  });
	
	  /**
	   * Resets values on touchcancel
	   */
	  this.panel.addEventListener('touchcancel', function() {
	    self._moved = false;
	    self._opening = false;
	  });
	
	  /**
	   * Toggles slideout on touchend
	   */
	  this.panel.addEventListener(touch.end, function() {
	    if (self._moved) {
	      (self._opening && Math.abs(self._currentOffsetX) > self._tolerance) ? self.open() : self.close();
	    }
	    self._moved = false;
	  });
	
	  /**
	   * Translates panel on touchmove
	   */
	  this.panel.addEventListener(touch.move, function(eve) {
	
	    if (scrolling || self._preventOpen || typeof eve.touches === 'undefined') { return; }
	
	    var dif_x = eve.touches[0].clientX - self._startOffsetX;
	    var translateX = self._currentOffsetX = dif_x;
	
	    if (Math.abs(translateX) > self._padding) { return; }
	
	    if (Math.abs(dif_x) > 20) {
	      self._opening = true;
	
	      var oriented_dif_x = dif_x * self._orientation;
	      if (self._opened && oriented_dif_x > 0 || !self._opened && oriented_dif_x < 0) { return; }
	      if (oriented_dif_x <= 0) {
	        translateX = dif_x + self._padding * self._orientation;
	        self._opening = false;
	      }
	
	      if (!self._moved && html.className.search('slideout-open') === -1) {
	        html.className += ' slideout-open';
	      }
	
	      self.panel.style[prefix + 'transform'] = self.panel.style.transform = 'translate3d(' + translateX + 'px, 0, 0)';
	      self.emit('translate', translateX);
	      self._moved = true;
	    }
	
	  });
	
	};
	
	/**
	 * Expose Slideout
	 */
	module.exports = Slideout;


/***/ },
/* 86 */
/***/ function(module, exports) {

	'use strict';
	
	var requestAnimFrame = (function() {
	  return window.requestAnimationFrame ||
	    window.webkitRequestAnimationFrame ||
	    function (callback) {
	      window.setTimeout(callback, 1000 / 60);
	    };
	}());
	
	function decouple(node, event, fn) {
	  var eve,
	      tracking = false;
	
	  function captureEvent(e) {
	    eve = e;
	    track();
	  }
	
	  function track() {
	    if (!tracking) {
	      requestAnimFrame(update);
	      tracking = true;
	    }
	  }
	
	  function update() {
	    fn.call(node, eve);
	    tracking = false;
	  }
	
	  node.addEventListener(event, captureEvent, false);
	}
	
	/**
	 * Expose decouple
	 */
	module.exports = decouple;


/***/ },
/* 87 */
/***/ function(module, exports) {

	"use strict";
	
	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };
	
	exports.__esModule = true;
	/**
	 * Creates a new instance of Emitter.
	 * @class
	 * @returns {Object} Returns a new instance of Emitter.
	 * @example
	 * // Creates a new instance of Emitter.
	 * var Emitter = require('emitter');
	 *
	 * var emitter = new Emitter();
	 */
	
	var Emitter = (function () {
	  function Emitter() {
	    _classCallCheck(this, Emitter);
	  }
	
	  /**
	   * Adds a listener to the collection for the specified event.
	   * @memberof! Emitter.prototype
	   * @function
	   * @param {String} event - The event name.
	   * @param {Function} listener - A listener function to add.
	   * @returns {Object} Returns an instance of Emitter.
	   * @example
	   * // Add an event listener to "foo" event.
	   * emitter.on('foo', listener);
	   */
	
	  Emitter.prototype.on = function on(event, listener) {
	    // Use the current collection or create it.
	    this._eventCollection = this._eventCollection || {};
	
	    // Use the current collection of an event or create it.
	    this._eventCollection[event] = this._eventCollection[event] || [];
	
	    // Appends the listener into the collection of the given event
	    this._eventCollection[event].push(listener);
	
	    return this;
	  };
	
	  /**
	   * Adds a listener to the collection for the specified event that will be called only once.
	   * @memberof! Emitter.prototype
	   * @function
	   * @param {String} event - The event name.
	   * @param {Function} listener - A listener function to add.
	   * @returns {Object} Returns an instance of Emitter.
	   * @example
	   * // Will add an event handler to "foo" event once.
	   * emitter.once('foo', listener);
	   */
	
	  Emitter.prototype.once = function once(event, listener) {
	    var self = this;
	
	    function fn() {
	      self.off(event, fn);
	      listener.apply(this, arguments);
	    }
	
	    fn.listener = listener;
	
	    this.on(event, fn);
	
	    return this;
	  };
	
	  /**
	   * Removes a listener from the collection for the specified event.
	   * @memberof! Emitter.prototype
	   * @function
	   * @param {String} event - The event name.
	   * @param {Function} listener - A listener function to remove.
	   * @returns {Object} Returns an instance of Emitter.
	   * @example
	   * // Remove a given listener.
	   * emitter.off('foo', listener);
	   */
	
	  Emitter.prototype.off = function off(event, listener) {
	
	    var listeners = undefined;
	
	    // Defines listeners value.
	    if (!this._eventCollection || !(listeners = this._eventCollection[event])) {
	      return this;
	    }
	
	    listeners.forEach(function (fn, i) {
	      if (fn === listener || fn.listener === listener) {
	        // Removes the given listener.
	        listeners.splice(i, 1);
	      }
	    });
	
	    // Removes an empty event collection.
	    if (listeners.length === 0) {
	      delete this._eventCollection[event];
	    }
	
	    return this;
	  };
	
	  /**
	   * Execute each item in the listener collection in order with the specified data.
	   * @memberof! Emitter.prototype
	   * @function
	   * @param {String} event - The name of the event you want to emit.
	   * @param {...Object} data - Data to pass to the listeners.
	   * @returns {Object} Returns an instance of Emitter.
	   * @example
	   * // Emits the "foo" event with 'param1' and 'param2' as arguments.
	   * emitter.emit('foo', 'param1', 'param2');
	   */
	
	  Emitter.prototype.emit = function emit(event) {
	    var _this = this;
	
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }
	
	    var listeners = undefined;
	
	    // Defines listeners value.
	    if (!this._eventCollection || !(listeners = this._eventCollection[event])) {
	      return this;
	    }
	
	    // Clone listeners
	    listeners = listeners.slice(0);
	
	    listeners.forEach(function (fn) {
	      return fn.apply(_this, args);
	    });
	
	    return this;
	  };
	
	  return Emitter;
	})();
	
	/**
	 * Exports Emitter
	 */
	exports["default"] = Emitter;
	module.exports = exports["default"];

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(89)
	module.exports.template = __webpack_require__(90)


/***/ },
/* 89 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  data: function data() {
	    return {};
	  },
	
	  methods: {}
	};
	module.exports = exports["default"];

/***/ },
/* 90 */
/***/ function(module, exports) {

	module.exports = "<div class=\"\">\n  Header\n  </div>";

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(92)
	module.exports.template = __webpack_require__(93)


/***/ },
/* 92 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  data: function data() {
	    return {};
	  },
	
	  methods: {}
	};
	module.exports = exports["default"];

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = "<div class=\"\">\n  Footer\n  </div>";

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(95)
	module.exports.template = __webpack_require__(97)


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _npmZepto = __webpack_require__(96);
	
	var _npmZepto2 = _interopRequireDefault(_npmZepto);
	
	exports["default"] = {
	    data: function data() {
	        return {
	            items: []
	        };
	    },
	
	    methods: {
	        refresh: function refresh() {
	            var _this = this;
	
	            _npmZepto2["default"].ajax({
	                type: "GET",
	                url: "./api/v1/event/list",
	                dataType: "json",
	                cache: false,
	                success: function success(res) {
	                    _this.initialized = true;
	                },
	                error: function error() {
	                    _this.initialized = true;
	                }
	            });
	        }
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/* Zepto 1.1.6 - zepto event ajax form ie - zeptojs.com/license */
	
	var Zepto = (function() {
	  var undefined, key, $, classList, emptyArray = [], slice = emptyArray.slice, filter = emptyArray.filter,
	    document = window.document,
	    elementDisplay = {}, classCache = {},
	    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
	    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
	    singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	    rootNodeRE = /^(?:body|html)$/i,
	    capitalRE = /([A-Z])/g,
	
	    // special attributes that should be get/set via method calls
	    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],
	
	    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
	    table = document.createElement('table'),
	    tableRow = document.createElement('tr'),
	    containers = {
	      'tr': document.createElement('tbody'),
	      'tbody': table, 'thead': table, 'tfoot': table,
	      'td': tableRow, 'th': tableRow,
	      '*': document.createElement('div')
	    },
	    readyRE = /complete|loaded|interactive/,
	    simpleSelectorRE = /^[\w-]*$/,
	    class2type = {},
	    toString = class2type.toString,
	    zepto = {},
	    camelize, uniq,
	    tempParent = document.createElement('div'),
	    propMap = {
	      'tabindex': 'tabIndex',
	      'readonly': 'readOnly',
	      'for': 'htmlFor',
	      'class': 'className',
	      'maxlength': 'maxLength',
	      'cellspacing': 'cellSpacing',
	      'cellpadding': 'cellPadding',
	      'rowspan': 'rowSpan',
	      'colspan': 'colSpan',
	      'usemap': 'useMap',
	      'frameborder': 'frameBorder',
	      'contenteditable': 'contentEditable'
	    },
	    isArray = Array.isArray ||
	      function(object){ return object instanceof Array }
	
	  zepto.matches = function(element, selector) {
	    if (!selector || !element || element.nodeType !== 1) return false
	    var matchesSelector = element.webkitMatchesSelector || element.mozMatchesSelector ||
	                          element.oMatchesSelector || element.matchesSelector
	    if (matchesSelector) return matchesSelector.call(element, selector)
	    // fall back to performing a selector:
	    var match, parent = element.parentNode, temp = !parent
	    if (temp) (parent = tempParent).appendChild(element)
	    match = ~zepto.qsa(parent, selector).indexOf(element)
	    temp && tempParent.removeChild(element)
	    return match
	  }
	
	  function type(obj) {
	    return obj == null ? String(obj) :
	      class2type[toString.call(obj)] || "object"
	  }
	
	  function isFunction(value) { return type(value) == "function" }
	  function isWindow(obj)     { return obj != null && obj == obj.window }
	  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
	  function isObject(obj)     { return type(obj) == "object" }
	  function isPlainObject(obj) {
	    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
	  }
	  function likeArray(obj) { return typeof obj.length == 'number' }
	
	  function compact(array) { return filter.call(array, function(item){ return item != null }) }
	  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
	  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
	  function dasherize(str) {
	    return str.replace(/::/g, '/')
	           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
	           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
	           .replace(/_/g, '-')
	           .toLowerCase()
	  }
	  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }
	
	  function classRE(name) {
	    return name in classCache ?
	      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
	  }
	
	  function maybeAddPx(name, value) {
	    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
	  }
	
	  function defaultDisplay(nodeName) {
	    var element, display
	    if (!elementDisplay[nodeName]) {
	      element = document.createElement(nodeName)
	      document.body.appendChild(element)
	      display = getComputedStyle(element, '').getPropertyValue("display")
	      element.parentNode.removeChild(element)
	      display == "none" && (display = "block")
	      elementDisplay[nodeName] = display
	    }
	    return elementDisplay[nodeName]
	  }
	
	  function children(element) {
	    return 'children' in element ?
	      slice.call(element.children) :
	      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
	  }
	
	  // `$.zepto.fragment` takes a html string and an optional tag name
	  // to generate DOM nodes nodes from the given html string.
	  // The generated DOM nodes are returned as an array.
	  // This function can be overriden in plugins for example to make
	  // it compatible with browsers that don't support the DOM fully.
	  zepto.fragment = function(html, name, properties) {
	    var dom, nodes, container
	
	    // A special case optimization for a single tag
	    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))
	
	    if (!dom) {
	      if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
	      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
	      if (!(name in containers)) name = '*'
	
	      container = containers[name]
	      container.innerHTML = '' + html
	      dom = $.each(slice.call(container.childNodes), function(){
	        container.removeChild(this)
	      })
	    }
	
	    if (isPlainObject(properties)) {
	      nodes = $(dom)
	      $.each(properties, function(key, value) {
	        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
	        else nodes.attr(key, value)
	      })
	    }
	
	    return dom
	  }
	
	  // `$.zepto.Z` swaps out the prototype of the given `dom` array
	  // of nodes with `$.fn` and thus supplying all the Zepto functions
	  // to the array. Note that `__proto__` is not supported on Internet
	  // Explorer. This method can be overriden in plugins.
	  zepto.Z = function(dom, selector) {
	    dom = dom || []
	    dom.__proto__ = $.fn
	    dom.selector = selector || ''
	    return dom
	  }
	
	  // `$.zepto.isZ` should return `true` if the given object is a Zepto
	  // collection. This method can be overriden in plugins.
	  zepto.isZ = function(object) {
	    return object instanceof zepto.Z
	  }
	
	  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
	  // takes a CSS selector and an optional context (and handles various
	  // special cases).
	  // This method can be overriden in plugins.
	  zepto.init = function(selector, context) {
	    var dom
	    // If nothing given, return an empty Zepto collection
	    if (!selector) return zepto.Z()
	    // Optimize for string selectors
	    else if (typeof selector == 'string') {
	      selector = selector.trim()
	      // If it's a html fragment, create nodes from it
	      // Note: In both Chrome 21 and Firefox 15, DOM error 12
	      // is thrown if the fragment doesn't begin with <
	      if (selector[0] == '<' && fragmentRE.test(selector))
	        dom = zepto.fragment(selector, RegExp.$1, context), selector = null
	      // If there's a context, create a collection on that context first, and select
	      // nodes from there
	      else if (context !== undefined) return $(context).find(selector)
	      // If it's a CSS selector, use it to select nodes.
	      else dom = zepto.qsa(document, selector)
	    }
	    // If a function is given, call it when the DOM is ready
	    else if (isFunction(selector)) return $(document).ready(selector)
	    // If a Zepto collection is given, just return it
	    else if (zepto.isZ(selector)) return selector
	    else {
	      // normalize array if an array of nodes is given
	      if (isArray(selector)) dom = compact(selector)
	      // Wrap DOM nodes.
	      else if (isObject(selector))
	        dom = [selector], selector = null
	      // If it's a html fragment, create nodes from it
	      else if (fragmentRE.test(selector))
	        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
	      // If there's a context, create a collection on that context first, and select
	      // nodes from there
	      else if (context !== undefined) return $(context).find(selector)
	      // And last but no least, if it's a CSS selector, use it to select nodes.
	      else dom = zepto.qsa(document, selector)
	    }
	    // create a new Zepto collection from the nodes found
	    return zepto.Z(dom, selector)
	  }
	
	  // `$` will be the base `Zepto` object. When calling this
	  // function just call `$.zepto.init, which makes the implementation
	  // details of selecting nodes and creating Zepto collections
	  // patchable in plugins.
	  $ = function(selector, context){
	    return zepto.init(selector, context)
	  }
	
	  function extend(target, source, deep) {
	    for (key in source)
	      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
	          target[key] = {}
	        if (isArray(source[key]) && !isArray(target[key]))
	          target[key] = []
	        extend(target[key], source[key], deep)
	      }
	      else if (source[key] !== undefined) target[key] = source[key]
	  }
	
	  // Copy all but undefined properties from one or more
	  // objects to the `target` object.
	  $.extend = function(target){
	    var deep, args = slice.call(arguments, 1)
	    if (typeof target == 'boolean') {
	      deep = target
	      target = args.shift()
	    }
	    args.forEach(function(arg){ extend(target, arg, deep) })
	    return target
	  }
	
	  // `$.zepto.qsa` is Zepto's CSS selector implementation which
	  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
	  // This method can be overriden in plugins.
	  zepto.qsa = function(element, selector){
	    var found,
	        maybeID = selector[0] == '#',
	        maybeClass = !maybeID && selector[0] == '.',
	        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
	        isSimple = simpleSelectorRE.test(nameOnly)
	    return (isDocument(element) && isSimple && maybeID) ?
	      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :
	      (element.nodeType !== 1 && element.nodeType !== 9) ? [] :
	      slice.call(
	        isSimple && !maybeID ?
	          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
	          element.getElementsByTagName(selector) : // Or a tag
	          element.querySelectorAll(selector) // Or it's not simple, and we need to query all
	      )
	  }
	
	  function filtered(nodes, selector) {
	    return selector == null ? $(nodes) : $(nodes).filter(selector)
	  }
	
	  $.contains = document.documentElement.contains ?
	    function(parent, node) {
	      return parent !== node && parent.contains(node)
	    } :
	    function(parent, node) {
	      while (node && (node = node.parentNode))
	        if (node === parent) return true
	      return false
	    }
	
	  function funcArg(context, arg, idx, payload) {
	    return isFunction(arg) ? arg.call(context, idx, payload) : arg
	  }
	
	  function setAttribute(node, name, value) {
	    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
	  }
	
	  // access className property while respecting SVGAnimatedString
	  function className(node, value){
	    var klass = node.className || '',
	        svg   = klass && klass.baseVal !== undefined
	
	    if (value === undefined) return svg ? klass.baseVal : klass
	    svg ? (klass.baseVal = value) : (node.className = value)
	  }
	
	  // "true"  => true
	  // "false" => false
	  // "null"  => null
	  // "42"    => 42
	  // "42.5"  => 42.5
	  // "08"    => "08"
	  // JSON    => parse if valid
	  // String  => self
	  function deserializeValue(value) {
	    try {
	      return value ?
	        value == "true" ||
	        ( value == "false" ? false :
	          value == "null" ? null :
	          +value + "" == value ? +value :
	          /^[\[\{]/.test(value) ? $.parseJSON(value) :
	          value )
	        : value
	    } catch(e) {
	      return value
	    }
	  }
	
	  $.type = type
	  $.isFunction = isFunction
	  $.isWindow = isWindow
	  $.isArray = isArray
	  $.isPlainObject = isPlainObject
	
	  $.isEmptyObject = function(obj) {
	    var name
	    for (name in obj) return false
	    return true
	  }
	
	  $.inArray = function(elem, array, i){
	    return emptyArray.indexOf.call(array, elem, i)
	  }
	
	  $.camelCase = camelize
	  $.trim = function(str) {
	    return str == null ? "" : String.prototype.trim.call(str)
	  }
	
	  // plugin compatibility
	  $.uuid = 0
	  $.support = { }
	  $.expr = { }
	
	  $.map = function(elements, callback){
	    var value, values = [], i, key
	    if (likeArray(elements))
	      for (i = 0; i < elements.length; i++) {
	        value = callback(elements[i], i)
	        if (value != null) values.push(value)
	      }
	    else
	      for (key in elements) {
	        value = callback(elements[key], key)
	        if (value != null) values.push(value)
	      }
	    return flatten(values)
	  }
	
	  $.each = function(elements, callback){
	    var i, key
	    if (likeArray(elements)) {
	      for (i = 0; i < elements.length; i++)
	        if (callback.call(elements[i], i, elements[i]) === false) return elements
	    } else {
	      for (key in elements)
	        if (callback.call(elements[key], key, elements[key]) === false) return elements
	    }
	
	    return elements
	  }
	
	  $.grep = function(elements, callback){
	    return filter.call(elements, callback)
	  }
	
	  if (window.JSON) $.parseJSON = JSON.parse
	
	  // Populate the class2type map
	  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	    class2type[ "[object " + name + "]" ] = name.toLowerCase()
	  })
	
	  // Define methods that will be available on all
	  // Zepto collections
	  $.fn = {
	    // Because a collection acts like an array
	    // copy over these useful array functions.
	    forEach: emptyArray.forEach,
	    reduce: emptyArray.reduce,
	    push: emptyArray.push,
	    sort: emptyArray.sort,
	    indexOf: emptyArray.indexOf,
	    concat: emptyArray.concat,
	
	    // `map` and `slice` in the jQuery API work differently
	    // from their array counterparts
	    map: function(fn){
	      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
	    },
	    slice: function(){
	      return $(slice.apply(this, arguments))
	    },
	
	    ready: function(callback){
	      // need to check if document.body exists for IE as that browser reports
	      // document ready when it hasn't yet created the body element
	      if (readyRE.test(document.readyState) && document.body) callback($)
	      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
	      return this
	    },
	    get: function(idx){
	      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
	    },
	    toArray: function(){ return this.get() },
	    size: function(){
	      return this.length
	    },
	    remove: function(){
	      return this.each(function(){
	        if (this.parentNode != null)
	          this.parentNode.removeChild(this)
	      })
	    },
	    each: function(callback){
	      emptyArray.every.call(this, function(el, idx){
	        return callback.call(el, idx, el) !== false
	      })
	      return this
	    },
	    filter: function(selector){
	      if (isFunction(selector)) return this.not(this.not(selector))
	      return $(filter.call(this, function(element){
	        return zepto.matches(element, selector)
	      }))
	    },
	    add: function(selector,context){
	      return $(uniq(this.concat($(selector,context))))
	    },
	    is: function(selector){
	      return this.length > 0 && zepto.matches(this[0], selector)
	    },
	    not: function(selector){
	      var nodes=[]
	      if (isFunction(selector) && selector.call !== undefined)
	        this.each(function(idx){
	          if (!selector.call(this,idx)) nodes.push(this)
	        })
	      else {
	        var excludes = typeof selector == 'string' ? this.filter(selector) :
	          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
	        this.forEach(function(el){
	          if (excludes.indexOf(el) < 0) nodes.push(el)
	        })
	      }
	      return $(nodes)
	    },
	    has: function(selector){
	      return this.filter(function(){
	        return isObject(selector) ?
	          $.contains(this, selector) :
	          $(this).find(selector).size()
	      })
	    },
	    eq: function(idx){
	      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
	    },
	    first: function(){
	      var el = this[0]
	      return el && !isObject(el) ? el : $(el)
	    },
	    last: function(){
	      var el = this[this.length - 1]
	      return el && !isObject(el) ? el : $(el)
	    },
	    find: function(selector){
	      var result, $this = this
	      if (!selector) result = $()
	      else if (typeof selector == 'object')
	        result = $(selector).filter(function(){
	          var node = this
	          return emptyArray.some.call($this, function(parent){
	            return $.contains(parent, node)
	          })
	        })
	      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
	      else result = this.map(function(){ return zepto.qsa(this, selector) })
	      return result
	    },
	    closest: function(selector, context){
	      var node = this[0], collection = false
	      if (typeof selector == 'object') collection = $(selector)
	      while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
	        node = node !== context && !isDocument(node) && node.parentNode
	      return $(node)
	    },
	    parents: function(selector){
	      var ancestors = [], nodes = this
	      while (nodes.length > 0)
	        nodes = $.map(nodes, function(node){
	          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
	            ancestors.push(node)
	            return node
	          }
	        })
	      return filtered(ancestors, selector)
	    },
	    parent: function(selector){
	      return filtered(uniq(this.pluck('parentNode')), selector)
	    },
	    children: function(selector){
	      return filtered(this.map(function(){ return children(this) }), selector)
	    },
	    contents: function() {
	      return this.map(function() { return slice.call(this.childNodes) })
	    },
	    siblings: function(selector){
	      return filtered(this.map(function(i, el){
	        return filter.call(children(el.parentNode), function(child){ return child!==el })
	      }), selector)
	    },
	    empty: function(){
	      return this.each(function(){ this.innerHTML = '' })
	    },
	    // `pluck` is borrowed from Prototype.js
	    pluck: function(property){
	      return $.map(this, function(el){ return el[property] })
	    },
	    show: function(){
	      return this.each(function(){
	        this.style.display == "none" && (this.style.display = '')
	        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
	          this.style.display = defaultDisplay(this.nodeName)
	      })
	    },
	    replaceWith: function(newContent){
	      return this.before(newContent).remove()
	    },
	    wrap: function(structure){
	      var func = isFunction(structure)
	      if (this[0] && !func)
	        var dom   = $(structure).get(0),
	            clone = dom.parentNode || this.length > 1
	
	      return this.each(function(index){
	        $(this).wrapAll(
	          func ? structure.call(this, index) :
	            clone ? dom.cloneNode(true) : dom
	        )
	      })
	    },
	    wrapAll: function(structure){
	      if (this[0]) {
	        $(this[0]).before(structure = $(structure))
	        var children
	        // drill down to the inmost element
	        while ((children = structure.children()).length) structure = children.first()
	        $(structure).append(this)
	      }
	      return this
	    },
	    wrapInner: function(structure){
	      var func = isFunction(structure)
	      return this.each(function(index){
	        var self = $(this), contents = self.contents(),
	            dom  = func ? structure.call(this, index) : structure
	        contents.length ? contents.wrapAll(dom) : self.append(dom)
	      })
	    },
	    unwrap: function(){
	      this.parent().each(function(){
	        $(this).replaceWith($(this).children())
	      })
	      return this
	    },
	    clone: function(){
	      return this.map(function(){ return this.cloneNode(true) })
	    },
	    hide: function(){
	      return this.css("display", "none")
	    },
	    toggle: function(setting){
	      return this.each(function(){
	        var el = $(this)
	        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
	      })
	    },
	    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
	    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
	    html: function(html){
	      return 0 in arguments ?
	        this.each(function(idx){
	          var originHtml = this.innerHTML
	          $(this).empty().append( funcArg(this, html, idx, originHtml) )
	        }) :
	        (0 in this ? this[0].innerHTML : null)
	    },
	    text: function(text){
	      return 0 in arguments ?
	        this.each(function(idx){
	          var newText = funcArg(this, text, idx, this.textContent)
	          this.textContent = newText == null ? '' : ''+newText
	        }) :
	        (0 in this ? this[0].textContent : null)
	    },
	    attr: function(name, value){
	      var result
	      return (typeof name == 'string' && !(1 in arguments)) ?
	        (!this.length || this[0].nodeType !== 1 ? undefined :
	          (!(result = this[0].getAttribute(name)) && name in this[0]) ? this[0][name] : result
	        ) :
	        this.each(function(idx){
	          if (this.nodeType !== 1) return
	          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
	          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
	        })
	    },
	    removeAttr: function(name){
	      return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){
	        setAttribute(this, attribute)
	      }, this)})
	    },
	    prop: function(name, value){
	      name = propMap[name] || name
	      return (1 in arguments) ?
	        this.each(function(idx){
	          this[name] = funcArg(this, value, idx, this[name])
	        }) :
	        (this[0] && this[0][name])
	    },
	    data: function(name, value){
	      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()
	
	      var data = (1 in arguments) ?
	        this.attr(attrName, value) :
	        this.attr(attrName)
	
	      return data !== null ? deserializeValue(data) : undefined
	    },
	    val: function(value){
	      return 0 in arguments ?
	        this.each(function(idx){
	          this.value = funcArg(this, value, idx, this.value)
	        }) :
	        (this[0] && (this[0].multiple ?
	           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :
	           this[0].value)
	        )
	    },
	    offset: function(coordinates){
	      if (coordinates) return this.each(function(index){
	        var $this = $(this),
	            coords = funcArg(this, coordinates, index, $this.offset()),
	            parentOffset = $this.offsetParent().offset(),
	            props = {
	              top:  coords.top  - parentOffset.top,
	              left: coords.left - parentOffset.left
	            }
	
	        if ($this.css('position') == 'static') props['position'] = 'relative'
	        $this.css(props)
	      })
	      if (!this.length) return null
	      var obj = this[0].getBoundingClientRect()
	      return {
	        left: obj.left + window.pageXOffset,
	        top: obj.top + window.pageYOffset,
	        width: Math.round(obj.width),
	        height: Math.round(obj.height)
	      }
	    },
	    css: function(property, value){
	      if (arguments.length < 2) {
	        var computedStyle, element = this[0]
	        if(!element) return
	        computedStyle = getComputedStyle(element, '')
	        if (typeof property == 'string')
	          return element.style[camelize(property)] || computedStyle.getPropertyValue(property)
	        else if (isArray(property)) {
	          var props = {}
	          $.each(property, function(_, prop){
	            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))
	          })
	          return props
	        }
	      }
	
	      var css = ''
	      if (type(property) == 'string') {
	        if (!value && value !== 0)
	          this.each(function(){ this.style.removeProperty(dasherize(property)) })
	        else
	          css = dasherize(property) + ":" + maybeAddPx(property, value)
	      } else {
	        for (key in property)
	          if (!property[key] && property[key] !== 0)
	            this.each(function(){ this.style.removeProperty(dasherize(key)) })
	          else
	            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
	      }
	
	      return this.each(function(){ this.style.cssText += ';' + css })
	    },
	    index: function(element){
	      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
	    },
	    hasClass: function(name){
	      if (!name) return false
	      return emptyArray.some.call(this, function(el){
	        return this.test(className(el))
	      }, classRE(name))
	    },
	    addClass: function(name){
	      if (!name) return this
	      return this.each(function(idx){
	        if (!('className' in this)) return
	        classList = []
	        var cls = className(this), newName = funcArg(this, name, idx, cls)
	        newName.split(/\s+/g).forEach(function(klass){
	          if (!$(this).hasClass(klass)) classList.push(klass)
	        }, this)
	        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
	      })
	    },
	    removeClass: function(name){
	      return this.each(function(idx){
	        if (!('className' in this)) return
	        if (name === undefined) return className(this, '')
	        classList = className(this)
	        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
	          classList = classList.replace(classRE(klass), " ")
	        })
	        className(this, classList.trim())
	      })
	    },
	    toggleClass: function(name, when){
	      if (!name) return this
	      return this.each(function(idx){
	        var $this = $(this), names = funcArg(this, name, idx, className(this))
	        names.split(/\s+/g).forEach(function(klass){
	          (when === undefined ? !$this.hasClass(klass) : when) ?
	            $this.addClass(klass) : $this.removeClass(klass)
	        })
	      })
	    },
	    scrollTop: function(value){
	      if (!this.length) return
	      var hasScrollTop = 'scrollTop' in this[0]
	      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset
	      return this.each(hasScrollTop ?
	        function(){ this.scrollTop = value } :
	        function(){ this.scrollTo(this.scrollX, value) })
	    },
	    scrollLeft: function(value){
	      if (!this.length) return
	      var hasScrollLeft = 'scrollLeft' in this[0]
	      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset
	      return this.each(hasScrollLeft ?
	        function(){ this.scrollLeft = value } :
	        function(){ this.scrollTo(value, this.scrollY) })
	    },
	    position: function() {
	      if (!this.length) return
	
	      var elem = this[0],
	        // Get *real* offsetParent
	        offsetParent = this.offsetParent(),
	        // Get correct offsets
	        offset       = this.offset(),
	        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()
	
	      // Subtract element margins
	      // note: when an element has margin: auto the offsetLeft and marginLeft
	      // are the same in Safari causing offset.left to incorrectly be 0
	      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
	      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0
	
	      // Add offsetParent borders
	      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
	      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0
	
	      // Subtract the two offsets
	      return {
	        top:  offset.top  - parentOffset.top,
	        left: offset.left - parentOffset.left
	      }
	    },
	    offsetParent: function() {
	      return this.map(function(){
	        var parent = this.offsetParent || document.body
	        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
	          parent = parent.offsetParent
	        return parent
	      })
	    }
	  }
	
	  // for now
	  $.fn.detach = $.fn.remove
	
	  // Generate the `width` and `height` functions
	  ;['width', 'height'].forEach(function(dimension){
	    var dimensionProperty =
	      dimension.replace(/./, function(m){ return m[0].toUpperCase() })
	
	    $.fn[dimension] = function(value){
	      var offset, el = this[0]
	      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :
	        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :
	        (offset = this.offset()) && offset[dimension]
	      else return this.each(function(idx){
	        el = $(this)
	        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
	      })
	    }
	  })
	
	  function traverseNode(node, fun) {
	    fun(node)
	    for (var i = 0, len = node.childNodes.length; i < len; i++)
	      traverseNode(node.childNodes[i], fun)
	  }
	
	  // Generate the `after`, `prepend`, `before`, `append`,
	  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
	  adjacencyOperators.forEach(function(operator, operatorIndex) {
	    var inside = operatorIndex % 2 //=> prepend, append
	
	    $.fn[operator] = function(){
	      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
	      var argType, nodes = $.map(arguments, function(arg) {
	            argType = type(arg)
	            return argType == "object" || argType == "array" || arg == null ?
	              arg : zepto.fragment(arg)
	          }),
	          parent, copyByClone = this.length > 1
	      if (nodes.length < 1) return this
	
	      return this.each(function(_, target){
	        parent = inside ? target : target.parentNode
	
	        // convert all methods to a "before" operation
	        target = operatorIndex == 0 ? target.nextSibling :
	                 operatorIndex == 1 ? target.firstChild :
	                 operatorIndex == 2 ? target :
	                 null
	
	        var parentInDocument = $.contains(document.documentElement, parent)
	
	        nodes.forEach(function(node){
	          if (copyByClone) node = node.cloneNode(true)
	          else if (!parent) return $(node).remove()
	
	          parent.insertBefore(node, target)
	          if (parentInDocument) traverseNode(node, function(el){
	            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
	               (!el.type || el.type === 'text/javascript') && !el.src)
	              window['eval'].call(window, el.innerHTML)
	          })
	        })
	      })
	    }
	
	    // after    => insertAfter
	    // prepend  => prependTo
	    // before   => insertBefore
	    // append   => appendTo
	    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
	      $(html)[operator](this)
	      return this
	    }
	  })
	
	  zepto.Z.prototype = $.fn
	
	  // Export internal API functions in the `$.zepto` namespace
	  zepto.uniq = uniq
	  zepto.deserializeValue = deserializeValue
	  $.zepto = zepto
	
	  return $
	})()
	
	window.Zepto = Zepto
	window.$ === undefined && (window.$ = Zepto)
	
	;(function($){
	  var _zid = 1, undefined,
	      slice = Array.prototype.slice,
	      isFunction = $.isFunction,
	      isString = function(obj){ return typeof obj == 'string' },
	      handlers = {},
	      specialEvents={},
	      focusinSupported = 'onfocusin' in window,
	      focus = { focus: 'focusin', blur: 'focusout' },
	      hover = { mouseenter: 'mouseover', mouseleave: 'mouseout' }
	
	  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents'
	
	  function zid(element) {
	    return element._zid || (element._zid = _zid++)
	  }
	  function findHandlers(element, event, fn, selector) {
	    event = parse(event)
	    if (event.ns) var matcher = matcherFor(event.ns)
	    return (handlers[zid(element)] || []).filter(function(handler) {
	      return handler
	        && (!event.e  || handler.e == event.e)
	        && (!event.ns || matcher.test(handler.ns))
	        && (!fn       || zid(handler.fn) === zid(fn))
	        && (!selector || handler.sel == selector)
	    })
	  }
	  function parse(event) {
	    var parts = ('' + event).split('.')
	    return {e: parts[0], ns: parts.slice(1).sort().join(' ')}
	  }
	  function matcherFor(ns) {
	    return new RegExp('(?:^| )' + ns.replace(' ', ' .* ?') + '(?: |$)')
	  }
	
	  function eventCapture(handler, captureSetting) {
	    return handler.del &&
	      (!focusinSupported && (handler.e in focus)) ||
	      !!captureSetting
	  }
	
	  function realEvent(type) {
	    return hover[type] || (focusinSupported && focus[type]) || type
	  }
	
	  function add(element, events, fn, data, selector, delegator, capture){
	    var id = zid(element), set = (handlers[id] || (handlers[id] = []))
	    events.split(/\s/).forEach(function(event){
	      if (event == 'ready') return $(document).ready(fn)
	      var handler   = parse(event)
	      handler.fn    = fn
	      handler.sel   = selector
	      // emulate mouseenter, mouseleave
	      if (handler.e in hover) fn = function(e){
	        var related = e.relatedTarget
	        if (!related || (related !== this && !$.contains(this, related)))
	          return handler.fn.apply(this, arguments)
	      }
	      handler.del   = delegator
	      var callback  = delegator || fn
	      handler.proxy = function(e){
	        e = compatible(e)
	        if (e.isImmediatePropagationStopped()) return
	        e.data = data
	        var result = callback.apply(element, e._args == undefined ? [e] : [e].concat(e._args))
	        if (result === false) e.preventDefault(), e.stopPropagation()
	        return result
	      }
	      handler.i = set.length
	      set.push(handler)
	      if ('addEventListener' in element)
	        element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
	    })
	  }
	  function remove(element, events, fn, selector, capture){
	    var id = zid(element)
	    ;(events || '').split(/\s/).forEach(function(event){
	      findHandlers(element, event, fn, selector).forEach(function(handler){
	        delete handlers[id][handler.i]
	      if ('removeEventListener' in element)
	        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture))
	      })
	    })
	  }
	
	  $.event = { add: add, remove: remove }
	
	  $.proxy = function(fn, context) {
	    var args = (2 in arguments) && slice.call(arguments, 2)
	    if (isFunction(fn)) {
	      var proxyFn = function(){ return fn.apply(context, args ? args.concat(slice.call(arguments)) : arguments) }
	      proxyFn._zid = zid(fn)
	      return proxyFn
	    } else if (isString(context)) {
	      if (args) {
	        args.unshift(fn[context], fn)
	        return $.proxy.apply(null, args)
	      } else {
	        return $.proxy(fn[context], fn)
	      }
	    } else {
	      throw new TypeError("expected function")
	    }
	  }
	
	  $.fn.bind = function(event, data, callback){
	    return this.on(event, data, callback)
	  }
	  $.fn.unbind = function(event, callback){
	    return this.off(event, callback)
	  }
	  $.fn.one = function(event, selector, data, callback){
	    return this.on(event, selector, data, callback, 1)
	  }
	
	  var returnTrue = function(){return true},
	      returnFalse = function(){return false},
	      ignoreProperties = /^([A-Z]|returnValue$|layer[XY]$)/,
	      eventMethods = {
	        preventDefault: 'isDefaultPrevented',
	        stopImmediatePropagation: 'isImmediatePropagationStopped',
	        stopPropagation: 'isPropagationStopped'
	      }
	
	  function compatible(event, source) {
	    if (source || !event.isDefaultPrevented) {
	      source || (source = event)
	
	      $.each(eventMethods, function(name, predicate) {
	        var sourceMethod = source[name]
	        event[name] = function(){
	          this[predicate] = returnTrue
	          return sourceMethod && sourceMethod.apply(source, arguments)
	        }
	        event[predicate] = returnFalse
	      })
	
	      if (source.defaultPrevented !== undefined ? source.defaultPrevented :
	          'returnValue' in source ? source.returnValue === false :
	          source.getPreventDefault && source.getPreventDefault())
	        event.isDefaultPrevented = returnTrue
	    }
	    return event
	  }
	
	  function createProxy(event) {
	    var key, proxy = { originalEvent: event }
	    for (key in event)
	      if (!ignoreProperties.test(key) && event[key] !== undefined) proxy[key] = event[key]
	
	    return compatible(proxy, event)
	  }
	
	  $.fn.delegate = function(selector, event, callback){
	    return this.on(event, selector, callback)
	  }
	  $.fn.undelegate = function(selector, event, callback){
	    return this.off(event, selector, callback)
	  }
	
	  $.fn.live = function(event, callback){
	    $(document.body).delegate(this.selector, event, callback)
	    return this
	  }
	  $.fn.die = function(event, callback){
	    $(document.body).undelegate(this.selector, event, callback)
	    return this
	  }
	
	  $.fn.on = function(event, selector, data, callback, one){
	    var autoRemove, delegator, $this = this
	    if (event && !isString(event)) {
	      $.each(event, function(type, fn){
	        $this.on(type, selector, data, fn, one)
	      })
	      return $this
	    }
	
	    if (!isString(selector) && !isFunction(callback) && callback !== false)
	      callback = data, data = selector, selector = undefined
	    if (isFunction(data) || data === false)
	      callback = data, data = undefined
	
	    if (callback === false) callback = returnFalse
	
	    return $this.each(function(_, element){
	      if (one) autoRemove = function(e){
	        remove(element, e.type, callback)
	        return callback.apply(this, arguments)
	      }
	
	      if (selector) delegator = function(e){
	        var evt, match = $(e.target).closest(selector, element).get(0)
	        if (match && match !== element) {
	          evt = $.extend(createProxy(e), {currentTarget: match, liveFired: element})
	          return (autoRemove || callback).apply(match, [evt].concat(slice.call(arguments, 1)))
	        }
	      }
	
	      add(element, event, callback, data, selector, delegator || autoRemove)
	    })
	  }
	  $.fn.off = function(event, selector, callback){
	    var $this = this
	    if (event && !isString(event)) {
	      $.each(event, function(type, fn){
	        $this.off(type, selector, fn)
	      })
	      return $this
	    }
	
	    if (!isString(selector) && !isFunction(callback) && callback !== false)
	      callback = selector, selector = undefined
	
	    if (callback === false) callback = returnFalse
	
	    return $this.each(function(){
	      remove(this, event, callback, selector)
	    })
	  }
	
	  $.fn.trigger = function(event, args){
	    event = (isString(event) || $.isPlainObject(event)) ? $.Event(event) : compatible(event)
	    event._args = args
	    return this.each(function(){
	      // handle focus(), blur() by calling them directly
	      if (event.type in focus && typeof this[event.type] == "function") this[event.type]()
	      // items in the collection might not be DOM elements
	      else if ('dispatchEvent' in this) this.dispatchEvent(event)
	      else $(this).triggerHandler(event, args)
	    })
	  }
	
	  // triggers event handlers on current element just as if an event occurred,
	  // doesn't trigger an actual event, doesn't bubble
	  $.fn.triggerHandler = function(event, args){
	    var e, result
	    this.each(function(i, element){
	      e = createProxy(isString(event) ? $.Event(event) : event)
	      e._args = args
	      e.target = element
	      $.each(findHandlers(element, event.type || event), function(i, handler){
	        result = handler.proxy(e)
	        if (e.isImmediatePropagationStopped()) return false
	      })
	    })
	    return result
	  }
	
	  // shortcut methods for `.bind(event, fn)` for each event type
	  ;('focusin focusout focus blur load resize scroll unload click dblclick '+
	  'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+
	  'change select keydown keypress keyup error').split(' ').forEach(function(event) {
	    $.fn[event] = function(callback) {
	      return (0 in arguments) ?
	        this.bind(event, callback) :
	        this.trigger(event)
	    }
	  })
	
	  $.Event = function(type, props) {
	    if (!isString(type)) props = type, type = props.type
	    var event = document.createEvent(specialEvents[type] || 'Events'), bubbles = true
	    if (props) for (var name in props) (name == 'bubbles') ? (bubbles = !!props[name]) : (event[name] = props[name])
	    event.initEvent(type, bubbles, true)
	    return compatible(event)
	  }
	
	})(Zepto)
	
	;(function($){
	  var jsonpID = 0,
	      document = window.document,
	      key,
	      name,
	      rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	      scriptTypeRE = /^(?:text|application)\/javascript/i,
	      xmlTypeRE = /^(?:text|application)\/xml/i,
	      jsonType = 'application/json',
	      htmlType = 'text/html',
	      blankRE = /^\s*$/,
	      originAnchor = document.createElement('a')
	
	  originAnchor.href = window.location.href
	
	  // trigger a custom event and return false if it was cancelled
	  function triggerAndReturn(context, eventName, data) {
	    var event = $.Event(eventName)
	    $(context).trigger(event, data)
	    return !event.isDefaultPrevented()
	  }
	
	  // trigger an Ajax "global" event
	  function triggerGlobal(settings, context, eventName, data) {
	    if (settings.global) return triggerAndReturn(context || document, eventName, data)
	  }
	
	  // Number of active Ajax requests
	  $.active = 0
	
	  function ajaxStart(settings) {
	    if (settings.global && $.active++ === 0) triggerGlobal(settings, null, 'ajaxStart')
	  }
	  function ajaxStop(settings) {
	    if (settings.global && !(--$.active)) triggerGlobal(settings, null, 'ajaxStop')
	  }
	
	  // triggers an extra global event "ajaxBeforeSend" that's like "ajaxSend" but cancelable
	  function ajaxBeforeSend(xhr, settings) {
	    var context = settings.context
	    if (settings.beforeSend.call(context, xhr, settings) === false ||
	        triggerGlobal(settings, context, 'ajaxBeforeSend', [xhr, settings]) === false)
	      return false
	
	    triggerGlobal(settings, context, 'ajaxSend', [xhr, settings])
	  }
	  function ajaxSuccess(data, xhr, settings, deferred) {
	    var context = settings.context, status = 'success'
	    settings.success.call(context, data, status, xhr)
	    if (deferred) deferred.resolveWith(context, [data, status, xhr])
	    triggerGlobal(settings, context, 'ajaxSuccess', [xhr, settings, data])
	    ajaxComplete(status, xhr, settings)
	  }
	  // type: "timeout", "error", "abort", "parsererror"
	  function ajaxError(error, type, xhr, settings, deferred) {
	    var context = settings.context
	    settings.error.call(context, xhr, type, error)
	    if (deferred) deferred.rejectWith(context, [xhr, type, error])
	    triggerGlobal(settings, context, 'ajaxError', [xhr, settings, error || type])
	    ajaxComplete(type, xhr, settings)
	  }
	  // status: "success", "notmodified", "error", "timeout", "abort", "parsererror"
	  function ajaxComplete(status, xhr, settings) {
	    var context = settings.context
	    settings.complete.call(context, xhr, status)
	    triggerGlobal(settings, context, 'ajaxComplete', [xhr, settings])
	    ajaxStop(settings)
	  }
	
	  // Empty function, used as default callback
	  function empty() {}
	
	  $.ajaxJSONP = function(options, deferred){
	    if (!('type' in options)) return $.ajax(options)
	
	    var _callbackName = options.jsonpCallback,
	      callbackName = ($.isFunction(_callbackName) ?
	        _callbackName() : _callbackName) || ('jsonp' + (++jsonpID)),
	      script = document.createElement('script'),
	      originalCallback = window[callbackName],
	      responseData,
	      abort = function(errorType) {
	        $(script).triggerHandler('error', errorType || 'abort')
	      },
	      xhr = { abort: abort }, abortTimeout
	
	    if (deferred) deferred.promise(xhr)
	
	    $(script).on('load error', function(e, errorType){
	      clearTimeout(abortTimeout)
	      $(script).off().remove()
	
	      if (e.type == 'error' || !responseData) {
	        ajaxError(null, errorType || 'error', xhr, options, deferred)
	      } else {
	        ajaxSuccess(responseData[0], xhr, options, deferred)
	      }
	
	      window[callbackName] = originalCallback
	      if (responseData && $.isFunction(originalCallback))
	        originalCallback(responseData[0])
	
	      originalCallback = responseData = undefined
	    })
	
	    if (ajaxBeforeSend(xhr, options) === false) {
	      abort('abort')
	      return xhr
	    }
	
	    window[callbackName] = function(){
	      responseData = arguments
	    }
	
	    script.src = options.url.replace(/\?(.+)=\?/, '?$1=' + callbackName)
	    document.head.appendChild(script)
	
	    if (options.timeout > 0) abortTimeout = setTimeout(function(){
	      abort('timeout')
	    }, options.timeout)
	
	    return xhr
	  }
	
	  $.ajaxSettings = {
	    // Default type of request
	    type: 'GET',
	    // Callback that is executed before request
	    beforeSend: empty,
	    // Callback that is executed if the request succeeds
	    success: empty,
	    // Callback that is executed the the server drops error
	    error: empty,
	    // Callback that is executed on request complete (both: error and success)
	    complete: empty,
	    // The context for the callbacks
	    context: null,
	    // Whether to trigger "global" Ajax events
	    global: true,
	    // Transport
	    xhr: function () {
	      return new window.XMLHttpRequest()
	    },
	    // MIME types mapping
	    // IIS returns Javascript as "application/x-javascript"
	    accepts: {
	      script: 'text/javascript, application/javascript, application/x-javascript',
	      json:   jsonType,
	      xml:    'application/xml, text/xml',
	      html:   htmlType,
	      text:   'text/plain'
	    },
	    // Whether the request is to another domain
	    crossDomain: false,
	    // Default timeout
	    timeout: 0,
	    // Whether data should be serialized to string
	    processData: true,
	    // Whether the browser should be allowed to cache GET responses
	    cache: true
	  }
	
	  function mimeToDataType(mime) {
	    if (mime) mime = mime.split(';', 2)[0]
	    return mime && ( mime == htmlType ? 'html' :
	      mime == jsonType ? 'json' :
	      scriptTypeRE.test(mime) ? 'script' :
	      xmlTypeRE.test(mime) && 'xml' ) || 'text'
	  }
	
	  function appendQuery(url, query) {
	    if (query == '') return url
	    return (url + '&' + query).replace(/[&?]{1,2}/, '?')
	  }
	
	  // serialize payload and append it to the URL for GET requests
	  function serializeData(options) {
	    if (options.processData && options.data && $.type(options.data) != "string")
	      options.data = $.param(options.data, options.traditional)
	    if (options.data && (!options.type || options.type.toUpperCase() == 'GET'))
	      options.url = appendQuery(options.url, options.data), options.data = undefined
	  }
	
	  $.ajax = function(options){
	    var settings = $.extend({}, options || {}),
	        deferred = $.Deferred && $.Deferred(),
	        urlAnchor
	    for (key in $.ajaxSettings) if (settings[key] === undefined) settings[key] = $.ajaxSettings[key]
	
	    ajaxStart(settings)
	
	    if (!settings.crossDomain) {
	      urlAnchor = document.createElement('a')
	      urlAnchor.href = settings.url
	      urlAnchor.href = urlAnchor.href
	      settings.crossDomain = (originAnchor.protocol + '//' + originAnchor.host) !== (urlAnchor.protocol + '//' + urlAnchor.host)
	    }
	
	    if (!settings.url) settings.url = window.location.toString()
	    serializeData(settings)
	
	    var dataType = settings.dataType, hasPlaceholder = /\?.+=\?/.test(settings.url)
	    if (hasPlaceholder) dataType = 'jsonp'
	
	    if (settings.cache === false || (
	         (!options || options.cache !== true) &&
	         ('script' == dataType || 'jsonp' == dataType)
	        ))
	      settings.url = appendQuery(settings.url, '_=' + Date.now())
	
	    if ('jsonp' == dataType) {
	      if (!hasPlaceholder)
	        settings.url = appendQuery(settings.url,
	          settings.jsonp ? (settings.jsonp + '=?') : settings.jsonp === false ? '' : 'callback=?')
	      return $.ajaxJSONP(settings, deferred)
	    }
	
	    var mime = settings.accepts[dataType],
	        headers = { },
	        setHeader = function(name, value) { headers[name.toLowerCase()] = [name, value] },
	        protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
	        xhr = settings.xhr(),
	        nativeSetHeader = xhr.setRequestHeader,
	        abortTimeout
	
	    if (deferred) deferred.promise(xhr)
	
	    if (!settings.crossDomain) setHeader('X-Requested-With', 'XMLHttpRequest')
	    setHeader('Accept', mime || '*/*')
	    if (mime = settings.mimeType || mime) {
	      if (mime.indexOf(',') > -1) mime = mime.split(',', 2)[0]
	      xhr.overrideMimeType && xhr.overrideMimeType(mime)
	    }
	    if (settings.contentType || (settings.contentType !== false && settings.data && settings.type.toUpperCase() != 'GET'))
	      setHeader('Content-Type', settings.contentType || 'application/x-www-form-urlencoded')
	
	    if (settings.headers) for (name in settings.headers) setHeader(name, settings.headers[name])
	    xhr.setRequestHeader = setHeader
	
	    xhr.onreadystatechange = function(){
	      if (xhr.readyState == 4) {
	        xhr.onreadystatechange = empty
	        clearTimeout(abortTimeout)
	        var result, error = false
	        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
	          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader('content-type'))
	          result = xhr.responseText
	
	          try {
	            // http://perfectionkills.com/global-eval-what-are-the-options/
	            if (dataType == 'script')    (1,eval)(result)
	            else if (dataType == 'xml')  result = xhr.responseXML
	            else if (dataType == 'json') result = blankRE.test(result) ? null : $.parseJSON(result)
	          } catch (e) { error = e }
	
	          if (error) ajaxError(error, 'parsererror', xhr, settings, deferred)
	          else ajaxSuccess(result, xhr, settings, deferred)
	        } else {
	          ajaxError(xhr.statusText || null, xhr.status ? 'error' : 'abort', xhr, settings, deferred)
	        }
	      }
	    }
	
	    if (ajaxBeforeSend(xhr, settings) === false) {
	      xhr.abort()
	      ajaxError(null, 'abort', xhr, settings, deferred)
	      return xhr
	    }
	
	    if (settings.xhrFields) for (name in settings.xhrFields) xhr[name] = settings.xhrFields[name]
	
	    var async = 'async' in settings ? settings.async : true
	    xhr.open(settings.type, settings.url, async, settings.username, settings.password)
	
	    for (name in headers) nativeSetHeader.apply(xhr, headers[name])
	
	    if (settings.timeout > 0) abortTimeout = setTimeout(function(){
	        xhr.onreadystatechange = empty
	        xhr.abort()
	        ajaxError(null, 'timeout', xhr, settings, deferred)
	      }, settings.timeout)
	
	    // avoid sending empty string (#319)
	    xhr.send(settings.data ? settings.data : null)
	    return xhr
	  }
	
	  // handle optional data/success arguments
	  function parseArguments(url, data, success, dataType) {
	    if ($.isFunction(data)) dataType = success, success = data, data = undefined
	    if (!$.isFunction(success)) dataType = success, success = undefined
	    return {
	      url: url
	    , data: data
	    , success: success
	    , dataType: dataType
	    }
	  }
	
	  $.get = function(/* url, data, success, dataType */){
	    return $.ajax(parseArguments.apply(null, arguments))
	  }
	
	  $.post = function(/* url, data, success, dataType */){
	    var options = parseArguments.apply(null, arguments)
	    options.type = 'POST'
	    return $.ajax(options)
	  }
	
	  $.getJSON = function(/* url, data, success */){
	    var options = parseArguments.apply(null, arguments)
	    options.dataType = 'json'
	    return $.ajax(options)
	  }
	
	  $.fn.load = function(url, data, success){
	    if (!this.length) return this
	    var self = this, parts = url.split(/\s/), selector,
	        options = parseArguments(url, data, success),
	        callback = options.success
	    if (parts.length > 1) options.url = parts[0], selector = parts[1]
	    options.success = function(response){
	      self.html(selector ?
	        $('<div>').html(response.replace(rscript, "")).find(selector)
	        : response)
	      callback && callback.apply(self, arguments)
	    }
	    $.ajax(options)
	    return this
	  }
	
	  var escape = encodeURIComponent
	
	  function serialize(params, obj, traditional, scope){
	    var type, array = $.isArray(obj), hash = $.isPlainObject(obj)
	    $.each(obj, function(key, value) {
	      type = $.type(value)
	      if (scope) key = traditional ? scope :
	        scope + '[' + (hash || type == 'object' || type == 'array' ? key : '') + ']'
	      // handle data in serializeArray() format
	      if (!scope && array) params.add(value.name, value.value)
	      // recurse into nested objects
	      else if (type == "array" || (!traditional && type == "object"))
	        serialize(params, value, traditional, key)
	      else params.add(key, value)
	    })
	  }
	
	  $.param = function(obj, traditional){
	    var params = []
	    params.add = function(key, value) {
	      if ($.isFunction(value)) value = value()
	      if (value == null) value = ""
	      this.push(escape(key) + '=' + escape(value))
	    }
	    serialize(params, obj, traditional)
	    return params.join('&').replace(/%20/g, '+')
	  }
	})(Zepto)
	
	;(function($){
	  $.fn.serializeArray = function() {
	    var name, type, result = [],
	      add = function(value) {
	        if (value.forEach) return value.forEach(add)
	        result.push({ name: name, value: value })
	      }
	    if (this[0]) $.each(this[0].elements, function(_, field){
	      type = field.type, name = field.name
	      if (name && field.nodeName.toLowerCase() != 'fieldset' &&
	        !field.disabled && type != 'submit' && type != 'reset' && type != 'button' && type != 'file' &&
	        ((type != 'radio' && type != 'checkbox') || field.checked))
	          add($(field).val())
	    })
	    return result
	  }
	
	  $.fn.serialize = function(){
	    var result = []
	    this.serializeArray().forEach(function(elm){
	      result.push(encodeURIComponent(elm.name) + '=' + encodeURIComponent(elm.value))
	    })
	    return result.join('&')
	  }
	
	  $.fn.submit = function(callback) {
	    if (0 in arguments) this.bind('submit', callback)
	    else if (this.length) {
	      var event = $.Event('submit')
	      this.eq(0).trigger(event)
	      if (!event.isDefaultPrevented()) this.get(0).submit()
	    }
	    return this
	  }
	
	})(Zepto)
	
	;(function($){
	  // __proto__ doesn't exist on IE<11, so redefine
	  // the Z function to use object extension instead
	  if (!('__proto__' in {})) {
	    $.extend($.zepto, {
	      Z: function(dom, selector){
	        dom = dom || []
	        $.extend(dom, $.fn)
	        dom.selector = selector || ''
	        dom.__Z = true
	        return dom
	      },
	      // this is a kludge but works
	      isZ: function(object){
	        return $.type(object) === 'array' && '__Z' in object
	      }
	    })
	  }
	
	  // getComputedStyle shouldn't freak out when called
	  // without a valid element as argument
	  try {
	    getComputedStyle(undefined)
	  } catch(e) {
	    var nativeGetComputedStyle = getComputedStyle;
	    window.getComputedStyle = function(element){
	      try {
	        return nativeGetComputedStyle(element)
	      } catch(e) {
	        return null
	      }
	    }
	  }
	})(Zepto)
	;
	
	if (true) {
	  module.exports = Zepto;
	}


/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = "<div class=\"page__top\">\n  main content\n  </div>";

/***/ },
/* 98 */
/***/ function(module, exports) {



/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjk2MWM2ZmNkN2ZlYzU4Mzk0N2EiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2NvbXBvbmVudHMvbmF2LnZ1ZSIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvY29tcG9uZW50cy9uYXYudnVlPzYxYzQiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2NvbXBvbmVudHMvbmF2LnZ1ZT8xOGI1Iiwid2VicGFjazovLy8uL34vdnVlL3NyYy92dWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUvc3JjL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUvc3JjL3V0aWwvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvdXRpbC9sYW5nLmpzIiwid2VicGFjazovLy8uL34vdnVlL3NyYy91dGlsL2Vudi5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvdXRpbC9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUvc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvdXRpbC9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUvc3JjL3V0aWwvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUvc3JjL2FwaS9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUvc3JjL2NvbXBpbGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdnVlL3NyYy9jb21waWxlci9jb21waWxlLmpzIiwid2VicGFjazovLy8uL34vdnVlL3NyYy9jb21waWxlci9jb21waWxlLXByb3BzLmpzIiwid2VicGFjazovLy8uL34vdnVlL3NyYy9wYXJzZXJzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUvc3JjL2NhY2hlLmpzIiwid2VicGFjazovLy8uL34vdnVlL3NyYy9wYXJzZXJzL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvZGlyZWN0aXZlcy9wcm9wLmpzIiwid2VicGFjazovLy8uL34vdnVlL3NyYy93YXRjaGVyLmpzIiwid2VicGFjazovLy8uL34vdnVlL3NyYy9vYnNlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvb2JzZXJ2ZXIvZGVwLmpzIiwid2VicGFjazovLy8uL34vdnVlL3NyYy9vYnNlcnZlci9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvb2JzZXJ2ZXIvb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vdnVlL3NyYy9wYXJzZXJzL2V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUvc3JjL3BhcnNlcnMvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvYmF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvcGFyc2Vycy90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvZGlyZWN0aXZlcy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUvc3JjL2NvbXBpbGVyL3RyYW5zY2x1ZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUvc3JjL2RpcmVjdGl2ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUvc3JjL2RpcmVjdGl2ZXMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUvc3JjL2RpcmVjdGl2ZXMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvZGlyZWN0aXZlcy9odG1sLmpzIiwid2VicGFjazovLy8uL34vdnVlL3NyYy9kaXJlY3RpdmVzL2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUvc3JjL2RpcmVjdGl2ZXMvc2hvdy5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvdHJhbnNpdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvZGlyZWN0aXZlcy9jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvZGlyZWN0aXZlcy9lbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvZGlyZWN0aXZlcy9yZWYuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUvc3JjL2RpcmVjdGl2ZXMvY2xvYWsuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUvc3JjL2RpcmVjdGl2ZXMvdHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvdHJhbnNpdGlvbi90cmFuc2l0aW9uLmpzIiwid2VicGFjazovLy8uL34vdnVlL3NyYy90cmFuc2l0aW9uL3F1ZXVlLmpzIiwid2VicGFjazovLy8uL34vdnVlL3NyYy9kaXJlY3RpdmVzL29uLmpzIiwid2VicGFjazovLy8uL34vdnVlL3NyYy9kaXJlY3RpdmVzL21vZGVsL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdnVlL3NyYy9kaXJlY3RpdmVzL21vZGVsL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUvc3JjL2RpcmVjdGl2ZXMvbW9kZWwvcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUvc3JjL2RpcmVjdGl2ZXMvbW9kZWwvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL34vdnVlL3NyYy9kaXJlY3RpdmVzL21vZGVsL2NoZWNrYm94LmpzIiwid2VicGFjazovLy8uL34vdnVlL3NyYy9kaXJlY3RpdmVzL3JlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvZGlyZWN0aXZlcy9pZi5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvZWxlbWVudC1kaXJlY3RpdmVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdnVlL3NyYy9lbGVtZW50LWRpcmVjdGl2ZXMvY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvZWxlbWVudC1kaXJlY3RpdmVzL3BhcnRpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUvc3JjL2ZpbHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUvc3JjL2ZpbHRlcnMvYXJyYXktZmlsdGVycy5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvaW5zdGFuY2UvaW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvaW5zdGFuY2UvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL34vdnVlL3NyYy9pbnN0YW5jZS9zY29wZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvaW5zdGFuY2UvY29tcGlsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL34vdnVlL3NyYy9pbnN0YW5jZS9taXNjLmpzIiwid2VicGFjazovLy8uL34vdnVlL3NyYy9hcGkvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvYXBpL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvYXBpL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS9zcmMvYXBpL2NoaWxkLmpzIiwid2VicGFjazovLy8uL34vdnVlL3NyYy9hcGkvbGlmZWN5Y2xlLmpzIiwid2VicGFjazovLy8uL34vdnVlLXJvdXRlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1yb3V0ZS9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtcm91dGUvfi9wYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbm9kZS1saWJzLWJyb3dzZXIvfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtcm91dGUvfi9wYWdlL34vcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtcm91dGUvfi9wYWdlL34vcGF0aC10by1yZWdleHAvfi9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdnVlLXJvdXRlL3NyYy9vdmVycmlkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtcm91dGUvc3JjL3JvdXRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2NvbW1vbi91dGlsLmpzIiwid2VicGFjazovLy8uL34vc2xpZGVvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zbGlkZW91dC9+L2RlY291cGxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2xpZGVvdXQvfi9lbWl0dGVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2NvbXBvbmVudHMvaGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvY29tcG9uZW50cy9oZWFkZXIudnVlP2NlZDAiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2NvbXBvbmVudHMvaGVhZGVyLnZ1ZT9kNzk5Iiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9jb21wb25lbnRzL2Zvb3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2NvbXBvbmVudHMvZm9vdGVyLnZ1ZT83ZWY2Iiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9jb21wb25lbnRzL2Zvb3Rlci52dWU/ODk4YSIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvcGFnZXMvdG9wLnZ1ZSIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvanMvcGFnZXMvdG9wLnZ1ZT81ZmMxIiwid2VicGFjazovLy8uL34vbnBtLXplcHRvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9qcy9wYWdlcy90b3AudnVlP2UwMjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQ3RDZ0IsRUFBSzs7OztxQ0FDSCxFQUFXOzs7O3VDQUNaLEVBQWU7Ozs7Z0RBQ0osRUFBeUI7Ozs7NkNBQzVCLENBQXNCOzs7O2dEQUNuQixFQUF5Qjs7Ozt3Q0FDakMsRUFBaUI7Ozs7MkNBQ2QsRUFBb0I7Ozs7O0FBRzNDLGtCQUFJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUs7QUFDL0Isa0JBQUksR0FBRyx1QkFBTzs7QUFFZCxPQUFNLENBQUMsT0FBTyxHQUFHLHFCQUFROztBQUVyQixPQUFFLEVBQUUsTUFBTTs7QUFFVixlQUFVLEVBQUU7QUFDUiwyQkFBa0Isa0NBQWlCO0FBQ25DLHdCQUFlLCtCQUFjO0FBQzdCLDJCQUFrQixrQ0FBaUI7QUFDbkMsbUJBQVUsMEJBQVM7QUFDbkIsc0JBQWEsNkJBQVk7TUFDNUI7O0FBRUQsV0FBTSxFQUFFO0FBQ0osWUFBRyxFQUFFO0FBQ0Qsd0JBQVcsRUFBRSxVQUFVO0FBQ3ZCLHdCQUFXLEVBQUUsU0FBUztBQUN0QixzQkFBUyxFQUFFLElBQUk7VUFDbEI7QUFDRCx3QkFBZSxFQUFFO0FBQ2Isd0JBQVcsRUFBRSxhQUFhO1VBQzdCO0FBQ0QsZ0JBQU8sRUFBRTtBQUNMLHFCQUFRLEVBQUUsSUFBSTtVQUNqQjtNQUNKOztBQUVELFNBQUksRUFBRSxFQUNMOztBQUVELFlBQU8scUJBQUcsRUFDVDs7QUFFRCxZQUFPLEVBQUUsRUFDUjtFQUNKLENBQUMsQzs7Ozs7O0FDL0NGO0FBQ0E7Ozs7Ozs7Ozs7OztzQkNEZTtBQUNiLE9BQUksa0JBQUc7QUFDTCxZQUFPLEVBQ047SUFDRjs7QUFFRCxVQUFPLEVBQUUsRUFDUjtFQUNGOzs7Ozs7O0FDUkQsc0Q7Ozs7OztBQ0FBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQixpQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDeEZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLFlBQVcsRUFBRTtBQUNiLFlBQVcsSUFBSTtBQUNmOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFPO0FBQ2xCLFlBQVcsRUFBRTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxFQUFFO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0SEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLE9BQU87QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLE9BQU87QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcEVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFFBQVE7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM1UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsYUFBYTtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0VUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEI7QUFDQSxTQUFRLGNBQWM7QUFDdEIsU0FBUSxTQUFTO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6RUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzlKQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDekJBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsUUFBUTtBQUNuQixZQUFXLE1BQU07QUFDakI7O0FBRUE7QUFDQTtBQUNBLHNDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxjQUFjO0FBQ3pCLGFBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsWUFBVyxFQUFFO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcE1BOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEI7QUFDNUI7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYSxPQUFPO0FBQ3BCLGNBQWEsT0FBTztBQUNwQixlQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JIQTtBQUNBOzs7Ozs7O0FDREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsU0FB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Q0E7QUFDQSxZQUFXLElBQUk7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxJQUFJO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXdDLE9BQU87QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEI7O0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUIsK0NBQStDLG9DQUFvQzs7QUFFNUc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnREFBK0Msc0NBQXNDO0FBQ3JGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0IsNEJBQTRCO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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O0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXNCO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEMseUNBQXlDO0FBQ25GO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUM7O0FBRUQsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1AsY0FBYSxlQUFlOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOENBQTZDLElBQUk7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBOEIsZUFBZTtBQUM3QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFtQixFQUFFO0FBQ3JCLDRDQUEyQyw4Q0FBOEM7QUFDekY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsWUFBWTs7QUFFdkI7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBQzs7QUFFRCxFQUFDO0FBQ0Q7QUFDQTtBQUNBLDBCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN2akRBLHdFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDI5NjFjNmZjZDdmZWM1ODM5NDdhXG4gKiovIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgcm91dGUgZnJvbSAndnVlLXJvdXRlJ1xuaW1wb3J0IHV0aWwgZnJvbSAnLi9jb21tb24vdXRpbCdcbmltcG9ydCBjb21wb25lbnRIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci52dWUnXG5pbXBvcnQgY29tcG9uZW50TmF2IGZyb20gJy4vY29tcG9uZW50cy9uYXYudnVlJ1xuaW1wb3J0IGNvbXBvbmVudEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvZm9vdGVyLnZ1ZSdcbmltcG9ydCBwYWdlVG9wIGZyb20gJy4vcGFnZXMvdG9wLnZ1ZSdcbmltcG9ydCBwYWdlRGV0YWlsIGZyb20gJy4vcGFnZXMvZGV0YWlsLnZ1ZSdcblxuLy8gc2V0dXAgVnVlXG5WdWUuY29uZmlnLmRlYnVnID0gT1BUSU9OLmRlYnVnXG5WdWUudXNlKHJvdXRlKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBWdWUoe1xuXG4gICAgZWw6ICcjYXBwJyxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgJ2NvbXBvbmVudC1oZWFkZXInOiBjb21wb25lbnRIZWFkZXIsXG4gICAgICAgICdjb21wb25lbnQtbmF2JzogY29tcG9uZW50TmF2LFxuICAgICAgICAnY29tcG9uZW50LWZvb3Rlcic6IGNvbXBvbmVudEZvb3RlcixcbiAgICAgICAgJ3BhZ2UtdG9wJzogcGFnZVRvcCxcbiAgICAgICAgJ3BhZ2UtZGV0YWlsJzogcGFnZURldGFpbFxuICAgIH0sXG5cbiAgICByb3V0ZXM6IHtcbiAgICAgICAgJy8nOiB7XG4gICAgICAgICAgICBjb21wb25lbnRJZDogJ3BhZ2UtdG9wJyxcbiAgICAgICAgICAgIGFmdGVyVXBkYXRlOiAncmVmcmVzaCcsXG4gICAgICAgICAgICBpc0RlZmF1bHQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgJy9kZXRhaWwvOml0ZW0nOiB7XG4gICAgICAgICAgICBjb21wb25lbnRJZDogJ3BhZ2UtZGV0aWFsJ1xuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBoYXNoYmFuZzogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRhdGE6IHtcbiAgICB9LFxuXG4gICAgY3JlYXRlZCgpIHtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgIH1cbn0pXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9wdWJsaWMvanMvbWFpbi5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi0hYmFiZWwhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL25hdi52dWVcIilcbm1vZHVsZS5leHBvcnRzLnRlbXBsYXRlID0gcmVxdWlyZShcIi0haHRtbCEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9uYXYudnVlXCIpXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vcHVibGljL2pzL2NvbXBvbmVudHMvbmF2LnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3B1YmxpYy9qcy9jb21wb25lbnRzL25hdi52dWVcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiXFxcIj5cXG4gIE5hdlxcbiAgPC9kaXY+XCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaHRtbC1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3B1YmxpYy9qcy9jb21wb25lbnRzL25hdi52dWVcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgXyA9IHJlcXVpcmUoJy4vdXRpbCcpXG52YXIgZXh0ZW5kID0gXy5leHRlbmRcblxuLyoqXG4gKiBUaGUgZXhwb3NlZCBWdWUgY29uc3RydWN0b3IuXG4gKlxuICogQVBJIGNvbnZlbnRpb25zOlxuICogLSBwdWJsaWMgQVBJIG1ldGhvZHMvcHJvcGVydGllcyBhcmUgcHJlZmlleGVkIHdpdGggYCRgXG4gKiAtIGludGVybmFsIG1ldGhvZHMvcHJvcGVydGllcyBhcmUgcHJlZml4ZWQgd2l0aCBgX2BcbiAqIC0gbm9uLXByZWZpeGVkIHByb3BlcnRpZXMgYXJlIGFzc3VtZWQgdG8gYmUgcHJveGllZCB1c2VyXG4gKiAgIGRhdGEuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gVnVlIChvcHRpb25zKSB7XG4gIHRoaXMuX2luaXQob3B0aW9ucylcbn1cblxuLyoqXG4gKiBNaXhpbiBnbG9iYWwgQVBJXG4gKi9cblxuZXh0ZW5kKFZ1ZSwgcmVxdWlyZSgnLi9hcGkvZ2xvYmFsJykpXG5cbi8qKlxuICogVnVlIGFuZCBldmVyeSBjb25zdHJ1Y3RvciB0aGF0IGV4dGVuZHMgVnVlIGhhcyBhblxuICogYXNzb2NpYXRlZCBvcHRpb25zIG9iamVjdCwgd2hpY2ggY2FuIGJlIGFjY2Vzc2VkIGR1cmluZ1xuICogY29tcGlsYXRpb24gc3RlcHMgYXMgYHRoaXMuY29uc3RydWN0b3Iub3B0aW9uc2AuXG4gKlxuICogVGhlc2UgY2FuIGJlIHNlZW4gYXMgdGhlIGRlZmF1bHQgb3B0aW9ucyBvZiBldmVyeVxuICogVnVlIGluc3RhbmNlLlxuICovXG5cblZ1ZS5vcHRpb25zID0ge1xuICByZXBsYWNlOiB0cnVlLFxuICBkaXJlY3RpdmVzOiByZXF1aXJlKCcuL2RpcmVjdGl2ZXMnKSxcbiAgZWxlbWVudERpcmVjdGl2ZXM6IHJlcXVpcmUoJy4vZWxlbWVudC1kaXJlY3RpdmVzJyksXG4gIGZpbHRlcnM6IHJlcXVpcmUoJy4vZmlsdGVycycpLFxuICB0cmFuc2l0aW9uczoge30sXG4gIGNvbXBvbmVudHM6IHt9LFxuICBwYXJ0aWFsczoge31cbn1cblxuLyoqXG4gKiBCdWlsZCB1cCB0aGUgcHJvdG90eXBlXG4gKi9cblxudmFyIHAgPSBWdWUucHJvdG90eXBlXG5cbi8qKlxuICogJGRhdGEgaGFzIGEgc2V0dGVyIHdoaWNoIGRvZXMgYSBidW5jaCBvZlxuICogdGVhcmRvd24vc2V0dXAgd29ya1xuICovXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwLCAnJGRhdGEnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRhXG4gIH0sXG4gIHNldDogZnVuY3Rpb24gKG5ld0RhdGEpIHtcbiAgICBpZiAobmV3RGF0YSAhPT0gdGhpcy5fZGF0YSkge1xuICAgICAgdGhpcy5fc2V0RGF0YShuZXdEYXRhKVxuICAgIH1cbiAgfVxufSlcblxuLyoqXG4gKiBNaXhpbiBpbnRlcm5hbCBpbnN0YW5jZSBtZXRob2RzXG4gKi9cblxuZXh0ZW5kKHAsIHJlcXVpcmUoJy4vaW5zdGFuY2UvaW5pdCcpKVxuZXh0ZW5kKHAsIHJlcXVpcmUoJy4vaW5zdGFuY2UvZXZlbnRzJykpXG5leHRlbmQocCwgcmVxdWlyZSgnLi9pbnN0YW5jZS9zY29wZScpKVxuZXh0ZW5kKHAsIHJlcXVpcmUoJy4vaW5zdGFuY2UvY29tcGlsZScpKVxuZXh0ZW5kKHAsIHJlcXVpcmUoJy4vaW5zdGFuY2UvbWlzYycpKVxuXG4vKipcbiAqIE1peGluIHB1YmxpYyBBUEkgbWV0aG9kc1xuICovXG5cbmV4dGVuZChwLCByZXF1aXJlKCcuL2FwaS9kYXRhJykpXG5leHRlbmQocCwgcmVxdWlyZSgnLi9hcGkvZG9tJykpXG5leHRlbmQocCwgcmVxdWlyZSgnLi9hcGkvZXZlbnRzJykpXG5leHRlbmQocCwgcmVxdWlyZSgnLi9hcGkvY2hpbGQnKSlcbmV4dGVuZChwLCByZXF1aXJlKCcuL2FwaS9saWZlY3ljbGUnKSlcblxubW9kdWxlLmV4cG9ydHMgPSBfLlZ1ZSA9IFZ1ZVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlL3NyYy92dWUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGxhbmcgPSByZXF1aXJlKCcuL2xhbmcnKVxudmFyIGV4dGVuZCA9IGxhbmcuZXh0ZW5kXG5cbmV4dGVuZChleHBvcnRzLCBsYW5nKVxuZXh0ZW5kKGV4cG9ydHMsIHJlcXVpcmUoJy4vZW52JykpXG5leHRlbmQoZXhwb3J0cywgcmVxdWlyZSgnLi9kb20nKSlcbmV4dGVuZChleHBvcnRzLCByZXF1aXJlKCcuL29wdGlvbnMnKSlcbmV4dGVuZChleHBvcnRzLCByZXF1aXJlKCcuL2NvbXBvbmVudCcpKVxuZXh0ZW5kKGV4cG9ydHMsIHJlcXVpcmUoJy4vZGVidWcnKSlcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvdXRpbC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgXyA9IHJlcXVpcmUoJy4vaW5kZXgnKVxudmFyIGV4dGVuZCA9IF8uZXh0ZW5kXG5cbi8qKlxuICogT3B0aW9uIG92ZXJ3cml0aW5nIHN0cmF0ZWdpZXMgYXJlIGZ1bmN0aW9ucyB0aGF0IGhhbmRsZVxuICogaG93IHRvIG1lcmdlIGEgcGFyZW50IG9wdGlvbiB2YWx1ZSBhbmQgYSBjaGlsZCBvcHRpb25cbiAqIHZhbHVlIGludG8gdGhlIGZpbmFsIHZhbHVlLlxuICpcbiAqIEFsbCBzdHJhdGVneSBmdW5jdGlvbnMgZm9sbG93IHRoZSBzYW1lIHNpZ25hdHVyZTpcbiAqXG4gKiBAcGFyYW0geyp9IHBhcmVudFZhbFxuICogQHBhcmFtIHsqfSBjaGlsZFZhbFxuICogQHBhcmFtIHtWdWV9IFt2bV1cbiAqL1xuXG52YXIgc3RyYXRzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4vKipcbiAqIEhlbHBlciB0aGF0IHJlY3Vyc2l2ZWx5IG1lcmdlcyB0d28gZGF0YSBvYmplY3RzIHRvZ2V0aGVyLlxuICovXG5cbmZ1bmN0aW9uIG1lcmdlRGF0YSAodG8sIGZyb20pIHtcbiAgdmFyIGtleSwgdG9WYWwsIGZyb21WYWxcbiAgZm9yIChrZXkgaW4gZnJvbSkge1xuICAgIHRvVmFsID0gdG9ba2V5XVxuICAgIGZyb21WYWwgPSBmcm9tW2tleV1cbiAgICBpZiAoIXRvLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHRvLiRhZGQoa2V5LCBmcm9tVmFsKVxuICAgIH0gZWxzZSBpZiAoXy5pc09iamVjdCh0b1ZhbCkgJiYgXy5pc09iamVjdChmcm9tVmFsKSkge1xuICAgICAgbWVyZ2VEYXRhKHRvVmFsLCBmcm9tVmFsKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBEYXRhXG4gKi9cblxuc3RyYXRzLmRhdGEgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCwgdm0pIHtcbiAgaWYgKCF2bSkge1xuICAgIC8vIGluIGEgVnVlLmV4dGVuZCBtZXJnZSwgYm90aCBzaG91bGQgYmUgZnVuY3Rpb25zXG4gICAgaWYgKCFjaGlsZFZhbCkge1xuICAgICAgcmV0dXJuIHBhcmVudFZhbFxuICAgIH1cbiAgICBpZiAodHlwZW9mIGNoaWxkVmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBfLndhcm4oXG4gICAgICAgICdUaGUgXCJkYXRhXCIgb3B0aW9uIHNob3VsZCBiZSBhIGZ1bmN0aW9uICcgK1xuICAgICAgICAndGhhdCByZXR1cm5zIGEgcGVyLWluc3RhbmNlIHZhbHVlIGluIGNvbXBvbmVudCAnICtcbiAgICAgICAgJ2RlZmluaXRpb25zLidcbiAgICAgIClcbiAgICAgIHJldHVybiBwYXJlbnRWYWxcbiAgICB9XG4gICAgaWYgKCFwYXJlbnRWYWwpIHtcbiAgICAgIHJldHVybiBjaGlsZFZhbFxuICAgIH1cbiAgICAvLyB3aGVuIHBhcmVudFZhbCAmIGNoaWxkVmFsIGFyZSBib3RoIHByZXNlbnQsXG4gICAgLy8gd2UgbmVlZCB0byByZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlXG4gICAgLy8gbWVyZ2VkIHJlc3VsdCBvZiBib3RoIGZ1bmN0aW9ucy4uLiBubyBuZWVkIHRvXG4gICAgLy8gY2hlY2sgaWYgcGFyZW50VmFsIGlzIGEgZnVuY3Rpb24gaGVyZSBiZWNhdXNlXG4gICAgLy8gaXQgaGFzIHRvIGJlIGEgZnVuY3Rpb24gdG8gcGFzcyBwcmV2aW91cyBtZXJnZXMuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZERhdGFGbiAoKSB7XG4gICAgICByZXR1cm4gbWVyZ2VEYXRhKFxuICAgICAgICBjaGlsZFZhbC5jYWxsKHRoaXMpLFxuICAgICAgICBwYXJlbnRWYWwuY2FsbCh0aGlzKVxuICAgICAgKVxuICAgIH1cbiAgfSBlbHNlIGlmIChwYXJlbnRWYWwgfHwgY2hpbGRWYWwpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VkSW5zdGFuY2VEYXRhRm4gKCkge1xuICAgICAgLy8gaW5zdGFuY2UgbWVyZ2VcbiAgICAgIHZhciBpbnN0YW5jZURhdGEgPSB0eXBlb2YgY2hpbGRWYWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBjaGlsZFZhbC5jYWxsKHZtKVxuICAgICAgICA6IGNoaWxkVmFsXG4gICAgICB2YXIgZGVmYXVsdERhdGEgPSB0eXBlb2YgcGFyZW50VmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcGFyZW50VmFsLmNhbGwodm0pXG4gICAgICAgIDogdW5kZWZpbmVkXG4gICAgICBpZiAoaW5zdGFuY2VEYXRhKSB7XG4gICAgICAgIHJldHVybiBtZXJnZURhdGEoaW5zdGFuY2VEYXRhLCBkZWZhdWx0RGF0YSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0RGF0YVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEVsXG4gKi9cblxuc3RyYXRzLmVsID0gZnVuY3Rpb24gKHBhcmVudFZhbCwgY2hpbGRWYWwsIHZtKSB7XG4gIGlmICghdm0gJiYgY2hpbGRWYWwgJiYgdHlwZW9mIGNoaWxkVmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgXy53YXJuKFxuICAgICAgJ1RoZSBcImVsXCIgb3B0aW9uIHNob3VsZCBiZSBhIGZ1bmN0aW9uICcgK1xuICAgICAgJ3RoYXQgcmV0dXJucyBhIHBlci1pbnN0YW5jZSB2YWx1ZSBpbiBjb21wb25lbnQgJyArXG4gICAgICAnZGVmaW5pdGlvbnMuJ1xuICAgIClcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgcmV0ID0gY2hpbGRWYWwgfHwgcGFyZW50VmFsXG4gIC8vIGludm9rZSB0aGUgZWxlbWVudCBmYWN0b3J5IGlmIHRoaXMgaXMgaW5zdGFuY2UgbWVyZ2VcbiAgcmV0dXJuIHZtICYmIHR5cGVvZiByZXQgPT09ICdmdW5jdGlvbidcbiAgICA/IHJldC5jYWxsKHZtKVxuICAgIDogcmV0XG59XG5cbi8qKlxuICogSG9va3MgYW5kIHBhcmFtIGF0dHJpYnV0ZXMgYXJlIG1lcmdlZCBhcyBhcnJheXMuXG4gKi9cblxuc3RyYXRzLmNyZWF0ZWQgPVxuc3RyYXRzLnJlYWR5ID1cbnN0cmF0cy5hdHRhY2hlZCA9XG5zdHJhdHMuZGV0YWNoZWQgPVxuc3RyYXRzLmJlZm9yZUNvbXBpbGUgPVxuc3RyYXRzLmNvbXBpbGVkID1cbnN0cmF0cy5iZWZvcmVEZXN0cm95ID1cbnN0cmF0cy5kZXN0cm95ZWQgPVxuc3RyYXRzLnByb3BzID0gZnVuY3Rpb24gKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcbiAgcmV0dXJuIGNoaWxkVmFsXG4gICAgPyBwYXJlbnRWYWxcbiAgICAgID8gcGFyZW50VmFsLmNvbmNhdChjaGlsZFZhbClcbiAgICAgIDogXy5pc0FycmF5KGNoaWxkVmFsKVxuICAgICAgICA/IGNoaWxkVmFsXG4gICAgICAgIDogW2NoaWxkVmFsXVxuICAgIDogcGFyZW50VmFsXG59XG5cbi8qKlxuICogMC4xMSBkZXByZWNhdGlvbiB3YXJuaW5nXG4gKi9cblxuc3RyYXRzLnBhcmFtQXR0cmlidXRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgXy53YXJuKFxuICAgICdcInBhcmFtQXR0cmlidXRlc1wiIG9wdGlvbiBoYXMgYmVlbiBkZXByZWNhdGVkIGluIDAuMTIuICcgK1xuICAgICdVc2UgXCJwcm9wc1wiIGluc3RlYWQuJ1xuICApXG59XG5cbi8qKlxuICogQXNzZXRzXG4gKlxuICogV2hlbiBhIHZtIGlzIHByZXNlbnQgKGluc3RhbmNlIGNyZWF0aW9uKSwgd2UgbmVlZCB0byBkb1xuICogYSB0aHJlZS13YXkgbWVyZ2UgYmV0d2VlbiBjb25zdHJ1Y3RvciBvcHRpb25zLCBpbnN0YW5jZVxuICogb3B0aW9ucyBhbmQgcGFyZW50IG9wdGlvbnMuXG4gKi9cblxuc3RyYXRzLmRpcmVjdGl2ZXMgPVxuc3RyYXRzLmZpbHRlcnMgPVxuc3RyYXRzLnRyYW5zaXRpb25zID1cbnN0cmF0cy5jb21wb25lbnRzID1cbnN0cmF0cy5wYXJ0aWFscyA9XG5zdHJhdHMuZWxlbWVudERpcmVjdGl2ZXMgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICB2YXIgcmVzID0gT2JqZWN0LmNyZWF0ZShwYXJlbnRWYWwpXG4gIHJldHVybiBjaGlsZFZhbFxuICAgID8gZXh0ZW5kKHJlcywgY2hpbGRWYWwpXG4gICAgOiByZXNcbn1cblxuLyoqXG4gKiBFdmVudHMgJiBXYXRjaGVycy5cbiAqXG4gKiBFdmVudHMgJiB3YXRjaGVycyBoYXNoZXMgc2hvdWxkIG5vdCBvdmVyd3JpdGUgb25lXG4gKiBhbm90aGVyLCBzbyB3ZSBtZXJnZSB0aGVtIGFzIGFycmF5cy5cbiAqL1xuXG5zdHJhdHMud2F0Y2ggPVxuc3RyYXRzLmV2ZW50cyA9IGZ1bmN0aW9uIChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gIGlmICghY2hpbGRWYWwpIHJldHVybiBwYXJlbnRWYWxcbiAgaWYgKCFwYXJlbnRWYWwpIHJldHVybiBjaGlsZFZhbFxuICB2YXIgcmV0ID0ge31cbiAgZXh0ZW5kKHJldCwgcGFyZW50VmFsKVxuICBmb3IgKHZhciBrZXkgaW4gY2hpbGRWYWwpIHtcbiAgICB2YXIgcGFyZW50ID0gcmV0W2tleV1cbiAgICB2YXIgY2hpbGQgPSBjaGlsZFZhbFtrZXldXG4gICAgaWYgKHBhcmVudCAmJiAhXy5pc0FycmF5KHBhcmVudCkpIHtcbiAgICAgIHBhcmVudCA9IFtwYXJlbnRdXG4gICAgfVxuICAgIHJldFtrZXldID0gcGFyZW50XG4gICAgICA/IHBhcmVudC5jb25jYXQoY2hpbGQpXG4gICAgICA6IFtjaGlsZF1cbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8qKlxuICogT3RoZXIgb2JqZWN0IGhhc2hlcy5cbiAqL1xuXG5zdHJhdHMubWV0aG9kcyA9XG5zdHJhdHMuY29tcHV0ZWQgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICBpZiAoIWNoaWxkVmFsKSByZXR1cm4gcGFyZW50VmFsXG4gIGlmICghcGFyZW50VmFsKSByZXR1cm4gY2hpbGRWYWxcbiAgdmFyIHJldCA9IE9iamVjdC5jcmVhdGUocGFyZW50VmFsKVxuICBleHRlbmQocmV0LCBjaGlsZFZhbClcbiAgcmV0dXJuIHJldFxufVxuXG4vKipcbiAqIERlZmF1bHQgc3RyYXRlZ3kuXG4gKi9cblxudmFyIGRlZmF1bHRTdHJhdCA9IGZ1bmN0aW9uIChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gIHJldHVybiBjaGlsZFZhbCA9PT0gdW5kZWZpbmVkXG4gICAgPyBwYXJlbnRWYWxcbiAgICA6IGNoaWxkVmFsXG59XG5cbi8qKlxuICogTWFrZSBzdXJlIGNvbXBvbmVudCBvcHRpb25zIGdldCBjb252ZXJ0ZWQgdG8gYWN0dWFsXG4gKiBjb25zdHJ1Y3RvcnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbXBvbmVudHNcbiAqL1xuXG5mdW5jdGlvbiBndWFyZENvbXBvbmVudHMgKGNvbXBvbmVudHMpIHtcbiAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICB2YXIgZGVmXG4gICAgZm9yICh2YXIga2V5IGluIGNvbXBvbmVudHMpIHtcbiAgICAgIGlmIChfLmNvbW1vblRhZ1JFLnRlc3Qoa2V5KSkge1xuICAgICAgICBfLndhcm4oXG4gICAgICAgICAgJ0RvIG5vdCB1c2UgYnVpbHQtaW4gSFRNTCBlbGVtZW50cyBhcyBjb21wb25lbnQgJyArXG4gICAgICAgICAgJ25hbWU6ICcgKyBrZXlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgZGVmID0gY29tcG9uZW50c1trZXldXG4gICAgICBpZiAoXy5pc1BsYWluT2JqZWN0KGRlZikpIHtcbiAgICAgICAgZGVmLm5hbWUgPSBrZXlcbiAgICAgICAgY29tcG9uZW50c1trZXldID0gXy5WdWUuZXh0ZW5kKGRlZilcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBFbnN1cmUgYWxsIHByb3BzIG9wdGlvbiBzeW50YXggYXJlIG5vcm1hbGl6ZWQgaW50byB0aGVcbiAqIE9iamVjdC1iYXNlZCBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBndWFyZFByb3BzIChvcHRpb25zKSB7XG4gIHZhciBwcm9wcyA9IG9wdGlvbnMucHJvcHNcbiAgaWYgKF8uaXNQbGFpbk9iamVjdChwcm9wcykpIHtcbiAgICBvcHRpb25zLnByb3BzID0gT2JqZWN0LmtleXMocHJvcHMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgdmFsID0gcHJvcHNba2V5XVxuICAgICAgaWYgKCFfLmlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgICB2YWwgPSB7IHR5cGU6IHZhbCB9XG4gICAgICB9XG4gICAgICB2YWwubmFtZSA9IGtleVxuICAgICAgcmV0dXJuIHZhbFxuICAgIH0pXG4gIH0gZWxzZSBpZiAoXy5pc0FycmF5KHByb3BzKSkge1xuICAgIG9wdGlvbnMucHJvcHMgPSBwcm9wcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHJldHVybiB0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyB7IG5hbWU6IHByb3AgfVxuICAgICAgICA6IHByb3BcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogTWVyZ2UgdHdvIG9wdGlvbiBvYmplY3RzIGludG8gYSBuZXcgb25lLlxuICogQ29yZSB1dGlsaXR5IHVzZWQgaW4gYm90aCBpbnN0YW50aWF0aW9uIGFuZCBpbmhlcml0YW5jZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyZW50XG4gKiBAcGFyYW0ge09iamVjdH0gY2hpbGRcbiAqIEBwYXJhbSB7VnVlfSBbdm1dIC0gaWYgdm0gaXMgcHJlc2VudCwgaW5kaWNhdGVzIHRoaXMgaXNcbiAqICAgICAgICAgICAgICAgICAgICAgYW4gaW5zdGFudGlhdGlvbiBtZXJnZS5cbiAqL1xuXG5leHBvcnRzLm1lcmdlT3B0aW9ucyA9IGZ1bmN0aW9uIG1lcmdlIChwYXJlbnQsIGNoaWxkLCB2bSkge1xuICBndWFyZENvbXBvbmVudHMoY2hpbGQuY29tcG9uZW50cylcbiAgZ3VhcmRQcm9wcyhjaGlsZClcbiAgdmFyIG9wdGlvbnMgPSB7fVxuICB2YXIga2V5XG4gIGlmIChjaGlsZC5taXhpbnMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNoaWxkLm1peGlucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHBhcmVudCA9IG1lcmdlKHBhcmVudCwgY2hpbGQubWl4aW5zW2ldLCB2bSlcbiAgICB9XG4gIH1cbiAgZm9yIChrZXkgaW4gcGFyZW50KSB7XG4gICAgbWVyZ2VGaWVsZChrZXkpXG4gIH1cbiAgZm9yIChrZXkgaW4gY2hpbGQpIHtcbiAgICBpZiAoIShwYXJlbnQuaGFzT3duUHJvcGVydHkoa2V5KSkpIHtcbiAgICAgIG1lcmdlRmllbGQoa2V5KVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBtZXJnZUZpZWxkIChrZXkpIHtcbiAgICB2YXIgc3RyYXQgPSBzdHJhdHNba2V5XSB8fCBkZWZhdWx0U3RyYXRcbiAgICBvcHRpb25zW2tleV0gPSBzdHJhdChwYXJlbnRba2V5XSwgY2hpbGRba2V5XSwgdm0sIGtleSlcbiAgfVxuICByZXR1cm4gb3B0aW9uc1xufVxuXG4vKipcbiAqIFJlc29sdmUgYW4gYXNzZXQuXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgYmVjYXVzZSBjaGlsZCBpbnN0YW5jZXMgbmVlZCBhY2Nlc3NcbiAqIHRvIGFzc2V0cyBkZWZpbmVkIGluIGl0cyBhbmNlc3RvciBjaGFpbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHJldHVybiB7T2JqZWN0fEZ1bmN0aW9ufVxuICovXG5cbmV4cG9ydHMucmVzb2x2ZUFzc2V0ID0gZnVuY3Rpb24gcmVzb2x2ZSAob3B0aW9ucywgdHlwZSwgaWQpIHtcbiAgdmFyIGFzc2V0ID0gb3B0aW9uc1t0eXBlXVtpZF1cbiAgd2hpbGUgKCFhc3NldCAmJiBvcHRpb25zLl9wYXJlbnQpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucy5fcGFyZW50LiRvcHRpb25zXG4gICAgYXNzZXQgPSBvcHRpb25zW3R5cGVdW2lkXVxuICB9XG4gIHJldHVybiBhc3NldFxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlL3NyYy91dGlsL29wdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDaGVjayBpcyBhIHN0cmluZyBzdGFydHMgd2l0aCAkIG9yIF9cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmV4cG9ydHMuaXNSZXNlcnZlZCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgdmFyIGMgPSAoc3RyICsgJycpLmNoYXJDb2RlQXQoMClcbiAgcmV0dXJuIGMgPT09IDB4MjQgfHwgYyA9PT0gMHg1RlxufVxuXG4vKipcbiAqIEd1YXJkIHRleHQgb3V0cHV0LCBtYWtlIHN1cmUgdW5kZWZpbmVkIG91dHB1dHNcbiAqIGVtcHR5IHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLnRvU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsXG4gICAgPyAnJ1xuICAgIDogdmFsdWUudG9TdHJpbmcoKVxufVxuXG4vKipcbiAqIENoZWNrIGFuZCBjb252ZXJ0IHBvc3NpYmxlIG51bWVyaWMgbnVtYmVycyBiZWZvcmVcbiAqIHNldHRpbmcgYmFjayB0byBkYXRhXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybiB7KnxOdW1iZXJ9XG4gKi9cblxuZXhwb3J0cy50b051bWJlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIGlzTmFOKHZhbHVlKSB8fFxuICAgIHZhbHVlID09PSBudWxsIHx8XG4gICAgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbiAgKSA/IHZhbHVlXG4gICAgOiBOdW1iZXIodmFsdWUpXG59XG5cbi8qKlxuICogQ29udmVydCBzdHJpbmcgYm9vbGVhbiBsaXRlcmFscyBpbnRvIHJlYWwgYm9vbGVhbnMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybiB7KnxCb29sZWFufVxuICovXG5cbmV4cG9ydHMudG9Cb29sZWFuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gJ3RydWUnXG4gICAgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gJ2ZhbHNlJ1xuICAgICAgPyBmYWxzZVxuICAgICAgOiB2YWx1ZVxufVxuXG4vKipcbiAqIFN0cmlwIHF1b3RlcyBmcm9tIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nIHwgZmFsc2V9XG4gKi9cblxuZXhwb3J0cy5zdHJpcFF1b3RlcyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgdmFyIGEgPSBzdHIuY2hhckNvZGVBdCgwKVxuICB2YXIgYiA9IHN0ci5jaGFyQ29kZUF0KHN0ci5sZW5ndGggLSAxKVxuICByZXR1cm4gYSA9PT0gYiAmJiAoYSA9PT0gMHgyMiB8fCBhID09PSAweDI3KVxuICAgID8gc3RyLnNsaWNlKDEsIC0xKVxuICAgIDogZmFsc2Vcbn1cblxuLyoqXG4gKiBDYW1lbGl6ZSBhIGh5cGhlbi1kZWxtaXRlZCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmV4cG9ydHMuY2FtZWxpemUgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvLShcXHcpL2csIHRvVXBwZXIpXG59XG5cbmZ1bmN0aW9uIHRvVXBwZXIgKF8sIGMpIHtcbiAgcmV0dXJuIGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJ1xufVxuXG4vKipcbiAqIEh5cGhlbmF0ZSBhIGNhbWVsQ2FzZSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmV4cG9ydHMuaHlwaGVuYXRlID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyXG4gICAgLnJlcGxhY2UoLyhbYS16XFxkXSkoW0EtWl0pL2csICckMS0kMicpXG4gICAgLnRvTG93ZXJDYXNlKClcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBoeXBoZW4vdW5kZXJzY29yZS9zbGFzaCBkZWxpbWl0ZXJlZCBuYW1lcyBpbnRvXG4gKiBjYW1lbGl6ZWQgY2xhc3NOYW1lcy5cbiAqXG4gKiBlLmcuIG15LWNvbXBvbmVudCA9PiBNeUNvbXBvbmVudFxuICogICAgICBzb21lX2Vsc2UgICAgPT4gU29tZUVsc2VcbiAqICAgICAgc29tZS9jb21wICAgID0+IFNvbWVDb21wXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbnZhciBjbGFzc2lmeVJFID0gLyg/Ol58Wy1fXFwvXSkoXFx3KS9nXG5leHBvcnRzLmNsYXNzaWZ5ID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2xhc3NpZnlSRSwgdG9VcHBlcilcbn1cblxuLyoqXG4gKiBTaW1wbGUgYmluZCwgZmFzdGVyIHRoYW4gbmF0aXZlXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHhcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmV4cG9ydHMuYmluZCA9IGZ1bmN0aW9uIChmbiwgY3R4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgIHZhciBsID0gYXJndW1lbnRzLmxlbmd0aFxuICAgIHJldHVybiBsXG4gICAgICA/IGwgPiAxXG4gICAgICAgID8gZm4uYXBwbHkoY3R4LCBhcmd1bWVudHMpXG4gICAgICAgIDogZm4uY2FsbChjdHgsIGEpXG4gICAgICA6IGZuLmNhbGwoY3R4KVxuICB9XG59XG5cbi8qKlxuICogQ29udmVydCBhbiBBcnJheS1saWtlIG9iamVjdCB0byBhIHJlYWwgQXJyYXkuXG4gKlxuICogQHBhcmFtIHtBcnJheS1saWtlfSBsaXN0XG4gKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0XSAtIHN0YXJ0IGluZGV4XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuXG5leHBvcnRzLnRvQXJyYXkgPSBmdW5jdGlvbiAobGlzdCwgc3RhcnQpIHtcbiAgc3RhcnQgPSBzdGFydCB8fCAwXG4gIHZhciBpID0gbGlzdC5sZW5ndGggLSBzdGFydFxuICB2YXIgcmV0ID0gbmV3IEFycmF5KGkpXG4gIHdoaWxlIChpLS0pIHtcbiAgICByZXRbaV0gPSBsaXN0W2kgKyBzdGFydF1cbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0b1xuICogQHBhcmFtIHtPYmplY3R9IGZyb21cbiAqL1xuXG5leHBvcnRzLmV4dGVuZCA9IGZ1bmN0aW9uICh0bywgZnJvbSkge1xuICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICAgIHRvW2tleV0gPSBmcm9tW2tleV1cbiAgfVxuICByZXR1cm4gdG9cbn1cblxuLyoqXG4gKiBRdWljayBvYmplY3QgY2hlY2sgLSB0aGlzIGlzIHByaW1hcmlseSB1c2VkIHRvIHRlbGxcbiAqIE9iamVjdHMgZnJvbSBwcmltaXRpdmUgdmFsdWVzIHdoZW4gd2Uga25vdyB0aGUgdmFsdWVcbiAqIGlzIGEgSlNPTi1jb21wbGlhbnQgdHlwZS5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnRzLmlzT2JqZWN0ID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5leHBvcnRzLmlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nXG59XG5cbi8qKlxuICogQXJyYXkgdHlwZSBjaGVjay5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5leHBvcnRzLmlzQXJyYXkgPSBBcnJheS5pc0FycmF5XG5cbi8qKlxuICogRGVmaW5lIGEgbm9uLWVudW1lcmFibGUgcHJvcGVydHlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHBhcmFtIHtCb29sZWFufSBbZW51bWVyYWJsZV1cbiAqL1xuXG5leHBvcnRzLmRlZmluZSA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsLCBlbnVtZXJhYmxlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIHZhbHVlOiB2YWwsXG4gICAgZW51bWVyYWJsZTogISFlbnVtZXJhYmxlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KVxufVxuXG4vKipcbiAqIERlYm91bmNlIGEgZnVuY3Rpb24gc28gaXQgb25seSBnZXRzIGNhbGxlZCBhZnRlciB0aGVcbiAqIGlucHV0IHN0b3BzIGFycml2aW5nIGFmdGVyIHRoZSBnaXZlbiB3YWl0IHBlcmlvZC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jXG4gKiBAcGFyYW0ge051bWJlcn0gd2FpdFxuICogQHJldHVybiB7RnVuY3Rpb259IC0gdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICovXG5cbmV4cG9ydHMuZGVib3VuY2UgPSBmdW5jdGlvbiAoZnVuYywgd2FpdCkge1xuICB2YXIgdGltZW91dCwgYXJncywgY29udGV4dCwgdGltZXN0YW1wLCByZXN1bHRcbiAgdmFyIGxhdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsYXN0ID0gRGF0ZS5ub3coKSAtIHRpbWVzdGFtcFxuICAgIGlmIChsYXN0IDwgd2FpdCAmJiBsYXN0ID49IDApIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdClcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZW91dCA9IG51bGxcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcbiAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsXG4gICAgfVxuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY29udGV4dCA9IHRoaXNcbiAgICBhcmdzID0gYXJndW1lbnRzXG4gICAgdGltZXN0YW1wID0gRGF0ZS5ub3coKVxuICAgIGlmICghdGltZW91dCkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG4vKipcbiAqIE1hbnVhbCBpbmRleE9mIGJlY2F1c2UgaXQncyBzbGlnaHRseSBmYXN0ZXIgdGhhblxuICogbmF0aXZlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHsqfSBvYmpcbiAqL1xuXG5leHBvcnRzLmluZGV4T2YgPSBmdW5jdGlvbiAoYXJyLCBvYmopIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKGFycltpXSA9PT0gb2JqKSByZXR1cm4gaVxuICB9XG4gIHJldHVybiAtMVxufVxuXG4vKipcbiAqIE1ha2UgYSBjYW5jZWxsYWJsZSB2ZXJzaW9uIG9mIGFuIGFzeW5jIGNhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnRzLmNhbmNlbGxhYmxlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHZhciBjYiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWNiLmNhbmNlbGxlZCkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICB9XG4gIH1cbiAgY2IuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgIGNiLmNhbmNlbGxlZCA9IHRydWVcbiAgfVxuICByZXR1cm4gY2Jcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvdXRpbC9sYW5nLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGNhbiB3ZSB1c2UgX19wcm90b19fP1xuZXhwb3J0cy5oYXNQcm90byA9ICdfX3Byb3RvX18nIGluIHt9XG5cbi8vIEJyb3dzZXIgZW52aXJvbm1lbnQgc25pZmZpbmdcbnZhciBpbkJyb3dzZXIgPSBleHBvcnRzLmluQnJvd3NlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3aW5kb3cpICE9PSAnW29iamVjdCBPYmplY3RdJ1xuXG5leHBvcnRzLmlzSUU5ID1cbiAgaW5Ccm93c2VyICYmXG4gIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdtc2llIDkuMCcpID4gMFxuXG5leHBvcnRzLmlzQW5kcm9pZCA9XG4gIGluQnJvd3NlciAmJlxuICBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignYW5kcm9pZCcpID4gMFxuXG4vLyBUcmFuc2l0aW9uIHByb3BlcnR5L2V2ZW50IHNuaWZmaW5nXG5pZiAoaW5Ccm93c2VyICYmICFleHBvcnRzLmlzSUU5KSB7XG4gIHZhciBpc1dlYmtpdFRyYW5zID1cbiAgICB3aW5kb3cub250cmFuc2l0aW9uZW5kID09PSB1bmRlZmluZWQgJiZcbiAgICB3aW5kb3cub253ZWJraXR0cmFuc2l0aW9uZW5kICE9PSB1bmRlZmluZWRcbiAgdmFyIGlzV2Via2l0QW5pbSA9XG4gICAgd2luZG93Lm9uYW5pbWF0aW9uZW5kID09PSB1bmRlZmluZWQgJiZcbiAgICB3aW5kb3cub253ZWJraXRhbmltYXRpb25lbmQgIT09IHVuZGVmaW5lZFxuICBleHBvcnRzLnRyYW5zaXRpb25Qcm9wID0gaXNXZWJraXRUcmFuc1xuICAgID8gJ1dlYmtpdFRyYW5zaXRpb24nXG4gICAgOiAndHJhbnNpdGlvbidcbiAgZXhwb3J0cy50cmFuc2l0aW9uRW5kRXZlbnQgPSBpc1dlYmtpdFRyYW5zXG4gICAgPyAnd2Via2l0VHJhbnNpdGlvbkVuZCdcbiAgICA6ICd0cmFuc2l0aW9uZW5kJ1xuICBleHBvcnRzLmFuaW1hdGlvblByb3AgPSBpc1dlYmtpdEFuaW1cbiAgICA/ICdXZWJraXRBbmltYXRpb24nXG4gICAgOiAnYW5pbWF0aW9uJ1xuICBleHBvcnRzLmFuaW1hdGlvbkVuZEV2ZW50ID0gaXNXZWJraXRBbmltXG4gICAgPyAnd2Via2l0QW5pbWF0aW9uRW5kJ1xuICAgIDogJ2FuaW1hdGlvbmVuZCdcbn1cblxuLyoqXG4gKiBEZWZlciBhIHRhc2sgdG8gZXhlY3V0ZSBpdCBhc3luY2hyb25vdXNseS4gSWRlYWxseSB0aGlzXG4gKiBzaG91bGQgYmUgZXhlY3V0ZWQgYXMgYSBtaWNyb3Rhc2ssIHNvIHdlIGxldmVyYWdlXG4gKiBNdXRhdGlvbk9ic2VydmVyIGlmIGl0J3MgYXZhaWxhYmxlLCBhbmQgZmFsbGJhY2sgdG9cbiAqIHNldFRpbWVvdXQoMCkuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHhcbiAqL1xuXG5leHBvcnRzLm5leHRUaWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGNhbGxiYWNrcyA9IFtdXG4gIHZhciBwZW5kaW5nID0gZmFsc2VcbiAgdmFyIHRpbWVyRnVuY1xuICBmdW5jdGlvbiBoYW5kbGUgKCkge1xuICAgIHBlbmRpbmcgPSBmYWxzZVxuICAgIHZhciBjb3BpZXMgPSBjYWxsYmFja3Muc2xpY2UoMClcbiAgICBjYWxsYmFja3MgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29waWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb3BpZXNbaV0oKVxuICAgIH1cbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBjb3VudGVyID0gMVxuICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGhhbmRsZSlcbiAgICB2YXIgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb3VudGVyKVxuICAgIG9ic2VydmVyLm9ic2VydmUodGV4dE5vZGUsIHtcbiAgICAgIGNoYXJhY3RlckRhdGE6IHRydWVcbiAgICB9KVxuICAgIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvdW50ZXIgPSAoY291bnRlciArIDEpICUgMlxuICAgICAgdGV4dE5vZGUuZGF0YSA9IGNvdW50ZXJcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGltZXJGdW5jID0gc2V0VGltZW91dFxuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoY2IsIGN0eCkge1xuICAgIHZhciBmdW5jID0gY3R4XG4gICAgICA/IGZ1bmN0aW9uICgpIHsgY2IuY2FsbChjdHgpIH1cbiAgICAgIDogY2JcbiAgICBjYWxsYmFja3MucHVzaChmdW5jKVxuICAgIGlmIChwZW5kaW5nKSByZXR1cm5cbiAgICBwZW5kaW5nID0gdHJ1ZVxuICAgIHRpbWVyRnVuYyhoYW5kbGUsIDApXG4gIH1cbn0pKClcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvdXRpbC9lbnYuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF8gPSByZXF1aXJlKCcuL2luZGV4JylcbnZhciBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKVxuXG4vKipcbiAqIFF1ZXJ5IGFuIGVsZW1lbnQgc2VsZWN0b3IgaWYgaXQncyBub3QgYW4gZWxlbWVudCBhbHJlYWR5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfEVsZW1lbnR9IGVsXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG5cbmV4cG9ydHMucXVlcnkgPSBmdW5jdGlvbiAoZWwpIHtcbiAgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgc2VsZWN0b3IgPSBlbFxuICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbClcbiAgICBpZiAoIWVsKSB7XG4gICAgICBfLndhcm4oJ0Nhbm5vdCBmaW5kIGVsZW1lbnQ6ICcgKyBzZWxlY3RvcilcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVsXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBub2RlIGlzIGluIHRoZSBkb2N1bWVudC5cbiAqIE5vdGU6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyBzaG91bGQgd29yayBoZXJlXG4gKiBidXQgYWx3YXlzIHJldHVybnMgZmFsc2UgZm9yIGNvbW1lbnQgbm9kZXMgaW4gcGhhbnRvbWpzLFxuICogbWFraW5nIHVuaXQgdGVzdHMgZGlmZmljdWx0LiBUaGlzIGlzIGZpeGVkIGJ5eSBkb2luZyB0aGVcbiAqIGNvbnRhaW5zKCkgY2hlY2sgb24gdGhlIG5vZGUncyBwYXJlbnROb2RlIGluc3RlYWQgb2ZcbiAqIHRoZSBub2RlIGl0c2VsZi5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZXhwb3J0cy5pbkRvYyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgdmFyIHBhcmVudCA9IG5vZGUgJiYgbm9kZS5wYXJlbnROb2RlXG4gIHJldHVybiBkb2MgPT09IG5vZGUgfHxcbiAgICBkb2MgPT09IHBhcmVudCB8fFxuICAgICEhKHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgPT09IDEgJiYgKGRvYy5jb250YWlucyhwYXJlbnQpKSlcbn1cblxuLyoqXG4gKiBFeHRyYWN0IGFuIGF0dHJpYnV0ZSBmcm9tIGEgbm9kZS5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdHRyXG4gKi9cblxuZXhwb3J0cy5hdHRyID0gZnVuY3Rpb24gKG5vZGUsIGF0dHIpIHtcbiAgYXR0ciA9IGNvbmZpZy5wcmVmaXggKyBhdHRyXG4gIHZhciB2YWwgPSBub2RlLmdldEF0dHJpYnV0ZShhdHRyKVxuICBpZiAodmFsICE9PSBudWxsKSB7XG4gICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cilcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbi8qKlxuICogSW5zZXJ0IGVsIGJlZm9yZSB0YXJnZXRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICovXG5cbmV4cG9ydHMuYmVmb3JlID0gZnVuY3Rpb24gKGVsLCB0YXJnZXQpIHtcbiAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsLCB0YXJnZXQpXG59XG5cbi8qKlxuICogSW5zZXJ0IGVsIGFmdGVyIHRhcmdldFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gKi9cblxuZXhwb3J0cy5hZnRlciA9IGZ1bmN0aW9uIChlbCwgdGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQubmV4dFNpYmxpbmcpIHtcbiAgICBleHBvcnRzLmJlZm9yZShlbCwgdGFyZ2V0Lm5leHRTaWJsaW5nKVxuICB9IGVsc2Uge1xuICAgIHRhcmdldC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGVsKVxuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGVsIGZyb20gRE9NXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICovXG5cbmV4cG9ydHMucmVtb3ZlID0gZnVuY3Rpb24gKGVsKSB7XG4gIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXG59XG5cbi8qKlxuICogUHJlcGVuZCBlbCB0byB0YXJnZXRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICovXG5cbmV4cG9ydHMucHJlcGVuZCA9IGZ1bmN0aW9uIChlbCwgdGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQuZmlyc3RDaGlsZCkge1xuICAgIGV4cG9ydHMuYmVmb3JlKGVsLCB0YXJnZXQuZmlyc3RDaGlsZClcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWwpXG4gIH1cbn1cblxuLyoqXG4gKiBSZXBsYWNlIHRhcmdldCB3aXRoIGVsXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqL1xuXG5leHBvcnRzLnJlcGxhY2UgPSBmdW5jdGlvbiAodGFyZ2V0LCBlbCkge1xuICB2YXIgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGVcbiAgaWYgKHBhcmVudCkge1xuICAgIHBhcmVudC5yZXBsYWNlQ2hpbGQoZWwsIHRhcmdldClcbiAgfVxufVxuXG4vKipcbiAqIEFkZCBldmVudCBsaXN0ZW5lciBzaG9ydGhhbmQuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICovXG5cbmV4cG9ydHMub24gPSBmdW5jdGlvbiAoZWwsIGV2ZW50LCBjYikge1xuICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYilcbn1cblxuLyoqXG4gKiBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgc2hvcnRoYW5kLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqL1xuXG5leHBvcnRzLm9mZiA9IGZ1bmN0aW9uIChlbCwgZXZlbnQsIGNiKSB7XG4gIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNiKVxufVxuXG4vKipcbiAqIEFkZCBjbGFzcyB3aXRoIGNvbXBhdGliaWxpdHkgZm9yIElFICYgU1ZHXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtTdHJvbmd9IGNsc1xuICovXG5cbmV4cG9ydHMuYWRkQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIGNscykge1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbHMpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGN1ciA9ICcgJyArIChlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgJyAnXG4gICAgaWYgKGN1ci5pbmRleE9mKCcgJyArIGNscyArICcgJykgPCAwKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGN1ciArIGNscykudHJpbSgpKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBjbGFzcyB3aXRoIGNvbXBhdGliaWxpdHkgZm9yIElFICYgU1ZHXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtTdHJvbmd9IGNsc1xuICovXG5cbmV4cG9ydHMucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiAoZWwsIGNscykge1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbHMpXG4gIH0gZWxzZSB7XG4gICAgdmFyIGN1ciA9ICcgJyArIChlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgJyAnXG4gICAgdmFyIHRhciA9ICcgJyArIGNscyArICcgJ1xuICAgIHdoaWxlIChjdXIuaW5kZXhPZih0YXIpID49IDApIHtcbiAgICAgIGN1ciA9IGN1ci5yZXBsYWNlKHRhciwgJyAnKVxuICAgIH1cbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY3VyLnRyaW0oKSlcbiAgfVxufVxuXG4vKipcbiAqIEV4dHJhY3QgcmF3IGNvbnRlbnQgaW5zaWRlIGFuIGVsZW1lbnQgaW50byBhIHRlbXBvcmFyeVxuICogY29udGFpbmVyIGRpdlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYXNGcmFnbWVudFxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xuXG5leHBvcnRzLmV4dHJhY3RDb250ZW50ID0gZnVuY3Rpb24gKGVsLCBhc0ZyYWdtZW50KSB7XG4gIHZhciBjaGlsZFxuICB2YXIgcmF3Q29udGVudFxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKFxuICAgIGV4cG9ydHMuaXNUZW1wbGF0ZShlbCkgJiZcbiAgICBlbC5jb250ZW50IGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudFxuICApIHtcbiAgICBlbCA9IGVsLmNvbnRlbnRcbiAgfVxuICBpZiAoZWwuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgdHJpbShlbCwgZWwuZmlyc3RDaGlsZClcbiAgICB0cmltKGVsLCBlbC5sYXN0Q2hpbGQpXG4gICAgcmF3Q29udGVudCA9IGFzRnJhZ21lbnRcbiAgICAgID8gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgICB3aGlsZSAoY2hpbGQgPSBlbC5maXJzdENoaWxkKSB7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuICAgICAgcmF3Q29udGVudC5hcHBlbmRDaGlsZChjaGlsZClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJhd0NvbnRlbnRcbn1cblxuZnVuY3Rpb24gdHJpbSAoY29udGVudCwgbm9kZSkge1xuICBpZiAobm9kZSAmJiBub2RlLm5vZGVUeXBlID09PSAzICYmICFub2RlLmRhdGEudHJpbSgpKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChub2RlKVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gZWxlbWVudCBpcyBhIHRlbXBsYXRlIHRhZy5cbiAqIE5vdGUgaWYgdGhlIHRlbXBsYXRlIGFwcGVhcnMgaW5zaWRlIGFuIFNWRyBpdHMgdGFnTmFtZVxuICogd2lsbCBiZSBpbiBsb3dlcmNhc2UuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICovXG5cbmV4cG9ydHMuaXNUZW1wbGF0ZSA9IGZ1bmN0aW9uIChlbCkge1xuICByZXR1cm4gZWwudGFnTmFtZSAmJlxuICAgIGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RlbXBsYXRlJ1xufVxuXG4vKipcbiAqIENyZWF0ZSBhbiBcImFuY2hvclwiIGZvciBwZXJmb3JtaW5nIGRvbSBpbnNlcnRpb24vcmVtb3ZhbHMuXG4gKiBUaGlzIGlzIHVzZWQgaW4gYSBudW1iZXIgb2Ygc2NlbmFyaW9zOlxuICogLSBibG9jayBpbnN0YW5jZVxuICogLSB2LWh0bWxcbiAqIC0gdi1pZlxuICogLSBjb21wb25lbnRcbiAqIC0gcmVwZWF0XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnRlbnRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcGVyc2lzdCAtIElFIHRyYXNoZXMgZW1wdHkgdGV4dE5vZGVzIG9uXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9uZU5vZGUodHJ1ZSksIHNvIGluIGNlcnRhaW5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VzIHRoZSBhbmNob3IgbmVlZHMgdG8gYmVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbi1lbXB0eSB0byBiZSBwZXJzaXN0ZWQgaW5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlcy5cbiAqIEByZXR1cm4ge0NvbW1lbnR8VGV4dH1cbiAqL1xuXG5leHBvcnRzLmNyZWF0ZUFuY2hvciA9IGZ1bmN0aW9uIChjb250ZW50LCBwZXJzaXN0KSB7XG4gIHJldHVybiBjb25maWcuZGVidWdcbiAgICA/IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoY29udGVudClcbiAgICA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBlcnNpc3QgPyAnICcgOiAnJylcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvdXRpbC9kb20uanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgLyoqXG4gICAqIFRoZSBwcmVmaXggdG8gbG9vayBmb3Igd2hlbiBwYXJzaW5nIGRpcmVjdGl2ZXMuXG4gICAqXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuXG4gIHByZWZpeDogJ3YtJyxcblxuICAvKipcbiAgICogV2hldGhlciB0byBwcmludCBkZWJ1ZyBtZXNzYWdlcy5cbiAgICogQWxzbyBlbmFibGVzIHN0YWNrIHRyYWNlIGZvciB3YXJuaW5ncy5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuXG4gIGRlYnVnOiBmYWxzZSxcblxuICAvKipcbiAgICogV2hldGhlciB0byBzdXBwcmVzcyB3YXJuaW5ncy5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuXG4gIHNpbGVudDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgYWxsb3cgb2JzZXJ2ZXIgdG8gYWx0ZXIgZGF0YSBvYmplY3RzJ1xuICAgKiBfX3Byb3RvX18uXG4gICAqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cblxuICBwcm90bzogdHJ1ZSxcblxuICAvKipcbiAgICogV2hldGhlciB0byBwYXJzZSBtdXN0YWNoZSB0YWdzIGluIHRlbXBsYXRlcy5cbiAgICpcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuXG4gIGludGVycG9sYXRlOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHVzZSBhc3luYyByZW5kZXJpbmcuXG4gICAqL1xuXG4gIGFzeW5jOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHdhcm4gYWdhaW5zdCBlcnJvcnMgY2F1Z2h0IHdoZW4gZXZhbHVhdGluZ1xuICAgKiBleHByZXNzaW9ucy5cbiAgICovXG5cbiAgd2FybkV4cHJlc3Npb25FcnJvcnM6IHRydWUsXG5cbiAgLyoqXG4gICAqIEludGVybmFsIGZsYWcgdG8gaW5kaWNhdGUgdGhlIGRlbGltaXRlcnMgaGF2ZSBiZWVuXG4gICAqIGNoYW5nZWQuXG4gICAqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cblxuICBfZGVsaW1pdGVyc0NoYW5nZWQ6IHRydWUsXG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgYXNzZXQgdHlwZXMgdGhhdCBhIGNvbXBvbmVudCBjYW4gb3duLlxuICAgKlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuXG4gIF9hc3NldFR5cGVzOiBbXG4gICAgJ2NvbXBvbmVudCcsXG4gICAgJ2RpcmVjdGl2ZScsXG4gICAgJ2VsZW1lbnREaXJlY3RpdmUnLFxuICAgICdmaWx0ZXInLFxuICAgICd0cmFuc2l0aW9uJyxcbiAgICAncGFydGlhbCdcbiAgXSxcblxuICAvKipcbiAgICogcHJvcCBiaW5kaW5nIG1vZGVzXG4gICAqL1xuXG4gIF9wcm9wQmluZGluZ01vZGVzOiB7XG4gICAgT05FX1dBWTogMCxcbiAgICBUV09fV0FZOiAxLFxuICAgIE9ORV9USU1FOiAyXG4gIH0sXG5cbiAgLyoqXG4gICAqIE1heCBjaXJjdWxhciB1cGRhdGVzIGFsbG93ZWQgaW4gYSBiYXRjaGVyIGZsdXNoIGN5Y2xlLlxuICAgKi9cblxuICBfbWF4VXBkYXRlQ291bnQ6IDEwMFxuXG59XG5cbi8qKlxuICogSW50ZXJwb2xhdGlvbiBkZWxpbWl0ZXJzLlxuICogV2UgbmVlZCB0byBtYXJrIHRoZSBjaGFuZ2VkIGZsYWcgc28gdGhhdCB0aGUgdGV4dCBwYXJzZXJcbiAqIGtub3dzIGl0IG5lZWRzIHRvIHJlY29tcGlsZSB0aGUgcmVnZXguXG4gKlxuICogQHR5cGUge0FycmF5PFN0cmluZz59XG4gKi9cblxudmFyIGRlbGltaXRlcnMgPSBbJ3t7JywgJ319J11cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUuZXhwb3J0cywgJ2RlbGltaXRlcnMnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkZWxpbWl0ZXJzXG4gIH0sXG4gIHNldDogZnVuY3Rpb24gKHZhbCkge1xuICAgIGRlbGltaXRlcnMgPSB2YWxcbiAgICB0aGlzLl9kZWxpbWl0ZXJzQ2hhbmdlZCA9IHRydWVcbiAgfVxufSlcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvY29uZmlnLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi9pbmRleCcpXG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gZWxlbWVudCBpcyBhIGNvbXBvbmVudCwgaWYgeWVzIHJldHVybiBpdHNcbiAqIGNvbXBvbmVudCBpZC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7U3RyaW5nfHVuZGVmaW5lZH1cbiAqL1xuXG5leHBvcnRzLmNvbW1vblRhZ1JFID0gL14oZGl2fHB8c3BhbnxpbWd8YXxicnx1bHxvbHxsaXxoMXxoMnxoM3xoNHxoNXxjb2RlfHByZSkkL1xuZXhwb3J0cy5jaGVja0NvbXBvbmVudCA9IGZ1bmN0aW9uIChlbCwgb3B0aW9ucykge1xuICB2YXIgdGFnID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gIGlmICh0YWcgPT09ICdjb21wb25lbnQnKSB7XG4gICAgLy8gZHluYW1pYyBzeW50YXhcbiAgICB2YXIgZXhwID0gZWwuZ2V0QXR0cmlidXRlKCdpcycpXG4gICAgZWwucmVtb3ZlQXR0cmlidXRlKCdpcycpXG4gICAgcmV0dXJuIGV4cFxuICB9IGVsc2UgaWYgKFxuICAgICFleHBvcnRzLmNvbW1vblRhZ1JFLnRlc3QodGFnKSAmJlxuICAgIF8ucmVzb2x2ZUFzc2V0KG9wdGlvbnMsICdjb21wb25lbnRzJywgdGFnKVxuICApIHtcbiAgICByZXR1cm4gdGFnXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmQtYXNzaWduICovXG4gIH0gZWxzZSBpZiAodGFnID0gXy5hdHRyKGVsLCAnY29tcG9uZW50JykpIHtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuICAgIHJldHVybiB0YWdcbiAgfVxufVxuXG4vKipcbiAqIFNldCBhIHByb3AncyBpbml0aWFsIHZhbHVlIG9uIGEgdm0gYW5kIGl0cyBkYXRhIG9iamVjdC5cbiAqIFRoZSB2bSBtYXkgaGF2ZSBpbmhlcml0OnRydWUgc28gd2UgbmVlZCB0byBtYWtlIHN1cmVcbiAqIHdlIGRvbid0IGFjY2lkZW50YWxseSBvdmVyd3JpdGUgcGFyZW50IHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqL1xuXG5leHBvcnRzLmluaXRQcm9wID0gZnVuY3Rpb24gKHZtLCBwcm9wLCB2YWx1ZSkge1xuICBpZiAoZXhwb3J0cy5hc3NlcnRQcm9wKHByb3AsIHZhbHVlKSkge1xuICAgIHZhciBrZXkgPSBwcm9wLnBhdGhcbiAgICBpZiAoa2V5IGluIHZtKSB7XG4gICAgICBfLmRlZmluZSh2bSwga2V5LCB2YWx1ZSwgdHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdm1ba2V5XSA9IHZhbHVlXG4gICAgfVxuICAgIHZtLl9kYXRhW2tleV0gPSB2YWx1ZVxuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0IHdoZXRoZXIgYSBwcm9wIGlzIHZhbGlkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKi9cblxuZXhwb3J0cy5hc3NlcnRQcm9wID0gZnVuY3Rpb24gKHByb3AsIHZhbHVlKSB7XG4gIHZhciBvcHRpb25zID0gcHJvcC5vcHRpb25zXG4gIHZhciB0eXBlID0gb3B0aW9ucy50eXBlXG4gIHZhciB2YWxpZCA9IHRydWVcbiAgdmFyIGV4cGVjdGVkVHlwZVxuICBpZiAodHlwZSkge1xuICAgIGlmICh0eXBlID09PSBTdHJpbmcpIHtcbiAgICAgIGV4cGVjdGVkVHlwZSA9ICdzdHJpbmcnXG4gICAgICB2YWxpZCA9IHR5cGVvZiB2YWx1ZSA9PT0gZXhwZWN0ZWRUeXBlXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBOdW1iZXIpIHtcbiAgICAgIGV4cGVjdGVkVHlwZSA9ICdudW1iZXInXG4gICAgICB2YWxpZCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IEJvb2xlYW4pIHtcbiAgICAgIGV4cGVjdGVkVHlwZSA9ICdib29sZWFuJ1xuICAgICAgdmFsaWQgPSB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJ1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gRnVuY3Rpb24pIHtcbiAgICAgIGV4cGVjdGVkVHlwZSA9ICdmdW5jdGlvbidcbiAgICAgIHZhbGlkID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBPYmplY3QpIHtcbiAgICAgIGV4cGVjdGVkVHlwZSA9ICdvYmplY3QnXG4gICAgICB2YWxpZCA9IF8uaXNQbGFpbk9iamVjdCh2YWx1ZSlcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IEFycmF5KSB7XG4gICAgICBleHBlY3RlZFR5cGUgPSAnYXJyYXknXG4gICAgICB2YWxpZCA9IF8uaXNBcnJheSh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGVcbiAgICB9XG4gIH1cbiAgaWYgKCF2YWxpZCkge1xuICAgIF8ud2FybihcbiAgICAgICdJbnZhbGlkIHByb3A6IHR5cGUgY2hlY2sgZmFpbGVkIGZvciAnICtcbiAgICAgIHByb3AucGF0aCArICc9XCInICsgcHJvcC5yYXcgKyAnXCIuJyArXG4gICAgICAnIEV4cGVjdGVkICcgKyBmb3JtYXRUeXBlKGV4cGVjdGVkVHlwZSkgK1xuICAgICAgJywgZ290ICcgKyBmb3JtYXRWYWx1ZSh2YWx1ZSkgKyAnLidcbiAgICApXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgdmFyIHZhbGlkYXRvciA9IG9wdGlvbnMudmFsaWRhdG9yXG4gIGlmICh2YWxpZGF0b3IpIHtcbiAgICBpZiAoIXZhbGlkYXRvci5jYWxsKG51bGwsIHZhbHVlKSkge1xuICAgICAgXy53YXJuKFxuICAgICAgICAnSW52YWxpZCBwcm9wOiBjdXN0b20gdmFsaWRhdG9yIGNoZWNrIGZhaWxlZCBmb3IgJyArXG4gICAgICAgIHByb3AucGF0aCArICc9XCInICsgcHJvcC5yYXcgKyAnXCInXG4gICAgICApXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gZm9ybWF0VHlwZSAodmFsKSB7XG4gIHJldHVybiB2YWxcbiAgICA/IHZhbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbC5zbGljZSgxKVxuICAgIDogJ2N1c3RvbSB0eXBlJ1xufVxuXG5mdW5jdGlvbiBmb3JtYXRWYWx1ZSAodmFsKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKS5zbGljZSg4LCAtMSlcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvdXRpbC9jb21wb25lbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpXG5cbi8qKlxuICogRW5hYmxlIGRlYnVnIHV0aWxpdGllcy4gVGhlIGVuYWJsZURlYnVnKCkgZnVuY3Rpb24gYW5kXG4gKiBhbGwgXy5sb2coKSAmIF8ud2FybigpIGNhbGxzIHdpbGwgYmUgZHJvcHBlZCBpbiB0aGVcbiAqIG1pbmlmaWVkIHByb2R1Y3Rpb24gYnVpbGQuXG4gKi9cblxuZW5hYmxlRGVidWcoKVxuXG5mdW5jdGlvbiBlbmFibGVEZWJ1ZyAoKSB7XG5cbiAgdmFyIGhhc0NvbnNvbGUgPSB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCdcblxuICAvKipcbiAgICogTG9nIGEgbWVzc2FnZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1zZ1xuICAgKi9cblxuICBleHBvcnRzLmxvZyA9IGZ1bmN0aW9uIChtc2cpIHtcbiAgICBpZiAoaGFzQ29uc29sZSAmJiBjb25maWcuZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdbVnVlIGluZm9dOiAnICsgbXNnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXZSd2ZSBnb3QgYSBwcm9ibGVtIGhlcmUuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtc2dcbiAgICovXG5cbiAgZXhwb3J0cy53YXJuID0gZnVuY3Rpb24gKG1zZywgZSkge1xuICAgIGlmIChoYXNDb25zb2xlICYmICghY29uZmlnLnNpbGVudCB8fCBjb25maWcuZGVidWcpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1tWdWUgd2Fybl06ICcgKyBtc2cpXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmIChjb25maWcuZGVidWcpIHtcbiAgICAgICAgY29uc29sZS53YXJuKChlIHx8IG5ldyBFcnJvcignV2FybmluZyBTdGFjayBUcmFjZScpKS5zdGFjaylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXNzZXJ0IGFzc2V0IGV4aXN0c1xuICAgKi9cblxuICBleHBvcnRzLmFzc2VydEFzc2V0ID0gZnVuY3Rpb24gKHZhbCwgdHlwZSwgaWQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAodHlwZSA9PT0gJ2RpcmVjdGl2ZScpIHtcbiAgICAgIGlmIChpZCA9PT0gJ3dpdGgnKSB7XG4gICAgICAgIGV4cG9ydHMud2FybihcbiAgICAgICAgICAndi13aXRoIGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gXjAuMTIuMC4gJyArXG4gICAgICAgICAgJ1VzZSBwcm9wcyBpbnN0ZWFkLidcbiAgICAgICAgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChpZCA9PT0gJ2V2ZW50cycpIHtcbiAgICAgICAgZXhwb3J0cy53YXJuKFxuICAgICAgICAgICd2LWV2ZW50cyBoYXMgYmVlbiBkZXByZWNhdGVkIGluIF4wLjEyLjAuICcgK1xuICAgICAgICAgICdQYXNzIGRvd24gbWV0aG9kcyBhcyBjYWxsYmFjayBwcm9wcyBpbnN0ZWFkLidcbiAgICAgICAgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF2YWwpIHtcbiAgICAgIGV4cG9ydHMud2FybignRmFpbGVkIHRvIHJlc29sdmUgJyArIHR5cGUgKyAnOiAnICsgaWQpXG4gICAgfVxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUvc3JjL3V0aWwvZGVidWcuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKVxuXG4vKipcbiAqIEV4cG9zZSB1c2VmdWwgaW50ZXJuYWxzXG4gKi9cblxuZXhwb3J0cy51dGlsID0gX1xuZXhwb3J0cy5uZXh0VGljayA9IF8ubmV4dFRpY2tcbmV4cG9ydHMuY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJylcbmV4cG9ydHMuY29tcGlsZXIgPSByZXF1aXJlKCcuLi9jb21waWxlcicpXG5cbmV4cG9ydHMucGFyc2VycyA9IHtcbiAgcGF0aDogcmVxdWlyZSgnLi4vcGFyc2Vycy9wYXRoJyksXG4gIHRleHQ6IHJlcXVpcmUoJy4uL3BhcnNlcnMvdGV4dCcpLFxuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi4vcGFyc2Vycy90ZW1wbGF0ZScpLFxuICBkaXJlY3RpdmU6IHJlcXVpcmUoJy4uL3BhcnNlcnMvZGlyZWN0aXZlJyksXG4gIGV4cHJlc3Npb246IHJlcXVpcmUoJy4uL3BhcnNlcnMvZXhwcmVzc2lvbicpXG59XG5cbi8qKlxuICogRWFjaCBpbnN0YW5jZSBjb25zdHJ1Y3RvciwgaW5jbHVkaW5nIFZ1ZSwgaGFzIGEgdW5pcXVlXG4gKiBjaWQuIFRoaXMgZW5hYmxlcyB1cyB0byBjcmVhdGUgd3JhcHBlZCBcImNoaWxkXG4gKiBjb25zdHJ1Y3RvcnNcIiBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZSBhbmQgY2FjaGUgdGhlbS5cbiAqL1xuXG5leHBvcnRzLmNpZCA9IDBcbnZhciBjaWQgPSAxXG5cbi8qKlxuICogQ2xhc3MgaW5laHJpdGFuY2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZXh0ZW5kT3B0aW9uc1xuICovXG5cbmV4cG9ydHMuZXh0ZW5kID0gZnVuY3Rpb24gKGV4dGVuZE9wdGlvbnMpIHtcbiAgZXh0ZW5kT3B0aW9ucyA9IGV4dGVuZE9wdGlvbnMgfHwge31cbiAgdmFyIFN1cGVyID0gdGhpc1xuICB2YXIgU3ViID0gY3JlYXRlQ2xhc3MoXG4gICAgZXh0ZW5kT3B0aW9ucy5uYW1lIHx8XG4gICAgU3VwZXIub3B0aW9ucy5uYW1lIHx8XG4gICAgJ1Z1ZUNvbXBvbmVudCdcbiAgKVxuICBTdWIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTdXBlci5wcm90b3R5cGUpXG4gIFN1Yi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdWJcbiAgU3ViLmNpZCA9IGNpZCsrXG4gIFN1Yi5vcHRpb25zID0gXy5tZXJnZU9wdGlvbnMoXG4gICAgU3VwZXIub3B0aW9ucyxcbiAgICBleHRlbmRPcHRpb25zXG4gIClcbiAgU3ViWydzdXBlciddID0gU3VwZXJcbiAgLy8gYWxsb3cgZnVydGhlciBleHRlbnNpb25cbiAgU3ViLmV4dGVuZCA9IFN1cGVyLmV4dGVuZFxuICAvLyBjcmVhdGUgYXNzZXQgcmVnaXN0ZXJzLCBzbyBleHRlbmRlZCBjbGFzc2VzXG4gIC8vIGNhbiBoYXZlIHRoZWlyIHByaXZhdGUgYXNzZXRzIHRvby5cbiAgY29uZmlnLl9hc3NldFR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBTdWJbdHlwZV0gPSBTdXBlclt0eXBlXVxuICB9KVxuICByZXR1cm4gU3ViXG59XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBzdWItY2xhc3MgY29uc3RydWN0b3Igd2l0aCB0aGVcbiAqIGdpdmVuIG5hbWUuIFRoaXMgZ2l2ZXMgdXMgbXVjaCBuaWNlciBvdXRwdXQgd2hlblxuICogbG9nZ2luZyBpbnN0YW5jZXMgaW4gdGhlIGNvbnNvbGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzIChuYW1lKSB7XG4gIHJldHVybiBuZXcgRnVuY3Rpb24oXG4gICAgJ3JldHVybiBmdW5jdGlvbiAnICsgXy5jbGFzc2lmeShuYW1lKSArXG4gICAgJyAob3B0aW9ucykgeyB0aGlzLl9pbml0KG9wdGlvbnMpIH0nXG4gICkoKVxufVxuXG4vKipcbiAqIFBsdWdpbiBzeXN0ZW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGx1Z2luXG4gKi9cblxuZXhwb3J0cy51c2UgPSBmdW5jdGlvbiAocGx1Z2luKSB7XG4gIC8vIGFkZGl0aW9uYWwgcGFyYW1ldGVyc1xuICB2YXIgYXJncyA9IF8udG9BcnJheShhcmd1bWVudHMsIDEpXG4gIGFyZ3MudW5zaGlmdCh0aGlzKVxuICBpZiAodHlwZW9mIHBsdWdpbi5pbnN0YWxsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcGx1Z2luLmluc3RhbGwuYXBwbHkocGx1Z2luLCBhcmdzKVxuICB9IGVsc2Uge1xuICAgIHBsdWdpbi5hcHBseShudWxsLCBhcmdzKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogQ3JlYXRlIGFzc2V0IHJlZ2lzdHJhdGlvbiBtZXRob2RzIHdpdGggdGhlIGZvbGxvd2luZ1xuICogc2lnbmF0dXJlOlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHBhcmFtIHsqfSBkZWZpbml0aW9uXG4gKi9cblxuY29uZmlnLl9hc3NldFR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgZXhwb3J0c1t0eXBlXSA9IGZ1bmN0aW9uIChpZCwgZGVmaW5pdGlvbikge1xuICAgIGlmICghZGVmaW5pdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlID09PSAnY29tcG9uZW50JyAmJlxuICAgICAgICBfLmlzUGxhaW5PYmplY3QoZGVmaW5pdGlvbilcbiAgICAgICkge1xuICAgICAgICBkZWZpbml0aW9uLm5hbWUgPSBpZFxuICAgICAgICBkZWZpbml0aW9uID0gXy5WdWUuZXh0ZW5kKGRlZmluaXRpb24pXG4gICAgICB9XG4gICAgICB0aGlzLm9wdGlvbnNbdHlwZSArICdzJ11baWRdID0gZGVmaW5pdGlvblxuICAgIH1cbiAgfVxufSlcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvYXBpL2dsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxuXG5fLmV4dGVuZChleHBvcnRzLCByZXF1aXJlKCcuL2NvbXBpbGUnKSlcbl8uZXh0ZW5kKGV4cG9ydHMsIHJlcXVpcmUoJy4vdHJhbnNjbHVkZScpKVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlL3NyYy9jb21waWxlci9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIGNvbXBpbGVQcm9wcyA9IHJlcXVpcmUoJy4vY29tcGlsZS1wcm9wcycpXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJylcbnZhciB0ZXh0UGFyc2VyID0gcmVxdWlyZSgnLi4vcGFyc2Vycy90ZXh0JylcbnZhciBkaXJQYXJzZXIgPSByZXF1aXJlKCcuLi9wYXJzZXJzL2RpcmVjdGl2ZScpXG52YXIgdGVtcGxhdGVQYXJzZXIgPSByZXF1aXJlKCcuLi9wYXJzZXJzL3RlbXBsYXRlJylcbnZhciByZXNvbHZlQXNzZXQgPSBfLnJlc29sdmVBc3NldFxudmFyIGNvbXBvbmVudERlZiA9IHJlcXVpcmUoJy4uL2RpcmVjdGl2ZXMvY29tcG9uZW50JylcblxuLy8gdGVybWluYWwgZGlyZWN0aXZlc1xudmFyIHRlcm1pbmFsRGlyZWN0aXZlcyA9IFtcbiAgJ3JlcGVhdCcsXG4gICdpZidcbl1cblxuLyoqXG4gKiBDb21waWxlIGEgdGVtcGxhdGUgYW5kIHJldHVybiBhIHJldXNhYmxlIGNvbXBvc2l0ZSBsaW5rXG4gKiBmdW5jdGlvbiwgd2hpY2ggcmVjdXJzaXZlbHkgY29udGFpbnMgbW9yZSBsaW5rIGZ1bmN0aW9uc1xuICogaW5zaWRlLiBUaGlzIHRvcCBsZXZlbCBjb21waWxlIGZ1bmN0aW9uIHdvdWxkIG5vcm1hbGx5XG4gKiBiZSBjYWxsZWQgb24gaW5zdGFuY2Ugcm9vdCBub2RlcywgYnV0IGNhbiBhbHNvIGJlIHVzZWRcbiAqIGZvciBwYXJ0aWFsIGNvbXBpbGF0aW9uIGlmIHRoZSBwYXJ0aWFsIGFyZ3VtZW50IGlzIHRydWUuXG4gKlxuICogVGhlIHJldHVybmVkIGNvbXBvc2l0ZSBsaW5rIGZ1bmN0aW9uLCB3aGVuIGNhbGxlZCwgd2lsbFxuICogcmV0dXJuIGFuIHVubGluayBmdW5jdGlvbiB0aGF0IHRlYXJzZG93biBhbGwgZGlyZWN0aXZlc1xuICogY3JlYXRlZCBkdXJpbmcgdGhlIGxpbmtpbmcgcGhhc2UuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtCb29sZWFufSBwYXJ0aWFsXG4gKiBAcGFyYW0ge1Z1ZX0gW2hvc3RdIC0gaG9zdCB2bSBvZiB0cmFuc2NsdWRlZCBjb250ZW50XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnRzLmNvbXBpbGUgPSBmdW5jdGlvbiAoZWwsIG9wdGlvbnMsIHBhcnRpYWwsIGhvc3QpIHtcbiAgLy8gbGluayBmdW5jdGlvbiBmb3IgdGhlIG5vZGUgaXRzZWxmLlxuICB2YXIgbm9kZUxpbmtGbiA9IHBhcnRpYWwgfHwgIW9wdGlvbnMuX2FzQ29tcG9uZW50XG4gICAgPyBjb21waWxlTm9kZShlbCwgb3B0aW9ucylcbiAgICA6IG51bGxcbiAgLy8gbGluayBmdW5jdGlvbiBmb3IgdGhlIGNoaWxkTm9kZXNcbiAgdmFyIGNoaWxkTGlua0ZuID1cbiAgICAhKG5vZGVMaW5rRm4gJiYgbm9kZUxpbmtGbi50ZXJtaW5hbCkgJiZcbiAgICBlbC50YWdOYW1lICE9PSAnU0NSSVBUJyAmJlxuICAgIGVsLmhhc0NoaWxkTm9kZXMoKVxuICAgICAgPyBjb21waWxlTm9kZUxpc3QoZWwuY2hpbGROb2Rlcywgb3B0aW9ucylcbiAgICAgIDogbnVsbFxuXG4gIC8qKlxuICAgKiBBIGNvbXBvc2l0ZSBsaW5rZXIgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGEgYWxyZWFkeVxuICAgKiBjb21waWxlZCBwaWVjZSBvZiBET00sIHdoaWNoIGluc3RhbnRpYXRlcyBhbGwgZGlyZWN0aXZlXG4gICAqIGluc3RhbmNlcy5cbiAgICpcbiAgICogQHBhcmFtIHtWdWV9IHZtXG4gICAqIEBwYXJhbSB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fSBlbFxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbnx1bmRlZmluZWR9XG4gICAqL1xuXG4gIHJldHVybiBmdW5jdGlvbiBjb21wb3NpdGVMaW5rRm4gKHZtLCBlbCkge1xuICAgIC8vIGNhY2hlIGNoaWxkTm9kZXMgYmVmb3JlIGxpbmtpbmcgcGFyZW50LCBmaXggIzY1N1xuICAgIHZhciBjaGlsZE5vZGVzID0gXy50b0FycmF5KGVsLmNoaWxkTm9kZXMpXG4gICAgLy8gbGlua1xuICAgIHZhciBkaXJzID0gbGlua0FuZENhcHR1cmUoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG5vZGVMaW5rRm4pIG5vZGVMaW5rRm4odm0sIGVsLCBob3N0KVxuICAgICAgaWYgKGNoaWxkTGlua0ZuKSBjaGlsZExpbmtGbih2bSwgY2hpbGROb2RlcywgaG9zdClcbiAgICB9LCB2bSlcbiAgICByZXR1cm4gbWFrZVVubGlua0ZuKHZtLCBkaXJzKVxuICB9XG59XG5cbi8qKlxuICogQXBwbHkgYSBsaW5rZXIgdG8gYSB2bS9lbGVtZW50IHBhaXIgYW5kIGNhcHR1cmUgdGhlXG4gKiBkaXJlY3RpdmVzIGNyZWF0ZWQgZHVyaW5nIHRoZSBwcm9jZXNzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxpbmtlclxuICogQHBhcmFtIHtWdWV9IHZtXG4gKi9cblxuZnVuY3Rpb24gbGlua0FuZENhcHR1cmUgKGxpbmtlciwgdm0pIHtcbiAgdmFyIG9yaWdpbmFsRGlyQ291bnQgPSB2bS5fZGlyZWN0aXZlcy5sZW5ndGhcbiAgbGlua2VyKClcbiAgcmV0dXJuIHZtLl9kaXJlY3RpdmVzLnNsaWNlKG9yaWdpbmFsRGlyQ291bnQpXG59XG5cbi8qKlxuICogTGlua2VyIGZ1bmN0aW9ucyByZXR1cm4gYW4gdW5saW5rIGZ1bmN0aW9uIHRoYXRcbiAqIHRlYXJzZG93biBhbGwgZGlyZWN0aXZlcyBpbnN0YW5jZXMgZ2VuZXJhdGVkIGR1cmluZ1xuICogdGhlIHByb2Nlc3MuXG4gKlxuICogV2UgY3JlYXRlIHVubGluayBmdW5jdGlvbnMgd2l0aCBvbmx5IHRoZSBuZWNlc3NhcnlcbiAqIGluZm9ybWF0aW9uIHRvIGF2b2lkIHJldGFpbmluZyBhZGRpdGlvbmFsIGNsb3N1cmVzLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtBcnJheX0gZGlyc1xuICogQHBhcmFtIHtWdWV9IFtjb250ZXh0XVxuICogQHBhcmFtIHtBcnJheX0gW2NvbnRleHREaXJzXVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZnVuY3Rpb24gbWFrZVVubGlua0ZuICh2bSwgZGlycywgY29udGV4dCwgY29udGV4dERpcnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVubGluayAoZGVzdHJveWluZykge1xuICAgIHRlYXJkb3duRGlycyh2bSwgZGlycywgZGVzdHJveWluZylcbiAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0RGlycykge1xuICAgICAgdGVhcmRvd25EaXJzKGNvbnRleHQsIGNvbnRleHREaXJzKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRlYXJkb3duIHBhcnRpYWwgbGlua2VkIGRpcmVjdGl2ZXMuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0FycmF5fSBkaXJzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGRlc3Ryb3lpbmdcbiAqL1xuXG5mdW5jdGlvbiB0ZWFyZG93bkRpcnMgKHZtLCBkaXJzLCBkZXN0cm95aW5nKSB7XG4gIHZhciBpID0gZGlycy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIGRpcnNbaV0uX3RlYXJkb3duKClcbiAgICBpZiAoIWRlc3Ryb3lpbmcpIHtcbiAgICAgIHZtLl9kaXJlY3RpdmVzLiRyZW1vdmUoZGlyc1tpXSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDb21waWxlIGxpbmsgcHJvcHMgb24gYW4gaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZXhwb3J0cy5jb21waWxlQW5kTGlua1Byb3BzID0gZnVuY3Rpb24gKHZtLCBlbCwgcHJvcHMpIHtcbiAgdmFyIHByb3BzTGlua0ZuID0gY29tcGlsZVByb3BzKGVsLCBwcm9wcylcbiAgdmFyIHByb3BEaXJzID0gbGlua0FuZENhcHR1cmUoZnVuY3Rpb24gKCkge1xuICAgIHByb3BzTGlua0ZuKHZtLCBudWxsKVxuICB9LCB2bSlcbiAgcmV0dXJuIG1ha2VVbmxpbmtGbih2bSwgcHJvcERpcnMpXG59XG5cbi8qKlxuICogQ29tcGlsZSB0aGUgcm9vdCBlbGVtZW50IG9mIGFuIGluc3RhbmNlLlxuICpcbiAqIDEuIGF0dHJzIG9uIGNvbnRleHQgY29udGFpbmVyIChjb250ZXh0IHNjb3BlKVxuICogMi4gYXR0cnMgb24gdGhlIGNvbXBvbmVudCB0ZW1wbGF0ZSByb290IG5vZGUsIGlmXG4gKiAgICByZXBsYWNlOnRydWUgKGNoaWxkIHNjb3BlKVxuICpcbiAqIElmIHRoaXMgaXMgYSBibG9jayBpbnN0YW5jZSwgd2Ugb25seSBuZWVkIHRvIGNvbXBpbGUgMS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGRvZXMgY29tcGlsZSBhbmQgbGluayBhdCB0aGUgc2FtZSB0aW1lLFxuICogc2luY2Ugcm9vdCBsaW5rZXJzIGNhbiBub3QgYmUgcmV1c2VkLiBJdCByZXR1cm5zIHRoZVxuICogdW5saW5rIGZ1bmN0aW9uIGZvciBwb3RlbnRpYWwgY29udGV4dCBkaXJlY3RpdmVzIG9uIHRoZVxuICogY29udGFpbmVyLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmV4cG9ydHMuY29tcGlsZUFuZExpbmtSb290ID0gZnVuY3Rpb24gKHZtLCBlbCwgb3B0aW9ucykge1xuICB2YXIgY29udGFpbmVyQXR0cnMgPSBvcHRpb25zLl9jb250YWluZXJBdHRyc1xuICB2YXIgcmVwbGFjZXJBdHRycyA9IG9wdGlvbnMuX3JlcGxhY2VyQXR0cnNcbiAgdmFyIGNvbnRleHRMaW5rRm4sIHJlcGxhY2VyTGlua0ZuXG5cbiAgLy8gb25seSBuZWVkIHRvIGNvbXBpbGUgb3RoZXIgYXR0cmlidXRlcyBmb3JcbiAgLy8gbm9uLWJsb2NrIGluc3RhbmNlc1xuICBpZiAoZWwubm9kZVR5cGUgIT09IDExKSB7XG4gICAgLy8gZm9yIGNvbXBvbmVudHMsIGNvbnRhaW5lciBhbmQgcmVwbGFjZXIgbmVlZCB0byBiZVxuICAgIC8vIGNvbXBpbGVkIHNlcGFyYXRlbHkgYW5kIGxpbmtlZCBpbiBkaWZmZXJlbnQgc2NvcGVzLlxuICAgIGlmIChvcHRpb25zLl9hc0NvbXBvbmVudCkge1xuICAgICAgLy8gMi4gY29udGFpbmVyIGF0dHJpYnV0ZXNcbiAgICAgIGlmIChjb250YWluZXJBdHRycykge1xuICAgICAgICBjb250ZXh0TGlua0ZuID0gY29tcGlsZURpcmVjdGl2ZXMoY29udGFpbmVyQXR0cnMsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgICBpZiAocmVwbGFjZXJBdHRycykge1xuICAgICAgICAvLyAzLiByZXBsYWNlciBhdHRyaWJ1dGVzXG4gICAgICAgIHJlcGxhY2VyTGlua0ZuID0gY29tcGlsZURpcmVjdGl2ZXMocmVwbGFjZXJBdHRycywgb3B0aW9ucylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm9uLWNvbXBvbmVudCwganVzdCBjb21waWxlIGFzIGEgbm9ybWFsIGVsZW1lbnQuXG4gICAgICByZXBsYWNlckxpbmtGbiA9IGNvbXBpbGVEaXJlY3RpdmVzKGVsLCBvcHRpb25zKVxuICAgIH1cbiAgfVxuXG4gIC8vIGxpbmsgY29udGV4dCBzY29wZSBkaXJzXG4gIHZhciBjb250ZXh0ID0gdm0uX2NvbnRleHRcbiAgdmFyIGNvbnRleHREaXJzXG4gIGlmIChjb250ZXh0ICYmIGNvbnRleHRMaW5rRm4pIHtcbiAgICBjb250ZXh0RGlycyA9IGxpbmtBbmRDYXB0dXJlKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnRleHRMaW5rRm4oY29udGV4dCwgZWwpXG4gICAgfSwgY29udGV4dClcbiAgfVxuXG4gIC8vIGxpbmsgc2VsZlxuICB2YXIgc2VsZkRpcnMgPSBsaW5rQW5kQ2FwdHVyZShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJlcGxhY2VyTGlua0ZuKSByZXBsYWNlckxpbmtGbih2bSwgZWwpXG4gIH0sIHZtKVxuXG4gIC8vIHJldHVybiB0aGUgdW5saW5rIGZ1bmN0aW9uIHRoYXQgdGVhcnNkb3duIGNvbnRleHRcbiAgLy8gY29udGFpbmVyIGRpcmVjdGl2ZXMuXG4gIHJldHVybiBtYWtlVW5saW5rRm4odm0sIHNlbGZEaXJzLCBjb250ZXh0LCBjb250ZXh0RGlycylcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgbm9kZSBhbmQgcmV0dXJuIGEgbm9kZUxpbmtGbiBiYXNlZCBvbiB0aGVcbiAqIG5vZGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtGdW5jdGlvbnxudWxsfVxuICovXG5cbmZ1bmN0aW9uIGNvbXBpbGVOb2RlIChub2RlLCBvcHRpb25zKSB7XG4gIHZhciB0eXBlID0gbm9kZS5ub2RlVHlwZVxuICBpZiAodHlwZSA9PT0gMSAmJiBub2RlLnRhZ05hbWUgIT09ICdTQ1JJUFQnKSB7XG4gICAgcmV0dXJuIGNvbXBpbGVFbGVtZW50KG5vZGUsIG9wdGlvbnMpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gMyAmJiBjb25maWcuaW50ZXJwb2xhdGUgJiYgbm9kZS5kYXRhLnRyaW0oKSkge1xuICAgIHJldHVybiBjb21waWxlVGV4dE5vZGUobm9kZSwgb3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbi8qKlxuICogQ29tcGlsZSBhbiBlbGVtZW50IGFuZCByZXR1cm4gYSBub2RlTGlua0ZuLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtGdW5jdGlvbnxudWxsfVxuICovXG5cbmZ1bmN0aW9uIGNvbXBpbGVFbGVtZW50IChlbCwgb3B0aW9ucykge1xuICB2YXIgbGlua0ZuXG4gIHZhciBoYXNBdHRycyA9IGVsLmhhc0F0dHJpYnV0ZXMoKVxuICAvLyBjaGVjayB0ZXJtaW5hbCBkaXJlY3RpdmVzIChyZXBlYXQgJiBpZilcbiAgaWYgKGhhc0F0dHJzKSB7XG4gICAgbGlua0ZuID0gY2hlY2tUZXJtaW5hbERpcmVjdGl2ZXMoZWwsIG9wdGlvbnMpXG4gIH1cbiAgLy8gY2hlY2sgZWxlbWVudCBkaXJlY3RpdmVzXG4gIGlmICghbGlua0ZuKSB7XG4gICAgbGlua0ZuID0gY2hlY2tFbGVtZW50RGlyZWN0aXZlcyhlbCwgb3B0aW9ucylcbiAgfVxuICAvLyBjaGVjayBjb21wb25lbnRcbiAgaWYgKCFsaW5rRm4pIHtcbiAgICBsaW5rRm4gPSBjaGVja0NvbXBvbmVudChlbCwgb3B0aW9ucylcbiAgfVxuICAvLyBub3JtYWwgZGlyZWN0aXZlc1xuICBpZiAoIWxpbmtGbiAmJiBoYXNBdHRycykge1xuICAgIGxpbmtGbiA9IGNvbXBpbGVEaXJlY3RpdmVzKGVsLCBvcHRpb25zKVxuICB9XG4gIC8vIGlmIHRoZSBlbGVtZW50IGlzIGEgdGV4dGFyZWEsIHdlIG5lZWQgdG8gaW50ZXJwb2xhdGVcbiAgLy8gaXRzIGNvbnRlbnQgb24gaW5pdGlhbCByZW5kZXIuXG4gIGlmIChlbC50YWdOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgdmFyIHJlYWxMaW5rRm4gPSBsaW5rRm5cbiAgICBsaW5rRm4gPSBmdW5jdGlvbiAodm0sIGVsKSB7XG4gICAgICBlbC52YWx1ZSA9IHZtLiRpbnRlcnBvbGF0ZShlbC52YWx1ZSlcbiAgICAgIGlmIChyZWFsTGlua0ZuKSByZWFsTGlua0ZuKHZtLCBlbClcbiAgICB9XG4gICAgbGlua0ZuLnRlcm1pbmFsID0gdHJ1ZVxuICB9XG4gIHJldHVybiBsaW5rRm5cbn1cblxuLyoqXG4gKiBDb21waWxlIGEgdGV4dE5vZGUgYW5kIHJldHVybiBhIG5vZGVMaW5rRm4uXG4gKlxuICogQHBhcmFtIHtUZXh0Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufG51bGx9IHRleHROb2RlTGlua0ZuXG4gKi9cblxuZnVuY3Rpb24gY29tcGlsZVRleHROb2RlIChub2RlLCBvcHRpb25zKSB7XG4gIHZhciB0b2tlbnMgPSB0ZXh0UGFyc2VyLnBhcnNlKG5vZGUuZGF0YSlcbiAgaWYgKCF0b2tlbnMpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIHZhciBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gIHZhciBlbCwgdG9rZW5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdG9rZW4gPSB0b2tlbnNbaV1cbiAgICBlbCA9IHRva2VuLnRhZ1xuICAgICAgPyBwcm9jZXNzVGV4dFRva2VuKHRva2VuLCBvcHRpb25zKVxuICAgICAgOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0b2tlbi52YWx1ZSlcbiAgICBmcmFnLmFwcGVuZENoaWxkKGVsKVxuICB9XG4gIHJldHVybiBtYWtlVGV4dE5vZGVMaW5rRm4odG9rZW5zLCBmcmFnLCBvcHRpb25zKVxufVxuXG4vKipcbiAqIFByb2Nlc3MgYSBzaW5nbGUgdGV4dCB0b2tlbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdG9rZW5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtOb2RlfVxuICovXG5cbmZ1bmN0aW9uIHByb2Nlc3NUZXh0VG9rZW4gKHRva2VuLCBvcHRpb25zKSB7XG4gIHZhciBlbFxuICBpZiAodG9rZW4ub25lVGltZSkge1xuICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodG9rZW4udmFsdWUpXG4gIH0gZWxzZSB7XG4gICAgaWYgKHRva2VuLmh0bWwpIHtcbiAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgndi1odG1sJylcbiAgICAgIHNldFRva2VuVHlwZSgnaHRtbCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElFIHdpbGwgY2xlYW4gdXAgZW1wdHkgdGV4dE5vZGVzIGR1cmluZ1xuICAgICAgLy8gZnJhZy5jbG9uZU5vZGUodHJ1ZSksIHNvIHdlIGhhdmUgdG8gZ2l2ZSBpdFxuICAgICAgLy8gc29tZXRoaW5nIGhlcmUuLi5cbiAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyAnKVxuICAgICAgc2V0VG9rZW5UeXBlKCd0ZXh0JylcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc2V0VG9rZW5UeXBlICh0eXBlKSB7XG4gICAgdG9rZW4udHlwZSA9IHR5cGVcbiAgICB0b2tlbi5kZWYgPSByZXNvbHZlQXNzZXQob3B0aW9ucywgJ2RpcmVjdGl2ZXMnLCB0eXBlKVxuICAgIHRva2VuLmRlc2NyaXB0b3IgPSBkaXJQYXJzZXIucGFyc2UodG9rZW4udmFsdWUpWzBdXG4gIH1cbiAgcmV0dXJuIGVsXG59XG5cbi8qKlxuICogQnVpbGQgYSBmdW5jdGlvbiB0aGF0IHByb2Nlc3NlcyBhIHRleHROb2RlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gdG9rZW5zXG4gKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IGZyYWdcbiAqL1xuXG5mdW5jdGlvbiBtYWtlVGV4dE5vZGVMaW5rRm4gKHRva2VucywgZnJhZykge1xuICByZXR1cm4gZnVuY3Rpb24gdGV4dE5vZGVMaW5rRm4gKHZtLCBlbCkge1xuICAgIHZhciBmcmFnQ2xvbmUgPSBmcmFnLmNsb25lTm9kZSh0cnVlKVxuICAgIHZhciBjaGlsZE5vZGVzID0gXy50b0FycmF5KGZyYWdDbG9uZS5jaGlsZE5vZGVzKVxuICAgIHZhciB0b2tlbiwgdmFsdWUsIG5vZGVcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRva2Vucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRva2VuID0gdG9rZW5zW2ldXG4gICAgICB2YWx1ZSA9IHRva2VuLnZhbHVlXG4gICAgICBpZiAodG9rZW4udGFnKSB7XG4gICAgICAgIG5vZGUgPSBjaGlsZE5vZGVzW2ldXG4gICAgICAgIGlmICh0b2tlbi5vbmVUaW1lKSB7XG4gICAgICAgICAgdmFsdWUgPSB2bS4kZXZhbCh2YWx1ZSlcbiAgICAgICAgICBpZiAodG9rZW4uaHRtbCkge1xuICAgICAgICAgICAgXy5yZXBsYWNlKG5vZGUsIHRlbXBsYXRlUGFyc2VyLnBhcnNlKHZhbHVlLCB0cnVlKSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5kYXRhID0gdmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdm0uX2JpbmREaXIodG9rZW4udHlwZSwgbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICB0b2tlbi5kZXNjcmlwdG9yLCB0b2tlbi5kZWYpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXy5yZXBsYWNlKGVsLCBmcmFnQ2xvbmUpXG4gIH1cbn1cblxuLyoqXG4gKiBDb21waWxlIGEgbm9kZSBsaXN0IGFuZCByZXR1cm4gYSBjaGlsZExpbmtGbi5cbiAqXG4gKiBAcGFyYW0ge05vZGVMaXN0fSBub2RlTGlzdFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBjb21waWxlTm9kZUxpc3QgKG5vZGVMaXN0LCBvcHRpb25zKSB7XG4gIHZhciBsaW5rRm5zID0gW11cbiAgdmFyIG5vZGVMaW5rRm4sIGNoaWxkTGlua0ZuLCBub2RlXG4gIGZvciAodmFyIGkgPSAwLCBsID0gbm9kZUxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbm9kZSA9IG5vZGVMaXN0W2ldXG4gICAgbm9kZUxpbmtGbiA9IGNvbXBpbGVOb2RlKG5vZGUsIG9wdGlvbnMpXG4gICAgY2hpbGRMaW5rRm4gPVxuICAgICAgIShub2RlTGlua0ZuICYmIG5vZGVMaW5rRm4udGVybWluYWwpICYmXG4gICAgICBub2RlLnRhZ05hbWUgIT09ICdTQ1JJUFQnICYmXG4gICAgICBub2RlLmhhc0NoaWxkTm9kZXMoKVxuICAgICAgICA/IGNvbXBpbGVOb2RlTGlzdChub2RlLmNoaWxkTm9kZXMsIG9wdGlvbnMpXG4gICAgICAgIDogbnVsbFxuICAgIGxpbmtGbnMucHVzaChub2RlTGlua0ZuLCBjaGlsZExpbmtGbilcbiAgfVxuICByZXR1cm4gbGlua0Zucy5sZW5ndGhcbiAgICA/IG1ha2VDaGlsZExpbmtGbihsaW5rRm5zKVxuICAgIDogbnVsbFxufVxuXG4vKipcbiAqIE1ha2UgYSBjaGlsZCBsaW5rIGZ1bmN0aW9uIGZvciBhIG5vZGUncyBjaGlsZE5vZGVzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8RnVuY3Rpb24+fSBsaW5rRm5zXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gY2hpbGRMaW5rRm5cbiAqL1xuXG5mdW5jdGlvbiBtYWtlQ2hpbGRMaW5rRm4gKGxpbmtGbnMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNoaWxkTGlua0ZuICh2bSwgbm9kZXMsIGhvc3QpIHtcbiAgICB2YXIgbm9kZSwgbm9kZUxpbmtGbiwgY2hpbGRyZW5MaW5rRm5cbiAgICBmb3IgKHZhciBpID0gMCwgbiA9IDAsIGwgPSBsaW5rRm5zLmxlbmd0aDsgaSA8IGw7IG4rKykge1xuICAgICAgbm9kZSA9IG5vZGVzW25dXG4gICAgICBub2RlTGlua0ZuID0gbGlua0Zuc1tpKytdXG4gICAgICBjaGlsZHJlbkxpbmtGbiA9IGxpbmtGbnNbaSsrXVxuICAgICAgLy8gY2FjaGUgY2hpbGROb2RlcyBiZWZvcmUgbGlua2luZyBwYXJlbnQsIGZpeCAjNjU3XG4gICAgICB2YXIgY2hpbGROb2RlcyA9IF8udG9BcnJheShub2RlLmNoaWxkTm9kZXMpXG4gICAgICBpZiAobm9kZUxpbmtGbikge1xuICAgICAgICBub2RlTGlua0ZuKHZtLCBub2RlLCBob3N0KVxuICAgICAgfVxuICAgICAgaWYgKGNoaWxkcmVuTGlua0ZuKSB7XG4gICAgICAgIGNoaWxkcmVuTGlua0ZuKHZtLCBjaGlsZE5vZGVzLCBob3N0KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGZvciBlbGVtZW50IGRpcmVjdGl2ZXMgKGN1c3RvbSBlbGVtZW50cyB0aGF0IHNob3VsZFxuICogYmUgcmVzb3ZsZWQgYXMgdGVybWluYWwgZGlyZWN0aXZlcykuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBjaGVja0VsZW1lbnREaXJlY3RpdmVzIChlbCwgb3B0aW9ucykge1xuICB2YXIgdGFnID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gIGlmIChfLmNvbW1vblRhZ1JFLnRlc3QodGFnKSkgcmV0dXJuXG4gIHZhciBkZWYgPSByZXNvbHZlQXNzZXQob3B0aW9ucywgJ2VsZW1lbnREaXJlY3RpdmVzJywgdGFnKVxuICBpZiAoZGVmKSB7XG4gICAgcmV0dXJuIG1ha2VUZXJtaW5hbE5vZGVMaW5rRm4oZWwsIHRhZywgJycsIG9wdGlvbnMsIGRlZilcbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaXMgYSBjb21wb25lbnQuIElmIHllcywgcmV0dXJuXG4gKiBhIGNvbXBvbmVudCBsaW5rIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGhhc0F0dHJzXG4gKiBAcmV0dXJuIHtGdW5jdGlvbnx1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gY2hlY2tDb21wb25lbnQgKGVsLCBvcHRpb25zLCBoYXNBdHRycykge1xuICB2YXIgY29tcG9uZW50SWQgPSBfLmNoZWNrQ29tcG9uZW50KGVsLCBvcHRpb25zLCBoYXNBdHRycylcbiAgaWYgKGNvbXBvbmVudElkKSB7XG4gICAgdmFyIGNvbXBvbmVudExpbmtGbiA9IGZ1bmN0aW9uICh2bSwgZWwsIGhvc3QpIHtcbiAgICAgIHZtLl9iaW5kRGlyKCdjb21wb25lbnQnLCBlbCwge1xuICAgICAgICBleHByZXNzaW9uOiBjb21wb25lbnRJZFxuICAgICAgfSwgY29tcG9uZW50RGVmLCBob3N0KVxuICAgIH1cbiAgICBjb21wb25lbnRMaW5rRm4udGVybWluYWwgPSB0cnVlXG4gICAgcmV0dXJuIGNvbXBvbmVudExpbmtGblxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgYW4gZWxlbWVudCBmb3IgdGVybWluYWwgZGlyZWN0aXZlcyBpbiBmaXhlZCBvcmRlci5cbiAqIElmIGl0IGZpbmRzIG9uZSwgcmV0dXJuIGEgdGVybWluYWwgbGluayBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259IHRlcm1pbmFsTGlua0ZuXG4gKi9cblxuZnVuY3Rpb24gY2hlY2tUZXJtaW5hbERpcmVjdGl2ZXMgKGVsLCBvcHRpb25zKSB7XG4gIGlmIChfLmF0dHIoZWwsICdwcmUnKSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBza2lwXG4gIH1cbiAgdmFyIHZhbHVlLCBkaXJOYW1lXG4gIGZvciAodmFyIGkgPSAwLCBsID0gdGVybWluYWxEaXJlY3RpdmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGRpck5hbWUgPSB0ZXJtaW5hbERpcmVjdGl2ZXNbaV1cbiAgICBpZiAoKHZhbHVlID0gXy5hdHRyKGVsLCBkaXJOYW1lKSkgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBtYWtlVGVybWluYWxOb2RlTGlua0ZuKGVsLCBkaXJOYW1lLCB2YWx1ZSwgb3B0aW9ucylcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2tpcCAoKSB7fVxuc2tpcC50ZXJtaW5hbCA9IHRydWVcblxuLyoqXG4gKiBCdWlsZCBhIG5vZGUgbGluayBmdW5jdGlvbiBmb3IgYSB0ZXJtaW5hbCBkaXJlY3RpdmUuXG4gKiBBIHRlcm1pbmFsIGxpbmsgZnVuY3Rpb24gdGVybWluYXRlcyB0aGUgY3VycmVudFxuICogY29tcGlsYXRpb24gcmVjdXJzaW9uIGFuZCBoYW5kbGVzIGNvbXBpbGF0aW9uIG9mIHRoZVxuICogc3VidHJlZSBpbiB0aGUgZGlyZWN0aXZlLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBkaXJOYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gW2RlZl1cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSB0ZXJtaW5hbExpbmtGblxuICovXG5cbmZ1bmN0aW9uIG1ha2VUZXJtaW5hbE5vZGVMaW5rRm4gKGVsLCBkaXJOYW1lLCB2YWx1ZSwgb3B0aW9ucywgZGVmKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZGlyUGFyc2VyLnBhcnNlKHZhbHVlKVswXVxuICAvLyBubyBuZWVkIHRvIGNhbGwgcmVzb2x2ZUFzc2V0IHNpbmNlIHRlcm1pbmFsIGRpcmVjdGl2ZXNcbiAgLy8gYXJlIGFsd2F5cyBpbnRlcm5hbFxuICBkZWYgPSBkZWYgfHwgb3B0aW9ucy5kaXJlY3RpdmVzW2Rpck5hbWVdXG4gIHZhciBmbiA9IGZ1bmN0aW9uIHRlcm1pbmFsTm9kZUxpbmtGbiAodm0sIGVsLCBob3N0KSB7XG4gICAgdm0uX2JpbmREaXIoZGlyTmFtZSwgZWwsIGRlc2NyaXB0b3IsIGRlZiwgaG9zdClcbiAgfVxuICBmbi50ZXJtaW5hbCA9IHRydWVcbiAgcmV0dXJuIGZuXG59XG5cbi8qKlxuICogQ29tcGlsZSB0aGUgZGlyZWN0aXZlcyBvbiBhbiBlbGVtZW50IGFuZCByZXR1cm4gYSBsaW5rZXIuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gZWxPckF0dHJzXG4gKiAgICAgICAgLSBjb3VsZCBiZSBhbiBvYmplY3Qgb2YgYWxyZWFkeS1leHRyYWN0ZWRcbiAqICAgICAgICAgIGNvbnRhaW5lciBhdHRyaWJ1dGVzLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmZ1bmN0aW9uIGNvbXBpbGVEaXJlY3RpdmVzIChlbE9yQXR0cnMsIG9wdGlvbnMpIHtcbiAgdmFyIGF0dHJzID0gXy5pc1BsYWluT2JqZWN0KGVsT3JBdHRycylcbiAgICA/IG1hcFRvTGlzdChlbE9yQXR0cnMpXG4gICAgOiBlbE9yQXR0cnMuYXR0cmlidXRlc1xuICB2YXIgaSA9IGF0dHJzLmxlbmd0aFxuICB2YXIgZGlycyA9IFtdXG4gIHZhciBhdHRyLCBuYW1lLCB2YWx1ZSwgZGlyLCBkaXJOYW1lLCBkaXJEZWZcbiAgd2hpbGUgKGktLSkge1xuICAgIGF0dHIgPSBhdHRyc1tpXVxuICAgIG5hbWUgPSBhdHRyLm5hbWVcbiAgICB2YWx1ZSA9IGF0dHIudmFsdWVcbiAgICBpZiAobmFtZS5pbmRleE9mKGNvbmZpZy5wcmVmaXgpID09PSAwKSB7XG4gICAgICBkaXJOYW1lID0gbmFtZS5zbGljZShjb25maWcucHJlZml4Lmxlbmd0aClcbiAgICAgIGRpckRlZiA9IHJlc29sdmVBc3NldChvcHRpb25zLCAnZGlyZWN0aXZlcycsIGRpck5hbWUpXG4gICAgICBfLmFzc2VydEFzc2V0KGRpckRlZiwgJ2RpcmVjdGl2ZScsIGRpck5hbWUpXG4gICAgICBpZiAoZGlyRGVmKSB7XG4gICAgICAgIGRpcnMucHVzaCh7XG4gICAgICAgICAgbmFtZTogZGlyTmFtZSxcbiAgICAgICAgICBkZXNjcmlwdG9yczogZGlyUGFyc2VyLnBhcnNlKHZhbHVlKSxcbiAgICAgICAgICBkZWY6IGRpckRlZlxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29uZmlnLmludGVycG9sYXRlKSB7XG4gICAgICBkaXIgPSBjb2xsZWN0QXR0ckRpcmVjdGl2ZShuYW1lLCB2YWx1ZSwgb3B0aW9ucylcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgZGlycy5wdXNoKGRpcilcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gc29ydCBieSBwcmlvcml0eSwgTE9XIHRvIEhJR0hcbiAgaWYgKGRpcnMubGVuZ3RoKSB7XG4gICAgZGlycy5zb3J0KGRpcmVjdGl2ZUNvbXBhcmF0b3IpXG4gICAgcmV0dXJuIG1ha2VOb2RlTGlua0ZuKGRpcnMpXG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgbWFwIChPYmplY3QpIG9mIGF0dHJpYnV0ZXMgdG8gYW4gQXJyYXkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG1hcFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuZnVuY3Rpb24gbWFwVG9MaXN0IChtYXApIHtcbiAgdmFyIGxpc3QgPSBbXVxuICBmb3IgKHZhciBrZXkgaW4gbWFwKSB7XG4gICAgbGlzdC5wdXNoKHtcbiAgICAgIG5hbWU6IGtleSxcbiAgICAgIHZhbHVlOiBtYXBba2V5XVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGxpc3Rcbn1cblxuLyoqXG4gKiBCdWlsZCBhIGxpbmsgZnVuY3Rpb24gZm9yIGFsbCBkaXJlY3RpdmVzIG9uIGEgc2luZ2xlIG5vZGUuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gZGlyZWN0aXZlc1xuICogQHJldHVybiB7RnVuY3Rpb259IGRpcmVjdGl2ZXNMaW5rRm5cbiAqL1xuXG5mdW5jdGlvbiBtYWtlTm9kZUxpbmtGbiAoZGlyZWN0aXZlcykge1xuICByZXR1cm4gZnVuY3Rpb24gbm9kZUxpbmtGbiAodm0sIGVsLCBob3N0KSB7XG4gICAgLy8gcmV2ZXJzZSBhcHBseSBiZWNhdXNlIGl0J3Mgc29ydGVkIGxvdyB0byBoaWdoXG4gICAgdmFyIGkgPSBkaXJlY3RpdmVzLmxlbmd0aFxuICAgIHZhciBkaXIsIGosIGtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBkaXIgPSBkaXJlY3RpdmVzW2ldXG4gICAgICBpZiAoZGlyLl9saW5rKSB7XG4gICAgICAgIC8vIGN1c3RvbSBsaW5rIGZuXG4gICAgICAgIGRpci5fbGluayh2bSwgZWwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrID0gZGlyLmRlc2NyaXB0b3JzLmxlbmd0aFxuICAgICAgICBmb3IgKGogPSAwOyBqIDwgazsgaisrKSB7XG4gICAgICAgICAgdm0uX2JpbmREaXIoZGlyLm5hbWUsIGVsLFxuICAgICAgICAgICAgZGlyLmRlc2NyaXB0b3JzW2pdLCBkaXIuZGVmLCBob3N0KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgYW4gYXR0cmlidXRlIGZvciBwb3RlbnRpYWwgZHluYW1pYyBiaW5kaW5ncyxcbiAqIGFuZCByZXR1cm4gYSBkaXJlY3RpdmUgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gY29sbGVjdEF0dHJEaXJlY3RpdmUgKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciB0b2tlbnMgPSB0ZXh0UGFyc2VyLnBhcnNlKHZhbHVlKVxuICBpZiAodG9rZW5zKSB7XG4gICAgdmFyIGRlZiA9IG9wdGlvbnMuZGlyZWN0aXZlcy5hdHRyXG4gICAgdmFyIGkgPSB0b2tlbnMubGVuZ3RoXG4gICAgdmFyIGFsbE9uZVRpbWUgPSB0cnVlXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldXG4gICAgICBpZiAodG9rZW4udGFnICYmICF0b2tlbi5vbmVUaW1lKSB7XG4gICAgICAgIGFsbE9uZVRpbWUgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZGVmOiBkZWYsXG4gICAgICBfbGluazogYWxsT25lVGltZVxuICAgICAgICA/IGZ1bmN0aW9uICh2bSwgZWwpIHtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShuYW1lLCB2bS4kaW50ZXJwb2xhdGUodmFsdWUpKVxuICAgICAgICAgIH1cbiAgICAgICAgOiBmdW5jdGlvbiAodm0sIGVsKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0ZXh0UGFyc2VyLnRva2Vuc1RvRXhwKHRva2Vucywgdm0pXG4gICAgICAgICAgICB2YXIgZGVzYyA9IGRpclBhcnNlci5wYXJzZShuYW1lICsgJzonICsgdmFsdWUpWzBdXG4gICAgICAgICAgICB2bS5fYmluZERpcignYXR0cicsIGVsLCBkZXNjLCBkZWYpXG4gICAgICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERpcmVjdGl2ZSBwcmlvcml0eSBzb3J0IGNvbXBhcmF0b3JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYVxuICogQHBhcmFtIHtPYmplY3R9IGJcbiAqL1xuXG5mdW5jdGlvbiBkaXJlY3RpdmVDb21wYXJhdG9yIChhLCBiKSB7XG4gIGEgPSBhLmRlZi5wcmlvcml0eSB8fCAwXG4gIGIgPSBiLmRlZi5wcmlvcml0eSB8fCAwXG4gIHJldHVybiBhID4gYiA/IDEgOiAtMVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlL3NyYy9jb21waWxlci9jb21waWxlLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgdGV4dFBhcnNlciA9IHJlcXVpcmUoJy4uL3BhcnNlcnMvdGV4dCcpXG52YXIgcHJvcERlZiA9IHJlcXVpcmUoJy4uL2RpcmVjdGl2ZXMvcHJvcCcpXG52YXIgcHJvcEJpbmRpbmdNb2RlcyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpLl9wcm9wQmluZGluZ01vZGVzXG5cbi8vIHJlZ2V4ZXNcbnZhciBpZGVudFJFID0gcmVxdWlyZSgnLi4vcGFyc2Vycy9wYXRoJykuaWRlbnRSRVxudmFyIGRhdGFBdHRyUkUgPSAvXmRhdGEtL1xudmFyIHNldHRhYmxlUGF0aFJFID0gL15bQS1aYS16XyRdW1xcdyRdKihcXC5bQS1aYS16XyRdW1xcdyRdKnxcXFtbXlxcW1xcXV0rXFxdKSokL1xudmFyIGxpdGVyYWxWYWx1ZVJFID0gL14odHJ1ZXxmYWxzZSkkfF5cXGQuKi9cblxuLyoqXG4gKiBDb21waWxlIHBhcmFtIGF0dHJpYnV0ZXMgb24gYSByb290IGVsZW1lbnQgYW5kIHJldHVyblxuICogYSBwcm9wcyBsaW5rIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fSBlbFxuICogQHBhcmFtIHtBcnJheX0gcHJvcE9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBwcm9wc0xpbmtGblxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tcGlsZVByb3BzIChlbCwgcHJvcE9wdGlvbnMpIHtcbiAgdmFyIHByb3BzID0gW11cbiAgdmFyIGkgPSBwcm9wT3B0aW9ucy5sZW5ndGhcbiAgdmFyIG9wdGlvbnMsIG5hbWUsIHZhbHVlLCBwYXRoLCBwcm9wLCBsaXRlcmFsLCBzaW5nbGVcbiAgd2hpbGUgKGktLSkge1xuICAgIG9wdGlvbnMgPSBwcm9wT3B0aW9uc1tpXVxuICAgIG5hbWUgPSBvcHRpb25zLm5hbWVcbiAgICAvLyBwcm9wcyBjb3VsZCBjb250YWluIGRhc2hlcywgd2hpY2ggd2lsbCBiZVxuICAgIC8vIGludGVycHJldGVkIGFzIG1pbnVzIGNhbGN1bGF0aW9ucyBieSB0aGUgcGFyc2VyXG4gICAgLy8gc28gd2UgbmVlZCB0byBjYW1lbGl6ZSB0aGUgcGF0aCBoZXJlXG4gICAgcGF0aCA9IF8uY2FtZWxpemUobmFtZS5yZXBsYWNlKGRhdGFBdHRyUkUsICcnKSlcbiAgICBpZiAoIWlkZW50UkUudGVzdChwYXRoKSkge1xuICAgICAgXy53YXJuKFxuICAgICAgICAnSW52YWxpZCBwcm9wIGtleTogXCInICsgbmFtZSArICdcIi4gUHJvcCBrZXlzICcgK1xuICAgICAgICAnbXVzdCBiZSB2YWxpZCBpZGVudGlmaWVycy4nXG4gICAgICApXG4gICAgfVxuICAgIHZhbHVlID0gZWwuZ2V0QXR0cmlidXRlKF8uaHlwaGVuYXRlKG5hbWUpKVxuICAgIC8vIGNyZWF0ZSBhIHByb3AgZGVzY3JpcHRvclxuICAgIHByb3AgPSB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgcmF3OiB2YWx1ZSxcbiAgICAgIHBhdGg6IHBhdGgsXG4gICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgbW9kZTogcHJvcEJpbmRpbmdNb2Rlcy5PTkVfV0FZXG4gICAgfVxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgLy8gaW1wb3J0YW50IHNvIHRoYXQgdGhpcyBkb2Vzbid0IGdldCBjb21waWxlZFxuICAgICAgLy8gYWdhaW4gYXMgYSBub3JtYWwgYXR0cmlidXRlIGJpbmRpbmdcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShuYW1lKVxuICAgICAgdmFyIHRva2VucyA9IHRleHRQYXJzZXIucGFyc2UodmFsdWUpXG4gICAgICBpZiAodG9rZW5zKSB7XG4gICAgICAgIGlmIChlbCAmJiBlbC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShuYW1lKVxuICAgICAgICB9XG4gICAgICAgIHByb3AuZHluYW1pYyA9IHRydWVcbiAgICAgICAgcHJvcC5wYXJlbnRQYXRoID0gdGV4dFBhcnNlci50b2tlbnNUb0V4cCh0b2tlbnMpXG4gICAgICAgIC8vIGNoZWNrIHByb3AgYmluZGluZyB0eXBlLlxuICAgICAgICBzaW5nbGUgPSB0b2tlbnMubGVuZ3RoID09PSAxXG4gICAgICAgIGxpdGVyYWwgPSBsaXRlcmFsVmFsdWVSRS50ZXN0KHByb3AucGFyZW50UGF0aClcbiAgICAgICAgLy8gb25lIHRpbWU6IHt7KiBwcm9wfX1cbiAgICAgICAgaWYgKGxpdGVyYWwgfHwgKHNpbmdsZSAmJiB0b2tlbnNbMF0ub25lVGltZSkpIHtcbiAgICAgICAgICBwcm9wLm1vZGUgPSBwcm9wQmluZGluZ01vZGVzLk9ORV9USU1FXG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgIWxpdGVyYWwgJiZcbiAgICAgICAgICAoc2luZ2xlICYmIHRva2Vuc1swXS50d29XYXkpXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChzZXR0YWJsZVBhdGhSRS50ZXN0KHByb3AucGFyZW50UGF0aCkpIHtcbiAgICAgICAgICAgIHByb3AubW9kZSA9IHByb3BCaW5kaW5nTW9kZXMuVFdPX1dBWVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLndhcm4oXG4gICAgICAgICAgICAgICdDYW5ub3QgYmluZCB0d28td2F5IHByb3Agd2l0aCBub24tc2V0dGFibGUgJyArXG4gICAgICAgICAgICAgICdwYXJlbnQgcGF0aDogJyArIHByb3AucGFyZW50UGF0aFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnJlcXVpcmVkKSB7XG4gICAgICBfLndhcm4oJ01pc3NpbmcgcmVxdWlyZWQgcHJvcDogJyArIG5hbWUpXG4gICAgfVxuICAgIHByb3BzLnB1c2gocHJvcClcbiAgfVxuICByZXR1cm4gbWFrZVByb3BzTGlua0ZuKHByb3BzKVxufVxuXG4vKipcbiAqIEJ1aWxkIGEgZnVuY3Rpb24gdGhhdCBhcHBsaWVzIHByb3BzIHRvIGEgdm0uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBwcm9wc0xpbmtGblxuICovXG5cbmZ1bmN0aW9uIG1ha2VQcm9wc0xpbmtGbiAocHJvcHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHByb3BzTGlua0ZuICh2bSwgZWwpIHtcbiAgICAvLyBzdG9yZSByZXNvbHZlZCBwcm9wcyBpbmZvXG4gICAgdm0uX3Byb3BzID0ge31cbiAgICB2YXIgaSA9IHByb3BzLmxlbmd0aFxuICAgIHZhciBwcm9wLCBwYXRoLCBvcHRpb25zLCB2YWx1ZVxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHByb3AgPSBwcm9wc1tpXVxuICAgICAgcGF0aCA9IHByb3AucGF0aFxuICAgICAgdm0uX3Byb3BzW3BhdGhdID0gcHJvcFxuICAgICAgb3B0aW9ucyA9IHByb3Aub3B0aW9uc1xuICAgICAgaWYgKHByb3AucmF3ID09PSBudWxsKSB7XG4gICAgICAgIC8vIGluaXRpYWxpemUgYWJzZW50IHByb3BcbiAgICAgICAgdm0uX2RhdGFbcGF0aF0gPSBvcHRpb25zLnR5cGUgPT09IEJvb2xlYW5cbiAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgOiBvcHRpb25zLmhhc093blByb3BlcnR5KCdkZWZhdWx0JylcbiAgICAgICAgICAgID8gb3B0aW9ucy5kZWZhdWx0XG4gICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgfSBlbHNlIGlmIChwcm9wLmR5bmFtaWMpIHtcbiAgICAgICAgLy8gZHluYW1pYyBwcm9wXG4gICAgICAgIGlmICh2bS5fY29udGV4dCkge1xuICAgICAgICAgIGlmIChwcm9wLm1vZGUgPT09IHByb3BCaW5kaW5nTW9kZXMuT05FX1RJTUUpIHtcbiAgICAgICAgICAgIC8vIG9uZSB0aW1lIGJpbmRpbmdcbiAgICAgICAgICAgIHZhbHVlID0gdm0uX2NvbnRleHQuJGdldChwcm9wLnBhcmVudFBhdGgpXG4gICAgICAgICAgICBfLmluaXRQcm9wKHZtLCBwcm9wLCB2YWx1ZSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZHluYW1pYyBiaW5kaW5nXG4gICAgICAgICAgICB2bS5fYmluZERpcigncHJvcCcsIGVsLCBwcm9wLCBwcm9wRGVmKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfLndhcm4oXG4gICAgICAgICAgICAnQ2Fubm90IGJpbmQgZHluYW1pYyBwcm9wIG9uIGEgcm9vdCBpbnN0YW5jZScgK1xuICAgICAgICAgICAgJyB3aXRoIG5vIHBhcmVudDogJyArIHByb3AubmFtZSArICc9XCInICtcbiAgICAgICAgICAgIHByb3AucmF3ICsgJ1wiJ1xuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbGl0ZXJhbCwgY2FzdCBpdCBhbmQganVzdCBzZXQgb25jZVxuICAgICAgICB2YWx1ZSA9IG9wdGlvbnMudHlwZSA9PT0gQm9vbGVhbiAmJiBwcm9wLnJhdyA9PT0gJydcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IF8udG9Cb29sZWFuKF8udG9OdW1iZXIocHJvcC5yYXcpKVxuICAgICAgICBfLmluaXRQcm9wKHZtLCBwcm9wLCB2YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvY29tcGlsZXIvY29tcGlsZS1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgQ2FjaGUgPSByZXF1aXJlKCcuLi9jYWNoZScpXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJylcbnZhciBkaXJQYXJzZXIgPSByZXF1aXJlKCcuL2RpcmVjdGl2ZScpXG52YXIgcmVnZXhFc2NhcGVSRSA9IC9bLS4qKz9eJHt9KCl8W1xcXVxcL1xcXFxdL2dcbnZhciBjYWNoZSwgdGFnUkUsIGh0bWxSRSwgZmlyc3RDaGFyLCBsYXN0Q2hhclxuXG4vKipcbiAqIEVzY2FwZSBhIHN0cmluZyBzbyBpdCBjYW4gYmUgdXNlZCBpbiBhIFJlZ0V4cFxuICogY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICovXG5cbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4IChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKHJlZ2V4RXNjYXBlUkUsICdcXFxcJCYnKVxufVxuXG4vKipcbiAqIENvbXBpbGUgdGhlIGludGVycG9sYXRpb24gdGFnIHJlZ2V4LlxuICpcbiAqIEByZXR1cm4ge1JlZ0V4cH1cbiAqL1xuXG5mdW5jdGlvbiBjb21waWxlUmVnZXggKCkge1xuICBjb25maWcuX2RlbGltaXRlcnNDaGFuZ2VkID0gZmFsc2VcbiAgdmFyIG9wZW4gPSBjb25maWcuZGVsaW1pdGVyc1swXVxuICB2YXIgY2xvc2UgPSBjb25maWcuZGVsaW1pdGVyc1sxXVxuICBmaXJzdENoYXIgPSBvcGVuLmNoYXJBdCgwKVxuICBsYXN0Q2hhciA9IGNsb3NlLmNoYXJBdChjbG9zZS5sZW5ndGggLSAxKVxuICB2YXIgZmlyc3RDaGFyUkUgPSBlc2NhcGVSZWdleChmaXJzdENoYXIpXG4gIHZhciBsYXN0Q2hhclJFID0gZXNjYXBlUmVnZXgobGFzdENoYXIpXG4gIHZhciBvcGVuUkUgPSBlc2NhcGVSZWdleChvcGVuKVxuICB2YXIgY2xvc2VSRSA9IGVzY2FwZVJlZ2V4KGNsb3NlKVxuICB0YWdSRSA9IG5ldyBSZWdFeHAoXG4gICAgZmlyc3RDaGFyUkUgKyAnPycgKyBvcGVuUkUgK1xuICAgICcoLis/KScgK1xuICAgIGNsb3NlUkUgKyBsYXN0Q2hhclJFICsgJz8nLFxuICAgICdnJ1xuICApXG4gIGh0bWxSRSA9IG5ldyBSZWdFeHAoXG4gICAgJ14nICsgZmlyc3RDaGFyUkUgKyBvcGVuUkUgK1xuICAgICcuKicgK1xuICAgIGNsb3NlUkUgKyBsYXN0Q2hhclJFICsgJyQnXG4gIClcbiAgLy8gcmVzZXQgY2FjaGVcbiAgY2FjaGUgPSBuZXcgQ2FjaGUoMTAwMClcbn1cblxuLyoqXG4gKiBQYXJzZSBhIHRlbXBsYXRlIHRleHQgc3RyaW5nIGludG8gYW4gYXJyYXkgb2YgdG9rZW5zLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gKiBAcmV0dXJuIHtBcnJheTxPYmplY3Q+IHwgbnVsbH1cbiAqICAgICAgICAgICAgICAgLSB7U3RyaW5nfSB0eXBlXG4gKiAgICAgICAgICAgICAgIC0ge1N0cmluZ30gdmFsdWVcbiAqICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gW2h0bWxdXG4gKiAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IFtvbmVUaW1lXVxuICovXG5cbmV4cG9ydHMucGFyc2UgPSBmdW5jdGlvbiAodGV4dCkge1xuICBpZiAoY29uZmlnLl9kZWxpbWl0ZXJzQ2hhbmdlZCkge1xuICAgIGNvbXBpbGVSZWdleCgpXG4gIH1cbiAgdmFyIGhpdCA9IGNhY2hlLmdldCh0ZXh0KVxuICBpZiAoaGl0KSB7XG4gICAgcmV0dXJuIGhpdFxuICB9XG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcbi9nLCAnJylcbiAgaWYgKCF0YWdSRS50ZXN0KHRleHQpKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICB2YXIgdG9rZW5zID0gW11cbiAgdmFyIGxhc3RJbmRleCA9IHRhZ1JFLmxhc3RJbmRleCA9IDBcbiAgdmFyIG1hdGNoLCBpbmRleCwgdmFsdWUsIGZpcnN0LCBvbmVUaW1lLCB0d29XYXlcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgd2hpbGUgKG1hdGNoID0gdGFnUkUuZXhlYyh0ZXh0KSkge1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbmQtYXNzaWduICovXG4gICAgaW5kZXggPSBtYXRjaC5pbmRleFxuICAgIC8vIHB1c2ggdGV4dCB0b2tlblxuICAgIGlmIChpbmRleCA+IGxhc3RJbmRleCkge1xuICAgICAgdG9rZW5zLnB1c2goe1xuICAgICAgICB2YWx1ZTogdGV4dC5zbGljZShsYXN0SW5kZXgsIGluZGV4KVxuICAgICAgfSlcbiAgICB9XG4gICAgLy8gdGFnIHRva2VuXG4gICAgZmlyc3QgPSBtYXRjaFsxXS5jaGFyQ29kZUF0KDApXG4gICAgb25lVGltZSA9IGZpcnN0ID09PSA0MiAvLyAqXG4gICAgdHdvV2F5ID0gZmlyc3QgPT09IDY0ICAvLyBAXG4gICAgdmFsdWUgPSBvbmVUaW1lIHx8IHR3b1dheVxuICAgICAgPyBtYXRjaFsxXS5zbGljZSgxKVxuICAgICAgOiBtYXRjaFsxXVxuICAgIHRva2Vucy5wdXNoKHtcbiAgICAgIHRhZzogdHJ1ZSxcbiAgICAgIHZhbHVlOiB2YWx1ZS50cmltKCksXG4gICAgICBodG1sOiBodG1sUkUudGVzdChtYXRjaFswXSksXG4gICAgICBvbmVUaW1lOiBvbmVUaW1lLFxuICAgICAgdHdvV2F5OiB0d29XYXlcbiAgICB9KVxuICAgIGxhc3RJbmRleCA9IGluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoXG4gIH1cbiAgaWYgKGxhc3RJbmRleCA8IHRleHQubGVuZ3RoKSB7XG4gICAgdG9rZW5zLnB1c2goe1xuICAgICAgdmFsdWU6IHRleHQuc2xpY2UobGFzdEluZGV4KVxuICAgIH0pXG4gIH1cbiAgY2FjaGUucHV0KHRleHQsIHRva2VucylcbiAgcmV0dXJuIHRva2Vuc1xufVxuXG4vKipcbiAqIEZvcm1hdCBhIGxpc3Qgb2YgdG9rZW5zIGludG8gYW4gZXhwcmVzc2lvbi5cbiAqIGUuZy4gdG9rZW5zIHBhcnNlZCBmcm9tICdhIHt7Yn19IGMnIGNhbiBiZSBzZXJpYWxpemVkXG4gKiBpbnRvIG9uZSBzaW5nbGUgZXhwcmVzc2lvbiBhcyAnXCJhIFwiICsgYiArIFwiIGNcIicuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gdG9rZW5zXG4gKiBAcGFyYW0ge1Z1ZX0gW3ZtXVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmV4cG9ydHMudG9rZW5zVG9FeHAgPSBmdW5jdGlvbiAodG9rZW5zLCB2bSkge1xuICByZXR1cm4gdG9rZW5zLmxlbmd0aCA+IDFcbiAgICA/IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXRUb2tlbih0b2tlbiwgdm0pXG4gICAgICB9KS5qb2luKCcrJylcbiAgICA6IGZvcm1hdFRva2VuKHRva2Vuc1swXSwgdm0sIHRydWUpXG59XG5cbi8qKlxuICogRm9ybWF0IGEgc2luZ2xlIHRva2VuLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0b2tlblxuICogQHBhcmFtIHtWdWV9IFt2bV1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc2luZ2xlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0VG9rZW4gKHRva2VuLCB2bSwgc2luZ2xlKSB7XG4gIHJldHVybiB0b2tlbi50YWdcbiAgICA/IHZtICYmIHRva2VuLm9uZVRpbWVcbiAgICAgID8gJ1wiJyArIHZtLiRldmFsKHRva2VuLnZhbHVlKSArICdcIidcbiAgICAgIDogaW5saW5lRmlsdGVycyh0b2tlbi52YWx1ZSwgc2luZ2xlKVxuICAgIDogJ1wiJyArIHRva2VuLnZhbHVlICsgJ1wiJ1xufVxuXG4vKipcbiAqIEZvciBhbiBhdHRyaWJ1dGUgd2l0aCBtdWx0aXBsZSBpbnRlcnBvbGF0aW9uIHRhZ3MsXG4gKiBlLmcuIGF0dHI9XCJzb21lLXt7dGhpbmcgfCBmaWx0ZXJ9fVwiLCBpbiBvcmRlciB0byBjb21iaW5lXG4gKiB0aGUgd2hvbGUgdGhpbmcgaW50byBhIHNpbmdsZSB3YXRjaGFibGUgZXhwcmVzc2lvbiwgd2VcbiAqIGhhdmUgdG8gaW5saW5lIHRob3NlIGZpbHRlcnMuIFRoaXMgZnVuY3Rpb24gZG9lcyBleGFjdGx5XG4gKiB0aGF0LiBUaGlzIGlzIGEgYml0IGhhY2t5IGJ1dCBpdCBhdm9pZHMgaGVhdnkgY2hhbmdlc1xuICogdG8gZGlyZWN0aXZlIHBhcnNlciBhbmQgd2F0Y2hlciBtZWNoYW5pc20uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV4cFxuICogQHBhcmFtIHtCb29sZWFufSBzaW5nbGVcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG52YXIgZmlsdGVyUkUgPSAvW158XVxcfFtefF0vXG5mdW5jdGlvbiBpbmxpbmVGaWx0ZXJzIChleHAsIHNpbmdsZSkge1xuICBpZiAoIWZpbHRlclJFLnRlc3QoZXhwKSkge1xuICAgIHJldHVybiBzaW5nbGVcbiAgICAgID8gZXhwXG4gICAgICA6ICcoJyArIGV4cCArICcpJ1xuICB9IGVsc2Uge1xuICAgIHZhciBkaXIgPSBkaXJQYXJzZXIucGFyc2UoZXhwKVswXVxuICAgIGlmICghZGlyLmZpbHRlcnMpIHtcbiAgICAgIHJldHVybiAnKCcgKyBleHAgKyAnKSdcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICd0aGlzLl9hcHBseUZpbHRlcnMoJyArXG4gICAgICAgIGRpci5leHByZXNzaW9uICsgLy8gdmFsdWVcbiAgICAgICAgJyxudWxsLCcgKyAgICAgICAvLyBvbGRWYWx1ZSAobnVsbCBmb3IgcmVhZClcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGlyLmZpbHRlcnMpICsgLy8gZmlsdGVyIGRlc2NyaXB0b3JzXG4gICAgICAgICcsZmFsc2UpJyAgICAgICAgLy8gd3JpdGU/XG4gICAgfVxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUvc3JjL3BhcnNlcnMvdGV4dC5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEEgZG91Ymx5IGxpbmtlZCBsaXN0LWJhc2VkIExlYXN0IFJlY2VudGx5IFVzZWQgKExSVSlcbiAqIGNhY2hlLiBXaWxsIGtlZXAgbW9zdCByZWNlbnRseSB1c2VkIGl0ZW1zIHdoaWxlXG4gKiBkaXNjYXJkaW5nIGxlYXN0IHJlY2VudGx5IHVzZWQgaXRlbXMgd2hlbiBpdHMgbGltaXQgaXNcbiAqIHJlYWNoZWQuIFRoaXMgaXMgYSBiYXJlLWJvbmUgdmVyc2lvbiBvZlxuICogUmFzbXVzIEFuZGVyc3NvbidzIGpzLWxydTpcbiAqXG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9yc21zL2pzLWxydVxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBsaW1pdFxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuZnVuY3Rpb24gQ2FjaGUgKGxpbWl0KSB7XG4gIHRoaXMuc2l6ZSA9IDBcbiAgdGhpcy5saW1pdCA9IGxpbWl0XG4gIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IHVuZGVmaW5lZFxuICB0aGlzLl9rZXltYXAgPSB7fVxufVxuXG52YXIgcCA9IENhY2hlLnByb3RvdHlwZVxuXG4vKipcbiAqIFB1dCA8dmFsdWU+IGludG8gdGhlIGNhY2hlIGFzc29jaWF0ZWQgd2l0aCA8a2V5Pi5cbiAqIFJldHVybnMgdGhlIGVudHJ5IHdoaWNoIHdhcyByZW1vdmVkIHRvIG1ha2Ugcm9vbSBmb3JcbiAqIHRoZSBuZXcgZW50cnkuIE90aGVyd2lzZSB1bmRlZmluZWQgaXMgcmV0dXJuZWQuXG4gKiAoaS5lLiBpZiB0aGVyZSB3YXMgZW5vdWdoIHJvb20gYWxyZWFkeSkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybiB7RW50cnl8dW5kZWZpbmVkfVxuICovXG5cbnAucHV0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdmFyIGVudHJ5ID0ge1xuICAgIGtleToga2V5LFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9XG4gIHRoaXMuX2tleW1hcFtrZXldID0gZW50cnlcbiAgaWYgKHRoaXMudGFpbCkge1xuICAgIHRoaXMudGFpbC5uZXdlciA9IGVudHJ5XG4gICAgZW50cnkub2xkZXIgPSB0aGlzLnRhaWxcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmhlYWQgPSBlbnRyeVxuICB9XG4gIHRoaXMudGFpbCA9IGVudHJ5XG4gIGlmICh0aGlzLnNpemUgPT09IHRoaXMubGltaXQpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlmdCgpXG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zaXplKytcbiAgfVxufVxuXG4vKipcbiAqIFB1cmdlIHRoZSBsZWFzdCByZWNlbnRseSB1c2VkIChvbGRlc3QpIGVudHJ5IGZyb20gdGhlXG4gKiBjYWNoZS4gUmV0dXJucyB0aGUgcmVtb3ZlZCBlbnRyeSBvciB1bmRlZmluZWQgaWYgdGhlXG4gKiBjYWNoZSB3YXMgZW1wdHkuXG4gKi9cblxucC5zaGlmdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGVudHJ5ID0gdGhpcy5oZWFkXG4gIGlmIChlbnRyeSkge1xuICAgIHRoaXMuaGVhZCA9IHRoaXMuaGVhZC5uZXdlclxuICAgIHRoaXMuaGVhZC5vbGRlciA9IHVuZGVmaW5lZFxuICAgIGVudHJ5Lm5ld2VyID0gZW50cnkub2xkZXIgPSB1bmRlZmluZWRcbiAgICB0aGlzLl9rZXltYXBbZW50cnkua2V5XSA9IHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiBlbnRyeVxufVxuXG4vKipcbiAqIEdldCBhbmQgcmVnaXN0ZXIgcmVjZW50IHVzZSBvZiA8a2V5Pi4gUmV0dXJucyB0aGUgdmFsdWVcbiAqIGFzc29jaWF0ZWQgd2l0aCA8a2V5PiBvciB1bmRlZmluZWQgaWYgbm90IGluIGNhY2hlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcmV0dXJuRW50cnlcbiAqIEByZXR1cm4ge0VudHJ5fCp9XG4gKi9cblxucC5nZXQgPSBmdW5jdGlvbiAoa2V5LCByZXR1cm5FbnRyeSkge1xuICB2YXIgZW50cnkgPSB0aGlzLl9rZXltYXBba2V5XVxuICBpZiAoZW50cnkgPT09IHVuZGVmaW5lZCkgcmV0dXJuXG4gIGlmIChlbnRyeSA9PT0gdGhpcy50YWlsKSB7XG4gICAgcmV0dXJuIHJldHVybkVudHJ5XG4gICAgICA/IGVudHJ5XG4gICAgICA6IGVudHJ5LnZhbHVlXG4gIH1cbiAgLy8gSEVBRC0tLS0tLS0tLS0tLS0tVEFJTFxuICAvLyAgIDwub2xkZXIgICAubmV3ZXI+XG4gIC8vICA8LS0tIGFkZCBkaXJlY3Rpb24gLS1cbiAgLy8gICBBICBCICBDICA8RD4gIEVcbiAgaWYgKGVudHJ5Lm5ld2VyKSB7XG4gICAgaWYgKGVudHJ5ID09PSB0aGlzLmhlYWQpIHtcbiAgICAgIHRoaXMuaGVhZCA9IGVudHJ5Lm5ld2VyXG4gICAgfVxuICAgIGVudHJ5Lm5ld2VyLm9sZGVyID0gZW50cnkub2xkZXIgLy8gQyA8LS0gRS5cbiAgfVxuICBpZiAoZW50cnkub2xkZXIpIHtcbiAgICBlbnRyeS5vbGRlci5uZXdlciA9IGVudHJ5Lm5ld2VyIC8vIEMuIC0tPiBFXG4gIH1cbiAgZW50cnkubmV3ZXIgPSB1bmRlZmluZWQgLy8gRCAtLXhcbiAgZW50cnkub2xkZXIgPSB0aGlzLnRhaWwgLy8gRC4gLS0+IEVcbiAgaWYgKHRoaXMudGFpbCkge1xuICAgIHRoaXMudGFpbC5uZXdlciA9IGVudHJ5IC8vIEUuIDwtLSBEXG4gIH1cbiAgdGhpcy50YWlsID0gZW50cnlcbiAgcmV0dXJuIHJldHVybkVudHJ5XG4gICAgPyBlbnRyeVxuICAgIDogZW50cnkudmFsdWVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYWNoZVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlL3NyYy9jYWNoZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIENhY2hlID0gcmVxdWlyZSgnLi4vY2FjaGUnKVxudmFyIGNhY2hlID0gbmV3IENhY2hlKDEwMDApXG52YXIgYXJnUkUgPSAvXlteXFx7XFw/XSskfF4nW14nXSonJHxeXCJbXlwiXSpcIiQvXG52YXIgZmlsdGVyVG9rZW5SRSA9IC9bXlxccydcIl0rfCdbXiddKyd8XCJbXlwiXStcIi9nXG52YXIgcmVzZXJ2ZWRBcmdSRSA9IC9eaW4kfF4tP1xcZCsvXG5cbi8qKlxuICogUGFyc2VyIHN0YXRlXG4gKi9cblxudmFyIHN0clxudmFyIGMsIGksIGxcbnZhciBpblNpbmdsZVxudmFyIGluRG91YmxlXG52YXIgY3VybHlcbnZhciBzcXVhcmVcbnZhciBwYXJlblxudmFyIGJlZ2luXG52YXIgYXJnSW5kZXhcbnZhciBkaXJzXG52YXIgZGlyXG52YXIgbGFzdEZpbHRlckluZGV4XG52YXIgYXJnXG5cbi8qKlxuICogUHVzaCBhIGRpcmVjdGl2ZSBvYmplY3QgaW50byB0aGUgcmVzdWx0IEFycmF5XG4gKi9cblxuZnVuY3Rpb24gcHVzaERpciAoKSB7XG4gIGRpci5yYXcgPSBzdHIuc2xpY2UoYmVnaW4sIGkpLnRyaW0oKVxuICBpZiAoZGlyLmV4cHJlc3Npb24gPT09IHVuZGVmaW5lZCkge1xuICAgIGRpci5leHByZXNzaW9uID0gc3RyLnNsaWNlKGFyZ0luZGV4LCBpKS50cmltKClcbiAgfSBlbHNlIGlmIChsYXN0RmlsdGVySW5kZXggIT09IGJlZ2luKSB7XG4gICAgcHVzaEZpbHRlcigpXG4gIH1cbiAgaWYgKGkgPT09IDAgfHwgZGlyLmV4cHJlc3Npb24pIHtcbiAgICBkaXJzLnB1c2goZGlyKVxuICB9XG59XG5cbi8qKlxuICogUHVzaCBhIGZpbHRlciB0byB0aGUgY3VycmVudCBkaXJlY3RpdmUgb2JqZWN0XG4gKi9cblxuZnVuY3Rpb24gcHVzaEZpbHRlciAoKSB7XG4gIHZhciBleHAgPSBzdHIuc2xpY2UobGFzdEZpbHRlckluZGV4LCBpKS50cmltKClcbiAgdmFyIGZpbHRlclxuICBpZiAoZXhwKSB7XG4gICAgZmlsdGVyID0ge31cbiAgICB2YXIgdG9rZW5zID0gZXhwLm1hdGNoKGZpbHRlclRva2VuUkUpXG4gICAgZmlsdGVyLm5hbWUgPSB0b2tlbnNbMF1cbiAgICBpZiAodG9rZW5zLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZpbHRlci5hcmdzID0gdG9rZW5zLnNsaWNlKDEpLm1hcChwcm9jZXNzRmlsdGVyQXJnKVxuICAgIH1cbiAgfVxuICBpZiAoZmlsdGVyKSB7XG4gICAgKGRpci5maWx0ZXJzID0gZGlyLmZpbHRlcnMgfHwgW10pLnB1c2goZmlsdGVyKVxuICB9XG4gIGxhc3RGaWx0ZXJJbmRleCA9IGkgKyAxXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gYXJndW1lbnQgaXMgZHluYW1pYyBhbmQgc3RyaXAgcXVvdGVzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBhcmdcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBwcm9jZXNzRmlsdGVyQXJnIChhcmcpIHtcbiAgdmFyIHN0cmlwcGVkID0gcmVzZXJ2ZWRBcmdSRS50ZXN0KGFyZylcbiAgICA/IGFyZ1xuICAgIDogXy5zdHJpcFF1b3RlcyhhcmcpXG4gIHJldHVybiB7XG4gICAgdmFsdWU6IHN0cmlwcGVkIHx8IGFyZyxcbiAgICBkeW5hbWljOiAhc3RyaXBwZWRcbiAgfVxufVxuXG4vKipcbiAqIFBhcnNlIGEgZGlyZWN0aXZlIHN0cmluZyBpbnRvIGFuIEFycmF5IG9mIEFTVC1saWtlXG4gKiBvYmplY3RzIHJlcHJlc2VudGluZyBkaXJlY3RpdmVzLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogXCJjbGljazogYSA9IGEgKyAxIHwgdXBwZXJjYXNlXCIgd2lsbCB5aWVsZDpcbiAqIHtcbiAqICAgYXJnOiAnY2xpY2snLFxuICogICBleHByZXNzaW9uOiAnYSA9IGEgKyAxJyxcbiAqICAgZmlsdGVyczogW1xuICogICAgIHsgbmFtZTogJ3VwcGVyY2FzZScsIGFyZ3M6IG51bGwgfVxuICogICBdXG4gKiB9XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7QXJyYXk8T2JqZWN0Pn1cbiAqL1xuXG5leHBvcnRzLnBhcnNlID0gZnVuY3Rpb24gKHMpIHtcblxuICB2YXIgaGl0ID0gY2FjaGUuZ2V0KHMpXG4gIGlmIChoaXQpIHtcbiAgICByZXR1cm4gaGl0XG4gIH1cblxuICAvLyByZXNldCBwYXJzZXIgc3RhdGVcbiAgc3RyID0gc1xuICBpblNpbmdsZSA9IGluRG91YmxlID0gZmFsc2VcbiAgY3VybHkgPSBzcXVhcmUgPSBwYXJlbiA9IGJlZ2luID0gYXJnSW5kZXggPSAwXG4gIGxhc3RGaWx0ZXJJbmRleCA9IDBcbiAgZGlycyA9IFtdXG4gIGRpciA9IHt9XG4gIGFyZyA9IG51bGxcblxuICBmb3IgKGkgPSAwLCBsID0gc3RyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGlmIChpblNpbmdsZSkge1xuICAgICAgLy8gY2hlY2sgc2luZ2xlIHF1b3RlXG4gICAgICBpZiAoYyA9PT0gMHgyNykgaW5TaW5nbGUgPSAhaW5TaW5nbGVcbiAgICB9IGVsc2UgaWYgKGluRG91YmxlKSB7XG4gICAgICAvLyBjaGVjayBkb3VibGUgcXVvdGVcbiAgICAgIGlmIChjID09PSAweDIyKSBpbkRvdWJsZSA9ICFpbkRvdWJsZVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjID09PSAweDJDICYmIC8vIGNvbW1hXG4gICAgICAhcGFyZW4gJiYgIWN1cmx5ICYmICFzcXVhcmVcbiAgICApIHtcbiAgICAgIC8vIHJlYWNoZWQgdGhlIGVuZCBvZiBhIGRpcmVjdGl2ZVxuICAgICAgcHVzaERpcigpXG4gICAgICAvLyByZXNldCAmIHNraXAgdGhlIGNvbW1hXG4gICAgICBkaXIgPSB7fVxuICAgICAgYmVnaW4gPSBhcmdJbmRleCA9IGxhc3RGaWx0ZXJJbmRleCA9IGkgKyAxXG4gICAgfSBlbHNlIGlmIChcbiAgICAgIGMgPT09IDB4M0EgJiYgLy8gY29sb25cbiAgICAgICFkaXIuZXhwcmVzc2lvbiAmJlxuICAgICAgIWRpci5hcmdcbiAgICApIHtcbiAgICAgIC8vIGFyZ3VtZW50XG4gICAgICBhcmcgPSBzdHIuc2xpY2UoYmVnaW4sIGkpLnRyaW0oKVxuICAgICAgLy8gdGVzdCBmb3IgdmFsaWQgYXJndW1lbnQgaGVyZVxuICAgICAgLy8gc2luY2Ugd2UgbWF5IGhhdmUgY2F1Z2h0IHN0dWZmIGxpa2UgZmlyc3QgaGFsZiBvZlxuICAgICAgLy8gYW4gb2JqZWN0IGxpdGVyYWwgb3IgYSB0ZXJuYXJ5IGV4cHJlc3Npb24uXG4gICAgICBpZiAoYXJnUkUudGVzdChhcmcpKSB7XG4gICAgICAgIGFyZ0luZGV4ID0gaSArIDFcbiAgICAgICAgZGlyLmFyZyA9IF8uc3RyaXBRdW90ZXMoYXJnKSB8fCBhcmdcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgYyA9PT0gMHg3QyAmJiAvLyBwaXBlXG4gICAgICBzdHIuY2hhckNvZGVBdChpICsgMSkgIT09IDB4N0MgJiZcbiAgICAgIHN0ci5jaGFyQ29kZUF0KGkgLSAxKSAhPT0gMHg3Q1xuICAgICkge1xuICAgICAgaWYgKGRpci5leHByZXNzaW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gZmlyc3QgZmlsdGVyLCBlbmQgb2YgZXhwcmVzc2lvblxuICAgICAgICBsYXN0RmlsdGVySW5kZXggPSBpICsgMVxuICAgICAgICBkaXIuZXhwcmVzc2lvbiA9IHN0ci5zbGljZShhcmdJbmRleCwgaSkudHJpbSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhbHJlYWR5IGhhcyBmaWx0ZXJcbiAgICAgICAgcHVzaEZpbHRlcigpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAoYykge1xuICAgICAgICBjYXNlIDB4MjI6IGluRG91YmxlID0gdHJ1ZTsgYnJlYWsgLy8gXCJcbiAgICAgICAgY2FzZSAweDI3OiBpblNpbmdsZSA9IHRydWU7IGJyZWFrIC8vICdcbiAgICAgICAgY2FzZSAweDI4OiBwYXJlbisrOyBicmVhayAgICAgICAgIC8vIChcbiAgICAgICAgY2FzZSAweDI5OiBwYXJlbi0tOyBicmVhayAgICAgICAgIC8vIClcbiAgICAgICAgY2FzZSAweDVCOiBzcXVhcmUrKzsgYnJlYWsgICAgICAgIC8vIFtcbiAgICAgICAgY2FzZSAweDVEOiBzcXVhcmUtLTsgYnJlYWsgICAgICAgIC8vIF1cbiAgICAgICAgY2FzZSAweDdCOiBjdXJseSsrOyBicmVhayAgICAgICAgIC8vIHtcbiAgICAgICAgY2FzZSAweDdEOiBjdXJseS0tOyBicmVhayAgICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaSA9PT0gMCB8fCBiZWdpbiAhPT0gaSkge1xuICAgIHB1c2hEaXIoKVxuICB9XG5cbiAgY2FjaGUucHV0KHMsIGRpcnMpXG4gIHJldHVybiBkaXJzXG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUvc3JjL3BhcnNlcnMvZGlyZWN0aXZlLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIE5PVEU6IHRoZSBwcm9wIGludGVybmFsIGRpcmVjdGl2ZSBpcyBjb21waWxlZCBhbmQgbGlua2VkXG4vLyBkdXJpbmcgX2luaXRTY29wZSgpLCBiZWZvcmUgdGhlIGNyZWF0ZWQgaG9vayBpcyBjYWxsZWQuXG4vLyBUaGUgcHVycG9zZSBpcyB0byBtYWtlIHRoZSBpbml0aWFsIHByb3AgdmFsdWVzIGF2YWlsYWJsZVxuLy8gaW5zaWRlIGBjcmVhdGVkYCBob29rcyBhbmQgYGRhdGFgIGZ1bmN0aW9ucy5cblxudmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciBXYXRjaGVyID0gcmVxdWlyZSgnLi4vd2F0Y2hlcicpXG52YXIgYmluZGluZ01vZGVzID0gcmVxdWlyZSgnLi4vY29uZmlnJykuX3Byb3BCaW5kaW5nTW9kZXNcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgYmluZDogZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIGNoaWxkID0gdGhpcy52bVxuICAgIHZhciBwYXJlbnQgPSBjaGlsZC5fY29udGV4dFxuICAgIC8vIHBhc3NlZCBpbiBmcm9tIGNvbXBpbGVyIGRpcmVjdGx5XG4gICAgdmFyIHByb3AgPSB0aGlzLl9kZXNjcmlwdG9yXG4gICAgdmFyIGNoaWxkS2V5ID0gcHJvcC5wYXRoXG4gICAgdmFyIHBhcmVudEtleSA9IHByb3AucGFyZW50UGF0aFxuXG4gICAgLy8gc2ltcGxlIGxvY2sgdG8gYXZvaWQgY2lyY3VsYXIgdXBkYXRlcy5cbiAgICAvLyB3aXRob3V0IHRoaXMgaXQgd291bGQgc3RhYmlsaXplIHRvbywgYnV0IHRoaXMgbWFrZXNcbiAgICAvLyBzdXJlIGl0IGRvZXNuJ3QgY2F1c2Ugb3RoZXIgd2F0Y2hlcnMgdG8gcmUtZXZhbHVhdGUuXG4gICAgdmFyIGxvY2tlZCA9IGZhbHNlXG4gICAgZnVuY3Rpb24gd2l0aExvY2sgKGZuKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICBpZiAoIWxvY2tlZCkge1xuICAgICAgICAgIGxvY2tlZCA9IHRydWVcbiAgICAgICAgICBmbih2YWwpXG4gICAgICAgICAgXy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsb2NrZWQgPSBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnBhcmVudFdhdGNoZXIgPSBuZXcgV2F0Y2hlcihcbiAgICAgIHBhcmVudCxcbiAgICAgIHBhcmVudEtleSxcbiAgICAgIHdpdGhMb2NrKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgaWYgKF8uYXNzZXJ0UHJvcChwcm9wLCB2YWwpKSB7XG4gICAgICAgICAgY2hpbGRbY2hpbGRLZXldID0gdmFsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKVxuXG4gICAgLy8gc2V0IHRoZSBjaGlsZCBpbml0aWFsIHZhbHVlLlxuICAgIC8vICEhISBXZSBuZWVkIHRvIHNldCBpdCBhbHNvIG9uIHJhdyBkYXRhIGhlcmUsIGJlY2F1c2VcbiAgICAvLyBwcm9wcyBhcmUgaW5pdGlhbGl6ZWQgYmVmb3JlIGRhdGEgaXMgZnVsbHkgb2JzZXJ2ZWRcbiAgICB2YXIgdmFsdWUgPSB0aGlzLnBhcmVudFdhdGNoZXIudmFsdWVcbiAgICBpZiAoY2hpbGRLZXkgPT09ICckZGF0YScpIHtcbiAgICAgIGNoaWxkLl9kYXRhID0gdmFsdWVcbiAgICB9IGVsc2Uge1xuICAgICAgXy5pbml0UHJvcChjaGlsZCwgcHJvcCwgdmFsdWUpXG4gICAgfVxuXG4gICAgLy8gb25seSBzZXR1cCB0d28td2F5IGJpbmRpbmcgaWYgdGhpcyBpcyBub3QgYSBvbmUtd2F5XG4gICAgLy8gYmluZGluZy5cbiAgICBpZiAocHJvcC5tb2RlID09PSBiaW5kaW5nTW9kZXMuVFdPX1dBWSkge1xuICAgICAgLy8gaW1wb3J0YW50OiBkZWZlciB0aGUgY2hpbGQgd2F0Y2hlciBjcmVhdGlvbiB1bnRpbFxuICAgICAgLy8gdGhlIGNyZWF0ZWQgaG9vayAoYWZ0ZXIgZGF0YSBvYnNlcnZhdGlvbilcbiAgICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgY2hpbGQuJG9uY2UoJ2hvb2s6Y3JlYXRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5jaGlsZFdhdGNoZXIgPSBuZXcgV2F0Y2hlcihcbiAgICAgICAgICBjaGlsZCxcbiAgICAgICAgICBjaGlsZEtleSxcbiAgICAgICAgICB3aXRoTG9jayhmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICBwYXJlbnQuJHNldChwYXJlbnRLZXksIHZhbClcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICB1bmJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5wYXJlbnRXYXRjaGVyKSB7XG4gICAgICB0aGlzLnBhcmVudFdhdGNoZXIudGVhcmRvd24oKVxuICAgIH1cbiAgICBpZiAodGhpcy5jaGlsZFdhdGNoZXIpIHtcbiAgICAgIHRoaXMuY2hpbGRXYXRjaGVyLnRlYXJkb3duKClcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvZGlyZWN0aXZlcy9wcm9wLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi91dGlsJylcbnZhciBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpXG52YXIgT2JzZXJ2ZXIgPSByZXF1aXJlKCcuL29ic2VydmVyJylcbnZhciBleHBQYXJzZXIgPSByZXF1aXJlKCcuL3BhcnNlcnMvZXhwcmVzc2lvbicpXG52YXIgYmF0Y2hlciA9IHJlcXVpcmUoJy4vYmF0Y2hlcicpXG52YXIgdWlkID0gMFxuXG4vKipcbiAqIEEgd2F0Y2hlciBwYXJzZXMgYW4gZXhwcmVzc2lvbiwgY29sbGVjdHMgZGVwZW5kZW5jaWVzLFxuICogYW5kIGZpcmVzIGNhbGxiYWNrIHdoZW4gdGhlIGV4cHJlc3Npb24gdmFsdWUgY2hhbmdlcy5cbiAqIFRoaXMgaXMgdXNlZCBmb3IgYm90aCB0aGUgJHdhdGNoKCkgYXBpIGFuZCBkaXJlY3RpdmVzLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtTdHJpbmd9IGV4cHJlc3Npb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogICAgICAgICAgICAgICAgIC0ge0FycmF5fSBmaWx0ZXJzXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gdHdvV2F5XG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gZGVlcFxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHVzZXJcbiAqICAgICAgICAgICAgICAgICAtIHtGdW5jdGlvbn0gW3ByZVByb2Nlc3NdXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5mdW5jdGlvbiBXYXRjaGVyICh2bSwgZXhwT3JGbiwgY2IsIG9wdGlvbnMpIHtcbiAgdmFyIGlzRm4gPSB0eXBlb2YgZXhwT3JGbiA9PT0gJ2Z1bmN0aW9uJ1xuICB0aGlzLnZtID0gdm1cbiAgdm0uX3dhdGNoZXJzLnB1c2godGhpcylcbiAgdGhpcy5leHByZXNzaW9uID0gaXNGbiA/ICcnIDogZXhwT3JGblxuICB0aGlzLmNiID0gY2JcbiAgdGhpcy5pZCA9ICsrdWlkIC8vIHVpZCBmb3IgYmF0Y2hpbmdcbiAgdGhpcy5hY3RpdmUgPSB0cnVlXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHRoaXMuZGVlcCA9ICEhb3B0aW9ucy5kZWVwXG4gIHRoaXMudXNlciA9ICEhb3B0aW9ucy51c2VyXG4gIHRoaXMudHdvV2F5ID0gISFvcHRpb25zLnR3b1dheVxuICB0aGlzLmZpbHRlcnMgPSBvcHRpb25zLmZpbHRlcnNcbiAgdGhpcy5wcmVQcm9jZXNzID0gb3B0aW9ucy5wcmVQcm9jZXNzXG4gIHRoaXMuZGVwcyA9IFtdXG4gIHRoaXMubmV3RGVwcyA9IFtdXG4gIC8vIHBhcnNlIGV4cHJlc3Npb24gZm9yIGdldHRlci9zZXR0ZXJcbiAgaWYgKGlzRm4pIHtcbiAgICB0aGlzLmdldHRlciA9IGV4cE9yRm5cbiAgICB0aGlzLnNldHRlciA9IHVuZGVmaW5lZFxuICB9IGVsc2Uge1xuICAgIHZhciByZXMgPSBleHBQYXJzZXIucGFyc2UoZXhwT3JGbiwgb3B0aW9ucy50d29XYXkpXG4gICAgdGhpcy5nZXR0ZXIgPSByZXMuZ2V0XG4gICAgdGhpcy5zZXR0ZXIgPSByZXMuc2V0XG4gIH1cbiAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0KClcbiAgLy8gc3RhdGUgZm9yIGF2b2lkaW5nIGZhbHNlIHRyaWdnZXJzIGZvciBkZWVwIGFuZCBBcnJheVxuICAvLyB3YXRjaGVycyBkdXJpbmcgdm0uX2RpZ2VzdCgpXG4gIHRoaXMucXVldWVkID0gdGhpcy5zaGFsbG93ID0gZmFsc2Vcbn1cblxudmFyIHAgPSBXYXRjaGVyLnByb3RvdHlwZVxuXG4vKipcbiAqIEFkZCBhIGRlcGVuZGVuY3kgdG8gdGhpcyBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIHtEZXB9IGRlcFxuICovXG5cbnAuYWRkRGVwID0gZnVuY3Rpb24gKGRlcCkge1xuICB2YXIgbmV3RGVwcyA9IHRoaXMubmV3RGVwc1xuICB2YXIgb2xkID0gdGhpcy5kZXBzXG4gIGlmIChfLmluZGV4T2YobmV3RGVwcywgZGVwKSA8IDApIHtcbiAgICBuZXdEZXBzLnB1c2goZGVwKVxuICAgIHZhciBpID0gXy5pbmRleE9mKG9sZCwgZGVwKVxuICAgIGlmIChpIDwgMCkge1xuICAgICAgZGVwLmFkZFN1Yih0aGlzKVxuICAgIH0gZWxzZSB7XG4gICAgICBvbGRbaV0gPSBudWxsXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRXZhbHVhdGUgdGhlIGdldHRlciwgYW5kIHJlLWNvbGxlY3QgZGVwZW5kZW5jaWVzLlxuICovXG5cbnAuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmJlZm9yZUdldCgpXG4gIHZhciB2bSA9IHRoaXMudm1cbiAgdmFyIHZhbHVlXG4gIHRyeSB7XG4gICAgdmFsdWUgPSB0aGlzLmdldHRlci5jYWxsKHZtLCB2bSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChjb25maWcud2FybkV4cHJlc3Npb25FcnJvcnMpIHtcbiAgICAgIF8ud2FybihcbiAgICAgICAgJ0Vycm9yIHdoZW4gZXZhbHVhdGluZyBleHByZXNzaW9uIFwiJyArXG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiArICdcIi4gJyArXG4gICAgICAgIChjb25maWcuZGVidWdcbiAgICAgICAgICA/ICcnIDpcbiAgICAgICAgICAnVHVybiBvbiBkZWJ1ZyBtb2RlIHRvIHNlZSBzdGFjayB0cmFjZS4nXG4gICAgICAgICksIGVcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgLy8gXCJ0b3VjaFwiIGV2ZXJ5IHByb3BlcnR5IHNvIHRoZXkgYXJlIGFsbCB0cmFja2VkIGFzXG4gIC8vIGRlcGVuZGVuY2llcyBmb3IgZGVlcCB3YXRjaGluZ1xuICBpZiAodGhpcy5kZWVwKSB7XG4gICAgdHJhdmVyc2UodmFsdWUpXG4gIH1cbiAgaWYgKHRoaXMucHJlUHJvY2Vzcykge1xuICAgIHZhbHVlID0gdGhpcy5wcmVQcm9jZXNzKHZhbHVlKVxuICB9XG4gIGlmICh0aGlzLmZpbHRlcnMpIHtcbiAgICB2YWx1ZSA9IHZtLl9hcHBseUZpbHRlcnModmFsdWUsIG51bGwsIHRoaXMuZmlsdGVycywgZmFsc2UpXG4gIH1cbiAgdGhpcy5hZnRlckdldCgpXG4gIHJldHVybiB2YWx1ZVxufVxuXG4vKipcbiAqIFNldCB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZSB3aXRoIHRoZSBzZXR0ZXIuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICovXG5cbnAuc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciB2bSA9IHRoaXMudm1cbiAgaWYgKHRoaXMuZmlsdGVycykge1xuICAgIHZhbHVlID0gdm0uX2FwcGx5RmlsdGVycyhcbiAgICAgIHZhbHVlLCB0aGlzLnZhbHVlLCB0aGlzLmZpbHRlcnMsIHRydWUpXG4gIH1cbiAgdHJ5IHtcbiAgICB0aGlzLnNldHRlci5jYWxsKHZtLCB2bSwgdmFsdWUpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoY29uZmlnLndhcm5FeHByZXNzaW9uRXJyb3JzKSB7XG4gICAgICBfLndhcm4oXG4gICAgICAgICdFcnJvciB3aGVuIGV2YWx1YXRpbmcgc2V0dGVyIFwiJyArXG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbiArICdcIicsIGVcbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBQcmVwYXJlIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXG4gKi9cblxucC5iZWZvcmVHZXQgPSBmdW5jdGlvbiAoKSB7XG4gIE9ic2VydmVyLnNldFRhcmdldCh0aGlzKVxufVxuXG4vKipcbiAqIENsZWFuIHVwIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXG4gKi9cblxucC5hZnRlckdldCA9IGZ1bmN0aW9uICgpIHtcbiAgT2JzZXJ2ZXIuc2V0VGFyZ2V0KG51bGwpXG4gIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIGRlcCA9IHRoaXMuZGVwc1tpXVxuICAgIGlmIChkZXApIHtcbiAgICAgIGRlcC5yZW1vdmVTdWIodGhpcylcbiAgICB9XG4gIH1cbiAgdGhpcy5kZXBzID0gdGhpcy5uZXdEZXBzXG4gIHRoaXMubmV3RGVwcyA9IFtdXG59XG5cbi8qKlxuICogU3Vic2NyaWJlciBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCB3aGVuIGEgZGVwZW5kZW5jeSBjaGFuZ2VzLlxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc2hhbGxvd1xuICovXG5cbnAudXBkYXRlID0gZnVuY3Rpb24gKHNoYWxsb3cpIHtcbiAgaWYgKCFjb25maWcuYXN5bmMpIHtcbiAgICB0aGlzLnJ1bigpXG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgcXVldWVkLCBvbmx5IG92ZXJ3cml0ZSBzaGFsbG93IHdpdGggbm9uLXNoYWxsb3csXG4gICAgLy8gYnV0IG5vdCB0aGUgb3RoZXIgd2F5IGFyb3VuZC5cbiAgICB0aGlzLnNoYWxsb3cgPSB0aGlzLnF1ZXVlZFxuICAgICAgPyBzaGFsbG93XG4gICAgICAgID8gdGhpcy5zaGFsbG93XG4gICAgICAgIDogZmFsc2VcbiAgICAgIDogISFzaGFsbG93XG4gICAgdGhpcy5xdWV1ZWQgPSB0cnVlXG4gICAgYmF0Y2hlci5wdXNoKHRoaXMpXG4gIH1cbn1cblxuLyoqXG4gKiBCYXRjaGVyIGpvYiBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCBieSB0aGUgYmF0Y2hlci5cbiAqL1xuXG5wLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5nZXQoKVxuICAgIGlmIChcbiAgICAgIHZhbHVlICE9PSB0aGlzLnZhbHVlIHx8XG4gICAgICAvLyBEZWVwIHdhdGNoZXJzIGFuZCBBcnJheSB3YXRjaGVycyBzaG91bGQgZmlyZSBldmVuXG4gICAgICAvLyB3aGVuIHRoZSB2YWx1ZSBpcyB0aGUgc2FtZSwgYmVjYXVzZSB0aGUgdmFsdWUgbWF5XG4gICAgICAvLyBoYXZlIG11dGF0ZWQ7IGJ1dCBvbmx5IGRvIHNvIGlmIHRoaXMgaXMgYVxuICAgICAgLy8gbm9uLXNoYWxsb3cgdXBkYXRlIChjYXVzZWQgYnkgYSB2bSBkaWdlc3QpLlxuICAgICAgKChfLmlzQXJyYXkodmFsdWUpIHx8IHRoaXMuZGVlcCkgJiYgIXRoaXMuc2hhbGxvdylcbiAgICApIHtcbiAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWVcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgICAgdGhpcy5jYih2YWx1ZSwgb2xkVmFsdWUpXG4gICAgfVxuICAgIHRoaXMucXVldWVkID0gdGhpcy5zaGFsbG93ID0gZmFsc2VcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBzZWxmIGZyb20gYWxsIGRlcGVuZGVuY2llcycgc3ViY3JpYmVyIGxpc3QuXG4gKi9cblxucC50ZWFyZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSB2bSdzIHdhdGNoZXIgbGlzdFxuICAgIC8vIHdlIGNhbiBza2lwIHRoaXMgaWYgdGhlIHZtIGlmIGJlaW5nIGRlc3Ryb3llZFxuICAgIC8vIHdoaWNoIGNhbiBpbXByb3ZlIHRlYXJkb3duIHBlcmZvcm1hbmNlLlxuICAgIGlmICghdGhpcy52bS5faXNCZWluZ0Rlc3Ryb3llZCkge1xuICAgICAgdGhpcy52bS5fd2F0Y2hlcnMuJHJlbW92ZSh0aGlzKVxuICAgIH1cbiAgICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLmRlcHNbaV0ucmVtb3ZlU3ViKHRoaXMpXG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2VcbiAgICB0aGlzLnZtID0gdGhpcy5jYiA9IHRoaXMudmFsdWUgPSBudWxsXG4gIH1cbn1cblxuLyoqXG4gKiBSZWNydXNpdmVseSB0cmF2ZXJzZSBhbiBvYmplY3QgdG8gZXZva2UgYWxsIGNvbnZlcnRlZFxuICogZ2V0dGVycywgc28gdGhhdCBldmVyeSBuZXN0ZWQgcHJvcGVydHkgaW5zaWRlIHRoZSBvYmplY3RcbiAqIGlzIGNvbGxlY3RlZCBhcyBhIFwiZGVlcFwiIGRlcGVuZGVuY3kuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICovXG5cbmZ1bmN0aW9uIHRyYXZlcnNlIChvYmopIHtcbiAgdmFyIGtleSwgdmFsLCBpXG4gIGZvciAoa2V5IGluIG9iaikge1xuICAgIHZhbCA9IG9ialtrZXldXG4gICAgaWYgKF8uaXNBcnJheSh2YWwpKSB7XG4gICAgICBpID0gdmFsLmxlbmd0aFxuICAgICAgd2hpbGUgKGktLSkgdHJhdmVyc2UodmFsW2ldKVxuICAgIH0gZWxzZSBpZiAoXy5pc09iamVjdCh2YWwpKSB7XG4gICAgICB0cmF2ZXJzZSh2YWwpXG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2F0Y2hlclxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlL3NyYy93YXRjaGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJylcbnZhciBEZXAgPSByZXF1aXJlKCcuL2RlcCcpXG52YXIgYXJyYXlNZXRob2RzID0gcmVxdWlyZSgnLi9hcnJheScpXG52YXIgYXJyYXlLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXJyYXlNZXRob2RzKVxucmVxdWlyZSgnLi9vYmplY3QnKVxuXG4vKipcbiAqIE9ic2VydmVyIGNsYXNzIHRoYXQgYXJlIGF0dGFjaGVkIHRvIGVhY2ggb2JzZXJ2ZWRcbiAqIG9iamVjdC4gT25jZSBhdHRhY2hlZCwgdGhlIG9ic2VydmVyIGNvbnZlcnRzIHRhcmdldFxuICogb2JqZWN0J3MgcHJvcGVydHkga2V5cyBpbnRvIGdldHRlci9zZXR0ZXJzIHRoYXRcbiAqIGNvbGxlY3QgZGVwZW5kZW5jaWVzIGFuZCBkaXNwYXRjaGVzIHVwZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IHZhbHVlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5mdW5jdGlvbiBPYnNlcnZlciAodmFsdWUpIHtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIHRoaXMuYWN0aXZlID0gdHJ1ZVxuICB0aGlzLmRlcHMgPSBbXVxuICBfLmRlZmluZSh2YWx1ZSwgJ19fb2JfXycsIHRoaXMpXG4gIGlmIChfLmlzQXJyYXkodmFsdWUpKSB7XG4gICAgdmFyIGF1Z21lbnQgPSBjb25maWcucHJvdG8gJiYgXy5oYXNQcm90b1xuICAgICAgPyBwcm90b0F1Z21lbnRcbiAgICAgIDogY29weUF1Z21lbnRcbiAgICBhdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cylcbiAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSlcbiAgfSBlbHNlIHtcbiAgICB0aGlzLndhbGsodmFsdWUpXG4gIH1cbn1cblxuLy8gU3RhdGljIG1ldGhvZHNcblxuLyoqXG4gKiBBdHRlbXB0IHRvIGNyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZSBmb3IgYSB2YWx1ZSxcbiAqIHJldHVybnMgdGhlIG5ldyBvYnNlcnZlciBpZiBzdWNjZXNzZnVsbHkgb2JzZXJ2ZWQsXG4gKiBvciB0aGUgZXhpc3Rpbmcgb2JzZXJ2ZXIgaWYgdGhlIHZhbHVlIGFscmVhZHkgaGFzIG9uZS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge1Z1ZX0gW3ZtXVxuICogQHJldHVybiB7T2JzZXJ2ZXJ8dW5kZWZpbmVkfVxuICogQHN0YXRpY1xuICovXG5cbk9ic2VydmVyLmNyZWF0ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgdm0pIHtcbiAgdmFyIG9iXG4gIGlmIChcbiAgICB2YWx1ZSAmJlxuICAgIHZhbHVlLmhhc093blByb3BlcnR5KCdfX29iX18nKSAmJlxuICAgIHZhbHVlLl9fb2JfXyBpbnN0YW5jZW9mIE9ic2VydmVyXG4gICkge1xuICAgIG9iID0gdmFsdWUuX19vYl9fXG4gIH0gZWxzZSBpZiAoXG4gICAgXy5pc09iamVjdCh2YWx1ZSkgJiZcbiAgICAhT2JqZWN0LmlzRnJvemVuKHZhbHVlKSAmJlxuICAgICF2YWx1ZS5faXNWdWVcbiAgKSB7XG4gICAgb2IgPSBuZXcgT2JzZXJ2ZXIodmFsdWUpXG4gIH1cbiAgaWYgKG9iICYmIHZtKSB7XG4gICAgb2IuYWRkVm0odm0pXG4gIH1cbiAgcmV0dXJuIG9iXG59XG5cbi8qKlxuICogU2V0IHRoZSB0YXJnZXQgd2F0Y2hlciB0aGF0IGlzIGN1cnJlbnRseSBiZWluZyBldmFsdWF0ZWQuXG4gKlxuICogQHBhcmFtIHtXYXRjaGVyfSB3YXRjaGVyXG4gKi9cblxuT2JzZXJ2ZXIuc2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHdhdGNoZXIpIHtcbiAgRGVwLnRhcmdldCA9IHdhdGNoZXJcbn1cblxuLy8gSW5zdGFuY2UgbWV0aG9kc1xuXG52YXIgcCA9IE9ic2VydmVyLnByb3RvdHlwZVxuXG4vKipcbiAqIFdhbGsgdGhyb3VnaCBlYWNoIHByb3BlcnR5IGFuZCBjb252ZXJ0IHRoZW0gaW50b1xuICogZ2V0dGVyL3NldHRlcnMuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aGVuXG4gKiB2YWx1ZSB0eXBlIGlzIE9iamVjdC4gUHJvcGVydGllcyBwcmVmaXhlZCB3aXRoIGAkYCBvciBgX2BcbiAqIGFuZCBhY2Nlc3NvciBwcm9wZXJ0aWVzIGFyZSBpZ25vcmVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqL1xuXG5wLndhbGsgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKVxuICB2YXIgaSA9IGtleXMubGVuZ3RoXG4gIHZhciBrZXksIHByZWZpeFxuICB3aGlsZSAoaS0tKSB7XG4gICAga2V5ID0ga2V5c1tpXVxuICAgIHByZWZpeCA9IGtleS5jaGFyQ29kZUF0KDApXG4gICAgaWYgKHByZWZpeCAhPT0gMHgyNCAmJiBwcmVmaXggIT09IDB4NUYpIHsgLy8gc2tpcCAkIG9yIF9cbiAgICAgIHRoaXMuY29udmVydChrZXksIG9ialtrZXldKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRyeSB0byBjYXJldGUgYW4gb2JzZXJ2ZXIgZm9yIGEgY2hpbGQgdmFsdWUsXG4gKiBhbmQgaWYgdmFsdWUgaXMgYXJyYXksIGxpbmsgZGVwIHRvIHRoZSBhcnJheS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybiB7RGVwfHVuZGVmaW5lZH1cbiAqL1xuXG5wLm9ic2VydmUgPSBmdW5jdGlvbiAodmFsKSB7XG4gIHJldHVybiBPYnNlcnZlci5jcmVhdGUodmFsKVxufVxuXG4vKipcbiAqIE9ic2VydmUgYSBsaXN0IG9mIEFycmF5IGl0ZW1zLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG4gKi9cblxucC5vYnNlcnZlQXJyYXkgPSBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgdmFyIGkgPSBpdGVtcy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIHRoaXMub2JzZXJ2ZShpdGVtc1tpXSlcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgYSBwcm9wZXJ0eSBpbnRvIGdldHRlci9zZXR0ZXIgc28gd2UgY2FuIGVtaXRcbiAqIHRoZSBldmVudHMgd2hlbiB0aGUgcHJvcGVydHkgaXMgYWNjZXNzZWQvY2hhbmdlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbnAuY29udmVydCA9IGZ1bmN0aW9uIChrZXksIHZhbCkge1xuICB2YXIgb2IgPSB0aGlzXG4gIHZhciBjaGlsZE9iID0gb2Iub2JzZXJ2ZSh2YWwpXG4gIHZhciBkZXAgPSBuZXcgRGVwKClcbiAgaWYgKGNoaWxkT2IpIHtcbiAgICBjaGlsZE9iLmRlcHMucHVzaChkZXApXG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iLnZhbHVlLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChvYi5hY3RpdmUpIHtcbiAgICAgICAgZGVwLmRlcGVuZCgpXG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIChuZXdWYWwpIHtcbiAgICAgIGlmIChuZXdWYWwgPT09IHZhbCkgcmV0dXJuXG4gICAgICAvLyByZW1vdmUgZGVwIGZyb20gb2xkIHZhbHVlXG4gICAgICB2YXIgb2xkQ2hpbGRPYiA9IHZhbCAmJiB2YWwuX19vYl9fXG4gICAgICBpZiAob2xkQ2hpbGRPYikge1xuICAgICAgICBvbGRDaGlsZE9iLmRlcHMuJHJlbW92ZShkZXApXG4gICAgICB9XG4gICAgICB2YWwgPSBuZXdWYWxcbiAgICAgIC8vIGFkZCBkZXAgdG8gbmV3IHZhbHVlXG4gICAgICB2YXIgbmV3Q2hpbGRPYiA9IG9iLm9ic2VydmUobmV3VmFsKVxuICAgICAgaWYgKG5ld0NoaWxkT2IpIHtcbiAgICAgICAgbmV3Q2hpbGRPYi5kZXBzLnB1c2goZGVwKVxuICAgICAgfVxuICAgICAgZGVwLm5vdGlmeSgpXG4gICAgfVxuICB9KVxufVxuXG4vKipcbiAqIE5vdGlmeSBjaGFuZ2Ugb24gYWxsIHNlbGYgZGVwcyBvbiBhbiBvYnNlcnZlci5cbiAqIFRoaXMgaXMgY2FsbGVkIHdoZW4gYSBtdXRhYmxlIHZhbHVlIG11dGF0ZXMuIGUuZy5cbiAqIHdoZW4gYW4gQXJyYXkncyBtdXRhdGluZyBtZXRob2RzIGFyZSBjYWxsZWQsIG9yIGFuXG4gKiBPYmplY3QncyAkYWRkLyRkZWxldGUgYXJlIGNhbGxlZC5cbiAqL1xuXG5wLm5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGRlcHMgPSB0aGlzLmRlcHNcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBkZXBzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGRlcHNbaV0ubm90aWZ5KClcbiAgfVxufVxuXG4vKipcbiAqIEFkZCBhbiBvd25lciB2bSwgc28gdGhhdCB3aGVuICRhZGQvJGRlbGV0ZSBtdXRhdGlvbnNcbiAqIGhhcHBlbiB3ZSBjYW4gbm90aWZ5IG93bmVyIHZtcyB0byBwcm94eSB0aGUga2V5cyBhbmRcbiAqIGRpZ2VzdCB0aGUgd2F0Y2hlcnMuIFRoaXMgaXMgb25seSBjYWxsZWQgd2hlbiB0aGUgb2JqZWN0XG4gKiBpcyBvYnNlcnZlZCBhcyBhbiBpbnN0YW5jZSdzIHJvb3QgJGRhdGEuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKi9cblxucC5hZGRWbSA9IGZ1bmN0aW9uICh2bSkge1xuICAodGhpcy52bXMgfHwgKHRoaXMudm1zID0gW10pKS5wdXNoKHZtKVxufVxuXG4vKipcbiAqIFJlbW92ZSBhbiBvd25lciB2bS4gVGhpcyBpcyBjYWxsZWQgd2hlbiB0aGUgb2JqZWN0IGlzXG4gKiBzd2FwcGVkIG91dCBhcyBhbiBpbnN0YW5jZSdzICRkYXRhIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqL1xuXG5wLnJlbW92ZVZtID0gZnVuY3Rpb24gKHZtKSB7XG4gIHRoaXMudm1zLiRyZW1vdmUodm0pXG59XG5cbi8vIGhlbHBlcnNcblxuLyoqXG4gKiBBdWdtZW50IGFuIHRhcmdldCBPYmplY3Qgb3IgQXJyYXkgYnkgaW50ZXJjZXB0aW5nXG4gKiB0aGUgcHJvdG90eXBlIGNoYWluIHVzaW5nIF9fcHJvdG9fX1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSB0YXJnZXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90b1xuICovXG5cbmZ1bmN0aW9uIHByb3RvQXVnbWVudCAodGFyZ2V0LCBzcmMpIHtcbiAgdGFyZ2V0Ll9fcHJvdG9fXyA9IHNyY1xufVxuXG4vKipcbiAqIEF1Z21lbnQgYW4gdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBkZWZpbmluZ1xuICogaGlkZGVuIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvXG4gKi9cblxuZnVuY3Rpb24gY29weUF1Z21lbnQgKHRhcmdldCwgc3JjLCBrZXlzKSB7XG4gIHZhciBpID0ga2V5cy5sZW5ndGhcbiAgdmFyIGtleVxuICB3aGlsZSAoaS0tKSB7XG4gICAga2V5ID0ga2V5c1tpXVxuICAgIF8uZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSlcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE9ic2VydmVyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUvc3JjL29ic2VydmVyL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG5cbi8qKlxuICogQSBkZXAgaXMgYW4gb2JzZXJ2YWJsZSB0aGF0IGNhbiBoYXZlIG11bHRpcGxlXG4gKiBkaXJlY3RpdmVzIHN1YnNjcmliaW5nIHRvIGl0LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbmZ1bmN0aW9uIERlcCAoKSB7XG4gIHRoaXMuc3VicyA9IFtdXG59XG5cbi8vIHRoZSBjdXJyZW50IHRhcmdldCB3YXRjaGVyIGJlaW5nIGV2YWx1YXRlZC5cbi8vIHRoaXMgaXMgZ2xvYmFsbHkgdW5pcXVlIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb25seSBvbmVcbi8vIHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkIGF0IGFueSB0aW1lLlxuRGVwLnRhcmdldCA9IG51bGxcblxudmFyIHAgPSBEZXAucHJvdG90eXBlXG5cbi8qKlxuICogQWRkIGEgZGlyZWN0aXZlIHN1YnNjcmliZXIuXG4gKlxuICogQHBhcmFtIHtEaXJlY3RpdmV9IHN1YlxuICovXG5cbnAuYWRkU3ViID0gZnVuY3Rpb24gKHN1Yikge1xuICB0aGlzLnN1YnMucHVzaChzdWIpXG59XG5cbi8qKlxuICogUmVtb3ZlIGEgZGlyZWN0aXZlIHN1YnNjcmliZXIuXG4gKlxuICogQHBhcmFtIHtEaXJlY3RpdmV9IHN1YlxuICovXG5cbnAucmVtb3ZlU3ViID0gZnVuY3Rpb24gKHN1Yikge1xuICB0aGlzLnN1YnMuJHJlbW92ZShzdWIpXG59XG5cbi8qKlxuICogQWRkIHNlbGYgYXMgYSBkZXBlbmRlbmN5IHRvIHRoZSB0YXJnZXQgd2F0Y2hlci5cbiAqL1xuXG5wLmRlcGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKERlcC50YXJnZXQpIHtcbiAgICBEZXAudGFyZ2V0LmFkZERlcCh0aGlzKVxuICB9XG59XG5cbi8qKlxuICogTm90aWZ5IGFsbCBzdWJzY3JpYmVycyBvZiBhIG5ldyB2YWx1ZS5cbiAqL1xuXG5wLm5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gc3RhYmxpemUgdGhlIHN1YnNjcmliZXIgbGlzdCBmaXJzdFxuICB2YXIgc3VicyA9IF8udG9BcnJheSh0aGlzLnN1YnMpXG4gIGZvciAodmFyIGkgPSAwLCBsID0gc3Vicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBzdWJzW2ldLnVwZGF0ZSgpXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEZXBcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvb2JzZXJ2ZXIvZGVwLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZVxudmFyIGFycmF5TWV0aG9kcyA9IE9iamVjdC5jcmVhdGUoYXJyYXlQcm90bylcblxuLyoqXG4gKiBJbnRlcmNlcHQgbXV0YXRpbmcgbWV0aG9kcyBhbmQgZW1pdCBldmVudHNcbiAqL1xuXG47W1xuICAncHVzaCcsXG4gICdwb3AnLFxuICAnc2hpZnQnLFxuICAndW5zaGlmdCcsXG4gICdzcGxpY2UnLFxuICAnc29ydCcsXG4gICdyZXZlcnNlJ1xuXVxuLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAvLyBjYWNoZSBvcmlnaW5hbCBtZXRob2RcbiAgdmFyIG9yaWdpbmFsID0gYXJyYXlQcm90b1ttZXRob2RdXG4gIF8uZGVmaW5lKGFycmF5TWV0aG9kcywgbWV0aG9kLCBmdW5jdGlvbiBtdXRhdG9yICgpIHtcbiAgICAvLyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50czpcbiAgICAvLyBodHRwOi8vanNwZXJmLmNvbS9jbG9zdXJlLXdpdGgtYXJndW1lbnRzXG4gICAgdmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoaSlcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldXG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKVxuICAgIHZhciBvYiA9IHRoaXMuX19vYl9fXG4gICAgdmFyIGluc2VydGVkXG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3NcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3Vuc2hpZnQnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3NcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3NwbGljZSc6XG4gICAgICAgIGluc2VydGVkID0gYXJncy5zbGljZSgyKVxuICAgICAgICBicmVha1xuICAgIH1cbiAgICBpZiAoaW5zZXJ0ZWQpIG9iLm9ic2VydmVBcnJheShpbnNlcnRlZClcbiAgICAvLyBub3RpZnkgY2hhbmdlXG4gICAgb2Iubm90aWZ5KClcbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pXG59KVxuXG4vKipcbiAqIFN3YXAgdGhlIGVsZW1lbnQgYXQgdGhlIGdpdmVuIGluZGV4IHdpdGggYSBuZXcgdmFsdWVcbiAqIGFuZCBlbWl0cyBjb3JyZXNwb25kaW5nIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm4geyp9IC0gcmVwbGFjZWQgZWxlbWVudFxuICovXG5cbl8uZGVmaW5lKFxuICBhcnJheVByb3RvLFxuICAnJHNldCcsXG4gIGZ1bmN0aW9uICRzZXQgKGluZGV4LCB2YWwpIHtcbiAgICBpZiAoaW5kZXggPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGVuZ3RoID0gaW5kZXggKyAxXG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNwbGljZShpbmRleCwgMSwgdmFsKVswXVxuICB9XG4pXG5cbi8qKlxuICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHJlbW92ZSB0aGUgZWxlbWVudCBhdCBnaXZlbiBpbmRleC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuXy5kZWZpbmUoXG4gIGFycmF5UHJvdG8sXG4gICckcmVtb3ZlJyxcbiAgZnVuY3Rpb24gJHJlbW92ZSAoaW5kZXgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIXRoaXMubGVuZ3RoKSByZXR1cm5cbiAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgaW5kZXggPSBfLmluZGV4T2YodGhpcywgaW5kZXgpXG4gICAgfVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG4pXG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNZXRob2RzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUvc3JjL29ic2VydmVyL2FycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgb2JqUHJvdG8gPSBPYmplY3QucHJvdG90eXBlXG5cbi8qKlxuICogQWRkIGEgbmV3IHByb3BlcnR5IHRvIGFuIG9ic2VydmVkIG9iamVjdFxuICogYW5kIGVtaXRzIGNvcnJlc3BvbmRpbmcgZXZlbnRcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHB1YmxpY1xuICovXG5cbl8uZGVmaW5lKFxuICBvYmpQcm90byxcbiAgJyRhZGQnLFxuICBmdW5jdGlvbiAkYWRkIChrZXksIHZhbCkge1xuICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkpIHJldHVyblxuICAgIHZhciBvYiA9IHRoaXMuX19vYl9fXG4gICAgaWYgKCFvYiB8fCBfLmlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgICAgdGhpc1trZXldID0gdmFsXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgb2IuY29udmVydChrZXksIHZhbClcbiAgICBvYi5ub3RpZnkoKVxuICAgIGlmIChvYi52bXMpIHtcbiAgICAgIHZhciBpID0gb2Iudm1zLmxlbmd0aFxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICB2YXIgdm0gPSBvYi52bXNbaV1cbiAgICAgICAgdm0uX3Byb3h5KGtleSlcbiAgICAgICAgdm0uX2RpZ2VzdCgpXG4gICAgICB9XG4gICAgfVxuICB9XG4pXG5cbi8qKlxuICogU2V0IGEgcHJvcGVydHkgb24gYW4gb2JzZXJ2ZWQgb2JqZWN0LCBjYWxsaW5nIGFkZCB0b1xuICogZW5zdXJlIHRoZSBwcm9wZXJ0eSBpcyBvYnNlcnZlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHB1YmxpY1xuICovXG5cbl8uZGVmaW5lKFxuICBvYmpQcm90byxcbiAgJyRzZXQnLFxuICBmdW5jdGlvbiAkc2V0IChrZXksIHZhbCkge1xuICAgIHRoaXMuJGFkZChrZXksIHZhbClcbiAgICB0aGlzW2tleV0gPSB2YWxcbiAgfVxuKVxuXG4vKipcbiAqIERlbGV0ZXMgYSBwcm9wZXJ0eSBmcm9tIGFuIG9ic2VydmVkIG9iamVjdFxuICogYW5kIGVtaXRzIGNvcnJlc3BvbmRpbmcgZXZlbnRcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcHVibGljXG4gKi9cblxuXy5kZWZpbmUoXG4gIG9ialByb3RvLFxuICAnJGRlbGV0ZScsXG4gIGZ1bmN0aW9uICRkZWxldGUgKGtleSkge1xuICAgIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSByZXR1cm5cbiAgICBkZWxldGUgdGhpc1trZXldXG4gICAgdmFyIG9iID0gdGhpcy5fX29iX19cbiAgICBpZiAoIW9iIHx8IF8uaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgb2Iubm90aWZ5KClcbiAgICBpZiAob2Iudm1zKSB7XG4gICAgICB2YXIgaSA9IG9iLnZtcy5sZW5ndGhcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgdmFyIHZtID0gb2Iudm1zW2ldXG4gICAgICAgIHZtLl91bnByb3h5KGtleSlcbiAgICAgICAgdm0uX2RpZ2VzdCgpXG4gICAgICB9XG4gICAgfVxuICB9XG4pXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUvc3JjL29ic2VydmVyL29iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIFBhdGggPSByZXF1aXJlKCcuL3BhdGgnKVxudmFyIENhY2hlID0gcmVxdWlyZSgnLi4vY2FjaGUnKVxudmFyIGV4cHJlc3Npb25DYWNoZSA9IG5ldyBDYWNoZSgxMDAwKVxuXG52YXIgYWxsb3dlZEtleXdvcmRzID1cbiAgJ01hdGgsRGF0ZSx0aGlzLHRydWUsZmFsc2UsbnVsbCx1bmRlZmluZWQsSW5maW5pdHksTmFOLCcgK1xuICAnaXNOYU4saXNGaW5pdGUsZGVjb2RlVVJJLGRlY29kZVVSSUNvbXBvbmVudCxlbmNvZGVVUkksJyArXG4gICdlbmNvZGVVUklDb21wb25lbnQscGFyc2VJbnQscGFyc2VGbG9hdCdcbnZhciBhbGxvd2VkS2V5d29yZHNSRSA9XG4gIG5ldyBSZWdFeHAoJ14oJyArIGFsbG93ZWRLZXl3b3Jkcy5yZXBsYWNlKC8sL2csICdcXFxcYnwnKSArICdcXFxcYiknKVxuXG4vLyBrZXl3b3JkcyB0aGF0IGRvbid0IG1ha2Ugc2Vuc2UgaW5zaWRlIGV4cHJlc3Npb25zXG52YXIgaW1wcm9wZXJLZXl3b3JkcyA9XG4gICdicmVhayxjYXNlLGNsYXNzLGNhdGNoLGNvbnN0LGNvbnRpbnVlLGRlYnVnZ2VyLGRlZmF1bHQsJyArXG4gICdkZWxldGUsZG8sZWxzZSxleHBvcnQsZXh0ZW5kcyxmaW5hbGx5LGZvcixmdW5jdGlvbixpZiwnICtcbiAgJ2ltcG9ydCxpbixpbnN0YW5jZW9mLGxldCxyZXR1cm4sc3VwZXIsc3dpdGNoLHRocm93LHRyeSwnICtcbiAgJ3Zhcix3aGlsZSx3aXRoLHlpZWxkLGVudW0sYXdhaXQsaW1wbGVtZW50cyxwYWNrYWdlLCcgK1xuICAncHJvY3RlY3RlZCxzdGF0aWMsaW50ZXJmYWNlLHByaXZhdGUscHVibGljJ1xudmFyIGltcHJvcGVyS2V5d29yZHNSRSA9XG4gIG5ldyBSZWdFeHAoJ14oJyArIGltcHJvcGVyS2V5d29yZHMucmVwbGFjZSgvLC9nLCAnXFxcXGJ8JykgKyAnXFxcXGIpJylcblxudmFyIHdzUkUgPSAvXFxzL2dcbnZhciBuZXdsaW5lUkUgPSAvXFxuL2dcbnZhciBzYXZlUkUgPSAvW1xceyxdXFxzKltcXHdcXCRfXStcXHMqOnwoJ1teJ10qJ3xcIlteXCJdKlwiKXxuZXcgfHR5cGVvZiB8dm9pZCAvZ1xudmFyIHJlc3RvcmVSRSA9IC9cIihcXGQrKVwiL2dcbnZhciBwYXRoVGVzdFJFID0gL15bQS1aYS16XyRdW1xcdyRdKihcXC5bQS1aYS16XyRdW1xcdyRdKnxcXFsnLio/J1xcXXxcXFtcIi4qP1wiXFxdfFxcW1xcZCtcXF18XFxbW0EtWmEtel8kXVtcXHckXSpcXF0pKiQvXG52YXIgcGF0aFJlcGxhY2VSRSA9IC9bXlxcdyRcXC5dKFtBLVphLXpfJF1bXFx3JF0qKFxcLltBLVphLXpfJF1bXFx3JF0qfFxcWycuKj8nXFxdfFxcW1wiLio/XCJcXF0pKikvZ1xudmFyIGJvb2xlYW5MaXRlcmFsUkUgPSAvXih0cnVlfGZhbHNlKSQvXG5cbi8qKlxuICogU2F2ZSAvIFJld3JpdGUgLyBSZXN0b3JlXG4gKlxuICogV2hlbiByZXdyaXRpbmcgcGF0aHMgZm91bmQgaW4gYW4gZXhwcmVzc2lvbiwgaXQgaXNcbiAqIHBvc3NpYmxlIGZvciB0aGUgc2FtZSBsZXR0ZXIgc2VxdWVuY2VzIHRvIGJlIGZvdW5kIGluXG4gKiBzdHJpbmdzIGFuZCBPYmplY3QgbGl0ZXJhbCBwcm9wZXJ0eSBrZXlzLiBUaGVyZWZvcmUgd2VcbiAqIHJlbW92ZSBhbmQgc3RvcmUgdGhlc2UgcGFydHMgaW4gYSB0ZW1wb3JhcnkgYXJyYXksIGFuZFxuICogcmVzdG9yZSB0aGVtIGFmdGVyIHRoZSBwYXRoIHJld3JpdGUuXG4gKi9cblxudmFyIHNhdmVkID0gW11cblxuLyoqXG4gKiBTYXZlIHJlcGxhY2VyXG4gKlxuICogVGhlIHNhdmUgcmVnZXggY2FuIG1hdGNoIHR3byBwb3NzaWJsZSBjYXNlczpcbiAqIDEuIEFuIG9wZW5pbmcgb2JqZWN0IGxpdGVyYWxcbiAqIDIuIEEgc3RyaW5nXG4gKiBJZiBtYXRjaGVkIGFzIGEgcGxhaW4gc3RyaW5nLCB3ZSBuZWVkIHRvIGVzY2FwZSBpdHNcbiAqIG5ld2xpbmVzLCBzaW5jZSB0aGUgc3RyaW5nIG5lZWRzIHRvIGJlIHByZXNlcnZlZCB3aGVuXG4gKiBnZW5lcmF0aW5nIHRoZSBmdW5jdGlvbiBib2R5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpc1N0cmluZyAtIHN0ciBpZiBtYXRjaGVkIGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IC0gcGxhY2Vob2xkZXIgd2l0aCBpbmRleFxuICovXG5cbmZ1bmN0aW9uIHNhdmUgKHN0ciwgaXNTdHJpbmcpIHtcbiAgdmFyIGkgPSBzYXZlZC5sZW5ndGhcbiAgc2F2ZWRbaV0gPSBpc1N0cmluZ1xuICAgID8gc3RyLnJlcGxhY2UobmV3bGluZVJFLCAnXFxcXG4nKVxuICAgIDogc3RyXG4gIHJldHVybiAnXCInICsgaSArICdcIidcbn1cblxuLyoqXG4gKiBQYXRoIHJld3JpdGUgcmVwbGFjZXJcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcmF3XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gcmV3cml0ZSAocmF3KSB7XG4gIHZhciBjID0gcmF3LmNoYXJBdCgwKVxuICB2YXIgcGF0aCA9IHJhdy5zbGljZSgxKVxuICBpZiAoYWxsb3dlZEtleXdvcmRzUkUudGVzdChwYXRoKSkge1xuICAgIHJldHVybiByYXdcbiAgfSBlbHNlIHtcbiAgICBwYXRoID0gcGF0aC5pbmRleE9mKCdcIicpID4gLTFcbiAgICAgID8gcGF0aC5yZXBsYWNlKHJlc3RvcmVSRSwgcmVzdG9yZSlcbiAgICAgIDogcGF0aFxuICAgIHJldHVybiBjICsgJ3Njb3BlLicgKyBwYXRoXG4gIH1cbn1cblxuLyoqXG4gKiBSZXN0b3JlIHJlcGxhY2VyXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHBhcmFtIHtTdHJpbmd9IGkgLSBtYXRjaGVkIHNhdmUgaW5kZXhcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiByZXN0b3JlIChzdHIsIGkpIHtcbiAgcmV0dXJuIHNhdmVkW2ldXG59XG5cbi8qKlxuICogUmV3cml0ZSBhbiBleHByZXNzaW9uLCBwcmVmaXhpbmcgYWxsIHBhdGggYWNjZXNzb3JzIHdpdGhcbiAqIGBzY29wZS5gIGFuZCBnZW5lcmF0ZSBnZXR0ZXIvc2V0dGVyIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXhwXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG5lZWRTZXRcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmZ1bmN0aW9uIGNvbXBpbGVFeHBGbnMgKGV4cCwgbmVlZFNldCkge1xuICBpZiAoaW1wcm9wZXJLZXl3b3Jkc1JFLnRlc3QoZXhwKSkge1xuICAgIF8ud2FybihcbiAgICAgICdBdm9pZCB1c2luZyByZXNlcnZlZCBrZXl3b3JkcyBpbiBleHByZXNzaW9uOiAnICsgZXhwXG4gICAgKVxuICB9XG4gIC8vIHJlc2V0IHN0YXRlXG4gIHNhdmVkLmxlbmd0aCA9IDBcbiAgLy8gc2F2ZSBzdHJpbmdzIGFuZCBvYmplY3QgbGl0ZXJhbCBrZXlzXG4gIHZhciBib2R5ID0gZXhwXG4gICAgLnJlcGxhY2Uoc2F2ZVJFLCBzYXZlKVxuICAgIC5yZXBsYWNlKHdzUkUsICcnKVxuICAvLyByZXdyaXRlIGFsbCBwYXRoc1xuICAvLyBwYWQgMSBzcGFjZSBoZXJlIGJlY2F1ZSB0aGUgcmVnZXggbWF0Y2hlcyAxIGV4dHJhIGNoYXJcbiAgYm9keSA9ICgnICcgKyBib2R5KVxuICAgIC5yZXBsYWNlKHBhdGhSZXBsYWNlUkUsIHJld3JpdGUpXG4gICAgLnJlcGxhY2UocmVzdG9yZVJFLCByZXN0b3JlKVxuICB2YXIgZ2V0dGVyID0gbWFrZUdldHRlcihib2R5KVxuICBpZiAoZ2V0dGVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdldDogZ2V0dGVyLFxuICAgICAgYm9keTogYm9keSxcbiAgICAgIHNldDogbmVlZFNldFxuICAgICAgICA/IG1ha2VTZXR0ZXIoYm9keSlcbiAgICAgICAgOiBudWxsXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ29tcGlsZSBnZXR0ZXIgc2V0dGVycyBmb3IgYSBzaW1wbGUgcGF0aC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXhwXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5mdW5jdGlvbiBjb21waWxlUGF0aEZucyAoZXhwKSB7XG4gIHZhciBnZXR0ZXIsIHBhdGhcbiAgaWYgKGV4cC5pbmRleE9mKCdbJykgPCAwKSB7XG4gICAgLy8gcmVhbGx5IHNpbXBsZSBwYXRoXG4gICAgcGF0aCA9IGV4cC5zcGxpdCgnLicpXG4gICAgcGF0aC5yYXcgPSBleHBcbiAgICBnZXR0ZXIgPSBQYXRoLmNvbXBpbGVHZXR0ZXIocGF0aClcbiAgfSBlbHNlIHtcbiAgICAvLyBkbyB0aGUgcmVhbCBwYXJzaW5nXG4gICAgcGF0aCA9IFBhdGgucGFyc2UoZXhwKVxuICAgIGdldHRlciA9IHBhdGguZ2V0XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBnZXQ6IGdldHRlcixcbiAgICAvLyBhbHdheXMgZ2VuZXJhdGUgc2V0dGVyIGZvciBzaW1wbGUgcGF0aHNcbiAgICBzZXQ6IGZ1bmN0aW9uIChvYmosIHZhbCkge1xuICAgICAgUGF0aC5zZXQob2JqLCBwYXRoLCB2YWwpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQnVpbGQgYSBnZXR0ZXIgZnVuY3Rpb24uIFJlcXVpcmVzIGV2YWwuXG4gKlxuICogV2UgaXNvbGF0ZSB0aGUgdHJ5L2NhdGNoIHNvIGl0IGRvZXNuJ3QgYWZmZWN0IHRoZVxuICogb3B0aW1pemF0aW9uIG9mIHRoZSBwYXJzZSBmdW5jdGlvbiB3aGVuIGl0IGlzIG5vdCBjYWxsZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGJvZHlcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBtYWtlR2V0dGVyIChib2R5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbignc2NvcGUnLCAncmV0dXJuICcgKyBib2R5ICsgJzsnKVxuICB9IGNhdGNoIChlKSB7XG4gICAgXy53YXJuKFxuICAgICAgJ0ludmFsaWQgZXhwcmVzc2lvbi4gJyArXG4gICAgICAnR2VuZXJhdGVkIGZ1bmN0aW9uIGJvZHk6ICcgKyBib2R5XG4gICAgKVxuICB9XG59XG5cbi8qKlxuICogQnVpbGQgYSBzZXR0ZXIgZnVuY3Rpb24uXG4gKlxuICogVGhpcyBpcyBvbmx5IG5lZWRlZCBpbiByYXJlIHNpdHVhdGlvbnMgbGlrZSBcImFbYl1cIiB3aGVyZVxuICogYSBzZXR0YWJsZSBwYXRoIHJlcXVpcmVzIGR5bmFtaWMgZXZhbHVhdGlvbi5cbiAqXG4gKiBUaGlzIHNldHRlciBmdW5jdGlvbiBtYXkgdGhyb3cgZXJyb3Igd2hlbiBjYWxsZWQgaWYgdGhlXG4gKiBleHByZXNzaW9uIGJvZHkgaXMgbm90IGEgdmFsaWQgbGVmdC1oYW5kIGV4cHJlc3Npb24gaW5cbiAqIGFzc2lnbm1lbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGJvZHlcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBtYWtlU2V0dGVyIChib2R5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbignc2NvcGUnLCAndmFsdWUnLCBib2R5ICsgJz12YWx1ZTsnKVxuICB9IGNhdGNoIChlKSB7XG4gICAgXy53YXJuKCdJbnZhbGlkIHNldHRlciBmdW5jdGlvbiBib2R5OiAnICsgYm9keSlcbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGZvciBzZXR0ZXIgZXhpc3RlbmNlIG9uIGEgY2FjaGUgaGl0LlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhpdFxuICovXG5cbmZ1bmN0aW9uIGNoZWNrU2V0dGVyIChoaXQpIHtcbiAgaWYgKCFoaXQuc2V0KSB7XG4gICAgaGl0LnNldCA9IG1ha2VTZXR0ZXIoaGl0LmJvZHkpXG4gIH1cbn1cblxuLyoqXG4gKiBQYXJzZSBhbiBleHByZXNzaW9uIGludG8gcmUtd3JpdHRlbiBnZXR0ZXIvc2V0dGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXhwXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG5lZWRTZXRcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmV4cG9ydHMucGFyc2UgPSBmdW5jdGlvbiAoZXhwLCBuZWVkU2V0KSB7XG4gIGV4cCA9IGV4cC50cmltKClcbiAgLy8gdHJ5IGNhY2hlXG4gIHZhciBoaXQgPSBleHByZXNzaW9uQ2FjaGUuZ2V0KGV4cClcbiAgaWYgKGhpdCkge1xuICAgIGlmIChuZWVkU2V0KSB7XG4gICAgICBjaGVja1NldHRlcihoaXQpXG4gICAgfVxuICAgIHJldHVybiBoaXRcbiAgfVxuICAvLyB3ZSBkbyBhIHNpbXBsZSBwYXRoIGNoZWNrIHRvIG9wdGltaXplIGZvciB0aGVtLlxuICAvLyB0aGUgY2hlY2sgZmFpbHMgdmFsaWQgcGF0aHMgd2l0aCB1bnVzYWwgd2hpdGVzcGFjZXMsXG4gIC8vIGJ1dCB0aGF0J3MgdG9vIHJhcmUgYW5kIHdlIGRvbid0IGNhcmUuXG4gIC8vIGFsc28gc2tpcCBib29sZWFuIGxpdGVyYWxzIGFuZCBwYXRocyB0aGF0IHN0YXJ0IHdpdGhcbiAgLy8gZ2xvYmFsIFwiTWF0aFwiXG4gIHZhciByZXMgPSBleHBvcnRzLmlzU2ltcGxlUGF0aChleHApXG4gICAgPyBjb21waWxlUGF0aEZucyhleHApXG4gICAgOiBjb21waWxlRXhwRm5zKGV4cCwgbmVlZFNldClcbiAgZXhwcmVzc2lvbkNhY2hlLnB1dChleHAsIHJlcylcbiAgcmV0dXJuIHJlc1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGV4cHJlc3Npb24gaXMgYSBzaW1wbGUgcGF0aC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXhwXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmV4cG9ydHMuaXNTaW1wbGVQYXRoID0gZnVuY3Rpb24gKGV4cCkge1xuICByZXR1cm4gcGF0aFRlc3RSRS50ZXN0KGV4cCkgJiZcbiAgICAvLyBkb24ndCB0cmVhdCB0cnVlL2ZhbHNlIGFzIHBhdGhzXG4gICAgIWJvb2xlYW5MaXRlcmFsUkUudGVzdChleHApICYmXG4gICAgLy8gTWF0aCBjb25zdGFudHMgZS5nLiBNYXRoLlBJLCBNYXRoLkUgZXRjLlxuICAgIGV4cC5zbGljZSgwLCA1KSAhPT0gJ01hdGguJ1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlL3NyYy9wYXJzZXJzL2V4cHJlc3Npb24uanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciBDYWNoZSA9IHJlcXVpcmUoJy4uL2NhY2hlJylcbnZhciBwYXRoQ2FjaGUgPSBuZXcgQ2FjaGUoMTAwMClcbnZhciBpZGVudFJFID0gZXhwb3J0cy5pZGVudFJFID0gL15bJF9hLXpBLVpdK1tcXHckXSokL1xuXG4vKipcbiAqIFBhdGgtcGFyc2luZyBhbGdvcml0aG0gc2Nvb3BlZCBmcm9tIFBvbHltZXIvb2JzZXJ2ZS1qc1xuICovXG5cbnZhciBwYXRoU3RhdGVNYWNoaW5lID0ge1xuICAnYmVmb3JlUGF0aCc6IHtcbiAgICAnd3MnOiBbJ2JlZm9yZVBhdGgnXSxcbiAgICAnaWRlbnQnOiBbJ2luSWRlbnQnLCAnYXBwZW5kJ10sXG4gICAgJ1snOiBbJ2JlZm9yZUVsZW1lbnQnXSxcbiAgICAnZW9mJzogWydhZnRlclBhdGgnXVxuICB9LFxuXG4gICdpblBhdGgnOiB7XG4gICAgJ3dzJzogWydpblBhdGgnXSxcbiAgICAnLic6IFsnYmVmb3JlSWRlbnQnXSxcbiAgICAnWyc6IFsnYmVmb3JlRWxlbWVudCddLFxuICAgICdlb2YnOiBbJ2FmdGVyUGF0aCddXG4gIH0sXG5cbiAgJ2JlZm9yZUlkZW50Jzoge1xuICAgICd3cyc6IFsnYmVmb3JlSWRlbnQnXSxcbiAgICAnaWRlbnQnOiBbJ2luSWRlbnQnLCAnYXBwZW5kJ11cbiAgfSxcblxuICAnaW5JZGVudCc6IHtcbiAgICAnaWRlbnQnOiBbJ2luSWRlbnQnLCAnYXBwZW5kJ10sXG4gICAgJzAnOiBbJ2luSWRlbnQnLCAnYXBwZW5kJ10sXG4gICAgJ251bWJlcic6IFsnaW5JZGVudCcsICdhcHBlbmQnXSxcbiAgICAnd3MnOiBbJ2luUGF0aCcsICdwdXNoJ10sXG4gICAgJy4nOiBbJ2JlZm9yZUlkZW50JywgJ3B1c2gnXSxcbiAgICAnWyc6IFsnYmVmb3JlRWxlbWVudCcsICdwdXNoJ10sXG4gICAgJ2VvZic6IFsnYWZ0ZXJQYXRoJywgJ3B1c2gnXSxcbiAgICAnXSc6IFsnaW5QYXRoJywgJ3B1c2gnXVxuICB9LFxuXG4gICdiZWZvcmVFbGVtZW50Jzoge1xuICAgICd3cyc6IFsnYmVmb3JlRWxlbWVudCddLFxuICAgICcwJzogWydhZnRlclplcm8nLCAnYXBwZW5kJ10sXG4gICAgJ251bWJlcic6IFsnaW5JbmRleCcsICdhcHBlbmQnXSxcbiAgICBcIidcIjogWydpblNpbmdsZVF1b3RlJywgJ2FwcGVuZCcsICcnXSxcbiAgICAnXCInOiBbJ2luRG91YmxlUXVvdGUnLCAnYXBwZW5kJywgJyddLFxuICAgICdpZGVudCc6IFsnaW5JZGVudCcsICdhcHBlbmQnLCAnKiddXG4gIH0sXG5cbiAgJ2FmdGVyWmVybyc6IHtcbiAgICAnd3MnOiBbJ2FmdGVyRWxlbWVudCcsICdwdXNoJ10sXG4gICAgJ10nOiBbJ2luUGF0aCcsICdwdXNoJ11cbiAgfSxcblxuICAnaW5JbmRleCc6IHtcbiAgICAnMCc6IFsnaW5JbmRleCcsICdhcHBlbmQnXSxcbiAgICAnbnVtYmVyJzogWydpbkluZGV4JywgJ2FwcGVuZCddLFxuICAgICd3cyc6IFsnYWZ0ZXJFbGVtZW50J10sXG4gICAgJ10nOiBbJ2luUGF0aCcsICdwdXNoJ11cbiAgfSxcblxuICAnaW5TaW5nbGVRdW90ZSc6IHtcbiAgICBcIidcIjogWydhZnRlckVsZW1lbnQnXSxcbiAgICAnZW9mJzogJ2Vycm9yJyxcbiAgICAnZWxzZSc6IFsnaW5TaW5nbGVRdW90ZScsICdhcHBlbmQnXVxuICB9LFxuXG4gICdpbkRvdWJsZVF1b3RlJzoge1xuICAgICdcIic6IFsnYWZ0ZXJFbGVtZW50J10sXG4gICAgJ2VvZic6ICdlcnJvcicsXG4gICAgJ2Vsc2UnOiBbJ2luRG91YmxlUXVvdGUnLCAnYXBwZW5kJ11cbiAgfSxcblxuICAnYWZ0ZXJFbGVtZW50Jzoge1xuICAgICd3cyc6IFsnYWZ0ZXJFbGVtZW50J10sXG4gICAgJ10nOiBbJ2luUGF0aCcsICdwdXNoJ11cbiAgfVxufVxuXG5mdW5jdGlvbiBub29wICgpIHt9XG5cbi8qKlxuICogRGV0ZXJtaW5lIHRoZSB0eXBlIG9mIGEgY2hhcmFjdGVyIGluIGEga2V5cGF0aC5cbiAqXG4gKiBAcGFyYW0ge0NoYXJ9IGNoXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHR5cGVcbiAqL1xuXG5mdW5jdGlvbiBnZXRQYXRoQ2hhclR5cGUgKGNoKSB7XG4gIGlmIChjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICdlb2YnXG4gIH1cblxuICB2YXIgY29kZSA9IGNoLmNoYXJDb2RlQXQoMClcblxuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIDB4NUI6IC8vIFtcbiAgICBjYXNlIDB4NUQ6IC8vIF1cbiAgICBjYXNlIDB4MkU6IC8vIC5cbiAgICBjYXNlIDB4MjI6IC8vIFwiXG4gICAgY2FzZSAweDI3OiAvLyAnXG4gICAgY2FzZSAweDMwOiAvLyAwXG4gICAgICByZXR1cm4gY2hcblxuICAgIGNhc2UgMHg1RjogLy8gX1xuICAgIGNhc2UgMHgyNDogLy8gJFxuICAgICAgcmV0dXJuICdpZGVudCdcblxuICAgIGNhc2UgMHgyMDogLy8gU3BhY2VcbiAgICBjYXNlIDB4MDk6IC8vIFRhYlxuICAgIGNhc2UgMHgwQTogLy8gTmV3bGluZVxuICAgIGNhc2UgMHgwRDogLy8gUmV0dXJuXG4gICAgY2FzZSAweEEwOiAgLy8gTm8tYnJlYWsgc3BhY2VcbiAgICBjYXNlIDB4RkVGRjogIC8vIEJ5dGUgT3JkZXIgTWFya1xuICAgIGNhc2UgMHgyMDI4OiAgLy8gTGluZSBTZXBhcmF0b3JcbiAgICBjYXNlIDB4MjAyOTogIC8vIFBhcmFncmFwaCBTZXBhcmF0b3JcbiAgICAgIHJldHVybiAnd3MnXG4gIH1cblxuICAvLyBhLXosIEEtWlxuICBpZiAoXG4gICAgKGNvZGUgPj0gMHg2MSAmJiBjb2RlIDw9IDB4N0EpIHx8XG4gICAgKGNvZGUgPj0gMHg0MSAmJiBjb2RlIDw9IDB4NUEpXG4gICkge1xuICAgIHJldHVybiAnaWRlbnQnXG4gIH1cblxuICAvLyAxLTlcbiAgaWYgKGNvZGUgPj0gMHgzMSAmJiBjb2RlIDw9IDB4MzkpIHtcbiAgICByZXR1cm4gJ251bWJlcidcbiAgfVxuXG4gIHJldHVybiAnZWxzZSdcbn1cblxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBwYXRoIGludG8gYW4gYXJyYXkgb2Ygc2VnbWVudHNcbiAqIFRvZG8gaW1wbGVtZW50IGNhY2hlXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAqIEByZXR1cm4ge0FycmF5fHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBwYXJzZVBhdGggKHBhdGgpIHtcbiAgdmFyIGtleXMgPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgbW9kZSA9ICdiZWZvcmVQYXRoJ1xuICB2YXIgYywgbmV3Q2hhciwga2V5LCB0eXBlLCB0cmFuc2l0aW9uLCBhY3Rpb24sIHR5cGVNYXBcblxuICB2YXIgYWN0aW9ucyA9IHtcbiAgICBwdXNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBrZXlzLnB1c2goa2V5KVxuICAgICAga2V5ID0gdW5kZWZpbmVkXG4gICAgfSxcbiAgICBhcHBlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBrZXkgPSBuZXdDaGFyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXkgKz0gbmV3Q2hhclxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1heWJlVW5lc2NhcGVRdW90ZSAoKSB7XG4gICAgdmFyIG5leHRDaGFyID0gcGF0aFtpbmRleCArIDFdXG4gICAgaWYgKChtb2RlID09PSAnaW5TaW5nbGVRdW90ZScgJiYgbmV4dENoYXIgPT09IFwiJ1wiKSB8fFxuICAgICAgICAobW9kZSA9PT0gJ2luRG91YmxlUXVvdGUnICYmIG5leHRDaGFyID09PSAnXCInKSkge1xuICAgICAgaW5kZXgrK1xuICAgICAgbmV3Q2hhciA9IG5leHRDaGFyXG4gICAgICBhY3Rpb25zLmFwcGVuZCgpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHdoaWxlIChtb2RlKSB7XG4gICAgaW5kZXgrK1xuICAgIGMgPSBwYXRoW2luZGV4XVxuXG4gICAgaWYgKGMgPT09ICdcXFxcJyAmJiBtYXliZVVuZXNjYXBlUXVvdGUoKSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICB0eXBlID0gZ2V0UGF0aENoYXJUeXBlKGMpXG4gICAgdHlwZU1hcCA9IHBhdGhTdGF0ZU1hY2hpbmVbbW9kZV1cbiAgICB0cmFuc2l0aW9uID0gdHlwZU1hcFt0eXBlXSB8fCB0eXBlTWFwWydlbHNlJ10gfHwgJ2Vycm9yJ1xuXG4gICAgaWYgKHRyYW5zaXRpb24gPT09ICdlcnJvcicpIHtcbiAgICAgIHJldHVybiAvLyBwYXJzZSBlcnJvclxuICAgIH1cblxuICAgIG1vZGUgPSB0cmFuc2l0aW9uWzBdXG4gICAgYWN0aW9uID0gYWN0aW9uc1t0cmFuc2l0aW9uWzFdXSB8fCBub29wXG4gICAgbmV3Q2hhciA9IHRyYW5zaXRpb25bMl1cbiAgICBuZXdDaGFyID0gbmV3Q2hhciA9PT0gdW5kZWZpbmVkXG4gICAgICA/IGNcbiAgICAgIDogbmV3Q2hhciA9PT0gJyonXG4gICAgICAgID8gbmV3Q2hhciArIGNcbiAgICAgICAgOiBuZXdDaGFyXG4gICAgYWN0aW9uKClcblxuICAgIGlmIChtb2RlID09PSAnYWZ0ZXJQYXRoJykge1xuICAgICAga2V5cy5yYXcgPSBwYXRoXG4gICAgICByZXR1cm4ga2V5c1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEZvcm1hdCBhIGFjY2Vzc29yIHNlZ21lbnQgYmFzZWQgb24gaXRzIHR5cGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBY2Nlc3NvciAoa2V5KSB7XG4gIGlmIChpZGVudFJFLnRlc3Qoa2V5KSkgeyAvLyBpZGVudGlmaWVyXG4gICAgcmV0dXJuICcuJyArIGtleVxuICB9IGVsc2UgaWYgKCtrZXkgPT09IGtleSA+Pj4gMCkgeyAvLyBicmFja2V0IGluZGV4XG4gICAgcmV0dXJuICdbJyArIGtleSArICddJ1xuICB9IGVsc2UgaWYgKGtleS5jaGFyQXQoMCkgPT09ICcqJykge1xuICAgIHJldHVybiAnW28nICsgZm9ybWF0QWNjZXNzb3Ioa2V5LnNsaWNlKDEpKSArICddJ1xuICB9IGVsc2UgeyAvLyBicmFja2V0IHN0cmluZ1xuICAgIHJldHVybiAnW1wiJyArIGtleS5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykgKyAnXCJdJ1xuICB9XG59XG5cbi8qKlxuICogQ29tcGlsZXMgYSBnZXR0ZXIgZnVuY3Rpb24gd2l0aCBhIGZpeGVkIHBhdGguXG4gKiBUaGUgZml4ZWQgcGF0aCBnZXR0ZXIgc3VwcmVzc2VzIGVycm9ycy5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwYXRoXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnRzLmNvbXBpbGVHZXR0ZXIgPSBmdW5jdGlvbiAocGF0aCkge1xuICB2YXIgYm9keSA9ICdyZXR1cm4gbycgKyBwYXRoLm1hcChmb3JtYXRBY2Nlc3Nvcikuam9pbignJylcbiAgcmV0dXJuIG5ldyBGdW5jdGlvbignbycsIGJvZHkpXG59XG5cbi8qKlxuICogRXh0ZXJuYWwgcGFyc2UgdGhhdCBjaGVjayBmb3IgYSBjYWNoZSBoaXQgZmlyc3RcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICogQHJldHVybiB7QXJyYXl8dW5kZWZpbmVkfVxuICovXG5cbmV4cG9ydHMucGFyc2UgPSBmdW5jdGlvbiAocGF0aCkge1xuICB2YXIgaGl0ID0gcGF0aENhY2hlLmdldChwYXRoKVxuICBpZiAoIWhpdCkge1xuICAgIGhpdCA9IHBhcnNlUGF0aChwYXRoKVxuICAgIGlmIChoaXQpIHtcbiAgICAgIGhpdC5nZXQgPSBleHBvcnRzLmNvbXBpbGVHZXR0ZXIoaGl0KVxuICAgICAgcGF0aENhY2hlLnB1dChwYXRoLCBoaXQpXG4gICAgfVxuICB9XG4gIHJldHVybiBoaXRcbn1cblxuLyoqXG4gKiBHZXQgZnJvbSBhbiBvYmplY3QgZnJvbSBhIHBhdGggc3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAqL1xuXG5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIChvYmosIHBhdGgpIHtcbiAgcGF0aCA9IGV4cG9ydHMucGFyc2UocGF0aClcbiAgaWYgKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5nZXQob2JqKVxuICB9XG59XG5cbi8qKlxuICogU2V0IG9uIGFuIG9iamVjdCBmcm9tIGEgcGF0aFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nIHwgQXJyYXl9IHBhdGhcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuZXhwb3J0cy5zZXQgPSBmdW5jdGlvbiAob2JqLCBwYXRoLCB2YWwpIHtcbiAgdmFyIG9yaWdpbmFsID0gb2JqXG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHtcbiAgICBwYXRoID0gZXhwb3J0cy5wYXJzZShwYXRoKVxuICB9XG4gIGlmICghcGF0aCB8fCAhXy5pc09iamVjdChvYmopKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbiAgdmFyIGxhc3QsIGtleVxuICBmb3IgKHZhciBpID0gMCwgbCA9IHBhdGgubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGFzdCA9IG9ialxuICAgIGtleSA9IHBhdGhbaV1cbiAgICBpZiAoa2V5LmNoYXJBdCgwKSA9PT0gJyonKSB7XG4gICAgICBrZXkgPSBvcmlnaW5hbFtrZXkuc2xpY2UoMSldXG4gICAgfVxuICAgIGlmIChpIDwgbCAtIDEpIHtcbiAgICAgIG9iaiA9IG9ialtrZXldXG4gICAgICBpZiAoIV8uaXNPYmplY3Qob2JqKSkge1xuICAgICAgICBvYmogPSB7fVxuICAgICAgICBsYXN0LiRhZGQoa2V5LCBvYmopXG4gICAgICAgIHdhcm5Ob25FeGlzdGVudChwYXRoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoXy5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgb2JqLiRzZXQoa2V5LCB2YWwpXG4gICAgICB9IGVsc2UgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWxcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iai4kYWRkKGtleSwgdmFsKVxuICAgICAgICB3YXJuTm9uRXhpc3RlbnQocGF0aClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gd2Fybk5vbkV4aXN0ZW50IChwYXRoKSB7XG4gIF8ud2FybihcbiAgICAnWW91IGFyZSBzZXR0aW5nIGEgbm9uLWV4aXN0ZW50IHBhdGggXCInICsgcGF0aC5yYXcgKyAnXCIgJyArXG4gICAgJ29uIGEgdm0gaW5zdGFuY2UuIENvbnNpZGVyIHByZS1pbml0aWFsaXppbmcgdGhlIHByb3BlcnR5ICcgK1xuICAgICd3aXRoIHRoZSBcImRhdGFcIiBvcHRpb24gZm9yIG1vcmUgcmVsaWFibGUgcmVhY3Rpdml0eSAnICtcbiAgICAnYW5kIGJldHRlciBwZXJmb3JtYW5jZS4nXG4gIClcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvcGFyc2Vycy9wYXRoLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi91dGlsJylcbnZhciBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpXG5cbi8vIHdlIGhhdmUgdHdvIHNlcGFyYXRlIHF1ZXVlczogb25lIGZvciBkaXJlY3RpdmUgdXBkYXRlc1xuLy8gYW5kIG9uZSBmb3IgdXNlciB3YXRjaGVyIHJlZ2lzdGVyZWQgdmlhICR3YXRjaCgpLlxuLy8gd2Ugd2FudCB0byBndWFyYW50ZWUgZGlyZWN0aXZlIHVwZGF0ZXMgdG8gYmUgY2FsbGVkXG4vLyBiZWZvcmUgdXNlciB3YXRjaGVycyBzbyB0aGF0IHdoZW4gdXNlciB3YXRjaGVycyBhcmVcbi8vIHRyaWdnZXJlZCwgdGhlIERPTSB3b3VsZCBoYXZlIGFscmVhZHkgYmVlbiBpbiB1cGRhdGVkXG4vLyBzdGF0ZS5cbnZhciBxdWV1ZSA9IFtdXG52YXIgdXNlclF1ZXVlID0gW11cbnZhciBoYXMgPSB7fVxudmFyIHdhaXRpbmcgPSBmYWxzZVxudmFyIGZsdXNoaW5nID0gZmFsc2VcbnZhciBpbnRlcm5hbFF1ZXVlRGVwbGV0ZWQgPSBmYWxzZVxuXG4vKipcbiAqIFJlc2V0IHRoZSBiYXRjaGVyJ3Mgc3RhdGUuXG4gKi9cblxuZnVuY3Rpb24gcmVzZXQgKCkge1xuICBxdWV1ZSA9IFtdXG4gIHVzZXJRdWV1ZSA9IFtdXG4gIGhhcyA9IHt9XG4gIHdhaXRpbmcgPSBmbHVzaGluZyA9IGludGVybmFsUXVldWVEZXBsZXRlZCA9IGZhbHNlXG59XG5cbi8qKlxuICogRmx1c2ggYm90aCBxdWV1ZXMgYW5kIHJ1biB0aGUgam9icy5cbiAqL1xuXG5mdW5jdGlvbiBmbHVzaCAoKSB7XG4gIGZsdXNoaW5nID0gdHJ1ZVxuICBydW4ocXVldWUpXG4gIGludGVybmFsUXVldWVEZXBsZXRlZCA9IHRydWVcbiAgcnVuKHVzZXJRdWV1ZSlcbiAgcmVzZXQoKVxufVxuXG4vKipcbiAqIFJ1biB0aGUgam9icyBpbiBhIHNpbmdsZSBxdWV1ZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBxdWV1ZVxuICovXG5cbmZ1bmN0aW9uIHJ1biAocXVldWUpIHtcbiAgLy8gZG8gbm90IGNhY2hlIGxlbmd0aCBiZWNhdXNlIG1vcmUgam9icyBtaWdodCBiZSBwdXNoZWRcbiAgLy8gYXMgd2UgcnVuIGV4aXN0aW5nIGpvYnNcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgIHF1ZXVlW2ldLnJ1bigpXG4gIH1cbn1cblxuLyoqXG4gKiBQdXNoIGEgam9iIGludG8gdGhlIGpvYiBxdWV1ZS5cbiAqIEpvYnMgd2l0aCBkdXBsaWNhdGUgSURzIHdpbGwgYmUgc2tpcHBlZCB1bmxlc3MgaXQnc1xuICogcHVzaGVkIHdoZW4gdGhlIHF1ZXVlIGlzIGJlaW5nIGZsdXNoZWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGpvYlxuICogICBwcm9wZXJ0aWVzOlxuICogICAtIHtTdHJpbmd8TnVtYmVyfSBpZFxuICogICAtIHtGdW5jdGlvbn0gICAgICBydW5cbiAqL1xuXG5leHBvcnRzLnB1c2ggPSBmdW5jdGlvbiAoam9iKSB7XG4gIHZhciBpZCA9IGpvYi5pZFxuICBpZiAoIWlkIHx8ICFoYXNbaWRdIHx8IGZsdXNoaW5nKSB7XG4gICAgaWYgKCFoYXNbaWRdKSB7XG4gICAgICBoYXNbaWRdID0gMVxuICAgIH0gZWxzZSB7XG4gICAgICBoYXNbaWRdKytcbiAgICAgIC8vIGRldGVjdCBwb3NzaWJsZSBpbmZpbml0ZSB1cGRhdGUgbG9vcHNcbiAgICAgIGlmIChoYXNbaWRdID4gY29uZmlnLl9tYXhVcGRhdGVDb3VudCkge1xuICAgICAgICBfLndhcm4oXG4gICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBhbiBpbmZpbml0ZSB1cGRhdGUgbG9vcCBmb3IgdGhlICcgK1xuICAgICAgICAgICd3YXRjaGVyIHdpdGggZXhwcmVzc2lvbjogXCInICsgam9iLmV4cHJlc3Npb24gKyAnXCIuJ1xuICAgICAgICApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICAvLyBBIHVzZXIgd2F0Y2hlciBjYWxsYmFjayBjb3VsZCB0cmlnZ2VyIGFub3RoZXJcbiAgICAvLyBkaXJlY3RpdmUgdXBkYXRlIGR1cmluZyB0aGUgZmx1c2hpbmc7IGF0IHRoYXQgdGltZVxuICAgIC8vIHRoZSBkaXJlY3RpdmUgcXVldWUgd291bGQgYWxyZWFkeSBoYXZlIGJlZW4gcnVuLCBzb1xuICAgIC8vIHdlIGNhbGwgdGhhdCB1cGRhdGUgaW1tZWRpYXRlbHkgYXMgaXQgaXMgcHVzaGVkLlxuICAgIGlmIChmbHVzaGluZyAmJiAham9iLnVzZXIgJiYgaW50ZXJuYWxRdWV1ZURlcGxldGVkKSB7XG4gICAgICBqb2IucnVuKClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICA7KGpvYi51c2VyID8gdXNlclF1ZXVlIDogcXVldWUpLnB1c2goam9iKVxuICAgIGlmICghd2FpdGluZykge1xuICAgICAgd2FpdGluZyA9IHRydWVcbiAgICAgIF8ubmV4dFRpY2soZmx1c2gpXG4gICAgfVxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUvc3JjL2JhdGNoZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciBDYWNoZSA9IHJlcXVpcmUoJy4uL2NhY2hlJylcbnZhciB0ZW1wbGF0ZUNhY2hlID0gbmV3IENhY2hlKDEwMDApXG52YXIgaWRTZWxlY3RvckNhY2hlID0gbmV3IENhY2hlKDEwMDApXG5cbnZhciBtYXAgPSB7XG4gIF9kZWZhdWx0OiBbMCwgJycsICcnXSxcbiAgbGVnZW5kOiBbMSwgJzxmaWVsZHNldD4nLCAnPC9maWVsZHNldD4nXSxcbiAgdHI6IFsyLCAnPHRhYmxlPjx0Ym9keT4nLCAnPC90Ym9keT48L3RhYmxlPiddLFxuICBjb2w6IFtcbiAgICAyLFxuICAgICc8dGFibGU+PHRib2R5PjwvdGJvZHk+PGNvbGdyb3VwPicsXG4gICAgJzwvY29sZ3JvdXA+PC90YWJsZT4nXG4gIF1cbn1cblxubWFwLnRkID1cbm1hcC50aCA9IFtcbiAgMyxcbiAgJzx0YWJsZT48dGJvZHk+PHRyPicsXG4gICc8L3RyPjwvdGJvZHk+PC90YWJsZT4nXG5dXG5cbm1hcC5vcHRpb24gPVxubWFwLm9wdGdyb3VwID0gW1xuICAxLFxuICAnPHNlbGVjdCBtdWx0aXBsZT1cIm11bHRpcGxlXCI+JyxcbiAgJzwvc2VsZWN0Pidcbl1cblxubWFwLnRoZWFkID1cbm1hcC50Ym9keSA9XG5tYXAuY29sZ3JvdXAgPVxubWFwLmNhcHRpb24gPVxubWFwLnRmb290ID0gWzEsICc8dGFibGU+JywgJzwvdGFibGU+J11cblxubWFwLmcgPVxubWFwLmRlZnMgPVxubWFwLnN5bWJvbCA9XG5tYXAudXNlID1cbm1hcC5pbWFnZSA9XG5tYXAudGV4dCA9XG5tYXAuY2lyY2xlID1cbm1hcC5lbGxpcHNlID1cbm1hcC5saW5lID1cbm1hcC5wYXRoID1cbm1hcC5wb2x5Z29uID1cbm1hcC5wb2x5bGluZSA9XG5tYXAucmVjdCA9IFtcbiAgMSxcbiAgJzxzdmcgJyArXG4gICAgJ3htbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiAnICtcbiAgICAneG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgJyArXG4gICAgJ3htbG5zOmV2PVwiaHR0cDovL3d3dy53My5vcmcvMjAwMS94bWwtZXZlbnRzXCInICtcbiAgICAndmVyc2lvbj1cIjEuMVwiPicsXG4gICc8L3N2Zz4nXG5dXG5cbnZhciB0YWdSRSA9IC88KFtcXHc6XSspL1xudmFyIGVudGl0eVJFID0gLyZcXHcrOy9cblxuLyoqXG4gKiBDb252ZXJ0IGEgc3RyaW5nIHRlbXBsYXRlIHRvIGEgRG9jdW1lbnRGcmFnbWVudC5cbiAqIERldGVybWluZXMgY29ycmVjdCB3cmFwcGluZyBieSB0YWcgdHlwZXMuIFdyYXBwaW5nXG4gKiBzdHJhdGVneSBmb3VuZCBpbiBqUXVlcnkgJiBjb21wb25lbnQvZG9taWZ5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZW1wbGF0ZVN0cmluZ1xuICogQHJldHVybiB7RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuXG5mdW5jdGlvbiBzdHJpbmdUb0ZyYWdtZW50ICh0ZW1wbGF0ZVN0cmluZykge1xuICAvLyB0cnkgYSBjYWNoZSBoaXQgZmlyc3RcbiAgdmFyIGhpdCA9IHRlbXBsYXRlQ2FjaGUuZ2V0KHRlbXBsYXRlU3RyaW5nKVxuICBpZiAoaGl0KSB7XG4gICAgcmV0dXJuIGhpdFxuICB9XG5cbiAgdmFyIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbiAgdmFyIHRhZ01hdGNoID0gdGVtcGxhdGVTdHJpbmcubWF0Y2godGFnUkUpXG4gIHZhciBlbnRpdHlNYXRjaCA9IGVudGl0eVJFLnRlc3QodGVtcGxhdGVTdHJpbmcpXG5cbiAgaWYgKCF0YWdNYXRjaCAmJiAhZW50aXR5TWF0Y2gpIHtcbiAgICAvLyB0ZXh0IG9ubHksIHJldHVybiBhIHNpbmdsZSB0ZXh0IG5vZGUuXG4gICAgZnJhZy5hcHBlbmRDaGlsZChcbiAgICAgIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRlbXBsYXRlU3RyaW5nKVxuICAgIClcbiAgfSBlbHNlIHtcblxuICAgIHZhciB0YWcgPSB0YWdNYXRjaCAmJiB0YWdNYXRjaFsxXVxuICAgIHZhciB3cmFwID0gbWFwW3RhZ10gfHwgbWFwLl9kZWZhdWx0XG4gICAgdmFyIGRlcHRoID0gd3JhcFswXVxuICAgIHZhciBwcmVmaXggPSB3cmFwWzFdXG4gICAgdmFyIHN1ZmZpeCA9IHdyYXBbMl1cbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBub2RlLmlubmVySFRNTCA9IHByZWZpeCArIHRlbXBsYXRlU3RyaW5nLnRyaW0oKSArIHN1ZmZpeFxuICAgIHdoaWxlIChkZXB0aC0tKSB7XG4gICAgICBub2RlID0gbm9kZS5sYXN0Q2hpbGRcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuICAgIHdoaWxlIChjaGlsZCA9IG5vZGUuZmlyc3RDaGlsZCkge1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgICAgIGZyYWcuYXBwZW5kQ2hpbGQoY2hpbGQpXG4gICAgfVxuICB9XG5cbiAgdGVtcGxhdGVDYWNoZS5wdXQodGVtcGxhdGVTdHJpbmcsIGZyYWcpXG4gIHJldHVybiBmcmFnXG59XG5cbi8qKlxuICogQ29udmVydCBhIHRlbXBsYXRlIG5vZGUgdG8gYSBEb2N1bWVudEZyYWdtZW50LlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybiB7RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuXG5mdW5jdGlvbiBub2RlVG9GcmFnbWVudCAobm9kZSkge1xuICAvLyBpZiBpdHMgYSB0ZW1wbGF0ZSB0YWcgYW5kIHRoZSBicm93c2VyIHN1cHBvcnRzIGl0LFxuICAvLyBpdHMgY29udGVudCBpcyBhbHJlYWR5IGEgZG9jdW1lbnQgZnJhZ21lbnQuXG4gIGlmIChcbiAgICBfLmlzVGVtcGxhdGUobm9kZSkgJiZcbiAgICBub2RlLmNvbnRlbnQgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50XG4gICkge1xuICAgIHJldHVybiBub2RlLmNvbnRlbnRcbiAgfVxuICAvLyBzY3JpcHQgdGVtcGxhdGVcbiAgaWYgKG5vZGUudGFnTmFtZSA9PT0gJ1NDUklQVCcpIHtcbiAgICByZXR1cm4gc3RyaW5nVG9GcmFnbWVudChub2RlLnRleHRDb250ZW50KVxuICB9XG4gIC8vIG5vcm1hbCBub2RlLCBjbG9uZSBpdCB0byBhdm9pZCBtdXRhdGluZyB0aGUgb3JpZ2luYWxcbiAgdmFyIGNsb25lID0gZXhwb3J0cy5jbG9uZShub2RlKVxuICB2YXIgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICB2YXIgY2hpbGRcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgd2hpbGUgKGNoaWxkID0gY2xvbmUuZmlyc3RDaGlsZCkge1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbmQtYXNzaWduICovXG4gICAgZnJhZy5hcHBlbmRDaGlsZChjaGlsZClcbiAgfVxuICByZXR1cm4gZnJhZ1xufVxuXG4vLyBUZXN0IGZvciB0aGUgcHJlc2VuY2Ugb2YgdGhlIFNhZmFyaSB0ZW1wbGF0ZSBjbG9uaW5nIGJ1Z1xuLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNzc1NVxudmFyIGhhc0Jyb2tlblRlbXBsYXRlID0gXy5pbkJyb3dzZXJcbiAgPyAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgYS5pbm5lckhUTUwgPSAnPHRlbXBsYXRlPjE8L3RlbXBsYXRlPidcbiAgICAgIHJldHVybiAhYS5jbG9uZU5vZGUodHJ1ZSkuZmlyc3RDaGlsZC5pbm5lckhUTUxcbiAgICB9KSgpXG4gIDogZmFsc2VcblxuLy8gVGVzdCBmb3IgSUUxMC8xMSB0ZXh0YXJlYSBwbGFjZWhvbGRlciBjbG9uZSBidWdcbnZhciBoYXNUZXh0YXJlYUNsb25lQnVnID0gXy5pbkJyb3dzZXJcbiAgPyAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgICB0LnBsYWNlaG9sZGVyID0gJ3QnXG4gICAgICByZXR1cm4gdC5jbG9uZU5vZGUodHJ1ZSkudmFsdWUgPT09ICd0J1xuICAgIH0pKClcbiAgOiBmYWxzZVxuXG4vKipcbiAqIDEuIERlYWwgd2l0aCBTYWZhcmkgY2xvbmluZyBuZXN0ZWQgPHRlbXBsYXRlPiBidWcgYnlcbiAqICAgIG1hbnVhbGx5IGNsb25pbmcgYWxsIHRlbXBsYXRlIGluc3RhbmNlcy5cbiAqIDIuIERlYWwgd2l0aCBJRTEwLzExIHRleHRhcmVhIHBsYWNlaG9sZGVyIGJ1ZyBieSBzZXR0aW5nXG4gKiAgICB0aGUgY29ycmVjdCB2YWx1ZSBhZnRlciBjbG9uaW5nLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fSBub2RlXG4gKiBAcmV0dXJuIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9XG4gKi9cblxuZXhwb3J0cy5jbG9uZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIHZhciByZXMgPSBub2RlLmNsb25lTm9kZSh0cnVlKVxuICB2YXIgaSwgb3JpZ2luYWwsIGNsb25lZFxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGhhc0Jyb2tlblRlbXBsYXRlKSB7XG4gICAgb3JpZ2luYWwgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RlbXBsYXRlJylcbiAgICBpZiAob3JpZ2luYWwubGVuZ3RoKSB7XG4gICAgICBjbG9uZWQgPSByZXMucXVlcnlTZWxlY3RvckFsbCgndGVtcGxhdGUnKVxuICAgICAgaSA9IGNsb25lZC5sZW5ndGhcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgY2xvbmVkW2ldLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKFxuICAgICAgICAgIG9yaWdpbmFsW2ldLmNsb25lTm9kZSh0cnVlKSxcbiAgICAgICAgICBjbG9uZWRbaV1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGhhc1RleHRhcmVhQ2xvbmVCdWcpIHtcbiAgICBpZiAobm9kZS50YWdOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICByZXMudmFsdWUgPSBub2RlLnZhbHVlXG4gICAgfSBlbHNlIHtcbiAgICAgIG9yaWdpbmFsID0gbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpXG4gICAgICBpZiAob3JpZ2luYWwubGVuZ3RoKSB7XG4gICAgICAgIGNsb25lZCA9IHJlcy5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpXG4gICAgICAgIGkgPSBjbG9uZWQubGVuZ3RoXG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICBjbG9uZWRbaV0udmFsdWUgPSBvcmlnaW5hbFtpXS52YWx1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyoqXG4gKiBQcm9jZXNzIHRoZSB0ZW1wbGF0ZSBvcHRpb24gYW5kIG5vcm1hbGl6ZXMgaXQgaW50byBhXG4gKiBhIERvY3VtZW50RnJhZ21lbnQgdGhhdCBjYW4gYmUgdXNlZCBhcyBhIHBhcnRpYWwgb3IgYVxuICogaW5zdGFuY2UgdGVtcGxhdGUuXG4gKlxuICogQHBhcmFtIHsqfSB0ZW1wbGF0ZVxuICogICAgUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6XG4gKiAgICAtIERvY3VtZW50RnJhZ21lbnQgb2JqZWN0XG4gKiAgICAtIE5vZGUgb2JqZWN0IG9mIHR5cGUgVGVtcGxhdGVcbiAqICAgIC0gaWQgc2VsZWN0b3I6ICcjc29tZS10ZW1wbGF0ZS1pZCdcbiAqICAgIC0gdGVtcGxhdGUgc3RyaW5nOiAnPGRpdj48c3Bhbj57e21zZ319PC9zcGFuPjwvZGl2PidcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY2xvbmVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gbm9TZWxlY3RvclxuICogQHJldHVybiB7RG9jdW1lbnRGcmFnbWVudHx1bmRlZmluZWR9XG4gKi9cblxuZXhwb3J0cy5wYXJzZSA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSwgY2xvbmUsIG5vU2VsZWN0b3IpIHtcbiAgdmFyIG5vZGUsIGZyYWdcblxuICAvLyBpZiB0aGUgdGVtcGxhdGUgaXMgYWxyZWFkeSBhIGRvY3VtZW50IGZyYWdtZW50LFxuICAvLyBkbyBub3RoaW5nXG4gIGlmICh0ZW1wbGF0ZSBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICByZXR1cm4gY2xvbmVcbiAgICAgID8gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpXG4gICAgICA6IHRlbXBsYXRlXG4gIH1cblxuICBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgIC8vIGlkIHNlbGVjdG9yXG4gICAgaWYgKCFub1NlbGVjdG9yICYmIHRlbXBsYXRlLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgICAvLyBpZCBzZWxlY3RvciBjYW4gYmUgY2FjaGVkIHRvb1xuICAgICAgZnJhZyA9IGlkU2VsZWN0b3JDYWNoZS5nZXQodGVtcGxhdGUpXG4gICAgICBpZiAoIWZyYWcpIHtcbiAgICAgICAgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRlbXBsYXRlLnNsaWNlKDEpKVxuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgIGZyYWcgPSBub2RlVG9GcmFnbWVudChub2RlKVxuICAgICAgICAgIC8vIHNhdmUgc2VsZWN0b3IgdG8gY2FjaGVcbiAgICAgICAgICBpZFNlbGVjdG9yQ2FjaGUucHV0KHRlbXBsYXRlLCBmcmFnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vcm1hbCBzdHJpbmcgdGVtcGxhdGVcbiAgICAgIGZyYWcgPSBzdHJpbmdUb0ZyYWdtZW50KHRlbXBsYXRlKVxuICAgIH1cbiAgfSBlbHNlIGlmICh0ZW1wbGF0ZS5ub2RlVHlwZSkge1xuICAgIC8vIGEgZGlyZWN0IG5vZGVcbiAgICBmcmFnID0gbm9kZVRvRnJhZ21lbnQodGVtcGxhdGUpXG4gIH1cblxuICByZXR1cm4gZnJhZyAmJiBjbG9uZVxuICAgID8gZXhwb3J0cy5jbG9uZShmcmFnKVxuICAgIDogZnJhZ1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlL3NyYy9wYXJzZXJzL3RlbXBsYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgdGVtcGxhdGVQYXJzZXIgPSByZXF1aXJlKCcuLi9wYXJzZXJzL3RlbXBsYXRlJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgaXNMaXRlcmFsOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBTZXR1cC4gVHdvIHBvc3NpYmxlIHVzYWdlczpcbiAgICpcbiAgICogLSBzdGF0aWM6XG4gICAqICAgdi1jb21wb25lbnQ9XCJjb21wXCJcbiAgICpcbiAgICogLSBkeW5hbWljOlxuICAgKiAgIHYtY29tcG9uZW50PVwie3tjdXJyZW50Vmlld319XCJcbiAgICovXG5cbiAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5lbC5fX3Z1ZV9fKSB7XG4gICAgICAvLyBjcmVhdGUgYSByZWYgYW5jaG9yXG4gICAgICB0aGlzLmFuY2hvciA9IF8uY3JlYXRlQW5jaG9yKCd2LWNvbXBvbmVudCcpXG4gICAgICBfLnJlcGxhY2UodGhpcy5lbCwgdGhpcy5hbmNob3IpXG4gICAgICAvLyBjaGVjayBrZWVwLWFsaXZlIG9wdGlvbnMuXG4gICAgICAvLyBJZiB5ZXMsIGluc3RlYWQgb2YgZGVzdHJveWluZyB0aGUgYWN0aXZlIHZtIHdoZW5cbiAgICAgIC8vIGhpZGluZyAodi1pZikgb3Igc3dpdGNoaW5nIChkeW5hbWljIGxpdGVyYWwpIGl0LFxuICAgICAgLy8gd2Ugc2ltcGx5IHJlbW92ZSBpdCBmcm9tIHRoZSBET00gYW5kIHNhdmUgaXQgaW4gYVxuICAgICAgLy8gY2FjaGUgb2JqZWN0LCB3aXRoIGl0cyBjb25zdHJ1Y3RvciBpZCBhcyB0aGUga2V5LlxuICAgICAgdGhpcy5rZWVwQWxpdmUgPSB0aGlzLl9jaGVja1BhcmFtKCdrZWVwLWFsaXZlJykgIT0gbnVsbFxuICAgICAgLy8gd2FpdCBmb3IgZXZlbnQgYmVmb3JlIGluc2VydGlvblxuICAgICAgdGhpcy5yZWFkeUV2ZW50ID0gdGhpcy5fY2hlY2tQYXJhbSgnd2FpdC1mb3InKVxuICAgICAgLy8gY2hlY2sgcmVmXG4gICAgICB0aGlzLnJlZklEID0gXy5hdHRyKHRoaXMuZWwsICdyZWYnKVxuICAgICAgaWYgKHRoaXMua2VlcEFsaXZlKSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fVxuICAgICAgfVxuICAgICAgLy8gY2hlY2sgaW5saW5lLXRlbXBsYXRlXG4gICAgICBpZiAodGhpcy5fY2hlY2tQYXJhbSgnaW5saW5lLXRlbXBsYXRlJykgIT09IG51bGwpIHtcbiAgICAgICAgLy8gZXh0cmFjdCBpbmxpbmUgdGVtcGxhdGUgYXMgYSBEb2N1bWVudEZyYWdtZW50XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBfLmV4dHJhY3RDb250ZW50KHRoaXMuZWwsIHRydWUpXG4gICAgICB9XG4gICAgICAvLyBjb21wb25lbnQgcmVzb2x1dGlvbiByZWxhdGVkIHN0YXRlXG4gICAgICB0aGlzLl9wZW5kaW5nQ2IgPVxuICAgICAgdGhpcy5jdG9ySWQgPVxuICAgICAgdGhpcy5DdG9yID0gbnVsbFxuICAgICAgLy8gaWYgc3RhdGljLCBidWlsZCByaWdodCBub3cuXG4gICAgICBpZiAoIXRoaXMuX2lzRHluYW1pY0xpdGVyYWwpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlQ3Rvcih0aGlzLmV4cHJlc3Npb24sIF8uYmluZCh0aGlzLmluaXRTdGF0aWMsIHRoaXMpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY2hlY2sgZHluYW1pYyBjb21wb25lbnQgcGFyYW1zXG4gICAgICAgIHRoaXMudHJhbnNNb2RlID0gdGhpcy5fY2hlY2tQYXJhbSgndHJhbnNpdGlvbi1tb2RlJylcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgXy53YXJuKFxuICAgICAgICAnRG8gbm90IGNyZWF0ZSBhIGNvbXBvbmVudCB0aGF0IG9ubHkgY29udGFpbnMgJyArXG4gICAgICAgICdhIHNpbmdsZSBvdGhlciBjb21wb25lbnQgLSB0aGV5IHdpbGwgYmUgbW91bnRlZCB0byAnICtcbiAgICAgICAgJ3RoZSBzYW1lIGVsZW1lbnQgYW5kIGNhdXNlIGNvbmZsaWN0LiBXcmFwIGl0IHdpdGggJyArXG4gICAgICAgICdhbiBvdXRlciBlbGVtZW50LidcbiAgICAgIClcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYSBzdGF0aWMgY29tcG9uZW50LlxuICAgKi9cblxuICBpbml0U3RhdGljOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNoaWxkID0gdGhpcy5idWlsZCgpXG4gICAgdmFyIGFuY2hvciA9IHRoaXMuYW5jaG9yXG4gICAgdGhpcy5zZXRDdXJyZW50KGNoaWxkKVxuICAgIGlmICghdGhpcy5yZWFkeUV2ZW50KSB7XG4gICAgICBjaGlsZC4kYmVmb3JlKGFuY2hvcilcbiAgICB9IGVsc2Uge1xuICAgICAgY2hpbGQuJG9uY2UodGhpcy5yZWFkeUV2ZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNoaWxkLiRiZWZvcmUoYW5jaG9yKVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFB1YmxpYyB1cGRhdGUsIGNhbGxlZCBieSB0aGUgd2F0Y2hlciBpbiB0aGUgZHluYW1pY1xuICAgKiBsaXRlcmFsIHNjZW5hcmlvLCBlLmcuIHYtY29tcG9uZW50PVwie3t2aWV3fX1cIlxuICAgKi9cblxuICB1cGRhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHRoaXMuc2V0Q29tcG9uZW50KHZhbHVlKVxuICB9LFxuXG4gIC8qKlxuICAgKiBTd2l0Y2ggZHluYW1pYyBjb21wb25lbnRzLiBNYXkgcmVzb2x2ZSB0aGUgY29tcG9uZW50XG4gICAqIGFzeW5jaHJvbm91c2x5LCBhbmQgcGVyZm9ybSB0cmFuc2l0aW9uIGJhc2VkIG9uXG4gICAqIHNwZWNpZmllZCB0cmFuc2l0aW9uIG1vZGUuIEFjY2VwdHMgYSBmZXcgYWRkaXRpb25hbFxuICAgKiBhcmd1bWVudHMgc3BlY2lmaWNhbGx5IGZvciB2dWUtcm91dGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gYWZ0ZXJCdWlsZFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhZnRlclRyYW5zaXRpb25cbiAgICovXG5cbiAgc2V0Q29tcG9uZW50OiBmdW5jdGlvbiAodmFsdWUsIGRhdGEsIGFmdGVyQnVpbGQsIGFmdGVyVHJhbnNpdGlvbikge1xuICAgIHRoaXMuaW52YWxpZGF0ZVBlbmRpbmcoKVxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIC8vIGp1c3QgcmVtb3ZlIGN1cnJlbnRcbiAgICAgIHRoaXMudW5idWlsZCh0cnVlKVxuICAgICAgdGhpcy5yZW1vdmUodGhpcy5jaGlsZFZNLCBhZnRlclRyYW5zaXRpb24pXG4gICAgICB0aGlzLnVuc2V0Q3VycmVudCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVzb2x2ZUN0b3IodmFsdWUsIF8uYmluZChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudW5idWlsZCh0cnVlKVxuICAgICAgICB2YXIgbmV3Q29tcG9uZW50ID0gdGhpcy5idWlsZChkYXRhKVxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGFmdGVyQnVpbGQpIGFmdGVyQnVpbGQobmV3Q29tcG9uZW50KVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICAgICAgaWYgKHRoaXMucmVhZHlFdmVudCkge1xuICAgICAgICAgIG5ld0NvbXBvbmVudC4kb25jZSh0aGlzLnJlYWR5RXZlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYudHJhbnNpdGlvbihuZXdDb21wb25lbnQsIGFmdGVyVHJhbnNpdGlvbilcbiAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudHJhbnNpdGlvbihuZXdDb21wb25lbnQsIGFmdGVyVHJhbnNpdGlvbilcbiAgICAgICAgfVxuICAgICAgfSwgdGhpcykpXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gdXNlIHdoZW4gY3JlYXRpbmdcbiAgICogdGhlIGNoaWxkIHZtLlxuICAgKi9cblxuICByZXNvbHZlQ3RvcjogZnVuY3Rpb24gKGlkLCBjYikge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHRoaXMuX3BlbmRpbmdDYiA9IF8uY2FuY2VsbGFibGUoZnVuY3Rpb24gKGN0b3IpIHtcbiAgICAgIHNlbGYuY3RvcklkID0gaWRcbiAgICAgIHNlbGYuQ3RvciA9IGN0b3JcbiAgICAgIGNiKClcbiAgICB9KVxuICAgIHRoaXMudm0uX3Jlc29sdmVDb21wb25lbnQoaWQsIHRoaXMuX3BlbmRpbmdDYilcbiAgfSxcblxuICAvKipcbiAgICogV2hlbiB0aGUgY29tcG9uZW50IGNoYW5nZXMgb3IgdW5iaW5kcyBiZWZvcmUgYW4gYXN5bmNcbiAgICogY29uc3RydWN0b3IgaXMgcmVzb2x2ZWQsIHdlIG5lZWQgdG8gaW52YWxpZGF0ZSBpdHNcbiAgICogcGVuZGluZyBjYWxsYmFjay5cbiAgICovXG5cbiAgaW52YWxpZGF0ZVBlbmRpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fcGVuZGluZ0NiKSB7XG4gICAgICB0aGlzLl9wZW5kaW5nQ2IuY2FuY2VsKClcbiAgICAgIHRoaXMuX3BlbmRpbmdDYiA9IG51bGxcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluc3RhbnRpYXRlL2luc2VydCBhIG5ldyBjaGlsZCB2bS5cbiAgICogSWYga2VlcCBhbGl2ZSBhbmQgaGFzIGNhY2hlZCBpbnN0YW5jZSwgaW5zZXJ0IHRoYXRcbiAgICogaW5zdGFuY2U7IG90aGVyd2lzZSBidWlsZCBhIG5ldyBvbmUgYW5kIGNhY2hlIGl0LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG4gICAqIEByZXR1cm4ge1Z1ZX0gLSB0aGUgY3JlYXRlZCBpbnN0YW5jZVxuICAgKi9cblxuICBidWlsZDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZiAodGhpcy5rZWVwQWxpdmUpIHtcbiAgICAgIHZhciBjYWNoZWQgPSB0aGlzLmNhY2hlW3RoaXMuY3RvcklkXVxuICAgICAgaWYgKGNhY2hlZCkge1xuICAgICAgICByZXR1cm4gY2FjaGVkXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLkN0b3IpIHtcbiAgICAgIHZhciBwYXJlbnQgPSB0aGlzLl9ob3N0IHx8IHRoaXMudm1cbiAgICAgIHZhciBlbCA9IHRlbXBsYXRlUGFyc2VyLmNsb25lKHRoaXMuZWwpXG4gICAgICB2YXIgY2hpbGQgPSBwYXJlbnQuJGFkZENoaWxkKHtcbiAgICAgICAgZWw6IGVsLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICB0ZW1wbGF0ZTogdGhpcy50ZW1wbGF0ZSxcbiAgICAgICAgLy8gaWYgbm8gaW5saW5lLXRlbXBsYXRlLCB0aGVuIHRoZSBjb21waWxlZFxuICAgICAgICAvLyBsaW5rZXIgY2FuIGJlIGNhY2hlZCBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlLlxuICAgICAgICBfbGlua2VyQ2FjaGFibGU6ICF0aGlzLnRlbXBsYXRlLFxuICAgICAgICBfYXNDb21wb25lbnQ6IHRydWUsXG4gICAgICAgIF9pc1JvdXRlclZpZXc6IHRoaXMuX2lzUm91dGVyVmlldyxcbiAgICAgICAgX2NvbnRleHQ6IHRoaXMudm1cbiAgICAgIH0sIHRoaXMuQ3RvcilcbiAgICAgIGlmICh0aGlzLmtlZXBBbGl2ZSkge1xuICAgICAgICB0aGlzLmNhY2hlW3RoaXMuY3RvcklkXSA9IGNoaWxkXG4gICAgICB9XG4gICAgICByZXR1cm4gY2hpbGRcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRlYXJkb3duIHRoZSBjdXJyZW50IGNoaWxkLCBidXQgZGVmZXJzIGNsZWFudXAgc29cbiAgICogdGhhdCB3ZSBjYW4gc2VwYXJhdGUgdGhlIGRlc3Ryb3kgYW5kIHJlbW92YWwgc3RlcHMuXG4gICAqXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZGVmZXJcbiAgICovXG5cbiAgdW5idWlsZDogZnVuY3Rpb24gKGRlZmVyKSB7XG4gICAgdmFyIGNoaWxkID0gdGhpcy5jaGlsZFZNXG4gICAgaWYgKCFjaGlsZCB8fCB0aGlzLmtlZXBBbGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIHRoZSBzb2xlIHB1cnBvc2Ugb2YgYGRlZmVyQ2xlYW51cGAgaXMgc28gdGhhdCB3ZSBjYW5cbiAgICAvLyBcImRlYWN0aXZhdGVcIiB0aGUgdm0gcmlnaHQgbm93IGFuZCBwZXJmb3JtIERPTSByZW1vdmFsXG4gICAgLy8gbGF0ZXIuXG4gICAgY2hpbGQuJGRlc3Ryb3koZmFsc2UsIGRlZmVyKVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY3VycmVudCBkZXN0cm95ZWQgY2hpbGQgYW5kIG1hbnVhbGx5IGRvXG4gICAqIHRoZSBjbGVhbnVwIGFmdGVyIHJlbW92YWwuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gICAqL1xuXG4gIHJlbW92ZTogZnVuY3Rpb24gKGNoaWxkLCBjYikge1xuICAgIHZhciBrZWVwQWxpdmUgPSB0aGlzLmtlZXBBbGl2ZVxuICAgIGlmIChjaGlsZCkge1xuICAgICAgY2hpbGQuJHJlbW92ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgha2VlcEFsaXZlKSBjaGlsZC5fY2xlYW51cCgpXG4gICAgICAgIGlmIChjYikgY2IoKVxuICAgICAgfSlcbiAgICB9IGVsc2UgaWYgKGNiKSB7XG4gICAgICBjYigpXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBY3R1YWxseSBzd2FwIHRoZSBjb21wb25lbnRzLCBkZXBlbmRpbmcgb24gdGhlXG4gICAqIHRyYW5zaXRpb24gbW9kZS4gRGVmYXVsdHMgdG8gc2ltdWx0YW5lb3VzLlxuICAgKlxuICAgKiBAcGFyYW0ge1Z1ZX0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAgICovXG5cbiAgdHJhbnNpdGlvbjogZnVuY3Rpb24gKHRhcmdldCwgY2IpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuY2hpbGRWTVxuICAgIHRoaXMudW5zZXRDdXJyZW50KClcbiAgICB0aGlzLnNldEN1cnJlbnQodGFyZ2V0KVxuICAgIHN3aXRjaCAoc2VsZi50cmFuc01vZGUpIHtcbiAgICAgIGNhc2UgJ2luLW91dCc6XG4gICAgICAgIHRhcmdldC4kYmVmb3JlKHNlbGYuYW5jaG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5yZW1vdmUoY3VycmVudCwgY2IpXG4gICAgICAgIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdvdXQtaW4nOlxuICAgICAgICBzZWxmLnJlbW92ZShjdXJyZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCF0YXJnZXQuX2lzRGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0YXJnZXQuJGJlZm9yZShzZWxmLmFuY2hvciwgY2IpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc2VsZi5yZW1vdmUoY3VycmVudClcbiAgICAgICAgdGFyZ2V0LiRiZWZvcmUoc2VsZi5hbmNob3IsIGNiKVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2V0IGNoaWxkVk0gYW5kIHBhcmVudCByZWZcbiAgICovXG5cbiAgc2V0Q3VycmVudDogZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgdGhpcy5jaGlsZFZNID0gY2hpbGRcbiAgICB2YXIgcmVmSUQgPSBjaGlsZC5fcmVmSUQgfHwgdGhpcy5yZWZJRFxuICAgIGlmIChyZWZJRCkge1xuICAgICAgdGhpcy52bS4kW3JlZklEXSA9IGNoaWxkXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBVbnNldCBjaGlsZFZNIGFuZCBwYXJlbnQgcmVmXG4gICAqL1xuXG4gIHVuc2V0Q3VycmVudDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBjaGlsZCA9IHRoaXMuY2hpbGRWTVxuICAgIHRoaXMuY2hpbGRWTSA9IG51bGxcbiAgICB2YXIgcmVmSUQgPSAoY2hpbGQgJiYgY2hpbGQuX3JlZklEKSB8fCB0aGlzLnJlZklEXG4gICAgaWYgKHJlZklEKSB7XG4gICAgICB0aGlzLnZtLiRbcmVmSURdID0gbnVsbFxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVW5iaW5kLlxuICAgKi9cblxuICB1bmJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmludmFsaWRhdGVQZW5kaW5nKClcbiAgICAvLyBEbyBub3QgZGVmZXIgY2xlYW51cCB3aGVuIHVuYmluZGluZ1xuICAgIHRoaXMudW5idWlsZCgpXG4gICAgdGhpcy51bnNldEN1cnJlbnQoKVxuICAgIC8vIGRlc3Ryb3kgYWxsIGtlZXAtYWxpdmUgY2FjaGVkIGluc3RhbmNlc1xuICAgIGlmICh0aGlzLmNhY2hlKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jYWNoZSkge1xuICAgICAgICB0aGlzLmNhY2hlW2tleV0uJGRlc3Ryb3koKVxuICAgICAgfVxuICAgICAgdGhpcy5jYWNoZSA9IG51bGxcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvZGlyZWN0aXZlcy9jb21wb25lbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciBjb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKVxudmFyIHRlbXBsYXRlUGFyc2VyID0gcmVxdWlyZSgnLi4vcGFyc2Vycy90ZW1wbGF0ZScpXG5cbi8qKlxuICogUHJvY2VzcyBhbiBlbGVtZW50IG9yIGEgRG9jdW1lbnRGcmFnbWVudCBiYXNlZCBvbiBhXG4gKiBpbnN0YW5jZSBvcHRpb24gb2JqZWN0LiBUaGlzIGFsbG93cyB1cyB0byB0cmFuc2NsdWRlXG4gKiBhIHRlbXBsYXRlIG5vZGUvZnJhZ21lbnQgYmVmb3JlIHRoZSBpbnN0YW5jZSBpcyBjcmVhdGVkLFxuICogc28gdGhlIHByb2Nlc3NlZCBmcmFnbWVudCBjYW4gdGhlbiBiZSBjbG9uZWQgYW5kIHJldXNlZFxuICogaW4gdi1yZXBlYXQuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0VsZW1lbnR8RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuXG5leHBvcnRzLnRyYW5zY2x1ZGUgPSBmdW5jdGlvbiAoZWwsIG9wdGlvbnMpIHtcbiAgLy8gZXh0cmFjdCBjb250YWluZXIgYXR0cmlidXRlcyB0byBwYXNzIHRoZW0gZG93blxuICAvLyB0byBjb21waWxlciwgYmVjYXVzZSB0aGV5IG5lZWQgdG8gYmUgY29tcGlsZWQgaW5cbiAgLy8gcGFyZW50IHNjb3BlLiB3ZSBhcmUgbXV0YXRpbmcgdGhlIG9wdGlvbnMgb2JqZWN0IGhlcmVcbiAgLy8gYXNzdW1pbmcgdGhlIHNhbWUgb2JqZWN0IHdpbGwgYmUgdXNlZCBmb3IgY29tcGlsZVxuICAvLyByaWdodCBhZnRlciB0aGlzLlxuICBpZiAob3B0aW9ucykge1xuICAgIG9wdGlvbnMuX2NvbnRhaW5lckF0dHJzID0gZXh0cmFjdEF0dHJzKGVsKVxuICB9XG4gIC8vIGZvciB0ZW1wbGF0ZSB0YWdzLCB3aGF0IHdlIHdhbnQgaXMgaXRzIGNvbnRlbnQgYXNcbiAgLy8gYSBkb2N1bWVudEZyYWdtZW50IChmb3IgYmxvY2sgaW5zdGFuY2VzKVxuICBpZiAoXy5pc1RlbXBsYXRlKGVsKSkge1xuICAgIGVsID0gdGVtcGxhdGVQYXJzZXIucGFyc2UoZWwpXG4gIH1cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5fYXNDb21wb25lbnQgJiYgIW9wdGlvbnMudGVtcGxhdGUpIHtcbiAgICAgIG9wdGlvbnMudGVtcGxhdGUgPSAnPGNvbnRlbnQ+PC9jb250ZW50PidcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudGVtcGxhdGUpIHtcbiAgICAgIG9wdGlvbnMuX2NvbnRlbnQgPSBfLmV4dHJhY3RDb250ZW50KGVsKVxuICAgICAgZWwgPSB0cmFuc2NsdWRlVGVtcGxhdGUoZWwsIG9wdGlvbnMpXG4gICAgfVxuICB9XG4gIGlmIChlbCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpIHtcbiAgICAvLyBhbmNob3JzIGZvciBibG9jayBpbnN0YW5jZVxuICAgIC8vIHBhc3NpbmcgaW4gYHBlcnNpc3Q6IHRydWVgIHRvIGF2b2lkIHRoZW0gYmVpbmdcbiAgICAvLyBkaXNjYXJkZWQgYnkgSUUgZHVyaW5nIHRlbXBsYXRlIGNsb25pbmdcbiAgICBfLnByZXBlbmQoXy5jcmVhdGVBbmNob3IoJ3Ytc3RhcnQnLCB0cnVlKSwgZWwpXG4gICAgZWwuYXBwZW5kQ2hpbGQoXy5jcmVhdGVBbmNob3IoJ3YtZW5kJywgdHJ1ZSkpXG4gIH1cbiAgcmV0dXJuIGVsXG59XG5cbi8qKlxuICogUHJvY2VzcyB0aGUgdGVtcGxhdGUgb3B0aW9uLlxuICogSWYgdGhlIHJlcGxhY2Ugb3B0aW9uIGlzIHRydWUgdGhpcyB3aWxsIHN3YXAgdGhlICRlbC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fVxuICovXG5cbmZ1bmN0aW9uIHRyYW5zY2x1ZGVUZW1wbGF0ZSAoZWwsIG9wdGlvbnMpIHtcbiAgdmFyIHRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZVxuICB2YXIgZnJhZyA9IHRlbXBsYXRlUGFyc2VyLnBhcnNlKHRlbXBsYXRlLCB0cnVlKVxuICBpZiAoIWZyYWcpIHtcbiAgICBfLndhcm4oJ0ludmFsaWQgdGVtcGxhdGUgb3B0aW9uOiAnICsgdGVtcGxhdGUpXG4gIH0gZWxzZSB7XG4gICAgdmFyIHJlcGxhY2VyID0gZnJhZy5maXJzdENoaWxkXG4gICAgdmFyIHRhZyA9IHJlcGxhY2VyLnRhZ05hbWUgJiYgcmVwbGFjZXIudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKG9wdGlvbnMucmVwbGFjZSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoZWwgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgXy53YXJuKFxuICAgICAgICAgICdZb3UgYXJlIG1vdW50aW5nIGFuIGluc3RhbmNlIHdpdGggYSB0ZW1wbGF0ZSB0byAnICtcbiAgICAgICAgICAnPGJvZHk+LiBUaGlzIHdpbGwgcmVwbGFjZSA8Ym9keT4gZW50aXJlbHkuIFlvdSAnICtcbiAgICAgICAgICAnc2hvdWxkIHByb2JhYmx5IHVzZSBgcmVwbGFjZTogZmFsc2VgIGhlcmUuJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIC8vIG11bHRpLWNoaWxkcmVuIHRlbXBsYXRlXG4gICAgICAgIGZyYWcuY2hpbGROb2Rlcy5sZW5ndGggPiAxIHx8XG4gICAgICAgIC8vIG5vbi1lbGVtZW50IHRlbXBsYXRlXG4gICAgICAgIHJlcGxhY2VyLm5vZGVUeXBlICE9PSAxIHx8XG4gICAgICAgIC8vIHdoZW4gcm9vdCBub2RlIGlzIDxjb21wb25lbnQ+LCBpcyBhbiBlbGVtZW50XG4gICAgICAgIC8vIGRpcmVjdGl2ZSwgb3IgaGFzIHYtcmVwZWF0LCB0aGUgaW5zdGFuY2UgY291bGRcbiAgICAgICAgLy8gZW5kIHVwIGhhdmluZyBtdWx0aXBsZSB0b3AtbGV2ZWwgbm9kZXMsIHRodXNcbiAgICAgICAgLy8gYmVjb21pbmcgYSBibG9jayBpbnN0YW5jZS5cbiAgICAgICAgdGFnID09PSAnY29tcG9uZW50JyB8fFxuICAgICAgICBfLnJlc29sdmVBc3NldChvcHRpb25zLCAnZWxlbWVudERpcmVjdGl2ZXMnLCB0YWcpIHx8XG4gICAgICAgIHJlcGxhY2VyLmhhc0F0dHJpYnV0ZShjb25maWcucHJlZml4ICsgJ3JlcGVhdCcpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZyYWdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnMuX3JlcGxhY2VyQXR0cnMgPSBleHRyYWN0QXR0cnMocmVwbGFjZXIpXG4gICAgICAgIG1lcmdlQXR0cnMoZWwsIHJlcGxhY2VyKVxuICAgICAgICByZXR1cm4gcmVwbGFjZXJcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZWwuYXBwZW5kQ2hpbGQoZnJhZylcbiAgICAgIHJldHVybiBlbFxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciB0byBleHRyYWN0IGEgY29tcG9uZW50IGNvbnRhaW5lcidzIGF0dHJpYnV0ZSBuYW1lc1xuICogaW50byBhIG1hcC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gZXh0cmFjdEF0dHJzIChlbCkge1xuICBpZiAoZWwubm9kZVR5cGUgPT09IDEgJiYgZWwuaGFzQXR0cmlidXRlcygpKSB7XG4gICAgdmFyIGF0dHJzID0gZWwuYXR0cmlidXRlc1xuICAgIHZhciByZXMgPSB7fVxuICAgIHZhciBpID0gYXR0cnMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgcmVzW2F0dHJzW2ldLm5hbWVdID0gYXR0cnNbaV0udmFsdWVcbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9XG59XG5cbi8qKlxuICogTWVyZ2UgdGhlIGF0dHJpYnV0ZXMgb2YgdHdvIGVsZW1lbnRzLCBhbmQgbWFrZSBzdXJlXG4gKiB0aGUgY2xhc3MgbmFtZXMgYXJlIG1lcmdlZCBwcm9wZXJseS5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGZyb21cbiAqIEBwYXJhbSB7RWxlbWVudH0gdG9cbiAqL1xuXG5mdW5jdGlvbiBtZXJnZUF0dHJzIChmcm9tLCB0bykge1xuICB2YXIgYXR0cnMgPSBmcm9tLmF0dHJpYnV0ZXNcbiAgdmFyIGkgPSBhdHRycy5sZW5ndGhcbiAgdmFyIG5hbWUsIHZhbHVlXG4gIHdoaWxlIChpLS0pIHtcbiAgICBuYW1lID0gYXR0cnNbaV0ubmFtZVxuICAgIHZhbHVlID0gYXR0cnNbaV0udmFsdWVcbiAgICBpZiAoIXRvLmhhc0F0dHJpYnV0ZShuYW1lKSkge1xuICAgICAgdG8uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKVxuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2NsYXNzJykge1xuICAgICAgdG8uY2xhc3NOYW1lID0gdG8uY2xhc3NOYW1lICsgJyAnICsgdmFsdWVcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvY29tcGlsZXIvdHJhbnNjbHVkZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBtYW5pcHVsYXRpb24gZGlyZWN0aXZlc1xuZXhwb3J0cy50ZXh0ID0gcmVxdWlyZSgnLi90ZXh0JylcbmV4cG9ydHMuaHRtbCA9IHJlcXVpcmUoJy4vaHRtbCcpXG5leHBvcnRzLmF0dHIgPSByZXF1aXJlKCcuL2F0dHInKVxuZXhwb3J0cy5zaG93ID0gcmVxdWlyZSgnLi9zaG93JylcbmV4cG9ydHNbJ2NsYXNzJ10gPSByZXF1aXJlKCcuL2NsYXNzJylcbmV4cG9ydHMuZWwgPSByZXF1aXJlKCcuL2VsJylcbmV4cG9ydHMucmVmID0gcmVxdWlyZSgnLi9yZWYnKVxuZXhwb3J0cy5jbG9hayA9IHJlcXVpcmUoJy4vY2xvYWsnKVxuZXhwb3J0cy5zdHlsZSA9IHJlcXVpcmUoJy4vc3R5bGUnKVxuZXhwb3J0cy50cmFuc2l0aW9uID0gcmVxdWlyZSgnLi90cmFuc2l0aW9uJylcblxuLy8gZXZlbnQgbGlzdGVuZXIgZGlyZWN0aXZlc1xuZXhwb3J0cy5vbiA9IHJlcXVpcmUoJy4vb24nKVxuZXhwb3J0cy5tb2RlbCA9IHJlcXVpcmUoJy4vbW9kZWwnKVxuXG4vLyBsb2dpYyBjb250cm9sIGRpcmVjdGl2ZXNcbmV4cG9ydHMucmVwZWF0ID0gcmVxdWlyZSgnLi9yZXBlYXQnKVxuZXhwb3J0c1snaWYnXSA9IHJlcXVpcmUoJy4vaWYnKVxuXG4vLyBpbnRlcm5hbCBkaXJlY3RpdmVzIHRoYXQgc2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5XG4vLyBidXQgd2Ugc3RpbGwgd2FudCB0byBleHBvc2UgdGhlbSBmb3IgYWR2YW5jZWQgdXNhZ2UuXG5leHBvcnRzLl9jb21wb25lbnQgPSByZXF1aXJlKCcuL2NvbXBvbmVudCcpXG5leHBvcnRzLl9wcm9wID0gcmVxdWlyZSgnLi9wcm9wJylcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvZGlyZWN0aXZlcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIHByZWZpeGVzID0gWyctd2Via2l0LScsICctbW96LScsICctbXMtJ11cbnZhciBjYW1lbFByZWZpeGVzID0gWydXZWJraXQnLCAnTW96JywgJ21zJ11cbnZhciBpbXBvcnRhbnRSRSA9IC8haW1wb3J0YW50Oz8kL1xudmFyIGNhbWVsUkUgPSAvKFthLXpdKShbQS1aXSkvZ1xudmFyIHRlc3RFbCA9IG51bGxcbnZhciBwcm9wQ2FjaGUgPSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBkZWVwOiB0cnVlLFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuYXJnKSB7XG4gICAgICB0aGlzLnNldFByb3AodGhpcy5hcmcsIHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICB0aGlzLm9iamVjdEhhbmRsZXIodmFsdWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsLnN0eWxlLmNzc1RleHQgPSB2YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBvYmplY3RIYW5kbGVyOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAvLyBjYWNoZSBvYmplY3Qgc3R5bGVzIHNvIHRoYXQgb25seSBjaGFuZ2VkIHByb3BzXG4gICAgLy8gYXJlIGFjdHVhbGx5IHVwZGF0ZWQuXG4gICAgdmFyIGNhY2hlID0gdGhpcy5jYWNoZSB8fCAodGhpcy5jYWNoZSA9IHt9KVxuICAgIHZhciBwcm9wLCB2YWxcbiAgICBmb3IgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgIGlmICghKHByb3AgaW4gdmFsdWUpKSB7XG4gICAgICAgIHRoaXMuc2V0UHJvcChwcm9wLCBudWxsKVxuICAgICAgICBkZWxldGUgY2FjaGVbcHJvcF1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChwcm9wIGluIHZhbHVlKSB7XG4gICAgICB2YWwgPSB2YWx1ZVtwcm9wXVxuICAgICAgaWYgKHZhbCAhPT0gY2FjaGVbcHJvcF0pIHtcbiAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWxcbiAgICAgICAgdGhpcy5zZXRQcm9wKHByb3AsIHZhbClcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgc2V0UHJvcDogZnVuY3Rpb24gKHByb3AsIHZhbHVlKSB7XG4gICAgcHJvcCA9IG5vcm1hbGl6ZShwcm9wKVxuICAgIGlmICghcHJvcCkgcmV0dXJuIC8vIHVuc3VwcG9ydGVkIHByb3BcbiAgICAvLyBjYXN0IHBvc3NpYmxlIG51bWJlcnMvYm9vbGVhbnMgaW50byBzdHJpbmdzXG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHZhbHVlICs9ICcnXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YXIgaXNJbXBvcnRhbnQgPSBpbXBvcnRhbnRSRS50ZXN0KHZhbHVlKVxuICAgICAgICA/ICdpbXBvcnRhbnQnXG4gICAgICAgIDogJydcbiAgICAgIGlmIChpc0ltcG9ydGFudCkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoaW1wb3J0YW50UkUsICcnKS50cmltKClcbiAgICAgIH1cbiAgICAgIHRoaXMuZWwuc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgdmFsdWUsIGlzSW1wb3J0YW50KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3ApXG4gICAgfVxuICB9XG5cbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYSBDU1MgcHJvcGVydHkgbmFtZS5cbiAqIC0gY2FjaGUgcmVzdWx0XG4gKiAtIGF1dG8gcHJlZml4XG4gKiAtIGNhbWVsQ2FzZSAtPiBkYXNoLWNhc2VcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZSAocHJvcCkge1xuICBpZiAocHJvcENhY2hlW3Byb3BdKSB7XG4gICAgcmV0dXJuIHByb3BDYWNoZVtwcm9wXVxuICB9XG4gIHZhciByZXMgPSBwcmVmaXgocHJvcClcbiAgcHJvcENhY2hlW3Byb3BdID0gcHJvcENhY2hlW3Jlc10gPSByZXNcbiAgcmV0dXJuIHJlc1xufVxuXG4vKipcbiAqIEF1dG8gZGV0ZWN0IHRoZSBhcHByb3ByaWF0ZSBwcmVmaXggZm9yIGEgQ1NTIHByb3BlcnR5LlxuICogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcGF1bGlyaXNoLzUyMzY5MlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gcHJlZml4IChwcm9wKSB7XG4gIHByb3AgPSBwcm9wLnJlcGxhY2UoY2FtZWxSRSwgJyQxLSQyJykudG9Mb3dlckNhc2UoKVxuICB2YXIgY2FtZWwgPSBfLmNhbWVsaXplKHByb3ApXG4gIHZhciB1cHBlciA9IGNhbWVsLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgY2FtZWwuc2xpY2UoMSlcbiAgaWYgKCF0ZXN0RWwpIHtcbiAgICB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB9XG4gIGlmIChjYW1lbCBpbiB0ZXN0RWwuc3R5bGUpIHtcbiAgICByZXR1cm4gcHJvcFxuICB9XG4gIHZhciBpID0gcHJlZml4ZXMubGVuZ3RoXG4gIHZhciBwcmVmaXhlZFxuICB3aGlsZSAoaS0tKSB7XG4gICAgcHJlZml4ZWQgPSBjYW1lbFByZWZpeGVzW2ldICsgdXBwZXJcbiAgICBpZiAocHJlZml4ZWQgaW4gdGVzdEVsLnN0eWxlKSB7XG4gICAgICByZXR1cm4gcHJlZml4ZXNbaV0gKyBwcm9wXG4gICAgfVxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUvc3JjL2RpcmVjdGl2ZXMvc3R5bGUuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYXR0ciA9IHRoaXMuZWwubm9kZVR5cGUgPT09IDNcbiAgICAgID8gJ2RhdGEnXG4gICAgICA6ICd0ZXh0Q29udGVudCdcbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHRoaXMuZWxbdGhpcy5hdHRyXSA9IF8udG9TdHJpbmcodmFsdWUpXG4gIH1cbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvZGlyZWN0aXZlcy90ZXh0LmpzXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgdGVtcGxhdGVQYXJzZXIgPSByZXF1aXJlKCcuLi9wYXJzZXJzL3RlbXBsYXRlJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgIC8vIGEgY29tbWVudCBub2RlIG1lYW5zIHRoaXMgaXMgYSBiaW5kaW5nIGZvclxuICAgIC8vIHt7eyBpbmxpbmUgdW5lc2NhcGVkIGh0bWwgfX19XG4gICAgaWYgKHRoaXMuZWwubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgIC8vIGhvbGQgbm9kZXNcbiAgICAgIHRoaXMubm9kZXMgPSBbXVxuICAgICAgLy8gcmVwbGFjZSB0aGUgcGxhY2Vob2xkZXIgd2l0aCBwcm9wZXIgYW5jaG9yXG4gICAgICB0aGlzLmFuY2hvciA9IF8uY3JlYXRlQW5jaG9yKCd2LWh0bWwnKVxuICAgICAgXy5yZXBsYWNlKHRoaXMuZWwsIHRoaXMuYW5jaG9yKVxuICAgIH1cbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhbHVlID0gXy50b1N0cmluZyh2YWx1ZSlcbiAgICBpZiAodGhpcy5ub2Rlcykge1xuICAgICAgdGhpcy5zd2FwKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsLmlubmVySFRNTCA9IHZhbHVlXG4gICAgfVxuICB9LFxuXG4gIHN3YXA6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIC8vIHJlbW92ZSBvbGQgbm9kZXNcbiAgICB2YXIgaSA9IHRoaXMubm9kZXMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgXy5yZW1vdmUodGhpcy5ub2Rlc1tpXSlcbiAgICB9XG4gICAgLy8gY29udmVydCBuZXcgdmFsdWUgdG8gYSBmcmFnbWVudFxuICAgIC8vIGRvIG5vdCBhdHRlbXB0IHRvIHJldHJpZXZlIGZyb20gaWQgc2VsZWN0b3JcbiAgICB2YXIgZnJhZyA9IHRlbXBsYXRlUGFyc2VyLnBhcnNlKHZhbHVlLCB0cnVlLCB0cnVlKVxuICAgIC8vIHNhdmUgYSByZWZlcmVuY2UgdG8gdGhlc2Ugbm9kZXMgc28gd2UgY2FuIHJlbW92ZSBsYXRlclxuICAgIHRoaXMubm9kZXMgPSBfLnRvQXJyYXkoZnJhZy5jaGlsZE5vZGVzKVxuICAgIF8uYmVmb3JlKGZyYWcsIHRoaXMuYW5jaG9yKVxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUvc3JjL2RpcmVjdGl2ZXMvaHRtbC5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyB4bGlua1xudmFyIHhsaW5rTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaydcbnZhciB4bGlua1JFID0gL154bGluazovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIHByaW9yaXR5OiA4NTAsXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5hcmcpIHtcbiAgICAgIHRoaXMuc2V0QXR0cih0aGlzLmFyZywgdmFsdWUpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLm9iamVjdEhhbmRsZXIodmFsdWUpXG4gICAgfVxuICB9LFxuXG4gIG9iamVjdEhhbmRsZXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIC8vIGNhY2hlIG9iamVjdCBhdHRycyBzbyB0aGF0IG9ubHkgY2hhbmdlZCBhdHRyc1xuICAgIC8vIGFyZSBhY3R1YWxseSB1cGRhdGVkLlxuICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGUgfHwgKHRoaXMuY2FjaGUgPSB7fSlcbiAgICB2YXIgYXR0ciwgdmFsXG4gICAgZm9yIChhdHRyIGluIGNhY2hlKSB7XG4gICAgICBpZiAoIShhdHRyIGluIHZhbHVlKSkge1xuICAgICAgICB0aGlzLnNldEF0dHIoYXR0ciwgbnVsbClcbiAgICAgICAgZGVsZXRlIGNhY2hlW2F0dHJdXG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoYXR0ciBpbiB2YWx1ZSkge1xuICAgICAgdmFsID0gdmFsdWVbYXR0cl1cbiAgICAgIGlmICh2YWwgIT09IGNhY2hlW2F0dHJdKSB7XG4gICAgICAgIGNhY2hlW2F0dHJdID0gdmFsXG4gICAgICAgIHRoaXMuc2V0QXR0cihhdHRyLCB2YWwpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHNldEF0dHI6IGZ1bmN0aW9uIChhdHRyLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSB8fCB2YWx1ZSA9PT0gMCkge1xuICAgICAgaWYgKHhsaW5rUkUudGVzdChhdHRyKSkge1xuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZU5TKHhsaW5rTlMsIGF0dHIsIHZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGF0dHIpXG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvZGlyZWN0aXZlcy9hdHRyLmpzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0cmFuc2l0aW9uID0gcmVxdWlyZSgnLi4vdHJhbnNpdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgdHJhbnNpdGlvbi5hcHBseShlbCwgdmFsdWUgPyAxIDogLTEsIGZ1bmN0aW9uICgpIHtcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gdmFsdWUgPyAnJyA6ICdub25lJ1xuICB9LCB0aGlzLnZtKVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlL3NyYy9kaXJlY3RpdmVzL3Nob3cuanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcblxuLyoqXG4gKiBBcHBlbmQgd2l0aCB0cmFuc2l0aW9uLlxuICpcbiAqIEBvYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqL1xuXG5leHBvcnRzLmFwcGVuZCA9IGZ1bmN0aW9uIChlbCwgdGFyZ2V0LCB2bSwgY2IpIHtcbiAgYXBwbHkoZWwsIDEsIGZ1bmN0aW9uICgpIHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWwpXG4gIH0sIHZtLCBjYilcbn1cblxuLyoqXG4gKiBJbnNlcnRCZWZvcmUgd2l0aCB0cmFuc2l0aW9uLlxuICpcbiAqIEBvYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqL1xuXG5leHBvcnRzLmJlZm9yZSA9IGZ1bmN0aW9uIChlbCwgdGFyZ2V0LCB2bSwgY2IpIHtcbiAgYXBwbHkoZWwsIDEsIGZ1bmN0aW9uICgpIHtcbiAgICBfLmJlZm9yZShlbCwgdGFyZ2V0KVxuICB9LCB2bSwgY2IpXG59XG5cbi8qKlxuICogUmVtb3ZlIHdpdGggdHJhbnNpdGlvbi5cbiAqXG4gKiBAb2FyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqL1xuXG5leHBvcnRzLnJlbW92ZSA9IGZ1bmN0aW9uIChlbCwgdm0sIGNiKSB7XG4gIGFwcGx5KGVsLCAtMSwgZnVuY3Rpb24gKCkge1xuICAgIF8ucmVtb3ZlKGVsKVxuICB9LCB2bSwgY2IpXG59XG5cbi8qKlxuICogUmVtb3ZlIGJ5IGFwcGVuZGluZyB0byBhbm90aGVyIHBhcmVudCB3aXRoIHRyYW5zaXRpb24uXG4gKiBUaGlzIGlzIG9ubHkgdXNlZCBpbiBibG9jayBvcGVyYXRpb25zLlxuICpcbiAqIEBvYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqL1xuXG5leHBvcnRzLnJlbW92ZVRoZW5BcHBlbmQgPSBmdW5jdGlvbiAoZWwsIHRhcmdldCwgdm0sIGNiKSB7XG4gIGFwcGx5KGVsLCAtMSwgZnVuY3Rpb24gKCkge1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChlbClcbiAgfSwgdm0sIGNiKVxufVxuXG4vKipcbiAqIEFwcGVuZCB0aGUgY2hpbGROb2RlcyBvZiBhIGZyYWdtZW50IHRvIHRhcmdldC5cbiAqXG4gKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IGJsb2NrXG4gKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICogQHBhcmFtIHtWdWV9IHZtXG4gKi9cblxuZXhwb3J0cy5ibG9ja0FwcGVuZCA9IGZ1bmN0aW9uIChibG9jaywgdGFyZ2V0LCB2bSkge1xuICB2YXIgbm9kZXMgPSBfLnRvQXJyYXkoYmxvY2suY2hpbGROb2RlcylcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBub2Rlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBleHBvcnRzLmJlZm9yZShub2Rlc1tpXSwgdGFyZ2V0LCB2bSlcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGJsb2NrIG9mIG5vZGVzIGJldHdlZW4gdHdvIGVkZ2Ugbm9kZXMuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBzdGFydFxuICogQHBhcmFtIHtOb2RlfSBlbmRcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICovXG5cbmV4cG9ydHMuYmxvY2tSZW1vdmUgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCwgdm0pIHtcbiAgdmFyIG5vZGUgPSBzdGFydC5uZXh0U2libGluZ1xuICB2YXIgbmV4dFxuICB3aGlsZSAobm9kZSAhPT0gZW5kKSB7XG4gICAgbmV4dCA9IG5vZGUubmV4dFNpYmxpbmdcbiAgICBleHBvcnRzLnJlbW92ZShub2RlLCB2bSlcbiAgICBub2RlID0gbmV4dFxuICB9XG59XG5cbi8qKlxuICogQXBwbHkgdHJhbnNpdGlvbnMgd2l0aCBhbiBvcGVyYXRpb24gY2FsbGJhY2suXG4gKlxuICogQG9hcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtOdW1iZXJ9IGRpcmVjdGlvblxuICogICAgICAgICAgICAgICAgICAxOiBlbnRlclxuICogICAgICAgICAgICAgICAgIC0xOiBsZWF2ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3AgLSB0aGUgYWN0dWFsIERPTSBvcGVyYXRpb25cbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICovXG5cbnZhciBhcHBseSA9IGV4cG9ydHMuYXBwbHkgPSBmdW5jdGlvbiAoZWwsIGRpcmVjdGlvbiwgb3AsIHZtLCBjYikge1xuICB2YXIgdHJhbnNpdGlvbiA9IGVsLl9fdl90cmFuc1xuICBpZiAoXG4gICAgIXRyYW5zaXRpb24gfHxcbiAgICAvLyBza2lwIGlmIHRoZXJlIGFyZSBubyBqcyBob29rcyBhbmQgQ1NTIHRyYW5zaXRpb24gaXNcbiAgICAvLyBub3Qgc3VwcG9ydGVkXG4gICAgKCF0cmFuc2l0aW9uLmhvb2tzICYmICFfLnRyYW5zaXRpb25FbmRFdmVudCkgfHxcbiAgICAvLyBza2lwIHRyYW5zaXRpb25zIGZvciBpbml0aWFsIGNvbXBpbGVcbiAgICAhdm0uX2lzQ29tcGlsZWQgfHxcbiAgICAvLyBpZiB0aGUgdm0gaXMgYmVpbmcgbWFuaXB1bGF0ZWQgYnkgYSBwYXJlbnQgZGlyZWN0aXZlXG4gICAgLy8gZHVyaW5nIHRoZSBwYXJlbnQncyBjb21waWxhdGlvbiBwaGFzZSwgc2tpcCB0aGVcbiAgICAvLyBhbmltYXRpb24uXG4gICAgKHZtLiRwYXJlbnQgJiYgIXZtLiRwYXJlbnQuX2lzQ29tcGlsZWQpXG4gICkge1xuICAgIG9wKClcbiAgICBpZiAoY2IpIGNiKClcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgYWN0aW9uID0gZGlyZWN0aW9uID4gMCA/ICdlbnRlcicgOiAnbGVhdmUnXG4gIHRyYW5zaXRpb25bYWN0aW9uXShvcCwgY2IpXG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUvc3JjL3RyYW5zaXRpb24vaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciBhZGRDbGFzcyA9IF8uYWRkQ2xhc3NcbnZhciByZW1vdmVDbGFzcyA9IF8ucmVtb3ZlQ2xhc3NcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgdXBkYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodGhpcy5hcmcpIHtcbiAgICAgIC8vIHNpbmdsZSB0b2dnbGVcbiAgICAgIHZhciBtZXRob2QgPSB2YWx1ZSA/IGFkZENsYXNzIDogcmVtb3ZlQ2xhc3NcbiAgICAgIG1ldGhvZCh0aGlzLmVsLCB0aGlzLmFyZylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhbnVwKClcbiAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIHJhdyBjbGFzcyB0ZXh0XG4gICAgICAgIGFkZENsYXNzKHRoaXMuZWwsIHZhbHVlKVxuICAgICAgICB0aGlzLmxhc3RWYWwgPSB2YWx1ZVxuICAgICAgfSBlbHNlIGlmIChfLmlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgICAgIC8vIG9iamVjdCB0b2dnbGVcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHZhbHVlW2tleV0pIHtcbiAgICAgICAgICAgIGFkZENsYXNzKHRoaXMuZWwsIGtleSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwga2V5KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXZLZXlzID0gT2JqZWN0LmtleXModmFsdWUpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGNsZWFudXA6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmxhc3RWYWwpIHtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWwsIHRoaXMubGFzdFZhbClcbiAgICB9XG4gICAgaWYgKHRoaXMucHJldktleXMpIHtcbiAgICAgIHZhciBpID0gdGhpcy5wcmV2S2V5cy5sZW5ndGhcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgaWYgKCF2YWx1ZSB8fCAhdmFsdWVbdGhpcy5wcmV2S2V5c1tpXV0pIHtcbiAgICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCB0aGlzLnByZXZLZXlzW2ldKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUvc3JjL2RpcmVjdGl2ZXMvY2xhc3MuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgaXNMaXRlcmFsOiB0cnVlLFxuXG4gIGJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnZtLiQkW3RoaXMuZXhwcmVzc2lvbl0gPSB0aGlzLmVsXG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgZGVsZXRlIHRoaXMudm0uJCRbdGhpcy5leHByZXNzaW9uXVxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUvc3JjL2RpcmVjdGl2ZXMvZWwuanNcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgaXNMaXRlcmFsOiB0cnVlLFxuXG4gIGJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzLmVsLl9fdnVlX19cbiAgICBpZiAoIXZtKSB7XG4gICAgICBfLndhcm4oXG4gICAgICAgICd2LXJlZiBzaG91bGQgb25seSBiZSB1c2VkIG9uIGEgY29tcG9uZW50IHJvb3QgZWxlbWVudC4nXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgd2UgZ2V0IGhlcmUsIGl0IG1lYW5zIHRoaXMgaXMgYSBgdi1yZWZgIG9uIGFcbiAgICAvLyBjaGlsZCwgYmVjYXVzZSBwYXJlbnQgc2NvcGUgYHYtcmVmYCBpcyBzdHJpcHBlZCBpblxuICAgIC8vIGB2LWNvbXBvbmVudGAgYWxyZWFkeS4gU28gd2UganVzdCByZWNvcmQgb3VyIG93biByZWZcbiAgICAvLyBoZXJlIC0gaXQgd2lsbCBvdmVyd3JpdGUgcGFyZW50IHJlZiBpbiBgdi1jb21wb25lbnRgLFxuICAgIC8vIGlmIGFueS5cbiAgICB2bS5fcmVmSUQgPSB0aGlzLmV4cHJlc3Npb25cbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlL3NyYy9kaXJlY3RpdmVzL3JlZi5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vY29uZmlnJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmVsXG4gICAgdGhpcy52bS4kb25jZSgnaG9vazpjb21waWxlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShjb25maWcucHJlZml4ICsgJ2Nsb2FrJylcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUvc3JjL2RpcmVjdGl2ZXMvY2xvYWsuanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciBUcmFuc2l0aW9uID0gcmVxdWlyZSgnLi4vdHJhbnNpdGlvbi90cmFuc2l0aW9uJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgcHJpb3JpdHk6IDEwMDAsXG4gIGlzTGl0ZXJhbDogdHJ1ZSxcblxuICBiaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0R5bmFtaWNMaXRlcmFsKSB7XG4gICAgICB0aGlzLnVwZGF0ZSh0aGlzLmV4cHJlc3Npb24pXG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGlkLCBvbGRJZCkge1xuICAgIHZhciBlbCA9IHRoaXMuZWxcbiAgICB2YXIgdm0gPSB0aGlzLmVsLl9fdnVlX18gfHwgdGhpcy52bVxuICAgIHZhciBob29rcyA9IF8ucmVzb2x2ZUFzc2V0KHZtLiRvcHRpb25zLCAndHJhbnNpdGlvbnMnLCBpZClcbiAgICBpZCA9IGlkIHx8ICd2J1xuICAgIGVsLl9fdl90cmFucyA9IG5ldyBUcmFuc2l0aW9uKGVsLCBpZCwgaG9va3MsIHZtKVxuICAgIGlmIChvbGRJZCkge1xuICAgICAgXy5yZW1vdmVDbGFzcyhlbCwgb2xkSWQgKyAnLXRyYW5zaXRpb24nKVxuICAgIH1cbiAgICBfLmFkZENsYXNzKGVsLCBpZCArICctdHJhbnNpdGlvbicpXG4gIH1cbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvZGlyZWN0aXZlcy90cmFuc2l0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgcXVldWUgPSByZXF1aXJlKCcuL3F1ZXVlJylcbnZhciBhZGRDbGFzcyA9IF8uYWRkQ2xhc3NcbnZhciByZW1vdmVDbGFzcyA9IF8ucmVtb3ZlQ2xhc3NcbnZhciB0cmFuc2l0aW9uRW5kRXZlbnQgPSBfLnRyYW5zaXRpb25FbmRFdmVudFxudmFyIGFuaW1hdGlvbkVuZEV2ZW50ID0gXy5hbmltYXRpb25FbmRFdmVudFxudmFyIHRyYW5zRHVyYXRpb25Qcm9wID0gXy50cmFuc2l0aW9uUHJvcCArICdEdXJhdGlvbidcbnZhciBhbmltRHVyYXRpb25Qcm9wID0gXy5hbmltYXRpb25Qcm9wICsgJ0R1cmF0aW9uJ1xuXG52YXIgVFlQRV9UUkFOU0lUSU9OID0gMVxudmFyIFRZUEVfQU5JTUFUSU9OID0gMlxuXG4vKipcbiAqIEEgVHJhbnNpdGlvbiBvYmplY3QgdGhhdCBlbmNhcHN1bGF0ZXMgdGhlIHN0YXRlIGFuZCBsb2dpY1xuICogb2YgdGhlIHRyYW5zaXRpb24uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcGFyYW0ge09iamVjdH0gaG9va3NcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICovXG5cbmZ1bmN0aW9uIFRyYW5zaXRpb24gKGVsLCBpZCwgaG9va3MsIHZtKSB7XG4gIHRoaXMuZWwgPSBlbFxuICB0aGlzLmVudGVyQ2xhc3MgPSBpZCArICctZW50ZXInXG4gIHRoaXMubGVhdmVDbGFzcyA9IGlkICsgJy1sZWF2ZSdcbiAgdGhpcy5ob29rcyA9IGhvb2tzXG4gIHRoaXMudm0gPSB2bVxuICAvLyBhc3luYyBzdGF0ZVxuICB0aGlzLnBlbmRpbmdDc3NFdmVudCA9XG4gIHRoaXMucGVuZGluZ0Nzc0NiID1cbiAgdGhpcy5jYW5jZWwgPVxuICB0aGlzLnBlbmRpbmdKc0NiID1cbiAgdGhpcy5vcCA9XG4gIHRoaXMuY2IgPSBudWxsXG4gIHRoaXMudHlwZUNhY2hlID0ge31cbiAgLy8gYmluZFxuICB2YXIgc2VsZiA9IHRoaXNcbiAgO1snZW50ZXJOZXh0VGljaycsICdlbnRlckRvbmUnLCAnbGVhdmVOZXh0VGljaycsICdsZWF2ZURvbmUnXVxuICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgICBzZWxmW21dID0gXy5iaW5kKHNlbGZbbV0sIHNlbGYpXG4gICAgfSlcbn1cblxudmFyIHAgPSBUcmFuc2l0aW9uLnByb3RvdHlwZVxuXG4vKipcbiAqIFN0YXJ0IGFuIGVudGVyaW5nIHRyYW5zaXRpb24uXG4gKlxuICogMS4gZW50ZXIgdHJhbnNpdGlvbiB0cmlnZ2VyZWRcbiAqIDIuIGNhbGwgYmVmb3JlRW50ZXIgaG9va1xuICogMy4gYWRkIGVudGVyIGNsYXNzXG4gKiA0LiBpbnNlcnQvc2hvdyBlbGVtZW50XG4gKiA1LiBjYWxsIGVudGVyIGhvb2sgKHdpdGggcG9zc2libGUgZXhwbGljaXQganMgY2FsbGJhY2spXG4gKiA2LiByZWZsb3dcbiAqIDcuIGJhc2VkIG9uIHRyYW5zaXRpb24gdHlwZTpcbiAqICAgIC0gdHJhbnNpdGlvbjpcbiAqICAgICAgICByZW1vdmUgY2xhc3Mgbm93LCB3YWl0IGZvciB0cmFuc2l0aW9uZW5kLFxuICogICAgICAgIHRoZW4gZG9uZSBpZiB0aGVyZSdzIG5vIGV4cGxpY2l0IGpzIGNhbGxiYWNrLlxuICogICAgLSBhbmltYXRpb246XG4gKiAgICAgICAgd2FpdCBmb3IgYW5pbWF0aW9uZW5kLCByZW1vdmUgY2xhc3MsXG4gKiAgICAgICAgdGhlbiBkb25lIGlmIHRoZXJlJ3Mgbm8gZXhwbGljaXQganMgY2FsbGJhY2suXG4gKiAgICAtIG5vIGNzcyB0cmFuc2l0aW9uOlxuICogICAgICAgIGRvbmUgbm93IGlmIHRoZXJlJ3Mgbm8gZXhwbGljaXQganMgY2FsbGJhY2suXG4gKiA4LiB3YWl0IGZvciBlaXRoZXIgZG9uZSBvciBqcyBjYWxsYmFjaywgdGhlbiBjYWxsXG4gKiAgICBhZnRlckVudGVyIGhvb2suXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3AgLSBpbnNlcnQvc2hvdyB0aGUgZWxlbWVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICovXG5cbnAuZW50ZXIgPSBmdW5jdGlvbiAob3AsIGNiKSB7XG4gIHRoaXMuY2FuY2VsUGVuZGluZygpXG4gIHRoaXMuY2FsbEhvb2soJ2JlZm9yZUVudGVyJylcbiAgdGhpcy5jYiA9IGNiXG4gIGFkZENsYXNzKHRoaXMuZWwsIHRoaXMuZW50ZXJDbGFzcylcbiAgb3AoKVxuICB0aGlzLmNhbGxIb29rV2l0aENiKCdlbnRlcicpXG4gIHRoaXMuY2FuY2VsID0gdGhpcy5ob29rcyAmJiB0aGlzLmhvb2tzLmVudGVyQ2FuY2VsbGVkXG4gIHF1ZXVlLnB1c2godGhpcy5lbnRlck5leHRUaWNrKVxufVxuXG4vKipcbiAqIFRoZSBcIm5leHRUaWNrXCIgcGhhc2Ugb2YgYW4gZW50ZXJpbmcgdHJhbnNpdGlvbiwgd2hpY2ggaXNcbiAqIHRvIGJlIHB1c2hlZCBpbnRvIGEgcXVldWUgYW5kIGV4ZWN1dGVkIGFmdGVyIGEgcmVmbG93IHNvXG4gKiB0aGF0IHJlbW92aW5nIHRoZSBjbGFzcyBjYW4gdHJpZ2dlciBhIENTUyB0cmFuc2l0aW9uLlxuICovXG5cbnAuZW50ZXJOZXh0VGljayA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHR5cGUgPSB0aGlzLmdldENzc1RyYW5zaXRpb25UeXBlKHRoaXMuZW50ZXJDbGFzcylcbiAgdmFyIGVudGVyRG9uZSA9IHRoaXMuZW50ZXJEb25lXG4gIGlmICh0eXBlID09PSBUWVBFX1RSQU5TSVRJT04pIHtcbiAgICAvLyB0cmlnZ2VyIHRyYW5zaXRpb24gYnkgcmVtb3ZpbmcgZW50ZXIgY2xhc3Mgbm93XG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgdGhpcy5lbnRlckNsYXNzKVxuICAgIHRoaXMuc2V0dXBDc3NDYih0cmFuc2l0aW9uRW5kRXZlbnQsIGVudGVyRG9uZSlcbiAgfSBlbHNlIGlmICh0eXBlID09PSBUWVBFX0FOSU1BVElPTikge1xuICAgIHRoaXMuc2V0dXBDc3NDYihhbmltYXRpb25FbmRFdmVudCwgZW50ZXJEb25lKVxuICB9IGVsc2UgaWYgKCF0aGlzLnBlbmRpbmdKc0NiKSB7XG4gICAgZW50ZXJEb25lKClcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBcImNsZWFudXBcIiBwaGFzZSBvZiBhbiBlbnRlcmluZyB0cmFuc2l0aW9uLlxuICovXG5cbnAuZW50ZXJEb25lID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNhbmNlbCA9IHRoaXMucGVuZGluZ0pzQ2IgPSBudWxsXG4gIHJlbW92ZUNsYXNzKHRoaXMuZWwsIHRoaXMuZW50ZXJDbGFzcylcbiAgdGhpcy5jYWxsSG9vaygnYWZ0ZXJFbnRlcicpXG4gIGlmICh0aGlzLmNiKSB0aGlzLmNiKClcbn1cblxuLyoqXG4gKiBTdGFydCBhIGxlYXZpbmcgdHJhbnNpdGlvbi5cbiAqXG4gKiAxLiBsZWF2ZSB0cmFuc2l0aW9uIHRyaWdnZXJlZC5cbiAqIDIuIGNhbGwgYmVmb3JlTGVhdmUgaG9va1xuICogMy4gYWRkIGxlYXZlIGNsYXNzICh0cmlnZ2VyIGNzcyB0cmFuc2l0aW9uKVxuICogNC4gY2FsbCBsZWF2ZSBob29rICh3aXRoIHBvc3NpYmxlIGV4cGxpY2l0IGpzIGNhbGxiYWNrKVxuICogNS4gcmVmbG93IGlmIG5vIGV4cGxpY2l0IGpzIGNhbGxiYWNrIGlzIHByb3ZpZGVkXG4gKiA2LiBiYXNlZCBvbiB0cmFuc2l0aW9uIHR5cGU6XG4gKiAgICAtIHRyYW5zaXRpb24gb3IgYW5pbWF0aW9uOlxuICogICAgICAgIHdhaXQgZm9yIGVuZCBldmVudCwgcmVtb3ZlIGNsYXNzLCB0aGVuIGRvbmUgaWZcbiAqICAgICAgICB0aGVyZSdzIG5vIGV4cGxpY2l0IGpzIGNhbGxiYWNrLlxuICogICAgLSBubyBjc3MgdHJhbnNpdGlvbjpcbiAqICAgICAgICBkb25lIGlmIHRoZXJlJ3Mgbm8gZXhwbGljaXQganMgY2FsbGJhY2suXG4gKiA3LiB3YWl0IGZvciBlaXRoZXIgZG9uZSBvciBqcyBjYWxsYmFjaywgdGhlbiBjYWxsXG4gKiAgICBhZnRlckxlYXZlIGhvb2suXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3AgLSByZW1vdmUvaGlkZSB0aGUgZWxlbWVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICovXG5cbnAubGVhdmUgPSBmdW5jdGlvbiAob3AsIGNiKSB7XG4gIHRoaXMuY2FuY2VsUGVuZGluZygpXG4gIHRoaXMuY2FsbEhvb2soJ2JlZm9yZUxlYXZlJylcbiAgdGhpcy5vcCA9IG9wXG4gIHRoaXMuY2IgPSBjYlxuICBhZGRDbGFzcyh0aGlzLmVsLCB0aGlzLmxlYXZlQ2xhc3MpXG4gIHRoaXMuY2FsbEhvb2tXaXRoQ2IoJ2xlYXZlJylcbiAgdGhpcy5jYW5jZWwgPSB0aGlzLmhvb2tzICYmIHRoaXMuaG9va3MuZW50ZXJDYW5jZWxsZWRcbiAgLy8gb25seSBuZWVkIHRvIGRvIGxlYXZlTmV4dFRpY2sgaWYgdGhlcmUncyBubyBleHBsaWNpdFxuICAvLyBqcyBjYWxsYmFja1xuICBpZiAoIXRoaXMucGVuZGluZ0pzQ2IpIHtcbiAgICBxdWV1ZS5wdXNoKHRoaXMubGVhdmVOZXh0VGljaylcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBcIm5leHRUaWNrXCIgcGhhc2Ugb2YgYSBsZWF2aW5nIHRyYW5zaXRpb24uXG4gKi9cblxucC5sZWF2ZU5leHRUaWNrID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdHlwZSA9IHRoaXMuZ2V0Q3NzVHJhbnNpdGlvblR5cGUodGhpcy5sZWF2ZUNsYXNzKVxuICBpZiAodHlwZSkge1xuICAgIHZhciBldmVudCA9IHR5cGUgPT09IFRZUEVfVFJBTlNJVElPTlxuICAgICAgPyB0cmFuc2l0aW9uRW5kRXZlbnRcbiAgICAgIDogYW5pbWF0aW9uRW5kRXZlbnRcbiAgICB0aGlzLnNldHVwQ3NzQ2IoZXZlbnQsIHRoaXMubGVhdmVEb25lKVxuICB9IGVsc2Uge1xuICAgIHRoaXMubGVhdmVEb25lKClcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBcImNsZWFudXBcIiBwaGFzZSBvZiBhIGxlYXZpbmcgdHJhbnNpdGlvbi5cbiAqL1xuXG5wLmxlYXZlRG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jYW5jZWwgPSB0aGlzLnBlbmRpbmdKc0NiID0gbnVsbFxuICB0aGlzLm9wKClcbiAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgdGhpcy5sZWF2ZUNsYXNzKVxuICB0aGlzLmNhbGxIb29rKCdhZnRlckxlYXZlJylcbiAgaWYgKHRoaXMuY2IpIHRoaXMuY2IoKVxufVxuXG4vKipcbiAqIENhbmNlbCBhbnkgcGVuZGluZyBjYWxsYmFja3MgZnJvbSBhIHByZXZpb3VzbHkgcnVubmluZ1xuICogYnV0IG5vdCBmaW5pc2hlZCB0cmFuc2l0aW9uLlxuICovXG5cbnAuY2FuY2VsUGVuZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5vcCA9IHRoaXMuY2IgPSBudWxsXG4gIHZhciBoYXNQZW5kaW5nID0gZmFsc2VcbiAgaWYgKHRoaXMucGVuZGluZ0Nzc0NiKSB7XG4gICAgaGFzUGVuZGluZyA9IHRydWVcbiAgICBfLm9mZih0aGlzLmVsLCB0aGlzLnBlbmRpbmdDc3NFdmVudCwgdGhpcy5wZW5kaW5nQ3NzQ2IpXG4gICAgdGhpcy5wZW5kaW5nQ3NzRXZlbnQgPSB0aGlzLnBlbmRpbmdDc3NDYiA9IG51bGxcbiAgfVxuICBpZiAodGhpcy5wZW5kaW5nSnNDYikge1xuICAgIGhhc1BlbmRpbmcgPSB0cnVlXG4gICAgdGhpcy5wZW5kaW5nSnNDYi5jYW5jZWwoKVxuICAgIHRoaXMucGVuZGluZ0pzQ2IgPSBudWxsXG4gIH1cbiAgaWYgKGhhc1BlbmRpbmcpIHtcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCB0aGlzLmVudGVyQ2xhc3MpXG4gICAgcmVtb3ZlQ2xhc3ModGhpcy5lbCwgdGhpcy5sZWF2ZUNsYXNzKVxuICB9XG4gIGlmICh0aGlzLmNhbmNlbCkge1xuICAgIHRoaXMuY2FuY2VsLmNhbGwodGhpcy52bSwgdGhpcy5lbClcbiAgICB0aGlzLmNhbmNlbCA9IG51bGxcbiAgfVxufVxuXG4vKipcbiAqIENhbGwgYSB1c2VyLXByb3ZpZGVkIHN5bmNocm9ub3VzIGhvb2sgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqL1xuXG5wLmNhbGxIb29rID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgaWYgKHRoaXMuaG9va3MgJiYgdGhpcy5ob29rc1t0eXBlXSkge1xuICAgIHRoaXMuaG9va3NbdHlwZV0uY2FsbCh0aGlzLnZtLCB0aGlzLmVsKVxuICB9XG59XG5cbi8qKlxuICogQ2FsbCBhIHVzZXItcHJvdmlkZWQsIHBvdGVudGlhbGx5LWFzeW5jIGhvb2sgZnVuY3Rpb24uXG4gKiBXZSBjaGVjayBmb3IgdGhlIGxlbmd0aCBvZiBhcmd1bWVudHMgdG8gc2VlIGlmIHRoZSBob29rXG4gKiBleHBlY3RzIGEgYGRvbmVgIGNhbGxiYWNrLiBJZiB0cnVlLCB0aGUgdHJhbnNpdGlvbidzIGVuZFxuICogd2lsbCBiZSBkZXRlcm1pbmVkIGJ5IHdoZW4gdGhlIHVzZXIgY2FsbHMgdGhhdCBjYWxsYmFjaztcbiAqIG90aGVyd2lzZSwgdGhlIGVuZCBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBDU1MgdHJhbnNpdGlvbiBvclxuICogYW5pbWF0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKi9cblxucC5jYWxsSG9va1dpdGhDYiA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIHZhciBob29rID0gdGhpcy5ob29rcyAmJiB0aGlzLmhvb2tzW3R5cGVdXG4gIGlmIChob29rKSB7XG4gICAgaWYgKGhvb2subGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy5wZW5kaW5nSnNDYiA9IF8uY2FuY2VsbGFibGUodGhpc1t0eXBlICsgJ0RvbmUnXSlcbiAgICB9XG4gICAgaG9vay5jYWxsKHRoaXMudm0sIHRoaXMuZWwsIHRoaXMucGVuZGluZ0pzQ2IpXG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgYW4gZWxlbWVudCdzIHRyYW5zaXRpb24gdHlwZSBiYXNlZCBvbiB0aGVcbiAqIGNhbGN1bGF0ZWQgc3R5bGVzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuXG5wLmdldENzc1RyYW5zaXRpb25UeXBlID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKFxuICAgICF0cmFuc2l0aW9uRW5kRXZlbnQgfHxcbiAgICAvLyBza2lwIENTUyB0cmFuc2l0aW9ucyBpZiBwYWdlIGlzIG5vdCB2aXNpYmxlIC1cbiAgICAvLyB0aGlzIHNvbHZlcyB0aGUgaXNzdWUgb2YgdHJhbnNpdGlvbmVuZCBldmVudHMgbm90XG4gICAgLy8gZmlyaW5nIHVudGlsIHRoZSBwYWdlIGlzIHZpc2libGUgYWdhaW4uXG4gICAgLy8gcGFnZVZpc2liaWxpdHkgQVBJIGlzIHN1cHBvcnRlZCBpbiBJRTEwKywgc2FtZSBhc1xuICAgIC8vIENTUyB0cmFuc2l0aW9ucy5cbiAgICBkb2N1bWVudC5oaWRkZW4gfHxcbiAgICAvLyBleHBsaWNpdCBqcy1vbmx5IHRyYW5zaXRpb25cbiAgICAodGhpcy5ob29rcyAmJiB0aGlzLmhvb2tzLmNzcyA9PT0gZmFsc2UpXG4gICkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciB0eXBlID0gdGhpcy50eXBlQ2FjaGVbY2xhc3NOYW1lXVxuICBpZiAodHlwZSkgcmV0dXJuIHR5cGVcbiAgdmFyIGlubGluZVN0eWxlcyA9IHRoaXMuZWwuc3R5bGVcbiAgdmFyIGNvbXB1dGVkU3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbClcbiAgdmFyIHRyYW5zRHVyYXRpb24gPVxuICAgIGlubGluZVN0eWxlc1t0cmFuc0R1cmF0aW9uUHJvcF0gfHxcbiAgICBjb21wdXRlZFN0eWxlc1t0cmFuc0R1cmF0aW9uUHJvcF1cbiAgaWYgKHRyYW5zRHVyYXRpb24gJiYgdHJhbnNEdXJhdGlvbiAhPT0gJzBzJykge1xuICAgIHR5cGUgPSBUWVBFX1RSQU5TSVRJT05cbiAgfSBlbHNlIHtcbiAgICB2YXIgYW5pbUR1cmF0aW9uID1cbiAgICAgIGlubGluZVN0eWxlc1thbmltRHVyYXRpb25Qcm9wXSB8fFxuICAgICAgY29tcHV0ZWRTdHlsZXNbYW5pbUR1cmF0aW9uUHJvcF1cbiAgICBpZiAoYW5pbUR1cmF0aW9uICYmIGFuaW1EdXJhdGlvbiAhPT0gJzBzJykge1xuICAgICAgdHlwZSA9IFRZUEVfQU5JTUFUSU9OXG4gICAgfVxuICB9XG4gIGlmICh0eXBlKSB7XG4gICAgdGhpcy50eXBlQ2FjaGVbY2xhc3NOYW1lXSA9IHR5cGVcbiAgfVxuICByZXR1cm4gdHlwZVxufVxuXG4vKipcbiAqIFNldHVwIGEgQ1NTIHRyYW5zaXRpb25lbmQvYW5pbWF0aW9uZW5kIGNhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqL1xuXG5wLnNldHVwQ3NzQ2IgPSBmdW5jdGlvbiAoZXZlbnQsIGNiKSB7XG4gIHRoaXMucGVuZGluZ0Nzc0V2ZW50ID0gZXZlbnRcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBlbCA9IHRoaXMuZWxcbiAgdmFyIG9uRW5kID0gdGhpcy5wZW5kaW5nQ3NzQ2IgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldCA9PT0gZWwpIHtcbiAgICAgIF8ub2ZmKGVsLCBldmVudCwgb25FbmQpXG4gICAgICBzZWxmLnBlbmRpbmdDc3NFdmVudCA9IHNlbGYucGVuZGluZ0Nzc0NiID0gbnVsbFxuICAgICAgaWYgKCFzZWxmLnBlbmRpbmdKc0NiICYmIGNiKSB7XG4gICAgICAgIGNiKClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXy5vbihlbCwgZXZlbnQsIG9uRW5kKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zaXRpb25cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvdHJhbnNpdGlvbi90cmFuc2l0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgcXVldWUgPSBbXVxudmFyIHF1ZXVlZCA9IGZhbHNlXG5cbi8qKlxuICogUHVzaCBhIGpvYiBpbnRvIHRoZSBxdWV1ZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBqb2JcbiAqL1xuXG5leHBvcnRzLnB1c2ggPSBmdW5jdGlvbiAoam9iKSB7XG4gIHF1ZXVlLnB1c2goam9iKVxuICBpZiAoIXF1ZXVlZCkge1xuICAgIHF1ZXVlZCA9IHRydWVcbiAgICBfLm5leHRUaWNrKGZsdXNoKVxuICB9XG59XG5cbi8qKlxuICogRmx1c2ggdGhlIHF1ZXVlLCBhbmQgZG8gb25lIGZvcmNlZCByZWZsb3cgYmVmb3JlXG4gKiB0cmlnZ2VyaW5nIHRyYW5zaXRpb25zLlxuICovXG5cbmZ1bmN0aW9uIGZsdXNoICgpIHtcbiAgLy8gRm9yY2UgbGF5b3V0XG4gIHZhciBmID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodFxuICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgcXVldWVbaV0oKVxuICB9XG4gIHF1ZXVlID0gW11cbiAgcXVldWVkID0gZmFsc2VcbiAgLy8gZHVtbXkgcmV0dXJuLCBzbyBqcyBsaW50ZXJzIGRvbid0IGNvbXBsYWluIGFib3V0XG4gIC8vIHVudXNlZCB2YXJpYWJsZSBmXG4gIHJldHVybiBmXG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUvc3JjL3RyYW5zaXRpb24vcXVldWUuanNcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgYWNjZXB0U3RhdGVtZW50OiB0cnVlLFxuICBwcmlvcml0eTogNzAwLFxuXG4gIGJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBkZWFsIHdpdGggaWZyYW1lc1xuICAgIGlmIChcbiAgICAgIHRoaXMuZWwudGFnTmFtZSA9PT0gJ0lGUkFNRScgJiZcbiAgICAgIHRoaXMuYXJnICE9PSAnbG9hZCdcbiAgICApIHtcbiAgICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgdGhpcy5pZnJhbWVCaW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfLm9uKHNlbGYuZWwuY29udGVudFdpbmRvdywgc2VsZi5hcmcsIHNlbGYuaGFuZGxlcilcbiAgICAgIH1cbiAgICAgIF8ub24odGhpcy5lbCwgJ2xvYWQnLCB0aGlzLmlmcmFtZUJpbmQpXG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIF8ud2FybihcbiAgICAgICAgJ0RpcmVjdGl2ZSBcInYtb246JyArIHRoaXMuZXhwcmVzc2lvbiArICdcIiAnICtcbiAgICAgICAgJ2V4cGVjdHMgYSBmdW5jdGlvbiB2YWx1ZS4nXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5yZXNldCgpXG4gICAgdmFyIHZtID0gdGhpcy52bVxuICAgIHRoaXMuaGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnRhcmdldFZNID0gdm1cbiAgICAgIHZtLiRldmVudCA9IGVcbiAgICAgIHZhciByZXMgPSBoYW5kbGVyKGUpXG4gICAgICB2bS4kZXZlbnQgPSBudWxsXG4gICAgICByZXR1cm4gcmVzXG4gICAgfVxuICAgIGlmICh0aGlzLmlmcmFtZUJpbmQpIHtcbiAgICAgIHRoaXMuaWZyYW1lQmluZCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIF8ub24odGhpcy5lbCwgdGhpcy5hcmcsIHRoaXMuaGFuZGxlcilcbiAgICB9XG4gIH0sXG5cbiAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmlmcmFtZUJpbmRcbiAgICAgID8gdGhpcy5lbC5jb250ZW50V2luZG93XG4gICAgICA6IHRoaXMuZWxcbiAgICBpZiAodGhpcy5oYW5kbGVyKSB7XG4gICAgICBfLm9mZihlbCwgdGhpcy5hcmcsIHRoaXMuaGFuZGxlcilcbiAgICB9XG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5yZXNldCgpXG4gICAgXy5vZmYodGhpcy5lbCwgJ2xvYWQnLCB0aGlzLmlmcmFtZUJpbmQpXG4gIH1cbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvZGlyZWN0aXZlcy9vbi5qc1xuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKVxuXG52YXIgaGFuZGxlcnMgPSB7XG4gIHRleHQ6IHJlcXVpcmUoJy4vdGV4dCcpLFxuICByYWRpbzogcmVxdWlyZSgnLi9yYWRpbycpLFxuICBzZWxlY3Q6IHJlcXVpcmUoJy4vc2VsZWN0JyksXG4gIGNoZWNrYm94OiByZXF1aXJlKCcuL2NoZWNrYm94Jylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgcHJpb3JpdHk6IDgwMCxcbiAgdHdvV2F5OiB0cnVlLFxuICBoYW5kbGVyczogaGFuZGxlcnMsXG5cbiAgLyoqXG4gICAqIFBvc3NpYmxlIGVsZW1lbnRzOlxuICAgKiAgIDxzZWxlY3Q+XG4gICAqICAgPHRleHRhcmVhPlxuICAgKiAgIDxpbnB1dCB0eXBlPVwiKlwiPlxuICAgKiAgICAgLSB0ZXh0XG4gICAqICAgICAtIGNoZWNrYm94XG4gICAqICAgICAtIHJhZGlvXG4gICAqICAgICAtIG51bWJlclxuICAgKiAgICAgLSBUT0RPOiBtb3JlIHR5cGVzIG1heSBiZSBzdXBwbGllZCBhcyBhIHBsdWdpblxuICAgKi9cblxuICBiaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gZnJpZW5kbHkgd2FybmluZy4uLlxuICAgIHRoaXMuY2hlY2tGaWx0ZXJzKClcbiAgICBpZiAodGhpcy5oYXNSZWFkICYmICF0aGlzLmhhc1dyaXRlKSB7XG4gICAgICBfLndhcm4oXG4gICAgICAgICdJdCBzZWVtcyB5b3UgYXJlIHVzaW5nIGEgcmVhZC1vbmx5IGZpbHRlciB3aXRoICcgK1xuICAgICAgICAndi1tb2RlbC4gWW91IG1pZ2h0IHdhbnQgdG8gdXNlIGEgdHdvLXdheSBmaWx0ZXIgJyArXG4gICAgICAgICd0byBlbnN1cmUgY29ycmVjdCBiZWhhdmlvci4nXG4gICAgICApXG4gICAgfVxuICAgIHZhciBlbCA9IHRoaXMuZWxcbiAgICB2YXIgdGFnID0gZWwudGFnTmFtZVxuICAgIHZhciBoYW5kbGVyXG4gICAgaWYgKHRhZyA9PT0gJ0lOUFVUJykge1xuICAgICAgaGFuZGxlciA9IGhhbmRsZXJzW2VsLnR5cGVdIHx8IGhhbmRsZXJzLnRleHRcbiAgICB9IGVsc2UgaWYgKHRhZyA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgIGhhbmRsZXIgPSBoYW5kbGVycy5zZWxlY3RcbiAgICB9IGVsc2UgaWYgKHRhZyA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgaGFuZGxlciA9IGhhbmRsZXJzLnRleHRcbiAgICB9IGVsc2Uge1xuICAgICAgXy53YXJuKCd2LW1vZGVsIGRvZXMgbm90IHN1cHBvcnQgZWxlbWVudCB0eXBlOiAnICsgdGFnKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGhhbmRsZXIuYmluZC5jYWxsKHRoaXMpXG4gICAgdGhpcy51cGRhdGUgPSBoYW5kbGVyLnVwZGF0ZVxuICAgIHRoaXMudW5iaW5kID0gaGFuZGxlci51bmJpbmRcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2sgcmVhZC93cml0ZSBmaWx0ZXIgc3RhdHMuXG4gICAqL1xuXG4gIGNoZWNrRmlsdGVyczogZnVuY3Rpb24gKCkge1xuICAgIHZhciBmaWx0ZXJzID0gdGhpcy5maWx0ZXJzXG4gICAgaWYgKCFmaWx0ZXJzKSByZXR1cm5cbiAgICB2YXIgaSA9IGZpbHRlcnMubGVuZ3RoXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIGZpbHRlciA9IF8ucmVzb2x2ZUFzc2V0KHRoaXMudm0uJG9wdGlvbnMsICdmaWx0ZXJzJywgZmlsdGVyc1tpXS5uYW1lKVxuICAgICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicgfHwgZmlsdGVyLnJlYWQpIHtcbiAgICAgICAgdGhpcy5oYXNSZWFkID0gdHJ1ZVxuICAgICAgfVxuICAgICAgaWYgKGZpbHRlci53cml0ZSkge1xuICAgICAgICB0aGlzLmhhc1dyaXRlID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlL3NyYy9kaXJlY3RpdmVzL21vZGVsL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIGJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICB2YXIgZWwgPSB0aGlzLmVsXG5cbiAgICAvLyBjaGVjayBwYXJhbXNcbiAgICAvLyAtIGxhenk6IHVwZGF0ZSBtb2RlbCBvbiBcImNoYW5nZVwiIGluc3RlYWQgb2YgXCJpbnB1dFwiXG4gICAgdmFyIGxhenkgPSB0aGlzLl9jaGVja1BhcmFtKCdsYXp5JykgIT0gbnVsbFxuICAgIC8vIC0gbnVtYmVyOiBjYXN0IHZhbHVlIGludG8gbnVtYmVyIHdoZW4gdXBkYXRpbmcgbW9kZWwuXG4gICAgdmFyIG51bWJlciA9IHRoaXMuX2NoZWNrUGFyYW0oJ251bWJlcicpICE9IG51bGxcbiAgICAvLyAtIGRlYm91bmNlOiBkZWJvdW5jZSB0aGUgaW5wdXQgbGlzdGVuZXJcbiAgICB2YXIgZGVib3VuY2UgPSBwYXJzZUludCh0aGlzLl9jaGVja1BhcmFtKCdkZWJvdW5jZScpLCAxMClcblxuICAgIC8vIGhhbmRsZSBjb21wb3NpdGlvbiBldmVudHMuXG4gICAgLy8gICBodHRwOi8vYmxvZy5ldmFueW91Lm1lLzIwMTQvMDEvMDMvY29tcG9zaXRpb24tZXZlbnQvXG4gICAgLy8gc2tpcCB0aGlzIGZvciBBbmRyb2lkIGJlY2F1c2UgaXQgaGFuZGxlcyBjb21wb3NpdGlvblxuICAgIC8vIGV2ZW50cyBxdWl0ZSBkaWZmZXJlbnRseS4gQW5kcm9pZCBkb2Vzbid0IHRyaWdnZXJcbiAgICAvLyBjb21wb3NpdGlvbiBldmVudHMgZm9yIGxhbmd1YWdlIGlucHV0IG1ldGhvZHMgZS5nLlxuICAgIC8vIENoaW5lc2UsIGJ1dCBpbnN0ZWFkIHRyaWdnZXJzIHRoZW0gZm9yIHNwZWxsaW5nXG4gICAgLy8gc3VnZ2VzdGlvbnMuLi4gKHNlZSBEaXNjdXNzaW9uLyMxNjIpXG4gICAgdmFyIGNvbXBvc2luZyA9IGZhbHNlXG4gICAgaWYgKCFfLmlzQW5kcm9pZCkge1xuICAgICAgdGhpcy5vbkNvbXBvc2VTdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29tcG9zaW5nID0gdHJ1ZVxuICAgICAgfVxuICAgICAgdGhpcy5vbkNvbXBvc2VFbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbXBvc2luZyA9IGZhbHNlXG4gICAgICAgIC8vIGluIElFMTEgdGhlIFwiY29tcG9zaXRpb25lbmRcIiBldmVudCBmaXJlcyBBRlRFUlxuICAgICAgICAvLyB0aGUgXCJpbnB1dFwiIGV2ZW50LCBzbyB0aGUgaW5wdXQgaGFuZGxlciBpcyBibG9ja2VkXG4gICAgICAgIC8vIGF0IHRoZSBlbmQuLi4gaGF2ZSB0byBjYWxsIGl0IGhlcmUuXG4gICAgICAgIHNlbGYubGlzdGVuZXIoKVxuICAgICAgfVxuICAgICAgXy5vbihlbCwgJ2NvbXBvc2l0aW9uc3RhcnQnLCB0aGlzLm9uQ29tcG9zZVN0YXJ0KVxuICAgICAgXy5vbihlbCwgJ2NvbXBvc2l0aW9uZW5kJywgdGhpcy5vbkNvbXBvc2VFbmQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3luY1RvTW9kZWwgKCkge1xuICAgICAgdmFyIHZhbCA9IG51bWJlclxuICAgICAgICA/IF8udG9OdW1iZXIoZWwudmFsdWUpXG4gICAgICAgIDogZWwudmFsdWVcbiAgICAgIHNlbGYuc2V0KHZhbClcbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgZGlyZWN0aXZlIGhhcyBmaWx0ZXJzLCB3ZSBuZWVkIHRvXG4gICAgLy8gcmVjb3JkIGN1cnNvciBwb3NpdGlvbiBhbmQgcmVzdG9yZSBpdCBhZnRlciB1cGRhdGluZ1xuICAgIC8vIHRoZSBpbnB1dCB3aXRoIHRoZSBmaWx0ZXJlZCB2YWx1ZS5cbiAgICAvLyBhbHNvIGZvcmNlIHVwZGF0ZSBmb3IgdHlwZT1cInJhbmdlXCIgaW5wdXRzIHRvIGVuYWJsZVxuICAgIC8vIFwibG9jayBpbiByYW5nZVwiIChzZWUgIzUwNilcbiAgICBpZiAodGhpcy5oYXNSZWFkIHx8IGVsLnR5cGUgPT09ICdyYW5nZScpIHtcbiAgICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjb21wb3NpbmcpIHJldHVyblxuICAgICAgICB2YXIgY2hhcnNPZmZzZXRcbiAgICAgICAgLy8gc29tZSBIVE1MNSBpbnB1dCB0eXBlcyB0aHJvdyBlcnJvciBoZXJlXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gcmVjb3JkIGhvdyBtYW55IGNoYXJzIGZyb20gdGhlIGVuZCBvZiBpbnB1dFxuICAgICAgICAgIC8vIHRoZSBjdXJzb3Igd2FzIGF0XG4gICAgICAgICAgY2hhcnNPZmZzZXQgPSBlbC52YWx1ZS5sZW5ndGggLSBlbC5zZWxlY3Rpb25TdGFydFxuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICAvLyBGaXggSUUxMC8xMSBpbmZpbml0ZSB1cGRhdGUgY3ljbGVcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3l5eDk5MDgwMy92dWUvaXNzdWVzLzU5MlxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGNoYXJzT2Zmc2V0IDwgMCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHN5bmNUb01vZGVsKClcbiAgICAgICAgXy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gZm9yY2UgYSB2YWx1ZSB1cGRhdGUsIGJlY2F1c2UgaW5cbiAgICAgICAgICAvLyBjZXJ0YWluIGNhc2VzIHRoZSB3cml0ZSBmaWx0ZXJzIG91dHB1dCB0aGVcbiAgICAgICAgICAvLyBzYW1lIHJlc3VsdCBmb3IgZGlmZmVyZW50IGlucHV0IHZhbHVlcywgYW5kXG4gICAgICAgICAgLy8gdGhlIE9ic2VydmVyIHNldCBldmVudHMgd29uJ3QgYmUgdHJpZ2dlcmVkLlxuICAgICAgICAgIHZhciBuZXdWYWwgPSBzZWxmLl93YXRjaGVyLnZhbHVlXG4gICAgICAgICAgc2VsZi51cGRhdGUobmV3VmFsKVxuICAgICAgICAgIGlmIChjaGFyc09mZnNldCAhPSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgY3Vyc29yUG9zID1cbiAgICAgICAgICAgICAgXy50b1N0cmluZyhuZXdWYWwpLmxlbmd0aCAtIGNoYXJzT2Zmc2V0XG4gICAgICAgICAgICBlbC5zZXRTZWxlY3Rpb25SYW5nZShjdXJzb3JQb3MsIGN1cnNvclBvcylcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjb21wb3NpbmcpIHJldHVyblxuICAgICAgICBzeW5jVG9Nb2RlbCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRlYm91bmNlKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyID0gXy5kZWJvdW5jZSh0aGlzLmxpc3RlbmVyLCBkZWJvdW5jZSlcbiAgICB9XG5cbiAgICAvLyBOb3cgYXR0YWNoIHRoZSBtYWluIGxpc3RlbmVyXG5cbiAgICB0aGlzLmV2ZW50ID0gbGF6eSA/ICdjaGFuZ2UnIDogJ2lucHV0J1xuICAgIC8vIFN1cHBvcnQgalF1ZXJ5IGV2ZW50cywgc2luY2UgalF1ZXJ5LnRyaWdnZXIoKSBkb2Vzbid0XG4gICAgLy8gdHJpZ2dlciBuYXRpdmUgZXZlbnRzIGluIHNvbWUgY2FzZXMgYW5kIHNvbWUgcGx1Z2luc1xuICAgIC8vIHJlbHkgb24gJC50cmlnZ2VyKClcbiAgICAvL1xuICAgIC8vIFdlIHdhbnQgdG8gbWFrZSBzdXJlIGlmIGEgbGlzdGVuZXIgaXMgYXR0YWNoZWQgdXNpbmdcbiAgICAvLyBqUXVlcnksIGl0IGlzIGFsc28gcmVtb3ZlZCB3aXRoIGpRdWVyeSwgdGhhdCdzIHdoeVxuICAgIC8vIHdlIGRvIHRoZSBjaGVjayBmb3IgZWFjaCBkaXJlY3RpdmUgaW5zdGFuY2UgYW5kXG4gICAgLy8gc3RvcmUgdGhhdCBjaGVjayByZXN1bHQgb24gaXRzZWxmLiBUaGlzIGFsc28gYWxsb3dzXG4gICAgLy8gZWFzaWVyIHRlc3QgY292ZXJhZ2UgY29udHJvbCBieSB1bnNldHRpbmcgdGhlIGdsb2JhbFxuICAgIC8vIGpRdWVyeSB2YXJpYWJsZSBpbiB0ZXN0cy5cbiAgICB0aGlzLmhhc2pRdWVyeSA9IHR5cGVvZiBqUXVlcnkgPT09ICdmdW5jdGlvbidcbiAgICBpZiAodGhpcy5oYXNqUXVlcnkpIHtcbiAgICAgIGpRdWVyeShlbCkub24odGhpcy5ldmVudCwgdGhpcy5saXN0ZW5lcilcbiAgICB9IGVsc2Uge1xuICAgICAgXy5vbihlbCwgdGhpcy5ldmVudCwgdGhpcy5saXN0ZW5lcilcbiAgICB9XG5cbiAgICAvLyBJRTkgZG9lc24ndCBmaXJlIGlucHV0IGV2ZW50IG9uIGJhY2tzcGFjZS9kZWwvY3V0XG4gICAgaWYgKCFsYXp5ICYmIF8uaXNJRTkpIHtcbiAgICAgIHRoaXMub25DdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF8ubmV4dFRpY2soc2VsZi5saXN0ZW5lcilcbiAgICAgIH1cbiAgICAgIHRoaXMub25EZWwgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA0NiB8fCBlLmtleUNvZGUgPT09IDgpIHtcbiAgICAgICAgICBzZWxmLmxpc3RlbmVyKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXy5vbihlbCwgJ2N1dCcsIHRoaXMub25DdXQpXG4gICAgICBfLm9uKGVsLCAna2V5dXAnLCB0aGlzLm9uRGVsKVxuICAgIH1cblxuICAgIC8vIHNldCBpbml0aWFsIHZhbHVlIGlmIHByZXNlbnRcbiAgICBpZiAoXG4gICAgICBlbC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykgfHxcbiAgICAgIChlbC50YWdOYW1lID09PSAnVEVYVEFSRUEnICYmIGVsLnZhbHVlLnRyaW0oKSlcbiAgICApIHtcbiAgICAgIHRoaXMuX2luaXRWYWx1ZSA9IG51bWJlclxuICAgICAgICA/IF8udG9OdW1iZXIoZWwudmFsdWUpXG4gICAgICAgIDogZWwudmFsdWVcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB0aGlzLmVsLnZhbHVlID0gXy50b1N0cmluZyh2YWx1ZSlcbiAgfSxcblxuICB1bmJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmVsXG4gICAgaWYgKHRoaXMuaGFzalF1ZXJ5KSB7XG4gICAgICBqUXVlcnkoZWwpLm9mZih0aGlzLmV2ZW50LCB0aGlzLmxpc3RlbmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBfLm9mZihlbCwgdGhpcy5ldmVudCwgdGhpcy5saXN0ZW5lcilcbiAgICB9XG4gICAgaWYgKHRoaXMub25Db21wb3NlU3RhcnQpIHtcbiAgICAgIF8ub2ZmKGVsLCAnY29tcG9zaXRpb25zdGFydCcsIHRoaXMub25Db21wb3NlU3RhcnQpXG4gICAgICBfLm9mZihlbCwgJ2NvbXBvc2l0aW9uZW5kJywgdGhpcy5vbkNvbXBvc2VFbmQpXG4gICAgfVxuICAgIGlmICh0aGlzLm9uQ3V0KSB7XG4gICAgICBfLm9mZihlbCwgJ2N1dCcsIHRoaXMub25DdXQpXG4gICAgICBfLm9mZihlbCwgJ2tleXVwJywgdGhpcy5vbkRlbClcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvZGlyZWN0aXZlcy9tb2RlbC90ZXh0LmpzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIGJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICB2YXIgZWwgPSB0aGlzLmVsXG4gICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuc2V0KGVsLnZhbHVlKVxuICAgIH1cbiAgICBfLm9uKGVsLCAnY2hhbmdlJywgdGhpcy5saXN0ZW5lcilcbiAgICBpZiAoZWwuY2hlY2tlZCkge1xuICAgICAgdGhpcy5faW5pdFZhbHVlID0gZWwudmFsdWVcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbiAgICB0aGlzLmVsLmNoZWNrZWQgPSB2YWx1ZSA9PSB0aGlzLmVsLnZhbHVlXG4gICAgLyogZXNsaW50LWVuYWJsZSBlcWVxZXEgKi9cbiAgfSxcblxuICB1bmJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICBfLm9mZih0aGlzLmVsLCAnY2hhbmdlJywgdGhpcy5saXN0ZW5lcilcbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlL3NyYy9kaXJlY3RpdmVzL21vZGVsL3JhZGlvLmpzXG4gKiogbW9kdWxlIGlkID0gNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpXG52YXIgV2F0Y2hlciA9IHJlcXVpcmUoJy4uLy4uL3dhdGNoZXInKVxudmFyIGRpclBhcnNlciA9IHJlcXVpcmUoJy4uLy4uL3BhcnNlcnMvZGlyZWN0aXZlJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHZhciBlbCA9IHRoaXMuZWxcbiAgICAvLyB1cGRhdGUgRE9NIHVzaW5nIGxhdGVzdCB2YWx1ZS5cbiAgICB0aGlzLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuX3dhdGNoZXIpIHtcbiAgICAgICAgc2VsZi51cGRhdGUoc2VsZi5fd2F0Y2hlci5nZXQoKSlcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY2hlY2sgb3B0aW9ucyBwYXJhbVxuICAgIHZhciBvcHRpb25zUGFyYW0gPSB0aGlzLl9jaGVja1BhcmFtKCdvcHRpb25zJylcbiAgICBpZiAob3B0aW9uc1BhcmFtKSB7XG4gICAgICBpbml0T3B0aW9ucy5jYWxsKHRoaXMsIG9wdGlvbnNQYXJhbSlcbiAgICB9XG4gICAgdGhpcy5udW1iZXIgPSB0aGlzLl9jaGVja1BhcmFtKCdudW1iZXInKSAhPSBudWxsXG4gICAgdGhpcy5tdWx0aXBsZSA9IGVsLmhhc0F0dHJpYnV0ZSgnbXVsdGlwbGUnKVxuICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBzZWxmLm11bHRpcGxlXG4gICAgICAgID8gZ2V0TXVsdGlWYWx1ZShlbClcbiAgICAgICAgOiBlbC52YWx1ZVxuICAgICAgdmFsdWUgPSBzZWxmLm51bWJlclxuICAgICAgICA/IF8uaXNBcnJheSh2YWx1ZSlcbiAgICAgICAgICA/IHZhbHVlLm1hcChfLnRvTnVtYmVyKVxuICAgICAgICAgIDogXy50b051bWJlcih2YWx1ZSlcbiAgICAgICAgOiB2YWx1ZVxuICAgICAgc2VsZi5zZXQodmFsdWUpXG4gICAgfVxuICAgIF8ub24oZWwsICdjaGFuZ2UnLCB0aGlzLmxpc3RlbmVyKVxuICAgIGNoZWNrSW5pdGlhbFZhbHVlLmNhbGwodGhpcylcbiAgICAvLyBBbGwgbWFqb3IgYnJvd3NlcnMgZXhjZXB0IEZpcmVmb3ggcmVzZXRzXG4gICAgLy8gc2VsZWN0ZWRJbmRleCB3aXRoIHZhbHVlIC0xIHRvIDAgd2hlbiB0aGUgZWxlbWVudFxuICAgIC8vIGlzIGFwcGVuZGVkIHRvIGEgbmV3IHBhcmVudCwgdGhlcmVmb3JlIHdlIGhhdmUgdG9cbiAgICAvLyBmb3JjZSBhIERPTSB1cGRhdGUgd2hlbmV2ZXIgdGhhdCBoYXBwZW5zLi4uXG4gICAgdGhpcy52bS4kb24oJ2hvb2s6YXR0YWNoZWQnLCB0aGlzLmZvcmNlVXBkYXRlKVxuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIGVsID0gdGhpcy5lbFxuICAgIGVsLnNlbGVjdGVkSW5kZXggPSAtMVxuICAgIHZhciBtdWx0aSA9IHRoaXMubXVsdGlwbGUgJiYgXy5pc0FycmF5KHZhbHVlKVxuICAgIHZhciBvcHRpb25zID0gZWwub3B0aW9uc1xuICAgIHZhciBpID0gb3B0aW9ucy5sZW5ndGhcbiAgICB2YXIgb3B0aW9uXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgb3B0aW9uID0gb3B0aW9uc1tpXVxuICAgICAgLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSBtdWx0aVxuICAgICAgICA/IGluZGV4T2YodmFsdWUsIG9wdGlvbi52YWx1ZSkgPiAtMVxuICAgICAgICA6IHZhbHVlID09IG9wdGlvbi52YWx1ZVxuICAgICAgLyogZXNsaW50LWVuYWJsZSBlcWVxZXEgKi9cbiAgICB9XG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgXy5vZmYodGhpcy5lbCwgJ2NoYW5nZScsIHRoaXMubGlzdGVuZXIpXG4gICAgdGhpcy52bS4kb2ZmKCdob29rOmF0dGFjaGVkJywgdGhpcy5mb3JjZVVwZGF0ZSlcbiAgICBpZiAodGhpcy5vcHRpb25XYXRjaGVyKSB7XG4gICAgICB0aGlzLm9wdGlvbldhdGNoZXIudGVhcmRvd24oKVxuICAgIH1cbiAgfVxuXG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgb3B0aW9uIGxpc3QgZnJvbSB0aGUgcGFyYW0uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV4cHJlc3Npb25cbiAqL1xuXG5mdW5jdGlvbiBpbml0T3B0aW9ucyAoZXhwcmVzc2lvbikge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGRlc2NyaXB0b3IgPSBkaXJQYXJzZXIucGFyc2UoZXhwcmVzc2lvbilbMF1cbiAgZnVuY3Rpb24gb3B0aW9uVXBkYXRlV2F0Y2hlciAodmFsdWUpIHtcbiAgICBpZiAoXy5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgc2VsZi5lbC5pbm5lckhUTUwgPSAnJ1xuICAgICAgYnVpbGRPcHRpb25zKHNlbGYuZWwsIHZhbHVlKVxuICAgICAgc2VsZi5mb3JjZVVwZGF0ZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIF8ud2FybignSW52YWxpZCBvcHRpb25zIHZhbHVlIGZvciB2LW1vZGVsOiAnICsgdmFsdWUpXG4gICAgfVxuICB9XG4gIHRoaXMub3B0aW9uV2F0Y2hlciA9IG5ldyBXYXRjaGVyKFxuICAgIHRoaXMudm0sXG4gICAgZGVzY3JpcHRvci5leHByZXNzaW9uLFxuICAgIG9wdGlvblVwZGF0ZVdhdGNoZXIsXG4gICAge1xuICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgIGZpbHRlcnM6IGRlc2NyaXB0b3IuZmlsdGVyc1xuICAgIH1cbiAgKVxuICAvLyB1cGRhdGUgd2l0aCBpbml0aWFsIHZhbHVlXG4gIG9wdGlvblVwZGF0ZVdhdGNoZXIodGhpcy5vcHRpb25XYXRjaGVyLnZhbHVlKVxufVxuXG4vKipcbiAqIEJ1aWxkIHVwIG9wdGlvbiBlbGVtZW50cy4gSUU5IGRvZXNuJ3QgY3JlYXRlIG9wdGlvbnNcbiAqIHdoZW4gc2V0dGluZyBpbm5lckhUTUwgb24gPHNlbGVjdD4gZWxlbWVudHMsIHNvIHdlIGhhdmVcbiAqIHRvIHVzZSBET00gQVBJIGhlcmUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBwYXJlbnQgLSBhIDxzZWxlY3Q+IG9yIGFuIDxvcHRncm91cD5cbiAqIEBwYXJhbSB7QXJyYXl9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBidWlsZE9wdGlvbnMgKHBhcmVudCwgb3B0aW9ucykge1xuICB2YXIgb3AsIGVsXG4gIGZvciAodmFyIGkgPSAwLCBsID0gb3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBvcCA9IG9wdGlvbnNbaV1cbiAgICBpZiAoIW9wLm9wdGlvbnMpIHtcbiAgICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgIGlmICh0eXBlb2Ygb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsLnRleHQgPSBlbC52YWx1ZSA9IG9wXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAob3AudmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIGVsLnZhbHVlID0gb3AudmFsdWVcbiAgICAgICAgfVxuICAgICAgICBlbC50ZXh0ID0gb3AudGV4dCB8fCBvcC52YWx1ZSB8fCAnJ1xuICAgICAgICBpZiAob3AuZGlzYWJsZWQpIHtcbiAgICAgICAgICBlbC5kaXNhYmxlZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJylcbiAgICAgIGVsLmxhYmVsID0gb3AubGFiZWxcbiAgICAgIGJ1aWxkT3B0aW9ucyhlbCwgb3Aub3B0aW9ucylcbiAgICB9XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGVsKVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgdGhlIGluaXRpYWwgdmFsdWUgZm9yIHNlbGVjdGVkIG9wdGlvbnMuXG4gKi9cblxuZnVuY3Rpb24gY2hlY2tJbml0aWFsVmFsdWUgKCkge1xuICB2YXIgaW5pdFZhbHVlXG4gIHZhciBvcHRpb25zID0gdGhpcy5lbC5vcHRpb25zXG4gIGZvciAodmFyIGkgPSAwLCBsID0gb3B0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAob3B0aW9uc1tpXS5oYXNBdHRyaWJ1dGUoJ3NlbGVjdGVkJykpIHtcbiAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgIChpbml0VmFsdWUgfHwgKGluaXRWYWx1ZSA9IFtdKSlcbiAgICAgICAgICAucHVzaChvcHRpb25zW2ldLnZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdFZhbHVlID0gb3B0aW9uc1tpXS52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAodHlwZW9mIGluaXRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLl9pbml0VmFsdWUgPSB0aGlzLm51bWJlclxuICAgICAgPyBfLnRvTnVtYmVyKGluaXRWYWx1ZSlcbiAgICAgIDogaW5pdFZhbHVlXG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgdG8gZXh0cmFjdCBhIHZhbHVlIGFycmF5IGZvciBzZWxlY3RbbXVsdGlwbGVdXG4gKlxuICogQHBhcmFtIHtTZWxlY3RFbGVtZW50fSBlbFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuZnVuY3Rpb24gZ2V0TXVsdGlWYWx1ZSAoZWwpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAuY2FsbChlbC5vcHRpb25zLCBmaWx0ZXJTZWxlY3RlZClcbiAgICAubWFwKGdldE9wdGlvblZhbHVlKVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJTZWxlY3RlZCAob3ApIHtcbiAgcmV0dXJuIG9wLnNlbGVjdGVkXG59XG5cbmZ1bmN0aW9uIGdldE9wdGlvblZhbHVlIChvcCkge1xuICByZXR1cm4gb3AudmFsdWUgfHwgb3AudGV4dFxufVxuXG4vKipcbiAqIE5hdGl2ZSBBcnJheS5pbmRleE9mIHVzZXMgc3RyaWN0IGVxdWFsLCBidXQgaW4gdGhpc1xuICogY2FzZSB3ZSBuZWVkIHRvIG1hdGNoIHN0cmluZy9udW1iZXJzIHdpdGggc29mdCBlcXVhbC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuZnVuY3Rpb24gaW5kZXhPZiAoYXJyLCB2YWwpIHtcbiAgdmFyIGkgPSBhcnIubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbiAgICBpZiAoYXJyW2ldID09IHZhbCkgcmV0dXJuIGlcbiAgICAvKiBlc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xuICB9XG4gIHJldHVybiAtMVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlL3NyYy9kaXJlY3RpdmVzL21vZGVsL3NlbGVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBiaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgdmFyIGVsID0gdGhpcy5lbFxuICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLnNldChlbC5jaGVja2VkKVxuICAgIH1cbiAgICBfLm9uKGVsLCAnY2hhbmdlJywgdGhpcy5saXN0ZW5lcilcbiAgICBpZiAoZWwuY2hlY2tlZCkge1xuICAgICAgdGhpcy5faW5pdFZhbHVlID0gZWwuY2hlY2tlZFxuICAgIH1cbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHRoaXMuZWwuY2hlY2tlZCA9ICEhdmFsdWVcbiAgfSxcblxuICB1bmJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICBfLm9mZih0aGlzLmVsLCAnY2hhbmdlJywgdGhpcy5saXN0ZW5lcilcbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlL3NyYy9kaXJlY3RpdmVzL21vZGVsL2NoZWNrYm94LmpzXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgaXNPYmplY3QgPSBfLmlzT2JqZWN0XG52YXIgaXNQbGFpbk9iamVjdCA9IF8uaXNQbGFpbk9iamVjdFxudmFyIHRleHRQYXJzZXIgPSByZXF1aXJlKCcuLi9wYXJzZXJzL3RleHQnKVxudmFyIGV4cFBhcnNlciA9IHJlcXVpcmUoJy4uL3BhcnNlcnMvZXhwcmVzc2lvbicpXG52YXIgdGVtcGxhdGVQYXJzZXIgPSByZXF1aXJlKCcuLi9wYXJzZXJzL3RlbXBsYXRlJylcbnZhciBjb21waWxlciA9IHJlcXVpcmUoJy4uL2NvbXBpbGVyJylcbnZhciB1aWQgPSAwXG5cbi8vIGFzeW5jIGNvbXBvbmVudCByZXNvbHV0aW9uIHN0YXRlc1xudmFyIFVOUkVTT0xWRUQgPSAwXG52YXIgUEVORElORyA9IDFcbnZhciBSRVNPTFZFRCA9IDJcbnZhciBBQk9SVEVEID0gM1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAvKipcbiAgICogU2V0dXAuXG4gICAqL1xuXG4gIGJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAvLyB1aWQgYXMgYSBjYWNoZSBpZGVudGlmaWVyXG4gICAgdGhpcy5pZCA9ICdfX3ZfcmVwZWF0XycgKyAoKyt1aWQpXG4gICAgLy8gc2V0dXAgYW5jaG9yIG5vZGVzXG4gICAgdGhpcy5zdGFydCA9IF8uY3JlYXRlQW5jaG9yKCd2LXJlcGVhdC1zdGFydCcpXG4gICAgdGhpcy5lbmQgPSBfLmNyZWF0ZUFuY2hvcigndi1yZXBlYXQtZW5kJylcbiAgICBfLnJlcGxhY2UodGhpcy5lbCwgdGhpcy5lbmQpXG4gICAgXy5iZWZvcmUodGhpcy5zdGFydCwgdGhpcy5lbmQpXG4gICAgLy8gY2hlY2sgaWYgdGhpcyBpcyBhIGJsb2NrIHJlcGVhdFxuICAgIHRoaXMudGVtcGxhdGUgPSBfLmlzVGVtcGxhdGUodGhpcy5lbClcbiAgICAgID8gdGVtcGxhdGVQYXJzZXIucGFyc2UodGhpcy5lbCwgdHJ1ZSlcbiAgICAgIDogdGhpcy5lbFxuICAgIC8vIGNoZWNrIG90aGVyIGRpcmVjdGl2ZXMgdGhhdCBuZWVkIHRvIGJlIGhhbmRsZWRcbiAgICAvLyBhdCB2LXJlcGVhdCBsZXZlbFxuICAgIHRoaXMuY2hlY2tJZigpXG4gICAgdGhpcy5jaGVja1JlZigpXG4gICAgdGhpcy5jaGVja0NvbXBvbmVudCgpXG4gICAgLy8gY2hlY2sgZm9yIHRyYWNrYnkgcGFyYW1cbiAgICB0aGlzLmlkS2V5ID1cbiAgICAgIHRoaXMuX2NoZWNrUGFyYW0oJ3RyYWNrLWJ5JykgfHxcbiAgICAgIHRoaXMuX2NoZWNrUGFyYW0oJ3RyYWNrYnknKSAvLyAwLjExLjAgY29tcGF0XG4gICAgLy8gY2hlY2sgZm9yIHRyYW5zaXRpb24gc3RhZ2dlclxuICAgIHZhciBzdGFnZ2VyID0gK3RoaXMuX2NoZWNrUGFyYW0oJ3N0YWdnZXInKVxuICAgIHRoaXMuZW50ZXJTdGFnZ2VyID0gK3RoaXMuX2NoZWNrUGFyYW0oJ2VudGVyLXN0YWdnZXInKSB8fCBzdGFnZ2VyXG4gICAgdGhpcy5sZWF2ZVN0YWdnZXIgPSArdGhpcy5fY2hlY2tQYXJhbSgnbGVhdmUtc3RhZ2dlcicpIHx8IHN0YWdnZXJcbiAgICB0aGlzLmNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB9LFxuXG4gIC8qKlxuICAgKiBXYXJuIGFnYWluc3Qgdi1pZiB1c2FnZS5cbiAgICovXG5cbiAgY2hlY2tJZjogZnVuY3Rpb24gKCkge1xuICAgIGlmIChfLmF0dHIodGhpcy5lbCwgJ2lmJykgIT09IG51bGwpIHtcbiAgICAgIF8ud2FybihcbiAgICAgICAgJ0RvblxcJ3QgdXNlIHYtaWYgd2l0aCB2LXJlcGVhdC4gJyArXG4gICAgICAgICdVc2Ugdi1zaG93IG9yIHRoZSBcImZpbHRlckJ5XCIgZmlsdGVyIGluc3RlYWQuJ1xuICAgICAgKVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdi1yZWYvIHYtZWwgaXMgYWxzbyBwcmVzZW50LlxuICAgKi9cblxuICBjaGVja1JlZjogZnVuY3Rpb24gKCkge1xuICAgIHZhciByZWZJRCA9IF8uYXR0cih0aGlzLmVsLCAncmVmJylcbiAgICB0aGlzLnJlZklEID0gcmVmSURcbiAgICAgID8gdGhpcy52bS4kaW50ZXJwb2xhdGUocmVmSUQpXG4gICAgICA6IG51bGxcbiAgICB2YXIgZWxJZCA9IF8uYXR0cih0aGlzLmVsLCAnZWwnKVxuICAgIHRoaXMuZWxJZCA9IGVsSWRcbiAgICAgID8gdGhpcy52bS4kaW50ZXJwb2xhdGUoZWxJZClcbiAgICAgIDogbnVsbFxuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIHVzZSBmb3IgcmVwZWF0ZWRcbiAgICogaW5zdGFuY2VzLiBJZiBzdGF0aWMgd2UgcmVzb2x2ZSBpdCBub3csIG90aGVyd2lzZSBpdFxuICAgKiBuZWVkcyB0byBiZSByZXNvbHZlZCBhdCBidWlsZCB0aW1lIHdpdGggYWN0dWFsIGRhdGEuXG4gICAqL1xuXG4gIGNoZWNrQ29tcG9uZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jb21wb25lbnRTdGF0ZSA9IFVOUkVTT0xWRURcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMudm0uJG9wdGlvbnNcbiAgICB2YXIgaWQgPSBfLmNoZWNrQ29tcG9uZW50KHRoaXMuZWwsIG9wdGlvbnMpXG4gICAgaWYgKCFpZCkge1xuICAgICAgLy8gZGVmYXVsdCBjb25zdHJ1Y3RvclxuICAgICAgdGhpcy5DdG9yID0gXy5WdWVcbiAgICAgIC8vIGlubGluZSByZXBlYXRzIHNob3VsZCBpbmhlcml0XG4gICAgICB0aGlzLmluaGVyaXQgPSB0cnVlXG4gICAgICAvLyBpbXBvcnRhbnQ6IHRyYW5zY2x1ZGUgd2l0aCBubyBvcHRpb25zLCBqdXN0XG4gICAgICAvLyB0byBlbnN1cmUgYmxvY2sgc3RhcnQgYW5kIGJsb2NrIGVuZFxuICAgICAgdGhpcy50ZW1wbGF0ZSA9IGNvbXBpbGVyLnRyYW5zY2x1ZGUodGhpcy50ZW1wbGF0ZSlcbiAgICAgIHZhciBjb3B5ID0gXy5leHRlbmQoe30sIG9wdGlvbnMpXG4gICAgICBjb3B5Ll9hc0NvbXBvbmVudCA9IGZhbHNlXG4gICAgICB0aGlzLl9saW5rRm4gPSBjb21waWxlci5jb21waWxlKHRoaXMudGVtcGxhdGUsIGNvcHkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuQ3RvciA9IG51bGxcbiAgICAgIHRoaXMuYXNDb21wb25lbnQgPSB0cnVlXG4gICAgICAvLyBjaGVjayBpbmxpbmUtdGVtcGxhdGVcbiAgICAgIGlmICh0aGlzLl9jaGVja1BhcmFtKCdpbmxpbmUtdGVtcGxhdGUnKSAhPT0gbnVsbCkge1xuICAgICAgICAvLyBleHRyYWN0IGlubGluZSB0ZW1wbGF0ZSBhcyBhIERvY3VtZW50RnJhZ21lbnRcbiAgICAgICAgdGhpcy5pbmxpbmVUZW1wbGF0ZSA9IF8uZXh0cmFjdENvbnRlbnQodGhpcy5lbCwgdHJ1ZSlcbiAgICAgIH1cbiAgICAgIHZhciB0b2tlbnMgPSB0ZXh0UGFyc2VyLnBhcnNlKGlkKVxuICAgICAgaWYgKHRva2Vucykge1xuICAgICAgICAvLyBkeW5hbWljIGNvbXBvbmVudCB0byBiZSByZXNvbHZlZCBsYXRlclxuICAgICAgICB2YXIgY3RvckV4cCA9IHRleHRQYXJzZXIudG9rZW5zVG9FeHAodG9rZW5zKVxuICAgICAgICB0aGlzLmN0b3JHZXR0ZXIgPSBleHBQYXJzZXIucGFyc2UoY3RvckV4cCkuZ2V0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzdGF0aWNcbiAgICAgICAgdGhpcy5jb21wb25lbnRJZCA9IGlkXG4gICAgICAgIHRoaXMucGVuZGluZ0RhdGEgPSBudWxsXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHJlc29sdmVDb21wb25lbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNvbXBvbmVudFN0YXRlID0gUEVORElOR1xuICAgIHRoaXMudm0uX3Jlc29sdmVDb21wb25lbnQodGhpcy5jb21wb25lbnRJZCwgXy5iaW5kKGZ1bmN0aW9uIChDdG9yKSB7XG4gICAgICBpZiAodGhpcy5jb21wb25lbnRTdGF0ZSA9PT0gQUJPUlRFRCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMuQ3RvciA9IEN0b3JcbiAgICAgIHRoaXMuY29tcG9uZW50U3RhdGUgPSBSRVNPTFZFRFxuICAgICAgdGhpcy5yZWFsVXBkYXRlKHRoaXMucGVuZGluZ0RhdGEpXG4gICAgICB0aGlzLnBlbmRpbmdEYXRhID0gbnVsbFxuICAgIH0sIHRoaXMpKVxuICB9LFxuXG4gICAgLyoqXG4gICAqIFJlc29sdmUgYSBkeW5hbWljIGNvbXBvbmVudCB0byB1c2UgZm9yIGFuIGluc3RhbmNlLlxuICAgKiBUaGUgdHJpY2t5IHBhcnQgaGVyZSBpcyB0aGF0IHRoZXJlIGNvdWxkIGJlIGR5bmFtaWNcbiAgICogY29tcG9uZW50cyBkZXBlbmRpbmcgb24gaW5zdGFuY2UgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICogQHBhcmFtIHtPYmplY3R9IG1ldGFcbiAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAqL1xuXG4gIHJlc29sdmVEeW5hbWljQ29tcG9uZW50OiBmdW5jdGlvbiAoZGF0YSwgbWV0YSkge1xuICAgIC8vIGNyZWF0ZSBhIHRlbXBvcmFyeSBjb250ZXh0IG9iamVjdCBhbmQgY29weSBkYXRhXG4gICAgLy8gYW5kIG1ldGEgcHJvcGVydGllcyBvbnRvIGl0LlxuICAgIC8vIHVzZSBfLmRlZmluZSB0byBhdm9pZCBhY2NpZGVudGFsbHkgb3ZlcndyaXRpbmcgc2NvcGVcbiAgICAvLyBwcm9wZXJ0aWVzLlxuICAgIHZhciBjb250ZXh0ID0gT2JqZWN0LmNyZWF0ZSh0aGlzLnZtKVxuICAgIHZhciBrZXlcbiAgICBmb3IgKGtleSBpbiBkYXRhKSB7XG4gICAgICBfLmRlZmluZShjb250ZXh0LCBrZXksIGRhdGFba2V5XSlcbiAgICB9XG4gICAgZm9yIChrZXkgaW4gbWV0YSkge1xuICAgICAgXy5kZWZpbmUoY29udGV4dCwga2V5LCBtZXRhW2tleV0pXG4gICAgfVxuICAgIHZhciBpZCA9IHRoaXMuY3RvckdldHRlci5jYWxsKGNvbnRleHQsIGNvbnRleHQpXG4gICAgdmFyIEN0b3IgPSBfLnJlc29sdmVBc3NldCh0aGlzLnZtLiRvcHRpb25zLCAnY29tcG9uZW50cycsIGlkKVxuICAgIF8uYXNzZXJ0QXNzZXQoQ3RvciwgJ2NvbXBvbmVudCcsIGlkKVxuICAgIGlmICghQ3Rvci5vcHRpb25zKSB7XG4gICAgICBfLndhcm4oXG4gICAgICAgICdBc3luYyByZXNvbHV0aW9uIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIHYtcmVwZWF0ICcgK1xuICAgICAgICAnKyBkeW5hbWljIGNvbXBvbmVudC4gKGNvbXBvbmVudDogJyArIGlkICsgJyknXG4gICAgICApXG4gICAgICByZXR1cm4gXy5WdWVcbiAgICB9XG4gICAgcmV0dXJuIEN0b3JcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlLlxuICAgKiBUaGlzIGlzIGNhbGxlZCB3aGVuZXZlciB0aGUgQXJyYXkgbXV0YXRlcy4gSWYgd2UgaGF2ZVxuICAgKiBhIGNvbXBvbmVudCwgd2UgbWlnaHQgbmVlZCB0byB3YWl0IGZvciBpdCB0byByZXNvbHZlXG4gICAqIGFzeW5jaHJvbm91c2x5LlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fE51bWJlcnxTdHJpbmd9IGRhdGFcbiAgICovXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudElkKSB7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLmNvbXBvbmVudFN0YXRlXG4gICAgICBpZiAoc3RhdGUgPT09IFVOUkVTT0xWRUQpIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nRGF0YSA9IGRhdGFcbiAgICAgICAgLy8gb25jZSByZXNvbHZlZCwgaXQgd2lsbCBjYWxsIHJlYWxVcGRhdGVcbiAgICAgICAgdGhpcy5yZXNvbHZlQ29tcG9uZW50KClcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IFBFTkRJTkcpIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nRGF0YSA9IGRhdGFcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IFJFU09MVkVEKSB7XG4gICAgICAgIHRoaXMucmVhbFVwZGF0ZShkYXRhKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlYWxVcGRhdGUoZGF0YSlcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSByZWFsIHVwZGF0ZSB0aGF0IGFjdHVhbGx5IG1vZGlmaWVzIHRoZSBET00uXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl8TnVtYmVyfFN0cmluZ30gZGF0YVxuICAgKi9cblxuICByZWFsVXBkYXRlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHRoaXMudm1zID0gdGhpcy5kaWZmKGRhdGEsIHRoaXMudm1zKVxuICAgIC8vIHVwZGF0ZSB2LXJlZlxuICAgIGlmICh0aGlzLnJlZklEKSB7XG4gICAgICB0aGlzLnZtLiRbdGhpcy5yZWZJRF0gPSB0aGlzLmNvbnZlcnRlZFxuICAgICAgICA/IHRvUmVmT2JqZWN0KHRoaXMudm1zKVxuICAgICAgICA6IHRoaXMudm1zXG4gICAgfVxuICAgIGlmICh0aGlzLmVsSWQpIHtcbiAgICAgIHRoaXMudm0uJCRbdGhpcy5lbElkXSA9IHRoaXMudm1zLm1hcChmdW5jdGlvbiAodm0pIHtcbiAgICAgICAgcmV0dXJuIHZtLiRlbFxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIERpZmYsIGJhc2VkIG9uIG5ldyBkYXRhIGFuZCBvbGQgZGF0YSwgZGV0ZXJtaW5lIHRoZVxuICAgKiBtaW5pbXVtIGFtb3VudCBvZiBET00gbWFuaXB1bGF0aW9ucyBuZWVkZWQgdG8gbWFrZSB0aGVcbiAgICogRE9NIHJlZmxlY3QgdGhlIG5ldyBkYXRhIEFycmF5LlxuICAgKlxuICAgKiBUaGUgYWxnb3JpdGhtIGRpZmZzIHRoZSBuZXcgZGF0YSBBcnJheSBieSBzdG9yaW5nIGFcbiAgICogaGlkZGVuIHJlZmVyZW5jZSB0byBhbiBvd25lciB2bSBpbnN0YW5jZSBvbiBwcmV2aW91c2x5XG4gICAqIHNlZW4gZGF0YS4gVGhpcyBhbGxvd3MgdXMgdG8gYWNoaWV2ZSBPKG4pIHdoaWNoIGlzXG4gICAqIGJldHRlciB0aGFuIGEgbGV2ZW5zaHRlaW4gZGlzdGFuY2UgYmFzZWQgYWxnb3JpdGhtLFxuICAgKiB3aGljaCBpcyBPKG0gKiBuKS5cbiAgICpcbiAgICogQHBhcmFtIHtBcnJheX0gZGF0YVxuICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWbXNcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuXG4gIGRpZmY6IGZ1bmN0aW9uIChkYXRhLCBvbGRWbXMpIHtcbiAgICB2YXIgaWRLZXkgPSB0aGlzLmlkS2V5XG4gICAgdmFyIGNvbnZlcnRlZCA9IHRoaXMuY29udmVydGVkXG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5zdGFydFxuICAgIHZhciBlbmQgPSB0aGlzLmVuZFxuICAgIHZhciBpbkRvYyA9IF8uaW5Eb2Moc3RhcnQpXG4gICAgdmFyIGFsaWFzID0gdGhpcy5hcmdcbiAgICB2YXIgaW5pdCA9ICFvbGRWbXNcbiAgICB2YXIgdm1zID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKVxuICAgIHZhciBvYmosIHJhdywgdm0sIGksIGwsIHByaW1pdGl2ZVxuICAgIC8vIEZpcnN0IHBhc3MsIGdvIHRocm91Z2ggdGhlIG5ldyBBcnJheSBhbmQgZmlsbCB1cFxuICAgIC8vIHRoZSBuZXcgdm1zIGFycmF5LiBJZiBhIHBpZWNlIG9mIGRhdGEgaGFzIGEgY2FjaGVkXG4gICAgLy8gaW5zdGFuY2UgZm9yIGl0LCB3ZSByZXVzZSBpdC4gT3RoZXJ3aXNlIGJ1aWxkIGEgbmV3XG4gICAgLy8gaW5zdGFuY2UuXG4gICAgZm9yIChpID0gMCwgbCA9IGRhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBvYmogPSBkYXRhW2ldXG4gICAgICByYXcgPSBjb252ZXJ0ZWQgPyBvYmouJHZhbHVlIDogb2JqXG4gICAgICBwcmltaXRpdmUgPSAhaXNPYmplY3QocmF3KVxuICAgICAgdm0gPSAhaW5pdCAmJiB0aGlzLmdldFZtKHJhdywgaSwgY29udmVydGVkID8gb2JqLiRrZXkgOiBudWxsKVxuICAgICAgaWYgKHZtKSB7IC8vIHJldXNhYmxlIGluc3RhbmNlXG4gICAgICAgIHZtLl9yZXVzZWQgPSB0cnVlXG4gICAgICAgIHZtLiRpbmRleCA9IGkgLy8gdXBkYXRlICRpbmRleFxuICAgICAgICAvLyB1cGRhdGUgZGF0YSBmb3IgdHJhY2stYnkgb3Igb2JqZWN0IHJlcGVhdCxcbiAgICAgICAgLy8gc2luY2UgaW4gdGhlc2UgdHdvIGNhc2VzIHRoZSBkYXRhIGlzIHJlcGxhY2VkXG4gICAgICAgIC8vIHJhdGhlciB0aGFuIG11dGF0ZWQuXG4gICAgICAgIGlmIChpZEtleSB8fCBjb252ZXJ0ZWQgfHwgcHJpbWl0aXZlKSB7XG4gICAgICAgICAgaWYgKGFsaWFzKSB7XG4gICAgICAgICAgICB2bVthbGlhc10gPSByYXdcbiAgICAgICAgICB9IGVsc2UgaWYgKF8uaXNQbGFpbk9iamVjdChyYXcpKSB7XG4gICAgICAgICAgICB2bS4kZGF0YSA9IHJhd1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2bS4kdmFsdWUgPSByYXdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7IC8vIG5ldyBpbnN0YW5jZVxuICAgICAgICB2bSA9IHRoaXMuYnVpbGQob2JqLCBpLCB0cnVlKVxuICAgICAgICB2bS5fcmV1c2VkID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIHZtc1tpXSA9IHZtXG4gICAgICAvLyBpbnNlcnQgaWYgdGhpcyBpcyBmaXJzdCBydW5cbiAgICAgIGlmIChpbml0KSB7XG4gICAgICAgIHZtLiRiZWZvcmUoZW5kKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBpZiB0aGlzIGlzIHRoZSBmaXJzdCBydW4sIHdlJ3JlIGRvbmUuXG4gICAgaWYgKGluaXQpIHtcbiAgICAgIHJldHVybiB2bXNcbiAgICB9XG4gICAgLy8gU2Vjb25kIHBhc3MsIGdvIHRocm91Z2ggdGhlIG9sZCB2bSBpbnN0YW5jZXMgYW5kXG4gICAgLy8gZGVzdHJveSB0aG9zZSB3aG8gYXJlIG5vdCByZXVzZWQgKGFuZCByZW1vdmUgdGhlbVxuICAgIC8vIGZyb20gY2FjaGUpXG4gICAgdmFyIHJlbW92YWxJbmRleCA9IDBcbiAgICB2YXIgdG90YWxSZW1vdmVkID0gb2xkVm1zLmxlbmd0aCAtIHZtcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwLCBsID0gb2xkVm1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdm0gPSBvbGRWbXNbaV1cbiAgICAgIGlmICghdm0uX3JldXNlZCkge1xuICAgICAgICB0aGlzLnVuY2FjaGVWbSh2bSlcbiAgICAgICAgdm0uJGRlc3Ryb3koZmFsc2UsIHRydWUpIC8vIGRlZmVyIGNsZWFudXAgdW50aWwgcmVtb3ZhbFxuICAgICAgICB0aGlzLnJlbW92ZSh2bSwgcmVtb3ZhbEluZGV4KyssIHRvdGFsUmVtb3ZlZCwgaW5Eb2MpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIGZpbmFsIHBhc3MsIG1vdmUvaW5zZXJ0IG5ldyBpbnN0YW5jZXMgaW50byB0aGVcbiAgICAvLyByaWdodCBwbGFjZS5cbiAgICB2YXIgdGFyZ2V0UHJldiwgcHJldkVsLCBjdXJyZW50UHJldlxuICAgIHZhciBpbnNlcnRpb25JbmRleCA9IDBcbiAgICBmb3IgKGkgPSAwLCBsID0gdm1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdm0gPSB2bXNbaV1cbiAgICAgIC8vIHRoaXMgaXMgdGhlIHZtIHRoYXQgd2Ugc2hvdWxkIGJlIGFmdGVyXG4gICAgICB0YXJnZXRQcmV2ID0gdm1zW2kgLSAxXVxuICAgICAgcHJldkVsID0gdGFyZ2V0UHJldlxuICAgICAgICA/IHRhcmdldFByZXYuX3N0YWdnZXJDYlxuICAgICAgICAgID8gdGFyZ2V0UHJldi5fc3RhZ2dlckFuY2hvclxuICAgICAgICAgIDogdGFyZ2V0UHJldi5fYmxvY2tFbmQgfHwgdGFyZ2V0UHJldi4kZWxcbiAgICAgICAgOiBzdGFydFxuICAgICAgaWYgKHZtLl9yZXVzZWQgJiYgIXZtLl9zdGFnZ2VyQ2IpIHtcbiAgICAgICAgY3VycmVudFByZXYgPSBmaW5kUHJldlZtKHZtLCBzdGFydCwgdGhpcy5pZClcbiAgICAgICAgaWYgKGN1cnJlbnRQcmV2ICE9PSB0YXJnZXRQcmV2KSB7XG4gICAgICAgICAgdGhpcy5tb3ZlKHZtLCBwcmV2RWwpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5ldyBpbnN0YW5jZSwgb3Igc3RpbGwgaW4gc3RhZ2dlci5cbiAgICAgICAgLy8gaW5zZXJ0IHdpdGggdXBkYXRlZCBzdGFnZ2VyIGluZGV4LlxuICAgICAgICB0aGlzLmluc2VydCh2bSwgaW5zZXJ0aW9uSW5kZXgrKywgcHJldkVsLCBpbkRvYylcbiAgICAgIH1cbiAgICAgIHZtLl9yZXVzZWQgPSBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4gdm1zXG4gIH0sXG5cbiAgLyoqXG4gICAqIEJ1aWxkIGEgbmV3IGluc3RhbmNlIGFuZCBjYWNoZSBpdC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gbmVlZENhY2hlXG4gICAqL1xuXG4gIGJ1aWxkOiBmdW5jdGlvbiAoZGF0YSwgaW5kZXgsIG5lZWRDYWNoZSkge1xuICAgIHZhciBtZXRhID0geyAkaW5kZXg6IGluZGV4IH1cbiAgICBpZiAodGhpcy5jb252ZXJ0ZWQpIHtcbiAgICAgIG1ldGEuJGtleSA9IGRhdGEuJGtleVxuICAgIH1cbiAgICB2YXIgcmF3ID0gdGhpcy5jb252ZXJ0ZWQgPyBkYXRhLiR2YWx1ZSA6IGRhdGFcbiAgICB2YXIgYWxpYXMgPSB0aGlzLmFyZ1xuICAgIGlmIChhbGlhcykge1xuICAgICAgZGF0YSA9IHt9XG4gICAgICBkYXRhW2FsaWFzXSA9IHJhd1xuICAgIH0gZWxzZSBpZiAoIWlzUGxhaW5PYmplY3QocmF3KSkge1xuICAgICAgLy8gbm9uLW9iamVjdCB2YWx1ZXNcbiAgICAgIGRhdGEgPSB7fVxuICAgICAgbWV0YS4kdmFsdWUgPSByYXdcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGVmYXVsdFxuICAgICAgZGF0YSA9IHJhd1xuICAgIH1cbiAgICAvLyByZXNvbHZlIGNvbnN0cnVjdG9yXG4gICAgdmFyIEN0b3IgPSB0aGlzLkN0b3IgfHwgdGhpcy5yZXNvbHZlRHluYW1pY0NvbXBvbmVudChkYXRhLCBtZXRhKVxuICAgIHZhciBwYXJlbnQgPSB0aGlzLl9ob3N0IHx8IHRoaXMudm1cbiAgICB2YXIgdm0gPSBwYXJlbnQuJGFkZENoaWxkKHtcbiAgICAgIGVsOiB0ZW1wbGF0ZVBhcnNlci5jbG9uZSh0aGlzLnRlbXBsYXRlKSxcbiAgICAgIGRhdGE6IGRhdGEsXG4gICAgICBpbmhlcml0OiB0aGlzLmluaGVyaXQsXG4gICAgICB0ZW1wbGF0ZTogdGhpcy5pbmxpbmVUZW1wbGF0ZSxcbiAgICAgIC8vIHJlcGVhdGVyIG1ldGEsIGUuZy4gJGluZGV4LCAka2V5XG4gICAgICBfbWV0YTogbWV0YSxcbiAgICAgIC8vIG1hcmsgdGhpcyBhcyBhbiBpbmxpbmUtcmVwZWF0IGluc3RhbmNlXG4gICAgICBfcmVwZWF0OiB0aGlzLmluaGVyaXQsXG4gICAgICAvLyBpcyB0aGlzIGEgY29tcG9uZW50P1xuICAgICAgX2FzQ29tcG9uZW50OiB0aGlzLmFzQ29tcG9uZW50LFxuICAgICAgLy8gbGlua2VyIGNhY2hhYmxlIGlmIG5vIGlubGluZS10ZW1wbGF0ZVxuICAgICAgX2xpbmtlckNhY2hhYmxlOiAhdGhpcy5pbmxpbmVUZW1wbGF0ZSAmJiBDdG9yICE9PSBfLlZ1ZSxcbiAgICAgIC8vIHByZS1jb21waWxlZCBsaW5rZXIgZm9yIHNpbXBsZSByZXBlYXRzXG4gICAgICBfbGlua0ZuOiB0aGlzLl9saW5rRm4sXG4gICAgICAvLyBpZGVudGlmaWVyLCBzaG93cyB0aGF0IHRoaXMgdm0gYmVsb25ncyB0byB0aGlzIGNvbGxlY3Rpb25cbiAgICAgIF9yZXBlYXRJZDogdGhpcy5pZCxcbiAgICAgIC8vIHRyYW5zY2x1c2lvbiBjb250ZW50IG93bmVyXG4gICAgICBfY29udGV4dDogdGhpcy52bVxuICAgIH0sIEN0b3IpXG4gICAgLy8gY2FjaGUgaW5zdGFuY2VcbiAgICBpZiAobmVlZENhY2hlKSB7XG4gICAgICB0aGlzLmNhY2hlVm0ocmF3LCB2bSwgaW5kZXgsIHRoaXMuY29udmVydGVkID8gbWV0YS4ka2V5IDogbnVsbClcbiAgICB9XG4gICAgLy8gc3luYyBiYWNrIGNoYW5nZXMgZm9yIHR3by13YXkgYmluZGluZ3Mgb2YgcHJpbWl0aXZlIHZhbHVlc1xuICAgIHZhciB0eXBlID0gdHlwZW9mIHJhd1xuICAgIHZhciBkaXIgPSB0aGlzXG4gICAgaWYgKFxuICAgICAgdGhpcy5yYXdUeXBlID09PSAnb2JqZWN0JyAmJlxuICAgICAgKHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdudW1iZXInKVxuICAgICkge1xuICAgICAgdm0uJHdhdGNoKGFsaWFzIHx8ICckdmFsdWUnLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIGlmIChkaXIuZmlsdGVycykge1xuICAgICAgICAgIF8ud2FybihcbiAgICAgICAgICAgICdZb3Ugc2VlbSB0byBiZSBtdXRhdGluZyB0aGUgJHZhbHVlIHJlZmVyZW5jZSBvZiAnICtcbiAgICAgICAgICAgICdhIHYtcmVwZWF0IGluc3RhbmNlIChsaWtlbHkgdGhyb3VnaCB2LW1vZGVsKSAnICtcbiAgICAgICAgICAgICdhbmQgZmlsdGVyaW5nIHRoZSB2LXJlcGVhdCBhdCB0aGUgc2FtZSB0aW1lLiAnICtcbiAgICAgICAgICAgICdUaGlzIHdpbGwgbm90IHdvcmsgcHJvcGVybHkgd2l0aCBhbiBBcnJheSBvZiAnICtcbiAgICAgICAgICAgICdwcmltaXRpdmUgdmFsdWVzLiBQbGVhc2UgdXNlIGFuIEFycmF5IG9mICcgK1xuICAgICAgICAgICAgJ09iamVjdHMgaW5zdGVhZC4nXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGRpci5fd2l0aExvY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChkaXIuY29udmVydGVkKSB7XG4gICAgICAgICAgICBkaXIucmF3VmFsdWVbdm0uJGtleV0gPSB2YWxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlyLnJhd1ZhbHVlLiRzZXQodm0uJGluZGV4LCB2YWwpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHZtXG4gIH0sXG5cbiAgLyoqXG4gICAqIFVuYmluZCwgdGVhcmRvd24gZXZlcnl0aGluZ1xuICAgKi9cblxuICB1bmJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNvbXBvbmVudFN0YXRlID0gQUJPUlRFRFxuICAgIGlmICh0aGlzLnJlZklEKSB7XG4gICAgICB0aGlzLnZtLiRbdGhpcy5yZWZJRF0gPSBudWxsXG4gICAgfVxuICAgIGlmICh0aGlzLnZtcykge1xuICAgICAgdmFyIGkgPSB0aGlzLnZtcy5sZW5ndGhcbiAgICAgIHZhciB2bVxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICB2bSA9IHRoaXMudm1zW2ldXG4gICAgICAgIHRoaXMudW5jYWNoZVZtKHZtKVxuICAgICAgICB2bS4kZGVzdHJveSgpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDYWNoZSBhIHZtIGluc3RhbmNlIGJhc2VkIG9uIGl0cyBkYXRhLlxuICAgKlxuICAgKiBJZiB0aGUgZGF0YSBpcyBhbiBvYmplY3QsIHdlIHNhdmUgdGhlIHZtJ3MgcmVmZXJlbmNlIG9uXG4gICAqIHRoZSBkYXRhIG9iamVjdCBhcyBhIGhpZGRlbiBwcm9wZXJ0eS4gT3RoZXJ3aXNlIHdlXG4gICAqIGNhY2hlIHRoZW0gaW4gYW4gb2JqZWN0IGFuZCBmb3IgZWFjaCBwcmltaXRpdmUgdmFsdWVcbiAgICogdGhlcmUgaXMgYW4gYXJyYXkgaW4gY2FzZSB0aGVyZSBhcmUgZHVwbGljYXRlcy5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICogQHBhcmFtIHtWdWV9IHZtXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2tleV1cbiAgICovXG5cbiAgY2FjaGVWbTogZnVuY3Rpb24gKGRhdGEsIHZtLCBpbmRleCwga2V5KSB7XG4gICAgdmFyIGlkS2V5ID0gdGhpcy5pZEtleVxuICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGVcbiAgICB2YXIgcHJpbWl0aXZlID0gIWlzT2JqZWN0KGRhdGEpXG4gICAgdmFyIGlkXG4gICAgaWYgKGtleSB8fCBpZEtleSB8fCBwcmltaXRpdmUpIHtcbiAgICAgIGlkID0gaWRLZXlcbiAgICAgICAgPyBpZEtleSA9PT0gJyRpbmRleCdcbiAgICAgICAgICA/IGluZGV4XG4gICAgICAgICAgOiBkYXRhW2lkS2V5XVxuICAgICAgICA6IChrZXkgfHwgaW5kZXgpXG4gICAgICBpZiAoIWNhY2hlW2lkXSkge1xuICAgICAgICBjYWNoZVtpZF0gPSB2bVxuICAgICAgfSBlbHNlIGlmICghcHJpbWl0aXZlICYmIGlkS2V5ICE9PSAnJGluZGV4Jykge1xuICAgICAgICBfLndhcm4oJ0R1cGxpY2F0ZSB0cmFjay1ieSBrZXkgaW4gdi1yZXBlYXQ6ICcgKyBpZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWQgPSB0aGlzLmlkXG4gICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgICAgaWYgKGRhdGFbaWRdID09PSBudWxsKSB7XG4gICAgICAgICAgZGF0YVtpZF0gPSB2bVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF8ud2FybihcbiAgICAgICAgICAgICdEdXBsaWNhdGUgb2JqZWN0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiB2LXJlcGVhdCAnICtcbiAgICAgICAgICAgICd3aGVuIHVzaW5nIGNvbXBvbmVudHMgb3IgdHJhbnNpdGlvbnMuJ1xuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgXy5kZWZpbmUoZGF0YSwgaWQsIHZtKVxuICAgICAgfVxuICAgIH1cbiAgICB2bS5fcmF3ID0gZGF0YVxuICB9LFxuXG4gIC8qKlxuICAgKiBUcnkgdG8gZ2V0IGEgY2FjaGVkIGluc3RhbmNlIGZyb20gYSBwaWVjZSBvZiBkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtrZXldXG4gICAqIEByZXR1cm4ge1Z1ZXx1bmRlZmluZWR9XG4gICAqL1xuXG4gIGdldFZtOiBmdW5jdGlvbiAoZGF0YSwgaW5kZXgsIGtleSkge1xuICAgIHZhciBpZEtleSA9IHRoaXMuaWRLZXlcbiAgICB2YXIgcHJpbWl0aXZlID0gIWlzT2JqZWN0KGRhdGEpXG4gICAgaWYgKGtleSB8fCBpZEtleSB8fCBwcmltaXRpdmUpIHtcbiAgICAgIHZhciBpZCA9IGlkS2V5XG4gICAgICAgID8gaWRLZXkgPT09ICckaW5kZXgnXG4gICAgICAgICAgPyBpbmRleFxuICAgICAgICAgIDogZGF0YVtpZEtleV1cbiAgICAgICAgOiAoa2V5IHx8IGluZGV4KVxuICAgICAgcmV0dXJuIHRoaXMuY2FjaGVbaWRdXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhW3RoaXMuaWRdXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBEZWxldGUgYSBjYWNoZWQgdm0gaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7VnVlfSB2bVxuICAgKi9cblxuICB1bmNhY2hlVm06IGZ1bmN0aW9uICh2bSkge1xuICAgIHZhciBkYXRhID0gdm0uX3Jhd1xuICAgIHZhciBpZEtleSA9IHRoaXMuaWRLZXlcbiAgICB2YXIgaW5kZXggPSB2bS4kaW5kZXhcbiAgICAvLyBmaXggIzk0ODogYXZvaWQgYWNjaWRlbnRhbGx5IGZhbGwgdGhyb3VnaCB0b1xuICAgIC8vIGEgcGFyZW50IHJlcGVhdGVyIHdoaWNoIGhhcHBlbnMgdG8gaGF2ZSAka2V5LlxuICAgIHZhciBrZXkgPSB2bS5oYXNPd25Qcm9wZXJ0eSgnJGtleScpICYmIHZtLiRrZXlcbiAgICB2YXIgcHJpbWl0aXZlID0gIWlzT2JqZWN0KGRhdGEpXG4gICAgaWYgKGlkS2V5IHx8IGtleSB8fCBwcmltaXRpdmUpIHtcbiAgICAgIHZhciBpZCA9IGlkS2V5XG4gICAgICAgID8gaWRLZXkgPT09ICckaW5kZXgnXG4gICAgICAgICAgPyBpbmRleFxuICAgICAgICAgIDogZGF0YVtpZEtleV1cbiAgICAgICAgOiAoa2V5IHx8IGluZGV4KVxuICAgICAgdGhpcy5jYWNoZVtpZF0gPSBudWxsXG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGFbdGhpcy5pZF0gPSBudWxsXG4gICAgICB2bS5fcmF3ID0gbnVsbFxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUHJlLXByb2Nlc3MgdGhlIHZhbHVlIGJlZm9yZSBwaXBpbmcgaXQgdGhyb3VnaCB0aGVcbiAgICogZmlsdGVycywgYW5kIGNvbnZlcnQgbm9uLUFycmF5IG9iamVjdHMgdG8gYXJyYXlzLlxuICAgKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYm91bmQgdG8gdGhpcyBkaXJlY3RpdmUgaW5zdGFuY2VcbiAgICogYW5kIHBhc3NlZCBpbnRvIHRoZSB3YXRjaGVyLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblxuICBfcHJlUHJvY2VzczogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgLy8gcmVnYXJkbGVzcyBvZiB0eXBlLCBzdG9yZSB0aGUgdW4tZmlsdGVyZWQgcmF3IHZhbHVlLlxuICAgIHRoaXMucmF3VmFsdWUgPSB2YWx1ZVxuICAgIHZhciB0eXBlID0gdGhpcy5yYXdUeXBlID0gdHlwZW9mIHZhbHVlXG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgICAgdGhpcy5jb252ZXJ0ZWQgPSBmYWxzZVxuICAgICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHZhbHVlID0gcmFuZ2UodmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhbHVlID0gXy50b0FycmF5KHZhbHVlKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlIHx8IFtdXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnZlcnQgcGxhaW4gb2JqZWN0IHRvIGFycmF5LlxuICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcbiAgICAgIHZhciBpID0ga2V5cy5sZW5ndGhcbiAgICAgIHZhciByZXMgPSBuZXcgQXJyYXkoaSlcbiAgICAgIHZhciBrZXlcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAga2V5ID0ga2V5c1tpXVxuICAgICAgICByZXNbaV0gPSB7XG4gICAgICAgICAgJGtleToga2V5LFxuICAgICAgICAgICR2YWx1ZTogdmFsdWVba2V5XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmNvbnZlcnRlZCA9IHRydWVcbiAgICAgIHJldHVybiByZXNcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluc2VydCBhbiBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtWdWV9IHZtXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge05vZGV9IHByZXZFbFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGluRG9jXG4gICAqL1xuXG4gIGluc2VydDogZnVuY3Rpb24gKHZtLCBpbmRleCwgcHJldkVsLCBpbkRvYykge1xuICAgIGlmICh2bS5fc3RhZ2dlckNiKSB7XG4gICAgICB2bS5fc3RhZ2dlckNiLmNhbmNlbCgpXG4gICAgICB2bS5fc3RhZ2dlckNiID0gbnVsbFxuICAgIH1cbiAgICB2YXIgc3RhZ2dlckFtb3VudCA9IHRoaXMuZ2V0U3RhZ2dlcih2bSwgaW5kZXgsIG51bGwsICdlbnRlcicpXG4gICAgaWYgKGluRG9jICYmIHN0YWdnZXJBbW91bnQpIHtcbiAgICAgIC8vIGNyZWF0ZSBhbiBhbmNob3IgYW5kIGluc2VydCBpdCBzeW5jaHJvbm91c2x5LFxuICAgICAgLy8gc28gdGhhdCB3ZSBjYW4gcmVzb2x2ZSB0aGUgY29ycmVjdCBvcmRlciB3aXRob3V0XG4gICAgICAvLyB3b3JyeWluZyBhYm91dCBzb21lIGVsZW1lbnRzIG5vdCBpbnNlcnRlZCB5ZXRcbiAgICAgIHZhciBhbmNob3IgPSB2bS5fc3RhZ2dlckFuY2hvclxuICAgICAgaWYgKCFhbmNob3IpIHtcbiAgICAgICAgYW5jaG9yID0gdm0uX3N0YWdnZXJBbmNob3IgPSBfLmNyZWF0ZUFuY2hvcignc3RhZ2dlci1hbmNob3InKVxuICAgICAgICBhbmNob3IuX192dWVfXyA9IHZtXG4gICAgICB9XG4gICAgICBfLmFmdGVyKGFuY2hvciwgcHJldkVsKVxuICAgICAgdmFyIG9wID0gdm0uX3N0YWdnZXJDYiA9IF8uY2FuY2VsbGFibGUoZnVuY3Rpb24gKCkge1xuICAgICAgICB2bS5fc3RhZ2dlckNiID0gbnVsbFxuICAgICAgICB2bS4kYmVmb3JlKGFuY2hvcilcbiAgICAgICAgXy5yZW1vdmUoYW5jaG9yKVxuICAgICAgfSlcbiAgICAgIHNldFRpbWVvdXQob3AsIHN0YWdnZXJBbW91bnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZtLiRhZnRlcihwcmV2RWwpXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBNb3ZlIGFuIGFscmVhZHkgaW5zZXJ0ZWQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7VnVlfSB2bVxuICAgKiBAcGFyYW0ge05vZGV9IHByZXZFbFxuICAgKi9cblxuICBtb3ZlOiBmdW5jdGlvbiAodm0sIHByZXZFbCkge1xuICAgIHZtLiRhZnRlcihwcmV2RWwsIG51bGwsIGZhbHNlKVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW4gaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7VnVlfSB2bVxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtCb29sZWFufSBpbkRvY1xuICAgKi9cblxuICByZW1vdmU6IGZ1bmN0aW9uICh2bSwgaW5kZXgsIHRvdGFsLCBpbkRvYykge1xuICAgIGlmICh2bS5fc3RhZ2dlckNiKSB7XG4gICAgICB2bS5fc3RhZ2dlckNiLmNhbmNlbCgpXG4gICAgICB2bS5fc3RhZ2dlckNiID0gbnVsbFxuICAgICAgLy8gaXQncyBub3QgcG9zc2libGUgZm9yIHRoZSBzYW1lIHZtIHRvIGJlIHJlbW92ZWRcbiAgICAgIC8vIHR3aWNlLCBzbyBpZiB3ZSBoYXZlIGEgcGVuZGluZyBzdGFnZ2VyIGNhbGxiYWNrLFxuICAgICAgLy8gaXQgbWVhbnMgdGhpcyB2bSBpcyBxdWV1ZWQgZm9yIGVudGVyIGJ1dCByZW1vdmVkXG4gICAgICAvLyBiZWZvcmUgaXRzIHRyYW5zaXRpb24gc3RhcnRlZC4gU2luY2UgaXQgaXMgYWxyZWFkeVxuICAgICAgLy8gZGVzdHJveWVkLCB3ZSBjYW4ganVzdCBsZWF2ZSBpdCBpbiBkZXRhY2hlZCBzdGF0ZS5cbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgc3RhZ2dlckFtb3VudCA9IHRoaXMuZ2V0U3RhZ2dlcih2bSwgaW5kZXgsIHRvdGFsLCAnbGVhdmUnKVxuICAgIGlmIChpbkRvYyAmJiBzdGFnZ2VyQW1vdW50KSB7XG4gICAgICB2YXIgb3AgPSB2bS5fc3RhZ2dlckNiID0gXy5jYW5jZWxsYWJsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZtLl9zdGFnZ2VyQ2IgPSBudWxsXG4gICAgICAgIHJlbW92ZSgpXG4gICAgICB9KVxuICAgICAgc2V0VGltZW91dChvcCwgc3RhZ2dlckFtb3VudClcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlICgpIHtcbiAgICAgIHZtLiRyZW1vdmUoZnVuY3Rpb24gKCkge1xuICAgICAgICB2bS5fY2xlYW51cCgpXG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogR2V0IHRoZSBzdGFnZ2VyIGFtb3VudCBmb3IgYW4gaW5zZXJ0aW9uL3JlbW92YWwuXG4gICAqXG4gICAqIEBwYXJhbSB7VnVlfSB2bVxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHRvdGFsXG4gICAqL1xuXG4gIGdldFN0YWdnZXI6IGZ1bmN0aW9uICh2bSwgaW5kZXgsIHRvdGFsLCB0eXBlKSB7XG4gICAgdHlwZSA9IHR5cGUgKyAnU3RhZ2dlcidcbiAgICB2YXIgdHJhbnNpdGlvbiA9IHZtLiRlbC5fX3ZfdHJhbnNcbiAgICB2YXIgaG9va3MgPSB0cmFuc2l0aW9uICYmIHRyYW5zaXRpb24uaG9va3NcbiAgICB2YXIgaG9vayA9IGhvb2tzICYmIChob29rc1t0eXBlXSB8fCBob29rcy5zdGFnZ2VyKVxuICAgIHJldHVybiBob29rXG4gICAgICA/IGhvb2suY2FsbCh2bSwgaW5kZXgsIHRvdGFsKVxuICAgICAgOiBpbmRleCAqIHRoaXNbdHlwZV1cbiAgfVxuXG59XG5cbi8qKlxuICogSGVscGVyIHRvIGZpbmQgdGhlIHByZXZpb3VzIGVsZW1lbnQgdGhhdCBpcyBhbiBpbnN0YW5jZVxuICogcm9vdCBub2RlLiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIGEgZGVzdHJveWVkIHZtJ3NcbiAqIGVsZW1lbnQgY291bGQgc3RpbGwgYmUgbGluZ2VyaW5nIGluIHRoZSBET00gYmVmb3JlIGl0c1xuICogbGVhdmluZyB0cmFuc2l0aW9uIGZpbmlzaGVzLCBidXQgaXRzIF9fdnVlX18gcmVmZXJlbmNlXG4gKiBzaG91bGQgaGF2ZSBiZWVuIHJlbW92ZWQgc28gd2UgY2FuIHNraXAgdGhlbS5cbiAqXG4gKiBJZiB0aGlzIGlzIGEgYmxvY2sgcmVwZWF0LCB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBvbmx5XG4gKiByZXR1cm4gdm0gdGhhdCBpcyBib3VuZCB0byB0aGlzIHYtcmVwZWF0LiAoc2VlICM5MjkpXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0NvbW1lbnR8VGV4dH0gYW5jaG9yXG4gKiBAcmV0dXJuIHtWdWV9XG4gKi9cblxuZnVuY3Rpb24gZmluZFByZXZWbSAodm0sIGFuY2hvciwgaWQpIHtcbiAgdmFyIGVsID0gdm0uJGVsLnByZXZpb3VzU2libGluZ1xuICB3aGlsZSAoXG4gICAgKCFlbC5fX3Z1ZV9fIHx8IGVsLl9fdnVlX18uJG9wdGlvbnMuX3JlcGVhdElkICE9PSBpZCkgJiZcbiAgICBlbCAhPT0gYW5jaG9yXG4gICkge1xuICAgIGVsID0gZWwucHJldmlvdXNTaWJsaW5nXG4gIH1cbiAgcmV0dXJuIGVsLl9fdnVlX19cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSByYW5nZSBhcnJheSBmcm9tIGdpdmVuIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gblxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuZnVuY3Rpb24gcmFuZ2UgKG4pIHtcbiAgdmFyIGkgPSAtMVxuICB2YXIgcmV0ID0gbmV3IEFycmF5KG4pXG4gIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgcmV0W2ldID0gaVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgdm1zIGFycmF5IHRvIGFuIG9iamVjdCByZWYgZm9yIHYtcmVmIG9uIGFuXG4gKiBPYmplY3QgdmFsdWUuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gdm1zXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gdG9SZWZPYmplY3QgKHZtcykge1xuICB2YXIgcmVmID0ge31cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2bXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgcmVmW3Ztc1tpXS4ka2V5XSA9IHZtc1tpXVxuICB9XG4gIHJldHVybiByZWZcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvZGlyZWN0aXZlcy9yZXBlYXQuanNcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciBjb21waWxlciA9IHJlcXVpcmUoJy4uL2NvbXBpbGVyJylcbnZhciB0ZW1wbGF0ZVBhcnNlciA9IHJlcXVpcmUoJy4uL3BhcnNlcnMvdGVtcGxhdGUnKVxudmFyIHRyYW5zaXRpb24gPSByZXF1aXJlKCcuLi90cmFuc2l0aW9uJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgYmluZDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbCA9IHRoaXMuZWxcbiAgICBpZiAoIWVsLl9fdnVlX18pIHtcbiAgICAgIHRoaXMuc3RhcnQgPSBfLmNyZWF0ZUFuY2hvcigndi1pZi1zdGFydCcpXG4gICAgICB0aGlzLmVuZCA9IF8uY3JlYXRlQW5jaG9yKCd2LWlmLWVuZCcpXG4gICAgICBfLnJlcGxhY2UoZWwsIHRoaXMuZW5kKVxuICAgICAgXy5iZWZvcmUodGhpcy5zdGFydCwgdGhpcy5lbmQpXG4gICAgICBpZiAoXy5pc1RlbXBsYXRlKGVsKSkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGVQYXJzZXIucGFyc2UoZWwsIHRydWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgICAgIHRoaXMudGVtcGxhdGUuYXBwZW5kQ2hpbGQodGVtcGxhdGVQYXJzZXIuY2xvbmUoZWwpKVxuICAgICAgfVxuICAgICAgLy8gY29tcGlsZSB0aGUgbmVzdGVkIHBhcnRpYWxcbiAgICAgIHRoaXMubGlua2VyID0gY29tcGlsZXIuY29tcGlsZShcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSxcbiAgICAgICAgdGhpcy52bS4kb3B0aW9ucyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmludmFsaWQgPSB0cnVlXG4gICAgICBfLndhcm4oXG4gICAgICAgICd2LWlmPVwiJyArIHRoaXMuZXhwcmVzc2lvbiArICdcIiBjYW5ub3QgYmUgJyArXG4gICAgICAgICd1c2VkIG9uIGFuIGluc3RhbmNlIHJvb3QgZWxlbWVudC4nXG4gICAgICApXG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaW52YWxpZCkgcmV0dXJuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyBhdm9pZCBkdXBsaWNhdGUgY29tcGlsZXMsIHNpbmNlIHVwZGF0ZSgpIGNhbiBiZVxuICAgICAgLy8gY2FsbGVkIHdpdGggZGlmZmVyZW50IHRydXRoeSB2YWx1ZXNcbiAgICAgIGlmICghdGhpcy51bmxpbmspIHtcbiAgICAgICAgdGhpcy5saW5rKFxuICAgICAgICAgIHRlbXBsYXRlUGFyc2VyLmNsb25lKHRoaXMudGVtcGxhdGUpLFxuICAgICAgICAgIHRoaXMubGlua2VyXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZWFyZG93bigpXG4gICAgfVxuICB9LFxuXG4gIGxpbms6IGZ1bmN0aW9uIChmcmFnLCBsaW5rZXIpIHtcbiAgICB2YXIgdm0gPSB0aGlzLnZtXG4gICAgdGhpcy51bmxpbmsgPSBsaW5rZXIodm0sIGZyYWcpXG4gICAgdHJhbnNpdGlvbi5ibG9ja0FwcGVuZChmcmFnLCB0aGlzLmVuZCwgdm0pXG4gICAgLy8gY2FsbCBhdHRhY2hlZCBmb3IgYWxsIHRoZSBjaGlsZCBjb21wb25lbnRzIGNyZWF0ZWRcbiAgICAvLyBkdXJpbmcgdGhlIGNvbXBpbGF0aW9uXG4gICAgaWYgKF8uaW5Eb2Modm0uJGVsKSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5nZXRDb250YWluZWRDb21wb25lbnRzKClcbiAgICAgIGlmIChjaGlsZHJlbikgY2hpbGRyZW4uZm9yRWFjaChjYWxsQXR0YWNoKVxuICAgIH1cbiAgfSxcblxuICB0ZWFyZG93bjogZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy51bmxpbmspIHJldHVyblxuICAgIC8vIGNvbGxlY3QgY2hpbGRyZW4gYmVmb3JlaGFuZFxuICAgIHZhciBjaGlsZHJlblxuICAgIGlmIChfLmluRG9jKHRoaXMudm0uJGVsKSkge1xuICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENvbnRhaW5lZENvbXBvbmVudHMoKVxuICAgIH1cbiAgICB0cmFuc2l0aW9uLmJsb2NrUmVtb3ZlKHRoaXMuc3RhcnQsIHRoaXMuZW5kLCB0aGlzLnZtKVxuICAgIGlmIChjaGlsZHJlbikgY2hpbGRyZW4uZm9yRWFjaChjYWxsRGV0YWNoKVxuICAgIHRoaXMudW5saW5rKClcbiAgICB0aGlzLnVubGluayA9IG51bGxcbiAgfSxcblxuICBnZXRDb250YWluZWRDb21wb25lbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcy52bVxuICAgIHZhciBzdGFydCA9IHRoaXMuc3RhcnQubmV4dFNpYmxpbmdcbiAgICB2YXIgZW5kID0gdGhpcy5lbmRcblxuICAgIGZ1bmN0aW9uIGNvbnRhaW5zIChjKSB7XG4gICAgICB2YXIgY3VyID0gc3RhcnRcbiAgICAgIHZhciBuZXh0XG4gICAgICB3aGlsZSAobmV4dCAhPT0gZW5kKSB7XG4gICAgICAgIG5leHQgPSBjdXIubmV4dFNpYmxpbmdcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGN1ciA9PT0gYy4kZWwgfHxcbiAgICAgICAgICBjdXIuY29udGFpbnMgJiYgY3VyLmNvbnRhaW5zKGMuJGVsKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGN1ciA9IG5leHRcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB2bS4kY2hpbGRyZW4ubGVuZ3RoICYmXG4gICAgICB2bS4kY2hpbGRyZW4uZmlsdGVyKGNvbnRhaW5zKVxuICB9LFxuXG4gIHVuYmluZDogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnVubGluaykgdGhpcy51bmxpbmsoKVxuICB9XG5cbn1cblxuZnVuY3Rpb24gY2FsbEF0dGFjaCAoY2hpbGQpIHtcbiAgaWYgKCFjaGlsZC5faXNBdHRhY2hlZCkge1xuICAgIGNoaWxkLl9jYWxsSG9vaygnYXR0YWNoZWQnKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGxEZXRhY2ggKGNoaWxkKSB7XG4gIGlmIChjaGlsZC5faXNBdHRhY2hlZCkge1xuICAgIGNoaWxkLl9jYWxsSG9vaygnZGV0YWNoZWQnKVxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUvc3JjL2RpcmVjdGl2ZXMvaWYuanNcbiAqKiBtb2R1bGUgaWQgPSA1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cy5jb250ZW50ID0gcmVxdWlyZSgnLi9jb250ZW50JylcbmV4cG9ydHMucGFydGlhbCA9IHJlcXVpcmUoJy4vcGFydGlhbCcpXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUvc3JjL2VsZW1lbnQtZGlyZWN0aXZlcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxuXG4vLyBUaGlzIGlzIHRoZSBlbGVtZW50RGlyZWN0aXZlIHRoYXQgaGFuZGxlcyA8Y29udGVudD5cbi8vIHRyYW5zY2x1c2lvbnMuIEl0IHJlbGllcyBvbiB0aGUgcmF3IGNvbnRlbnQgb2YgYW5cbi8vIGluc3RhbmNlIGJlaW5nIHN0b3JlZCBhcyBgJG9wdGlvbnMuX2NvbnRlbnRgIGR1cmluZ1xuLy8gdGhlIHRyYW5zY2x1ZGUgcGhhc2UuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIGJpbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdm0gPSB0aGlzLnZtXG4gICAgdmFyIGhvc3QgPSB2bVxuICAgIC8vIHdlIG5lZWQgZmluZCB0aGUgY29udGVudCBjb250ZXh0LCB3aGljaCBpcyB0aGVcbiAgICAvLyBjbG9zZXN0IG5vbi1pbmxpbmUtcmVwZWF0ZXIgaW5zdGFuY2UuXG4gICAgd2hpbGUgKGhvc3QuJG9wdGlvbnMuX3JlcGVhdCkge1xuICAgICAgaG9zdCA9IGhvc3QuJHBhcmVudFxuICAgIH1cbiAgICB2YXIgcmF3ID0gaG9zdC4kb3B0aW9ucy5fY29udGVudFxuICAgIHZhciBjb250ZW50XG4gICAgaWYgKCFyYXcpIHtcbiAgICAgIHRoaXMuZmFsbGJhY2soKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhciBjb250ZXh0ID0gaG9zdC5fY29udGV4dFxuICAgIHZhciBzZWxlY3RvciA9IHRoaXMuZWwuZ2V0QXR0cmlidXRlKCdzZWxlY3QnKVxuICAgIGlmICghc2VsZWN0b3IpIHtcbiAgICAgIC8vIERlZmF1bHQgY29udGVudFxuICAgICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgICB2YXIgY29tcGlsZURlZmF1bHRDb250ZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLmNvbXBpbGUoXG4gICAgICAgICAgZXh0cmFjdEZyYWdtZW50KHJhdy5jaGlsZE5vZGVzLCByYXcsIHRydWUpLFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgdm1cbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgaWYgKCFob3N0Ll9pc0NvbXBpbGVkKSB7XG4gICAgICAgIC8vIGRlZmVyIHVudGlsIHRoZSBlbmQgb2YgaW5zdGFuY2UgY29tcGlsYXRpb24sXG4gICAgICAgIC8vIGJlY2F1c2UgdGhlIGRlZmF1bHQgb3V0bGV0IG11c3Qgd2FpdCB1bnRpbCBhbGxcbiAgICAgICAgLy8gb3RoZXIgcG9zc2libGUgb3V0bGV0cyB3aXRoIHNlbGVjdG9ycyBoYXZlIHBpY2tlZFxuICAgICAgICAvLyBvdXQgdGhlaXIgY29udGVudHMuXG4gICAgICAgIGhvc3QuJG9uY2UoJ2hvb2s6Y29tcGlsZWQnLCBjb21waWxlRGVmYXVsdENvbnRlbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21waWxlRGVmYXVsdENvbnRlbnQoKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZWxlY3QgY29udGVudFxuICAgICAgc2VsZWN0b3IgPSB2bS4kaW50ZXJwb2xhdGUoc2VsZWN0b3IpXG4gICAgICB2YXIgbm9kZXMgPSByYXcucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICAgIGlmIChub2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgY29udGVudCA9IGV4dHJhY3RGcmFnbWVudChub2RlcywgcmF3KVxuICAgICAgICBpZiAoY29udGVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgICB0aGlzLmNvbXBpbGUoY29udGVudCwgY29udGV4dCwgdm0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5mYWxsYmFjaygpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmFsbGJhY2soKVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBmYWxsYmFjazogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY29tcGlsZShfLmV4dHJhY3RDb250ZW50KHRoaXMuZWwsIHRydWUpLCB0aGlzLnZtKVxuICB9LFxuXG4gIGNvbXBpbGU6IGZ1bmN0aW9uIChjb250ZW50LCBjb250ZXh0LCBob3N0KSB7XG4gICAgaWYgKGNvbnRlbnQgJiYgY29udGV4dCkge1xuICAgICAgdGhpcy51bmxpbmsgPSBjb250ZXh0LiRjb21waWxlKGNvbnRlbnQsIGhvc3QpXG4gICAgfVxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICBfLnJlcGxhY2UodGhpcy5lbCwgY29udGVudClcbiAgICB9IGVsc2Uge1xuICAgICAgXy5yZW1vdmUodGhpcy5lbClcbiAgICB9XG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudW5saW5rKSB7XG4gICAgICB0aGlzLnVubGluaygpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRXh0cmFjdCBxdWFsaWZpZWQgY29udGVudCBub2RlcyBmcm9tIGEgbm9kZSBsaXN0LlxuICpcbiAqIEBwYXJhbSB7Tm9kZUxpc3R9IG5vZGVzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBhcmVudFxuICogQHBhcmFtIHtCb29sZWFufSBtYWluXG4gKiBAcmV0dXJuIHtEb2N1bWVudEZyYWdtZW50fVxuICovXG5cbmZ1bmN0aW9uIGV4dHJhY3RGcmFnbWVudCAobm9kZXMsIHBhcmVudCwgbWFpbikge1xuICB2YXIgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICBmb3IgKHZhciBpID0gMCwgbCA9IG5vZGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBub2RlID0gbm9kZXNbaV1cbiAgICAvLyBpZiB0aGlzIGlzIHRoZSBtYWluIG91dGxldCwgd2Ugd2FudCB0byBza2lwIGFsbFxuICAgIC8vIHByZXZpb3VzbHkgc2VsZWN0ZWQgbm9kZXM7XG4gICAgLy8gb3RoZXJ3aXNlLCB3ZSB3YW50IHRvIG1hcmsgdGhlIG5vZGUgYXMgc2VsZWN0ZWQuXG4gICAgLy8gY2xvbmUgdGhlIG5vZGUgc28gdGhlIG9yaWdpbmFsIHJhdyBjb250ZW50IHJlbWFpbnNcbiAgICAvLyBpbnRhY3QuIHRoaXMgZW5zdXJlcyBwcm9wZXIgcmUtY29tcGlsYXRpb24gaW4gY2FzZXNcbiAgICAvLyB3aGVyZSB0aGUgb3V0bGV0IGlzIGluc2lkZSBhIGNvbmRpdGlvbmFsIGJsb2NrXG4gICAgaWYgKG1haW4gJiYgIW5vZGUuX192X3NlbGVjdGVkKSB7XG4gICAgICBmcmFnLmFwcGVuZENoaWxkKG5vZGUuY2xvbmVOb2RlKHRydWUpKVxuICAgIH0gZWxzZSBpZiAoIW1haW4gJiYgbm9kZS5wYXJlbnROb2RlID09PSBwYXJlbnQpIHtcbiAgICAgIG5vZGUuX192X3NlbGVjdGVkID0gdHJ1ZVxuICAgICAgZnJhZy5hcHBlbmRDaGlsZChub2RlLmNsb25lTm9kZSh0cnVlKSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZyYWdcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvZWxlbWVudC1kaXJlY3RpdmVzL2NvbnRlbnQuanNcbiAqKiBtb2R1bGUgaWQgPSA2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciB0ZW1wbGF0ZVBhcnNlciA9IHJlcXVpcmUoJy4uL3BhcnNlcnMvdGVtcGxhdGUnKVxudmFyIHRleHRQYXJzZXIgPSByZXF1aXJlKCcuLi9wYXJzZXJzL3RleHQnKVxudmFyIGNvbXBpbGVyID0gcmVxdWlyZSgnLi4vY29tcGlsZXInKVxudmFyIENhY2hlID0gcmVxdWlyZSgnLi4vY2FjaGUnKVxudmFyIGNhY2hlID0gbmV3IENhY2hlKDEwMDApXG5cbi8vIHYtcGFydGlhbCByZXVzZXMgbG9naWMgZnJvbSB2LWlmXG52YXIgdklmID0gcmVxdWlyZSgnLi4vZGlyZWN0aXZlcy9pZicpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIGxpbms6IHZJZi5saW5rLFxuICB0ZWFyZG93bjogdklmLnRlYXJkb3duLFxuICBnZXRDb250YWluZWRDb21wb25lbnRzOiB2SWYuZ2V0Q29udGFpbmVkQ29tcG9uZW50cyxcblxuICBiaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVsID0gdGhpcy5lbFxuICAgIHRoaXMuc3RhcnQgPSBfLmNyZWF0ZUFuY2hvcigndi1wYXJ0aWFsLXN0YXJ0JylcbiAgICB0aGlzLmVuZCA9IF8uY3JlYXRlQW5jaG9yKCd2LXBhcnRpYWwtZW5kJylcbiAgICBfLnJlcGxhY2UoZWwsIHRoaXMuZW5kKVxuICAgIF8uYmVmb3JlKHRoaXMuc3RhcnQsIHRoaXMuZW5kKVxuICAgIHZhciBpZCA9IGVsLmdldEF0dHJpYnV0ZSgnbmFtZScpXG4gICAgdmFyIHRva2VucyA9IHRleHRQYXJzZXIucGFyc2UoaWQpXG4gICAgaWYgKHRva2Vucykge1xuICAgICAgLy8gZHluYW1pYyBwYXJ0aWFsXG4gICAgICB0aGlzLnNldHVwRHluYW1pYyh0b2tlbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHN0YXRpYyBwYXJ0aWFsXG4gICAgICB0aGlzLmluc2VydChpZClcbiAgICB9XG4gIH0sXG5cbiAgc2V0dXBEeW5hbWljOiBmdW5jdGlvbiAodG9rZW5zKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgdmFyIGV4cCA9IHRleHRQYXJzZXIudG9rZW5zVG9FeHAodG9rZW5zKVxuICAgIHRoaXMudW53YXRjaCA9IHRoaXMudm0uJHdhdGNoKGV4cCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBzZWxmLnRlYXJkb3duKClcbiAgICAgIHNlbGYuaW5zZXJ0KHZhbHVlKVxuICAgIH0sIHtcbiAgICAgIGltbWVkaWF0ZTogdHJ1ZSxcbiAgICAgIHVzZXI6IGZhbHNlXG4gICAgfSlcbiAgfSxcblxuICBpbnNlcnQ6IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciBwYXJ0aWFsID0gXy5yZXNvbHZlQXNzZXQodGhpcy52bS4kb3B0aW9ucywgJ3BhcnRpYWxzJywgaWQpXG4gICAgXy5hc3NlcnRBc3NldChwYXJ0aWFsLCAncGFydGlhbCcsIGlkKVxuICAgIGlmIChwYXJ0aWFsKSB7XG4gICAgICB2YXIgZnJhZyA9IHRlbXBsYXRlUGFyc2VyLnBhcnNlKHBhcnRpYWwsIHRydWUpXG4gICAgICAvLyBjYWNoZSBwYXJ0aWFscyBiYXNlZCBvbiBjb25zdHJ1Y3RvciBpZC5cbiAgICAgIHZhciBjYWNoZUlkID0gKHRoaXMudm0uY29uc3RydWN0b3IuY2lkIHx8ICcnKSArIHBhcnRpYWxcbiAgICAgIHZhciBsaW5rZXIgPSB0aGlzLmNvbXBpbGUoZnJhZywgY2FjaGVJZClcbiAgICAgIC8vIHRoaXMgaXMgcHJvdmlkZWQgYnkgdi1pZlxuICAgICAgdGhpcy5saW5rKGZyYWcsIGxpbmtlcilcbiAgICB9XG4gIH0sXG5cbiAgY29tcGlsZTogZnVuY3Rpb24gKGZyYWcsIGNhY2hlSWQpIHtcbiAgICB2YXIgaGl0ID0gY2FjaGUuZ2V0KGNhY2hlSWQpXG4gICAgaWYgKGhpdCkgcmV0dXJuIGhpdFxuICAgIHZhciBsaW5rZXIgPSBjb21waWxlci5jb21waWxlKGZyYWcsIHRoaXMudm0uJG9wdGlvbnMsIHRydWUpXG4gICAgY2FjaGUucHV0KGNhY2hlSWQsIGxpbmtlcilcbiAgICByZXR1cm4gbGlua2VyXG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudW5saW5rKSB0aGlzLnVubGluaygpXG4gICAgaWYgKHRoaXMudW53YXRjaCkgdGhpcy51bndhdGNoKClcbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlL3NyYy9lbGVtZW50LWRpcmVjdGl2ZXMvcGFydGlhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxuXG4vKipcbiAqIFN0cmluZ2lmeSB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZW50XG4gKi9cblxuZXhwb3J0cy5qc29uID0ge1xuICByZWFkOiBmdW5jdGlvbiAodmFsdWUsIGluZGVudCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICAgICA/IHZhbHVlXG4gICAgICA6IEpTT04uc3RyaW5naWZ5KHZhbHVlLCBudWxsLCBOdW1iZXIoaW5kZW50KSB8fCAyKVxuICB9LFxuICB3cml0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHZhbHVlKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqICdhYmMnID0+ICdBYmMnXG4gKi9cblxuZXhwb3J0cy5jYXBpdGFsaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHJldHVybiAnJ1xuICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKClcbiAgcmV0dXJuIHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSlcbn1cblxuLyoqXG4gKiAnYWJjJyA9PiAnQUJDJ1xuICovXG5cbmV4cG9ydHMudXBwZXJjYXNlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgfHwgdmFsdWUgPT09IDApXG4gICAgPyB2YWx1ZS50b1N0cmluZygpLnRvVXBwZXJDYXNlKClcbiAgICA6ICcnXG59XG5cbi8qKlxuICogJ0FiQycgPT4gJ2FiYydcbiAqL1xuXG5leHBvcnRzLmxvd2VyY2FzZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlIHx8IHZhbHVlID09PSAwKVxuICAgID8gdmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpXG4gICAgOiAnJ1xufVxuXG4vKipcbiAqIDEyMzQ1ID0+ICQxMiwzNDUuMDBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2lnblxuICovXG5cbnZhciBkaWdpdHNSRSA9IC8oXFxkezN9KSg/PVxcZCkvZ1xuZXhwb3J0cy5jdXJyZW5jeSA9IGZ1bmN0aW9uICh2YWx1ZSwgY3VycmVuY3kpIHtcbiAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKVxuICBpZiAoIWlzRmluaXRlKHZhbHVlKSB8fCAoIXZhbHVlICYmIHZhbHVlICE9PSAwKSkgcmV0dXJuICcnXG4gIGN1cnJlbmN5ID0gY3VycmVuY3kgfHwgJyQnXG4gIHZhciBzdHJpbmdpZmllZCA9IE1hdGguYWJzKHZhbHVlKS50b0ZpeGVkKDIpXG4gIHZhciBfaW50ID0gc3RyaW5naWZpZWQuc2xpY2UoMCwgLTMpXG4gIHZhciBpID0gX2ludC5sZW5ndGggJSAzXG4gIHZhciBoZWFkID0gaSA+IDBcbiAgICA/IChfaW50LnNsaWNlKDAsIGkpICsgKF9pbnQubGVuZ3RoID4gMyA/ICcsJyA6ICcnKSlcbiAgICA6ICcnXG4gIHZhciBfZmxvYXQgPSBzdHJpbmdpZmllZC5zbGljZSgtMylcbiAgdmFyIHNpZ24gPSB2YWx1ZSA8IDAgPyAnLScgOiAnJ1xuICByZXR1cm4gY3VycmVuY3kgKyBzaWduICsgaGVhZCArXG4gICAgX2ludC5zbGljZShpKS5yZXBsYWNlKGRpZ2l0c1JFLCAnJDEsJykgK1xuICAgIF9mbG9hdFxufVxuXG4vKipcbiAqICdpdGVtJyA9PiAnaXRlbXMnXG4gKlxuICogQHBhcmFtc1xuICogIGFuIGFycmF5IG9mIHN0cmluZ3MgY29ycmVzcG9uZGluZyB0b1xuICogIHRoZSBzaW5nbGUsIGRvdWJsZSwgdHJpcGxlIC4uLiBmb3JtcyBvZiB0aGUgd29yZCB0b1xuICogIGJlIHBsdXJhbGl6ZWQuIFdoZW4gdGhlIG51bWJlciB0byBiZSBwbHVyYWxpemVkXG4gKiAgZXhjZWVkcyB0aGUgbGVuZ3RoIG9mIHRoZSBhcmdzLCBpdCB3aWxsIHVzZSB0aGUgbGFzdFxuICogIGVudHJ5IGluIHRoZSBhcnJheS5cbiAqXG4gKiAgZS5nLiBbJ3NpbmdsZScsICdkb3VibGUnLCAndHJpcGxlJywgJ211bHRpcGxlJ11cbiAqL1xuXG5leHBvcnRzLnBsdXJhbGl6ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgYXJncyA9IF8udG9BcnJheShhcmd1bWVudHMsIDEpXG4gIHJldHVybiBhcmdzLmxlbmd0aCA+IDFcbiAgICA/IChhcmdzW3ZhbHVlICUgMTAgLSAxXSB8fCBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0pXG4gICAgOiAoYXJnc1swXSArICh2YWx1ZSA9PT0gMSA/ICcnIDogJ3MnKSlcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWwgZmlsdGVyIHRoYXQgdGFrZXMgYSBoYW5kbGVyIGZ1bmN0aW9uLFxuICogd3JhcHMgaXQgc28gaXQgb25seSBnZXRzIHRyaWdnZXJlZCBvbiBzcGVjaWZpY1xuICoga2V5cHJlc3Nlcy4gdi1vbiBvbmx5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqL1xuXG52YXIga2V5Q29kZXMgPSB7XG4gIGVzYzogMjcsXG4gIHRhYjogOSxcbiAgZW50ZXI6IDEzLFxuICAnZGVsZXRlJzogNDYsXG4gIHVwOiAzOCxcbiAgbGVmdDogMzcsXG4gIHJpZ2h0OiAzOSxcbiAgZG93bjogNDBcbn1cblxuZXhwb3J0cy5rZXkgPSBmdW5jdGlvbiAoaGFuZGxlciwga2V5KSB7XG4gIGlmICghaGFuZGxlcikgcmV0dXJuXG4gIHZhciBjb2RlID0ga2V5Q29kZXNba2V5XVxuICBpZiAoIWNvZGUpIHtcbiAgICBjb2RlID0gcGFyc2VJbnQoa2V5LCAxMClcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBjb2RlKSB7XG4gICAgICByZXR1cm4gaGFuZGxlci5jYWxsKHRoaXMsIGUpXG4gICAgfVxuICB9XG59XG5cbi8vIGV4cG9zZSBrZXljb2RlIGhhc2hcbmV4cG9ydHMua2V5LmtleUNvZGVzID0ga2V5Q29kZXNcblxuLyoqXG4gKiBJbnN0YWxsIHNwZWNpYWwgYXJyYXkgZmlsdGVyc1xuICovXG5cbl8uZXh0ZW5kKGV4cG9ydHMsIHJlcXVpcmUoJy4vYXJyYXktZmlsdGVycycpKVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlL3NyYy9maWx0ZXJzL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgUGF0aCA9IHJlcXVpcmUoJy4uL3BhcnNlcnMvcGF0aCcpXG5cbi8qKlxuICogRmlsdGVyIGZpbHRlciBmb3Igdi1yZXBlYXRcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VhcmNoS2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gW2RlbGltaXRlcl1cbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhS2V5XG4gKi9cblxuZXhwb3J0cy5maWx0ZXJCeSA9IGZ1bmN0aW9uIChhcnIsIHNlYXJjaCwgZGVsaW1pdGVyLCBkYXRhS2V5KSB7XG4gIC8vIGFsbG93IG9wdGlvbmFsIGBpbmAgZGVsaW1pdGVyXG4gIC8vIGJlY2F1c2Ugd2h5IG5vdFxuICBpZiAoZGVsaW1pdGVyICYmIGRlbGltaXRlciAhPT0gJ2luJykge1xuICAgIGRhdGFLZXkgPSBkZWxpbWl0ZXJcbiAgfVxuICBpZiAoc2VhcmNoID09IG51bGwpIHtcbiAgICByZXR1cm4gYXJyXG4gIH1cbiAgLy8gY2FzdCB0byBsb3dlcmNhc2Ugc3RyaW5nXG4gIHNlYXJjaCA9ICgnJyArIHNlYXJjaCkudG9Mb3dlckNhc2UoKVxuICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBkYXRhS2V5XG4gICAgICA/IGNvbnRhaW5zKFBhdGguZ2V0KGl0ZW0sIGRhdGFLZXkpLCBzZWFyY2gpXG4gICAgICA6IGNvbnRhaW5zKGl0ZW0sIHNlYXJjaClcbiAgfSlcbn1cblxuLyoqXG4gKiBGaWx0ZXIgZmlsdGVyIGZvciB2LXJlcGVhdFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3J0S2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gcmV2ZXJzZVxuICovXG5cbmV4cG9ydHMub3JkZXJCeSA9IGZ1bmN0aW9uIChhcnIsIHNvcnRLZXksIHJldmVyc2UpIHtcbiAgaWYgKCFzb3J0S2V5KSB7XG4gICAgcmV0dXJuIGFyclxuICB9XG4gIHZhciBvcmRlciA9IDFcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgaWYgKHJldmVyc2UgPT09ICctMScpIHtcbiAgICAgIG9yZGVyID0gLTFcbiAgICB9IGVsc2Uge1xuICAgICAgb3JkZXIgPSByZXZlcnNlID8gLTEgOiAxXG4gICAgfVxuICB9XG4gIC8vIHNvcnQgb24gYSBjb3B5IHRvIGF2b2lkIG11dGF0aW5nIG9yaWdpbmFsIGFycmF5XG4gIHJldHVybiBhcnIuc2xpY2UoKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgaWYgKHNvcnRLZXkgIT09ICcka2V5JyAmJiBzb3J0S2V5ICE9PSAnJHZhbHVlJykge1xuICAgICAgaWYgKGEgJiYgJyR2YWx1ZScgaW4gYSkgYSA9IGEuJHZhbHVlXG4gICAgICBpZiAoYiAmJiAnJHZhbHVlJyBpbiBiKSBiID0gYi4kdmFsdWVcbiAgICB9XG4gICAgYSA9IF8uaXNPYmplY3QoYSkgPyBQYXRoLmdldChhLCBzb3J0S2V5KSA6IGFcbiAgICBiID0gXy5pc09iamVjdChiKSA/IFBhdGguZ2V0KGIsIHNvcnRLZXkpIDogYlxuICAgIHJldHVybiBhID09PSBiID8gMCA6IGEgPiBiID8gb3JkZXIgOiAtb3JkZXJcbiAgfSlcbn1cblxuLyoqXG4gKiBTdHJpbmcgY29udGFpbiBoZWxwZXJcbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHBhcmFtIHtTdHJpbmd9IHNlYXJjaFxuICovXG5cbmZ1bmN0aW9uIGNvbnRhaW5zICh2YWwsIHNlYXJjaCkge1xuICBpZiAoXy5pc1BsYWluT2JqZWN0KHZhbCkpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdmFsKSB7XG4gICAgICBpZiAoY29udGFpbnModmFsW2tleV0sIHNlYXJjaCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoXy5pc0FycmF5KHZhbCkpIHtcbiAgICB2YXIgaSA9IHZhbC5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAoY29udGFpbnModmFsW2ldLCBzZWFyY2gpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gpID4gLTFcbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlL3NyYy9maWx0ZXJzL2FycmF5LWZpbHRlcnMuanNcbiAqKiBtb2R1bGUgaWQgPSA2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG1lcmdlT3B0aW9ucyA9IHJlcXVpcmUoJy4uL3V0aWwnKS5tZXJnZU9wdGlvbnNcblxuLyoqXG4gKiBUaGUgbWFpbiBpbml0IHNlcXVlbmNlLiBUaGlzIGlzIGNhbGxlZCBmb3IgZXZlcnlcbiAqIGluc3RhbmNlLCBpbmNsdWRpbmcgb25lcyB0aGF0IGFyZSBjcmVhdGVkIGZyb20gZXh0ZW5kZWRcbiAqIGNvbnN0cnVjdG9ycy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoaXMgb3B0aW9ucyBvYmplY3Qgc2hvdWxkIGJlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSByZXN1bHQgb2YgbWVyZ2luZyBjbGFzc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zIGFuZCB0aGUgb3B0aW9ucyBwYXNzZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgaW4gdG8gdGhlIGNvbnN0cnVjdG9yLlxuICovXG5cbmV4cG9ydHMuX2luaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cbiAgdGhpcy4kZWwgPSBudWxsXG4gIHRoaXMuJHBhcmVudCA9IG9wdGlvbnMuX3BhcmVudFxuICB0aGlzLiRyb290ID0gb3B0aW9ucy5fcm9vdCB8fCB0aGlzXG4gIHRoaXMuJGNoaWxkcmVuID0gW11cbiAgdGhpcy4kID0ge30gICAgICAgICAgIC8vIGNoaWxkIHZtIHJlZmVyZW5jZXNcbiAgdGhpcy4kJCA9IHt9ICAgICAgICAgIC8vIGVsZW1lbnQgcmVmZXJlbmNlc1xuICB0aGlzLl93YXRjaGVycyA9IFtdICAgLy8gYWxsIHdhdGNoZXJzIGFzIGFuIGFycmF5XG4gIHRoaXMuX2RpcmVjdGl2ZXMgPSBbXSAvLyBhbGwgZGlyZWN0aXZlc1xuICB0aGlzLl9jaGlsZEN0b3JzID0ge30gLy8gaW5oZXJpdDp0cnVlIGNvbnN0cnVjdG9yc1xuXG4gIC8vIGEgZmxhZyB0byBhdm9pZCB0aGlzIGJlaW5nIG9ic2VydmVkXG4gIHRoaXMuX2lzVnVlID0gdHJ1ZVxuXG4gIC8vIGV2ZW50cyBib29ra2VlcGluZ1xuICB0aGlzLl9ldmVudHMgPSB7fSAgICAgICAgICAgIC8vIHJlZ2lzdGVyZWQgY2FsbGJhY2tzXG4gIHRoaXMuX2V2ZW50c0NvdW50ID0ge30gICAgICAgLy8gZm9yICRicm9hZGNhc3Qgb3B0aW1pemF0aW9uXG4gIHRoaXMuX2V2ZW50Q2FuY2VsbGVkID0gZmFsc2UgLy8gZm9yIGV2ZW50IGNhbmNlbGxhdGlvblxuXG4gIC8vIGJsb2NrIGluc3RhbmNlIHByb3BlcnRpZXNcbiAgdGhpcy5faXNCbG9jayA9IGZhbHNlXG4gIHRoaXMuX2Jsb2NrU3RhcnQgPSAgICAvLyBAdHlwZSB7Q29tbWVudE5vZGV9XG4gIHRoaXMuX2Jsb2NrRW5kID0gbnVsbCAvLyBAdHlwZSB7Q29tbWVudE5vZGV9XG5cbiAgLy8gbGlmZWN5Y2xlIHN0YXRlXG4gIHRoaXMuX2lzQ29tcGlsZWQgPVxuICB0aGlzLl9pc0Rlc3Ryb3llZCA9XG4gIHRoaXMuX2lzUmVhZHkgPVxuICB0aGlzLl9pc0F0dGFjaGVkID1cbiAgdGhpcy5faXNCZWluZ0Rlc3Ryb3llZCA9IGZhbHNlXG4gIHRoaXMuX3VubGlua0ZuID0gbnVsbFxuXG4gIC8vIGNvbnRleHQ6IHRoZSBzY29wZSBpbiB3aGljaCB0aGUgY29tcG9uZW50IHdhcyB1c2VkLFxuICAvLyBhbmQgdGhlIHNjb3BlIGluIHdoaWNoIHByb3BzIGFuZCBjb250ZW50cyBvZiB0aGlzXG4gIC8vIGluc3RhbmNlIHNob3VsZCBiZSBjb21waWxlZCBpbi5cbiAgdGhpcy5fY29udGV4dCA9XG4gICAgb3B0aW9ucy5fY29udGV4dCB8fFxuICAgIG9wdGlvbnMuX3BhcmVudFxuXG4gIC8vIHB1c2ggc2VsZiBpbnRvIHBhcmVudCAvIHRyYW5zY2x1c2lvbiBob3N0XG4gIGlmICh0aGlzLiRwYXJlbnQpIHtcbiAgICB0aGlzLiRwYXJlbnQuJGNoaWxkcmVuLnB1c2godGhpcylcbiAgfVxuXG4gIC8vIHByb3BzIHVzZWQgaW4gdi1yZXBlYXQgZGlmZmluZ1xuICB0aGlzLl9yZXVzZWQgPSBmYWxzZVxuICB0aGlzLl9zdGFnZ2VyT3AgPSBudWxsXG5cbiAgLy8gbWVyZ2Ugb3B0aW9ucy5cbiAgb3B0aW9ucyA9IHRoaXMuJG9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoXG4gICAgdGhpcy5jb25zdHJ1Y3Rvci5vcHRpb25zLFxuICAgIG9wdGlvbnMsXG4gICAgdGhpc1xuICApXG5cbiAgLy8gaW5pdGlhbGl6ZSBkYXRhIGFzIGVtcHR5IG9iamVjdC5cbiAgLy8gaXQgd2lsbCBiZSBmaWxsZWQgdXAgaW4gX2luaXRTY29wZSgpLlxuICB0aGlzLl9kYXRhID0ge31cblxuICAvLyBpbml0aWFsaXplIGRhdGEgb2JzZXJ2YXRpb24gYW5kIHNjb3BlIGluaGVyaXRhbmNlLlxuICB0aGlzLl9pbml0U2NvcGUoKVxuXG4gIC8vIHNldHVwIGV2ZW50IHN5c3RlbSBhbmQgb3B0aW9uIGV2ZW50cy5cbiAgdGhpcy5faW5pdEV2ZW50cygpXG5cbiAgLy8gY2FsbCBjcmVhdGVkIGhvb2tcbiAgdGhpcy5fY2FsbEhvb2soJ2NyZWF0ZWQnKVxuXG4gIC8vIGlmIGBlbGAgb3B0aW9uIGlzIHBhc3NlZCwgc3RhcnQgY29tcGlsYXRpb24uXG4gIGlmIChvcHRpb25zLmVsKSB7XG4gICAgdGhpcy4kbW91bnQob3B0aW9ucy5lbClcbiAgfVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlL3NyYy9pbnN0YW5jZS9pbml0LmpzXG4gKiogbW9kdWxlIGlkID0gNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgaW5Eb2MgPSBfLmluRG9jXG5cbi8qKlxuICogU2V0dXAgdGhlIGluc3RhbmNlJ3Mgb3B0aW9uIGV2ZW50cyAmIHdhdGNoZXJzLlxuICogSWYgdGhlIHZhbHVlIGlzIGEgc3RyaW5nLCB3ZSBwdWxsIGl0IGZyb20gdGhlXG4gKiBpbnN0YW5jZSdzIG1ldGhvZHMgYnkgbmFtZS5cbiAqL1xuXG5leHBvcnRzLl9pbml0RXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgb3B0aW9ucyA9IHRoaXMuJG9wdGlvbnNcbiAgcmVnaXN0ZXJDYWxsYmFja3ModGhpcywgJyRvbicsIG9wdGlvbnMuZXZlbnRzKVxuICByZWdpc3RlckNhbGxiYWNrcyh0aGlzLCAnJHdhdGNoJywgb3B0aW9ucy53YXRjaClcbn1cblxuLyoqXG4gKiBSZWdpc3RlciBjYWxsYmFja3MgZm9yIG9wdGlvbiBldmVudHMgYW5kIHdhdGNoZXJzLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGhhc2hcbiAqL1xuXG5mdW5jdGlvbiByZWdpc3RlckNhbGxiYWNrcyAodm0sIGFjdGlvbiwgaGFzaCkge1xuICBpZiAoIWhhc2gpIHJldHVyblxuICB2YXIgaGFuZGxlcnMsIGtleSwgaSwgalxuICBmb3IgKGtleSBpbiBoYXNoKSB7XG4gICAgaGFuZGxlcnMgPSBoYXNoW2tleV1cbiAgICBpZiAoXy5pc0FycmF5KGhhbmRsZXJzKSkge1xuICAgICAgZm9yIChpID0gMCwgaiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICByZWdpc3Rlcih2bSwgYWN0aW9uLCBrZXksIGhhbmRsZXJzW2ldKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZWdpc3Rlcih2bSwgYWN0aW9uLCBrZXksIGhhbmRsZXJzKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEhlbHBlciB0byByZWdpc3RlciBhbiBldmVudC93YXRjaCBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfE9iamVjdH0gaGFuZGxlclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICovXG5cbmZ1bmN0aW9uIHJlZ2lzdGVyICh2bSwgYWN0aW9uLCBrZXksIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgaGFuZGxlclxuICBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZtW2FjdGlvbl0oa2V5LCBoYW5kbGVyLCBvcHRpb25zKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1ldGhvZHMgPSB2bS4kb3B0aW9ucy5tZXRob2RzXG4gICAgdmFyIG1ldGhvZCA9IG1ldGhvZHMgJiYgbWV0aG9kc1toYW5kbGVyXVxuICAgIGlmIChtZXRob2QpIHtcbiAgICAgIHZtW2FjdGlvbl0oa2V5LCBtZXRob2QsIG9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIF8ud2FybihcbiAgICAgICAgJ1Vua25vd24gbWV0aG9kOiBcIicgKyBoYW5kbGVyICsgJ1wiIHdoZW4gJyArXG4gICAgICAgICdyZWdpc3RlcmluZyBjYWxsYmFjayBmb3IgJyArIGFjdGlvbiArXG4gICAgICAgICc6IFwiJyArIGtleSArICdcIi4nXG4gICAgICApXG4gICAgfVxuICB9IGVsc2UgaWYgKGhhbmRsZXIgJiYgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICByZWdpc3Rlcih2bSwgYWN0aW9uLCBrZXksIGhhbmRsZXIuaGFuZGxlciwgaGFuZGxlcilcbiAgfVxufVxuXG4vKipcbiAqIFNldHVwIHJlY3Vyc2l2ZSBhdHRhY2hlZC9kZXRhY2hlZCBjYWxsc1xuICovXG5cbmV4cG9ydHMuX2luaXRET01Ib29rcyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy4kb24oJ2hvb2s6YXR0YWNoZWQnLCBvbkF0dGFjaGVkKVxuICB0aGlzLiRvbignaG9vazpkZXRhY2hlZCcsIG9uRGV0YWNoZWQpXG59XG5cbi8qKlxuICogQ2FsbGJhY2sgdG8gcmVjdXJzaXZlbHkgY2FsbCBhdHRhY2hlZCBob29rIG9uIGNoaWxkcmVuXG4gKi9cblxuZnVuY3Rpb24gb25BdHRhY2hlZCAoKSB7XG4gIGlmICghdGhpcy5faXNBdHRhY2hlZCkge1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlXG4gICAgdGhpcy4kY2hpbGRyZW4uZm9yRWFjaChjYWxsQXR0YWNoKVxuICB9XG59XG5cbi8qKlxuICogSXRlcmF0b3IgdG8gY2FsbCBhdHRhY2hlZCBob29rXG4gKlxuICogQHBhcmFtIHtWdWV9IGNoaWxkXG4gKi9cblxuZnVuY3Rpb24gY2FsbEF0dGFjaCAoY2hpbGQpIHtcbiAgaWYgKCFjaGlsZC5faXNBdHRhY2hlZCAmJiBpbkRvYyhjaGlsZC4kZWwpKSB7XG4gICAgY2hpbGQuX2NhbGxIb29rKCdhdHRhY2hlZCcpXG4gIH1cbn1cblxuLyoqXG4gKiBDYWxsYmFjayB0byByZWN1cnNpdmVseSBjYWxsIGRldGFjaGVkIGhvb2sgb24gY2hpbGRyZW5cbiAqL1xuXG5mdW5jdGlvbiBvbkRldGFjaGVkICgpIHtcbiAgaWYgKHRoaXMuX2lzQXR0YWNoZWQpIHtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gZmFsc2VcbiAgICB0aGlzLiRjaGlsZHJlbi5mb3JFYWNoKGNhbGxEZXRhY2gpXG4gIH1cbn1cblxuLyoqXG4gKiBJdGVyYXRvciB0byBjYWxsIGRldGFjaGVkIGhvb2tcbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gY2hpbGRcbiAqL1xuXG5mdW5jdGlvbiBjYWxsRGV0YWNoIChjaGlsZCkge1xuICBpZiAoY2hpbGQuX2lzQXR0YWNoZWQgJiYgIWluRG9jKGNoaWxkLiRlbCkpIHtcbiAgICBjaGlsZC5fY2FsbEhvb2soJ2RldGFjaGVkJylcbiAgfVxufVxuXG4vKipcbiAqIFRyaWdnZXIgYWxsIGhhbmRsZXJzIGZvciBhIGhvb2tcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaG9va1xuICovXG5cbmV4cG9ydHMuX2NhbGxIb29rID0gZnVuY3Rpb24gKGhvb2spIHtcbiAgdmFyIGhhbmRsZXJzID0gdGhpcy4kb3B0aW9uc1tob29rXVxuICBpZiAoaGFuZGxlcnMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgaGFuZGxlcnNbaV0uY2FsbCh0aGlzKVxuICAgIH1cbiAgfVxuICB0aGlzLiRlbWl0KCdob29rOicgKyBob29rKVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlL3NyYy9pbnN0YW5jZS9ldmVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSA2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJylcbnZhciBjb21waWxlciA9IHJlcXVpcmUoJy4uL2NvbXBpbGVyJylcbnZhciBPYnNlcnZlciA9IHJlcXVpcmUoJy4uL29ic2VydmVyJylcbnZhciBEZXAgPSByZXF1aXJlKCcuLi9vYnNlcnZlci9kZXAnKVxuXG4vKipcbiAqIFNldHVwIHRoZSBzY29wZSBvZiBhbiBpbnN0YW5jZSwgd2hpY2ggY29udGFpbnM6XG4gKiAtIG9ic2VydmVkIGRhdGFcbiAqIC0gY29tcHV0ZWQgcHJvcGVydGllc1xuICogLSB1c2VyIG1ldGhvZHNcbiAqIC0gbWV0YSBwcm9wZXJ0aWVzXG4gKi9cblxuZXhwb3J0cy5faW5pdFNjb3BlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9pbml0UHJvcHMoKVxuICB0aGlzLl9pbml0TWV0YSgpXG4gIHRoaXMuX2luaXRNZXRob2RzKClcbiAgdGhpcy5faW5pdERhdGEoKVxuICB0aGlzLl9pbml0Q29tcHV0ZWQoKVxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgcHJvcHMuXG4gKi9cblxuZXhwb3J0cy5faW5pdFByb3BzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgb3B0aW9ucyA9IHRoaXMuJG9wdGlvbnNcbiAgdmFyIGVsID0gb3B0aW9ucy5lbFxuICB2YXIgcHJvcHMgPSBvcHRpb25zLnByb3BzXG4gIGlmIChwcm9wcyAmJiAhZWwpIHtcbiAgICBfLndhcm4oXG4gICAgICAnUHJvcHMgd2lsbCBub3QgYmUgY29tcGlsZWQgaWYgbm8gYGVsYCBvcHRpb24gaXMgJyArXG4gICAgICAncHJvdmlkZWQgYXQgaW5zdGFudGlhdGlvbi4nXG4gICAgKVxuICB9XG4gIC8vIG1ha2Ugc3VyZSB0byBjb252ZXJ0IHN0cmluZyBzZWxlY3RvcnMgaW50byBlbGVtZW50IG5vd1xuICBlbCA9IG9wdGlvbnMuZWwgPSBfLnF1ZXJ5KGVsKVxuICB0aGlzLl9wcm9wc1VubGlua0ZuID0gZWwgJiYgcHJvcHNcbiAgICA/IGNvbXBpbGVyLmNvbXBpbGVBbmRMaW5rUHJvcHMoXG4gICAgICAgIHRoaXMsIGVsLCBwcm9wc1xuICAgICAgKVxuICAgIDogbnVsbFxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGRhdGEuXG4gKi9cblxuZXhwb3J0cy5faW5pdERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBwcm9wc0RhdGEgPSB0aGlzLl9kYXRhXG4gIHZhciBvcHRpb25zRGF0YUZuID0gdGhpcy4kb3B0aW9ucy5kYXRhXG4gIHZhciBvcHRpb25zRGF0YSA9IG9wdGlvbnNEYXRhRm4gJiYgb3B0aW9uc0RhdGFGbigpXG4gIGlmIChvcHRpb25zRGF0YSkge1xuICAgIHRoaXMuX2RhdGEgPSBvcHRpb25zRGF0YVxuICAgIGZvciAodmFyIHByb3AgaW4gcHJvcHNEYXRhKSB7XG4gICAgICBpZiAodGhpcy5fcHJvcHNbcHJvcF0ucmF3ICE9PSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnNEYXRhLiRzZXQocHJvcCwgcHJvcHNEYXRhW3Byb3BdKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB2YXIgZGF0YSA9IHRoaXMuX2RhdGFcbiAgLy8gcHJveHkgZGF0YSBvbiBpbnN0YW5jZVxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpXG4gIHZhciBpLCBrZXlcbiAgaSA9IGtleXMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICBrZXkgPSBrZXlzW2ldXG4gICAgaWYgKCFfLmlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgICAgdGhpcy5fcHJveHkoa2V5KVxuICAgIH1cbiAgfVxuICAvLyBvYnNlcnZlIGRhdGFcbiAgT2JzZXJ2ZXIuY3JlYXRlKGRhdGEsIHRoaXMpXG59XG5cbi8qKlxuICogU3dhcCB0aGUgaXNudGFuY2UncyAkZGF0YS4gQ2FsbGVkIGluICRkYXRhJ3Mgc2V0dGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBuZXdEYXRhXG4gKi9cblxuZXhwb3J0cy5fc2V0RGF0YSA9IGZ1bmN0aW9uIChuZXdEYXRhKSB7XG4gIG5ld0RhdGEgPSBuZXdEYXRhIHx8IHt9XG4gIHZhciBvbGREYXRhID0gdGhpcy5fZGF0YVxuICB0aGlzLl9kYXRhID0gbmV3RGF0YVxuICB2YXIga2V5cywga2V5LCBpXG4gIC8vIGNvcHkgcHJvcHMuXG4gIC8vIHRoaXMgc2hvdWxkIG9ubHkgaGFwcGVuIGR1cmluZyBhIHYtcmVwZWF0IG9mIGNvbXBvbmVudFxuICAvLyB0aGF0IGFsc28gaGFwcGVucyB0byBoYXZlIGNvbXBpbGVkIHByb3BzLlxuICB2YXIgcHJvcHMgPSB0aGlzLiRvcHRpb25zLnByb3BzXG4gIGlmIChwcm9wcykge1xuICAgIGkgPSBwcm9wcy5sZW5ndGhcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBrZXkgPSBwcm9wc1tpXS5uYW1lXG4gICAgICBpZiAoa2V5ICE9PSAnJGRhdGEnICYmICFuZXdEYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgbmV3RGF0YS4kc2V0KGtleSwgb2xkRGF0YVtrZXldKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyB1bnByb3h5IGtleXMgbm90IHByZXNlbnQgaW4gbmV3IGRhdGFcbiAga2V5cyA9IE9iamVjdC5rZXlzKG9sZERhdGEpXG4gIGkgPSBrZXlzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAga2V5ID0ga2V5c1tpXVxuICAgIGlmICghXy5pc1Jlc2VydmVkKGtleSkgJiYgIShrZXkgaW4gbmV3RGF0YSkpIHtcbiAgICAgIHRoaXMuX3VucHJveHkoa2V5KVxuICAgIH1cbiAgfVxuICAvLyBwcm94eSBrZXlzIG5vdCBhbHJlYWR5IHByb3hpZWQsXG4gIC8vIGFuZCB0cmlnZ2VyIGNoYW5nZSBmb3IgY2hhbmdlZCB2YWx1ZXNcbiAga2V5cyA9IE9iamVjdC5rZXlzKG5ld0RhdGEpXG4gIGkgPSBrZXlzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAga2V5ID0ga2V5c1tpXVxuICAgIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICFfLmlzUmVzZXJ2ZWQoa2V5KSkge1xuICAgICAgLy8gbmV3IHByb3BlcnR5XG4gICAgICB0aGlzLl9wcm94eShrZXkpXG4gICAgfVxuICB9XG4gIG9sZERhdGEuX19vYl9fLnJlbW92ZVZtKHRoaXMpXG4gIE9ic2VydmVyLmNyZWF0ZShuZXdEYXRhLCB0aGlzKVxuICB0aGlzLl9kaWdlc3QoKVxufVxuXG4vKipcbiAqIFByb3h5IGEgcHJvcGVydHksIHNvIHRoYXRcbiAqIHZtLnByb3AgPT09IHZtLl9kYXRhLnByb3BcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKi9cblxuZXhwb3J0cy5fcHJveHkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIC8vIG5lZWQgdG8gc3RvcmUgcmVmIHRvIHNlbGYgaGVyZVxuICAvLyBiZWNhdXNlIHRoZXNlIGdldHRlci9zZXR0ZXJzIG1pZ2h0XG4gIC8vIGJlIGNhbGxlZCBieSBjaGlsZCBpbnN0YW5jZXMhXG4gIHZhciBzZWxmID0gdGhpc1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwga2V5LCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBwcm94eUdldHRlciAoKSB7XG4gICAgICByZXR1cm4gc2VsZi5fZGF0YVtrZXldXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHByb3h5U2V0dGVyICh2YWwpIHtcbiAgICAgIHNlbGYuX2RhdGFba2V5XSA9IHZhbFxuICAgIH1cbiAgfSlcbn1cblxuLyoqXG4gKiBVbnByb3h5IGEgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICovXG5cbmV4cG9ydHMuX3VucHJveHkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIGRlbGV0ZSB0aGlzW2tleV1cbn1cblxuLyoqXG4gKiBGb3JjZSB1cGRhdGUgb24gZXZlcnkgd2F0Y2hlciBpbiBzY29wZS5cbiAqL1xuXG5leHBvcnRzLl9kaWdlc3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpID0gdGhpcy5fd2F0Y2hlcnMubGVuZ3RoXG4gIHdoaWxlIChpLS0pIHtcbiAgICB0aGlzLl93YXRjaGVyc1tpXS51cGRhdGUodHJ1ZSkgLy8gc2hhbGxvdyB1cGRhdGVzXG4gIH1cbiAgdmFyIGNoaWxkcmVuID0gdGhpcy4kY2hpbGRyZW5cbiAgaSA9IGNoaWxkcmVuLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV1cbiAgICBpZiAoY2hpbGQuJG9wdGlvbnMuaW5oZXJpdCkge1xuICAgICAgY2hpbGQuX2RpZ2VzdCgpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogU2V0dXAgY29tcHV0ZWQgcHJvcGVydGllcy4gVGhleSBhcmUgZXNzZW50aWFsbHlcbiAqIHNwZWNpYWwgZ2V0dGVyL3NldHRlcnNcbiAqL1xuXG5mdW5jdGlvbiBub29wICgpIHt9XG5leHBvcnRzLl9pbml0Q29tcHV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBjb21wdXRlZCA9IHRoaXMuJG9wdGlvbnMuY29tcHV0ZWRcbiAgaWYgKGNvbXB1dGVkKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgICB2YXIgdXNlckRlZiA9IGNvbXB1dGVkW2tleV1cbiAgICAgIHZhciBkZWYgPSB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB1c2VyRGVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRlZi5nZXQgPSBfLmJpbmQodXNlckRlZiwgdGhpcylcbiAgICAgICAgZGVmLnNldCA9IG5vb3BcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZi5nZXQgPSB1c2VyRGVmLmdldFxuICAgICAgICAgID8gXy5iaW5kKHVzZXJEZWYuZ2V0LCB0aGlzKVxuICAgICAgICAgIDogbm9vcFxuICAgICAgICBkZWYuc2V0ID0gdXNlckRlZi5zZXRcbiAgICAgICAgICA/IF8uYmluZCh1c2VyRGVmLnNldCwgdGhpcylcbiAgICAgICAgICA6IG5vb3BcbiAgICAgIH1cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIGRlZilcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBTZXR1cCBpbnN0YW5jZSBtZXRob2RzLiBNZXRob2RzIG11c3QgYmUgYm91bmQgdG8gdGhlXG4gKiBpbnN0YW5jZSBzaW5jZSB0aGV5IG1pZ2h0IGJlIGNhbGxlZCBieSBjaGlsZHJlblxuICogaW5oZXJpdGluZyB0aGVtLlxuICovXG5cbmV4cG9ydHMuX2luaXRNZXRob2RzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbWV0aG9kcyA9IHRoaXMuJG9wdGlvbnMubWV0aG9kc1xuICBpZiAobWV0aG9kcykge1xuICAgIGZvciAodmFyIGtleSBpbiBtZXRob2RzKSB7XG4gICAgICB0aGlzW2tleV0gPSBfLmJpbmQobWV0aG9kc1trZXldLCB0aGlzKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEluaXRpYWxpemUgbWV0YSBpbmZvcm1hdGlvbiBsaWtlICRpbmRleCwgJGtleSAmICR2YWx1ZS5cbiAqL1xuXG5leHBvcnRzLl9pbml0TWV0YSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG1ldGFzID0gdGhpcy4kb3B0aW9ucy5fbWV0YVxuICBpZiAobWV0YXMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gbWV0YXMpIHtcbiAgICAgIHRoaXMuX2RlZmluZU1ldGEoa2V5LCBtZXRhc1trZXldKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERlZmluZSBhIG1ldGEgcHJvcGVydHksIGUuZyAkaW5kZXgsICRrZXksICR2YWx1ZVxuICogd2hpY2ggb25seSBleGlzdHMgb24gdGhlIHZtIGluc3RhbmNlIGJ1dCBub3QgaW4gJGRhdGEuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICovXG5cbmV4cG9ydHMuX2RlZmluZU1ldGEgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGVwID0gbmV3IERlcCgpXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIG1ldGFHZXR0ZXIgKCkge1xuICAgICAgZGVwLmRlcGVuZCgpXG4gICAgICByZXR1cm4gdmFsdWVcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gbWV0YVNldHRlciAodmFsKSB7XG4gICAgICBpZiAodmFsICE9PSB2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IHZhbFxuICAgICAgICBkZXAubm90aWZ5KClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUvc3JjL2luc3RhbmNlL3Njb3BlLmpzXG4gKiogbW9kdWxlIGlkID0gNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgRGlyZWN0aXZlID0gcmVxdWlyZSgnLi4vZGlyZWN0aXZlJylcbnZhciBjb21waWxlciA9IHJlcXVpcmUoJy4uL2NvbXBpbGVyJylcblxuLyoqXG4gKiBUcmFuc2NsdWRlLCBjb21waWxlIGFuZCBsaW5rIGVsZW1lbnQuXG4gKlxuICogSWYgYSBwcmUtY29tcGlsZWQgbGlua2VyIGlzIGF2YWlsYWJsZSwgdGhhdCBtZWFucyB0aGVcbiAqIHBhc3NlZCBpbiBlbGVtZW50IHdpbGwgYmUgcHJlLXRyYW5zY2x1ZGVkIGFuZCBjb21waWxlZFxuICogYXMgd2VsbCAtIGFsbCB3ZSBuZWVkIHRvIGRvIGlzIHRvIGNhbGwgdGhlIGxpbmtlci5cbiAqXG4gKiBPdGhlcndpc2Ugd2UgbmVlZCB0byBjYWxsIHRyYW5zY2x1ZGUvY29tcGlsZS9saW5rIGhlcmUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xuXG5leHBvcnRzLl9jb21waWxlID0gZnVuY3Rpb24gKGVsKSB7XG4gIHZhciBvcHRpb25zID0gdGhpcy4kb3B0aW9uc1xuICB2YXIgaG9zdCA9IHRoaXMuX2hvc3RcbiAgaWYgKG9wdGlvbnMuX2xpbmtGbikge1xuICAgIC8vIHByZS10cmFuc2NsdWRlZCB3aXRoIGxpbmtlciwganVzdCB1c2UgaXRcbiAgICB0aGlzLl9pbml0RWxlbWVudChlbClcbiAgICB0aGlzLl91bmxpbmtGbiA9IG9wdGlvbnMuX2xpbmtGbih0aGlzLCBlbCwgaG9zdClcbiAgfSBlbHNlIHtcbiAgICAvLyB0cmFuc2NsdWRlIGFuZCBpbml0IGVsZW1lbnRcbiAgICAvLyB0cmFuc2NsdWRlIGNhbiBwb3RlbnRpYWxseSByZXBsYWNlIG9yaWdpbmFsXG4gICAgLy8gc28gd2UgbmVlZCB0byBrZWVwIHJlZmVyZW5jZTsgdGhpcyBzdGVwIGFsc28gaW5qZWN0c1xuICAgIC8vIHRoZSB0ZW1wbGF0ZSBhbmQgY2FjaGVzIHRoZSBvcmlnaW5hbCBhdHRyaWJ1dGVzXG4gICAgLy8gb24gdGhlIGNvbnRhaW5lciBub2RlIGFuZCByZXBsYWNlciBub2RlLlxuICAgIHZhciBvcmlnaW5hbCA9IGVsXG4gICAgZWwgPSBjb21waWxlci50cmFuc2NsdWRlKGVsLCBvcHRpb25zKVxuICAgIHRoaXMuX2luaXRFbGVtZW50KGVsKVxuXG4gICAgLy8gcm9vdCBpcyBhbHdheXMgY29tcGlsZWQgcGVyLWluc3RhbmNlLCBiZWNhdXNlXG4gICAgLy8gY29udGFpbmVyIGF0dHJzIGFuZCBwcm9wcyBjYW4gYmUgZGlmZmVyZW50IGV2ZXJ5IHRpbWUuXG4gICAgdmFyIHJvb3RVbmxpbmtGbiA9XG4gICAgICBjb21waWxlci5jb21waWxlQW5kTGlua1Jvb3QodGhpcywgZWwsIG9wdGlvbnMpXG5cbiAgICAvLyBjb21waWxlIGFuZCBsaW5rIHRoZSByZXN0XG4gICAgdmFyIGxpbmtlclxuICAgIHZhciBjdG9yID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgIC8vIGNvbXBvbmVudCBjb21waWxhdGlvbiBjYW4gYmUgY2FjaGVkXG4gICAgLy8gYXMgbG9uZyBhcyBpdCdzIG5vdCB1c2luZyBpbmxpbmUtdGVtcGxhdGVcbiAgICBpZiAob3B0aW9ucy5fbGlua2VyQ2FjaGFibGUpIHtcbiAgICAgIGxpbmtlciA9IGN0b3IubGlua2VyXG4gICAgICBpZiAoIWxpbmtlcikge1xuICAgICAgICBsaW5rZXIgPSBjdG9yLmxpbmtlciA9IGNvbXBpbGVyLmNvbXBpbGUoZWwsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuICAgIHZhciBjb250ZW50VW5saW5rRm4gPSBsaW5rZXJcbiAgICAgID8gbGlua2VyKHRoaXMsIGVsKVxuICAgICAgOiBjb21waWxlci5jb21waWxlKGVsLCBvcHRpb25zKSh0aGlzLCBlbCwgaG9zdClcblxuICAgIHRoaXMuX3VubGlua0ZuID0gZnVuY3Rpb24gKCkge1xuICAgICAgcm9vdFVubGlua0ZuKClcbiAgICAgIC8vIHBhc3NpbmcgZGVzdHJveWluZzogdHJ1ZSB0byBhdm9pZCBzZWFyY2hpbmcgYW5kXG4gICAgICAvLyBzcGxpY2luZyB0aGUgZGlyZWN0aXZlc1xuICAgICAgY29udGVudFVubGlua0ZuKHRydWUpXG4gICAgfVxuXG4gICAgLy8gZmluYWxseSByZXBsYWNlIG9yaWdpbmFsXG4gICAgaWYgKG9wdGlvbnMucmVwbGFjZSkge1xuICAgICAgXy5yZXBsYWNlKG9yaWdpbmFsLCBlbClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVsXG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBpbnN0YW5jZSBlbGVtZW50LiBDYWxsZWQgaW4gdGhlIHB1YmxpY1xuICogJG1vdW50KCkgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqL1xuXG5leHBvcnRzLl9pbml0RWxlbWVudCA9IGZ1bmN0aW9uIChlbCkge1xuICBpZiAoZWwgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgdGhpcy5faXNCbG9jayA9IHRydWVcbiAgICB0aGlzLiRlbCA9IHRoaXMuX2Jsb2NrU3RhcnQgPSBlbC5maXJzdENoaWxkXG4gICAgdGhpcy5fYmxvY2tFbmQgPSBlbC5sYXN0Q2hpbGRcbiAgICAvLyBzZXQgcGVyc2lzdGVkIHRleHQgYW5jaG9ycyB0byBlbXB0eVxuICAgIGlmICh0aGlzLl9ibG9ja1N0YXJ0Lm5vZGVUeXBlID09PSAzKSB7XG4gICAgICB0aGlzLl9ibG9ja1N0YXJ0LmRhdGEgPSB0aGlzLl9ibG9ja0VuZC5kYXRhID0gJydcbiAgICB9XG4gICAgdGhpcy5fYmxvY2tGcmFnbWVudCA9IGVsXG4gIH0gZWxzZSB7XG4gICAgdGhpcy4kZWwgPSBlbFxuICB9XG4gIHRoaXMuJGVsLl9fdnVlX18gPSB0aGlzXG4gIHRoaXMuX2NhbGxIb29rKCdiZWZvcmVDb21waWxlJylcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW5kIGJpbmQgYSBkaXJlY3RpdmUgdG8gYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIGRpcmVjdGl2ZSBuYW1lXG4gKiBAcGFyYW0ge05vZGV9IG5vZGUgICAtIHRhcmdldCBub2RlXG4gKiBAcGFyYW0ge09iamVjdH0gZGVzYyAtIHBhcnNlZCBkaXJlY3RpdmUgZGVzY3JpcHRvclxuICogQHBhcmFtIHtPYmplY3R9IGRlZiAgLSBkaXJlY3RpdmUgZGVmaW5pdGlvbiBvYmplY3RcbiAqIEBwYXJhbSB7VnVlfHVuZGVmaW5lZH0gaG9zdCAtIHRyYW5zY2x1c2lvbiBob3N0IGNvbXBvbmVudFxuICovXG5cbmV4cG9ydHMuX2JpbmREaXIgPSBmdW5jdGlvbiAobmFtZSwgbm9kZSwgZGVzYywgZGVmLCBob3N0KSB7XG4gIHRoaXMuX2RpcmVjdGl2ZXMucHVzaChcbiAgICBuZXcgRGlyZWN0aXZlKG5hbWUsIG5vZGUsIHRoaXMsIGRlc2MsIGRlZiwgaG9zdClcbiAgKVxufVxuXG4vKipcbiAqIFRlYXJkb3duIGFuIGluc3RhbmNlLCB1bm9ic2VydmVzIHRoZSBkYXRhLCB1bmJpbmQgYWxsIHRoZVxuICogZGlyZWN0aXZlcywgdHVybiBvZmYgYWxsIHRoZSBldmVudCBsaXN0ZW5lcnMsIGV0Yy5cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHJlbW92ZSAtIHdoZXRoZXIgdG8gcmVtb3ZlIHRoZSBET00gbm9kZS5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZGVmZXJDbGVhbnVwIC0gaWYgdHJ1ZSwgZGVmZXIgY2xlYW51cCB0b1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZSBjYWxsZWQgbGF0ZXJcbiAqL1xuXG5leHBvcnRzLl9kZXN0cm95ID0gZnVuY3Rpb24gKHJlbW92ZSwgZGVmZXJDbGVhbnVwKSB7XG4gIGlmICh0aGlzLl9pc0JlaW5nRGVzdHJveWVkKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdGhpcy5fY2FsbEhvb2soJ2JlZm9yZURlc3Ryb3knKVxuICB0aGlzLl9pc0JlaW5nRGVzdHJveWVkID0gdHJ1ZVxuICB2YXIgaVxuICAvLyByZW1vdmUgc2VsZiBmcm9tIHBhcmVudC4gb25seSBuZWNlc3NhcnlcbiAgLy8gaWYgcGFyZW50IGlzIG5vdCBiZWluZyBkZXN0cm95ZWQgYXMgd2VsbC5cbiAgdmFyIHBhcmVudCA9IHRoaXMuJHBhcmVudFxuICBpZiAocGFyZW50ICYmICFwYXJlbnQuX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICBwYXJlbnQuJGNoaWxkcmVuLiRyZW1vdmUodGhpcylcbiAgfVxuICAvLyBkZXN0cm95IGFsbCBjaGlsZHJlbi5cbiAgaSA9IHRoaXMuJGNoaWxkcmVuLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgdGhpcy4kY2hpbGRyZW5baV0uJGRlc3Ryb3koKVxuICB9XG4gIC8vIHRlYXJkb3duIHByb3BzXG4gIGlmICh0aGlzLl9wcm9wc1VubGlua0ZuKSB7XG4gICAgdGhpcy5fcHJvcHNVbmxpbmtGbigpXG4gIH1cbiAgLy8gdGVhcmRvd24gYWxsIGRpcmVjdGl2ZXMuIHRoaXMgYWxzbyB0ZWFyc2Rvd24gYWxsXG4gIC8vIGRpcmVjdGl2ZS1vd25lZCB3YXRjaGVycy5cbiAgaWYgKHRoaXMuX3VubGlua0ZuKSB7XG4gICAgdGhpcy5fdW5saW5rRm4oKVxuICB9XG4gIGkgPSB0aGlzLl93YXRjaGVycy5sZW5ndGhcbiAgd2hpbGUgKGktLSkge1xuICAgIHRoaXMuX3dhdGNoZXJzW2ldLnRlYXJkb3duKClcbiAgfVxuICAvLyByZW1vdmUgcmVmZXJlbmNlIHRvIHNlbGYgb24gJGVsXG4gIGlmICh0aGlzLiRlbCkge1xuICAgIHRoaXMuJGVsLl9fdnVlX18gPSBudWxsXG4gIH1cbiAgLy8gcmVtb3ZlIERPTSBlbGVtZW50XG4gIHZhciBzZWxmID0gdGhpc1xuICBpZiAocmVtb3ZlICYmIHRoaXMuJGVsKSB7XG4gICAgdGhpcy4kcmVtb3ZlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX2NsZWFudXAoKVxuICAgIH0pXG4gIH0gZWxzZSBpZiAoIWRlZmVyQ2xlYW51cCkge1xuICAgIHRoaXMuX2NsZWFudXAoKVxuICB9XG59XG5cbi8qKlxuICogQ2xlYW4gdXAgdG8gZW5zdXJlIGdhcmJhZ2UgY29sbGVjdGlvbi5cbiAqIFRoaXMgaXMgY2FsbGVkIGFmdGVyIHRoZSBsZWF2ZSB0cmFuc2l0aW9uIGlmIHRoZXJlXG4gKiBpcyBhbnkuXG4gKi9cblxuZXhwb3J0cy5fY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gcmVtb3ZlIHJlZmVyZW5jZSBmcm9tIGRhdGEgb2JcbiAgLy8gZnJvemVuIG9iamVjdCBtYXkgbm90IGhhdmUgb2JzZXJ2ZXIuXG4gIGlmICh0aGlzLl9kYXRhLl9fb2JfXykge1xuICAgIHRoaXMuX2RhdGEuX19vYl9fLnJlbW92ZVZtKHRoaXMpXG4gIH1cbiAgLy8gQ2xlYW4gdXAgcmVmZXJlbmNlcyB0byBwcml2YXRlIHByb3BlcnRpZXMgYW5kIG90aGVyXG4gIC8vIGluc3RhbmNlcy4gcHJlc2VydmUgcmVmZXJlbmNlIHRvIF9kYXRhIHNvIHRoYXQgcHJveHlcbiAgLy8gYWNjZXNzb3JzIHN0aWxsIHdvcmsuIFRoZSBvbmx5IHBvdGVudGlhbCBzaWRlIGVmZmVjdFxuICAvLyBoZXJlIGlzIHRoYXQgbXV0YXRpbmcgdGhlIGluc3RhbmNlIGFmdGVyIGl0J3MgZGVzdHJveWVkXG4gIC8vIG1heSBhZmZlY3QgdGhlIHN0YXRlIG9mIG90aGVyIGNvbXBvbmVudHMgdGhhdCBhcmUgc3RpbGxcbiAgLy8gb2JzZXJ2aW5nIHRoZSBzYW1lIG9iamVjdCwgYnV0IHRoYXQgc2VlbXMgdG8gYmUgYVxuICAvLyByZWFzb25hYmxlIHJlc3BvbnNpYmlsaXR5IGZvciB0aGUgdXNlciByYXRoZXIgdGhhblxuICAvLyBhbHdheXMgdGhyb3dpbmcgYW4gZXJyb3Igb24gdGhlbS5cbiAgdGhpcy4kZWwgPVxuICB0aGlzLiRwYXJlbnQgPVxuICB0aGlzLiRyb290ID1cbiAgdGhpcy4kY2hpbGRyZW4gPVxuICB0aGlzLl93YXRjaGVycyA9XG4gIHRoaXMuX2RpcmVjdGl2ZXMgPSBudWxsXG4gIC8vIGNhbGwgdGhlIGxhc3QgaG9vay4uLlxuICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWVcbiAgdGhpcy5fY2FsbEhvb2soJ2Rlc3Ryb3llZCcpXG4gIC8vIHR1cm4gb2ZmIGFsbCBpbnN0YW5jZSBsaXN0ZW5lcnMuXG4gIHRoaXMuJG9mZigpXG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUvc3JjL2luc3RhbmNlL2NvbXBpbGUuanNcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF8gPSByZXF1aXJlKCcuL3V0aWwnKVxudmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4vY29uZmlnJylcbnZhciBXYXRjaGVyID0gcmVxdWlyZSgnLi93YXRjaGVyJylcbnZhciB0ZXh0UGFyc2VyID0gcmVxdWlyZSgnLi9wYXJzZXJzL3RleHQnKVxudmFyIGV4cFBhcnNlciA9IHJlcXVpcmUoJy4vcGFyc2Vycy9leHByZXNzaW9uJylcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSBsaW5rcyBhIERPTSBlbGVtZW50IHdpdGggYSBwaWVjZSBvZiBkYXRhLFxuICogd2hpY2ggaXMgdGhlIHJlc3VsdCBvZiBldmFsdWF0aW5nIGFuIGV4cHJlc3Npb24uXG4gKiBJdCByZWdpc3RlcnMgYSB3YXRjaGVyIHdpdGggdGhlIGV4cHJlc3Npb24gYW5kIGNhbGxzXG4gKiB0aGUgRE9NIHVwZGF0ZSBmdW5jdGlvbiB3aGVuIGEgY2hhbmdlIGlzIHRyaWdnZXJlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtOb2RlfSBlbFxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge09iamVjdH0gZGVzY3JpcHRvclxuICogICAgICAgICAgICAgICAgIC0ge1N0cmluZ30gZXhwcmVzc2lvblxuICogICAgICAgICAgICAgICAgIC0ge1N0cmluZ30gW2FyZ11cbiAqICAgICAgICAgICAgICAgICAtIHtBcnJheTxPYmplY3Q+fSBbZmlsdGVyc11cbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWYgLSBkaXJlY3RpdmUgZGVmaW5pdGlvbiBvYmplY3RcbiAqIEBwYXJhbSB7VnVlfHVuZGVmaW5lZH0gaG9zdCAtIHRyYW5zY2x1c2lvbiBob3N0IHRhcmdldFxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuZnVuY3Rpb24gRGlyZWN0aXZlIChuYW1lLCBlbCwgdm0sIGRlc2NyaXB0b3IsIGRlZiwgaG9zdCkge1xuICAvLyBwdWJsaWNcbiAgdGhpcy5uYW1lID0gbmFtZVxuICB0aGlzLmVsID0gZWxcbiAgdGhpcy52bSA9IHZtXG4gIC8vIGNvcHkgZGVzY3JpcHRvciBwcm9wc1xuICB0aGlzLnJhdyA9IGRlc2NyaXB0b3IucmF3XG4gIHRoaXMuZXhwcmVzc2lvbiA9IGRlc2NyaXB0b3IuZXhwcmVzc2lvblxuICB0aGlzLmFyZyA9IGRlc2NyaXB0b3IuYXJnXG4gIHRoaXMuZmlsdGVycyA9IGRlc2NyaXB0b3IuZmlsdGVyc1xuICAvLyBwcml2YXRlXG4gIHRoaXMuX2Rlc2NyaXB0b3IgPSBkZXNjcmlwdG9yXG4gIHRoaXMuX2hvc3QgPSBob3N0XG4gIHRoaXMuX2xvY2tlZCA9IGZhbHNlXG4gIHRoaXMuX2JvdW5kID0gZmFsc2VcbiAgLy8gaW5pdFxuICB0aGlzLl9iaW5kKGRlZilcbn1cblxudmFyIHAgPSBEaXJlY3RpdmUucHJvdG90eXBlXG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgZGlyZWN0aXZlLCBtaXhpbiBkZWZpbml0aW9uIHByb3BlcnRpZXMsXG4gKiBzZXR1cCB0aGUgd2F0Y2hlciwgY2FsbCBkZWZpbml0aW9uIGJpbmQoKSBhbmQgdXBkYXRlKClcbiAqIGlmIHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZlxuICovXG5cbnAuX2JpbmQgPSBmdW5jdGlvbiAoZGVmKSB7XG4gIGlmICh0aGlzLm5hbWUgIT09ICdjbG9haycgJiYgdGhpcy5lbCAmJiB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSkge1xuICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKGNvbmZpZy5wcmVmaXggKyB0aGlzLm5hbWUpXG4gIH1cbiAgaWYgKHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLnVwZGF0ZSA9IGRlZlxuICB9IGVsc2Uge1xuICAgIF8uZXh0ZW5kKHRoaXMsIGRlZilcbiAgfVxuICB0aGlzLl93YXRjaGVyRXhwID0gdGhpcy5leHByZXNzaW9uXG4gIHRoaXMuX2NoZWNrRHluYW1pY0xpdGVyYWwoKVxuICBpZiAodGhpcy5iaW5kKSB7XG4gICAgdGhpcy5iaW5kKClcbiAgfVxuICBpZiAodGhpcy5fd2F0Y2hlckV4cCAmJlxuICAgICAgKHRoaXMudXBkYXRlIHx8IHRoaXMudHdvV2F5KSAmJlxuICAgICAgKCF0aGlzLmlzTGl0ZXJhbCB8fCB0aGlzLl9pc0R5bmFtaWNMaXRlcmFsKSAmJlxuICAgICAgIXRoaXMuX2NoZWNrU3RhdGVtZW50KCkpIHtcbiAgICAvLyB3cmFwcGVkIHVwZGF0ZXIgZm9yIGNvbnRleHRcbiAgICB2YXIgZGlyID0gdGhpc1xuICAgIHZhciB1cGRhdGUgPSB0aGlzLl91cGRhdGUgPSB0aGlzLnVwZGF0ZVxuICAgICAgPyBmdW5jdGlvbiAodmFsLCBvbGRWYWwpIHtcbiAgICAgICAgICBpZiAoIWRpci5fbG9ja2VkKSB7XG4gICAgICAgICAgICBkaXIudXBkYXRlKHZhbCwgb2xkVmFsKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgOiBmdW5jdGlvbiAoKSB7fSAvLyBub29wIGlmIG5vIHVwZGF0ZSBpcyBwcm92aWRlZFxuICAgIC8vIHByZS1wcm9jZXNzIGhvb2sgY2FsbGVkIGJlZm9yZSB0aGUgdmFsdWUgaXMgcGlwZWRcbiAgICAvLyB0aHJvdWdoIHRoZSBmaWx0ZXJzLiB1c2VkIGluIHYtcmVwZWF0LlxuICAgIHZhciBwcmVQcm9jZXNzID0gdGhpcy5fcHJlUHJvY2Vzc1xuICAgICAgPyBfLmJpbmQodGhpcy5fcHJlUHJvY2VzcywgdGhpcylcbiAgICAgIDogbnVsbFxuICAgIHZhciB3YXRjaGVyID0gdGhpcy5fd2F0Y2hlciA9IG5ldyBXYXRjaGVyKFxuICAgICAgdGhpcy52bSxcbiAgICAgIHRoaXMuX3dhdGNoZXJFeHAsXG4gICAgICB1cGRhdGUsIC8vIGNhbGxiYWNrXG4gICAgICB7XG4gICAgICAgIGZpbHRlcnM6IHRoaXMuZmlsdGVycyxcbiAgICAgICAgdHdvV2F5OiB0aGlzLnR3b1dheSxcbiAgICAgICAgZGVlcDogdGhpcy5kZWVwLFxuICAgICAgICBwcmVQcm9jZXNzOiBwcmVQcm9jZXNzXG4gICAgICB9XG4gICAgKVxuICAgIGlmICh0aGlzLl9pbml0VmFsdWUgIT0gbnVsbCkge1xuICAgICAgd2F0Y2hlci5zZXQodGhpcy5faW5pdFZhbHVlKVxuICAgIH0gZWxzZSBpZiAodGhpcy51cGRhdGUpIHtcbiAgICAgIHRoaXMudXBkYXRlKHdhdGNoZXIudmFsdWUpXG4gICAgfVxuICB9XG4gIHRoaXMuX2JvdW5kID0gdHJ1ZVxufVxuXG4vKipcbiAqIGNoZWNrIGlmIHRoaXMgaXMgYSBkeW5hbWljIGxpdGVyYWwgYmluZGluZy5cbiAqXG4gKiBlLmcuIHYtY29tcG9uZW50PVwie3tjdXJyZW50Vmlld319XCJcbiAqL1xuXG5wLl9jaGVja0R5bmFtaWNMaXRlcmFsID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZXhwcmVzc2lvbiA9IHRoaXMuZXhwcmVzc2lvblxuICBpZiAoZXhwcmVzc2lvbiAmJiB0aGlzLmlzTGl0ZXJhbCkge1xuICAgIHZhciB0b2tlbnMgPSB0ZXh0UGFyc2VyLnBhcnNlKGV4cHJlc3Npb24pXG4gICAgaWYgKHRva2Vucykge1xuICAgICAgdmFyIGV4cCA9IHRleHRQYXJzZXIudG9rZW5zVG9FeHAodG9rZW5zKVxuICAgICAgdGhpcy5leHByZXNzaW9uID0gdGhpcy52bS4kZ2V0KGV4cClcbiAgICAgIHRoaXMuX3dhdGNoZXJFeHAgPSBleHBcbiAgICAgIHRoaXMuX2lzRHluYW1pY0xpdGVyYWwgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGRpcmVjdGl2ZSBpcyBhIGZ1bmN0aW9uIGNhbGxlclxuICogYW5kIGlmIHRoZSBleHByZXNzaW9uIGlzIGEgY2FsbGFibGUgb25lLiBJZiBib3RoIHRydWUsXG4gKiB3ZSB3cmFwIHVwIHRoZSBleHByZXNzaW9uIGFuZCB1c2UgaXQgYXMgdGhlIGV2ZW50XG4gKiBoYW5kbGVyLlxuICpcbiAqIGUuZy4gdi1vbj1cImNsaWNrOiBhKytcIlxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxucC5fY2hlY2tTdGF0ZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBleHByZXNzaW9uID0gdGhpcy5leHByZXNzaW9uXG4gIGlmIChcbiAgICBleHByZXNzaW9uICYmIHRoaXMuYWNjZXB0U3RhdGVtZW50ICYmXG4gICAgIWV4cFBhcnNlci5pc1NpbXBsZVBhdGgoZXhwcmVzc2lvbilcbiAgKSB7XG4gICAgdmFyIGZuID0gZXhwUGFyc2VyLnBhcnNlKGV4cHJlc3Npb24pLmdldFxuICAgIHZhciB2bSA9IHRoaXMudm1cbiAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGZuLmNhbGwodm0sIHZtKVxuICAgIH1cbiAgICBpZiAodGhpcy5maWx0ZXJzKSB7XG4gICAgICBoYW5kbGVyID0gdm0uX2FwcGx5RmlsdGVycyhoYW5kbGVyLCBudWxsLCB0aGlzLmZpbHRlcnMpXG4gICAgfVxuICAgIHRoaXMudXBkYXRlKGhhbmRsZXIpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGZvciBhbiBhdHRyaWJ1dGUgZGlyZWN0aXZlIHBhcmFtLCBlLmcuIGxhenlcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbnAuX2NoZWNrUGFyYW0gPSBmdW5jdGlvbiAobmFtZSkge1xuICB2YXIgcGFyYW0gPSB0aGlzLmVsLmdldEF0dHJpYnV0ZShuYW1lKVxuICBpZiAocGFyYW0gIT09IG51bGwpIHtcbiAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZShuYW1lKVxuICB9XG4gIHJldHVybiBwYXJhbVxufVxuXG4vKipcbiAqIFRlYXJkb3duIHRoZSB3YXRjaGVyIGFuZCBjYWxsIHVuYmluZC5cbiAqL1xuXG5wLl90ZWFyZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX2JvdW5kKSB7XG4gICAgdGhpcy5fYm91bmQgPSBmYWxzZVxuICAgIGlmICh0aGlzLnVuYmluZCkge1xuICAgICAgdGhpcy51bmJpbmQoKVxuICAgIH1cbiAgICBpZiAodGhpcy5fd2F0Y2hlcikge1xuICAgICAgdGhpcy5fd2F0Y2hlci50ZWFyZG93bigpXG4gICAgfVxuICAgIHRoaXMudm0gPSB0aGlzLmVsID0gdGhpcy5fd2F0Y2hlciA9IG51bGxcbiAgfVxufVxuXG4vKipcbiAqIFNldCB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZSB3aXRoIHRoZSBzZXR0ZXIuXG4gKiBUaGlzIHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gdHdvLXdheSBkaXJlY3RpdmVzXG4gKiBlLmcuIHYtbW9kZWwuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHB1YmxpY1xuICovXG5cbnAuc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh0aGlzLnR3b1dheSkge1xuICAgIHRoaXMuX3dpdGhMb2NrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuX3dhdGNoZXIuc2V0KHZhbHVlKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBFeGVjdXRlIGEgZnVuY3Rpb24gd2hpbGUgcHJldmVudGluZyB0aGF0IGZ1bmN0aW9uIGZyb21cbiAqIHRyaWdnZXJpbmcgdXBkYXRlcyBvbiB0aGlzIGRpcmVjdGl2ZSBpbnN0YW5jZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICovXG5cbnAuX3dpdGhMb2NrID0gZnVuY3Rpb24gKGZuKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICBzZWxmLl9sb2NrZWQgPSB0cnVlXG4gIGZuLmNhbGwoc2VsZilcbiAgXy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5fbG9ja2VkID0gZmFsc2VcbiAgfSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3RpdmVcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvZGlyZWN0aXZlLmpzXG4gKiogbW9kdWxlIGlkID0gNjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG5cbi8qKlxuICogQXBwbHkgYSBsaXN0IG9mIGZpbHRlciAoZGVzY3JpcHRvcnMpIHRvIGEgdmFsdWUuXG4gKiBVc2luZyBwbGFpbiBmb3IgbG9vcHMgaGVyZSBiZWNhdXNlIHRoaXMgd2lsbCBiZSBjYWxsZWQgaW5cbiAqIHRoZSBnZXR0ZXIgb2YgYW55IHdhdGNoZXIgd2l0aCBmaWx0ZXJzIHNvIGl0IGlzIHZlcnlcbiAqIHBlcmZvcm1hbmNlIHNlbnNpdGl2ZS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0geyp9IFtvbGRWYWx1ZV1cbiAqIEBwYXJhbSB7QXJyYXl9IGZpbHRlcnNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gd3JpdGVcbiAqIEByZXR1cm4geyp9XG4gKi9cblxuZXhwb3J0cy5fYXBwbHlGaWx0ZXJzID0gZnVuY3Rpb24gKHZhbHVlLCBvbGRWYWx1ZSwgZmlsdGVycywgd3JpdGUpIHtcbiAgdmFyIGZpbHRlciwgZm4sIGFyZ3MsIGFyZywgb2Zmc2V0LCBpLCBsLCBqLCBrXG4gIGZvciAoaSA9IDAsIGwgPSBmaWx0ZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZpbHRlciA9IGZpbHRlcnNbaV1cbiAgICBmbiA9IF8ucmVzb2x2ZUFzc2V0KHRoaXMuJG9wdGlvbnMsICdmaWx0ZXJzJywgZmlsdGVyLm5hbWUpXG4gICAgXy5hc3NlcnRBc3NldChmbiwgJ2ZpbHRlcicsIGZpbHRlci5uYW1lKVxuICAgIGlmICghZm4pIGNvbnRpbnVlXG4gICAgZm4gPSB3cml0ZSA/IGZuLndyaXRlIDogKGZuLnJlYWQgfHwgZm4pXG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykgY29udGludWVcbiAgICBhcmdzID0gd3JpdGUgPyBbdmFsdWUsIG9sZFZhbHVlXSA6IFt2YWx1ZV1cbiAgICBvZmZzZXQgPSB3cml0ZSA/IDIgOiAxXG4gICAgaWYgKGZpbHRlci5hcmdzKSB7XG4gICAgICBmb3IgKGogPSAwLCBrID0gZmlsdGVyLmFyZ3MubGVuZ3RoOyBqIDwgazsgaisrKSB7XG4gICAgICAgIGFyZyA9IGZpbHRlci5hcmdzW2pdXG4gICAgICAgIGFyZ3NbaiArIG9mZnNldF0gPSBhcmcuZHluYW1pY1xuICAgICAgICAgID8gdGhpcy4kZ2V0KGFyZy52YWx1ZSlcbiAgICAgICAgICA6IGFyZy52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgICB2YWx1ZSA9IGZuLmFwcGx5KHRoaXMsIGFyZ3MpXG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogUmVzb2x2ZSBhIGNvbXBvbmVudCwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGNvbXBvbmVudFxuICogaXMgZGVmaW5lZCBub3JtYWxseSBvciB1c2luZyBhbiBhc3luYyBmYWN0b3J5IGZ1bmN0aW9uLlxuICogUmVzb2x2ZXMgc3luY2hyb25vdXNseSBpZiBhbHJlYWR5IHJlc29sdmVkLCBvdGhlcndpc2VcbiAqIHJlc29sdmVzIGFzeW5jaHJvbm91c2x5IGFuZCBjYWNoZXMgdGhlIHJlc29sdmVkXG4gKiBjb25zdHJ1Y3RvciBvbiB0aGUgZmFjdG9yeS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKi9cblxuZXhwb3J0cy5fcmVzb2x2ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChpZCwgY2IpIHtcbiAgdmFyIGZhY3RvcnkgPSBfLnJlc29sdmVBc3NldCh0aGlzLiRvcHRpb25zLCAnY29tcG9uZW50cycsIGlkKVxuICBfLmFzc2VydEFzc2V0KGZhY3RvcnksICdjb21wb25lbnQnLCBpZClcbiAgLy8gYXN5bmMgY29tcG9uZW50IGZhY3RvcnlcbiAgaWYgKCFmYWN0b3J5Lm9wdGlvbnMpIHtcbiAgICBpZiAoZmFjdG9yeS5yZXNvbHZlZCkge1xuICAgICAgLy8gY2FjaGVkXG4gICAgICBjYihmYWN0b3J5LnJlc29sdmVkKVxuICAgIH0gZWxzZSBpZiAoZmFjdG9yeS5yZXF1ZXN0ZWQpIHtcbiAgICAgIC8vIHBvb2wgY2FsbGJhY2tzXG4gICAgICBmYWN0b3J5LnBlbmRpbmdDYWxsYmFja3MucHVzaChjYilcbiAgICB9IGVsc2Uge1xuICAgICAgZmFjdG9yeS5yZXF1ZXN0ZWQgPSB0cnVlXG4gICAgICB2YXIgY2JzID0gZmFjdG9yeS5wZW5kaW5nQ2FsbGJhY2tzID0gW2NiXVxuICAgICAgZmFjdG9yeShmdW5jdGlvbiByZXNvbHZlIChyZXMpIHtcbiAgICAgICAgaWYgKF8uaXNQbGFpbk9iamVjdChyZXMpKSB7XG4gICAgICAgICAgcmVzID0gXy5WdWUuZXh0ZW5kKHJlcylcbiAgICAgICAgfVxuICAgICAgICAvLyBjYWNoZSByZXNvbHZlZFxuICAgICAgICBmYWN0b3J5LnJlc29sdmVkID0gcmVzXG4gICAgICAgIC8vIGludm9rZSBjYWxsYmFja3NcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjYnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgY2JzW2ldKHJlcylcbiAgICAgICAgfVxuICAgICAgfSwgZnVuY3Rpb24gcmVqZWN0IChyZWFzb24pIHtcbiAgICAgICAgXy53YXJuKFxuICAgICAgICAgICdGYWlsZWQgdG8gcmVzb2x2ZSBhc3luYyBjb21wb25lbnQ6ICcgKyBpZCArICcuICcgK1xuICAgICAgICAgIChyZWFzb24gPyAnXFxuUmVhc29uOiAnICsgcmVhc29uIDogJycpXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIG5vcm1hbCBjb21wb25lbnRcbiAgICBjYihmYWN0b3J5KVxuICB9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUvc3JjL2luc3RhbmNlL21pc2MuanNcbiAqKiBtb2R1bGUgaWQgPSA3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIFdhdGNoZXIgPSByZXF1aXJlKCcuLi93YXRjaGVyJylcbnZhciBQYXRoID0gcmVxdWlyZSgnLi4vcGFyc2Vycy9wYXRoJylcbnZhciB0ZXh0UGFyc2VyID0gcmVxdWlyZSgnLi4vcGFyc2Vycy90ZXh0JylcbnZhciBkaXJQYXJzZXIgPSByZXF1aXJlKCcuLi9wYXJzZXJzL2RpcmVjdGl2ZScpXG52YXIgZXhwUGFyc2VyID0gcmVxdWlyZSgnLi4vcGFyc2Vycy9leHByZXNzaW9uJylcbnZhciBmaWx0ZXJSRSA9IC9bXnxdXFx8W158XS9cblxuLyoqXG4gKiBHZXQgdGhlIHZhbHVlIGZyb20gYW4gZXhwcmVzc2lvbiBvbiB0aGlzIHZtLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBcbiAqIEByZXR1cm4geyp9XG4gKi9cblxuZXhwb3J0cy4kZ2V0ID0gZnVuY3Rpb24gKGV4cCkge1xuICB2YXIgcmVzID0gZXhwUGFyc2VyLnBhcnNlKGV4cClcbiAgaWYgKHJlcykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gcmVzLmdldC5jYWxsKHRoaXMsIHRoaXMpXG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxufVxuXG4vKipcbiAqIFNldCB0aGUgdmFsdWUgZnJvbSBhbiBleHByZXNzaW9uIG9uIHRoaXMgdm0uXG4gKiBUaGUgZXhwcmVzc2lvbiBtdXN0IGJlIGEgdmFsaWQgbGVmdC1oYW5kXG4gKiBleHByZXNzaW9uIGluIGFuIGFzc2lnbm1lbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV4cFxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5leHBvcnRzLiRzZXQgPSBmdW5jdGlvbiAoZXhwLCB2YWwpIHtcbiAgdmFyIHJlcyA9IGV4cFBhcnNlci5wYXJzZShleHAsIHRydWUpXG4gIGlmIChyZXMgJiYgcmVzLnNldCkge1xuICAgIHJlcy5zZXQuY2FsbCh0aGlzLCB0aGlzLCB2YWwpXG4gIH1cbn1cblxuLyoqXG4gKiBBZGQgYSBwcm9wZXJ0eSBvbiB0aGUgVk1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbmV4cG9ydHMuJGFkZCA9IGZ1bmN0aW9uIChrZXksIHZhbCkge1xuICB0aGlzLl9kYXRhLiRhZGQoa2V5LCB2YWwpXG59XG5cbi8qKlxuICogRGVsZXRlIGEgcHJvcGVydHkgb24gdGhlIFZNXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICovXG5cbmV4cG9ydHMuJGRlbGV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgdGhpcy5fZGF0YS4kZGVsZXRlKGtleSlcbn1cblxuLyoqXG4gKiBXYXRjaCBhbiBleHByZXNzaW9uLCB0cmlnZ2VyIGNhbGxiYWNrIHdoZW4gaXRzXG4gKiB2YWx1ZSBjaGFuZ2VzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gZGVlcFxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IGltbWVkaWF0ZVxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHVzZXJcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAtIHVud2F0Y2hGblxuICovXG5cbmV4cG9ydHMuJHdhdGNoID0gZnVuY3Rpb24gKGV4cCwgY2IsIG9wdGlvbnMpIHtcbiAgdmFyIHZtID0gdGhpc1xuICB2YXIgd3JhcHBlZENiID0gZnVuY3Rpb24gKHZhbCwgb2xkVmFsKSB7XG4gICAgY2IuY2FsbCh2bSwgdmFsLCBvbGRWYWwpXG4gIH1cbiAgdmFyIHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgZXhwLCB3cmFwcGVkQ2IsIHtcbiAgICBkZWVwOiBvcHRpb25zICYmIG9wdGlvbnMuZGVlcCxcbiAgICB1c2VyOiAhb3B0aW9ucyB8fCBvcHRpb25zLnVzZXIgIT09IGZhbHNlXG4gIH0pXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuaW1tZWRpYXRlKSB7XG4gICAgd3JhcHBlZENiKHdhdGNoZXIudmFsdWUpXG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHVud2F0Y2hGbiAoKSB7XG4gICAgd2F0Y2hlci50ZWFyZG93bigpXG4gIH1cbn1cblxuLyoqXG4gKiBFdmFsdWF0ZSBhIHRleHQgZGlyZWN0aXZlLCBpbmNsdWRpbmcgZmlsdGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmV4cG9ydHMuJGV2YWwgPSBmdW5jdGlvbiAodGV4dCkge1xuICAvLyBjaGVjayBmb3IgZmlsdGVycy5cbiAgaWYgKGZpbHRlclJFLnRlc3QodGV4dCkpIHtcbiAgICB2YXIgZGlyID0gZGlyUGFyc2VyLnBhcnNlKHRleHQpWzBdXG4gICAgLy8gdGhlIGZpbHRlciByZWdleCBjaGVjayBtaWdodCBnaXZlIGZhbHNlIHBvc2l0aXZlXG4gICAgLy8gZm9yIHBpcGVzIGluc2lkZSBzdHJpbmdzLCBzbyBpdCdzIHBvc3NpYmxlIHRoYXRcbiAgICAvLyB3ZSBkb24ndCBnZXQgYW55IGZpbHRlcnMgaGVyZVxuICAgIHZhciB2YWwgPSB0aGlzLiRnZXQoZGlyLmV4cHJlc3Npb24pXG4gICAgcmV0dXJuIGRpci5maWx0ZXJzXG4gICAgICA/IHRoaXMuX2FwcGx5RmlsdGVycyh2YWwsIG51bGwsIGRpci5maWx0ZXJzKVxuICAgICAgOiB2YWxcbiAgfSBlbHNlIHtcbiAgICAvLyBubyBmaWx0ZXJcbiAgICByZXR1cm4gdGhpcy4kZ2V0KHRleHQpXG4gIH1cbn1cblxuLyoqXG4gKiBJbnRlcnBvbGF0ZSBhIHBpZWNlIG9mIHRlbXBsYXRlIHRleHQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLiRpbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gIHZhciB0b2tlbnMgPSB0ZXh0UGFyc2VyLnBhcnNlKHRleHQpXG4gIHZhciB2bSA9IHRoaXNcbiAgaWYgKHRva2Vucykge1xuICAgIHJldHVybiB0b2tlbnMubGVuZ3RoID09PSAxXG4gICAgICA/IHZtLiRldmFsKHRva2Vuc1swXS52YWx1ZSlcbiAgICAgIDogdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW4udGFnXG4gICAgICAgICAgICA/IHZtLiRldmFsKHRva2VuLnZhbHVlKVxuICAgICAgICAgICAgOiB0b2tlbi52YWx1ZVxuICAgICAgICB9KS5qb2luKCcnKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0ZXh0XG4gIH1cbn1cblxuLyoqXG4gKiBMb2cgaW5zdGFuY2UgZGF0YSBhcyBhIHBsYWluIEpTIG9iamVjdFxuICogc28gdGhhdCBpdCBpcyBlYXNpZXIgdG8gaW5zcGVjdCBpbiBjb25zb2xlLlxuICogVGhpcyBtZXRob2QgYXNzdW1lcyBjb25zb2xlIGlzIGF2YWlsYWJsZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gW3BhdGhdXG4gKi9cblxuZXhwb3J0cy4kbG9nID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgdmFyIGRhdGEgPSBwYXRoXG4gICAgPyBQYXRoLmdldCh0aGlzLl9kYXRhLCBwYXRoKVxuICAgIDogdGhpcy5fZGF0YVxuICBpZiAoZGF0YSkge1xuICAgIGRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICB9XG4gIGNvbnNvbGUubG9nKGRhdGEpXG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUvc3JjL2FwaS9kYXRhLmpzXG4gKiogbW9kdWxlIGlkID0gNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG52YXIgdHJhbnNpdGlvbiA9IHJlcXVpcmUoJy4uL3RyYW5zaXRpb24nKVxuXG4vKipcbiAqIENvbnZlbmllbmNlIG9uLWluc3RhbmNlIG5leHRUaWNrLiBUaGUgY2FsbGJhY2sgaXNcbiAqIGF1dG8tYm91bmQgdG8gdGhlIGluc3RhbmNlLCBhbmQgdGhpcyBhdm9pZHMgY29tcG9uZW50XG4gKiBtb2R1bGVzIGhhdmluZyB0byByZWx5IG9uIHRoZSBnbG9iYWwgVnVlLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cblxuZXhwb3J0cy4kbmV4dFRpY2sgPSBmdW5jdGlvbiAoZm4pIHtcbiAgXy5uZXh0VGljayhmbiwgdGhpcylcbn1cblxuLyoqXG4gKiBBcHBlbmQgaW5zdGFuY2UgdG8gdGFyZ2V0XG4gKlxuICogQHBhcmFtIHtOb2RlfSB0YXJnZXRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3dpdGhUcmFuc2l0aW9uXSAtIGRlZmF1bHRzIHRvIHRydWVcbiAqL1xuXG5leHBvcnRzLiRhcHBlbmRUbyA9IGZ1bmN0aW9uICh0YXJnZXQsIGNiLCB3aXRoVHJhbnNpdGlvbikge1xuICByZXR1cm4gaW5zZXJ0KFxuICAgIHRoaXMsIHRhcmdldCwgY2IsIHdpdGhUcmFuc2l0aW9uLFxuICAgIGFwcGVuZCwgdHJhbnNpdGlvbi5hcHBlbmRcbiAgKVxufVxuXG4vKipcbiAqIFByZXBlbmQgaW5zdGFuY2UgdG8gdGFyZ2V0XG4gKlxuICogQHBhcmFtIHtOb2RlfSB0YXJnZXRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3dpdGhUcmFuc2l0aW9uXSAtIGRlZmF1bHRzIHRvIHRydWVcbiAqL1xuXG5leHBvcnRzLiRwcmVwZW5kVG8gPSBmdW5jdGlvbiAodGFyZ2V0LCBjYiwgd2l0aFRyYW5zaXRpb24pIHtcbiAgdGFyZ2V0ID0gcXVlcnkodGFyZ2V0KVxuICBpZiAodGFyZ2V0Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIHRoaXMuJGJlZm9yZSh0YXJnZXQuZmlyc3RDaGlsZCwgY2IsIHdpdGhUcmFuc2l0aW9uKVxuICB9IGVsc2Uge1xuICAgIHRoaXMuJGFwcGVuZFRvKHRhcmdldCwgY2IsIHdpdGhUcmFuc2l0aW9uKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogSW5zZXJ0IGluc3RhbmNlIGJlZm9yZSB0YXJnZXRcbiAqXG4gKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICogQHBhcmFtIHtCb29sZWFufSBbd2l0aFRyYW5zaXRpb25dIC0gZGVmYXVsdHMgdG8gdHJ1ZVxuICovXG5cbmV4cG9ydHMuJGJlZm9yZSA9IGZ1bmN0aW9uICh0YXJnZXQsIGNiLCB3aXRoVHJhbnNpdGlvbikge1xuICByZXR1cm4gaW5zZXJ0KFxuICAgIHRoaXMsIHRhcmdldCwgY2IsIHdpdGhUcmFuc2l0aW9uLFxuICAgIGJlZm9yZSwgdHJhbnNpdGlvbi5iZWZvcmVcbiAgKVxufVxuXG4vKipcbiAqIEluc2VydCBpbnN0YW5jZSBhZnRlciB0YXJnZXRcbiAqXG4gKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICogQHBhcmFtIHtCb29sZWFufSBbd2l0aFRyYW5zaXRpb25dIC0gZGVmYXVsdHMgdG8gdHJ1ZVxuICovXG5cbmV4cG9ydHMuJGFmdGVyID0gZnVuY3Rpb24gKHRhcmdldCwgY2IsIHdpdGhUcmFuc2l0aW9uKSB7XG4gIHRhcmdldCA9IHF1ZXJ5KHRhcmdldClcbiAgaWYgKHRhcmdldC5uZXh0U2libGluZykge1xuICAgIHRoaXMuJGJlZm9yZSh0YXJnZXQubmV4dFNpYmxpbmcsIGNiLCB3aXRoVHJhbnNpdGlvbilcbiAgfSBlbHNlIHtcbiAgICB0aGlzLiRhcHBlbmRUbyh0YXJnZXQucGFyZW50Tm9kZSwgY2IsIHdpdGhUcmFuc2l0aW9uKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbi8qKlxuICogUmVtb3ZlIGluc3RhbmNlIGZyb20gRE9NXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICogQHBhcmFtIHtCb29sZWFufSBbd2l0aFRyYW5zaXRpb25dIC0gZGVmYXVsdHMgdG8gdHJ1ZVxuICovXG5cbmV4cG9ydHMuJHJlbW92ZSA9IGZ1bmN0aW9uIChjYiwgd2l0aFRyYW5zaXRpb24pIHtcbiAgaWYgKCF0aGlzLiRlbC5wYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIGNiICYmIGNiKClcbiAgfVxuICB2YXIgaW5Eb2MgPSB0aGlzLl9pc0F0dGFjaGVkICYmIF8uaW5Eb2ModGhpcy4kZWwpXG4gIC8vIGlmIHdlIGFyZSBub3QgaW4gZG9jdW1lbnQsIG5vIG5lZWQgdG8gY2hlY2tcbiAgLy8gZm9yIHRyYW5zaXRpb25zXG4gIGlmICghaW5Eb2MpIHdpdGhUcmFuc2l0aW9uID0gZmFsc2VcbiAgdmFyIG9wXG4gIHZhciBzZWxmID0gdGhpc1xuICB2YXIgcmVhbENiID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChpbkRvYykgc2VsZi5fY2FsbEhvb2soJ2RldGFjaGVkJylcbiAgICBpZiAoY2IpIGNiKClcbiAgfVxuICBpZiAoXG4gICAgdGhpcy5faXNCbG9jayAmJlxuICAgICF0aGlzLl9ibG9ja0ZyYWdtZW50Lmhhc0NoaWxkTm9kZXMoKVxuICApIHtcbiAgICBvcCA9IHdpdGhUcmFuc2l0aW9uID09PSBmYWxzZVxuICAgICAgPyBhcHBlbmRcbiAgICAgIDogdHJhbnNpdGlvbi5yZW1vdmVUaGVuQXBwZW5kXG4gICAgYmxvY2tPcCh0aGlzLCB0aGlzLl9ibG9ja0ZyYWdtZW50LCBvcCwgcmVhbENiKVxuICB9IGVsc2Uge1xuICAgIG9wID0gd2l0aFRyYW5zaXRpb24gPT09IGZhbHNlXG4gICAgICA/IHJlbW92ZVxuICAgICAgOiB0cmFuc2l0aW9uLnJlbW92ZVxuICAgIG9wKHRoaXMuJGVsLCB0aGlzLCByZWFsQ2IpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBTaGFyZWQgRE9NIGluc2VydGlvbiBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt3aXRoVHJhbnNpdGlvbl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wMSAtIG9wIGZvciBub24tdHJhbnNpdGlvbiBpbnNlcnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wMiAtIG9wIGZvciB0cmFuc2l0aW9uIGluc2VydFxuICogQHJldHVybiB2bVxuICovXG5cbmZ1bmN0aW9uIGluc2VydCAodm0sIHRhcmdldCwgY2IsIHdpdGhUcmFuc2l0aW9uLCBvcDEsIG9wMikge1xuICB0YXJnZXQgPSBxdWVyeSh0YXJnZXQpXG4gIHZhciB0YXJnZXRJc0RldGFjaGVkID0gIV8uaW5Eb2ModGFyZ2V0KVxuICB2YXIgb3AgPSB3aXRoVHJhbnNpdGlvbiA9PT0gZmFsc2UgfHwgdGFyZ2V0SXNEZXRhY2hlZFxuICAgID8gb3AxXG4gICAgOiBvcDJcbiAgdmFyIHNob3VsZENhbGxIb29rID1cbiAgICAhdGFyZ2V0SXNEZXRhY2hlZCAmJlxuICAgICF2bS5faXNBdHRhY2hlZCAmJlxuICAgICFfLmluRG9jKHZtLiRlbClcbiAgaWYgKHZtLl9pc0Jsb2NrKSB7XG4gICAgYmxvY2tPcCh2bSwgdGFyZ2V0LCBvcCwgY2IpXG4gIH0gZWxzZSB7XG4gICAgb3Aodm0uJGVsLCB0YXJnZXQsIHZtLCBjYilcbiAgfVxuICBpZiAoc2hvdWxkQ2FsbEhvb2spIHtcbiAgICB2bS5fY2FsbEhvb2soJ2F0dGFjaGVkJylcbiAgfVxuICByZXR1cm4gdm1cbn1cblxuLyoqXG4gKiBFeGVjdXRlIGEgdHJhbnNpdGlvbiBvcGVyYXRpb24gb24gYSBibG9jayBpbnN0YW5jZSxcbiAqIGl0ZXJhdGluZyB0aHJvdWdoIGFsbCBpdHMgYmxvY2sgbm9kZXMuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3BcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKi9cblxuZnVuY3Rpb24gYmxvY2tPcCAodm0sIHRhcmdldCwgb3AsIGNiKSB7XG4gIHZhciBjdXJyZW50ID0gdm0uX2Jsb2NrU3RhcnRcbiAgdmFyIGVuZCA9IHZtLl9ibG9ja0VuZFxuICB2YXIgbmV4dFxuICB3aGlsZSAobmV4dCAhPT0gZW5kKSB7XG4gICAgbmV4dCA9IGN1cnJlbnQubmV4dFNpYmxpbmdcbiAgICBvcChjdXJyZW50LCB0YXJnZXQsIHZtKVxuICAgIGN1cnJlbnQgPSBuZXh0XG4gIH1cbiAgb3AoZW5kLCB0YXJnZXQsIHZtLCBjYilcbn1cblxuLyoqXG4gKiBDaGVjayBmb3Igc2VsZWN0b3JzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8RWxlbWVudH0gZWxcbiAqL1xuXG5mdW5jdGlvbiBxdWVyeSAoZWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBlbCA9PT0gJ3N0cmluZydcbiAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpXG4gICAgOiBlbFxufVxuXG4vKipcbiAqIEFwcGVuZCBvcGVyYXRpb24gdGhhdCB0YWtlcyBhIGNhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gKiBAcGFyYW0ge1Z1ZX0gdm0gLSB1bnVzZWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqL1xuXG5mdW5jdGlvbiBhcHBlbmQgKGVsLCB0YXJnZXQsIHZtLCBjYikge1xuICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWwpXG4gIGlmIChjYikgY2IoKVxufVxuXG4vKipcbiAqIEluc2VydEJlZm9yZSBvcGVyYXRpb24gdGhhdCB0YWtlcyBhIGNhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gKiBAcGFyYW0ge1Z1ZX0gdm0gLSB1bnVzZWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqL1xuXG5mdW5jdGlvbiBiZWZvcmUgKGVsLCB0YXJnZXQsIHZtLCBjYikge1xuICBfLmJlZm9yZShlbCwgdGFyZ2V0KVxuICBpZiAoY2IpIGNiKClcbn1cblxuLyoqXG4gKiBSZW1vdmUgb3BlcmF0aW9uIHRoYXQgdGFrZXMgYSBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IGVsXG4gKiBAcGFyYW0ge1Z1ZX0gdm0gLSB1bnVzZWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqL1xuXG5mdW5jdGlvbiByZW1vdmUgKGVsLCB2bSwgY2IpIHtcbiAgXy5yZW1vdmUoZWwpXG4gIGlmIChjYikgY2IoKVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlL3NyYy9hcGkvZG9tLmpzXG4gKiogbW9kdWxlIGlkID0gNzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpXG5cbi8qKlxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cblxuZXhwb3J0cy4kb24gPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICh0aGlzLl9ldmVudHNbZXZlbnRdIHx8ICh0aGlzLl9ldmVudHNbZXZlbnRdID0gW10pKVxuICAgIC5wdXNoKGZuKVxuICBtb2RpZnlMaXN0ZW5lckNvdW50KHRoaXMsIGV2ZW50LCAxKVxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cblxuZXhwb3J0cy4kb25jZSA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGZ1bmN0aW9uIG9uICgpIHtcbiAgICBzZWxmLiRvZmYoZXZlbnQsIG9uKVxuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgfVxuICBvbi5mbiA9IGZuXG4gIHRoaXMuJG9uKGV2ZW50LCBvbilcbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICovXG5cbmV4cG9ydHMuJG9mZiA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgdmFyIGNic1xuICAvLyBhbGxcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgaWYgKHRoaXMuJHBhcmVudCkge1xuICAgICAgZm9yIChldmVudCBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgICAgY2JzID0gdGhpcy5fZXZlbnRzW2V2ZW50XVxuICAgICAgICBpZiAoY2JzKSB7XG4gICAgICAgICAgbW9kaWZ5TGlzdGVuZXJDb3VudCh0aGlzLCBldmVudCwgLWNicy5sZW5ndGgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fZXZlbnRzID0ge31cbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIC8vIHNwZWNpZmljIGV2ZW50XG4gIGNicyA9IHRoaXMuX2V2ZW50c1tldmVudF1cbiAgaWYgKCFjYnMpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgbW9kaWZ5TGlzdGVuZXJDb3VudCh0aGlzLCBldmVudCwgLWNicy5sZW5ndGgpXG4gICAgdGhpcy5fZXZlbnRzW2V2ZW50XSA9IG51bGxcbiAgICByZXR1cm4gdGhpc1xuICB9XG4gIC8vIHNwZWNpZmljIGhhbmRsZXJcbiAgdmFyIGNiXG4gIHZhciBpID0gY2JzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgY2IgPSBjYnNbaV1cbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xuICAgICAgbW9kaWZ5TGlzdGVuZXJDb3VudCh0aGlzLCBldmVudCwgLTEpXG4gICAgICBjYnMuc3BsaWNlKGksIDEpXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIFRyaWdnZXIgYW4gZXZlbnQgb24gc2VsZi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqL1xuXG5leHBvcnRzLiRlbWl0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRoaXMuX2V2ZW50Q2FuY2VsbGVkID0gZmFsc2VcbiAgdmFyIGNicyA9IHRoaXMuX2V2ZW50c1tldmVudF1cbiAgaWYgKGNicykge1xuICAgIC8vIGF2b2lkIGxlYWtpbmcgYXJndW1lbnRzOlxuICAgIC8vIGh0dHA6Ly9qc3BlcmYuY29tL2Nsb3N1cmUtd2l0aC1hcmd1bWVudHNcbiAgICB2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxXG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoaSlcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXVxuICAgIH1cbiAgICBpID0gMFxuICAgIGNicyA9IGNicy5sZW5ndGggPiAxXG4gICAgICA/IF8udG9BcnJheShjYnMpXG4gICAgICA6IGNic1xuICAgIGZvciAodmFyIGwgPSBjYnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoY2JzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLl9ldmVudENhbmNlbGxlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBSZWN1cnNpdmVseSBicm9hZGNhc3QgYW4gZXZlbnQgdG8gYWxsIGNoaWxkcmVuIGluc3RhbmNlcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7Li4uKn0gYWRkaXRpb25hbCBhcmd1bWVudHNcbiAqL1xuXG5leHBvcnRzLiRicm9hZGNhc3QgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gaWYgbm8gY2hpbGQgaGFzIHJlZ2lzdGVyZWQgZm9yIHRoaXMgZXZlbnQsXG4gIC8vIHRoZW4gdGhlcmUncyBubyBuZWVkIHRvIGJyb2FkY2FzdC5cbiAgaWYgKCF0aGlzLl9ldmVudHNDb3VudFtldmVudF0pIHJldHVyblxuICB2YXIgY2hpbGRyZW4gPSB0aGlzLiRjaGlsZHJlblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldXG4gICAgY2hpbGQuJGVtaXQuYXBwbHkoY2hpbGQsIGFyZ3VtZW50cylcbiAgICBpZiAoIWNoaWxkLl9ldmVudENhbmNlbGxlZCkge1xuICAgICAgY2hpbGQuJGJyb2FkY2FzdC5hcHBseShjaGlsZCwgYXJndW1lbnRzKVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IHByb3BhZ2F0ZSBhbiBldmVudCB1cCB0aGUgcGFyZW50IGNoYWluLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHsuLi4qfSBhZGRpdGlvbmFsIGFyZ3VtZW50c1xuICovXG5cbmV4cG9ydHMuJGRpc3BhdGNoID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcGFyZW50ID0gdGhpcy4kcGFyZW50XG4gIHdoaWxlIChwYXJlbnQpIHtcbiAgICBwYXJlbnQuJGVtaXQuYXBwbHkocGFyZW50LCBhcmd1bWVudHMpXG4gICAgcGFyZW50ID0gcGFyZW50Ll9ldmVudENhbmNlbGxlZFxuICAgICAgPyBudWxsXG4gICAgICA6IHBhcmVudC4kcGFyZW50XG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBNb2RpZnkgdGhlIGxpc3RlbmVyIGNvdW50cyBvbiBhbGwgcGFyZW50cy5cbiAqIFRoaXMgYm9va2tlZXBpbmcgYWxsb3dzICRicm9hZGNhc3QgdG8gcmV0dXJuIGVhcmx5IHdoZW5cbiAqIG5vIGNoaWxkIGhhcyBsaXN0ZW5lZCB0byBhIGNlcnRhaW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudFxuICovXG5cbnZhciBob29rUkUgPSAvXmhvb2s6L1xuZnVuY3Rpb24gbW9kaWZ5TGlzdGVuZXJDb3VudCAodm0sIGV2ZW50LCBjb3VudCkge1xuICB2YXIgcGFyZW50ID0gdm0uJHBhcmVudFxuICAvLyBob29rcyBkbyBub3QgZ2V0IGJyb2FkY2FzdGVkIHNvIG5vIG5lZWRcbiAgLy8gdG8gZG8gYm9va2tlZXBpbmcgZm9yIHRoZW1cbiAgaWYgKCFwYXJlbnQgfHwgIWNvdW50IHx8IGhvb2tSRS50ZXN0KGV2ZW50KSkgcmV0dXJuXG4gIHdoaWxlIChwYXJlbnQpIHtcbiAgICBwYXJlbnQuX2V2ZW50c0NvdW50W2V2ZW50XSA9XG4gICAgICAocGFyZW50Ll9ldmVudHNDb3VudFtldmVudF0gfHwgMCkgKyBjb3VudFxuICAgIHBhcmVudCA9IHBhcmVudC4kcGFyZW50XG4gIH1cbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS9zcmMvYXBpL2V2ZW50cy5qc1xuICoqIG1vZHVsZSBpZCA9IDczXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxuXG4vKipcbiAqIENyZWF0ZSBhIGNoaWxkIGluc3RhbmNlIHRoYXQgcHJvdG90eXBhbGx5IGluZWhyaXRzXG4gKiBkYXRhIG9uIHBhcmVudC4gVG8gYWNoaWV2ZSB0aGF0IHdlIGNyZWF0ZSBhbiBpbnRlcm1lZGlhdGVcbiAqIGNvbnN0cnVjdG9yIHdpdGggaXRzIHByb3RvdHlwZSBwb2ludGluZyB0byBwYXJlbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtCYXNlQ3Rvcl1cbiAqIEByZXR1cm4ge1Z1ZX1cbiAqIEBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLiRhZGRDaGlsZCA9IGZ1bmN0aW9uIChvcHRzLCBCYXNlQ3Rvcikge1xuICBCYXNlQ3RvciA9IEJhc2VDdG9yIHx8IF8uVnVlXG4gIG9wdHMgPSBvcHRzIHx8IHt9XG4gIHZhciBwYXJlbnQgPSB0aGlzXG4gIHZhciBDaGlsZFZ1ZVxuICB2YXIgaW5oZXJpdCA9IG9wdHMuaW5oZXJpdCAhPT0gdW5kZWZpbmVkXG4gICAgPyBvcHRzLmluaGVyaXRcbiAgICA6IEJhc2VDdG9yLm9wdGlvbnMuaW5oZXJpdFxuICBpZiAoaW5oZXJpdCkge1xuICAgIHZhciBjdG9ycyA9IHBhcmVudC5fY2hpbGRDdG9yc1xuICAgIENoaWxkVnVlID0gY3RvcnNbQmFzZUN0b3IuY2lkXVxuICAgIGlmICghQ2hpbGRWdWUpIHtcbiAgICAgIHZhciBvcHRpb25OYW1lID0gQmFzZUN0b3Iub3B0aW9ucy5uYW1lXG4gICAgICB2YXIgY2xhc3NOYW1lID0gb3B0aW9uTmFtZVxuICAgICAgICA/IF8uY2xhc3NpZnkob3B0aW9uTmFtZSlcbiAgICAgICAgOiAnVnVlQ29tcG9uZW50J1xuICAgICAgQ2hpbGRWdWUgPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgICdyZXR1cm4gZnVuY3Rpb24gJyArIGNsYXNzTmFtZSArICcgKG9wdGlvbnMpIHsnICtcbiAgICAgICAgJ3RoaXMuY29uc3RydWN0b3IgPSAnICsgY2xhc3NOYW1lICsgJzsnICtcbiAgICAgICAgJ3RoaXMuX2luaXQob3B0aW9ucykgfSdcbiAgICAgICkoKVxuICAgICAgQ2hpbGRWdWUub3B0aW9ucyA9IEJhc2VDdG9yLm9wdGlvbnNcbiAgICAgIENoaWxkVnVlLmxpbmtlciA9IEJhc2VDdG9yLmxpbmtlclxuICAgICAgLy8gaW1wb3J0YW50OiB0cmFuc2NsdWRlZCBpbmxpbmUgcmVwZWF0ZXJzIHNob3VsZFxuICAgICAgLy8gaW5oZXJpdCBmcm9tIG91dGVyIHNjb3BlIHJhdGhlciB0aGFuIGhvc3RcbiAgICAgIENoaWxkVnVlLnByb3RvdHlwZSA9IG9wdHMuX2NvbnRleHQgfHwgdGhpc1xuICAgICAgY3RvcnNbQmFzZUN0b3IuY2lkXSA9IENoaWxkVnVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIENoaWxkVnVlID0gQmFzZUN0b3JcbiAgfVxuICBvcHRzLl9wYXJlbnQgPSBwYXJlbnRcbiAgb3B0cy5fcm9vdCA9IHBhcmVudC4kcm9vdFxuICB2YXIgY2hpbGQgPSBuZXcgQ2hpbGRWdWUob3B0cylcbiAgcmV0dXJuIGNoaWxkXG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUvc3JjL2FwaS9jaGlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDc0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKVxudmFyIGNvbXBpbGVyID0gcmVxdWlyZSgnLi4vY29tcGlsZXInKVxuXG4vKipcbiAqIFNldCBpbnN0YW5jZSB0YXJnZXQgZWxlbWVudCBhbmQga2ljayBvZmYgdGhlIGNvbXBpbGF0aW9uXG4gKiBwcm9jZXNzLiBUaGUgcGFzc2VkIGluIGBlbGAgY2FuIGJlIGEgc2VsZWN0b3Igc3RyaW5nLCBhblxuICogZXhpc3RpbmcgRWxlbWVudCwgb3IgYSBEb2N1bWVudEZyYWdtZW50IChmb3IgYmxvY2tcbiAqIGluc3RhbmNlcykuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR8c3RyaW5nfSBlbFxuICogQHB1YmxpY1xuICovXG5cbmV4cG9ydHMuJG1vdW50ID0gZnVuY3Rpb24gKGVsKSB7XG4gIGlmICh0aGlzLl9pc0NvbXBpbGVkKSB7XG4gICAgXy53YXJuKCckbW91bnQoKSBzaG91bGQgYmUgY2FsbGVkIG9ubHkgb25jZS4nKVxuICAgIHJldHVyblxuICB9XG4gIGVsID0gXy5xdWVyeShlbClcbiAgaWYgKCFlbCkge1xuICAgIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgfVxuICB0aGlzLl9jb21waWxlKGVsKVxuICB0aGlzLl9pc0NvbXBpbGVkID0gdHJ1ZVxuICB0aGlzLl9jYWxsSG9vaygnY29tcGlsZWQnKVxuICB0aGlzLl9pbml0RE9NSG9va3MoKVxuICBpZiAoXy5pbkRvYyh0aGlzLiRlbCkpIHtcbiAgICB0aGlzLl9jYWxsSG9vaygnYXR0YWNoZWQnKVxuICAgIHJlYWR5LmNhbGwodGhpcylcbiAgfSBlbHNlIHtcbiAgICB0aGlzLiRvbmNlKCdob29rOmF0dGFjaGVkJywgcmVhZHkpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBNYXJrIGFuIGluc3RhbmNlIGFzIHJlYWR5LlxuICovXG5cbmZ1bmN0aW9uIHJlYWR5ICgpIHtcbiAgdGhpcy5faXNBdHRhY2hlZCA9IHRydWVcbiAgdGhpcy5faXNSZWFkeSA9IHRydWVcbiAgdGhpcy5fY2FsbEhvb2soJ3JlYWR5Jylcbn1cblxuLyoqXG4gKiBUZWFyZG93biB0aGUgaW5zdGFuY2UsIHNpbXBseSBkZWxlZ2F0ZSB0byB0aGUgaW50ZXJuYWxcbiAqIF9kZXN0cm95LlxuICovXG5cbmV4cG9ydHMuJGRlc3Ryb3kgPSBmdW5jdGlvbiAocmVtb3ZlLCBkZWZlckNsZWFudXApIHtcbiAgdGhpcy5fZGVzdHJveShyZW1vdmUsIGRlZmVyQ2xlYW51cClcbn1cblxuLyoqXG4gKiBQYXJ0aWFsbHkgY29tcGlsZSBhIHBpZWNlIG9mIERPTSBhbmQgcmV0dXJuIGFcbiAqIGRlY29tcGlsZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR8RG9jdW1lbnRGcmFnbWVudH0gZWxcbiAqIEBwYXJhbSB7VnVlfSBbaG9zdF1cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmV4cG9ydHMuJGNvbXBpbGUgPSBmdW5jdGlvbiAoZWwsIGhvc3QpIHtcbiAgcmV0dXJuIGNvbXBpbGVyLmNvbXBpbGUoZWwsIHRoaXMuJG9wdGlvbnMsIHRydWUsIGhvc3QpKHRoaXMsIGVsKVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlL3NyYy9hcGkvbGlmZWN5Y2xlLmpzXG4gKiogbW9kdWxlIGlkID0gNzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpLFxuICAgIHBhZ2UgPSByZXF1aXJlKCdwYWdlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVnVlKSB7XG4gIHZhciBjb21wb25lbnQgPSBWdWUuZGlyZWN0aXZlKCdfY29tcG9uZW50JyksXG4gICAgICBvdmVycmlkZXMgPSByZXF1aXJlKCcuL292ZXJyaWRlcycpKFZ1ZSksXG4gICAgICByb3V0aW5nID0gcmVxdWlyZSgnLi9yb3V0aW5nJykoVnVlLCBwYWdlLCB1dGlscyksXG4gICAgICBfID0gVnVlLnV0aWw7XG5cbiAgICB2YXIgcm91dGVEZWZpbml0aW9uID0gXy5leHRlbmQoe1xuICAgICAgICBpc0xpdGVyYWw6IHRydWUsXG5cbiAgICAgICAgLy8gVnVlIGV2ZW50IG1ldGhvZCwgJGVtaXQgb3IgJGJyb2FkY2FzdFxuICAgICAgICBub3RpZmllcjogbnVsbCxcblxuICAgICAgICBkZWZhdWx0Um91dGU6ICcvJyxcblxuICAgICAgICAvLyBSZWZlcmVuY2UgdG8gJHJvb3QuJG9wdGlvbnMucm91dGVzXG4gICAgICAgIHJvdXRlczoge30sXG5cbiAgICAgICAgLy8gT3B0aW9ucyB0byBiZSBwYXNzZWQgdG8gdGhlIHJvdXRpbmcgbGlicmFyeVxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgYmFzZTogJy8nLFxuICAgICAgICAgIGhhc2hiYW5nOiBmYWxzZSxcbiAgICAgICAgICBjbGljazogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIExvY2F0aW9uIGNvbnRleHRcbiAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgIHJlZ2V4cDogbnVsbCxcbiAgICAgICAgICAgIHBhdGg6IG51bGwsXG4gICAgICAgICAgICBjb21wb25lbnRJZDogbnVsbCxcbiAgICAgICAgICAgIHBhcmFtczogbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIG9sZExvY2F0aW9uOiB7XG4gICAgICAgICAgICByZWdleHA6IG51bGwsXG4gICAgICAgICAgICBwYXRoOiBudWxsLFxuICAgICAgICAgICAgY29tcG9uZW50SWQ6IG51bGwsXG4gICAgICAgICAgICBwYXJhbXM6IG51bGxcbiAgICAgICAgfVxuICAgIH0sIGNvbXBvbmVudCk7XG5cbiAgICAvLyBFeHRlbmQgdGhlIHJvdXRpbmctcmVsYXRlZCBtZXRob2RzXG4gICAgXy5leHRlbmQocm91dGVEZWZpbml0aW9uLCByb3V0aW5nKTtcblxuICAgIC8vIG92ZXJyaWRlIHNvbWUgb2YgY29tcG9uZW50cyBtZXRob2RzXG4gICAgXy5leHRlbmQocm91dGVEZWZpbml0aW9uLCBvdmVycmlkZXMpO1xuXG4gICAgVnVlLmRpcmVjdGl2ZSgncm91dGUnLCByb3V0ZURlZmluaXRpb24pO1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS1yb3V0ZS9zcmMvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBoYXNPd25Qcm9wOiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LFxuICAgIHRvU3RyaW5nOiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgIGNvbmNhdDogQXJyYXkucHJvdG90eXBlLmNvbmNhdCxcbiAgICBpc1N0cmluZzogZnVuY3Rpb24oc3RyKSB7XG4gICAgICByZXR1cm4gdGhpcy50b1N0cmluZy5jYWxsKHN0cikudG9Mb3dlckNhc2UoKSA9PSBcIltvYmplY3Qgc3RyaW5nXVwiO1xuICAgIH0sXG4gICAgaXNGdW5jdGlvbjogZnVuY3Rpb24oZm4pIHtcbiAgICAgIHJldHVybiB0aGlzLnRvU3RyaW5nLmNhbGwoZm4pLnRvTG93ZXJDYXNlKCkgPT0gXCJbb2JqZWN0IGZ1bmN0aW9uXVwiO1xuICAgIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlLXJvdXRlL3NyYy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIgIC8qIGdsb2JhbHMgcmVxdWlyZSwgbW9kdWxlICovXG5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICAgKi9cblxuICB2YXIgcGF0aHRvUmVnZXhwID0gcmVxdWlyZSgncGF0aC10by1yZWdleHAnKTtcblxuICAvKipcbiAgICogTW9kdWxlIGV4cG9ydHMuXG4gICAqL1xuXG4gIG1vZHVsZS5leHBvcnRzID0gcGFnZTtcblxuICAvKipcbiAgICogRGV0ZWN0IGNsaWNrIGV2ZW50XG4gICAqL1xuICB2YXIgY2xpY2tFdmVudCA9ICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIGRvY3VtZW50KSAmJiBkb2N1bWVudC5vbnRvdWNoc3RhcnQgPyAndG91Y2hzdGFydCcgOiAnY2xpY2snO1xuXG4gIC8qKlxuICAgKiBUbyB3b3JrIHByb3Blcmx5IHdpdGggdGhlIFVSTFxuICAgKiBoaXN0b3J5LmxvY2F0aW9uIGdlbmVyYXRlZCBwb2x5ZmlsbCBpbiBodHRwczovL2dpdGh1Yi5jb20vZGV2b3RlL0hUTUw1LUhpc3RvcnktQVBJXG4gICAqL1xuXG4gIHZhciBsb2NhdGlvbiA9ICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHdpbmRvdykgJiYgKHdpbmRvdy5oaXN0b3J5LmxvY2F0aW9uIHx8IHdpbmRvdy5sb2NhdGlvbik7XG5cbiAgLyoqXG4gICAqIFBlcmZvcm0gaW5pdGlhbCBkaXNwYXRjaC5cbiAgICovXG5cbiAgdmFyIGRpc3BhdGNoID0gdHJ1ZTtcblxuXG4gIC8qKlxuICAgKiBEZWNvZGUgVVJMIGNvbXBvbmVudHMgKHF1ZXJ5IHN0cmluZywgcGF0aG5hbWUsIGhhc2gpLlxuICAgKiBBY2NvbW1vZGF0ZXMgYm90aCByZWd1bGFyIHBlcmNlbnQgZW5jb2RpbmcgYW5kIHgtd3d3LWZvcm0tdXJsZW5jb2RlZCBmb3JtYXQuXG4gICAqL1xuICB2YXIgZGVjb2RlVVJMQ29tcG9uZW50cyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEJhc2UgcGF0aC5cbiAgICovXG5cbiAgdmFyIGJhc2UgPSAnJztcblxuICAvKipcbiAgICogUnVubmluZyBmbGFnLlxuICAgKi9cblxuICB2YXIgcnVubmluZztcblxuICAvKipcbiAgICogSGFzaEJhbmcgb3B0aW9uXG4gICAqL1xuXG4gIHZhciBoYXNoYmFuZyA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBQcmV2aW91cyBjb250ZXh0LCBmb3IgY2FwdHVyaW5nXG4gICAqIHBhZ2UgZXhpdCBldmVudHMuXG4gICAqL1xuXG4gIHZhciBwcmV2Q29udGV4dDtcblxuICAvKipcbiAgICogUmVnaXN0ZXIgYHBhdGhgIHdpdGggY2FsbGJhY2sgYGZuKClgLFxuICAgKiBvciByb3V0ZSBgcGF0aGAsIG9yIHJlZGlyZWN0aW9uLFxuICAgKiBvciBgcGFnZS5zdGFydCgpYC5cbiAgICpcbiAgICogICBwYWdlKGZuKTtcbiAgICogICBwYWdlKCcqJywgZm4pO1xuICAgKiAgIHBhZ2UoJy91c2VyLzppZCcsIGxvYWQsIHVzZXIpO1xuICAgKiAgIHBhZ2UoJy91c2VyLycgKyB1c2VyLmlkLCB7IHNvbWU6ICd0aGluZycgfSk7XG4gICAqICAgcGFnZSgnL3VzZXIvJyArIHVzZXIuaWQpO1xuICAgKiAgIHBhZ2UoJy9mcm9tJywgJy90bycpXG4gICAqICAgcGFnZSgpO1xuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gcGF0aFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbi4uLlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBmdW5jdGlvbiBwYWdlKHBhdGgsIGZuKSB7XG4gICAgLy8gPGNhbGxiYWNrPlxuICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgcGF0aCkge1xuICAgICAgcmV0dXJuIHBhZ2UoJyonLCBwYXRoKTtcbiAgICB9XG5cbiAgICAvLyByb3V0ZSA8cGF0aD4gdG8gPGNhbGxiYWNrIC4uLj5cbiAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGZuKSB7XG4gICAgICB2YXIgcm91dGUgPSBuZXcgUm91dGUocGF0aCk7XG4gICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7ICsraSkge1xuICAgICAgICBwYWdlLmNhbGxiYWNrcy5wdXNoKHJvdXRlLm1pZGRsZXdhcmUoYXJndW1lbnRzW2ldKSk7XG4gICAgICB9XG4gICAgICAvLyBzaG93IDxwYXRoPiB3aXRoIFtzdGF0ZV1cbiAgICB9IGVsc2UgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgcGF0aCkge1xuICAgICAgcGFnZVsnc3RyaW5nJyA9PT0gdHlwZW9mIGZuID8gJ3JlZGlyZWN0JyA6ICdzaG93J10ocGF0aCwgZm4pO1xuICAgICAgLy8gc3RhcnQgW29wdGlvbnNdXG4gICAgfSBlbHNlIHtcbiAgICAgIHBhZ2Uuc3RhcnQocGF0aCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9ucy5cbiAgICovXG5cbiAgcGFnZS5jYWxsYmFja3MgPSBbXTtcbiAgcGFnZS5leGl0cyA9IFtdO1xuXG4gIC8qKlxuICAgKiBDdXJyZW50IHBhdGggYmVpbmcgcHJvY2Vzc2VkXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqL1xuICBwYWdlLmN1cnJlbnQgPSAnJztcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHBhZ2VzIG5hdmlnYXRlZCB0by5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICpcbiAgICogICAgIHBhZ2UubGVuID09IDA7XG4gICAqICAgICBwYWdlKCcvbG9naW4nKTtcbiAgICogICAgIHBhZ2UubGVuID09IDE7XG4gICAqL1xuXG4gIHBhZ2UubGVuID0gMDtcblxuICAvKipcbiAgICogR2V0IG9yIHNldCBiYXNlcGF0aCB0byBgcGF0aGAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHBhZ2UuYmFzZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICBpZiAoMCA9PT0gYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGJhc2U7XG4gICAgYmFzZSA9IHBhdGg7XG4gIH07XG5cbiAgLyoqXG4gICAqIEJpbmQgd2l0aCB0aGUgZ2l2ZW4gYG9wdGlvbnNgLlxuICAgKlxuICAgKiBPcHRpb25zOlxuICAgKlxuICAgKiAgICAtIGBjbGlja2AgYmluZCB0byBjbGljayBldmVudHMgW3RydWVdXG4gICAqICAgIC0gYHBvcHN0YXRlYCBiaW5kIHRvIHBvcHN0YXRlIFt0cnVlXVxuICAgKiAgICAtIGBkaXNwYXRjaGAgcGVyZm9ybSBpbml0aWFsIGRpc3BhdGNoIFt0cnVlXVxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBwYWdlLnN0YXJ0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGlmIChydW5uaW5nKSByZXR1cm47XG4gICAgcnVubmluZyA9IHRydWU7XG4gICAgaWYgKGZhbHNlID09PSBvcHRpb25zLmRpc3BhdGNoKSBkaXNwYXRjaCA9IGZhbHNlO1xuICAgIGlmIChmYWxzZSA9PT0gb3B0aW9ucy5kZWNvZGVVUkxDb21wb25lbnRzKSBkZWNvZGVVUkxDb21wb25lbnRzID0gZmFsc2U7XG4gICAgaWYgKGZhbHNlICE9PSBvcHRpb25zLnBvcHN0YXRlKSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBvbnBvcHN0YXRlLCBmYWxzZSk7XG4gICAgaWYgKGZhbHNlICE9PSBvcHRpb25zLmNsaWNrKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGNsaWNrRXZlbnQsIG9uY2xpY2ssIGZhbHNlKTtcbiAgICB9XG4gICAgaWYgKHRydWUgPT09IG9wdGlvbnMuaGFzaGJhbmcpIGhhc2hiYW5nID0gdHJ1ZTtcbiAgICBpZiAoIWRpc3BhdGNoKSByZXR1cm47XG4gICAgdmFyIHVybCA9IChoYXNoYmFuZyAmJiB+bG9jYXRpb24uaGFzaC5pbmRleE9mKCcjIScpKSA/IGxvY2F0aW9uLmhhc2guc3Vic3RyKDIpICsgbG9jYXRpb24uc2VhcmNoIDogbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2ggKyBsb2NhdGlvbi5oYXNoO1xuICAgIHBhZ2UucmVwbGFjZSh1cmwsIG51bGwsIHRydWUsIGRpc3BhdGNoKTtcbiAgfTtcblxuICAvKipcbiAgICogVW5iaW5kIGNsaWNrIGFuZCBwb3BzdGF0ZSBldmVudCBoYW5kbGVycy5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgcGFnZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFydW5uaW5nKSByZXR1cm47XG4gICAgcGFnZS5jdXJyZW50ID0gJyc7XG4gICAgcGFnZS5sZW4gPSAwO1xuICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGNsaWNrRXZlbnQsIG9uY2xpY2ssIGZhbHNlKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBvbnBvcHN0YXRlLCBmYWxzZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNob3cgYHBhdGhgIHdpdGggb3B0aW9uYWwgYHN0YXRlYCBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRpc3BhdGNoXG4gICAqIEByZXR1cm4ge0NvbnRleHR9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHBhZ2Uuc2hvdyA9IGZ1bmN0aW9uKHBhdGgsIHN0YXRlLCBkaXNwYXRjaCwgcHVzaCkge1xuICAgIHZhciBjdHggPSBuZXcgQ29udGV4dChwYXRoLCBzdGF0ZSk7XG4gICAgcGFnZS5jdXJyZW50ID0gY3R4LnBhdGg7XG4gICAgaWYgKGZhbHNlICE9PSBkaXNwYXRjaCkgcGFnZS5kaXNwYXRjaChjdHgpO1xuICAgIGlmIChmYWxzZSAhPT0gY3R4LmhhbmRsZWQgJiYgZmFsc2UgIT09IHB1c2gpIGN0eC5wdXNoU3RhdGUoKTtcbiAgICByZXR1cm4gY3R4O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHb2VzIGJhY2sgaW4gdGhlIGhpc3RvcnlcbiAgICogQmFjayBzaG91bGQgYWx3YXlzIGxldCB0aGUgY3VycmVudCByb3V0ZSBwdXNoIHN0YXRlIGFuZCB0aGVuIGdvIGJhY2suXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoIC0gZmFsbGJhY2sgcGF0aCB0byBnbyBiYWNrIGlmIG5vIG1vcmUgaGlzdG9yeSBleGlzdHMsIGlmIHVuZGVmaW5lZCBkZWZhdWx0cyB0byBwYWdlLmJhc2VcbiAgICogQHBhcmFtIHtPYmplY3R9IFtzdGF0ZV1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgcGFnZS5iYWNrID0gZnVuY3Rpb24ocGF0aCwgc3RhdGUpIHtcbiAgICBpZiAocGFnZS5sZW4gPiAwKSB7XG4gICAgICAvLyB0aGlzIG1heSBuZWVkIG1vcmUgdGVzdGluZyB0byBzZWUgaWYgYWxsIGJyb3dzZXJzXG4gICAgICAvLyB3YWl0IGZvciB0aGUgbmV4dCB0aWNrIHRvIGdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAgaGlzdG9yeS5iYWNrKCk7XG4gICAgICBwYWdlLmxlbi0tO1xuICAgIH0gZWxzZSBpZiAocGF0aCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcGFnZS5zaG93KHBhdGgsIHN0YXRlKTtcbiAgICAgIH0pO1xuICAgIH1lbHNle1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcGFnZS5zaG93KGJhc2UsIHN0YXRlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciByb3V0ZSB0byByZWRpcmVjdCBmcm9tIG9uZSBwYXRoIHRvIG90aGVyXG4gICAqIG9yIGp1c3QgcmVkaXJlY3QgdG8gYW5vdGhlciByb3V0ZVxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZnJvbSAtIGlmIHBhcmFtICd0bycgaXMgdW5kZWZpbmVkIHJlZGlyZWN0cyB0byAnZnJvbSdcbiAgICogQHBhcmFtIHtTdHJpbmd9IFt0b11cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHBhZ2UucmVkaXJlY3QgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICAgIC8vIERlZmluZSByb3V0ZSBmcm9tIGEgcGF0aCB0byBhbm90aGVyXG4gICAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgZnJvbSAmJiAnc3RyaW5nJyA9PT0gdHlwZW9mIHRvKSB7XG4gICAgICBwYWdlKGZyb20sIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBwYWdlLnJlcGxhY2UodG8pO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFdhaXQgZm9yIHRoZSBwdXNoIHN0YXRlIGFuZCByZXBsYWNlIGl0IHdpdGggYW5vdGhlclxuICAgIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIGZyb20gJiYgJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiB0bykge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcGFnZS5yZXBsYWNlKGZyb20pO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXBsYWNlIGBwYXRoYCB3aXRoIG9wdGlvbmFsIGBzdGF0ZWAgb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAgICogQHJldHVybiB7Q29udGV4dH1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cblxuICBwYWdlLnJlcGxhY2UgPSBmdW5jdGlvbihwYXRoLCBzdGF0ZSwgaW5pdCwgZGlzcGF0Y2gpIHtcbiAgICB2YXIgY3R4ID0gbmV3IENvbnRleHQocGF0aCwgc3RhdGUpO1xuICAgIHBhZ2UuY3VycmVudCA9IGN0eC5wYXRoO1xuICAgIGN0eC5pbml0ID0gaW5pdDtcbiAgICBjdHguc2F2ZSgpOyAvLyBzYXZlIGJlZm9yZSBkaXNwYXRjaGluZywgd2hpY2ggbWF5IHJlZGlyZWN0XG4gICAgaWYgKGZhbHNlICE9PSBkaXNwYXRjaCkgcGFnZS5kaXNwYXRjaChjdHgpO1xuICAgIHJldHVybiBjdHg7XG4gIH07XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoIHRoZSBnaXZlbiBgY3R4YC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGN0eFxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG5cbiAgcGFnZS5kaXNwYXRjaCA9IGZ1bmN0aW9uKGN0eCkge1xuICAgIHZhciBwcmV2ID0gcHJldkNvbnRleHQsXG4gICAgICBpID0gMCxcbiAgICAgIGogPSAwO1xuXG4gICAgcHJldkNvbnRleHQgPSBjdHg7XG5cbiAgICBmdW5jdGlvbiBuZXh0RXhpdCgpIHtcbiAgICAgIHZhciBmbiA9IHBhZ2UuZXhpdHNbaisrXTtcbiAgICAgIGlmICghZm4pIHJldHVybiBuZXh0RW50ZXIoKTtcbiAgICAgIGZuKHByZXYsIG5leHRFeGl0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXh0RW50ZXIoKSB7XG4gICAgICB2YXIgZm4gPSBwYWdlLmNhbGxiYWNrc1tpKytdO1xuXG4gICAgICBpZiAoY3R4LnBhdGggIT09IHBhZ2UuY3VycmVudCkge1xuICAgICAgICBjdHguaGFuZGxlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIWZuKSByZXR1cm4gdW5oYW5kbGVkKGN0eCk7XG4gICAgICBmbihjdHgsIG5leHRFbnRlcik7XG4gICAgfVxuXG4gICAgaWYgKHByZXYpIHtcbiAgICAgIG5leHRFeGl0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRFbnRlcigpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVW5oYW5kbGVkIGBjdHhgLiBXaGVuIGl0J3Mgbm90IHRoZSBpbml0aWFsXG4gICAqIHBvcHN0YXRlIHRoZW4gcmVkaXJlY3QuIElmIHlvdSB3aXNoIHRvIGhhbmRsZVxuICAgKiA0MDRzIG9uIHlvdXIgb3duIHVzZSBgcGFnZSgnKicsIGNhbGxiYWNrKWAuXG4gICAqXG4gICAqIEBwYXJhbSB7Q29udGV4dH0gY3R4XG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBmdW5jdGlvbiB1bmhhbmRsZWQoY3R4KSB7XG4gICAgaWYgKGN0eC5oYW5kbGVkKSByZXR1cm47XG4gICAgdmFyIGN1cnJlbnQ7XG5cbiAgICBpZiAoaGFzaGJhbmcpIHtcbiAgICAgIGN1cnJlbnQgPSBiYXNlICsgbG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjIScsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudCA9IGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50ID09PSBjdHguY2Fub25pY2FsUGF0aCkgcmV0dXJuO1xuICAgIHBhZ2Uuc3RvcCgpO1xuICAgIGN0eC5oYW5kbGVkID0gZmFsc2U7XG4gICAgbG9jYXRpb24uaHJlZiA9IGN0eC5jYW5vbmljYWxQYXRoO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGFuIGV4aXQgcm91dGUgb24gYHBhdGhgIHdpdGhcbiAgICogY2FsbGJhY2sgYGZuKClgLCB3aGljaCB3aWxsIGJlIGNhbGxlZFxuICAgKiBvbiB0aGUgcHJldmlvdXMgY29udGV4dCB3aGVuIGEgbmV3XG4gICAqIHBhZ2UgaXMgdmlzaXRlZC5cbiAgICovXG4gIHBhZ2UuZXhpdCA9IGZ1bmN0aW9uKHBhdGgsIGZuKSB7XG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gcGFnZS5leGl0KCcqJywgcGF0aCk7XG4gICAgfVxuXG4gICAgdmFyIHJvdXRlID0gbmV3IFJvdXRlKHBhdGgpO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICBwYWdlLmV4aXRzLnB1c2gocm91dGUubWlkZGxld2FyZShhcmd1bWVudHNbaV0pKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBVUkwgZW5jb2RpbmcgZnJvbSB0aGUgZ2l2ZW4gYHN0cmAuXG4gICAqIEFjY29tbW9kYXRlcyB3aGl0ZXNwYWNlIGluIGJvdGggeC13d3ctZm9ybS11cmxlbmNvZGVkXG4gICAqIGFuZCByZWd1bGFyIHBlcmNlbnQtZW5jb2RlZCBmb3JtLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cn0gVVJMIGNvbXBvbmVudCB0byBkZWNvZGVcbiAgICovXG4gIGZ1bmN0aW9uIGRlY29kZVVSTEVuY29kZWRVUklDb21wb25lbnQodmFsKSB7XG4gICAgaWYgKHR5cGVvZiB2YWwgIT09ICdzdHJpbmcnKSB7IHJldHVybiB2YWw7IH1cbiAgICByZXR1cm4gZGVjb2RlVVJMQ29tcG9uZW50cyA/IGRlY29kZVVSSUNvbXBvbmVudCh2YWwucmVwbGFjZSgvXFwrL2csICcgJykpIDogdmFsO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYSBuZXcgXCJyZXF1ZXN0XCIgYENvbnRleHRgXG4gICAqIHdpdGggdGhlIGdpdmVuIGBwYXRoYCBhbmQgb3B0aW9uYWwgaW5pdGlhbCBgc3RhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZnVuY3Rpb24gQ29udGV4dChwYXRoLCBzdGF0ZSkge1xuICAgIGlmICgnLycgPT09IHBhdGhbMF0gJiYgMCAhPT0gcGF0aC5pbmRleE9mKGJhc2UpKSBwYXRoID0gYmFzZSArIChoYXNoYmFuZyA/ICcjIScgOiAnJykgKyBwYXRoO1xuICAgIHZhciBpID0gcGF0aC5pbmRleE9mKCc/Jyk7XG5cbiAgICB0aGlzLmNhbm9uaWNhbFBhdGggPSBwYXRoO1xuICAgIHRoaXMucGF0aCA9IHBhdGgucmVwbGFjZShiYXNlLCAnJykgfHwgJy8nO1xuICAgIGlmIChoYXNoYmFuZykgdGhpcy5wYXRoID0gdGhpcy5wYXRoLnJlcGxhY2UoJyMhJywgJycpIHx8ICcvJztcblxuICAgIHRoaXMudGl0bGUgPSBkb2N1bWVudC50aXRsZTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGUgfHwge307XG4gICAgdGhpcy5zdGF0ZS5wYXRoID0gcGF0aDtcbiAgICB0aGlzLnF1ZXJ5c3RyaW5nID0gfmkgPyBkZWNvZGVVUkxFbmNvZGVkVVJJQ29tcG9uZW50KHBhdGguc2xpY2UoaSArIDEpKSA6ICcnO1xuICAgIHRoaXMucGF0aG5hbWUgPSBkZWNvZGVVUkxFbmNvZGVkVVJJQ29tcG9uZW50KH5pID8gcGF0aC5zbGljZSgwLCBpKSA6IHBhdGgpO1xuICAgIHRoaXMucGFyYW1zID0ge307XG5cbiAgICAvLyBmcmFnbWVudFxuICAgIHRoaXMuaGFzaCA9ICcnO1xuICAgIGlmICghaGFzaGJhbmcpIHtcbiAgICAgIGlmICghfnRoaXMucGF0aC5pbmRleE9mKCcjJykpIHJldHVybjtcbiAgICAgIHZhciBwYXJ0cyA9IHRoaXMucGF0aC5zcGxpdCgnIycpO1xuICAgICAgdGhpcy5wYXRoID0gcGFydHNbMF07XG4gICAgICB0aGlzLmhhc2ggPSBkZWNvZGVVUkxFbmNvZGVkVVJJQ29tcG9uZW50KHBhcnRzWzFdKSB8fCAnJztcbiAgICAgIHRoaXMucXVlcnlzdHJpbmcgPSB0aGlzLnF1ZXJ5c3RyaW5nLnNwbGl0KCcjJylbMF07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9zZSBgQ29udGV4dGAuXG4gICAqL1xuXG4gIHBhZ2UuQ29udGV4dCA9IENvbnRleHQ7XG5cbiAgLyoqXG4gICAqIFB1c2ggc3RhdGUuXG4gICAqXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBDb250ZXh0LnByb3RvdHlwZS5wdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBwYWdlLmxlbisrO1xuICAgIGhpc3RvcnkucHVzaFN0YXRlKHRoaXMuc3RhdGUsIHRoaXMudGl0bGUsIGhhc2hiYW5nICYmIHRoaXMucGF0aCAhPT0gJy8nID8gJyMhJyArIHRoaXMucGF0aCA6IHRoaXMuY2Fub25pY2FsUGF0aCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNhdmUgdGhlIGNvbnRleHQgc3RhdGUuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIENvbnRleHQucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbigpIHtcbiAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh0aGlzLnN0YXRlLCB0aGlzLnRpdGxlLCBoYXNoYmFuZyAmJiB0aGlzLnBhdGggIT09ICcvJyA/ICcjIScgKyB0aGlzLnBhdGggOiB0aGlzLmNhbm9uaWNhbFBhdGgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGBSb3V0ZWAgd2l0aCB0aGUgZ2l2ZW4gSFRUUCBgcGF0aGAsXG4gICAqIGFuZCBhbiBhcnJheSBvZiBgY2FsbGJhY2tzYCBhbmQgYG9wdGlvbnNgLlxuICAgKlxuICAgKiBPcHRpb25zOlxuICAgKlxuICAgKiAgIC0gYHNlbnNpdGl2ZWAgICAgZW5hYmxlIGNhc2Utc2Vuc2l0aXZlIHJvdXRlc1xuICAgKiAgIC0gYHN0cmljdGAgICAgICAgZW5hYmxlIHN0cmljdCBtYXRjaGluZyBmb3IgdHJhaWxpbmcgc2xhc2hlc1xuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuXG4gIGZ1bmN0aW9uIFJvdXRlKHBhdGgsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB0aGlzLnBhdGggPSAocGF0aCA9PT0gJyonKSA/ICcoLiopJyA6IHBhdGg7XG4gICAgdGhpcy5tZXRob2QgPSAnR0VUJztcbiAgICB0aGlzLnJlZ2V4cCA9IHBhdGh0b1JlZ2V4cCh0aGlzLnBhdGgsXG4gICAgICB0aGlzLmtleXMgPSBbXSxcbiAgICAgIG9wdGlvbnMuc2Vuc2l0aXZlLFxuICAgICAgb3B0aW9ucy5zdHJpY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4cG9zZSBgUm91dGVgLlxuICAgKi9cblxuICBwYWdlLlJvdXRlID0gUm91dGU7XG5cbiAgLyoqXG4gICAqIFJldHVybiByb3V0ZSBtaWRkbGV3YXJlIHdpdGhcbiAgICogdGhlIGdpdmVuIGNhbGxiYWNrIGBmbigpYC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIFJvdXRlLnByb3RvdHlwZS5taWRkbGV3YXJlID0gZnVuY3Rpb24oZm4pIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGN0eCwgbmV4dCkge1xuICAgICAgaWYgKHNlbGYubWF0Y2goY3R4LnBhdGgsIGN0eC5wYXJhbXMpKSByZXR1cm4gZm4oY3R4LCBuZXh0KTtcbiAgICAgIG5leHQoKTtcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGlzIHJvdXRlIG1hdGNoZXMgYHBhdGhgLCBpZiBzb1xuICAgKiBwb3B1bGF0ZSBgcGFyYW1zYC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG5cbiAgUm91dGUucHJvdG90eXBlLm1hdGNoID0gZnVuY3Rpb24ocGF0aCwgcGFyYW1zKSB7XG4gICAgdmFyIGtleXMgPSB0aGlzLmtleXMsXG4gICAgICBxc0luZGV4ID0gcGF0aC5pbmRleE9mKCc/JyksXG4gICAgICBwYXRobmFtZSA9IH5xc0luZGV4ID8gcGF0aC5zbGljZSgwLCBxc0luZGV4KSA6IHBhdGgsXG4gICAgICBtID0gdGhpcy5yZWdleHAuZXhlYyhkZWNvZGVVUklDb21wb25lbnQocGF0aG5hbWUpKTtcblxuICAgIGlmICghbSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yICh2YXIgaSA9IDEsIGxlbiA9IG0ubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgIHZhciB2YWwgPSBkZWNvZGVVUkxFbmNvZGVkVVJJQ29tcG9uZW50KG1baV0pO1xuICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkIHx8ICEoaGFzT3duUHJvcGVydHkuY2FsbChwYXJhbXMsIGtleS5uYW1lKSkpIHtcbiAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuXG4gIC8qKlxuICAgKiBIYW5kbGUgXCJwb3B1bGF0ZVwiIGV2ZW50cy5cbiAgICovXG5cbiAgdmFyIG9ucG9wc3RhdGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBsb2FkZWQgPSBmYWxzZTtcbiAgICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiB3aW5kb3cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG9ucG9wc3RhdGUoZSkge1xuICAgICAgaWYgKCFsb2FkZWQpIHJldHVybjtcbiAgICAgIGlmIChlLnN0YXRlKSB7XG4gICAgICAgIHZhciBwYXRoID0gZS5zdGF0ZS5wYXRoO1xuICAgICAgICBwYWdlLnJlcGxhY2UocGF0aCwgZS5zdGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWdlLnNob3cobG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5oYXNoLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCk7XG4gIC8qKlxuICAgKiBIYW5kbGUgXCJjbGlja1wiIGV2ZW50cy5cbiAgICovXG5cbiAgZnVuY3Rpb24gb25jbGljayhlKSB7XG5cbiAgICBpZiAoMSAhPT0gd2hpY2goZSkpIHJldHVybjtcblxuICAgIGlmIChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5IHx8IGUuc2hpZnRLZXkpIHJldHVybjtcbiAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkKSByZXR1cm47XG5cblxuXG4gICAgLy8gZW5zdXJlIGxpbmtcbiAgICB2YXIgZWwgPSBlLnRhcmdldDtcbiAgICB3aGlsZSAoZWwgJiYgJ0EnICE9PSBlbC5ub2RlTmFtZSkgZWwgPSBlbC5wYXJlbnROb2RlO1xuICAgIGlmICghZWwgfHwgJ0EnICE9PSBlbC5ub2RlTmFtZSkgcmV0dXJuO1xuXG5cblxuICAgIC8vIElnbm9yZSBpZiB0YWcgaGFzXG4gICAgLy8gMS4gXCJkb3dubG9hZFwiIGF0dHJpYnV0ZVxuICAgIC8vIDIuIHJlbD1cImV4dGVybmFsXCIgYXR0cmlidXRlXG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZG93bmxvYWQnKSB8fCBlbC5nZXRBdHRyaWJ1dGUoJ3JlbCcpID09PSAnZXh0ZXJuYWwnKSByZXR1cm47XG5cbiAgICAvLyBlbnN1cmUgbm9uLWhhc2ggZm9yIHRoZSBzYW1lIHBhdGhcbiAgICB2YXIgbGluayA9IGVsLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgIGlmICghaGFzaGJhbmcgJiYgZWwucGF0aG5hbWUgPT09IGxvY2F0aW9uLnBhdGhuYW1lICYmIChlbC5oYXNoIHx8ICcjJyA9PT0gbGluaykpIHJldHVybjtcblxuXG5cbiAgICAvLyBDaGVjayBmb3IgbWFpbHRvOiBpbiB0aGUgaHJlZlxuICAgIGlmIChsaW5rICYmIGxpbmsuaW5kZXhPZignbWFpbHRvOicpID4gLTEpIHJldHVybjtcblxuICAgIC8vIGNoZWNrIHRhcmdldFxuICAgIGlmIChlbC50YXJnZXQpIHJldHVybjtcblxuICAgIC8vIHgtb3JpZ2luXG4gICAgaWYgKCFzYW1lT3JpZ2luKGVsLmhyZWYpKSByZXR1cm47XG5cblxuXG4gICAgLy8gcmVidWlsZCBwYXRoXG4gICAgdmFyIHBhdGggPSBlbC5wYXRobmFtZSArIGVsLnNlYXJjaCArIChlbC5oYXNoIHx8ICcnKTtcblxuICAgIC8vIHN0cmlwIGxlYWRpbmcgXCIvW2RyaXZlIGxldHRlcl06XCIgb24gTlcuanMgb24gV2luZG93c1xuICAgIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcGF0aC5tYXRjaCgvXlxcL1thLXpBLVpdOlxcLy8pKSB7XG4gICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9eXFwvW2EtekEtWl06XFwvLywgJy8nKTtcbiAgICB9XG5cbiAgICAvLyBzYW1lIHBhZ2VcbiAgICB2YXIgb3JpZyA9IHBhdGg7XG5cbiAgICBpZiAocGF0aC5pbmRleE9mKGJhc2UpID09PSAwKSB7XG4gICAgICBwYXRoID0gcGF0aC5zdWJzdHIoYmFzZS5sZW5ndGgpO1xuICAgIH1cblxuICAgIGlmIChoYXNoYmFuZykgcGF0aCA9IHBhdGgucmVwbGFjZSgnIyEnLCAnJyk7XG5cbiAgICBpZiAoYmFzZSAmJiBvcmlnID09PSBwYXRoKSByZXR1cm47XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcGFnZS5zaG93KG9yaWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGJ1dHRvbi5cbiAgICovXG5cbiAgZnVuY3Rpb24gd2hpY2goZSkge1xuICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICByZXR1cm4gbnVsbCA9PT0gZS53aGljaCA/IGUuYnV0dG9uIDogZS53aGljaDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBgaHJlZmAgaXMgdGhlIHNhbWUgb3JpZ2luLlxuICAgKi9cblxuICBmdW5jdGlvbiBzYW1lT3JpZ2luKGhyZWYpIHtcbiAgICB2YXIgb3JpZ2luID0gbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdG5hbWU7XG4gICAgaWYgKGxvY2F0aW9uLnBvcnQpIG9yaWdpbiArPSAnOicgKyBsb2NhdGlvbi5wb3J0O1xuICAgIHJldHVybiAoaHJlZiAmJiAoMCA9PT0gaHJlZi5pbmRleE9mKG9yaWdpbikpKTtcbiAgfVxuXG4gIHBhZ2Uuc2FtZU9yaWdpbiA9IHNhbWVPcmlnaW47XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUtcm91dGUvfi9wYWdlL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbm9kZS1saWJzLWJyb3dzZXIvfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA3OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5Jyk7XG5cbi8qKlxuICogRXhwb3NlIGBwYXRoVG9SZWdleHBgLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHBhdGhUb1JlZ2V4cDtcblxuLyoqXG4gKiBUaGUgbWFpbiBwYXRoIG1hdGNoaW5nIHJlZ2V4cCB1dGlsaXR5LlxuICpcbiAqIEB0eXBlIHtSZWdFeHB9XG4gKi9cbnZhciBQQVRIX1JFR0VYUCA9IG5ldyBSZWdFeHAoW1xuICAvLyBNYXRjaCBlc2NhcGVkIGNoYXJhY3RlcnMgdGhhdCB3b3VsZCBvdGhlcndpc2UgYXBwZWFyIGluIGZ1dHVyZSBtYXRjaGVzLlxuICAvLyBUaGlzIGFsbG93cyB0aGUgdXNlciB0byBlc2NhcGUgc3BlY2lhbCBjaGFyYWN0ZXJzIHRoYXQgd29uJ3QgdHJhbnNmb3JtLlxuICAnKFxcXFxcXFxcLiknLFxuICAvLyBNYXRjaCBFeHByZXNzLXN0eWxlIHBhcmFtZXRlcnMgYW5kIHVuLW5hbWVkIHBhcmFtZXRlcnMgd2l0aCBhIHByZWZpeFxuICAvLyBhbmQgb3B0aW9uYWwgc3VmZml4ZXMuIE1hdGNoZXMgYXBwZWFyIGFzOlxuICAvL1xuICAvLyBcIi86dGVzdChcXFxcZCspP1wiID0+IFtcIi9cIiwgXCJ0ZXN0XCIsIFwiXFxkK1wiLCB1bmRlZmluZWQsIFwiP1wiXVxuICAvLyBcIi9yb3V0ZShcXFxcZCspXCIgPT4gW3VuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIFwiXFxkK1wiLCB1bmRlZmluZWRdXG4gICcoW1xcXFwvLl0pPyg/OlxcXFw6KFxcXFx3KykoPzpcXFxcKCgoPzpcXFxcXFxcXC58W14pXSkqKVxcXFwpKT98XFxcXCgoKD86XFxcXFxcXFwufFteKV0pKilcXFxcKSkoWysqP10pPycsXG4gIC8vIE1hdGNoIHJlZ2V4cCBzcGVjaWFsIGNoYXJhY3RlcnMgdGhhdCBhcmUgYWx3YXlzIGVzY2FwZWQuXG4gICcoWy4rKj89XiE6JHt9KClbXFxcXF18XFxcXC9dKSdcbl0uam9pbignfCcpLCAnZycpO1xuXG4vKipcbiAqIEVzY2FwZSB0aGUgY2FwdHVyaW5nIGdyb3VwIGJ5IGVzY2FwaW5nIHNwZWNpYWwgY2hhcmFjdGVycyBhbmQgbWVhbmluZy5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGdyb3VwXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVzY2FwZUdyb3VwIChncm91cCkge1xuICByZXR1cm4gZ3JvdXAucmVwbGFjZSgvKFs9ITokXFwvKCldKS9nLCAnXFxcXCQxJyk7XG59XG5cbi8qKlxuICogQXR0YWNoIHRoZSBrZXlzIGFzIGEgcHJvcGVydHkgb2YgdGhlIHJlZ2V4cC5cbiAqXG4gKiBAcGFyYW0gIHtSZWdFeHB9IHJlXG4gKiBAcGFyYW0gIHtBcnJheX0gIGtleXNcbiAqIEByZXR1cm4ge1JlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXR0YWNoS2V5cyAocmUsIGtleXMpIHtcbiAgcmUua2V5cyA9IGtleXM7XG4gIHJldHVybiByZTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBmbGFncyAob3B0aW9ucykge1xuICByZXR1cm4gb3B0aW9ucy5zZW5zaXRpdmUgPyAnJyA6ICdpJztcbn1cblxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKlxuICogQHBhcmFtICB7UmVnRXhwfSBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheX0gIGtleXNcbiAqIEByZXR1cm4ge1JlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAgKHBhdGgsIGtleXMpIHtcbiAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuXG4gIGlmIChncm91cHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgbmFtZTogICAgICBpLFxuICAgICAgICBkZWxpbWl0ZXI6IG51bGwsXG4gICAgICAgIG9wdGlvbmFsOiAgZmFsc2UsXG4gICAgICAgIHJlcGVhdDogICAgZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKHBhdGgsIGtleXMpO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICpcbiAqIEBwYXJhbSAge0FycmF5fSAgcGF0aFxuICogQHBhcmFtICB7QXJyYXl9ICBrZXlzXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge1JlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cCAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICB2YXIgcGFydHMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICBwYXJ0cy5wdXNoKHBhdGhUb1JlZ2V4cChwYXRoW2ldLCBrZXlzLCBvcHRpb25zKS5zb3VyY2UpO1xuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IG5ldyBSZWdFeHAoJyg/OicgKyBwYXJ0cy5qb2luKCd8JykgKyAnKScsIGZsYWdzKG9wdGlvbnMpKTtcbiAgcmV0dXJuIGF0dGFjaEtleXMocmVnZXhwLCBrZXlzKTtcbn1cblxuLyoqXG4gKiBSZXBsYWNlIHRoZSBzcGVjaWZpYyB0YWdzIHdpdGggcmVnZXhwIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheX0gIGtleXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gcmVwbGFjZVBhdGggKHBhdGgsIGtleXMpIHtcbiAgdmFyIGluZGV4ID0gMDtcblxuICBmdW5jdGlvbiByZXBsYWNlIChfLCBlc2NhcGVkLCBwcmVmaXgsIGtleSwgY2FwdHVyZSwgZ3JvdXAsIHN1ZmZpeCwgZXNjYXBlKSB7XG4gICAgaWYgKGVzY2FwZWQpIHtcbiAgICAgIHJldHVybiBlc2NhcGVkO1xuICAgIH1cblxuICAgIGlmIChlc2NhcGUpIHtcbiAgICAgIHJldHVybiAnXFxcXCcgKyBlc2NhcGU7XG4gICAgfVxuXG4gICAgdmFyIHJlcGVhdCAgID0gc3VmZml4ID09PSAnKycgfHwgc3VmZml4ID09PSAnKic7XG4gICAgdmFyIG9wdGlvbmFsID0gc3VmZml4ID09PSAnPycgfHwgc3VmZml4ID09PSAnKic7XG5cbiAgICBrZXlzLnB1c2goe1xuICAgICAgbmFtZTogICAgICBrZXkgfHwgaW5kZXgrKyxcbiAgICAgIGRlbGltaXRlcjogcHJlZml4IHx8ICcvJyxcbiAgICAgIG9wdGlvbmFsOiAgb3B0aW9uYWwsXG4gICAgICByZXBlYXQ6ICAgIHJlcGVhdFxuICAgIH0pO1xuXG4gICAgcHJlZml4ID0gcHJlZml4ID8gKCdcXFxcJyArIHByZWZpeCkgOiAnJztcbiAgICBjYXB0dXJlID0gZXNjYXBlR3JvdXAoY2FwdHVyZSB8fCBncm91cCB8fCAnW14nICsgKHByZWZpeCB8fCAnXFxcXC8nKSArICddKz8nKTtcblxuICAgIGlmIChyZXBlYXQpIHtcbiAgICAgIGNhcHR1cmUgPSBjYXB0dXJlICsgJyg/OicgKyBwcmVmaXggKyBjYXB0dXJlICsgJykqJztcbiAgICB9XG5cbiAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgIHJldHVybiAnKD86JyArIHByZWZpeCArICcoJyArIGNhcHR1cmUgKyAnKSk/JztcbiAgICB9XG5cbiAgICAvLyBCYXNpYyBwYXJhbWV0ZXIgc3VwcG9ydC5cbiAgICByZXR1cm4gcHJlZml4ICsgJygnICsgY2FwdHVyZSArICcpJztcbiAgfVxuXG4gIHJldHVybiBwYXRoLnJlcGxhY2UoUEFUSF9SRUdFWFAsIHJlcGxhY2UpO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKlxuICogQHBhcmFtICB7KFN0cmluZ3xSZWdFeHB8QXJyYXkpfSBwYXRoXG4gKiBAcGFyYW0gIHtBcnJheX0gICAgICAgICAgICAgICAgIFtrZXlzXVxuICogQHBhcmFtICB7T2JqZWN0fSAgICAgICAgICAgICAgICBbb3B0aW9uc11cbiAqIEByZXR1cm4ge1JlZ0V4cH1cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwIChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gIGtleXMgPSBrZXlzIHx8IFtdO1xuXG4gIGlmICghaXNBcnJheShrZXlzKSkge1xuICAgIG9wdGlvbnMgPSBrZXlzO1xuICAgIGtleXMgPSBbXTtcbiAgfSBlbHNlIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkocGF0aCkpIHtcbiAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgfVxuXG4gIHZhciBzdHJpY3QgPSBvcHRpb25zLnN0cmljdDtcbiAgdmFyIGVuZCA9IG9wdGlvbnMuZW5kICE9PSBmYWxzZTtcbiAgdmFyIHJvdXRlID0gcmVwbGFjZVBhdGgocGF0aCwga2V5cyk7XG4gIHZhciBlbmRzV2l0aFNsYXNoID0gcGF0aC5jaGFyQXQocGF0aC5sZW5ndGggLSAxKSA9PT0gJy8nO1xuXG4gIC8vIEluIG5vbi1zdHJpY3QgbW9kZSB3ZSBhbGxvdyBhIHNsYXNoIGF0IHRoZSBlbmQgb2YgbWF0Y2guIElmIHRoZSBwYXRoIHRvXG4gIC8vIG1hdGNoIGFscmVhZHkgZW5kcyB3aXRoIGEgc2xhc2gsIHdlIHJlbW92ZSBpdCBmb3IgY29uc2lzdGVuY3kuIFRoZSBzbGFzaFxuICAvLyBpcyB2YWxpZCBhdCB0aGUgZW5kIG9mIGEgcGF0aCBtYXRjaCwgbm90IGluIHRoZSBtaWRkbGUuIFRoaXMgaXMgaW1wb3J0YW50XG4gIC8vIGluIG5vbi1lbmRpbmcgbW9kZSwgd2hlcmUgXCIvdGVzdC9cIiBzaG91bGRuJ3QgbWF0Y2ggXCIvdGVzdC8vcm91dGVcIi5cbiAgaWYgKCFzdHJpY3QpIHtcbiAgICByb3V0ZSA9IChlbmRzV2l0aFNsYXNoID8gcm91dGUuc2xpY2UoMCwgLTIpIDogcm91dGUpICsgJyg/OlxcXFwvKD89JCkpPyc7XG4gIH1cblxuICBpZiAoZW5kKSB7XG4gICAgcm91dGUgKz0gJyQnO1xuICB9IGVsc2Uge1xuICAgIC8vIEluIG5vbi1lbmRpbmcgbW9kZSwgd2UgbmVlZCB0aGUgY2FwdHVyaW5nIGdyb3VwcyB0byBtYXRjaCBhcyBtdWNoIGFzXG4gICAgLy8gcG9zc2libGUgYnkgdXNpbmcgYSBwb3NpdGl2ZSBsb29rYWhlYWQgdG8gdGhlIGVuZCBvciBuZXh0IHBhdGggc2VnbWVudC5cbiAgICByb3V0ZSArPSBzdHJpY3QgJiYgZW5kc1dpdGhTbGFzaCA/ICcnIDogJyg/PVxcXFwvfCQpJztcbiAgfVxuXG4gIHJldHVybiBhdHRhY2hLZXlzKG5ldyBSZWdFeHAoJ14nICsgcm91dGUsIGZsYWdzKG9wdGlvbnMpKSwga2V5cyk7XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUtcm91dGUvfi9wYWdlL34vcGF0aC10by1yZWdleHAvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA4MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlLXJvdXRlL34vcGFnZS9+L3BhdGgtdG8tcmVnZXhwL34vaXNhcnJheS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbi8qXG4gICAgT3ZlcnJpZGVzIGZvciAoc29tZSBvZikgdi1jb21wb25lbnQgbWV0aG9kc1xuICovXG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihWdWUpIHtcbiAgICB2YXIgY29tcG9uZW50ID0gVnVlLmRpcmVjdGl2ZSgnX2NvbXBvbmVudCcpLFxuICAgICAgICBfID0gVnVlLnV0aWwsXG4gICAgICAgIHBhcnNlcnMgPSBWdWUucGFyc2VycztcblxuICAgIHJldHVybiB7XG4gICAgICAgIGJpbmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gRm9yY2UgZHluYW1pYyBkaXJlY3RpdmVcbiAgICAgICAgICAgIHRoaXMuX2lzRHluYW1pY0xpdGVyYWwgPSB0cnVlO1xuICAgICAgICAgICAgY29tcG9uZW50LmJpbmQuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlc29sdmVDdG9yOiBmdW5jdGlvbihpZCwgY2IpIHtcbiAgICAgICAgICAgIGlmKCFpZC5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgICAgIGNvbXBvbmVudC5yZXNvbHZlQ3Rvci5jYWxsKHRoaXMsIGlkLCBjYik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLypcbiAgICAgICAgICBUaGlzIG9uZSBpcyBjb3BpZWQvcGFzdGVkIGZyb20gdGhlIHNvdXJjZVxuICAgICAgICAgIGV4Y2VwdCB0aGUgcm91dGVQYXJhbXMgcGFydCAobm8gd2F5IHRvIG92ZXJyaWRlIGl0IGNsZWFubHkgOi8pXG4gICAgICAgICAqL1xuICAgICAgICBidWlsZDogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgdmFyIHJvdXRlRGF0YSA9IHRoaXMucm91dGVzW3RoaXMubG9jYXRpb24ucmVnZXhwXS5kYXRhO1xuXG4gICAgICAgICAgICAvLyBUaGUgJ2RhdGEnIGZ1bmN0aW9uIHNob3VsZCB1c2UgdGhlIHBhc3NlZCBvbmUsIGlmIGFueSxcbiAgICAgICAgICAgIC8vIGFuZCBnZXQgbWVyZ2VkIHdpdGggYW55IGRhdGEgcGFzc2VkIHRvIHRoZSBwbHVnaW4gZm9yIHRoaXMgcm91dGUsXG4gICAgICAgICAgICAvLyBhcyB3ZWxsIGFzIHRoZSByb3V0ZXIgcGFyYW1zIChHRVQgcGFyYW1zKVxuICAgICAgICAgICAgdmFyIGNvbXBEYXRhID0gXy5leHRlbmQoe30sIGRhdGEpO1xuICAgICAgICAgICAgY29tcERhdGEgPSBfLmV4dGVuZChjb21wRGF0YSwgKHV0aWxzLmlzRnVuY3Rpb24ocm91dGVEYXRhKSA/IHJvdXRlRGF0YSgpIDogcm91dGVEYXRhKSB8fCB7fSk7XG4gICAgICAgICAgICBjb21wRGF0YSA9IF8uZXh0ZW5kKGNvbXBEYXRhLCB7XG4gICAgICAgICAgICAgICAgJHJvdXRlUGFyYW1zOiB0aGlzLmxvY2F0aW9uLnBhcmFtc1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMua2VlcEFsaXZlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhY2hlZCA9IHRoaXMuY2FjaGVbdGhpcy5jdG9ySWRdO1xuICAgICAgICAgICAgICAgIGlmKGNhY2hlZCkge1xuICAgICAgICAgICAgICAgICAgICBfLmV4dGVuZChjYWNoZWQuJGRhdGEsIGNvbXBEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB2bSA9IHRoaXMudm07XG4gICAgICAgICAgICB2YXIgZWwgPSBwYXJzZXJzLnRlbXBsYXRlLmNsb25lKHRoaXMuZWwpO1xuXG4gICAgICAgICAgICBpZih0aGlzLkN0b3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSB2bS4kYWRkQ2hpbGQoe1xuICAgICAgICAgICAgICAgICAgICBlbDogZWwsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBEYXRhO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy50ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgbm8gaW5saW5lLXRlbXBsYXRlLCB0aGVuIHRoZSBjb21waWxlZFxuICAgICAgICAgICAgICAgICAgICAvLyBsaW5rZXIgY2FuIGJlIGNhY2hlZCBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlLlxuICAgICAgICAgICAgICAgICAgICBfbGlua2VyQ2FjaGFibGU6ICF0aGlzLnRlbXBsYXRlLFxuICAgICAgICAgICAgICAgICAgICBfYXNDb21wb25lbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIF9ob3N0OiB0aGlzLl9ob3N0LFxuICAgICAgICAgICAgICAgICAgICBfaXNSb3V0ZXJWaWV3OiB0aGlzLl9pc1JvdXRlclZpZXdcbiAgICAgICAgICAgICAgICB9LCB0aGlzLkN0b3IpO1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5rZWVwQWxpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWNoZVt0aGlzLmN0b3JJZF0gPSBjaGlsZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS1yb3V0ZS9zcmMvb3ZlcnJpZGVzLmpzXG4gKiogbW9kdWxlIGlkID0gODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuLypcbiAgICBSb3V0aW5nIEFQSVxuICAgIE1ldGhvZHMgZm9yIGhhbmRsaW5nIHRoZSByb3V0ZSBjaGFuZ2VcbiAgICBhbmQgdHJpZ2dlciB0aGUgZGlyZWN0aXZlIHVwZGF0ZVxuKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihWdWUsIHBhZ2UsIHV0aWxzKSB7XG4gICAgdmFyIF8gPSBWdWUudXRpbDtcblxuICAgIC8qXG4gICAgICAgIEFsbG93IHRvIG1hbnVhbGx5IG5hdmlnYXRlIHRvIGEgcGF0aC5cbiAgICAgICAgVXNlZnVsIGlmIHlvdSBwYXNzZWQgdGhlIGBjbGljazogZmFsc2VgIG9wdGlvbi5cbiAgICAgKi9cbiAgICBWdWUubmF2aWdhdGUgPSBmdW5jdGlvbihwYXRoLCB0cmlnZ2VyKSB7XG4gICAgICAgIHBhZ2Uuc2hvdyhwYXRoLCBudWxsLCB0cmlnZ2VyICE9PSBmYWxzZSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8qXG4gICAgICAgICAgICAgIExpbmsgdGhlIHJvdXRlcyBkZWNsYXJhdGlvblxuICAgICAgICAgICAqL1xuICAgICAgICAgIHRoaXMucm91dGVzID0gdGhpcy52bS4kcm9vdC4kb3B0aW9ucy5yb3V0ZXM7XG4gICAgICAgICAgaWYoIXRoaXMucm91dGVzKSB7XG4gICAgICAgICAgICAgIF8ud2Fybigndi1yb3V0ZSBuZWVkcyB0aGUgJHJvb3QgdG8gYmUgcGFzc2VkIGEgXCJyb3V0ZXNcIiBvcHRpb24gaGFzaC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKlxuICAgICAgICAgICAgICBPcHRpb25zIGZvciB2LXJvdXRlICYgcGFnZSAoYmFzZSwgaGFzaGJhbmcsIGRlYnVnLi4uKVxuICAgICAgICAgICAqL1xuICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMucm91dGVzLm9wdGlvbnMgfHwge307XG5cbiAgICAgICAgICAvKlxuICAgICAgICAgICAgVXNlIHBhZ2UuYmFzZSB0byBzZXQgdGhlIFVSTCBiYXNlXG4gICAgICAgICAgICBUT0RPIHRlc3RzXG4gICAgICAgICAgICovXG4gICAgICAgICAgaWYodGhpcy5vcHRpb25zLmJhc2UpIHtcbiAgICAgICAgICAgIHBhZ2UuYmFzZSh0aGlzLm9wdGlvbnMuYmFzZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLypcbiAgICAgICAgICAgIElmIG9wdGlvbnMuYnJvYWRjYXN0LCB1c2VzICRicm9hZGNhc3QgZm9yIHJvdXRpbmcgZXZlbnRzLCBlbHNlIHVzZXMgJGVtaXRcbiAgICAgICAgICAgKi9cbiAgICAgICAgICB0aGlzLm5vdGlmaWVyID0gISF0aGlzLm9wdGlvbnMuYnJvYWRjYXN0ID8gJyRicm9hZGNhc3QnIDogJyRlbWl0JztcblxuICAgICAgICAgIC8qXG4gICAgICAgICAgICBSZWdpc3RlciBhbGwgdGhlIHJvdXRlc1xuICAgICAgICAgICAqL1xuICAgICAgICAgIGZvcih2YXIgcm91dGUgaW4gdGhpcy5yb3V0ZXMpIHtcbiAgICAgICAgICAgICAgLy8gSWdub3JlIG9wdGlvbnNcbiAgICAgICAgICAgICAgaWYocm91dGVbMF0gPT09ICcvJykge1xuICAgICAgICAgICAgICAgICAgaWYodXRpbHMuaGFzT3duUHJvcC5jYWxsKHRoaXMucm91dGVzLCByb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFJvdXRlKHJvdXRlLCB0aGlzLnJvdXRlc1tyb3V0ZV0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLypcbiAgICAgICAgICAgIEJpbmQgZGVmYXVsdCByb3V0ZVxuICAgICAgICAgICAqL1xuICAgICAgICAgIHBhZ2UoJyonLCBfLmJpbmQodGhpcy5vbkRlZmF1bHRSb3V0ZSwgdGhpcykpO1xuXG4gICAgICAgICAgLypcbiAgICAgICAgICAgIFN0YXJ0IHRoZSByb3V0aW5nXG4gICAgICAgICAgICovXG4gICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBSZWdpc3RlcnMgdGhlIHJvdXRlIHdpdGggdGhlIHNwZWNpZmllZCBwYXRoL3BhdHRlcm4gKGV4cHJlc3MtbGlrZSByZWdleHApXG4gICAgICAgICAgICByb3V0ZTogaW5mb3MgYXMge2lkOiBcInJvdXRlLWlkXCIsIHBhdGg6IFwiL3JvdXRlXCJ9IG9yIHtpZDogXCJyb3V0ZS1pZFwiLCBwYXRoOiBcIi9yb3V0ZS86aWRcIn1cbiAgICAgICAgKi9cbiAgICAgICAgYWRkUm91dGU6IGZ1bmN0aW9uKHBhdGgsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmKHRoaXMub3B0aW9ucy5kZWJ1ZykgXy5sb2coJ1t2LXJvdXRlXSBhZGRSb3V0ZScsIHBhdGgsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICB2YXIgcm91dGVGbiA9IGZ1bmN0aW9uKGNvbnRleHQsIG5leHQpIHtcbiAgICAgICAgICAgICAgICAvLyBWdWUubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Sb3V0ZShwYXRoLCBjb250ZXh0LCBuZXh0KTtcbiAgICAgICAgICAgICAgICAvLyB9LCB0aGlzKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIEFkZCBhIHJlbGV2YW50IHN0YWNrIHRyYWNlXG4gICAgICAgICAgICByb3V0ZUZuLmRpc3BsYXlOYW1lID0gJ3JvdXRpbmcgJyArIHBhdGg7XG5cbiAgICAgICAgICAgIC8vIE1pZGRsZXdhcmUgcHJvcFxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgcGFnZShwYXRoLCBvblJvdXRlLCBiZWZvcmVVcGRhdGUsIHVwZGF0ZVJvdXRlLCBhZnRlclVwZGF0ZSk7XG4gICAgICAgICAgICAgIC0gb25Sb3V0ZSAtPiB1cGRhdGVMb2NhdGlvbiBmaWVsZFxuICAgICAgICAgICAgICAtIGJlZm9yZVVwZGF0ZSAtPiBlbWl0IGV2ZW50LCBjYWxsIGNhbGxiYWNrcywgaWYgbm8gY2FsbGJhY2tzIC0+IG5leHRcbiAgICAgICAgICAgICAgLSB1cGRhdGVSb3V0ZSAtPiBlZmZlY3RpdmVseSBhcHBsaWVzIHRoZSByb3V0ZSwgbmV4dFxuICAgICAgICAgICAgICAtIGFmdGVyVXBkYXRlIC0+IGVtaXQgZXZlbnQsIGNhbGwgY2FsbGJhY2tzXG4gICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAvLyBwYWdlKHBhdGgsIF8uYmluZChyb3V0ZUZuLCB0aGlzKSk7XG5cbiAgICAgICAgICAgIHBhZ2UocGF0aCwgXy5iaW5kKHJvdXRlRm4sIHRoaXMpLCBfLmJpbmQodGhpcy5iZWZvcmVVcGRhdGUsIHRoaXMpLCBfLmJpbmQodGhpcy51cGRhdGVSb3V0ZSwgdGhpcykpO1xuXG4gICAgICAgICAgICBpZihvcHRpb25zLmlzRGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdFJvdXRlID0gcGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgU3RhcnRzIHRoZSByb3V0ZXIuXG4gICAgICAgICovXG4gICAgICAgIHN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKHRoaXMub3B0aW9ucy5kZWJ1ZykgXy5sb2coJ1t2LXJvdXRlXSBzdGFydCcpO1xuICAgICAgICAgICAgcGFnZS5zdGFydCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy52bS4kcm9vdFt0aGlzLm5vdGlmaWVyXSgncm91dGVyOnN0YXJ0ZWQnKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgSW50ZXJuYWwgbWV0aG9kLlxuICAgICAgICAgICAgVXBkYXRlcyB0aGUgY29udGV4dCBhbmQgZW1pdCB0aGUgYHJvdXRlcjp1cGRhdGVgIGV2ZW50LlxuICAgICAgICAqL1xuICAgICAgICBvblJvdXRlOiBmdW5jdGlvbihwYXRoLCBjb250ZXh0LCBuZXh0KSB7XG4gICAgICAgICAgICBpZih0aGlzLm9wdGlvbnMuZGVidWcpIF8ubG9nKCdbdi1yb3V0ZV0gb25Sb3V0ZScsIHBhdGgsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIEdldCBuZXcgcm91dGUsIGNvbXBvbmVudElkIGFuZCB1cGRhdGUgbG9jYXRpb24gY29udGV4dFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB2YXIgcm91dGUgPSB0aGlzLnJvdXRlc1twYXRoXSxcbiAgICAgICAgICAgICAgICBjb21wb25lbnRJZCA9IHJvdXRlLmNvbXBvbmVudElkO1xuXG4gICAgICAgICAgICB0aGlzLm9sZExvY2F0aW9uID0gXy5leHRlbmQoe30sIHRoaXMubG9jYXRpb24pO1xuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICByZWdleHA6IHBhdGgsXG4gICAgICAgICAgICAgICAgcGF0aDogY29udGV4dC5wYXRoLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudElkOiBjb21wb25lbnRJZCxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IGNvbnRleHQucGFyYW1zXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlVXBkYXRlOiBmdW5jdGlvbihjb250ZXh0LCBuZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxSb3V0ZUhvb2soJ2JlZm9yZScsIG5leHQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHVwZGF0ZVJvdXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvKlxuICAgICAgICAgICAgICBVcGRhdGUgdGhlIGN1cnJlbnQgY29tcG9uZW50XG4gICAgICAgICAgICovXG4gICAgICAgICAgdmFyIGNvbXBvbmVudElkID0gdGhpcy5yb3V0ZXNbdGhpcy5sb2NhdGlvbi5yZWdleHBdLmNvbXBvbmVudElkO1xuICAgICAgICAgIHRoaXMudXBkYXRlKGNvbXBvbmVudElkKTtcblxuICAgICAgICAgIC8qXG4gICAgICAgICAgICAgIGFmdGVyIGFwcGx5aW5nIHRoZSByb3V0ZSwgZW1pdCB0aGUgZXZlbnQgKyBleGVjdXRlIGN1c3RvbSBjYWxsYmFja1xuICAgICAgICAgICAqL1xuICAgICAgICAgIHRoaXMuY2FsbFJvdXRlSG9vaygnYWZ0ZXInKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKlxuICAgICAgICAgICAgQ2FsbGVkIHdoZW4gdGhlIHJlcXVlc3RlZCByb3V0ZSBkb2VzIG5vdCBleGlzdHNcbiAgICAgICAgICAgIFJlZGlyZWN0cyB0byBwcm9wZXIgZGVmYXVsdCByb3V0ZVxuICAgICAgICAqL1xuICAgICAgICBvbkRlZmF1bHRSb3V0ZTogZnVuY3Rpb24oY29udGV4dCkge1xuICAgICAgICAgICAgaWYodGhpcy5vcHRpb25zLmRlYnVnKSBfLmxvZygnW3Ytcm91dGVdIG9uRGVmYXVsdFJvdXRlJywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIFZ1ZS5uZXh0VGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwYWdlKHRoaXMuZGVmYXVsdFJvdXRlKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNhbGxSb3V0ZUhvb2s6IGZ1bmN0aW9uKHdoZW4sIG5leHQpIHtcbiAgICAgICAgICAgIGlmKHRoaXMub3B0aW9ucy5kZWJ1ZykgXy5sb2coJ1t2LXJvdXRlXSBjYWxsUm91dGVIb29rJywgd2hlbiwgbmV4dCk7XG5cbiAgICAgICAgICAgIHZhciByb3V0ZSA9IHRoaXMucm91dGVzW3RoaXMubG9jYXRpb24ucmVnZXhwXSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IHJvdXRlW3doZW4gKyAnVXBkYXRlJ10sXG4gICAgICAgICAgICAgICAgJHJvb3QgPSB0aGlzLnZtLiRyb290LFxuICAgICAgICAgICAgICAgIGxvY2F0aW9ucyA9IFt0aGlzLmxvY2F0aW9uLCB0aGlzLm9sZExvY2F0aW9uXSxcbiAgICAgICAgICAgICAgICBtaWRkbGV3YXJlO1xuXG4gICAgICAgICAgICBpZihjYWxsYmFjaykge1xuICAgICAgICAgICAgICBpZih1dGlscy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgICAgbWlkZGxld2FyZSA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYodXRpbHMuaXNTdHJpbmcoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgaWYoJHJvb3RbY2FsbGJhY2tdKSB7XG4gICAgICAgICAgICAgICAgICBtaWRkbGV3YXJlID0gJHJvb3RbY2FsbGJhY2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB0aGlzLmNhbGxSb3V0ZUV2ZW50cyh3aGVuLCBsb2NhdGlvbnMpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgIElmIGEgbWlkZGxld2FyZSBpcyBkZWNsYXJlZCwgd2UgY2FsbCBpdCBhbmQgd2FpdCBmb3IgdGhlIGNhbGwgdG8gYG5leHRgXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmKG1pZGRsZXdhcmUpIHtcbiAgICAgICAgICAgICAgbWlkZGxld2FyZS5hcHBseSgkcm9vdCwgdXRpbHMuY29uY2F0LmNhbGwobG9jYXRpb25zLCBuZXh0KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgIElmIG5vIG1pZGRsZXdhcmUgaXMgZGVjbGFyZWQsIHdlIGNhbGwgYG5leHRgIHRvIGNvbnRpbnVlIHRoZSByb3V0aW5nXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGVsc2UgaWYobmV4dCkge1xuICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2FsbFJvdXRlRXZlbnRzOiBmdW5jdGlvbih3aGVuLCBsb2NhdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciAkcm9vdCA9IHRoaXMudm0uJHJvb3Q7XG5cbiAgICAgICAgICAgICRyb290W3RoaXMubm90aWZpZXJdLmFwcGx5KCRyb290LFxuICAgICAgICAgICAgICAgIHV0aWxzLmNvbmNhdC5jYWxsKFtdLCAncm91dGVyOicgKyB3aGVuICsgJ1VwZGF0ZScsIGxvY2F0aW9ucylcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS1yb3V0ZS9zcmMvcm91dGluZy5qc1xuICoqIG1vZHVsZSBpZCA9IDgzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgU2xpZGVvdXQgZnJvbSAnc2xpZGVvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIGVzY2FwZUhUTUwodGV4dCkge1xuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIikucmVwbGFjZSgvXCIvZywgXCImcXVvdDtcIikucmVwbGFjZSgvPC9nLCBcIiZsdDtcIikucmVwbGFjZSgvPi9nLCBcIiZndDtcIilcbiAgICB9LFxuXG4gICAgZ2V0U2xpZGVPdXQ6ICgoKSA9PiB7XG4gICAgICAgIC8vIHNldHVwIHNsaWRlb3V0IGF0IGluaXRpYWxpemF0aW9uXG4gICAgICAgIHZhciBzbGlkZW91dCA9IG5ldyBTbGlkZW91dCh7XG4gICAgICAgICAgJ3BhbmVsJzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKSxcbiAgICAgICAgICAnbWVudSc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JyksXG4gICAgICAgICAgJ3BhZGRpbmcnOiAyNTYsXG4gICAgICAgICAgJ3RvbGVyYW5jZSc6IDcwXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiAoKSA9PiBzbGlkZW91dFxuICAgIH0pKClcblxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vcHVibGljL2pzL2NvbW1vbi91dGlsLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xudmFyIGRlY291cGxlID0gcmVxdWlyZSgnZGVjb3VwbGUnKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnZW1pdHRlcicpO1xuXG4vKipcbiAqIFByaXZhdGVzXG4gKi9cbnZhciBzY3JvbGxUaW1lb3V0O1xudmFyIHNjcm9sbGluZyA9IGZhbHNlO1xudmFyIGRvYyA9IHdpbmRvdy5kb2N1bWVudDtcbnZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbnZhciBtc1BvaW50ZXJTdXBwb3J0ZWQgPSB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQ7XG52YXIgdG91Y2ggPSB7XG4gICdzdGFydCc6IG1zUG9pbnRlclN1cHBvcnRlZCA/ICdNU1BvaW50ZXJEb3duJyA6ICd0b3VjaHN0YXJ0JyxcbiAgJ21vdmUnOiBtc1BvaW50ZXJTdXBwb3J0ZWQgPyAnTVNQb2ludGVyTW92ZScgOiAndG91Y2htb3ZlJyxcbiAgJ2VuZCc6IG1zUG9pbnRlclN1cHBvcnRlZCA/ICdNU1BvaW50ZXJVcCcgOiAndG91Y2hlbmQnXG59O1xudmFyIHByZWZpeCA9IChmdW5jdGlvbiBwcmVmaXgoKSB7XG4gIHZhciByZWdleCA9IC9eKFdlYmtpdHxLaHRtbHxNb3p8bXN8TykoPz1bQS1aXSkvO1xuICB2YXIgc3R5bGVEZWNsYXJhdGlvbiA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF0uc3R5bGU7XG4gIGZvciAodmFyIHByb3AgaW4gc3R5bGVEZWNsYXJhdGlvbikge1xuICAgIGlmIChyZWdleC50ZXN0KHByb3ApKSB7XG4gICAgICByZXR1cm4gJy0nICsgcHJvcC5tYXRjaChyZWdleClbMF0udG9Mb3dlckNhc2UoKSArICctJztcbiAgICB9XG4gIH1cbiAgLy8gTm90aGluZyBmb3VuZCBzbyBmYXI/IFdlYmtpdCBkb2VzIG5vdCBlbnVtZXJhdGUgb3ZlciB0aGUgQ1NTIHByb3BlcnRpZXMgb2YgdGhlIHN0eWxlIG9iamVjdC5cbiAgLy8gSG93ZXZlciAocHJvcCBpbiBzdHlsZSkgcmV0dXJucyB0aGUgY29ycmVjdCB2YWx1ZSwgc28gd2UnbGwgaGF2ZSB0byB0ZXN0IGZvclxuICAvLyB0aGUgcHJlY2VuY2Ugb2YgYSBzcGVjaWZpYyBwcm9wZXJ0eVxuICBpZiAoJ1dlYmtpdE9wYWNpdHknIGluIHN0eWxlRGVjbGFyYXRpb24pIHsgcmV0dXJuICctd2Via2l0LSc7IH1cbiAgaWYgKCdLaHRtbE9wYWNpdHknIGluIHN0eWxlRGVjbGFyYXRpb24pIHsgcmV0dXJuICcta2h0bWwtJzsgfVxuICByZXR1cm4gJyc7XG59KCkpO1xuZnVuY3Rpb24gZXh0ZW5kKGRlc3RpbmF0aW9uLCBmcm9tKSB7XG4gIGZvciAodmFyIHByb3AgaW4gZnJvbSkge1xuICAgIGlmIChmcm9tW3Byb3BdKSB7XG4gICAgICBkZXN0aW5hdGlvbltwcm9wXSA9IGZyb21bcHJvcF07XG4gICAgfVxuICB9XG4gIHJldHVybiBkZXN0aW5hdGlvbjtcbn1cbmZ1bmN0aW9uIGluaGVyaXRzKGNoaWxkLCB1YmVyKSB7XG4gIGNoaWxkLnByb3RvdHlwZSA9IGV4dGVuZChjaGlsZC5wcm90b3R5cGUgfHwge30sIHViZXIucHJvdG90eXBlKTtcbn1cblxuLyoqXG4gKiBTbGlkZW91dCBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBTbGlkZW91dChvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8vIFNldHMgZGVmYXVsdCB2YWx1ZXNcbiAgdGhpcy5fc3RhcnRPZmZzZXRYID0gMDtcbiAgdGhpcy5fY3VycmVudE9mZnNldFggPSAwO1xuICB0aGlzLl9vcGVuaW5nID0gZmFsc2U7XG4gIHRoaXMuX21vdmVkID0gZmFsc2U7XG4gIHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuICB0aGlzLl9wcmV2ZW50T3BlbiA9IGZhbHNlO1xuICB0aGlzLl90b3VjaCA9IG9wdGlvbnMudG91Y2ggPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLnRvdWNoICYmIHRydWU7XG5cbiAgLy8gU2V0cyBwYW5lbFxuICB0aGlzLnBhbmVsID0gb3B0aW9ucy5wYW5lbDtcbiAgdGhpcy5tZW51ID0gb3B0aW9ucy5tZW51O1xuXG4gIC8vIFNldHMgIGNsYXNzbmFtZXNcbiAgdGhpcy5wYW5lbC5jbGFzc05hbWUgKz0gJyBzbGlkZW91dC1wYW5lbCc7XG4gIHRoaXMubWVudS5jbGFzc05hbWUgKz0gJyBzbGlkZW91dC1tZW51JztcblxuICAvLyBTZXRzIG9wdGlvbnNcbiAgdGhpcy5fZnggPSBvcHRpb25zLmZ4IHx8ICdlYXNlJztcbiAgdGhpcy5fZHVyYXRpb24gPSBwYXJzZUludChvcHRpb25zLmR1cmF0aW9uLCAxMCkgfHwgMzAwO1xuICB0aGlzLl90b2xlcmFuY2UgPSBwYXJzZUludChvcHRpb25zLnRvbGVyYW5jZSwgMTApIHx8IDcwO1xuICB0aGlzLl9wYWRkaW5nID0gdGhpcy5fdHJhbnNsYXRlVG8gPSBwYXJzZUludChvcHRpb25zLnBhZGRpbmcsIDEwKSB8fCAyNTY7XG4gIHRoaXMuX29yaWVudGF0aW9uID0gb3B0aW9ucy5zaWRlID09PSAncmlnaHQnID8gLTEgOiAxO1xuICB0aGlzLl90cmFuc2xhdGVUbyAqPSB0aGlzLl9vcmllbnRhdGlvbjtcblxuICAvLyBJbml0IHRvdWNoIGV2ZW50c1xuICBpZiAodGhpcy5fdG91Y2gpIHtcbiAgICB0aGlzLl9pbml0VG91Y2hFdmVudHMoKTtcbiAgfVxufVxuXG4vKipcbiAqIEluaGVyaXRzIGZyb20gRW1pdHRlclxuICovXG5pbmhlcml0cyhTbGlkZW91dCwgRW1pdHRlcik7XG5cbi8qKlxuICogT3BlbnMgdGhlIHNsaWRlb3V0IG1lbnUuXG4gKi9cblNsaWRlb3V0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5lbWl0KCdiZWZvcmVvcGVuJyk7XG4gIGlmIChodG1sLmNsYXNzTmFtZS5zZWFyY2goJ3NsaWRlb3V0LW9wZW4nKSA9PT0gLTEpIHsgaHRtbC5jbGFzc05hbWUgKz0gJyBzbGlkZW91dC1vcGVuJzsgfVxuICB0aGlzLl9zZXRUcmFuc2l0aW9uKCk7XG4gIHRoaXMuX3RyYW5zbGF0ZVhUbyh0aGlzLl90cmFuc2xhdGVUbyk7XG4gIHRoaXMuX29wZW5lZCA9IHRydWU7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgc2VsZi5wYW5lbC5zdHlsZS50cmFuc2l0aW9uID0gc2VsZi5wYW5lbC5zdHlsZVsnLXdlYmtpdC10cmFuc2l0aW9uJ10gPSAnJztcbiAgICBzZWxmLmVtaXQoJ29wZW4nKTtcbiAgfSwgdGhpcy5fZHVyYXRpb24gKyA1MCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDbG9zZXMgc2xpZGVvdXQgbWVudS5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKCF0aGlzLmlzT3BlbigpICYmICF0aGlzLl9vcGVuaW5nKSB7IHJldHVybiB0aGlzOyB9XG4gIHRoaXMuZW1pdCgnYmVmb3JlY2xvc2UnKTtcbiAgdGhpcy5fc2V0VHJhbnNpdGlvbigpO1xuICB0aGlzLl90cmFuc2xhdGVYVG8oMCk7XG4gIHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGh0bWwuY2xhc3NOYW1lID0gaHRtbC5jbGFzc05hbWUucmVwbGFjZSgvIHNsaWRlb3V0LW9wZW4vLCAnJyk7XG4gICAgc2VsZi5wYW5lbC5zdHlsZS50cmFuc2l0aW9uID0gc2VsZi5wYW5lbC5zdHlsZVsnLXdlYmtpdC10cmFuc2l0aW9uJ10gPSBzZWxmLnBhbmVsLnN0eWxlW3ByZWZpeCArICd0cmFuc2Zvcm0nXSA9IHNlbGYucGFuZWwuc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgc2VsZi5lbWl0KCdjbG9zZScpO1xuICB9LCB0aGlzLl9kdXJhdGlvbiArIDUwKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFRvZ2dsZXMgKG9wZW4vY2xvc2UpIHNsaWRlb3V0IG1lbnUuXG4gKi9cblNsaWRlb3V0LnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuaXNPcGVuKCkgPyB0aGlzLmNsb3NlKCkgOiB0aGlzLm9wZW4oKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBzbGlkZW91dCBpcyBjdXJyZW50bHkgb3BlbiwgYW5kIGZhbHNlIGlmIGl0IGlzIGNsb3NlZC5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fb3BlbmVkO1xufTtcblxuLyoqXG4gKiBUcmFuc2xhdGVzIHBhbmVsIGFuZCB1cGRhdGVzIGN1cnJlbnRPZmZzZXQgd2l0aCBhIGdpdmVuIFggcG9pbnRcbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLl90cmFuc2xhdGVYVG8gPSBmdW5jdGlvbih0cmFuc2xhdGVYKSB7XG4gIHRoaXMuX2N1cnJlbnRPZmZzZXRYID0gdHJhbnNsYXRlWDtcbiAgdGhpcy5wYW5lbC5zdHlsZVtwcmVmaXggKyAndHJhbnNmb3JtJ10gPSB0aGlzLnBhbmVsLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgdHJhbnNsYXRlWCArICdweCwgMCwgMCknO1xufTtcblxuLyoqXG4gKiBTZXQgdHJhbnNpdGlvbiBwcm9wZXJ0aWVzXG4gKi9cblNsaWRlb3V0LnByb3RvdHlwZS5fc2V0VHJhbnNpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBhbmVsLnN0eWxlW3ByZWZpeCArICd0cmFuc2l0aW9uJ10gPSB0aGlzLnBhbmVsLnN0eWxlLnRyYW5zaXRpb24gPSBwcmVmaXggKyAndHJhbnNmb3JtICcgKyB0aGlzLl9kdXJhdGlvbiArICdtcyAnICsgdGhpcy5fZng7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIHRvdWNoIGV2ZW50XG4gKi9cblNsaWRlb3V0LnByb3RvdHlwZS5faW5pdFRvdWNoRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICAvKipcbiAgICogRGVjb3VwbGUgc2Nyb2xsIGV2ZW50XG4gICAqL1xuICBkZWNvdXBsZShkb2MsICdzY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXNlbGYuX21vdmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQoc2Nyb2xsVGltZW91dCk7XG4gICAgICBzY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgc2Nyb2xsVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgfSwgMjUwKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBQcmV2ZW50cyB0b3VjaG1vdmUgZXZlbnQgaWYgc2xpZGVvdXQgaXMgbW92aW5nXG4gICAqL1xuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaC5tb3ZlLCBmdW5jdGlvbihldmUpIHtcbiAgICBpZiAoc2VsZi5fbW92ZWQpIHtcbiAgICAgIGV2ZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB2YWx1ZXMgb24gdG91Y2hzdGFydFxuICAgKi9cbiAgdGhpcy5wYW5lbC5hZGRFdmVudExpc3RlbmVyKHRvdWNoLnN0YXJ0LCBmdW5jdGlvbihldmUpIHtcblxuICAgIGlmICh0eXBlb2YgZXZlLnRvdWNoZXMgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybjsgfVxuXG4gICAgc2VsZi5fbW92ZWQgPSBmYWxzZTtcbiAgICBzZWxmLl9vcGVuaW5nID0gZmFsc2U7XG4gICAgc2VsZi5fc3RhcnRPZmZzZXRYID0gZXZlLnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgc2VsZi5fcHJldmVudE9wZW4gPSAoIXNlbGYuaXNPcGVuKCkgJiYgc2VsZi5tZW51LmNsaWVudFdpZHRoICE9PSAwKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB2YWx1ZXMgb24gdG91Y2hjYW5jZWxcbiAgICovXG4gIHRoaXMucGFuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCBmdW5jdGlvbigpIHtcbiAgICBzZWxmLl9tb3ZlZCA9IGZhbHNlO1xuICAgIHNlbGYuX29wZW5pbmcgPSBmYWxzZTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgc2xpZGVvdXQgb24gdG91Y2hlbmRcbiAgICovXG4gIHRoaXMucGFuZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaC5lbmQsIGZ1bmN0aW9uKCkge1xuICAgIGlmIChzZWxmLl9tb3ZlZCkge1xuICAgICAgKHNlbGYuX29wZW5pbmcgJiYgTWF0aC5hYnMoc2VsZi5fY3VycmVudE9mZnNldFgpID4gc2VsZi5fdG9sZXJhbmNlKSA/IHNlbGYub3BlbigpIDogc2VsZi5jbG9zZSgpO1xuICAgIH1cbiAgICBzZWxmLl9tb3ZlZCA9IGZhbHNlO1xuICB9KTtcblxuICAvKipcbiAgICogVHJhbnNsYXRlcyBwYW5lbCBvbiB0b3VjaG1vdmVcbiAgICovXG4gIHRoaXMucGFuZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaC5tb3ZlLCBmdW5jdGlvbihldmUpIHtcblxuICAgIGlmIChzY3JvbGxpbmcgfHwgc2VsZi5fcHJldmVudE9wZW4gfHwgdHlwZW9mIGV2ZS50b3VjaGVzID09PSAndW5kZWZpbmVkJykgeyByZXR1cm47IH1cblxuICAgIHZhciBkaWZfeCA9IGV2ZS50b3VjaGVzWzBdLmNsaWVudFggLSBzZWxmLl9zdGFydE9mZnNldFg7XG4gICAgdmFyIHRyYW5zbGF0ZVggPSBzZWxmLl9jdXJyZW50T2Zmc2V0WCA9IGRpZl94O1xuXG4gICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVgpID4gc2VsZi5fcGFkZGluZykgeyByZXR1cm47IH1cblxuICAgIGlmIChNYXRoLmFicyhkaWZfeCkgPiAyMCkge1xuICAgICAgc2VsZi5fb3BlbmluZyA9IHRydWU7XG5cbiAgICAgIHZhciBvcmllbnRlZF9kaWZfeCA9IGRpZl94ICogc2VsZi5fb3JpZW50YXRpb247XG4gICAgICBpZiAoc2VsZi5fb3BlbmVkICYmIG9yaWVudGVkX2RpZl94ID4gMCB8fCAhc2VsZi5fb3BlbmVkICYmIG9yaWVudGVkX2RpZl94IDwgMCkgeyByZXR1cm47IH1cbiAgICAgIGlmIChvcmllbnRlZF9kaWZfeCA8PSAwKSB7XG4gICAgICAgIHRyYW5zbGF0ZVggPSBkaWZfeCArIHNlbGYuX3BhZGRpbmcgKiBzZWxmLl9vcmllbnRhdGlvbjtcbiAgICAgICAgc2VsZi5fb3BlbmluZyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNlbGYuX21vdmVkICYmIGh0bWwuY2xhc3NOYW1lLnNlYXJjaCgnc2xpZGVvdXQtb3BlbicpID09PSAtMSkge1xuICAgICAgICBodG1sLmNsYXNzTmFtZSArPSAnIHNsaWRlb3V0LW9wZW4nO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnBhbmVsLnN0eWxlW3ByZWZpeCArICd0cmFuc2Zvcm0nXSA9IHNlbGYucGFuZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKCcgKyB0cmFuc2xhdGVYICsgJ3B4LCAwLCAwKSc7XG4gICAgICBzZWxmLmVtaXQoJ3RyYW5zbGF0ZScsIHRyYW5zbGF0ZVgpO1xuICAgICAgc2VsZi5fbW92ZWQgPSB0cnVlO1xuICAgIH1cblxuICB9KTtcblxufTtcblxuLyoqXG4gKiBFeHBvc2UgU2xpZGVvdXRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBTbGlkZW91dDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3NsaWRlb3V0L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gODVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlcXVlc3RBbmltRnJhbWUgPSAoZnVuY3Rpb24oKSB7XG4gIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XG4gICAgfTtcbn0oKSk7XG5cbmZ1bmN0aW9uIGRlY291cGxlKG5vZGUsIGV2ZW50LCBmbikge1xuICB2YXIgZXZlLFxuICAgICAgdHJhY2tpbmcgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBjYXB0dXJlRXZlbnQoZSkge1xuICAgIGV2ZSA9IGU7XG4gICAgdHJhY2soKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrKCkge1xuICAgIGlmICghdHJhY2tpbmcpIHtcbiAgICAgIHJlcXVlc3RBbmltRnJhbWUodXBkYXRlKTtcbiAgICAgIHRyYWNraW5nID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgZm4uY2FsbChub2RlLCBldmUpO1xuICAgIHRyYWNraW5nID0gZmFsc2U7XG4gIH1cblxuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhcHR1cmVFdmVudCwgZmFsc2UpO1xufVxuXG4vKipcbiAqIEV4cG9zZSBkZWNvdXBsZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGRlY291cGxlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc2xpZGVvdXQvfi9kZWNvdXBsZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDg2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9jbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gKiBAY2xhc3NcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYSBuZXcgaW5zdGFuY2Ugb2YgRW1pdHRlci5cbiAqIEBleGFtcGxlXG4gKiAvLyBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gKiB2YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2VtaXR0ZXInKTtcbiAqXG4gKiB2YXIgZW1pdHRlciA9IG5ldyBFbWl0dGVyKCk7XG4gKi9cblxudmFyIEVtaXR0ZXIgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBFbWl0dGVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbWl0dGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbGlzdGVuZXIgdG8gdGhlIGNvbGxlY3Rpb24gZm9yIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gICAqIEBtZW1iZXJvZiEgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCAtIFRoZSBldmVudCBuYW1lLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIEEgbGlzdGVuZXIgZnVuY3Rpb24gdG8gYWRkLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBcImZvb1wiIGV2ZW50LlxuICAgKiBlbWl0dGVyLm9uKCdmb28nLCBsaXN0ZW5lcik7XG4gICAqL1xuXG4gIEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gb24oZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgLy8gVXNlIHRoZSBjdXJyZW50IGNvbGxlY3Rpb24gb3IgY3JlYXRlIGl0LlxuICAgIHRoaXMuX2V2ZW50Q29sbGVjdGlvbiA9IHRoaXMuX2V2ZW50Q29sbGVjdGlvbiB8fCB7fTtcblxuICAgIC8vIFVzZSB0aGUgY3VycmVudCBjb2xsZWN0aW9uIG9mIGFuIGV2ZW50IG9yIGNyZWF0ZSBpdC5cbiAgICB0aGlzLl9ldmVudENvbGxlY3Rpb25bZXZlbnRdID0gdGhpcy5fZXZlbnRDb2xsZWN0aW9uW2V2ZW50XSB8fCBbXTtcblxuICAgIC8vIEFwcGVuZHMgdGhlIGxpc3RlbmVyIGludG8gdGhlIGNvbGxlY3Rpb24gb2YgdGhlIGdpdmVuIGV2ZW50XG4gICAgdGhpcy5fZXZlbnRDb2xsZWN0aW9uW2V2ZW50XS5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGRzIGEgbGlzdGVuZXIgdG8gdGhlIGNvbGxlY3Rpb24gZm9yIHRoZSBzcGVjaWZpZWQgZXZlbnQgdGhhdCB3aWxsIGJlIGNhbGxlZCBvbmx5IG9uY2UuXG4gICAqIEBtZW1iZXJvZiEgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCAtIFRoZSBldmVudCBuYW1lLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIEEgbGlzdGVuZXIgZnVuY3Rpb24gdG8gYWRkLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIFdpbGwgYWRkIGFuIGV2ZW50IGhhbmRsZXIgdG8gXCJmb29cIiBldmVudCBvbmNlLlxuICAgKiBlbWl0dGVyLm9uY2UoJ2ZvbycsIGxpc3RlbmVyKTtcbiAgICovXG5cbiAgRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gZm4oKSB7XG4gICAgICBzZWxmLm9mZihldmVudCwgZm4pO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBmbi5saXN0ZW5lciA9IGxpc3RlbmVyO1xuXG4gICAgdGhpcy5vbihldmVudCwgZm4pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBsaXN0ZW5lciBmcm9tIHRoZSBjb2xsZWN0aW9uIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICAgKiBAbWVtYmVyb2YhIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBBIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIHJlbW92ZS5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBSZW1vdmUgYSBnaXZlbiBsaXN0ZW5lci5cbiAgICogZW1pdHRlci5vZmYoJ2ZvbycsIGxpc3RlbmVyKTtcbiAgICovXG5cbiAgRW1pdHRlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gb2ZmKGV2ZW50LCBsaXN0ZW5lcikge1xuXG4gICAgdmFyIGxpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuICAgIC8vIERlZmluZXMgbGlzdGVuZXJzIHZhbHVlLlxuICAgIGlmICghdGhpcy5fZXZlbnRDb2xsZWN0aW9uIHx8ICEobGlzdGVuZXJzID0gdGhpcy5fZXZlbnRDb2xsZWN0aW9uW2V2ZW50XSkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChmbiwgaSkge1xuICAgICAgaWYgKGZuID09PSBsaXN0ZW5lciB8fCBmbi5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgLy8gUmVtb3ZlcyB0aGUgZ2l2ZW4gbGlzdGVuZXIuXG4gICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBSZW1vdmVzIGFuIGVtcHR5IGV2ZW50IGNvbGxlY3Rpb24uXG4gICAgaWYgKGxpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudENvbGxlY3Rpb25bZXZlbnRdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFeGVjdXRlIGVhY2ggaXRlbSBpbiB0aGUgbGlzdGVuZXIgY29sbGVjdGlvbiBpbiBvcmRlciB3aXRoIHRoZSBzcGVjaWZpZWQgZGF0YS5cbiAgICogQG1lbWJlcm9mISBFbWl0dGVyLnByb3RvdHlwZVxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IC0gVGhlIG5hbWUgb2YgdGhlIGV2ZW50IHlvdSB3YW50IHRvIGVtaXQuXG4gICAqIEBwYXJhbSB7Li4uT2JqZWN0fSBkYXRhIC0gRGF0YSB0byBwYXNzIHRvIHRoZSBsaXN0ZW5lcnMuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgRW1pdHRlci5cbiAgICogQGV4YW1wbGVcbiAgICogLy8gRW1pdHMgdGhlIFwiZm9vXCIgZXZlbnQgd2l0aCAncGFyYW0xJyBhbmQgJ3BhcmFtMicgYXMgYXJndW1lbnRzLlxuICAgKiBlbWl0dGVyLmVtaXQoJ2ZvbycsICdwYXJhbTEnLCAncGFyYW0yJyk7XG4gICAqL1xuXG4gIEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50KSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuICAgIC8vIERlZmluZXMgbGlzdGVuZXJzIHZhbHVlLlxuICAgIGlmICghdGhpcy5fZXZlbnRDb2xsZWN0aW9uIHx8ICEobGlzdGVuZXJzID0gdGhpcy5fZXZlbnRDb2xsZWN0aW9uW2V2ZW50XSkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIENsb25lIGxpc3RlbmVyc1xuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgwKTtcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KF90aGlzLCBhcmdzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHJldHVybiBFbWl0dGVyO1xufSkoKTtcblxuLyoqXG4gKiBFeHBvcnRzIEVtaXR0ZXJcbiAqL1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBFbWl0dGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zbGlkZW91dC9+L2VtaXR0ZXIvZGlzdC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDg3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCItIWJhYmVsIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9oZWFkZXIudnVlXCIpXG5tb2R1bGUuZXhwb3J0cy50ZW1wbGF0ZSA9IHJlcXVpcmUoXCItIWh0bWwhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaGVhZGVyLnZ1ZVwiKVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3B1YmxpYy9qcy9jb21wb25lbnRzL2hlYWRlci52dWVcbiAqKiBtb2R1bGUgaWQgPSA4OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vcHVibGljL2pzL2NvbXBvbmVudHMvaGVhZGVyLnZ1ZVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJcXFwiPlxcbiAgSGVhZGVyXFxuICA8L2Rpdj5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9odG1sLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcHVibGljL2pzL2NvbXBvbmVudHMvaGVhZGVyLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDkwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCItIWJhYmVsIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9mb290ZXIudnVlXCIpXG5tb2R1bGUuZXhwb3J0cy50ZW1wbGF0ZSA9IHJlcXVpcmUoXCItIWh0bWwhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZm9vdGVyLnZ1ZVwiKVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3B1YmxpYy9qcy9jb21wb25lbnRzL2Zvb3Rlci52dWVcbiAqKiBtb2R1bGUgaWQgPSA5MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgfVxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXNjcmlwdCZpbmRleD0wIS4vcHVibGljL2pzL2NvbXBvbmVudHMvZm9vdGVyLnZ1ZVxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJcXFwiPlxcbiAgRm9vdGVyXFxuICA8L2Rpdj5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9odG1sLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcHVibGljL2pzL2NvbXBvbmVudHMvZm9vdGVyLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDkzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCItIWJhYmVsIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi90b3AudnVlXCIpXG5tb2R1bGUuZXhwb3J0cy50ZW1wbGF0ZSA9IHJlcXVpcmUoXCItIWh0bWwhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vdG9wLnZ1ZVwiKVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3B1YmxpYy9qcy9wYWdlcy90b3AudnVlXG4gKiogbW9kdWxlIGlkID0gOTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCAkIGZyb20gJ25wbS16ZXB0bydcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHJlZnJlc2goKSB7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBcIi4vYXBpL3YxL2V2ZW50L2xpc3RcIixcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3B1YmxpYy9qcy9wYWdlcy90b3AudnVlXG4gKiovIiwiLyogWmVwdG8gMS4xLjYgLSB6ZXB0byBldmVudCBhamF4IGZvcm0gaWUgLSB6ZXB0b2pzLmNvbS9saWNlbnNlICovXG5cbnZhciBaZXB0byA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVuZGVmaW5lZCwga2V5LCAkLCBjbGFzc0xpc3QsIGVtcHR5QXJyYXkgPSBbXSwgc2xpY2UgPSBlbXB0eUFycmF5LnNsaWNlLCBmaWx0ZXIgPSBlbXB0eUFycmF5LmZpbHRlcixcbiAgICBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudCxcbiAgICBlbGVtZW50RGlzcGxheSA9IHt9LCBjbGFzc0NhY2hlID0ge30sXG4gICAgY3NzTnVtYmVyID0geyAnY29sdW1uLWNvdW50JzogMSwgJ2NvbHVtbnMnOiAxLCAnZm9udC13ZWlnaHQnOiAxLCAnbGluZS1oZWlnaHQnOiAxLCdvcGFjaXR5JzogMSwgJ3otaW5kZXgnOiAxLCAnem9vbSc6IDEgfSxcbiAgICBmcmFnbWVudFJFID0gL15cXHMqPChcXHcrfCEpW14+XSo+LyxcbiAgICBzaW5nbGVUYWdSRSA9IC9ePChcXHcrKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyxcbiAgICB0YWdFeHBhbmRlclJFID0gLzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW1xcdzpdKylbXj5dKilcXC8+L2lnLFxuICAgIHJvb3ROb2RlUkUgPSAvXig/OmJvZHl8aHRtbCkkL2ksXG4gICAgY2FwaXRhbFJFID0gLyhbQS1aXSkvZyxcblxuICAgIC8vIHNwZWNpYWwgYXR0cmlidXRlcyB0aGF0IHNob3VsZCBiZSBnZXQvc2V0IHZpYSBtZXRob2QgY2FsbHNcbiAgICBtZXRob2RBdHRyaWJ1dGVzID0gWyd2YWwnLCAnY3NzJywgJ2h0bWwnLCAndGV4dCcsICdkYXRhJywgJ3dpZHRoJywgJ2hlaWdodCcsICdvZmZzZXQnXSxcblxuICAgIGFkamFjZW5jeU9wZXJhdG9ycyA9IFsgJ2FmdGVyJywgJ3ByZXBlbmQnLCAnYmVmb3JlJywgJ2FwcGVuZCcgXSxcbiAgICB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyksXG4gICAgdGFibGVSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpLFxuICAgIGNvbnRhaW5lcnMgPSB7XG4gICAgICAndHInOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpLFxuICAgICAgJ3Rib2R5JzogdGFibGUsICd0aGVhZCc6IHRhYmxlLCAndGZvb3QnOiB0YWJsZSxcbiAgICAgICd0ZCc6IHRhYmxlUm93LCAndGgnOiB0YWJsZVJvdyxcbiAgICAgICcqJzogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB9LFxuICAgIHJlYWR5UkUgPSAvY29tcGxldGV8bG9hZGVkfGludGVyYWN0aXZlLyxcbiAgICBzaW1wbGVTZWxlY3RvclJFID0gL15bXFx3LV0qJC8sXG4gICAgY2xhc3MydHlwZSA9IHt9LFxuICAgIHRvU3RyaW5nID0gY2xhc3MydHlwZS50b1N0cmluZyxcbiAgICB6ZXB0byA9IHt9LFxuICAgIGNhbWVsaXplLCB1bmlxLFxuICAgIHRlbXBQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICBwcm9wTWFwID0ge1xuICAgICAgJ3RhYmluZGV4JzogJ3RhYkluZGV4JyxcbiAgICAgICdyZWFkb25seSc6ICdyZWFkT25seScsXG4gICAgICAnZm9yJzogJ2h0bWxGb3InLFxuICAgICAgJ2NsYXNzJzogJ2NsYXNzTmFtZScsXG4gICAgICAnbWF4bGVuZ3RoJzogJ21heExlbmd0aCcsXG4gICAgICAnY2VsbHNwYWNpbmcnOiAnY2VsbFNwYWNpbmcnLFxuICAgICAgJ2NlbGxwYWRkaW5nJzogJ2NlbGxQYWRkaW5nJyxcbiAgICAgICdyb3dzcGFuJzogJ3Jvd1NwYW4nLFxuICAgICAgJ2NvbHNwYW4nOiAnY29sU3BhbicsXG4gICAgICAndXNlbWFwJzogJ3VzZU1hcCcsXG4gICAgICAnZnJhbWVib3JkZXInOiAnZnJhbWVCb3JkZXInLFxuICAgICAgJ2NvbnRlbnRlZGl0YWJsZSc6ICdjb250ZW50RWRpdGFibGUnXG4gICAgfSxcbiAgICBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fFxuICAgICAgZnVuY3Rpb24ob2JqZWN0KXsgcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mIEFycmF5IH1cblxuICB6ZXB0by5tYXRjaGVzID0gZnVuY3Rpb24oZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBpZiAoIXNlbGVjdG9yIHx8ICFlbGVtZW50IHx8IGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHJldHVybiBmYWxzZVxuICAgIHZhciBtYXRjaGVzU2VsZWN0b3IgPSBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbGVtZW50Lm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9NYXRjaGVzU2VsZWN0b3IgfHwgZWxlbWVudC5tYXRjaGVzU2VsZWN0b3JcbiAgICBpZiAobWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gbWF0Y2hlc1NlbGVjdG9yLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpXG4gICAgLy8gZmFsbCBiYWNrIHRvIHBlcmZvcm1pbmcgYSBzZWxlY3RvcjpcbiAgICB2YXIgbWF0Y2gsIHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSwgdGVtcCA9ICFwYXJlbnRcbiAgICBpZiAodGVtcCkgKHBhcmVudCA9IHRlbXBQYXJlbnQpLmFwcGVuZENoaWxkKGVsZW1lbnQpXG4gICAgbWF0Y2ggPSB+emVwdG8ucXNhKHBhcmVudCwgc2VsZWN0b3IpLmluZGV4T2YoZWxlbWVudClcbiAgICB0ZW1wICYmIHRlbXBQYXJlbnQucmVtb3ZlQ2hpbGQoZWxlbWVudClcbiAgICByZXR1cm4gbWF0Y2hcbiAgfVxuXG4gIGZ1bmN0aW9uIHR5cGUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PSBudWxsID8gU3RyaW5nKG9iaikgOlxuICAgICAgY2xhc3MydHlwZVt0b1N0cmluZy5jYWxsKG9iaildIHx8IFwib2JqZWN0XCJcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHR5cGUodmFsdWUpID09IFwiZnVuY3Rpb25cIiB9XG4gIGZ1bmN0aW9uIGlzV2luZG93KG9iaikgICAgIHsgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iaiA9PSBvYmoud2luZG93IH1cbiAgZnVuY3Rpb24gaXNEb2N1bWVudChvYmopICAgeyByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqLm5vZGVUeXBlID09IG9iai5ET0NVTUVOVF9OT0RFIH1cbiAgZnVuY3Rpb24gaXNPYmplY3Qob2JqKSAgICAgeyByZXR1cm4gdHlwZShvYmopID09IFwib2JqZWN0XCIgfVxuICBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBpc09iamVjdChvYmopICYmICFpc1dpbmRvdyhvYmopICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopID09IE9iamVjdC5wcm90b3R5cGVcbiAgfVxuICBmdW5jdGlvbiBsaWtlQXJyYXkob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqLmxlbmd0aCA9PSAnbnVtYmVyJyB9XG5cbiAgZnVuY3Rpb24gY29tcGFjdChhcnJheSkgeyByZXR1cm4gZmlsdGVyLmNhbGwoYXJyYXksIGZ1bmN0aW9uKGl0ZW0peyByZXR1cm4gaXRlbSAhPSBudWxsIH0pIH1cbiAgZnVuY3Rpb24gZmxhdHRlbihhcnJheSkgeyByZXR1cm4gYXJyYXkubGVuZ3RoID4gMCA/ICQuZm4uY29uY2F0LmFwcGx5KFtdLCBhcnJheSkgOiBhcnJheSB9XG4gIGNhbWVsaXplID0gZnVuY3Rpb24oc3RyKXsgcmV0dXJuIHN0ci5yZXBsYWNlKC8tKyguKT8vZywgZnVuY3Rpb24obWF0Y2gsIGNocil7IHJldHVybiBjaHIgPyBjaHIudG9VcHBlckNhc2UoKSA6ICcnIH0pIH1cbiAgZnVuY3Rpb24gZGFzaGVyaXplKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvOjovZywgJy8nKVxuICAgICAgICAgICAucmVwbGFjZSgvKFtBLVpdKykoW0EtWl1bYS16XSkvZywgJyQxXyQyJylcbiAgICAgICAgICAgLnJlcGxhY2UoLyhbYS16XFxkXSkoW0EtWl0pL2csICckMV8kMicpXG4gICAgICAgICAgIC5yZXBsYWNlKC9fL2csICctJylcbiAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgfVxuICB1bmlxID0gZnVuY3Rpb24oYXJyYXkpeyByZXR1cm4gZmlsdGVyLmNhbGwoYXJyYXksIGZ1bmN0aW9uKGl0ZW0sIGlkeCl7IHJldHVybiBhcnJheS5pbmRleE9mKGl0ZW0pID09IGlkeCB9KSB9XG5cbiAgZnVuY3Rpb24gY2xhc3NSRShuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUgaW4gY2xhc3NDYWNoZSA/XG4gICAgICBjbGFzc0NhY2hlW25hbWVdIDogKGNsYXNzQ2FjaGVbbmFtZV0gPSBuZXcgUmVnRXhwKCcoXnxcXFxccyknICsgbmFtZSArICcoXFxcXHN8JCknKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG1heWJlQWRkUHgobmFtZSwgdmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PSBcIm51bWJlclwiICYmICFjc3NOdW1iZXJbZGFzaGVyaXplKG5hbWUpXSkgPyB2YWx1ZSArIFwicHhcIiA6IHZhbHVlXG4gIH1cblxuICBmdW5jdGlvbiBkZWZhdWx0RGlzcGxheShub2RlTmFtZSkge1xuICAgIHZhciBlbGVtZW50LCBkaXNwbGF5XG4gICAgaWYgKCFlbGVtZW50RGlzcGxheVtub2RlTmFtZV0pIHtcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKVxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgICAgZGlzcGxheSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgJycpLmdldFByb3BlcnR5VmFsdWUoXCJkaXNwbGF5XCIpXG4gICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudClcbiAgICAgIGRpc3BsYXkgPT0gXCJub25lXCIgJiYgKGRpc3BsYXkgPSBcImJsb2NrXCIpXG4gICAgICBlbGVtZW50RGlzcGxheVtub2RlTmFtZV0gPSBkaXNwbGF5XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50RGlzcGxheVtub2RlTmFtZV1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gJ2NoaWxkcmVuJyBpbiBlbGVtZW50ID9cbiAgICAgIHNsaWNlLmNhbGwoZWxlbWVudC5jaGlsZHJlbikgOlxuICAgICAgJC5tYXAoZWxlbWVudC5jaGlsZE5vZGVzLCBmdW5jdGlvbihub2RlKXsgaWYgKG5vZGUubm9kZVR5cGUgPT0gMSkgcmV0dXJuIG5vZGUgfSlcbiAgfVxuXG4gIC8vIGAkLnplcHRvLmZyYWdtZW50YCB0YWtlcyBhIGh0bWwgc3RyaW5nIGFuZCBhbiBvcHRpb25hbCB0YWcgbmFtZVxuICAvLyB0byBnZW5lcmF0ZSBET00gbm9kZXMgbm9kZXMgZnJvbSB0aGUgZ2l2ZW4gaHRtbCBzdHJpbmcuXG4gIC8vIFRoZSBnZW5lcmF0ZWQgRE9NIG5vZGVzIGFyZSByZXR1cm5lZCBhcyBhbiBhcnJheS5cbiAgLy8gVGhpcyBmdW5jdGlvbiBjYW4gYmUgb3ZlcnJpZGVuIGluIHBsdWdpbnMgZm9yIGV4YW1wbGUgdG8gbWFrZVxuICAvLyBpdCBjb21wYXRpYmxlIHdpdGggYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IHRoZSBET00gZnVsbHkuXG4gIHplcHRvLmZyYWdtZW50ID0gZnVuY3Rpb24oaHRtbCwgbmFtZSwgcHJvcGVydGllcykge1xuICAgIHZhciBkb20sIG5vZGVzLCBjb250YWluZXJcblxuICAgIC8vIEEgc3BlY2lhbCBjYXNlIG9wdGltaXphdGlvbiBmb3IgYSBzaW5nbGUgdGFnXG4gICAgaWYgKHNpbmdsZVRhZ1JFLnRlc3QoaHRtbCkpIGRvbSA9ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChSZWdFeHAuJDEpKVxuXG4gICAgaWYgKCFkb20pIHtcbiAgICAgIGlmIChodG1sLnJlcGxhY2UpIGh0bWwgPSBodG1sLnJlcGxhY2UodGFnRXhwYW5kZXJSRSwgXCI8JDE+PC8kMj5cIilcbiAgICAgIGlmIChuYW1lID09PSB1bmRlZmluZWQpIG5hbWUgPSBmcmFnbWVudFJFLnRlc3QoaHRtbCkgJiYgUmVnRXhwLiQxXG4gICAgICBpZiAoIShuYW1lIGluIGNvbnRhaW5lcnMpKSBuYW1lID0gJyonXG5cbiAgICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lcnNbbmFtZV1cbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJyArIGh0bWxcbiAgICAgIGRvbSA9ICQuZWFjaChzbGljZS5jYWxsKGNvbnRhaW5lci5jaGlsZE5vZGVzKSwgZnVuY3Rpb24oKXtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChpc1BsYWluT2JqZWN0KHByb3BlcnRpZXMpKSB7XG4gICAgICBub2RlcyA9ICQoZG9tKVxuICAgICAgJC5lYWNoKHByb3BlcnRpZXMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKG1ldGhvZEF0dHJpYnV0ZXMuaW5kZXhPZihrZXkpID4gLTEpIG5vZGVzW2tleV0odmFsdWUpXG4gICAgICAgIGVsc2Ugbm9kZXMuYXR0cihrZXksIHZhbHVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gZG9tXG4gIH1cblxuICAvLyBgJC56ZXB0by5aYCBzd2FwcyBvdXQgdGhlIHByb3RvdHlwZSBvZiB0aGUgZ2l2ZW4gYGRvbWAgYXJyYXlcbiAgLy8gb2Ygbm9kZXMgd2l0aCBgJC5mbmAgYW5kIHRodXMgc3VwcGx5aW5nIGFsbCB0aGUgWmVwdG8gZnVuY3Rpb25zXG4gIC8vIHRvIHRoZSBhcnJheS4gTm90ZSB0aGF0IGBfX3Byb3RvX19gIGlzIG5vdCBzdXBwb3J0ZWQgb24gSW50ZXJuZXRcbiAgLy8gRXhwbG9yZXIuIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZW4gaW4gcGx1Z2lucy5cbiAgemVwdG8uWiA9IGZ1bmN0aW9uKGRvbSwgc2VsZWN0b3IpIHtcbiAgICBkb20gPSBkb20gfHwgW11cbiAgICBkb20uX19wcm90b19fID0gJC5mblxuICAgIGRvbS5zZWxlY3RvciA9IHNlbGVjdG9yIHx8ICcnXG4gICAgcmV0dXJuIGRvbVxuICB9XG5cbiAgLy8gYCQuemVwdG8uaXNaYCBzaG91bGQgcmV0dXJuIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGEgWmVwdG9cbiAgLy8gY29sbGVjdGlvbi4gVGhpcyBtZXRob2QgY2FuIGJlIG92ZXJyaWRlbiBpbiBwbHVnaW5zLlxuICB6ZXB0by5pc1ogPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgemVwdG8uWlxuICB9XG5cbiAgLy8gYCQuemVwdG8uaW5pdGAgaXMgWmVwdG8ncyBjb3VudGVycGFydCB0byBqUXVlcnkncyBgJC5mbi5pbml0YCBhbmRcbiAgLy8gdGFrZXMgYSBDU1Mgc2VsZWN0b3IgYW5kIGFuIG9wdGlvbmFsIGNvbnRleHQgKGFuZCBoYW5kbGVzIHZhcmlvdXNcbiAgLy8gc3BlY2lhbCBjYXNlcykuXG4gIC8vIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZW4gaW4gcGx1Z2lucy5cbiAgemVwdG8uaW5pdCA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gICAgdmFyIGRvbVxuICAgIC8vIElmIG5vdGhpbmcgZ2l2ZW4sIHJldHVybiBhbiBlbXB0eSBaZXB0byBjb2xsZWN0aW9uXG4gICAgaWYgKCFzZWxlY3RvcikgcmV0dXJuIHplcHRvLlooKVxuICAgIC8vIE9wdGltaXplIGZvciBzdHJpbmcgc2VsZWN0b3JzXG4gICAgZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdzdHJpbmcnKSB7XG4gICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnRyaW0oKVxuICAgICAgLy8gSWYgaXQncyBhIGh0bWwgZnJhZ21lbnQsIGNyZWF0ZSBub2RlcyBmcm9tIGl0XG4gICAgICAvLyBOb3RlOiBJbiBib3RoIENocm9tZSAyMSBhbmQgRmlyZWZveCAxNSwgRE9NIGVycm9yIDEyXG4gICAgICAvLyBpcyB0aHJvd24gaWYgdGhlIGZyYWdtZW50IGRvZXNuJ3QgYmVnaW4gd2l0aCA8XG4gICAgICBpZiAoc2VsZWN0b3JbMF0gPT0gJzwnICYmIGZyYWdtZW50UkUudGVzdChzZWxlY3RvcikpXG4gICAgICAgIGRvbSA9IHplcHRvLmZyYWdtZW50KHNlbGVjdG9yLCBSZWdFeHAuJDEsIGNvbnRleHQpLCBzZWxlY3RvciA9IG51bGxcbiAgICAgIC8vIElmIHRoZXJlJ3MgYSBjb250ZXh0LCBjcmVhdGUgYSBjb2xsZWN0aW9uIG9uIHRoYXQgY29udGV4dCBmaXJzdCwgYW5kIHNlbGVjdFxuICAgICAgLy8gbm9kZXMgZnJvbSB0aGVyZVxuICAgICAgZWxzZSBpZiAoY29udGV4dCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gJChjb250ZXh0KS5maW5kKHNlbGVjdG9yKVxuICAgICAgLy8gSWYgaXQncyBhIENTUyBzZWxlY3RvciwgdXNlIGl0IHRvIHNlbGVjdCBub2Rlcy5cbiAgICAgIGVsc2UgZG9tID0gemVwdG8ucXNhKGRvY3VtZW50LCBzZWxlY3RvcilcbiAgICB9XG4gICAgLy8gSWYgYSBmdW5jdGlvbiBpcyBnaXZlbiwgY2FsbCBpdCB3aGVuIHRoZSBET00gaXMgcmVhZHlcbiAgICBlbHNlIGlmIChpc0Z1bmN0aW9uKHNlbGVjdG9yKSkgcmV0dXJuICQoZG9jdW1lbnQpLnJlYWR5KHNlbGVjdG9yKVxuICAgIC8vIElmIGEgWmVwdG8gY29sbGVjdGlvbiBpcyBnaXZlbiwganVzdCByZXR1cm4gaXRcbiAgICBlbHNlIGlmICh6ZXB0by5pc1ooc2VsZWN0b3IpKSByZXR1cm4gc2VsZWN0b3JcbiAgICBlbHNlIHtcbiAgICAgIC8vIG5vcm1hbGl6ZSBhcnJheSBpZiBhbiBhcnJheSBvZiBub2RlcyBpcyBnaXZlblxuICAgICAgaWYgKGlzQXJyYXkoc2VsZWN0b3IpKSBkb20gPSBjb21wYWN0KHNlbGVjdG9yKVxuICAgICAgLy8gV3JhcCBET00gbm9kZXMuXG4gICAgICBlbHNlIGlmIChpc09iamVjdChzZWxlY3RvcikpXG4gICAgICAgIGRvbSA9IFtzZWxlY3Rvcl0sIHNlbGVjdG9yID0gbnVsbFxuICAgICAgLy8gSWYgaXQncyBhIGh0bWwgZnJhZ21lbnQsIGNyZWF0ZSBub2RlcyBmcm9tIGl0XG4gICAgICBlbHNlIGlmIChmcmFnbWVudFJFLnRlc3Qoc2VsZWN0b3IpKVxuICAgICAgICBkb20gPSB6ZXB0by5mcmFnbWVudChzZWxlY3Rvci50cmltKCksIFJlZ0V4cC4kMSwgY29udGV4dCksIHNlbGVjdG9yID0gbnVsbFxuICAgICAgLy8gSWYgdGhlcmUncyBhIGNvbnRleHQsIGNyZWF0ZSBhIGNvbGxlY3Rpb24gb24gdGhhdCBjb250ZXh0IGZpcnN0LCBhbmQgc2VsZWN0XG4gICAgICAvLyBub2RlcyBmcm9tIHRoZXJlXG4gICAgICBlbHNlIGlmIChjb250ZXh0ICE9PSB1bmRlZmluZWQpIHJldHVybiAkKGNvbnRleHQpLmZpbmQoc2VsZWN0b3IpXG4gICAgICAvLyBBbmQgbGFzdCBidXQgbm8gbGVhc3QsIGlmIGl0J3MgYSBDU1Mgc2VsZWN0b3IsIHVzZSBpdCB0byBzZWxlY3Qgbm9kZXMuXG4gICAgICBlbHNlIGRvbSA9IHplcHRvLnFzYShkb2N1bWVudCwgc2VsZWN0b3IpXG4gICAgfVxuICAgIC8vIGNyZWF0ZSBhIG5ldyBaZXB0byBjb2xsZWN0aW9uIGZyb20gdGhlIG5vZGVzIGZvdW5kXG4gICAgcmV0dXJuIHplcHRvLlooZG9tLCBzZWxlY3RvcilcbiAgfVxuXG4gIC8vIGAkYCB3aWxsIGJlIHRoZSBiYXNlIGBaZXB0b2Agb2JqZWN0LiBXaGVuIGNhbGxpbmcgdGhpc1xuICAvLyBmdW5jdGlvbiBqdXN0IGNhbGwgYCQuemVwdG8uaW5pdCwgd2hpY2ggbWFrZXMgdGhlIGltcGxlbWVudGF0aW9uXG4gIC8vIGRldGFpbHMgb2Ygc2VsZWN0aW5nIG5vZGVzIGFuZCBjcmVhdGluZyBaZXB0byBjb2xsZWN0aW9uc1xuICAvLyBwYXRjaGFibGUgaW4gcGx1Z2lucy5cbiAgJCA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBjb250ZXh0KXtcbiAgICByZXR1cm4gemVwdG8uaW5pdChzZWxlY3RvciwgY29udGV4dClcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQsIHNvdXJjZSwgZGVlcCkge1xuICAgIGZvciAoa2V5IGluIHNvdXJjZSlcbiAgICAgIGlmIChkZWVwICYmIChpc1BsYWluT2JqZWN0KHNvdXJjZVtrZXldKSB8fCBpc0FycmF5KHNvdXJjZVtrZXldKSkpIHtcbiAgICAgICAgaWYgKGlzUGxhaW5PYmplY3Qoc291cmNlW2tleV0pICYmICFpc1BsYWluT2JqZWN0KHRhcmdldFtrZXldKSlcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHt9XG4gICAgICAgIGlmIChpc0FycmF5KHNvdXJjZVtrZXldKSAmJiAhaXNBcnJheSh0YXJnZXRba2V5XSkpXG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBbXVxuICAgICAgICBleHRlbmQodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBkZWVwKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoc291cmNlW2tleV0gIT09IHVuZGVmaW5lZCkgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICB9XG5cbiAgLy8gQ29weSBhbGwgYnV0IHVuZGVmaW5lZCBwcm9wZXJ0aWVzIGZyb20gb25lIG9yIG1vcmVcbiAgLy8gb2JqZWN0cyB0byB0aGUgYHRhcmdldGAgb2JqZWN0LlxuICAkLmV4dGVuZCA9IGZ1bmN0aW9uKHRhcmdldCl7XG4gICAgdmFyIGRlZXAsIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgICBpZiAodHlwZW9mIHRhcmdldCA9PSAnYm9vbGVhbicpIHtcbiAgICAgIGRlZXAgPSB0YXJnZXRcbiAgICAgIHRhcmdldCA9IGFyZ3Muc2hpZnQoKVxuICAgIH1cbiAgICBhcmdzLmZvckVhY2goZnVuY3Rpb24oYXJnKXsgZXh0ZW5kKHRhcmdldCwgYXJnLCBkZWVwKSB9KVxuICAgIHJldHVybiB0YXJnZXRcbiAgfVxuXG4gIC8vIGAkLnplcHRvLnFzYWAgaXMgWmVwdG8ncyBDU1Mgc2VsZWN0b3IgaW1wbGVtZW50YXRpb24gd2hpY2hcbiAgLy8gdXNlcyBgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbGAgYW5kIG9wdGltaXplcyBmb3Igc29tZSBzcGVjaWFsIGNhc2VzLCBsaWtlIGAjaWRgLlxuICAvLyBUaGlzIG1ldGhvZCBjYW4gYmUgb3ZlcnJpZGVuIGluIHBsdWdpbnMuXG4gIHplcHRvLnFzYSA9IGZ1bmN0aW9uKGVsZW1lbnQsIHNlbGVjdG9yKXtcbiAgICB2YXIgZm91bmQsXG4gICAgICAgIG1heWJlSUQgPSBzZWxlY3RvclswXSA9PSAnIycsXG4gICAgICAgIG1heWJlQ2xhc3MgPSAhbWF5YmVJRCAmJiBzZWxlY3RvclswXSA9PSAnLicsXG4gICAgICAgIG5hbWVPbmx5ID0gbWF5YmVJRCB8fCBtYXliZUNsYXNzID8gc2VsZWN0b3Iuc2xpY2UoMSkgOiBzZWxlY3RvciwgLy8gRW5zdXJlIHRoYXQgYSAxIGNoYXIgdGFnIG5hbWUgc3RpbGwgZ2V0cyBjaGVja2VkXG4gICAgICAgIGlzU2ltcGxlID0gc2ltcGxlU2VsZWN0b3JSRS50ZXN0KG5hbWVPbmx5KVxuICAgIHJldHVybiAoaXNEb2N1bWVudChlbGVtZW50KSAmJiBpc1NpbXBsZSAmJiBtYXliZUlEKSA/XG4gICAgICAoIChmb3VuZCA9IGVsZW1lbnQuZ2V0RWxlbWVudEJ5SWQobmFtZU9ubHkpKSA/IFtmb3VuZF0gOiBbXSApIDpcbiAgICAgIChlbGVtZW50Lm5vZGVUeXBlICE9PSAxICYmIGVsZW1lbnQubm9kZVR5cGUgIT09IDkpID8gW10gOlxuICAgICAgc2xpY2UuY2FsbChcbiAgICAgICAgaXNTaW1wbGUgJiYgIW1heWJlSUQgP1xuICAgICAgICAgIG1heWJlQ2xhc3MgPyBlbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobmFtZU9ubHkpIDogLy8gSWYgaXQncyBzaW1wbGUsIGl0IGNvdWxkIGJlIGEgY2xhc3NcbiAgICAgICAgICBlbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHNlbGVjdG9yKSA6IC8vIE9yIGEgdGFnXG4gICAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSAvLyBPciBpdCdzIG5vdCBzaW1wbGUsIGFuZCB3ZSBuZWVkIHRvIHF1ZXJ5IGFsbFxuICAgICAgKVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsdGVyZWQobm9kZXMsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yID09IG51bGwgPyAkKG5vZGVzKSA6ICQobm9kZXMpLmZpbHRlcihzZWxlY3RvcilcbiAgfVxuXG4gICQuY29udGFpbnMgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMgP1xuICAgIGZ1bmN0aW9uKHBhcmVudCwgbm9kZSkge1xuICAgICAgcmV0dXJuIHBhcmVudCAhPT0gbm9kZSAmJiBwYXJlbnQuY29udGFpbnMobm9kZSlcbiAgICB9IDpcbiAgICBmdW5jdGlvbihwYXJlbnQsIG5vZGUpIHtcbiAgICAgIHdoaWxlIChub2RlICYmIChub2RlID0gbm9kZS5wYXJlbnROb2RlKSlcbiAgICAgICAgaWYgKG5vZGUgPT09IHBhcmVudCkgcmV0dXJuIHRydWVcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICBmdW5jdGlvbiBmdW5jQXJnKGNvbnRleHQsIGFyZywgaWR4LCBwYXlsb2FkKSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oYXJnKSA/IGFyZy5jYWxsKGNvbnRleHQsIGlkeCwgcGF5bG9hZCkgOiBhcmdcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEF0dHJpYnV0ZShub2RlLCBuYW1lLCB2YWx1ZSkge1xuICAgIHZhbHVlID09IG51bGwgPyBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKSA6IG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKVxuICB9XG5cbiAgLy8gYWNjZXNzIGNsYXNzTmFtZSBwcm9wZXJ0eSB3aGlsZSByZXNwZWN0aW5nIFNWR0FuaW1hdGVkU3RyaW5nXG4gIGZ1bmN0aW9uIGNsYXNzTmFtZShub2RlLCB2YWx1ZSl7XG4gICAgdmFyIGtsYXNzID0gbm9kZS5jbGFzc05hbWUgfHwgJycsXG4gICAgICAgIHN2ZyAgID0ga2xhc3MgJiYga2xhc3MuYmFzZVZhbCAhPT0gdW5kZWZpbmVkXG5cbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHN2ZyA/IGtsYXNzLmJhc2VWYWwgOiBrbGFzc1xuICAgIHN2ZyA/IChrbGFzcy5iYXNlVmFsID0gdmFsdWUpIDogKG5vZGUuY2xhc3NOYW1lID0gdmFsdWUpXG4gIH1cblxuICAvLyBcInRydWVcIiAgPT4gdHJ1ZVxuICAvLyBcImZhbHNlXCIgPT4gZmFsc2VcbiAgLy8gXCJudWxsXCIgID0+IG51bGxcbiAgLy8gXCI0MlwiICAgID0+IDQyXG4gIC8vIFwiNDIuNVwiICA9PiA0Mi41XG4gIC8vIFwiMDhcIiAgICA9PiBcIjA4XCJcbiAgLy8gSlNPTiAgICA9PiBwYXJzZSBpZiB2YWxpZFxuICAvLyBTdHJpbmcgID0+IHNlbGZcbiAgZnVuY3Rpb24gZGVzZXJpYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdmFsdWUgP1xuICAgICAgICB2YWx1ZSA9PSBcInRydWVcIiB8fFxuICAgICAgICAoIHZhbHVlID09IFwiZmFsc2VcIiA/IGZhbHNlIDpcbiAgICAgICAgICB2YWx1ZSA9PSBcIm51bGxcIiA/IG51bGwgOlxuICAgICAgICAgICt2YWx1ZSArIFwiXCIgPT0gdmFsdWUgPyArdmFsdWUgOlxuICAgICAgICAgIC9eW1xcW1xce10vLnRlc3QodmFsdWUpID8gJC5wYXJzZUpTT04odmFsdWUpIDpcbiAgICAgICAgICB2YWx1ZSApXG4gICAgICAgIDogdmFsdWVcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gICQudHlwZSA9IHR5cGVcbiAgJC5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvblxuICAkLmlzV2luZG93ID0gaXNXaW5kb3dcbiAgJC5pc0FycmF5ID0gaXNBcnJheVxuICAkLmlzUGxhaW5PYmplY3QgPSBpc1BsYWluT2JqZWN0XG5cbiAgJC5pc0VtcHR5T2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIG5hbWVcbiAgICBmb3IgKG5hbWUgaW4gb2JqKSByZXR1cm4gZmFsc2VcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgJC5pbkFycmF5ID0gZnVuY3Rpb24oZWxlbSwgYXJyYXksIGkpe1xuICAgIHJldHVybiBlbXB0eUFycmF5LmluZGV4T2YuY2FsbChhcnJheSwgZWxlbSwgaSlcbiAgfVxuXG4gICQuY2FtZWxDYXNlID0gY2FtZWxpemVcbiAgJC50cmltID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgcmV0dXJuIHN0ciA9PSBudWxsID8gXCJcIiA6IFN0cmluZy5wcm90b3R5cGUudHJpbS5jYWxsKHN0cilcbiAgfVxuXG4gIC8vIHBsdWdpbiBjb21wYXRpYmlsaXR5XG4gICQudXVpZCA9IDBcbiAgJC5zdXBwb3J0ID0geyB9XG4gICQuZXhwciA9IHsgfVxuXG4gICQubWFwID0gZnVuY3Rpb24oZWxlbWVudHMsIGNhbGxiYWNrKXtcbiAgICB2YXIgdmFsdWUsIHZhbHVlcyA9IFtdLCBpLCBrZXlcbiAgICBpZiAobGlrZUFycmF5KGVsZW1lbnRzKSlcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IGNhbGxiYWNrKGVsZW1lbnRzW2ldLCBpKVxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkgdmFsdWVzLnB1c2godmFsdWUpXG4gICAgICB9XG4gICAgZWxzZVxuICAgICAgZm9yIChrZXkgaW4gZWxlbWVudHMpIHtcbiAgICAgICAgdmFsdWUgPSBjYWxsYmFjayhlbGVtZW50c1trZXldLCBrZXkpXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB2YWx1ZXMucHVzaCh2YWx1ZSlcbiAgICAgIH1cbiAgICByZXR1cm4gZmxhdHRlbih2YWx1ZXMpXG4gIH1cblxuICAkLmVhY2ggPSBmdW5jdGlvbihlbGVtZW50cywgY2FsbGJhY2spe1xuICAgIHZhciBpLCBrZXlcbiAgICBpZiAobGlrZUFycmF5KGVsZW1lbnRzKSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKVxuICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChlbGVtZW50c1tpXSwgaSwgZWxlbWVudHNbaV0pID09PSBmYWxzZSkgcmV0dXJuIGVsZW1lbnRzXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoa2V5IGluIGVsZW1lbnRzKVxuICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChlbGVtZW50c1trZXldLCBrZXksIGVsZW1lbnRzW2tleV0pID09PSBmYWxzZSkgcmV0dXJuIGVsZW1lbnRzXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzXG4gIH1cblxuICAkLmdyZXAgPSBmdW5jdGlvbihlbGVtZW50cywgY2FsbGJhY2spe1xuICAgIHJldHVybiBmaWx0ZXIuY2FsbChlbGVtZW50cywgY2FsbGJhY2spXG4gIH1cblxuICBpZiAod2luZG93LkpTT04pICQucGFyc2VKU09OID0gSlNPTi5wYXJzZVxuXG4gIC8vIFBvcHVsYXRlIHRoZSBjbGFzczJ0eXBlIG1hcFxuICAkLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yXCIuc3BsaXQoXCIgXCIpLCBmdW5jdGlvbihpLCBuYW1lKSB7XG4gICAgY2xhc3MydHlwZVsgXCJbb2JqZWN0IFwiICsgbmFtZSArIFwiXVwiIF0gPSBuYW1lLnRvTG93ZXJDYXNlKClcbiAgfSlcblxuICAvLyBEZWZpbmUgbWV0aG9kcyB0aGF0IHdpbGwgYmUgYXZhaWxhYmxlIG9uIGFsbFxuICAvLyBaZXB0byBjb2xsZWN0aW9uc1xuICAkLmZuID0ge1xuICAgIC8vIEJlY2F1c2UgYSBjb2xsZWN0aW9uIGFjdHMgbGlrZSBhbiBhcnJheVxuICAgIC8vIGNvcHkgb3ZlciB0aGVzZSB1c2VmdWwgYXJyYXkgZnVuY3Rpb25zLlxuICAgIGZvckVhY2g6IGVtcHR5QXJyYXkuZm9yRWFjaCxcbiAgICByZWR1Y2U6IGVtcHR5QXJyYXkucmVkdWNlLFxuICAgIHB1c2g6IGVtcHR5QXJyYXkucHVzaCxcbiAgICBzb3J0OiBlbXB0eUFycmF5LnNvcnQsXG4gICAgaW5kZXhPZjogZW1wdHlBcnJheS5pbmRleE9mLFxuICAgIGNvbmNhdDogZW1wdHlBcnJheS5jb25jYXQsXG5cbiAgICAvLyBgbWFwYCBhbmQgYHNsaWNlYCBpbiB0aGUgalF1ZXJ5IEFQSSB3b3JrIGRpZmZlcmVudGx5XG4gICAgLy8gZnJvbSB0aGVpciBhcnJheSBjb3VudGVycGFydHNcbiAgICBtYXA6IGZ1bmN0aW9uKGZuKXtcbiAgICAgIHJldHVybiAkKCQubWFwKHRoaXMsIGZ1bmN0aW9uKGVsLCBpKXsgcmV0dXJuIGZuLmNhbGwoZWwsIGksIGVsKSB9KSlcbiAgICB9LFxuICAgIHNsaWNlOiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuICQoc2xpY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKSlcbiAgICB9LFxuXG4gICAgcmVhZHk6IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgIC8vIG5lZWQgdG8gY2hlY2sgaWYgZG9jdW1lbnQuYm9keSBleGlzdHMgZm9yIElFIGFzIHRoYXQgYnJvd3NlciByZXBvcnRzXG4gICAgICAvLyBkb2N1bWVudCByZWFkeSB3aGVuIGl0IGhhc24ndCB5ZXQgY3JlYXRlZCB0aGUgYm9keSBlbGVtZW50XG4gICAgICBpZiAocmVhZHlSRS50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpICYmIGRvY3VtZW50LmJvZHkpIGNhbGxiYWNrKCQpXG4gICAgICBlbHNlIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpeyBjYWxsYmFjaygkKSB9LCBmYWxzZSlcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uKGlkeCl7XG4gICAgICByZXR1cm4gaWR4ID09PSB1bmRlZmluZWQgPyBzbGljZS5jYWxsKHRoaXMpIDogdGhpc1tpZHggPj0gMCA/IGlkeCA6IGlkeCArIHRoaXMubGVuZ3RoXVxuICAgIH0sXG4gICAgdG9BcnJheTogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuZ2V0KCkgfSxcbiAgICBzaXplOiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoXG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgIT0gbnVsbClcbiAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcylcbiAgICAgIH0pXG4gICAgfSxcbiAgICBlYWNoOiBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICBlbXB0eUFycmF5LmV2ZXJ5LmNhbGwodGhpcywgZnVuY3Rpb24oZWwsIGlkeCl7XG4gICAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKGVsLCBpZHgsIGVsKSAhPT0gZmFsc2VcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgZmlsdGVyOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICBpZiAoaXNGdW5jdGlvbihzZWxlY3RvcikpIHJldHVybiB0aGlzLm5vdCh0aGlzLm5vdChzZWxlY3RvcikpXG4gICAgICByZXR1cm4gJChmaWx0ZXIuY2FsbCh0aGlzLCBmdW5jdGlvbihlbGVtZW50KXtcbiAgICAgICAgcmV0dXJuIHplcHRvLm1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpXG4gICAgICB9KSlcbiAgICB9LFxuICAgIGFkZDogZnVuY3Rpb24oc2VsZWN0b3IsY29udGV4dCl7XG4gICAgICByZXR1cm4gJCh1bmlxKHRoaXMuY29uY2F0KCQoc2VsZWN0b3IsY29udGV4dCkpKSlcbiAgICB9LFxuICAgIGlzOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICByZXR1cm4gdGhpcy5sZW5ndGggPiAwICYmIHplcHRvLm1hdGNoZXModGhpc1swXSwgc2VsZWN0b3IpXG4gICAgfSxcbiAgICBub3Q6IGZ1bmN0aW9uKHNlbGVjdG9yKXtcbiAgICAgIHZhciBub2Rlcz1bXVxuICAgICAgaWYgKGlzRnVuY3Rpb24oc2VsZWN0b3IpICYmIHNlbGVjdG9yLmNhbGwgIT09IHVuZGVmaW5lZClcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgaWYgKCFzZWxlY3Rvci5jYWxsKHRoaXMsaWR4KSkgbm9kZXMucHVzaCh0aGlzKVxuICAgICAgICB9KVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBleGNsdWRlcyA9IHR5cGVvZiBzZWxlY3RvciA9PSAnc3RyaW5nJyA/IHRoaXMuZmlsdGVyKHNlbGVjdG9yKSA6XG4gICAgICAgICAgKGxpa2VBcnJheShzZWxlY3RvcikgJiYgaXNGdW5jdGlvbihzZWxlY3Rvci5pdGVtKSkgPyBzbGljZS5jYWxsKHNlbGVjdG9yKSA6ICQoc2VsZWN0b3IpXG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgaWYgKGV4Y2x1ZGVzLmluZGV4T2YoZWwpIDwgMCkgbm9kZXMucHVzaChlbClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHJldHVybiAkKG5vZGVzKVxuICAgIH0sXG4gICAgaGFzOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KHNlbGVjdG9yKSA/XG4gICAgICAgICAgJC5jb250YWlucyh0aGlzLCBzZWxlY3RvcikgOlxuICAgICAgICAgICQodGhpcykuZmluZChzZWxlY3Rvcikuc2l6ZSgpXG4gICAgICB9KVxuICAgIH0sXG4gICAgZXE6IGZ1bmN0aW9uKGlkeCl7XG4gICAgICByZXR1cm4gaWR4ID09PSAtMSA/IHRoaXMuc2xpY2UoaWR4KSA6IHRoaXMuc2xpY2UoaWR4LCArIGlkeCArIDEpXG4gICAgfSxcbiAgICBmaXJzdDogZnVuY3Rpb24oKXtcbiAgICAgIHZhciBlbCA9IHRoaXNbMF1cbiAgICAgIHJldHVybiBlbCAmJiAhaXNPYmplY3QoZWwpID8gZWwgOiAkKGVsKVxuICAgIH0sXG4gICAgbGFzdDogZnVuY3Rpb24oKXtcbiAgICAgIHZhciBlbCA9IHRoaXNbdGhpcy5sZW5ndGggLSAxXVxuICAgICAgcmV0dXJuIGVsICYmICFpc09iamVjdChlbCkgPyBlbCA6ICQoZWwpXG4gICAgfSxcbiAgICBmaW5kOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICB2YXIgcmVzdWx0LCAkdGhpcyA9IHRoaXNcbiAgICAgIGlmICghc2VsZWN0b3IpIHJlc3VsdCA9ICQoKVxuICAgICAgZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdvYmplY3QnKVxuICAgICAgICByZXN1bHQgPSAkKHNlbGVjdG9yKS5maWx0ZXIoZnVuY3Rpb24oKXtcbiAgICAgICAgICB2YXIgbm9kZSA9IHRoaXNcbiAgICAgICAgICByZXR1cm4gZW1wdHlBcnJheS5zb21lLmNhbGwoJHRoaXMsIGZ1bmN0aW9uKHBhcmVudCl7XG4gICAgICAgICAgICByZXR1cm4gJC5jb250YWlucyhwYXJlbnQsIG5vZGUpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIGVsc2UgaWYgKHRoaXMubGVuZ3RoID09IDEpIHJlc3VsdCA9ICQoemVwdG8ucXNhKHRoaXNbMF0sIHNlbGVjdG9yKSlcbiAgICAgIGVsc2UgcmVzdWx0ID0gdGhpcy5tYXAoZnVuY3Rpb24oKXsgcmV0dXJuIHplcHRvLnFzYSh0aGlzLCBzZWxlY3RvcikgfSlcbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9LFxuICAgIGNsb3Nlc3Q6IGZ1bmN0aW9uKHNlbGVjdG9yLCBjb250ZXh0KXtcbiAgICAgIHZhciBub2RlID0gdGhpc1swXSwgY29sbGVjdGlvbiA9IGZhbHNlXG4gICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09ICdvYmplY3QnKSBjb2xsZWN0aW9uID0gJChzZWxlY3RvcilcbiAgICAgIHdoaWxlIChub2RlICYmICEoY29sbGVjdGlvbiA/IGNvbGxlY3Rpb24uaW5kZXhPZihub2RlKSA+PSAwIDogemVwdG8ubWF0Y2hlcyhub2RlLCBzZWxlY3RvcikpKVxuICAgICAgICBub2RlID0gbm9kZSAhPT0gY29udGV4dCAmJiAhaXNEb2N1bWVudChub2RlKSAmJiBub2RlLnBhcmVudE5vZGVcbiAgICAgIHJldHVybiAkKG5vZGUpXG4gICAgfSxcbiAgICBwYXJlbnRzOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICB2YXIgYW5jZXN0b3JzID0gW10sIG5vZGVzID0gdGhpc1xuICAgICAgd2hpbGUgKG5vZGVzLmxlbmd0aCA+IDApXG4gICAgICAgIG5vZGVzID0gJC5tYXAobm9kZXMsIGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgIGlmICgobm9kZSA9IG5vZGUucGFyZW50Tm9kZSkgJiYgIWlzRG9jdW1lbnQobm9kZSkgJiYgYW5jZXN0b3JzLmluZGV4T2Yobm9kZSkgPCAwKSB7XG4gICAgICAgICAgICBhbmNlc3RvcnMucHVzaChub2RlKVxuICAgICAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICByZXR1cm4gZmlsdGVyZWQoYW5jZXN0b3JzLCBzZWxlY3RvcilcbiAgICB9LFxuICAgIHBhcmVudDogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgcmV0dXJuIGZpbHRlcmVkKHVuaXEodGhpcy5wbHVjaygncGFyZW50Tm9kZScpKSwgc2VsZWN0b3IpXG4gICAgfSxcbiAgICBjaGlsZHJlbjogZnVuY3Rpb24oc2VsZWN0b3Ipe1xuICAgICAgcmV0dXJuIGZpbHRlcmVkKHRoaXMubWFwKGZ1bmN0aW9uKCl7IHJldHVybiBjaGlsZHJlbih0aGlzKSB9KSwgc2VsZWN0b3IpXG4gICAgfSxcbiAgICBjb250ZW50czogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKSB7IHJldHVybiBzbGljZS5jYWxsKHRoaXMuY2hpbGROb2RlcykgfSlcbiAgICB9LFxuICAgIHNpYmxpbmdzOiBmdW5jdGlvbihzZWxlY3Rvcil7XG4gICAgICByZXR1cm4gZmlsdGVyZWQodGhpcy5tYXAoZnVuY3Rpb24oaSwgZWwpe1xuICAgICAgICByZXR1cm4gZmlsdGVyLmNhbGwoY2hpbGRyZW4oZWwucGFyZW50Tm9kZSksIGZ1bmN0aW9uKGNoaWxkKXsgcmV0dXJuIGNoaWxkIT09ZWwgfSlcbiAgICAgIH0pLCBzZWxlY3RvcilcbiAgICB9LFxuICAgIGVtcHR5OiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpeyB0aGlzLmlubmVySFRNTCA9ICcnIH0pXG4gICAgfSxcbiAgICAvLyBgcGx1Y2tgIGlzIGJvcnJvd2VkIGZyb20gUHJvdG90eXBlLmpzXG4gICAgcGx1Y2s6IGZ1bmN0aW9uKHByb3BlcnR5KXtcbiAgICAgIHJldHVybiAkLm1hcCh0aGlzLCBmdW5jdGlvbihlbCl7IHJldHVybiBlbFtwcm9wZXJ0eV0gfSlcbiAgICB9LFxuICAgIHNob3c6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9PSBcIm5vbmVcIiAmJiAodGhpcy5zdHlsZS5kaXNwbGF5ID0gJycpXG4gICAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKHRoaXMsICcnKS5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKSA9PSBcIm5vbmVcIilcbiAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBkZWZhdWx0RGlzcGxheSh0aGlzLm5vZGVOYW1lKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHJlcGxhY2VXaXRoOiBmdW5jdGlvbihuZXdDb250ZW50KXtcbiAgICAgIHJldHVybiB0aGlzLmJlZm9yZShuZXdDb250ZW50KS5yZW1vdmUoKVxuICAgIH0sXG4gICAgd3JhcDogZnVuY3Rpb24oc3RydWN0dXJlKXtcbiAgICAgIHZhciBmdW5jID0gaXNGdW5jdGlvbihzdHJ1Y3R1cmUpXG4gICAgICBpZiAodGhpc1swXSAmJiAhZnVuYylcbiAgICAgICAgdmFyIGRvbSAgID0gJChzdHJ1Y3R1cmUpLmdldCgwKSxcbiAgICAgICAgICAgIGNsb25lID0gZG9tLnBhcmVudE5vZGUgfHwgdGhpcy5sZW5ndGggPiAxXG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgICAkKHRoaXMpLndyYXBBbGwoXG4gICAgICAgICAgZnVuYyA/IHN0cnVjdHVyZS5jYWxsKHRoaXMsIGluZGV4KSA6XG4gICAgICAgICAgICBjbG9uZSA/IGRvbS5jbG9uZU5vZGUodHJ1ZSkgOiBkb21cbiAgICAgICAgKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHdyYXBBbGw6IGZ1bmN0aW9uKHN0cnVjdHVyZSl7XG4gICAgICBpZiAodGhpc1swXSkge1xuICAgICAgICAkKHRoaXNbMF0pLmJlZm9yZShzdHJ1Y3R1cmUgPSAkKHN0cnVjdHVyZSkpXG4gICAgICAgIHZhciBjaGlsZHJlblxuICAgICAgICAvLyBkcmlsbCBkb3duIHRvIHRoZSBpbm1vc3QgZWxlbWVudFxuICAgICAgICB3aGlsZSAoKGNoaWxkcmVuID0gc3RydWN0dXJlLmNoaWxkcmVuKCkpLmxlbmd0aCkgc3RydWN0dXJlID0gY2hpbGRyZW4uZmlyc3QoKVxuICAgICAgICAkKHN0cnVjdHVyZSkuYXBwZW5kKHRoaXMpXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgd3JhcElubmVyOiBmdW5jdGlvbihzdHJ1Y3R1cmUpe1xuICAgICAgdmFyIGZ1bmMgPSBpc0Z1bmN0aW9uKHN0cnVjdHVyZSlcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgICB2YXIgc2VsZiA9ICQodGhpcyksIGNvbnRlbnRzID0gc2VsZi5jb250ZW50cygpLFxuICAgICAgICAgICAgZG9tICA9IGZ1bmMgPyBzdHJ1Y3R1cmUuY2FsbCh0aGlzLCBpbmRleCkgOiBzdHJ1Y3R1cmVcbiAgICAgICAgY29udGVudHMubGVuZ3RoID8gY29udGVudHMud3JhcEFsbChkb20pIDogc2VsZi5hcHBlbmQoZG9tKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHVud3JhcDogZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMucGFyZW50KCkuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAkKHRoaXMpLnJlcGxhY2VXaXRoKCQodGhpcykuY2hpbGRyZW4oKSlcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG4gICAgY2xvbmU6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXMuY2xvbmVOb2RlKHRydWUpIH0pXG4gICAgfSxcbiAgICBoaWRlOiBmdW5jdGlvbigpe1xuICAgICAgcmV0dXJuIHRoaXMuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIilcbiAgICB9LFxuICAgIHRvZ2dsZTogZnVuY3Rpb24oc2V0dGluZyl7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBlbCA9ICQodGhpcylcbiAgICAgICAgOyhzZXR0aW5nID09PSB1bmRlZmluZWQgPyBlbC5jc3MoXCJkaXNwbGF5XCIpID09IFwibm9uZVwiIDogc2V0dGluZykgPyBlbC5zaG93KCkgOiBlbC5oaWRlKClcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmV2OiBmdW5jdGlvbihzZWxlY3Rvcil7IHJldHVybiAkKHRoaXMucGx1Y2soJ3ByZXZpb3VzRWxlbWVudFNpYmxpbmcnKSkuZmlsdGVyKHNlbGVjdG9yIHx8ICcqJykgfSxcbiAgICBuZXh0OiBmdW5jdGlvbihzZWxlY3Rvcil7IHJldHVybiAkKHRoaXMucGx1Y2soJ25leHRFbGVtZW50U2libGluZycpKS5maWx0ZXIoc2VsZWN0b3IgfHwgJyonKSB9LFxuICAgIGh0bWw6IGZ1bmN0aW9uKGh0bWwpe1xuICAgICAgcmV0dXJuIDAgaW4gYXJndW1lbnRzID9cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgdmFyIG9yaWdpbkh0bWwgPSB0aGlzLmlubmVySFRNTFxuICAgICAgICAgICQodGhpcykuZW1wdHkoKS5hcHBlbmQoIGZ1bmNBcmcodGhpcywgaHRtbCwgaWR4LCBvcmlnaW5IdG1sKSApXG4gICAgICAgIH0pIDpcbiAgICAgICAgKDAgaW4gdGhpcyA/IHRoaXNbMF0uaW5uZXJIVE1MIDogbnVsbClcbiAgICB9LFxuICAgIHRleHQ6IGZ1bmN0aW9uKHRleHQpe1xuICAgICAgcmV0dXJuIDAgaW4gYXJndW1lbnRzID9cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgdmFyIG5ld1RleHQgPSBmdW5jQXJnKHRoaXMsIHRleHQsIGlkeCwgdGhpcy50ZXh0Q29udGVudClcbiAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gbmV3VGV4dCA9PSBudWxsID8gJycgOiAnJytuZXdUZXh0XG4gICAgICAgIH0pIDpcbiAgICAgICAgKDAgaW4gdGhpcyA/IHRoaXNbMF0udGV4dENvbnRlbnQgOiBudWxsKVxuICAgIH0sXG4gICAgYXR0cjogZnVuY3Rpb24obmFtZSwgdmFsdWUpe1xuICAgICAgdmFyIHJlc3VsdFxuICAgICAgcmV0dXJuICh0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyAmJiAhKDEgaW4gYXJndW1lbnRzKSkgP1xuICAgICAgICAoIXRoaXMubGVuZ3RoIHx8IHRoaXNbMF0ubm9kZVR5cGUgIT09IDEgPyB1bmRlZmluZWQgOlxuICAgICAgICAgICghKHJlc3VsdCA9IHRoaXNbMF0uZ2V0QXR0cmlidXRlKG5hbWUpKSAmJiBuYW1lIGluIHRoaXNbMF0pID8gdGhpc1swXVtuYW1lXSA6IHJlc3VsdFxuICAgICAgICApIDpcbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgaWYgKHRoaXMubm9kZVR5cGUgIT09IDEpIHJldHVyblxuICAgICAgICAgIGlmIChpc09iamVjdChuYW1lKSkgZm9yIChrZXkgaW4gbmFtZSkgc2V0QXR0cmlidXRlKHRoaXMsIGtleSwgbmFtZVtrZXldKVxuICAgICAgICAgIGVsc2Ugc2V0QXR0cmlidXRlKHRoaXMsIG5hbWUsIGZ1bmNBcmcodGhpcywgdmFsdWUsIGlkeCwgdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSkpKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24obmFtZSl7XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7IHRoaXMubm9kZVR5cGUgPT09IDEgJiYgbmFtZS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24oYXR0cmlidXRlKXtcbiAgICAgICAgc2V0QXR0cmlidXRlKHRoaXMsIGF0dHJpYnV0ZSlcbiAgICAgIH0sIHRoaXMpfSlcbiAgICB9LFxuICAgIHByb3A6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKXtcbiAgICAgIG5hbWUgPSBwcm9wTWFwW25hbWVdIHx8IG5hbWVcbiAgICAgIHJldHVybiAoMSBpbiBhcmd1bWVudHMpID9cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgdGhpc1tuYW1lXSA9IGZ1bmNBcmcodGhpcywgdmFsdWUsIGlkeCwgdGhpc1tuYW1lXSlcbiAgICAgICAgfSkgOlxuICAgICAgICAodGhpc1swXSAmJiB0aGlzWzBdW25hbWVdKVxuICAgIH0sXG4gICAgZGF0YTogZnVuY3Rpb24obmFtZSwgdmFsdWUpe1xuICAgICAgdmFyIGF0dHJOYW1lID0gJ2RhdGEtJyArIG5hbWUucmVwbGFjZShjYXBpdGFsUkUsICctJDEnKS50b0xvd2VyQ2FzZSgpXG5cbiAgICAgIHZhciBkYXRhID0gKDEgaW4gYXJndW1lbnRzKSA/XG4gICAgICAgIHRoaXMuYXR0cihhdHRyTmFtZSwgdmFsdWUpIDpcbiAgICAgICAgdGhpcy5hdHRyKGF0dHJOYW1lKVxuXG4gICAgICByZXR1cm4gZGF0YSAhPT0gbnVsbCA/IGRlc2VyaWFsaXplVmFsdWUoZGF0YSkgOiB1bmRlZmluZWRcbiAgICB9LFxuICAgIHZhbDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgcmV0dXJuIDAgaW4gYXJndW1lbnRzID9cbiAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IGZ1bmNBcmcodGhpcywgdmFsdWUsIGlkeCwgdGhpcy52YWx1ZSlcbiAgICAgICAgfSkgOlxuICAgICAgICAodGhpc1swXSAmJiAodGhpc1swXS5tdWx0aXBsZSA/XG4gICAgICAgICAgICQodGhpc1swXSkuZmluZCgnb3B0aW9uJykuZmlsdGVyKGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzLnNlbGVjdGVkIH0pLnBsdWNrKCd2YWx1ZScpIDpcbiAgICAgICAgICAgdGhpc1swXS52YWx1ZSlcbiAgICAgICAgKVxuICAgIH0sXG4gICAgb2Zmc2V0OiBmdW5jdGlvbihjb29yZGluYXRlcyl7XG4gICAgICBpZiAoY29vcmRpbmF0ZXMpIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICAgICAgY29vcmRzID0gZnVuY0FyZyh0aGlzLCBjb29yZGluYXRlcywgaW5kZXgsICR0aGlzLm9mZnNldCgpKSxcbiAgICAgICAgICAgIHBhcmVudE9mZnNldCA9ICR0aGlzLm9mZnNldFBhcmVudCgpLm9mZnNldCgpLFxuICAgICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICAgIHRvcDogIGNvb3Jkcy50b3AgIC0gcGFyZW50T2Zmc2V0LnRvcCxcbiAgICAgICAgICAgICAgbGVmdDogY29vcmRzLmxlZnQgLSBwYXJlbnRPZmZzZXQubGVmdFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGlmICgkdGhpcy5jc3MoJ3Bvc2l0aW9uJykgPT0gJ3N0YXRpYycpIHByb3BzWydwb3NpdGlvbiddID0gJ3JlbGF0aXZlJ1xuICAgICAgICAkdGhpcy5jc3MocHJvcHMpXG4gICAgICB9KVxuICAgICAgaWYgKCF0aGlzLmxlbmd0aCkgcmV0dXJuIG51bGxcbiAgICAgIHZhciBvYmogPSB0aGlzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiBvYmoubGVmdCArIHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgICAgdG9wOiBvYmoudG9wICsgd2luZG93LnBhZ2VZT2Zmc2V0LFxuICAgICAgICB3aWR0aDogTWF0aC5yb3VuZChvYmoud2lkdGgpLFxuICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQob2JqLmhlaWdodClcbiAgICAgIH1cbiAgICB9LFxuICAgIGNzczogZnVuY3Rpb24ocHJvcGVydHksIHZhbHVlKXtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZSwgZWxlbWVudCA9IHRoaXNbMF1cbiAgICAgICAgaWYoIWVsZW1lbnQpIHJldHVyblxuICAgICAgICBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCAnJylcbiAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0eSA9PSAnc3RyaW5nJylcbiAgICAgICAgICByZXR1cm4gZWxlbWVudC5zdHlsZVtjYW1lbGl6ZShwcm9wZXJ0eSldIHx8IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSlcbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICB2YXIgcHJvcHMgPSB7fVxuICAgICAgICAgICQuZWFjaChwcm9wZXJ0eSwgZnVuY3Rpb24oXywgcHJvcCl7XG4gICAgICAgICAgICBwcm9wc1twcm9wXSA9IChlbGVtZW50LnN0eWxlW2NhbWVsaXplKHByb3ApXSB8fCBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcCkpXG4gICAgICAgICAgfSlcbiAgICAgICAgICByZXR1cm4gcHJvcHNcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgY3NzID0gJydcbiAgICAgIGlmICh0eXBlKHByb3BlcnR5KSA9PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKVxuICAgICAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpeyB0aGlzLnN0eWxlLnJlbW92ZVByb3BlcnR5KGRhc2hlcml6ZShwcm9wZXJ0eSkpIH0pXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBjc3MgPSBkYXNoZXJpemUocHJvcGVydHkpICsgXCI6XCIgKyBtYXliZUFkZFB4KHByb3BlcnR5LCB2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoa2V5IGluIHByb3BlcnR5KVxuICAgICAgICAgIGlmICghcHJvcGVydHlba2V5XSAmJiBwcm9wZXJ0eVtrZXldICE9PSAwKVxuICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7IHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkoZGFzaGVyaXplKGtleSkpIH0pXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgY3NzICs9IGRhc2hlcml6ZShrZXkpICsgJzonICsgbWF5YmVBZGRQeChrZXksIHByb3BlcnR5W2tleV0pICsgJzsnXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXsgdGhpcy5zdHlsZS5jc3NUZXh0ICs9ICc7JyArIGNzcyB9KVxuICAgIH0sXG4gICAgaW5kZXg6IGZ1bmN0aW9uKGVsZW1lbnQpe1xuICAgICAgcmV0dXJuIGVsZW1lbnQgPyB0aGlzLmluZGV4T2YoJChlbGVtZW50KVswXSkgOiB0aGlzLnBhcmVudCgpLmNoaWxkcmVuKCkuaW5kZXhPZih0aGlzWzBdKVxuICAgIH0sXG4gICAgaGFzQ2xhc3M6IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgaWYgKCFuYW1lKSByZXR1cm4gZmFsc2VcbiAgICAgIHJldHVybiBlbXB0eUFycmF5LnNvbWUuY2FsbCh0aGlzLCBmdW5jdGlvbihlbCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRlc3QoY2xhc3NOYW1lKGVsKSlcbiAgICAgIH0sIGNsYXNzUkUobmFtZSkpXG4gICAgfSxcbiAgICBhZGRDbGFzczogZnVuY3Rpb24obmFtZSl7XG4gICAgICBpZiAoIW5hbWUpIHJldHVybiB0aGlzXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgIGlmICghKCdjbGFzc05hbWUnIGluIHRoaXMpKSByZXR1cm5cbiAgICAgICAgY2xhc3NMaXN0ID0gW11cbiAgICAgICAgdmFyIGNscyA9IGNsYXNzTmFtZSh0aGlzKSwgbmV3TmFtZSA9IGZ1bmNBcmcodGhpcywgbmFtZSwgaWR4LCBjbHMpXG4gICAgICAgIG5ld05hbWUuc3BsaXQoL1xccysvZykuZm9yRWFjaChmdW5jdGlvbihrbGFzcyl7XG4gICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKGtsYXNzKSkgY2xhc3NMaXN0LnB1c2goa2xhc3MpXG4gICAgICAgIH0sIHRoaXMpXG4gICAgICAgIGNsYXNzTGlzdC5sZW5ndGggJiYgY2xhc3NOYW1lKHRoaXMsIGNscyArIChjbHMgPyBcIiBcIiA6IFwiXCIpICsgY2xhc3NMaXN0LmpvaW4oXCIgXCIpKVxuICAgICAgfSlcbiAgICB9LFxuICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbihuYW1lKXtcbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgaWYgKCEoJ2NsYXNzTmFtZScgaW4gdGhpcykpIHJldHVyblxuICAgICAgICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gY2xhc3NOYW1lKHRoaXMsICcnKVxuICAgICAgICBjbGFzc0xpc3QgPSBjbGFzc05hbWUodGhpcylcbiAgICAgICAgZnVuY0FyZyh0aGlzLCBuYW1lLCBpZHgsIGNsYXNzTGlzdCkuc3BsaXQoL1xccysvZykuZm9yRWFjaChmdW5jdGlvbihrbGFzcyl7XG4gICAgICAgICAgY2xhc3NMaXN0ID0gY2xhc3NMaXN0LnJlcGxhY2UoY2xhc3NSRShrbGFzcyksIFwiIFwiKVxuICAgICAgICB9KVxuICAgICAgICBjbGFzc05hbWUodGhpcywgY2xhc3NMaXN0LnRyaW0oKSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICB0b2dnbGVDbGFzczogZnVuY3Rpb24obmFtZSwgd2hlbil7XG4gICAgICBpZiAoIW5hbWUpIHJldHVybiB0aGlzXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGlkeCl7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksIG5hbWVzID0gZnVuY0FyZyh0aGlzLCBuYW1lLCBpZHgsIGNsYXNzTmFtZSh0aGlzKSlcbiAgICAgICAgbmFtZXMuc3BsaXQoL1xccysvZykuZm9yRWFjaChmdW5jdGlvbihrbGFzcyl7XG4gICAgICAgICAgKHdoZW4gPT09IHVuZGVmaW5lZCA/ICEkdGhpcy5oYXNDbGFzcyhrbGFzcykgOiB3aGVuKSA/XG4gICAgICAgICAgICAkdGhpcy5hZGRDbGFzcyhrbGFzcykgOiAkdGhpcy5yZW1vdmVDbGFzcyhrbGFzcylcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzY3JvbGxUb3A6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVyblxuICAgICAgdmFyIGhhc1Njcm9sbFRvcCA9ICdzY3JvbGxUb3AnIGluIHRoaXNbMF1cbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaGFzU2Nyb2xsVG9wID8gdGhpc1swXS5zY3JvbGxUb3AgOiB0aGlzWzBdLnBhZ2VZT2Zmc2V0XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGhhc1Njcm9sbFRvcCA/XG4gICAgICAgIGZ1bmN0aW9uKCl7IHRoaXMuc2Nyb2xsVG9wID0gdmFsdWUgfSA6XG4gICAgICAgIGZ1bmN0aW9uKCl7IHRoaXMuc2Nyb2xsVG8odGhpcy5zY3JvbGxYLCB2YWx1ZSkgfSlcbiAgICB9LFxuICAgIHNjcm9sbExlZnQ6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVyblxuICAgICAgdmFyIGhhc1Njcm9sbExlZnQgPSAnc2Nyb2xsTGVmdCcgaW4gdGhpc1swXVxuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiBoYXNTY3JvbGxMZWZ0ID8gdGhpc1swXS5zY3JvbGxMZWZ0IDogdGhpc1swXS5wYWdlWE9mZnNldFxuICAgICAgcmV0dXJuIHRoaXMuZWFjaChoYXNTY3JvbGxMZWZ0ID9cbiAgICAgICAgZnVuY3Rpb24oKXsgdGhpcy5zY3JvbGxMZWZ0ID0gdmFsdWUgfSA6XG4gICAgICAgIGZ1bmN0aW9uKCl7IHRoaXMuc2Nyb2xsVG8odmFsdWUsIHRoaXMuc2Nyb2xsWSkgfSlcbiAgICB9LFxuICAgIHBvc2l0aW9uOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVyblxuXG4gICAgICB2YXIgZWxlbSA9IHRoaXNbMF0sXG4gICAgICAgIC8vIEdldCAqcmVhbCogb2Zmc2V0UGFyZW50XG4gICAgICAgIG9mZnNldFBhcmVudCA9IHRoaXMub2Zmc2V0UGFyZW50KCksXG4gICAgICAgIC8vIEdldCBjb3JyZWN0IG9mZnNldHNcbiAgICAgICAgb2Zmc2V0ICAgICAgID0gdGhpcy5vZmZzZXQoKSxcbiAgICAgICAgcGFyZW50T2Zmc2V0ID0gcm9vdE5vZGVSRS50ZXN0KG9mZnNldFBhcmVudFswXS5ub2RlTmFtZSkgPyB7IHRvcDogMCwgbGVmdDogMCB9IDogb2Zmc2V0UGFyZW50Lm9mZnNldCgpXG5cbiAgICAgIC8vIFN1YnRyYWN0IGVsZW1lbnQgbWFyZ2luc1xuICAgICAgLy8gbm90ZTogd2hlbiBhbiBlbGVtZW50IGhhcyBtYXJnaW46IGF1dG8gdGhlIG9mZnNldExlZnQgYW5kIG1hcmdpbkxlZnRcbiAgICAgIC8vIGFyZSB0aGUgc2FtZSBpbiBTYWZhcmkgY2F1c2luZyBvZmZzZXQubGVmdCB0byBpbmNvcnJlY3RseSBiZSAwXG4gICAgICBvZmZzZXQudG9wICAtPSBwYXJzZUZsb2F0KCAkKGVsZW0pLmNzcygnbWFyZ2luLXRvcCcpICkgfHwgMFxuICAgICAgb2Zmc2V0LmxlZnQgLT0gcGFyc2VGbG9hdCggJChlbGVtKS5jc3MoJ21hcmdpbi1sZWZ0JykgKSB8fCAwXG5cbiAgICAgIC8vIEFkZCBvZmZzZXRQYXJlbnQgYm9yZGVyc1xuICAgICAgcGFyZW50T2Zmc2V0LnRvcCAgKz0gcGFyc2VGbG9hdCggJChvZmZzZXRQYXJlbnRbMF0pLmNzcygnYm9yZGVyLXRvcC13aWR0aCcpICkgfHwgMFxuICAgICAgcGFyZW50T2Zmc2V0LmxlZnQgKz0gcGFyc2VGbG9hdCggJChvZmZzZXRQYXJlbnRbMF0pLmNzcygnYm9yZGVyLWxlZnQtd2lkdGgnKSApIHx8IDBcblxuICAgICAgLy8gU3VidHJhY3QgdGhlIHR3byBvZmZzZXRzXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b3A6ICBvZmZzZXQudG9wICAtIHBhcmVudE9mZnNldC50b3AsXG4gICAgICAgIGxlZnQ6IG9mZnNldC5sZWZ0IC0gcGFyZW50T2Zmc2V0LmxlZnRcbiAgICAgIH1cbiAgICB9LFxuICAgIG9mZnNldFBhcmVudDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMub2Zmc2V0UGFyZW50IHx8IGRvY3VtZW50LmJvZHlcbiAgICAgICAgd2hpbGUgKHBhcmVudCAmJiAhcm9vdE5vZGVSRS50ZXN0KHBhcmVudC5ub2RlTmFtZSkgJiYgJChwYXJlbnQpLmNzcyhcInBvc2l0aW9uXCIpID09IFwic3RhdGljXCIpXG4gICAgICAgICAgcGFyZW50ID0gcGFyZW50Lm9mZnNldFBhcmVudFxuICAgICAgICByZXR1cm4gcGFyZW50XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIGZvciBub3dcbiAgJC5mbi5kZXRhY2ggPSAkLmZuLnJlbW92ZVxuXG4gIC8vIEdlbmVyYXRlIHRoZSBgd2lkdGhgIGFuZCBgaGVpZ2h0YCBmdW5jdGlvbnNcbiAgO1snd2lkdGgnLCAnaGVpZ2h0J10uZm9yRWFjaChmdW5jdGlvbihkaW1lbnNpb24pe1xuICAgIHZhciBkaW1lbnNpb25Qcm9wZXJ0eSA9XG4gICAgICBkaW1lbnNpb24ucmVwbGFjZSgvLi8sIGZ1bmN0aW9uKG0peyByZXR1cm4gbVswXS50b1VwcGVyQ2FzZSgpIH0pXG5cbiAgICAkLmZuW2RpbWVuc2lvbl0gPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICB2YXIgb2Zmc2V0LCBlbCA9IHRoaXNbMF1cbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaXNXaW5kb3coZWwpID8gZWxbJ2lubmVyJyArIGRpbWVuc2lvblByb3BlcnR5XSA6XG4gICAgICAgIGlzRG9jdW1lbnQoZWwpID8gZWwuZG9jdW1lbnRFbGVtZW50WydzY3JvbGwnICsgZGltZW5zaW9uUHJvcGVydHldIDpcbiAgICAgICAgKG9mZnNldCA9IHRoaXMub2Zmc2V0KCkpICYmIG9mZnNldFtkaW1lbnNpb25dXG4gICAgICBlbHNlIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oaWR4KXtcbiAgICAgICAgZWwgPSAkKHRoaXMpXG4gICAgICAgIGVsLmNzcyhkaW1lbnNpb24sIGZ1bmNBcmcodGhpcywgdmFsdWUsIGlkeCwgZWxbZGltZW5zaW9uXSgpKSlcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIHRyYXZlcnNlTm9kZShub2RlLCBmdW4pIHtcbiAgICBmdW4obm9kZSlcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKVxuICAgICAgdHJhdmVyc2VOb2RlKG5vZGUuY2hpbGROb2Rlc1tpXSwgZnVuKVxuICB9XG5cbiAgLy8gR2VuZXJhdGUgdGhlIGBhZnRlcmAsIGBwcmVwZW5kYCwgYGJlZm9yZWAsIGBhcHBlbmRgLFxuICAvLyBgaW5zZXJ0QWZ0ZXJgLCBgaW5zZXJ0QmVmb3JlYCwgYGFwcGVuZFRvYCwgYW5kIGBwcmVwZW5kVG9gIG1ldGhvZHMuXG4gIGFkamFjZW5jeU9wZXJhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKG9wZXJhdG9yLCBvcGVyYXRvckluZGV4KSB7XG4gICAgdmFyIGluc2lkZSA9IG9wZXJhdG9ySW5kZXggJSAyIC8vPT4gcHJlcGVuZCwgYXBwZW5kXG5cbiAgICAkLmZuW29wZXJhdG9yXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBhcmd1bWVudHMgY2FuIGJlIG5vZGVzLCBhcnJheXMgb2Ygbm9kZXMsIFplcHRvIG9iamVjdHMgYW5kIEhUTUwgc3RyaW5nc1xuICAgICAgdmFyIGFyZ1R5cGUsIG5vZGVzID0gJC5tYXAoYXJndW1lbnRzLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgICAgIGFyZ1R5cGUgPSB0eXBlKGFyZylcbiAgICAgICAgICAgIHJldHVybiBhcmdUeXBlID09IFwib2JqZWN0XCIgfHwgYXJnVHlwZSA9PSBcImFycmF5XCIgfHwgYXJnID09IG51bGwgP1xuICAgICAgICAgICAgICBhcmcgOiB6ZXB0by5mcmFnbWVudChhcmcpXG4gICAgICAgICAgfSksXG4gICAgICAgICAgcGFyZW50LCBjb3B5QnlDbG9uZSA9IHRoaXMubGVuZ3RoID4gMVxuICAgICAgaWYgKG5vZGVzLmxlbmd0aCA8IDEpIHJldHVybiB0aGlzXG5cbiAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oXywgdGFyZ2V0KXtcbiAgICAgICAgcGFyZW50ID0gaW5zaWRlID8gdGFyZ2V0IDogdGFyZ2V0LnBhcmVudE5vZGVcblxuICAgICAgICAvLyBjb252ZXJ0IGFsbCBtZXRob2RzIHRvIGEgXCJiZWZvcmVcIiBvcGVyYXRpb25cbiAgICAgICAgdGFyZ2V0ID0gb3BlcmF0b3JJbmRleCA9PSAwID8gdGFyZ2V0Lm5leHRTaWJsaW5nIDpcbiAgICAgICAgICAgICAgICAgb3BlcmF0b3JJbmRleCA9PSAxID8gdGFyZ2V0LmZpcnN0Q2hpbGQgOlxuICAgICAgICAgICAgICAgICBvcGVyYXRvckluZGV4ID09IDIgPyB0YXJnZXQgOlxuICAgICAgICAgICAgICAgICBudWxsXG5cbiAgICAgICAgdmFyIHBhcmVudEluRG9jdW1lbnQgPSAkLmNvbnRhaW5zKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgcGFyZW50KVxuXG4gICAgICAgIG5vZGVzLmZvckVhY2goZnVuY3Rpb24obm9kZSl7XG4gICAgICAgICAgaWYgKGNvcHlCeUNsb25lKSBub2RlID0gbm9kZS5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgICBlbHNlIGlmICghcGFyZW50KSByZXR1cm4gJChub2RlKS5yZW1vdmUoKVxuXG4gICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShub2RlLCB0YXJnZXQpXG4gICAgICAgICAgaWYgKHBhcmVudEluRG9jdW1lbnQpIHRyYXZlcnNlTm9kZShub2RlLCBmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBpZiAoZWwubm9kZU5hbWUgIT0gbnVsbCAmJiBlbC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJyAmJlxuICAgICAgICAgICAgICAgKCFlbC50eXBlIHx8IGVsLnR5cGUgPT09ICd0ZXh0L2phdmFzY3JpcHQnKSAmJiAhZWwuc3JjKVxuICAgICAgICAgICAgICB3aW5kb3dbJ2V2YWwnXS5jYWxsKHdpbmRvdywgZWwuaW5uZXJIVE1MKVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIGFmdGVyICAgID0+IGluc2VydEFmdGVyXG4gICAgLy8gcHJlcGVuZCAgPT4gcHJlcGVuZFRvXG4gICAgLy8gYmVmb3JlICAgPT4gaW5zZXJ0QmVmb3JlXG4gICAgLy8gYXBwZW5kICAgPT4gYXBwZW5kVG9cbiAgICAkLmZuW2luc2lkZSA/IG9wZXJhdG9yKydUbycgOiAnaW5zZXJ0Jysob3BlcmF0b3JJbmRleCA/ICdCZWZvcmUnIDogJ0FmdGVyJyldID0gZnVuY3Rpb24oaHRtbCl7XG4gICAgICAkKGh0bWwpW29wZXJhdG9yXSh0aGlzKVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gIH0pXG5cbiAgemVwdG8uWi5wcm90b3R5cGUgPSAkLmZuXG5cbiAgLy8gRXhwb3J0IGludGVybmFsIEFQSSBmdW5jdGlvbnMgaW4gdGhlIGAkLnplcHRvYCBuYW1lc3BhY2VcbiAgemVwdG8udW5pcSA9IHVuaXFcbiAgemVwdG8uZGVzZXJpYWxpemVWYWx1ZSA9IGRlc2VyaWFsaXplVmFsdWVcbiAgJC56ZXB0byA9IHplcHRvXG5cbiAgcmV0dXJuICRcbn0pKClcblxud2luZG93LlplcHRvID0gWmVwdG9cbndpbmRvdy4kID09PSB1bmRlZmluZWQgJiYgKHdpbmRvdy4kID0gWmVwdG8pXG5cbjsoZnVuY3Rpb24oJCl7XG4gIHZhciBfemlkID0gMSwgdW5kZWZpbmVkLFxuICAgICAgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UsXG4gICAgICBpc0Z1bmN0aW9uID0gJC5pc0Z1bmN0aW9uLFxuICAgICAgaXNTdHJpbmcgPSBmdW5jdGlvbihvYmopeyByZXR1cm4gdHlwZW9mIG9iaiA9PSAnc3RyaW5nJyB9LFxuICAgICAgaGFuZGxlcnMgPSB7fSxcbiAgICAgIHNwZWNpYWxFdmVudHM9e30sXG4gICAgICBmb2N1c2luU3VwcG9ydGVkID0gJ29uZm9jdXNpbicgaW4gd2luZG93LFxuICAgICAgZm9jdXMgPSB7IGZvY3VzOiAnZm9jdXNpbicsIGJsdXI6ICdmb2N1c291dCcgfSxcbiAgICAgIGhvdmVyID0geyBtb3VzZWVudGVyOiAnbW91c2VvdmVyJywgbW91c2VsZWF2ZTogJ21vdXNlb3V0JyB9XG5cbiAgc3BlY2lhbEV2ZW50cy5jbGljayA9IHNwZWNpYWxFdmVudHMubW91c2Vkb3duID0gc3BlY2lhbEV2ZW50cy5tb3VzZXVwID0gc3BlY2lhbEV2ZW50cy5tb3VzZW1vdmUgPSAnTW91c2VFdmVudHMnXG5cbiAgZnVuY3Rpb24gemlkKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5femlkIHx8IChlbGVtZW50Ll96aWQgPSBfemlkKyspXG4gIH1cbiAgZnVuY3Rpb24gZmluZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50LCBmbiwgc2VsZWN0b3IpIHtcbiAgICBldmVudCA9IHBhcnNlKGV2ZW50KVxuICAgIGlmIChldmVudC5ucykgdmFyIG1hdGNoZXIgPSBtYXRjaGVyRm9yKGV2ZW50Lm5zKVxuICAgIHJldHVybiAoaGFuZGxlcnNbemlkKGVsZW1lbnQpXSB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgIHJldHVybiBoYW5kbGVyXG4gICAgICAgICYmICghZXZlbnQuZSAgfHwgaGFuZGxlci5lID09IGV2ZW50LmUpXG4gICAgICAgICYmICghZXZlbnQubnMgfHwgbWF0Y2hlci50ZXN0KGhhbmRsZXIubnMpKVxuICAgICAgICAmJiAoIWZuICAgICAgIHx8IHppZChoYW5kbGVyLmZuKSA9PT0gemlkKGZuKSlcbiAgICAgICAgJiYgKCFzZWxlY3RvciB8fCBoYW5kbGVyLnNlbCA9PSBzZWxlY3RvcilcbiAgICB9KVxuICB9XG4gIGZ1bmN0aW9uIHBhcnNlKGV2ZW50KSB7XG4gICAgdmFyIHBhcnRzID0gKCcnICsgZXZlbnQpLnNwbGl0KCcuJylcbiAgICByZXR1cm4ge2U6IHBhcnRzWzBdLCBuczogcGFydHMuc2xpY2UoMSkuc29ydCgpLmpvaW4oJyAnKX1cbiAgfVxuICBmdW5jdGlvbiBtYXRjaGVyRm9yKG5zKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJyg/Ol58ICknICsgbnMucmVwbGFjZSgnICcsICcgLiogPycpICsgJyg/OiB8JCknKVxuICB9XG5cbiAgZnVuY3Rpb24gZXZlbnRDYXB0dXJlKGhhbmRsZXIsIGNhcHR1cmVTZXR0aW5nKSB7XG4gICAgcmV0dXJuIGhhbmRsZXIuZGVsICYmXG4gICAgICAoIWZvY3VzaW5TdXBwb3J0ZWQgJiYgKGhhbmRsZXIuZSBpbiBmb2N1cykpIHx8XG4gICAgICAhIWNhcHR1cmVTZXR0aW5nXG4gIH1cblxuICBmdW5jdGlvbiByZWFsRXZlbnQodHlwZSkge1xuICAgIHJldHVybiBob3Zlclt0eXBlXSB8fCAoZm9jdXNpblN1cHBvcnRlZCAmJiBmb2N1c1t0eXBlXSkgfHwgdHlwZVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGVsZW1lbnQsIGV2ZW50cywgZm4sIGRhdGEsIHNlbGVjdG9yLCBkZWxlZ2F0b3IsIGNhcHR1cmUpe1xuICAgIHZhciBpZCA9IHppZChlbGVtZW50KSwgc2V0ID0gKGhhbmRsZXJzW2lkXSB8fCAoaGFuZGxlcnNbaWRdID0gW10pKVxuICAgIGV2ZW50cy5zcGxpdCgvXFxzLykuZm9yRWFjaChmdW5jdGlvbihldmVudCl7XG4gICAgICBpZiAoZXZlbnQgPT0gJ3JlYWR5JykgcmV0dXJuICQoZG9jdW1lbnQpLnJlYWR5KGZuKVxuICAgICAgdmFyIGhhbmRsZXIgICA9IHBhcnNlKGV2ZW50KVxuICAgICAgaGFuZGxlci5mbiAgICA9IGZuXG4gICAgICBoYW5kbGVyLnNlbCAgID0gc2VsZWN0b3JcbiAgICAgIC8vIGVtdWxhdGUgbW91c2VlbnRlciwgbW91c2VsZWF2ZVxuICAgICAgaWYgKGhhbmRsZXIuZSBpbiBob3ZlcikgZm4gPSBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyIHJlbGF0ZWQgPSBlLnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgaWYgKCFyZWxhdGVkIHx8IChyZWxhdGVkICE9PSB0aGlzICYmICEkLmNvbnRhaW5zKHRoaXMsIHJlbGF0ZWQpKSlcbiAgICAgICAgICByZXR1cm4gaGFuZGxlci5mbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICB9XG4gICAgICBoYW5kbGVyLmRlbCAgID0gZGVsZWdhdG9yXG4gICAgICB2YXIgY2FsbGJhY2sgID0gZGVsZWdhdG9yIHx8IGZuXG4gICAgICBoYW5kbGVyLnByb3h5ID0gZnVuY3Rpb24oZSl7XG4gICAgICAgIGUgPSBjb21wYXRpYmxlKGUpXG4gICAgICAgIGlmIChlLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpIHJldHVyblxuICAgICAgICBlLmRhdGEgPSBkYXRhXG4gICAgICAgIHZhciByZXN1bHQgPSBjYWxsYmFjay5hcHBseShlbGVtZW50LCBlLl9hcmdzID09IHVuZGVmaW5lZCA/IFtlXSA6IFtlXS5jb25jYXQoZS5fYXJncykpXG4gICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSBlLnByZXZlbnREZWZhdWx0KCksIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgICAgaGFuZGxlci5pID0gc2V0Lmxlbmd0aFxuICAgICAgc2V0LnB1c2goaGFuZGxlcilcbiAgICAgIGlmICgnYWRkRXZlbnRMaXN0ZW5lcicgaW4gZWxlbWVudClcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHJlYWxFdmVudChoYW5kbGVyLmUpLCBoYW5kbGVyLnByb3h5LCBldmVudENhcHR1cmUoaGFuZGxlciwgY2FwdHVyZSkpXG4gICAgfSlcbiAgfVxuICBmdW5jdGlvbiByZW1vdmUoZWxlbWVudCwgZXZlbnRzLCBmbiwgc2VsZWN0b3IsIGNhcHR1cmUpe1xuICAgIHZhciBpZCA9IHppZChlbGVtZW50KVxuICAgIDsoZXZlbnRzIHx8ICcnKS5zcGxpdCgvXFxzLykuZm9yRWFjaChmdW5jdGlvbihldmVudCl7XG4gICAgICBmaW5kSGFuZGxlcnMoZWxlbWVudCwgZXZlbnQsIGZuLCBzZWxlY3RvcikuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKXtcbiAgICAgICAgZGVsZXRlIGhhbmRsZXJzW2lkXVtoYW5kbGVyLmldXG4gICAgICBpZiAoJ3JlbW92ZUV2ZW50TGlzdGVuZXInIGluIGVsZW1lbnQpXG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihyZWFsRXZlbnQoaGFuZGxlci5lKSwgaGFuZGxlci5wcm94eSwgZXZlbnRDYXB0dXJlKGhhbmRsZXIsIGNhcHR1cmUpKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgJC5ldmVudCA9IHsgYWRkOiBhZGQsIHJlbW92ZTogcmVtb3ZlIH1cblxuICAkLnByb3h5ID0gZnVuY3Rpb24oZm4sIGNvbnRleHQpIHtcbiAgICB2YXIgYXJncyA9ICgyIGluIGFyZ3VtZW50cykgJiYgc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpXG4gICAgaWYgKGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICB2YXIgcHJveHlGbiA9IGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShjb250ZXh0LCBhcmdzID8gYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKSA6IGFyZ3VtZW50cykgfVxuICAgICAgcHJveHlGbi5femlkID0gemlkKGZuKVxuICAgICAgcmV0dXJuIHByb3h5Rm5cbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKGNvbnRleHQpKSB7XG4gICAgICBpZiAoYXJncykge1xuICAgICAgICBhcmdzLnVuc2hpZnQoZm5bY29udGV4dF0sIGZuKVxuICAgICAgICByZXR1cm4gJC5wcm94eS5hcHBseShudWxsLCBhcmdzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICQucHJveHkoZm5bY29udGV4dF0sIGZuKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZXhwZWN0ZWQgZnVuY3Rpb25cIilcbiAgICB9XG4gIH1cblxuICAkLmZuLmJpbmQgPSBmdW5jdGlvbihldmVudCwgZGF0YSwgY2FsbGJhY2spe1xuICAgIHJldHVybiB0aGlzLm9uKGV2ZW50LCBkYXRhLCBjYWxsYmFjaylcbiAgfVxuICAkLmZuLnVuYmluZCA9IGZ1bmN0aW9uKGV2ZW50LCBjYWxsYmFjayl7XG4gICAgcmV0dXJuIHRoaXMub2ZmKGV2ZW50LCBjYWxsYmFjaylcbiAgfVxuICAkLmZuLm9uZSA9IGZ1bmN0aW9uKGV2ZW50LCBzZWxlY3RvciwgZGF0YSwgY2FsbGJhY2spe1xuICAgIHJldHVybiB0aGlzLm9uKGV2ZW50LCBzZWxlY3RvciwgZGF0YSwgY2FsbGJhY2ssIDEpXG4gIH1cblxuICB2YXIgcmV0dXJuVHJ1ZSA9IGZ1bmN0aW9uKCl7cmV0dXJuIHRydWV9LFxuICAgICAgcmV0dXJuRmFsc2UgPSBmdW5jdGlvbigpe3JldHVybiBmYWxzZX0sXG4gICAgICBpZ25vcmVQcm9wZXJ0aWVzID0gL14oW0EtWl18cmV0dXJuVmFsdWUkfGxheWVyW1hZXSQpLyxcbiAgICAgIGV2ZW50TWV0aG9kcyA9IHtcbiAgICAgICAgcHJldmVudERlZmF1bHQ6ICdpc0RlZmF1bHRQcmV2ZW50ZWQnLFxuICAgICAgICBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ICdpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCcsXG4gICAgICAgIHN0b3BQcm9wYWdhdGlvbjogJ2lzUHJvcGFnYXRpb25TdG9wcGVkJ1xuICAgICAgfVxuXG4gIGZ1bmN0aW9uIGNvbXBhdGlibGUoZXZlbnQsIHNvdXJjZSkge1xuICAgIGlmIChzb3VyY2UgfHwgIWV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgc291cmNlIHx8IChzb3VyY2UgPSBldmVudClcblxuICAgICAgJC5lYWNoKGV2ZW50TWV0aG9kcywgZnVuY3Rpb24obmFtZSwgcHJlZGljYXRlKSB7XG4gICAgICAgIHZhciBzb3VyY2VNZXRob2QgPSBzb3VyY2VbbmFtZV1cbiAgICAgICAgZXZlbnRbbmFtZV0gPSBmdW5jdGlvbigpe1xuICAgICAgICAgIHRoaXNbcHJlZGljYXRlXSA9IHJldHVyblRydWVcbiAgICAgICAgICByZXR1cm4gc291cmNlTWV0aG9kICYmIHNvdXJjZU1ldGhvZC5hcHBseShzb3VyY2UsIGFyZ3VtZW50cylcbiAgICAgICAgfVxuICAgICAgICBldmVudFtwcmVkaWNhdGVdID0gcmV0dXJuRmFsc2VcbiAgICAgIH0pXG5cbiAgICAgIGlmIChzb3VyY2UuZGVmYXVsdFByZXZlbnRlZCAhPT0gdW5kZWZpbmVkID8gc291cmNlLmRlZmF1bHRQcmV2ZW50ZWQgOlxuICAgICAgICAgICdyZXR1cm5WYWx1ZScgaW4gc291cmNlID8gc291cmNlLnJldHVyblZhbHVlID09PSBmYWxzZSA6XG4gICAgICAgICAgc291cmNlLmdldFByZXZlbnREZWZhdWx0ICYmIHNvdXJjZS5nZXRQcmV2ZW50RGVmYXVsdCgpKVxuICAgICAgICBldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXR1cm5UcnVlXG4gICAgfVxuICAgIHJldHVybiBldmVudFxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJveHkoZXZlbnQpIHtcbiAgICB2YXIga2V5LCBwcm94eSA9IHsgb3JpZ2luYWxFdmVudDogZXZlbnQgfVxuICAgIGZvciAoa2V5IGluIGV2ZW50KVxuICAgICAgaWYgKCFpZ25vcmVQcm9wZXJ0aWVzLnRlc3Qoa2V5KSAmJiBldmVudFtrZXldICE9PSB1bmRlZmluZWQpIHByb3h5W2tleV0gPSBldmVudFtrZXldXG5cbiAgICByZXR1cm4gY29tcGF0aWJsZShwcm94eSwgZXZlbnQpXG4gIH1cblxuICAkLmZuLmRlbGVnYXRlID0gZnVuY3Rpb24oc2VsZWN0b3IsIGV2ZW50LCBjYWxsYmFjayl7XG4gICAgcmV0dXJuIHRoaXMub24oZXZlbnQsIHNlbGVjdG9yLCBjYWxsYmFjaylcbiAgfVxuICAkLmZuLnVuZGVsZWdhdGUgPSBmdW5jdGlvbihzZWxlY3RvciwgZXZlbnQsIGNhbGxiYWNrKXtcbiAgICByZXR1cm4gdGhpcy5vZmYoZXZlbnQsIHNlbGVjdG9yLCBjYWxsYmFjaylcbiAgfVxuXG4gICQuZm4ubGl2ZSA9IGZ1bmN0aW9uKGV2ZW50LCBjYWxsYmFjayl7XG4gICAgJChkb2N1bWVudC5ib2R5KS5kZWxlZ2F0ZSh0aGlzLnNlbGVjdG9yLCBldmVudCwgY2FsbGJhY2spXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICAkLmZuLmRpZSA9IGZ1bmN0aW9uKGV2ZW50LCBjYWxsYmFjayl7XG4gICAgJChkb2N1bWVudC5ib2R5KS51bmRlbGVnYXRlKHRoaXMuc2VsZWN0b3IsIGV2ZW50LCBjYWxsYmFjaylcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgJC5mbi5vbiA9IGZ1bmN0aW9uKGV2ZW50LCBzZWxlY3RvciwgZGF0YSwgY2FsbGJhY2ssIG9uZSl7XG4gICAgdmFyIGF1dG9SZW1vdmUsIGRlbGVnYXRvciwgJHRoaXMgPSB0aGlzXG4gICAgaWYgKGV2ZW50ICYmICFpc1N0cmluZyhldmVudCkpIHtcbiAgICAgICQuZWFjaChldmVudCwgZnVuY3Rpb24odHlwZSwgZm4pe1xuICAgICAgICAkdGhpcy5vbih0eXBlLCBzZWxlY3RvciwgZGF0YSwgZm4sIG9uZSlcbiAgICAgIH0pXG4gICAgICByZXR1cm4gJHRoaXNcbiAgICB9XG5cbiAgICBpZiAoIWlzU3RyaW5nKHNlbGVjdG9yKSAmJiAhaXNGdW5jdGlvbihjYWxsYmFjaykgJiYgY2FsbGJhY2sgIT09IGZhbHNlKVxuICAgICAgY2FsbGJhY2sgPSBkYXRhLCBkYXRhID0gc2VsZWN0b3IsIHNlbGVjdG9yID0gdW5kZWZpbmVkXG4gICAgaWYgKGlzRnVuY3Rpb24oZGF0YSkgfHwgZGF0YSA9PT0gZmFsc2UpXG4gICAgICBjYWxsYmFjayA9IGRhdGEsIGRhdGEgPSB1bmRlZmluZWRcblxuICAgIGlmIChjYWxsYmFjayA9PT0gZmFsc2UpIGNhbGxiYWNrID0gcmV0dXJuRmFsc2VcblxuICAgIHJldHVybiAkdGhpcy5lYWNoKGZ1bmN0aW9uKF8sIGVsZW1lbnQpe1xuICAgICAgaWYgKG9uZSkgYXV0b1JlbW92ZSA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICByZW1vdmUoZWxlbWVudCwgZS50eXBlLCBjYWxsYmFjaylcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGVjdG9yKSBkZWxlZ2F0b3IgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyIGV2dCwgbWF0Y2ggPSAkKGUudGFyZ2V0KS5jbG9zZXN0KHNlbGVjdG9yLCBlbGVtZW50KS5nZXQoMClcbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoICE9PSBlbGVtZW50KSB7XG4gICAgICAgICAgZXZ0ID0gJC5leHRlbmQoY3JlYXRlUHJveHkoZSksIHtjdXJyZW50VGFyZ2V0OiBtYXRjaCwgbGl2ZUZpcmVkOiBlbGVtZW50fSlcbiAgICAgICAgICByZXR1cm4gKGF1dG9SZW1vdmUgfHwgY2FsbGJhY2spLmFwcGx5KG1hdGNoLCBbZXZ0XS5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhZGQoZWxlbWVudCwgZXZlbnQsIGNhbGxiYWNrLCBkYXRhLCBzZWxlY3RvciwgZGVsZWdhdG9yIHx8IGF1dG9SZW1vdmUpXG4gICAgfSlcbiAgfVxuICAkLmZuLm9mZiA9IGZ1bmN0aW9uKGV2ZW50LCBzZWxlY3RvciwgY2FsbGJhY2spe1xuICAgIHZhciAkdGhpcyA9IHRoaXNcbiAgICBpZiAoZXZlbnQgJiYgIWlzU3RyaW5nKGV2ZW50KSkge1xuICAgICAgJC5lYWNoKGV2ZW50LCBmdW5jdGlvbih0eXBlLCBmbil7XG4gICAgICAgICR0aGlzLm9mZih0eXBlLCBzZWxlY3RvciwgZm4pXG4gICAgICB9KVxuICAgICAgcmV0dXJuICR0aGlzXG4gICAgfVxuXG4gICAgaWYgKCFpc1N0cmluZyhzZWxlY3RvcikgJiYgIWlzRnVuY3Rpb24oY2FsbGJhY2spICYmIGNhbGxiYWNrICE9PSBmYWxzZSlcbiAgICAgIGNhbGxiYWNrID0gc2VsZWN0b3IsIHNlbGVjdG9yID0gdW5kZWZpbmVkXG5cbiAgICBpZiAoY2FsbGJhY2sgPT09IGZhbHNlKSBjYWxsYmFjayA9IHJldHVybkZhbHNlXG5cbiAgICByZXR1cm4gJHRoaXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgcmVtb3ZlKHRoaXMsIGV2ZW50LCBjYWxsYmFjaywgc2VsZWN0b3IpXG4gICAgfSlcbiAgfVxuXG4gICQuZm4udHJpZ2dlciA9IGZ1bmN0aW9uKGV2ZW50LCBhcmdzKXtcbiAgICBldmVudCA9IChpc1N0cmluZyhldmVudCkgfHwgJC5pc1BsYWluT2JqZWN0KGV2ZW50KSkgPyAkLkV2ZW50KGV2ZW50KSA6IGNvbXBhdGlibGUoZXZlbnQpXG4gICAgZXZlbnQuX2FyZ3MgPSBhcmdzXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuICAgICAgLy8gaGFuZGxlIGZvY3VzKCksIGJsdXIoKSBieSBjYWxsaW5nIHRoZW0gZGlyZWN0bHlcbiAgICAgIGlmIChldmVudC50eXBlIGluIGZvY3VzICYmIHR5cGVvZiB0aGlzW2V2ZW50LnR5cGVdID09IFwiZnVuY3Rpb25cIikgdGhpc1tldmVudC50eXBlXSgpXG4gICAgICAvLyBpdGVtcyBpbiB0aGUgY29sbGVjdGlvbiBtaWdodCBub3QgYmUgRE9NIGVsZW1lbnRzXG4gICAgICBlbHNlIGlmICgnZGlzcGF0Y2hFdmVudCcgaW4gdGhpcykgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgZWxzZSAkKHRoaXMpLnRyaWdnZXJIYW5kbGVyKGV2ZW50LCBhcmdzKVxuICAgIH0pXG4gIH1cblxuICAvLyB0cmlnZ2VycyBldmVudCBoYW5kbGVycyBvbiBjdXJyZW50IGVsZW1lbnQganVzdCBhcyBpZiBhbiBldmVudCBvY2N1cnJlZCxcbiAgLy8gZG9lc24ndCB0cmlnZ2VyIGFuIGFjdHVhbCBldmVudCwgZG9lc24ndCBidWJibGVcbiAgJC5mbi50cmlnZ2VySGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50LCBhcmdzKXtcbiAgICB2YXIgZSwgcmVzdWx0XG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGksIGVsZW1lbnQpe1xuICAgICAgZSA9IGNyZWF0ZVByb3h5KGlzU3RyaW5nKGV2ZW50KSA/ICQuRXZlbnQoZXZlbnQpIDogZXZlbnQpXG4gICAgICBlLl9hcmdzID0gYXJnc1xuICAgICAgZS50YXJnZXQgPSBlbGVtZW50XG4gICAgICAkLmVhY2goZmluZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50LnR5cGUgfHwgZXZlbnQpLCBmdW5jdGlvbihpLCBoYW5kbGVyKXtcbiAgICAgICAgcmVzdWx0ID0gaGFuZGxlci5wcm94eShlKVxuICAgICAgICBpZiAoZS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKSByZXR1cm4gZmFsc2VcbiAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvLyBzaG9ydGN1dCBtZXRob2RzIGZvciBgLmJpbmQoZXZlbnQsIGZuKWAgZm9yIGVhY2ggZXZlbnQgdHlwZVxuICA7KCdmb2N1c2luIGZvY3Vzb3V0IGZvY3VzIGJsdXIgbG9hZCByZXNpemUgc2Nyb2xsIHVubG9hZCBjbGljayBkYmxjbGljayAnK1xuICAnbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgJytcbiAgJ2NoYW5nZSBzZWxlY3Qga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBlcnJvcicpLnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbihldmVudCkge1xuICAgICQuZm5bZXZlbnRdID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiAoMCBpbiBhcmd1bWVudHMpID9cbiAgICAgICAgdGhpcy5iaW5kKGV2ZW50LCBjYWxsYmFjaykgOlxuICAgICAgICB0aGlzLnRyaWdnZXIoZXZlbnQpXG4gICAgfVxuICB9KVxuXG4gICQuRXZlbnQgPSBmdW5jdGlvbih0eXBlLCBwcm9wcykge1xuICAgIGlmICghaXNTdHJpbmcodHlwZSkpIHByb3BzID0gdHlwZSwgdHlwZSA9IHByb3BzLnR5cGVcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChzcGVjaWFsRXZlbnRzW3R5cGVdIHx8ICdFdmVudHMnKSwgYnViYmxlcyA9IHRydWVcbiAgICBpZiAocHJvcHMpIGZvciAodmFyIG5hbWUgaW4gcHJvcHMpIChuYW1lID09ICdidWJibGVzJykgPyAoYnViYmxlcyA9ICEhcHJvcHNbbmFtZV0pIDogKGV2ZW50W25hbWVdID0gcHJvcHNbbmFtZV0pXG4gICAgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIGJ1YmJsZXMsIHRydWUpXG4gICAgcmV0dXJuIGNvbXBhdGlibGUoZXZlbnQpXG4gIH1cblxufSkoWmVwdG8pXG5cbjsoZnVuY3Rpb24oJCl7XG4gIHZhciBqc29ucElEID0gMCxcbiAgICAgIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50LFxuICAgICAga2V5LFxuICAgICAgbmFtZSxcbiAgICAgIHJzY3JpcHQgPSAvPHNjcmlwdFxcYltePF0qKD86KD8hPFxcL3NjcmlwdD4pPFtePF0qKSo8XFwvc2NyaXB0Pi9naSxcbiAgICAgIHNjcmlwdFR5cGVSRSA9IC9eKD86dGV4dHxhcHBsaWNhdGlvbilcXC9qYXZhc2NyaXB0L2ksXG4gICAgICB4bWxUeXBlUkUgPSAvXig/OnRleHR8YXBwbGljYXRpb24pXFwveG1sL2ksXG4gICAgICBqc29uVHlwZSA9ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIGh0bWxUeXBlID0gJ3RleHQvaHRtbCcsXG4gICAgICBibGFua1JFID0gL15cXHMqJC8sXG4gICAgICBvcmlnaW5BbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcblxuICBvcmlnaW5BbmNob3IuaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXG5cbiAgLy8gdHJpZ2dlciBhIGN1c3RvbSBldmVudCBhbmQgcmV0dXJuIGZhbHNlIGlmIGl0IHdhcyBjYW5jZWxsZWRcbiAgZnVuY3Rpb24gdHJpZ2dlckFuZFJldHVybihjb250ZXh0LCBldmVudE5hbWUsIGRhdGEpIHtcbiAgICB2YXIgZXZlbnQgPSAkLkV2ZW50KGV2ZW50TmFtZSlcbiAgICAkKGNvbnRleHQpLnRyaWdnZXIoZXZlbnQsIGRhdGEpXG4gICAgcmV0dXJuICFldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKVxuICB9XG5cbiAgLy8gdHJpZ2dlciBhbiBBamF4IFwiZ2xvYmFsXCIgZXZlbnRcbiAgZnVuY3Rpb24gdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgY29udGV4dCwgZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgaWYgKHNldHRpbmdzLmdsb2JhbCkgcmV0dXJuIHRyaWdnZXJBbmRSZXR1cm4oY29udGV4dCB8fCBkb2N1bWVudCwgZXZlbnROYW1lLCBkYXRhKVxuICB9XG5cbiAgLy8gTnVtYmVyIG9mIGFjdGl2ZSBBamF4IHJlcXVlc3RzXG4gICQuYWN0aXZlID0gMFxuXG4gIGZ1bmN0aW9uIGFqYXhTdGFydChzZXR0aW5ncykge1xuICAgIGlmIChzZXR0aW5ncy5nbG9iYWwgJiYgJC5hY3RpdmUrKyA9PT0gMCkgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgbnVsbCwgJ2FqYXhTdGFydCcpXG4gIH1cbiAgZnVuY3Rpb24gYWpheFN0b3Aoc2V0dGluZ3MpIHtcbiAgICBpZiAoc2V0dGluZ3MuZ2xvYmFsICYmICEoLS0kLmFjdGl2ZSkpIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIG51bGwsICdhamF4U3RvcCcpXG4gIH1cblxuICAvLyB0cmlnZ2VycyBhbiBleHRyYSBnbG9iYWwgZXZlbnQgXCJhamF4QmVmb3JlU2VuZFwiIHRoYXQncyBsaWtlIFwiYWpheFNlbmRcIiBidXQgY2FuY2VsYWJsZVxuICBmdW5jdGlvbiBhamF4QmVmb3JlU2VuZCh4aHIsIHNldHRpbmdzKSB7XG4gICAgdmFyIGNvbnRleHQgPSBzZXR0aW5ncy5jb250ZXh0XG4gICAgaWYgKHNldHRpbmdzLmJlZm9yZVNlbmQuY2FsbChjb250ZXh0LCB4aHIsIHNldHRpbmdzKSA9PT0gZmFsc2UgfHxcbiAgICAgICAgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgY29udGV4dCwgJ2FqYXhCZWZvcmVTZW5kJywgW3hociwgc2V0dGluZ3NdKSA9PT0gZmFsc2UpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIGNvbnRleHQsICdhamF4U2VuZCcsIFt4aHIsIHNldHRpbmdzXSlcbiAgfVxuICBmdW5jdGlvbiBhamF4U3VjY2VzcyhkYXRhLCB4aHIsIHNldHRpbmdzLCBkZWZlcnJlZCkge1xuICAgIHZhciBjb250ZXh0ID0gc2V0dGluZ3MuY29udGV4dCwgc3RhdHVzID0gJ3N1Y2Nlc3MnXG4gICAgc2V0dGluZ3Muc3VjY2Vzcy5jYWxsKGNvbnRleHQsIGRhdGEsIHN0YXR1cywgeGhyKVxuICAgIGlmIChkZWZlcnJlZCkgZGVmZXJyZWQucmVzb2x2ZVdpdGgoY29udGV4dCwgW2RhdGEsIHN0YXR1cywgeGhyXSlcbiAgICB0cmlnZ2VyR2xvYmFsKHNldHRpbmdzLCBjb250ZXh0LCAnYWpheFN1Y2Nlc3MnLCBbeGhyLCBzZXR0aW5ncywgZGF0YV0pXG4gICAgYWpheENvbXBsZXRlKHN0YXR1cywgeGhyLCBzZXR0aW5ncylcbiAgfVxuICAvLyB0eXBlOiBcInRpbWVvdXRcIiwgXCJlcnJvclwiLCBcImFib3J0XCIsIFwicGFyc2VyZXJyb3JcIlxuICBmdW5jdGlvbiBhamF4RXJyb3IoZXJyb3IsIHR5cGUsIHhociwgc2V0dGluZ3MsIGRlZmVycmVkKSB7XG4gICAgdmFyIGNvbnRleHQgPSBzZXR0aW5ncy5jb250ZXh0XG4gICAgc2V0dGluZ3MuZXJyb3IuY2FsbChjb250ZXh0LCB4aHIsIHR5cGUsIGVycm9yKVxuICAgIGlmIChkZWZlcnJlZCkgZGVmZXJyZWQucmVqZWN0V2l0aChjb250ZXh0LCBbeGhyLCB0eXBlLCBlcnJvcl0pXG4gICAgdHJpZ2dlckdsb2JhbChzZXR0aW5ncywgY29udGV4dCwgJ2FqYXhFcnJvcicsIFt4aHIsIHNldHRpbmdzLCBlcnJvciB8fCB0eXBlXSlcbiAgICBhamF4Q29tcGxldGUodHlwZSwgeGhyLCBzZXR0aW5ncylcbiAgfVxuICAvLyBzdGF0dXM6IFwic3VjY2Vzc1wiLCBcIm5vdG1vZGlmaWVkXCIsIFwiZXJyb3JcIiwgXCJ0aW1lb3V0XCIsIFwiYWJvcnRcIiwgXCJwYXJzZXJlcnJvclwiXG4gIGZ1bmN0aW9uIGFqYXhDb21wbGV0ZShzdGF0dXMsIHhociwgc2V0dGluZ3MpIHtcbiAgICB2YXIgY29udGV4dCA9IHNldHRpbmdzLmNvbnRleHRcbiAgICBzZXR0aW5ncy5jb21wbGV0ZS5jYWxsKGNvbnRleHQsIHhociwgc3RhdHVzKVxuICAgIHRyaWdnZXJHbG9iYWwoc2V0dGluZ3MsIGNvbnRleHQsICdhamF4Q29tcGxldGUnLCBbeGhyLCBzZXR0aW5nc10pXG4gICAgYWpheFN0b3Aoc2V0dGluZ3MpXG4gIH1cblxuICAvLyBFbXB0eSBmdW5jdGlvbiwgdXNlZCBhcyBkZWZhdWx0IGNhbGxiYWNrXG4gIGZ1bmN0aW9uIGVtcHR5KCkge31cblxuICAkLmFqYXhKU09OUCA9IGZ1bmN0aW9uKG9wdGlvbnMsIGRlZmVycmVkKXtcbiAgICBpZiAoISgndHlwZScgaW4gb3B0aW9ucykpIHJldHVybiAkLmFqYXgob3B0aW9ucylcblxuICAgIHZhciBfY2FsbGJhY2tOYW1lID0gb3B0aW9ucy5qc29ucENhbGxiYWNrLFxuICAgICAgY2FsbGJhY2tOYW1lID0gKCQuaXNGdW5jdGlvbihfY2FsbGJhY2tOYW1lKSA/XG4gICAgICAgIF9jYWxsYmFja05hbWUoKSA6IF9jYWxsYmFja05hbWUpIHx8ICgnanNvbnAnICsgKCsranNvbnBJRCkpLFxuICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JyksXG4gICAgICBvcmlnaW5hbENhbGxiYWNrID0gd2luZG93W2NhbGxiYWNrTmFtZV0sXG4gICAgICByZXNwb25zZURhdGEsXG4gICAgICBhYm9ydCA9IGZ1bmN0aW9uKGVycm9yVHlwZSkge1xuICAgICAgICAkKHNjcmlwdCkudHJpZ2dlckhhbmRsZXIoJ2Vycm9yJywgZXJyb3JUeXBlIHx8ICdhYm9ydCcpXG4gICAgICB9LFxuICAgICAgeGhyID0geyBhYm9ydDogYWJvcnQgfSwgYWJvcnRUaW1lb3V0XG5cbiAgICBpZiAoZGVmZXJyZWQpIGRlZmVycmVkLnByb21pc2UoeGhyKVxuXG4gICAgJChzY3JpcHQpLm9uKCdsb2FkIGVycm9yJywgZnVuY3Rpb24oZSwgZXJyb3JUeXBlKXtcbiAgICAgIGNsZWFyVGltZW91dChhYm9ydFRpbWVvdXQpXG4gICAgICAkKHNjcmlwdCkub2ZmKCkucmVtb3ZlKClcblxuICAgICAgaWYgKGUudHlwZSA9PSAnZXJyb3InIHx8ICFyZXNwb25zZURhdGEpIHtcbiAgICAgICAgYWpheEVycm9yKG51bGwsIGVycm9yVHlwZSB8fCAnZXJyb3InLCB4aHIsIG9wdGlvbnMsIGRlZmVycmVkKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWpheFN1Y2Nlc3MocmVzcG9uc2VEYXRhWzBdLCB4aHIsIG9wdGlvbnMsIGRlZmVycmVkKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IG9yaWdpbmFsQ2FsbGJhY2tcbiAgICAgIGlmIChyZXNwb25zZURhdGEgJiYgJC5pc0Z1bmN0aW9uKG9yaWdpbmFsQ2FsbGJhY2spKVxuICAgICAgICBvcmlnaW5hbENhbGxiYWNrKHJlc3BvbnNlRGF0YVswXSlcblxuICAgICAgb3JpZ2luYWxDYWxsYmFjayA9IHJlc3BvbnNlRGF0YSA9IHVuZGVmaW5lZFxuICAgIH0pXG5cbiAgICBpZiAoYWpheEJlZm9yZVNlbmQoeGhyLCBvcHRpb25zKSA9PT0gZmFsc2UpIHtcbiAgICAgIGFib3J0KCdhYm9ydCcpXG4gICAgICByZXR1cm4geGhyXG4gICAgfVxuXG4gICAgd2luZG93W2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbigpe1xuICAgICAgcmVzcG9uc2VEYXRhID0gYXJndW1lbnRzXG4gICAgfVxuXG4gICAgc2NyaXB0LnNyYyA9IG9wdGlvbnMudXJsLnJlcGxhY2UoL1xcPyguKyk9XFw/LywgJz8kMT0nICsgY2FsbGJhY2tOYW1lKVxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuXG4gICAgaWYgKG9wdGlvbnMudGltZW91dCA+IDApIGFib3J0VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGFib3J0KCd0aW1lb3V0JylcbiAgICB9LCBvcHRpb25zLnRpbWVvdXQpXG5cbiAgICByZXR1cm4geGhyXG4gIH1cblxuICAkLmFqYXhTZXR0aW5ncyA9IHtcbiAgICAvLyBEZWZhdWx0IHR5cGUgb2YgcmVxdWVzdFxuICAgIHR5cGU6ICdHRVQnLFxuICAgIC8vIENhbGxiYWNrIHRoYXQgaXMgZXhlY3V0ZWQgYmVmb3JlIHJlcXVlc3RcbiAgICBiZWZvcmVTZW5kOiBlbXB0eSxcbiAgICAvLyBDYWxsYmFjayB0aGF0IGlzIGV4ZWN1dGVkIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRzXG4gICAgc3VjY2VzczogZW1wdHksXG4gICAgLy8gQ2FsbGJhY2sgdGhhdCBpcyBleGVjdXRlZCB0aGUgdGhlIHNlcnZlciBkcm9wcyBlcnJvclxuICAgIGVycm9yOiBlbXB0eSxcbiAgICAvLyBDYWxsYmFjayB0aGF0IGlzIGV4ZWN1dGVkIG9uIHJlcXVlc3QgY29tcGxldGUgKGJvdGg6IGVycm9yIGFuZCBzdWNjZXNzKVxuICAgIGNvbXBsZXRlOiBlbXB0eSxcbiAgICAvLyBUaGUgY29udGV4dCBmb3IgdGhlIGNhbGxiYWNrc1xuICAgIGNvbnRleHQ6IG51bGwsXG4gICAgLy8gV2hldGhlciB0byB0cmlnZ2VyIFwiZ2xvYmFsXCIgQWpheCBldmVudHNcbiAgICBnbG9iYWw6IHRydWUsXG4gICAgLy8gVHJhbnNwb3J0XG4gICAgeGhyOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpXG4gICAgfSxcbiAgICAvLyBNSU1FIHR5cGVzIG1hcHBpbmdcbiAgICAvLyBJSVMgcmV0dXJucyBKYXZhc2NyaXB0IGFzIFwiYXBwbGljYXRpb24veC1qYXZhc2NyaXB0XCJcbiAgICBhY2NlcHRzOiB7XG4gICAgICBzY3JpcHQ6ICd0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtamF2YXNjcmlwdCcsXG4gICAgICBqc29uOiAgIGpzb25UeXBlLFxuICAgICAgeG1sOiAgICAnYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbCcsXG4gICAgICBodG1sOiAgIGh0bWxUeXBlLFxuICAgICAgdGV4dDogICAndGV4dC9wbGFpbidcbiAgICB9LFxuICAgIC8vIFdoZXRoZXIgdGhlIHJlcXVlc3QgaXMgdG8gYW5vdGhlciBkb21haW5cbiAgICBjcm9zc0RvbWFpbjogZmFsc2UsXG4gICAgLy8gRGVmYXVsdCB0aW1lb3V0XG4gICAgdGltZW91dDogMCxcbiAgICAvLyBXaGV0aGVyIGRhdGEgc2hvdWxkIGJlIHNlcmlhbGl6ZWQgdG8gc3RyaW5nXG4gICAgcHJvY2Vzc0RhdGE6IHRydWUsXG4gICAgLy8gV2hldGhlciB0aGUgYnJvd3NlciBzaG91bGQgYmUgYWxsb3dlZCB0byBjYWNoZSBHRVQgcmVzcG9uc2VzXG4gICAgY2FjaGU6IHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIG1pbWVUb0RhdGFUeXBlKG1pbWUpIHtcbiAgICBpZiAobWltZSkgbWltZSA9IG1pbWUuc3BsaXQoJzsnLCAyKVswXVxuICAgIHJldHVybiBtaW1lICYmICggbWltZSA9PSBodG1sVHlwZSA/ICdodG1sJyA6XG4gICAgICBtaW1lID09IGpzb25UeXBlID8gJ2pzb24nIDpcbiAgICAgIHNjcmlwdFR5cGVSRS50ZXN0KG1pbWUpID8gJ3NjcmlwdCcgOlxuICAgICAgeG1sVHlwZVJFLnRlc3QobWltZSkgJiYgJ3htbCcgKSB8fCAndGV4dCdcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGVuZFF1ZXJ5KHVybCwgcXVlcnkpIHtcbiAgICBpZiAocXVlcnkgPT0gJycpIHJldHVybiB1cmxcbiAgICByZXR1cm4gKHVybCArICcmJyArIHF1ZXJ5KS5yZXBsYWNlKC9bJj9dezEsMn0vLCAnPycpXG4gIH1cblxuICAvLyBzZXJpYWxpemUgcGF5bG9hZCBhbmQgYXBwZW5kIGl0IHRvIHRoZSBVUkwgZm9yIEdFVCByZXF1ZXN0c1xuICBmdW5jdGlvbiBzZXJpYWxpemVEYXRhKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5wcm9jZXNzRGF0YSAmJiBvcHRpb25zLmRhdGEgJiYgJC50eXBlKG9wdGlvbnMuZGF0YSkgIT0gXCJzdHJpbmdcIilcbiAgICAgIG9wdGlvbnMuZGF0YSA9ICQucGFyYW0ob3B0aW9ucy5kYXRhLCBvcHRpb25zLnRyYWRpdGlvbmFsKVxuICAgIGlmIChvcHRpb25zLmRhdGEgJiYgKCFvcHRpb25zLnR5cGUgfHwgb3B0aW9ucy50eXBlLnRvVXBwZXJDYXNlKCkgPT0gJ0dFVCcpKVxuICAgICAgb3B0aW9ucy51cmwgPSBhcHBlbmRRdWVyeShvcHRpb25zLnVybCwgb3B0aW9ucy5kYXRhKSwgb3B0aW9ucy5kYXRhID0gdW5kZWZpbmVkXG4gIH1cblxuICAkLmFqYXggPSBmdW5jdGlvbihvcHRpb25zKXtcbiAgICB2YXIgc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgb3B0aW9ucyB8fCB7fSksXG4gICAgICAgIGRlZmVycmVkID0gJC5EZWZlcnJlZCAmJiAkLkRlZmVycmVkKCksXG4gICAgICAgIHVybEFuY2hvclxuICAgIGZvciAoa2V5IGluICQuYWpheFNldHRpbmdzKSBpZiAoc2V0dGluZ3Nba2V5XSA9PT0gdW5kZWZpbmVkKSBzZXR0aW5nc1trZXldID0gJC5hamF4U2V0dGluZ3Nba2V5XVxuXG4gICAgYWpheFN0YXJ0KHNldHRpbmdzKVxuXG4gICAgaWYgKCFzZXR0aW5ncy5jcm9zc0RvbWFpbikge1xuICAgICAgdXJsQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICB1cmxBbmNob3IuaHJlZiA9IHNldHRpbmdzLnVybFxuICAgICAgdXJsQW5jaG9yLmhyZWYgPSB1cmxBbmNob3IuaHJlZlxuICAgICAgc2V0dGluZ3MuY3Jvc3NEb21haW4gPSAob3JpZ2luQW5jaG9yLnByb3RvY29sICsgJy8vJyArIG9yaWdpbkFuY2hvci5ob3N0KSAhPT0gKHVybEFuY2hvci5wcm90b2NvbCArICcvLycgKyB1cmxBbmNob3IuaG9zdClcbiAgICB9XG5cbiAgICBpZiAoIXNldHRpbmdzLnVybCkgc2V0dGluZ3MudXJsID0gd2luZG93LmxvY2F0aW9uLnRvU3RyaW5nKClcbiAgICBzZXJpYWxpemVEYXRhKHNldHRpbmdzKVxuXG4gICAgdmFyIGRhdGFUeXBlID0gc2V0dGluZ3MuZGF0YVR5cGUsIGhhc1BsYWNlaG9sZGVyID0gL1xcPy4rPVxcPy8udGVzdChzZXR0aW5ncy51cmwpXG4gICAgaWYgKGhhc1BsYWNlaG9sZGVyKSBkYXRhVHlwZSA9ICdqc29ucCdcblxuICAgIGlmIChzZXR0aW5ncy5jYWNoZSA9PT0gZmFsc2UgfHwgKFxuICAgICAgICAgKCFvcHRpb25zIHx8IG9wdGlvbnMuY2FjaGUgIT09IHRydWUpICYmXG4gICAgICAgICAoJ3NjcmlwdCcgPT0gZGF0YVR5cGUgfHwgJ2pzb25wJyA9PSBkYXRhVHlwZSlcbiAgICAgICAgKSlcbiAgICAgIHNldHRpbmdzLnVybCA9IGFwcGVuZFF1ZXJ5KHNldHRpbmdzLnVybCwgJ189JyArIERhdGUubm93KCkpXG5cbiAgICBpZiAoJ2pzb25wJyA9PSBkYXRhVHlwZSkge1xuICAgICAgaWYgKCFoYXNQbGFjZWhvbGRlcilcbiAgICAgICAgc2V0dGluZ3MudXJsID0gYXBwZW5kUXVlcnkoc2V0dGluZ3MudXJsLFxuICAgICAgICAgIHNldHRpbmdzLmpzb25wID8gKHNldHRpbmdzLmpzb25wICsgJz0/JykgOiBzZXR0aW5ncy5qc29ucCA9PT0gZmFsc2UgPyAnJyA6ICdjYWxsYmFjaz0/JylcbiAgICAgIHJldHVybiAkLmFqYXhKU09OUChzZXR0aW5ncywgZGVmZXJyZWQpXG4gICAgfVxuXG4gICAgdmFyIG1pbWUgPSBzZXR0aW5ncy5hY2NlcHRzW2RhdGFUeXBlXSxcbiAgICAgICAgaGVhZGVycyA9IHsgfSxcbiAgICAgICAgc2V0SGVhZGVyID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHsgaGVhZGVyc1tuYW1lLnRvTG93ZXJDYXNlKCldID0gW25hbWUsIHZhbHVlXSB9LFxuICAgICAgICBwcm90b2NvbCA9IC9eKFtcXHctXSs6KVxcL1xcLy8udGVzdChzZXR0aW5ncy51cmwpID8gUmVnRXhwLiQxIDogd2luZG93LmxvY2F0aW9uLnByb3RvY29sLFxuICAgICAgICB4aHIgPSBzZXR0aW5ncy54aHIoKSxcbiAgICAgICAgbmF0aXZlU2V0SGVhZGVyID0geGhyLnNldFJlcXVlc3RIZWFkZXIsXG4gICAgICAgIGFib3J0VGltZW91dFxuXG4gICAgaWYgKGRlZmVycmVkKSBkZWZlcnJlZC5wcm9taXNlKHhocilcblxuICAgIGlmICghc2V0dGluZ3MuY3Jvc3NEb21haW4pIHNldEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpXG4gICAgc2V0SGVhZGVyKCdBY2NlcHQnLCBtaW1lIHx8ICcqLyonKVxuICAgIGlmIChtaW1lID0gc2V0dGluZ3MubWltZVR5cGUgfHwgbWltZSkge1xuICAgICAgaWYgKG1pbWUuaW5kZXhPZignLCcpID4gLTEpIG1pbWUgPSBtaW1lLnNwbGl0KCcsJywgMilbMF1cbiAgICAgIHhoci5vdmVycmlkZU1pbWVUeXBlICYmIHhoci5vdmVycmlkZU1pbWVUeXBlKG1pbWUpXG4gICAgfVxuICAgIGlmIChzZXR0aW5ncy5jb250ZW50VHlwZSB8fCAoc2V0dGluZ3MuY29udGVudFR5cGUgIT09IGZhbHNlICYmIHNldHRpbmdzLmRhdGEgJiYgc2V0dGluZ3MudHlwZS50b1VwcGVyQ2FzZSgpICE9ICdHRVQnKSlcbiAgICAgIHNldEhlYWRlcignQ29udGVudC1UeXBlJywgc2V0dGluZ3MuY29udGVudFR5cGUgfHwgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpXG5cbiAgICBpZiAoc2V0dGluZ3MuaGVhZGVycykgZm9yIChuYW1lIGluIHNldHRpbmdzLmhlYWRlcnMpIHNldEhlYWRlcihuYW1lLCBzZXR0aW5ncy5oZWFkZXJzW25hbWVdKVxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyID0gc2V0SGVhZGVyXG5cbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKXtcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBlbXB0eVxuICAgICAgICBjbGVhclRpbWVvdXQoYWJvcnRUaW1lb3V0KVxuICAgICAgICB2YXIgcmVzdWx0LCBlcnJvciA9IGZhbHNlXG4gICAgICAgIGlmICgoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkgfHwgeGhyLnN0YXR1cyA9PSAzMDQgfHwgKHhoci5zdGF0dXMgPT0gMCAmJiBwcm90b2NvbCA9PSAnZmlsZTonKSkge1xuICAgICAgICAgIGRhdGFUeXBlID0gZGF0YVR5cGUgfHwgbWltZVRvRGF0YVR5cGUoc2V0dGluZ3MubWltZVR5cGUgfHwgeGhyLmdldFJlc3BvbnNlSGVhZGVyKCdjb250ZW50LXR5cGUnKSlcbiAgICAgICAgICByZXN1bHQgPSB4aHIucmVzcG9uc2VUZXh0XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vZ2xvYmFsLWV2YWwtd2hhdC1hcmUtdGhlLW9wdGlvbnMvXG4gICAgICAgICAgICBpZiAoZGF0YVR5cGUgPT0gJ3NjcmlwdCcpICAgICgxLGV2YWwpKHJlc3VsdClcbiAgICAgICAgICAgIGVsc2UgaWYgKGRhdGFUeXBlID09ICd4bWwnKSAgcmVzdWx0ID0geGhyLnJlc3BvbnNlWE1MXG4gICAgICAgICAgICBlbHNlIGlmIChkYXRhVHlwZSA9PSAnanNvbicpIHJlc3VsdCA9IGJsYW5rUkUudGVzdChyZXN1bHQpID8gbnVsbCA6ICQucGFyc2VKU09OKHJlc3VsdClcbiAgICAgICAgICB9IGNhdGNoIChlKSB7IGVycm9yID0gZSB9XG5cbiAgICAgICAgICBpZiAoZXJyb3IpIGFqYXhFcnJvcihlcnJvciwgJ3BhcnNlcmVycm9yJywgeGhyLCBzZXR0aW5ncywgZGVmZXJyZWQpXG4gICAgICAgICAgZWxzZSBhamF4U3VjY2VzcyhyZXN1bHQsIHhociwgc2V0dGluZ3MsIGRlZmVycmVkKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFqYXhFcnJvcih4aHIuc3RhdHVzVGV4dCB8fCBudWxsLCB4aHIuc3RhdHVzID8gJ2Vycm9yJyA6ICdhYm9ydCcsIHhociwgc2V0dGluZ3MsIGRlZmVycmVkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFqYXhCZWZvcmVTZW5kKHhociwgc2V0dGluZ3MpID09PSBmYWxzZSkge1xuICAgICAgeGhyLmFib3J0KClcbiAgICAgIGFqYXhFcnJvcihudWxsLCAnYWJvcnQnLCB4aHIsIHNldHRpbmdzLCBkZWZlcnJlZClcbiAgICAgIHJldHVybiB4aHJcbiAgICB9XG5cbiAgICBpZiAoc2V0dGluZ3MueGhyRmllbGRzKSBmb3IgKG5hbWUgaW4gc2V0dGluZ3MueGhyRmllbGRzKSB4aHJbbmFtZV0gPSBzZXR0aW5ncy54aHJGaWVsZHNbbmFtZV1cblxuICAgIHZhciBhc3luYyA9ICdhc3luYycgaW4gc2V0dGluZ3MgPyBzZXR0aW5ncy5hc3luYyA6IHRydWVcbiAgICB4aHIub3BlbihzZXR0aW5ncy50eXBlLCBzZXR0aW5ncy51cmwsIGFzeW5jLCBzZXR0aW5ncy51c2VybmFtZSwgc2V0dGluZ3MucGFzc3dvcmQpXG5cbiAgICBmb3IgKG5hbWUgaW4gaGVhZGVycykgbmF0aXZlU2V0SGVhZGVyLmFwcGx5KHhociwgaGVhZGVyc1tuYW1lXSlcblxuICAgIGlmIChzZXR0aW5ncy50aW1lb3V0ID4gMCkgYWJvcnRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZW1wdHlcbiAgICAgICAgeGhyLmFib3J0KClcbiAgICAgICAgYWpheEVycm9yKG51bGwsICd0aW1lb3V0JywgeGhyLCBzZXR0aW5ncywgZGVmZXJyZWQpXG4gICAgICB9LCBzZXR0aW5ncy50aW1lb3V0KVxuXG4gICAgLy8gYXZvaWQgc2VuZGluZyBlbXB0eSBzdHJpbmcgKCMzMTkpXG4gICAgeGhyLnNlbmQoc2V0dGluZ3MuZGF0YSA/IHNldHRpbmdzLmRhdGEgOiBudWxsKVxuICAgIHJldHVybiB4aHJcbiAgfVxuXG4gIC8vIGhhbmRsZSBvcHRpb25hbCBkYXRhL3N1Y2Nlc3MgYXJndW1lbnRzXG4gIGZ1bmN0aW9uIHBhcnNlQXJndW1lbnRzKHVybCwgZGF0YSwgc3VjY2VzcywgZGF0YVR5cGUpIHtcbiAgICBpZiAoJC5pc0Z1bmN0aW9uKGRhdGEpKSBkYXRhVHlwZSA9IHN1Y2Nlc3MsIHN1Y2Nlc3MgPSBkYXRhLCBkYXRhID0gdW5kZWZpbmVkXG4gICAgaWYgKCEkLmlzRnVuY3Rpb24oc3VjY2VzcykpIGRhdGFUeXBlID0gc3VjY2Vzcywgc3VjY2VzcyA9IHVuZGVmaW5lZFxuICAgIHJldHVybiB7XG4gICAgICB1cmw6IHVybFxuICAgICwgZGF0YTogZGF0YVxuICAgICwgc3VjY2Vzczogc3VjY2Vzc1xuICAgICwgZGF0YVR5cGU6IGRhdGFUeXBlXG4gICAgfVxuICB9XG5cbiAgJC5nZXQgPSBmdW5jdGlvbigvKiB1cmwsIGRhdGEsIHN1Y2Nlc3MsIGRhdGFUeXBlICovKXtcbiAgICByZXR1cm4gJC5hamF4KHBhcnNlQXJndW1lbnRzLmFwcGx5KG51bGwsIGFyZ3VtZW50cykpXG4gIH1cblxuICAkLnBvc3QgPSBmdW5jdGlvbigvKiB1cmwsIGRhdGEsIHN1Y2Nlc3MsIGRhdGFUeXBlICovKXtcbiAgICB2YXIgb3B0aW9ucyA9IHBhcnNlQXJndW1lbnRzLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgICBvcHRpb25zLnR5cGUgPSAnUE9TVCdcbiAgICByZXR1cm4gJC5hamF4KG9wdGlvbnMpXG4gIH1cblxuICAkLmdldEpTT04gPSBmdW5jdGlvbigvKiB1cmwsIGRhdGEsIHN1Y2Nlc3MgKi8pe1xuICAgIHZhciBvcHRpb25zID0gcGFyc2VBcmd1bWVudHMuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgIG9wdGlvbnMuZGF0YVR5cGUgPSAnanNvbidcbiAgICByZXR1cm4gJC5hamF4KG9wdGlvbnMpXG4gIH1cblxuICAkLmZuLmxvYWQgPSBmdW5jdGlvbih1cmwsIGRhdGEsIHN1Y2Nlc3Mpe1xuICAgIGlmICghdGhpcy5sZW5ndGgpIHJldHVybiB0aGlzXG4gICAgdmFyIHNlbGYgPSB0aGlzLCBwYXJ0cyA9IHVybC5zcGxpdCgvXFxzLyksIHNlbGVjdG9yLFxuICAgICAgICBvcHRpb25zID0gcGFyc2VBcmd1bWVudHModXJsLCBkYXRhLCBzdWNjZXNzKSxcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zLnN1Y2Nlc3NcbiAgICBpZiAocGFydHMubGVuZ3RoID4gMSkgb3B0aW9ucy51cmwgPSBwYXJ0c1swXSwgc2VsZWN0b3IgPSBwYXJ0c1sxXVxuICAgIG9wdGlvbnMuc3VjY2VzcyA9IGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgIHNlbGYuaHRtbChzZWxlY3RvciA/XG4gICAgICAgICQoJzxkaXY+JykuaHRtbChyZXNwb25zZS5yZXBsYWNlKHJzY3JpcHQsIFwiXCIpKS5maW5kKHNlbGVjdG9yKVxuICAgICAgICA6IHJlc3BvbnNlKVxuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2suYXBwbHkoc2VsZiwgYXJndW1lbnRzKVxuICAgIH1cbiAgICAkLmFqYXgob3B0aW9ucylcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgdmFyIGVzY2FwZSA9IGVuY29kZVVSSUNvbXBvbmVudFxuXG4gIGZ1bmN0aW9uIHNlcmlhbGl6ZShwYXJhbXMsIG9iaiwgdHJhZGl0aW9uYWwsIHNjb3BlKXtcbiAgICB2YXIgdHlwZSwgYXJyYXkgPSAkLmlzQXJyYXkob2JqKSwgaGFzaCA9ICQuaXNQbGFpbk9iamVjdChvYmopXG4gICAgJC5lYWNoKG9iaiwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgdHlwZSA9ICQudHlwZSh2YWx1ZSlcbiAgICAgIGlmIChzY29wZSkga2V5ID0gdHJhZGl0aW9uYWwgPyBzY29wZSA6XG4gICAgICAgIHNjb3BlICsgJ1snICsgKGhhc2ggfHwgdHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdhcnJheScgPyBrZXkgOiAnJykgKyAnXSdcbiAgICAgIC8vIGhhbmRsZSBkYXRhIGluIHNlcmlhbGl6ZUFycmF5KCkgZm9ybWF0XG4gICAgICBpZiAoIXNjb3BlICYmIGFycmF5KSBwYXJhbXMuYWRkKHZhbHVlLm5hbWUsIHZhbHVlLnZhbHVlKVxuICAgICAgLy8gcmVjdXJzZSBpbnRvIG5lc3RlZCBvYmplY3RzXG4gICAgICBlbHNlIGlmICh0eXBlID09IFwiYXJyYXlcIiB8fCAoIXRyYWRpdGlvbmFsICYmIHR5cGUgPT0gXCJvYmplY3RcIikpXG4gICAgICAgIHNlcmlhbGl6ZShwYXJhbXMsIHZhbHVlLCB0cmFkaXRpb25hbCwga2V5KVxuICAgICAgZWxzZSBwYXJhbXMuYWRkKGtleSwgdmFsdWUpXG4gICAgfSlcbiAgfVxuXG4gICQucGFyYW0gPSBmdW5jdGlvbihvYmosIHRyYWRpdGlvbmFsKXtcbiAgICB2YXIgcGFyYW1zID0gW11cbiAgICBwYXJhbXMuYWRkID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKCQuaXNGdW5jdGlvbih2YWx1ZSkpIHZhbHVlID0gdmFsdWUoKVxuICAgICAgaWYgKHZhbHVlID09IG51bGwpIHZhbHVlID0gXCJcIlxuICAgICAgdGhpcy5wdXNoKGVzY2FwZShrZXkpICsgJz0nICsgZXNjYXBlKHZhbHVlKSlcbiAgICB9XG4gICAgc2VyaWFsaXplKHBhcmFtcywgb2JqLCB0cmFkaXRpb25hbClcbiAgICByZXR1cm4gcGFyYW1zLmpvaW4oJyYnKS5yZXBsYWNlKC8lMjAvZywgJysnKVxuICB9XG59KShaZXB0bylcblxuOyhmdW5jdGlvbigkKXtcbiAgJC5mbi5zZXJpYWxpemVBcnJheSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBuYW1lLCB0eXBlLCByZXN1bHQgPSBbXSxcbiAgICAgIGFkZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZS5mb3JFYWNoKSByZXR1cm4gdmFsdWUuZm9yRWFjaChhZGQpXG4gICAgICAgIHJlc3VsdC5wdXNoKHsgbmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlIH0pXG4gICAgICB9XG4gICAgaWYgKHRoaXNbMF0pICQuZWFjaCh0aGlzWzBdLmVsZW1lbnRzLCBmdW5jdGlvbihfLCBmaWVsZCl7XG4gICAgICB0eXBlID0gZmllbGQudHlwZSwgbmFtZSA9IGZpZWxkLm5hbWVcbiAgICAgIGlmIChuYW1lICYmIGZpZWxkLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT0gJ2ZpZWxkc2V0JyAmJlxuICAgICAgICAhZmllbGQuZGlzYWJsZWQgJiYgdHlwZSAhPSAnc3VibWl0JyAmJiB0eXBlICE9ICdyZXNldCcgJiYgdHlwZSAhPSAnYnV0dG9uJyAmJiB0eXBlICE9ICdmaWxlJyAmJlxuICAgICAgICAoKHR5cGUgIT0gJ3JhZGlvJyAmJiB0eXBlICE9ICdjaGVja2JveCcpIHx8IGZpZWxkLmNoZWNrZWQpKVxuICAgICAgICAgIGFkZCgkKGZpZWxkKS52YWwoKSlcbiAgICB9KVxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gICQuZm4uc2VyaWFsaXplID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcmVzdWx0ID0gW11cbiAgICB0aGlzLnNlcmlhbGl6ZUFycmF5KCkuZm9yRWFjaChmdW5jdGlvbihlbG0pe1xuICAgICAgcmVzdWx0LnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGVsbS5uYW1lKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChlbG0udmFsdWUpKVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKCcmJylcbiAgfVxuXG4gICQuZm4uc3VibWl0ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICBpZiAoMCBpbiBhcmd1bWVudHMpIHRoaXMuYmluZCgnc3VibWl0JywgY2FsbGJhY2spXG4gICAgZWxzZSBpZiAodGhpcy5sZW5ndGgpIHtcbiAgICAgIHZhciBldmVudCA9ICQuRXZlbnQoJ3N1Ym1pdCcpXG4gICAgICB0aGlzLmVxKDApLnRyaWdnZXIoZXZlbnQpXG4gICAgICBpZiAoIWV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB0aGlzLmdldCgwKS5zdWJtaXQoKVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbn0pKFplcHRvKVxuXG47KGZ1bmN0aW9uKCQpe1xuICAvLyBfX3Byb3RvX18gZG9lc24ndCBleGlzdCBvbiBJRTwxMSwgc28gcmVkZWZpbmVcbiAgLy8gdGhlIFogZnVuY3Rpb24gdG8gdXNlIG9iamVjdCBleHRlbnNpb24gaW5zdGVhZFxuICBpZiAoISgnX19wcm90b19fJyBpbiB7fSkpIHtcbiAgICAkLmV4dGVuZCgkLnplcHRvLCB7XG4gICAgICBaOiBmdW5jdGlvbihkb20sIHNlbGVjdG9yKXtcbiAgICAgICAgZG9tID0gZG9tIHx8IFtdXG4gICAgICAgICQuZXh0ZW5kKGRvbSwgJC5mbilcbiAgICAgICAgZG9tLnNlbGVjdG9yID0gc2VsZWN0b3IgfHwgJydcbiAgICAgICAgZG9tLl9fWiA9IHRydWVcbiAgICAgICAgcmV0dXJuIGRvbVxuICAgICAgfSxcbiAgICAgIC8vIHRoaXMgaXMgYSBrbHVkZ2UgYnV0IHdvcmtzXG4gICAgICBpc1o6IGZ1bmN0aW9uKG9iamVjdCl7XG4gICAgICAgIHJldHVybiAkLnR5cGUob2JqZWN0KSA9PT0gJ2FycmF5JyAmJiAnX19aJyBpbiBvYmplY3RcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gZ2V0Q29tcHV0ZWRTdHlsZSBzaG91bGRuJ3QgZnJlYWsgb3V0IHdoZW4gY2FsbGVkXG4gIC8vIHdpdGhvdXQgYSB2YWxpZCBlbGVtZW50IGFzIGFyZ3VtZW50XG4gIHRyeSB7XG4gICAgZ2V0Q29tcHV0ZWRTdHlsZSh1bmRlZmluZWQpXG4gIH0gY2F0Y2goZSkge1xuICAgIHZhciBuYXRpdmVHZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZTtcbiAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSA9IGZ1bmN0aW9uKGVsZW1lbnQpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZUdldENvbXB1dGVkU3R5bGUoZWxlbWVudClcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgIH1cbiAgfVxufSkoWmVwdG8pXG47XG5cbmlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IFplcHRvO1xufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbnBtLXplcHRvL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gOTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwYWdlX190b3BcXFwiPlxcbiAgbWFpbiBjb250ZW50XFxuICA8L2Rpdj5cIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9odG1sLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcHVibGljL2pzL3BhZ2VzL3RvcC52dWVcbiAqKiBtb2R1bGUgaWQgPSA5N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==