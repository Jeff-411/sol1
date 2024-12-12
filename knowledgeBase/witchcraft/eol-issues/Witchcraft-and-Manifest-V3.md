# What is Chrome's manifest V3 manifest

Exported on 11/12/2024 at 11:31:52 [from Perplexity.ai](https://www.perplexity.ai/search/what-is-chrome-s-manifest-v3-m-AyhizXuvQUKs3CTY13Wtvw) - with [SaveMyChatbot](https://save.hugocollin.com)

## User

What is Chrome's manifest V3 manifest

## AI answer

Chrome's Manifest V3 is the latest extension platform for Chromium-based browsers, representing a significant overhaul of the architecture and policies governing browser extensions [3](https://www.xda-developers.com/google-chrome-manifest-v3-ad-blockers/). It is an application programming interface (API) that Google will use in its popular browser, Chrome, replacing the current Manifest V2 [1](https://nordvpn.com/blog/manifest-v3-ad-blockers/). Key aspects of Manifest V3 include:

1.  Security and privacy enhancements:

    - Removal of support for remotely hosted code [2](https://www.theverge.com/2024/5/30/24168057/google-chrome-extension-change-manifest-v3-ad-blockers)
    - More restrictive permission models [3](https://www.xda-developers.com/google-chrome-manifest-v3-ad-blockers/)
    - Explicit declarations of website access for extensions [3](https://www.xda-developers.com/google-chrome-manifest-v3-ad-blockers/)

2.  Performance improvements:

    - Replacement of background pages with service workers [4](https://learn.microsoft.com/sk-sk/microsoft-edge/extensions-chromium/developer-guide/manifest-v3)
    - Changes to how extensions handle network requests [3](https://www.xda-developers.com/google-chrome-manifest-v3-ad-blockers/)

3.  API changes:

    - Introduction of the declarativeNetRequest API to replace the webRequest API [3](https://www.xda-developers.com/google-chrome-manifest-v3-ad-blockers/)
    - Addition of support for Promises in many methods [4](https://learn.microsoft.com/sk-sk/microsoft-edge/extensions-chromium/developer-guide/manifest-v3)

The transition to Manifest V3 has been ongoing since 2018, with the official rollout beginning in January 2023 [1](https://nordvpn.com/blog/manifest-v3-ad-blockers/). Google plans to phase out Manifest V2 support completely, with the stable version of Chrome scheduled for changes in early 2025 [2](https://www.theverge.com/2024/5/30/24168057/google-chrome-extension-change-manifest-v3-ad-blockers). While Google claims Manifest V3 will improve security, privacy, and performance, it has sparked controversy due to concerns about its potential impact on ad-blocking extensions [2](https://www.theverge.com/2024/5/30/24168057/google-chrome-extension-change-manifest-v3-ad-blockers) [5](https://www.techradar.com/pro/how-chromes-manifest-v3-will-change-the-game-for-ad-blockers). However, Google has been working to address these concerns by introducing features like user scripts and expanding the number of rulesets for the declarativeNetRequest API [2](https://www.theverge.com/2024/5/30/24168057/google-chrome-extension-change-manifest-v3-ad-blockers).

---

**Sources:**

- [(1) Is Google's Manifest V3 the end of ad blockers? - NordVPN](https://nordvpn.com/blog/manifest-v3-ad-blockers/)
- [(2) Google will roll out Chrome's new extension spec next week](https://www.theverge.com/2024/5/30/24168057/google-chrome-extension-change-manifest-v3-ad-blockers)
- [(3) Google Chrome is switching to Manifest V3, but what does that ...](https://www.xda-developers.com/google-chrome-manifest-v3-ad-blockers/)
- [(4) Overview and timelines for migrating to Manifest V3 - Microsoft Edge ...](https://learn.microsoft.com/sk-sk/microsoft-edge/extensions-chromium/developer-guide/manifest-v3)
- [(5) How Chrome's Manifest V3 will change the game for ad blockers](https://www.techradar.com/pro/how-chromes-manifest-v3-will-change-the-game-for-ad-blockers)
- [(6) Migrate to Manifest V3 | Chrome Extensions](https://developer.chrome.com/docs/extensions/develop/migrate)
- [(7) Manifest v3 Discussion and Impact on AdBlockers : r/chrome - Reddit](https://www.reddit.com/r/chrome/comments/11peeuw/manifest_v3_discussion_and_impact_on_adblockers/)
- [(8) Chrome's Manifest V3, and its changes for ad blocking, are coming ...](https://arstechnica.com/gadgets/2024/08/chromes-manifest-v3-and-its-changes-for-ad-blocking-are-coming-real-soon/)

## User

Do the Brave and Vivaldi browsers intend to implement Chrome's Manifest V3

## AI answer

Both Brave and Vivaldi have addressed concerns about Chrome's Manifest V3 implementation and its potential impact on ad-blocking capabilities. Here's how each browser plans to handle Manifest V3:

## Brave's Approach

Brave has taken steps to ensure that its ad-blocking capabilities will not be affected by Manifest V3:

1.  Built-in ad blocker: Brave's native ad-blocking functionality is not dependent on extensions, so it will continue to work regardless of Manifest V3 changes [1](https://www.reddit.com/r/brave_browser/comments/xp5ik1/rest_assured_googles_manifest_v3_will_not_impact/).
2.  Support for Manifest V2 extensions: Brave has stated that it will continue to support Manifest V2 extensions, including popular ad blockers like uBlock Origin, even after Chrome stops supporting them [3](https://www.ghacks.net/2022/09/29/brave-browser-manifest-v2-extensions-after-v3-update/).
3.  Custom implementation: Brave has implemented a custom ad blocker written in Rust, which is not limited by the same restrictions as extension-based ad blockers [3](https://www.ghacks.net/2022/09/29/brave-browser-manifest-v2-extensions-after-v3-update/).

## Vivaldi's Strategy

Vivaldi has also prepared for the Manifest V3 transition:

1.  Built-in ad blocker: Like Brave, Vivaldi has its own built-in ad and tracker blocker that is not dependent on Chrome's extension architecture [2](https://vivaldi.com/blog/manifest-v3-update-vivaldi-is-future-proofed-with-its-built-in-functionality/).
2.  Continued support for Manifest V2: Vivaldi plans to keep supporting Manifest V2 for as long as it's available in Chromium, potentially until June 2025 [2](https://vivaldi.com/blog/manifest-v3-update-vivaldi-is-future-proofed-with-its-built-in-functionality/).
3.  Architectural choices: Vivaldi's developers made early architectural decisions that should keep their ad-blocking functionality working regardless of Manifest V3 changes [4](https://vivaldi.com/blog/manifest-v3-webrequest-and-ad-blockers/).

Both browsers have emphasized their commitment to maintaining robust ad-blocking capabilities, even if it means deviating from Chromium's implementation. They plan to remove restrictions added by Google and explore options to support existing ad-blocking extensions [4](https://vivaldi.com/blog/manifest-v3-webrequest-and-ad-blockers/) [5](https://www.ghacks.net/2022/09/24/vivaldi-ad-blocker-manifest-v3/). While both Brave and Vivaldi will likely implement some aspects of Manifest V3 to maintain compatibility with the Chromium base, they are prioritizing user choice and privacy by ensuring that effective ad-blocking remains a core feature of their browsers.

---

**Sources:**

- [(1) Is Google's Manifest V3 the end of ad blockers? - NordVPN](https://nordvpn.com/blog/manifest-v3-ad-blockers/)
- [(2) Google will roll out Chrome's new extension spec next week](https://www.theverge.com/2024/5/30/24168057/google-chrome-extension-change-manifest-v3-ad-blockers)
- [(3) Google Chrome is switching to Manifest V3, but what does that ...](https://www.xda-developers.com/google-chrome-manifest-v3-ad-blockers/)
- [(4) Overview and timelines for migrating to Manifest V3 - Microsoft Edge ...](https://learn.microsoft.com/sk-sk/microsoft-edge/extensions-chromium/developer-guide/manifest-v3)
- [(5) How Chrome's Manifest V3 will change the game for ad blockers](https://www.techradar.com/pro/how-chromes-manifest-v3-will-change-the-game-for-ad-blockers)
- [(6) Migrate to Manifest V3 | Chrome Extensions](https://developer.chrome.com/docs/extensions/develop/migrate)
- [(7) Manifest v3 Discussion and Impact on AdBlockers : r/chrome - Reddit](https://www.reddit.com/r/chrome/comments/11peeuw/manifest_v3_discussion_and_impact_on_adblockers/)
- [(8) Chrome's Manifest V3, and its changes for ad blocking, are coming ...](https://arstechnica.com/gadgets/2024/08/chromes-manifest-v3-and-its-changes-for-ad-blocking-are-coming-real-soon/)

## User

I am using the "Witchcraft: JS/CSS injector" (https://chromewebstore.google.com/detail/witchcraft-jscss-injector/hokcepcfcicnhalinladgknhaljndhpc) extension which is not compatible with Manifest V3. How long can I expect to keep using this extension in my Brave and Vivaldi browsers?

## AI answer

Based on the information provided, you can expect to continue using the "Witchcraft: JS/CSS injector" extension in Brave and Vivaldi browsers for the foreseeable future, at least until June 2025. Here's a breakdown for each browser:

## Brave Browser

Brave has committed to supporting Manifest V2 extensions even after Chrome stops doing so [4](https://www.ghacks.net/2022/09/29/brave-browser-manifest-v2-extensions-after-v3-update/). While they haven't provided a specific end date, they have indicated a willingness to maintain support for popular Manifest V2 extensions like uBlock Origin. This suggests that other Manifest V2 extensions, such as Witchcraft, may also continue to function in Brave beyond Chrome's cutoff date.

## Vivaldi Browser

Vivaldi has explicitly stated that they will continue to support Manifest V2 extensions as long as it's available in Chromium [3](https://vivaldi.com/blog/manifest-v3-update-vivaldi-is-future-proofed-with-its-built-in-functionality/). They expect to maintain support until June 2025, though they've noted that this timeline could potentially be extended or shortened depending on the nature of changes to the Chromium code. It's important to note that both browsers are taking steps to ensure continued functionality of ad-blocking and privacy-enhancing features, which bodes well for extensions like Witchcraft that modify webpage content:

1.  Brave has implemented a custom ad blocker written in Rust, which is not limited by Manifest V3 restrictions [4](https://www.ghacks.net/2022/09/29/brave-browser-manifest-v2-extensions-after-v3-update/).
2.  Vivaldi has built-in tracker and ad-blocking functionality that doesn't depend on Chrome's extension architecture [3](https://vivaldi.com/blog/manifest-v3-update-vivaldi-is-future-proofed-with-its-built-in-functionality/).

While the long-term future of Manifest V2 extensions remains uncertain beyond June 2025, both Brave and Vivaldi have demonstrated a commitment to maintaining user choice and functionality. This suggests that you should be able to continue using the Witchcraft extension in these browsers for at least another year and a half, if not longer.

---

**Sources:**

- [(1) Google's Manifest v3 will NOT impact Brave's ad blocking ability.](https://www.reddit.com/r/brave_browser/comments/xp5ik1/rest_assured_googles_manifest_v3_will_not_impact/)
- [(2) Manifest v3 update: Vivaldi is future-proofed with its built-in ...](https://vivaldi.com/blog/manifest-v3-update-vivaldi-is-future-proofed-with-its-built-in-functionality/)
- [(3) Brave browser will support Manifest V2 extensions after ... - gHacks](https://www.ghacks.net/2022/09/29/brave-browser-manifest-v2-extensions-after-v3-update/)
- [(4) Manifest v3, webRequest, and ad blockers | Vivaldi Browser](https://vivaldi.com/blog/manifest-v3-webrequest-and-ad-blockers/)
- [(5) Vivaldi says its ad blocker will continue working even after changes ...](https://www.ghacks.net/2022/09/24/vivaldi-ad-blocker-manifest-v3/)
