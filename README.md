<header style="text-align: center">

# Stackovershits
Google search cleaner for shitty stackoverflow clones

<a href="https://chrome.google.com/webstore/detail/stackovershits/idcideoaglaophnpmbdckpfjplaamaip?hl=ru&authuser=0">
    <img src="https://img.shields.io/chrome-web-store/v/idcideoaglaophnpmbdckpfjplaamaip" alt="chrome store" />
</a>
<a href="https://addons.mozilla.org/en-US/firefox/addon/stackovershits/">
    <img src="https://img.shields.io/amo/v/stackovershits" alt="mozilla addon">
</a>

</header>


# Why?
There is already working solutions like [this](https://github.com/iorate/uBlacklist#uBlacklist) and there is not only
one.
I just wanted to create "install and forget" self updating extension specifically for stackovershits.

# How to build from source?
You should to have already installed NodeJS. Try to check out [nvm](https://github.com/nvm-sh/nvm).
```bash
yarn
yarn build-release
```
Unsigned zip extension should be at `./build/`. If you want to sign extension manually with CLI, check out official
web-ext [documentation](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/).
