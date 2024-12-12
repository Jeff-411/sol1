// IMPORTANT:
// Do not delete or uncomment these `@include` statements:
// @include script/paneToggles/insertTriggers.js
// @include script/paneToggles/listeners/addListeners.js

const init_paneToggles = () => {
  insertTriggers() // Add the Toggle triggers to the DOM.
  addListeners_triggers() // Add event listeners to the triggers.
  window.scrollTo(0, 0)
}
