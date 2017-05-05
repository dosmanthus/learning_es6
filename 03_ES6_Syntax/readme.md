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

## Template strings

```
function print(firstName){
  console.log(`Hello, ${firstName}`)
}

print("Peyton");
```

```
function createEmail(firstName, purchasePrice) {
  var shipping = 150;
  console.log(
    `hi ${firstName}, Thanks for buying from us!
      Total: $${purchasePrice}
      Shipping: $${shipping}
      Grand Total: $${purchasePrice + shipping}
    `
  )
}

createEmail('Peyton', 3500);
```

output:

```
hi Peyton, Thanks for buying from us!
      Total: $3500
      Shipping: $150
      Grand Total: $3650
```

## Spread operators (展開運算子)

展開運算子是"把一個陣列展開(expand)成個別數值"的速寫語法。

```
var cats = ["Tabby", "Siamese", "Persian"]
var dogs = ["Golden Retriever", "Pug", "Schnauzer"]

var animals = ["Whale", "Giraffe", cats, "Snake", dogs, "Coyote"]

console.log(animals)

// (6) ["Whale", "Giraffe", Array(3), "Snake", Array(3), "Coyote"]
```

Using spread operators:

```
var animals = ["Whale", "Giraffe", ...cats, "Snake", ...dogs, "Coyote"]

// (10) ["Whale", "Giraffe", "Tabby", "Siamese", "Persian", "Snake", "Golden Retriever", "Pug", "Schnauzer", "Coyote"]
```

### Rest parameters(其餘參數)

和 Spread operators 使用同樣的符號，Spread Operator 是把一個陣列展開成個別的數值，而 Rest parameters 是集合(collect)個別的參數成為數值陣列。

```
function sum(…numbers) {
  var result = 0;
  numbers.forEach(function (number) {
    result += number;
  });
  return result;
}
console.log(sum(1)); // 1
console.log(sum(1, 2, 3, 4, 5)); // 15
```

其餘參數(Rest parameters)有一個限制，就是這個參數一定是函式的"最後一個"。

參考：
[展開運算子(Spread Operator)與其餘參數(Rest parameters)](http://eddychang.me/blog/16-javascript/45-spread-operator-rest-parameters.html)