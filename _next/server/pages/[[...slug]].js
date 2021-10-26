module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("s1Oe");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

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

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
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

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "HWFp":
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "MAkM":
/***/ (function(module, exports) {

module.exports = require("react-script-tag");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  true ? path => {
  if (/\.[^/]+\/?$/.test(path)) {
    return removePathTrailingSlash(path);
  } else if (path.endsWith('/')) {
    return path;
  } else {
    return path + '/';
  }
} : undefined;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "bLNz":
/***/ (function(module, exports) {

module.exports = require("sourcebit-target-next/with-remote-data-updates");

/***/ }),

/***/ "bdDJ":
/***/ (function(module, exports) {

module.exports = require("sourcebit-target-next");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

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

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "gifY":
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "jWCw":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Coder To Writer - A Personal Blog Writen By A Coder\",\"path_prefix\":\"/\",\"layout_style\":\"grid\",\"palette\":\"green\",\"header\":{\"title\":\"CoderToWriter\",\"logo_img_alt\":\"CoderToWriter Logo\",\"has_nav\":true,\"nav_links\":[{\"label\":\"Home\",\"url\":\"/\",\"style\":\"link\"},{\"label\":\"About\",\"url\":\"/about\",\"style\":\"link\"},{\"label\":\"Style Guide\",\"url\":\"/style-guide\",\"style\":\"link\"},{\"label\":\"Contact\",\"url\":\"/contact\",\"style\":\"link\"}],\"logo_img\":\"/images/coder to writer - widex800.png\"},\"footer\":{\"content\":\"&copy; CoderToWriter. All rights reserved 2021.\",\"has_social\":true,\"social_links\":[{\"label\":\"Twitter\",\"url\":\"https://twitter.com/\",\"style\":\"icon\",\"icon_class\":\"twitter\",\"new_window\":true},{\"label\":\"Instagram\",\"url\":\"https://www.instagram.com/\",\"style\":\"icon\",\"icon_class\":\"instagram\",\"new_window\":true},{\"label\":\"GitHub\",\"url\":\"https://github.com/\",\"style\":\"icon\",\"icon_class\":\"github\",\"new_window\":true},{\"label\":\"LinkedIn\",\"url\":\"https://www.linkedin.com/\",\"style\":\"icon\",\"icon_class\":\"linkedin\",\"new_window\":true},{\"label\":\"DEV\",\"url\":\"https://dev.to/\",\"style\":\"icon\",\"icon_class\":\"dev\",\"new_window\":true}],\"has_subscribe\":true,\"subscribe_title\":\"Subscribe for new updates\",\"subscribe_content\":\"Nếu bạn cảm thấy hứng thú với những nội dung mà tôi chia sẻ, hãy để lại email và subscribe bên dưới. Bạn sẽ nhận được thông báo mỗi khi blog có bài viết mới.\",\"subscribe_action\":\"/subscribe-success\"},\"domain\":\"https://codertowriter.com\",\"favicon\":\"/images/White Purple Travel Agency Modern Logo x200.png\"}");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "pFWl":
/***/ (function(module, exports) {

module.exports = require("moment-strftime");

/***/ }),

/***/ "s1Oe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);

// EXTERNAL MODULE: external "sourcebit-target-next"
var external_sourcebit_target_next_ = __webpack_require__("bdDJ");

// EXTERNAL MODULE: external "sourcebit-target-next/with-remote-data-updates"
var with_remote_data_updates_ = __webpack_require__("bLNz");

// CONCATENATED MODULE: ./src/utils/attribute.js
function attribute(name, value, condition) {
  if (typeof condition === 'undefined') {
    condition = true;
  }

  return condition ? {
    [name]: value
  } : null;
}
;
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./src/utils/classNames.js
 // A simple wrapper around classNames to return null, if no classes were generated
// Otherwise, original classNames returns empty string which causes class="" to be generated

function classNames(...args) {
  return external_classnames_default.a.call(this, ...args) || null;
}
// CONCATENATED MODULE: ./src/utils/getPage.js

/**
 * Get the page at the provided `urlPath`.
 *
 * @param {Array} pages Array of page objects. All pages must have '__metadata.urlPath' field.
 * @param {string} urlPath The url path to find the page by
 * @return {Object}
 */

function getPage(pages, urlPath) {
  urlPath = external_lodash_default.a.trim(urlPath, '/');
  return external_lodash_default.a.find(pages, page => {
    const pageUrlPath = external_lodash_default.a.trim(external_lodash_default.a.get(page, '__metadata.urlPath'), '/');

    return urlPath === pageUrlPath;
  });
}
// CONCATENATED MODULE: ./src/utils/withPrefix.js
const _ = __webpack_require__("YLtl");

const pathPrefix = __webpack_require__("jWCw").path_prefix;

function withPrefix(url) {
  if (!url) {
    return url;
  }

  if (_.startsWith(url, '#') || _.startsWith(url, 'http://') || _.startsWith(url, 'https://')) {
    return url;
  }

  const basePath = _.trim(pathPrefix, '/');

  return '/' + _.compact([basePath, _.trimStart(url, '/')]).join('/');
}
// CONCATENATED MODULE: ./src/utils/getPageUrl.js


function getPageUrl(post, {
  withPrefix: addPrefix = false
} = {}) {
  const urlPath = external_lodash_default.a.get(post, '__metadata.urlPath');

  return addPrefix ? withPrefix(urlPath) : urlPath;
}
// CONCATENATED MODULE: ./src/utils/getData.js

function getData(props, dataPath) {
  dataPath = external_lodash_default.a.trim(dataPath, '/');

  if (external_lodash_default.a.startsWith(dataPath, 'content/data/')) {
    dataPath = dataPath.replace('content/data/', '');
  } // remove extension


  dataPath = dataPath.replace(/\.\w+$/, '');
  const path = dataPath.split('/');
  return external_lodash_default.a.get(props, path);
}
// EXTERNAL MODULE: external "react-html-parser"
var external_react_html_parser_ = __webpack_require__("gifY");
var external_react_html_parser_default = /*#__PURE__*/__webpack_require__.n(external_react_html_parser_);

// EXTERNAL MODULE: external "react-script-tag"
var external_react_script_tag_ = __webpack_require__("MAkM");
var external_react_script_tag_default = /*#__PURE__*/__webpack_require__.n(external_react_script_tag_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/utils/link.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Link(_ref) {
  let {
    children,
    href
  } = _ref,
      other = _objectWithoutProperties(_ref, ["children", "href"]);

  // Pass Any internal link to Next.js Link, for anything else, use <a> tag
  const internal = /^\/(?!\/)/.test(href);

  if (internal) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: href,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", _objectSpread(_objectSpread({}, other), {}, {
        children: children
      }))
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", _objectSpread(_objectSpread({
    href: href
  }, other), {}, {
    children: children
  }));
}
// CONCATENATED MODULE: ./src/utils/htmlToReact.js


function htmlToReact_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function htmlToReact_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { htmlToReact_ownKeys(Object(source), true).forEach(function (key) { htmlToReact_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { htmlToReact_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function htmlToReact_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const convertChildren = (children, index) => external_lodash_default.a.map(children, childNode => Object(external_react_html_parser_["convertNodeToElement"])(childNode, index, external_lodash_default.a.noop()));

function htmlToReact(html) {
  if (!html) {
    return null;
  }

  return external_react_html_parser_default()(html, {
    transform: (node, index) => {
      if (node.type === 'script') {
        if (!external_lodash_default.a.isEmpty(node.children)) {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_script_tag_default.a, htmlToReact_objectSpread(htmlToReact_objectSpread({}, node.attribs), {}, {
            children: convertChildren(node.children, index)
          }), index);
        } else {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_script_tag_default.a, htmlToReact_objectSpread({}, node.attribs), index);
        }
      } else if (node.type === 'tag' && node.name === 'a') {
        const href = node.attribs.href;

        const props = external_lodash_default.a.omit(node.attribs, 'href'); // use Link only if there are no custom attributes like style, class, and what's not that might break react


        if (external_lodash_default.a.isEmpty(props)) {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link, htmlToReact_objectSpread(htmlToReact_objectSpread({
            href: href
          }, props), {}, {
            children: convertChildren(node.children, index)
          }), index);
        }
      }
    }
  });
}
// CONCATENATED MODULE: ./src/utils/pathJoin.js

function pathJoin(...pathParts) {
  const result = external_lodash_default.a.compact(pathParts).join('/').replace(/\/{2,}/g, '/');

  return result || '.';
}
// EXTERNAL MODULE: external "marked"
var external_marked_ = __webpack_require__("HWFp");
var external_marked_default = /*#__PURE__*/__webpack_require__.n(external_marked_);

// CONCATENATED MODULE: ./src/utils/markdownify.js


function markdownify(markdown) {
  if (!markdown) {
    return null;
  }

  return htmlToReact(external_marked_default()(markdown));
}
;
// CONCATENATED MODULE: ./src/utils/index.js










// CONCATENATED MODULE: ./src/components/Icon.js



class Icon_Icon extends external_react_default.a.Component {
  render() {
    const icon = external_lodash_default.a.get(this.props, 'icon');

    switch (icon) {
      case 'dev':
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
          className: "icon",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M6.435 9.444c-0.208-0.155-0.416-0.233-0.624-0.233h-0.934v5.597h0.935c0.208 0 0.416-0.078 0.624-0.233s0.312-0.388 0.312-0.7v-3.731c-0.001-0.311-0.105-0.544-0.312-0.7zM21.649 0h-19.296c-1.296 0-2.349 1.049-2.352 2.346v19.307c0.003 1.297 1.055 2.346 2.352 2.346h19.296c1.297 0 2.349-1.049 2.352-2.346v-19.307c-0.003-1.297-1.055-2.346-2.352-2.346zM8.261 13.885c0 1.008-0.622 2.534-2.591 2.531h-2.486v-8.864h2.538c1.899 0 2.537 1.525 2.538 2.533l0.001 3.8zM13.655 9.136h-2.854v2.058h1.745v1.584h-1.745v2.058h2.855v1.584h-3.331c-0.598 0.016-1.095-0.457-1.11-1.055v-6.702c-0.014-0.597 0.459-1.093 1.056-1.108h3.385l-0.001 1.581zM19.207 15.312c-0.707 1.647-1.974 1.319-2.541 0l-2.064-7.757h1.745l1.592 6.092 1.584-6.092h1.745l-2.060 7.757z"
          })
        });

      case 'facebook':
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
          className: "icon",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"
          })
        });

      case 'github':
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
          className: "icon",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          })
        });

      case 'instagram':
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
          className: "icon",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z"
          })
        });

      case 'linkedin':
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
          className: "icon",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          })
        });

      case 'pinterest':
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
          className: "icon",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"
          })
        });

      case 'reddit':
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
          className: "icon",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"
          })
        });

      case 'twitter':
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
          className: "icon",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"
          })
        });

      case 'youtube':
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
          className: "icon",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"
          })
        });

      case 'vimeo':
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
          className: "icon",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
            d: "M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197a315.065 315.065 0 003.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"
          })
        });

      default:
        return null;
    }
  }

}
// CONCATENATED MODULE: ./src/components/ActionLink.js



function ActionLink_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ActionLink_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ActionLink_ownKeys(Object(source), true).forEach(function (key) { ActionLink_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ActionLink_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ActionLink_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class ActionLink_ActionLink extends external_react_default.a.Component {
  render() {
    const action = external_lodash_default.a.get(this.props, 'action');

    const url = external_lodash_default.a.get(action, 'url');

    const label = external_lodash_default.a.get(action, 'label');

    const style = external_lodash_default.a.get(action, 'style', 'link');

    const icon = external_lodash_default.a.get(action, 'icon_class', 'dev');

    const classes = classNames({
      'button': style !== 'link',
      'button-secondary': style === 'secondary',
      'button-icon': style === 'icon'
    });

    const newWindow = external_lodash_default.a.get(action, 'new_window');

    const noFollow = external_lodash_default.a.get(action, 'no_follow');

    const attrs = {};

    if (newWindow) {
      attrs.target = '_blank';
    }

    if (newWindow || noFollow) {
      attrs.rel = [newWindow ? 'noopener' : '', noFollow ? 'nofollow' : ''].filter(Boolean).join(' ');
    }

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link, ActionLink_objectSpread(ActionLink_objectSpread({
      href: withPrefix(url)
    }, attrs), {}, {
      className: classes,
      children: style === 'icon' ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Icon_Icon, {
          icon: icon
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: "screen-reader-text",
          children: label
        })]
      }) : label
    }));
  }

}
// CONCATENATED MODULE: ./src/components/Footer.js






class Footer_Footer extends external_react_default.a.Component {
  render() {
    const config = external_lodash_default.a.get(this.props, 'config');

    const footer = external_lodash_default.a.get(config, 'footer');

    const copyright = external_lodash_default.a.get(footer, 'content');

    const links = external_lodash_default.a.get(footer, 'links');

    const hasSocial = external_lodash_default.a.get(footer, 'has_social');

    const socialLinks = external_lodash_default.a.get(footer, 'social_links');

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("footer", {
      id: "colophon",
      className: "site-footer outer",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "inner",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "site-footer-inside",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "site-info",
            children: [copyright && /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "copyright",
              children: htmlToReact(copyright)
            }), external_lodash_default.a.map(links, (action, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(ActionLink_ActionLink, {
              action: action
            }, index))]
          }), hasSocial && !external_lodash_default.a.isEmpty(socialLinks) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "social-links",
            children: external_lodash_default.a.map(socialLinks, (action, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(ActionLink_ActionLink, {
              action: action
            }, index))
          })]
        })
      })
    });
  }

}
// CONCATENATED MODULE: ./src/components/FormField.js



function FormField_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function FormField_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FormField_ownKeys(Object(source), true).forEach(function (key) { FormField_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FormField_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FormField_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class FormField_FormField extends external_react_default.a.Component {
  render() {
    const field = external_lodash_default.a.get(this.props, 'field');

    const inputType = external_lodash_default.a.get(field, 'input_type');

    const name = external_lodash_default.a.get(field, 'name');

    const defaultValue = external_lodash_default.a.get(field, 'default_value');

    const options = external_lodash_default.a.get(field, 'options');

    const required = external_lodash_default.a.get(field, 'is_required');

    const label = external_lodash_default.a.get(field, 'label');

    const labelId = `${name}-label`;
    const attr = {};

    if (label) {
      attr['aria-labelledby'] = labelId;
    }

    if (required) {
      attr.required = true;
    }

    switch (inputType) {
      case 'checkbox':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "form-group form-checkbox",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", FormField_objectSpread({
            type: "checkbox",
            id: name,
            name: name
          }, attr)), label && /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            htmlFor: name,
            children: label
          })]
        });

      case 'select':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "form-group",
          children: [label && /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            htmlFor: name,
            children: label
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "form-select-wrap",
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("select", FormField_objectSpread(FormField_objectSpread({
              id: name,
              name: name
            }, attr), {}, {
              children: [defaultValue && /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                value: "",
                children: defaultValue
              }), external_lodash_default.a.map(options, (option, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])("option", {
                value: option,
                children: option
              }, index))]
            }))
          })]
        });

      case 'textarea':
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "form-group",
          children: [label && /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            htmlFor: name,
            children: label
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("textarea", FormField_objectSpread(FormField_objectSpread({
            name: name,
            id: name,
            rows: "7"
          }, defaultValue ? {
            placeholder: defaultValue
          } : null), attr))]
        });

      default:
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "form-group",
          children: [label && /*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
            htmlFor: name,
            children: label
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", FormField_objectSpread(FormField_objectSpread({
            type: inputType,
            name: name,
            id: name
          }, defaultValue ? {
            placeholder: defaultValue
          } : null), attr)), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "animate-border",
            "aria-hidden": "true"
          })]
        });
    }
  }

}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./src/components/Header.js







class Header_Header extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.handleRouteChange = this.handleRouteChange.bind(this);
    this.menuOpenRef = /*#__PURE__*/external_react_default.a.createRef();
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize, true);
    router_default.a.events.on('routeChangeStart', this.handleRouteChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize, true);
    router_default.a.events.off('routeChangeStart', this.handleRouteChange);
  }

  handleWindowResize() {
    const menuOpenElm = external_lodash_default.a.get(this.menuOpenRef, 'current.offsetParent');

    if (menuOpenElm === null) {
      document.body.classList.remove('menu--opened');
    }
  }

  handleRouteChange() {
    document.body.classList.remove('menu--opened');
  }

  handleMenuToggle(event) {
    event.preventDefault();
    document.body.classList.toggle('menu--opened');
  }

  renderNavLinks(navLinks, pageUrl) {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
        id: "menu-open",
        className: "menu-toggle",
        ref: this.menuOpenRef,
        onClick: this.handleMenuToggle.bind(this),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: "screen-reader-text",
          children: "Menu"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: "icon-menu",
          "aria-hidden": "true"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("nav", {
        id: "main-navigation",
        className: "site-nav",
        "aria-label": "Main Navigation",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "site-nav-inside",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
            id: "menu-close",
            className: "menu-toggle",
            onClick: this.handleMenuToggle.bind(this),
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "screen-reader-text",
              children: "Menu"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: "icon-close",
              "aria-hidden": "true"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
            className: "menu",
            children: external_lodash_default.a.map(navLinks, (action, index) => {
              const actionUrl = external_lodash_default.a.trim(external_lodash_default.a.get(action, 'url'), '/');

              const actionStyle = external_lodash_default.a.get(action, 'style', 'link');

              return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
                className: classNames('menu-item', {
                  'current-menu-item': pageUrl === actionUrl,
                  'menu-button': actionStyle !== 'link'
                }),
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(ActionLink_ActionLink, {
                  action: action
                })
              }, index);
            })
          })]
        })
      })]
    });
  }

  render() {
    const page = external_lodash_default.a.get(this.props, 'page');

    const pageUrl = external_lodash_default.a.trim(getPageUrl(page), '/');

    const pageLayout = external_lodash_default.a.get(page, 'layout');

    const config = external_lodash_default.a.get(this.props, 'config');

    const header = external_lodash_default.a.get(config, 'header');

    const logo = external_lodash_default.a.get(header, 'logo_img');

    const logoAlt = external_lodash_default.a.get(header, 'logo_img_alt', '');

    const title = external_lodash_default.a.get(header, 'title');

    const hasNav = external_lodash_default.a.get(header, 'has_nav');

    const navLinks = external_lodash_default.a.get(header, 'nav_links');

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("header", {
      id: "masthead",
      className: "site-header outer",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "inner",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "site-header-inside",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "site-branding",
            children: [logo && /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "site-logo",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link, {
                href: withPrefix('/'),
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: withPrefix(logo),
                  alt: logoAlt
                })
              })
            }), pageLayout === 'home' ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
              className: "site-title",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link, {
                href: withPrefix('/'),
                children: title
              })
            }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "site-title",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link, {
                href: withPrefix('/'),
                children: title
              })
            })]
          }), hasNav && !external_lodash_default.a.isEmpty(navLinks) && this.renderNavLinks(navLinks, pageUrl)]
        })
      })
    });
  }

}
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__("zIXN");

// CONCATENATED MODULE: ./src/components/SubscribeForm.js



function SubscribeForm_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SubscribeForm_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SubscribeForm_ownKeys(Object(source), true).forEach(function (key) { SubscribeForm_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SubscribeForm_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SubscribeForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class SubscribeForm_SubscribeForm extends external_react_default.a.Component {
  render() {
    const formAction = external_lodash_default.a.get(this.props, 'action');

    const formId = 'subscribeForm';
    const formHoneypotInputId = formId + '-honeypot';
    const formHoneypotLabelId = formId + '-honeypot-label';
    const formHoneypotName = formId + '-bot-field';
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", SubscribeForm_objectSpread(SubscribeForm_objectSpread({
      name: formId,
      id: formId,
      className: "subscribe-form"
    }, formAction ? {
      action: formAction
    } : null), {}, {
      method: "POST",
      "data-netlify": "true",
      "data-netlify-honeypot": formHoneypotName,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "screen-reader-text",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
          id: formHoneypotLabelId,
          htmlFor: formHoneypotInputId,
          children: ["Don't fill this out if you're human:", /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            "aria-labelledby": formHoneypotLabelId,
            id: formHoneypotInputId,
            name: formHoneypotName
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        type: "hidden",
        name: "form-name",
        value: formId
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "form-group",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "screen-reader-text",
            children: "Email address"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            type: "email",
            name: "email",
            placeholder: "Your email address",
            required: true
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: "button",
        type: "submit",
        children: "Subscribe"
      })]
    }));
  }

}
// CONCATENATED MODULE: ./src/components/Subscribe.js






class Subscribe_Subscribe extends external_react_default.a.Component {
  render() {
    const config = external_lodash_default.a.get(this.props, 'config');

    const footer = external_lodash_default.a.get(config, 'footer');

    const subscribeTitle = external_lodash_default.a.get(footer, 'subscribe_title');

    const subscribeContent = external_lodash_default.a.get(footer, 'subscribe_content');

    const subscribeAction = external_lodash_default.a.get(footer, 'subscribe_action');

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
      className: "subscribe outer",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "inner-sm",
        children: [subscribeTitle && /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          className: "subscribe-title",
          children: subscribeTitle
        }), subscribeContent && /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: "subscribe-text",
          children: htmlToReact(subscribeContent)
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SubscribeForm_SubscribeForm, {
          action: subscribeAction
        })]
      })
    });
  }

}
// CONCATENATED MODULE: ./src/components/Layout.js



function Layout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Layout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Layout_ownKeys(Object(source), true).forEach(function (key) { Layout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Layout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Layout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Layout_Body extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.handleVideoEmbeds = this.handleVideoEmbeds.bind(this);
  }

  componentDidMount() {
    this.handleVideoEmbeds();
  }

  componentDidUpdate() {
    this.handleVideoEmbeds();
  }

  handleVideoEmbeds() {
    const videoEmbeds = ['iframe[src*="youtube.com"]', 'iframe[src*="vimeo.com"]'];
    noframe(videoEmbeds.join(','), '.inner-md');
  }

  render() {
    const page = external_lodash_default.a.get(this.props, 'page');

    const pageTitle = external_lodash_default.a.get(page, 'title');

    const config = external_lodash_default.a.get(this.props, 'config');

    const configTitle = external_lodash_default.a.get(config, 'title');

    const palette = external_lodash_default.a.get(config, 'palette', 'green');

    const layoutStyle = external_lodash_default.a.get(config, 'layout_style', 'grid');

    const favicon = external_lodash_default.a.get(config, 'favicon');

    const domain = external_lodash_default.a.trim(external_lodash_default.a.get(config, 'domain', ''), '/');

    const seo = external_lodash_default.a.get(page, 'seo');

    const seoTitle = external_lodash_default.a.get(seo, 'title');

    const title = seoTitle ? seoTitle : [pageTitle, configTitle].join(' | ');

    const seoDescription = external_lodash_default.a.get(seo, 'description', '');

    const seoRobots = external_lodash_default.a.get(seo, 'robots', []).join(',');

    const seoExtra = external_lodash_default.a.get(seo, 'extra', []).map((meta, index) => {
      const keyName = external_lodash_default.a.get(meta, 'keyName', 'name');

      const name = external_lodash_default.a.get(meta, 'name');

      if (!name) {
        return null;
      }

      const nameAttr = {
        [keyName]: name
      };

      const relativeUrl = external_lodash_default.a.get(meta, 'relativeUrl');

      let value = external_lodash_default.a.get(meta, 'value');

      if (!value) {
        return null;
      }

      if (relativeUrl) {
        if (!domain) {
          return null;
        }

        value = domain + withPrefix(value);
      }

      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", Layout_objectSpread(Layout_objectSpread({}, nameAttr), {}, {
        content: value
      }), index);
    });

    const footer = external_lodash_default.a.get(config, 'footer');

    const hasSubscribe = external_lodash_default.a.get(footer, 'has_subscribe');

    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_default.a.Fragment, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_helmet_["Helmet"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
          children: title
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          charSet: "utf-8"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          name: "google",
          content: "notranslate"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          name: "description",
          content: seoDescription
        }), !external_lodash_default.a.isEmpty(seoRobots) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          name: "robots",
          content: seoRobots
        }), seoExtra, /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
          href: "https://fonts.googleapis.com/css?family=PT+Serif:400,700%7CRoboto:400,400i,700,700i&display=swap",
          rel: "stylesheet"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
          href: "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,400;0,600;1,200;1,400;1,600&display=swap",
          rel: "stylesheet"
        }), favicon && /*#__PURE__*/jsx_runtime_["jsx"]("link", {
          rel: "icon",
          href: withPrefix(favicon)
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("body", {
          className: classNames(`palette-${palette}`, `layout-${layoutStyle}`)
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        id: "page",
        className: "site",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header_Header, {
          page: page,
          config: config
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          id: "content",
          className: "site-content outer",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("main", {
            id: "main",
            className: "site-main inner",
            children: this.props.children
          })
        }), hasSubscribe && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Subscribe_Subscribe, {
          config: config
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer_Footer, {
          config: config
        })]
      })]
    });
  }

}
// CONCATENATED MODULE: ./src/components/index.js









/* harmony default export */ var components = ({
  ActionLink: ActionLink_ActionLink,
  Footer: Footer_Footer,
  FormField: FormField_FormField,
  Header: Header_Header,
  Layout: Layout_Body,
  Icon: Icon_Icon,
  Subscribe: Subscribe_Subscribe,
  SubscribeForm: SubscribeForm_SubscribeForm
});
// CONCATENATED MODULE: ./src/layouts/contact.js



function contact_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function contact_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { contact_ownKeys(Object(source), true).forEach(function (key) { contact_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { contact_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function contact_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class contact_Contact extends external_react_default.a.Component {
  render() {
    const data = external_lodash_default.a.get(this.props, 'data');

    const config = external_lodash_default.a.get(data, 'config');

    const page = external_lodash_default.a.get(this.props, 'page');

    const title = external_lodash_default.a.get(page, 'title');

    const subtitle = external_lodash_default.a.get(page, 'subtitle');

    const image = external_lodash_default.a.get(page, 'img_path');

    const imageAlt = external_lodash_default.a.get(page, 'img_alt', '');

    const formId = external_lodash_default.a.get(page, 'form_id');

    const formAction = external_lodash_default.a.get(page, 'form_action');

    const formFields = external_lodash_default.a.get(page, 'form_fields');

    const submitLabel = external_lodash_default.a.get(page, 'submit_label');

    const formHoneypotInputId = formId + '-honeypot';
    const formHoneypotLabelId = formId + '-honeypot-label';
    const formHoneypotName = formId + '-bot-field';

    const markdownContent = external_lodash_default.a.get(page, 'markdown_content');

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Layout_Body, {
      page: page,
      config: config,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("article", {
        className: "post page post-full",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
          className: "post-header inner-md",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            className: "post-title",
            children: title
          }), subtitle && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "post-subtitle",
            children: htmlToReact(subtitle)
          })]
        }), image && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "post-thumbnail",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            className: "thumbnail",
            src: withPrefix(image),
            alt: imageAlt
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "post-content inner-md",
          children: [markdownContent && markdownify(markdownContent), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", contact_objectSpread(contact_objectSpread({
            name: formId,
            id: formId
          }, formAction ? {
            action: formAction
          } : null), {}, {
            method: "POST",
            "data-netlify": "true",
            "data-netlify-honeypot": formHoneypotName,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "screen-reader-text",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                id: formHoneypotLabelId,
                htmlFor: formHoneypotInputId,
                children: ["Don't fill this out if you're human:", /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                  "aria-labelledby": formHoneypotLabelId,
                  id: formHoneypotInputId,
                  name: formHoneypotName
                })]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
              type: "hidden",
              name: "form-name",
              value: formId
            }), external_lodash_default.a.map(formFields, (field, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(FormField_FormField, {
              field: field
            }, index)), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "form-submit",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
                type: "submit",
                className: "button",
                children: submitLabel
              })
            })]
          }))]
        })]
      })
    });
  }

}
// EXTERNAL MODULE: external "moment-strftime"
var external_moment_strftime_ = __webpack_require__("pFWl");
var external_moment_strftime_default = /*#__PURE__*/__webpack_require__.n(external_moment_strftime_);

// CONCATENATED MODULE: ./src/layouts/home.js








class home_Home extends external_react_default.a.Component {
  renderPost(post, index, hasMoreLink, moreLinkText) {
    const title = external_lodash_default.a.get(post, 'title');

    const thumbImage = external_lodash_default.a.get(post, 'thumb_img_path');

    const thumbImageAlt = external_lodash_default.a.get(post, 'thumb_img_alt', '');

    const excerpt = external_lodash_default.a.get(post, 'excerpt');

    const date = external_lodash_default.a.get(post, 'date');

    const dateTimeAttr = external_moment_strftime_default()(date).strftime('%Y-%m-%d %H:%M');
    const formattedDate = external_moment_strftime_default()(date).strftime('%B %d, %Y');
    const postUrl = getPageUrl(post, {
      withPrefix: true
    });
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("article", {
      className: "post post-card",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "post-card-inside",
        children: [thumbImage && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link, {
          className: "post-card-thumbnail",
          href: postUrl,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            className: "thumbnail",
            src: withPrefix(thumbImage),
            alt: thumbImageAlt
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "post-card-content",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
            className: "post-header",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: "post-meta",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("time", {
                className: "published",
                dateTime: dateTimeAttr,
                children: formattedDate
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              className: "post-title",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link, {
                href: postUrl,
                children: title
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "post-excerpt",
            children: [excerpt && /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: excerpt
            }), hasMoreLink && moreLinkText && /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: "read-more",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link, {
                className: "button button-secondary",
                href: postUrl,
                children: moreLinkText
              })
            })]
          })]
        })]
      })
    }, index);
  }

  render() {
    const data = external_lodash_default.a.get(this.props, 'data');

    const config = external_lodash_default.a.get(data, 'config');

    const page = external_lodash_default.a.get(this.props, 'page');

    const hasIntro = external_lodash_default.a.get(page, 'has_intro');

    const introContent = external_lodash_default.a.get(page, 'intro_content');

    const introActions = external_lodash_default.a.get(page, 'intro_actions');

    const hasMoreLink = external_lodash_default.a.get(page, 'has_more_link');

    const moreLinkText = external_lodash_default.a.get(page, 'more_link_text');

    const posts = external_lodash_default.a.orderBy(external_lodash_default.a.get(this.props, 'posts', []), 'date', 'desc');

    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Layout_Body, {
      page: page,
      config: config,
      children: [hasIntro && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "intro",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "inner-md",
          children: [introContent && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "intro-text",
            children: markdownify(introContent)
          }), !external_lodash_default.a.isEmpty(introActions) && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "intro-cta",
            children: external_lodash_default.a.map(introActions, (action, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(ActionLink_ActionLink, {
              action: action
            }, index))
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "post-feed",
        children: external_lodash_default.a.map(posts, (post, index) => this.renderPost(post, index, hasMoreLink, moreLinkText))
      })]
    });
  }

}
// CONCATENATED MODULE: ./src/layouts/page.js






class page_Page extends external_react_default.a.Component {
  render() {
    const data = external_lodash_default.a.get(this.props, 'data');

    const config = external_lodash_default.a.get(data, 'config');

    const page = external_lodash_default.a.get(this.props, 'page');

    const title = external_lodash_default.a.get(page, 'title');

    const subtitle = external_lodash_default.a.get(page, 'subtitle');

    const image = external_lodash_default.a.get(page, 'img_path');

    const imageAlt = external_lodash_default.a.get(page, 'img_alt', '');

    const markdownContent = external_lodash_default.a.get(page, 'markdown_content');

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Layout_Body, {
      page: page,
      config: config,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("article", {
        className: "post page post-full",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
          className: "post-header inner-md",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            className: "post-title",
            children: title
          }), subtitle && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "post-subtitle",
            children: htmlToReact(subtitle)
          })]
        }), image && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "post-thumbnail",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            className: "thumbnail",
            src: withPrefix(image),
            alt: imageAlt
          })
        }), markdownContent && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "post-content inner-md",
          children: markdownify(markdownContent)
        })]
      })
    });
  }

}
// CONCATENATED MODULE: ./src/layouts/post.js







class post_Post extends external_react_default.a.Component {
  render() {
    const data = external_lodash_default.a.get(this.props, 'data');

    const config = external_lodash_default.a.get(data, 'config');

    const page = external_lodash_default.a.get(this.props, 'page');

    const title = external_lodash_default.a.get(page, 'title');

    const subtitle = external_lodash_default.a.get(page, 'subtitle');

    const image = external_lodash_default.a.get(page, 'content_img_path');

    const imageAlt = external_lodash_default.a.get(page, 'content_img_alt', '');

    const date = external_lodash_default.a.get(page, 'date');

    const dateTimeAttr = external_moment_strftime_default()(date).strftime('%Y-%m-%d %H:%M');
    const formattedDate = external_moment_strftime_default()(date).strftime('%A, %B %e, %Y');

    const markdownContent = external_lodash_default.a.get(page, 'markdown_content');

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Layout_Body, {
      page: page,
      config: config,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("article", {
        className: "post post-full",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
          className: "post-header inner-md",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "post-meta",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("time", {
              className: "published",
              dateTime: dateTimeAttr,
              children: formattedDate
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
            className: "post-title",
            children: title
          }), subtitle && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: "post-subtitle",
            children: htmlToReact(subtitle)
          })]
        }), image && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "post-thumbnail",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: withPrefix(image),
            alt: imageAlt,
            className: "thumbnail"
          })
        }), markdownContent && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "post-content inner-md",
          children: markdownify(markdownContent)
        })]
      })
    });
  }

}
// CONCATENATED MODULE: ./src/layouts/index.js





/* harmony default export */ var layouts = ({
  contact: contact_Contact,
  home: home_Home,
  page: page_Page,
  post: post_Post
});
// CONCATENATED MODULE: ./src/pages/[[...slug]].js


function _slug_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _slug_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _slug_ownKeys(Object(source), true).forEach(function (key) { _slug_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _slug_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slug_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class _slug_Page extends external_react_default.a.Component {
  render() {
    const modelName = external_lodash_default.a.get(this.props, 'page.__metadata.modelName');

    const PageLayout = layouts[modelName];

    if (!PageLayout) {
      throw new Error(`no page layout matching the page model: ${modelName}`);
    }

    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(PageLayout, _slug_objectSpread({}, this.props));
  }

}

async function getStaticPaths() {
  console.log('Page [...slug].js getStaticPaths');
  const paths = await external_sourcebit_target_next_["sourcebitDataClient"].getStaticPaths();
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  console.log('Page [...slug].js getStaticProps, params: ', params);
  const pagePath = '/' + (params.slug ? params.slug.join('/') : '');
  const props = await external_sourcebit_target_next_["sourcebitDataClient"].getStaticPropsForPageAtPath(pagePath);
  return {
    props
  };
}
/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (Object(with_remote_data_updates_["withRemoteDataUpdates"])(_slug_Page));

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })

/******/ });