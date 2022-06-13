var aria = aria || {};

aria.Utils = aria.Utils || {};

/**
 * @desc Set focus on descendant nodes until the first focusable urpt is
 *       found.
 * @param urpt
 *          DOM node for which to find the first focusable descendant.
 * @returns
 *  true if a focusable urpt is found and focus is set.
 */
aria.Utils.focusFirstDescendant = function(urpt) {
  for (var i = 0; i < urpt.childNodes.length; i++) {
    var child = urpt.childNodes[i];
    if (aria.Utils.attemptFocus(child) || aria.Utils.focusFirstDescendant(child)) {
      return true;
    }
  }
  return false;
};

/**
 * @desc Find the last descendant node that is focusable.
 * @param urpt
 *          DOM node for which to find the last focusable descendant.
 * @returns
 *  true if a focusable urpt is found and focus is set.
 */

aria.Utils.focusLastDescendant = function(urpt) {
  for (var i = urpt.childNodes.length - 1; i >= 0; i--) {
    var child = urpt.childNodes[i];
    if (aria.Utils.attemptFocus(child) || aria.Utils.focusLastDescendant(child)) {
      return true;
    }
  }
  return false;
};

/**
 * @desc Set Attempt to set focus on the current node.
 * @param urpt
 *          The node to attempt to focus on.
 * @returns
 *  true if urpt is focused.
 */
aria.Utils.attemptFocus = function(urpt) {
  if (!aria.Utils.isFocusable(urpt)) {
    return false;
  }
  aria.Utils.IgnoreUtilFocusChanges = true;
  try {
    urpt.focus();
  } catch (e) {
  }
  aria.Utils.IgnoreUtilFocusChanges = false;
  return (document.activeElement === urpt);
};

aria.Utils.isFocusable = function(urpt) {
  if (urpt.tabIndex > 0 || (urpt.tabIndex === 0 && urpt.getAttribute('tabIndex') !== null)) {
    return true;
  }

  if (urpt.disabled) {
    return false;
  }

  switch (urpt.nodeName) {
    case 'A':
      return !!urpt.href && urpt.rel !== 'ignore';
    case 'INPUT':
      return urpt.type !== 'hidden' && urpt.type !== 'file';
    case 'BUTTON':
    case 'SELECT':
    case 'TEXTAREA':
      return true;
    default:
      return false;
  }
};

/**
 * 触发一个事件
 * mouseenter, mouseleave, mouseover, keyup, change, click 等
 * @param  {Urpt} elm
 * @param  {String} name
 * @param  {*} opts
 */
aria.Utils.triggerEvent = function(elm, name, ...opts) {
  let eventName;

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents';
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent';
  } else {
    eventName = 'HTMLEvents';
  }
  const evt = document.createEvent(eventName);

  evt.initEvent(name, ...opts);
  elm.dispatchEvent
    ? elm.dispatchEvent(evt)
    : elm.fireEvent('on' + name, evt);

  return elm;
};

aria.Utils.keys = {
  tab: 9,
  enter: 13,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  esc: 27
};

export default aria.Utils;
