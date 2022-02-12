function printId(id: number | string) {
  // 使用联合类型的值时，需要特别小心
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  }
  console.log(id);
}

printId(123);
printId('123');
