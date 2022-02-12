// 当进行一些类型断言 as any
// 在不想给某些 js 添加具体的数据类型时（原生 js 代码是一样的）
let message: any = 'Hello World';

message = 132;
message = true;
message = {};

console.log(message);

const arr: any[] = [];
