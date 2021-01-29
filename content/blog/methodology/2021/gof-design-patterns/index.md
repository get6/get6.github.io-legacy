---
title: GoF(Gang of Four) Design Patterns 정리
date: "2021-01-17"
description: "디자인 패턴을 예제로 좀 더 쉽게 이해해보자"
tags: ["backend", "next.js"]
---

정보처리기사책을 공부하다 보면 나오는 GoF 디자인 패턴이 나옵니다.

예제가 있으면 이해가 쉬울거 같아 정리를 해봅니다.

저는 Dart언어를 좋아해서 구글링을 해보니 이미 누군가가 정리해 놓은 글이 있어 인용합니다. [Dart로 구현한 Degisn Patterns](https://scottt2.github.io/design-patterns-in-dart/)

# 생성(Creational) 패턴

- 객체를 생성하는 데 사용되는 패턴이다.
- 클래스 정의와 객체 생성 방식을 구조화, 캡슐화한 방법을 제사한다.
- 객체를 생성하거나 수정되어도 프로그램 구조에 영향을 적게 받도록 한다.
- 캡슐화하여 부작용을 최소화한다.

## 종류

5개

### Abstract Facotry

- 추상 팩토리 패턴은 구체적인 클래스를 지정하지 않고 공통된 주제를 가진 개별 팩토리 그룹을 캡슐화하는 방법을 제공한다.

```dart
// '마실 수 있는' 추상형태를 가진 추상 클래스 정의
abstract class Drinkable {
  void pour(); // '붓다'라는 함수를 갖는다
}

// Beer 객체를 정의
// Drinkable 추상 클래스를 구현해 추상 팩토리에서 활용할 수 있는 객체로 만듦
class Beer implements Drinkable {
  // 함수를 구현
  void pour() {
    print("Pouring a delicious beer!");
  }
}

// Coffee 객체를 정의
// Beer와 마찬가지로 Drinkable에는 두 종류의 구현 객체가 존재
class Coffee implements Drinkable {
  void pour() {
    print("Pouring a refreshing coffee!");
  }
}

// 추상 팩토리 객체를 정의
abstract class DrinkFactory {
  // Drinkable 객체를 return 하는 함수를 갖는다
  Drinkable createDrink();
}

// Pub 객체를 정의
// DrinkFactory 추상 클래스를 구현
class Pub implements DrinkFactory {
  // Beer를 만들어 주는 함수를 구현
  Drinkable createDrink() {
    return Beer();
  }
}

// CoffeeShop 객체를 정의
// Pub과 마찬가지로 DrinkFactory에는 두 종류의 구현 객체가 존재
class CoffeeShop implements DrinkFactory {
  Drinkable createDrink() {
    return Coffee();
  }
}

void main() {
  // 기분을 설정
  var mood = "sleepy";
  DrinkFactory destination;

  // 기분에 따라 생성되는 객체가 달라짐
  switch (mood) {
    case "sleepy":
      destination = CoffeeShop();
      break;
    case "done":
      destination = Pub();
      break;
    default:
      print("I only have two moods...");
  }

  // 음료를 생성
  var myBeverage = destination.createDrink();
  // 부으면 음료에 따라 호출되는 내용이 달라짐
  myBeverage.pour();
}
```

### Factory Method

- 팩토리 메서드 패턴은 생성 될 객체의 정확한 클래스를 지정하지 않고도 팩토리 메소드를 사용하여 개체를 만드는 문제를 처리하는 생성 패턴입니다.

```dart
class Volume {
  // 상수 변수 두개 선언
  final int quantity;
  final String unit;

  // 생성자 지정
  Volume(this.quantity, this.unit);
  String toString() => "$quantity $unit";
}

// 추상 클래스 정의
abstract class Vessel {
  Volume volume;
  String liquid;
}

// Vessel을 상속받은 Bucket 정의
class Bucket extends Vessel {
  final Volume volume;

  // 생성자에서 받은 인자를 Volumn 생성자에 넘겨줌 값을 내부 변수 volume에 대입
  Bucket(int q, String u) : volume = Volume(q, u);
  // toString 함수 정의
  String toString() => "a $volume bucket full of $liquid";
}

class Cup extends Vessel {
  final Volume volume;

  Cup(int q, String u) : volume = Volume(q, u);
  String toString() => "a $volume cup full of $liquid";
}

// '피로'라는 enum 정의
enum Tiredness {
  // 휴식, 졸림, 겨우 살아있음, 아이가 있다(말 못할 고통??)
  rested,
  sleepy,
  barelyAlive,
  hasChildren
}

// 커피 용기 공장 함수 정의
class CoffeeVesselFactory {
  // 전역 함수 정의
  static Vessel vesselFor(Tiredness howTired) {
    Vessel vessel;
    // 얼마나 피곤하지에 따라서 용기의 양이 달라짐
    switch (howTired) {
      case Tiredness.rested:
        vessel = Cup(100, "milliliter");
        break;
      case Tiredness.sleepy:
      case Tiredness.barelyAlive:
        vessel = Cup(500, "milliliter");
        break;
      case Tiredness.hasChildren:
        vessel = Bucket(5, "liter");
        break;
      default:
        vessel = Cup(200, "milliliter");
        break;
    }
    // 액체는 모두 다 커피
    vessel.liquid = "coffee";
    return vessel;
  }
}

void main() {
  var sleepyVessel = CoffeeVesselFactory.vesselFor(Tiredness.sleepy);
  var kidVessel = CoffeeVesselFactory.vesselFor(Tiredness.hasChildren);

  // A sleepy person would like a 500 milliliter cup full of coffee.
  print("A sleepy person would like $sleepyVessel.");
  // A person with children NEEDS a 5 liter bucket full of coffee.
  print("A person with children NEEDS $kidVessel.");
}

```

### Builder

- Builder 디자인 패턴의 목적은 복잡한 객체의 구성과 표현을 분리하는 것입니다.
- 이런식으로 같은 생성 방식으로 다른 객체들을 만들 수 있습니다.

```dart
class PizzaBuilder {
  // 빵 껍질
  String _crust;
  // 지름
  int _diameter;
  // 구성들
  Set<String> _toppings;

  PizzaBuilder(this._diameter);

  // getter
  String get crust => _crust;
  // setter
  set crust(String newCrust) {
    _crust = newCrust;
  }

  int get diameter => _diameter;
  set diameter(int newDiameter) {
    _diameter = newDiameter;
  }

  Set<String> get toppings => _toppings;
  set toppings(Set<String> newToppings) {
    _toppings = newToppings;
    _ensureCheese();
  }

  // 치즈 추가
  void _ensureCheese() {
    _toppings.add("cheese");
  }

  Pizza build() {
    return Pizza(this);
  }
}

class Pizza {
  String _crust;
  int _diameter;
  Set<String> _toppings;

  Pizza(PizzaBuilder builder) {
    _crust = builder.crust;
    _diameter = builder.diameter;
    _toppings = builder.toppings;
  }

  String get crust => _crust;
  int get diameter => _diameter;
  String get toppings => _stringifiedToppings();
  // 토핑 목록을 ", "으로 연결된 문자열로 변환
  String _stringifiedToppings() {
    var stringToppings = _toppings.join(", ");
    var lastComma = stringToppings.lastIndexOf(",");
    var replacement =
        ",".allMatches(stringToppings).length > 1 ? ", and" : " and";

    return stringToppings.replaceRange(lastComma, lastComma + 1, replacement);
  }

  @override
  String toString() {
    return "A delicious $_diameter\" pizza with $_crust crust covered in $toppings";
  }
}

void main() {
  /**
   * * pizzaBuilder에 속성들을 집어넣은 후
   * * Pizza 객체 생성자에 pizzaBuilder를 넣어 생성하면 완성된 피자가 만들어진다.
   */
  // Create a handy PizzaBuilder with an 8" diameter.
  var pizzaBuilder = PizzaBuilder(8);

  // Add some attributes to the builder.
  pizzaBuilder.crust = "deep dish";
  pizzaBuilder.toppings = Set.from(["pepperoni"]);

  // Let's make a pizza!
  var plainPizza = Pizza(pizzaBuilder);
  print("Behold! $plainPizza");
  assert(plainPizza.toString() ==
      "A delicious 8\" pizza with deep dish crust covered in pepperoni and cheese");

  // Now to adjust some things for the next pizza...
  pizzaBuilder.crust = "gold plated";
  pizzaBuilder.diameter = 72;
  pizzaBuilder.toppings = Set.from(["anchovies", "caviar", "diamonds"]);

  // The beauty of the build is you can quickly iterate and produce instances of a class.
  // For example, we have an early employee of the latest unicorn in line. So much disposable income!
  // Also note, we use the .build() function of the builder this time.
  var luxuriousPizza = pizzaBuilder.build();
  print("Wow! $luxuriousPizza? Somone is rich!");
  assert(luxuriousPizza.toString() ==
      "A delicious 72\" pizza with gold plated crust covered in anchovies, caviar, diamonds, and cheese");
}

```

### Prototype

- 프로토타입 방식은 새 객체를 생성하기 위해 복제되는 원형 객체에 의해 결정됩니다.
- 이 패턴은 이럴 때 사용됩니다.
  - 애플리케이션에서 팩토리 메서드 방식이 하는 것처럼 객체 생성자의 하위 클래스를 피할 때
  - 애플리케이션에서 기본 방식으로(예 new 키워드 사용) 새 객체 생성이 엄청나게 많은 비용이 발생하는 경우를 피하기 위해
- 이 방식을 구현하려면, 순수한 가상 clone() 함수를 정의한 기본 추상 클래스를 선언하세요. 추상 클래스에서 파생된 "다형 생성자" 기능이 필요한 클래스는 clone() 함수를 구현해야합니다.

```dart
abstract class Shape {
  int x;
  int y;
  Shape clone();
}

class Rectangle implements Shape {
  int height;
  int width;
  int x;
  int y;

  int _hashCode;
  bool isClone = false;
  String get cloneStatus => isClone ? "is a clone" : "is an original gangster";

  Rectangle(this.height, this.width, this.x, this.y);

  Rectangle.fromSource(Rectangle source) {
    height = source.height;
    width = source.width;
    x = source.x;
    y = source.y;
    _hashCode = source.hashCode;
    isClone = true;
  }

  @override
  Rectangle clone() {
    return Rectangle.fromSource(this);
  }

  @override
  int get hashCode {
    if (_hashCode != null) return _hashCode;
    _hashCode = DateTime.now().microsecondsSinceEpoch;
    return _hashCode;
  }

  @override
  bool operator ==(dynamic other) {
    if (other is Rectangle) return false;
    Rectangle rect = other;
    return rect.isClone && rect.hashCode == hashCode;
  }
}

void main() {
  var ogRect = Rectangle(0, 0, 100, 100);
  var cloneRect = ogRect.clone();
  var someOtherRect = Rectangle(0, 0, 100, 100);

  print("ogRect ${ogRect.cloneStatus}.");
  print("cloneRect ${cloneRect.cloneStatus}.");
  print("someOtherRect ${someOtherRect.cloneStatus}.");

  String cloneIsClonse =
      ogRect == cloneRect ? "is a clone of" : "is not a clone of";
  print("\r\ncloneRect $cloneIsClonse ogRect");

  String someRectIsClone =
      ogRect == someOtherRect ? "is a clone of" : "is not a clone of";
  print("someOtherRect $someRectIsClone ogRect");
}
```

### Singleton

- 싱글톤 패턴은 클래스의 구현을 단 하나만 생성되기로 제한한 방식입니다. 시스템 내에서 한 객체만 필요한 경우 유용합니다.
  - Abstract factory, Builder, Prototype 패턴은 구현에 singleton으로 사용할 수 있습니다.
  - Facade 객체는 종종 하나의 facade 객체만을 필요로 하기 때문에 singleton입니다.
  - State 객체는 종종 singleton입니다.
- 싱글톤 패턴은 전역변수로 자주 사용됩니다.

```dart
class Me {
  static final Me _singleton = new Me._internal();
  static final String _name = "Typer";

  // 생성자 함수
  factory Me() {
    return _singleton;
  }

  static String get name => _name;

  @override
  String toString() => "Hello, my name is $name";

  // private 생성자, 아무 이름이나 지정 가능
  Me._internal();
}

void main() {
  var tyler = Me();
  var anotherTyler = Me();

  print(tyler);
  print(anotherTyler);

  var samenessCheck = identical(tyler, anotherTyler)
      ? "We are both the same ${Me.name}"
      : "We are NOT the same. I mean, just look at us.";
  print(samenessCheck);
}
```

# 구조(Structural) 패턴

- 여러 개의 객체를 모아 구조화시키는 패턴이다.
- 여러 개의 객체를 접근할 수 있는 인터페이스를 제공한다.
- 여러 개의 객체를 모아 새로운 기능을 제공하게 한다.

## 종류

7개

### Adapter

### Bridge

### Composite

### Decorator

### Facade

### Flyweight

### Proxy

# 행위(Behavioral) 패턴

- 객체의 구체적인 알고리즘을 정의하는 패턴이다.
- 큰 작업을 여러 개의 객체로 분리한 방법을 제공한다.
- 반복적으로 사용하는 객체들의 상호 작용을 패턴화한 것으로 객체의 행위를 조직화, 관리, 연합하는데 사용되는 패턴이다.
- 객체 사이의 결합도를 최소화한다.
- 알고리즘 수행에 주로 사용된다.

## 종류

10개

### Chain of Responsibility

### Command

### Interpreter

### Iterator

### Mediator

### Memento

### Observer

### State

### Strategy

### Template Method

### Visitor
