import { browser } from "webextension-polyfill-ts"

(async () => {
  const blocklist = await browser.runtime.sendMessage({type: "retrieveBlocklist"})
  console.log(blocklist)
})()
