# ES6 Classes

## ES6 class syntax

ES6 引入了類別 (classes) 作為 JavaScript 現有 prototype-based 繼承的語法糖。

### 類別宣告 (class declaration)

類別宣告和函數宣告不同，必須先宣告才能呼叫。使用關鍵字 class 搭配類別名稱:

```
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

建構子(constructor)方法是一個特別的方法，用來建立和初始化一個類別的物件，一個類別只能有一個名為 "constructor" 的特別方法。


### 類別敘述 (class expressions)

另一種定義類別的方法是類別敘述，可以有名稱或無名稱：

```
// unnamed
var Polygon = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// named
var Polygon = class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

Class 範例：

```
class Vehicle {
  constructor(description, wheels) {
    this.description = description;
    this.wheels = wheels;
  }

  describeYourself() {
    console.log(`I am a ${this.description} with ${this.wheels} wheels`)
  }
};

var coolSkiVan = new Vehicle('New Ski van', 4);
coolSkiVan.describeYourself();
```

參考： [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes)

## Class inheritance

關鍵字 extends 是用來在類別宣告或是類別敘述中建立子類別的方法。

```
class semiTruck extends Vehicle {
  constructor() {
    super("semi truck", 18)
  }
};

var groceryStoreSemi = new semiTruck();
groceryStoreSemi.describeYourself();
```

## Creating React.js components with ES6 classes


```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="https://unpkg.com/react@latest/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@latest/dist/react-dom.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">

      class Restaurant extends React.Component {
        render() {
          return (
              <h1>{this.props.name}</h1>
          )
        }
      }

      ReactDOM.render(<Restaurant name="Beatnik Cafe"></Restaurant>, document.getElementById('root'));

    </script>
  </body>
</html>

```

## Handling state with ES6 and React.js

```
class Restaurant extends React.Component {
  constructor() {
    super();
    this.state = {
      status: "not open"
    };
    this.openRestaurant = this.openRestaurant.bind(this);
    this.closeRestaurant = this.closeRestaurant.bind(this);
  }
  openRestaurant(){
    this.setState({
      status: "open"
    })
  }
  closeRestaurant(){
    this.setState({
      status: "not open"
    })
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>The Restaurant is {this.state.status}</p>
        <button onClick={this.openRestaurant}>Open Restaurant</button>
        <button onClick={this.closeRestaurant}>Close Restaurant</button>
      </div>
    )
  }
}
```

