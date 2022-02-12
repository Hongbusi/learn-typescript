// void 通常用来指定一个函数是没有返回值的，那么它的返回值就是 void 类型
// 我可以可以将 null 和 undefined 赋值给 void 类型，也就是函数可以返回 null 或者 undefined

function sum(num1: number, num2: number): void {
  console.log(num1 + num2);
}

sum(20, 30);
// sum('abc', 'css');
