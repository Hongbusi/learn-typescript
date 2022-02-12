function foo() {
  return 'abc';
}

function bar() {
  return 123;
}

// unknown 类型只能赋值给 any 和 unknown 类型
// any 类型可以赋值给任意类型

let flag = true;
let result: unknown; // 最好不要使用 any
if (flag) {
  result = foo();
} else {
  result = bar();
}

let message: string = result;
let num: number = result;

console.log(result);

export {}
