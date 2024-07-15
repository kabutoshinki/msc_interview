# Custom FizzBuzz

## Description

This repository contains two implementations of FizzBuzz in JavaScript: a basic function and a scalable object-oriented approach using class.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kabutoshinki/msc_interview.git
   cd part_1_programming_fundamentals
   cd problem_1_custom_fizz_buzz
   ```

## Usage

To run the application, use the following command:

```bash
node solution.js
```

## Approach Explanation

- 1. Function-based Approach (customFizzBuzz(x, y))

```bash
function customFizzBuzz(x, y) {
  for (let i = 1; i <= 100; i++) {
    if (i % x === 0 && i % y === 0) {
      console.log("FooBar");
    } else if (i % x === 0) {
      console.log("Foo");
    } else if (i % y === 0) {
      console.log("Bar");
    } else {
      console.log(i);
    }
  }
}
```

#### Explanation:

- Parameters: x and y are the divisors you want to check against each number from 1 to 100.
- Loop: Iterates from 1 to 100 (for (let i = 1; i <= 100; i++)).
  \*Conditions:
  - Checks if i is divisible by both x and y. If true, prints "FooBar"
  - Checks if i is divisible by x only. If true, prints "Foo".
  - Checks if i is divisible by y only. If true, prints "Bar".
  - If none of the above conditions are true, prints the number i.

* 2.  Class-based Approach (CustomFizzBuzz)

```bash
class CustomFizzBuzz {
 constructor(n, rules) {
   this.n = n;
   this.rules = rules;
 }
 addRule(rule) {
   this.rules.push(rule);
 }
 run() {
   for (let i = 1; i <= this.n; i++) {
     let output = "";
     for (const rule of this.rules) {
       if (i % rule.divide === 0) {
         output += rule.message;
       }
     }
     console.log(output || i);
   }
 }
}
```

#### Explanation:

- Constructor (constructor(n, rules)):
  - Initializes this.n as the range of numbers (from 1 to n).
  - this.rules is an array that stores custom rules (objects with divide and message properties).
- Method (addRule(rule)):
  - Allows adding custom rules dynamically to this.rules array.
- Method (run()):
  - Iterates from 1 to this.n.
  - Checks each number against all rules in this.rules.
  - Constructs an output string based on rules that match the current number.
  - Prints either the constructed output or the number itself if no rules match.

## Adding Custom Rules

You can add custom rules to the class-based implementation by modifying index.js:

```bash
const gameFooBar = new CustomFizzBuzz(100, [
  {
    divide: 3,
    message: "Foo",
  },
  {
    divide: 5,
    message: "Bar",
  },
]);

gameFooBar.run();

gameFooBar.addRule({
  divide: 4,
  message: "China",
});

gameFooBar.run();
```

## Result

### function customFizzBuzz

```bash
1
2
Foo
4
Bar
...
14
FooBar
16
...

```

### class CustomFizzBuzz

```bash
1
2
Foo
China
Bar
Foo
...
58
59
FooBarChina
61
62
Foo
China
...
Foo
94
Bar
FooChina
97
98
Foo
BarChina
```
