function foo(message: string) {
  console.log(message.length);
}

// foo(123); // 类型 “number” 的参数不能赋给类型 “string” 的参数
foo('123');
