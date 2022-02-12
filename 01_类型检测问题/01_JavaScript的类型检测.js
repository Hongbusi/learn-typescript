function foo(message) {
  console.log(message.length);
}

foo('Hello World');

foo(); // TypeError: Cannot read property 'length' of undefined

// 永远执行不到
console.log('渲染界面成千上万行的 js 代码需要执行，去渲染界面');
