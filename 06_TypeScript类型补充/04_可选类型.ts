function printPoint(point: { x: number, y: number, z?: number }) {
  console.log(point.x);
  console.log(point.y);
  console.log(point.z);
}

printPoint({ x: 123, y: 123 });
printPoint({ x: 123, y: 123, z: 123 });
