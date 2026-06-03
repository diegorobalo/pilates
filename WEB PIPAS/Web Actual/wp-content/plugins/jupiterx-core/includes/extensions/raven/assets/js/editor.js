(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var CustomCSS = function CustomCSS() {
  function customCSS() {
    var pageCSS = elementor.settings.page.model.get('raven_custom_css');

    if (pageCSS) {
      pageCSS = pageCSS.replace(/selector/g, '.elementor-page-' + elementor.config.document.id);
      elementor.settings.page.getControlsCSS().elements.$stylesheetElement.append(pageCSS);
    }
  }

  function init() {
    elementor.on('preview:loaded', customCSS);
    elementor.settings.page.model.on('change', customCSS);
  }

  return {
    init: init
  };
};

var _default = CustomCSS();

exports["default"] = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _i18n = require("@wordpress/i18n");

var $ = jQuery;

var sellkitPreview = function sellkitPreview() {
  function lock() {
    $('.raven-sellkit-widgets-preview').parent().parent().attr('draggable', false).css('cursor', 'pointer').addClass('raven-sellkit-preview-widget-parent');
  }

  function onTouch() {
    $(document).on('click', '.raven-sellkit-widgets-preview, #elementor-panel-header-menu-button, #elementor-panel-header-add-button', function () {
      lock();
    });
    elementor.elements.on('remove', function () {
      lock();
    });
    $(document).on('click mousedown', '.raven-sellkit-preview-widget-parent', function () {
      var Top = $(this).offset().top;
      var Left = $(this).offset().left;
      var widget = $(this).find('.title').text();
      var header = createHeader(widget);
      var body = createBody();
      var footer = createCtaButton();
      var theme = '';

      if ($('#elementor-editor-wrapper').hasClass('raven-icon-theme-light') || $('#elementor-editor-wrapper').hasClass('raven-icon-theme-auto')) {
        theme = 'jupiterx-sellkit-widgets-preview-dialog-white';
      } else {
        theme = 'jupiterx-sellkit-widgets-preview-dialog-dark';
      }

      $('#jupiterx-sellkit-widgets-preview-dialog').empty().append(header + body + footer).css({
        display: 'block',
        top: Top,
        left: Left + 135 + 'px'
      }).attr('class', theme);
    });
    $(document).on('click', '.sellkit-preview-close-dialog', function () {
      $('#jupiterx-sellkit-widgets-preview-dialog').css('display', 'none');
    });
    goInstallSellkit();
  }

  function createHeader(title) {
    var closeIcon = '<i class="eicon-close sellkit-preview-close-dialog"></i>';
    return '<div class="sellkit-widget-preview-header"><span>' + title + closeIcon + '</span></div>';
  }

  function createBody() {
    var bodyMessage = (0, _i18n.__)('This widget requires <b>Sellkit Pro</b> to be installed and activated.', 'jupiterx-core');
    return '<div class="sellkit-widget-preview-body">' + bodyMessage + '</div>';
  }

  function createCtaButton() {
    var button = '<button id="jupiterx-sellkit-widget-preview-install">' + (0, _i18n.__)('INSTALL SELLKIT PRO', 'jupiterx-core') + '</button>';
    return '<div class="sellkit-widget-preview-footer">' + button + '</div>';
  }

  function dialog() {
    $(document.body).append('<div id="jupiterx-sellkit-widgets-preview-dialog"></div>');
  }

  function goInstallSellkit() {
    $(document).on('click', '#jupiterx-sellkit-widget-preview-install', function () {
      window.open('admin.php?action-default=sellkit-pro&page=jupiterx#/bundled-plugins', '_blank');
    });
  }

  function forceUndraggAble() {
    var onceRun = setInterval(function () {
      if ($('.raven-sellkit-widgets-preview').length > 0) {
        lock();
        onTouch();
        dialog();
        clearInterval(onceRun);
      }
    }, 500);
  }

  function init() {
    if (elementor.config.jx_version >= '2.0.0') {
      elementor.on('panel:init', forceUndraggAble);
    }
  }

  return {
    init: init
  };
};

var _default = sellkitPreview();

exports["default"] = _default;

},{"@wordpress/i18n":27}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Templates = function Templates() {
  // Find Elementor library remote template and prepend Jupiter X badge.
  function prependBadge() {
    var templateRemote = jQuery('#tmpl-elementor-template-library-template-remote'),
        badgeHTML = "<# var ravenId = 'raven_' #>\n        <# if ( String( template_id ).substr( 0, ravenId.length ) === ravenId && typeof templatePro !== 'undefined' && templatePro ) { #>\n          <span class=\"raven-template-library-badge\">\n            Jupiter\n            <svg enable-background=\"new 0 0 20 19.1\" version=\"1.1\" viewBox=\"0 0 20 19.1\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\">\n              <style type=\"text/css\">.st0{fill:#FFFFFF;}</style>\n              <path class=\"st0\" d=\"m19.9 0.5c0.2-0.2 0.1-0.5-0.2-0.5h-2.9c-0.9 0-1.8 0.4-2.4 1.1l-4.2 5.1c-0.1 0.1-0.4 0.1-0.5 0l-4.2-5.1c-0.5-0.7-1.4-1.1-2.3-1.1h-2.9c-0.3 0-0.4 0.3-0.2 0.5l7.3 8.8c0.1 0.1 0.1 0.3 0 0.4l-7.3 8.8c-0.2 0.2 0 0.5 0.2 0.5h2.9c0.9 0 1.8-0.4 2.4-1.1l14.3-17.4zm-7 9.8-2.3 2.8v0.2l3.9 4.7c0.6 0.7 1.4 1.1 2.4 1.1h2.9c0.3 0 0.4-0.3 0.2-0.5l-6.8-8.3c-0.1-0.1-0.3-0.1-0.3 0z\"/>\n            </svg>\n          </span>\n        <# } else if ( String( template_id ).substr( 0, ravenId.length ) === ravenId && typeof templatePro !== 'undefined' && ! templatePro ) { #>\n          <span class=\"raven-template-library-badge raven-template-pro\">\n            <# if ( typeof jupiterxPremium !== 'undefined' ) { #>\n              Activate to Unlock\n            <# } else { #>\n              Upgrade to Unlock\n            <# } #>\n          </span>\n        <# } #>\n\t  ";
    var template = templateRemote.text();
    template = badgeHTML + template;
    templateRemote.text(template);
  } // Run final init when xhr/ajax action request is by getting the templates library data.


  function onRequestInit() {
    jQuery(document).ajaxComplete(function (event, request, settings) {
      if (typeof settings.data !== 'undefined' && settings.data.indexOf('get_library_data') !== -1 && settings.data.indexOf('action=elementor_ajax') !== -1) {
        setTimeout(actuallyInit, 100);
      }
    });
  }

  function actuallyInit() {
    var layout = elementor.templates.layout;

    if (typeof layout === 'undefined') {
      return;
    }

    var content = layout.modalContent; // Add Jupiter X filter button.

    function addFilter() {
      var filter = content.$el.find('#elementor-template-library-filter-toolbar-remote');

      if (!filter.length || filter.find('.raven-template-library-filter').length) {
        return;
      }

      filter.append("\n        <div class=\"raven-template-library-filter\">\n          <label class=\"raven-template-library-filter-button\">Jupiter X</label>\n        </div>\n      ");
      var button = filter.find('.raven-template-library-filter-button'),
          input = content.$el.find('#elementor-template-library-filter-text'),
          query = 'Jupiter X';
      var isFiltered = false;
      button.on('click', function () {
        isFiltered = !isFiltered;
        button.toggleClass('raven-template-library-filter-active', isFiltered);
        input.trigger('input');
      });
      input.on('input', function (event) {
        if (isFiltered) {
          event.stopPropagation();
          elementor.templates.setFilter('text', "".concat(query, " - ").concat(input.val()));
        }
      });
    } // Initially apply class on initial page display.


    addFilter();
    /**
     * Listen to whenever a library menu item is clicked.
     * Such as Blocks, Pages or My Templates.
     */

    content.listenTo(content, 'show', function () {
      // Whenever modal content is changing.
      addFilter();
    });
  }

  function goProButton() {
    elementor.hooks.addFilter('elementor/editor/template-library/template/action-button', function (viewId, data) {
      var ravenId = 'raven_';

      if (String(data.template_id).substr(0, ravenId.length) === ravenId && !data.templatePro) {
        return '#tmpl-elementor-template-library-get-raven-pro-button';
      }

      return viewId;
    }, 100);
  }

  function init() {
    elementor.on('document:loaded', function () {
      // eslint-disable-next-line no-undef
      if ($e.components.get('library').hasTab('library/templates')) {
        return;
      } // eslint-disable-next-line no-undef


      $e.components.get('library').addTab('library/templates', {
        title: 'Jupiter X',
        filter: {
          source: function source() {
            elementor.channels.templates.reply('filter:source', 'remote');
            return 'raven';
          },
          type: 'block'
        }
      }, 10);
    });
    prependBadge();
    goProButton();
    onRequestInit();
  }

  return {
    init: init
  };
};

var _default = Templates();

exports["default"] = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Checkbox = elementor.modules.controls.BaseData.extend({
  ui: function ui() {
    var ui = elementor.modules.controls.BaseData.prototype.ui.apply(this, arguments);
    ui.controlCheckbox = '.raven-control-checkbox';
    ui.mainInput = 'input[type=hidden]';
    return ui;
  },
  onReady: function onReady() {
    var self = this,
        initialValue = self.ui.mainInput.val() || '';
    var arr = initialValue.split(',');

    if (arr.length) {
      self.ui.controlCheckbox.each(function () {
        if (this.checked) {
          arr.push(this.value);
        }
      });
      arr = arr.filter(function (item, pos) {
        return arr.indexOf(item) === pos;
      });
      self.ui.mainInput.val(arr.join(','));
    }

    self.ui.controlCheckbox.on('click', function () {
      var oldVal = self.ui.mainInput.val() || '';
      var oldArr = oldVal.split(',');

      if (oldArr.length) {
        if (this.checked) {
          oldArr.push(this.value);
        } else {
          var index = oldArr.indexOf(this.value);
          oldArr.splice(index, 1);
        }

        self.ui.mainInput.val(oldArr.join(','));
        self.ui.mainInput.trigger('input');
      }
    });
  }
});
var _default = Checkbox;
exports["default"] = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var FileUploader = elementor.modules.controls.BaseMultiple.extend({
  ui: function ui() {
    var ui = elementor.modules.controls.BaseMultiple.prototype.ui.apply(this, arguments);
    ui.fileUploader = 'raven-control-file-uploader';
    ui.fileUploaderInput = '.raven-control-file-uploader-input';
    ui.fileUploaderBtn = '.raven-control-file-uploader-button';
    ui.fileUploaderValue = '.raven-control-file-uploader-value';
    ui.fileUploaderRemoveBtn = '.raven-control-file-uploader-value .fa';
    ui.fileUploaderProgress = '.raven-control-file-uploader-progress';
    ui.fileUploaderWarning = '.raven-control-file-uploader-warning';
    ui.fileUploaderSizeWarning = '.raven-control-file-uploader-warning-size';
    return ui;
  },
  events: function events() {
    return _.extend(elementor.modules.controls.BaseMultiple.prototype.events.apply(this, arguments), {
      'change @ui.fileUploaderInput': 'onFileInputChange',
      'click @ui.fileUploaderRemoveBtn': 'onFileRemove'
    });
  },
  onFileInputChange: function onFileInputChange(event) {
    var self = this;
    this.hideWarnings();

    if (event.target.files.length === 0) {
      return;
    }

    if (!this.checkFileSize(event.target.files[0])) {
      return;
    }

    var formData = new FormData();
    formData.append('action', 'raven_control_file_upload');
    formData.append('file', event.target.files[0]);
    this.showUploadProgress();
    jQuery.ajax(this.ui.fileUploaderInput.data('ajax-url'), {
      method: 'POST',
      processData: false,
      contentType: false,
      global: false,
      data: formData,
      success: function success(res) {
        if (res.success) {
          self.setValue('files', [res.data]);
          self.showFile(res.data.name);
        } else {
          self.ui.fileUploaderInput.val('');
          self.ui.fileUploaderWarning.find('ul').append("<li class=\"error\">".concat(res.data, "</li>"));
          self.ui.fileUploaderWarning.show();
          self.showUploadBtn();
        }
      },
      error: function error() {
        self.ui.fileUploaderInput.val('');
        self.ui.fileUploaderWarning.find('ul').append("<li class=\"error\">Something went wrong please try again.</li>");
        self.ui.fileUploaderWarning.show();
        self.showUploadBtn();
      }
    });
  },
  onFileRemove: function onFileRemove(event) {
    event.stopPropagation();
    this.setValue('files', []);
    this.ui.fileUploaderValue.hide();
    this.ui.fileUploaderBtn.show();
    this.ui.fileUploaderInput.val('');
  },
  hideWarnings: function hideWarnings() {
    this.ui.fileUploaderWarning.hide();
    this.ui.fileUploaderWarning.find('li').hide();
    this.ui.fileUploaderWarning.find('li.error').remove();
  },
  checkFileSize: function checkFileSize(file) {
    var uploadLimit = parseFloat(this.ui.fileUploaderInput.data('max-upload-limit'));

    if (file.size > uploadLimit) {
      this.ui.fileUploaderWarning.show();
      this.ui.fileUploaderSizeWarning.show();
      return false;
    }

    return true;
  },
  stripHash: function stripHash(filename) {
    var ext = filename.split('.').pop();
    var name = filename.replace('.' + ext, '');
    name = name.split('__').shift();
    return name + '.' + ext;
  },
  shortenFilename: function shortenFilename(filename) {
    return filename.length > 15 ? filename.substr(0, 15) + '...' : filename;
  },
  showFile: function showFile(filename) {
    this.ui.fileUploaderProgress.hide();
    this.ui.fileUploaderBtn.hide();
    filename = this.stripHash(filename);
    this.ui.fileUploaderValue.find('> span:first-child').attr('title', filename).text(this.shortenFilename(filename));
    this.ui.fileUploaderValue.css('display', 'flex');
  },
  showUploadBtn: function showUploadBtn() {
    this.ui.fileUploaderValue.hide();
    this.ui.fileUploaderProgress.hide();
    this.ui.fileUploaderBtn.show();
  },
  showUploadProgress: function showUploadProgress() {
    this.ui.fileUploaderValue.hide();
    this.ui.fileUploaderBtn.hide();
    this.ui.fileUploaderProgress.show();
  },
  onRender: function onRender() {
    _.extend(elementor.modules.controls.BaseMultiple.prototype.onRender.apply(this, arguments));

    var files = this.getControlValue('files');

    if (!files || files.length === 0) {
      return;
    }

    this.showFile(files[0].name);
  }
});
var _default = FileUploader;
exports["default"] = _default;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Media = elementor.modules.controls.Media.extend({
  ui: function ui() {
    var ui = elementor.modules.controls.BaseMultiple.prototype.ui.apply(this, arguments);
    ui.controlMedia = '.raven-control-media';
    ui.mediaInput = '.raven-control-media .elementor-input';
    ui.frameOpeners = '.raven-control-media-upload';
    return ui;
  },
  events: function events() {
    return _.extend(elementor.modules.controls.BaseMultiple.prototype.events.apply(this, arguments), {
      'click @ui.frameOpeners': 'openFrame'
    });
  },
  applySavedValue: function applySavedValue() {
    var url = this.getControlValue('url');
    this.ui.mediaInput.val(url);
  },
  initFrame: function initFrame() {
    this.frame = wp.media({
      button: {
        text: elementor.translate('insert_media')
      },
      states: [new wp.media.controller.Library({
        title: elementor.translate('insert_media'),
        library: wp.media.query(this.model.get('query')),
        multiple: false,
        date: false
      })]
    });
    this.frame.on('insert select', this.select.bind(this));
    this.frame.on('close', this.close.bind(this));
  },
  close: function close() {
    this.setValue({
      url: '',
      id: ''
    });
    this.render();
  }
});
var _default = Media;
exports["default"] = _default;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Presets = elementor.modules.controls.BaseData.extend({
  ui: function ui() {
    var ui = elementor.modules.controls.BaseMultiple.prototype.ui.apply(this, arguments);
    ui.presetItems = '.raven-element-presets';
    ui.presetItem = '.raven-element-presets-item';
    return ui;
  },
  events: function events() {
    return _.extend(elementor.modules.controls.BaseMultiple.prototype.events.apply(this, arguments), {
      'click @ui.presetItem ': 'onPresetClick'
    });
  },
  onReady: function onReady() {
    window.ravenPresets = window.ravenPresets || {};
    this.loadPresets(this.elementSettingsModel.get('widgetType'));
    elementor.channels.data.bind('raven:element:after:reset:style', this.onElementResetStyle.bind(this));
  },
  onElementResetStyle: function onElementResetStyle() {
    if (this.isRendered) {
      this.render();
    }
  },
  onPresetClick: function onPresetClick(e) {
    var $preset = $(e.currentTarget);
    $preset.siblings('.raven-element-presets-item').removeClass('active');
    $preset.addClass('active');

    var preset = _.find(this.getPresets(), {
      id: $preset.data('preset-id')
    });

    this.applyPreset(this.elementDefaultSettings(), preset);
    this.selectPreset(preset.id);
  },
  applyPreset: function applyPreset() {
    var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var preset = arguments.length > 1 ? arguments[1] : undefined;

    for (var setting in preset.widget.settings) {
      if (this.model.get('name') === setting) {
        continue;
      }

      var control = this.elementSettingsModel.controls[setting];

      if (typeof control === 'undefined') {
        continue;
      }

      if (control.is_repeater) {
        this.elementSettingsModel.get(setting).reset();
        settings[setting] = new window.Backbone.Collection(preset.widget.settings[setting], {
          model: _.partial(this.createRepeaterItemModel, _, _, this)
        });
        continue;
      }

      settings[setting] = preset.widget.settings[setting];
    }

    this.elementSettingsModel.set(settings);
  },
  createRepeaterItemModel: function createRepeaterItemModel(attrs, options, controlView) {
    options = options || {};
    options.controls = controlView.elementSettingsModel.get('fields');

    if (!attrs._id) {
      attrs._id = elementor.helpers.getUniqueID();
    }

    return new window.elementorModules.editor.elements.models.BaseSettings(attrs, options);
  },
  elementDefaultSettings: function elementDefaultSettings() {
    var self = this,
        controls = self.elementSettingsModel.controls,
        settings = {};
    jQuery.each(controls, function (controlName, control) {
      if (controlName === 'raven_presets') {
        return;
      }

      settings[controlName] = control["default"];
    });
    return settings;
  },
  loadPresets: function loadPresets(widget) {
    var _this = this;

    if (this.isPresetDataLoaded()) {
      if (this.getPresets().length === 0) {
        return;
      }

      this.insertPresets();

      if (this.ui.presetItem.length === 0) {
        this.render();
      }

      return;
    }

    this.ui.presetItems.addClass('loading');
    wp.ajax.post('raven_element_presets', {
      raven_element: widget
    }).done(function (data) {
      _this.ui.presetItems.removeClass('loading');

      _this.setPresets(data);

      _this.insertPresets();

      _this.render();
    }).fail(function () {
      _this.ui.presetItems.removeClass('loading');

      _this.setPresets([]);
    });
  },
  insertPresets: function insertPresets() {
    var value = this.getControlValue();
    this.setValue({
      selectedId: value ? value.selectedId : null,
      presets: this.getPresets()
    });
  },
  selectPreset: function selectPreset(id) {
    var value = this.getControlValue();
    value.selectedId = id;
    this.setValue(value);
  },
  getPresets: function getPresets() {
    if (!window.ravenPresets) {
      return [];
    }

    return window.ravenPresets[this.elementSettingsModel.get('widgetType')] || [];
  },
  setPresets: function setPresets(presets) {
    window.ravenPresets[this.elementSettingsModel.get('widgetType')] = presets;
  },
  isPresetDataLoaded: function isPresetDataLoaded() {
    if (window.ravenPresets[this.elementSettingsModel.get('widgetType')]) {
      return true;
    }

    return false;
  },
  onBeforeDestroy: function onBeforeDestroy() {
    elementor.channels.data.unbind('raven:element:after:reset:style');
  }
});
var _default = Presets;
exports["default"] = _default;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Query = elementor.modules.controls.Select2.extend({
  cache: null,
  isTitlesReceived: false,
  getSelect2Placeholder: function getSelect2Placeholder() {
    var text = '';

    if (this.model.get('select2options')) {
      text = this.model.get('select2options').placeholder;
    }

    return {
      id: '',
      text: text
    };
  },
  getSelect2DefaultOptions: function getSelect2DefaultOptions() {
    var self = this;
    return jQuery.extend(elementor.modules.controls.Select2.prototype.getSelect2DefaultOptions.apply(this, arguments), {
      ajax: {
        transport: _.debounce(function (params, success, failure) {
          var action = 'raven_control_query_autocomplete',
              query = _.extend({}, self.model.get('query') || {}),
              settings = self.container.model.get('settings');

          var ids = self.getControlValue() || [];

          if (!_.isArray(ids)) {
            ids = [ids];
          }

          var source = query.source,
              controlQuery = query.control_query;
          delete query.source;
          delete query.control_query;

          for (var key in controlQuery) {
            query[key] = settings.get(controlQuery[key]);
          }

          query.s = params.data.q;

          if (!_.isEmpty(ids)) {
            query.exclude = ids;
          }

          var data = {
            source: source,
            query: query
          };
          window.elementorCommon.ajax.addRequest(action, {
            data: data,
            success: success,
            error: failure
          });
        }, 500),
        cache: true
      },
      escapeMarkup: function escapeMarkup(markup) {
        return markup;
      },
      minimumInputLength: 1
    });
  },
  getValueTitles: function getValueTitles() {
    var self = this;
    var ids = self.getControlValue() || [];

    if (!ids || _.isArray(ids) && !ids.length) {
      return;
    } else if (!_.isArray(ids)) {
      ids = [ids];
    }

    var settings = self.container.model.get('settings'),
        query = _.extend({}, self.model.get('query') || {}),
        action = 'raven_control_query_autocomplete';

    var source = query.source,
        controlQuery = query.control_query;
    delete query.source;
    delete query.control_query;

    for (var key in controlQuery) {
      query[key] = settings.get(controlQuery[key]);
    }

    query.include = ids;
    var data = {
      source: source,
      query: query
    };
    window.elementorCommon.ajax.loadObjects({
      action: action,
      ids: ids,
      data: data,
      before: function before() {
        self.addControlSpinner();
      },
      success: function success(_ref) {
        var results = _ref.results;

        if (self.isDestroyed) {
          return;
        }

        var options = [];

        if (!_.isEmpty(results)) {
          results.forEach(function (item) {
            options[item.id] = item.text;
          });
        }

        self.isTitlesReceived = true;
        self.model.set('options', options);
        self.render();
      }
    });
  },
  addControlSpinner: function addControlSpinner() {
    this.ui.select.prop('disabled', true);
    this.$el.find('.elementor-control-title').after('<span class="elementor-control-spinner">&nbsp;<i class="eicon-spinner eicon-animation-spin"></i>&nbsp;</span>');
  },
  onReady: function onReady() {
    setTimeout(elementor.modules.controls.Select2.prototype.onReady.apply(this, arguments));

    if (!this.isTitlesReceived) {
      this.getValueTitles();
    }
  }
});
var _default = Query;
exports["default"] = _default;

},{}],9:[function(require,module,exports){
"use strict";

(function ($, window) {
  var RavenEditor = function RavenEditor() {
    var self = this;

    function initComponents() {
      var components = {
        templates: require('./components/templates')["default"],
        customCSS: require('./components/custom-css')["default"],
        sellkitPreview: require('./components/sellkit-preview')["default"]
      };

      for (var component in components) {
        components[component].init();
      }
    }

    function initControls() {
      self.controls = {
        media: require('./controls/media')["default"],
        checkbox: require('./controls/checkbox')["default"],
        file_uploader: require('./controls/file-uploader')["default"],
        presets: require('./controls/presets')["default"],
        query: require('./controls/query')["default"]
      };

      for (var control in self.controls) {
        elementor.addControlView("raven_".concat(control), self.controls[control]);
      }
    }

    function initWidgets() {
      var widgets = {
        'raven-form': require('./widgets/form')["default"],
        'raven-categories': require('./widgets/categories')["default"],
        'raven-posts': require('./widgets/posts')["default"],
        'raven-post-carousel': require('./widgets/posts')["default"]
      };

      for (var widget in widgets) {
        elementor.hooks.addAction("panel/open_editor/widget/".concat(widget), widgets[widget]);
      }
    }

    function initUtils() {
      self.utils = {
        Module: require('./utils/module')["default"],
        Form: require('./utils/form')["default"]
      };
    }

    function onElementorReady() {
      initComponents();
      initControls();
    }

    function onFrontendInit() {
      initWidgets();
    }

    function onPreviewLoaded() {
      initUtils();
      setWidgetsDarkIcon();
    }

    function onElementResetStyle(model) {
      if (model.get('elType') !== 'widget') {
        return;
      }

      resetElementPresets(model);
      elementor.channels.data.trigger('raven:element:after:reset:style', model);
    }

    function setWidgetsDarkIcon(value) {
      if (typeof elementor.settings.editorPreferences !== 'undefined') {
        $('#elementor-editor-wrapper').removeClass('raven-icon-theme-dark raven-icon-theme-light raven-icon-theme-auto');
        var uiTheme = typeof value !== 'undefined' ? value.attributes.ui_theme : elementor.settings.editorPreferences.model.get('ui_theme');
        $('#elementor-editor-wrapper').addClass('raven-icon-theme-' + uiTheme);
      }
    }

    function resetElementPresets(model) {
      var controls = model.get('settings').controls;

      if (!controls.raven_presets) {
        return;
      }

      model.setSetting('raven_presets', null);
    }

    function onElementorInit() {
      onElementorReady();
      elementor.on('frontend:init', onFrontendInit);
      elementor.on('preview:loaded', onPreviewLoaded);
      elementor.channels.data.bind('element:after:reset:style', onElementResetStyle);

      if (typeof elementor.settings.editorPreferences !== 'undefined') {
        elementor.settings.editorPreferences.model.on('change', setWidgetsDarkIcon);
      }
    }

    $(window).on('elementor:init', onElementorInit);
  };

  window.ravenEditor = new RavenEditor();
})(jQuery, window);

},{"./components/custom-css":1,"./components/sellkit-preview":2,"./components/templates":3,"./controls/checkbox":4,"./controls/file-uploader":5,"./controls/media":6,"./controls/presets":7,"./controls/query":8,"./utils/form":10,"./utils/module":11,"./widgets/categories":12,"./widgets/form":13,"./widgets/posts":18}],10:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _module = _interopRequireDefault(require("./module"));

var Form = _module["default"].extend({
  // TODO: Translation ready.
  selectOptions: {
    "default": {
      '': 'Select one'
    },
    fetching: {
      fetching: 'Fetching...'
    },
    noList: {
      no_list: 'No list found'
    }
  },
  action: null,
  onInit: function onInit() {
    var _this = this;

    elementor.channels.editor.on('section:activated', this.onSectionActivated);

    if (this.onElementChange) {
      elementor.channels.editor.on('change', function (controlView, elementView) {
        _this.onElementChange(controlView.model.get('name'), controlView, elementView);
      });
    }
  },
  updateList: function updateList(params) {
    var self = this; // Set fetching option.

    self.setOptions(this.selectOptions.fetching);
    self.setSelectedOption(); // Send AJAX request to fetch list.

    wp.ajax.send('raven_form_editor', {
      data: _.extend({}, {
        params: params
      }, {
        service: self.action,
        request: 'get_list'
      }),
      success: self.doSuccess
    });
  },
  updateFieldMapping: function updateFieldMapping() {
    var self = this;

    _.each(self.fields, function (field, fieldKey) {
      var control = self.getControl(fieldKey);
      var controlView = self.getControlView(fieldKey);
      var options = {};
      var fieldItems = self.getRepeaterItemsByLabel('fields', field.filter);

      _.extend(options, self.selectOptions["default"], fieldItems);

      self.setOptions(options, control, controlView);
    });
  },
  getListControl: function getListControl() {
    return this.getControl("".concat(this.action, "_list"));
  },
  getListControlView: function getListControlView() {
    return this.getControlView("".concat(this.action, "_list"));
  },
  setOptions: function setOptions(options) {
    var control = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var controlView = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    if (control === null) {
      control = this.getListControl();
      controlView = this.getListControlView();
    }

    control.set('options', options);
    controlView.render();
  },
  setSelectedOption: function setSelectedOption() {
    var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var controlView = this.getListControlView();
    controlView.$el.find('select').prop('selectedIndex', index);
  },
  getRepeaterItemsByLabel: function getRepeaterItemsByLabel(propertyName, filter) {
    var items = {};
    var fieldItems = this.getElementSettings(this.model, propertyName);

    _.filter(fieldItems, function (item) {
      if (filter && item.type !== filter) {
        return;
      }

      items[item._id] = item.type;

      if (item.placeholder) {
        items[item._id] = item.placeholder;
      }

      if (item.label) {
        items[item._id] = item.label;
      }
    });

    return items;
  }
});

var _default = Form;
exports["default"] = _default;

},{"./module":11,"@babel/runtime/helpers/interopRequireDefault":20}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Module = elementorModules.editor.utils.Module.extend({
  panel: null,
  getControl: function getControl(propertyName) {
    if (!this.panel) {
      return;
    }

    var control = this.panel.getCurrentPageView().collection.findWhere({
      name: propertyName
    });
    return control;
  },
  getControlView: function getControlView(propertyName) {
    if (!this.panel) {
      return;
    }

    var control = this.getControl(propertyName);
    var view = this.panel.getCurrentPageView().children.findByModelCid(control.cid);
    return view;
  },
  getControlValue: function getControlValue(id) {
    return this.getControlView(id).getControlValue();
  },
  addControlSpinner: function addControlSpinner(name) {
    var $el = this.getControlView(name).$el,
        $input = $el.find(':input');

    if ($input.attr('disabled') || $el.find('.elementor-control-spinner').length > 0) {
      return;
    }

    $input.attr('disabled', true);
    $el.find('.elementor-control-title').after('<span style="display:inline-flex" class="elementor-control-spinner"><span class="fa fa-spinner fa-spin"></span>&nbsp;</span>');
  },
  removeControlSpinner: function removeControlSpinner(name) {
    var $el = this.getControlView(name).$el;
    $el.find(':input').attr('disabled', false);
    $el.find('.elementor-control-spinner').remove();
  },
  getElementSettings: function getElementSettings(model, name) {
    if (!model) {
      return null;
    }

    var value = model.get('settings').get(name);
    return value instanceof window.Backbone.Collection ? value.toJSON() : value;
  }
});
var _default = Module;
exports["default"] = _default;

},{}],12:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _module = _interopRequireDefault(require("../utils/module"));

function _default(panel, model, view) {
  var Categories = _module["default"].extend({
    panel: panel,
    onInit: function onInit() {
      var self = this;
      self.doAjax();
      elementor.channels.editor.on('change', function (controlView) {
        self.onElementChange(controlView.model.get('name'));
      });
    },
    onElementChange: function onElementChange(propertyName) {
      if (propertyName !== 'source') {
        return;
      }

      var specificCategoriesControl = this.getControlView('specific_categories');
      specificCategoriesControl.setValue('');
      specificCategoriesControl.render();
      this.doAjax();
    },
    doAjax: function doAjax() {
      var self = this;
      wp.ajax.send('raven_categories_editor', {
        data: {
          post_type: self.getElementSettings(model, 'source')
        },
        success: self.onSuccess
      });
    },
    onSuccess: function onSuccess(response) {
      var _this = this;

      var options = {};
      var controlIds = ['specific_categories', 'exclude'];

      _.each(response, function (term) {
        options[term.term_id] = term.name;
      });

      _.each(controlIds, function (controlId) {
        var control = _this.getControl(controlId);

        var controlView = _this.getControlView(controlId);

        control.set('options', options);

        if (!controlView) {
          return;
        }

        controlView.render();
      });
    }
  });

  new Categories({
    $element: view.$el
  });
}

},{"../utils/module":11,"@babel/runtime/helpers/interopRequireDefault":20}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(panel, model, view) {
  var formActions = {
    mailchimp: require('./forms/mailchimp')["default"],
    activecampaign: require('./forms/activecampaign')["default"],
    hubspot: require('./forms/hubspot')["default"],
    email: require('./forms/email')["default"]
  };

  for (var action in formActions) {
    formActions[action](panel, model, view);
  }
}

},{"./forms/activecampaign":14,"./forms/email":15,"./forms/hubspot":16,"./forms/mailchimp":17}],14:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _form = _interopRequireDefault(require("../../utils/form"));

function _default(panel, model, view) {
  var ActiveCampaign = _form["default"].extend({
    panel: panel,
    model: model,
    action: 'activecampaign',
    remoteFields: [],
    onSectionActivated: function onSectionActivated(activeSection, section) {
      var _this = this;

      if (activeSection !== "section_".concat(this.action)) {
        return;
      }

      if (section.model.id !== model.get('id')) {
        return;
      }

      this.addControlSpinner('activecampaign_fields_mapping');
      this.updateList({
        activecampaign_api_key_source: this.getControlValue('activecampaign_api_key_source') || 'default',
        activecampaign_api_key: this.getControlValue('activecampaign_api_key'),
        activecampaign_api_url: this.getControlValue('activecampaign_api_url')
      });
      this.getControlView('activecampaign_fields_mapping').on('add:child', function () {
        _this.updateFieldMapping();
      });
    },
    updateFieldMapping: function updateFieldMapping() {
      var _this2 = this;

      var fieldsMapControlView = this.getControlView('activecampaign_fields_mapping');
      fieldsMapControlView.children.each(function (repeaterRow) {
        repeaterRow.children.each(function (repeaterRowField) {
          var fieldName = repeaterRowField.model.get('name');
          var fieldModel = repeaterRowField.model;

          if (fieldName === 'activecampaign_remote_field') {
            fieldModel.set('options', _this2.getRemoteFields());
          } else if (fieldName === 'activecampaign_local_field') {
            fieldModel.set('options', _this2.getFormFields());
          }

          repeaterRowField.render();
        });
      });
      this.removeControlSpinner('activecampaign_fields_mapping');
    },
    clearFieldMapping: function clearFieldMapping() {
      var fieldsMapControlView = this.getControlView('activecampaign_fields_mapping');
      fieldsMapControlView.collection.each(function (modelItem) {
        if (modelItem) {
          modelItem.destroy();
        }
      });
      fieldsMapControlView.render();
    },
    doSuccess: function doSuccess(response) {
      var self = this;
      var options = {};
      var lists = {};
      var activecampaignList = this.getElementSettings(this.model, "".concat(self.action, "_list"));

      if (response.success[0].lists.length === 0) {
        self.setOptions(this.selectOptions.noList);
        self.setSelectedOption();
        return;
      }

      _.each(response.success[0].lists, function (list) {
        lists[list.id] = list.name;
      });

      _.extend(options, {
        0: 'select one'
      }, lists);

      self.setOptions(options);

      if (!activecampaignList.length) {
        self.setSelectedOption();
      }

      this.remoteFields = response.success[0].fields;
      this.updateFieldMapping(this.remoteFields);
    },
    onElementChange: function onElementChange(setting) {
      if (setting === 'activecampaign_api_key_source' || setting === 'activecampaign_api_key' || setting === 'activecampaign_api_url') {
        this.updateList({
          activecampaign_api_key_source: this.getControlValue('activecampaign_api_key_source') || 'default',
          activecampaign_api_key: this.getControlValue('activecampaign_api_key'),
          activecampaign_api_url: this.getControlValue('activecampaign_api_url')
        });
      }

      if (setting === 'mailchimp_list') {
        this.clearFieldMapping();
        this.onListUpdate();
      }
    },
    getRemoteFields: function getRemoteFields() {
      return _.reduce(this.remoteFields, function (carry, remoteField) {
        carry[remoteField.remote_tag] = remoteField.remote_label;
        return carry;
      }, {
        '': '- None -'
      });
    },
    getFormFields: function getFormFields() {
      return _.extend({}, {
        '': '- None -'
      }, this.getRepeaterItemsByLabel('fields'));
    }
  });

  new ActiveCampaign({
    $element: view.$el
  });
}

},{"../../utils/form":10,"@babel/runtime/helpers/interopRequireDefault":20}],15:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _form = _interopRequireDefault(require("../../utils/form"));

function _default(panel, model, view) {
  var Email = _form["default"].extend({
    panel: panel,
    model: model,
    action: 'email',
    onSectionActivated: function onSectionActivated(activeSection, section) {
      if (activeSection !== "section_".concat(this.action)) {
        return;
      }

      if (section.model.id !== model.get('id')) {
        return;
      }

      var replyToOptionsControl = this.getControlView('email_reply_to_options');

      if (!replyToOptionsControl) {
        return;
      }

      replyToOptionsControl.model.set('options', this.getEmailFields());
      replyToOptionsControl.render();
    },
    getEmailFields: function getEmailFields() {
      return _.extend({}, {
        custom: 'Custom'
      }, this.getRepeaterItemsByLabel('fields', 'email'));
    }
  });

  new Email({
    $element: view.$el
  });
}

},{"../../utils/form":10,"@babel/runtime/helpers/interopRequireDefault":20}],16:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _module = _interopRequireDefault(require("./../../utils/module"));

function _default(panel, model, view) {
  var Hubspot = _module["default"].extend({
    panel: panel,
    action: 'hubspot',
    onInit: function onInit() {
      elementor.channels.editor.on('section:activated', this.onSectionActivated.bind(this));
    },
    onSectionActivated: function onSectionActivated(activeSection, section) {
      var _this = this;

      if (section.model.id !== model.get('id')) {
        return;
      }

      if (activeSection !== "section_".concat(this.action)) {
        return;
      }

      this.updateFieldMapping();
      this.getControlView('hubspot_mapping').on('add:child', function () {
        _this.updateFieldMapping();
      });
    },
    updateFieldMapping: function updateFieldMapping() {
      var _this2 = this;

      var fieldsMapControlView = this.getControlView('hubspot_mapping');
      fieldsMapControlView.children.each(function (repeaterRow) {
        repeaterRow.children.each(function (repeaterRowField) {
          var fieldName = repeaterRowField.model.get('name');
          var fieldModel = repeaterRowField.model;

          if (fieldName === 'hubspot_local_form_field') {
            fieldModel.set('options', _this2.getFormFields());
          }

          repeaterRowField.render();
        });
      });
    },
    getRepeaterItemsByLabel: function getRepeaterItemsByLabel(propertyName, filter) {
      var items = {};
      var fieldItems = this.getElementSettings(model, propertyName);

      _.filter(fieldItems, function (item) {
        if (filter && item.type !== filter) {
          return;
        }

        items[item._id] = item.label;
      });

      return items;
    },
    getFormFields: function getFormFields() {
      return _.extend({}, {
        '': '- None -'
      }, this.getRepeaterItemsByLabel('fields'));
    }
  });

  new Hubspot({
    $element: view.$el
  });
}

},{"./../../utils/module":11,"@babel/runtime/helpers/interopRequireDefault":20}],17:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _form = _interopRequireDefault(require("../../utils/form"));

function _default(panel, model, view) {
  var Mailchimp = _form["default"].extend({
    panel: panel,
    model: model,
    action: 'mailchimp',
    remoteFields: [],
    onSectionActivated: function onSectionActivated(activeSection, section) {
      var _this = this;

      if (activeSection !== "section_".concat(this.action)) {
        return;
      }

      if (section.model.id !== model.get('id')) {
        return;
      }

      this.addControlSpinner('mailchimp_fields_mapping');
      this.addControlSpinner('mailchimp_groups');
      this.updateList({
        mailchimp_api_key_source: this.getControlValue('mailchimp_api_key_source') || 'default',
        mailchimp_api_key: this.getControlValue('mailchimp_api_key')
      });
      this.getControlView('mailchimp_fields_mapping').on('add:child', function () {
        _this.updateFieldMapping();
      });
    },
    updateFieldMapping: function updateFieldMapping() {
      var _this2 = this;

      var fieldsMapControlView = this.getControlView('mailchimp_fields_mapping');
      fieldsMapControlView.children.each(function (repeaterRow) {
        repeaterRow.children.each(function (repeaterRowField) {
          var fieldName = repeaterRowField.model.get('name');
          var fieldModel = repeaterRowField.model;

          if (fieldName === 'mailchimp_remote_field') {
            fieldModel.set('options', _this2.getRemoteFields());
          } else if (fieldName === 'mailchimp_local_field') {
            fieldModel.set('options', _this2.getFormFields());
          }

          repeaterRowField.render();
        });
      });
    },
    clearFieldMapping: function clearFieldMapping() {
      var fieldsMapControlView = this.getControlView('mailchimp_fields_mapping');
      fieldsMapControlView.collection.each(function (modelItem) {
        if (modelItem) {
          modelItem.destroy();
        }
      });
      fieldsMapControlView.render();
    },
    doSuccess: function doSuccess(response) {
      var self = this;
      var options = {};
      var lists = {};
      var mailchimpList = this.getElementSettings(this.model, "".concat(self.action, "_list"));

      if (response.success[0].lists.length === 0) {
        self.setOptions(this.selectOptions.noList);
        self.setSelectedOption();
        return;
      }

      _.each(response.success[0].lists, function (list) {
        lists[list.id] = list.name;
      });

      _.extend(options, self.selectOptions["default"], lists);

      self.setOptions(options);

      if (!mailchimpList.length) {
        self.setSelectedOption();
      }

      this.onListUpdate();
    },
    onElementChange: function onElementChange(setting) {
      switch (setting) {
        case 'mailchimp_api_key_source':
        case 'mailchimp_api_key':
          this.unselectGroups();
          this.updateGroupOptions({});
          this.updateList({
            mailchimp_api_key_source: this.getControlValue('mailchimp_api_key_source') || 'default',
            mailchimp_api_key: this.getControlValue('mailchimp_api_key')
          });
          break;

        case 'mailchimp_list':
          this.clearFieldMapping();
          this.unselectGroups();
          this.onListUpdate();
          break;
      }
    },
    onListUpdate: function onListUpdate() {
      var _this3 = this;

      this.updateGroupOptions(this.selectOptions.fetching);
      this.addControlSpinner('mailchimp_fields_mapping');
      this.addControlSpinner('mailchimp_groups');
      wp.ajax.send('raven_form_editor', {
        data: {
          service: this.action,
          request: 'get_list_details',
          params: {
            mailchimp_api_key_source: this.getControlValue('mailchimp_api_key_source') || 'default',
            mailchimp_api_key: this.getControlValue('mailchimp_api_key'),
            mailchimp_list: this.getControlValue('mailchimp_list')
          }
        },
        success: function success(response) {
          _this3.updateGroupOptions(response.success[0].list_details.groups);

          _this3.remoteFields = response.success[0].list_details.fields;

          _this3.updateFieldMapping(_this3.remoteFields);

          _this3.removeControlSpinner('mailchimp_fields_mapping');

          _this3.removeControlSpinner('mailchimp_groups');
        }
      });
    },
    updateGroupOptions: function updateGroupOptions(groups) {
      var control = this.getControl('mailchimp_groups');
      var controlView = this.getControlView('mailchimp_groups');
      this.setOptions(groups, control, controlView);
    },
    getRemoteFields: function getRemoteFields() {
      return _.reduce(this.remoteFields, function (carry, remoteField) {
        carry[remoteField.remote_tag] = remoteField.remote_label;
        return carry;
      }, {
        '': '- None -'
      });
    },
    getFormFields: function getFormFields() {
      return _.extend({}, {
        '': '- None -'
      }, this.getRepeaterItemsByLabel('fields'));
    },
    unselectGroups: function unselectGroups() {
      var controlView = this.getControlView('mailchimp_groups');
      controlView.setValue('');
      controlView.render();
    }
  });

  new Mailchimp({
    $element: view.$el
  });
}

},{"../../utils/form":10,"@babel/runtime/helpers/interopRequireDefault":20}],18:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _module = _interopRequireDefault(require("../utils/module"));

function _default(panel, model, view) {
  var Posts = _module["default"].extend({
    panel: panel,
    onInit: function onInit() {
      var _this = this;

      if (this.onElementChange) {
        elementor.channels.editor.on('change', function (controlView) {
          _this.onElementChange(controlView.model.get('name'), controlView);
        });
      }
    },
    onElementChange: function onElementChange(name, controlView) {
      switch (name) {
        case 'query_post_type':
          this.onQueryPostTypeChange(controlView);
          break;
      }
    },
    onQueryPostTypeChange: function onQueryPostTypeChange(controlView) {
      controlView.container.settings.set('query_excludes_ids', []);
    }
  });

  new Posts({
    $element: view.$el
  });
}

},{"../utils/module":11,"@babel/runtime/helpers/interopRequireDefault":20}],19:[function(require,module,exports){
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
},{}],20:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],21:[function(require,module,exports){
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

},{"@tannin/evaluate":22,"@tannin/postfix":24}],22:[function(require,module,exports){
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

},{}],23:[function(require,module,exports){
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

},{"@tannin/compile":21}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
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

},{"@babel/runtime/helpers/defineProperty":19,"@babel/runtime/helpers/interopRequireDefault":20,"tannin":32}],26:[function(require,module,exports){
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

},{"./create-i18n":25}],27:[function(require,module,exports){
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

},{"./create-i18n":25,"./default-i18n":26,"./sprintf":28}],28:[function(require,module,exports){
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

},{"@babel/runtime/helpers/interopRequireDefault":20,"memize":30,"sprintf-js":29}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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
},{"_process":31}],31:[function(require,module,exports){
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

},{}],32:[function(require,module,exports){
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

},{"@tannin/plural-forms":23}]},{},[9]);
