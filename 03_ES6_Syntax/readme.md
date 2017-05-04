# ES6 Syntax

## Let keyword

let 允許你去宣告只能在目前區塊、階段或表達式中作用的變數，不像 var 關鍵字，它定義了一個全域的變數，或是在整個 function 而不管區塊範圍。

```
var x = 10;

if (x) {
  var x = 4;
}

console.log(x)

# => 4
```

using let:

```
var x = 10;

if (x) {
  let x =4;
}

console.log(x)

# => 10
```

[範例檔案](./let.html)


參考： [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/let)

## Const keyword

 The value of a constant cannot change through re-assignment, and it can't be redeclared.

```
const MY_AGE = 27;

MY_AGE = 20; // this will throw an error

console.log('my age is: ' + MY_AGE); // => 27
```

參考： [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/const)