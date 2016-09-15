/**!
 * pretty-focus - Custom CSS focus states for mouse/touch users while maintaining normal keyboard focus for accessibility.
 * @version {{ pkgVersion }}
 * Copyright (c) 2015 Mike Parsons
 * @license MIT
 */
(function(element) {
  'use strict';

  var inputType = 'mouse';
  var restrictedTypes = ['mouse', 'touch'];
  var restrictClass = 'focus-disabled';
  var interactLock = false;

  function interact(e) {
    if (!interactLock) {
      switch (e.type){
        case 'mousedown':
          interactLock = false;
          inputType = 'mouse';
          break;
        case 'touchstart':
          interactLock = true;
          inputType = 'touch';
          break;
        default:
        case 'keydown':
          inputType = 'keyboard';
          break;
      }
    }
  }

  function preFocus() {
    for (var i = 0; i < restrictedTypes.length; i++) {
      if (inputType === restrictedTypes[i]) {
        addClass(element, restrictClass);
        break;
      }
    }
  }

  function preBlur() {
    removeClass(element, restrictClass);
  }

  function hasClass(el, className) {
    return new RegExp(' ' + className + ' ').test(' ' + el.className + ' ');
  }

  function addClass(el, className) {
    if (!hasClass(el, className)) {
      el.className += ' ' + className;
    }
  }

  function removeClass(el, className) {
    var newClass = ' ' + el.className.replace(/[\t\r\n]/g, ' ') + ' ';
    if (hasClass(el, className)) {
      while (newClass.indexOf(' ' + className + ' ') >= 0) {
        newClass = newClass.replace(' ' + className + ' ', ' ');
      }
      el.className = newClass.replace(/^\s+|\s+$/g, '');
    }
  }

  function init() {
    element.addEventListener('mousedown', interact);
    element.addEventListener('touchstart', interact);
    element.addEventListener('keydown', interact);
    element.addEventListener('focus', preFocus, true);
    element.addEventListener('blur', preBlur, true);
  }

  init();

})(document.body);
