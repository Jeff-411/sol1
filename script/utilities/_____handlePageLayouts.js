const observeReadPage = () => {
  // let testLoaded = setInterval(() => {
  //   // let targ = document.querySelector('.g_zET .wide-content-host')
  //   let targ = document.querySelector('.Vm3e5.L8m1x.pinIo')
  //   if (targ) {
  //     // clearInterval(testLoaded)
  //     console.log(`targ.offsetHeight`, targ.offsetHeight)
  //   } else console.log(`observeReadPage > Trying again...`)
  // }, 100)
}

const handlePageLayouts = () => {
  let count = 0

  const observer = new MutationObserver(() => {
    // If the Read page is present in the DOM
    if (document.querySelector(ui_read.page)) {
      console.log(`Read page loaded`)

      observeReadPage()
      if (count > 0) return

      hideAllTargets()

      // readPage_setLayout() ///////////////////////////////////////

      count++
    } else count = 0

    // If the Write page is present in the DOM
    if (document.querySelector(ui_write.page)) {
      console.log(`Write page loaded`)
    }

    // If the Inbox page is present in the DOM
    if (!document.querySelector(ui_read.page) && !document.querySelector(ui_write.page)) {
      hideAllTargets()

      console.log(`Inbox page loaded`)
    }
  })

  observer.observe(setTargetToObserve(), { childList: true })

  /** Helper ______________________________________________
   *  This func's not really needed, but may help handle
   *  Outlook updates.
   *
   *  The target's *current* selector is .nbmyu.FkPdL.czwRD.LCprM
   *  But this may not be the case tomorrow!
   *
   *  Outlook.live changes its class names quite frequently.
   *  So, it sometimes helps to use a more stable selector,
   *  like an aria-label.
   *
   *  In this case we start with the aria-label of the
   *  target's 1st child - then work back upwards to get
   *  the classList of the 1st child's parent (i.e. our target).
   */
  function setTargetToObserve() {
    // create a string to hold the target's selector
    targSelector = ''

    // get the target's class names
    let targClasses = Array.from(
      document.querySelector('[aria-label="Message list"]').parentElement.classList
    )

    // add each class name to the selector
    targClasses.forEach((classname, i) => {
      i < targClasses.length ? (targSelector += `.${classname}`) : (targSelector += classname)
    })

    // get and return the target
    let target = document.querySelector(targSelector)
    return target
  }
}
