// never 表示永远不会发生值的类型，比如一个函数：
//   - 如果一个函数中是一个死循环或者抛出一个异常，那么这个函数回返回东西吗？
//   - 不会，那么写 void 类型或者其他类型作为返回值类型都不合适，我们就可以使用 never 类型；

function foo(): never {
  // 死循环
  while(true) {

  }
}

function bar(): never {
  throw new Error();
}

// 应用场景
function handleMessage(message: string | number | boolean) {
  switch (typeof message) {
    case 'string':
      console.log('string');
      break;
    case 'number':
      console.log('number');
      break;
    default:
      const check: never = message;
  }
}

handleMessage('abc');
handleMessage(123);

// 张三
handleMessage(true);
