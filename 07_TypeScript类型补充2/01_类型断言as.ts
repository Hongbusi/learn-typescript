// 类型断言 as
// const el = document.getElementById('hbs') as HTMLImageElement;
// el.src = 'url';

// 另外的案例：Person 是 Student 的父类
class Person {

}

class Student extends Person {
  studying() {

  }
}

function sayHello(p: Person) {
  (p as Student).studying();
}

const stu = new Student();
sayHello(stu);

// 3. 了解：as any/unknown
const message = 'Hello world';
const num: number = (message as unknown) as number;
