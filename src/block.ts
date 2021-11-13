import { browser } from "webextension-polyfill-ts"

(async () => {
  const blocklistUrls: string[] = await browser.runtime.sendMessage({type: "retrieveBlocklist"})
  console.log(blocklistUrls)
  const searchResults = document.querySelectorAll(".g")
  searchResults.forEach(searchResult => {
    const h3 = searchResult.querySelector("a > h3")
    if (!h3) {
      return
    }
    const linkElement = h3.parentElement
    if (!linkElement) {
      return
    }
    const link = linkElement.getAttribute("href")
    if (!link) {
      return
    }
    const host = (new URL(link)).host.replace(/^www\./gi, "")
    if (blocklistUrls.includes(host)) {
      searchResult.remove()
    }
  })
})()
