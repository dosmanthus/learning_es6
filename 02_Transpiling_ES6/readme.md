# Introduction to Babel

[Babel.js](https://babeljs.io/)
- ES6 code in -> ES5 code out
- Created by Sebastian McKenzie
- Used frequently with React

## [In-browser Babel transpiling](./02_01_in_browser_babel_transpiling)
導入 cdnjs 的 babel-core，並將 type="text/javascript" 改爲 type="text/babel"。

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.9/browser.js"></script>

<script type="text/babel">
  ...
</script>
```

註：目前已有很多瀏覽器支援，以Chrome版本 58.0.3029.81 (64-bit)測試，可直接執行。

## [Transpiling ES6 with Babel and babel-node](./02_02_transpiling_es6_with_babel_and_babel_node)

- install node

```
$ brew install node
```

- create package.json

```
$ npm init
```

- install dependences

```
$ npm install babel-cli babel-preset-env --save-dev

# --save-dev: add to package.json file as development dependences
```

- Create .babelrc configuration file

```
# .babelrc
{
  "presets": ["env"]
}
```

-source folder and distribution folder
```
root
  - src
    |- script.js
  - dist
```

- modify package.json

```
{
  "name": "02_02_transpiling_es6_with_babel_and_babel_node",
  "version": "1.0.0",
  "description": "",
  "main": "script.js",
  "scripts": {
    "build": "babel src -d dist"
  },
  "script": {
    "build": "babel --preset env src -d dist"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.24.1",
    "babel-preset-env": "^1.4.0"
  }
}

```

- use babel

```
$ npm run build
```

參考：
- [Using Babel](https://babeljs.io/docs/setup/#installation)
- [Traversy Media - Compile ES6 With Babel](https://www.youtube.com/watch?v=sZ0z7B7QmjI)