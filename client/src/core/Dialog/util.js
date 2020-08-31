/**
 * This is code for dialog a11y adapted from the `micromodal` lib
 * Here it is on Github: https://github.com/ghosh/micromodal
 * Here it is on NPM: https://www.npmjs.com/package/micromodal
 * 
 * What's adapted from there is the focus retention technique necessary for dialog accessibility, in
 * which you have to make sure the focus is locked to components inside the dialog component and is
 * unable to reach elements outside of its scope, as this would be confusing and potentially prevent
 * the user from being able to see which element is in focus (for Tab-based navigation, for example).
 */

const FOCUSABLE_SELECTORS = [
  'a[href]',
  'area[href]',
  'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
  'select:not([disabled]):not([aria-hidden])',
  'textarea:not([disabled]):not([aria-hidden])',
  'button:not([disabled]):not([aria-hidden])',
  'iframe',
  'object',
  'embed',
  '[contenteditable]',
  '[tabindex]:not([tabindex^="-"])'
];

const TAB_KEYCODE = 9;

let dialogElement;

function focusOnNextFocusable(event){

  if (event.keyCode !== TAB_KEYCODE) return;

  event.preventDefault();

  const focusable = Array.from(dialogElement.querySelectorAll(FOCUSABLE_SELECTORS));

  if (focusable.length === 0) return;

  const currentFocusIdx = focusable.indexOf(document.activeElement);

  if (currentFocusIdx === -1)
    focusable[0].focus();
  else {

    const delta = event.shiftKey ? -1 : 1;

    let nextElementIdx = currentFocusIdx + delta;

    if (nextElementIdx < 0)
      nextElementIdx = event.shiftKey ? focusable.length - 1 : 0;
    if (nextElementIdx >= focusable.length)
      nextElementIdx %= focusable.length;
    
    focusable[nextElementIdx].focus();
    
  }

}

// This function is used as an effect for the component taking its ref element
export function lockFocusOnDialog(element){

  dialogElement = element;

  window.addEventListener("keydown", focusOnNextFocusable);

  return function cleanupListeners(){
    window.removeEventListener("keydown", focusOnNextFocusable);
  };

}