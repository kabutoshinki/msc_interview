//Complexity O(n)
// Space O(1)
function customFizzBuzz(x, y) {
  for (i = 1; i <= 100; i++) {
    if (i % x == 0 && i % y == 0) {
      console.log("FooBar");
    } else if (i % x == 0) {
      console.log("Foo");
    } else if (i % y == 0) {
      console.log("Bar");
    } else {
      console.log(i);
    }
  }
}

// scale of solution customFizzBuzz
// Complexity O(n*m)
// Space O(1)
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

customFizzBuzz(3, 5);
