// 让一个参数本身是可选的
// 一个参数是一个可选类型的时候，它其实类似于是这个参数是 类型 ｜ undefined 的联合类型

function foo(message?: string) {
  console.log(message);
}

foo('123');
