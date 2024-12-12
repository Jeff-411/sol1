// IMPORTANT: Do not delete or uncomment `@include` statements
// @include script/store/userPreferences.js
// @include script/store/handleLocalStorage.js
// @include script/store/clearStorage.js
// ============================================================

let debug = false

const init_storage = () => {
  debug ? clearStorage() : handleLocalStorage(userPreferences)
}
