# Stackovershits
Google search cleaner for shitty stackoverflow clones

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


# TODO
- [ ] Fix page jumping on removing results
