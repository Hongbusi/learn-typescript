// message?: -> undefined | string
function printMessage(message?: string) {
  // if (message) {
  //   console.log(message.length);
  // }

  // 非空断言
  console.log(message!.length);
}

printMessage('Hello world');
printMessage('哈哈哈');
