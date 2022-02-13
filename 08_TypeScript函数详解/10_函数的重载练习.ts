// 实现方式一：联合类型
function getLength(args: string | any[]) {
  return args.length
}

console.log(getLength('abc'))
console.log(getLength([1, 2, 3]))

// 实现方式二：函数重载实现
// function getLength(args: string): number
// function getLength(args: any[]): number

// function getLength(args: any): number {
//   return args.length
// }
