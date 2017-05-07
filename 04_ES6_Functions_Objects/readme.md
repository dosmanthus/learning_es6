# ES6 Functions and Objects

## Default function parameters

```
function haveFun(activityName="hiking", time=3) {
  console.log(`Today I will go ${activityName} for ${time} hours`)
}

haveFun();
// Today I will go hiking for 3 hours
```

## Enhancing object literals

ES6提供Object 定義的縮寫語法:

- 定義方法時可省略 "function" keyword。

舊語法：

```
var cat = {
  meow: function(times) {
    console.log(Array(times+1).join("meow"))
  },
  purr: function(times) {
    console.log(Array(times+1).join("purr"))
  },
  snore: function(times) {
    console.log(Array(times+1).join("snore"))
  }
}

cat.meow(3);
cat.purr(4);
cat.snore(5);
```

ES6:

```
var cat = {
  meow(times) {
    console.log("meow".repeat(times))
  },
  purr(times) {
    console.log("purr".repeat(times))
  },
  snore(times) {
    console.log("snore".repeat(times))
  }
}

cat.meow(3);
cat.purr(4);
cat.snore(5);
```

- 定義屬性時，如果值和名稱相同，可省略值。

舊語法：

```
function foo(a, b) {
    return {result: 'success', a: a, b: b}
}

var a = 'foo', b = 42, c = {}
var o = { a: a, b: b, c: c }
```

ES6:

```
function foo(a, b) {
    return {result: 'success', a, b}
}

var a = 'foo', b = 42, c = {}
var o = { a, b, c }
```

參考： [Object Enhancement(物件的增強)](http://ithelp.ithome.com.tw/articles/10185842)

## Arrow functions(=>)

```
var studentList = function(students) {
  console.log(students);
};

studentList(["Mary", "Joe", "Peter"]);
```

with array function:

```
var studentList = students => console.log(students);
studentList(["Mary", "Joe", "Peter"]);
```

## Arrow functions and the 'this' scope

```
var person = {
  first: "Doug",
  actions: ['bike', 'hike', 'ski', 'surf'],
  printActions() {
    this.actions.forEach(function(action) {
      var string = this.first + " likes to " + action;
      console.log(string)
    });
  }
};

person.printActions();
// undefined likes to bike
// undefined likes to hike
// undefined likes to ski
// undefined likes to surf
```

解決方法1:

```
var person = {
  first: "Doug",
  actions: ['bike', 'hike', 'ski', 'surf'],
  printActions() {
    var _this = this;
    this.actions.forEach(function(action) {
      var string = _this.first + " likes to " + action;
      console.log(string)
    });
  }
};
```

解決方法2:

```
var person = {
  first: "Doug",
  actions: ['bike', 'hike', 'ski', 'surf'],
  printActions() {
    this.actions.forEach(function(action) {
      var string = this.first + " likes to " + action;
      console.log(string)
    }.bind(this));
  }
};
```

解決方法3, Array function:

```
var person = {
  first: "Doug",
  actions: ['bike', 'hike', 'ski', 'surf'],
  printActions() {
    this.actions.forEach(action => {
      var string = this.first + " likes to " + action;
      console.log(string)
    });
  }
};
```

## Destructuring assignment (結構賦值)

將陣列或物件中的資料取出成獨立變數。

```
var cities = ['Taipei', 'New Taipei City', 'Taichung', 'Kaohsiung', 'Keelung']

// 陣列分離
var [first, fourth] = ['Taipei', 'New Taipei City', 'Taichung', 'Kaohsiung', 'Keelung']

console.log(first);
console.log(fourth);
// Taipei
// New Taipei City

// 忽略某些回傳值
var [first,,, fourth,] = ['Taipei', 'New Taipei City', 'Taichung', 'Kaohsiung', 'Keelung']

console.log(first);
console.log(fourth);
// Taipei
// Kaohsiung
```

### 物件分離

```
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true
```

```
var {title, price} = {
  title: "Reuben",
  price: 7,
  description: "Cleveland's favorite sandwich"
};

console.log(title); // Reuben
console.log(price); // 7
```

```
var vacation = {
  destination: "Chile",
  traveler: 2,
  activity: "skiing",
  cost: 4000
};

function vacationMarketing({destination, activity}) {
  return `Come to ${destination} and do some ${activity}`
};

vacationMarketing(vacation);
// {destination, activity} = vacation
```

參考： [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Generators

宣告語法：

```
function* generatorFoo() {
    // ...
}
```

一般的function一旦執行，就會一直執行到結束。而 generators 函式不同在可以被暫停，重啟。


```
function foo() {
    for (var i=0; i<=1E10; i++) {
        console.log(i);
    }
}
// 0, 1, 2.... 1E10
```

使用generator function

```
function* generatorFoo() {
  for (var i=0; i<=1E10; i++) {
    console.log(i);
    yield i;
  }
}

const iterator = generatorFoo();
iterator.next() // 0
iterator.next() // 1
iterator.next() // 2
```

當我們呼叫 generatorFoo 時，會得到一個 iterator。
接下來每次呼叫這個 iterator 的 next 方法時，就會執行 generatorFoo，一直到出現 yield 關鍵字的地方暫停下來，直到下次呼叫 next。

### next()

next function 會返回一個物件，裡面包含著兩個 properties，

- value: 前一段中從 yield 那個位置，接到的「值」。
- done: 是個 boolean 值，表示 generator function 是否已經執行完畢。

範例：

```
function* director() {
  yield "Three";
  yield "Two";
  yield "One";
  yield "Action";
};

var action = director();

console.log(action.next()); // Object {value: "Three", done: false}
console.log(action.next()); // Object {value: "Two", done: false}
console.log(action.next()); // Object {value: "One", done: false}
console.log(action.next()); // Object {value: "Action", done: false}
console.log(action.next()); // Object {value: undefined, done: true}
```

```
function* eachItem(array) {
  for(var i=0; i < array.length; i++) {
    yield array[i]
  }
};

var letters = eachItem(['a', 'b', 'c', 'd', 'e', 'f', 'g']);

var abcs = setInterval(function(){
  var letter = letters.next();
  if(letter.done){
    clearInterval(abcs);
    console.log("Now I know my ABC's");
  } else {
    console.log(letter.value);
  }
}, 500);
```


參考：[淺入淺出 Generator Function](https://denny.qollie.com/2016/05/08/es6-generator-func/)