interface ISwim {
  swimming: () => void
}

interface IEat {
  eating: () => void
}

const a: ISwim = {
  swimming() {

  }
}

// 类实现接口
class Animal {

}

// 继承：只能实现单继承
// 实现：实现接口，类可以实现多个接口
class Fish extends Animal implements ISwim, IEat {
  swimming() {

  }

  eating() {

  }
}

class Person implements ISwim {
  swimming() {}
}

// 编写一些公共的 API：面向接口编程
function swimAction(swimable: ISwim) {
  swimable.swimming()
}

swimAction(new Fish())

swimAction({ swimming: function() {} })
