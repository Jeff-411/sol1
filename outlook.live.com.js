// IMPORTANT:
// Do not delete or uncomment `@include` statements
// @include script/ui/ui.js
// @include script/utilities/index_utilities.js
// @include script/paneToggles/init_paneToggles.js
// @include script/features/init_features.js
// @include script/store/init_storage.js

const init = () => {
  init_paneToggles() // Add the Toggle triggers to the DOM, then
  hideAllTargets() // hide all the Toggle targets.
  init_features()
  init_storage()
}

const isloaded_site = setInterval(() => {
  let siteHeader = document.querySelector(SITE.SITE_HEADER)
  let ribbon = document.querySelector(SITE.RIBBON)
  let navpane = document.querySelector(SITE.NAVPANE)
  let leftRail = document.querySelector(SITE.LEFT_RAIL)

  if (siteHeader && ribbon && navpane && leftRail) {
    clearInterval(isloaded_site)
    init()
  }
  // debug
  else console.log(`isloaded_site => Trying again...`)
}, 100)
