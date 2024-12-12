# See Outlook Live (SOL)

**version: 0.0.1**

## Description

The **See Outlook Live** app injects code into **Outlook online websites** to make them more visually-accessible for persons with visual disabilities, seniors, and others with low or deteriorating vision.

## Knowledge base

### Outlook online

You can access the outer html of a typical **Outlook online website** (i.e. an `outlook.live.com/` website) [here](./knowledgeBase/outlookLive/outlook-live_outer-html.html).

### Code injection

**SOL** uses the **Witchcraft: JS/CSS injector** Chrome extension [[^]](https://chromewebstore.google.com/detail/witchcraft-jscss-injector/hokcepcfcicnhalinladgknhaljndhpc) to inject JavaScript and CSS code into `outlook.live.com/` sites.

#### Witchcraft extension details:

- **GitHub repo:** [[^]](https://github.com/luciopaiva/witchcraft)

- **Usage, installation, and FAQS:**
  - Visit the **Witchcraft** [website](https://luciopaiva.com/witchcraft/), or
  - Check out the **SOL** `./knowledgeBase/` for html-only versions of the website's [usage](./knowledgeBase/witchcraft/website/Witchcraft_Javascript-and-CSS-injector.html), [installation](./knowledgeBase/witchcraft/website/Witchcraft_How-to-install-and-use.html), and [FAQS](./knowledgeBase/witchcraft/website/Witchcraft_Frequently-asked-questions.html) pages.
- **Installation note:** The **Web Server Chrome** app is no longer available. Use **Simple Web Server**[[^]](https://simplewebserver.org/) instead.
- **EOL Issues:** The **Witchcraft** extension will not be supported by **Chrome's** Manifest V3. You can get more info on issues, workarounds and options [here](./knowledgeBase/witchcraft/eol-issues/Witchcraft-and-Manifest-V3.md).

## Tasks

Current development priorities include:

### 1. Cleaning up the code

1. making the code more stylistically consistent:
   - [ ] JavaScript
   - [ ] SCSS
2. making the code more readable and maintainable:
   - [ ] JavaScript
   - [ ] SCSS

### 2. Automating maintenance tasks

- [ ] automate the handling of **Outlook** updates.
- ???

### 3. Replacing the Witchcraft extension

There is a strong possibility that **Witchcraft** will not [survive](./dev_resources/Witchcraft%20and%20Manifest%20v3.md) Chrome's full rollout Manifest V3, and action needs to be taken to:

- [ ] identify **Witchcraft** replacement options
- [ ] evaluate replacement options
- [ ] select a replacement
- [ ] update **See Outlook Live** to work with the selected replacement
