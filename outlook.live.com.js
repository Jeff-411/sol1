// outlook.live.com.js
// This file functions as the "main.js" script for
// the "Witchcraft: JS/CSS injector" Chrome extension, which
// uses the `// @include <path>` syntax to handle
// the modules in the `./script/` directory.

// IMPORTANT:
// Do not delete or uncomment `@include` statements!
// @include script/ui/ui.js
// @include script/utilities/index_utilities.js
// @include script/paneToggles/init_paneToggles.js
// @include script/features/init_features.js
// @include script/store/init_storage.js

const init = () => {
  try {
    init_paneToggles() // Add the Toggle triggers to the DOM, then
    hideAllTargets() // hide all the Toggle targets.
    init_features()
    init_storage()
    console.log('Initialization complete.')
  } catch (error) {
    console.error('Initialization failed:', error)
  }
}

const observeDOM = callback => {
  const observer = new MutationObserver((mutations, obs) => {
    const siteHeader = document.querySelector(SITE.SITE_HEADER)
    const ribbon = document.querySelector(SITE.RIBBON)
    const navpane = document.querySelector(SITE.NAVPANE)
    const leftRail = document.querySelector(SITE.LEFT_RAIL)

    if (siteHeader && ribbon && navpane && leftRail) {
      obs.disconnect()
      callback()
    }
  })

  observer.observe(document, {
    childList: true,
    subtree: true,
  })
}

observeDOM(init)
