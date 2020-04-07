var framedList =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/webpack/buildin/harmony-module.js":
/*!*********************************************************!*\
  !*** ../node_modules/webpack/buildin/harmony-module.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "../src/core/directives/index.js":
/*!***************************************!*\
  !*** ../src/core/directives/index.js ***!
  \***************************************/
/*! exports provided: coreDirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreDirectivesModule", function() { return coreDirectivesModule; });
/* harmony import */ var _on_scroll_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on-scroll.directive */ "../src/core/directives/on-scroll.directive.js");


const coreDirectivesModule = angular.module('core.directives', [
    'core.services'
]);

coreDirectivesModule.directive('onScroll', _on_scroll_directive__WEBPACK_IMPORTED_MODULE_0__["onScroll"]);

/***/ }),

/***/ "../src/core/directives/on-scroll.directive.js":
/*!*****************************************************!*\
  !*** ../src/core/directives/on-scroll.directive.js ***!
  \*****************************************************/
/*! exports provided: onScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onScroll", function() { return onScroll; });


const onScroll = ['$parse', 'utils', ($parse, utils) => {
    return {
        restrict: 'A',
        link: (scope, el, attrs) => {
            const debounce = Number(attrs.debounce);
            const cb = $parse(attrs.onScroll);
            const onScroll = utils.debounce((evt) => {
                cb(scope, {event: evt});
            }, debounce);

            el.on('scroll', onScroll);

            el.on('$destroy', () => {
                el.off('scroll', onScroll);
            });
        }
    };
}];

/***/ }),

/***/ "../src/core/index.js":
/*!****************************!*\
  !*** ../src/core/index.js ***!
  \****************************/
/*! exports provided: coreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreModule", function() { return coreModule; });
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives */ "../src/core/directives/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "../src/core/services/index.js");



const coreModule = angular.module('core', [
    _directives__WEBPACK_IMPORTED_MODULE_0__["coreDirectivesModule"].name,
    _services__WEBPACK_IMPORTED_MODULE_1__["coreServicesModule"].name
]);

/***/ }),

/***/ "../src/core/services/index.js":
/*!*************************************!*\
  !*** ../src/core/services/index.js ***!
  \*************************************/
/*! exports provided: coreServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coreServicesModule", function() { return coreServicesModule; });
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ "../src/core/services/utils.service.js");


const coreServicesModule = angular.module('core.services', []);

coreServicesModule.factory('utils', _utils_service__WEBPACK_IMPORTED_MODULE_0__["utils"]);

/***/ }),

/***/ "../src/core/services/utils.service.js":
/*!*********************************************!*\
  !*** ../src/core/services/utils.service.js ***!
  \*********************************************/
/*! exports provided: utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return utils; });


const utils = ['$timeout', ($timeout) => {
    const debounce = (func, time) => {
        let lastTimeCalled = Date.now();
        let timeoutDeferred = null;

        const startTimer = (f) => {
            timeoutDeferred = $timeout(f, time);
        };

        return (...args) => {
            if(timeoutDeferred !== null) {
                $timeout.cancel(timeoutDeferred);
            }

            if(lastTimeCalled <= (Date.now() - time)) {
                timeoutDeferred = null;
                func(...args);
            } else {
                startTimer(() => func(...args));
            }

            lastTimeCalled = Date.now();
        };
    };

    const throttle = (func, time) => {
        let timeoutDeferred = null;

        return (...args) => {
            if(timeoutDeferred !== null) {
                return;
            }

            timeoutDeferred = $timeout(() => {
                func(...args);
                $timeout.cancel(timeoutDeferred);
                timeoutDeferred = null;
            }, time);
        };
    };

    return {
        debounce,
        throttle
    };

}];

/***/ }),

/***/ "../src/index.js":
/*!***********************!*\
  !*** ../src/index.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "../src/core/index.js");
/* harmony import */ var _lazy_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lazy-list */ "../src/lazy-list/index.js");
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "../src/list/index.js");
/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item */ "../src/list-item/index.js");







module.exports = angular.module('framedList', [
    _core__WEBPACK_IMPORTED_MODULE_0__["coreModule"].name,
    _list_item__WEBPACK_IMPORTED_MODULE_3__["listItemModule"].name,
    _list__WEBPACK_IMPORTED_MODULE_2__["listModule"].name,
    _lazy_list__WEBPACK_IMPORTED_MODULE_1__["lazyListModule"].name
]);

// function ListTest($scope, $filter, utils) {
//     this.list = (new Array(50000)).fill(1).map((_, idx) => `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, porro. ${idx}`);
//     this.filtered = this.list;
//     const filter = $filter('filter');
//     this.query = '';
//
//     this.onQuery = utils.debounce(() => {
//         this.filtered = filter(this.list, this.query);
//     }, 500);
//
// }
//
// ListTest.$inject = ['$scope', '$filter', 'utils'];
//
// app.controller('ListTest', ListTest);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../src/lazy-list/index.js":
/*!*********************************!*\
  !*** ../src/lazy-list/index.js ***!
  \*********************************/
/*! exports provided: lazyListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyListModule", function() { return lazyListModule; });
/* harmony import */ var _lazy_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lazy-list.component */ "../src/lazy-list/lazy-list.component.js");


const lazyListModule = angular.module('lazyList', [
    'core',
    'list',
    'list-item'
]);

lazyListModule.directive('lazyList', _lazy_list_component__WEBPACK_IMPORTED_MODULE_0__["lazyListDirective"]);

/***/ }),

/***/ "../src/lazy-list/lazy-list.component.js":
/*!***********************************************!*\
  !*** ../src/lazy-list/lazy-list.component.js ***!
  \***********************************************/
/*! exports provided: lazyListDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyListDirective", function() { return lazyListDirective; });


const lazyListDirective = ['$parse', '$window', 'utils', ($parse, $window, utils) => {
    return {
        restrict: 'A',
        require: 'list',
        link: (scope, el, attrs, listController) => {
            const listUnscrollable = $parse(attrs.onUnscrollable);
            const listTooLong = $parse(attrs.onTooLong);
            const nativeElement = el[0];
            let batchLength = Number(attrs.batchLength);
            let watchers = [];
            let fullList = [];

            scope.batchedList = [];

            if(!Number.isFinite(batchLength)) {
                batchLength = listController.DEFAULT_BATCH_LENGTH;
            }

            const getOverflowPoint = (batchLength) => {
                return batchLength * listController.MIN_SCROLLBAR_FACTOR;
            };

            const idxes = {
                start: null,
                end: null
            };

            const setIndices = (start, end) => {
                idxes.start = start;
                idxes.end = end;
            };

            const applyToStartIndex = (startIdxFn) => {
                const start = startIdxFn(idxes.start);

                if(Number.isFinite(start)) {
                    return start > 0 ? start : 0;
                }
            };

            const applyToEndIdx = (endIdxFn) => {
                const end = endIdxFn(idxes.end);

                if(Number.isFinite(end)) {
                    return end > fullList.length ? fullList.length : end;
                }

                return idxes.end;
            };

            const getSlicedList = (start, end) => {
                return Array.prototype.slice.call(fullList || [], start, end);
            };

            const getBatch = () => {
                return getSlicedList(idxes.start, idxes.end);
            };

            const initIndices = () => {
                setIndices(0, getOverflowPoint(batchLength));
            };

            const updateSliceIndices = (updateFn) => {
                setIndices(
                    applyToStartIndex(updateFn),
                    applyToEndIdx(updateFn)
                );
            };

            const increaseIndices = (increaseBy) => {
                updateSliceIndices((index) => {
                    return index + increaseBy;
                });
            };

            const decreaseIndices = (decreaseBy) => {
                updateSliceIndices((index) => {
                    return index - decreaseBy;
                });
            };

            const getPrevBatch = () => {
                decreaseIndices(batchLength);

                return getBatch();
            };

            const getNextBatch = () => {
                increaseIndices(batchLength);

                return getBatch();
            };

            const initBatchedList = () => {
                initIndices();
                scope.batchedList = getBatch();
            };

            const tooSmallBatchLength = () => {
                batchLength += listController.ADD_COUNT_IF_UNSCROLLABLE;
                const listLength = fullList.length;

                if(listLength > batchLength) {
                    initBatchedList();
                } else {
                    batchLength = listLength;
                    scope.batchedList = fullList;
                }
            };

            const tooBigBatchLength = () => {
                const {ADD_COUNT_IF_UNSCROLLABLE} = listController;

                if(batchLength <= ADD_COUNT_IF_UNSCROLLABLE) {
                    return;
                }

                batchLength -= ADD_COUNT_IF_UNSCROLLABLE;
                // TODO: fix jumping to start of list when list is too long
                initBatchedList();
            };

            scope.toTop = () => {
                if(fullList && fullList.length) {
                    nativeElement.scrollTop = 0;

                    return initBatchedList();
                }
            };

            scope.toBottom = () => {
                const listLength = fullList.length;

                if(listLength && idxes.end < listLength) {
                    setIndices(listLength - getOverflowPoint(batchLength), listLength);
                    scope.batchedList = getBatch();

                    requestAnimationFrame(() => {
                        nativeElement.scrollTop = nativeElement.scrollHeight;
                    });
                }
            };

            scope.onTop = () => {
                if(idxes.start <= 0) {
                    return;
                }

                scope.batchedList = getPrevBatch(fullList);

                listController.firstListItem.scrollIntoView();
            };

            scope.onBottom = () => {
                const listLength = fullList.length;

                if(listLength) {
                    if(idxes.end >= listLength) {
                        return;
                    }

                    scope.batchedList = getNextBatch(fullList);
                }
            };

            scope.adjustListHeight = () => {
                const nativeListItemElement = listController.lastListItem;

                requestAnimationFrame(() => {
                    // read values on frame started
                    const {scrollHeight, clientHeight} = nativeElement;
                    const listMinHeight = Math.round(clientHeight * listController.MIN_SCROLLBAR_FACTOR);

                    // check first simplest computations
                    if(scrollHeight < listMinHeight) {
                        return scope.$apply(() => {
                            tooSmallBatchLength();
                            listUnscrollable(scope);
                        });
                    }

                    // check if after removing 'batchLength' items
                    // we still have too long list
                    let prevElement = nativeListItemElement;
                    for(let i = batchLength; i > 0; i--) {
                        const {previousElementSibling} = prevElement;

                        if(!previousElementSibling) {
                            return;
                        }

                        prevElement = previousElementSibling;
                    }

                    if (listMinHeight < prevElement.offsetTop) {
                        scope.$apply(() => {
                            tooBigBatchLength();
                            listTooLong(scope);
                        });
                    }
                });
            };

            const adjustListHeight = utils.throttle(scope.adjustListHeight, 300);

            angular.element($window).on('resize', adjustListHeight);

            watchers.push(
                scope.$watch(attrs.lazyList, (list) => {
                    fullList = list;
                    initBatchedList();
                })
            );

            watchers.push(
                scope.$on('$destroy', () => {
                    watchers.forEach(off => off());
                    angular.element($window).off('resize', adjustListHeight);
                })
            );
        }
    };
}];

/***/ }),

/***/ "../src/list-item/index.js":
/*!*********************************!*\
  !*** ../src/list-item/index.js ***!
  \*********************************/
/*! exports provided: listItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listItemModule", function() { return listItemModule; });
/* harmony import */ var _list_item_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-item.directive */ "../src/list-item/list-item.directive.js");


const listItemModule = angular.module('list-item', []);

listItemModule.directive('listItem', _list_item_directive__WEBPACK_IMPORTED_MODULE_0__["listItemDirective"]);

/***/ }),

/***/ "../src/list-item/list-item.directive.js":
/*!***********************************************!*\
  !*** ../src/list-item/list-item.directive.js ***!
  \***********************************************/
/*! exports provided: listItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listItemDirective", function() { return listItemDirective; });


const listItemDirective = ['$parse', ($parse) => {
    return {
        restrict: 'A',
        link: (scope, el, attrs) => {
            const onFirstItemRendered = $parse(attrs.onFirstRendered);
            const onLastItemRendered = $parse(attrs.onLastRendered);
            const watchers = [];

            watchers.push(
                // necessary to constantly watch because when scrollbar is at bottom
                // and we remove elements from top, elements in the middle become first
                scope.$watch('$first', isFirst => {
                    if(isFirst) {
                        onFirstItemRendered(scope, {element: el});
                    }
                }),
                // necessary to constantly watch because when scrollbar is at top
                // and we remove elements from bottom, elements in the middle become last
                scope.$watch('$last', isLast => {
                    if(isLast) {
                        onLastItemRendered(scope, {element: el});
                    }
                })
            );

            watchers.push(
                scope.$on('$destroy', () => watchers.forEach(off => off()))
            );
        }
    };
}];

/***/ }),

/***/ "../src/list/index.js":
/*!****************************!*\
  !*** ../src/list/index.js ***!
  \****************************/
/*! exports provided: listModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listModule", function() { return listModule; });
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.component */ "../src/list/list.component.js");


//import './list.css';


const listModule = angular.module('list', [
    'core',
    'list-item'
]);

listModule.directive('list', _list_component__WEBPACK_IMPORTED_MODULE_0__["listDirective"]);


/***/ }),

/***/ "../src/list/list.component.js":
/*!*************************************!*\
  !*** ../src/list/list.component.js ***!
  \*************************************/
/*! exports provided: listDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listDirective", function() { return listDirective; });


const listDirective = ['$parse', '$log', ($parse, $log) => {
    return {
        restrict: 'A',
        controller: function ListController() {
            this.$onInit = () => {
                this.firstListItem = null;
                this.lastListItem = null;
                this.MIN_EDGE = 1;
                this.ADD_COUNT_IF_UNSCROLLABLE = 2;
                this.MIN_SCROLLBAR_FACTOR = 2;
                this.DEFAULT_BATCH_LENGTH = 20;
            };
        },
        link: (scope, el, attrs, listController) => {
            const nativeElement = el[0];
            const onTop = $parse(attrs.onTopList);
            const onBottom = $parse(attrs.onBottomList);

            const isAtTop = (scrollTop) => {
                return scrollTop < listController.MIN_EDGE;
            };

            const isAtBottom = (scrollTop) => {
                const {clientHeight, scrollHeight} = nativeElement;
                
                return ((scrollHeight - scrollTop) - clientHeight) < listController.MIN_EDGE;
            };

            scope.firstItemRendered = (item) => {
                listController.firstListItem = item[0];

                return true;
            };

            scope.lastItemRendered = (item) => {
                listController.lastListItem = item[0];

                return true;
            };

            if(scope.hasOwnProperty('onScroll')) {
                $log.error('scope already has onScroll property. Please rename it to be able to use onScroll event.');
            } else {
                scope.onScroll = (evt) => {
                    if(evt.defaultPrevented) {
                        return;
                    }
                    
                    // read scroll values at start of next frame
                    // to avoid recalculation styles before js in the middle of frame
                    requestAnimationFrame(() => {
                        const {scrollTop} = nativeElement;

                        if(isAtTop(scrollTop)) {
                            return scope.$apply(() => {
                                onTop(scope);
                            });
                        }
    
                        if(isAtBottom(scrollTop)) {
                            return scope.$apply(() => {
                                onBottom(scope);
                            });
                        }
                    });
                };
            }
        }
    };
}];

/***/ })

/******/ });
//# sourceMappingURL=framedList.js.map