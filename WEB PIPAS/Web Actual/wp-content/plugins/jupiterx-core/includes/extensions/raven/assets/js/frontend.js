(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

(function ($) {
  var RavenFrontend = function RavenFrontend() {
    var widgets = {
      'raven-alert.default': require('./widgets/alert')["default"],
      'raven-countdown.default': require('./widgets/countdown')["default"],
      'raven-counter.default': require('./widgets/counter')["default"],
      'raven-form.default': require('./widgets/form')["default"],
      'raven-reset-password.default': require('./widgets/form')["default"],
      'raven-login.default': require('./widgets/form')["default"],
      'raven-register.default': require('./widgets/form')["default"],
      'raven-social-login.default': require('./widgets/social-login')["default"],
      'raven-photo-roller.default': require('./widgets/photo-roller')["default"],
      'raven-tabs.default': require('./widgets/tabs')["default"],
      'raven-video.default': require('./widgets/video')["default"],
      'raven-categories.outer_content': require('./widgets/categories')["default"],
      'raven-categories.inner_content': require('./widgets/categories')["default"],
      'raven-posts.classic': require('./widgets/posts').classic,
      'raven-posts.cover': require('./widgets/posts').cover,
      'raven-posts-carousel.classic': require('./widgets/posts-carousel').classic,
      'raven-posts-carousel.cover': require('./widgets/posts-carousel').cover,
      'raven-photo-album.cover': require('./widgets/photo-album')["default"],
      'raven-photo-album.stack': require('./widgets/photo-album')["default"],
      'raven-search-form.classic': require('./widgets/search-form').classic,
      'raven-search-form.full': require('./widgets/search-form').full,
      'raven-nav-menu.default': require('./widgets/nav-menu')["default"],
      'raven-wc-products.default': require('./widgets/wc-products')["default"]
    };

    function elementorInit() {
      for (var widget in widgets) {
        elementorFrontend.hooks.addAction("frontend/element_ready/".concat(widget), widgets[widget]);
      }

      if (typeof elementorPro === 'undefined' && typeof window.elementor !== 'undefined' && $('.elementor').length > 0) {
        var fullPageEditor = require('./utils/full-page-editor');

        fullPageEditor.handleFullPageEditorBtn();
        fullPageEditor.handleHeaderBtns();
      }

      require('./widgets/column');
    }

    this.Module = require('./utils/module');
    this.utils = {
      Masonry: require('./utils/masonry'),
      Sortable: require('./utils/sortable'),
      Pagination: require('./utils/pagination'),
      Detector: require('./utils/detectr'),
      SmoothScroll: require('./utils/smoothscroll-polyfill')
    };

    this.init = function () {
      $(window).on('elementor/frontend/init', elementorInit);
    };

    this.init();
  };

  window.ravenFrontend = new RavenFrontend();
})(jQuery);

},{"./utils/detectr":2,"./utils/full-page-editor":3,"./utils/masonry":4,"./utils/module":5,"./utils/pagination":6,"./utils/smoothscroll-polyfill":7,"./utils/sortable":8,"./widgets/alert":9,"./widgets/categories":10,"./widgets/column":11,"./widgets/countdown":12,"./widgets/counter":13,"./widgets/form":14,"./widgets/nav-menu":15,"./widgets/photo-album":16,"./widgets/photo-roller":17,"./widgets/posts":19,"./widgets/posts-carousel":18,"./widgets/search-form":20,"./widgets/social-login":21,"./widgets/tabs":22,"./widgets/video":23,"./widgets/wc-products":24}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*!
 * Detectr.js
 * @author Rogerio Taques (rogerio.taques@gmail.com)
 * @see http://github.com/rogeriotaques/detectrjs
 *
 * This project is based on the Rafael Lima's work
 * which is called css_browser_selector and seems
 * to be discontinued. (http://rafael.adm.br/css_browser_selector/).
 */
var DetectrJs = function detecterjs($) {
  var version = '1.8.1';
  /**
   * Whenever .trim() isn't supported, makes it be.
   */

  if (typeof String.prototype.trim !== 'function') {
    // eslint-disable-next-line no-extend-native
    String.prototype.trim = function trim() {
      return this.replace(/^\s+|\s+$/g, '');
    };
  }

  var doc = $.document;
  var element = doc.documentElement;

  var detectr = function detectr(userAgent) {
    var ua = userAgent.toLowerCase();
    var winWidth = $.outerWidth || element.clientWidth;
    var winHeight = $.outerHeight || element.clientHeight;
    var gecko = 'gecko';
    var webkit = 'webkit';
    var safari = 'safari';
    var opera = 'opera';
    var mobile = 'mobile';
    /**
     * Checks if given string is present on the userAgent.
     *
     * @param str
     * @param string  str
     * @return {boolean}
     */

    var is = function is(str) {
      return ua.indexOf(str) > -1;
    };
    /**
     * The core feature ...
     */


    var detect = function detect() {
      var rendered = [];
      var implementation = doc.implementation;
      var webkitVersion = /applewebkit\/(\d{1,})/.test(ua) ? RegExp.$1 : false;
      var sysVersion = ''; // *** Detecting browsers ***

      switch (true) {
        // internet explorer
        case is('msie') && !is('opera') && !is('webtv') || is('trident') || is('edge'):
          if (is('edge')) {
            sysVersion = /edge\/(\w+)/.test(ua) ? ' edge ie' + RegExp.$1 : ' ie11';
          } else if (is('msie 8.0') || is('trident/7.0')) {
            sysVersion = ' ie11';
          } else {
            sysVersion = /msie\s(\d+)/.test(ua) ? ' ie' + RegExp.$1 : '';
          }

          rendered.push('ie' + sysVersion);
          break;
        // iron

        case is('iron/') || is('iron'):
          sysVersion = /iron\/(\d+)/.test(ua) ? ' iron' + RegExp.$1 : '';
          rendered.push(webkit + ' iron' + sysVersion);
          break;
        // android

        case is('android') && is('u;') && (!is('chrome') || is('chrome') && webkitVersion && webkitVersion <= 534):
          // according to some researches android stock (native) browsers never went above applewebkit/534.x,
          // then, we can suppose user is using a native browser in android when the UA contains "android",
          // "mobile" and "U;" strings
          // @see: (http://stackoverflow.com/questions/14403766/how-to-detect-the-stock-android-browser)
          rendered.push('android-browser');
          break;
        // google chrome

        case is('chrome/') || is('chrome'):
          sysVersion = /chrome\/(\d+)/.test(ua) ? ' chrome' + RegExp.$1 : '';
          rendered.push(webkit + ' chrome' + sysVersion);
          break;
        // firefox

        case is('firefox/') || is('firefox'):
          sysVersion = /firefox\/(\d+)/.test(ua) ? ' firefox' + RegExp.$1 : '';
          rendered.push(gecko + ' firefox' + sysVersion);
          break;
        // opera

        case is('opera/') || is('opera'):
          sysVersion = /version(\s|\/)(\d+)/.test(ua) || /opera(\s|\/)(\d+)/.test(ua) ? ' ' + opera + RegExp.$2 : '';
          rendered.push(opera + sysVersion);
          break;
        // konqueror

        case is('konqueror'):
          rendered.push(mobile + ' konqueror');
          break;
        // blackberry

        case is('blackberry') || is('bb'):
          rendered.push(mobile + ' blackberry');

          if (is('bb')) {
            sysVersion = /bb(\d{1,2})(;{0,1})/.test(ua) ? 'bb' + RegExp.$1 : '';
            rendered.push(sysVersion);
          }

          break;
        // safari

        case is('safari/') || is('safari'):
          sysVersion = /version\/(\d+)/.test(ua) || /safari\/(\d+)/.test(ua) ? ' ' + safari + RegExp.$1 : '';
          rendered.push(webkit + ' ' + safari + sysVersion);
          break;
        // applewebkit

        case is('applewebkit/') || is('applewebkit'):
          sysVersion = /applewebkit\/(\d+)/.test(ua) ? ' ' + webkit + RegExp.$1 : '';
          rendered.push(webkit + ' ' + sysVersion);
          break;
        // gecko || mozilla

        case is('gecko') || is('mozilla/'):
          rendered.push(gecko);
          break;

        default:
          break;
      } // *** Detecting O.S ***


      switch (true) {
        // ios
        case is('iphone') || is('ios'):
          sysVersion = /iphone\sos\s(\d{1,2})/.test(ua) ? ' ios' + RegExp.$1 : ''; // For some reason when it's iOS8, userAgent comes like OS 10_10
          // what returns a wrong version, then we need to match it against
          // another value

          if (sysVersion === ' ios10') {
            var vv = /(\d{1,2})/.test(sysVersion) ? RegExp.$1 : 0;
            var vd = /\sversion\/(\d{1,2})/.test(ua) ? RegExp.$1 : '';

            if (parseInt(vv, 10) > parseInt(vd, 10)) {
              sysVersion = ' ios' + vd;
            }
          }

          rendered.push('ios' + sysVersion);
          break;
        // macintosh

        case is('mac') || is('macintosh') || is('darwin'):
          sysVersion = /mac\sos\sx\s(\d{1,2}_\d{1,2})/.test(ua) ? ' osx' + RegExp.$1 : '';
          rendered.push('mac' + sysVersion);
          break;
        // windows

        case is('windows') || is('win'):
          sysVersion = /windows\s(nt\s{0,1})(\d{1,2}\.\d)/.test(ua) ? '' + RegExp.$2 : ''; // defining windows version

          switch (sysVersion) {
            case '5.0':
              sysVersion = ' win2k';
              break;

            case '5.01':
              sysVersion = ' win2k sp1';
              break;

            case '5.1':
            case '5.2':
              sysVersion = ' xp';
              break;

            case '6.0':
              sysVersion = ' vista';
              break;

            case '6.1':
              sysVersion = ' win7';
              break;

            case '6.2':
              sysVersion = ' win8';
              break;

            case '6.3':
              sysVersion = ' win8_1';
              break;

            case '6.4':
              sysVersion = ' win10';
              break;

            default:
              sysVersion = ' nt nt' + sysVersion;
          }

          rendered.push('windows' + sysVersion);
          break;
        // webtv

        case is('webtv'):
          rendered.push('webtv');
          break;
        // freebsd

        case is('freebsd'):
          rendered.push('freebsd');
          break;
        // android

        case is('android') || is('linux') && is('mobile'):
          rendered.push('android');
          break;
        // linux

        case is('linux') || is('x11'):
          rendered.push('linux');
          break;

        default:
          break;
      } // *** Detecting platform ***


      switch (true) {
        // 64 bits
        case is('wow64') || is('x64'):
          rendered.push('x64');
          break;
        // arm

        case is('arm'):
          rendered.push('arm');
          break;
        // 32 bits

        default:
          rendered.push('x32');
      } // *** Detecting devices ***


      switch (true) {
        case is('j2me'):
          rendered.push(mobile + ' j2me');
          break;

        case /(iphone|ipad|ipod)/.test(ua):
          rendered.push(mobile + ' ' + RegExp.$1);
          break;

        case is('mobile'):
          rendered.push(mobile);
          break;

        default:
          break;
      } // *** Detecting touchable devices ***


      if (/touch/.test(ua)) {
        rendered.push('touch');
      } // *** Assume that it supports javascript by default ***


      rendered.push('js'); // *** Detect if SVG images are supported ***

      rendered.push(implementation !== undefined && typeof implementation.hasFeature === 'function' && implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1') ? 'svg' : 'no-svg'); // *** Detect retina display ***

      rendered.push($.devicePixelRatio !== undefined && $.devicePixelRatio > 1 ? 'retina' : 'no-retina'); // *** Detecting orientation ***

      rendered.push(winWidth < winHeight ? 'portrait' : 'landscape');
      return rendered;
    }; // retrieve current classes attached


    var currentClassNames = doc.documentElement.className.split(' '); // convert 'detect' from function to array
    // and avoid unnecessary processing

    detect = detect(); // concat all detected classes to the existing ones and make sure they are unique
    // this prevent wiping pre-existing classes attached by different processes.

    currentClassNames = currentClassNames.concat(detect);
    currentClassNames = currentClassNames.filter(function (v, i) {
      return currentClassNames.indexOf(v) === i;
    }); // inject the new classes set in the HTML tag.

    element.className = currentClassNames.join(' ').trim(); // return what was detected

    return {
      detected: detect.join(' ').trim(),
      version: version
    };
  }; // execute and exposes detectr.js to the browser
  // eslint-disable-next-line


  $.detectr = detectr($.navigator.userAgent);
  /**
   * The listener engine for resize event ...
   */

  var resizing = function resizing() {
    $.detectr = detectr($.navigator.userAgent); // eslint-disable-line
  }; // add an event listener for window resize
  // which will asure that references will be
  // updated in case of browser resizing


  if ($.attachEvent) {
    $.attachEvent('onresize', resizing);
  } else if ($.addEventListener) {
    $.addEventListener('resize', resizing, true);
  }
};

DetectrJs(window);
var _default = DetectrJs;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
'use strict';

var fullPageEditor = {};
var $ = jQuery; // we need this function globally

window.ravenChangeDocument = function changeDocument(elementorId) {
  $('.elementor').find('.raven-document-handle-parent').remove();
  window.elementorCommon.api.internal('panel/state-loading');
  window.elementorCommon.api.run('editor/documents/switch', {
    id: elementorId
  })["finally"](function () {
    fullPageEditor.handleFullPageEditorBtn();
    return window.elementorCommon.api.internal('panel/state-ready');
  });
};

fullPageEditor.handleFullPageEditorBtn = function handleFullPageEditorBtn() {
  $('.elementor').each(function () {
    if ($(this).find('.raven-document-handle-parent').length > 0 && $(this).find('.raven-document-handle-parent').children().length > 0) {
      return;
    }

    if ($(this).hasClass('elementor-edit-area-active')) {
      return;
    }

    var currentTargetName = this.dataset.elementorTitle;

    if (typeof currentTargetName === 'undefined') {
      return;
    }

    var newElementorId = $(this).attr('data-elementor-id');
    var ravenDocumentHandler = '<div class="raven-document-handle" onclick="window.ravenChangeDocument( ' + newElementorId + ' )"><i class="fas fa-edit"></i>Edit ' + currentTargetName + '</div>';
    $(this).prepend('<div class="raven-document-handle-parent" style="display:none;"></div>');
    $(this).find('.raven-document-handle-parent').append(ravenDocumentHandler);
  });
};

fullPageEditor.handleHeaderBtns = function () {
  var elementOffset = 0;

  if ($('main').length) {
    elementOffset = $('main').offset().top;
  }

  $(document).on('mouseenter', 'header', function () {
    if (elementOffset > 0) {
      return;
    }

    var clonedMainBtn = $('main .raven-document-handle-parent .raven-document-handle').clone().addClass('fixed-top-btn');

    if (clonedMainBtn.length === 0) {
      return;
    }

    if ($('header .elementor').find('.raven-document-handle-parent').length === 0) {
      $('header .elementor').prepend('<div class="raven-document-handle-parent"></div>');
      $('header .elementor .raven-document-handle-parent').prepend(clonedMainBtn);
    }

    if ($('header .elementor').find('.raven-document-handle-parent').length > 0) {
      $('header .elementor .raven-document-handle-parent').append(clonedMainBtn);
    }
  });
  $(document).on('mouseleave', 'header', function () {
    if ($('main .raven-document-handle-parent .raven-document-handle').length === 0) {
      return;
    }

    if (elementOffset > 0) {
      return;
    }

    $('header .elementor .raven-document-handle-parent .raven-document-handle.fixed-top-btn').remove();
  });
};

module.exports = fullPageEditor;

},{}],4:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _module = _interopRequireDefault(require("./module"));

var Masonry = _module["default"].extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      masonryContainer: '.raven-masonry',
      columnClass: 'raven-masonry-column',
      columns: this.getInstanceValue('columns') || 3,
      columnsTablet: this.getInstanceValue('columns_tablet') || 2,
      columnsMobile: this.getInstanceValue('columns_mobile') || 1
    };
  },
  getDefaultElements: function getDefaultElements() {
    return {
      $masonryContainer: this.$element.find(this.getSettings('masonryContainer'))
    };
  },
  run: function run() {
    var settings = this.getSettings();
    var selector = ".elementor-element-".concat(this.getID(), " ").concat(settings.masonryContainer);

    if (savvior.grids[selector]) {
      delete savvior.grids[selector];
    }

    savvior.init(selector, {
      'screen and (min-width: 1025px)': {
        columnClasses: settings.columnClass,
        columns: settings.columns
      },
      'screen and (max-width: 1024px) and (min-width: 768px)': {
        columnClasses: settings.columnClass,
        columns: settings.columnsTablet
      },
      'screen and (max-width: 767px)': {
        columnClasses: settings.columnClass,
        columns: settings.columnsMobile
      }
    });
  },
  push: function push(items) {
    if (!items) {
      return;
    }

    var settings = this.getSettings();
    var selector = ".elementor-element-".concat(this.getID(), " ").concat(settings.masonryContainer);
    var itemsNode = [];
    var savviorOptions = {
      method: 'append',
      clone: false
    };
    items.forEach(function (item) {
      var $item = $(item);
      itemsNode.push($item[0]);
    });

    if (savvior.grids[selector]) {
      savvior.addItems(selector, itemsNode, savviorOptions);
    }
  }
});

var _default = Masonry;
exports["default"] = _default;

},{"./module":5,"@babel/runtime/helpers/interopRequireDefault":26}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Module = elementorModules.frontend.handlers.Base.extend({
  onSectionActivated: null,
  onEditorClosed: null,
  getInstanceValue: function getInstanceValue(key) {
    $ = jQuery;
    return this.getElementSettings(this.getControlID(key));
  },
  getControlID: function getControlID(controlID) {
    var skin = this.getElementSettings('_skin');

    if (!skin) {
      return controlID;
    }

    return "".concat(skin, "_").concat(controlID);
  },
  scrollToContainer: function scrollToContainer($element) {
    var $top = $element.offset().top - 50;
    var headerHeight = $('header').height();
    var bodySelector = document.querySelector('body');

    if (bodySelector.classList.contains('jupiterx-header-fixed') || bodySelector.classList.contains('jupiterx-header-sticked')) {
      $top = $element.offset().top - headerHeight - 50;
    }

    window.scroll({
      top: $top,
      behavior: 'smooth'
    });
  },
  initEditorListeners: function initEditorListeners() {
    var self = this;
    elementorModules.frontend.handlers.Base.prototype.initEditorListeners.apply(this, arguments);

    if (self.onSectionActivated) {
      self.editorListeners.push({
        event: 'section:activated',
        to: elementor.channels.editor,
        callback: function callback(activeSection, section) {
          if (section.model.id !== self.getID()) {
            return;
          }

          self.onSectionActivated(activeSection, section);
        }
      });
    }

    if (self.onEditorClosed) {
      self.editorListeners.push({
        event: 'set:page:editor',
        to: elementor.getPanelView(),
        callback: function callback(currentPageView) {
          if (currentPageView.model.id !== self.getID()) {
            return;
          }

          currentPageView.model.once('editor:close', function () {
            self.onEditorClosed();
          });
        }
      });
    }
  },
  onMobile: function onMobile() {
    var windowWidth = jQuery(window).width();
    return windowWidth <= 575.98;
  },
  onTablet: function onTablet() {
    var windowWidth = jQuery(window).width();
    return windowWidth > 575.98 && windowWidth <= 767.98;
  },
  onDesktop: function onDesktop() {
    var windowWidth = jQuery(window).width();
    return windowWidth > 767.98;
  },
  isRtl: function isRtl() {
    return jQuery('body').hasClass('rtl');
  }
});
var _default = Module;
exports["default"] = _default;

},{}],6:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _module = _interopRequireDefault(require("./module"));

var PaginationModule = _module["default"].extend({
  $clickedItem: null,
  getDefaultSettings: function getDefaultSettings() {
    return {
      classes: {
        fetching: 'raven-pagination-fetching',
        disabled: 'raven-pagination-disabled',
        reading: 'raven-pagination-reading',
        spinner: 'raven-pagination-spinner',
        activePage: 'raven-pagination-active',
        item: 'raven-pagination-item',
        pageNum: 'raven-pagination-num',
        prevButton: 'raven-pagination-prev',
        nextButton: 'raven-pagination-next'
      },
      selectors: {
        activePage: '.raven-pagination-active',
        pageNum: '.raven-pagination-num',
        prevButton: '.raven-pagination-prev',
        nextButton: '.raven-pagination-next',
        spinner: '.raven-pagination-spinner'
      },
      isEnabled: true,
      activePage: 1,
      totalPages: this.getElementSettings('total_pages'),
      pagesVisible: this.getElementSettings('pages_visible')
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors');
    return {
      $prevButton: this.$element.find(selectors.prevButton),
      $nextButton: this.$element.find(selectors.nextButton)
    };
  },
  bindEvents: function bindEvents() {
    var self = this;
    this.$element.on('click', this.getSettings('selectors.pageNum'), this.handlePageNum);
    self.elements.$prevButton.on('click', this.handlePrev);
    self.elements.$nextButton.on('click', this.handleNext);
  },
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
  },
  getTotalPages: function getTotalPages() {
    return parseInt(this.getSettings('totalPages'));
  },
  setTotalPages: function setTotalPages(totalPages) {
    this.setSettings('totalPages', parseInt(totalPages));
  },
  getPagesVisible: function getPagesVisible() {
    return parseInt(this.getSettings('pagesVisible'));
  },
  getActivePage: function getActivePage() {
    return parseInt(this.getSettings('activePage'));
  },
  setActivePage: function setActivePage(pageNum) {
    this.setSettings('activePage', parseInt(pageNum));
  },
  setEnabled: function setEnabled(isEnabled) {
    this.setSettings('isEnabled', isEnabled);
  },
  isEnabled: function isEnabled() {
    return this.getSettings('isEnabled');
  },
  recreatePagination: function recreatePagination(totalPages) {
    this.setTotalPages(totalPages);
    this.setActivePage(1);
    this.renderUpdate();
  },
  renderUpdate: function renderUpdate() {
    var classes = this.getSettings('classes');
    var selectors = this.getSettings('selectors');
    this.$element.removeClass(classes.fetching);

    if (this.$clickedItem) {
      this.$clickedItem.find(selectors.spinner).remove();
      this.$clickedItem.removeClass(classes.reading);
      this.$clickedItem = null;
    }

    this.setEnabled(true);
    this.renderNumbers();
    this.updatePrevNext();
  },
  renderNumbers: function renderNumbers() {
    var _this = this;

    var pages = this.getPages();

    if (!pages.length) {
      return;
    }

    var selectors = this.getSettings('selectors');
    var items = [];
    pages.forEach(function (pageNum) {
      items.push(_this.numberTemplate(pageNum));
    });
    this.$element.find(selectors.pageNum).remove();
    this.elements.$prevButton.after(items);
  },
  numberTemplate: function numberTemplate(pageNum) {
    var classes = this.getSettings('classes');
    var item = $('<a></a>');
    item.addClass(classes.pageNum);
    item.addClass(classes.item);
    item.toggleClass(classes.activePage, pageNum === this.getActivePage());
    item.attr('href', '#');
    item.attr('data-page-num', pageNum);
    item.html(pageNum);
    return item;
  },
  updateActivePage: function updateActivePage(pageNum) {
    var classes = this.getSettings('classes');
    this.$element.addClass(classes.fetching);

    if (this.$clickedItem) {
      this.$clickedItem.addClass(classes.reading);
      this.$clickedItem.append("<span class=\"".concat(classes.spinner, "\"></span>"));
    }

    this.setEnabled(false);
    this.setActivePage(pageNum);
  },
  updatePrevNext: function updatePrevNext() {
    var pages = this.getPages();

    if (!pages.length) {
      return;
    }

    var classes = this.getSettings('classes');
    var activePage = this.getActivePage();
    var totalPages = this.getTotalPages();
    this.elements.$prevButton.toggleClass(classes.disabled, activePage <= 1);
    this.elements.$nextButton.toggleClass(classes.disabled, activePage >= totalPages);
  },
  handlePageNum: function handlePageNum(event) {
    event.preventDefault();
    var $this = $(event.target);
    var pageNum = parseInt($this.data('page-num'));

    if (this.getActivePage() !== pageNum) {
      this.triggerPagination($this, pageNum);
    }
  },
  handlePrev: function handlePrev(event) {
    event.preventDefault();
    var classes = this.getSettings('classes');
    var $this = $(event.target);
    var pageNum = this.getActivePage() - 1;

    if (pageNum >= 1 && !$this.hasClass(classes.disabled)) {
      this.triggerPagination($this, pageNum);
    }
  },
  handleNext: function handleNext(event) {
    event.preventDefault();
    var classes = this.getSettings('classes');
    var $this = $(event.target);
    var totalPages = this.getTotalPages();
    var pageNum = this.getActivePage() + 1;

    if (pageNum <= totalPages && !$this.hasClass(classes.disabled)) {
      this.triggerPagination($this, pageNum);
    }
  },
  triggerPagination: function triggerPagination($element, pageNum) {
    if (this.isEnabled()) {
      this.$clickedItem = $element;
      this.updateActivePage(pageNum);
      this.handlePagination(pageNum);
    }
  },
  getPages: function getPages() {
    var activePage = this.getActivePage();
    var pagesVisible = this.getPagesVisible();
    var totalPages = this.getTotalPages();
    var pages = [];
    var half = Math.floor(pagesVisible / 2);
    var start = activePage - half;
    var end = activePage + half;

    if (start <= 0) {
      start = 1;
      end = pagesVisible;
    }

    if (end > totalPages) {
      end = totalPages;
    }

    var i = start;

    while (i <= end) {
      pages.push(i);
      i++;
    }

    return pages;
  },
  handlePagination: function handlePagination() {
    this.renderUpdate();
  }
});

var _default = PaginationModule;
exports["default"] = _default;

},{"./module":5,"@babel/runtime/helpers/interopRequireDefault":26}],7:[function(require,module,exports){
// https://iamdustan.github.io/smoothscroll

/* eslint-disable */
'use strict'; // polyfill

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function polyfill() {
  // aliases
  var w = window;
  var d = document; // return if scroll behavior is supported and polyfill is not forced

  if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
    return;
  } // globals


  var Element = w.HTMLElement || w.Element;
  var SCROLL_TIME = 468; // object gathering original scroll methods

  var original = {
    scroll: w.scroll || w.scrollTo,
    scrollBy: w.scrollBy,
    elementScroll: Element.prototype.scroll || scrollElement,
    scrollIntoView: Element.prototype.scrollIntoView
  }; // define timing method

  var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
  /**
   * indicates if a the current browser is made by Microsoft
   * @method isMicrosoftBrowser
   * @param {String} userAgent
   * @returns {Boolean}
   */

  function isMicrosoftBrowser(userAgent) {
    var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
    return new RegExp(userAgentPatterns.join('|')).test(userAgent);
  }
  /*
   * IE has rounding bug rounding down clientHeight and clientWidth and
   * rounding up scrollHeight and scrollWidth causing false positives
   * on hasScrollableSpace
   */


  var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
  /**
   * changes scroll position inside an element
   * @method scrollElement
   * @param {Number} x
   * @param {Number} y
   * @returns {undefined}
   */

  function scrollElement(x, y) {
    this.scrollLeft = x;
    this.scrollTop = y;
  }
  /**
   * returns result of applying ease math function to a number
   * @method ease
   * @param {Number} k
   * @returns {Number}
   */


  function ease(k) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
  }
  /**
   * indicates if a smooth behavior should be applied
   * @method shouldBailOut
   * @param {Number|Object} firstArg
   * @returns {Boolean}
   */


  function shouldBailOut(firstArg) {
    if (firstArg === null || (0, _typeof2["default"])(firstArg) !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') {
      // first argument is not an object/null
      // or behavior is auto, instant or undefined
      return true;
    }

    if ((0, _typeof2["default"])(firstArg) === 'object' && firstArg.behavior === 'smooth') {
      // first argument is an object and behavior is smooth
      return false;
    } // throw error when behavior is not supported


    throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
  }
  /**
   * indicates if an element has scrollable space in the provided axis
   * @method hasScrollableSpace
   * @param {Node} el
   * @param {String} axis
   * @returns {Boolean}
   */


  function hasScrollableSpace(el, axis) {
    if (axis === 'Y') {
      return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
    }

    if (axis === 'X') {
      return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
    }
  }
  /**
   * indicates if an element has a scrollable overflow property in the axis
   * @method canOverflow
   * @param {Node} el
   * @param {String} axis
   * @returns {Boolean}
   */


  function canOverflow(el, axis) {
    var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
    return overflowValue === 'auto' || overflowValue === 'scroll';
  }
  /**
   * indicates if an element can be scrolled in either axis
   * @method isScrollable
   * @param {Node} el
   * @param {String} axis
   * @returns {Boolean}
   */


  function isScrollable(el) {
    var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
    var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
    return isScrollableY || isScrollableX;
  }
  /**
   * finds scrollable parent of an element
   * @method findScrollableParent
   * @param {Node} el
   * @returns {Node} el
   */


  function findScrollableParent(el) {
    var isBody;

    do {
      el = el.parentNode;
      isBody = el === d.body;
    } while (isBody === false && isScrollable(el) === false);

    isBody = null;
    return el;
  }
  /**
   * self invoked function that, given a context, steps through scrolling
   * @method step
   * @param {Object} context
   * @returns {undefined}
   */


  function step(context) {
    var time = now();
    var value;
    var currentX;
    var currentY;
    var elapsed = (time - context.startTime) / SCROLL_TIME; // avoid elapsed times higher than one

    elapsed = elapsed > 1 ? 1 : elapsed; // apply easing to elapsed time

    value = ease(elapsed);
    currentX = context.startX + (context.x - context.startX) * value;
    currentY = context.startY + (context.y - context.startY) * value;
    context.method.call(context.scrollable, currentX, currentY); // scroll more if we have not reached our destination

    if (currentX !== context.x || currentY !== context.y) {
      w.requestAnimationFrame(step.bind(w, context));
    }
  }
  /**
   * scrolls window or element with a smooth behavior
   * @method smoothScroll
   * @param {Object|Node} el
   * @param {Number} x
   * @param {Number} y
   * @returns {undefined}
   */


  function smoothScroll(el, x, y) {
    var scrollable;
    var startX;
    var startY;
    var method;
    var startTime = now(); // define scroll context

    if (el === d.body) {
      scrollable = w;
      startX = w.scrollX || w.pageXOffset;
      startY = w.scrollY || w.pageYOffset;
      method = original.scroll;
    } else {
      scrollable = el;
      startX = el.scrollLeft;
      startY = el.scrollTop;
      method = scrollElement;
    } // scroll looping over a frame


    step({
      scrollable: scrollable,
      method: method,
      startTime: startTime,
      startX: startX,
      startY: startY,
      x: x,
      y: y
    });
  } // ORIGINAL METHODS OVERRIDES
  // w.scroll and w.scrollTo


  w.scroll = w.scrollTo = function () {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    } // avoid smooth behavior if not required


    if (shouldBailOut(arguments[0]) === true) {
      original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : (0, _typeof2["default"])(arguments[0]) !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
      arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
      return;
    } // LET THE SMOOTHNESS BEGIN!


    smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
  }; // w.scrollBy


  w.scrollBy = function () {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    } // avoid smooth behavior if not required


    if (shouldBailOut(arguments[0])) {
      original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : (0, _typeof2["default"])(arguments[0]) !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
      return;
    } // LET THE SMOOTHNESS BEGIN!


    smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
  }; // Element.prototype.scroll and Element.prototype.scrollTo


  Element.prototype.scroll = Element.prototype.scrollTo = function () {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    } // avoid smooth behavior if not required


    if (shouldBailOut(arguments[0]) === true) {
      // if one number is passed, throw error to match Firefox implementation
      if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
        throw new SyntaxError('Value could not be converted');
      }

      original.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
      arguments[0].left !== undefined ? ~~arguments[0].left : (0, _typeof2["default"])(arguments[0]) !== 'object' ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
      arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
      return;
    }

    var left = arguments[0].left;
    var top = arguments[0].top; // LET THE SMOOTHNESS BEGIN!

    smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
  }; // Element.prototype.scrollBy


  Element.prototype.scrollBy = function () {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    } // avoid smooth behavior if not required


    if (shouldBailOut(arguments[0]) === true) {
      original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
      return;
    }

    this.scroll({
      left: ~~arguments[0].left + this.scrollLeft,
      top: ~~arguments[0].top + this.scrollTop,
      behavior: arguments[0].behavior
    });
  }; // Element.prototype.scrollIntoView


  Element.prototype.scrollIntoView = function () {
    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
      return;
    } // LET THE SMOOTHNESS BEGIN!


    var scrollableParent = findScrollableParent(this);
    var parentRects = scrollableParent.getBoundingClientRect();
    var clientRects = this.getBoundingClientRect();

    if (scrollableParent !== d.body) {
      // reveal element inside parent
      smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top); // reveal parent in viewport unless is fixed

      if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
        w.scrollBy({
          left: parentRects.left,
          top: parentRects.top,
          behavior: 'smooth'
        });
      }
    } else {
      // reveal element in viewport
      w.scrollBy({
        left: clientRects.left,
        top: clientRects.top,
        behavior: 'smooth'
      });
    }
  };
}

if ((typeof exports === "undefined" ? "undefined" : (0, _typeof2["default"])(exports)) === 'object' && typeof module !== 'undefined') {
  // commonjs
  module.exports = {
    polyfill: polyfill
  };
  polyfill();
} else {
  // global
  polyfill();
}

},{"@babel/runtime/helpers/interopRequireDefault":26,"@babel/runtime/helpers/typeof":27}],8:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _module = _interopRequireDefault(require("./module"));

var SortableModule = _module["default"].extend({
  $clickedItem: null,
  getDefaultSettings: function getDefaultSettings() {
    return {
      classes: {
        fetching: 'raven-sortable-fetching',
        reading: 'raven-sortable-reading',
        spinner: 'raven-sortable-spinner',
        activeItem: 'raven-sortable-active'
      },
      selectors: {
        item: '.raven-sortable-item',
        activeItem: '.raven-sortable-active',
        spinner: '.raven-sortable-spinner'
      },
      activeID: -1,
      isEnabled: true
    };
  },
  getDefaultElements: function getDefaultElements() {
    return {};
  },
  bindEvents: function bindEvents() {
    this.$element.on('click', this.getSettings('selectors.item'), this.handleItemClick);
  },
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
  },
  getActiveID: function getActiveID() {
    return parseInt(this.getSettings('activeID'));
  },
  setActiveID: function setActiveID(activeID) {
    this.setSettings('activeID', parseInt(activeID));
  },
  setEnabled: function setEnabled(isEnabled) {
    this.setSettings('isEnabled', isEnabled);
  },
  isEnabled: function isEnabled() {
    return this.getSettings('isEnabled');
  },
  renderUpdate: function renderUpdate() {
    var classes = this.getSettings('classes');
    var selectors = this.getSettings('selectors');
    this.$element.removeClass(classes.fetching);
    this.$element.find(selectors.activeItem).removeClass(classes.activeItem);

    if (this.$clickedItem) {
      this.$clickedItem.find(selectors.spinner).remove();
      this.$clickedItem.removeClass(classes.reading);
      this.$clickedItem.addClass(classes.activeItem);
      this.$clickedItem = null;
    }

    this.setEnabled(true);
  },
  updateActiveItem: function updateActiveItem(category) {
    var classes = this.getSettings('classes');
    this.$element.addClass(classes.fetching);

    if (this.$clickedItem) {
      this.$clickedItem.addClass(classes.reading);
      this.$clickedItem.append("<span class=\"".concat(classes.spinner, "\"></span>"));
    }

    this.setEnabled(false);
    this.setActiveID(category);
  },
  handleItemClick: function handleItemClick(event) {
    event.preventDefault();
    var $this = $(event.target);
    var category = parseInt($this.data('category'));

    if (this.getActiveID() !== category) {
      this.triggerSort($this, category);
    }
  },
  triggerSort: function triggerSort($element, category) {
    if (this.isEnabled()) {
      this.$clickedItem = $element;
      this.updateActiveItem(category);
      this.handleSort(category);
    }
  },
  handleSort: function handleSort() {
    this.renderUpdate();
  }
});

var _default = SortableModule;
exports["default"] = _default;

},{"./module":5,"@babel/runtime/helpers/interopRequireDefault":26}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default($scope) {
  $scope.find('.raven-alert-dismiss').on('click', function (event) {
    event.preventDefault();
    $scope.fadeOut();
  });
}

},{}],10:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _module = _interopRequireDefault(require("../utils/module"));

var _masonry = _interopRequireDefault(require("../utils/masonry"));

var Categories = _module["default"].extend({
  Masonry: null,
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);

    if (this.getInstanceValue('layout') === 'masonry') {
      this.createMasonry();
    }
  },
  createMasonry: function createMasonry() {
    this.Masonry = new _masonry["default"]({
      $element: this.$element
    });
    this.Masonry.run();
  }
});

function _default($scope) {
  new Categories({
    $element: $scope
  });
}

},{"../utils/masonry":4,"../utils/module":5,"@babel/runtime/helpers/interopRequireDefault":26}],11:[function(require,module,exports){
"use strict";

(function ($) {
  $(document).on('click', '.raven-column-link', function (event) {
    var url = $(this).data('ravenLink');
    var target = $(this).data('ravenLinkTarget');
    handleLink($(this), url, target, event);
  });

  function handleLink($element, url, target, event) {
    if ($(event.target).filter('a, a *, .no-link, .no-link *').length) {
      return true;
    }
    /**
     * Handle popup & lightbox.
     *
     * @todo Find a proper way via Elementor Pro Javascript API.
     */


    if (url.match(/^#elementor-action/)) {
      if (!$element.find('.raven-column-link-dynamic').length) {
        $element.append("<a class=\"raven-column-link-dynamic\" href=\"".concat(url, "\"></a>"));
      }

      return $element.find('.raven-column-link-dynamic').trigger('click');
    } // Handle hash (e.g. #section-id).


    if (url.match(/^#/)) {
      if ($(url).length) {
        return document.querySelector(url).scrollIntoView({
          behavior: 'smooth'
        });
      }

      return;
    } // Handle full url.


    window.open(url, target);
  }
})(jQuery);

},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default($scope) {
  var $el = $scope.find('[data-raven-countdown]');
  var finalDate = $el.data('raven-countdown');
  var daysLabel = $el.data('raven-days') !== undefined ? $el.data('raven-days') : 'Day%!D';
  var hoursLabel = $el.data('raven-hours') !== undefined ? $el.data('raven-hours') : 'Hour%!H';
  var minutesLabel = $el.data('raven-minutes') !== undefined ? $el.data('raven-minutes') : 'Minute%!M';
  var secondsLabel = $el.data('raven-seconds') !== undefined ? $el.data('raven-seconds') : 'Second%!S';
  $el.countdown(finalDate, function (event) {
    $el.html(event.strftime(event.strftime("\n      <div class=\"raven-countdown-box raven-flex-1\">\n        <span class=\"raven-countdown-number\">%D</span>\n        <span class=\"raven-countdown-title\"> ".concat(daysLabel, "</span>\n      </div>\n      <div class=\"raven-countdown-box raven-flex-1\">\n        <span class=\"raven-countdown-number\">%H</span>\n        <span class=\"raven-countdown-title\"> ").concat(hoursLabel, "</span>\n      </div>\n      <div class=\"raven-countdown-box raven-flex-1\">\n        <span class=\"raven-countdown-number\">%M</span>\n        <span class=\"raven-countdown-title\"> ").concat(minutesLabel, "</span>\n      </div>\n      <div class=\"raven-countdown-box raven-flex-1\">\n        <span class=\"raven-countdown-number\">%S</span>\n        <span class=\"raven-countdown-title\"> ").concat(secondsLabel, "</span>\n      </div>\n    "))));
  });
}

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default($scope) {
  $ = jQuery;
  var $counters = $scope.find('[data-raven-counter]');
  $counters.each(function () {
    var $counter = $(this);
    elementorFrontend.waypoint($counter, function () {
      var data = $counter.data();
      var decimalDigits = data.toValue.toString().match(/\.(.*)/);

      if (decimalDigits) {
        data.rounding = decimalDigits[1].length;
      }

      data.fromValue = $.trim($counter.text());
      $counter.numerator(data);
    });
  });
}

},{}],14:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _module = _interopRequireDefault(require("../utils/module"));

var Form = _module["default"].extend({
  form: null,
  captchaV3Ids: [],
  onInit: function onInit() {
    this.form = this.$element.find('.raven-form');
    var dateField = this.form.find('.flatpickr[type=text]');
    var locale = {
      firstDayOfWeek: 1
    }; // eslint-disable-line

    var customLocale = dateField.data('locale');

    if (customLocale !== undefined && customLocale !== 'default') {
      locale = customLocale;
    }

    dateField.flatpickr({
      locale: locale,
      minuteIncrement: 1
    });
    this.checkCaptcha(this.form);
    this.onSubmit();
    window.onInvalidRavenFormField = this.onInvalidRavenFormField;
  },
  onSubmit: function onSubmit() {
    var self = this;
    var form = self.form;
    form.on('submit', function (event) {
      event.preventDefault();
      form.css('opacity', 0.5); // Prepare form data.

      var formData = new FormData(form[0]);
      formData.append('action', 'raven_form_frontend');
      formData.append('referrer', location.toString()); // Send request.

      jQuery.ajax({
        url: _wpUtilSettings.ajax.url,
        type: 'POST',
        dataType: 'json',
        data: formData,
        processData: false,
        contentType: false,
        success: self.doSuccess
      });
    });
  },
  doSuccess: function doSuccess(response) {
    // Message.
    this.showMessage(response); // Download.

    if (response.data.download_url) {
      window.open(response.data.download_url, '_blank');
    } // Redirect.


    if (!$.isEmptyObject(response.data.redirect_to)) {
      window.location.href = response.data.redirect_to;
    } // Admin errors.


    if (!$.isEmptyObject(response.data.admin_errors)) {
      this.showAdminErrors(response.data.admin_errors);
    } // Reset recaptcha to initial state.


    this.captchaV3Ids.forEach(function (id) {
      return window.grecaptcha.reset(id);
    });
  },
  onInvalidRavenFormField: function onInvalidRavenFormField(event) {
    var target = event.target;
    var type = target.dataset.type;
    var validity = target.validity;
    var i18n = window.ravenFormsTranslations.validation;
    var headerHeight = $('header').height();
    var bodySelector = document.querySelector('body');

    if (validity.valueMissing) {
      target.setCustomValidity(i18n.required);
      var $top = $(target).offset().top - $(target).parent().height() - 50;

      if (bodySelector.classList.contains('jupiterx-header-fixed') || bodySelector.classList.contains('jupiterx-header-sticked')) {
        $top -= headerHeight;
      }

      $(window).scrollTop($top);
      return;
    }

    var message = '';

    switch (type) {
      case 'email':
        if (validity.typeMismatch || validity.patternMismatch) {
          message = i18n.invalidEmail;
        }

        break;

      case 'tel':
        if (validity.typeMismatch || validity.patternMismatch) {
          message = i18n.invalidPhone;
        }

        break;

      case 'number':
        if (validity.typeMismatch || validity.patternMismatch) {
          message = i18n.invalidNumber;
        } else if (validity.rangeOverflow) {
          message = i18n.invalidMaxValue.replace('MAX_VALUE', target.max);
        } else if (validity.rangeUnderflow) {
          message = i18n.invalidMinValue.replace('MIN_VALUE', target.min);
        }

        break;
    }

    target.setCustomValidity(message);
  },
  showMessage: function showMessage(response) {
    var form = this.form;
    form.css('opacity', 1);
    $('.raven-form-response').remove();
    form.parent().find('.elementor-alert').remove();
    form.find('small').remove();
    form.find('.raven-field-group').removeClass('raven-field-invalid');
    form.parent().removeClass('raven-form-success');
    form.parent().addClass('raven-form-error');

    if (response.success) {
      form.trigger('reset');
      form.parent().removeClass('raven-form-error');
      form.parent().addClass('raven-form-success');
    }

    $.each(response.data.errors, function (key, value) {
      var field = $('#raven-field-group-' + key);
      field.addClass('raven-field-invalid');
      field.append('<small class="raven-form-text">' + value + '</small>');
    });
    form.after('<div class="raven-form-response">' + response.data.message + '</div>');
  },
  showAdminErrors: function showAdminErrors(adminErrors) {
    var errors = '';
    $.each(adminErrors, function (key, value) {
      errors += "<li>".concat(value, "</li>");
    });
    this.form.before("\n    <div class=\"elementor-alert elementor-alert-info\" role=\"alert\">\n      <span class=\"elementor-alert-title\">Following messages are visible only for admin users.</span>\n      <div class=\"elementor-alert-description\">\n        <ul>\n          ".concat(errors, "\n        </ul>\n      </div>\n    </div>\n    "));
  },
  checkCaptcha: function checkCaptcha(form) {
    var self = this;
    var captchav3 = form.find('.g-recaptcha:last');

    if (!captchav3.length) {
      return;
    }

    var onRecaptchaApiReady = function onRecaptchaApiReady(callback) {
      if (window.grecaptcha && window.grecaptcha.render) {
        callback();
      } else {
        // If not ready check again by timeout..
        setTimeout(function () {
          onRecaptchaApiReady(callback);
        }, 350);
      }
    };

    var addRecaptcha = function addRecaptcha(elementRecaptcha) {
      var settings = elementRecaptcha.data(),
          isV3 = settings.type === 'v3';
      self.captchaV3Ids.forEach(function (id) {
        return grecaptcha.reset(id); // eslint-disable-line
      });
      var widgetId = grecaptcha.render(elementRecaptcha[0], settings); // eslint-disable-line

      form.on('reset error', function () {
        grecaptcha.reset(widgetId); // eslint-disable-line
      });

      if (!isV3) {
        elementRecaptcha.data('widgetId', widgetId);
      } else {
        self.captchaV3Ids.push(widgetId);
        form.find('button[type="submit"]').on('click', function (e) {
          e.preventDefault();
          grecaptcha.ready(function () {
            // eslint-disable-line
            grecaptcha.execute(widgetId, {
              action: elementRecaptcha.data('action')
            }).then(function (token) {
              // eslint-disable-line
              form.find('[name="g-recaptcha-response"]').remove();
              form.append(jQuery('<input>', {
                type: 'hidden',
                value: token,
                name: 'g-recaptcha-response'
              }));
              form.submit();
            });
          });
        });
      }
    };

    onRecaptchaApiReady(function () {
      addRecaptcha(captchav3);
    });
  },
  setUpDatePicker: function setUpDatePicker() {}
});

function _default($scope) {
  new Form({
    $element: $scope
  });
}

},{"../utils/module":5,"@babel/runtime/helpers/interopRequireDefault":26}],15:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _module = _interopRequireDefault(require("../utils/module"));

var $ = jQuery;

var NavMenu = _module["default"].extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        menus: '.raven-nav-menu',
        inPageMenuItems: 'a[href*="#"]',
        toggleButton: '.raven-nav-menu-toggle-button',
        closeButton: '.raven-nav-menu-close-button',
        mobileMenu: '.raven-nav-menu-mobile',
        mobileContainer: '.raven-nav-menu-mobile .raven-container',
        megaMenu: '.submenu .raven-megamenu-wrapper',
        liNavItem: '.raven-nav-menu-main .raven-nav-menu li'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors');
    return {
      $body: $('body'),
      $menus: this.$element.find(selectors.menus),
      $inPageMenuItems: this.$element.find(selectors.inPageMenuItems),
      $toggleButton: this.$element.find(selectors.toggleButton),
      $closeButton: this.$element.find(selectors.closeButton),
      $mobileMenu: this.$element.find(selectors.mobileMenu),
      $mobileContainer: this.$element.find(selectors.mobileContainer),
      $elementorSection: this.$element.parents('.elementor-section').last(),
      $elementorElement: this.$element.closest('.elementor-element'),
      $elementorContainer: this.$element.parents('.elementor-container').last(),
      $megaMenu: this.$element.find(selectors.megaMenu),
      $navMenuItem: this.$element.find(selectors.$menus).find('li'),
      $liNavItem: this.$element.find(selectors.liNavItem)
    };
  },
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    this.initSmartMenu();
    this.inPageMenuClick();
    this.inPageMenuScroll();
    this.mobileMenuScroll();
    this.setMegaMenuWidth();
    this.stretchElement = new elementorModules.frontend.tools.StretchElement({
      element: this.elements.$mobileMenu,
      selectors: {
        container: this.elements.$mobileMenu.parents('.elementor-top-section')
      }
    });
  },
  bindEvents: function bindEvents() {
    var mobileLayout = this.getElementSettings('mobile_layout');

    switch (mobileLayout) {
      case 'dropdown':
        this.elements.$toggleButton.on('click', this.toggleDropdown.bind(this));
        elementorFrontend.addListenerOnce(this.$element.data('model-cid'), 'resize', this.dropdownFullWidth.bind(this));
        $(window).on('resize', this.setMegaMenuWidth.bind(this));
        break;

      case 'side':
        var sideMenuOpenPosition = this.getElementSettings('side_menu_alignment'),
            sideMenuEffect = this.getElementSettings('side_menu_effect');
        this.elements.$mobileMenu.addClass('raven-side-menu-' + sideMenuOpenPosition);
        this.elements.$mobileMenu.addClass('raven-side-menu-' + sideMenuOpenPosition);
        this.elements.$toggleButton.on('click', this.toggleMobileMenu.bind(this));
        this.elements.$closeButton.on('click', this.toggleMobileMenu.bind(this));

        if (sideMenuEffect === 'push') {
          this.elements.$body.addClass('raven-nav-menu-effect-push');
          this.elements.$toggleButton.on('click', this.sideMenuPush.bind(this));
          this.elements.$closeButton.on('click', this.sideMenuPush.bind(this));
        }

        this.elements.$menus.on('select.smapi', this.onSideMenuItemClick.bind(this));
        break;

      case 'full-screen':
        var isItemFullWidth = this.getElementSettings('mobile_menu_item_full_width');

        if (isItemFullWidth === 'yes') {
          this.elements.$mobileMenu.addClass('raven-nav-menu-item-full-width');
        }

        this.elements.$toggleButton.on('click', this.toggleMobileMenu.bind(this));
        this.elements.$closeButton.on('click', this.toggleMobileMenu.bind(this));
        break;
    }

    this.elements.$liNavItem.on('hover', this.setMegaMenuWidth);
  },
  initSmartMenu: function initSmartMenu() {
    var spaceBetween = this.getElementSettings('submenu_space_between'),
        options = {
      subIndicatorsText: '',
      subIndicatorsPos: 'append',
      subMenusMaxWidth: '1500px'
    };

    if (this.elements.$body.hasClass('rtl')) {
      options.rightToLeftSubMenus = true;
    }

    if (this.elements.$megaMenu.length) {
      options.keepInViewport = false;
    }

    if ((0, _typeof2["default"])(spaceBetween) === 'object' && spaceBetween.size !== '') {
      options.mainMenuSubOffsetY = parseInt(spaceBetween.size);
    }

    if (this.getElementSettings('submenu_opening_position') === 'top') {
      options.bottomToTopSubMenus = true;
    }

    this.excludeOtherUl();
    this.elements.$menus.smartmenus(options);
  },
  toggleDropdown: function toggleDropdown() {
    var mobileMenu = this.elements.$mobileMenu;
    this.elements.$toggleButton.find('.hamburger').toggleClass('is-active');
    mobileMenu.slideToggle(250, function () {
      mobileMenu.toggleClass('raven-nav-menu-active').css('display', '');
    });
    this.dropdownFullWidth();
  },
  dropdownFullWidth: function dropdownFullWidth() {
    var mobileMenu = this.elements.$mobileMenu; // Used for scrolling menu in small screens.

    mobileMenu.css('max-height', document.documentElement.clientHeight - mobileMenu.get(0).getBoundingClientRect().top);

    if (this.getElementSettings('full_width') !== 'stretch') {
      return;
    }

    var elementorElement = this.elements.$elementorElement,
        elementorContainer = this.elements.$elementorContainer,
        mobileToggle = this.elements.$toggleButton,
        mobileContainer = this.elements.$mobileContainer,
        windowWidth = window.innerWidth;
    this.stretchElement.stretch();
    mobileMenu.css('top', elementorElement.offset().top + elementorElement.outerHeight() - mobileToggle.offset().top);
    mobileContainer.css('max-width', windowWidth > 1024 ? elementorContainer.outerWidth() : 'none');
  },
  sideMenuPush: function sideMenuPush() {
    var menuContainerWidth = this.getElementSettings('menu_container_width'),
        sideMenuOpenPosition = this.getElementSettings('side_menu_alignment');
    var width = menuContainerWidth.size || 250;

    if (sideMenuOpenPosition === 'right') {
      width = -width;
    }

    if (!this.elements.$body.hasClass('raven-nav-menu-effect-pushed')) {
      this.elements.$body.addClass('raven-nav-menu-effect-pushed').css('margin-' + (this.isRtl() ? 'right' : 'left'), width);
    } else {
      this.elements.$body.removeClass('raven-nav-menu-effect-pushed').removeAttr('style');
    }
  },
  toggleMobileMenu: function toggleMobileMenu() {
    this.elements.$mobileMenu.toggleClass('raven-nav-menu-active');

    if (this.elements.$mobileMenu.hasClass('raven-nav-menu-active')) {
      this.elements.$mobileMenu.parents('.animated').addClass('raven-nav-menu-parents-animation');
    } else {
      this.elements.$mobileMenu.parents('.animated').removeClass('raven-nav-menu-parents-animation');
    }

    if (this.elements.$toggleButton.find('.hamburger').length !== 0) {
      this.elements.$toggleButton.find('.hamburger').toggleClass('is-active');
    }
  },
  mobileMenuScroll: function mobileMenuScroll() {
    var overlays = document.querySelectorAll('.raven-nav-menu-mobile.raven-nav-menu-dropdown, .raven-nav-menu-mobile.raven-nav-menu-full-screen');
    var _clientY = null;

    var _loop = function _loop(i) {
      overlays[i].addEventListener('touchstart', function (event) {
        if (event.targetTouches.length === 1) {
          _clientY = event.targetTouches[0].clientY;
        }
      }, false);
      overlays[i].addEventListener('touchmove', function (event) {
        if (event.targetTouches.length === 1) {
          var clientY = event.targetTouches[0].clientY - _clientY;

          if (overlays[i].scrollTop === 0 && clientY > 0 && event.cancelable) {
            event.preventDefault();
          }

          if (overlays[i].scrollHeight - overlays[i].scrollTop <= overlays[i].clientHeight && clientY < 0 && event.cancelable) {
            event.preventDefault();
          }
        }
      }, false);
    };

    for (var i = 0; i < overlays.length; i++) {
      _loop(i);
    }
  },
  inPageMenuClick: function inPageMenuClick() {
    var self = this;
    var headerSettings = this.getHeaderSettings();
    var anchorId;
    this.elements.$menus.on('click', function (e) {
      anchorId = e.target.getAttribute('href') || '';
      var url = null;

      try {
        url = new window.URL($(e.target).prop('href'));
      } catch (err) {
        return;
      }

      if (url.href.replace(url.hash, '') !== window.location.href.replace(window.location.hash, '') && anchorId.search(/^#/) === -1) {
        return;
      }

      if (url.hash.search(/^#/) === -1) {
        return;
      }

      anchorId = url.hash;
      e.preventDefault();
      var anchorTarget = $(anchorId);

      if (anchorTarget.length === 0) {
        if (self.elements.$body.hasClass('raven-nav-menu-effect-pushed')) {
          self.sideMenuPush();
        }

        self.elements.$mobileMenu.removeClass('raven-nav-menu-active');
        self.changeHamburgerState(false);
        window.history.pushState(null, null, url.hash);
        return;
      }

      var scrollPosition = anchorTarget.offset().top;
      scrollPosition -= self.getAdminbarHeight();
      scrollPosition -= self.getBodyBorderWidth();

      if (headerSettings && headerSettings.behavior === 'sticky' && headerSettings.overlap) {
        scrollPosition -= self.isHeaderSticked() ? self.tbarHeight() : 2 * self.tbarHeight();
      } else if (headerSettings && !headerSettings.behavior) {
        scrollPosition -= self.isHeaderSticked() ? self.tbarHeight() : 2 * self.tbarHeight();
      } else {
        scrollPosition -= self.tbarHeight();
      }

      if (self.hasCustomStickyHeader()) {
        scrollPosition -= self.getCustomStickyHeaderHeight();
      } else if (headerSettings && headerSettings.behavior === 'fixed' && headerSettings.position === 'top' || headerSettings && headerSettings.behavior === 'sticky') {
        scrollPosition -= self.getHeaderHeight();
      }

      if (self.elements.$body.hasClass('raven-nav-menu-effect-pushed')) {
        self.sideMenuPush();
      }

      self.elements.$mobileMenu.removeClass('raven-nav-menu-active');
      self.changeHamburgerState(false);
      window.history.pushState(null, null, url.hash);
      $('html, body').stop().animate({
        scrollTop: scrollPosition
      }, 500, 'swing');
      return false;
    });
  },
  inPageMenuScroll: function inPageMenuScroll() {
    var self = this;

    if (self.elements.$inPageMenuItems.length) {
      self.elements.$inPageMenuItems.each(function (index, node) {
        // Skip links without fragments.
        if (node.hash < 1) {
          return;
        }

        var section = $('[id="' + node.hash.replace('#', '') + '"]');

        if (!section.length) {
          return;
        }

        node = $(node);

        if (!window.location.hash) {
          self.activateMenuItem(section, node);
        }

        window.addEventListener('scroll', _.throttle(function () {
          self.activateMenuItem(section, node);
        }));
      });
    }
  },
  activateMenuItem: function activateMenuItem(section, element) {
    var self = this,
        threshold = 1;
    var isVisible = false;
    var headerHeight = self.getHeaderHeight() + self.getAdminbarHeight(),
        top = section.offset().top,
        offset = top - threshold - headerHeight,
        maxOffset = top - threshold * 2 + section.outerHeight() - headerHeight,
        scrollOffset = window.pageYOffset;

    if (scrollOffset >= offset && scrollOffset <= maxOffset) {
      isVisible = true;
    }

    element.toggleClass('raven-menu-item-active', isVisible);
  },
  getHeaderHeight: function getHeaderHeight() {
    var header = $('.jupiterx-header');

    if (header.length === 0) {
      return 0;
    }

    var _header$data = header.data('jupiterx-settings'),
        behavior = _header$data.behavior;

    if (behavior === 'fixed' || behavior === 'sticky' || window.pageYOffset < header.height()) {
      return header.height();
    }

    return 0;
  },
  hasCustomStickyHeader: function hasCustomStickyHeader() {
    var settings = this.getHeaderSettings();

    if (!settings) {
      return false;
    }

    if (!settings.behavior || settings.behavior !== 'sticky') {
      return false;
    }

    return !settings.stickyTemplate || settings.stickyTemplate !== settings.template;
  },
  getHeaderSettings: function getHeaderSettings() {
    var $header = $('.jupiterx-header');
    return $header.data('jupiterx-settings');
  },
  getCustomStickyHeaderHeight: function getCustomStickyHeaderHeight() {
    if (!this.hasCustomStickyHeader()) {
      return 0;
    }

    var $stickyHeader = $('.jupiterx-header-custom .elementor:last-of-type');

    if ($stickyHeader.length === 0) {
      return 0;
    }

    return $stickyHeader.outerHeight();
  },
  getBodyBorderWidth: function getBodyBorderWidth() {
    var $bodyBorder = $('.jupiterx-site-body-border');

    if ($bodyBorder.length === 0) {
      return 0;
    }

    var width = $bodyBorder.css('border-width');

    if (!width) {
      return 0;
    }

    return parseInt(width.replace('px', ''));
  },
  getAdminbarHeight: function getAdminbarHeight() {
    var adminbar = $('#wpadminbar');

    if (adminbar.length) {
      return adminbar.height();
    }

    return 0;
  },
  tbarHeight: function tbarHeight() {
    var tbar = $('.jupiterx-tbar');

    if (tbar.length) {
      return tbar.outerHeight();
    }

    return 0;
  },
  onElementChange: function onElementChange(propertyName) {
    if (this.getElementSettings('full_width') !== 'stretch') {
      this.stretchElement.reset();
      this.elements.$mobileMenu.removeAttr('style');
      this.elements.$mobileMenu.find('.raven-container').removeAttr('style');
    } else {
      this.dropdownFullWidth();
    }

    if (propertyName === 'mobile_layout' || propertyName === 'side_menu_effect') {
      this.elements.$body.removeClass('raven-nav-menu-effect-pushed').removeAttr('style');
      this.elements.$mobileMenu.removeClass('raven-nav-menu-active');
    }

    if (this.getElementSettings('mobile_layout') === 'side') {
      if (propertyName === 'menu_container_width' && this.elements.$body.hasClass('raven-nav-menu-effect-pushed')) {
        var menuContainerWidth = this.getElementSettings('menu_container_width'),
            sideMenuOpenPosition = this.getElementSettings('side_menu_alignment'),
            width = menuContainerWidth.size || 250;
        this.elements.$body.css('margin-left', sideMenuOpenPosition === 'left' ? width : -width);
      }
    }

    if (propertyName === 'submenu_space_between') {
      var spaceBetween = this.getElementSettings('submenu_space_between');

      if ((0, _typeof2["default"])(spaceBetween) === 'object') {
        this.findElement('.raven-submenu').first().css('margin-top', spaceBetween.size === '' ? '0' : "".concat(spaceBetween.size, "px"));
        this.elements.$menus.smartmenus('destroy');
        this.initSmartMenu();
      }
    }
  },
  onSectionActivated: function onSectionActivated(activeSection) {
    this.editShowSubmenu(activeSection === 'section_submenu');
  },
  onEditorClosed: function onEditorClosed() {
    this.editShowSubmenu(false);
  },
  editShowSubmenu: function editShowSubmenu(toggle) {
    var subMenu = this.findElement('.raven-submenu').first(),
        spaceBetween = this.getElementSettings('submenu_space_between');
    subMenu.toggleClass('raven-show-submenu', toggle);

    if ((0, _typeof2["default"])(spaceBetween) === 'object') {
      subMenu.css('margin-top', spaceBetween.size === '' ? '0' : "".concat(spaceBetween.size, "px"));
    }
  },
  onSideMenuItemClick: function onSideMenuItemClick(e, item) {
    var $el = $(item);

    if ($el.closest('.raven-nav-menu-side').length === 0) {
      return;
    }

    var href = $el.attr('href');

    if (href.search(/^#/) !== -1 || href.trim().length === 0) {
      return;
    }

    this.elements.$closeButton.trigger('click');
  },
  isHeaderSticked: function isHeaderSticked() {
    return $('.jupiterx-header-sticked').length > 0;
  },
  setMegaMenuWidth: function setMegaMenuWidth() {
    var megaMenu = this.elements.$liNavItem.find('.submenu .raven-megamenu-wrapper'),
        elementorContainer = this.elements.$elementorContainer,
        elementorContainerLeft = elementorContainer.offset().left,
        containerWidth = elementorContainer.outerWidth();
    megaMenu.each(function () {
      var self = $(this),
          megaMenuLiParent = self.parent().parent(),
          megaMenuLiParentLeft = megaMenuLiParent.offset().left,
          transformValue = -Math.abs(megaMenuLiParentLeft - elementorContainerLeft);
      self.parent().css('transform', "translateX(".concat(transformValue, "px)"));
    });
    megaMenu.css('width', "".concat(containerWidth, "px"));
  },
  excludeOtherUl: function excludeOtherUl() {
    var megaMenu = this.elements.$liNavItem.find('.submenu .raven-megamenu-wrapper');
    megaMenu.each(function () {
      var self = $(this);
      self.find('ul').attr('data-sm-skip', 'true');
    });
  },
  changeHamburgerState: function changeHamburgerState(active) {
    var $hamburger = this.elements.$toggleButton.find('.hamburger');

    if ($hamburger.length === 0) {
      return;
    }

    if (!active) {
      $hamburger.removeClass('is-active');
      return;
    }

    $hamburger.addClass('is-active');
  }
});

function _default($scope) {
  new NavMenu({
    $element: $scope
  });
}

},{"../utils/module":5,"@babel/runtime/helpers/interopRequireDefault":26,"@babel/runtime/helpers/typeof":27}],16:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _module = _interopRequireDefault(require("../utils/module"));

var _masonry = _interopRequireDefault(require("../utils/masonry"));

var PhotoAlbum = _module["default"].extend({
  Masonry: null,
  onInit: function onInit() {
    $(this.$element).on('add-stack-effect', this.addStackEffect);

    if (this.getInstanceValue('layout') === 'masonry') {
      this.createMasonry();
    }

    if (this.getElementSettings('_skin') === 'stack') {
      $(this.$element).trigger('add-stack-effect');
    }
  },
  addStackEffect: function addStackEffect() {
    var effect = this.getElementSettings('stack_hover_effect');
    $.each(this.$element.find('.raven-photo-album-item'), function (key, stackEl) {
      new window[effect + 'Fx']({
        el: stackEl
      });
    });
  },
  createMasonry: function createMasonry() {
    var self = this;
    self.Masonry = new _masonry["default"]({
      $element: self.$element
    });
    self.Masonry.run();

    if (self.getElementSettings('_skin') !== 'stack') {
      return;
    }

    setTimeout(function () {
      $(self.$element).trigger('add-stack-effect');
    }, 50);
  }
});

function _default($scope) {
  new PhotoAlbum({
    $element: $scope
  });
}

},{"../utils/masonry":4,"../utils/module":5,"@babel/runtime/helpers/interopRequireDefault":26}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default($scope) {
  var $photoRoller = $scope.find('.raven-photo-roller');

  if (typeof window.safari === 'undefined') {
    return;
  } // Fore redraw for Safari. This is a hack.


  function redraw() {
    $photoRoller.hide().show(0);
  }

  redraw();
  $(window).resize(redraw);
}

},{}],18:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classic = classic;
exports.cover = cover;

var _module = _interopRequireDefault(require("../utils/module"));

var PostsCarousel = _module["default"].extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      classes: {
        dots: 'swiper-pager'
      },
      selectors: {
        postImageFit: '.raven-image-fit img',
        carouselWrapper: '.raven-swiper-slider',
        sliderWrapper: '.swiper-container',
        itemsSlider: '.swiper-wrapper'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors');
    return {
      $carouselWrapper: this.$element.find(selectors.carouselWrapper),
      $sliderWrapper: this.$element.find(selectors.sliderWrapper),
      $itemsSlider: this.$element.find(selectors.itemsSlider)
    };
  },
  getCarouselSettings: function getCarouselSettings() {
    return {
      slides_view: this.getInstanceValue('slides_view'),
      slides_view_tablet: this.getInstanceValue('slides_view_tablet'),
      slides_view_mobile: this.getInstanceValue('slides_view_mobile'),
      slides_scroll: this.getInstanceValue('slides_scroll'),
      slides_scroll_tablet: this.getInstanceValue('slides_scroll_tablet'),
      slides_scroll_mobile: this.getInstanceValue('slides_scroll_mobile'),
      enable_autoplay: this.getInstanceValue('enable_autoplay'),
      autoplay_speed: this.getInstanceValue('autoplay_speed'),
      enable_infinite_loop: this.getInstanceValue('enable_infinite_loop'),
      enable_hover_pause: this.getInstanceValue('enable_hover_pause'),
      transition_speed: this.getInstanceValue('transition_speed'),
      show_navigation: this.getInstanceValue('show_arrows'),
      show_pagination: this.getInstanceValue('show_pagination'),
      pagination_position: this.getInstanceValue('pagination_position'),
      columns_space_between: this.getInstanceValue('columns_space_between'),
      columns_space_between_mobile: this.getInstanceValue('columns_space_between_mobile'),
      columns_space_between_tablet: this.getInstanceValue('columns_space_between_tablet')
    };
  },
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    var settings = this.getCarouselSettings();
    var options = {
      draggable: false,
      slidesPerColumn: 0,
      spaceBetween: settings.columns_space_between_mobile.size,
      slidesPerView: settings.slides_view_mobile,
      slidesPerGroup: +settings.slides_scroll_mobile || 1,
      autoplay: settings.enable_autoplay === 'yes' ? {
        delay: settings.autoplay_speed
      } : false,
      loop: settings.enable_infinite_loop === 'yes',
      watchOverflow: settings.enable_hover_pause === 'yes',
      speed: +settings.transition_speed,
      navigation: settings.show_navigation === 'yes' ? {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      } : false,
      appendArrows: this.elements.$sliderWrapper,
      pagination: settings.show_pagination === 'yes' ? {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      } : false,
      breakpoints: {
        360: {
          slidesPerView: +settings.slides_view_mobile,
          slidesToScroll: settings.slides_scroll_mobile || 1,
          spaceBetween: settings.columns_space_between_mobile.size
        },
        768: {
          slidesPerView: +settings.slides_view_tablet,
          slidesToScroll: settings.slides_scroll_tablet || 1,
          spaceBetween: settings.columns_space_between_tablet.size
        },
        1024: {
          slidesPerView: +settings.slides_view,
          slidesToScroll: settings.slides_scroll || 1,
          spaceBetween: settings.columns_space_between.size
        }
      }
    };
    this.elements.$sliderWrapper.each(function (index, swiperContainer) {
      $(this).parents('.elementor-widget-raven-posts-carousel').find('.raven-posts-carousel').addClass('swiper-' + index);
      $(this).parents('.elementor-widget-raven-posts-carousel').find('.raven-posts-carousel').addClass('swiper-' + index);

      if (options.navigation) {
        options.navigation = {
          nextEl: $(swiperContainer).parents('.raven-posts-carousel').find('.swiper-button-next'),
          prevEl: $(swiperContainer).parents('.raven-posts-carousel').find('.swiper-button-prev')
        };
      }

      var swiperObj = null;

      if ('undefined' === typeof Swiper) {
        var asyncSwiper = elementorFrontend.utils.swiper;
        new asyncSwiper(swiperContainer, options).then(function (newSwiperInstance) {
          swiperObj = newSwiperInstance; // eslint-disable-line
        });
      } else {
        swiperObj = new Swiper(swiperContainer, options); // eslint-disable-line
      }

      if (settings.enable_autoplay === 'yes') {
        $(swiperContainer).on({
          mouseenter: function mouseenter() {
            swiperObj.autoplay.stop();
          },
          mouseleave: function mouseleave() {
            swiperObj.autoplay.start();
          }
        });
      }
    });
  },
  onElementChange: function onElementChange(propertyName) {
    if (propertyName === this.getControlID('columns_space_between')) {
      this.elements.$itemsSlider.slick('setPosition');
    }
  }
});

function classic($scope) {
  new PostsCarousel({
    $element: $scope
  });
}

function cover($scope) {
  new PostsCarousel({
    $element: $scope
  });
}

},{"../utils/module":5,"@babel/runtime/helpers/interopRequireDefault":26}],19:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classic = classic;
exports.cover = cover;

var _module = _interopRequireDefault(require("../utils/module"));

var _sortable = _interopRequireDefault(require("../utils/sortable"));

var _pagination = _interopRequireDefault(require("../utils/pagination"));

var _masonry = _interopRequireDefault(require("../utils/masonry"));

var Posts = _module["default"].extend({
  Sortable: null,
  Pagination: null,
  Masonry: null,
  getDefaultSettings: function getDefaultSettings() {
    return {
      classes: {
        postMirrored: 'data-mirrored'
      },
      selectors: {
        posts: '.raven-posts',
        postItem: '.raven-post-item',
        postImageFit: '.raven-image-fit img',
        postMirrored: '[data-mirrored]',
        loadMore: '.raven-load-more',
        loadMoreButton: '.raven-load-more-button',
        pagination: '.raven-pagination',
        sortable: '.raven-sortable'
      },
      state: {
        paged: 1,
        category: -1,
        maxNumPages: 1,
        isLoading: false
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors');
    return {
      $postsContainer: this.$element.find(selectors.posts),
      $loadMore: this.$element.find(selectors.loadMore),
      $loadMoreButton: this.$element.find(selectors.loadMoreButton),
      $pagination: this.$element.find(selectors.pagination)
    };
  },
  bindEvents: function bindEvents() {
    if (this.getInstanceValue('mirror_rows') === 'yes') {
      elementorFrontend.addListenerOnce(this.$element.data('model-cid'), 'resize', this.mirrorRows.bind(this));
    }

    if (this.getInstanceValue('pagination_type') === 'load_more' && this.elements.$loadMore.length) {
      var state = this.getSettings('state'),
          settings = this.elements.$loadMore.data('settings');
      this.setPaged({
        paged: state.paged,
        maxNumPages: settings.maxNumPages
      });
      this.elements.$loadMoreButton.on('click', this.handleLoadMore.bind(this));
    }
  },
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    this.initializeOnce();
    this.initialize();
  },
  initializeOnce: function initializeOnce() {
    if (this.getInstanceValue('pagination_type') === 'page_based') {
      this.paginationModule();
    }

    if (this.getInstanceValue('show_sortable') === 'yes') {
      this.sortableModule();
    }
  },
  initialize: function initialize() {
    if (this.getInstanceValue('layout') === 'masonry') {
      this.runMasonry();
    }

    if (this.getInstanceValue('mirror_rows') === 'yes') {
      this.mirrorRows();
    }

    if (this.getInstanceValue('pagination_type') === 'infinite_load') {
      this.infiniteLoadWaypoint();
    }

    objectFitPolyfill(this.$element.find(this.getSettings('selectors.postImageFit')));
  },
  paginationModule: function paginationModule() {
    var _Pagination = _pagination["default"].extend({
      handlePagination: this.handlePagination.bind(this)
    });

    this.Pagination = new _Pagination({
      $element: this.$element.find(this.getSettings('selectors.pagination'))
    });
  },
  sortableModule: function sortableModule() {
    var _Sortable = _sortable["default"].extend({
      handleSort: this.handleSort.bind(this)
    });

    this.Sortable = new _Sortable({
      $element: this.$element.find(this.getSettings('selectors.sortable'))
    });
  },
  afterAppend: function afterAppend() {
    if (this.getInstanceValue('mirror_rows') === 'yes') {
      this.mirrorRows();
    }

    if (this.getInstanceValue('pagination_type') === 'infinite_load') {
      this.infiniteLoadWaypoint();
    }
  },
  setColumnsCount: function setColumnsCount() {
    var curDevice = elementorFrontend.getCurrentDeviceMode();
    var columnsKey = "columns_".concat(curDevice);

    if (curDevice === 'desktop') {
      columnsKey = 'columns';
    }

    this.setSettings('columnsCount', parseInt(this.getInstanceValue(columnsKey)));
  },
  runMasonry: function runMasonry() {
    this.Masonry = new _masonry["default"]({
      $element: this.$element
    });
    this.Masonry.run();
  },
  mirrorRows: function mirrorRows() {
    this.setColumnsCount();
    var settings = this.getSettings(),
        $postsItems = this.$element.find(settings.selectors.postItem);
    $postsItems.filter(settings.selectors.postMirrored).removeAttr(settings.classes.postMirrored);

    if ($postsItems.length && $postsItems.length > settings.columnsCount) {
      var totalRows = $postsItems.length / settings.columnsCount;

      for (var i = 1; i < totalRows; i += 2) {
        var startIndex = i * settings.columnsCount;
        $postsItems.slice(startIndex, startIndex + settings.columnsCount).attr(settings.classes.postMirrored, true);
      }
    }
  },
  infiniteLoadWaypoint: function infiniteLoadWaypoint() {
    var _this = this;

    var self = this;
    self.elements.$postsContainer.imagesLoaded().always(function () {
      var options = {
        offset: 'bottom-in-view',
        triggerOnce: true
      };
      elementorFrontend.waypoint(self.elements.$postsContainer, _this.handleInfiniteLoad.bind(_this), options);
    });
  },
  ajaxPosts: function ajaxPosts(data, callback) {
    var ajaxData = {
      action: 'raven_get_render_posts',
      post_id: this.getCurrentPostId(),
      model_id: this.getID(),
      paged: data.paged,
      category: data.category
    };
    var archiveQuery = this.elements.$postsContainer.data('archive-query');

    if (archiveQuery) {
      ajaxData.archive_query = JSON.stringify(archiveQuery);
    }

    var ajaxSuccess = function ajaxSuccess(res) {
      if (!res.success || !res.data.posts) {
        return;
      }

      callback(res);
    };

    var ajaxComplete = function ajaxComplete() {
      this.setSettings('state.isLoading', false);
    };

    this.setSettings('state.isLoading', true);
    $.ajax({
      type: 'POST',
      url: _wpUtilSettings.ajax.url,
      data: ajaxData,
      success: ajaxSuccess,
      complete: ajaxComplete.bind(this)
    });
  },
  addPosts: function addPosts(data) {
    var state = this.getSettings('state');

    if (state.isLoading || state.paged < 1) {
      return false;
    }

    this.ajaxPosts(data, this.appendPosts);
    return true;
  },
  appendPosts: function appendPosts(res) {
    var state = this.getSettings('state');

    switch (this.getInstanceValue('layout')) {
      case 'masonry':
        this.Masonry.push(res.data.posts);
        break;

      default:
        this.elements.$postsContainer.append(res.data.posts);
    }

    this.setPaged({
      paged: state.paged + 1,
      maxNumPages: res.data.max_num_pages
    });
    this.afterAppend();
  },
  setPosts: function setPosts(data) {
    var state = this.getSettings('state');

    if (state.isLoading) {
      return false;
    }

    this.ajaxPosts(data, this.renderPosts);
    return true;
  },
  renderPosts: function renderPosts(res) {
    this.elements.$postsContainer.empty();
    this.elements.$postsContainer.append(res.data.posts);

    if (this.Sortable && !this.Sortable.isEnabled()) {
      this.Sortable.renderUpdate();

      if (this.Pagination && this.Pagination.isEnabled()) {
        this.Pagination.recreatePagination(res.data.max_num_pages);
      }
    }

    if (this.Pagination && !this.Pagination.isEnabled()) {
      this.Pagination.renderUpdate();
    }

    this.setPaged({
      paged: 1,
      maxNumPages: res.data.max_num_pages
    });
    this.initialize();
  },
  handleLoadMore: function handleLoadMore(event) {
    event.preventDefault();
    var state = this.getSettings('state'),
        newPaged = state.paged + 1;
    this.addPosts({
      paged: newPaged,
      category: state.category
    });
  },
  handleInfiniteLoad: function handleInfiniteLoad() {
    var state = this.getSettings('state'),
        newPaged = state.paged + 1;
    this.addPosts({
      paged: newPaged,
      category: state.category
    });
  },
  handlePagination: function handlePagination(pageNum) {
    this.scrollToContainer(this.elements.$postsContainer);
    this.setPosts({
      paged: pageNum,
      category: this.getSettings('state.category')
    });
  },
  handleSort: function handleSort(category) {
    var postOk = this.setPosts({
      paged: 1,
      category: category
    });

    if (postOk) {
      this.setSettings('state.category', category);
    }
  },
  setPaged: function setPaged(params) {
    var paged = params.paged,
        maxNumPages = params.maxNumPages;

    if (paged >= maxNumPages) {
      paged = -1;
    }

    if (paged === -1) {
      this.elements.$loadMore.hide();
    } else {
      this.elements.$loadMore.show();
    }

    this.setSettings('state.paged', paged);
    this.setSettings('state.maxNumPages', maxNumPages);
  },
  getCurrentPostId: function getCurrentPostId() {
    return parseInt(this.elements.$postsContainer.data('post-id'));
  },
  onSectionActivated: function onSectionActivated(activeSection) {
    if (!activeSection) {
      return;
    }

    this.editOverlayIcons(activeSection.indexOf('section_icons') !== -1);
  },
  onEditorClosed: function onEditorClosed() {
    this.editOverlayIcons(false);
  },
  editOverlayIcons: function editOverlayIcons(toggle) {
    this.$element.toggleClass('raven-edit-icons', toggle);
  }
});

function classic($scope) {
  new Posts({
    $element: $scope
  });
}

function cover($scope) {
  new Posts({
    $element: $scope
  });
}

},{"../utils/masonry":4,"../utils/module":5,"../utils/pagination":6,"../utils/sortable":8,"@babel/runtime/helpers/interopRequireDefault":26}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classic = classic;
exports.full = full;

function classic($scope) {
  var form = $scope.find('.raven-search-form');
  $scope.on('focus', '.raven-search-form-input', function () {
    form.addClass('raven-search-form-focus');
  });
  $scope.on('blur', '.raven-search-form-input', function () {
    form.removeClass('raven-search-form-focus');
  });
}

function full($scope) {
  var elements = {
    lightbox: $scope.find('.raven-search-form-lightbox'),
    inputSearch: $scope.find('.raven-search-form-input')
  };
  $scope.on('click', '.raven-search-form-button', function (event) {
    event.preventDefault();
    elements.lightbox.addClass('raven-search-form-lightbox-open');
    window.setTimeout(function () {
      elements.inputSearch.focus();
    }, 100);
  });
  $scope.on('click', '.raven-search-form-close', function (event) {
    event.preventDefault();
    elements.lightbox.removeClass('raven-search-form-lightbox-open');
  });
  jQuery(document).keyup(function (event) {
    if (event.keyCode === 27) {
      elements.lightbox.removeClass('raven-search-form-lightbox-open');
    }
  });
}

},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _i18n = require("@wordpress/i18n");

/* eslint no-undef: "off", no-unused-vars: "off", no-shadow: "off", no-var: "off" */
var $ = jQuery;

function _default($scope) {
  if ($('#jupiterx-raven-social-login-widget-facebook').length > 0) {
    jxRavenSocialLoginfacebook();
  }

  if ($('#jupiterx-raven-social-login-widget-google').length > 0) {
    jxRavenSocialLoginGoogle();
  }

  if ($('#jupiterx-raven-social-login-widget-twitter').length > 0) {
    jxRavenSocialLoginTwitter();
  }
}

var jxRavenSocialLoginfacebook = function jxRavenSocialLoginfacebook() {
  // Facebook event.
  window.fbAsyncInit = function () {
    FB.init({
      appId: jxRavenFacebookAppId,
      // Passed to page from JupiterX_Core\Raven\Modules\Forms\Classes\Social_Login_Handler\facebook::html.
      cookie: true,
      // Enable cookies to allow the server to access the session.
      xfbml: true,
      // Parse social plugins on this webpage.
      version: 'v10.0'
    });
  };

  var facebookBtn = document.getElementById('jupiterx-raven-social-login-widget-facebook');
  facebookBtn.addEventListener('click', function () {
    FB.login(function (response) {
      if (response.authResponse) {
        if ('connected' === response.status) {
          FB.api('/me', {
            fields: 'name, email'
          }, function (data) {
            var email = data.email;
            var name = data.name;
            var fbId = data.id;
            jxRavenSocialFacebookSignIn(email, name, fbId);
          });
        }
      } else {//user hit cancel button
      }
    });
  }, false);

  var jxRavenSocialFacebookSignIn = function jxRavenSocialFacebookSignIn(emailUser, nameUser, fbId) {
    $.ajax({
      url: _wpUtilSettings.ajax.url,
      type: 'POST',
      beforeSend: function beforeSend() {
        jQuery('.raven-social-login-wrap .facebook').css('opacity', '0.5');
        $('.jx-social-login-errors-wrapper').hide().text('');
      },
      data: {
        action: 'raven_form_frontend',
        email: emailUser,
        name: nameUser,
        fbid: fbId,
        post_id: document.getElementById('jx-raven-social-widget-post').value,
        form_id: document.getElementById('jx-raven-social-widget-form').value,
        social_network: 'Facebook'
      }
    }).always(function (data) {
      $('.raven-social-login-wrap .facebook').css('opacity', '1.0');

      if (true === data.success) {
        if (data.data.redirect_url) {
          window.location.href = data.data.login_url + '&redirect=' + data.data.redirect_url;
        } else {
          window.location.href = data.data.login_url;
        }
      } else {
        $('.jx-social-login-errors-wrapper').show().text(data.data);
      }
    });
  };
};

var jxRavenSocialLoginGoogle = function jxRavenSocialLoginGoogle() {
  var googleUser = {};
  var auth2;
  $('#jupiterx-raven-social-login-widget-google span').on('click', function () {
    if (_.isEmpty(jxRavenSocialWidgetGoogleClient)) {
      $('.jx-social-login-errors-wrapper').show().text((0, _i18n.__)('Google client id is empty.', 'jupiterx-core'));
    }
  });

  var startRavenGoogleConnector = function startRavenGoogleConnector() {
    gapi.load('auth2', function () {
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      auth2 = gapi.auth2.init({
        client_id: jxRavenSocialWidgetGoogleClient,
        cookiepolicy: 'single_host_origin'
      });
      jxAssignSignInToElement(document.getElementById('jupiterx-raven-social-login-widget-google'));
    });
  };

  var jxAssignSignInToElement = function jxAssignSignInToElement(element) {
    auth2.attachClickHandler(element, {}, function (googleUser) {
      var token = googleUser.getAuthResponse().id_token; // send to

      checkToken(token);
    }, function (error) {
      $('.jx-social-login-errors-wrapper').show().text(error.message);
    });
  };

  var checkToken = function checkToken(Token) {
    $.ajax({
      url: _wpUtilSettings.ajax.url,
      type: 'POST',
      beforeSend: function beforeSend() {
        $('.raven-social-login-wrap .google').css('opacity', '0.5');
        $('.jx-social-login-errors-wrapper').hide().text('');
      },
      data: {
        token: Token,
        action: 'raven_form_frontend',
        post_id: document.getElementById('jx-raven-social-widget-post').value,
        form_id: document.getElementById('jx-raven-social-widget-form').value,
        social_network: 'Google'
      }
    }).always(function (data) {
      $('.raven-social-login-wrap .google').css('opacity', '1.0');

      if (true === data.success) {
        if (data.data.redirect_url) {
          window.location.href = data.data.login_url + '&redirect=' + data.data.redirect_url;
        } else {
          window.location.href = data.data.login_url;
        }
      } else {
        $('.jx-social-login-errors-wrapper').show().text(data.data);
      }
    });
  };

  startRavenGoogleConnector();
};

var jxRavenSocialLoginTwitter = function jxRavenSocialLoginTwitter() {
  var twitterBtn = document.getElementById('jupiterx-raven-social-login-widget-twitter');
  twitterBtn.addEventListener('click', function () {
    $.ajax({
      url: _wpUtilSettings.ajax.url,
      type: 'POST',
      beforeSend: function beforeSend() {
        $('.raven-social-login-wrap .twitter').css('opacity', '0.5');
        $('.jx-social-login-errors-wrapper').hide().text('');
      },
      data: {
        action: 'raven_form_frontend',
        post_id: document.getElementById('jx-raven-social-widget-post').value,
        form_id: document.getElementById('jx-raven-social-widget-form').value,
        social_network: 'Twitter'
      }
    }).always(function (data) {
      $('.raven-social-login-wrap .twitter').css('opacity', '1.0');

      if (true === data.success) {
        win = window.open(data.data, '_blank');
        win.focus();
      } else {
        $('.jx-social-login-errors-wrapper').show().text(data.data);
      }
    });
  }, false);
};

},{"@wordpress/i18n":34}],22:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _module = _interopRequireDefault(require("../utils/module"));

var Tabs = _module["default"].extend({
  $activeContent: null,
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        tabTitle: '.raven-tabs-title',
        tabContent: '.raven-tabs-content'
      },
      classes: {
        active: 'raven-tabs-active'
      },
      showTabFn: 'show',
      hideTabFn: 'hide',
      toggleSelf: true,
      hidePrevious: true,
      autoExpand: true
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors');
    return {
      $tabTitles: this.findElement(selectors.tabTitle),
      $tabContents: this.findElement(selectors.tabContent)
    };
  },
  activateDefaultTab: function activateDefaultTab() {
    var settings = this.getSettings();

    if ((!settings.autoExpand || settings.autoExpand === 'editor') && !this.isEdit) {
      return;
    }

    var defaultActiveTab = this.getEditSettings('activeItemIndex') || 1;
    var originalToggleMethods = {
      showTabFn: settings.showTabFn,
      hideTabFn: settings.hideTabFn
    };
    this.setSettings({
      showTabFn: 'show',
      hideTabFn: 'hide'
    });
    this.changeActiveTab(defaultActiveTab);
    this.setSettings(originalToggleMethods);
  },
  deactivateActiveTab: function deactivateActiveTab(tabIndex) {
    var settings = this.getSettings();
    var activeClass = settings.classes.active;
    var activeFilter = tabIndex ? '[data-tab="' + tabIndex + '"]' : '.' + activeClass;
    var $activeTitle = this.elements.$tabTitles.filter(activeFilter);
    var $activeContent = this.elements.$tabContents.filter(activeFilter);
    $activeTitle.add($activeContent).removeClass(activeClass);
    $activeContent[settings.hideTabFn]();
  },
  activateTab: function activateTab(tabIndex) {
    var settings = this.getSettings();
    var activeClass = settings.classes.active;
    var $requestedTitle = this.elements.$tabTitles.filter('[data-tab="' + tabIndex + '"]');
    var $requestedContent = this.elements.$tabContents.filter('[data-tab="' + tabIndex + '"]');
    $requestedTitle.add($requestedContent).addClass(activeClass);
    $requestedContent[settings.showTabFn]();

    if ($requestedTitle.hasClass('raven-tabs-mobile-title') && window.innerWidth < 1025) {
      var headerHeight = $('header').outerHeight();
      window.scroll({
        top: $requestedContent.offset().top - headerHeight - 100,
        behavior: 'smooth'
      });
    }
  },
  isActiveTab: function isActiveTab(tabIndex) {
    return this.elements.$tabTitles.filter('[data-tab="' + tabIndex + '"]').hasClass(this.getSettings('classes.active'));
  },
  bindEvents: function bindEvents() {
    var self = this;
    self.elements.$tabTitles.on('click', function (event) {
      self.changeActiveTab(event.currentTarget.dataset.tab);
    });
  },
  onInit: function onInit() {
    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
    this.activateDefaultTab();
  },
  onEditSettingsChange: function onEditSettingsChange(propertyName) {
    if (propertyName === 'activeItemIndex') {
      this.activateDefaultTab();
    }
  },
  changeActiveTab: function changeActiveTab(tabIndex) {
    var isActiveTab = this.isActiveTab(tabIndex);
    var settings = this.getSettings();

    if ((settings.toggleSelf || !isActiveTab) && settings.hidePrevious) {
      this.deactivateActiveTab();
    }

    if (!settings.hidePrevious && isActiveTab) {
      this.deactivateActiveTab(tabIndex);
    }

    if (!isActiveTab) {
      this.activateTab(tabIndex);
    }
  }
});

function _default($scope) {
  new Tabs({
    $element: $scope,
    toggleSelf: false
  });
}

},{"../utils/module":5,"@babel/runtime/helpers/interopRequireDefault":26}],23:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _module = _interopRequireDefault(require("../utils/module"));

var Video = _module["default"].extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        imageOverlay: '.raven-video-thumbnail',
        videoWrapper: '.raven-video',
        videoFrame: 'iframe'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors');
    var elements = {
      $imageOverlay: this.$element.find(selectors.imageOverlay),
      $videoWrapper: this.$element.find(selectors.videoWrapper)
    };
    elements.$videoFrame = elements.$videoWrapper.find(selectors.videoFrame);
    return elements;
  },
  onInit: function onInit() {
    var _this = this;

    elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);

    if (!this.getElementSettings('use_lightbox')) {
      return;
    }

    if (this.getLightBox() instanceof Promise) {
      this.getLightBox().then(function (lightBox) {
        lightBox.getModal().on('show', _this.handleLightbox);
      });
      return;
    }

    this.getLightBox().getModal().on('show', this.handleLightbox);
  },
  getLightBox: function getLightBox() {
    return elementorFrontend.utils.lightbox;
  },
  handleLightbox: function handleLightbox() {
    if (this.getElementSettings('video_type') === 'hosted') {
      this.handleAspectRatio();
      var message = jQuery(this.getLightBox().getModal().getElements('message')),
          $video = message.find('video');

      if ($video.length) {
        $video.get(0).play();
      }
    }
  },
  handleVideo: function handleVideo() {
    if (!this.getElementSettings('use_lightbox')) {
      this.elements.$imageOverlay.remove();
      this.playVideo();
    }
  },
  playVideo: function playVideo() {
    var $videoFrame = this.elements.$videoFrame;

    if (this.getElementSettings('video_type') === 'youtube') {
      var tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
        new YT.Player($videoFrame[0], {
          // eslint-disable-line
          events: {
            onReady: function onPlayerReady(event) {
              event.target.playVideo();
            }
          }
        });
      };
    }

    if (this.getElementSettings('video_type') === 'vimeo') {
      var newSourceUrl = $videoFrame[0].src.replace('autoplay=0', 'autoplay=1');
      $videoFrame[0].src = newSourceUrl;
    }

    if (this.getElementSettings('video_type') === 'hosted') {
      var $video = this.elements.$videoWrapper.find('video');

      if ($video.length) {
        $video.get(0).play();
      }
    }
  },
  handleAspectRatio: function handleAspectRatio() {
    this.getLightBox().setVideoAspectRatio(this.getElementSettings('video_aspect_ratio'));
  },
  bindEvents: function bindEvents() {
    this.elements.$imageOverlay.on('click', this.handleVideo);
  },
  onElementChange: function onElementChange(propertyName) {
    var isLightBoxEnabled = this.getElementSettings('use_lightbox');

    if (!isLightBoxEnabled && propertyName === 'use_lightbox') {
      this.getLightBox().getModal().hide();
      return;
    }

    if (isLightBoxEnabled && propertyName === 'video_aspect_ratio') {
      this.handleAspectRatio();
    }
  }
});

function _default($scope) {
  new Video({
    $element: $scope
  });
}

},{"../utils/module":5,"@babel/runtime/helpers/interopRequireDefault":26}],24:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _module = _interopRequireDefault(require("../utils/module"));

var Products = _module["default"].extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      selectors: {
        productsWrapper: '.raven-wc-products-wrapper',
        productsContainer: '.products',
        paginationContainer: '.woocommerce-pagination',
        loadMoreButton: '.raven-load-more-button'
      },
      state: {
        isLoading: false,
        paged: 2
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var selectors = this.getSettings('selectors');
    return {
      $productsWrapper: this.$element.find(selectors.productsWrapper),
      $productsContainer: this.$element.find(selectors.productsContainer),
      $paginationContainer: this.$element.find(selectors.paginationContainer),
      $loadMoreButton: this.$element.find(selectors.loadMoreButton)
    };
  },
  bindEvents: function bindEvents() {
    if (this.getInstanceValue('pagination_type') === 'load_more') {
      this.loadMore();
    }

    if (this.getInstanceValue('pagination_type') === 'infinite_load') {
      this.infiniteLoad();
    }

    this.zoom();
    this.flexslider();

    if (this.getInstanceValue('wishlist') === 'show') {
      this.wishlist();
    }
  },
  zoom: function zoom() {
    if (this.getInstanceValue('swap_effect') !== 'zoom_hover') {
      return;
    }

    this.elements.$productsWrapper.find('.jupiterx-wc-loop-product-image').zoom();
  },
  flexslider: function flexslider() {
    if (typeof this.getInstanceValue('swap_effect') === 'undefined') {
      return;
    }

    if (!this.getInstanceValue('swap_effect').includes('gallery')) {
      return;
    }

    var self = this;
    var controlNav = false;
    var directionNav = false;

    if (this.getInstanceValue('swap_effect') === 'gallery_arrows') {
      directionNav = true;
    }

    if (this.getInstanceValue('swap_effect') === 'gallery_pagination') {
      controlNav = true;
    }

    self.elements.$productsWrapper.find('.jupiterx-wc-loop-product-image').flexslider({
      selector: '.raven-swap-effect-gallery-slides > li',
      animation: 'slide',
      slideshow: false,
      controlNav: controlNav,
      directionNav: directionNav,
      prevText: '<svg version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.2 12" style="enable-background:new 0 0 7.2 12;" xml:space="preserve"><path class="st0" d="M2.4,6l4.5-4.3c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-5.2,5C0.1,5.5,0,5.7,0,6s0.1,0.5,0.3,0.7l5.2,5	C5.7,11.9,6,12,6.2,12c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L2.4,6z"></path></svg>',
      nextText: '<svg version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7.2 12" style="enable-background:new 0 0 7.2 12;" xml:space="preserve"><path class="st0" d="M4.8,6l-4.5,4.3c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l5.2-5C7.1,6.5,7.2,6.3,7.2,6S7.1,5.5,6.9,5.3l-5.2-5C1.5,0.1,1.2,0,1,0C0.7,0,0.5,0.1,0.3,0.3c-0.4,0.4-0.4,1,0,1.4L4.8,6z"></path></svg>',
      init: function init() {
        self.elements.$productsWrapper.addClass('raven-swap-effect-gallery-loaded');
      }
    });
  },
  loadMore: function loadMore() {
    var self = this;
    self.elements.$loadMoreButton.on('click', function (event) {
      event.preventDefault();
      self.fetch();
    });
  },
  infiniteLoad: function infiniteLoad() {
    var self = this;

    if (self.elements.$paginationContainer.length) {
      return;
    }

    self.elements.$productsContainer.imagesLoaded().always(function () {
      elementorFrontend.waypoint(self.elements.$productsContainer, self.fetch.bind(self), {
        offset: 'bottom-in-view',
        triggerOnce: true
      });
    });
  },
  fetch: function fetch() {
    var self = this;

    if (self.getSettings('state.isLoading')) {
      return;
    }

    self.setSettings('state.isLoading', true);
    var data = {
      post_id: elementorFrontend.config.post.id,
      model_id: this.getID(),
      'product-page': self.getSettings('state.paged')
    }; // Orderby filter.

    var urlParams = new URLSearchParams(window.location.search);

    if (null !== urlParams.get('orderby') && urlParams.get('orderby').length) {
      data.orderby = urlParams.get('orderby');
    }

    wp.ajax.send('raven_products_query', {
      type: 'GET',
      data: data,
      success: function success(res) {
        self.setSettings('state.paged', self.getSettings('state.paged') + 1);
        self.elements.$productsContainer.append(res.products);
        self.elements.$productsContainer.siblings('.woocommerce-result-count').html(res.result_count);

        if (self.getInstanceValue('pagination_type') === 'load_more' && res.query_results.current_page === res.query_results.total_pages) {
          self.elements.$loadMoreButton.hide();
        }

        if (self.getInstanceValue('pagination_type') === 'infinite_load' && res.query_results.current_page !== res.query_results.total_pages) {
          self.infiniteLoad();
        }

        self.zoom();
        self.flexslider();
      },
      error: function error(res) {
        // eslint-disable-next-line no-console
        console.error(res);
      },
      complete: function complete() {
        self.setSettings('state.isLoading', false);
      }
    });
  },
  wishlist: function wishlist() {
    $(document).on('click', '.jupiterx-wishlist', function (event) {
      event.preventDefault();
      var $this = $(this);
      var action = 'add_to_wishlist';
      var data = {};
      var state = $this.data('state');
      var productId = $this.data('productId');
      var nonceAdd = $this.data('nonceAdd');
      var nonceRemove = $this.data('nonceRemove');
      data.nonce = nonceAdd;
      data.add_to_wishlist = productId;
      data.remove_from_wishlist = productId;

      if (state === 'remove') {
        action = 'remove_from_wishlist';
        data.nonce = nonceRemove;
      }

      wp.ajax.send(action, {
        type: 'GET',
        data: data
      }).always(function (res) {
        if (action === 'add_to_wishlist' && res.result === 'true') {
          $this.addClass('jupiterx-wishlist-remove');
          $this.data('state', 'remove');
        }

        if (action === 'remove_from_wishlist' && res.fragments.length === 0) {
          $this.removeClass('jupiterx-wishlist-remove');
          $this.data('state', 'add');
        }
      });
    });
  }
});

function _default($scope) {
  new Products({
    $element: $scope
  });
}

},{"../utils/module":5,"@babel/runtime/helpers/interopRequireDefault":26}],25:[function(require,module,exports){
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
},{}],26:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],27:[function(require,module,exports){
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
},{}],28:[function(require,module,exports){
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var postfix = _interopDefault(require('@tannin/postfix'));
var evaluate = _interopDefault(require('@tannin/evaluate'));

/**
 * Given a C expression, returns a function which can be called to evaluate its
 * result.
 *
 * @example
 *
 * ```js
 * import compile from '@tannin/compile';
 *
 * const evaluate = compile( 'n > 1' );
 *
 * evaluate( { n: 2 } );
 * // ⇒ true
 * ```
 *
 * @param {string} expression C expression.
 *
 * @return {(variables?:{[variable:string]:*})=>*} Compiled evaluator.
 */
function compile( expression ) {
	var terms = postfix( expression );

	return function( variables ) {
		return evaluate( terms, variables );
	};
}

module.exports = compile;

},{"@tannin/evaluate":29,"@tannin/postfix":31}],29:[function(require,module,exports){
'use strict';

/**
 * Operator callback functions.
 *
 * @type {Object}
 */
var OPERATORS = {
	'!': function( a ) {
		return ! a;
	},
	'*': function( a, b ) {
		return a * b;
	},
	'/': function( a, b ) {
		return a / b;
	},
	'%': function( a, b ) {
		return a % b;
	},
	'+': function( a, b ) {
		return a + b;
	},
	'-': function( a, b ) {
		return a - b;
	},
	'<': function( a, b ) {
		return a < b;
	},
	'<=': function( a, b ) {
		return a <= b;
	},
	'>': function( a, b ) {
		return a > b;
	},
	'>=': function( a, b ) {
		return a >= b;
	},
	'==': function( a, b ) {
		return a === b;
	},
	'!=': function( a, b ) {
		return a !== b;
	},
	'&&': function( a, b ) {
		return a && b;
	},
	'||': function( a, b ) {
		return a || b;
	},
	'?:': function( a, b, c ) {
		if ( a ) {
			throw b;
		}

		return c;
	},
};

/**
 * Given an array of postfix terms and operand variables, returns the result of
 * the postfix evaluation.
 *
 * @example
 *
 * ```js
 * import evaluate from '@tannin/evaluate';
 *
 * // 3 + 4 * 5 / 6 ⇒ '3 4 5 * 6 / +'
 * const terms = [ '3', '4', '5', '*', '6', '/', '+' ];
 *
 * evaluate( terms, {} );
 * // ⇒ 6.333333333333334
 * ```
 *
 * @param {string[]} postfix   Postfix terms.
 * @param {Object}   variables Operand variables.
 *
 * @return {*} Result of evaluation.
 */
function evaluate( postfix, variables ) {
	var stack = [],
		i, j, args, getOperatorResult, term, value;

	for ( i = 0; i < postfix.length; i++ ) {
		term = postfix[ i ];

		getOperatorResult = OPERATORS[ term ];
		if ( getOperatorResult ) {
			// Pop from stack by number of function arguments.
			j = getOperatorResult.length;
			args = Array( j );
			while ( j-- ) {
				args[ j ] = stack.pop();
			}

			try {
				value = getOperatorResult.apply( null, args );
			} catch ( earlyReturn ) {
				return earlyReturn;
			}
		} else if ( variables.hasOwnProperty( term ) ) {
			value = variables[ term ];
		} else {
			value = +term;
		}

		stack.push( value );
	}

	return stack[ 0 ];
}

module.exports = evaluate;

},{}],30:[function(require,module,exports){
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var compile = _interopDefault(require('@tannin/compile'));

/**
 * Given a C expression, returns a function which, when called with a value,
 * evaluates the result with the value assumed to be the "n" variable of the
 * expression. The result will be coerced to its numeric equivalent.
 *
 * @param {string} expression C expression.
 *
 * @return {Function} Evaluator function.
 */
function pluralForms( expression ) {
	var evaluate = compile( expression );

	return function( n ) {
		return +evaluate( { n: n } );
	};
}

module.exports = pluralForms;

},{"@tannin/compile":28}],31:[function(require,module,exports){
'use strict';

var PRECEDENCE, OPENERS, TERMINATORS, PATTERN;

/**
 * Operator precedence mapping.
 *
 * @type {Object}
 */
PRECEDENCE = {
	'(': 9,
	'!': 8,
	'*': 7,
	'/': 7,
	'%': 7,
	'+': 6,
	'-': 6,
	'<': 5,
	'<=': 5,
	'>': 5,
	'>=': 5,
	'==': 4,
	'!=': 4,
	'&&': 3,
	'||': 2,
	'?': 1,
	'?:': 1,
};

/**
 * Characters which signal pair opening, to be terminated by terminators.
 *
 * @type {string[]}
 */
OPENERS = [ '(', '?' ];

/**
 * Characters which signal pair termination, the value an array with the
 * opener as its first member. The second member is an optional operator
 * replacement to push to the stack.
 *
 * @type {string[]}
 */
TERMINATORS = {
	')': [ '(' ],
	':': [ '?', '?:' ],
};

/**
 * Pattern matching operators and openers.
 *
 * @type {RegExp}
 */
PATTERN = /<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;

/**
 * Given a C expression, returns the equivalent postfix (Reverse Polish)
 * notation terms as an array.
 *
 * If a postfix string is desired, simply `.join( ' ' )` the result.
 *
 * @example
 *
 * ```js
 * import postfix from '@tannin/postfix';
 *
 * postfix( 'n > 1' );
 * // ⇒ [ 'n', '1', '>' ]
 * ```
 *
 * @param {string} expression C expression.
 *
 * @return {string[]} Postfix terms.
 */
function postfix( expression ) {
	var terms = [],
		stack = [],
		match, operator, term, element;

	while ( ( match = expression.match( PATTERN ) ) ) {
		operator = match[ 0 ];

		// Term is the string preceding the operator match. It may contain
		// whitespace, and may be empty (if operator is at beginning).
		term = expression.substr( 0, match.index ).trim();
		if ( term ) {
			terms.push( term );
		}

		while ( ( element = stack.pop() ) ) {
			if ( TERMINATORS[ operator ] ) {
				if ( TERMINATORS[ operator ][ 0 ] === element ) {
					// Substitution works here under assumption that because
					// the assigned operator will no longer be a terminator, it
					// will be pushed to the stack during the condition below.
					operator = TERMINATORS[ operator ][ 1 ] || operator;
					break;
				}
			} else if ( OPENERS.indexOf( element ) >= 0 || PRECEDENCE[ element ] < PRECEDENCE[ operator ] ) {
				// Push to stack if either an opener or when pop reveals an
				// element of lower precedence.
				stack.push( element );
				break;
			}

			// For each popped from stack, push to terms.
			terms.push( element );
		}

		if ( ! TERMINATORS[ operator ] ) {
			stack.push( operator );
		}

		// Slice matched fragment from expression to continue match.
		expression = expression.substr( match.index + operator.length );
	}

	// Push remainder of operand, if exists, to terms.
	expression = expression.trim();
	if ( expression ) {
		terms.push( expression );
	}

	// Pop remaining items from stack into terms.
	return terms.concat( stack.reverse() );
}

module.exports = postfix;

},{}],32:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createI18n = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _tannin = _interopRequireDefault(require("tannin"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * @typedef {Record<string,any>} LocaleData
 */

/**
 * Default locale data to use for Tannin domain when not otherwise provided.
 * Assumes an English plural forms expression.
 *
 * @type {LocaleData}
 */
var DEFAULT_LOCALE_DATA = {
  '': {
    /** @param {number} n */
    plural_forms: function plural_forms(n) {
      return n === 1 ? 0 : 1;
    }
  }
};
/**
 * An i18n instance
 *
 * @typedef {Object} I18n
 * @property {Function} setLocaleData Merges locale data into the Tannin instance by domain. Accepts data in a
 *                                    Jed-formatted JSON object shape.
 * @property {Function} __            Retrieve the translation of text.
 * @property {Function} _x            Retrieve translated string with gettext context.
 * @property {Function} _n            Translates and retrieves the singular or plural form based on the supplied
 *                                    number.
 * @property {Function} _nx           Translates and retrieves the singular or plural form based on the supplied
 *                                    number, with gettext context.
 * @property {Function} isRTL         Check if current locale is RTL.
 */

/**
 * Create an i18n instance
 *
 * @param {LocaleData} [initialData]    Locale data configuration.
 * @param {string}     [initialDomain]  Domain for which configuration applies.
 * @return {I18n}                       I18n instance
 */

var createI18n = function createI18n(initialData, initialDomain) {
  /**
   * The underlying instance of Tannin to which exported functions interface.
   *
   * @type {Tannin}
   */
  var tannin = new _tannin.default({});
  /**
   * Merges locale data into the Tannin instance by domain. Accepts data in a
   * Jed-formatted JSON object shape.
   *
   * @see http://messageformat.github.io/Jed/
   *
   * @param {LocaleData} [data]   Locale data configuration.
   * @param {string}     [domain] Domain for which configuration applies.
   */

  var setLocaleData = function setLocaleData(data) {
    var domain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
    tannin.data[domain] = _objectSpread({}, DEFAULT_LOCALE_DATA, {}, tannin.data[domain], {}, data); // Populate default domain configuration (supported locale date which omits
    // a plural forms expression).

    tannin.data[domain][''] = _objectSpread({}, DEFAULT_LOCALE_DATA[''], {}, tannin.data[domain]['']);
  };
  /**
   * Wrapper for Tannin's `dcnpgettext`. Populates default locale data if not
   * otherwise previously assigned.
   *
   * @param {string|undefined} domain   Domain to retrieve the translated text.
   * @param {string|undefined} context  Context information for the translators.
   * @param {string}           single   Text to translate if non-plural. Used as
   *                                    fallback return value on a caught error.
   * @param {string}           [plural] The text to be used if the number is
   *                                    plural.
   * @param {number}           [number] The number to compare against to use
   *                                    either the singular or plural form.
   *
   * @return {string} The translated string.
   */


  var dcnpgettext = function dcnpgettext() {
    var domain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
    var context = arguments.length > 1 ? arguments[1] : undefined;
    var single = arguments.length > 2 ? arguments[2] : undefined;
    var plural = arguments.length > 3 ? arguments[3] : undefined;
    var number = arguments.length > 4 ? arguments[4] : undefined;

    if (!tannin.data[domain]) {
      setLocaleData(undefined, domain);
    }

    return tannin.dcnpgettext(domain, context, single, plural, number);
  };
  /**
   * Retrieve the translation of text.
   *
   * @see https://developer.wordpress.org/reference/functions/__/
   *
   * @param {string} text     Text to translate.
   * @param {string} [domain] Domain to retrieve the translated text.
   *
   * @return {string} Translated text.
   */


  var __ = function __(text, domain) {
    return dcnpgettext(domain, undefined, text);
  };
  /**
   * Retrieve translated string with gettext context.
   *
   * @see https://developer.wordpress.org/reference/functions/_x/
   *
   * @param {string} text     Text to translate.
   * @param {string} context  Context information for the translators.
   * @param {string} [domain] Domain to retrieve the translated text.
   *
   * @return {string} Translated context string without pipe.
   */


  var _x = function _x(text, context, domain) {
    return dcnpgettext(domain, context, text);
  };
  /**
   * Translates and retrieves the singular or plural form based on the supplied
   * number.
   *
   * @see https://developer.wordpress.org/reference/functions/_n/
   *
   * @param {string} single   The text to be used if the number is singular.
   * @param {string} plural   The text to be used if the number is plural.
   * @param {number} number   The number to compare against to use either the
   *                          singular or plural form.
   * @param {string} [domain] Domain to retrieve the translated text.
   *
   * @return {string} The translated singular or plural form.
   */


  var _n = function _n(single, plural, number, domain) {
    return dcnpgettext(domain, undefined, single, plural, number);
  };
  /**
   * Translates and retrieves the singular or plural form based on the supplied
   * number, with gettext context.
   *
   * @see https://developer.wordpress.org/reference/functions/_nx/
   *
   * @param {string} single   The text to be used if the number is singular.
   * @param {string} plural   The text to be used if the number is plural.
   * @param {number} number   The number to compare against to use either the
   *                          singular or plural form.
   * @param {string} context  Context information for the translators.
   * @param {string} [domain] Domain to retrieve the translated text.
   *
   * @return {string} The translated singular or plural form.
   */


  var _nx = function _nx(single, plural, number, context, domain) {
    return dcnpgettext(domain, context, single, plural, number);
  };
  /**
   * Check if current locale is RTL.
   *
   * **RTL (Right To Left)** is a locale property indicating that text is written from right to left.
   * For example, the `he` locale (for Hebrew) specifies right-to-left. Arabic (ar) is another common
   * language written RTL. The opposite of RTL, LTR (Left To Right) is used in other languages,
   * including English (`en`, `en-US`, `en-GB`, etc.), Spanish (`es`), and French (`fr`).
   *
   * @return {boolean} Whether locale is RTL.
   */


  var isRTL = function isRTL() {
    return 'rtl' === _x('ltr', 'text direction');
  };

  if (initialData) {
    setLocaleData(initialData, initialDomain);
  }

  return {
    setLocaleData: setLocaleData,
    __: __,
    _x: _x,
    _n: _n,
    _nx: _nx,
    isRTL: isRTL
  };
};

exports.createI18n = createI18n;

},{"@babel/runtime/helpers/defineProperty":25,"@babel/runtime/helpers/interopRequireDefault":26,"tannin":39}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRTL = exports._nx = exports._n = exports._x = exports.__ = exports.setLocaleData = void 0;

var _createI18n = require("./create-i18n");

/**
 * Internal dependencies
 */
var i18n = (0, _createI18n.createI18n)();
/*
 * Comments in this file are duplicated from ./i18n due to
 * https://github.com/WordPress/gutenberg/pull/20318#issuecomment-590837722
 */

/**
 * @typedef {import('./create-i18n').LocaleData} LocaleData
 */

/**
 * Merges locale data into the Tannin instance by domain. Accepts data in a
 * Jed-formatted JSON object shape.
 *
 * @see http://messageformat.github.io/Jed/
 *
 * @param {LocaleData} [data]   Locale data configuration.
 * @param {string}     [domain] Domain for which configuration applies.
 */

var setLocaleData = i18n.setLocaleData.bind(i18n);
/**
 * Retrieve the translation of text.
 *
 * @see https://developer.wordpress.org/reference/functions/__/
 *
 * @param {string} text     Text to translate.
 * @param {string} [domain] Domain to retrieve the translated text.
 *
 * @return {string} Translated text.
 */

exports.setLocaleData = setLocaleData;

var __ = i18n.__.bind(i18n);
/**
 * Retrieve translated string with gettext context.
 *
 * @see https://developer.wordpress.org/reference/functions/_x/
 *
 * @param {string} text     Text to translate.
 * @param {string} context  Context information for the translators.
 * @param {string} [domain] Domain to retrieve the translated text.
 *
 * @return {string} Translated context string without pipe.
 */


exports.__ = __;

var _x = i18n._x.bind(i18n);
/**
 * Translates and retrieves the singular or plural form based on the supplied
 * number.
 *
 * @see https://developer.wordpress.org/reference/functions/_n/
 *
 * @param {string} single   The text to be used if the number is singular.
 * @param {string} plural   The text to be used if the number is plural.
 * @param {number} number   The number to compare against to use either the
 *                          singular or plural form.
 * @param {string} [domain] Domain to retrieve the translated text.
 *
 * @return {string} The translated singular or plural form.
 */


exports._x = _x;

var _n = i18n._n.bind(i18n);
/**
 * Translates and retrieves the singular or plural form based on the supplied
 * number, with gettext context.
 *
 * @see https://developer.wordpress.org/reference/functions/_nx/
 *
 * @param {string} single   The text to be used if the number is singular.
 * @param {string} plural   The text to be used if the number is plural.
 * @param {number} number   The number to compare against to use either the
 *                          singular or plural form.
 * @param {string} context  Context information for the translators.
 * @param {string} [domain] Domain to retrieve the translated text.
 *
 * @return {string} The translated singular or plural form.
 */


exports._n = _n;

var _nx = i18n._nx.bind(i18n);
/**
 * Check if current locale is RTL.
 *
 * **RTL (Right To Left)** is a locale property indicating that text is written from right to left.
 * For example, the `he` locale (for Hebrew) specifies right-to-left. Arabic (ar) is another common
 * language written RTL. The opposite of RTL, LTR (Left To Right) is used in other languages,
 * including English (`en`, `en-US`, `en-GB`, etc.), Spanish (`es`), and French (`fr`).
 *
 * @return {boolean} Whether locale is RTL.
 */


exports._nx = _nx;
var isRTL = i18n.isRTL.bind(i18n);
exports.isRTL = isRTL;

},{"./create-i18n":32}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  sprintf: true,
  setLocaleData: true,
  __: true,
  _x: true,
  _n: true,
  _nx: true,
  isRTL: true
};
Object.defineProperty(exports, "sprintf", {
  enumerable: true,
  get: function get() {
    return _sprintf.sprintf;
  }
});
Object.defineProperty(exports, "setLocaleData", {
  enumerable: true,
  get: function get() {
    return _defaultI18n.setLocaleData;
  }
});
Object.defineProperty(exports, "__", {
  enumerable: true,
  get: function get() {
    return _defaultI18n.__;
  }
});
Object.defineProperty(exports, "_x", {
  enumerable: true,
  get: function get() {
    return _defaultI18n._x;
  }
});
Object.defineProperty(exports, "_n", {
  enumerable: true,
  get: function get() {
    return _defaultI18n._n;
  }
});
Object.defineProperty(exports, "_nx", {
  enumerable: true,
  get: function get() {
    return _defaultI18n._nx;
  }
});
Object.defineProperty(exports, "isRTL", {
  enumerable: true,
  get: function get() {
    return _defaultI18n.isRTL;
  }
});

var _sprintf = require("./sprintf");

var _createI18n = require("./create-i18n");

Object.keys(_createI18n).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createI18n[key];
    }
  });
});

var _defaultI18n = require("./default-i18n");

},{"./create-i18n":32,"./default-i18n":33,"./sprintf":35}],35:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sprintf = sprintf;

var _memize = _interopRequireDefault(require("memize"));

var _sprintfJs = _interopRequireDefault(require("sprintf-js"));

/**
 * External dependencies
 */

/**
 * Log to console, once per message; or more precisely, per referentially equal
 * argument set. Because Jed throws errors, we log these to the console instead
 * to avoid crashing the application.
 *
 * @param {...*} args Arguments to pass to `console.error`
 */
var logErrorOnce = (0, _memize.default)(console.error); // eslint-disable-line no-console

/**
 * Returns a formatted string. If an error occurs in applying the format, the
 * original format string is returned.
 *
 * @param {string}    format The format of the string to generate.
 * @param {...*} args Arguments to apply to the format.
 *
 * @see http://www.diveintojavascript.com/projects/javascript-sprintf
 *
 * @return {string} The formatted string.
 */

function sprintf(format) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return _sprintfJs.default.sprintf.apply(_sprintfJs.default, [format].concat(args));
  } catch (error) {
    logErrorOnce('sprintf error: \n\n' + error.toString());
    return format;
  }
}

},{"@babel/runtime/helpers/interopRequireDefault":26,"memize":37,"sprintf-js":36}],36:[function(require,module,exports){
/* global window, exports, define */

!function() {
    'use strict'

    var re = {
        not_string: /[^s]/,
        not_bool: /[^t]/,
        not_type: /[^T]/,
        not_primitive: /[^v]/,
        number: /[diefg]/,
        numeric_arg: /[bcdiefguxX]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[+-]/
    }

    function sprintf(key) {
        // `arguments` is not an array, but should be fine for this call
        return sprintf_format(sprintf_parse(key), arguments)
    }

    function vsprintf(fmt, argv) {
        return sprintf.apply(null, [fmt].concat(argv || []))
    }

    function sprintf_format(parse_tree, argv) {
        var cursor = 1, tree_length = parse_tree.length, arg, output = '', i, k, ph, pad, pad_character, pad_length, is_positive, sign
        for (i = 0; i < tree_length; i++) {
            if (typeof parse_tree[i] === 'string') {
                output += parse_tree[i]
            }
            else if (typeof parse_tree[i] === 'object') {
                ph = parse_tree[i] // convenience purposes only
                if (ph.keys) { // keyword argument
                    arg = argv[cursor]
                    for (k = 0; k < ph.keys.length; k++) {
                        if (arg == undefined) {
                            throw new Error(sprintf('[sprintf] Cannot access property "%s" of undefined value "%s"', ph.keys[k], ph.keys[k-1]))
                        }
                        arg = arg[ph.keys[k]]
                    }
                }
                else if (ph.param_no) { // positional argument (explicit)
                    arg = argv[ph.param_no]
                }
                else { // positional argument (implicit)
                    arg = argv[cursor++]
                }

                if (re.not_type.test(ph.type) && re.not_primitive.test(ph.type) && arg instanceof Function) {
                    arg = arg()
                }

                if (re.numeric_arg.test(ph.type) && (typeof arg !== 'number' && isNaN(arg))) {
                    throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg))
                }

                if (re.number.test(ph.type)) {
                    is_positive = arg >= 0
                }

                switch (ph.type) {
                    case 'b':
                        arg = parseInt(arg, 10).toString(2)
                        break
                    case 'c':
                        arg = String.fromCharCode(parseInt(arg, 10))
                        break
                    case 'd':
                    case 'i':
                        arg = parseInt(arg, 10)
                        break
                    case 'j':
                        arg = JSON.stringify(arg, null, ph.width ? parseInt(ph.width) : 0)
                        break
                    case 'e':
                        arg = ph.precision ? parseFloat(arg).toExponential(ph.precision) : parseFloat(arg).toExponential()
                        break
                    case 'f':
                        arg = ph.precision ? parseFloat(arg).toFixed(ph.precision) : parseFloat(arg)
                        break
                    case 'g':
                        arg = ph.precision ? String(Number(arg.toPrecision(ph.precision))) : parseFloat(arg)
                        break
                    case 'o':
                        arg = (parseInt(arg, 10) >>> 0).toString(8)
                        break
                    case 's':
                        arg = String(arg)
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 't':
                        arg = String(!!arg)
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'T':
                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'u':
                        arg = parseInt(arg, 10) >>> 0
                        break
                    case 'v':
                        arg = arg.valueOf()
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'x':
                        arg = (parseInt(arg, 10) >>> 0).toString(16)
                        break
                    case 'X':
                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase()
                        break
                }
                if (re.json.test(ph.type)) {
                    output += arg
                }
                else {
                    if (re.number.test(ph.type) && (!is_positive || ph.sign)) {
                        sign = is_positive ? '+' : '-'
                        arg = arg.toString().replace(re.sign, '')
                    }
                    else {
                        sign = ''
                    }
                    pad_character = ph.pad_char ? ph.pad_char === '0' ? '0' : ph.pad_char.charAt(1) : ' '
                    pad_length = ph.width - (sign + arg).length
                    pad = ph.width ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : ''
                    output += ph.align ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg)
                }
            }
        }
        return output
    }

    var sprintf_cache = Object.create(null)

    function sprintf_parse(fmt) {
        if (sprintf_cache[fmt]) {
            return sprintf_cache[fmt]
        }

        var _fmt = fmt, match, parse_tree = [], arg_names = 0
        while (_fmt) {
            if ((match = re.text.exec(_fmt)) !== null) {
                parse_tree.push(match[0])
            }
            else if ((match = re.modulo.exec(_fmt)) !== null) {
                parse_tree.push('%')
            }
            else if ((match = re.placeholder.exec(_fmt)) !== null) {
                if (match[2]) {
                    arg_names |= 1
                    var field_list = [], replacement_field = match[2], field_match = []
                    if ((field_match = re.key.exec(replacement_field)) !== null) {
                        field_list.push(field_match[1])
                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else {
                                throw new SyntaxError('[sprintf] failed to parse named argument key')
                            }
                        }
                    }
                    else {
                        throw new SyntaxError('[sprintf] failed to parse named argument key')
                    }
                    match[2] = field_list
                }
                else {
                    arg_names |= 2
                }
                if (arg_names === 3) {
                    throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')
                }

                parse_tree.push(
                    {
                        placeholder: match[0],
                        param_no:    match[1],
                        keys:        match[2],
                        sign:        match[3],
                        pad_char:    match[4],
                        align:       match[5],
                        width:       match[6],
                        precision:   match[7],
                        type:        match[8]
                    }
                )
            }
            else {
                throw new SyntaxError('[sprintf] unexpected placeholder')
            }
            _fmt = _fmt.substring(match[0].length)
        }
        return sprintf_cache[fmt] = parse_tree
    }

    /**
     * export to either browser or node.js
     */
    /* eslint-disable quote-props */
    if (typeof exports !== 'undefined') {
        exports['sprintf'] = sprintf
        exports['vsprintf'] = vsprintf
    }
    if (typeof window !== 'undefined') {
        window['sprintf'] = sprintf
        window['vsprintf'] = vsprintf

        if (typeof define === 'function' && define['amd']) {
            define(function() {
                return {
                    'sprintf': sprintf,
                    'vsprintf': vsprintf
                }
            })
        }
    }
    /* eslint-enable quote-props */
}(); // eslint-disable-line

},{}],37:[function(require,module,exports){
(function (process){
/**
 * Memize options object.
 *
 * @typedef MemizeOptions
 *
 * @property {number} [maxSize] Maximum size of the cache.
 */

/**
 * Internal cache entry.
 *
 * @typedef MemizeCacheNode
 *
 * @property {?MemizeCacheNode|undefined} [prev] Previous node.
 * @property {?MemizeCacheNode|undefined} [next] Next node.
 * @property {Array<*>}                   args   Function arguments for cache
 *                                               entry.
 * @property {*}                          val    Function result.
 */

/**
 * Properties of the enhanced function for controlling cache.
 *
 * @typedef MemizeMemoizedFunction
 *
 * @property {()=>void} clear Clear the cache.
 */

/**
 * Accepts a function to be memoized, and returns a new memoized function, with
 * optional options.
 *
 * @template {Function} F
 *
 * @param {F}             fn        Function to memoize.
 * @param {MemizeOptions} [options] Options object.
 *
 * @return {F & MemizeMemoizedFunction} Memoized function.
 */
function memize( fn, options ) {
	var size = 0;

	/** @type {?MemizeCacheNode|undefined} */
	var head;

	/** @type {?MemizeCacheNode|undefined} */
	var tail;

	options = options || {};

	function memoized( /* ...args */ ) {
		var node = head,
			len = arguments.length,
			args, i;

		searchCache: while ( node ) {
			// Perform a shallow equality test to confirm that whether the node
			// under test is a candidate for the arguments passed. Two arrays
			// are shallowly equal if their length matches and each entry is
			// strictly equal between the two sets. Avoid abstracting to a
			// function which could incur an arguments leaking deoptimization.

			// Check whether node arguments match arguments length
			if ( node.args.length !== arguments.length ) {
				node = node.next;
				continue;
			}

			// Check whether node arguments match arguments values
			for ( i = 0; i < len; i++ ) {
				if ( node.args[ i ] !== arguments[ i ] ) {
					node = node.next;
					continue searchCache;
				}
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== head ) {
				// As tail, shift to previous. Must only shift if not also
				// head, since if both head and tail, there is no previous.
				if ( node === tail ) {
					tail = node.prev;
				}

				// Adjust siblings to point to each other. If node was tail,
				// this also handles new tail's empty `next` assignment.
				/** @type {MemizeCacheNode} */ ( node.prev ).next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = head;
				node.prev = null;
				/** @type {MemizeCacheNode} */ ( head ).prev = node;
				head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		// Create a copy of arguments (avoid leaking deoptimization)
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		node = {
			args: args,

			// Generate the result from original function
			val: fn.apply( null, args ),
		};

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( head ) {
			head.prev = node;
			node.next = head;
		} else {
			// If no head, follows that there's no tail (at initial or reset)
			tail = node;
		}

		// Trim tail if we're reached max size and are pending cache insertion
		if ( size === /** @type {MemizeOptions} */ ( options ).maxSize ) {
			tail = /** @type {MemizeCacheNode} */ ( tail ).prev;
			/** @type {MemizeCacheNode} */ ( tail ).next = null;
		} else {
			size++;
		}

		head = node;

		return node.val;
	}

	memoized.clear = function() {
		head = null;
		tail = null;
		size = 0;
	};

	if ( process.env.NODE_ENV === 'test' ) {
		// Cache is not exposed in the public API, but used in tests to ensure
		// expected list progression
		memoized.getCache = function() {
			return [ head, tail, size ];
		};
	}

	// Ignore reason: There's not a clear solution to create an intersection of
	// the function with additional properties, where the goal is to retain the
	// function signature of the incoming argument and add control properties
	// on the return value.

	// @ts-ignore
	return memoized;
}

module.exports = memize;

}).call(this,require('_process'))
},{"_process":38}],38:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
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
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
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
        runTimeout(drainQueue);
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
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],39:[function(require,module,exports){
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var pluralForms = _interopDefault(require('@tannin/plural-forms'));

/**
 * Tannin constructor options.
 *
 * @typedef {Object} TanninOptions
 *
 * @property {string}   [contextDelimiter] Joiner in string lookup with context.
 * @property {Function} [onMissingKey]     Callback to invoke when key missing.
 */

/**
 * Domain metadata.
 *
 * @typedef {Object} TanninDomainMetadata
 *
 * @property {string}            [domain]       Domain name.
 * @property {string}            [lang]         Language code.
 * @property {(string|Function)} [plural_forms] Plural forms expression or
 *                                              function evaluator.
 */

/**
 * Domain translation pair respectively representing the singular and plural
 * translation.
 *
 * @typedef {[string,string]} TanninTranslation
 */

/**
 * Locale data domain. The key is used as reference for lookup, the value an
 * array of two string entries respectively representing the singular and plural
 * translation.
 *
 * @typedef {{[key:string]:TanninDomainMetadata|TanninTranslation,'':TanninDomainMetadata|TanninTranslation}} TanninLocaleDomain
 */

/**
 * Jed-formatted locale data.
 *
 * @see http://messageformat.github.io/Jed/
 *
 * @typedef {{[domain:string]:TanninLocaleDomain}} TanninLocaleData
 */

/**
 * Default Tannin constructor options.
 *
 * @type {TanninOptions}
 */
var DEFAULT_OPTIONS = {
	contextDelimiter: '\u0004',
	onMissingKey: null,
};

/**
 * Given a specific locale data's config `plural_forms` value, returns the
 * expression.
 *
 * @example
 *
 * ```
 * getPluralExpression( 'nplurals=2; plural=(n != 1);' ) === '(n != 1)'
 * ```
 *
 * @param {string} pf Locale data plural forms.
 *
 * @return {string} Plural forms expression.
 */
function getPluralExpression( pf ) {
	var parts, i, part;

	parts = pf.split( ';' );

	for ( i = 0; i < parts.length; i++ ) {
		part = parts[ i ].trim();
		if ( part.indexOf( 'plural=' ) === 0 ) {
			return part.substr( 7 );
		}
	}
}

/**
 * Tannin constructor.
 *
 * @class
 *
 * @param {TanninLocaleData} data      Jed-formatted locale data.
 * @param {TanninOptions}    [options] Tannin options.
 */
function Tannin( data, options ) {
	var key;

	/**
	 * Jed-formatted locale data.
	 *
	 * @name Tannin#data
	 * @type {TanninLocaleData}
	 */
	this.data = data;

	/**
	 * Plural forms function cache, keyed by plural forms string.
	 *
	 * @name Tannin#pluralForms
	 * @type {Object<string,Function>}
	 */
	this.pluralForms = {};

	/**
	 * Effective options for instance, including defaults.
	 *
	 * @name Tannin#options
	 * @type {TanninOptions}
	 */
	this.options = {};

	for ( key in DEFAULT_OPTIONS ) {
		this.options[ key ] = options !== undefined && key in options
			? options[ key ]
			: DEFAULT_OPTIONS[ key ];
	}
}

/**
 * Returns the plural form index for the given domain and value.
 *
 * @param {string} domain Domain on which to calculate plural form.
 * @param {number} n      Value for which plural form is to be calculated.
 *
 * @return {number} Plural form index.
 */
Tannin.prototype.getPluralForm = function( domain, n ) {
	var getPluralForm = this.pluralForms[ domain ],
		config, plural, pf;

	if ( ! getPluralForm ) {
		config = this.data[ domain ][ '' ];

		pf = (
			config[ 'Plural-Forms' ] ||
			config[ 'plural-forms' ] ||
			// Ignore reason: As known, there's no way to document the empty
			// string property on a key to guarantee this as metadata.
			// @ts-ignore
			config.plural_forms
		);

		if ( typeof pf !== 'function' ) {
			plural = getPluralExpression(
				config[ 'Plural-Forms' ] ||
				config[ 'plural-forms' ] ||
				// Ignore reason: As known, there's no way to document the empty
				// string property on a key to guarantee this as metadata.
				// @ts-ignore
				config.plural_forms
			);

			pf = pluralForms( plural );
		}

		getPluralForm = this.pluralForms[ domain ] = pf;
	}

	return getPluralForm( n );
};

/**
 * Translate a string.
 *
 * @param {string}      domain   Translation domain.
 * @param {string|void} context  Context distinguishing terms of the same name.
 * @param {string}      singular Primary key for translation lookup.
 * @param {string=}     plural   Fallback value used for non-zero plural
 *                               form index.
 * @param {number=}     n        Value to use in calculating plural form.
 *
 * @return {string} Translated string.
 */
Tannin.prototype.dcnpgettext = function( domain, context, singular, plural, n ) {
	var index, key, entry;

	if ( n === undefined ) {
		// Default to singular.
		index = 0;
	} else {
		// Find index by evaluating plural form for value.
		index = this.getPluralForm( domain, n );
	}

	key = singular;

	// If provided, context is prepended to key with delimiter.
	if ( context ) {
		key = context + this.options.contextDelimiter + singular;
	}

	entry = this.data[ domain ][ key ];

	// Verify not only that entry exists, but that the intended index is within
	// range and non-empty.
	if ( entry && entry[ index ] ) {
		return entry[ index ];
	}

	if ( this.options.onMissingKey ) {
		this.options.onMissingKey( singular, domain );
	}

	// If entry not found, fall back to singular vs. plural with zero index
	// representing the singular value.
	return index === 0 ? singular : plural;
};

module.exports = Tannin;

},{"@tannin/plural-forms":30}]},{},[1]);
