### How to get ESLint to work for `vue`


1. `ESLint` VS Code Extension (run once)
2. `npm init`
3. `npm install -g eslint` (run once)
4. `eslint --init`
    * Which framework does your project use? Vue.js

```
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-plugin-vue@latest eslint@latest
? Would you like to install them now with npm? Yes
Installing eslint-plugin-vue@latest, eslint@latest
```

### Other

* As I am using vue via script linked in the html, my `script.js` does have lot of `unused` variables and `Vue` itself is not defined
  * disables via options
* For usage of Vue in node.js with a build process, normally this should work - not known yet. Options to investigate:
  * Vue CLI
  * Nuxt.js https://nuxtjs.org/


