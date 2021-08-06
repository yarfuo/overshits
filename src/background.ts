import { browser } from "webextension-polyfill-ts"

const BLOCKLIST_URL = "https://raw.githubusercontent.com/yarfuo/overshits/main/blocklist.txt"

async function retrieveBlacklist() {
  const response = await fetch(BLOCKLIST_URL)
  const text = await response.text()
  return text.split("\n").filter(it => {
    it = it.trim()
    return it.length > 0 && !it.startsWith("#")
  })
}


(async() => {
  const urls = await retrieveBlacklist()
  browser.runtime.onMessage.addListener(async message => {
    if (message.type == "retrieveBlocklist") {
      return urls
    }

    return
  })
})()
